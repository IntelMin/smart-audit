/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@walletconnect+relay-auth@1.0.4";
exports.ids = ["vendor-chunks/@walletconnect+relay-auth@1.0.4"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/api.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/api.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateKeyPair: () => (/* binding */ generateKeyPair),\n/* harmony export */   signJWT: () => (/* binding */ signJWT),\n/* harmony export */   verifyJWT: () => (/* binding */ verifyJWT)\n/* harmony export */ });\n/* harmony import */ var _stablelib_ed25519__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stablelib/ed25519 */ \"(ssr)/./node_modules/.pnpm/@stablelib+ed25519@1.0.3/node_modules/@stablelib/ed25519/lib/ed25519.js\");\n/* harmony import */ var _stablelib_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stablelib/random */ \"(ssr)/./node_modules/.pnpm/@stablelib+random@1.0.2/node_modules/@stablelib/random/lib/random.js\");\n/* harmony import */ var _walletconnect_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @walletconnect/time */ \"(ssr)/./node_modules/.pnpm/@walletconnect+time@1.0.2/node_modules/@walletconnect/time/dist/cjs/index.js\");\n/* harmony import */ var _walletconnect_time__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_time__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/utils.js\");\n\n\n\n\n\nfunction generateKeyPair(seed = (0,_stablelib_random__WEBPACK_IMPORTED_MODULE_1__.randomBytes)(_constants__WEBPACK_IMPORTED_MODULE_3__.KEY_PAIR_SEED_LENGTH)) {\n    return _stablelib_ed25519__WEBPACK_IMPORTED_MODULE_0__.generateKeyPairFromSeed(seed);\n}\nasync function signJWT(sub, aud, ttl, keyPair, iat = (0,_walletconnect_time__WEBPACK_IMPORTED_MODULE_2__.fromMiliseconds)(Date.now())) {\n    const header = {\n        alg: _constants__WEBPACK_IMPORTED_MODULE_3__.JWT_IRIDIUM_ALG,\n        typ: _constants__WEBPACK_IMPORTED_MODULE_3__.JWT_IRIDIUM_TYP\n    };\n    const iss = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.encodeIss)(keyPair.publicKey);\n    const exp = iat + ttl;\n    const payload = {\n        iss,\n        sub,\n        aud,\n        iat,\n        exp\n    };\n    const data = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.encodeData)({\n        header,\n        payload\n    });\n    const signature = _stablelib_ed25519__WEBPACK_IMPORTED_MODULE_0__.sign(keyPair.secretKey, data);\n    return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.encodeJWT)({\n        header,\n        payload,\n        signature\n    });\n}\nasync function verifyJWT(jwt) {\n    const { header, payload, data, signature } = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.decodeJWT)(jwt);\n    if (header.alg !== _constants__WEBPACK_IMPORTED_MODULE_3__.JWT_IRIDIUM_ALG || header.typ !== _constants__WEBPACK_IMPORTED_MODULE_3__.JWT_IRIDIUM_TYP) {\n        throw new Error(\"JWT must use EdDSA algorithm\");\n    }\n    const publicKey = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.decodeIss)(payload.iss);\n    return _stablelib_ed25519__WEBPACK_IMPORTED_MODULE_0__.verify(publicKey, data, signature);\n} //# sourceMappingURL=api.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmVsYXktYXV0aEAxLjAuNC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvcmVsYXktYXV0aC9kaXN0L2VzbS9hcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0U7QUFDTTtBQUNnQztBQUNKO0FBQzNFLFNBQVNXLGdCQUFnQkMsT0FBT1gsOERBQVdBLENBQUNJLDREQUFvQkEsQ0FBQztJQUNwRSxPQUFPTCx1RUFBK0IsQ0FBQ1k7QUFDM0M7QUFDTyxlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU1qQixvRUFBZUEsQ0FBQ2tCLEtBQUtDLEdBQUcsR0FBRztJQUNuRixNQUFNQyxTQUFTO1FBQUVDLEtBQUtwQix1REFBZUE7UUFBRXFCLEtBQUtwQix1REFBZUE7SUFBQztJQUM1RCxNQUFNcUIsTUFBTWhCLGlEQUFTQSxDQUFDUyxRQUFRUSxTQUFTO0lBQ3ZDLE1BQU1DLE1BQU1SLE1BQU1GO0lBQ2xCLE1BQU1XLFVBQVU7UUFBRUg7UUFBS1Y7UUFBS0M7UUFBS0c7UUFBS1E7SUFBSTtJQUMxQyxNQUFNRSxPQUFPckIsa0RBQVVBLENBQUM7UUFBRWM7UUFBUU07SUFBUTtJQUMxQyxNQUFNRSxZQUFZOUIsb0RBQVksQ0FBQ2tCLFFBQVFjLFNBQVMsRUFBRUg7SUFDbEQsT0FBT25CLGlEQUFTQSxDQUFDO1FBQUVZO1FBQVFNO1FBQVNFO0lBQVU7QUFDbEQ7QUFDTyxlQUFlRyxVQUFVQyxHQUFHO0lBQy9CLE1BQU0sRUFBRVosTUFBTSxFQUFFTSxPQUFPLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFLEdBQUd2QixpREFBU0EsQ0FBQzJCO0lBQ3ZELElBQUlaLE9BQU9DLEdBQUcsS0FBS3BCLHVEQUFlQSxJQUFJbUIsT0FBT0UsR0FBRyxLQUFLcEIsdURBQWVBLEVBQUU7UUFDbEUsTUFBTSxJQUFJK0IsTUFBTTtJQUNwQjtJQUNBLE1BQU1ULFlBQVlwQixpREFBU0EsQ0FBQ3NCLFFBQVFILEdBQUc7SUFDdkMsT0FBT3pCLHNEQUFjLENBQUMwQixXQUFXRyxNQUFNQztBQUMzQyxFQUNBLCtCQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL3NtYXJ0LWF1ZGl0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL0B3YWxsZXRjb25uZWN0K3JlbGF5LWF1dGhAMS4wLjQvbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L3JlbGF5LWF1dGgvZGlzdC9lc20vYXBpLmpzPzVhNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZWQyNTUxOSBmcm9tIFwiQHN0YWJsZWxpYi9lZDI1NTE5XCI7XG5pbXBvcnQgeyByYW5kb21CeXRlcyB9IGZyb20gXCJAc3RhYmxlbGliL3JhbmRvbVwiO1xuaW1wb3J0IHsgZnJvbU1pbGlzZWNvbmRzIH0gZnJvbSBcIkB3YWxsZXRjb25uZWN0L3RpbWVcIjtcbmltcG9ydCB7IEpXVF9JUklESVVNX0FMRywgSldUX0lSSURJVU1fVFlQLCBLRVlfUEFJUl9TRUVEX0xFTkdUSCwgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRlY29kZUlzcywgZGVjb2RlSldULCBlbmNvZGVEYXRhLCBlbmNvZGVJc3MsIGVuY29kZUpXVCwgfSBmcm9tIFwiLi91dGlsc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlS2V5UGFpcihzZWVkID0gcmFuZG9tQnl0ZXMoS0VZX1BBSVJfU0VFRF9MRU5HVEgpKSB7XG4gICAgcmV0dXJuIGVkMjU1MTkuZ2VuZXJhdGVLZXlQYWlyRnJvbVNlZWQoc2VlZCk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbkpXVChzdWIsIGF1ZCwgdHRsLCBrZXlQYWlyLCBpYXQgPSBmcm9tTWlsaXNlY29uZHMoRGF0ZS5ub3coKSkpIHtcbiAgICBjb25zdCBoZWFkZXIgPSB7IGFsZzogSldUX0lSSURJVU1fQUxHLCB0eXA6IEpXVF9JUklESVVNX1RZUCB9O1xuICAgIGNvbnN0IGlzcyA9IGVuY29kZUlzcyhrZXlQYWlyLnB1YmxpY0tleSk7XG4gICAgY29uc3QgZXhwID0gaWF0ICsgdHRsO1xuICAgIGNvbnN0IHBheWxvYWQgPSB7IGlzcywgc3ViLCBhdWQsIGlhdCwgZXhwIH07XG4gICAgY29uc3QgZGF0YSA9IGVuY29kZURhdGEoeyBoZWFkZXIsIHBheWxvYWQgfSk7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gZWQyNTUxOS5zaWduKGtleVBhaXIuc2VjcmV0S2V5LCBkYXRhKTtcbiAgICByZXR1cm4gZW5jb2RlSldUKHsgaGVhZGVyLCBwYXlsb2FkLCBzaWduYXR1cmUgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5SldUKGp3dCkge1xuICAgIGNvbnN0IHsgaGVhZGVyLCBwYXlsb2FkLCBkYXRhLCBzaWduYXR1cmUgfSA9IGRlY29kZUpXVChqd3QpO1xuICAgIGlmIChoZWFkZXIuYWxnICE9PSBKV1RfSVJJRElVTV9BTEcgfHwgaGVhZGVyLnR5cCAhPT0gSldUX0lSSURJVU1fVFlQKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkpXVCBtdXN0IHVzZSBFZERTQSBhbGdvcml0aG1cIik7XG4gICAgfVxuICAgIGNvbnN0IHB1YmxpY0tleSA9IGRlY29kZUlzcyhwYXlsb2FkLmlzcyk7XG4gICAgcmV0dXJuIGVkMjU1MTkudmVyaWZ5KHB1YmxpY0tleSwgZGF0YSwgc2lnbmF0dXJlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwaS5qcy5tYXAiXSwibmFtZXMiOlsiZWQyNTUxOSIsInJhbmRvbUJ5dGVzIiwiZnJvbU1pbGlzZWNvbmRzIiwiSldUX0lSSURJVU1fQUxHIiwiSldUX0lSSURJVU1fVFlQIiwiS0VZX1BBSVJfU0VFRF9MRU5HVEgiLCJkZWNvZGVJc3MiLCJkZWNvZGVKV1QiLCJlbmNvZGVEYXRhIiwiZW5jb2RlSXNzIiwiZW5jb2RlSldUIiwiZ2VuZXJhdGVLZXlQYWlyIiwic2VlZCIsImdlbmVyYXRlS2V5UGFpckZyb21TZWVkIiwic2lnbkpXVCIsInN1YiIsImF1ZCIsInR0bCIsImtleVBhaXIiLCJpYXQiLCJEYXRlIiwibm93IiwiaGVhZGVyIiwiYWxnIiwidHlwIiwiaXNzIiwicHVibGljS2V5IiwiZXhwIiwicGF5bG9hZCIsImRhdGEiLCJzaWduYXR1cmUiLCJzaWduIiwic2VjcmV0S2V5IiwidmVyaWZ5SldUIiwiand0IiwiRXJyb3IiLCJ2ZXJpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/api.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/constants.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/constants.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DATA_ENCODING: () => (/* binding */ DATA_ENCODING),\n/* harmony export */   DID_DELIMITER: () => (/* binding */ DID_DELIMITER),\n/* harmony export */   DID_METHOD: () => (/* binding */ DID_METHOD),\n/* harmony export */   DID_PREFIX: () => (/* binding */ DID_PREFIX),\n/* harmony export */   JSON_ENCODING: () => (/* binding */ JSON_ENCODING),\n/* harmony export */   JWT_DELIMITER: () => (/* binding */ JWT_DELIMITER),\n/* harmony export */   JWT_ENCODING: () => (/* binding */ JWT_ENCODING),\n/* harmony export */   JWT_IRIDIUM_ALG: () => (/* binding */ JWT_IRIDIUM_ALG),\n/* harmony export */   JWT_IRIDIUM_TYP: () => (/* binding */ JWT_IRIDIUM_TYP),\n/* harmony export */   KEY_PAIR_SEED_LENGTH: () => (/* binding */ KEY_PAIR_SEED_LENGTH),\n/* harmony export */   MULTICODEC_ED25519_BASE: () => (/* binding */ MULTICODEC_ED25519_BASE),\n/* harmony export */   MULTICODEC_ED25519_ENCODING: () => (/* binding */ MULTICODEC_ED25519_ENCODING),\n/* harmony export */   MULTICODEC_ED25519_HEADER: () => (/* binding */ MULTICODEC_ED25519_HEADER),\n/* harmony export */   MULTICODEC_ED25519_LENGTH: () => (/* binding */ MULTICODEC_ED25519_LENGTH)\n/* harmony export */ });\nconst JWT_IRIDIUM_ALG = \"EdDSA\";\nconst JWT_IRIDIUM_TYP = \"JWT\";\nconst JWT_DELIMITER = \".\";\nconst JWT_ENCODING = \"base64url\";\nconst JSON_ENCODING = \"utf8\";\nconst DATA_ENCODING = \"utf8\";\nconst DID_DELIMITER = \":\";\nconst DID_PREFIX = \"did\";\nconst DID_METHOD = \"key\";\nconst MULTICODEC_ED25519_ENCODING = \"base58btc\";\nconst MULTICODEC_ED25519_BASE = \"z\";\nconst MULTICODEC_ED25519_HEADER = \"K36\";\nconst MULTICODEC_ED25519_LENGTH = 32;\nconst KEY_PAIR_SEED_LENGTH = 32; //# sourceMappingURL=constants.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmVsYXktYXV0aEAxLjAuNC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvcmVsYXktYXV0aC9kaXN0L2VzbS9jb25zdGFudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxrQkFBa0IsUUFBUTtBQUNoQyxNQUFNQyxrQkFBa0IsTUFBTTtBQUM5QixNQUFNQyxnQkFBZ0IsSUFBSTtBQUMxQixNQUFNQyxlQUFlLFlBQVk7QUFDakMsTUFBTUMsZ0JBQWdCLE9BQU87QUFDN0IsTUFBTUMsZ0JBQWdCLE9BQU87QUFDN0IsTUFBTUMsZ0JBQWdCLElBQUk7QUFDMUIsTUFBTUMsYUFBYSxNQUFNO0FBQ3pCLE1BQU1DLGFBQWEsTUFBTTtBQUN6QixNQUFNQyw4QkFBOEIsWUFBWTtBQUNoRCxNQUFNQywwQkFBMEIsSUFBSTtBQUNwQyxNQUFNQyw0QkFBNEIsTUFBTTtBQUN4QyxNQUFNQyw0QkFBNEIsR0FBRztBQUNyQyxNQUFNQyx1QkFBdUIsR0FBRyxDQUN2QyxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1hdWRpdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2FsbGV0Y29ubmVjdCtyZWxheS1hdXRoQDEuMC40L25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9yZWxheS1hdXRoL2Rpc3QvZXNtL2NvbnN0YW50cy5qcz85MjE0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBKV1RfSVJJRElVTV9BTEcgPSBcIkVkRFNBXCI7XG5leHBvcnQgY29uc3QgSldUX0lSSURJVU1fVFlQID0gXCJKV1RcIjtcbmV4cG9ydCBjb25zdCBKV1RfREVMSU1JVEVSID0gXCIuXCI7XG5leHBvcnQgY29uc3QgSldUX0VOQ09ESU5HID0gXCJiYXNlNjR1cmxcIjtcbmV4cG9ydCBjb25zdCBKU09OX0VOQ09ESU5HID0gXCJ1dGY4XCI7XG5leHBvcnQgY29uc3QgREFUQV9FTkNPRElORyA9IFwidXRmOFwiO1xuZXhwb3J0IGNvbnN0IERJRF9ERUxJTUlURVIgPSBcIjpcIjtcbmV4cG9ydCBjb25zdCBESURfUFJFRklYID0gXCJkaWRcIjtcbmV4cG9ydCBjb25zdCBESURfTUVUSE9EID0gXCJrZXlcIjtcbmV4cG9ydCBjb25zdCBNVUxUSUNPREVDX0VEMjU1MTlfRU5DT0RJTkcgPSBcImJhc2U1OGJ0Y1wiO1xuZXhwb3J0IGNvbnN0IE1VTFRJQ09ERUNfRUQyNTUxOV9CQVNFID0gXCJ6XCI7XG5leHBvcnQgY29uc3QgTVVMVElDT0RFQ19FRDI1NTE5X0hFQURFUiA9IFwiSzM2XCI7XG5leHBvcnQgY29uc3QgTVVMVElDT0RFQ19FRDI1NTE5X0xFTkdUSCA9IDMyO1xuZXhwb3J0IGNvbnN0IEtFWV9QQUlSX1NFRURfTEVOR1RIID0gMzI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIl0sIm5hbWVzIjpbIkpXVF9JUklESVVNX0FMRyIsIkpXVF9JUklESVVNX1RZUCIsIkpXVF9ERUxJTUlURVIiLCJKV1RfRU5DT0RJTkciLCJKU09OX0VOQ09ESU5HIiwiREFUQV9FTkNPRElORyIsIkRJRF9ERUxJTUlURVIiLCJESURfUFJFRklYIiwiRElEX01FVEhPRCIsIk1VTFRJQ09ERUNfRUQyNTUxOV9FTkNPRElORyIsIk1VTFRJQ09ERUNfRUQyNTUxOV9CQVNFIiwiTVVMVElDT0RFQ19FRDI1NTE5X0hFQURFUiIsIk1VTFRJQ09ERUNfRUQyNTUxOV9MRU5HVEgiLCJLRVlfUEFJUl9TRUVEX0xFTkdUSCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/constants.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/index.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/index.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DATA_ENCODING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.DATA_ENCODING),\n/* harmony export */   DID_DELIMITER: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.DID_DELIMITER),\n/* harmony export */   DID_METHOD: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.DID_METHOD),\n/* harmony export */   DID_PREFIX: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.DID_PREFIX),\n/* harmony export */   JSON_ENCODING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.JSON_ENCODING),\n/* harmony export */   JWT_DELIMITER: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.JWT_DELIMITER),\n/* harmony export */   JWT_ENCODING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.JWT_ENCODING),\n/* harmony export */   JWT_IRIDIUM_ALG: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.JWT_IRIDIUM_ALG),\n/* harmony export */   JWT_IRIDIUM_TYP: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.JWT_IRIDIUM_TYP),\n/* harmony export */   KEY_PAIR_SEED_LENGTH: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.KEY_PAIR_SEED_LENGTH),\n/* harmony export */   MULTICODEC_ED25519_BASE: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.MULTICODEC_ED25519_BASE),\n/* harmony export */   MULTICODEC_ED25519_ENCODING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.MULTICODEC_ED25519_ENCODING),\n/* harmony export */   MULTICODEC_ED25519_HEADER: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.MULTICODEC_ED25519_HEADER),\n/* harmony export */   MULTICODEC_ED25519_LENGTH: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.MULTICODEC_ED25519_LENGTH),\n/* harmony export */   decodeData: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.decodeData),\n/* harmony export */   decodeIss: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.decodeIss),\n/* harmony export */   decodeJSON: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.decodeJSON),\n/* harmony export */   decodeJWT: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.decodeJWT),\n/* harmony export */   decodeSig: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.decodeSig),\n/* harmony export */   encodeData: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.encodeData),\n/* harmony export */   encodeIss: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.encodeIss),\n/* harmony export */   encodeJSON: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.encodeJSON),\n/* harmony export */   encodeJWT: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.encodeJWT),\n/* harmony export */   encodeSig: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.encodeSig),\n/* harmony export */   generateKeyPair: () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.generateKeyPair),\n/* harmony export */   signJWT: () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.signJWT),\n/* harmony export */   verifyJWT: () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.verifyJWT)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/api.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/constants.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ \"(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/types.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_2__) if([\"default\",\"generateKeyPair\",\"signJWT\",\"verifyJWT\",\"DATA_ENCODING\",\"DID_DELIMITER\",\"DID_METHOD\",\"DID_PREFIX\",\"JSON_ENCODING\",\"JWT_DELIMITER\",\"JWT_ENCODING\",\"JWT_IRIDIUM_ALG\",\"JWT_IRIDIUM_TYP\",\"KEY_PAIR_SEED_LENGTH\",\"MULTICODEC_ED25519_BASE\",\"MULTICODEC_ED25519_ENCODING\",\"MULTICODEC_ED25519_HEADER\",\"MULTICODEC_ED25519_LENGTH\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _types__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/utils.js\");\n\n\n\n //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmVsYXktYXV0aEAxLjAuNC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvcmVsYXktYXV0aC9kaXN0L2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNNO0FBQ0o7QUFDQSxDQUN4QixpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1hdWRpdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2FsbGV0Y29ubmVjdCtyZWxheS1hdXRoQDEuMC40L25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9yZWxheS1hdXRoL2Rpc3QvZXNtL2luZGV4LmpzPzUyZGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vYXBpXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3R5cGVzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi91dGlsc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/types.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/types.js ***!
  \*********************************************************************************************************************/
