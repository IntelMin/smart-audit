"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@walletconnect+jsonrpc-ws-connection@1.0.14";
exports.ids = ["vendor-chunks/@walletconnect+jsonrpc-ws-connection@1.0.14"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+jsonrpc-ws-connection@1.0.14/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+jsonrpc-ws-connection@1.0.14/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WsConnection: () => (/* binding */ f),\n/* harmony export */   \"default\": () => (/* binding */ f)\n/* harmony export */ });\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"events\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @walletconnect/safe-json */ \"(ssr)/./node_modules/.pnpm/@walletconnect+safe-json@1.0.2/node_modules/@walletconnect/safe-json/dist/esm/index.js\");\n/* harmony import */ var _walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @walletconnect/jsonrpc-utils */ \"(ssr)/./node_modules/.pnpm/@walletconnect+jsonrpc-utils@1.0.8/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js\");\n\n\n\nconst w = ()=>typeof WebSocket < \"u\" ? WebSocket : typeof global < \"u\" && typeof global.WebSocket < \"u\" ? global.WebSocket :  false ? 0 : typeof self < \"u\" && typeof self.WebSocket < \"u\" ? self.WebSocket : __webpack_require__(/*! ws */ \"(ssr)/./node_modules/.pnpm/ws@7.5.9/node_modules/ws/index.js\"), b = ()=>typeof WebSocket < \"u\" || typeof global < \"u\" && typeof global.WebSocket < \"u\" ||  false && 0 || typeof self < \"u\" && typeof self.WebSocket < \"u\", a = (c)=>c.split(\"?\")[0], h = 10, S = w();\nclass f {\n    constructor(e){\n        if (this.url = e, this.events = new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter, this.registering = !1, !(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.isWsUrl)(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);\n        this.url = e;\n    }\n    get connected() {\n        return typeof this.socket < \"u\";\n    }\n    get connecting() {\n        return this.registering;\n    }\n    on(e, t) {\n        this.events.on(e, t);\n    }\n    once(e, t) {\n        this.events.once(e, t);\n    }\n    off(e, t) {\n        this.events.off(e, t);\n    }\n    removeListener(e, t) {\n        this.events.removeListener(e, t);\n    }\n    async open(e = this.url) {\n        await this.register(e);\n    }\n    async close() {\n        return new Promise((e, t)=>{\n            if (typeof this.socket > \"u\") {\n                t(new Error(\"Connection already closed\"));\n                return;\n            }\n            this.socket.onclose = (n)=>{\n                this.onClose(n), e();\n            }, this.socket.close();\n        });\n    }\n    async send(e) {\n        typeof this.socket > \"u\" && (this.socket = await this.register());\n        try {\n            this.socket.send((0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__.safeJsonStringify)(e));\n        } catch (t) {\n            this.onError(e.id, t);\n        }\n    }\n    register(e = this.url) {\n        if (!(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.isWsUrl)(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);\n        if (this.registering) {\n            const t = this.events.getMaxListeners();\n            return (this.events.listenerCount(\"register_error\") >= t || this.events.listenerCount(\"open\") >= t) && this.events.setMaxListeners(t + 1), new Promise((n, o)=>{\n                this.events.once(\"register_error\", (s)=>{\n                    this.resetMaxListeners(), o(s);\n                }), this.events.once(\"open\", ()=>{\n                    if (this.resetMaxListeners(), typeof this.socket > \"u\") return o(new Error(\"WebSocket connection is missing or invalid\"));\n                    n(this.socket);\n                });\n            });\n        }\n        return this.url = e, this.registering = !0, new Promise((t, n)=>{\n            const o = new URLSearchParams(e).get(\"origin\"), s = (0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.isReactNative)() ? {\n                headers: {\n                    origin: o\n                }\n            } : {\n                rejectUnauthorized: !(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.isLocalhostUrl)(e)\n            }, i = new S(e, [], s);\n            b() ? i.onerror = (r)=>{\n                const l = r;\n                n(this.emitError(l.error));\n            } : i.on(\"error\", (r)=>{\n                n(this.emitError(r));\n            }), i.onopen = ()=>{\n                this.onOpen(i), t(i);\n            };\n        });\n    }\n    onOpen(e) {\n        e.onmessage = (t)=>this.onPayload(t), e.onclose = (t)=>this.onClose(t), this.socket = e, this.registering = !1, this.events.emit(\"open\");\n    }\n    onClose(e) {\n        this.socket = void 0, this.registering = !1, this.events.emit(\"close\", e);\n    }\n    onPayload(e) {\n        if (typeof e.data > \"u\") return;\n        const t = typeof e.data == \"string\" ? (0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__.safeJsonParse)(e.data) : e.data;\n        this.events.emit(\"payload\", t);\n    }\n    onError(e, t) {\n        const n = this.parseError(t), o = n.message || n.toString(), s = (0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcError)(e, o);\n        this.events.emit(\"payload\", s);\n    }\n    parseError(e, t = this.url) {\n        return (0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.parseConnectionError)(e, a(t), \"WS\");\n    }\n    resetMaxListeners() {\n        this.events.getMaxListeners() > h && this.events.setMaxListeners(h);\n    }\n    emitError(e) {\n        const t = this.parseError(new Error(e?.message || `WebSocket connection failed for host: ${a(this.url)}`));\n        return this.events.emit(\"register_error\", t), t;\n    }\n}\n //# sourceMappingURL=index.es.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QranNvbnJwYy13cy1jb25uZWN0aW9uQDEuMC4xNC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvanNvbnJwYy13cy1jb25uZWN0aW9uL2Rpc3QvaW5kZXguZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNDO0FBQWdGO0FBQWdKO0FBQUEsTUFBTWdCLElBQUUsSUFBSSxPQUFPQyxZQUFVLE1BQUlBLFlBQVUsT0FBT0MsU0FBTyxPQUFLLE9BQU9BLE9BQU9ELFNBQVMsR0FBQyxNQUFJQyxPQUFPRCxTQUFTLEdBQUMsTUFBOEMsR0FBQ0UsQ0FBZ0IsR0FBQyxPQUFPQyxPQUFLLE9BQUssT0FBT0EsS0FBS0gsU0FBUyxHQUFDLE1BQUlHLEtBQUtILFNBQVMsR0FBQ0ksbUJBQU9BLENBQUMsd0VBQUksR0FBRUMsSUFBRSxJQUFJLE9BQU9MLFlBQVUsT0FBSyxPQUFPQyxTQUFPLE9BQUssT0FBT0EsT0FBT0QsU0FBUyxHQUFDLE9BQUssTUFBaUIsSUFBRSxDQUEyQixJQUFFLE9BQU9HLE9BQUssT0FBSyxPQUFPQSxLQUFLSCxTQUFTLEdBQUMsS0FBSU0sSUFBRUMsQ0FBQUEsSUFBR0EsRUFBRUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUNDLElBQUUsSUFBR0MsSUFBRVg7QUFBSSxNQUFNWTtJQUFFQyxZQUFZQyxDQUFDLENBQUM7UUFBQyxJQUFHLElBQUksQ0FBQ0MsR0FBRyxHQUFDRCxHQUFFLElBQUksQ0FBQ0UsTUFBTSxHQUFDLElBQUkvQixnREFBQ0EsRUFBQyxJQUFJLENBQUNnQyxXQUFXLEdBQUMsQ0FBQyxHQUFFLENBQUMxQixxRUFBQ0EsQ0FBQ3VCLElBQUcsTUFBTSxJQUFJSSxNQUFNLENBQUMsMERBQTBELEVBQUVKLEVBQUUsQ0FBQztRQUFFLElBQUksQ0FBQ0MsR0FBRyxHQUFDRDtJQUFDO0lBQUMsSUFBSUssWUFBVztRQUFDLE9BQU8sT0FBTyxJQUFJLENB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QyxJQUFJO1FBQUMsSUFBSSxDQUFDM0MsTUFBTSxDQUFDMEMsSUFBSSxDQUFDLFdBQVVuQztJQUFFO0lBQUNZLFFBQVFyQixDQUFDLEVBQUNTLENBQUMsRUFBQztRQUFDLE1BQU1TLElBQUUsSUFBSSxDQUFDNEIsVUFBVSxDQUFDckMsSUFBR2lCLElBQUVSLEVBQUU2QixPQUFPLElBQUU3QixFQUFFOEIsUUFBUSxJQUFHckIsSUFBRTVDLGdGQUFDQSxDQUFDaUIsR0FBRTBCO1FBQUcsSUFBSSxDQUFDeEIsTUFBTSxDQUFDMEMsSUFBSSxDQUFDLFdBQVVqQjtJQUFFO0lBQUNtQixXQUFXOUMsQ0FBQyxFQUFDUyxJQUFFLElBQUksQ0FBQ1IsR0FBRyxFQUFDO1FBQUMsT0FBT2hCLGtGQUFDQSxDQUFDZSxHQUFFUCxFQUFFZ0IsSUFBRztJQUFLO0lBQUNtQixvQkFBbUI7UUFBQyxJQUFJLENBQUMxQixNQUFNLENBQUNxQixlQUFlLEtBQUczQixLQUFHLElBQUksQ0FBQ00sTUFBTSxDQUFDdUIsZUFBZSxDQUFDN0I7SUFBRTtJQUFDMEMsVUFBVXRDLENBQUMsRUFBQztRQUFDLE1BQU1TLElBQUUsSUFBSSxDQUFDcUMsVUFBVSxDQUFDLElBQUkxQyxNQUFNSixHQUFHK0MsV0FBUyxDQUFDLHNDQUFzQyxFQUFFdEQsRUFBRSxJQUFJLENBQUNRLEdBQUcsRUFBRSxDQUFDO1FBQUcsT0FBTyxJQUFJLENBQUNDLE1BQU0sQ0FBQzBDLElBQUksQ0FBQyxrQkFBaUJuQyxJQUFHQTtJQUFDO0FBQUM7QUFBd0MsQ0FDdmhHLG9DQUFvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NtYXJ0LWF1ZGl0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL0B3YWxsZXRjb25uZWN0K2pzb25ycGMtd3MtY29ubmVjdGlvbkAxLjAuMTQvbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2pzb25ycGMtd3MtY29ubmVjdGlvbi9kaXN0L2luZGV4LmVzLmpzPzA2Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0e0V2ZW50RW1pdHRlciBhcyB1fWZyb21cImV2ZW50c1wiO2ltcG9ydHtzYWZlSnNvblN0cmluZ2lmeSBhcyBwLHNhZmVKc29uUGFyc2UgYXMgZ31mcm9tXCJAd2FsbGV0Y29ubmVjdC9zYWZlLWpzb25cIjtpbXBvcnR7aXNXc1VybCBhcyBkLGlzUmVhY3ROYXRpdmUgYXMgeSxpc0xvY2FsaG9zdFVybCBhcyBtLGZvcm1hdEpzb25ScGNFcnJvciBhcyBrLHBhcnNlQ29ubmVjdGlvbkVycm9yIGFzIHZ9ZnJvbVwiQHdhbGxldGNvbm5lY3QvanNvbnJwYy11dGlsc1wiO2NvbnN0IHc9KCk9PnR5cGVvZiBXZWJTb2NrZXQ8XCJ1XCI/V2ViU29ja2V0OnR5cGVvZiBnbG9iYWw8XCJ1XCImJnR5cGVvZiBnbG9iYWwuV2ViU29ja2V0PFwidVwiP2dsb2JhbC5XZWJTb2NrZXQ6dHlwZW9mIHdpbmRvdzxcInVcIiYmdHlwZW9mIHdpbmRvdy5XZWJTb2NrZXQ8XCJ1XCI/d2luZG93LldlYlNvY2tldDp0eXBlb2Ygc2VsZjxcInVcIiYmdHlwZW9mIHNlbGYuV2ViU29ja2V0PFwidVwiP3NlbGYuV2ViU29ja2V0OnJlcXVpcmUoXCJ3c1wiKSxiPSgpPT50eXBlb2YgV2ViU29ja2V0PFwidVwifHx0eXBlb2YgZ2xvYmFsPFwidVwiJiZ0eXBlb2YgZ2xvYmFsLldlYlNvY2tldDxcInVcInx8dHlwZW9mIHdpbmRvdzxcInVcIiYmdHlwZW9mIHdpbmRvdy5XZWJTb2NrZXQ8XCJ1XCJ8fHR5cGVvZiBzZWxmPFwidVwiJiZ0eXBlb2Ygc2VsZi5XZWJTb2NrZXQ8XCJ1XCIsYT1jPT5jLnNwbGl0KFwiP1wiKVswXSxoPTEwLFM9dygpO2NsYXNzIGZ7Y29uc3RydWN0b3IoZSl7aWYodGhpcy51cmw9ZSx0aGlzLmV2ZW50cz1uZXcgdSx0aGlzLnJlZ2lzdGVyaW5nPSExLCFkKGUpKXRocm93IG5ldyBFcnJvcihgUHJvdmlkZWQgVVJMIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggV2ViU29ja2V0IGNvbm5lY3Rpb246ICR7ZX1gKTt0aGlzLnVybD1lfWdldCBjb25uZWN0ZWQoKXtyZXR1cm4gdHlwZW9mIHRoaXMuc29ja2V0PFwidVwifWdldCBjb25uZWN0aW5nKCl7cmV0dXJuIHRoaXMucmVnaXN0ZXJpbmd9b24oZSx0KXt0aGlzLmV2ZW50cy5vbihlLHQpfW9uY2UoZSx0KXt0aGlzLmV2ZW50cy5vbmNlKGUsdCl9b2ZmKGUsdCl7dGhpcy5ldmVudHMub2ZmKGUsdCl9cmVtb3ZlTGlzdGVuZXIoZSx0KXt0aGlzLmV2ZW50cy5yZW1vdmVMaXN0ZW5lcihlLHQpfWFzeW5jIG9wZW4oZT10aGlzLnVybCl7YXdhaXQgdGhpcy5yZWdpc3RlcihlKX1hc3luYyBjbG9zZSgpe3JldHVybiBuZXcgUHJvbWlzZSgoZSx0KT0+e2lmKHR5cGVvZiB0aGlzLnNvY2tldD5cInVcIil7dChuZXcgRXJyb3IoXCJDb25uZWN0aW9uIGFscmVhZHkgY2xvc2VkXCIpKTtyZXR1cm59dGhpcy5zb2NrZXQub25jbG9zZT1uPT57dGhpcy5vbkNsb3NlKG4pLGUoKX0sdGhpcy5zb2NrZXQuY2xvc2UoKX0pfWFzeW5jIHNlbmQoZSl7dHlwZW9mIHRoaXMuc29ja2V0PlwidVwiJiYodGhpcy5zb2NrZXQ9YXdhaXQgdGhpcy5yZWdpc3RlcigpKTt0cnl7dGhpcy5zb2NrZXQuc2VuZChwKGUpKX1jYXRjaCh0KXt0aGlzLm9uRXJyb3IoZS5pZCx0KX19cmVnaXN0ZXIoZT10aGlzLnVybCl7aWYoIWQoZSkpdGhyb3cgbmV3IEVycm9yKGBQcm92aWRlZCBVUkwgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBXZWJTb2NrZXQgY29ubmVjdGlvbjogJHtlfWApO2lmKHRoaXMucmVnaXN0ZXJpbmcpe2NvbnN0IHQ9dGhpcy5ldmVudHMuZ2V0TWF4TGlzdGVuZXJzKCk7cmV0dXJuKHRoaXMuZXZlbnRzLmxpc3RlbmVyQ291bnQoXCJyZWdpc3Rlcl9lcnJvclwiKT49dHx8dGhpcy5ldmVudHMubGlzdGVuZXJDb3VudChcIm9wZW5cIik+PXQpJiZ0aGlzLmV2ZW50cy5zZXRNYXhMaXN0ZW5lcnModCsxKSxuZXcgUHJvbWlzZSgobixvKT0+e3RoaXMuZXZlbnRzLm9uY2UoXCJyZWdpc3Rlcl9lcnJvclwiLHM9Pnt0aGlzLnJlc2V0TWF4TGlzdGVuZXJzKCksbyhzKX0pLHRoaXMuZXZlbnRzLm9uY2UoXCJvcGVuXCIsKCk9PntpZih0aGlzLnJlc2V0TWF4TGlzdGVuZXJzKCksdHlwZW9mIHRoaXMuc29ja2V0PlwidVwiKXJldHVybiBvKG5ldyBFcnJvcihcIldlYlNvY2tldCBjb25uZWN0aW9uIGlzIG1pc3Npbmcgb3IgaW52YWxpZFwiKSk7bih0aGlzLnNvY2tldCl9KX0pfXJldHVybiB0aGlzLnVybD1lLHRoaXMucmVnaXN0ZXJpbmc9ITAsbmV3IFByb21pc2UoKHQsbik9Pntjb25zdCBvPW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkuZ2V0KFwib3JpZ2luXCIpLHM9eSgpP3toZWFkZXJzOntvcmlnaW46b319OntyZWplY3RVbmF1dGhvcml6ZWQ6IW0oZSl9LGk9bmV3IFMoZSxbXSxzKTtiKCk/aS5vbmVycm9yPXI9Pntjb25zdCBsPXI7bih0aGlzLmVtaXRFcnJvcihsLmVycm9yKSl9Omkub24oXCJlcnJvclwiLHI9PntuKHRoaXMuZW1pdEVycm9yKHIpKX0pLGkub25vcGVuPSgpPT57dGhpcy5vbk9wZW4oaSksdChpKX19KX1vbk9wZW4oZSl7ZS5vbm1lc3NhZ2U9dD0+dGhpcy5vblBheWxvYWQodCksZS5vbmNsb3NlPXQ9PnRoaXMub25DbG9zZSh0KSx0aGlzLnNvY2tldD1lLHRoaXMucmVnaXN0ZXJpbmc9ITEsdGhpcy5ldmVudHMuZW1pdChcIm9wZW5cIil9b25DbG9zZShlKXt0aGlzLnNvY2tldD12b2lkIDAsdGhpcy5yZWdpc3RlcmluZz0hMSx0aGlzLmV2ZW50cy5lbWl0KFwiY2xvc2VcIixlKX1vblBheWxvYWQoZSl7aWYodHlwZW9mIGUuZGF0YT5cInVcIilyZXR1cm47Y29uc3QgdD10eXBlb2YgZS5kYXRhPT1cInN0cmluZ1wiP2coZS5kYXRhKTplLmRhdGE7dGhpcy5ldmVudHMuZW1pdChcInBheWxvYWRcIix0KX1vbkVycm9yKGUsdCl7Y29uc3Qgbj10aGlzLnBhcnNlRXJyb3IodCksbz1uLm1lc3NhZ2V8fG4udG9TdHJpbmcoKSxzPWsoZSxvKTt0aGlzLmV2ZW50cy5lbWl0KFwicGF5bG9hZFwiLHMpfXBhcnNlRXJyb3IoZSx0PXRoaXMudXJsKXtyZXR1cm4gdihlLGEodCksXCJXU1wiKX1yZXNldE1heExpc3RlbmVycygpe3RoaXMuZXZlbnRzLmdldE1heExpc3RlbmVycygpPmgmJnRoaXMuZXZlbnRzLnNldE1heExpc3RlbmVycyhoKX1lbWl0RXJyb3IoZSl7Y29uc3QgdD10aGlzLnBhcnNlRXJyb3IobmV3IEVycm9yKGU/Lm1lc3NhZ2V8fGBXZWJTb2NrZXQgY29ubmVjdGlvbiBmYWlsZWQgZm9yIGhvc3Q6ICR7YSh0aGlzLnVybCl9YCkpO3JldHVybiB0aGlzLmV2ZW50cy5lbWl0KFwicmVnaXN0ZXJfZXJyb3JcIix0KSx0fX1leHBvcnR7ZiBhcyBXc0Nvbm5lY3Rpb24sZiBhcyBkZWZhdWx0fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzLmpzLm1hcFxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsInUiLCJzYWZlSnNvblN0cmluZ2lmeSIsInAiLCJzYWZlSnNvblBhcnNlIiwiZyIsImlzV3NVcmwiLCJkIiwiaXNSZWFjdE5hdGl2ZSIsInkiLCJpc0xvY2FsaG9zdFVybCIsIm0iLCJmb3JtYXRKc29uUnBjRXJyb3IiLCJrIiwicGFyc2VDb25uZWN0aW9uRXJyb3IiLCJ2IiwidyIsIldlYlNvY2tldCIsImdsb2JhbCIsIndpbmRvdyIsInNlbGYiLCJyZXF1aXJlIiwiYiIsImEiLCJjIiwic3BsaXQiLCJoIiwiUyIsImYiLCJjb25zdHJ1Y3RvciIsImUiLCJ1cmwiLCJldmVudHMiLCJyZWdpc3RlcmluZyIsIkVycm9yIiwiY29ubmVjdGVkIiwic29ja2V0IiwiY29ubmVjdGluZyIsIm9uIiwidCIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsIm9wZW4iLCJyZWdpc3RlciIsImNsb3NlIiwiUHJvbWlzZSIsIm9uY2xvc2UiLCJuIiwib25DbG9zZSIsInNlbmQiLCJvbkVycm9yIiwiaWQiLCJnZXRNYXhMaXN0ZW5lcnMiLCJsaXN0ZW5lckNvdW50Iiwic2V0TWF4TGlzdGVuZXJzIiwibyIsInMiLCJyZXNldE1heExpc3RlbmVycyIsIlVSTFNlYXJjaFBhcmFtcyIsImdldCIsImhlYWRlcnMiLCJvcmlnaW4iLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJpIiwib25lcnJvciIsInIiLCJsIiwiZW1pdEVycm9yIiwiZXJyb3IiLCJvbm9wZW4iLCJvbk9wZW4iLCJvbm1lc3NhZ2UiLCJvblBheWxvYWQiLCJlbWl0IiwiZGF0YSIsInBhcnNlRXJyb3IiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJXc0Nvbm5lY3Rpb24iLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+jsonrpc-ws-connection@1.0.14/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js\n");

/***/ })

};
;