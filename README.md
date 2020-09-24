# Pornstar-Lookup

NSFW !!!

Aggregating and listing 214689 individual pornstars with 411303 aliases, based on 396186 raw entries scraped from 18 different soruces.

## Purpose
This is an attempt to combine female pornstar identities that have different names according to different sources. By using heuristics on names and aliases used, there should be a way to find similarities and link duplicates together.

## Sources 

| Site 						| Merged | Index scraped | Entries scraped | Entries | Names / Aliases | Bio / Data | X-References | Remark |
| ---- 								| ---- 	| ---- 	| ---- 	| -------:	| --------:	| ---- 	| ---- 	| ---- 	|
|https://www.freeones.xxx/ 			| true 	| true 	| true	| 50,315 	| 77,919 	| true 	|  		|		|
|https://www.indexxx.com/ 			| true 	| true 	| true	| 51,525 	| 85085 	| 	 	| true 	|		|
|https://thenude.com 				| true 	| true 	| true 	| 39,060 	| 96,193 	| true 	| true 	|		|
|https://www.eurobabeindex.com/ 	| true 	| true 	| true 	| 5,118 	| 25,318 	|  		| true 	| 		|
|https://www.pornpics.com/ 			| true 	| true 	|    	| 18,950 	| 37,469 	| 		|		|		|
|https://www.babepedia.com/ 		| true 	| true 	| true	| 29,952	| 59,331	| true	| true  | 		|
|http://www.boobpedia.com/ 			| true 	| true 	| true	| 10,851 	| 29,333	| true	| true	| pornstars only|
|https://www.adultdvdempire.com/	| true 	| true 	| true	| 11,282	| 19,242	| true	|		| female only	|
|https://metadataapi.net/			| true 	| true 	|    	| 18,981	| 18,981	|		|		| female only |
|https://www.mypornstarbook.net/	| true 	| true 	|    	| 3,687		| 3,687		|		|		|		|
|https://www.kindgirls.com/			| true 	| true 	|    	| 1,441		| 1,441		|		|		|		|
|http://www.pornteengirl.com		| true 	| true 	|    	| 5,574		| 5,574		|		|		|		|
|http://www.data18.com 				| true 	| true 	|    	| 12,438	| 12,438	|		|		| female only |
|https://www.porn-star.com/			| true 	| true 	|    	| 8,627		| 8,627		|		|		|		|
|https://www.tiava.com/ 			| true 	| true 	|    	| 13,947	| 13,947	|		|		| female only |
|http://www.egafd.com/				| true 	| true 	|    	| 13,780 	| 34,063	|		|		|		|
|http://www.bgafd.co.uk/ 			| true 	| true 	|    	| 2,733 	| 6,661		|		|		|		| 
|https://www.pornhub.com/			| true 	| true 	| true	| 14,841	| 36,407	| true	| 		| female only, pornstars only |
|https://www.iafd.com/ 				| true 	| true 	| true	| 83,326	| 144,425	| true	| 		| female only with debut from 1990 on |
|https://www.europornstars.com/ 	| 		| true 	| true	| 5,549		| 11,602	| true	|		|		|
|https://www.hotmovies.com/ 		| 	 	| true 	| true	| 19,979 	| 28,315	| true	|		|		|
|http://www.adultfilmdatabase.com/ 	|	 	| true 	| true	| 7,800		| 25,906	| true	| hardly| female only |
|http://peachy18.com/ 				| 		| true 	| true	| 42,671	| 45,527	| 		| true	| 		|
| **Unmerged sum**					|		|		|		| **472,427** | **827,491** |	|		|		|


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


## Future use of the data
The data allows to search for names / aliases and get references to profile pages of numerous aggregators for identification purposes.

If individual data can be added, the grouping algorithm could be much more precise and allow for true uuids.
