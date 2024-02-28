"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@tanstack+query-persist-client-core@4.36.1";
exports.ids = ["vendor-chunks/@tanstack+query-persist-client-core@4.36.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@tanstack+query-persist-client-core@4.36.1/node_modules/@tanstack/query-persist-client-core/build/lib/persist.mjs":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tanstack+query-persist-client-core@4.36.1/node_modules/@tanstack/query-persist-client-core/build/lib/persist.mjs ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   persistQueryClient: () => (/* binding */ persistQueryClient),\n/* harmony export */   persistQueryClientRestore: () => (/* binding */ persistQueryClientRestore),\n/* harmony export */   persistQueryClientSave: () => (/* binding */ persistQueryClientSave),\n/* harmony export */   persistQueryClientSubscribe: () => (/* binding */ persistQueryClientSubscribe)\n/* harmony export */ });\n/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/query-core */ \"(ssr)/./node_modules/.pnpm/@tanstack+query-core@4.36.1/node_modules/@tanstack/query-core/build/lib/hydration.mjs\");\n\n/**\n * Checks if emitted event is about cache change and not about observers.\n * Useful for persist, where we only want to trigger save when cache is changed.\n */ const cacheableEventTypes = [\n    \"added\",\n    \"removed\",\n    \"updated\"\n];\nfunction isCacheableEventType(eventType) {\n    return cacheableEventTypes.includes(eventType);\n}\n/**\n * Restores persisted data to the QueryCache\n *  - data obtained from persister.restoreClient\n *  - data is hydrated using hydrateOptions\n * If data is expired, busted, empty, or throws, it runs persister.removeClient\n */ async function persistQueryClientRestore({ queryClient, persister, maxAge = 1000 * 60 * 60 * 24, buster = \"\", hydrateOptions }) {\n    try {\n        const persistedClient = await persister.restoreClient();\n        if (persistedClient) {\n            if (persistedClient.timestamp) {\n                const expired = Date.now() - persistedClient.timestamp > maxAge;\n                const busted = persistedClient.buster !== buster;\n                if (expired || busted) {\n                    persister.removeClient();\n                } else {\n                    (0,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__.hydrate)(queryClient, persistedClient.clientState, hydrateOptions);\n                }\n            } else {\n                persister.removeClient();\n            }\n        }\n    } catch (err) {\n        if (true) {\n            queryClient.getLogger().error(err);\n            queryClient.getLogger().warn(\"Encountered an error attempting to restore client cache from persisted location. As a precaution, the persisted cache will be discarded.\");\n        }\n        persister.removeClient();\n    }\n}\n/**\n * Persists data from the QueryCache\n *  - data dehydrated using dehydrateOptions\n *  - data is persisted using persister.persistClient\n */ async function persistQueryClientSave({ queryClient, persister, buster = \"\", dehydrateOptions }) {\n    const persistClient = {\n        buster,\n        timestamp: Date.now(),\n        clientState: (0,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__.dehydrate)(queryClient, dehydrateOptions)\n    };\n    await persister.persistClient(persistClient);\n}\n/**\n * Subscribe to QueryCache and MutationCache updates (for persisting)\n * @returns an unsubscribe function (to discontinue monitoring)\n */ function persistQueryClientSubscribe(props) {\n    const unsubscribeQueryCache = props.queryClient.getQueryCache().subscribe((event)=>{\n        if (isCacheableEventType(event.type)) {\n            persistQueryClientSave(props);\n        }\n    });\n    const unusbscribeMutationCache = props.queryClient.getMutationCache().subscribe((event)=>{\n        if (isCacheableEventType(event.type)) {\n            persistQueryClientSave(props);\n        }\n    });\n    return ()=>{\n        unsubscribeQueryCache();\n        unusbscribeMutationCache();\n    };\n}\n/**\n * Restores persisted data to QueryCache and persists further changes.\n */ function persistQueryClient(props) {\n    let hasUnsubscribed = false;\n    let persistQueryClientUnsubscribe;\n    const unsubscribe = ()=>{\n        hasUnsubscribed = true;\n        persistQueryClientUnsubscribe == null ? void 0 : persistQueryClientUnsubscribe();\n    }; // Attempt restore\n    const restorePromise = persistQueryClientRestore(props).then(()=>{\n        if (!hasUnsubscribed) {\n            // Subscribe to changes in the query cache to trigger the save\n            persistQueryClientUnsubscribe = persistQueryClientSubscribe(props);\n        }\n    });\n    return [\n        unsubscribe,\n        restorePromise\n    ];\n}\n //# sourceMappingURL=persist.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRhbnN0YWNrK3F1ZXJ5LXBlcnNpc3QtY2xpZW50LWNvcmVANC4zNi4xL25vZGVfbW9kdWxlcy9AdGFuc3RhY2svcXVlcnktcGVyc2lzdC1jbGllbnQtY29yZS9idWlsZC9saWIvcGVyc2lzdC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEQ7QUFFMUQ7OztDQUdDLEdBQ0QsTUFBTUUsc0JBQXNCO0lBQUM7SUFBUztJQUFXO0NBQVU7QUFFM0QsU0FBU0MscUJBQXFCQyxTQUFTO0lBQ3JDLE9BQU9GLG9CQUFvQkcsUUFBUSxDQUFDRDtBQUN0QztBQUNBOzs7OztDQUtDLEdBR0QsZUFBZUUsMEJBQTBCLEVBQ3ZDQyxXQUFXLEVBQ1hDLFNBQVMsRUFDVEMsU0FBUyxPQUFPLEtBQUssS0FBSyxFQUFFLEVBQzVCQyxTQUFTLEVBQUUsRUFDWEMsY0FBYyxFQUNmO0lBQ0MsSUFBSTtRQUNGLE1BQU1DLGtCQUFrQixNQUFNSixVQUFVSyxhQUFhO1FBRXJELElBQUlELGlCQUFpQjtZQUNuQixJQUFJQSxnQkFBZ0JFLFNBQVMsRUFBRTtnQkFDN0IsTUFBTUMsVUFBVUMsS0FBS0MsR0FBRyxLQUFLTCxnQkFBZ0JFLFNBQVMsR0FBR0w7Z0JBQ3pELE1BQU1TLFNBQVNOLGdCQUFnQkYsTUFBTSxLQUFLQTtnQkFFMUMsSUFBSUssV0FBV0csUUFBUTtvQkFDckJWLFVBQVVXLFlBQVk7Z0JBQ3hCLE9BQU87b0JBQ0xuQiw2REFBT0EsQ0FBQ08sYUFBYUssZ0JBQWdCUSxXQUFXLEVBQUVUO2dCQUNwRDtZQUNGLE9BQU87Z0JBQ0xILFVBQVVXLFlBQVk7WUFDeEI7UUFDRjtJQUNGLEVBQUUsT0FBT0UsS0FBSztRQUNaLElBQUlDLElBQXlCLEVBQWM7WUFDekNmLFlBQVlnQixTQUFTLEdBQUdDLEtBQUssQ0FBQ0g7WUFDOUJkLFlBQVlnQixTQUFTLEdBQUdFLElBQUksQ0FBQztRQUMvQjtRQUVBakIsVUFBVVcsWUFBWTtJQUN4QjtBQUNGO0FBQ0E7Ozs7Q0FJQyxHQUVELGVBQWVPLHVCQUF1QixFQUNwQ25CLFdBQVcsRUFDWEMsU0FBUyxFQUNURSxTQUFTLEVBQUUsRUFDWGlCLGdCQUFnQixFQUNqQjtJQUNDLE1BQU1DLGdCQUFnQjtRQUNwQmxCO1FBQ0FJLFdBQVdFLEtBQUtDLEdBQUc7UUFDbkJHLGFBQWFuQiwrREFBU0EsQ0FBQ00sYUFBYW9CO0lBQ3RDO0lBQ0EsTUFBTW5CLFVBQVVvQixhQUFhLENBQUNBO0FBQ2hDO0FBQ0E7OztDQUdDLEdBRUQsU0FBU0MsNEJBQTRCQyxLQUFLO0lBQ3hDLE1BQU1DLHdCQUF3QkQsTUFBTXZCLFdBQVcsQ0FBQ3lCLGFBQWEsR0FBR0MsU0FBUyxDQUFDQyxDQUFBQTtRQUN4RSxJQUFJL0IscUJBQXFCK0IsTUFBTUMsSUFBSSxHQUFHO1lBQ3BDVCx1QkFBdUJJO1FBQ3pCO0lBQ0Y7SUFDQSxNQUFNTSwyQkFBMkJOLE1BQU12QixXQUFXLENBQUM4QixnQkFBZ0IsR0FBR0osU0FBUyxDQUFDQyxDQUFBQTtRQUM5RSxJQUFJL0IscUJBQXFCK0IsTUFBTUMsSUFBSSxHQUFHO1lBQ3BDVCx1QkFBdUJJO1FBQ3pCO0lBQ0Y7SUFDQSxPQUFPO1FBQ0xDO1FBQ0FLO0lBQ0Y7QUFDRjtBQUNBOztDQUVDLEdBRUQsU0FBU0UsbUJBQW1CUixLQUFLO0lBQy9CLElBQUlTLGtCQUFrQjtJQUN0QixJQUFJQztJQUVKLE1BQU1DLGNBQWM7UUFDbEJGLGtCQUFrQjtRQUNsQkMsaUNBQWlDLE9BQU8sS0FBSyxJQUFJQTtJQUNuRCxHQUFHLGtCQUFrQjtJQUdyQixNQUFNRSxpQkFBaUJwQywwQkFBMEJ3QixPQUFPYSxJQUFJLENBQUM7UUFDM0QsSUFBSSxDQUFDSixpQkFBaUI7WUFDcEIsOERBQThEO1lBQzlEQyxnQ0FBZ0NYLDRCQUE0QkM7UUFDOUQ7SUFDRjtJQUNBLE9BQU87UUFBQ1c7UUFBYUM7S0FBZTtBQUN0QztBQUU4RyxDQUM5RyxvQ0FBb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1hdWRpdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AdGFuc3RhY2srcXVlcnktcGVyc2lzdC1jbGllbnQtY29yZUA0LjM2LjEvbm9kZV9tb2R1bGVzL0B0YW5zdGFjay9xdWVyeS1wZXJzaXN0LWNsaWVudC1jb3JlL2J1aWxkL2xpYi9wZXJzaXN0Lm1qcz8xYTlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh5ZHJhdGUsIGRlaHlkcmF0ZSB9IGZyb20gJ0B0YW5zdGFjay9xdWVyeS1jb3JlJztcblxuLyoqXG4gKiBDaGVja3MgaWYgZW1pdHRlZCBldmVudCBpcyBhYm91dCBjYWNoZSBjaGFuZ2UgYW5kIG5vdCBhYm91dCBvYnNlcnZlcnMuXG4gKiBVc2VmdWwgZm9yIHBlcnNpc3QsIHdoZXJlIHdlIG9ubHkgd2FudCB0byB0cmlnZ2VyIHNhdmUgd2hlbiBjYWNoZSBpcyBjaGFuZ2VkLlxuICovXG5jb25zdCBjYWNoZWFibGVFdmVudFR5cGVzID0gWydhZGRlZCcsICdyZW1vdmVkJywgJ3VwZGF0ZWQnXTtcblxuZnVuY3Rpb24gaXNDYWNoZWFibGVFdmVudFR5cGUoZXZlbnRUeXBlKSB7XG4gIHJldHVybiBjYWNoZWFibGVFdmVudFR5cGVzLmluY2x1ZGVzKGV2ZW50VHlwZSk7XG59XG4vKipcbiAqIFJlc3RvcmVzIHBlcnNpc3RlZCBkYXRhIHRvIHRoZSBRdWVyeUNhY2hlXG4gKiAgLSBkYXRhIG9idGFpbmVkIGZyb20gcGVyc2lzdGVyLnJlc3RvcmVDbGllbnRcbiAqICAtIGRhdGEgaXMgaHlkcmF0ZWQgdXNpbmcgaHlkcmF0ZU9wdGlvbnNcbiAqIElmIGRhdGEgaXMgZXhwaXJlZCwgYnVzdGVkLCBlbXB0eSwgb3IgdGhyb3dzLCBpdCBydW5zIHBlcnNpc3Rlci5yZW1vdmVDbGllbnRcbiAqL1xuXG5cbmFzeW5jIGZ1bmN0aW9uIHBlcnNpc3RRdWVyeUNsaWVudFJlc3RvcmUoe1xuICBxdWVyeUNsaWVudCxcbiAgcGVyc2lzdGVyLFxuICBtYXhBZ2UgPSAxMDAwICogNjAgKiA2MCAqIDI0LFxuICBidXN0ZXIgPSAnJyxcbiAgaHlkcmF0ZU9wdGlvbnNcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwZXJzaXN0ZWRDbGllbnQgPSBhd2FpdCBwZXJzaXN0ZXIucmVzdG9yZUNsaWVudCgpO1xuXG4gICAgaWYgKHBlcnNpc3RlZENsaWVudCkge1xuICAgICAgaWYgKHBlcnNpc3RlZENsaWVudC50aW1lc3RhbXApIHtcbiAgICAgICAgY29uc3QgZXhwaXJlZCA9IERhdGUubm93KCkgLSBwZXJzaXN0ZWRDbGllbnQudGltZXN0YW1wID4gbWF4QWdlO1xuICAgICAgICBjb25zdCBidXN0ZWQgPSBwZXJzaXN0ZWRDbGllbnQuYnVzdGVyICE9PSBidXN0ZXI7XG5cbiAgICAgICAgaWYgKGV4cGlyZWQgfHwgYnVzdGVkKSB7XG4gICAgICAgICAgcGVyc2lzdGVyLnJlbW92ZUNsaWVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGh5ZHJhdGUocXVlcnlDbGllbnQsIHBlcnNpc3RlZENsaWVudC5jbGllbnRTdGF0ZSwgaHlkcmF0ZU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZXJzaXN0ZXIucmVtb3ZlQ2xpZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcXVlcnlDbGllbnQuZ2V0TG9nZ2VyKCkuZXJyb3IoZXJyKTtcbiAgICAgIHF1ZXJ5Q2xpZW50LmdldExvZ2dlcigpLndhcm4oJ0VuY291bnRlcmVkIGFuIGVycm9yIGF0dGVtcHRpbmcgdG8gcmVzdG9yZSBjbGllbnQgY2FjaGUgZnJvbSBwZXJzaXN0ZWQgbG9jYXRpb24uIEFzIGEgcHJlY2F1dGlvbiwgdGhlIHBlcnNpc3RlZCBjYWNoZSB3aWxsIGJlIGRpc2NhcmRlZC4nKTtcbiAgICB9XG5cbiAgICBwZXJzaXN0ZXIucmVtb3ZlQ2xpZW50KCk7XG4gIH1cbn1cbi8qKlxuICogUGVyc2lzdHMgZGF0YSBmcm9tIHRoZSBRdWVyeUNhY2hlXG4gKiAgLSBkYXRhIGRlaHlkcmF0ZWQgdXNpbmcgZGVoeWRyYXRlT3B0aW9uc1xuICogIC0gZGF0YSBpcyBwZXJzaXN0ZWQgdXNpbmcgcGVyc2lzdGVyLnBlcnNpc3RDbGllbnRcbiAqL1xuXG5hc3luYyBmdW5jdGlvbiBwZXJzaXN0UXVlcnlDbGllbnRTYXZlKHtcbiAgcXVlcnlDbGllbnQsXG4gIHBlcnNpc3RlcixcbiAgYnVzdGVyID0gJycsXG4gIGRlaHlkcmF0ZU9wdGlvbnNcbn0pIHtcbiAgY29uc3QgcGVyc2lzdENsaWVudCA9IHtcbiAgICBidXN0ZXIsXG4gICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgIGNsaWVudFN0YXRlOiBkZWh5ZHJhdGUocXVlcnlDbGllbnQsIGRlaHlkcmF0ZU9wdGlvbnMpXG4gIH07XG4gIGF3YWl0IHBlcnNpc3Rlci5wZXJzaXN0Q2xpZW50KHBlcnNpc3RDbGllbnQpO1xufVxuLyoqXG4gKiBTdWJzY3JpYmUgdG8gUXVlcnlDYWNoZSBhbmQgTXV0YXRpb25DYWNoZSB1cGRhdGVzIChmb3IgcGVyc2lzdGluZylcbiAqIEByZXR1cm5zIGFuIHVuc3Vic2NyaWJlIGZ1bmN0aW9uICh0byBkaXNjb250aW51ZSBtb25pdG9yaW5nKVxuICovXG5cbmZ1bmN0aW9uIHBlcnNpc3RRdWVyeUNsaWVudFN1YnNjcmliZShwcm9wcykge1xuICBjb25zdCB1bnN1YnNjcmliZVF1ZXJ5Q2FjaGUgPSBwcm9wcy5xdWVyeUNsaWVudC5nZXRRdWVyeUNhY2hlKCkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICBpZiAoaXNDYWNoZWFibGVFdmVudFR5cGUoZXZlbnQudHlwZSkpIHtcbiAgICAgIHBlcnNpc3RRdWVyeUNsaWVudFNhdmUocHJvcHMpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IHVudXNic2NyaWJlTXV0YXRpb25DYWNoZSA9IHByb3BzLnF1ZXJ5Q2xpZW50LmdldE11dGF0aW9uQ2FjaGUoKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgIGlmIChpc0NhY2hlYWJsZUV2ZW50VHlwZShldmVudC50eXBlKSkge1xuICAgICAgcGVyc2lzdFF1ZXJ5Q2xpZW50U2F2ZShwcm9wcyk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICB1bnN1YnNjcmliZVF1ZXJ5Q2FjaGUoKTtcbiAgICB1bnVzYnNjcmliZU11dGF0aW9uQ2FjaGUoKTtcbiAgfTtcbn1cbi8qKlxuICogUmVzdG9yZXMgcGVyc2lzdGVkIGRhdGEgdG8gUXVlcnlDYWNoZSBhbmQgcGVyc2lzdHMgZnVydGhlciBjaGFuZ2VzLlxuICovXG5cbmZ1bmN0aW9uIHBlcnNpc3RRdWVyeUNsaWVudChwcm9wcykge1xuICBsZXQgaGFzVW5zdWJzY3JpYmVkID0gZmFsc2U7XG4gIGxldCBwZXJzaXN0UXVlcnlDbGllbnRVbnN1YnNjcmliZTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICBoYXNVbnN1YnNjcmliZWQgPSB0cnVlO1xuICAgIHBlcnNpc3RRdWVyeUNsaWVudFVuc3Vic2NyaWJlID09IG51bGwgPyB2b2lkIDAgOiBwZXJzaXN0UXVlcnlDbGllbnRVbnN1YnNjcmliZSgpO1xuICB9OyAvLyBBdHRlbXB0IHJlc3RvcmVcblxuXG4gIGNvbnN0IHJlc3RvcmVQcm9taXNlID0gcGVyc2lzdFF1ZXJ5Q2xpZW50UmVzdG9yZShwcm9wcykudGhlbigoKSA9PiB7XG4gICAgaWYgKCFoYXNVbnN1YnNjcmliZWQpIHtcbiAgICAgIC8vIFN1YnNjcmliZSB0byBjaGFuZ2VzIGluIHRoZSBxdWVyeSBjYWNoZSB0byB0cmlnZ2VyIHRoZSBzYXZlXG4gICAgICBwZXJzaXN0UXVlcnlDbGllbnRVbnN1YnNjcmliZSA9IHBlcnNpc3RRdWVyeUNsaWVudFN1YnNjcmliZShwcm9wcyk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIFt1bnN1YnNjcmliZSwgcmVzdG9yZVByb21pc2VdO1xufVxuXG5leHBvcnQgeyBwZXJzaXN0UXVlcnlDbGllbnQsIHBlcnNpc3RRdWVyeUNsaWVudFJlc3RvcmUsIHBlcnNpc3RRdWVyeUNsaWVudFNhdmUsIHBlcnNpc3RRdWVyeUNsaWVudFN1YnNjcmliZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGVyc2lzdC5tanMubWFwXG4iXSwibmFtZXMiOlsiaHlkcmF0ZSIsImRlaHlkcmF0ZSIsImNhY2hlYWJsZUV2ZW50VHlwZXMiLCJpc0NhY2hlYWJsZUV2ZW50VHlwZSIsImV2ZW50VHlwZSIsImluY2x1ZGVzIiwicGVyc2lzdFF1ZXJ5Q2xpZW50UmVzdG9yZSIsInF1ZXJ5Q2xpZW50IiwicGVyc2lzdGVyIiwibWF4QWdlIiwiYnVzdGVyIiwiaHlkcmF0ZU9wdGlvbnMiLCJwZXJzaXN0ZWRDbGllbnQiLCJyZXN0b3JlQ2xpZW50IiwidGltZXN0YW1wIiwiZXhwaXJlZCIsIkRhdGUiLCJub3ciLCJidXN0ZWQiLCJyZW1vdmVDbGllbnQiLCJjbGllbnRTdGF0ZSIsImVyciIsInByb2Nlc3MiLCJnZXRMb2dnZXIiLCJlcnJvciIsIndhcm4iLCJwZXJzaXN0UXVlcnlDbGllbnRTYXZlIiwiZGVoeWRyYXRlT3B0aW9ucyIsInBlcnNpc3RDbGllbnQiLCJwZXJzaXN0UXVlcnlDbGllbnRTdWJzY3JpYmUiLCJwcm9wcyIsInVuc3Vic2NyaWJlUXVlcnlDYWNoZSIsImdldFF1ZXJ5Q2FjaGUiLCJzdWJzY3JpYmUiLCJldmVudCIsInR5cGUiLCJ1bnVzYnNjcmliZU11dGF0aW9uQ2FjaGUiLCJnZXRNdXRhdGlvbkNhY2hlIiwicGVyc2lzdFF1ZXJ5Q2xpZW50IiwiaGFzVW5zdWJzY3JpYmVkIiwicGVyc2lzdFF1ZXJ5Q2xpZW50VW5zdWJzY3JpYmUiLCJ1bnN1YnNjcmliZSIsInJlc3RvcmVQcm9taXNlIiwidGhlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tanstack+query-persist-client-core@4.36.1/node_modules/@tanstack/query-persist-client-core/build/lib/persist.mjs\n");

/***/ })

};
;