# pdb - NSFW!
Listing 130,0076 individual pornstars with 292,174 aliases, based on 239,517 raw entries scraped from 10 different soruces.

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

Added on Aug 24th
- https://www.mypornstarbook.net/ : 3678 entries

The challenge is to create a combined list, that does not include 235k+ entries but groups as many duplictes as possible.

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


---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
