"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0";
exports.ids = ["vendor-chunks/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RemoveScrollBar: () => (/* binding */ RemoveScrollBar),\n/* harmony export */   lockAttribute: () => (/* binding */ lockAttribute)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_style_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-style-singleton */ \"(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.56_react@18.2.0/node_modules/react-style-singleton/dist/es2015/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js\");\n\n\n\n\nvar Style = (0,react_style_singleton__WEBPACK_IMPORTED_MODULE_1__.styleSingleton)();\nvar lockAttribute = \"data-scroll-locked\";\n// important tip - once we measure scrollBar width and remove them\n// we could not repeat this operation\n// thus we are using style-singleton - only the first \"yet correct\" style will be applied.\nvar getStyles = function(_a, allowRelative, gapMode, important) {\n    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;\n    if (gapMode === void 0) {\n        gapMode = \"margin\";\n    }\n    return \"\\n  .\".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.noScrollbarsClassName, \" {\\n   overflow: hidden \").concat(important, \";\\n   padding-right: \").concat(gap, \"px \").concat(important, \";\\n  }\\n  body[\").concat(lockAttribute, \"] {\\n    overflow: hidden \").concat(important, \";\\n    overscroll-behavior: contain;\\n    \").concat([\n        allowRelative && \"position: relative \".concat(important, \";\"),\n        gapMode === \"margin\" && \"\\n    padding-left: \".concat(left, \"px;\\n    padding-top: \").concat(top, \"px;\\n    padding-right: \").concat(right, \"px;\\n    margin-left:0;\\n    margin-top:0;\\n    margin-right: \").concat(gap, \"px \").concat(important, \";\\n    \"),\n        gapMode === \"padding\" && \"padding-right: \".concat(gap, \"px \").concat(important, \";\")\n    ].filter(Boolean).join(\"\"), \"\\n  }\\n  \\n  .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.zeroRightClassName, \" {\\n    right: \").concat(gap, \"px \").concat(important, \";\\n  }\\n  \\n  .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.fullWidthClassName, \" {\\n    margin-right: \").concat(gap, \"px \").concat(important, \";\\n  }\\n  \\n  .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.zeroRightClassName, \" .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.zeroRightClassName, \" {\\n    right: 0 \").concat(important, \";\\n  }\\n  \\n  .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.fullWidthClassName, \" .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.fullWidthClassName, \" {\\n    margin-right: 0 \").concat(important, \";\\n  }\\n  \\n  body[\").concat(lockAttribute, \"] {\\n    \").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.removedBarSizeVariable, \": \").concat(gap, \"px;\\n  }\\n\");\n};\n/**\n * Removes page scrollbar and blocks page scroll when mounted\n */ var RemoveScrollBar = function(props) {\n    var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? \"margin\" : _a;\n    /*\n     gap will be measured on every component mount\n     however it will be used only by the \"first\" invocation\n     due to singleton nature of <Style\n     */ var gap = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function() {\n        return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getGapWidth)(gapMode);\n    }, [\n        gapMode\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function() {\n        document.body.setAttribute(lockAttribute, \"\");\n        return function() {\n            document.body.removeAttribute(lockAttribute);\n        };\n    }, []);\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Style, {\n        styles: getStyles(gap, !noRelative, gapMode, !noImportant ? \"!important\" : \"\")\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjVfQHR5cGVzK3JlYWN0QDE4LjIuNTZfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzMjAxNS9jb21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQUN3QjtBQUM2RDtBQUM5RTtBQUN0QyxJQUFJTyxRQUFRTixxRUFBY0E7QUFDbkIsSUFBSU8sZ0JBQWdCLHFCQUFxQjtBQUNoRCxrRUFBa0U7QUFDbEUscUNBQXFDO0FBQ3JDLDBGQUEwRjtBQUMxRixJQUFJQyxZQUFZLFNBQVVDLEVBQUUsRUFBRUMsYUFBYSxFQUFFQyxPQUFPLEVBQUVDLFNBQVM7SUFDM0QsSUFBSUMsT0FBT0osR0FBR0ksSUFBSSxFQUFFQyxNQUFNTCxHQUFHSyxHQUFHLEVBQUVDLFFBQVFOLEdBQUdNLEtBQUssRUFBRUMsTUFBTVAsR0FBR08sR0FBRztJQUNoRSxJQUFJTCxZQUFZLEtBQUssR0FBRztRQUFFQSxVQUFVO0lBQVU7SUFDOUMsT0FBTyxRQUFRTSxNQUFNLENBQUNkLDZEQUFxQkEsRUFBRSw0QkFBNEJjLE1BQU0sQ0FBQ0wsV0FBVyx5QkFBeUJLLE1BQU0sQ0FBQ0QsS0FBSyxPQUFPQyxNQUFNLENBQUNMLFdBQVcsbUJBQW1CSyxNQUFNLENBQUNWLGVBQWUsOEJBQThCVSxNQUFNLENBQUNMLFdBQVcsOENBQThDSyxNQUFNLENBQUM7UUFDblNQLGlCQUFpQixzQkFBc0JPLE1BQU0sQ0FBQ0wsV0FBVztRQUN6REQsWUFBWSxZQUNSLHVCQUF1Qk0sTUFBTSxDQUFDSixNQUFNLDBCQUEwQkksTUFBTSxDQUFDSCxLQUFLLDRCQUE0QkcsTUFBTSxDQUFDRixPQUFPLGtFQUFrRUUsTUFBTSxDQUFDRCxLQUFLLE9BQU9DLE1BQU0sQ0FBQ0wsV0FBVztRQUMvTkQsWUFBWSxhQUFhLGtCQUFrQk0sTUFBTSxDQUFDRCxLQUFLLE9BQU9DLE1BQU0sQ0FBQ0wsV0FBVztLQUNuRixDQUNJTSxNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQyxLQUFLLGtCQUFrQkgsTUFBTSxDQUFDZiwwREFBa0JBLEVBQUUsbUJBQW1CZSxNQUFNLENBQUNELEtBQUssT0FBT0MsTUFBTSxDQUFDTCxXQUFXLG1CQUFtQkssTUFBTSxDQUFDaEIsMERBQWtCQSxFQUFFLDBCQUEwQmdCLE1BQU0sQ0FBQ0QsS0FBSyxPQUFPQyxNQUFNLENBQUNMLFdBQVcsbUJBQW1CSyxNQUFNLENBQUNmLDBEQUFrQkEsRUFBRSxNQUFNZSxNQUFNLENBQUNmLDBEQUFrQkEsRUFBRSxxQkFBcUJlLE1BQU0sQ0FBQ0wsV0FBVyxtQkFBbUJLLE1BQU0sQ0FBQ2hCLDBEQUFrQkEsRUFBRSxNQUFNZ0IsTUFBTSxDQUFDaEIsMERBQWtCQSxFQUFFLDRCQUE0QmdCLE1BQU0sQ0FBQ0wsV0FBVyx1QkFBdUJLLE1BQU0sQ0FBQ1YsZUFBZSxhQUFhVSxNQUFNLENBQUNiLDhEQUFzQkEsRUFBRSxNQUFNYSxNQUFNLENBQUNELEtBQUs7QUFDbmtCO0FBQ0E7O0NBRUMsR0FDTSxJQUFJSyxrQkFBa0IsU0FBVUMsS0FBSztJQUN4QyxJQUFJQyxhQUFhRCxNQUFNQyxVQUFVLEVBQUVDLGNBQWNGLE1BQU1FLFdBQVcsRUFBRWYsS0FBS2EsTUFBTVgsT0FBTyxFQUFFQSxVQUFVRixPQUFPLEtBQUssSUFBSSxXQUFXQTtJQUM3SDs7OztLQUlDLEdBQ0QsSUFBSU8sTUFBTWpCLDBDQUFhLENBQUM7UUFBYyxPQUFPTSxtREFBV0EsQ0FBQ007SUFBVSxHQUFHO1FBQUNBO0tBQVE7SUFDL0VaLDRDQUFlLENBQUM7UUFDWjRCLFNBQVNDLElBQUksQ0FBQ0MsWUFBWSxDQUFDdEIsZUFBZTtRQUMxQyxPQUFPO1lBQ0hvQixTQUFTQyxJQUFJLENBQUNFLGVBQWUsQ0FBQ3ZCO1FBQ2xDO0lBQ0osR0FBRyxFQUFFO0lBQ0wscUJBQU9SLGdEQUFtQixDQUFDTyxPQUFPO1FBQUUwQixRQUFReEIsVUFBVVEsS0FBSyxDQUFDTyxZQUFZWixTQUFTLENBQUNhLGNBQWMsZUFBZTtJQUFJO0FBQ3ZILEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1hdWRpdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhckAyLjMuNV9AdHlwZXMrcmVhY3RAMTguMi41Nl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL3JlYWN0LXJlbW92ZS1zY3JvbGwtYmFyL2Rpc3QvZXMyMDE1L2NvbXBvbmVudC5qcz8wY2RiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0eWxlU2luZ2xldG9uIH0gZnJvbSAncmVhY3Qtc3R5bGUtc2luZ2xldG9uJztcbmltcG9ydCB7IGZ1bGxXaWR0aENsYXNzTmFtZSwgemVyb1JpZ2h0Q2xhc3NOYW1lLCBub1Njcm9sbGJhcnNDbGFzc05hbWUsIHJlbW92ZWRCYXJTaXplVmFyaWFibGUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRHYXBXaWR0aCB9IGZyb20gJy4vdXRpbHMnO1xudmFyIFN0eWxlID0gc3R5bGVTaW5nbGV0b24oKTtcbmV4cG9ydCB2YXIgbG9ja0F0dHJpYnV0ZSA9ICdkYXRhLXNjcm9sbC1sb2NrZWQnO1xuLy8gaW1wb3J0YW50IHRpcCAtIG9uY2Ugd2UgbWVhc3VyZSBzY3JvbGxCYXIgd2lkdGggYW5kIHJlbW92ZSB0aGVtXG4vLyB3ZSBjb3VsZCBub3QgcmVwZWF0IHRoaXMgb3BlcmF0aW9uXG4vLyB0aHVzIHdlIGFyZSB1c2luZyBzdHlsZS1zaW5nbGV0b24gLSBvbmx5IHRoZSBmaXJzdCBcInlldCBjb3JyZWN0XCIgc3R5bGUgd2lsbCBiZSBhcHBsaWVkLlxudmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIChfYSwgYWxsb3dSZWxhdGl2ZSwgZ2FwTW9kZSwgaW1wb3J0YW50KSB7XG4gICAgdmFyIGxlZnQgPSBfYS5sZWZ0LCB0b3AgPSBfYS50b3AsIHJpZ2h0ID0gX2EucmlnaHQsIGdhcCA9IF9hLmdhcDtcbiAgICBpZiAoZ2FwTW9kZSA9PT0gdm9pZCAwKSB7IGdhcE1vZGUgPSAnbWFyZ2luJzsgfVxuICAgIHJldHVybiBcIlxcbiAgLlwiLmNvbmNhdChub1Njcm9sbGJhcnNDbGFzc05hbWUsIFwiIHtcXG4gICBvdmVyZmxvdzogaGlkZGVuIFwiKS5jb25jYXQoaW1wb3J0YW50LCBcIjtcXG4gICBwYWRkaW5nLXJpZ2h0OiBcIikuY29uY2F0KGdhcCwgXCJweCBcIikuY29uY2F0KGltcG9ydGFudCwgXCI7XFxuICB9XFxuICBib2R5W1wiKS5jb25jYXQobG9ja0F0dHJpYnV0ZSwgXCJdIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBcIikuY29uY2F0KGltcG9ydGFudCwgXCI7XFxuICAgIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XFxuICAgIFwiKS5jb25jYXQoW1xuICAgICAgICBhbGxvd1JlbGF0aXZlICYmIFwicG9zaXRpb246IHJlbGF0aXZlIFwiLmNvbmNhdChpbXBvcnRhbnQsIFwiO1wiKSxcbiAgICAgICAgZ2FwTW9kZSA9PT0gJ21hcmdpbicgJiZcbiAgICAgICAgICAgIFwiXFxuICAgIHBhZGRpbmctbGVmdDogXCIuY29uY2F0KGxlZnQsIFwicHg7XFxuICAgIHBhZGRpbmctdG9wOiBcIikuY29uY2F0KHRvcCwgXCJweDtcXG4gICAgcGFkZGluZy1yaWdodDogXCIpLmNvbmNhdChyaWdodCwgXCJweDtcXG4gICAgbWFyZ2luLWxlZnQ6MDtcXG4gICAgbWFyZ2luLXRvcDowO1xcbiAgICBtYXJnaW4tcmlnaHQ6IFwiKS5jb25jYXQoZ2FwLCBcInB4IFwiKS5jb25jYXQoaW1wb3J0YW50LCBcIjtcXG4gICAgXCIpLFxuICAgICAgICBnYXBNb2RlID09PSAncGFkZGluZycgJiYgXCJwYWRkaW5nLXJpZ2h0OiBcIi5jb25jYXQoZ2FwLCBcInB4IFwiKS5jb25jYXQoaW1wb3J0YW50LCBcIjtcIiksXG4gICAgXVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIC5qb2luKCcnKSwgXCJcXG4gIH1cXG4gIFxcbiAgLlwiKS5jb25jYXQoemVyb1JpZ2h0Q2xhc3NOYW1lLCBcIiB7XFxuICAgIHJpZ2h0OiBcIikuY29uY2F0KGdhcCwgXCJweCBcIikuY29uY2F0KGltcG9ydGFudCwgXCI7XFxuICB9XFxuICBcXG4gIC5cIikuY29uY2F0KGZ1bGxXaWR0aENsYXNzTmFtZSwgXCIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IFwiKS5jb25jYXQoZ2FwLCBcInB4IFwiKS5jb25jYXQoaW1wb3J0YW50LCBcIjtcXG4gIH1cXG4gIFxcbiAgLlwiKS5jb25jYXQoemVyb1JpZ2h0Q2xhc3NOYW1lLCBcIiAuXCIpLmNvbmNhdCh6ZXJvUmlnaHRDbGFzc05hbWUsIFwiIHtcXG4gICAgcmlnaHQ6IDAgXCIpLmNvbmNhdChpbXBvcnRhbnQsIFwiO1xcbiAgfVxcbiAgXFxuICAuXCIpLmNvbmNhdChmdWxsV2lkdGhDbGFzc05hbWUsIFwiIC5cIikuY29uY2F0KGZ1bGxXaWR0aENsYXNzTmFtZSwgXCIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAgXCIpLmNvbmNhdChpbXBvcnRhbnQsIFwiO1xcbiAgfVxcbiAgXFxuICBib2R5W1wiKS5jb25jYXQobG9ja0F0dHJpYnV0ZSwgXCJdIHtcXG4gICAgXCIpLmNvbmNhdChyZW1vdmVkQmFyU2l6ZVZhcmlhYmxlLCBcIjogXCIpLmNvbmNhdChnYXAsIFwicHg7XFxuICB9XFxuXCIpO1xufTtcbi8qKlxuICogUmVtb3ZlcyBwYWdlIHNjcm9sbGJhciBhbmQgYmxvY2tzIHBhZ2Ugc2Nyb2xsIHdoZW4gbW91bnRlZFxuICovXG5leHBvcnQgdmFyIFJlbW92ZVNjcm9sbEJhciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBub1JlbGF0aXZlID0gcHJvcHMubm9SZWxhdGl2ZSwgbm9JbXBvcnRhbnQgPSBwcm9wcy5ub0ltcG9ydGFudCwgX2EgPSBwcm9wcy5nYXBNb2RlLCBnYXBNb2RlID0gX2EgPT09IHZvaWQgMCA/ICdtYXJnaW4nIDogX2E7XG4gICAgLypcbiAgICAgZ2FwIHdpbGwgYmUgbWVhc3VyZWQgb24gZXZlcnkgY29tcG9uZW50IG1vdW50XG4gICAgIGhvd2V2ZXIgaXQgd2lsbCBiZSB1c2VkIG9ubHkgYnkgdGhlIFwiZmlyc3RcIiBpbnZvY2F0aW9uXG4gICAgIGR1ZSB0byBzaW5nbGV0b24gbmF0dXJlIG9mIDxTdHlsZVxuICAgICAqL1xuICAgIHZhciBnYXAgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEdhcFdpZHRoKGdhcE1vZGUpOyB9LCBbZ2FwTW9kZV0pO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKGxvY2tBdHRyaWJ1dGUsICcnKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKGxvY2tBdHRyaWJ1dGUpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZSwgeyBzdHlsZXM6IGdldFN0eWxlcyhnYXAsICFub1JlbGF0aXZlLCBnYXBNb2RlLCAhbm9JbXBvcnRhbnQgPyAnIWltcG9ydGFudCcgOiAnJykgfSk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVTaW5nbGV0b24iLCJmdWxsV2lkdGhDbGFzc05hbWUiLCJ6ZXJvUmlnaHRDbGFzc05hbWUiLCJub1Njcm9sbGJhcnNDbGFzc05hbWUiLCJyZW1vdmVkQmFyU2l6ZVZhcmlhYmxlIiwiZ2V0R2FwV2lkdGgiLCJTdHlsZSIsImxvY2tBdHRyaWJ1dGUiLCJnZXRTdHlsZXMiLCJfYSIsImFsbG93UmVsYXRpdmUiLCJnYXBNb2RlIiwiaW1wb3J0YW50IiwibGVmdCIsInRvcCIsInJpZ2h0IiwiZ2FwIiwiY29uY2F0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJSZW1vdmVTY3JvbGxCYXIiLCJwcm9wcyIsIm5vUmVsYXRpdmUiLCJub0ltcG9ydGFudCIsInVzZU1lbW8iLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImJvZHkiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fullWidthClassName: () => (/* binding */ fullWidthClassName),\n/* harmony export */   noScrollbarsClassName: () => (/* binding */ noScrollbarsClassName),\n/* harmony export */   removedBarSizeVariable: () => (/* binding */ removedBarSizeVariable),\n/* harmony export */   zeroRightClassName: () => (/* binding */ zeroRightClassName)\n/* harmony export */ });\nvar zeroRightClassName = \"right-scroll-bar-position\";\nvar fullWidthClassName = \"width-before-scroll-bar\";\nvar noScrollbarsClassName = \"with-scroll-bars-hidden\";\n/**\n * Name of a CSS variable containing the amount of \"hidden\" scrollbar\n * ! might be undefined ! use will fallback!\n */ var removedBarSizeVariable = \"--removed-body-scroll-bar-size\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjVfQHR5cGVzK3JlYWN0QDE4LjIuNTZfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzMjAxNS9jb25zdGFudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQUlBLHFCQUFxQiw0QkFBNEI7QUFDckQsSUFBSUMscUJBQXFCLDBCQUEwQjtBQUNuRCxJQUFJQyx3QkFBd0IsMEJBQTBCO0FBQzdEOzs7Q0FHQyxHQUNNLElBQUlDLHlCQUF5QixpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1hdWRpdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhckAyLjMuNV9AdHlwZXMrcmVhY3RAMTguMi41Nl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL3JlYWN0LXJlbW92ZS1zY3JvbGwtYmFyL2Rpc3QvZXMyMDE1L2NvbnN0YW50cy5qcz80ODAyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgemVyb1JpZ2h0Q2xhc3NOYW1lID0gJ3JpZ2h0LXNjcm9sbC1iYXItcG9zaXRpb24nO1xuZXhwb3J0IHZhciBmdWxsV2lkdGhDbGFzc05hbWUgPSAnd2lkdGgtYmVmb3JlLXNjcm9sbC1iYXInO1xuZXhwb3J0IHZhciBub1Njcm9sbGJhcnNDbGFzc05hbWUgPSAnd2l0aC1zY3JvbGwtYmFycy1oaWRkZW4nO1xuLyoqXG4gKiBOYW1lIG9mIGEgQ1NTIHZhcmlhYmxlIGNvbnRhaW5pbmcgdGhlIGFtb3VudCBvZiBcImhpZGRlblwiIHNjcm9sbGJhclxuICogISBtaWdodCBiZSB1bmRlZmluZWQgISB1c2Ugd2lsbCBmYWxsYmFjayFcbiAqL1xuZXhwb3J0IHZhciByZW1vdmVkQmFyU2l6ZVZhcmlhYmxlID0gJy0tcmVtb3ZlZC1ib2R5LXNjcm9sbC1iYXItc2l6ZSc7XG4iXSwibmFtZXMiOlsiemVyb1JpZ2h0Q2xhc3NOYW1lIiwiZnVsbFdpZHRoQ2xhc3NOYW1lIiwibm9TY3JvbGxiYXJzQ2xhc3NOYW1lIiwicmVtb3ZlZEJhclNpemVWYXJpYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/index.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/index.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RemoveScrollBar: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.RemoveScrollBar),\n/* harmony export */   fullWidthClassName: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.fullWidthClassName),\n/* harmony export */   getGapWidth: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getGapWidth),\n/* harmony export */   noScrollbarsClassName: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.noScrollbarsClassName),\n/* harmony export */   removedBarSizeVariable: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.removedBarSizeVariable),\n/* harmony export */   zeroRightClassName: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.zeroRightClassName)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js\");\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjVfQHR5cGVzK3JlYWN0QDE4LjIuNTZfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzMjAxNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEM7QUFDc0U7QUFDOUU7QUFDMEYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1hdWRpdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhckAyLjMuNV9AdHlwZXMrcmVhY3RAMTguMi41Nl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL3JlYWN0LXJlbW92ZS1zY3JvbGwtYmFyL2Rpc3QvZXMyMDE1L2luZGV4LmpzPzhmMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVtb3ZlU2Nyb2xsQmFyIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgemVyb1JpZ2h0Q2xhc3NOYW1lLCBmdWxsV2lkdGhDbGFzc05hbWUsIG5vU2Nyb2xsYmFyc0NsYXNzTmFtZSwgcmVtb3ZlZEJhclNpemVWYXJpYWJsZSB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldEdhcFdpZHRoIH0gZnJvbSAnLi91dGlscyc7XG5leHBvcnQgeyBSZW1vdmVTY3JvbGxCYXIsIHplcm9SaWdodENsYXNzTmFtZSwgZnVsbFdpZHRoQ2xhc3NOYW1lLCBub1Njcm9sbGJhcnNDbGFzc05hbWUsIHJlbW92ZWRCYXJTaXplVmFyaWFibGUsIGdldEdhcFdpZHRoLCB9O1xuIl0sIm5hbWVzIjpbIlJlbW92ZVNjcm9sbEJhciIsInplcm9SaWdodENsYXNzTmFtZSIsImZ1bGxXaWR0aENsYXNzTmFtZSIsIm5vU2Nyb2xsYmFyc0NsYXNzTmFtZSIsInJlbW92ZWRCYXJTaXplVmFyaWFibGUiLCJnZXRHYXBXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getGapWidth: () => (/* binding */ getGapWidth),\n/* harmony export */   zeroGap: () => (/* binding */ zeroGap)\n/* harmony export */ });\nvar zeroGap = {\n    left: 0,\n    top: 0,\n    right: 0,\n    gap: 0\n};\nvar parse = function(x) {\n    return parseInt(x || \"\", 10) || 0;\n};\nvar getOffset = function(gapMode) {\n    var cs = window.getComputedStyle(document.body);\n    var left = cs[gapMode === \"padding\" ? \"paddingLeft\" : \"marginLeft\"];\n    var top = cs[gapMode === \"padding\" ? \"paddingTop\" : \"marginTop\"];\n    var right = cs[gapMode === \"padding\" ? \"paddingRight\" : \"marginRight\"];\n    return [\n        parse(left),\n        parse(top),\n        parse(right)\n    ];\n};\nvar getGapWidth = function(gapMode) {\n    if (gapMode === void 0) {\n        gapMode = \"margin\";\n    }\n    if (true) {\n        return zeroGap;\n    }\n    var offsets = getOffset(gapMode);\n    var documentWidth = document.documentElement.clientWidth;\n    var windowWidth = window.innerWidth;\n    return {\n        left: offsets[0],\n        top: offsets[1],\n        right: offsets[2],\n        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjVfQHR5cGVzK3JlYWN0QDE4LjIuNTZfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzMjAxNS91dGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQUlBLFVBQVU7SUFDakJDLE1BQU07SUFDTkMsS0FBSztJQUNMQyxPQUFPO0lBQ1BDLEtBQUs7QUFDVCxFQUFFO0FBQ0YsSUFBSUMsUUFBUSxTQUFVQyxDQUFDO0lBQUksT0FBT0MsU0FBU0QsS0FBSyxJQUFJLE9BQU87QUFBRztBQUM5RCxJQUFJRSxZQUFZLFNBQVVDLE9BQU87SUFDN0IsSUFBSUMsS0FBS0MsT0FBT0MsZ0JBQWdCLENBQUNDLFNBQVNDLElBQUk7SUFDOUMsSUFBSWIsT0FBT1MsRUFBRSxDQUFDRCxZQUFZLFlBQVksZ0JBQWdCLGFBQWE7SUFDbkUsSUFBSVAsTUFBTVEsRUFBRSxDQUFDRCxZQUFZLFlBQVksZUFBZSxZQUFZO0lBQ2hFLElBQUlOLFFBQVFPLEVBQUUsQ0FBQ0QsWUFBWSxZQUFZLGlCQUFpQixjQUFjO0lBQ3RFLE9BQU87UUFBQ0osTUFBTUo7UUFBT0ksTUFBTUg7UUFBTUcsTUFBTUY7S0FBTztBQUNsRDtBQUNPLElBQUlZLGNBQWMsU0FBVU4sT0FBTztJQUN0QyxJQUFJQSxZQUFZLEtBQUssR0FBRztRQUFFQSxVQUFVO0lBQVU7SUFDOUMsSUFBSSxJQUFrQixFQUFhO1FBQy9CLE9BQU9UO0lBQ1g7SUFDQSxJQUFJZ0IsVUFBVVIsVUFBVUM7SUFDeEIsSUFBSVEsZ0JBQWdCSixTQUFTSyxlQUFlLENBQUNDLFdBQVc7SUFDeEQsSUFBSUMsY0FBY1QsT0FBT1UsVUFBVTtJQUNuQyxPQUFPO1FBQ0hwQixNQUFNZSxPQUFPLENBQUMsRUFBRTtRQUNoQmQsS0FBS2MsT0FBTyxDQUFDLEVBQUU7UUFDZmIsT0FBT2EsT0FBTyxDQUFDLEVBQUU7UUFDakJaLEtBQUtrQixLQUFLQyxHQUFHLENBQUMsR0FBR0gsY0FBY0gsZ0JBQWdCRCxPQUFPLENBQUMsRUFBRSxHQUFHQSxPQUFPLENBQUMsRUFBRTtJQUMxRTtBQUNKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1hdWRpdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhckAyLjMuNV9AdHlwZXMrcmVhY3RAMTguMi41Nl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL3JlYWN0LXJlbW92ZS1zY3JvbGwtYmFyL2Rpc3QvZXMyMDE1L3V0aWxzLmpzP2Q1ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciB6ZXJvR2FwID0ge1xuICAgIGxlZnQ6IDAsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGdhcDogMCxcbn07XG52YXIgcGFyc2UgPSBmdW5jdGlvbiAoeCkgeyByZXR1cm4gcGFyc2VJbnQoeCB8fCAnJywgMTApIHx8IDA7IH07XG52YXIgZ2V0T2Zmc2V0ID0gZnVuY3Rpb24gKGdhcE1vZGUpIHtcbiAgICB2YXIgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcbiAgICB2YXIgbGVmdCA9IGNzW2dhcE1vZGUgPT09ICdwYWRkaW5nJyA/ICdwYWRkaW5nTGVmdCcgOiAnbWFyZ2luTGVmdCddO1xuICAgIHZhciB0b3AgPSBjc1tnYXBNb2RlID09PSAncGFkZGluZycgPyAncGFkZGluZ1RvcCcgOiAnbWFyZ2luVG9wJ107XG4gICAgdmFyIHJpZ2h0ID0gY3NbZ2FwTW9kZSA9PT0gJ3BhZGRpbmcnID8gJ3BhZGRpbmdSaWdodCcgOiAnbWFyZ2luUmlnaHQnXTtcbiAgICByZXR1cm4gW3BhcnNlKGxlZnQpLCBwYXJzZSh0b3ApLCBwYXJzZShyaWdodCldO1xufTtcbmV4cG9ydCB2YXIgZ2V0R2FwV2lkdGggPSBmdW5jdGlvbiAoZ2FwTW9kZSkge1xuICAgIGlmIChnYXBNb2RlID09PSB2b2lkIDApIHsgZ2FwTW9kZSA9ICdtYXJnaW4nOyB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB6ZXJvR2FwO1xuICAgIH1cbiAgICB2YXIgb2Zmc2V0cyA9IGdldE9mZnNldChnYXBNb2RlKTtcbiAgICB2YXIgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiBvZmZzZXRzWzBdLFxuICAgICAgICB0b3A6IG9mZnNldHNbMV0sXG4gICAgICAgIHJpZ2h0OiBvZmZzZXRzWzJdLFxuICAgICAgICBnYXA6IE1hdGgubWF4KDAsIHdpbmRvd1dpZHRoIC0gZG9jdW1lbnRXaWR0aCArIG9mZnNldHNbMl0gLSBvZmZzZXRzWzBdKSxcbiAgICB9O1xufTtcbiJdLCJuYW1lcyI6WyJ6ZXJvR2FwIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiZ2FwIiwicGFyc2UiLCJ4IiwicGFyc2VJbnQiLCJnZXRPZmZzZXQiLCJnYXBNb2RlIiwiY3MiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnQiLCJib2R5IiwiZ2V0R2FwV2lkdGgiLCJvZmZzZXRzIiwiZG9jdW1lbnRXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwid2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwiTWF0aCIsIm1heCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.5_@types+react@18.2.56_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js\n");

/***/ })

};
;