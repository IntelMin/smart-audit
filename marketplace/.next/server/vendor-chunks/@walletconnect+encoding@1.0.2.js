"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@walletconnect+encoding@1.0.2";
exports.ids = ["vendor-chunks/@walletconnect+encoding@1.0.2"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+encoding@1.0.2/node_modules/@walletconnect/encoding/dist/esm/index.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+encoding@1.0.2/node_modules/@walletconnect/encoding/dist/esm/index.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addHexPrefix: () => (/* binding */ addHexPrefix),\n/* harmony export */   arrayToBinary: () => (/* binding */ arrayToBinary),\n/* harmony export */   arrayToBuffer: () => (/* binding */ arrayToBuffer),\n/* harmony export */   arrayToHex: () => (/* binding */ arrayToHex),\n/* harmony export */   arrayToNumber: () => (/* binding */ arrayToNumber),\n/* harmony export */   arrayToUtf8: () => (/* binding */ arrayToUtf8),\n/* harmony export */   binaryToArray: () => (/* binding */ binaryToArray),\n/* harmony export */   binaryToBuffer: () => (/* binding */ binaryToBuffer),\n/* harmony export */   binaryToHex: () => (/* binding */ binaryToHex),\n/* harmony export */   binaryToNumber: () => (/* binding */ binaryToNumber),\n/* harmony export */   binaryToUtf8: () => (/* binding */ binaryToUtf8),\n/* harmony export */   bufferToArray: () => (/* binding */ bufferToArray),\n/* harmony export */   bufferToBinary: () => (/* binding */ bufferToBinary),\n/* harmony export */   bufferToHex: () => (/* binding */ bufferToHex),\n/* harmony export */   bufferToNumber: () => (/* binding */ bufferToNumber),\n/* harmony export */   bufferToUtf8: () => (/* binding */ bufferToUtf8),\n/* harmony export */   calcByteLength: () => (/* binding */ calcByteLength),\n/* harmony export */   concatArrays: () => (/* binding */ concatArrays),\n/* harmony export */   concatBuffers: () => (/* binding */ concatBuffers),\n/* harmony export */   getEncoding: () => (/* binding */ getEncoding),\n/* harmony export */   getType: () => (/* binding */ getType),\n/* harmony export */   hexToArray: () => (/* binding */ hexToArray),\n/* harmony export */   hexToBinary: () => (/* binding */ hexToBinary),\n/* harmony export */   hexToBuffer: () => (/* binding */ hexToBuffer),\n/* harmony export */   hexToNumber: () => (/* binding */ hexToNumber),\n/* harmony export */   hexToUtf8: () => (/* binding */ hexToUtf8),\n/* harmony export */   isArrayBuffer: () => (/* binding */ isArrayBuffer),\n/* harmony export */   isBinaryString: () => (/* binding */ isBinaryString),\n/* harmony export */   isBuffer: () => (/* binding */ isBuffer),\n/* harmony export */   isHexString: () => (/* binding */ isHexString),\n/* harmony export */   isTypedArray: () => (/* binding */ isTypedArray),\n/* harmony export */   numberToArray: () => (/* binding */ numberToArray),\n/* harmony export */   numberToBinary: () => (/* binding */ numberToBinary),\n/* harmony export */   numberToBuffer: () => (/* binding */ numberToBuffer),\n/* harmony export */   numberToHex: () => (/* binding */ numberToHex),\n/* harmony export */   numberToUtf8: () => (/* binding */ numberToUtf8),\n/* harmony export */   padLeft: () => (/* binding */ padLeft),\n/* harmony export */   padRight: () => (/* binding */ padRight),\n/* harmony export */   removeHexLeadingZeros: () => (/* binding */ removeHexLeadingZeros),\n/* harmony export */   removeHexPrefix: () => (/* binding */ removeHexPrefix),\n/* harmony export */   sanitizeBytes: () => (/* binding */ sanitizeBytes),\n/* harmony export */   sanitizeHex: () => (/* binding */ sanitizeHex),\n/* harmony export */   splitBytes: () => (/* binding */ splitBytes),\n/* harmony export */   swapBytes: () => (/* binding */ swapBytes),\n/* harmony export */   swapHex: () => (/* binding */ swapHex),\n/* harmony export */   trimLeft: () => (/* binding */ trimLeft),\n/* harmony export */   trimRight: () => (/* binding */ trimRight),\n/* harmony export */   utf8ToArray: () => (/* binding */ utf8ToArray),\n/* harmony export */   utf8ToBinary: () => (/* binding */ utf8ToBinary),\n/* harmony export */   utf8ToBuffer: () => (/* binding */ utf8ToBuffer),\n/* harmony export */   utf8ToHex: () => (/* binding */ utf8ToHex),\n/* harmony export */   utf8ToNumber: () => (/* binding */ utf8ToNumber)\n/* harmony export */ });\n/* harmony import */ var is_typedarray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-typedarray */ \"(ssr)/./node_modules/.pnpm/is-typedarray@1.0.0/node_modules/is-typedarray/index.js\");\n/* harmony import */ var is_typedarray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_typedarray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var typedarray_to_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typedarray-to-buffer */ \"(ssr)/./node_modules/.pnpm/typedarray-to-buffer@3.1.5/node_modules/typedarray-to-buffer/index.js\");\n/* harmony import */ var typedarray_to_buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typedarray_to_buffer__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ENC_HEX = \"hex\";\nconst ENC_UTF8 = \"utf8\";\nconst ENC_BIN = \"binary\";\nconst TYPE_BUFFER = \"buffer\";\nconst TYPE_ARRAY = \"array\";\nconst TYPE_TYPED_ARRAY = \"typed-array\";\nconst TYPE_ARRAY_BUFFER = \"array-buffer\";\nconst STRING_ZERO = \"0\";\nfunction bufferToArray(buf) {\n    return new Uint8Array(buf);\n}\nfunction bufferToHex(buf, prefixed = false) {\n    const hex = buf.toString(ENC_HEX);\n    return prefixed ? addHexPrefix(hex) : hex;\n}\nfunction bufferToUtf8(buf) {\n    return buf.toString(ENC_UTF8);\n}\nfunction bufferToNumber(buf) {\n    return buf.readUIntBE(0, buf.length);\n}\nfunction bufferToBinary(buf) {\n    return arrayToBinary(bufferToArray(buf));\n}\nfunction arrayToBuffer(arr) {\n    return typedarray_to_buffer__WEBPACK_IMPORTED_MODULE_1___default()(arr);\n}\nfunction arrayToHex(arr, prefixed = false) {\n    return bufferToHex(arrayToBuffer(arr), prefixed);\n}\nfunction arrayToUtf8(arr) {\n    return bufferToUtf8(arrayToBuffer(arr));\n}\nfunction arrayToNumber(arr) {\n    return bufferToNumber(arrayToBuffer(arr));\n}\nfunction arrayToBinary(arr) {\n    return Array.from(arr).map(numberToBinary).join(\"\");\n}\nfunction hexToBuffer(hex) {\n    return Buffer.from(removeHexPrefix(hex), ENC_HEX);\n}\nfunction hexToArray(hex) {\n    return bufferToArray(hexToBuffer(hex));\n}\nfunction hexToUtf8(hex) {\n    return bufferToUtf8(hexToBuffer(hex));\n}\nfunction hexToNumber(hex) {\n    return arrayToNumber(hexToArray(hex));\n}\nfunction hexToBinary(hex) {\n    return arrayToBinary(hexToArray(hex));\n}\nfunction utf8ToBuffer(utf8) {\n    return Buffer.from(utf8, ENC_UTF8);\n}\nfunction utf8ToArray(utf8) {\n    return bufferToArray(utf8ToBuffer(utf8));\n}\nfunction utf8ToHex(utf8, prefixed = false) {\n    return bufferToHex(utf8ToBuffer(utf8), prefixed);\n}\nfunction utf8ToNumber(utf8) {\n    const num = parseInt(utf8, 10);\n    assert(isDefined(num), \"Number can only safely store up to 53 bits\");\n    return num;\n}\nfunction utf8ToBinary(utf8) {\n    return arrayToBinary(utf8ToArray(utf8));\n}\nfunction numberToBuffer(num) {\n    return binaryToBuffer(numberToBinary(num));\n}\nfunction numberToArray(num) {\n    return binaryToArray(numberToBinary(num));\n}\nfunction numberToHex(num, prefixed) {\n    return binaryToHex(numberToBinary(num), prefixed);\n}\nfunction numberToUtf8(num) {\n    return `${num}`;\n}\nfunction numberToBinary(num) {\n    const bin = (num >>> 0).toString(2);\n    return sanitizeBytes(bin);\n}\nfunction binaryToBuffer(bin) {\n    return arrayToBuffer(binaryToArray(bin));\n}\nfunction binaryToArray(bin) {\n    return new Uint8Array(splitBytes(bin).map((x)=>parseInt(x, 2)));\n}\nfunction binaryToHex(bin, prefixed) {\n    return arrayToHex(binaryToArray(bin), prefixed);\n}\nfunction binaryToUtf8(bin) {\n    return arrayToUtf8(binaryToArray(bin));\n}\nfunction binaryToNumber(bin) {\n    return arrayToNumber(binaryToArray(bin));\n}\nfunction isBinaryString(str) {\n    if (typeof str !== \"string\" || !new RegExp(/^[01]+$/).test(str)) {\n        return false;\n    }\n    if (str.length % 8 !== 0) {\n        return false;\n    }\n    return true;\n}\nfunction isHexString(str, length) {\n    if (typeof str !== \"string\" || !str.match(/^0x[0-9A-Fa-f]*$/)) {\n        return false;\n    }\n    if (length && str.length !== 2 + 2 * length) {\n        return false;\n    }\n    return true;\n}\nfunction isBuffer(val) {\n    return Buffer.isBuffer(val);\n}\nfunction isTypedArray(val) {\n    return is_typedarray__WEBPACK_IMPORTED_MODULE_0___default().strict(val) && !isBuffer(val);\n}\nfunction isArrayBuffer(val) {\n    return !isTypedArray(val) && !isBuffer(val) && typeof val.byteLength !== \"undefined\";\n}\nfunction getType(val) {\n    if (isBuffer(val)) {\n        return TYPE_BUFFER;\n    } else if (isTypedArray(val)) {\n        return TYPE_TYPED_ARRAY;\n    } else if (isArrayBuffer(val)) {\n        return TYPE_ARRAY_BUFFER;\n    } else if (Array.isArray(val)) {\n        return TYPE_ARRAY;\n    } else {\n        return typeof val;\n    }\n}\nfunction getEncoding(str) {\n    if (isBinaryString(str)) {\n        return ENC_BIN;\n    }\n    if (isHexString(str)) {\n        return ENC_HEX;\n    }\n    return ENC_UTF8;\n}\nfunction concatBuffers(...args) {\n    const result = Buffer.concat(args);\n    return result;\n}\nfunction concatArrays(...args) {\n    let result = [];\n    args.forEach((arg)=>result = result.concat(Array.from(arg)));\n    return new Uint8Array([\n        ...result\n    ]);\n}\nfunction trimLeft(data, length) {\n    const diff = data.length - length;\n    if (diff > 0) {\n        data = data.slice(diff);\n    }\n    return data;\n}\nfunction trimRight(data, length) {\n    return data.slice(0, length);\n}\nfunction calcByteLength(length, byteSize = 8) {\n    const remainder = length % byteSize;\n    return remainder ? (length - remainder) / byteSize * byteSize + byteSize : length;\n}\nfunction splitBytes(str, byteSize = 8) {\n    const bytes = sanitizeBytes(str).match(new RegExp(`.{${byteSize}}`, \"gi\"));\n    return Array.from(bytes || []);\n}\nfunction swapBytes(str) {\n    return splitBytes(str).map(reverseString).join(\"\");\n}\nfunction swapHex(str) {\n    return binaryToHex(swapBytes(hexToBinary(str)));\n}\nfunction sanitizeBytes(str, byteSize = 8, padding = STRING_ZERO) {\n    return padLeft(str, calcByteLength(str.length, byteSize), padding);\n}\nfunction padLeft(str, length, padding = STRING_ZERO) {\n    return padString(str, length, true, padding);\n}\nfunction padRight(str, length, padding = STRING_ZERO) {\n    return padString(str, length, false, padding);\n}\nfunction removeHexPrefix(hex) {\n    return hex.replace(/^0x/, \"\");\n}\nfunction addHexPrefix(hex) {\n    return hex.startsWith(\"0x\") ? hex : `0x${hex}`;\n}\nfunction sanitizeHex(hex) {\n    hex = removeHexPrefix(hex);\n    hex = sanitizeBytes(hex, 2);\n    if (hex) {\n        hex = addHexPrefix(hex);\n    }\n    return hex;\n}\nfunction removeHexLeadingZeros(hex) {\n    const prefixed = hex.startsWith(\"0x\");\n    hex = removeHexPrefix(hex);\n    hex = hex.startsWith(STRING_ZERO) ? hex.substring(1) : hex;\n    return prefixed ? addHexPrefix(hex) : hex;\n}\nfunction isUndefined(value) {\n    return typeof value === \"undefined\";\n}\nfunction isDefined(value) {\n    return !isUndefined(value);\n}\nfunction assert(assertion, errorMessage) {\n    if (!assertion) {\n        throw new Error(errorMessage);\n    }\n}\nfunction reverseString(str) {\n    return str.split(\"\").reverse().join(\"\");\n}\nfunction padString(str, length, left, padding = STRING_ZERO) {\n    const diff = length - str.length;\n    let result = str;\n    if (diff > 0) {\n        const pad = padding.repeat(diff);\n        result = left ? pad + str : str + pad;\n    }\n    return result;\n} //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrZW5jb2RpbmdAMS4wLjIvbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2VuY29kaW5nL2Rpc3QvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ1k7QUFDdEQsTUFBTUUsVUFBVTtBQUNoQixNQUFNQyxXQUFXO0FBQ2pCLE1BQU1DLFVBQVU7QUFDaEIsTUFBTUMsY0FBYztBQUNwQixNQUFNQyxhQUFhO0FBQ25CLE1BQU1DLG1CQUFtQjtBQUN6QixNQUFNQyxvQkFBb0I7QUFDMUIsTUFBTUMsY0FBYztBQUNiLFNBQVNDLGNBQWNDLEdBQUc7SUFDN0IsT0FBTyxJQUFJQyxXQUFXRDtBQUMxQjtBQUNPLFNBQVNFLFlBQVlGLEdBQUcsRUFBRUcsV0FBVyxLQUFLO0lBQzdDLE1BQU1DLE1BQU1KLElBQUlLLFFBQVEsQ0FBQ2Q7SUFDekIsT0FBT1ksV0FBV0csYUFBYUYsT0FBT0E7QUFDMUM7QUFDTyxTQUFTRyxhQUFhUCxHQUFHO0lBQzVCLE9BQU9BLElBQUlLLFFBQVEsQ0FBQ2I7QUFDeEI7QUFDTyxTQUFTZ0IsZUFBZVIsR0FBRztJQUM5QixPQUFPQSxJQUFJUyxVQUFVLENBQUMsR0FBR1QsSUFBSVUsTUFBTTtBQUN2QztBQUNPLFNBQVNDLGVBQWVYLEdBQUc7SUFDOUIsT0FBT1ksY0FBY2IsY0FBY0M7QUFDdkM7QUFDTyxTQUFTYSxjQUFjQyxHQUFHO0lBQzdCLE9BQU94QiwyREFBa0JBLENBQUN3QjtBQUM5QjtBQUNPLFNBQVNDLFdBQVdELEdBQUcsRUFBRVgsV0FBVyxLQUFLO0lBQzVDLE9BQU9ELFlBQVlXLGNBQWNDLE1BQU1YO0FBQzNDO0FBQ08sU0FBU2EsWUFBWUYsR0FBRztJQUMzQixPQUFPUCxhQUFhTSxjQUFjQztBQUN0QztBQUNPLFNBQVNHLGNBQWNILEdB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YixJQUFJdUIsT0FBTyxHQUFHO1FBQ1YsTUFBTTJCLE1BQU1qQixRQUFRa0IsTUFBTSxDQUFDNUI7UUFDM0JQLFNBQVNpQyxPQUFPQyxNQUFNbEQsTUFBTUEsTUFBTWtEO0lBQ3RDO0lBQ0EsT0FBT2xDO0FBQ1gsRUFDQSxpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1hdWRpdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2FsbGV0Y29ubmVjdCtlbmNvZGluZ0AxLjAuMi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvZW5jb2RpbmcvZGlzdC9lc20vaW5kZXguanM/YmZiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2lzVHlwZWRBcnJheSBmcm9tIFwiaXMtdHlwZWRhcnJheVwiO1xuaW1wb3J0IHR5cGVkQXJyYXlUb0J1ZmZlciBmcm9tIFwidHlwZWRhcnJheS10by1idWZmZXJcIjtcbmNvbnN0IEVOQ19IRVggPSBcImhleFwiO1xuY29uc3QgRU5DX1VURjggPSBcInV0ZjhcIjtcbmNvbnN0IEVOQ19CSU4gPSBcImJpbmFyeVwiO1xuY29uc3QgVFlQRV9CVUZGRVIgPSBcImJ1ZmZlclwiO1xuY29uc3QgVFlQRV9BUlJBWSA9IFwiYXJyYXlcIjtcbmNvbnN0IFRZUEVfVFlQRURfQVJSQVkgPSBcInR5cGVkLWFycmF5XCI7XG5jb25zdCBUWVBFX0FSUkFZX0JVRkZFUiA9IFwiYXJyYXktYnVmZmVyXCI7XG5jb25zdCBTVFJJTkdfWkVSTyA9IFwiMFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGJ1ZmZlclRvQXJyYXkoYnVmKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1Zik7XG59XG5leHBvcnQgZnVuY3Rpb24gYnVmZmVyVG9IZXgoYnVmLCBwcmVmaXhlZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgaGV4ID0gYnVmLnRvU3RyaW5nKEVOQ19IRVgpO1xuICAgIHJldHVybiBwcmVmaXhlZCA/IGFkZEhleFByZWZpeChoZXgpIDogaGV4O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJ1ZmZlclRvVXRmOChidWYpIHtcbiAgICByZXR1cm4gYnVmLnRvU3RyaW5nKEVOQ19VVEY4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBidWZmZXJUb051bWJlcihidWYpIHtcbiAgICByZXR1cm4gYnVmLnJlYWRVSW50QkUoMCwgYnVmLmxlbmd0aCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYnVmZmVyVG9CaW5hcnkoYnVmKSB7XG4gICAgcmV0dXJuIGFycmF5VG9CaW5hcnkoYnVmZmVyVG9BcnJheShidWYpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVRvQnVmZmVyKGFycikge1xuICAgIHJldHVybiB0eXBlZEFycmF5VG9CdWZmZXIoYXJyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVRvSGV4KGFyciwgcHJlZml4ZWQgPSBmYWxzZSkge1xuICAgIHJldHVybiBidWZmZXJUb0hleChhcnJheVRvQnVmZmVyKGFyciksIHByZWZpeGVkKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVRvVXRmOChhcnIpIHtcbiAgICByZXR1cm4gYnVmZmVyVG9VdGY4KGFycmF5VG9CdWZmZXIoYXJyKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXJyYXlUb051bWJlcihhcnIpIHtcbiAgICByZXR1cm4gYnVmZmVyVG9OdW1iZXIoYXJyYXlUb0J1ZmZlcihhcnIpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVRvQmluYXJ5KGFycikge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFycilcbiAgICAgICAgLm1hcChudW1iZXJUb0JpbmFyeSlcbiAgICAgICAgLmpvaW4oXCJcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gaGV4VG9CdWZmZXIoaGV4KSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHJlbW92ZUhleFByZWZpeChoZXgpLCBFTkNfSEVYKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb0FycmF5KGhleCkge1xuICAgIHJldHVybiBidWZmZXJUb0FycmF5KGhleFRvQnVmZmVyKGhleCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvVXRmOChoZXgpIHtcbiAgICByZXR1cm4gYnVmZmVyVG9VdGY4KGhleFRvQnVmZmVyKGhleCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvTnVtYmVyKGhleCkge1xuICAgIHJldHVybiBhcnJheVRvTnVtYmVyKGhleFRvQXJyYXkoaGV4KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaGV4VG9CaW5hcnkoaGV4KSB7XG4gICAgcmV0dXJuIGFycmF5VG9CaW5hcnkoaGV4VG9BcnJheShoZXgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1dGY4VG9CdWZmZXIodXRmOCkge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh1dGY4LCBFTkNfVVRGOCk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXRmOFRvQXJyYXkodXRmOCkge1xuICAgIHJldHVybiBidWZmZXJUb0FycmF5KHV0ZjhUb0J1ZmZlcih1dGY4KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXRmOFRvSGV4KHV0ZjgsIHByZWZpeGVkID0gZmFsc2UpIHtcbiAgICByZXR1cm4gYnVmZmVyVG9IZXgodXRmOFRvQnVmZmVyKHV0ZjgpLCBwcmVmaXhlZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXRmOFRvTnVtYmVyKHV0ZjgpIHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUludCh1dGY4LCAxMCk7XG4gICAgYXNzZXJ0KGlzRGVmaW5lZChudW0pLCBcIk51bWJlciBjYW4gb25seSBzYWZlbHkgc3RvcmUgdXAgdG8gNTMgYml0c1wiKTtcbiAgICByZXR1cm4gbnVtO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHV0ZjhUb0JpbmFyeSh1dGY4KSB7XG4gICAgcmV0dXJuIGFycmF5VG9CaW5hcnkodXRmOFRvQXJyYXkodXRmOCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclRvQnVmZmVyKG51bSkge1xuICAgIHJldHVybiBiaW5hcnlUb0J1ZmZlcihudW1iZXJUb0JpbmFyeShudW0pKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJUb0FycmF5KG51bSkge1xuICAgIHJldHVybiBiaW5hcnlUb0FycmF5KG51bWJlclRvQmluYXJ5KG51bSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclRvSGV4KG51bSwgcHJlZml4ZWQpIHtcbiAgICByZXR1cm4gYmluYXJ5VG9IZXgobnVtYmVyVG9CaW5hcnkobnVtKSwgcHJlZml4ZWQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclRvVXRmOChudW0pIHtcbiAgICByZXR1cm4gYCR7bnVtfWA7XG59XG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyVG9CaW5hcnkobnVtKSB7XG4gICAgY29uc3QgYmluID0gKG51bSA+Pj4gMCkudG9TdHJpbmcoMik7XG4gICAgcmV0dXJuIHNhbml0aXplQnl0ZXMoYmluKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlUb0J1ZmZlcihiaW4pIHtcbiAgICByZXR1cm4gYXJyYXlUb0J1ZmZlcihiaW5hcnlUb0FycmF5KGJpbikpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVRvQXJyYXkoYmluKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHNwbGl0Qnl0ZXMoYmluKS5tYXAoeCA9PiBwYXJzZUludCh4LCAyKSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVRvSGV4KGJpbiwgcHJlZml4ZWQpIHtcbiAgICByZXR1cm4gYXJyYXlUb0hleChiaW5hcnlUb0FycmF5KGJpbiksIHByZWZpeGVkKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlUb1V0ZjgoYmluKSB7XG4gICAgcmV0dXJuIGFycmF5VG9VdGY4KGJpbmFyeVRvQXJyYXkoYmluKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5VG9OdW1iZXIoYmluKSB7XG4gICAgcmV0dXJuIGFycmF5VG9OdW1iZXIoYmluYXJ5VG9BcnJheShiaW4pKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0JpbmFyeVN0cmluZyhzdHIpIHtcbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gXCJzdHJpbmdcIiB8fCAhbmV3IFJlZ0V4cCgvXlswMV0rJC8pLnRlc3Qoc3RyKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChzdHIubGVuZ3RoICUgOCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzSGV4U3RyaW5nKHN0ciwgbGVuZ3RoKSB7XG4gICAgaWYgKHR5cGVvZiBzdHIgIT09IFwic3RyaW5nXCIgfHwgIXN0ci5tYXRjaCgvXjB4WzAtOUEtRmEtZl0qJC8pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGxlbmd0aCAmJiBzdHIubGVuZ3RoICE9PSAyICsgMiAqIGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICAgIHJldHVybiBCdWZmZXIuaXNCdWZmZXIodmFsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVkQXJyYXkuc3RyaWN0KHZhbCkgJiYgIWlzQnVmZmVyKHZhbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgICByZXR1cm4gKCFpc1R5cGVkQXJyYXkodmFsKSAmJlxuICAgICAgICAhaXNCdWZmZXIodmFsKSAmJlxuICAgICAgICB0eXBlb2YgdmFsLmJ5dGVMZW5ndGggIT09IFwidW5kZWZpbmVkXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUodmFsKSB7XG4gICAgaWYgKGlzQnVmZmVyKHZhbCkpIHtcbiAgICAgICAgcmV0dXJuIFRZUEVfQlVGRkVSO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1R5cGVkQXJyYXkodmFsKSkge1xuICAgICAgICByZXR1cm4gVFlQRV9UWVBFRF9BUlJBWTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBcnJheUJ1ZmZlcih2YWwpKSB7XG4gICAgICAgIHJldHVybiBUWVBFX0FSUkFZX0JVRkZFUjtcbiAgICB9XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIHJldHVybiBUWVBFX0FSUkFZO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWw7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEVuY29kaW5nKHN0cikge1xuICAgIGlmIChpc0JpbmFyeVN0cmluZyhzdHIpKSB7XG4gICAgICAgIHJldHVybiBFTkNfQklOO1xuICAgIH1cbiAgICBpZiAoaXNIZXhTdHJpbmcoc3RyKSkge1xuICAgICAgICByZXR1cm4gRU5DX0hFWDtcbiAgICB9XG4gICAgcmV0dXJuIEVOQ19VVEY4O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdEJ1ZmZlcnMoLi4uYXJncykge1xuICAgIGNvbnN0IHJlc3VsdCA9IEJ1ZmZlci5jb25jYXQoYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRBcnJheXMoLi4uYXJncykge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBhcmdzLmZvckVhY2goYXJnID0+IChyZXN1bHQgPSByZXN1bHQuY29uY2F0KEFycmF5LmZyb20oYXJnKSkpKTtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWy4uLnJlc3VsdF0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRyaW1MZWZ0KGRhdGEsIGxlbmd0aCkge1xuICAgIGNvbnN0IGRpZmYgPSBkYXRhLmxlbmd0aCAtIGxlbmd0aDtcbiAgICBpZiAoZGlmZiA+IDApIHtcbiAgICAgICAgZGF0YSA9IGRhdGEuc2xpY2UoZGlmZik7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRyaW1SaWdodChkYXRhLCBsZW5ndGgpIHtcbiAgICByZXR1cm4gZGF0YS5zbGljZSgwLCBsZW5ndGgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNCeXRlTGVuZ3RoKGxlbmd0aCwgYnl0ZVNpemUgPSA4KSB7XG4gICAgY29uc3QgcmVtYWluZGVyID0gbGVuZ3RoICUgYnl0ZVNpemU7XG4gICAgcmV0dXJuIHJlbWFpbmRlclxuICAgICAgICA/ICgobGVuZ3RoIC0gcmVtYWluZGVyKSAvIGJ5dGVTaXplKSAqIGJ5dGVTaXplICsgYnl0ZVNpemVcbiAgICAgICAgOiBsZW5ndGg7XG59XG5leHBvcnQgZnVuY3Rpb24gc3BsaXRCeXRlcyhzdHIsIGJ5dGVTaXplID0gOCkge1xuICAgIGNvbnN0IGJ5dGVzID0gc2FuaXRpemVCeXRlcyhzdHIpLm1hdGNoKG5ldyBSZWdFeHAoYC57JHtieXRlU2l6ZX19YCwgXCJnaVwiKSk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYnl0ZXMgfHwgW10pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN3YXBCeXRlcyhzdHIpIHtcbiAgICByZXR1cm4gc3BsaXRCeXRlcyhzdHIpXG4gICAgICAgIC5tYXAocmV2ZXJzZVN0cmluZylcbiAgICAgICAgLmpvaW4oXCJcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gc3dhcEhleChzdHIpIHtcbiAgICByZXR1cm4gYmluYXJ5VG9IZXgoc3dhcEJ5dGVzKGhleFRvQmluYXJ5KHN0cikpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUJ5dGVzKHN0ciwgYnl0ZVNpemUgPSA4LCBwYWRkaW5nID0gU1RSSU5HX1pFUk8pIHtcbiAgICByZXR1cm4gcGFkTGVmdChzdHIsIGNhbGNCeXRlTGVuZ3RoKHN0ci5sZW5ndGgsIGJ5dGVTaXplKSwgcGFkZGluZyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFkTGVmdChzdHIsIGxlbmd0aCwgcGFkZGluZyA9IFNUUklOR19aRVJPKSB7XG4gICAgcmV0dXJuIHBhZFN0cmluZyhzdHIsIGxlbmd0aCwgdHJ1ZSwgcGFkZGluZyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFkUmlnaHQoc3RyLCBsZW5ndGgsIHBhZGRpbmcgPSBTVFJJTkdfWkVSTykge1xuICAgIHJldHVybiBwYWRTdHJpbmcoc3RyLCBsZW5ndGgsIGZhbHNlLCBwYWRkaW5nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIZXhQcmVmaXgoaGV4KSB7XG4gICAgcmV0dXJuIGhleC5yZXBsYWNlKC9eMHgvLCBcIlwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRIZXhQcmVmaXgoaGV4KSB7XG4gICAgcmV0dXJuIGhleC5zdGFydHNXaXRoKFwiMHhcIikgPyBoZXggOiBgMHgke2hleH1gO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplSGV4KGhleCkge1xuICAgIGhleCA9IHJlbW92ZUhleFByZWZpeChoZXgpO1xuICAgIGhleCA9IHNhbml0aXplQnl0ZXMoaGV4LCAyKTtcbiAgICBpZiAoaGV4KSB7XG4gICAgICAgIGhleCA9IGFkZEhleFByZWZpeChoZXgpO1xuICAgIH1cbiAgICByZXR1cm4gaGV4O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUhleExlYWRpbmdaZXJvcyhoZXgpIHtcbiAgICBjb25zdCBwcmVmaXhlZCA9IGhleC5zdGFydHNXaXRoKFwiMHhcIik7XG4gICAgaGV4ID0gcmVtb3ZlSGV4UHJlZml4KGhleCk7XG4gICAgaGV4ID0gaGV4LnN0YXJ0c1dpdGgoU1RSSU5HX1pFUk8pID8gaGV4LnN1YnN0cmluZygxKSA6IGhleDtcbiAgICByZXR1cm4gcHJlZml4ZWQgPyBhZGRIZXhQcmVmaXgoaGV4KSA6IGhleDtcbn1cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIjtcbn1cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQodmFsdWUpO1xufVxuZnVuY3Rpb24gYXNzZXJ0KGFzc2VydGlvbiwgZXJyb3JNZXNzYWdlKSB7XG4gICAgaWYgKCFhc3NlcnRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmV2ZXJzZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgIC5qb2luKFwiXCIpO1xufVxuZnVuY3Rpb24gcGFkU3RyaW5nKHN0ciwgbGVuZ3RoLCBsZWZ0LCBwYWRkaW5nID0gU1RSSU5HX1pFUk8pIHtcbiAgICBjb25zdCBkaWZmID0gbGVuZ3RoIC0gc3RyLmxlbmd0aDtcbiAgICBsZXQgcmVzdWx0ID0gc3RyO1xuICAgIGlmIChkaWZmID4gMCkge1xuICAgICAgICBjb25zdCBwYWQgPSBwYWRkaW5nLnJlcGVhdChkaWZmKTtcbiAgICAgICAgcmVzdWx0ID0gbGVmdCA/IHBhZCArIHN0ciA6IHN0ciArIHBhZDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6WyJfaXNUeXBlZEFycmF5IiwidHlwZWRBcnJheVRvQnVmZmVyIiwiRU5DX0hFWCIsIkVOQ19VVEY4IiwiRU5DX0JJTiIsIlRZUEVfQlVGRkVSIiwiVFlQRV9BUlJBWSIsIlRZUEVfVFlQRURfQVJSQVkiLCJUWVBFX0FSUkFZX0JVRkZFUiIsIlNUUklOR19aRVJPIiwiYnVmZmVyVG9BcnJheSIsImJ1ZiIsIlVpbnQ4QXJyYXkiLCJidWZmZXJUb0hleCIsInByZWZpeGVkIiwiaGV4IiwidG9TdHJpbmciLCJhZGRIZXhQcmVmaXgiLCJidWZmZXJUb1V0ZjgiLCJidWZmZXJUb051bWJlciIsInJlYWRVSW50QkUiLCJsZW5ndGgiLCJidWZmZXJUb0JpbmFyeSIsImFycmF5VG9CaW5hcnkiLCJhcnJheVRvQnVmZmVyIiwiYXJyIiwiYXJyYXlUb0hleCIsImFycmF5VG9VdGY4IiwiYXJyYXlUb051bWJlciIsIkFycmF5IiwiZnJvbSIsIm1hcCIsIm51bWJlclRvQmluYXJ5Iiwiam9pbiIsImhleFRvQnVmZmVyIiwiQnVmZmVyIiwicmVtb3ZlSGV4UHJlZml4IiwiaGV4VG9BcnJheSIsImhleFRvVXRmOCIsImhleFRvTnVtYmVyIiwiaGV4VG9CaW5hcnkiLCJ1dGY4VG9CdWZmZXIiLCJ1dGY4IiwidXRmOFRvQXJyYXkiLCJ1dGY4VG9IZXgiLCJ1dGY4VG9OdW1iZXIiLCJudW0iLCJwYXJzZUludCIsImFzc2VydCIsImlzRGVmaW5lZCIsInV0ZjhUb0JpbmFyeSIsIm51bWJlclRvQnVmZmVyIiwiYmluYXJ5VG9CdWZmZXIiLCJudW1iZXJUb0FycmF5IiwiYmluYXJ5VG9BcnJheSIsIm51bWJlclRvSGV4IiwiYmluYXJ5VG9IZXgiLCJudW1iZXJUb1V0ZjgiLCJiaW4iLCJzYW5pdGl6ZUJ5dGVzIiwic3BsaXRCeXRlcyIsIngiLCJiaW5hcnlUb1V0ZjgiLCJiaW5hcnlUb051bWJlciIsImlzQmluYXJ5U3RyaW5nIiwic3RyIiwiUmVnRXhwIiwidGVzdCIsImlzSGV4U3RyaW5nIiwibWF0Y2giLCJpc0J1ZmZlciIsInZhbCIsImlzVHlwZWRBcnJheSIsInN0cmljdCIsImlzQXJyYXlCdWZmZXIiLCJieXRlTGVuZ3RoIiwiZ2V0VHlwZSIsImlzQXJyYXkiLCJnZXRFbmNvZGluZyIsImNvbmNhdEJ1ZmZlcnMiLCJhcmdzIiwicmVzdWx0IiwiY29uY2F0IiwiY29uY2F0QXJyYXlzIiwiZm9yRWFjaCIsImFyZyIsInRyaW1MZWZ0IiwiZGF0YSIsImRpZmYiLCJzbGljZSIsInRyaW1SaWdodCIsImNhbGNCeXRlTGVuZ3RoIiwiYnl0ZVNpemUiLCJyZW1haW5kZXIiLCJieXRlcyIsInN3YXBCeXRlcyIsInJldmVyc2VTdHJpbmciLCJzd2FwSGV4IiwicGFkZGluZyIsInBhZExlZnQiLCJwYWRTdHJpbmciLCJwYWRSaWdodCIsInJlcGxhY2UiLCJzdGFydHNXaXRoIiwic2FuaXRpemVIZXgiLCJyZW1vdmVIZXhMZWFkaW5nWmVyb3MiLCJzdWJzdHJpbmciLCJpc1VuZGVmaW5lZCIsInZhbHVlIiwiYXNzZXJ0aW9uIiwiZXJyb3JNZXNzYWdlIiwiRXJyb3IiLCJzcGxpdCIsInJldmVyc2UiLCJsZWZ0IiwicGFkIiwicmVwZWF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+encoding@1.0.2/node_modules/@walletconnect/encoding/dist/esm/index.js\n");

/***/ })

};
;