# Introduction

While scraping multiple datasources, I realized that the naive JSON structure I used has quite some limitations and that there could be an easier and more elegant way to flexibly model data with this level of uncertainty. To come to such a data structure, I am listing the requirements with some explanation, examples and thoughts on pros and cons compared to a simple JSON model.

Ideally this data structure is applicable not only to an actor or performer model, but could potentially be used for similar collections like scenes, websites, images, and so on. But for the following I am concentrating on the practical example of an actor data model only.

# Requirements for the data model

The following are the requirements on the data structure to store all about an actor in a consistent, robust but also flexible way


## Redundant data / Missing uniqueness
Any attribute of an actor can appear multiple times, even ids are scope, time or source specific and can appear multiple times. 

The use cases for multiple entries are 
- Values for the same key with different validity scopes, to allow listing aliases with associated webistes / studios
- Values for the same key originating from different scraping sources
- Values for the same key that changed over time, like hair color
- Multiple values for the same key, such as multiple tattoo entries
The data structure needs to be flexible enough to cover all of these use cases. 

This means, that a simple JSON object with unique keys is not suited for this purpose, unless I want to create unwieldy deeply nested structures of arrays and objects within arrays. Therefore some other kind of collection is needed. 

## Simplicity

I'd like to find a fair balance between simplicity / flexibility and modelling potential. Some type system will make sense - especially when it comes to computed values - but I don't want fully fledged schema definitions, because these tend to make future changes more difficult. 

Ideally all attributes of an object should have the same structure. This makes processing and storage easier, but most importantly doesn't require complex mental models for usage or extension of the models.

Current line of thought is having a simple array as a collection of entries. Entries are plain objects with at least a key attribute, for example: `{key:"name", value:"Kelly Bundy"}`

Storing aliases is simply adding them to an array, because aliases are nothing more than names for different scopes. For example, one website uses one name to refer to a specific actor, whereas the next website could make use of a different name. This should be tracked in parallel.
```
uuid-1 = [
    {key:"name", value:"Kelly Bundy", scope:"Married with children"}, 
    {key:"name", value:"Pumpkin", scope:"Al Bundy"} 
]
```
Default names could be marked with a special scope called "default".

## Flexibility
Entries could represent 
- simple types such as strings for text, see example for name above, or boolean values, represented only in an "value" attribute, e.g `{ key:"isAlive", value:true}`, etc
- or complex types such as birth dates or tattoo descriptions, e.g. `{ key:"biography-birthday", year:1980, month:1, day:1 }`, or `{ key:"measurement-bust", value:"34", unit:"inches"}` Side note: storing a bust size value of "34" together with a unit "inches" will allow for on the fly conversion to metric values, should this be required.
- lists of values. This is an even more complicated topic, see chapter "Lists of (predefined) values".

## Extensibility
New attributes of an Actor object are easy to implement by defining new entries with a new key, without impacting anything existing. So if I decide to add more data to any entry collection, I just need to define the new entry structure and am good to go.

Example: If at a later stage I want to store face recognition vectors, I can simply add them as entries `{ key:"appearance-face-vector", value:"...", source:"..." }`

## Metadata
Every entry could be tracked by its source, simply by adding a "source" attribute into each entry. If I get a piece of information from thenude.eu, the entry could look like `{ key:"measurement-bust", value:"34", unit:"inches", source:"thenude" }`

If needed this would also allow comments, modification date and modificator attributes.

If I wanted to implement this as JSON objects for every entry, this would result in very cumbersome objects.

## Contradicting data
Even apparently objective data can be contradicting, sometimes even it originated from a single source. For example, body measurements are often given in metric and imperial units, which will contradict strict conversions. For a given value of `"34C-24-34 / ~88-61-86"`, it is clear that 88cm does not exactly equal 34 inches.

Additionally, data such as bust size can vary over time, e.g. after a boobjob. Still both values will be correct in a sense, depending on the timeframe 

## Invalid or wrong data
The data format needs to be able to track wrong and invalid data, because simply deleting it doesn't solve the following issues:
- Your judgement of the invalidity could be wrong and you later find out that this piece of information was indeed correct.
- You want to explicitly debunk a myth by showing data as wrong of invalid
- Automation like aggregators or scrapers can at any time re-introduce this wrong piece of information.
- Within an object that in error combined two separate objects, the seemingly wrong data simply refers to a different object. This invalid data can become valid again, once it is split into a separate object.
- One pice of information was true in the past but is not any longer. Famous example would be fake breasts or hair colors. Here some metadata on the validity timeframe like "last-seen" or "lats-known-date" would be helpfull (if I want to go down that path)
  
