# pdb - NSFW!
Listing 136651 individual pornstars with 281427 aliases, based on 267600 raw entries scraped from 10 different soruces.

## Purpose
This is an attempt to combine female pornstar identities that have different names according to different sources. By using heuristics on names and aliases used, there should be a way to find similarities and therefore link duplicates together.

Sources scraped and used as of Aug 06th, 2020:
- https://www.freeones.xxx/ : 50315 entries
- https://www.indexxx.com/ : 51355 entries (+ aliases)
- https://thenude.com : 39060 entries (+ aliases)
- https://www.eurobabeindex.com/: 5118 entries (+ aliases)
- https://www.pornpics.com/ : 18950 entries
- https://www.babepedia.com/ : 29950 entries
- http://www.boobpedia.com/ : 10828 entries (pornstars only)
- https://www.adultdvdempire.com/ : 11282 entries (female only)
- https://metadataapi.net/ : 18981 entries (female only)

Added on Aug 24th & 25th
- https://www.mypornstarbook.net/ : 3678 entries
- https://www.kindgirls.com/ : 1441 entries
- http://www.pornteengirl.com : 5574 entries
- http://www.data18.com : 12438 entries
- https://www.porn-star.com/ : 8627 entries

The challenge is to create a combined list, that does not include 260k+ entries but groups as many duplictes as possible.

## Installation
Prerequisites: Git & Node.js installed
`git clone` this repo into a project directory of your choice
unzip Pornstars.combined.zip into ./src/data/
`npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Method of aggregation
...to be updated...

## Example of the combined data
In the example below, the performer is listed with the id 'adrianna-sage' (with double n) on tpdb, but as 'adriana-sage' on indexxx and freeones. In a similar way all the names and aliases are stored with the mentioning source attached. 

- 'ids' lists the unique part of urls from scraped sources. For example an id of "Adriana Sage_11565" from thenude refers to the uinque page https://www.thenude.com/Adriana%20Sage_11565.htm
- 'names' collects names and aliases used according to the different sources

```
{
	"uuid": "fdca101c-24a4-4806-b249-0483154a2692",
	"ids": {
		"Adriana Sage_11565": [
			"thenude"
		],
		"adriana-sage": [
			"indexxx",
			"freeones"
		],
		"adriana+sage": [
			"pornpics"
		],
		"Adriana_Sage": [
			"babepedia"
		],
		"/27419/adriana-sage-pornstars": [
			"adultempire"
		],
		"adrianna-sage": [
			"tpdb"
		]
	},
	"names": {
		"Adriana Sage": [
			"thenude",
			"indexxx",
			"freeones",
			"pornpics",
			"babepedia",
			"adultempire"
		],
		"Adriana": [
			"thenude",
			"indexxx",
			"freeones",
			"pornpics",
			"babepedia",
			"adultempire"
		],
		"Adrian Sage": [
			"thenude"
		],
		"Adrian": [
			"thenude"
		],
		"Adriana M": [
			"thenude"
		],
		"Adrianna": [
			"thenude",
			"indexxx",
			"tpdb"
		],
		"Adrianna Sage": [
			"thenude",
			"indexxx",
			"tpdb"
		],
		"Adrianna-sage": [
			"thenude"
		],
		"Alana": [
			"thenude"
		],
		"Alana Moreno": [
			"thenude"
		],
		"Lana": [
			"thenude"
		],
		"Maryjane": [
			"thenude",
			"ATKingdom",
			"indexxx"
		],
		"Rosa": [
			"thenude"
		]
	},
	"dataRef": {}
}
```

## Future use of the data
The data allows to search for names / aliases and get references to profile pages of numerous aggregators for identification purposes.

If individual data can be added, the grouping algorithm could be much more precise and allow for true uuids.
