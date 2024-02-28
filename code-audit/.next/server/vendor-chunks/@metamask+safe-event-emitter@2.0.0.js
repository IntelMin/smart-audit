"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@metamask+safe-event-emitter@2.0.0";
exports.ids = ["vendor-chunks/@metamask+safe-event-emitter@2.0.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@metamask+safe-event-emitter@2.0.0/node_modules/@metamask/safe-event-emitter/index.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@metamask+safe-event-emitter@2.0.0/node_modules/@metamask/safe-event-emitter/index.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst events_1 = __webpack_require__(/*! events */ \"events\");\nfunction safeApply(handler, context, args) {\n    try {\n        Reflect.apply(handler, context, args);\n    } catch (err) {\n        // Throw error after timeout so as not to interrupt the stack\n        setTimeout(()=>{\n            throw err;\n        });\n    }\n}\nfunction arrayClone(arr) {\n    const n = arr.length;\n    const copy = new Array(n);\n    for(let i = 0; i < n; i += 1){\n        copy[i] = arr[i];\n    }\n    return copy;\n}\nclass SafeEventEmitter extends events_1.EventEmitter {\n    emit(type, ...args) {\n        let doError = type === \"error\";\n        const events = this._events;\n        if (events !== undefined) {\n            doError = doError && events.error === undefined;\n        } else if (!doError) {\n            return false;\n        }\n        // If there is no 'error' event listener then throw.\n        if (doError) {\n            let er;\n            if (args.length > 0) {\n                [er] = args;\n            }\n            if (er instanceof Error) {\n                // Note: The comments on the `throw` lines are intentional, they show\n                // up in Node's output if this results in an unhandled exception.\n                throw er; // Unhandled 'error' event\n            }\n            // At least give some kind of context to the user\n            const err = new Error(`Unhandled error.${er ? ` (${er.message})` : \"\"}`);\n            err.context = er;\n            throw err; // Unhandled 'error' event\n        }\n        const handler = events[type];\n        if (handler === undefined) {\n            return false;\n        }\n        if (typeof handler === \"function\") {\n            safeApply(handler, this, args);\n        } else {\n            const len = handler.length;\n            const listeners = arrayClone(handler);\n            for(let i = 0; i < len; i += 1){\n                safeApply(listeners[i], this, args);\n            }\n        }\n        return true;\n    }\n}\nexports[\"default\"] = SafeEventEmitter; //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1ldGFtYXNrK3NhZmUtZXZlbnQtZW1pdHRlckAyLjAuMC9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL3NhZmUtZXZlbnQtZW1pdHRlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3RCxNQUFNQyxXQUFXQyxtQkFBT0EsQ0FBQyxzQkFBUTtBQUNqQyxTQUFTQyxVQUFVQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsSUFBSTtJQUNyQyxJQUFJO1FBQ0FDLFFBQVFDLEtBQUssQ0FBQ0osU0FBU0MsU0FBU0M7SUFDcEMsRUFDQSxPQUFPRyxLQUFLO1FBQ1IsNkRBQTZEO1FBQzdEQyxXQUFXO1lBQ1AsTUFBTUQ7UUFDVjtJQUNKO0FBQ0o7QUFDQSxTQUFTRSxXQUFXQyxHQUFHO0lBQ25CLE1BQU1DLElBQUlELElBQUlFLE1BQU07SUFDcEIsTUFBTUMsT0FBTyxJQUFJQyxNQUFNSDtJQUN2QixJQUFLLElBQUlJLElBQUksR0FBR0EsSUFBSUosR0FBR0ksS0FBSyxFQUFHO1FBQzNCRixJQUFJLENBQUNFLEVBQUUsR0FBR0wsR0FBRyxDQUFDSyxFQUFFO0lBQ3BCO0lBQ0EsT0FBT0Y7QUFDWDtBQUNBLE1BQU1HLHlCQUF5QmpCLFNBQVNrQixZQUFZO0lBQ2hEQyxLQUFLQyxJQUFJLEVBQUUsR0FBR2YsSUFBSSxFQUFFO1FBQ2hCLElBQUlnQixVQUFVRCxTQUFTO1FBQ3ZCLE1BQU1FLFNBQVMsSUFBSSxDQUFDQyxPQUFPO1FBQzNCLElBQUlELFdBQVdFLFdBQVc7WUFDdEJILFVBQVVBLFdBQVdDLE9BQU9HLEtBQUssS0FBS0Q7UUFDMUMsT0FDSyxJQUFJLENBQUNILFNBQVM7WUFDZixPQUFPO1FBQ1g7UUFDQSxvREFBb0Q7UUFDcEQsSUFBSUEsU0FBUztZQUNULElBQUlLO1lBQ0osSUFBSXJCLEtBQUtRLE1BQU0sR0FBRyxHQUFHO2dCQUNqQixDQUFDYSxHQUFHLEdBQUdyQjtZQUNYO1lBQ0EsSUFBSXFCLGNBQWNDLE9BQU87Z0JBQ3JCLHFFQUFxRTtnQkFDckUsaUVBQWlFO2dCQUNqRSxNQUFNRCxJQUFJLDBCQUEwQjtZQUN4QztZQUNBLGlEQUFpRDtZQUNqRCxNQUFNbEIsTUFBTSxJQUFJbUIsTUFBTSxDQUFDLGdCQUFnQixFQUFFRCxLQUFLLENBQUMsRUFBRSxFQUFFQSxHQUFHRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3ZFcEIsSUFBSUosT0FBTyxHQUFHc0I7WUFDZCxNQUFNbEIsS0FBSywwQkFBMEI7UUFDekM7UUFDQSxNQUFNTCxVQUFVbUIsTUFBTSxDQUFDRixLQUFLO1FBQzVCLElBQUlqQixZQUFZcUIsV0FBVztZQUN2QixPQUFPO1FBQ1g7UUFDQSxJQUFJLE9BQU9yQixZQUFZLFlBQVk7WUFDL0JELFVBQVVDLFNBQVMsSUFBSSxFQUFFRTtRQUM3QixPQUNLO1lBQ0QsTUFBTXdCLE1BQU0xQixRQUFRVSxNQUFNO1lBQzFCLE1BQU1pQixZQUFZcEIsV0FBV1A7WUFDN0IsSUFBSyxJQUFJYSxJQUFJLEdBQUdBLElBQUlhLEtBQUtiLEtBQUssRUFBRztnQkFDN0JkLFVBQVU0QixTQUFTLENBQUNkLEVBQUUsRUFBRSxJQUFJLEVBQUVYO1lBQ2xDO1FBQ0o7UUFDQSxPQUFPO0lBQ1g7QUFDSjtBQUNBUCxrQkFBZSxHQUFHbUIsa0JBQ2xCLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NtYXJ0LWF1ZGl0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL0BtZXRhbWFzaytzYWZlLWV2ZW50LWVtaXR0ZXJAMi4wLjAvbm9kZV9tb2R1bGVzL0BtZXRhbWFzay9zYWZlLWV2ZW50LWVtaXR0ZXIvaW5kZXguanM/NmQ0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGV2ZW50c18xID0gcmVxdWlyZShcImV2ZW50c1wiKTtcbmZ1bmN0aW9uIHNhZmVBcHBseShoYW5kbGVyLCBjb250ZXh0LCBhcmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgUmVmbGVjdC5hcHBseShoYW5kbGVyLCBjb250ZXh0LCBhcmdzKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBUaHJvdyBlcnJvciBhZnRlciB0aW1lb3V0IHNvIGFzIG5vdCB0byBpbnRlcnJ1cHQgdGhlIHN0YWNrXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcnJheUNsb25lKGFycikge1xuICAgIGNvbnN0IG4gPSBhcnIubGVuZ3RoO1xuICAgIGNvbnN0IGNvcHkgPSBuZXcgQXJyYXkobik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcbiAgICAgICAgY29weVtpXSA9IGFycltpXTtcbiAgICB9XG4gICAgcmV0dXJuIGNvcHk7XG59XG5jbGFzcyBTYWZlRXZlbnRFbWl0dGVyIGV4dGVuZHMgZXZlbnRzXzEuRXZlbnRFbWl0dGVyIHtcbiAgICBlbWl0KHR5cGUsIC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IGRvRXJyb3IgPSB0eXBlID09PSAnZXJyb3InO1xuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICAgIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZG9FcnJvciA9IGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWRvRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gICAgICAgIGlmIChkb0Vycm9yKSB7XG4gICAgICAgICAgICBsZXQgZXI7XG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgW2VyXSA9IGFyZ3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgICAgICAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICAgICAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoYFVuaGFuZGxlZCBlcnJvci4ke2VyID8gYCAoJHtlci5tZXNzYWdlfSlgIDogJyd9YCk7XG4gICAgICAgICAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgICAgICAgICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG4gICAgICAgIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHNhZmVBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBzYWZlQXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTYWZlRXZlbnRFbWl0dGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZXZlbnRzXzEiLCJyZXF1aXJlIiwic2FmZUFwcGx5IiwiaGFuZGxlciIsImNvbnRleHQiLCJhcmdzIiwiUmVmbGVjdCIsImFwcGx5IiwiZXJyIiwic2V0VGltZW91dCIsImFycmF5Q2xvbmUiLCJhcnIiLCJuIiwibGVuZ3RoIiwiY29weSIsIkFycmF5IiwiaSIsIlNhZmVFdmVudEVtaXR0ZXIiLCJFdmVudEVtaXR0ZXIiLCJlbWl0IiwidHlwZSIsImRvRXJyb3IiLCJldmVudHMiLCJfZXZlbnRzIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJlciIsIkVycm9yIiwibWVzc2FnZSIsImxlbiIsImxpc3RlbmVycyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@metamask+safe-event-emitter@2.0.0/node_modules/@metamask/safe-event-emitter/index.js\n");

/***/ })

};
;