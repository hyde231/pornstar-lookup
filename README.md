# Pornstar-Lookup

NSFW !!!

Aggregating and listing 204764 aliases individual pornstars with 395792 aliases, based on 395792 raw entries scraped from 18 different soruces.

## Purpose
This is an attempt to combine female pornstar identities that have different names according to different sources. By using heuristics on names and aliases used, there should be a way to find similarities and link duplicates together.

Sources scraped and used as of Aug, 2020:
- https://www.freeones.xxx/ : 50315 entries
- https://www.indexxx.com/ : 51355 entries (+ aliases)
- https://thenude.com : 39060 entries (+ aliases)
- https://www.eurobabeindex.com/: 5118 entries (+ aliases)
- https://www.pornpics.com/ : 18950 entries
- https://www.babepedia.com/ : 29950 entries
- http://www.boobpedia.com/ : 10828 entries (pornstars only)
- https://www.adultdvdempire.com/ : 11282 entries (female only)
- https://metadataapi.net/ : 18981 entries (female only)
- https://www.mypornstarbook.net/ : 3678 entries
- https://www.kindgirls.com/ : 1441 entries
- http://www.pornteengirl.com : 5574 entries
- http://www.data18.com : 12438 entries
- https://www.porn-star.com/ : 8627 entries
- https://www.tiava.com/ : 13947 performer (female only)
- http://www.egafd.com/ : 5572 performer
- https://www.pornhub.com/ : 14803 (female only, pornstars only)
- https://www.iafd.com/ : 83326 (female only with debut from 1990 on)

The challenge is to create a combined list, that does not include 400000 entries but groups as many duplictes as possible.

## Data Browser
The [data](/src/data/Pornstars.combined.json) is in pure JSON format, however, a very minimalistic web app is provided to explore the data.

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
- https://www.hotmovies.com/porn-star/?letter=A&subletter=all
- https://www.dvderotik.com/en/pornostars
- http://www.adultfilmdatabase.com/browse.cfm?type=actor&page=105&dsp=60&sb=name&gf=F&if=&dspas=grid
- http://www.babesandstars.com/
- http://bgafd.co.uk/actresses/index.php/index/k
- http://www.europornstar.com/a-pornstars.html
- http://www.awmdb.com/browse/starsbyletter/A/

## Future use of the data
The data allows to search for names / aliases and get references to profile pages of numerous aggregators for identification purposes.

If individual data can be added, the grouping algorithm could be much more precise and allow for true uuids.