Therefore invalidation should be a flag, not the deletion of an entry. 
Example: `{ key:"birthday", ... invalid:true }`
or `{ key:"appearance-fake-breasts", value:false, last-known-date:"yyy.mm.dd" }`

A rescan should not overwrite validity flags and attributes.

Invalidating data or marking it as wrong is essentially the same thing as putting a scope for validity on top. 

## Aggregation and Separation

Merge and split by source (or any other criteria) should be easily possible.
If I want to join entires of two actors, as I found them to be representing the same individual, I can simply merge their arrays of entries without changing anything inside.
Example:
```
uuid-1 = [ 
    {key:"name", value:"Kelly Bundy"}, 
    {key:"age", value:17} 
]
```
and
```
uuid-2 = [ 
    {key:"name", value:"Pumpkin", source:"Al"} 
]
```
can be merged into:
```
uuid-1 = [
    {key:"name", value:"Kelly Bundy"}, 
    {key:"age", value:17},
    {key:"name", value:"Pumpkin", source:"Al"} 
]
```
and the uuid-2 object deleted.

The opposite is easy as well. If I want to split an object into two separate ones, because there was an error on aggregation, I can simply select the relevant entries - maybe by filtering for a single source attribute - and move these entires into a newly created object.

## Computable data
Some values can be computed and don't need to be stored permanently. 

Examples: 
- the age of an actor, which is only determined by his/her birthday (and perhaps an optional death date)
- zodiac sign computed out of the birthday, or the 
- body mass index out of body measurements if present
  
Computed data consist out of the very same entry objects as normal data. It just needs to be tracked as "computed" to not confuse it with existing entries.

Computed data could be realized via plugins.

## Lists of (predefined) values 
The examples above only cover single values for each entry, e.g. a string or a boolean value. This works well for entries like `{key:"eye-color", value:"green"}` or distributed over several atributes: `{key:"birthday", year:1980, month:... }` but what about modelling an entry for a tattoo?

### Option 1)
For tattoos I can go the easy path by just adding a description attribute that is a free form text, or I could allow for more specific attributes that allow for detailed searches and comparisons. 
`{key: "appearance-tattoo", description:"Cherries in black and red color on upper left hip", body-location: "hip", body-orientation: "left,upper" shape: "cherries", color: "black,red", picture:"...some url...", source: "thenude"}`

Here are several attributes that would allow a list of entries, namely "color", "body-orientation", "body-location" if a tattoo stretches over several body parts, etc. In the example above I entered these as comma separated strings.

But the values could also be arrays of strings.
`{key: "appearance-tattoo", description:"Cherries in black and red color on upper left hip", body-location: ["hip"], body-orientation: ["left","upper"] shape: ["cherries"], color: ["black","red"], picture:"...some url...", source: "thenude"}`

### Option 2)
Another option would be to treat each tattoo as an independent object, where each color is an individual entry like {key:"color", value:"red"}. These independent objects would need to

a) either be referenced into the parent actor object `{key:"tattoo", reference:"...uuid of the tattoo..."}` which would require complex joining mechanisms for searches

I could imagine this to be necessary anyways, if I want to crossreference pictures to an actor

b) or values of an entry can in turn be entire entry collections
```
{key: "appearance-tattoo", source: "thenude", value:[
    {key:"description", value:"Cherries in black and red color on upper left hip" },
    {key:"color", value:"red" },
    {key:"color", value:"black" },
    {key:"body-location", value:"hip" },
    ...
]}
```

### Conclusion
I will probably need to store other objects than actors in the DB anyway, most prominently pictures, but maybe also websites, scenes, etc. Therefore I need references anyway. Then I could avoid difficulties with lists of values by treating all objects that need this as separate objects that need to be referenced.
Therefore it would be easier to define and store tattoos as separate main objects with their own uuids
However, this makes searches more difficult.

Then I would NOT need lists as attribute values.

## Searchable
Searches and queries have to be easy and fast. The proposed unified structure of {key, attributes } entries allows for filtering with Javascript array methods instead of simply accessing an object's key. Any search and any GUI needs to reflect the fact that every return value is an array with zero, one or more entries, even for unique attributes like an eye color. But this is inherent to the uncertainty and unreliability of the dat asources.

## Database storage
The whole datastore would effectively be represented as a single object with uuids as keys and the above mentioned entry collections as values. 
An entry collection is simply an array of individual entries.
An entry is a plain Javascript object with at least a "key" attribute `{key:"...", ...further attributes as needed... }`

Once the whole datastore is in memory, data handling is really easy, but I don't know how this could be done with a database as a backend, especially if the amount of data is too much to keep everything in memory.

