"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@walletconnect+environment@1.0.1";
exports.ids = ["vendor-chunks/@walletconnect+environment@1.0.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/crypto.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/crypto.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;\nfunction getBrowerCrypto() {\n    return (global === null || global === void 0 ? void 0 : global.crypto) || (global === null || global === void 0 ? void 0 : global.msCrypto) || {};\n}\nexports.getBrowerCrypto = getBrowerCrypto;\nfunction getSubtleCrypto() {\n    const browserCrypto = getBrowerCrypto();\n    return browserCrypto.subtle || browserCrypto.webkitSubtle;\n}\nexports.getSubtleCrypto = getSubtleCrypto;\nfunction isBrowserCryptoAvailable() {\n    return !!getBrowerCrypto() && !!getSubtleCrypto();\n}\nexports.isBrowserCryptoAvailable = isBrowserCryptoAvailable; //# sourceMappingURL=crypto.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrZW52aXJvbm1lbnRAMS4wLjEvbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2Vudmlyb25tZW50L2Rpc3QvY2pzL2NyeXB0by5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3REQsZ0NBQWdDLEdBQUdBLHVCQUF1QixHQUFHQSx1QkFBdUIsR0FBRyxLQUFLO0FBQzVGLFNBQVNJO0lBQ0wsT0FBTyxDQUFDQyxXQUFXLFFBQVFBLFdBQVcsS0FBSyxJQUFJLEtBQUssSUFBSUEsT0FBT0MsTUFBTSxLQUFNRCxDQUFBQSxXQUFXLFFBQVFBLFdBQVcsS0FBSyxJQUFJLEtBQUssSUFBSUEsT0FBT0UsUUFBUSxLQUFLLENBQUM7QUFDcEo7QUFDQVAsdUJBQXVCLEdBQUdJO0FBQzFCLFNBQVNEO0lBQ0wsTUFBTUssZ0JBQWdCSjtJQUN0QixPQUFPSSxjQUFjQyxNQUFNLElBQUlELGNBQWNFLFlBQVk7QUFDN0Q7QUFDQVYsdUJBQXVCLEdBQUdHO0FBQzFCLFNBQVNEO0lBQ0wsT0FBTyxDQUFDLENBQUNFLHFCQUFxQixDQUFDLENBQUNEO0FBQ3BDO0FBQ0FILGdDQUFnQyxHQUFHRSwwQkFDbkMsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21hcnQtYXVkaXQvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrZW52aXJvbm1lbnRAMS4wLjEvbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2Vudmlyb25tZW50L2Rpc3QvY2pzL2NyeXB0by5qcz8wY2QxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0Jyb3dzZXJDcnlwdG9BdmFpbGFibGUgPSBleHBvcnRzLmdldFN1YnRsZUNyeXB0byA9IGV4cG9ydHMuZ2V0QnJvd2VyQ3J5cHRvID0gdm9pZCAwO1xuZnVuY3Rpb24gZ2V0QnJvd2VyQ3J5cHRvKCkge1xuICAgIHJldHVybiAoZ2xvYmFsID09PSBudWxsIHx8IGdsb2JhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2xvYmFsLmNyeXB0bykgfHwgKGdsb2JhbCA9PT0gbnVsbCB8fCBnbG9iYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdsb2JhbC5tc0NyeXB0bykgfHwge307XG59XG5leHBvcnRzLmdldEJyb3dlckNyeXB0byA9IGdldEJyb3dlckNyeXB0bztcbmZ1bmN0aW9uIGdldFN1YnRsZUNyeXB0bygpIHtcbiAgICBjb25zdCBicm93c2VyQ3J5cHRvID0gZ2V0QnJvd2VyQ3J5cHRvKCk7XG4gICAgcmV0dXJuIGJyb3dzZXJDcnlwdG8uc3VidGxlIHx8IGJyb3dzZXJDcnlwdG8ud2Via2l0U3VidGxlO1xufVxuZXhwb3J0cy5nZXRTdWJ0bGVDcnlwdG8gPSBnZXRTdWJ0bGVDcnlwdG87XG5mdW5jdGlvbiBpc0Jyb3dzZXJDcnlwdG9BdmFpbGFibGUoKSB7XG4gICAgcmV0dXJuICEhZ2V0QnJvd2VyQ3J5cHRvKCkgJiYgISFnZXRTdWJ0bGVDcnlwdG8oKTtcbn1cbmV4cG9ydHMuaXNCcm93c2VyQ3J5cHRvQXZhaWxhYmxlID0gaXNCcm93c2VyQ3J5cHRvQXZhaWxhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3J5cHRvLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImlzQnJvd3NlckNyeXB0b0F2YWlsYWJsZSIsImdldFN1YnRsZUNyeXB0byIsImdldEJyb3dlckNyeXB0byIsImdsb2JhbCIsImNyeXB0byIsIm1zQ3J5cHRvIiwiYnJvd3NlckNyeXB0byIsInN1YnRsZSIsIndlYmtpdFN1YnRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/crypto.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/env.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/env.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.isBrowser = exports.isNode = exports.isReactNative = void 0;\nfunction isReactNative() {\n    return typeof document === \"undefined\" && typeof navigator !== \"undefined\" && navigator.product === \"ReactNative\";\n}\nexports.isReactNative = isReactNative;\nfunction isNode() {\n    return typeof process !== \"undefined\" && typeof process.versions !== \"undefined\" && typeof process.versions.node !== \"undefined\";\n}\nexports.isNode = isNode;\nfunction isBrowser() {\n    return !isReactNative() && !isNode();\n}\nexports.isBrowser = isBrowser; //# sourceMappingURL=env.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrZW52aXJvbm1lbnRAMS4wLjEvbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2Vudmlyb25tZW50L2Rpc3QvY2pzL2Vudi5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3REQsaUJBQWlCLEdBQUdBLGNBQWMsR0FBR0EscUJBQXFCLEdBQUcsS0FBSztBQUNsRSxTQUFTSTtJQUNMLE9BQVEsT0FBT0MsYUFBYSxlQUN4QixPQUFPQyxjQUFjLGVBQ3JCQSxVQUFVQyxPQUFPLEtBQUs7QUFDOUI7QUFDQVAscUJBQXFCLEdBQUdJO0FBQ3hCLFNBQVNEO0lBQ0wsT0FBUSxPQUFPSyxZQUFZLGVBQ3ZCLE9BQU9BLFFBQVFDLFFBQVEsS0FBSyxlQUM1QixPQUFPRCxRQUFRQyxRQUFRLENBQUNDLElBQUksS0FBSztBQUN6QztBQUNBVixjQUFjLEdBQUdHO0FBQ2pCLFNBQVNEO0lBQ0wsT0FBTyxDQUFDRSxtQkFBbUIsQ0FBQ0Q7QUFDaEM7QUFDQUgsaUJBQWlCLEdBQUdFLFdBQ3BCLCtCQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL3NtYXJ0LWF1ZGl0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL0B3YWxsZXRjb25uZWN0K2Vudmlyb25tZW50QDEuMC4xL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9lbnZpcm9ubWVudC9kaXN0L2Nqcy9lbnYuanM/ZDAxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNCcm93c2VyID0gZXhwb3J0cy5pc05vZGUgPSBleHBvcnRzLmlzUmVhY3ROYXRpdmUgPSB2b2lkIDA7XG5mdW5jdGlvbiBpc1JlYWN0TmF0aXZlKCkge1xuICAgIHJldHVybiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwiUmVhY3ROYXRpdmVcIik7XG59XG5leHBvcnRzLmlzUmVhY3ROYXRpdmUgPSBpc1JlYWN0TmF0aXZlO1xuZnVuY3Rpb24gaXNOb2RlKCkge1xuICAgIHJldHVybiAodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMubm9kZSAhPT0gXCJ1bmRlZmluZWRcIik7XG59XG5leHBvcnRzLmlzTm9kZSA9IGlzTm9kZTtcbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcbiAgICByZXR1cm4gIWlzUmVhY3ROYXRpdmUoKSAmJiAhaXNOb2RlKCk7XG59XG5leHBvcnRzLmlzQnJvd3NlciA9IGlzQnJvd3Nlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVudi5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJpc0Jyb3dzZXIiLCJpc05vZGUiLCJpc1JlYWN0TmF0aXZlIiwiZG9jdW1lbnQiLCJuYXZpZ2F0b3IiLCJwcm9kdWN0IiwicHJvY2VzcyIsInZlcnNpb25zIiwibm9kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/env.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/index.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/index.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js\");\ntslib_1.__exportStar(__webpack_require__(/*! ./crypto */ \"(ssr)/./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/crypto.js\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./env */ \"(ssr)/./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/env.js\"), exports); //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrZW52aXJvbm1lbnRAMS4wLjEvbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2Vudmlyb25tZW50L2Rpc3QvY2pzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLDhDQUE2QztJQUFFRyxPQUFPO0FBQUssQ0FBQyxFQUFDO0FBQzdELE1BQU1DLFVBQVVDLG1CQUFPQSxDQUFDLHNGQUFPO0FBQy9CRCxRQUFRRSxZQUFZLENBQUNELG1CQUFPQSxDQUFDLHdJQUFVLEdBQUdIO0FBQzFDRSxRQUFRRSxZQUFZLENBQUNELG1CQUFPQSxDQUFDLGtJQUFPLEdBQUdILFVBQ3ZDLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NtYXJ0LWF1ZGl0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL0B3YWxsZXRjb25uZWN0K2Vudmlyb25tZW50QDEuMC4xL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9lbnZpcm9ubWVudC9kaXN0L2Nqcy9pbmRleC5qcz84NGQ2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NyeXB0b1wiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9lbnZcIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwidHNsaWJfMSIsInJlcXVpcmUiLCJfX2V4cG9ydFN0YXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/index.js\n");

/***/ })

};
;