webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js!./src/App.css":
/*!***********************************************!*\
  !*** ./node_modules/css-loader!./src/App.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n  --bg-lighter: #8CA2CF;\n  --bg-darker: #010102;\n}\n\nhtml {\n  font-size: 14px;\n  height: 100%;\n  background-color: var(--bg-lighter);\n  background-image: linear-gradient (var(--bg-lighter), var(--bg-darker));\n  background: var(--bg-lighter);\n  background: linear-gradient(var(--bg-lighter), var(--bg-darker));\n  background-attachment: fixed;\n\n}\n\nbody {\n  margin: 0;\n  color: white;\n}\n\n.app {\n  font-family: Arial, Helvetica, sans-serif;\n\n}\n\n.header {\n  height: 4em;\n  background-color: #303644;\n  padding: 0 10%;\n  display: flex;\n  align-items: center;\n  position: sticky;\n}\n\n.header-icon {\n  font-size: 2em;\n  margin: 0 .5em 0 0;\n}\n\n.header h1 {\n  margin: 0;\n  width: 80vw;\n\n}\n\n.main {\n  margin: 2rem auto;\n  max-width: 80vw;\n}\n\n.calgrid {\n  display: grid;\n  grid-template-columns: 12.5em 12.5em 12.5em 12.5em 12.5em 12.5em 12.5em;\n  grid-template-rows: 2em 12.5em 12.5em 12.5em 12.5m 12.5em;\n  grid-row-gap: 1.4rem;\n  justify-content: space-between;\n  margin: 0;\n  padding: 0;\n}\n\n.month {\n  margin: 1rem 0;\n  color: white;\n\n}\n\n.weekday {\n  color: #0D0F13;\n  padding: 0;\n  margin: 0;\n}\n\n.day {\n  /* background-color: rgba(255,255,255, 0.8); */\n  width: auto;\n  height: 10rem;\n  margin: 0;\n  padding: .3rem;\n  font-size: 1rem;\n  font-weight: bold;\n  background-color: rgba(255,255,255, 0.4);\n  color: white;\n  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, .3);\n  cursor: pointer;\n}\n\n.day-number {\n  margin: 0;\n}\n\n.event-month-view {\n  margin: .3em 0;\n  font-weight: normal;\n  font-size: .9em;\n  list-style: none;\n  padding: 0;\n\n}\n\n.single-event {\n  margin: .1em 0;\n  padding: .1em .1em ;\n  border-radius: .2em;\n  transition: background-color 0.3s ease;\n  cursor: default;\n}\n\n.single-event:hover {\n  background-color: #21252F;\n}\n\n.event-icons {\n  float: right;\n  font-size: .8em;\n  visibility: hidden;\n  transition: visibilty 0.3s ease;\n}\n\n.event-icons .icon {\n  margin: 0;\n  padding: .3em;\n  cursor: pointer;\n  border-radius: 5px;\n  width: 1.2em;\n  height: 1.2em;\n  display: inline-block;\n}\n\n.event-icons .icon:hover {\n  /* margin: 0 .2em; */\n  cursor: pointer;\n  background-color: grey;\n\n}\n\n.single-event:hover svg {\n  visibility: visible;\n}\n\n\n.submission-form {\n  color: var(--bg-darker);\n  background-color: rgba(255, 255, 255, .9);\n  height: 30vh;\n  width: 30vw;\n  position: absolute;\n  top: 30%;\n  left: 30%;\n  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, .3);\n  padding: 10px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })

})
//# sourceMappingURL=main.21600217baa69645be0a.hot-update.js.map