# Proposed Actor Datamodel

## Keys:

A naming convention for keys could help staying organized. Using prefixes for example for biography data, measurements, career data and appearances could allow for grouping.

The following keys would be standard attributes derived out of scraped metadata:
- id
- name
- biography-nationality	(or country?)
- biography-origin (or heritage, background?)
- biography-birthplace (including country, city)
- biography-address
- biography-birthday
- biography-zodiac
- biography-death
- biography-description		
- biography-trivia (incl. turn ons, turn offs, interests, hobbies, trivia)
- biography-bloodgroup
- biography-relationship-status
- biography-gender
- biography-age	(outdates very fast, can be calculated from birthday)
- biography-firstsex-age
- career-start-date
- career-start-age
- career-end-date
- career-profession
- career-retired (boolean, can be calclulated from biography-career-end-date)
- career-awards
- link (links, websites, social media (or are these ids?))
- media-picture (url, copyright, comment, hotlinkable:boolean, purpose? ,type=face|body| , clothing)
- appearance-ethnicity
- appearance-body-type (can be calculated from bmi)
- appearance-hair-color         or better a single "hair" object that includes color,llength, style???
- appearance-hair-length
- appearance-hair-style
- appearance-hair-underarm
- appearance-hair-pubic
- appearance-eye-color
- appearance-breasts (natural  OR fake with date)
- appearance-tattoos (boolean value, maybe amount attribute as well)	
- appearance-tattoo (individual tattoo description) 
- appearance-piercings
- appearance-piercing
- appearance-skin-tone
- measurement-weight
- measurement-height
- measurement-bmi (number, could be calculated from weight and height)
- measurement-bust
- measurement-hip
- measurement-waist
- measurement-cupsize
- measurement-shoesize

## Example

```
uuid-1 = [
    {key: "id", value:"AJ Estrada_23961", scope: "thenude", source:"thenude"},
    {key: "id", value:"aj-estrada", scope: "pornhub", source:"thenude"},
    {key: "id", value:"perfid=ajestrada/gender=f", scope: "iafd", source:"thenude"},
    {key: "id", value:"AJ_Estrada", scope: "babepedia", source:"thenude"},
    {key: "name", value:"AJ Estrada", source: "thenude"},
    {key: "name", value:"A.J. Estrada", source: "thenude"},
    {key: "name", value:"AJay Estrada", source: "thenude"},
    {key: "biography-birthday", year:"1991", month:"01", day:"10", source: "thenude"},
    {key: "career-start-date", year:"2010", source: "thenude"},
    {key: "career-end-date", year:"2013", source: "thenude"},
    {key: "measurements-bust", value:"34", source: "thenude", unit:"inches"},
    {key: "measurements-hip", value:"23", source: "thenude", unit:"inches"},
    {key: "measurements-waist", value:"34", source: "thenude", unit:"inches"},
    {key: "measurements-cupsize", value:"B", source: "thenude", system:"european"},
    {key: "measurements-height", value:"170", source: "thenude", unit:"cm"},
    {key: "measurements-height", value:"67", source: "thenude", unit:"inches"},
    {key: "appearance-hair-color", value:"black", source: "thenude"},
    {key: "appearance-breasts-size", value:"small", source: "thenude"},
    {key: "appearance-breasts-natural", value:"true", source: "thenude"},
    {key: "biography-nationality", value:"United States", source: "thenude"},
    { key: "appearance-tattoos", value:"true", amount:"many" },
    ...
    {key: "appearance-tattoo", description:"Cherries in black and red color on upper left hip", body-location: "hip", body-orientation: "left,upper" shape: "cherries", color: "black,red", picture:"...some url...", source: "thenude"},
    ...
    {key: "media-video", value:"E270", scope:"Girls Do Porn", source: "hyd231 2020-10"},

]
```

# Comparison of JSOn data to new model
Example: Abella Danger with data from boobpedia and babepedia
## JSON
```
 ...to come...
```
Note: 
- there is no easy way to integrate validity for each entry...
- merging data requires quite some logic 
- splitting data that was merged in error is difficult
 
