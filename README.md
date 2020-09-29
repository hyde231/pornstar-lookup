# Pornstar-Lookup

NSFW !!!

Aggregating and listing 214689 individual pornstars with 411303 aliases, based on 396186 raw entries scraped from 18 different soruces.

## Purpose
This is an attempt to combine female pornstar identities that have different names according to different sources. By using heuristics on names and aliases used, there should be a way to find similarities and link duplicates together.

## Sources 

| Site 						| Merged | Index scraped | Entries scraped | Entries | Names / Aliases | Bio / Data | X-References | Remark |
| ---- 								| ---- 	| ---- 	| ---- 	| -------:	| --------:	| ---- 	| ---- 	| ---- 	|
|https://www.freeones.xxx/ 			| true 	| true 	| true	| 50315 	| 77919 	| true 	|  		|		|
|https://www.indexxx.com/ 			| true 	| true 	| true	| 51525 	| 85085 	| 	 	| true 	|		|
|https://thenude.com 				| true 	| true 	| true 	| 39060 	| 96193 	| true 	| true 	|		|
|https://www.eurobabeindex.com/ 	| true 	| true 	| true 	| 5118 		| 25318 	|  		| true 	| 		|
|https://www.pornpics.com/ 			| true 	| true 	|    	| 18950 	| 37469 	| 		|		|		|
|https://www.babepedia.com/ 		| true 	| true 	| true	| 29952		| 59331		| true	| true  | 		|
|http://www.boobpedia.com/ 			| true 	| true 	| true	| 10851 	| 29333		| true	| true	| pornstars only|
|https://www.adultdvdempire.com/	| true 	| true 	| true	| 11282		| 19242		| true	|		| female only	|
|https://metadataapi.net/			| true 	| true 	|    	| 18981		| 18981		|		|		| female only |
|https://www.mypornstarbook.net/	| true 	| true 	|    	| 3687		| 3687		|		|		|		|
|https://www.kindgirls.com/			| true 	| true 	| true	| 1441		| 3182		| 		|		|		|
|http://www.pornteengirl.com		| true 	| true 	|    	| 5574		| 5574		|		|		|		|
|http://www.data18.com 				| true 	| true 	|    	| 12438		| 12438		|		|		| female only |
|https://www.porn-star.com/			| true 	| true 	|    	| 8627		| 8627		|		|		|		|
|https://www.tiava.com/ 			| true 	| true 	|    	| 13947		| 13947		|		|		| female only |
|http://www.egafd.com/				| true 	| true 	|    	| 13780 	| 34063		|		|		|		|
|http://www.bgafd.co.uk/ 			| true 	| true 	|    	| 2733 		| 6661		|		|		|		| 
|https://www.pornhub.com/			| true 	| true 	| true	| 14841		| 36407		| true	| 		| female only, pornstars only |
|https://www.iafd.com/ 				| true 	| true 	| true	| 83326		| 144425	| true	| 		| female only with debut from 1990 on |
|https://www.europornstars.com/ 	| 		| true 	| true	| 5549		| 11602		| true	|		|		|
|https://www.hotmovies.com/ 		| 	 	| true 	| true	| 19979 	| 28315		| true	|		|		|
|http://www.adultfilmdatabase.com/ 	|	 	| true 	| true	| 7800		| 25906		| true	| hardly| female only |
|http://peachy18.com/ 				| 		| true 	| true	| 42671		| 45527		| 		| true	| 		|
|https://thelordofporn.com/ 		| 		| true 	| true	| 1646		| 3874		| true	| true	| 		|
|https://findpornface.com/ 			| 		| true 	| true	| 29559		| 57435		| true	| 		| 		|
| **Unmerged sum**					|		|		|		| **503632** | **890541** |		|		|		|


The challenge is to create a combined list, that does not include 400000 entries but groups as many duplictes as possible.

## Data Browser
The [combined data](/src/data/Pornstars.combined.json) is in pure JSON format, however, a very minimalistic web app is provided to explore the data.

![screenshot](/public/screenshot.jpg)

## Installation
- Prerequisites: Git & Node.js installed
- `git clone` this repo into a project directory of your choice
- `npm install` install dependencies within that projet directory
- `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser (takes some time to load).

## Method of aggregation
...to be updated...

## Example of the combined data
In the example below, the performer is listed with the id 'adrianna-sage' (with double n) on tpdb, but as 'adriana-sage' on indexxx and freeones. In a similar way all the names and aliases are stored with the mentioning source attached. 

- 'ids' lists the unique part of urls from scraped sources. For example an id of "Adriana Sage_11565" from thenude refers to the uinque page https://www.thenude.com/Adriana%20Sage_11565.htm
- 'names' collects names and aliases used according to the different sources

```
{
	"uuid": "d830ed47-0e58-4edd-89a7-d42a0b496389",
	"ids": {
		"adriana-sage": [
			"freeones",
			"indexxx"
		],
		"Adriana_Sage": [
			"babepedia"
		],
		"adriana+sage": [
			"pornpics"
		],
		"adriana_sage": [
			"data18",
			"pornstar",
			"mypornstarbook"
		],
		"/27419/adriana-sage-pornstars": [
			"adultempire"
		],
		"adriana-sage/565": [
			"kindgirls"
		],
		"Adriana Sage_11565": [
			"thenude"
		]
	},
	"names": {
		"Adriana Sage": [
			"freeones",
			"babepedia",
			"pornpics",
			"data18",
			"adultempire",
			"pornstar",
			"mypornstarbook",
			"kindgirls",
			"indexxx",
			"thenude"
		],
		"Adriana": [
			"freeones",
			"pornpics",
			"indexxx",
			"thenude"
		],
		"Maryjane": [
			"ATKingdom",
			"indexxx",
			"thenude"
		],
		"Adrianna": [
			"indexxx",
			"thenude"
		],
		"Adrianna Sage": [
			"indexxx",
			"thenude"
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
		"Rosa": [
			"thenude"
		]
	},
	"dataRef": {}
}
```

## Todo

Other potential sources to scrape:
- https://www.dvderotik.com/en/pornostars
- http://www.babesandstars.com/
- http://www.awmdb.com/browse/starsbyletter/A/
- https://www.brdteengal.com/228/model/violla-a/
- https://www.eroticbeauties.net/model/zoey-kush/
- https://pornstarbyface.com/Girls
- https://www.elitebabes.com/top-rated-babes/page/3/
- http://www.definebabe.com/models/a/page8/
- http://albagals.com/category/i/
- https://www.worldsex.com/pornstars/sandraluberc/
- https://pornsites.xxx/pornstars/Piper-Perri


## Future use of the data
The data allows to search for names / aliases and get references to profile pages of numerous aggregators for identification purposes.

If individual data can be added, the grouping algorithm could be much more precise and allow for true uuids.