/***/ (() => {

eval("//# sourceMappingURL=types.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1hdWRpdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2FsbGV0Y29ubmVjdCtyZWxheS1hdXRoQDEuMC40L25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9yZWxheS1hdXRoL2Rpc3QvZXNtL3R5cGVzLmpzPzY5ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHlwZXMuanMubWFwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQyIsImZpbGUiOiIoc3NyKS8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2FsbGV0Y29ubmVjdCtyZWxheS1hdXRoQDEuMC40L25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9yZWxheS1hdXRoL2Rpc3QvZXNtL3R5cGVzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/types.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/utils.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/utils.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decodeData: () => (/* binding */ decodeData),\n/* harmony export */   decodeIss: () => (/* binding */ decodeIss),\n/* harmony export */   decodeJSON: () => (/* binding */ decodeJSON),\n/* harmony export */   decodeJWT: () => (/* binding */ decodeJWT),\n/* harmony export */   decodeSig: () => (/* binding */ decodeSig),\n/* harmony export */   encodeData: () => (/* binding */ encodeData),\n/* harmony export */   encodeIss: () => (/* binding */ encodeIss),\n/* harmony export */   encodeJSON: () => (/* binding */ encodeJSON),\n/* harmony export */   encodeJWT: () => (/* binding */ encodeJWT),\n/* harmony export */   encodeSig: () => (/* binding */ encodeSig)\n/* harmony export */ });\n/* harmony import */ var uint8arrays_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uint8arrays/concat */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.1/node_modules/uint8arrays/esm/src/concat.js\");\n/* harmony import */ var uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uint8arrays/to-string */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.1/node_modules/uint8arrays/esm/src/to-string.js\");\n/* harmony import */ var uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uint8arrays/from-string */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.1/node_modules/uint8arrays/esm/src/from-string.js\");\n/* harmony import */ var _walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @walletconnect/safe-json */ \"(ssr)/./node_modules/.pnpm/@walletconnect+safe-json@1.0.2/node_modules/@walletconnect/safe-json/dist/esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/constants.js\");\n\n\n\n\n\nfunction decodeJSON(str) {\n    return (0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_3__.safeJsonParse)((0,uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_1__.toString)((0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_2__.fromString)(str, _constants__WEBPACK_IMPORTED_MODULE_4__.JWT_ENCODING), _constants__WEBPACK_IMPORTED_MODULE_4__.JSON_ENCODING));\n}\nfunction encodeJSON(val) {\n    return (0,uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_1__.toString)((0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_2__.fromString)((0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_3__.safeJsonStringify)(val), _constants__WEBPACK_IMPORTED_MODULE_4__.JSON_ENCODING), _constants__WEBPACK_IMPORTED_MODULE_4__.JWT_ENCODING);\n}\nfunction encodeIss(publicKey) {\n    const header = (0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_2__.fromString)(_constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_HEADER, _constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_ENCODING);\n    const multicodec = _constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_BASE + (0,uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_1__.toString)((0,uint8arrays_concat__WEBPACK_IMPORTED_MODULE_0__.concat)([\n        header,\n        publicKey\n    ]), _constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_ENCODING);\n    return [\n        _constants__WEBPACK_IMPORTED_MODULE_4__.DID_PREFIX,\n        _constants__WEBPACK_IMPORTED_MODULE_4__.DID_METHOD,\n        multicodec\n    ].join(_constants__WEBPACK_IMPORTED_MODULE_4__.DID_DELIMITER);\n}\nfunction decodeIss(issuer) {\n    const [prefix, method, multicodec] = issuer.split(_constants__WEBPACK_IMPORTED_MODULE_4__.DID_DELIMITER);\n    if (prefix !== _constants__WEBPACK_IMPORTED_MODULE_4__.DID_PREFIX || method !== _constants__WEBPACK_IMPORTED_MODULE_4__.DID_METHOD) {\n        throw new Error(`Issuer must be a DID with method \"key\"`);\n    }\n    const base = multicodec.slice(0, 1);\n    if (base !== _constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_BASE) {\n        throw new Error(`Issuer must be a key in mulicodec format`);\n    }\n    const bytes = (0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_2__.fromString)(multicodec.slice(1), _constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_ENCODING);\n    const type = (0,uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_1__.toString)(bytes.slice(0, 2), _constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_ENCODING);\n    if (type !== _constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_HEADER) {\n        throw new Error(`Issuer must be a public key with type \"Ed25519\"`);\n    }\n    const publicKey = bytes.slice(2);\n    if (publicKey.length !== _constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_LENGTH) {\n        throw new Error(`Issuer must be a public key with length 32 bytes`);\n    }\n    return publicKey;\n}\nfunction encodeSig(bytes) {\n    return (0,uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_1__.toString)(bytes, _constants__WEBPACK_IMPORTED_MODULE_4__.JWT_ENCODING);\n}\nfunction decodeSig(encoded) {\n    return (0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_2__.fromString)(encoded, _constants__WEBPACK_IMPORTED_MODULE_4__.JWT_ENCODING);\n}\nfunction encodeData(params) {\n    return (0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_2__.fromString)([\n        encodeJSON(params.header),\n        encodeJSON(params.payload)\n    ].join(_constants__WEBPACK_IMPORTED_MODULE_4__.JWT_DELIMITER), _constants__WEBPACK_IMPORTED_MODULE_4__.DATA_ENCODING);\n}\nfunction decodeData(data) {\n    const params = (0,uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_1__.toString)(data, _constants__WEBPACK_IMPORTED_MODULE_4__.DATA_ENCODING).split(_constants__WEBPACK_IMPORTED_MODULE_4__.JWT_DELIMITER);\n    const header = decodeJSON(params[0]);\n    const payload = decodeJSON(params[1]);\n    return {\n        header,\n        payload\n    };\n}\nfunction encodeJWT(params) {\n    return [\n        encodeJSON(params.header),\n        encodeJSON(params.payload),\n        encodeSig(params.signature)\n    ].join(_constants__WEBPACK_IMPORTED_MODULE_4__.JWT_DELIMITER);\n}\nfunction decodeJWT(jwt) {\n    const params = jwt.split(_constants__WEBPACK_IMPORTED_MODULE_4__.JWT_DELIMITER);\n    const header = decodeJSON(params[0]);\n    const payload = decodeJSON(params[1]);\n    const signature = decodeSig(params[2]);\n    const data = (0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_2__.fromString)(params.slice(0, 2).join(_constants__WEBPACK_IMPORTED_MODULE_4__.JWT_DELIMITER), _constants__WEBPACK_IMPORTED_MODULE_4__.DATA_ENCODING);\n    return {\n        header,\n        payload,\n        signature,\n        data\n    };\n} //# sourceMappingURL=utils.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmVsYXktYXV0aEAxLjAuNC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvcmVsYXktYXV0aC9kaXN0L2VzbS91dGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSztBQUNJO0FBQ3VCO0FBQ2dLO0FBQ3JPLFNBQVNnQixXQUFXQyxHQUFHO0lBQzFCLE9BQU9kLHVFQUFhQSxDQUFDRiwrREFBUUEsQ0FBQ0MsbUVBQVVBLENBQUNlLEtBQUtOLG9EQUFZQSxHQUFHRixxREFBYUE7QUFDOUU7QUFDTyxTQUFTUyxXQUFXQyxHQUFHO0lBQzFCLE9BQU9sQiwrREFBUUEsQ0FBQ0MsbUVBQVVBLENBQUNFLDJFQUFpQkEsQ0FBQ2UsTUFBTVYscURBQWFBLEdBQUdFLG9EQUFZQTtBQUNuRjtBQUNPLFNBQVNTLFVBQVVDLFNBQVM7SUFDL0IsTUFBTUMsU0FBU3BCLG1FQUFVQSxDQUFDWSxpRUFBeUJBLEVBQUVELG1FQUEyQkE7SUFDaEYsTUFBTVUsYUFBYVgsK0RBQXVCQSxHQUN0Q1gsK0RBQVFBLENBQUNELDBEQUFNQSxDQUFDO1FBQUNzQjtRQUFRRDtLQUFVLEdBQUdSLG1FQUEyQkE7SUFDckUsT0FBTztRQUFDTCxrREFBVUE7UUFBRUQsa0RBQVVBO1FBQUVnQjtLQUFXLENBQUNDLElBQUksQ0FBQ2xCLHFEQUFhQTtBQUNsRTtBQUNPLFNBQVNtQixVQUFVQyxNQUFNO0lBQzVCLE1BQU0sQ0FBQ0MsUUFBUUMsUUFBUUwsV0FBVyxHQUFHRyxPQUFPRyxLQUFLLENBQUN2QixxREFBYUE7SUFDL0QsSUFBSXFCLFdBQVduQixrREFBVUEsSUFBSW9CLFdBQVdyQixrREFBVUEsRUFBRTtRQUNoRCxNQUFNLElBQUl1QixNQUFNLENBQUMsc0NBQXNDLENBQUM7SUFDNUQ7SUFDQSxNQUFNQyxPQUFPUixXQUFXUyxLQUFLLENBQUMsR0FBRztJQUNqQyxJQUFJRCxTQUFTbkIsK0RBQXVCQSxFQUFFO1FBQ2xDLE1BQU0sSUFBSWtCLE1BQU0sQ0FBQyx3Q0FBd0MsQ0FBQztJQUM5RDtJQUNBLE1BQU1HLFFBQVEvQixtRUFBVUEsQ0FBQ3FCLFdBQVdTLEtBQUssQ0FBQyxJQUFJbkIsbUVBQTJCQTtJQUN6RSxNQUFNcUIsT0FBT2pDLCtEQUFRQSxDQUFDZ0MsTUFBTUQsS0FBSyxDQUFDLEdBQUcsSUFBSW5CLG1FQUEyQkE7SUFDcEUsSUFBSXFCLFNBQVNwQixpRUFBeUJBLEVBQUU7UUFDcEMsTUFBTSxJQUFJZ0IsTUFBTSxDQUFDLCtDQUErQyxDQUFDO0lBQ3JFO0lBQ0EsTUFBTVQsWUFBWVksTUFBTUQsS0FBSyxDQUFDO0lBQzlCLElBQUlYLFVBQVVjLE1BQU0sS0FBS3BCLGlFQUF5QkEsRUFBRTtRQUNoRCxNQUFNLElBQUllLE1BQU0sQ0FBQyxnREFBZ0QsQ0FBQztJQUN0RTtJQUNBLE9BQU9UO0FBQ1g7QUFDTyxTQUFTZSxVQUFVSCxLQUFLO0lBQzNCLE9BQU9oQywrREFBUUEsQ0FBQ2dDLE9BQU90QixvREFBWUE7QUFDdkM7QUFDTyxTQUFTMEIsVUFBVUMsT0FBTztJQUM3QixPQUFPcEMsbUVBQVVBLENBQUNvQyxTQUFTM0Isb0RBQVlBO0FBQzNDO0FBQ08sU0FBUzRCLFdBQVdDLE1BQU07SUFDN0IsT0FBT3RDLG1FQUFVQSxDQUFDO1FBQUNnQixXQUFXc0IsT0FBT2xCLE1BQU07UUFBR0osV0FBV3NCLE9BQU9DLE9BQU87S0FBRSxDQUFDakIsSUFBSSxDQUFDZCxxREFBYUEsR0FBR0wscURBQWFBO0FBQ2hIO0FBQ08sU0FBU3FDLFdBQVdDLElBQUk7SUFDM0IsTUFBTUgsU0FBU3ZDLCtEQUFRQSxDQUFDMEMsTUFBTXRDLHFEQUFhQSxFQUFFd0IsS0FBSyxDQUFDbkIscURBQWFBO0lBQ2hFLE1BQU1ZLFNBQVNOLFdBQVd3QixNQUFNLENBQUMsRUFBRTtJQUNuQyxNQUFNQyxVQUFVekIsV0FBV3dCLE1BQU0sQ0FBQyxFQUFFO0lBQ3BDLE9BQU87UUFBRWxCO1FBQVFtQjtJQUFRO0FBQzdCO0FBQ08sU0FBU0csVUFBVUosTUFBTTtJQUM1QixPQUFPO1FBQ0h0QixXQUFXc0IsT0FBT2xCLE1BQU07UUFDeEJKLFdBQVdzQixPQUFPQyxPQUFPO1FBQ3pCTCxVQUFVSSxPQUFPSyxTQUFTO0tBQzdCLENBQUNyQixJQUFJLENBQUNkLHFEQUFhQTtBQUN4QjtBQUNPLFNBQVNvQyxVQUFVQyxHQUFHO0lBQ3pCLE1BQU1QLFNBQVNPLElBQUlsQixLQUFLLENBQUNuQixxREFBYUE7SUFDdEMsTUFBTVksU0FBU04sV0FBV3dCLE1BQU0sQ0FBQyxFQUFFO0lBQ25DLE1BQU1DLFVBQVV6QixXQUFXd0IsTUFBTSxDQUFDLEVBQUU7SUFDcEMsTUFBTUssWUFBWVIsVUFBVUcsTUFBTSxDQUFDLEVBQUU7SUFDckMsTUFBTUcsT0FBT3pDLG1FQUFVQSxDQUFDc0MsT0FBT1IsS0FBSyxDQUFDLEdBQUcsR0FBR1IsSUFBSSxDQUFDZCxxREFBYUEsR0FBR0wscURBQWFBO0lBQzdFLE9BQU87UUFBRWlCO1FBQVFtQjtRQUFTSTtRQUFXRjtJQUFLO0FBQzlDLEVBQ0EsaUNBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21hcnQtYXVkaXQvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmVsYXktYXV0aEAxLjAuNC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvcmVsYXktYXV0aC9kaXN0L2VzbS91dGlscy5qcz82YmI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmNhdCB9IGZyb20gXCJ1aW50OGFycmF5cy9jb25jYXRcIjtcbmltcG9ydCB7IHRvU3RyaW5nIH0gZnJvbSBcInVpbnQ4YXJyYXlzL3RvLXN0cmluZ1wiO1xuaW1wb3J0IHsgZnJvbVN0cmluZyB9IGZyb20gXCJ1aW50OGFycmF5cy9mcm9tLXN0cmluZ1wiO1xuaW1wb3J0IHsgc2FmZUpzb25QYXJzZSwgc2FmZUpzb25TdHJpbmdpZnkgfSBmcm9tIFwiQHdhbGxldGNvbm5lY3Qvc2FmZS1qc29uXCI7XG5pbXBvcnQgeyBEQVRBX0VOQ09ESU5HLCBESURfREVMSU1JVEVSLCBESURfTUVUSE9ELCBESURfUFJFRklYLCBKU09OX0VOQ09ESU5HLCBKV1RfREVMSU1JVEVSLCBKV1RfRU5DT0RJTkcsIE1VTFRJQ09ERUNfRUQyNTUxOV9CQVNFLCBNVUxUSUNPREVDX0VEMjU1MTlfRU5DT0RJTkcsIE1VTFRJQ09ERUNfRUQyNTUxOV9IRUFERVIsIE1VTFRJQ09ERUNfRUQyNTUxOV9MRU5HVEgsIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlSlNPTihzdHIpIHtcbiAgICByZXR1cm4gc2FmZUpzb25QYXJzZSh0b1N0cmluZyhmcm9tU3RyaW5nKHN0ciwgSldUX0VOQ09ESU5HKSwgSlNPTl9FTkNPRElORykpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUpTT04odmFsKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nKGZyb21TdHJpbmcoc2FmZUpzb25TdHJpbmdpZnkodmFsKSwgSlNPTl9FTkNPRElORyksIEpXVF9FTkNPRElORyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlSXNzKHB1YmxpY0tleSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGZyb21TdHJpbmcoTVVMVElDT0RFQ19FRDI1NTE5X0hFQURFUiwgTVVMVElDT0RFQ19FRDI1NTE5X0VOQ09ESU5HKTtcbiAgICBjb25zdCBtdWx0aWNvZGVjID0gTVVMVElDT0RFQ19FRDI1NTE5X0JBU0UgK1xuICAgICAgICB0b1N0cmluZyhjb25jYXQoW2hlYWRlciwgcHVibGljS2V5XSksIE1VTFRJQ09ERUNfRUQyNTUxOV9FTkNPRElORyk7XG4gICAgcmV0dXJuIFtESURfUFJFRklYLCBESURfTUVUSE9ELCBtdWx0aWNvZGVjXS5qb2luKERJRF9ERUxJTUlURVIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUlzcyhpc3N1ZXIpIHtcbiAgICBjb25zdCBbcHJlZml4LCBtZXRob2QsIG11bHRpY29kZWNdID0gaXNzdWVyLnNwbGl0KERJRF9ERUxJTUlURVIpO1xuICAgIGlmIChwcmVmaXggIT09IERJRF9QUkVGSVggfHwgbWV0aG9kICE9PSBESURfTUVUSE9EKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSXNzdWVyIG11c3QgYmUgYSBESUQgd2l0aCBtZXRob2QgXCJrZXlcImApO1xuICAgIH1cbiAgICBjb25zdCBiYXNlID0gbXVsdGljb2RlYy5zbGljZSgwLCAxKTtcbiAgICBpZiAoYmFzZSAhPT0gTVVMVElDT0RFQ19FRDI1NTE5X0JBU0UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJc3N1ZXIgbXVzdCBiZSBhIGtleSBpbiBtdWxpY29kZWMgZm9ybWF0YCk7XG4gICAgfVxuICAgIGNvbnN0IGJ5dGVzID0gZnJvbVN0cmluZyhtdWx0aWNvZGVjLnNsaWNlKDEpLCBNVUxUSUNPREVDX0VEMjU1MTlfRU5DT0RJTkcpO1xuICAgIGNvbnN0IHR5cGUgPSB0b1N0cmluZyhieXRlcy5zbGljZSgwLCAyKSwgTVVMVElDT0RFQ19FRDI1NTE5X0VOQ09ESU5HKTtcbiAgICBpZiAodHlwZSAhPT0gTVVMVElDT0RFQ19FRDI1NTE5X0hFQURFUikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYElzc3VlciBtdXN0IGJlIGEgcHVibGljIGtleSB3aXRoIHR5cGUgXCJFZDI1NTE5XCJgKTtcbiAgICB9XG4gICAgY29uc3QgcHVibGljS2V5ID0gYnl0ZXMuc2xpY2UoMik7XG4gICAgaWYgKHB1YmxpY0tleS5sZW5ndGggIT09IE1VTFRJQ09ERUNfRUQyNTUxOV9MRU5HVEgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJc3N1ZXIgbXVzdCBiZSBhIHB1YmxpYyBrZXkgd2l0aCBsZW5ndGggMzIgYnl0ZXNgKTtcbiAgICB9XG4gICAgcmV0dXJuIHB1YmxpY0tleTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVTaWcoYnl0ZXMpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcoYnl0ZXMsIEpXVF9FTkNPRElORyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlU2lnKGVuY29kZWQpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyhlbmNvZGVkLCBKV1RfRU5DT0RJTkcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZURhdGEocGFyYW1zKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcoW2VuY29kZUpTT04ocGFyYW1zLmhlYWRlciksIGVuY29kZUpTT04ocGFyYW1zLnBheWxvYWQpXS5qb2luKEpXVF9ERUxJTUlURVIpLCBEQVRBX0VOQ09ESU5HKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVEYXRhKGRhdGEpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB0b1N0cmluZyhkYXRhLCBEQVRBX0VOQ09ESU5HKS5zcGxpdChKV1RfREVMSU1JVEVSKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkZWNvZGVKU09OKHBhcmFtc1swXSk7XG4gICAgY29uc3QgcGF5bG9hZCA9IGRlY29kZUpTT04ocGFyYW1zWzFdKTtcbiAgICByZXR1cm4geyBoZWFkZXIsIHBheWxvYWQgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVKV1QocGFyYW1zKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgZW5jb2RlSlNPTihwYXJhbXMuaGVhZGVyKSxcbiAgICAgICAgZW5jb2RlSlNPTihwYXJhbXMucGF5bG9hZCksXG4gICAgICAgIGVuY29kZVNpZyhwYXJhbXMuc2lnbmF0dXJlKSxcbiAgICBdLmpvaW4oSldUX0RFTElNSVRFUik7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlSldUKGp3dCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IGp3dC5zcGxpdChKV1RfREVMSU1JVEVSKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkZWNvZGVKU09OKHBhcmFtc1swXSk7XG4gICAgY29uc3QgcGF5bG9hZCA9IGRlY29kZUpTT04ocGFyYW1zWzFdKTtcbiAgICBjb25zdCBzaWduYXR1cmUgPSBkZWNvZGVTaWcocGFyYW1zWzJdKTtcbiAgICBjb25zdCBkYXRhID0gZnJvbVN0cmluZyhwYXJhbXMuc2xpY2UoMCwgMikuam9pbihKV1RfREVMSU1JVEVSKSwgREFUQV9FTkNPRElORyk7XG4gICAgcmV0dXJuIHsgaGVhZGVyLCBwYXlsb2FkLCBzaWduYXR1cmUsIGRhdGEgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCJdLCJuYW1lcyI6WyJjb25jYXQiLCJ0b1N0cmluZyIsImZyb21TdHJpbmciLCJzYWZlSnNvblBhcnNlIiwic2FmZUpzb25TdHJpbmdpZnkiLCJEQVRBX0VOQ09ESU5HIiwiRElEX0RFTElNSVRFUiIsIkRJRF9NRVRIT0QiLCJESURfUFJFRklYIiwiSlNPTl9FTkNPRElORyIsIkpXVF9ERUxJTUlURVIiLCJKV1RfRU5DT0RJTkciLCJNVUxUSUNPREVDX0VEMjU1MTlfQkFTRSIsIk1VTFRJQ09ERUNfRUQyNTUxOV9FTkNPRElORyIsIk1VTFRJQ09ERUNfRUQyNTUxOV9IRUFERVIiLCJNVUxUSUNPREVDX0VEMjU1MTlfTEVOR1RIIiwiZGVjb2RlSlNPTiIsInN0ciIsImVuY29kZUpTT04iLCJ2YWwiLCJlbmNvZGVJc3MiLCJwdWJsaWNLZXkiLCJoZWFkZXIiLCJtdWx0aWNvZGVjIiwiam9pbiIsImRlY29kZUlzcyIsImlzc3VlciIsInByZWZpeCIsIm1ldGhvZCIsInNwbGl0IiwiRXJyb3IiLCJiYXNlIiwic2xpY2UiLCJieXRlcyIsInR5cGUiLCJsZW5ndGgiLCJlbmNvZGVTaWciLCJkZWNvZGVTaWciLCJlbmNvZGVkIiwiZW5jb2RlRGF0YSIsInBhcmFtcyIsInBheWxvYWQiLCJkZWNvZGVEYXRhIiwiZGF0YSIsImVuY29kZUpXVCIsInNpZ25hdHVyZSIsImRlY29kZUpXVCIsImp3dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/utils.js\n");

/***/ })

};
;