## Entry Collection
Data not yet harmonized, but simply copied from JSON into the new structure
```
"854893be-34cd-4cea-a257-bdf1406f6350": [
    { "key": "id", "value": "Abella_Danger_30674", "scope": "thenude", "source": "babepedia" },
    { "key": "id", "value": "Abella_Danger", "scope": "babepedia", "source": "babepedia" },
    { "key": "id", "value": "Abella_Danger", "scope": "babepedia", "source": "boobpedia" },
    { "key": "id", "value": "Abella_Danger", "scope": "boobpedia", "source": "boobpedia" },
    { "key": "id", "value": "abella_danger", "scope": "data18", "source": "boobpedia" },
    { "key": "id", "value": "Abella_Dangerthenude_30674", "scope": "thenude", "source": "boobpedia" },
    { "key": "id", "value": "abella-danger", "scope": "freeones", "source": "boobpedia" },
    { "key": "id", "value": "abella-danger", "scope": "indexxx", "source": "boobpedia" },
    { "key": "id", "value": "abellada", "scope": "eurobabeindex", "source": "boobpedia" },
    { "key": "id", "value": "bella-danger", "scope": "pornteengirl", "source": "boobpedia" },
    { "key": "id", "value": "perfid=abelladanger/gender=f", "scope": "iafd", "source": "boobpedia" },
    { "key": "name", "value": "Abella Danger", "scope": "babepedia", "source": "babepedia" },
    { "key": "name", "value": "Abella Danger", "scope": "boobpedia", "source": "boobpedia" },
    { "key": "name", "value": "Bella Danger", "scope": "babepedia", "source": "babepedia" },
    { "key": "name", "value": "Bella Danger", "scope": "boobpedia", "source": "boobpedia" },
    { "key": "appearance-body-type", "value": "Average", "source": "babepedia" },
    { "key": "appearance-breasts", "value": "Natural", "source": "boobpedia" },
    { "key": "appearance-breasts", "value": "Real/Natural", "source": "babepedia" },
    { "key": "appearance-cup-size", "value": "34C", "source": "babepedia" },
    { "key": "appearance-ethnicity", "value": "Jewish, Caucasian", "source": "boobpedia" },
    { "key": "appearance-ethnicity", "value": "Mixed-race", "source": "babepedia" },
    { "key": "appearance-eye-color", "value": "Hazel", "source": "babepedia" },
    { "key": "appearance-eye-color", "value": "Hazel", "source": "boobpedia" },
    { "key": "appearance-hair-color", "value": "Brown", "source": "babepedia" },
    { "key": "appearance-hair-color", "value": "Long, Straight, Brown", "source": "boobpedia" },
    { "key": "appearance-hair-pubic", "value": "Shaved, Hairy, partly shaved", "source": "boobpedia" }
    { "key": "appearance-hair-underarm", "value": "Shaved", "source": "boobpedia" },
    { "key": "appearance-piercings", "value": "Navel, ears.", "source": "babepedia" },
    { "key": "biography-birthday", "value": "November 19, 1995, 1995-11-19, (age 24)", "source": "boobpedia" },
    { "key": "biography-birthplace", "value": "Miami, Florida,  United States", "source": "babepedia" },
    { "key": "biography-nationality", "value": "American", "source": "boobpedia" },
    { "key": "career-duration", "value": "2014 - present", "source": "babepedia" },
    { "key": "career-profession", "value": "Porn Star", "source": "babepedia" },
    { "key": "measurement-bust-waits-hips", "value": "34C-27-39", "source": "babepedia" },
    { "key": "measurement-bust-waits-hips", "value": "34C-27-39", "source": "boobpedia" },
    { "key": "measurement-height", "value": "5 ft 4 in (1.63 m)", "source": "boobpedia" },
    { "key": "measurement-height", "value": "5'4\" (or 162 cm)", "source": "babepedia" },
    { "key": "measurement-weight", "value": "130 lb (59 kg)", "source": "boobpedia" },
    { "key": "measurement-weight", "value": "130 lbs (or 59 kg)", "source": "babepedia" },
    { "key": "media-picture", "url": "/pics/Abella%20Danger.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/pics/Abella%20Danger2.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/pics/Abella%20Danger3.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/pics/Abella%20Danger4.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/user-uploads/Abella Danger.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/user-uploads/Abella Danger10.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/user-uploads/Abella Danger11.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/user-uploads/Abella Danger12.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/user-uploads/Abella Danger13.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/user-uploads/Abella Danger14.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/user-uploads/Abella Danger15.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/user-uploads/Abella Danger2.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/user-uploads/Abella Danger3.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/user-uploads/Abella Danger4.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/user-uploads/Abella Danger5.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/user-uploads/Abella Danger6.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/user-uploads/Abella Danger7.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/user-uploads/Abella Danger8.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "/user-uploads/Abella Danger9.jpg", "source": "babepedia" },
    { "key": "media-picture", "url": "http://www.boobpedia.com/wiki/images/c/c9/Abella_Danger_01.jpg", "source": "boobpedia" }
],
```