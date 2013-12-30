# Button widget
This widget for the [Appcelerator](http://www.appcelerator.com) Titanium Alloy MVC framework provides a view using [kosso / TiTranslucentView](https://github.com/kosso/TiTranslucentView) that mimics [rnystrom / RNFrostedSidebar](https://github.com/rnystrom/RNFrostedSidebar).

## Quick start
How to use this widget in your own project?

* [Download](https://github.com/kosso/TiTranslucentView) and install kosso's TiTranslucentView module.
* [Download](https://github.com/mdpauley/com.mdpauley.frostedsidebar/releases) the latest release of the widget.
* Copy `app/widgets/com.mdpauley.frostedsidebar` to your app's `app/widgets` folder.
* Add the widget as a dependency to your app's `app/config.json` file:
	
```javascript
"dependencies": {
	"com.mdpauley.frostedsidebar": "0.0.2"
}
```

* Require the widget in a view:

```xml
<Widget id="menu" src="com.mdpauley.frostedsidebar" />`

## Todo
* Include icons to view (Not sure of Glyphish license for paid version)
* Add callbacks and emitters