"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@walletconnect+safe-json@1.0.2";
exports.ids = ["vendor-chunks/@walletconnect+safe-json@1.0.2"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+safe-json@1.0.2/node_modules/@walletconnect/safe-json/dist/esm/index.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+safe-json@1.0.2/node_modules/@walletconnect/safe-json/dist/esm/index.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   safeJsonParse: () => (/* binding */ safeJsonParse),\n/* harmony export */   safeJsonStringify: () => (/* binding */ safeJsonStringify)\n/* harmony export */ });\nconst JSONStringify = (data)=>JSON.stringify(data, (_, value)=>typeof value === \"bigint\" ? value.toString() + \"n\" : value);\nconst JSONParse = (json)=>{\n    const numbersBiggerThanMaxInt = /([\\[:])?(\\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\\}\\]])/g;\n    const serializedData = json.replace(numbersBiggerThanMaxInt, '$1\"$2n\"$3');\n    return JSON.parse(serializedData, (_, value)=>{\n        const isCustomFormatBigInt = typeof value === \"string\" && value.match(/^\\d+n$/);\n        if (isCustomFormatBigInt) return BigInt(value.substring(0, value.length - 1));\n        return value;\n    });\n};\nfunction safeJsonParse(value) {\n    if (typeof value !== \"string\") {\n        throw new Error(`Cannot safe json parse value of type ${typeof value}`);\n    }\n    try {\n        return JSONParse(value);\n    } catch (_a) {\n        return value;\n    }\n}\nfunction safeJsonStringify(value) {\n    return typeof value === \"string\" ? value : JSONStringify(value) || \"\";\n} //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3Qrc2FmZS1qc29uQDEuMC4yL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9zYWZlLWpzb24vZGlzdC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxnQkFBZ0JDLENBQUFBLE9BQVFDLEtBQUtDLFNBQVMsQ0FBQ0YsTUFBTSxDQUFDRyxHQUFHQyxRQUFVLE9BQU9BLFVBQVUsV0FBV0EsTUFBTUMsUUFBUSxLQUFLLE1BQU1EO0FBQ3RILE1BQU1FLFlBQVlDLENBQUFBO0lBQ2QsTUFBTUMsMEJBQTBCO0lBQ2hDLE1BQU1DLGlCQUFpQkYsS0FBS0csT0FBTyxDQUFDRix5QkFBeUI7SUFDN0QsT0FBT1AsS0FBS1UsS0FBSyxDQUFDRixnQkFBZ0IsQ0FBQ04sR0FBR0M7UUFDbEMsTUFBTVEsdUJBQXVCLE9BQU9SLFVBQVUsWUFBWUEsTUFBTVMsS0FBSyxDQUFDO1FBQ3RFLElBQUlELHNCQUNBLE9BQU9FLE9BQU9WLE1BQU1XLFNBQVMsQ0FBQyxHQUFHWCxNQUFNWSxNQUFNLEdBQUc7UUFDcEQsT0FBT1o7SUFDWDtBQUNKO0FBQ08sU0FBU2EsY0FBY2IsS0FBSztJQUMvQixJQUFJLE9BQU9BLFVBQVUsVUFBVTtRQUMzQixNQUFNLElBQUljLE1BQU0sQ0FBQyxxQ0FBcUMsRUFBRSxPQUFPZCxNQUFNLENBQUM7SUFDMUU7SUFDQSxJQUFJO1FBQ0EsT0FBT0UsVUFBVUY7SUFDckIsRUFDQSxPQUFPZSxJQUFJO1FBQ1AsT0FBT2Y7SUFDWDtBQUNKO0FBQ08sU0FBU2dCLGtCQUFrQmhCLEtBQUs7SUFDbkMsT0FBTyxPQUFPQSxVQUFVLFdBQVdBLFFBQVFMLGNBQWNLLFVBQVU7QUFDdkUsRUFDQSxpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1hdWRpdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2FsbGV0Y29ubmVjdCtzYWZlLWpzb25AMS4wLjIvbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L3NhZmUtanNvbi9kaXN0L2VzbS9pbmRleC5qcz8xMGZjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEpTT05TdHJpbmdpZnkgPSBkYXRhID0+IEpTT04uc3RyaW5naWZ5KGRhdGEsIChfLCB2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSBcImJpZ2ludFwiID8gdmFsdWUudG9TdHJpbmcoKSArIFwiblwiIDogdmFsdWUpO1xuY29uc3QgSlNPTlBhcnNlID0ganNvbiA9PiB7XG4gICAgY29uc3QgbnVtYmVyc0JpZ2dlclRoYW5NYXhJbnQgPSAvKFtcXFs6XSk/KFxcZHsxNyx9fCg/Ols5XSg/OlsxLTldMDcxOTkyNTQ3NDA5OTF8MFsxLTldNzE5OTI1NDc0MDk5MXwwMFs4LTldMTk5MjU0NzQwOTkxfDAwN1syLTldOTkyNTQ3NDA5OTF8MDA3MTk5WzMtOV01NDc0MDk5MXwwMDcxOTkyWzYtOV00NzQwOTkxfDAwNzE5OTI1WzUtOV03NDA5OTF8MDA3MTk5MjU0WzgtOV00MDk5MXwwMDcxOTkyNTQ3WzUtOV0wOTkxfDAwNzE5OTI1NDc0WzEtOV05OTF8MDA3MTk5MjU0NzQwOTlbMi05XSkpKShbLFxcfVxcXV0pL2c7XG4gICAgY29uc3Qgc2VyaWFsaXplZERhdGEgPSBqc29uLnJlcGxhY2UobnVtYmVyc0JpZ2dlclRoYW5NYXhJbnQsIFwiJDFcXFwiJDJuXFxcIiQzXCIpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKHNlcmlhbGl6ZWREYXRhLCAoXywgdmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgaXNDdXN0b21Gb3JtYXRCaWdJbnQgPSB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUubWF0Y2goL15cXGQrbiQvKTtcbiAgICAgICAgaWYgKGlzQ3VzdG9tRm9ybWF0QmlnSW50KVxuICAgICAgICAgICAgcmV0dXJuIEJpZ0ludCh2YWx1ZS5zdWJzdHJpbmcoMCwgdmFsdWUubGVuZ3RoIC0gMSkpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHNhZmVKc29uUGFyc2UodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNhZmUganNvbiBwYXJzZSB2YWx1ZSBvZiB0eXBlICR7dHlwZW9mIHZhbHVlfWApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTlBhcnNlKHZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2FmZUpzb25TdHJpbmdpZnkodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gdmFsdWUgOiBKU09OU3RyaW5naWZ5KHZhbHVlKSB8fCBcIlwiO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbIkpTT05TdHJpbmdpZnkiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIl8iLCJ2YWx1ZSIsInRvU3RyaW5nIiwiSlNPTlBhcnNlIiwianNvbiIsIm51bWJlcnNCaWdnZXJUaGFuTWF4SW50Iiwic2VyaWFsaXplZERhdGEiLCJyZXBsYWNlIiwicGFyc2UiLCJpc0N1c3RvbUZvcm1hdEJpZ0ludCIsIm1hdGNoIiwiQmlnSW50Iiwic3Vic3RyaW5nIiwibGVuZ3RoIiwic2FmZUpzb25QYXJzZSIsIkVycm9yIiwiX2EiLCJzYWZlSnNvblN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+safe-json@1.0.2/node_modules/@walletconnect/safe-json/dist/esm/index.js\n");

/***/ })

};
;