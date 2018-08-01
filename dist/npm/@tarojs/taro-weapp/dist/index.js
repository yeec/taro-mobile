"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){_defineProperty(t,e,n[e])})}return t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}Object.defineProperty(exports,"__esModule",{value:!0});var FUNC_ERROR_TEXT="Expected a function",HASH_UNDEFINED="__lodash_hash_undefined__",INFINITY=1/0,funcTag="[object Function]",genTag="[object GeneratorFunction]",symbolTag="[object Symbol]",reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reEscapeChar=/\\(\\)?/g,reIsHostCtor=/^\[object .+?Constructor\]$/,freeGlobal="object"===("undefined"==typeof global?"undefined":_typeof(global))&&global&&global.Object===Object&&global,freeSelf="object"===("undefined"==typeof self?"undefined":_typeof(self))&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),MAX_SAFE_INTEGER=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;function getValue(e,t){return null==e?void 0:e[t]}function isHostObject(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype,coreJsData=root["__core-js_shared__"],maskSrcKey=function(){var e=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,objectToString=objectProto.toString,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_Symbol=root.Symbol,splice=arrayProto.splice,Map$1=getNative(root,"Map"),nativeCreate=getNative(Object,"create"),symbolProto=_Symbol?_Symbol.prototype:void 0,symbolToString=symbolProto?symbolProto.toString:void 0;function Hash(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{}}function hashDelete(e){return this.has(e)&&delete this.__data__[e]}function hashGet(e){var t=this.__data__;if(nativeCreate){var n=t[e];return n===HASH_UNDEFINED?void 0:n}return hasOwnProperty.call(t,e)?t[e]:void 0}function hashHas(e){var t=this.__data__;return nativeCreate?void 0!==t[e]:hasOwnProperty.call(t,e)}function hashSet(e,t){return this.__data__[e]=nativeCreate&&void 0===t?HASH_UNDEFINED:t,this}function ListCache(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function listCacheClear(){this.__data__=[]}function listCacheDelete(e){var t=this.__data__,n=assocIndexOf(t,e);return!(n<0)&&(n==t.length-1?t.pop():splice.call(t,n,1),!0)}function listCacheGet(e){var t=this.__data__,n=assocIndexOf(t,e);return n<0?void 0:t[n][1]}function listCacheHas(e){return-1<assocIndexOf(this.__data__,e)}function listCacheSet(e,t){var n=this.__data__,r=assocIndexOf(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}function MapCache(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function mapCacheClear(){this.__data__={hash:new Hash,map:new(Map$1||ListCache),string:new Hash}}function mapCacheDelete(e){return getMapData(this,e).delete(e)}function mapCacheGet(e){return getMapData(this,e).get(e)}function mapCacheHas(e){return getMapData(this,e).has(e)}function mapCacheSet(e,t){return getMapData(this,e).set(e,t),this}function assocIndexOf(e,t){for(var n=e.length;n--;)if(eq(e[n][0],t))return n;return-1}function baseGet(e,t){for(var n=0,r=(t=isKey(t,e)?[t]:castPath(t)).length;null!=e&&n<r;)e=e[toKey(t[n++])];return n&&n==r?e:void 0}function baseIsNative(e){return!(!isObject(e)||isMasked(e))&&(isFunction(e)||isHostObject(e)?reIsNative:reIsHostCtor).test(toSource(e))}function baseToString(e){if("string"==typeof e)return e;if(isSymbol(e))return symbolToString?symbolToString.call(e):"";var t=e+"";return"0"==t&&1/e==-INFINITY?"-0":t}function castPath(e){return isArray(e)?e:stringToPath(e)}function getMapData(e,t){var n=e.__data__;return isKeyable(t)?n["string"==typeof t?"string":"hash"]:n.map}function getNative(e,t){var n=getValue(e,t);return baseIsNative(n)?n:void 0}function isKey(e,t){if(isArray(e))return!1;var n=_typeof(e);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!isSymbol(e))||(reIsPlainProp.test(e)||!reIsDeepProp.test(e)||null!=t&&e in Object(t))}function isKeyable(e){var t=_typeof(e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}Hash.prototype.clear=hashClear,Hash.prototype.delete=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet,ListCache.prototype.clear=listCacheClear,ListCache.prototype.delete=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet,MapCache.prototype.clear=mapCacheClear,MapCache.prototype.delete=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet;var stringToPath=memoize(function(e){e=toString(e);var o=[];return reLeadingDot.test(e)&&o.push(""),e.replace(rePropName,function(e,t,n,r){o.push(n?r.replace(reEscapeChar,"$1"):t||e)}),o});function toKey(e){if("string"==typeof e||isSymbol(e))return e;var t=e+"";return"0"==t&&1/e==-INFINITY?"-0":t}function toSource(e){if(null!=e){try{return funcToString.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function memoize(a,i){if("function"!=typeof a||i&&"function"!=typeof i)throw new TypeError(FUNC_ERROR_TEXT);var e=function e(){var t=arguments,n=i?i.apply(this,t):t[0],r=e.cache;if(r.has(n))return r.get(n);var o=a.apply(this,t);return e.cache=r.set(n,o),o};return e.cache=new(memoize.Cache||MapCache),e}function eq(e,t){return e===t||e!=e&&t!=t}memoize.Cache=MapCache;var isArray=Array.isArray;function isFunction(e){var t=isObject(e)?objectToString.call(e):"";return t==funcTag||t==genTag}function isObject(e){var t=_typeof(e);return!!e&&("object"==t||"function"==t)}function isObjectLike(e){return!!e&&"object"===_typeof(e)}function isSymbol(e){return"symbol"===_typeof(e)||isObjectLike(e)&&objectToString.call(e)==symbolTag}function toString(e){return null==e?"":baseToString(e)}function isIndex(e,t){var n=_typeof(e);return!!(t=null==t?MAX_SAFE_INTEGER:t)&&("number"==n||"symbol"!=n&&reIsUint.test(e))&&-1<e&&e%1==0&&e<t}function baseAssignValue(e,t,n){"__proto__"==t?Object.defineProperty(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}hasOwnProperty=Object.prototype.hasOwnProperty;function assignValue(e,t,n){var r=e[t];hasOwnProperty.call(e,t)&&eq(r,n)&&(void 0!==n||t in e)||baseAssignValue(e,t,n)}function baseSet(e,t,n,r){if(!isObject(e))return e;for(var o=(t=castPath(t,e)).length,a=o-1,i=-1,c=e;null!=c&&++i<o;){var s=toKey(t[i]),p=n;if(i!=a){var u=c[s];void 0===(p=r?r(u,s,c):void 0)&&(p=isObject(u)?u:isIndex(t[i+1])?[]:{})}assignValue(c,s,p),c=c[s]}return e}function get(e,t,n){var r=null==e?void 0:baseGet(e,t);return void 0===r?n:r}function set(e,t,n){return null==e?e:baseSet(e,t,n)}function dynamicRecursive(i,e,n,c){return n=n||[],e.map(function(o,a){var e=o.subscript?n[o.subscript]||[]:n,t={name:o.name||"",path:o.path||"",subscript:o.subscript,components:[]};return t.name?t.components=e.map(function(e,t){var n,r={fn:"dy_".concat(c,"_").concat(o.subscript,"_").concat(o.name).concat(t,"_").concat(a),body:(n=e,Object.assign({$name:"dy_".concat(c,"_").concat(o.subscript,"_").concat(o.name).concat(t)},o.args&&o.args.call(i,n,t)))};return o.children&&o.children.length&&(r.children=dynamicRecursive(i,o.children,e,c)),r}):o.children&&o.children.length&&(t.children=e.map(function(e,t){return dynamicRecursive(i,o.children,e,c)})),t})}function dashify(e,t){if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\W/g,function(e){return/[À-ž]/.test(e)?e:"-"}).replace(/^-+|-+$/g,"").replace(/-{2,}/g,function(e){return t&&t.condense?"-":e}).toLowerCase()}function isObject$1(e){return null!=e&&"object"===_typeof(e)&&!1===Array.isArray(e)}function inlineStyle(t){if("string"==typeof t)return t;if(!isObject$1(t))throw new TypeError("style 只能是一个对象或字符串。");return Object.keys(t).map(function(e){return dashify(e).concat(":").concat(t[e])}).join(";")}var ENV_TYPE={WEAPP:"WEAPP",WEB:"WEB",RN:"RN"};function getEnv(){return"undefined"!=typeof wx&&wx.getSystemInfo?ENV_TYPE.WEAPP:"undefined"!=typeof window?ENV_TYPE.WEB:"undefined"!=typeof global&&global.ErrorUtils?ENV_TYPE.RN:"Unknown environment"}var Events=function(){function p(e){_classCallCheck(this,p),void 0!==e&&e.callbacks?this.callbacks=e.callbacks:this.callbacks={}}return _createClass(p,[{key:"on",value:function(e,t,n){var r,o,a,i,c;if(!t)return this;for(e=e.split(p.eventSplitter),r=this.callbacks;o=e.shift();)(a=(c=r[o])?c.tail:{}).next=i={},a.context=n,a.callback=t,r[o]={tail:i,next:c?c.next:a};return this}},{key:"off",value:function(e,t,n){var r,o,a,i,c,s;if(!(o=this.callbacks))return this;if(!(e||t||n))return delete this.callbacks,this;for(e=e?e.split(p.eventSplitter):Object.keys(o);r=e.shift();)if(a=o[r],delete o[r],a&&(t||n))for(i=a.tail;(a=a.next)!==i;)c=a.callback,s=a.context,(t&&c!==t||n&&s!==n)&&this.on(r,c,s);return this}},{key:"trigger",value:function(e){var t,n,r,o,a;if(!(r=this.callbacks))return this;for(e=e.split(p.eventSplitter),a=[].slice.call(arguments,1);t=e.shift();)if(n=r[t])for(o=n.tail;(n=n.next)!==o;)n.callback.apply(n.context||this,a);return this}}]),p}();function render(){}Events.eventSplitter=/\s+/;var onAndSyncApis={onSocketOpen:!0,onSocketError:!0,onSocketMessage:!0,onSocketClose:!0,onBackgroundAudioPlay:!0,onBackgroundAudioPause:!0,onBackgroundAudioStop:!0,onNetworkStatusChange:!0,onAccelerometerChange:!0,onCompassChange:!0,onBluetoothAdapterStateChange:!0,onBluetoothDeviceFound:!0,onBLEConnectionStateChange:!0,onBLECharacteristicValueChange:!0,onBeaconUpdate:!0,onBeaconServiceChange:!0,onUserCaptureScreen:!0,onHCEMessage:!0,onGetWifiList:!0,onWifiConnected:!0,setStorageSync:!0,getStorageSync:!0,getStorageInfoSync:!0,removeStorageSync:!0,clearStorageSync:!0,getSystemInfoSync:!0,getExtConfigSync:!0,getLogManager:!0},noPromiseApis={stopRecord:!0,getRecorderManager:!0,pauseVoice:!0,stopVoice:!0,pauseBackgroundAudio:!0,stopBackgroundAudio:!0,getBackgroundAudioManager:!0,createAudioContext:!0,createInnerAudioContext:!0,createVideoContext:!0,createCameraContext:!0,navigateBack:!0,createMapContext:!0,canIUse:!0,startAccelerometer:!0,stopAccelerometer:!0,startCompass:!0,stopCompass:!0,hideToast:!0,hideLoading:!0,showNavigationBarLoading:!0,hideNavigationBarLoading:!0,createAnimation:!0,pageScrollTo:!0,createSelectorQuery:!0,createCanvasContext:!0,createContext:!0,drawCanvas:!0,hideKeyboard:!0,stopPullDownRefresh:!0,arrayBufferToBase64:!0,base64ToArrayBuffer:!0,getUpdateManager:!0,createWorker:!0},otherApis={uploadFile:!0,downloadFile:!0,connectSocket:!0,sendSocketMessage:!0,closeSocket:!0,chooseImage:!0,previewImage:!0,getImageInfo:!0,saveImageToPhotosAlbum:!0,startRecord:!0,playVoice:!0,getBackgroundAudioPlayerState:!0,playBackgroundAudio:!0,seekBackgroundAudio:!0,chooseVideo:!0,saveVideoToPhotosAlbum:!0,loadFontFace:!0,saveFile:!0,getFileInfo:!0,getSavedFileList:!0,getSavedFileInfo:!0,removeSavedFile:!0,openDocument:!0,setStorage:!0,getStorage:!0,getStorageInfo:!0,removeStorage:!0,clearStorage:!0,navigateTo:!0,redirectTo:!0,switchTab:!0,reLaunch:!0,getLocation:!0,chooseLocation:!0,openLocation:!0,getSystemInfo:!0,getNetworkType:!0,makePhoneCall:!0,scanCode:!0,setClipboardData:!0,getClipboardData:!0,openBluetoothAdapter:!0,closeBluetoothAdapter:!0,getBluetoothAdapterState:!0,startBluetoothDevicesDiscovery:!0,stopBluetoothDevicesDiscovery:!0,getBluetoothDevices:!0,getConnectedBluetoothDevices:!0,createBLEConnection:!0,closeBLEConnection:!0,getBLEDeviceServices:!0,getBLEDeviceCharacteristics:!0,readBLECharacteristicValue:!0,writeBLECharacteristicValue:!0,notifyBLECharacteristicValueChange:!0,startBeaconDiscovery:!0,stopBeaconDiscovery:!0,getBeacons:!0,setScreenBrightness:!0,getScreenBrightness:!0,setKeepScreenOn:!0,vibrateLong:!0,vibrateShort:!0,addPhoneContact:!0,getHCEState:!0,startHCE:!0,stopHCE:!0,sendHCEMessage:!0,startWifi:!0,stopWifi:!0,connectWifi:!0,getWifiList:!0,setWifiList:!0,getConnectedWifi:!0,showToast:!0,showLoading:!0,showModal:!0,showActionSheet:!0,setNavigationBarTitle:!0,setNavigationBarColor:!0,setTabBarBadge:!0,removeTabBarBadge:!0,showTabBarRedDot:!0,hideTabBarRedDot:!0,setTabBarStyle:!0,setTabBarItem:!0,showTabBar:!0,hideTabBar:!0,setTopBarText:!0,startPullDownRefresh:!0,canvasToTempFilePath:!0,canvasGetImageData:!0,canvasPutImageData:!0,getExtConfig:!0,login:!0,checkSession:!0,authorize:!0,getUserInfo:!0,requestPayment:!0,showShareMenu:!0,hideShareMenu:!0,updateShareMenu:!0,getShareInfo:!0,chooseAddress:!0,addCard:!0,openCard:!0,openSetting:!0,getSetting:!0,getWeRunData:!0,navigateToMiniProgram:!0,navigateBackMiniProgram:!0,chooseInvoiceTitle:!0,checkIsSupportSoterAuthentication:!0,startSoterAuthentication:!0,checkIsSoterEnrolledInDevice:!0},eventCenter=new Events;function isEmptyObject(e){if(!e)return!1;for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1;return!0}function getPrototype(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor.prototype}function getPrototypeChain(e){for(var t=[];e=getPrototype(e);)t.push(e);return t}var nextTick=function(e){for(var t,n=arguments.length,r=new Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e="function"==typeof e?(t=e).bind.apply(t,[null].concat(r)):e,setTimeout(e)};function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}function makeEmptyFunction(e){return function(){return e}}var emptyFunction=function(){};emptyFunction.thatReturns=makeEmptyFunction,emptyFunction.thatReturnsFalse=makeEmptyFunction(!1),emptyFunction.thatReturnsTrue=makeEmptyFunction(!0),emptyFunction.thatReturnsNull=makeEmptyFunction(null),emptyFunction.thatReturnsThis=function(){return this},emptyFunction.thatReturnsArgument=function(e){return e};var emptyFunction_1=emptyFunction,validateFormat=function(e){};function invariant(e,t,n,r,o,a,i,c){if(validateFormat(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[n,r,o,a,i,c],u=0;(s=new Error(t.replace(/%s/g,function(){return p[u++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}var printWarning,invariant_1=invariant,warning=emptyFunction_1,warning_1=warning,getOwnPropertySymbols=Object.getOwnPropertySymbols,hasOwnProperty$1=Object.prototype.hasOwnProperty,propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function shouldUseNative(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var invariant$1,warning$1,ReactPropTypesSecret$1,loggedTypeFailures,objectAssign=shouldUseNative()?Object.assign:function(e,t){for(var n,r,o=toObject(e),a=1;a<arguments.length;a++){for(var i in n=Object(arguments[a]))hasOwnProperty$1.call(n,i)&&(o[i]=n[i]);if(getOwnPropertySymbols){r=getOwnPropertySymbols(n);for(var c=0;c<r.length;c++)propIsEnumerable.call(n,r[c])&&(o[r[c]]=n[r[c]])}}return o},ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ReactPropTypesSecret_1=ReactPropTypesSecret;function checkPropTypes(e,t,n,r,o){}var checkPropTypes_1=checkPropTypes,factoryWithTypeCheckers=function(c,s){var a="function"==typeof Symbol&&Symbol.iterator,i="@@iterator";var p="<<anonymous>>",e={array:t("array"),bool:t("boolean"),func:t("function"),number:t("number"),object:t("object"),string:t("string"),symbol:t("symbol"),any:n(emptyFunction_1.thatReturnsNull),arrayOf:function(p){return n(function(e,t,n,r,o){if("function"!=typeof p)return new f("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var a=e[t];if(!Array.isArray(a)){var i=h(a);return new f("Invalid "+r+" `"+o+"` of type `"+i+"` supplied to `"+n+"`, expected an array.")}for(var c=0;c<a.length;c++){var s=p(a,c,n,r,o+"["+c+"]",ReactPropTypesSecret_1);if(s instanceof Error)return s}return null})},element:n(function(e,t,n,r,o){var a=e[t];if(!c(a)){var i=h(a);return new f("Invalid "+r+" `"+o+"` of type `"+i+"` supplied to `"+n+"`, expected a single ReactElement.")}return null}),instanceOf:function(c){return n(function(e,t,n,r,o){if(!(e[t]instanceof c)){var a=c.name||p,i=function(e){if(!e.constructor||!e.constructor.name)return p;return e.constructor.name}(e[t]);return new f("Invalid "+r+" `"+o+"` of type `"+i+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}return null})},node:n(function(e,t,n,r,o){return l(e[t])?null:new f("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}),objectOf:function(p){return n(function(e,t,n,r,o){if("function"!=typeof p)return new f("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var a=e[t],i=h(a);if("object"!==i)return new f("Invalid "+r+" `"+o+"` of type `"+i+"` supplied to `"+n+"`, expected an object.");for(var c in a)if(a.hasOwnProperty(c)){var s=p(a,c,n,r,o+"."+c,ReactPropTypesSecret_1);if(s instanceof Error)return s}return null})},oneOf:function(s){if(!Array.isArray(s))return emptyFunction_1.thatReturnsNull;return n(function(e,t,n,r,o){for(var a=e[t],i=0;i<s.length;i++)if(u(a,s[i]))return null;var c=JSON.stringify(s);return new f("Invalid "+r+" `"+o+"` of value `"+a+"` supplied to `"+n+"`, expected one of "+c+".")})},oneOfType:function(c){if(!Array.isArray(c))return emptyFunction_1.thatReturnsNull;for(var e=0;e<c.length;e++){var t=c[e];if("function"!=typeof t)return warning_1(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",r(t),e),emptyFunction_1.thatReturnsNull}return n(function(e,t,n,r,o){for(var a=0;a<c.length;a++){var i=c[a];if(null==i(e,t,n,r,o,ReactPropTypesSecret_1))return null}return new f("Invalid "+r+" `"+o+"` supplied to `"+n+"`.")})},shape:function(u){return n(function(e,t,n,r,o){var a=e[t],i=h(a);if("object"!==i)return new f("Invalid "+r+" `"+o+"` of type `"+i+"` supplied to `"+n+"`, expected `object`.");for(var c in u){var s=u[c];if(s){var p=s(a,c,n,r,o+"."+c,ReactPropTypesSecret_1);if(p)return p}}return null})},exact:function(l){return n(function(e,t,n,r,o){var a=e[t],i=h(a);if("object"!==i)return new f("Invalid "+r+" `"+o+"` of type `"+i+"` supplied to `"+n+"`, expected `object`.");var c=objectAssign({},e[t],l);for(var s in c){var p=l[s];if(!p)return new f("Invalid "+r+" `"+o+"` key `"+s+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(e[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(l),null,"  "));var u=p(a,s,n,r,o+"."+s,ReactPropTypesSecret_1);if(u)return u}return null})}};function u(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e){this.message=e,this.stack=""}function n(c){function e(e,t,n,r,o,a,i){(r=r||p,a=a||n,i!==ReactPropTypesSecret_1)&&(s&&invariant_1(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"));return null==t[n]?e?null===t[n]?new f("The "+o+" `"+a+"` is marked as required in `"+r+"`, but its value is `null`."):new f("The "+o+" `"+a+"` is marked as required in `"+r+"`, but its value is `undefined`."):null:c(t,n,r,o,a)}var t=e.bind(null,!1);return t.isRequired=e.bind(null,!0),t}function t(c){return n(function(e,t,n,r,o,a){var i=e[t];return h(i)!==c?new f("Invalid "+r+" `"+o+"` of type `"+y(i)+"` supplied to `"+n+"`, expected `"+c+"`."):null})}function l(e){switch(_typeof(e)){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(l);if(null===e||c(e))return!0;var t=function(e){var t=e&&(a&&e[a]||e[i]);if("function"==typeof t)return t}(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!l(n.value))return!1}else for(;!(n=r.next()).done;){var o=n.value;if(o&&!l(o[1]))return!1}return!0;default:return!1}}function h(e){var t,n=_typeof(e);return Array.isArray(e)?"array":e instanceof RegExp?"object":(t=e,"symbol"===n||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol?"symbol":n)}function y(e){if(null==e)return""+e;var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function r(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,e.checkPropTypes=checkPropTypes_1,e.PropTypes=e},factoryWithThrowingShims=function(){function e(e,t,n,r,o,a){a!==ReactPropTypesSecret_1&&invariant_1(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=emptyFunction_1,n.PropTypes=n},propTypes=createCommonjsModule(function(e){e.exports=factoryWithThrowingShims()}),eventPreffix="__event_",rootScopeKey="__root_",componentPath="componentPath",scopeMap={},pageExtraFns=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap"];function processEvent(s,p,e){var u=p.replace(eventPreffix,"");e[u]||(e[u]=function(e){e&&(e.preventDefault=function(){},e.stopPropagation=function(){},Object.assign(e.target,e.detail),Object.assign(e.currentTarget,e.detail));var r=e.currentTarget.dataset,t=scopeMap[s][r[componentPath]||rootScopeKey],n=t,o={},a=r.componentClass,i=(a?u.replace("".concat(a,"__"),""):u).toLocaleLowerCase();if(Object.keys(r).forEach(function(e){var t=e.toLocaleLowerCase();if("e"===t[0]&&0===t.indexOf("e".concat(i))){var n=t.replace("e".concat(i),"");o[n]=r[e]}}),isEmptyObject(o))r[componentPath]&&(n=scopeMap[s][r[componentPath]||rootScopeKey]),t[p].call(n,e);else{"this"!==o.so&&(n=o.so),delete o.so;var c=Object.keys(o).sort().map(function(e){return o[e]});c.push(e);t[p].apply(n,c)}})}function initPage(e,n,t){var r=t.path;return scopeMap[r]=scopeMap[r]||{},function i(c,s,e){for(var t in s.$path=e||"",s.props.$path=s.$path,e?scopeMap[r][e]=s:scopeMap[r][rootScopeKey]=s,isEmptyObject(s.$components)||Object.getOwnPropertyNames(s.$components).forEach(function(e){var t=s.$components[e],n="".concat(s.$path,"$$").concat(e),r=(s.$props||{})[e]||{},o="function"==typeof r?r.call(s):r,a=new t(o=transformPropsForComponent(o,t.defaultProps,t.propTypes));s.$$components[e]=a,i(c,a,n)}),s)0<=t.indexOf(eventPreffix)&&(n[t.replace(eventPreffix,"")]=s[t],processEvent(r,t,c));return getPrototypeChain(s).forEach(function(e){Object.getOwnPropertyNames(e).forEach(function(e){0<=e.indexOf(eventPreffix)&&(n[e.replace(eventPreffix,"")]=s[e],processEvent(r,e,c))})}),c}(e,n)}function processDynamicComponents(e,y,d,g){var m=e.path;scopeMap[m]=scopeMap[m]||{},function f(h){h.$dynamicComponents&&!isEmptyObject(h.$dynamicComponents)&&(h.$$dynamicComponents=h.$$dynamicComponents||{},Object.getOwnPropertyNames(h.$dynamicComponents).forEach(function(e){var t,n=(0,h.$dynamicComponents[e])(),r=n.stateName,o=n.loopComponents,a=get(h.state,r);t=Array.isArray(a)?a.slice(0):Object.assign({},a),h._dyState=h._dyState||{},set(h._dyState,r,t),function p(e,u,l){e.forEach(function(e,t){if(Array.isArray(e))p(e,u[t],t);else{var s=e.path,n=e.components,r=e.children,o=e.subscript;(u=o?get(u,o):u)&&(n&&n.length&&n.forEach(function(e,t){var n,r="".concat(e.body.$path,"_").concat(t);Object.getOwnPropertyNames(h.$$dynamicComponents).forEach(function(e){e===r&&(n=h.$$dynamicComponents[e])});var o=transformPropsForComponent(e.body,s.defaultProps);if(n){var a=void 0===d||!d.$isComponent||d.$components.hasOwnProperty(n.constructor.name);o.$path=r,n.$path=r,n.props.$path=r,n.prevProps=n.prevProps||n.props,n.props=Object.assign({},n.props,o),n._init(h.$scope),n._initData(h.$root||h,h),a&&!g&&(n._unsafeCallUpdate=!0,updateComponent(n,!1),n._unsafeCallUpdate=!1)}else{n=new s(o);try{n.state=n._createData()}catch(e){console.error(e)}n.$path=r,n.props.$path=r,n._init(h.$scope),n._initData(h.$root||h,h),componentTrigger(n,"componentWillMount"),componentTrigger(n,"componentDidMount")}if(f(n),u&&(u[t]=Object.assign({},n.props,_objectSpread({},u[t]),Object.assign({},n.state,n._dyState||{}))),h.$$dynamicComponents[r]=n,scopeMap[m][r]=n,y){for(var i in n)0<=i.indexOf(eventPreffix)&&processEvent(m,i,y);var c=getPrototypeChain(n);c.forEach(function(e){Object.getOwnPropertyNames(e).forEach(function(e){0<=e.indexOf(eventPreffix)&&processEvent(m,e,y)})})}e.children&&e.children.length&&p(e.children,u[t],"".concat(t,"_").concat(l))}),r&&r.length&&p(r,u,l))}})}(o,t,-1)}))}(e)}function componentTrigger(e,t){"componentWillUnmount"===t&&(e._dirty=!0,e._disable=!0,e.$components={},e.$$components={},e.$$dynamicComponents={},e.$router={params:{}},e._pendingStates=[],e._pendingCallbacks=[]),e[t]&&"function"==typeof e[t]&&e[t](),"componentWillMount"===t&&(e.$isComponent&&(e.$router.params=e.$root.$router.params),e._dirty=!1,e._disable=!1,e.state=e.getState(),e.$isComponent||updateComponent(e,!0,!0))}function transformPropsForComponent(e,t,n){var r={};for(var o in e){var a=e[o];r[o]=a}if(t)for(var i in t)void 0===r[i]&&(r[i]=t[i]);if(n)for(var c in n)void 0===r[c]&&(r[c]=n[c]);return r}function createPage(e,t){var n=new e(transformPropsForComponent({},e.defaultProps,e.propTypes));try{n.state=n._createData()}catch(e){console.error(e)}var r={props:Object.assign({},n.props),state:Object.assign({},n.state)};n.$isComponent=!1,n.path=t.path;var o={onLoad:function(e){n._init(this),processDynamicComponents(n,o),n._initData(),n.$router.params=e,componentTrigger(n,"componentWillMount")},onReady:function(){componentTrigger(n,"componentDidMount")},onShow:function(){componentTrigger(n,"componentDidShow")},onHide:function(){componentTrigger(n,"componentDidHide")},onUnload:function(){n.state=r.state,n.props=r.props,componentTrigger(n,"componentWillUnmount")},_setData:function(e,t,n){if(n){var r={};for(var o in e)void 0!==e[o]&&(r[o]=e[o]);this.setData(r,function(){t&&t()})}}},a=initPage(o,n,t);n._initData(),pageExtraFns.forEach(function(e){"function"==typeof n[e]&&(o[e]=n[e].bind(n))});var i={};return n.$usedState&&n.$usedState.length&&n.$usedState.forEach(function(e){var t=get(n.$data,e);set(i,e,t)}),Object.assign(a,{data:i})}var DEV="undefined"==typeof process||!process.env||!1;function updateComponent(t,e,n){var r=t.props,o=t.propTypes,a=t.type;DEV&&o&&(void 0)(o,r,"prop",a.name||a.toString().match(/^function\s*([^\s(]+)/)[1]);var i=t.prevProps||r;t.props=i,!0===t._unsafeCallUpdate&&t.componentWillReceiveProps&&(t._disable=!0,t.componentWillReceiveProps(r),t._disable=!1);var c=t.getState();t._createData&&(c=t._createData(c,r)),c.__data&&(c.__data.$path=t.$path);var s=t.prevState||c,p=!1;if(n||("function"==typeof t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(r,c)?p=!0:"function"==typeof t.componentWillUpdate&&t.componentWillUpdate(r,c)),t.props=r,t.state=c,t._dirty=!1,!p){var u={};Object.keys(t.props).forEach(function(e){"function"!=typeof t.props[e]&&(u[e]=t.props[e])}),Object.assign(t.$data,t.state,u),t.componentDidUpdate&&!n&&t.componentDidUpdate(i,s),doUpdate(t,e,n)}t.prevProps=t.props,t.prevState=t.state}function doUpdate(e,t,n){var r=e.$root?e.$root:e,o=r.$data;if(t&&(processDynamicComponents(r,null,e,n),o=Object.assign(o,r.state,r._dyState||{})),r.$usedState&&r.$usedState.length){var a={};r.$usedState.forEach(function(e){var t=get(o,e);set(a,e,t)}),o=a}e.$scope._setData(_objectSpread({},o),function(){if(e._pendingCallbacks)for(;e._pendingCallbacks.length;)e._pendingCallbacks.pop().call(e)},t)}var items=[];function enqueueRender(e){!e._dirty&&(e._dirty=!0)&&1===items.push(e)&&nextTick(rerender)}function rerender(){var e,t=items;for(items=[];e=t.pop();)e._dirty&&updateComponent(e,!0)}var Component$1=function(){function t(e){_classCallCheck(this,t),Object.defineProperty(this,"$components",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(this,"$$components",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(this,"$$dynamicComponents",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(this,"$router",{configurable:!0,enumerable:!0,writable:!0,value:{params:{}}}),Object.defineProperty(this,"$path",{configurable:!0,enumerable:!0,writable:!0,value:""}),Object.defineProperty(this,"$name",{configurable:!0,enumerable:!0,writable:!0,value:""}),Object.defineProperty(this,"$isComponent",{configurable:!0,enumerable:!0,writable:!0,value:!0}),Object.defineProperty(this,"$props",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(this,"nextProps",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(this,"_dirty",{configurable:!0,enumerable:!0,writable:!0,value:!0}),Object.defineProperty(this,"_disable",{configurable:!0,enumerable:!0,writable:!0,value:!0}),Object.defineProperty(this,"_pendingStates",{configurable:!0,enumerable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_pendingCallbacks",{configurable:!0,enumerable:!0,writable:!0,value:[]}),this.state={},this.props=e||{}}return _createClass(t,[{key:"_initData",value:function(e,t){var n=this;this.$app=getApp(),this.$root=e||null,this.$parent=t||null,this.defaultData={},this.$data={};var r=this.state;for(var o in this._dyState&&(r=Object.assign({},this.state,this._dyState)),r)this.$data[o]=r[o];if(this.props)for(var a in this.props)"function"!=typeof this.props[a]&&(this.$data[a]=this.props[a]);this.$$dynamicComponents&&!isEmptyObject(this.$$dynamicComponents)&&Object.getOwnPropertyNames(this.$$dynamicComponents).forEach(function(e){n.$$dynamicComponents[e]._initData(n.$root||n,n)})}},{key:"_init",value:function(e){var t=this;this.$scope=e,this.$app=getApp(),this.$$dynamicComponents&&!isEmptyObject(this.$$dynamicComponents)&&Object.getOwnPropertyNames(this.$$dynamicComponents).forEach(function(e){t.$$dynamicComponents[e]._init(t.$scope)})}},{key:"_createData",value:function(){return this.state}},{key:"setState",value:function(e,t){e&&(this._pendingStates=this._pendingStates||[]).push(e),"function"==typeof t&&(this._pendingCallbacks=this._pendingCallbacks||[]).push(t),this._disable||enqueueRender(this)}},{key:"getState",value:function(){var t=this,e=this._pendingStates,n=this.state,r=this.props,o=Object.assign({},n);if(delete o.__data,!e.length)return o;var a=e.concat();return this._pendingStates.length=0,a.forEach(function(e){"function"==typeof e&&(e=e.call(t,o,r)),Object.assign(o,e)}),o}},{key:"forceUpdate",value:function(e){"function"==typeof e&&(this._pendingCallbacks=this._pendingCallbacks||[]).push(e),updateComponent(this,!0)}}]),t}();function shallowEqual(e,t){if(null===e||null===t)return!1;if(Object.is(e,t))return!0;var n=e?Object.keys(e):[],r=t?Object.keys(t):[];if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++){var a=n[o];if(!t.hasOwnProperty(a)||!Object.is(e[a],t[a]))return!1}return!0}Object.defineProperty(Component$1,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.is=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};var PureComponent=function(e){function i(){var e,t,n;_classCallCheck(this,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return _possibleConstructorReturn(n,(t=n=_possibleConstructorReturn(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(o))),Object.defineProperty(_assertThisInitialized(n),"isPureComponent",{configurable:!0,enumerable:!0,writable:!0,value:!0}),t))}return _inherits(i,Component$1),_createClass(i,[{key:"shouldComponentUpdate",value:function(e,t){return!shallowEqual(this.props,e)||!shallowEqual(this.state,t)}}]),i}(),RequestQueue={MAX_REQUEST:5,queue:[],request:function(e){this.push(e),this.run()},push:function(e){this.queue.push(e)},run:function(){var e=this,t=arguments;if(this.queue.length&&this.queue.length<=this.MAX_REQUEST){var n=this.queue.shift(),r=n.complete;n.complete=function(){r&&r.apply(n,_toConsumableArray(t)),e.run()},wx.request(n)}}};function request(e){"string"==typeof(e=e||{})&&(e={url:e});var r=e.success,o=e.fail,a=e.complete;return new Promise(function(t,n){e.success=function(e){r&&r(e),t(e)},e.fail=function(e){o&&o(e),n(e)},e.complete=function(e){a&&a(e)},RequestQueue.request(e)})}function processApis(e){var t=Object.assign({},onAndSyncApis,noPromiseApis,otherApis);Object.keys(t).forEach(function(i){onAndSyncApis[i]||noPromiseApis[i]?e[i]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return wx[i].apply(wx,t)}:e[i]=function(o){o=o||{};var a=null,e=Object.assign({},o);if("string"==typeof o)return wx[i](o);var t=new Promise(function(n,r){["fail","success","complete"].forEach(function(t){e[t]=function(e){o[t]&&o[t](e),"success"===t?n("connectSocket"===i?a:e):"fail"===t&&r(e)}}),a=wx[i](e)});return"uploadFile"!==i&&"downloadFile"!==i||(t.progress=function(e){return a.onProgressUpdate(e),t},t.abort=function(e){return e&&e(),a.abort(),t}),t}})}function initNativeApi(e){processApis(e),e.request=request,e.getCurrentPages=getCurrentPages,e.getApp=getApp}function createApp(e){initNativeApi(this);var t=new e,n={onLaunch:function(e){t.$app=this,t.$router={params:e},t.componentWillMount&&t.componentWillMount(),t.componentDidMount&&t.componentDidMount()},onShow:function(e){Object.assign(t.$router.params,e),t.componentDidShow&&t.componentDidShow()},onHide:function(){t.componentDidHide&&t.componentDidHide()},onError:function(){t.componentDidCatchError&&t.componentDidCatchError()},onPageNotFound:function(){t.componentDidNotFound&&t.componentDidNotFound()}};return Object.assign(n,t)}var index$1={Component:Component$1,createApp:createApp,createPage:createPage,initNativeApi:initNativeApi,Events:Events,eventCenter:eventCenter,getEnv:getEnv,render:render,ENV_TYPE:ENV_TYPE,internal_safe_get:get,internal_safe_set:set,internal_dynamic_recursive:dynamicRecursive,internal_inline_style:inlineStyle};exports.Component=Component$1,exports.PureComponent=PureComponent,exports.createApp=createApp,exports.createPage=createPage,exports.initNativeApi=initNativeApi,exports.Events=Events,exports.eventCenter=eventCenter,exports.getEnv=getEnv,exports.render=render,exports.ENV_TYPE=ENV_TYPE,exports.internal_safe_get=get,exports.internal_safe_set=set,exports.internal_dynamic_recursive=dynamicRecursive,exports.internal_inline_style=inlineStyle,exports.default=index$1;