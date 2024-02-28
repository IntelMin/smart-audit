"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/json-rpc-random-id@1.0.1";
exports.ids = ["vendor-chunks/json-rpc-random-id@1.0.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/json-rpc-random-id@1.0.1/node_modules/json-rpc-random-id/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/json-rpc-random-id@1.0.1/node_modules/json-rpc-random-id/index.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = IdIterator;\nfunction IdIterator(opts) {\n    opts = opts || {};\n    var max = opts.max || Number.MAX_SAFE_INTEGER;\n    var idCounter = typeof opts.start !== \"undefined\" ? opts.start : Math.floor(Math.random() * max);\n    return function createRandomId() {\n        idCounter = idCounter % max;\n        return idCounter++;\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vanNvbi1ycGMtcmFuZG9tLWlkQDEuMC4xL25vZGVfbW9kdWxlcy9qc29uLXJwYy1yYW5kb20taWQvaW5kZXguanMiLCJtYXBwaW5ncyI6IjtBQUFBQSxPQUFPQyxPQUFPLEdBQUdDO0FBRWpCLFNBQVNBLFdBQVdDLElBQUk7SUFDdEJBLE9BQU9BLFFBQVEsQ0FBQztJQUNoQixJQUFJQyxNQUFNRCxLQUFLQyxHQUFHLElBQUlDLE9BQU9DLGdCQUFnQjtJQUM3QyxJQUFJQyxZQUFZLE9BQU9KLEtBQUtLLEtBQUssS0FBSyxjQUFjTCxLQUFLSyxLQUFLLEdBQUdDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLUDtJQUU1RixPQUFPLFNBQVNRO1FBQ2RMLFlBQVlBLFlBQVlIO1FBQ3hCLE9BQU9HO0lBQ1Q7QUFFRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NtYXJ0LWF1ZGl0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL2pzb24tcnBjLXJhbmRvbS1pZEAxLjAuMS9ub2RlX21vZHVsZXMvanNvbi1ycGMtcmFuZG9tLWlkL2luZGV4LmpzP2YxOGMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBJZEl0ZXJhdG9yXG5cbmZ1bmN0aW9uIElkSXRlcmF0b3Iob3B0cyl7XG4gIG9wdHMgPSBvcHRzIHx8IHt9XG4gIHZhciBtYXggPSBvcHRzLm1heCB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICB2YXIgaWRDb3VudGVyID0gdHlwZW9mIG9wdHMuc3RhcnQgIT09ICd1bmRlZmluZWQnID8gb3B0cy5zdGFydCA6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heClcblxuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUmFuZG9tSWQgKCkge1xuICAgIGlkQ291bnRlciA9IGlkQ291bnRlciAlIG1heFxuICAgIHJldHVybiBpZENvdW50ZXIrK1xuICB9XG5cbn0iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIklkSXRlcmF0b3IiLCJvcHRzIiwibWF4IiwiTnVtYmVyIiwiTUFYX1NBRkVfSU5URUdFUiIsImlkQ291bnRlciIsInN0YXJ0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY3JlYXRlUmFuZG9tSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/json-rpc-random-id@1.0.1/node_modules/json-rpc-random-id/index.js\n");

/***/ })

};
;