"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@walletconnect+randombytes@1.0.3";
exports.ids = ["vendor-chunks/@walletconnect+randombytes@1.0.3"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+randombytes@1.0.3/node_modules/@walletconnect/randombytes/dist/cjs/node/index.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+randombytes@1.0.3/node_modules/@walletconnect/randombytes/dist/cjs/node/index.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.randomBytes = void 0;\nconst tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js\");\nconst crypto_1 = tslib_1.__importDefault(__webpack_require__(/*! crypto */ \"crypto\"));\nconst encoding_1 = __webpack_require__(/*! @walletconnect/encoding */ \"(ssr)/./node_modules/.pnpm/@walletconnect+encoding@1.0.2/node_modules/@walletconnect/encoding/dist/esm/index.js\");\nfunction randomBytes(length) {\n    const buf = crypto_1.default.randomBytes(length);\n    return encoding_1.bufferToArray(buf);\n}\nexports.randomBytes = randomBytes; //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmFuZG9tYnl0ZXNAMS4wLjMvbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L3JhbmRvbWJ5dGVzL2Rpc3QvY2pzL25vZGUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFDN0RELG1CQUFtQixHQUFHLEtBQUs7QUFDM0IsTUFBTUcsVUFBVUMsbUJBQU9BLENBQUMsc0ZBQU87QUFDL0IsTUFBTUMsV0FBV0YsUUFBUUcsZUFBZSxDQUFDRixtQkFBT0EsQ0FBQyxzQkFBUTtBQUN6RCxNQUFNRyxhQUFhSCxtQkFBT0EsQ0FBQyxnSkFBeUI7QUFDcEQsU0FBU0YsWUFBWU0sTUFBTTtJQUN2QixNQUFNQyxNQUFNSixTQUFTSyxPQUFPLENBQUNSLFdBQVcsQ0FBQ007SUFDekMsT0FBT0QsV0FBV0ksYUFBYSxDQUFDRjtBQUNwQztBQUNBVCxtQkFBbUIsR0FBR0UsYUFDdEIsaUNBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21hcnQtYXVkaXQvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmFuZG9tYnl0ZXNAMS4wLjMvbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L3JhbmRvbWJ5dGVzL2Rpc3QvY2pzL25vZGUvaW5kZXguanM/OTBjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmFuZG9tQnl0ZXMgPSB2b2lkIDA7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgY3J5cHRvXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY3J5cHRvXCIpKTtcbmNvbnN0IGVuY29kaW5nXzEgPSByZXF1aXJlKFwiQHdhbGxldGNvbm5lY3QvZW5jb2RpbmdcIik7XG5mdW5jdGlvbiByYW5kb21CeXRlcyhsZW5ndGgpIHtcbiAgICBjb25zdCBidWYgPSBjcnlwdG9fMS5kZWZhdWx0LnJhbmRvbUJ5dGVzKGxlbmd0aCk7XG4gICAgcmV0dXJuIGVuY29kaW5nXzEuYnVmZmVyVG9BcnJheShidWYpO1xufVxuZXhwb3J0cy5yYW5kb21CeXRlcyA9IHJhbmRvbUJ5dGVzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwicmFuZG9tQnl0ZXMiLCJ0c2xpYl8xIiwicmVxdWlyZSIsImNyeXB0b18xIiwiX19pbXBvcnREZWZhdWx0IiwiZW5jb2RpbmdfMSIsImxlbmd0aCIsImJ1ZiIsImRlZmF1bHQiLCJidWZmZXJUb0FycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+randombytes@1.0.3/node_modules/@walletconnect/randombytes/dist/cjs/node/index.js\n");

/***/ })

};
;