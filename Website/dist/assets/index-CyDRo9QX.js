function Py(i,e){for(var t=0;t<e.length;t++){const o=e[t];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in i)){const l=Object.getOwnPropertyDescriptor(o,s);l&&Object.defineProperty(i,s,l.get?l:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();function oh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var pd={exports:{}},ra={},md={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function Ly(){if(mg)return pt;mg=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function y(z,ae,Be){this.props=z,this.context=ae,this.refs=E,this.updater=Be||S}y.prototype.isReactComponent={},y.prototype.setState=function(z,ae){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ae,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function v(){}v.prototype=y.prototype;function L(z,ae,Be){this.props=z,this.context=ae,this.refs=E,this.updater=Be||S}var b=L.prototype=new v;b.constructor=L,M(b,y.prototype),b.isPureReactComponent=!0;var T=Array.isArray,U=Object.prototype.hasOwnProperty,I={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function H(z,ae,Be){var ke,ne={},ge=null,pe=null;if(ae!=null)for(ke in ae.ref!==void 0&&(pe=ae.ref),ae.key!==void 0&&(ge=""+ae.key),ae)U.call(ae,ke)&&!N.hasOwnProperty(ke)&&(ne[ke]=ae[ke]);var be=arguments.length-2;if(be===1)ne.children=Be;else if(1<be){for(var Re=Array(be),Ye=0;Ye<be;Ye++)Re[Ye]=arguments[Ye+2];ne.children=Re}if(z&&z.defaultProps)for(ke in be=z.defaultProps,be)ne[ke]===void 0&&(ne[ke]=be[ke]);return{$$typeof:i,type:z,key:ge,ref:pe,props:ne,_owner:I.current}}function D(z,ae){return{$$typeof:i,type:z.type,key:ae,ref:z.ref,props:z.props,_owner:z._owner}}function P(z){return typeof z=="object"&&z!==null&&z.$$typeof===i}function k(z){var ae={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Be){return ae[Be]})}var Z=/\/+/g;function q(z,ae){return typeof z=="object"&&z!==null&&z.key!=null?k(""+z.key):ae.toString(36)}function ee(z,ae,Be,ke,ne){var ge=typeof z;(ge==="undefined"||ge==="boolean")&&(z=null);var pe=!1;if(z===null)pe=!0;else switch(ge){case"string":case"number":pe=!0;break;case"object":switch(z.$$typeof){case i:case e:pe=!0}}if(pe)return pe=z,ne=ne(pe),z=ke===""?"."+q(pe,0):ke,T(ne)?(Be="",z!=null&&(Be=z.replace(Z,"$&/")+"/"),ee(ne,ae,Be,"",function(Ye){return Ye})):ne!=null&&(P(ne)&&(ne=D(ne,Be+(!ne.key||pe&&pe.key===ne.key?"":(""+ne.key).replace(Z,"$&/")+"/")+z)),ae.push(ne)),1;if(pe=0,ke=ke===""?".":ke+":",T(z))for(var be=0;be<z.length;be++){ge=z[be];var Re=ke+q(ge,be);pe+=ee(ge,ae,Be,Re,ne)}else if(Re=_(z),typeof Re=="function")for(z=Re.call(z),be=0;!(ge=z.next()).done;)ge=ge.value,Re=ke+q(ge,be++),pe+=ee(ge,ae,Be,Re,ne);else if(ge==="object")throw ae=String(z),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.");return pe}function de(z,ae,Be){if(z==null)return z;var ke=[],ne=0;return ee(z,ke,"","",function(ge){return ae.call(Be,ge,ne++)}),ke}function Q(z){if(z._status===-1){var ae=z._result;ae=ae(),ae.then(function(Be){(z._status===0||z._status===-1)&&(z._status=1,z._result=Be)},function(Be){(z._status===0||z._status===-1)&&(z._status=2,z._result=Be)}),z._status===-1&&(z._status=0,z._result=ae)}if(z._status===1)return z._result.default;throw z._result}var ce={current:null},B={transition:null},ue={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:B,ReactCurrentOwner:I};function oe(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:de,forEach:function(z,ae,Be){de(z,function(){ae.apply(this,arguments)},Be)},count:function(z){var ae=0;return de(z,function(){ae++}),ae},toArray:function(z){return de(z,function(ae){return ae})||[]},only:function(z){if(!P(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},pt.Component=y,pt.Fragment=t,pt.Profiler=s,pt.PureComponent=L,pt.StrictMode=o,pt.Suspense=f,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,pt.act=oe,pt.cloneElement=function(z,ae,Be){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var ke=M({},z.props),ne=z.key,ge=z.ref,pe=z._owner;if(ae!=null){if(ae.ref!==void 0&&(ge=ae.ref,pe=I.current),ae.key!==void 0&&(ne=""+ae.key),z.type&&z.type.defaultProps)var be=z.type.defaultProps;for(Re in ae)U.call(ae,Re)&&!N.hasOwnProperty(Re)&&(ke[Re]=ae[Re]===void 0&&be!==void 0?be[Re]:ae[Re])}var Re=arguments.length-2;if(Re===1)ke.children=Be;else if(1<Re){be=Array(Re);for(var Ye=0;Ye<Re;Ye++)be[Ye]=arguments[Ye+2];ke.children=be}return{$$typeof:i,type:z.type,key:ne,ref:ge,props:ke,_owner:pe}},pt.createContext=function(z){return z={$$typeof:c,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:l,_context:z},z.Consumer=z},pt.createElement=H,pt.createFactory=function(z){var ae=H.bind(null,z);return ae.type=z,ae},pt.createRef=function(){return{current:null}},pt.forwardRef=function(z){return{$$typeof:d,render:z}},pt.isValidElement=P,pt.lazy=function(z){return{$$typeof:m,_payload:{_status:-1,_result:z},_init:Q}},pt.memo=function(z,ae){return{$$typeof:h,type:z,compare:ae===void 0?null:ae}},pt.startTransition=function(z){var ae=B.transition;B.transition={};try{z()}finally{B.transition=ae}},pt.unstable_act=oe,pt.useCallback=function(z,ae){return ce.current.useCallback(z,ae)},pt.useContext=function(z){return ce.current.useContext(z)},pt.useDebugValue=function(){},pt.useDeferredValue=function(z){return ce.current.useDeferredValue(z)},pt.useEffect=function(z,ae){return ce.current.useEffect(z,ae)},pt.useId=function(){return ce.current.useId()},pt.useImperativeHandle=function(z,ae,Be){return ce.current.useImperativeHandle(z,ae,Be)},pt.useInsertionEffect=function(z,ae){return ce.current.useInsertionEffect(z,ae)},pt.useLayoutEffect=function(z,ae){return ce.current.useLayoutEffect(z,ae)},pt.useMemo=function(z,ae){return ce.current.useMemo(z,ae)},pt.useReducer=function(z,ae,Be){return ce.current.useReducer(z,ae,Be)},pt.useRef=function(z){return ce.current.useRef(z)},pt.useState=function(z){return ce.current.useState(z)},pt.useSyncExternalStore=function(z,ae,Be){return ce.current.useSyncExternalStore(z,ae,Be)},pt.useTransition=function(){return ce.current.useTransition()},pt.version="18.3.1",pt}var gg;function sh(){return gg||(gg=1,md.exports=Ly()),md.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function Dy(){if(vg)return ra;vg=1;var i=sh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,h){var m,g={},_=null,S=null;h!==void 0&&(_=""+h),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(S=f.ref);for(m in f)o.call(f,m)&&!l.hasOwnProperty(m)&&(g[m]=f[m]);if(d&&d.defaultProps)for(m in f=d.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:d,key:_,ref:S,props:g,_owner:s.current}}return ra.Fragment=t,ra.jsx=c,ra.jsxs=c,ra}var _g;function Ny(){return _g||(_g=1,pd.exports=Dy()),pd.exports}var C=Ny(),W=sh();const rn=oh(W),Vv=Py({__proto__:null,default:rn},[W]);var Dl={},gd={exports:{}},Un={},vd={exports:{}},_d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function Iy(){return xg||(xg=1,(function(i){function e(B,ue){var oe=B.length;B.push(ue);e:for(;0<oe;){var z=oe-1>>>1,ae=B[z];if(0<s(ae,ue))B[z]=ue,B[oe]=ae,oe=z;else break e}}function t(B){return B.length===0?null:B[0]}function o(B){if(B.length===0)return null;var ue=B[0],oe=B.pop();if(oe!==ue){B[0]=oe;e:for(var z=0,ae=B.length,Be=ae>>>1;z<Be;){var ke=2*(z+1)-1,ne=B[ke],ge=ke+1,pe=B[ge];if(0>s(ne,oe))ge<ae&&0>s(pe,ne)?(B[z]=pe,B[ge]=oe,z=ge):(B[z]=ne,B[ke]=oe,z=ke);else if(ge<ae&&0>s(pe,oe))B[z]=pe,B[ge]=oe,z=ge;else break e}}return ue}function s(B,ue){var oe=B.sortIndex-ue.sortIndex;return oe!==0?oe:B.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var f=[],h=[],m=1,g=null,_=3,S=!1,M=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(B){for(var ue=t(h);ue!==null;){if(ue.callback===null)o(h);else if(ue.startTime<=B)o(h),ue.sortIndex=ue.expirationTime,e(f,ue);else break;ue=t(h)}}function T(B){if(E=!1,b(B),!M)if(t(f)!==null)M=!0,Q(U);else{var ue=t(h);ue!==null&&ce(T,ue.startTime-B)}}function U(B,ue){M=!1,E&&(E=!1,v(H),H=-1),S=!0;var oe=_;try{for(b(ue),g=t(f);g!==null&&(!(g.expirationTime>ue)||B&&!k());){var z=g.callback;if(typeof z=="function"){g.callback=null,_=g.priorityLevel;var ae=z(g.expirationTime<=ue);ue=i.unstable_now(),typeof ae=="function"?g.callback=ae:g===t(f)&&o(f),b(ue)}else o(f);g=t(f)}if(g!==null)var Be=!0;else{var ke=t(h);ke!==null&&ce(T,ke.startTime-ue),Be=!1}return Be}finally{g=null,_=oe,S=!1}}var I=!1,N=null,H=-1,D=5,P=-1;function k(){return!(i.unstable_now()-P<D)}function Z(){if(N!==null){var B=i.unstable_now();P=B;var ue=!0;try{ue=N(!0,B)}finally{ue?q():(I=!1,N=null)}}else I=!1}var q;if(typeof L=="function")q=function(){L(Z)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,de=ee.port2;ee.port1.onmessage=Z,q=function(){de.postMessage(null)}}else q=function(){y(Z,0)};function Q(B){N=B,I||(I=!0,q())}function ce(B,ue){H=y(function(){B(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(B){B.callback=null},i.unstable_continueExecution=function(){M||S||(M=!0,Q(U))},i.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<B?Math.floor(1e3/B):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_getFirstCallbackNode=function(){return t(f)},i.unstable_next=function(B){switch(_){case 1:case 2:case 3:var ue=3;break;default:ue=_}var oe=_;_=ue;try{return B()}finally{_=oe}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(B,ue){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var oe=_;_=B;try{return ue()}finally{_=oe}},i.unstable_scheduleCallback=function(B,ue,oe){var z=i.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?z+oe:z):oe=z,B){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=oe+ae,B={id:m++,callback:ue,priorityLevel:B,startTime:oe,expirationTime:ae,sortIndex:-1},oe>z?(B.sortIndex=oe,e(h,B),t(f)===null&&B===t(h)&&(E?(v(H),H=-1):E=!0,ce(T,oe-z))):(B.sortIndex=ae,e(f,B),M||S||(M=!0,Q(U))),B},i.unstable_shouldYield=k,i.unstable_wrapCallback=function(B){var ue=_;return function(){var oe=_;_=ue;try{return B.apply(this,arguments)}finally{_=oe}}}})(_d)),_d}var yg;function Uy(){return yg||(yg=1,vd.exports=Iy()),vd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function Fy(){if(Sg)return Un;Sg=1;var i=sh(),e=Uy();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)o.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return f.call(g,n)?!0:f.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function S(n,r,a,u){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,a,u){if(r===null||typeof r>"u"||S(n,r,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,a,u,p,x,w){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=x,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(v,L);y[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(v,L);y[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(v,L);y[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,r,a,u){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,a,p,u)&&(a=null),u||p===null?_(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(r=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(r):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,r,a):n.setAttribute(r,a))))}var T=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),I=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),k=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),B=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,z;function ae(n){if(z===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);z=r&&r[1]||""}return`
`+z+n}var Be=!1;function ke(n,r){if(!n||Be)return"";Be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(re){var u=re}Reflect.construct(n,[],r)}else{try{r.call()}catch(re){u=re}n.call(r.prototype)}else{try{throw Error()}catch(re){u=re}n()}}catch(re){if(re&&u&&typeof re.stack=="string"){for(var p=re.stack.split(`
`),x=u.stack.split(`
`),w=p.length-1,O=x.length-1;1<=w&&0<=O&&p[w]!==x[O];)O--;for(;1<=w&&0<=O;w--,O--)if(p[w]!==x[O]){if(w!==1||O!==1)do if(w--,O--,0>O||p[w]!==x[O]){var G=`
`+p[w].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=w&&0<=O);break}}}finally{Be=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ae(n):""}function ne(n){switch(n.tag){case 5:return ae(n.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return n=ke(n.type,!1),n;case 11:return n=ke(n.type.render,!1),n;case 1:return n=ke(n.type,!0),n;default:return""}}function ge(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case I:return"Portal";case D:return"Profiler";case H:return"StrictMode";case q:return"Suspense";case ee:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case Z:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return r=n.displayName||null,r!==null?r:ge(n.type)||"Memo";case Q:r=n._payload,n=n._init;try{return ge(n(r))}catch{}}return null}function pe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(r);case 8:return r===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Re(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ye(n){var r=Re(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,x=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(w){u=""+w,x.call(this,w)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function bt(n){n._valueTracker||(n._valueTracker=Ye(n))}function ht(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),u="";return n&&(u=Re(n)?n.checked?"true":"false":n.value),n=u,n!==a?(r.setValue(n),!0):!1}function V(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function St(n,r){var a=r.checked;return oe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Je(n,r){var a=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;a=be(r.value!=null?r.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function vt(n,r){r=r.checked,r!=null&&b(n,"checked",r,!1)}function $e(n,r){vt(n,r);var a=be(r.value),u=r.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Ie(n,r.type,a):r.hasOwnProperty("defaultValue")&&Ie(n,r.type,be(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Rt(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ie(n,r,a){(r!=="number"||V(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ct=Array.isArray;function kt(n,r,a,u){if(n=n.options,r){r={};for(var p=0;p<a.length;p++)r["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=r.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),r=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function Bt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function F(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(ct(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:be(a)}}function A(n,r){var a=be(r.value),u=be(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function J(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?he(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fe,Ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,a,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=fe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ae(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ze=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(n){Ze.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),He[r]=He[n]})});function we(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||He.hasOwnProperty(n)&&He[n]?(""+r).trim():r+"px"}function Ne(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=we(a,r[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var rt=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xe(n,r){if(r){if(rt[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Pe(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ut=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Me=null,Ce=null,Ue=null;function Se(n){if(n=Gs(n)){if(typeof Me!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ya(r),Me(n.stateNode,n.type,r))}}function me(n){Ce?Ue?Ue.push(n):Ue=[n]:Ce=n}function We(){if(Ce){var n=Ce,r=Ue;if(Ue=Ce=null,Se(n),r)for(n=0;n<r.length;n++)Se(r[n])}}function lt(n,r){return n(r)}function Pt(){}var xt=!1;function qn(n,r,a){if(xt)return n(r,a);xt=!0;try{return lt(n,r,a)}finally{xt=!1,(Ce!==null||Ue!==null)&&(Pt(),We())}}function hn(n,r){var a=n.stateNode;if(a===null)return null;var u=Ya(a);if(u===null)return null;a=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var xo=!1;if(d)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){xo=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{xo=!1}function As(n,r,a,u,p,x,w,O,G){var re=Array.prototype.slice.call(arguments,3);try{r.apply(a,re)}catch(_e){this.onError(_e)}}var ir=!1,Br=null,Ui=!1,yo=null,So={onError:function(n){ir=!0,Br=n}};function Aa(n,r,a,u,p,x,w,O,G){ir=!1,Br=null,As.apply(So,arguments)}function Ca(n,r,a,u,p,x,w,O,G){if(Aa.apply(this,arguments),ir){if(ir){var re=Br;ir=!1,Br=null}else throw Error(t(198));Ui||(Ui=!0,yo=re)}}function Fi(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function ba(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ra(n){if(Fi(n)!==n)throw Error(t(188))}function Oc(n){var r=n.alternate;if(!r){if(r=Fi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,u=r;;){var p=a.return;if(p===null)break;var x=p.alternate;if(x===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===a)return Ra(p),n;if(x===u)return Ra(p),r;x=x.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=x;else{for(var w=!1,O=p.child;O;){if(O===a){w=!0,a=p,u=x;break}if(O===u){w=!0,u=p,a=x;break}O=O.sibling}if(!w){for(O=x.child;O;){if(O===a){w=!0,a=x,u=p;break}if(O===u){w=!0,u=x,a=p;break}O=O.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Pa(n){return n=Oc(n),n!==null?La(n):null}function La(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=La(n);if(r!==null)return r;n=n.sibling}return null}var R=e.unstable_scheduleCallback,$=e.unstable_cancelCallback,se=e.unstable_shouldYield,le=e.unstable_requestPaint,X=e.unstable_now,Ee=e.unstable_getCurrentPriorityLevel,Le=e.unstable_ImmediatePriority,Ve=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,it=e.unstable_LowPriority,ot=e.unstable_IdlePriority,Qe=null,st=null;function Ct(n){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:et,Ut=Math.log,Lt=Math.LN2;function et(n){return n>>>=0,n===0?32:31-(Ut(n)/Lt|0)|0}var Nt=64,mt=4194304;function en(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function oi(n,r){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,x=n.pingedLanes,w=a&268435455;if(w!==0){var O=w&~p;O!==0?u=en(O):(x&=w,x!==0&&(u=en(x)))}else w=a&~p,w!==0?u=en(w):x!==0&&(u=en(x));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,x=r&-r,p>=x||p===16&&(x&4194240)!==0))return r;if((u&4)!==0&&(u|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)a=31-yt(r),p=1<<a,u|=n[a],r&=~p;return u}function wn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zr(n,r){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var w=31-yt(x),O=1<<w,G=p[w];G===-1?((O&a)===0||(O&u)!==0)&&(p[w]=wn(O,r)):G<=r&&(n.expiredLanes|=O),x&=~O}}function Ft(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Tn(){var n=Nt;return Nt<<=1,(Nt&4194240)===0&&(Nt=64),n}function pn(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function qt(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-yt(r),n[r]=a}function mn(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-yt(a),x=1<<p;r[p]=0,u[p]=-1,n[p]=-1,a&=~x}}function Hr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var u=31-yt(a),p=1<<u;p&r|n[u]&r&&(n[u]|=r),a&=~p}}var gt=0;function Yh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var $h,kc,qh,Kh,Zh,Bc=!1,Da=[],rr=null,or=null,sr=null,Cs=new Map,bs=new Map,ar=[],Q_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qh(n,r){switch(n){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Cs.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":bs.delete(r.pointerId)}}function Rs(n,r,a,u,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:r,domEventName:a,eventSystemFlags:u,nativeEvent:x,targetContainers:[p]},r!==null&&(r=Gs(r),r!==null&&kc(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function J_(n,r,a,u,p){switch(r){case"focusin":return rr=Rs(rr,n,r,a,u,p),!0;case"dragenter":return or=Rs(or,n,r,a,u,p),!0;case"mouseover":return sr=Rs(sr,n,r,a,u,p),!0;case"pointerover":var x=p.pointerId;return Cs.set(x,Rs(Cs.get(x)||null,n,r,a,u,p)),!0;case"gotpointercapture":return x=p.pointerId,bs.set(x,Rs(bs.get(x)||null,n,r,a,u,p)),!0}return!1}function Jh(n){var r=Vr(n.target);if(r!==null){var a=Fi(r);if(a!==null){if(r=a.tag,r===13){if(r=ba(a),r!==null){n.blockedOn=r,Zh(n.priority,function(){qh(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Na(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Hc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);ut=u,a.target.dispatchEvent(u),ut=null}else return r=Gs(a),r!==null&&kc(r),n.blockedOn=a,!1;r.shift()}return!0}function ep(n,r,a){Na(n)&&a.delete(r)}function ex(){Bc=!1,rr!==null&&Na(rr)&&(rr=null),or!==null&&Na(or)&&(or=null),sr!==null&&Na(sr)&&(sr=null),Cs.forEach(ep),bs.forEach(ep)}function Ps(n,r){n.blockedOn===r&&(n.blockedOn=null,Bc||(Bc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ex)))}function Ls(n){function r(p){return Ps(p,n)}if(0<Da.length){Ps(Da[0],n);for(var a=1;a<Da.length;a++){var u=Da[a];u.blockedOn===n&&(u.blockedOn=null)}}for(rr!==null&&Ps(rr,n),or!==null&&Ps(or,n),sr!==null&&Ps(sr,n),Cs.forEach(r),bs.forEach(r),a=0;a<ar.length;a++)u=ar[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<ar.length&&(a=ar[0],a.blockedOn===null);)Jh(a),a.blockedOn===null&&ar.shift()}var Mo=T.ReactCurrentBatchConfig,Ia=!0;function tx(n,r,a,u){var p=gt,x=Mo.transition;Mo.transition=null;try{gt=1,zc(n,r,a,u)}finally{gt=p,Mo.transition=x}}function nx(n,r,a,u){var p=gt,x=Mo.transition;Mo.transition=null;try{gt=4,zc(n,r,a,u)}finally{gt=p,Mo.transition=x}}function zc(n,r,a,u){if(Ia){var p=Hc(n,r,a,u);if(p===null)ru(n,r,u,Ua,a),Qh(n,u);else if(J_(p,n,r,a,u))u.stopPropagation();else if(Qh(n,u),r&4&&-1<Q_.indexOf(n)){for(;p!==null;){var x=Gs(p);if(x!==null&&$h(x),x=Hc(n,r,a,u),x===null&&ru(n,r,u,Ua,a),x===p)break;p=x}p!==null&&u.stopPropagation()}else ru(n,r,u,null,a)}}var Ua=null;function Hc(n,r,a,u){if(Ua=null,n=j(u),n=Vr(n),n!==null)if(r=Fi(n),r===null)n=null;else if(a=r.tag,a===13){if(n=ba(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ua=n,null}function tp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ee()){case Le:return 1;case Ve:return 4;case Fe:case it:return 16;case ot:return 536870912;default:return 16}default:return 16}}var lr=null,Vc=null,Fa=null;function np(){if(Fa)return Fa;var n,r=Vc,a=r.length,u,p="value"in lr?lr.value:lr.textContent,x=p.length;for(n=0;n<a&&r[n]===p[n];n++);var w=a-n;for(u=1;u<=w&&r[a-u]===p[x-u];u++);return Fa=p.slice(n,1<u?1-u:void 0)}function Oa(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ka(){return!0}function ip(){return!1}function zn(n){function r(a,u,p,x,w){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=x,this.target=w,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(a=n[O],this[O]=a?a(x):x[O]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?ka:ip,this.isPropagationStopped=ip,this}return oe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),r}var Eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gc=zn(Eo),Ds=oe({},Eo,{view:0,detail:0}),ix=zn(Ds),Wc,jc,Ns,Ba=oe({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ns&&(Ns&&n.type==="mousemove"?(Wc=n.screenX-Ns.screenX,jc=n.screenY-Ns.screenY):jc=Wc=0,Ns=n),Wc)},movementY:function(n){return"movementY"in n?n.movementY:jc}}),rp=zn(Ba),rx=oe({},Ba,{dataTransfer:0}),ox=zn(rx),sx=oe({},Ds,{relatedTarget:0}),Xc=zn(sx),ax=oe({},Eo,{animationName:0,elapsedTime:0,pseudoElement:0}),lx=zn(ax),cx=oe({},Eo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ux=zn(cx),dx=oe({},Eo,{data:0}),op=zn(dx),fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mx(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=px[n])?!!r[n]:!1}function Yc(){return mx}var gx=oe({},Ds,{key:function(n){if(n.key){var r=fx[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Oa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?hx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(n){return n.type==="keypress"?Oa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Oa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),vx=zn(gx),_x=oe({},Ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=zn(_x),xx=oe({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),yx=zn(xx),Sx=oe({},Eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mx=zn(Sx),Ex=oe({},Ba,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),wx=zn(Ex),Tx=[9,13,27,32],$c=d&&"CompositionEvent"in window,Is=null;d&&"documentMode"in document&&(Is=document.documentMode);var Ax=d&&"TextEvent"in window&&!Is,ap=d&&(!$c||Is&&8<Is&&11>=Is),lp=" ",cp=!1;function up(n,r){switch(n){case"keyup":return Tx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var wo=!1;function Cx(n,r){switch(n){case"compositionend":return dp(r);case"keypress":return r.which!==32?null:(cp=!0,lp);case"textInput":return n=r.data,n===lp&&cp?null:n;default:return null}}function bx(n,r){if(wo)return n==="compositionend"||!$c&&up(n,r)?(n=np(),Fa=Vc=lr=null,wo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ap&&r.locale!=="ko"?null:r.data;default:return null}}var Rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Rx[n.type]:r==="textarea"}function hp(n,r,a,u){me(u),r=Wa(r,"onChange"),0<r.length&&(a=new Gc("onChange","change",null,a,u),n.push({event:a,listeners:r}))}var Us=null,Fs=null;function Px(n){Lp(n,0)}function za(n){var r=Ro(n);if(ht(r))return n}function Lx(n,r){if(n==="change")return r}var pp=!1;if(d){var qc;if(d){var Kc="oninput"in document;if(!Kc){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),Kc=typeof mp.oninput=="function"}qc=Kc}else qc=!1;pp=qc&&(!document.documentMode||9<document.documentMode)}function gp(){Us&&(Us.detachEvent("onpropertychange",vp),Fs=Us=null)}function vp(n){if(n.propertyName==="value"&&za(Fs)){var r=[];hp(r,Fs,n,j(n)),qn(Px,r)}}function Dx(n,r,a){n==="focusin"?(gp(),Us=r,Fs=a,Us.attachEvent("onpropertychange",vp)):n==="focusout"&&gp()}function Nx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return za(Fs)}function Ix(n,r){if(n==="click")return za(r)}function Ux(n,r){if(n==="input"||n==="change")return za(r)}function Fx(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var si=typeof Object.is=="function"?Object.is:Fx;function Os(n,r){if(si(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),u=Object.keys(r);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!f.call(r,p)||!si(n[p],r[p]))return!1}return!0}function _p(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xp(n,r){var a=_p(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=r&&u>=r)return{node:a,offset:r-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_p(a)}}function yp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?yp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Sp(){for(var n=window,r=V();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=V(n.document)}return r}function Zc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Ox(n){var r=Sp(),a=n.focusedElem,u=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&yp(a.ownerDocument.documentElement,a)){if(u!==null&&Zc(a)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,x=Math.min(u.start,p);u=u.end===void 0?x:Math.min(u.end,p),!n.extend&&x>u&&(p=u,u=x,x=p),p=xp(a,x);var w=xp(a,u);p&&w&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),x>u?(n.addRange(r),n.extend(w.node,w.offset)):(r.setEnd(w.node,w.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var kx=d&&"documentMode"in document&&11>=document.documentMode,To=null,Qc=null,ks=null,Jc=!1;function Mp(n,r,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||To==null||To!==V(u)||(u=To,"selectionStart"in u&&Zc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ks&&Os(ks,u)||(ks=u,u=Wa(Qc,"onSelect"),0<u.length&&(r=new Gc("onSelect","select",null,r,a),n.push({event:r,listeners:u}),r.target=To)))}function Ha(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ao={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},eu={},Ep={};d&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Ao.animationend.animation,delete Ao.animationiteration.animation,delete Ao.animationstart.animation),"TransitionEvent"in window||delete Ao.transitionend.transition);function Va(n){if(eu[n])return eu[n];if(!Ao[n])return n;var r=Ao[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Ep)return eu[n]=r[a];return n}var wp=Va("animationend"),Tp=Va("animationiteration"),Ap=Va("animationstart"),Cp=Va("transitionend"),bp=new Map,Rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(n,r){bp.set(n,r),l(r,[n])}for(var tu=0;tu<Rp.length;tu++){var nu=Rp[tu],Bx=nu.toLowerCase(),zx=nu[0].toUpperCase()+nu.slice(1);cr(Bx,"on"+zx)}cr(wp,"onAnimationEnd"),cr(Tp,"onAnimationIteration"),cr(Ap,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(Cp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bs));function Pp(n,r,a){var u=n.type||"unknown-event";n.currentTarget=a,Ca(u,r,void 0,n),n.currentTarget=null}function Lp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var x=void 0;if(r)for(var w=u.length-1;0<=w;w--){var O=u[w],G=O.instance,re=O.currentTarget;if(O=O.listener,G!==x&&p.isPropagationStopped())break e;Pp(p,O,re),x=G}else for(w=0;w<u.length;w++){if(O=u[w],G=O.instance,re=O.currentTarget,O=O.listener,G!==x&&p.isPropagationStopped())break e;Pp(p,O,re),x=G}}}if(Ui)throw n=yo,Ui=!1,yo=null,n}function zt(n,r){var a=r[uu];a===void 0&&(a=r[uu]=new Set);var u=n+"__bubble";a.has(u)||(Dp(r,n,2,!1),a.add(u))}function iu(n,r,a){var u=0;r&&(u|=4),Dp(a,n,u,r)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function zs(n){if(!n[Ga]){n[Ga]=!0,o.forEach(function(a){a!=="selectionchange"&&(Hx.has(a)||iu(a,!1,n),iu(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ga]||(r[Ga]=!0,iu("selectionchange",!1,r))}}function Dp(n,r,a,u){switch(tp(r)){case 1:var p=tx;break;case 4:p=nx;break;default:p=zc}a=p.bind(null,r,a,n),p=void 0,!xo||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,a,{capture:!0,passive:p}):n.addEventListener(r,a,!0):p!==void 0?n.addEventListener(r,a,{passive:p}):n.addEventListener(r,a,!1)}function ru(n,r,a,u,p){var x=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var O=u.stateNode.containerInfo;if(O===p||O.nodeType===8&&O.parentNode===p)break;if(w===4)for(w=u.return;w!==null;){var G=w.tag;if((G===3||G===4)&&(G=w.stateNode.containerInfo,G===p||G.nodeType===8&&G.parentNode===p))return;w=w.return}for(;O!==null;){if(w=Vr(O),w===null)return;if(G=w.tag,G===5||G===6){u=x=w;continue e}O=O.parentNode}}u=u.return}qn(function(){var re=x,_e=j(a),ye=[];e:{var ve=bp.get(n);if(ve!==void 0){var Oe=Gc,Ge=n;switch(n){case"keypress":if(Oa(a)===0)break e;case"keydown":case"keyup":Oe=vx;break;case"focusin":Ge="focus",Oe=Xc;break;case"focusout":Ge="blur",Oe=Xc;break;case"beforeblur":case"afterblur":Oe=Xc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=yx;break;case wp:case Tp:case Ap:Oe=lx;break;case Cp:Oe=Mx;break;case"scroll":Oe=ix;break;case"wheel":Oe=wx;break;case"copy":case"cut":case"paste":Oe=ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=sp}var je=(r&4)!==0,Kt=!je&&n==="scroll",K=je?ve!==null?ve+"Capture":null:ve;je=[];for(var Y=re,te;Y!==null;){te=Y;var Te=te.stateNode;if(te.tag===5&&Te!==null&&(te=Te,K!==null&&(Te=hn(Y,K),Te!=null&&je.push(Hs(Y,Te,te)))),Kt)break;Y=Y.return}0<je.length&&(ve=new Oe(ve,Ge,null,a,_e),ye.push({event:ve,listeners:je}))}}if((r&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Oe=n==="mouseout"||n==="pointerout",ve&&a!==ut&&(Ge=a.relatedTarget||a.fromElement)&&(Vr(Ge)||Ge[Oi]))break e;if((Oe||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,Oe?(Ge=a.relatedTarget||a.toElement,Oe=re,Ge=Ge?Vr(Ge):null,Ge!==null&&(Kt=Fi(Ge),Ge!==Kt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Oe=null,Ge=re),Oe!==Ge)){if(je=rp,Te="onMouseLeave",K="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(je=sp,Te="onPointerLeave",K="onPointerEnter",Y="pointer"),Kt=Oe==null?ve:Ro(Oe),te=Ge==null?ve:Ro(Ge),ve=new je(Te,Y+"leave",Oe,a,_e),ve.target=Kt,ve.relatedTarget=te,Te=null,Vr(_e)===re&&(je=new je(K,Y+"enter",Ge,a,_e),je.target=te,je.relatedTarget=Kt,Te=je),Kt=Te,Oe&&Ge)t:{for(je=Oe,K=Ge,Y=0,te=je;te;te=Co(te))Y++;for(te=0,Te=K;Te;Te=Co(Te))te++;for(;0<Y-te;)je=Co(je),Y--;for(;0<te-Y;)K=Co(K),te--;for(;Y--;){if(je===K||K!==null&&je===K.alternate)break t;je=Co(je),K=Co(K)}je=null}else je=null;Oe!==null&&Np(ye,ve,Oe,je,!1),Ge!==null&&Kt!==null&&Np(ye,Kt,Ge,je,!0)}}e:{if(ve=re?Ro(re):window,Oe=ve.nodeName&&ve.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ve.type==="file")var qe=Lx;else if(fp(ve))if(pp)qe=Ux;else{qe=Nx;var tt=Dx}else(Oe=ve.nodeName)&&Oe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(qe=Ix);if(qe&&(qe=qe(n,re))){hp(ye,qe,a,_e);break e}tt&&tt(n,ve,re),n==="focusout"&&(tt=ve._wrapperState)&&tt.controlled&&ve.type==="number"&&Ie(ve,"number",ve.value)}switch(tt=re?Ro(re):window,n){case"focusin":(fp(tt)||tt.contentEditable==="true")&&(To=tt,Qc=re,ks=null);break;case"focusout":ks=Qc=To=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,Mp(ye,a,_e);break;case"selectionchange":if(kx)break;case"keydown":case"keyup":Mp(ye,a,_e)}var nt;if($c)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else wo?up(n,a)&&(at="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(ap&&a.locale!=="ko"&&(wo||at!=="onCompositionStart"?at==="onCompositionEnd"&&wo&&(nt=np()):(lr=_e,Vc="value"in lr?lr.value:lr.textContent,wo=!0)),tt=Wa(re,at),0<tt.length&&(at=new op(at,n,null,a,_e),ye.push({event:at,listeners:tt}),nt?at.data=nt:(nt=dp(a),nt!==null&&(at.data=nt)))),(nt=Ax?Cx(n,a):bx(n,a))&&(re=Wa(re,"onBeforeInput"),0<re.length&&(_e=new op("onBeforeInput","beforeinput",null,a,_e),ye.push({event:_e,listeners:re}),_e.data=nt))}Lp(ye,r)})}function Hs(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Wa(n,r){for(var a=r+"Capture",u=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=hn(n,a),x!=null&&u.unshift(Hs(n,x,p)),x=hn(n,r),x!=null&&u.push(Hs(n,x,p))),n=n.return}return u}function Co(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Np(n,r,a,u,p){for(var x=r._reactName,w=[];a!==null&&a!==u;){var O=a,G=O.alternate,re=O.stateNode;if(G!==null&&G===u)break;O.tag===5&&re!==null&&(O=re,p?(G=hn(a,x),G!=null&&w.unshift(Hs(a,G,O))):p||(G=hn(a,x),G!=null&&w.push(Hs(a,G,O)))),a=a.return}w.length!==0&&n.push({event:r,listeners:w})}var Vx=/\r\n?/g,Gx=/\u0000|\uFFFD/g;function Ip(n){return(typeof n=="string"?n:""+n).replace(Vx,`
`).replace(Gx,"")}function ja(n,r,a){if(r=Ip(r),Ip(n)!==r&&a)throw Error(t(425))}function Xa(){}var ou=null,su=null;function au(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var lu=typeof setTimeout=="function"?setTimeout:void 0,Wx=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,jx=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(n){return Up.resolve(null).then(n).catch(Xx)}:lu;function Xx(n){setTimeout(function(){throw n})}function cu(n,r){var a=r,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),Ls(r);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);Ls(r)}function ur(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Fp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var bo=Math.random().toString(36).slice(2),Si="__reactFiber$"+bo,Vs="__reactProps$"+bo,Oi="__reactContainer$"+bo,uu="__reactEvents$"+bo,Yx="__reactListeners$"+bo,$x="__reactHandles$"+bo;function Vr(n){var r=n[Si];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Oi]||a[Si]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Fp(n);n!==null;){if(a=n[Si])return a;n=Fp(n)}return r}n=a,a=n.parentNode}return null}function Gs(n){return n=n[Si]||n[Oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ro(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ya(n){return n[Vs]||null}var du=[],Po=-1;function dr(n){return{current:n}}function Ht(n){0>Po||(n.current=du[Po],du[Po]=null,Po--)}function Ot(n,r){Po++,du[Po]=n.current,n.current=r}var fr={},gn=dr(fr),Pn=dr(!1),Gr=fr;function Lo(n,r){var a=n.type.contextTypes;if(!a)return fr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in a)p[x]=r[x];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Ln(n){return n=n.childContextTypes,n!=null}function $a(){Ht(Pn),Ht(gn)}function Op(n,r,a){if(gn.current!==fr)throw Error(t(168));Ot(gn,r),Ot(Pn,a)}function kp(n,r,a){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,pe(n)||"Unknown",p));return oe({},a,u)}function qa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||fr,Gr=gn.current,Ot(gn,n),Ot(Pn,Pn.current),!0}function Bp(n,r,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=kp(n,r,Gr),u.__reactInternalMemoizedMergedChildContext=n,Ht(Pn),Ht(gn),Ot(gn,n)):Ht(Pn),Ot(Pn,a)}var ki=null,Ka=!1,fu=!1;function zp(n){ki===null?ki=[n]:ki.push(n)}function qx(n){Ka=!0,zp(n)}function hr(){if(!fu&&ki!==null){fu=!0;var n=0,r=gt;try{var a=ki;for(gt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}ki=null,Ka=!1}catch(p){throw ki!==null&&(ki=ki.slice(n+1)),R(Le,hr),p}finally{gt=r,fu=!1}}return null}var Do=[],No=0,Za=null,Qa=0,Kn=[],Zn=0,Wr=null,Bi=1,zi="";function jr(n,r){Do[No++]=Qa,Do[No++]=Za,Za=n,Qa=r}function Hp(n,r,a){Kn[Zn++]=Bi,Kn[Zn++]=zi,Kn[Zn++]=Wr,Wr=n;var u=Bi;n=zi;var p=32-yt(u)-1;u&=~(1<<p),a+=1;var x=32-yt(r)+p;if(30<x){var w=p-p%5;x=(u&(1<<w)-1).toString(32),u>>=w,p-=w,Bi=1<<32-yt(r)+p|a<<p|u,zi=x+n}else Bi=1<<x|a<<p|u,zi=n}function hu(n){n.return!==null&&(jr(n,1),Hp(n,1,0))}function pu(n){for(;n===Za;)Za=Do[--No],Do[No]=null,Qa=Do[--No],Do[No]=null;for(;n===Wr;)Wr=Kn[--Zn],Kn[Zn]=null,zi=Kn[--Zn],Kn[Zn]=null,Bi=Kn[--Zn],Kn[Zn]=null}var Hn=null,Vn=null,Gt=!1,ai=null;function Vp(n,r){var a=ti(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Gp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Hn=n,Vn=ur(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Hn=n,Vn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Wr!==null?{id:Bi,overflow:zi}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=ti(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,Hn=n,Vn=null,!0):!1;default:return!1}}function mu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function gu(n){if(Gt){var r=Vn;if(r){var a=r;if(!Gp(n,r)){if(mu(n))throw Error(t(418));r=ur(a.nextSibling);var u=Hn;r&&Gp(n,r)?Vp(u,a):(n.flags=n.flags&-4097|2,Gt=!1,Hn=n)}}else{if(mu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Gt=!1,Hn=n}}}function Wp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Hn=n}function Ja(n){if(n!==Hn)return!1;if(!Gt)return Wp(n),Gt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!au(n.type,n.memoizedProps)),r&&(r=Vn)){if(mu(n))throw jp(),Error(t(418));for(;r;)Vp(n,r),r=ur(r.nextSibling)}if(Wp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){Vn=ur(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}Vn=null}}else Vn=Hn?ur(n.stateNode.nextSibling):null;return!0}function jp(){for(var n=Vn;n;)n=ur(n.nextSibling)}function Io(){Vn=Hn=null,Gt=!1}function vu(n){ai===null?ai=[n]:ai.push(n)}var Kx=T.ReactCurrentBatchConfig;function Ws(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,x=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(w){var O=p.refs;w===null?delete O[x]:O[x]=w},r._stringRef=x,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function el(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Xp(n){var r=n._init;return r(n._payload)}function Yp(n){function r(K,Y){if(n){var te=K.deletions;te===null?(K.deletions=[Y],K.flags|=16):te.push(Y)}}function a(K,Y){if(!n)return null;for(;Y!==null;)r(K,Y),Y=Y.sibling;return null}function u(K,Y){for(K=new Map;Y!==null;)Y.key!==null?K.set(Y.key,Y):K.set(Y.index,Y),Y=Y.sibling;return K}function p(K,Y){return K=Sr(K,Y),K.index=0,K.sibling=null,K}function x(K,Y,te){return K.index=te,n?(te=K.alternate,te!==null?(te=te.index,te<Y?(K.flags|=2,Y):te):(K.flags|=2,Y)):(K.flags|=1048576,Y)}function w(K){return n&&K.alternate===null&&(K.flags|=2),K}function O(K,Y,te,Te){return Y===null||Y.tag!==6?(Y=ld(te,K.mode,Te),Y.return=K,Y):(Y=p(Y,te),Y.return=K,Y)}function G(K,Y,te,Te){var qe=te.type;return qe===N?_e(K,Y,te.props.children,Te,te.key):Y!==null&&(Y.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===Q&&Xp(qe)===Y.type)?(Te=p(Y,te.props),Te.ref=Ws(K,Y,te),Te.return=K,Te):(Te=wl(te.type,te.key,te.props,null,K.mode,Te),Te.ref=Ws(K,Y,te),Te.return=K,Te)}function re(K,Y,te,Te){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==te.containerInfo||Y.stateNode.implementation!==te.implementation?(Y=cd(te,K.mode,Te),Y.return=K,Y):(Y=p(Y,te.children||[]),Y.return=K,Y)}function _e(K,Y,te,Te,qe){return Y===null||Y.tag!==7?(Y=Jr(te,K.mode,Te,qe),Y.return=K,Y):(Y=p(Y,te),Y.return=K,Y)}function ye(K,Y,te){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=ld(""+Y,K.mode,te),Y.return=K,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case U:return te=wl(Y.type,Y.key,Y.props,null,K.mode,te),te.ref=Ws(K,null,Y),te.return=K,te;case I:return Y=cd(Y,K.mode,te),Y.return=K,Y;case Q:var Te=Y._init;return ye(K,Te(Y._payload),te)}if(ct(Y)||ue(Y))return Y=Jr(Y,K.mode,te,null),Y.return=K,Y;el(K,Y)}return null}function ve(K,Y,te,Te){var qe=Y!==null?Y.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return qe!==null?null:O(K,Y,""+te,Te);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case U:return te.key===qe?G(K,Y,te,Te):null;case I:return te.key===qe?re(K,Y,te,Te):null;case Q:return qe=te._init,ve(K,Y,qe(te._payload),Te)}if(ct(te)||ue(te))return qe!==null?null:_e(K,Y,te,Te,null);el(K,te)}return null}function Oe(K,Y,te,Te,qe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return K=K.get(te)||null,O(Y,K,""+Te,qe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case U:return K=K.get(Te.key===null?te:Te.key)||null,G(Y,K,Te,qe);case I:return K=K.get(Te.key===null?te:Te.key)||null,re(Y,K,Te,qe);case Q:var tt=Te._init;return Oe(K,Y,te,tt(Te._payload),qe)}if(ct(Te)||ue(Te))return K=K.get(te)||null,_e(Y,K,Te,qe,null);el(Y,Te)}return null}function Ge(K,Y,te,Te){for(var qe=null,tt=null,nt=Y,at=Y=0,cn=null;nt!==null&&at<te.length;at++){nt.index>at?(cn=nt,nt=null):cn=nt.sibling;var Et=ve(K,nt,te[at],Te);if(Et===null){nt===null&&(nt=cn);break}n&&nt&&Et.alternate===null&&r(K,nt),Y=x(Et,Y,at),tt===null?qe=Et:tt.sibling=Et,tt=Et,nt=cn}if(at===te.length)return a(K,nt),Gt&&jr(K,at),qe;if(nt===null){for(;at<te.length;at++)nt=ye(K,te[at],Te),nt!==null&&(Y=x(nt,Y,at),tt===null?qe=nt:tt.sibling=nt,tt=nt);return Gt&&jr(K,at),qe}for(nt=u(K,nt);at<te.length;at++)cn=Oe(nt,K,at,te[at],Te),cn!==null&&(n&&cn.alternate!==null&&nt.delete(cn.key===null?at:cn.key),Y=x(cn,Y,at),tt===null?qe=cn:tt.sibling=cn,tt=cn);return n&&nt.forEach(function(Mr){return r(K,Mr)}),Gt&&jr(K,at),qe}function je(K,Y,te,Te){var qe=ue(te);if(typeof qe!="function")throw Error(t(150));if(te=qe.call(te),te==null)throw Error(t(151));for(var tt=qe=null,nt=Y,at=Y=0,cn=null,Et=te.next();nt!==null&&!Et.done;at++,Et=te.next()){nt.index>at?(cn=nt,nt=null):cn=nt.sibling;var Mr=ve(K,nt,Et.value,Te);if(Mr===null){nt===null&&(nt=cn);break}n&&nt&&Mr.alternate===null&&r(K,nt),Y=x(Mr,Y,at),tt===null?qe=Mr:tt.sibling=Mr,tt=Mr,nt=cn}if(Et.done)return a(K,nt),Gt&&jr(K,at),qe;if(nt===null){for(;!Et.done;at++,Et=te.next())Et=ye(K,Et.value,Te),Et!==null&&(Y=x(Et,Y,at),tt===null?qe=Et:tt.sibling=Et,tt=Et);return Gt&&jr(K,at),qe}for(nt=u(K,nt);!Et.done;at++,Et=te.next())Et=Oe(nt,K,at,Et.value,Te),Et!==null&&(n&&Et.alternate!==null&&nt.delete(Et.key===null?at:Et.key),Y=x(Et,Y,at),tt===null?qe=Et:tt.sibling=Et,tt=Et);return n&&nt.forEach(function(Ry){return r(K,Ry)}),Gt&&jr(K,at),qe}function Kt(K,Y,te,Te){if(typeof te=="object"&&te!==null&&te.type===N&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case U:e:{for(var qe=te.key,tt=Y;tt!==null;){if(tt.key===qe){if(qe=te.type,qe===N){if(tt.tag===7){a(K,tt.sibling),Y=p(tt,te.props.children),Y.return=K,K=Y;break e}}else if(tt.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===Q&&Xp(qe)===tt.type){a(K,tt.sibling),Y=p(tt,te.props),Y.ref=Ws(K,tt,te),Y.return=K,K=Y;break e}a(K,tt);break}else r(K,tt);tt=tt.sibling}te.type===N?(Y=Jr(te.props.children,K.mode,Te,te.key),Y.return=K,K=Y):(Te=wl(te.type,te.key,te.props,null,K.mode,Te),Te.ref=Ws(K,Y,te),Te.return=K,K=Te)}return w(K);case I:e:{for(tt=te.key;Y!==null;){if(Y.key===tt)if(Y.tag===4&&Y.stateNode.containerInfo===te.containerInfo&&Y.stateNode.implementation===te.implementation){a(K,Y.sibling),Y=p(Y,te.children||[]),Y.return=K,K=Y;break e}else{a(K,Y);break}else r(K,Y);Y=Y.sibling}Y=cd(te,K.mode,Te),Y.return=K,K=Y}return w(K);case Q:return tt=te._init,Kt(K,Y,tt(te._payload),Te)}if(ct(te))return Ge(K,Y,te,Te);if(ue(te))return je(K,Y,te,Te);el(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,Y!==null&&Y.tag===6?(a(K,Y.sibling),Y=p(Y,te),Y.return=K,K=Y):(a(K,Y),Y=ld(te,K.mode,Te),Y.return=K,K=Y),w(K)):a(K,Y)}return Kt}var Uo=Yp(!0),$p=Yp(!1),tl=dr(null),nl=null,Fo=null,_u=null;function xu(){_u=Fo=nl=null}function yu(n){var r=tl.current;Ht(tl),n._currentValue=r}function Su(n,r,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===a)break;n=n.return}}function Oo(n,r){nl=n,_u=Fo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Dn=!0),n.firstContext=null)}function Qn(n){var r=n._currentValue;if(_u!==n)if(n={context:n,memoizedValue:r,next:null},Fo===null){if(nl===null)throw Error(t(308));Fo=n,nl.dependencies={lanes:0,firstContext:n}}else Fo=Fo.next=n;return r}var Xr=null;function Mu(n){Xr===null?Xr=[n]:Xr.push(n)}function qp(n,r,a,u){var p=r.interleaved;return p===null?(a.next=a,Mu(r)):(a.next=p.next,p.next=a),r.interleaved=a,Hi(n,u)}function Hi(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var pr=!1;function Eu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function mr(n,r,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Mt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,Hi(n,a)}return p=u.interleaved,p===null?(r.next=r,Mu(u)):(r.next=p.next,p.next=r),u.interleaved=r,Hi(n,a)}function il(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,Hr(n,a)}}function Zp(n,r){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?p=x=w:x=x.next=w,a=a.next}while(a!==null);x===null?p=x=r:x=x.next=r}else p=x=r;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function rl(n,r,a,u){var p=n.updateQueue;pr=!1;var x=p.firstBaseUpdate,w=p.lastBaseUpdate,O=p.shared.pending;if(O!==null){p.shared.pending=null;var G=O,re=G.next;G.next=null,w===null?x=re:w.next=re,w=G;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,O=_e.lastBaseUpdate,O!==w&&(O===null?_e.firstBaseUpdate=re:O.next=re,_e.lastBaseUpdate=G))}if(x!==null){var ye=p.baseState;w=0,_e=re=G=null,O=x;do{var ve=O.lane,Oe=O.eventTime;if((u&ve)===ve){_e!==null&&(_e=_e.next={eventTime:Oe,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Ge=n,je=O;switch(ve=r,Oe=a,je.tag){case 1:if(Ge=je.payload,typeof Ge=="function"){ye=Ge.call(Oe,ye,ve);break e}ye=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=je.payload,ve=typeof Ge=="function"?Ge.call(Oe,ye,ve):Ge,ve==null)break e;ye=oe({},ye,ve);break e;case 2:pr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,ve=p.effects,ve===null?p.effects=[O]:ve.push(O))}else Oe={eventTime:Oe,lane:ve,tag:O.tag,payload:O.payload,callback:O.callback,next:null},_e===null?(re=_e=Oe,G=ye):_e=_e.next=Oe,w|=ve;if(O=O.next,O===null){if(O=p.shared.pending,O===null)break;ve=O,O=ve.next,ve.next=null,p.lastBaseUpdate=ve,p.shared.pending=null}}while(!0);if(_e===null&&(G=ye),p.baseState=G,p.firstBaseUpdate=re,p.lastBaseUpdate=_e,r=p.shared.interleaved,r!==null){p=r;do w|=p.lane,p=p.next;while(p!==r)}else x===null&&(p.shared.lanes=0);qr|=w,n.lanes=w,n.memoizedState=ye}}function Qp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var js={},Mi=dr(js),Xs=dr(js),Ys=dr(js);function Yr(n){if(n===js)throw Error(t(174));return n}function wu(n,r){switch(Ot(Ys,r),Ot(Xs,n),Ot(Mi,js),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:xe(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=xe(r,n)}Ht(Mi),Ot(Mi,r)}function ko(){Ht(Mi),Ht(Xs),Ht(Ys)}function Jp(n){Yr(Ys.current);var r=Yr(Mi.current),a=xe(r,n.type);r!==a&&(Ot(Xs,n),Ot(Mi,a))}function Tu(n){Xs.current===n&&(Ht(Mi),Ht(Xs))}var Wt=dr(0);function ol(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Au=[];function Cu(){for(var n=0;n<Au.length;n++)Au[n]._workInProgressVersionPrimary=null;Au.length=0}var sl=T.ReactCurrentDispatcher,bu=T.ReactCurrentBatchConfig,$r=0,jt=null,tn=null,an=null,al=!1,$s=!1,qs=0,Zx=0;function vn(){throw Error(t(321))}function Ru(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!si(n[a],r[a]))return!1;return!0}function Pu(n,r,a,u,p,x){if($r=x,jt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,sl.current=n===null||n.memoizedState===null?ty:ny,n=a(u,p),$s){x=0;do{if($s=!1,qs=0,25<=x)throw Error(t(301));x+=1,an=tn=null,r.updateQueue=null,sl.current=iy,n=a(u,p)}while($s)}if(sl.current=ul,r=tn!==null&&tn.next!==null,$r=0,an=tn=jt=null,al=!1,r)throw Error(t(300));return n}function Lu(){var n=qs!==0;return qs=0,n}function Ei(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?jt.memoizedState=an=n:an=an.next=n,an}function Jn(){if(tn===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var r=an===null?jt.memoizedState:an.next;if(r!==null)an=r,tn=n;else{if(n===null)throw Error(t(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},an===null?jt.memoizedState=an=n:an=an.next=n}return an}function Ks(n,r){return typeof r=="function"?r(n):r}function Du(n){var r=Jn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=tn,p=u.baseQueue,x=a.pending;if(x!==null){if(p!==null){var w=p.next;p.next=x.next,x.next=w}u.baseQueue=p=x,a.pending=null}if(p!==null){x=p.next,u=u.baseState;var O=w=null,G=null,re=x;do{var _e=re.lane;if(($r&_e)===_e)G!==null&&(G=G.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),u=re.hasEagerState?re.eagerState:n(u,re.action);else{var ye={lane:_e,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};G===null?(O=G=ye,w=u):G=G.next=ye,jt.lanes|=_e,qr|=_e}re=re.next}while(re!==null&&re!==x);G===null?w=u:G.next=O,si(u,r.memoizedState)||(Dn=!0),r.memoizedState=u,r.baseState=w,r.baseQueue=G,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do x=p.lane,jt.lanes|=x,qr|=x,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Nu(n){var r=Jn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,x=r.memoizedState;if(p!==null){a.pending=null;var w=p=p.next;do x=n(x,w.action),w=w.next;while(w!==p);si(x,r.memoizedState)||(Dn=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),a.lastRenderedState=x}return[x,u]}function em(){}function tm(n,r){var a=jt,u=Jn(),p=r(),x=!si(u.memoizedState,p);if(x&&(u.memoizedState=p,Dn=!0),u=u.queue,Iu(rm.bind(null,a,u,n),[n]),u.getSnapshot!==r||x||an!==null&&an.memoizedState.tag&1){if(a.flags|=2048,Zs(9,im.bind(null,a,u,p,r),void 0,null),ln===null)throw Error(t(349));($r&30)!==0||nm(a,r,p)}return p}function nm(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=jt.updateQueue,r===null?(r={lastEffect:null,stores:null},jt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function im(n,r,a,u){r.value=a,r.getSnapshot=u,om(r)&&sm(n)}function rm(n,r,a){return a(function(){om(r)&&sm(n)})}function om(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!si(n,a)}catch{return!0}}function sm(n){var r=Hi(n,1);r!==null&&di(r,n,1,-1)}function am(n){var r=Ei();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ks,lastRenderedState:n},r.queue=n,n=n.dispatch=ey.bind(null,jt,n),[r.memoizedState,n]}function Zs(n,r,a,u){return n={tag:n,create:r,destroy:a,deps:u,next:null},r=jt.updateQueue,r===null?(r={lastEffect:null,stores:null},jt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,r.lastEffect=n)),n}function lm(){return Jn().memoizedState}function ll(n,r,a,u){var p=Ei();jt.flags|=n,p.memoizedState=Zs(1|r,a,void 0,u===void 0?null:u)}function cl(n,r,a,u){var p=Jn();u=u===void 0?null:u;var x=void 0;if(tn!==null){var w=tn.memoizedState;if(x=w.destroy,u!==null&&Ru(u,w.deps)){p.memoizedState=Zs(r,a,x,u);return}}jt.flags|=n,p.memoizedState=Zs(1|r,a,x,u)}function cm(n,r){return ll(8390656,8,n,r)}function Iu(n,r){return cl(2048,8,n,r)}function um(n,r){return cl(4,2,n,r)}function dm(n,r){return cl(4,4,n,r)}function fm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function hm(n,r,a){return a=a!=null?a.concat([n]):null,cl(4,4,fm.bind(null,r,n),a)}function Uu(){}function pm(n,r){var a=Jn();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Ru(r,u[1])?u[0]:(a.memoizedState=[n,r],n)}function mm(n,r){var a=Jn();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Ru(r,u[1])?u[0]:(n=n(),a.memoizedState=[n,r],n)}function gm(n,r,a){return($r&21)===0?(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=a):(si(a,r)||(a=Tn(),jt.lanes|=a,qr|=a,n.baseState=!0),r)}function Qx(n,r){var a=gt;gt=a!==0&&4>a?a:4,n(!0);var u=bu.transition;bu.transition={};try{n(!1),r()}finally{gt=a,bu.transition=u}}function vm(){return Jn().memoizedState}function Jx(n,r,a){var u=xr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},_m(n))xm(r,a);else if(a=qp(n,r,a,u),a!==null){var p=Cn();di(a,n,u,p),ym(a,r,u)}}function ey(n,r,a){var u=xr(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(_m(n))xm(r,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var w=r.lastRenderedState,O=x(w,a);if(p.hasEagerState=!0,p.eagerState=O,si(O,w)){var G=r.interleaved;G===null?(p.next=p,Mu(r)):(p.next=G.next,G.next=p),r.interleaved=p;return}}catch{}finally{}a=qp(n,r,p,u),a!==null&&(p=Cn(),di(a,n,u,p),ym(a,r,u))}}function _m(n){var r=n.alternate;return n===jt||r!==null&&r===jt}function xm(n,r){$s=al=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function ym(n,r,a){if((a&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,Hr(n,a)}}var ul={readContext:Qn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},ty={readContext:Qn,useCallback:function(n,r){return Ei().memoizedState=[n,r===void 0?null:r],n},useContext:Qn,useEffect:cm,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,ll(4194308,4,fm.bind(null,r,n),a)},useLayoutEffect:function(n,r){return ll(4194308,4,n,r)},useInsertionEffect:function(n,r){return ll(4,2,n,r)},useMemo:function(n,r){var a=Ei();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var u=Ei();return r=a!==void 0?a(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=Jx.bind(null,jt,n),[u.memoizedState,n]},useRef:function(n){var r=Ei();return n={current:n},r.memoizedState=n},useState:am,useDebugValue:Uu,useDeferredValue:function(n){return Ei().memoizedState=n},useTransition:function(){var n=am(!1),r=n[0];return n=Qx.bind(null,n[1]),Ei().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var u=jt,p=Ei();if(Gt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),ln===null)throw Error(t(349));($r&30)!==0||nm(u,r,a)}p.memoizedState=a;var x={value:a,getSnapshot:r};return p.queue=x,cm(rm.bind(null,u,x,n),[n]),u.flags|=2048,Zs(9,im.bind(null,u,x,a,r),void 0,null),a},useId:function(){var n=Ei(),r=ln.identifierPrefix;if(Gt){var a=zi,u=Bi;a=(u&~(1<<32-yt(u)-1)).toString(32)+a,r=":"+r+"R"+a,a=qs++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Zx++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},ny={readContext:Qn,useCallback:pm,useContext:Qn,useEffect:Iu,useImperativeHandle:hm,useInsertionEffect:um,useLayoutEffect:dm,useMemo:mm,useReducer:Du,useRef:lm,useState:function(){return Du(Ks)},useDebugValue:Uu,useDeferredValue:function(n){var r=Jn();return gm(r,tn.memoizedState,n)},useTransition:function(){var n=Du(Ks)[0],r=Jn().memoizedState;return[n,r]},useMutableSource:em,useSyncExternalStore:tm,useId:vm,unstable_isNewReconciler:!1},iy={readContext:Qn,useCallback:pm,useContext:Qn,useEffect:Iu,useImperativeHandle:hm,useInsertionEffect:um,useLayoutEffect:dm,useMemo:mm,useReducer:Nu,useRef:lm,useState:function(){return Nu(Ks)},useDebugValue:Uu,useDeferredValue:function(n){var r=Jn();return tn===null?r.memoizedState=n:gm(r,tn.memoizedState,n)},useTransition:function(){var n=Nu(Ks)[0],r=Jn().memoizedState;return[n,r]},useMutableSource:em,useSyncExternalStore:tm,useId:vm,unstable_isNewReconciler:!1};function li(n,r){if(n&&n.defaultProps){r=oe({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Fu(n,r,a,u){r=n.memoizedState,a=a(u,r),a=a==null?r:oe({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var dl={isMounted:function(n){return(n=n._reactInternals)?Fi(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var u=Cn(),p=xr(n),x=Vi(u,p);x.payload=r,a!=null&&(x.callback=a),r=mr(n,x,p),r!==null&&(di(r,n,p,u),il(r,n,p))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var u=Cn(),p=xr(n),x=Vi(u,p);x.tag=1,x.payload=r,a!=null&&(x.callback=a),r=mr(n,x,p),r!==null&&(di(r,n,p,u),il(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Cn(),u=xr(n),p=Vi(a,u);p.tag=2,r!=null&&(p.callback=r),r=mr(n,p,u),r!==null&&(di(r,n,u,a),il(r,n,u))}};function Sm(n,r,a,u,p,x,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,x,w):r.prototype&&r.prototype.isPureReactComponent?!Os(a,u)||!Os(p,x):!0}function Mm(n,r,a){var u=!1,p=fr,x=r.contextType;return typeof x=="object"&&x!==null?x=Qn(x):(p=Ln(r)?Gr:gn.current,u=r.contextTypes,x=(u=u!=null)?Lo(n,p):fr),r=new r(a,x),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=dl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),r}function Em(n,r,a,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,u),r.state!==n&&dl.enqueueReplaceState(r,r.state,null)}function Ou(n,r,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},Eu(n);var x=r.contextType;typeof x=="object"&&x!==null?p.context=Qn(x):(x=Ln(r)?Gr:gn.current,p.context=Lo(n,x)),p.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Fu(n,r,x,a),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&dl.enqueueReplaceState(p,p.state,null),rl(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Bo(n,r){try{var a="",u=r;do a+=ne(u),u=u.return;while(u);var p=a}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:r,stack:p,digest:null}}function ku(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Bu(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var ry=typeof WeakMap=="function"?WeakMap:Map;function wm(n,r,a){a=Vi(-1,a),a.tag=3,a.payload={element:null};var u=r.value;return a.callback=function(){_l||(_l=!0,ed=u),Bu(n,r)},a}function Tm(n,r,a){a=Vi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;a.payload=function(){return u(p)},a.callback=function(){Bu(n,r)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){Bu(n,r),typeof u!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})}),a}function Am(n,r,a){var u=n.pingCache;if(u===null){u=n.pingCache=new ry;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(a)||(p.add(a),n=_y.bind(null,n,r,a),r.then(n,n))}function Cm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function bm(n,r,a,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Vi(-1,1),r.tag=2,mr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var oy=T.ReactCurrentOwner,Dn=!1;function An(n,r,a,u){r.child=n===null?$p(r,null,a,u):Uo(r,n.child,a,u)}function Rm(n,r,a,u,p){a=a.render;var x=r.ref;return Oo(r,p),u=Pu(n,r,a,u,x,p),a=Lu(),n!==null&&!Dn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Gi(n,r,p)):(Gt&&a&&hu(r),r.flags|=1,An(n,r,u,p),r.child)}function Pm(n,r,a,u,p){if(n===null){var x=a.type;return typeof x=="function"&&!ad(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=x,Lm(n,r,x,u,p)):(n=wl(a.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(x=n.child,(n.lanes&p)===0){var w=x.memoizedProps;if(a=a.compare,a=a!==null?a:Os,a(w,u)&&n.ref===r.ref)return Gi(n,r,p)}return r.flags|=1,n=Sr(x,u),n.ref=r.ref,n.return=r,r.child=n}function Lm(n,r,a,u,p){if(n!==null){var x=n.memoizedProps;if(Os(x,u)&&n.ref===r.ref)if(Dn=!1,r.pendingProps=u=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Dn=!0);else return r.lanes=n.lanes,Gi(n,r,p)}return zu(n,r,a,u,p)}function Dm(n,r,a){var u=r.pendingProps,p=u.children,x=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Ho,Gn),Gn|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ot(Ho,Gn),Gn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:a,Ot(Ho,Gn),Gn|=u}else x!==null?(u=x.baseLanes|a,r.memoizedState=null):u=a,Ot(Ho,Gn),Gn|=u;return An(n,r,p,a),r.child}function Nm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function zu(n,r,a,u,p){var x=Ln(a)?Gr:gn.current;return x=Lo(r,x),Oo(r,p),a=Pu(n,r,a,u,x,p),u=Lu(),n!==null&&!Dn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Gi(n,r,p)):(Gt&&u&&hu(r),r.flags|=1,An(n,r,a,p),r.child)}function Im(n,r,a,u,p){if(Ln(a)){var x=!0;qa(r)}else x=!1;if(Oo(r,p),r.stateNode===null)hl(n,r),Mm(r,a,u),Ou(r,a,u,p),u=!0;else if(n===null){var w=r.stateNode,O=r.memoizedProps;w.props=O;var G=w.context,re=a.contextType;typeof re=="object"&&re!==null?re=Qn(re):(re=Ln(a)?Gr:gn.current,re=Lo(r,re));var _e=a.getDerivedStateFromProps,ye=typeof _e=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==u||G!==re)&&Em(r,w,u,re),pr=!1;var ve=r.memoizedState;w.state=ve,rl(r,u,w,p),G=r.memoizedState,O!==u||ve!==G||Pn.current||pr?(typeof _e=="function"&&(Fu(r,a,_e,u),G=r.memoizedState),(O=pr||Sm(r,a,O,u,ve,G,re))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(r.flags|=4194308)):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=G),w.props=u,w.state=G,w.context=re,u=O):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{w=r.stateNode,Kp(n,r),O=r.memoizedProps,re=r.type===r.elementType?O:li(r.type,O),w.props=re,ye=r.pendingProps,ve=w.context,G=a.contextType,typeof G=="object"&&G!==null?G=Qn(G):(G=Ln(a)?Gr:gn.current,G=Lo(r,G));var Oe=a.getDerivedStateFromProps;(_e=typeof Oe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==ye||ve!==G)&&Em(r,w,u,G),pr=!1,ve=r.memoizedState,w.state=ve,rl(r,u,w,p);var Ge=r.memoizedState;O!==ye||ve!==Ge||Pn.current||pr?(typeof Oe=="function"&&(Fu(r,a,Oe,u),Ge=r.memoizedState),(re=pr||Sm(r,a,re,u,ve,Ge,G)||!1)?(_e||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,Ge,G),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,Ge,G)),typeof w.componentDidUpdate=="function"&&(r.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof w.componentDidUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Ge),w.props=u,w.state=Ge,w.context=G,u=re):(typeof w.componentDidUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),u=!1)}return Hu(n,r,a,u,x,p)}function Hu(n,r,a,u,p,x){Nm(n,r);var w=(r.flags&128)!==0;if(!u&&!w)return p&&Bp(r,a,!1),Gi(n,r,x);u=r.stateNode,oy.current=r;var O=w&&typeof a.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&w?(r.child=Uo(r,n.child,null,x),r.child=Uo(r,null,O,x)):An(n,r,O,x),r.memoizedState=u.state,p&&Bp(r,a,!0),r.child}function Um(n){var r=n.stateNode;r.pendingContext?Op(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Op(n,r.context,!1),wu(n,r.containerInfo)}function Fm(n,r,a,u,p){return Io(),vu(p),r.flags|=256,An(n,r,a,u),r.child}var Vu={dehydrated:null,treeContext:null,retryLane:0};function Gu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Om(n,r,a){var u=r.pendingProps,p=Wt.current,x=!1,w=(r.flags&128)!==0,O;if((O=w)||(O=n!==null&&n.memoizedState===null?!1:(p&2)!==0),O?(x=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ot(Wt,p&1),n===null)return gu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(w=u.children,n=u.fallback,x?(u=r.mode,x=r.child,w={mode:"hidden",children:w},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=w):x=Tl(w,u,0,null),n=Jr(n,u,a,null),x.return=r,n.return=r,x.sibling=n,r.child=x,r.child.memoizedState=Gu(a),r.memoizedState=Vu,n):Wu(r,w));if(p=n.memoizedState,p!==null&&(O=p.dehydrated,O!==null))return sy(n,r,w,u,O,p,a);if(x){x=u.fallback,w=r.mode,p=n.child,O=p.sibling;var G={mode:"hidden",children:u.children};return(w&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=G,r.deletions=null):(u=Sr(p,G),u.subtreeFlags=p.subtreeFlags&14680064),O!==null?x=Sr(O,x):(x=Jr(x,w,a,null),x.flags|=2),x.return=r,u.return=r,u.sibling=x,r.child=u,u=x,x=r.child,w=n.child.memoizedState,w=w===null?Gu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},x.memoizedState=w,x.childLanes=n.childLanes&~a,r.memoizedState=Vu,u}return x=n.child,n=x.sibling,u=Sr(x,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=a),u.return=r,u.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=u,r.memoizedState=null,u}function Wu(n,r){return r=Tl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function fl(n,r,a,u){return u!==null&&vu(u),Uo(r,n.child,null,a),n=Wu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function sy(n,r,a,u,p,x,w){if(a)return r.flags&256?(r.flags&=-257,u=ku(Error(t(422))),fl(n,r,w,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(x=u.fallback,p=r.mode,u=Tl({mode:"visible",children:u.children},p,0,null),x=Jr(x,p,w,null),x.flags|=2,u.return=r,x.return=r,u.sibling=x,r.child=u,(r.mode&1)!==0&&Uo(r,n.child,null,w),r.child.memoizedState=Gu(w),r.memoizedState=Vu,x);if((r.mode&1)===0)return fl(n,r,w,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var O=u.dgst;return u=O,x=Error(t(419)),u=ku(x,u,void 0),fl(n,r,w,u)}if(O=(w&n.childLanes)!==0,Dn||O){if(u=ln,u!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|w))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,Hi(n,p),di(u,n,p,-1))}return sd(),u=ku(Error(t(421))),fl(n,r,w,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=xy.bind(null,n),p._reactRetry=r,null):(n=x.treeContext,Vn=ur(p.nextSibling),Hn=r,Gt=!0,ai=null,n!==null&&(Kn[Zn++]=Bi,Kn[Zn++]=zi,Kn[Zn++]=Wr,Bi=n.id,zi=n.overflow,Wr=r),r=Wu(r,u.children),r.flags|=4096,r)}function km(n,r,a){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Su(n.return,r,a)}function ju(n,r,a,u,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=a,x.tailMode=p)}function Bm(n,r,a){var u=r.pendingProps,p=u.revealOrder,x=u.tail;if(An(n,r,u.children,a),u=Wt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&km(n,a,r);else if(n.tag===19)km(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ot(Wt,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(a=r.child,p=null;a!==null;)n=a.alternate,n!==null&&ol(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=r.child,r.child=null):(p=a.sibling,a.sibling=null),ju(r,!1,p,a,x);break;case"backwards":for(a=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&ol(n)===null){r.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}ju(r,!0,a,null,x);break;case"together":ju(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function hl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Gi(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),qr|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Sr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Sr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function ay(n,r,a){switch(r.tag){case 3:Um(r),Io();break;case 5:Jp(r);break;case 1:Ln(r.type)&&qa(r);break;case 4:wu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;Ot(tl,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Ot(Wt,Wt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Om(n,r,a):(Ot(Wt,Wt.current&1),n=Gi(n,r,a),n!==null?n.sibling:null);Ot(Wt,Wt.current&1);break;case 19:if(u=(a&r.childLanes)!==0,(n.flags&128)!==0){if(u)return Bm(n,r,a);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ot(Wt,Wt.current),u)break;return null;case 22:case 23:return r.lanes=0,Dm(n,r,a)}return Gi(n,r,a)}var zm,Xu,Hm,Vm;zm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Xu=function(){},Hm=function(n,r,a,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,Yr(Mi.current);var x=null;switch(a){case"input":p=St(n,p),u=St(n,u),x=[];break;case"select":p=oe({},p,{value:void 0}),u=oe({},u,{value:void 0}),x=[];break;case"textarea":p=Bt(n,p),u=Bt(n,u),x=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Xa)}Xe(a,u);var w;a=null;for(re in p)if(!u.hasOwnProperty(re)&&p.hasOwnProperty(re)&&p[re]!=null)if(re==="style"){var O=p[re];for(w in O)O.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(s.hasOwnProperty(re)?x||(x=[]):(x=x||[]).push(re,null));for(re in u){var G=u[re];if(O=p!=null?p[re]:void 0,u.hasOwnProperty(re)&&G!==O&&(G!=null||O!=null))if(re==="style")if(O){for(w in O)!O.hasOwnProperty(w)||G&&G.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in G)G.hasOwnProperty(w)&&O[w]!==G[w]&&(a||(a={}),a[w]=G[w])}else a||(x||(x=[]),x.push(re,a)),a=G;else re==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,O=O?O.__html:void 0,G!=null&&O!==G&&(x=x||[]).push(re,G)):re==="children"?typeof G!="string"&&typeof G!="number"||(x=x||[]).push(re,""+G):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(s.hasOwnProperty(re)?(G!=null&&re==="onScroll"&&zt("scroll",n),x||O===G||(x=[])):(x=x||[]).push(re,G))}a&&(x=x||[]).push("style",a);var re=x;(r.updateQueue=re)&&(r.flags|=4)}},Vm=function(n,r,a,u){a!==u&&(r.flags|=4)};function Qs(n,r){if(!Gt)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function _n(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(r)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,r}function ly(n,r,a){var u=r.pendingProps;switch(pu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(r),null;case 1:return Ln(r.type)&&$a(),_n(r),null;case 3:return u=r.stateNode,ko(),Ht(Pn),Ht(gn),Cu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ja(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ai!==null&&(id(ai),ai=null))),Xu(n,r),_n(r),null;case 5:Tu(r);var p=Yr(Ys.current);if(a=r.type,n!==null&&r.stateNode!=null)Hm(n,r,a,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return _n(r),null}if(n=Yr(Mi.current),Ja(r)){u=r.stateNode,a=r.type;var x=r.memoizedProps;switch(u[Si]=r,u[Vs]=x,n=(r.mode&1)!==0,a){case"dialog":zt("cancel",u),zt("close",u);break;case"iframe":case"object":case"embed":zt("load",u);break;case"video":case"audio":for(p=0;p<Bs.length;p++)zt(Bs[p],u);break;case"source":zt("error",u);break;case"img":case"image":case"link":zt("error",u),zt("load",u);break;case"details":zt("toggle",u);break;case"input":Je(u,x),zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},zt("invalid",u);break;case"textarea":F(u,x),zt("invalid",u)}Xe(a,x),p=null;for(var w in x)if(x.hasOwnProperty(w)){var O=x[w];w==="children"?typeof O=="string"?u.textContent!==O&&(x.suppressHydrationWarning!==!0&&ja(u.textContent,O,n),p=["children",O]):typeof O=="number"&&u.textContent!==""+O&&(x.suppressHydrationWarning!==!0&&ja(u.textContent,O,n),p=["children",""+O]):s.hasOwnProperty(w)&&O!=null&&w==="onScroll"&&zt("scroll",u)}switch(a){case"input":bt(u),Rt(u,x,!0);break;case"textarea":bt(u),J(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=Xa)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(a,{is:u.is}):(n=w.createElement(a),a==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,a),n[Si]=r,n[Vs]=u,zm(n,r,!1,!1),r.stateNode=n;e:{switch(w=Pe(a,u),a){case"dialog":zt("cancel",n),zt("close",n),p=u;break;case"iframe":case"object":case"embed":zt("load",n),p=u;break;case"video":case"audio":for(p=0;p<Bs.length;p++)zt(Bs[p],n);p=u;break;case"source":zt("error",n),p=u;break;case"img":case"image":case"link":zt("error",n),zt("load",n),p=u;break;case"details":zt("toggle",n),p=u;break;case"input":Je(n,u),p=St(n,u),zt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=oe({},u,{value:void 0}),zt("invalid",n);break;case"textarea":F(n,u),p=Bt(n,u),zt("invalid",n);break;default:p=u}Xe(a,p),O=p;for(x in O)if(O.hasOwnProperty(x)){var G=O[x];x==="style"?Ne(n,G):x==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Ke(n,G)):x==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&Ae(n,G):typeof G=="number"&&Ae(n,""+G):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(s.hasOwnProperty(x)?G!=null&&x==="onScroll"&&zt("scroll",n):G!=null&&b(n,x,G,w))}switch(a){case"input":bt(n),Rt(n,u,!1);break;case"textarea":bt(n),J(n);break;case"option":u.value!=null&&n.setAttribute("value",""+be(u.value));break;case"select":n.multiple=!!u.multiple,x=u.value,x!=null?kt(n,!!u.multiple,x,!1):u.defaultValue!=null&&kt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Xa)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return _n(r),null;case 6:if(n&&r.stateNode!=null)Vm(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(a=Yr(Ys.current),Yr(Mi.current),Ja(r)){if(u=r.stateNode,a=r.memoizedProps,u[Si]=r,(x=u.nodeValue!==a)&&(n=Hn,n!==null))switch(n.tag){case 3:ja(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ja(u.nodeValue,a,(n.mode&1)!==0)}x&&(r.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Si]=r,r.stateNode=u}return _n(r),null;case 13:if(Ht(Wt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Gt&&Vn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)jp(),Io(),r.flags|=98560,x=!1;else if(x=Ja(r),u!==null&&u.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Si]=r}else Io(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;_n(r),x=!1}else ai!==null&&(id(ai),ai=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Wt.current&1)!==0?nn===0&&(nn=3):sd())),r.updateQueue!==null&&(r.flags|=4),_n(r),null);case 4:return ko(),Xu(n,r),n===null&&zs(r.stateNode.containerInfo),_n(r),null;case 10:return yu(r.type._context),_n(r),null;case 17:return Ln(r.type)&&$a(),_n(r),null;case 19:if(Ht(Wt),x=r.memoizedState,x===null)return _n(r),null;if(u=(r.flags&128)!==0,w=x.rendering,w===null)if(u)Qs(x,!1);else{if(nn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(w=ol(n),w!==null){for(r.flags|=128,Qs(x,!1),u=w.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=a,a=r.child;a!==null;)x=a,n=u,x.flags&=14680066,w=x.alternate,w===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=w.childLanes,x.lanes=w.lanes,x.child=w.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=w.memoizedProps,x.memoizedState=w.memoizedState,x.updateQueue=w.updateQueue,x.type=w.type,n=w.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ot(Wt,Wt.current&1|2),r.child}n=n.sibling}x.tail!==null&&X()>Vo&&(r.flags|=128,u=!0,Qs(x,!1),r.lanes=4194304)}else{if(!u)if(n=ol(w),n!==null){if(r.flags|=128,u=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Qs(x,!0),x.tail===null&&x.tailMode==="hidden"&&!w.alternate&&!Gt)return _n(r),null}else 2*X()-x.renderingStartTime>Vo&&a!==1073741824&&(r.flags|=128,u=!0,Qs(x,!1),r.lanes=4194304);x.isBackwards?(w.sibling=r.child,r.child=w):(a=x.last,a!==null?a.sibling=w:r.child=w,x.last=w)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=X(),r.sibling=null,a=Wt.current,Ot(Wt,u?a&1|2:a&1),r):(_n(r),null);case 22:case 23:return od(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Gn&1073741824)!==0&&(_n(r),r.subtreeFlags&6&&(r.flags|=8192)):_n(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function cy(n,r){switch(pu(r),r.tag){case 1:return Ln(r.type)&&$a(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ko(),Ht(Pn),Ht(gn),Cu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Tu(r),null;case 13:if(Ht(Wt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Io()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ht(Wt),null;case 4:return ko(),null;case 10:return yu(r.type._context),null;case 22:case 23:return od(),null;case 24:return null;default:return null}}var pl=!1,xn=!1,uy=typeof WeakSet=="function"?WeakSet:Set,ze=null;function zo(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Xt(n,r,u)}else a.current=null}function Yu(n,r,a){try{a()}catch(u){Xt(n,r,u)}}var Gm=!1;function dy(n,r){if(ou=Ia,n=Sp(),Zc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var w=0,O=-1,G=-1,re=0,_e=0,ye=n,ve=null;t:for(;;){for(var Oe;ye!==a||p!==0&&ye.nodeType!==3||(O=w+p),ye!==x||u!==0&&ye.nodeType!==3||(G=w+u),ye.nodeType===3&&(w+=ye.nodeValue.length),(Oe=ye.firstChild)!==null;)ve=ye,ye=Oe;for(;;){if(ye===n)break t;if(ve===a&&++re===p&&(O=w),ve===x&&++_e===u&&(G=w),(Oe=ye.nextSibling)!==null)break;ye=ve,ve=ye.parentNode}ye=Oe}a=O===-1||G===-1?null:{start:O,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(su={focusedElem:n,selectionRange:a},Ia=!1,ze=r;ze!==null;)if(r=ze,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ze=n;else for(;ze!==null;){r=ze;try{var Ge=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var je=Ge.memoizedProps,Kt=Ge.memoizedState,K=r.stateNode,Y=K.getSnapshotBeforeUpdate(r.elementType===r.type?je:li(r.type,je),Kt);K.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var te=r.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Xt(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,ze=n;break}ze=r.return}return Ge=Gm,Gm=!1,Ge}function Js(n,r,a){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&Yu(r,a,x)}p=p.next}while(p!==u)}}function ml(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==r)}}function $u(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Wm(n){var r=n.alternate;r!==null&&(n.alternate=null,Wm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Si],delete r[Vs],delete r[uu],delete r[Yx],delete r[$x])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function jm(n){return n.tag===5||n.tag===3||n.tag===4}function Xm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||jm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qu(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Xa));else if(u!==4&&(n=n.child,n!==null))for(qu(n,r,a),n=n.sibling;n!==null;)qu(n,r,a),n=n.sibling}function Ku(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Ku(n,r,a),n=n.sibling;n!==null;)Ku(n,r,a),n=n.sibling}var dn=null,ci=!1;function gr(n,r,a){for(a=a.child;a!==null;)Ym(n,r,a),a=a.sibling}function Ym(n,r,a){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Qe,a)}catch{}switch(a.tag){case 5:xn||zo(a,r);case 6:var u=dn,p=ci;dn=null,gr(n,r,a),dn=u,ci=p,dn!==null&&(ci?(n=dn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):dn.removeChild(a.stateNode));break;case 18:dn!==null&&(ci?(n=dn,a=a.stateNode,n.nodeType===8?cu(n.parentNode,a):n.nodeType===1&&cu(n,a),Ls(n)):cu(dn,a.stateNode));break;case 4:u=dn,p=ci,dn=a.stateNode.containerInfo,ci=!0,gr(n,r,a),dn=u,ci=p;break;case 0:case 11:case 14:case 15:if(!xn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var x=p,w=x.destroy;x=x.tag,w!==void 0&&((x&2)!==0||(x&4)!==0)&&Yu(a,r,w),p=p.next}while(p!==u)}gr(n,r,a);break;case 1:if(!xn&&(zo(a,r),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(O){Xt(a,r,O)}gr(n,r,a);break;case 21:gr(n,r,a);break;case 22:a.mode&1?(xn=(u=xn)||a.memoizedState!==null,gr(n,r,a),xn=u):gr(n,r,a);break;default:gr(n,r,a)}}function $m(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new uy),r.forEach(function(u){var p=yy.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function ui(n,r){var a=r.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var x=n,w=r,O=w;e:for(;O!==null;){switch(O.tag){case 5:dn=O.stateNode,ci=!1;break e;case 3:dn=O.stateNode.containerInfo,ci=!0;break e;case 4:dn=O.stateNode.containerInfo,ci=!0;break e}O=O.return}if(dn===null)throw Error(t(160));Ym(x,w,p),dn=null,ci=!1;var G=p.alternate;G!==null&&(G.return=null),p.return=null}catch(re){Xt(p,r,re)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)qm(r,n),r=r.sibling}function qm(n,r){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ui(r,n),wi(n),u&4){try{Js(3,n,n.return),ml(3,n)}catch(je){Xt(n,n.return,je)}try{Js(5,n,n.return)}catch(je){Xt(n,n.return,je)}}break;case 1:ui(r,n),wi(n),u&512&&a!==null&&zo(a,a.return);break;case 5:if(ui(r,n),wi(n),u&512&&a!==null&&zo(a,a.return),n.flags&32){var p=n.stateNode;try{Ae(p,"")}catch(je){Xt(n,n.return,je)}}if(u&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,w=a!==null?a.memoizedProps:x,O=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{O==="input"&&x.type==="radio"&&x.name!=null&&vt(p,x),Pe(O,w);var re=Pe(O,x);for(w=0;w<G.length;w+=2){var _e=G[w],ye=G[w+1];_e==="style"?Ne(p,ye):_e==="dangerouslySetInnerHTML"?Ke(p,ye):_e==="children"?Ae(p,ye):b(p,_e,ye,re)}switch(O){case"input":$e(p,x);break;case"textarea":A(p,x);break;case"select":var ve=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var Oe=x.value;Oe!=null?kt(p,!!x.multiple,Oe,!1):ve!==!!x.multiple&&(x.defaultValue!=null?kt(p,!!x.multiple,x.defaultValue,!0):kt(p,!!x.multiple,x.multiple?[]:"",!1))}p[Vs]=x}catch(je){Xt(n,n.return,je)}}break;case 6:if(ui(r,n),wi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(je){Xt(n,n.return,je)}}break;case 3:if(ui(r,n),wi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Ls(r.containerInfo)}catch(je){Xt(n,n.return,je)}break;case 4:ui(r,n),wi(n);break;case 13:ui(r,n),wi(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Ju=X())),u&4&&$m(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(xn=(re=xn)||_e,ui(r,n),xn=re):ui(r,n),wi(n),u&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!_e&&(n.mode&1)!==0)for(ze=n,_e=n.child;_e!==null;){for(ye=ze=_e;ze!==null;){switch(ve=ze,Oe=ve.child,ve.tag){case 0:case 11:case 14:case 15:Js(4,ve,ve.return);break;case 1:zo(ve,ve.return);var Ge=ve.stateNode;if(typeof Ge.componentWillUnmount=="function"){u=ve,a=ve.return;try{r=u,Ge.props=r.memoizedProps,Ge.state=r.memoizedState,Ge.componentWillUnmount()}catch(je){Xt(u,a,je)}}break;case 5:zo(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Qm(ye);continue}}Oe!==null?(Oe.return=ve,ze=Oe):Qm(ye)}_e=_e.sibling}e:for(_e=null,ye=n;;){if(ye.tag===5){if(_e===null){_e=ye;try{p=ye.stateNode,re?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(O=ye.stateNode,G=ye.memoizedProps.style,w=G!=null&&G.hasOwnProperty("display")?G.display:null,O.style.display=we("display",w))}catch(je){Xt(n,n.return,je)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=re?"":ye.memoizedProps}catch(je){Xt(n,n.return,je)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ui(r,n),wi(n),u&4&&$m(n);break;case 21:break;default:ui(r,n),wi(n)}}function wi(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(jm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Ae(p,""),u.flags&=-33);var x=Xm(n);Ku(n,x,p);break;case 3:case 4:var w=u.stateNode.containerInfo,O=Xm(n);qu(n,O,w);break;default:throw Error(t(161))}}catch(G){Xt(n,n.return,G)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function fy(n,r,a){ze=n,Km(n)}function Km(n,r,a){for(var u=(n.mode&1)!==0;ze!==null;){var p=ze,x=p.child;if(p.tag===22&&u){var w=p.memoizedState!==null||pl;if(!w){var O=p.alternate,G=O!==null&&O.memoizedState!==null||xn;O=pl;var re=xn;if(pl=w,(xn=G)&&!re)for(ze=p;ze!==null;)w=ze,G=w.child,w.tag===22&&w.memoizedState!==null?Jm(p):G!==null?(G.return=w,ze=G):Jm(p);for(;x!==null;)ze=x,Km(x),x=x.sibling;ze=p,pl=O,xn=re}Zm(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,ze=x):Zm(n)}}function Zm(n){for(;ze!==null;){var r=ze;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:xn||ml(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!xn)if(a===null)u.componentDidMount();else{var p=r.elementType===r.type?a.memoizedProps:li(r.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&Qp(r,x,u);break;case 3:var w=r.updateQueue;if(w!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Qp(r,w,a)}break;case 5:var O=r.stateNode;if(a===null&&r.flags&4){a=O;var G=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var re=r.alternate;if(re!==null){var _e=re.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&Ls(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||r.flags&512&&$u(r)}catch(ve){Xt(r,r.return,ve)}}if(r===n){ze=null;break}if(a=r.sibling,a!==null){a.return=r.return,ze=a;break}ze=r.return}}function Qm(n){for(;ze!==null;){var r=ze;if(r===n){ze=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ze=a;break}ze=r.return}}function Jm(n){for(;ze!==null;){var r=ze;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{ml(4,r)}catch(G){Xt(r,a,G)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(G){Xt(r,p,G)}}var x=r.return;try{$u(r)}catch(G){Xt(r,x,G)}break;case 5:var w=r.return;try{$u(r)}catch(G){Xt(r,w,G)}}}catch(G){Xt(r,r.return,G)}if(r===n){ze=null;break}var O=r.sibling;if(O!==null){O.return=r.return,ze=O;break}ze=r.return}}var hy=Math.ceil,gl=T.ReactCurrentDispatcher,Zu=T.ReactCurrentOwner,ei=T.ReactCurrentBatchConfig,Mt=0,ln=null,Qt=null,fn=0,Gn=0,Ho=dr(0),nn=0,ea=null,qr=0,vl=0,Qu=0,ta=null,Nn=null,Ju=0,Vo=1/0,Wi=null,_l=!1,ed=null,vr=null,xl=!1,_r=null,yl=0,na=0,td=null,Sl=-1,Ml=0;function Cn(){return(Mt&6)!==0?X():Sl!==-1?Sl:Sl=X()}function xr(n){return(n.mode&1)===0?1:(Mt&2)!==0&&fn!==0?fn&-fn:Kx.transition!==null?(Ml===0&&(Ml=Tn()),Ml):(n=gt,n!==0||(n=window.event,n=n===void 0?16:tp(n.type)),n)}function di(n,r,a,u){if(50<na)throw na=0,td=null,Error(t(185));qt(n,a,u),((Mt&2)===0||n!==ln)&&(n===ln&&((Mt&2)===0&&(vl|=a),nn===4&&yr(n,fn)),In(n,u),a===1&&Mt===0&&(r.mode&1)===0&&(Vo=X()+500,Ka&&hr()))}function In(n,r){var a=n.callbackNode;zr(n,r);var u=oi(n,n===ln?fn:0);if(u===0)a!==null&&$(a),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(a!=null&&$(a),r===1)n.tag===0?qx(tg.bind(null,n)):zp(tg.bind(null,n)),jx(function(){(Mt&6)===0&&hr()}),a=null;else{switch(Yh(u)){case 1:a=Le;break;case 4:a=Ve;break;case 16:a=Fe;break;case 536870912:a=ot;break;default:a=Fe}a=cg(a,eg.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function eg(n,r){if(Sl=-1,Ml=0,(Mt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Go()&&n.callbackNode!==a)return null;var u=oi(n,n===ln?fn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=El(n,u);else{r=u;var p=Mt;Mt|=2;var x=ig();(ln!==n||fn!==r)&&(Wi=null,Vo=X()+500,Zr(n,r));do try{gy();break}catch(O){ng(n,O)}while(!0);xu(),gl.current=x,Mt=p,Qt!==null?r=0:(ln=null,fn=0,r=nn)}if(r!==0){if(r===2&&(p=Ft(n),p!==0&&(u=p,r=nd(n,p))),r===1)throw a=ea,Zr(n,0),yr(n,u),In(n,X()),a;if(r===6)yr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!py(p)&&(r=El(n,u),r===2&&(x=Ft(n),x!==0&&(u=x,r=nd(n,x))),r===1))throw a=ea,Zr(n,0),yr(n,u),In(n,X()),a;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Qr(n,Nn,Wi);break;case 3:if(yr(n,u),(u&130023424)===u&&(r=Ju+500-X(),10<r)){if(oi(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Cn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=lu(Qr.bind(null,n,Nn,Wi),r);break}Qr(n,Nn,Wi);break;case 4:if(yr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var w=31-yt(u);x=1<<w,w=r[w],w>p&&(p=w),u&=~x}if(u=p,u=X()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*hy(u/1960))-u,10<u){n.timeoutHandle=lu(Qr.bind(null,n,Nn,Wi),u);break}Qr(n,Nn,Wi);break;case 5:Qr(n,Nn,Wi);break;default:throw Error(t(329))}}}return In(n,X()),n.callbackNode===a?eg.bind(null,n):null}function nd(n,r){var a=ta;return n.current.memoizedState.isDehydrated&&(Zr(n,r).flags|=256),n=El(n,r),n!==2&&(r=Nn,Nn=a,r!==null&&id(r)),n}function id(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function py(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],x=p.getSnapshot;p=p.value;try{if(!si(x(),p))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function yr(n,r){for(r&=~Qu,r&=~vl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-yt(r),u=1<<a;n[a]=-1,r&=~u}}function tg(n){if((Mt&6)!==0)throw Error(t(327));Go();var r=oi(n,0);if((r&1)===0)return In(n,X()),null;var a=El(n,r);if(n.tag!==0&&a===2){var u=Ft(n);u!==0&&(r=u,a=nd(n,u))}if(a===1)throw a=ea,Zr(n,0),yr(n,r),In(n,X()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Qr(n,Nn,Wi),In(n,X()),null}function rd(n,r){var a=Mt;Mt|=1;try{return n(r)}finally{Mt=a,Mt===0&&(Vo=X()+500,Ka&&hr())}}function Kr(n){_r!==null&&_r.tag===0&&(Mt&6)===0&&Go();var r=Mt;Mt|=1;var a=ei.transition,u=gt;try{if(ei.transition=null,gt=1,n)return n()}finally{gt=u,ei.transition=a,Mt=r,(Mt&6)===0&&hr()}}function od(){Gn=Ho.current,Ht(Ho)}function Zr(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Wx(a)),Qt!==null)for(a=Qt.return;a!==null;){var u=a;switch(pu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&$a();break;case 3:ko(),Ht(Pn),Ht(gn),Cu();break;case 5:Tu(u);break;case 4:ko();break;case 13:Ht(Wt);break;case 19:Ht(Wt);break;case 10:yu(u.type._context);break;case 22:case 23:od()}a=a.return}if(ln=n,Qt=n=Sr(n.current,null),fn=Gn=r,nn=0,ea=null,Qu=vl=qr=0,Nn=ta=null,Xr!==null){for(r=0;r<Xr.length;r++)if(a=Xr[r],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,x=a.pending;if(x!==null){var w=x.next;x.next=p,u.next=w}a.pending=u}Xr=null}return n}function ng(n,r){do{var a=Qt;try{if(xu(),sl.current=ul,al){for(var u=jt.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}al=!1}if($r=0,an=tn=jt=null,$s=!1,qs=0,Zu.current=null,a===null||a.return===null){nn=1,ea=r,Qt=null;break}e:{var x=n,w=a.return,O=a,G=r;if(r=fn,O.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var re=G,_e=O,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Oe=Cm(w);if(Oe!==null){Oe.flags&=-257,bm(Oe,w,O,x,r),Oe.mode&1&&Am(x,re,r),r=Oe,G=re;var Ge=r.updateQueue;if(Ge===null){var je=new Set;je.add(G),r.updateQueue=je}else Ge.add(G);break e}else{if((r&1)===0){Am(x,re,r),sd();break e}G=Error(t(426))}}else if(Gt&&O.mode&1){var Kt=Cm(w);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),bm(Kt,w,O,x,r),vu(Bo(G,O));break e}}x=G=Bo(G,O),nn!==4&&(nn=2),ta===null?ta=[x]:ta.push(x),x=w;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var K=wm(x,G,r);Zp(x,K);break e;case 1:O=G;var Y=x.type,te=x.stateNode;if((x.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(vr===null||!vr.has(te)))){x.flags|=65536,r&=-r,x.lanes|=r;var Te=Tm(x,O,r);Zp(x,Te);break e}}x=x.return}while(x!==null)}og(a)}catch(qe){r=qe,Qt===a&&a!==null&&(Qt=a=a.return);continue}break}while(!0)}function ig(){var n=gl.current;return gl.current=ul,n===null?ul:n}function sd(){(nn===0||nn===3||nn===2)&&(nn=4),ln===null||(qr&268435455)===0&&(vl&268435455)===0||yr(ln,fn)}function El(n,r){var a=Mt;Mt|=2;var u=ig();(ln!==n||fn!==r)&&(Wi=null,Zr(n,r));do try{my();break}catch(p){ng(n,p)}while(!0);if(xu(),Mt=a,gl.current=u,Qt!==null)throw Error(t(261));return ln=null,fn=0,nn}function my(){for(;Qt!==null;)rg(Qt)}function gy(){for(;Qt!==null&&!se();)rg(Qt)}function rg(n){var r=lg(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,r===null?og(n):Qt=r,Zu.current=null}function og(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=ly(a,r,Gn),a!==null){Qt=a;return}}else{if(a=cy(a,r),a!==null){a.flags&=32767,Qt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nn=6,Qt=null;return}}if(r=r.sibling,r!==null){Qt=r;return}Qt=r=n}while(r!==null);nn===0&&(nn=5)}function Qr(n,r,a){var u=gt,p=ei.transition;try{ei.transition=null,gt=1,vy(n,r,a,u)}finally{ei.transition=p,gt=u}return null}function vy(n,r,a,u){do Go();while(_r!==null);if((Mt&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(mn(n,x),n===ln&&(Qt=ln=null,fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||xl||(xl=!0,cg(Fe,function(){return Go(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=ei.transition,ei.transition=null;var w=gt;gt=1;var O=Mt;Mt|=4,Zu.current=null,dy(n,a),qm(a,n),Ox(su),Ia=!!ou,su=ou=null,n.current=a,fy(a),le(),Mt=O,gt=w,ei.transition=x}else n.current=a;if(xl&&(xl=!1,_r=n,yl=p),x=n.pendingLanes,x===0&&(vr=null),Ct(a.stateNode),In(n,X()),r!==null)for(u=n.onRecoverableError,a=0;a<r.length;a++)p=r[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(_l)throw _l=!1,n=ed,ed=null,n;return(yl&1)!==0&&n.tag!==0&&Go(),x=n.pendingLanes,(x&1)!==0?n===td?na++:(na=0,td=n):na=0,hr(),null}function Go(){if(_r!==null){var n=Yh(yl),r=ei.transition,a=gt;try{if(ei.transition=null,gt=16>n?16:n,_r===null)var u=!1;else{if(n=_r,_r=null,yl=0,(Mt&6)!==0)throw Error(t(331));var p=Mt;for(Mt|=4,ze=n.current;ze!==null;){var x=ze,w=x.child;if((ze.flags&16)!==0){var O=x.deletions;if(O!==null){for(var G=0;G<O.length;G++){var re=O[G];for(ze=re;ze!==null;){var _e=ze;switch(_e.tag){case 0:case 11:case 15:Js(8,_e,x)}var ye=_e.child;if(ye!==null)ye.return=_e,ze=ye;else for(;ze!==null;){_e=ze;var ve=_e.sibling,Oe=_e.return;if(Wm(_e),_e===re){ze=null;break}if(ve!==null){ve.return=Oe,ze=ve;break}ze=Oe}}}var Ge=x.alternate;if(Ge!==null){var je=Ge.child;if(je!==null){Ge.child=null;do{var Kt=je.sibling;je.sibling=null,je=Kt}while(je!==null)}}ze=x}}if((x.subtreeFlags&2064)!==0&&w!==null)w.return=x,ze=w;else e:for(;ze!==null;){if(x=ze,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Js(9,x,x.return)}var K=x.sibling;if(K!==null){K.return=x.return,ze=K;break e}ze=x.return}}var Y=n.current;for(ze=Y;ze!==null;){w=ze;var te=w.child;if((w.subtreeFlags&2064)!==0&&te!==null)te.return=w,ze=te;else e:for(w=Y;ze!==null;){if(O=ze,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:ml(9,O)}}catch(qe){Xt(O,O.return,qe)}if(O===w){ze=null;break e}var Te=O.sibling;if(Te!==null){Te.return=O.return,ze=Te;break e}ze=O.return}}if(Mt=p,hr(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Qe,n)}catch{}u=!0}return u}finally{gt=a,ei.transition=r}}return!1}function sg(n,r,a){r=Bo(a,r),r=wm(n,r,1),n=mr(n,r,1),r=Cn(),n!==null&&(qt(n,1,r),In(n,r))}function Xt(n,r,a){if(n.tag===3)sg(n,n,a);else for(;r!==null;){if(r.tag===3){sg(r,n,a);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(vr===null||!vr.has(u))){n=Bo(a,n),n=Tm(r,n,1),r=mr(r,n,1),n=Cn(),r!==null&&(qt(r,1,n),In(r,n));break}}r=r.return}}function _y(n,r,a){var u=n.pingCache;u!==null&&u.delete(r),r=Cn(),n.pingedLanes|=n.suspendedLanes&a,ln===n&&(fn&a)===a&&(nn===4||nn===3&&(fn&130023424)===fn&&500>X()-Ju?Zr(n,0):Qu|=a),In(n,r)}function ag(n,r){r===0&&((n.mode&1)===0?r=1:(r=mt,mt<<=1,(mt&130023424)===0&&(mt=4194304)));var a=Cn();n=Hi(n,r),n!==null&&(qt(n,r,a),In(n,a))}function xy(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),ag(n,a)}function yy(n,r){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),ag(n,a)}var lg;lg=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Pn.current)Dn=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Dn=!1,ay(n,r,a);Dn=(n.flags&131072)!==0}else Dn=!1,Gt&&(r.flags&1048576)!==0&&Hp(r,Qa,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;hl(n,r),n=r.pendingProps;var p=Lo(r,gn.current);Oo(r,a),p=Pu(null,r,u,n,p,a);var x=Lu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ln(u)?(x=!0,qa(r)):x=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Eu(r),p.updater=dl,r.stateNode=p,p._reactInternals=r,Ou(r,u,n,a),r=Hu(null,r,u,!0,x,a)):(r.tag=0,Gt&&x&&hu(r),An(null,r,p,a),r=r.child),r;case 16:u=r.elementType;e:{switch(hl(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=My(u),n=li(u,n),p){case 0:r=zu(null,r,u,n,a);break e;case 1:r=Im(null,r,u,n,a);break e;case 11:r=Rm(null,r,u,n,a);break e;case 14:r=Pm(null,r,u,li(u.type,n),a);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:li(u,p),zu(n,r,u,p,a);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:li(u,p),Im(n,r,u,p,a);case 3:e:{if(Um(r),n===null)throw Error(t(387));u=r.pendingProps,x=r.memoizedState,p=x.element,Kp(n,r),rl(r,u,null,a);var w=r.memoizedState;if(u=w.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){p=Bo(Error(t(423)),r),r=Fm(n,r,u,a,p);break e}else if(u!==p){p=Bo(Error(t(424)),r),r=Fm(n,r,u,a,p);break e}else for(Vn=ur(r.stateNode.containerInfo.firstChild),Hn=r,Gt=!0,ai=null,a=$p(r,null,u,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Io(),u===p){r=Gi(n,r,a);break e}An(n,r,u,a)}r=r.child}return r;case 5:return Jp(r),n===null&&gu(r),u=r.type,p=r.pendingProps,x=n!==null?n.memoizedProps:null,w=p.children,au(u,p)?w=null:x!==null&&au(u,x)&&(r.flags|=32),Nm(n,r),An(n,r,w,a),r.child;case 6:return n===null&&gu(r),null;case 13:return Om(n,r,a);case 4:return wu(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Uo(r,null,u,a):An(n,r,u,a),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:li(u,p),Rm(n,r,u,p,a);case 7:return An(n,r,r.pendingProps,a),r.child;case 8:return An(n,r,r.pendingProps.children,a),r.child;case 12:return An(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,x=r.memoizedProps,w=p.value,Ot(tl,u._currentValue),u._currentValue=w,x!==null)if(si(x.value,w)){if(x.children===p.children&&!Pn.current){r=Gi(n,r,a);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var O=x.dependencies;if(O!==null){w=x.child;for(var G=O.firstContext;G!==null;){if(G.context===u){if(x.tag===1){G=Vi(-1,a&-a),G.tag=2;var re=x.updateQueue;if(re!==null){re=re.shared;var _e=re.pending;_e===null?G.next=G:(G.next=_e.next,_e.next=G),re.pending=G}}x.lanes|=a,G=x.alternate,G!==null&&(G.lanes|=a),Su(x.return,a,r),O.lanes|=a;break}G=G.next}}else if(x.tag===10)w=x.type===r.type?null:x.child;else if(x.tag===18){if(w=x.return,w===null)throw Error(t(341));w.lanes|=a,O=w.alternate,O!==null&&(O.lanes|=a),Su(w,a,r),w=x.sibling}else w=x.child;if(w!==null)w.return=x;else for(w=x;w!==null;){if(w===r){w=null;break}if(x=w.sibling,x!==null){x.return=w.return,w=x;break}w=w.return}x=w}An(n,r,p.children,a),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,Oo(r,a),p=Qn(p),u=u(p),r.flags|=1,An(n,r,u,a),r.child;case 14:return u=r.type,p=li(u,r.pendingProps),p=li(u.type,p),Pm(n,r,u,p,a);case 15:return Lm(n,r,r.type,r.pendingProps,a);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:li(u,p),hl(n,r),r.tag=1,Ln(u)?(n=!0,qa(r)):n=!1,Oo(r,a),Mm(r,u,p),Ou(r,u,p,a),Hu(null,r,u,!0,n,a);case 19:return Bm(n,r,a);case 22:return Dm(n,r,a)}throw Error(t(156,r.tag))};function cg(n,r){return R(n,r)}function Sy(n,r,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,r,a,u){return new Sy(n,r,a,u)}function ad(n){return n=n.prototype,!(!n||!n.isReactComponent)}function My(n){if(typeof n=="function")return ad(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===de)return 14}return 2}function Sr(n,r){var a=n.alternate;return a===null?(a=ti(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function wl(n,r,a,u,p,x){var w=2;if(u=n,typeof n=="function")ad(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case N:return Jr(a.children,p,x,r);case H:w=8,p|=8;break;case D:return n=ti(12,a,r,p|2),n.elementType=D,n.lanes=x,n;case q:return n=ti(13,a,r,p),n.elementType=q,n.lanes=x,n;case ee:return n=ti(19,a,r,p),n.elementType=ee,n.lanes=x,n;case ce:return Tl(a,p,x,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:w=10;break e;case k:w=9;break e;case Z:w=11;break e;case de:w=14;break e;case Q:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ti(w,a,r,p),r.elementType=n,r.type=u,r.lanes=x,r}function Jr(n,r,a,u){return n=ti(7,n,u,r),n.lanes=a,n}function Tl(n,r,a,u){return n=ti(22,n,u,r),n.elementType=ce,n.lanes=a,n.stateNode={isHidden:!1},n}function ld(n,r,a){return n=ti(6,n,null,r),n.lanes=a,n}function cd(n,r,a){return r=ti(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Ey(n,r,a,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function ud(n,r,a,u,p,x,w,O,G){return n=new Ey(n,r,a,O,G),r===1?(r=1,x===!0&&(r|=8)):r=0,x=ti(3,null,null,r),n.current=x,x.stateNode=n,x.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eu(x),n}function wy(n,r,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:r,implementation:a}}function ug(n){if(!n)return fr;n=n._reactInternals;e:{if(Fi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ln(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ln(a))return kp(n,a,r)}return r}function dg(n,r,a,u,p,x,w,O,G){return n=ud(a,u,!0,n,p,x,w,O,G),n.context=ug(null),a=n.current,u=Cn(),p=xr(a),x=Vi(u,p),x.callback=r??null,mr(a,x,p),n.current.lanes=p,qt(n,p,u),In(n,u),n}function Al(n,r,a,u){var p=r.current,x=Cn(),w=xr(p);return a=ug(a),r.context===null?r.context=a:r.pendingContext=a,r=Vi(x,w),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=mr(p,r,w),n!==null&&(di(n,p,w,x),il(n,p,w)),w}function Cl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function fg(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function dd(n,r){fg(n,r),(n=n.alternate)&&fg(n,r)}function Ty(){return null}var hg=typeof reportError=="function"?reportError:function(n){console.error(n)};function fd(n){this._internalRoot=n}bl.prototype.render=fd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Al(n,r,null,null)},bl.prototype.unmount=fd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Kr(function(){Al(null,n,null,null)}),r[Oi]=null}};function bl(n){this._internalRoot=n}bl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Kh();n={blockedOn:null,target:n,priority:r};for(var a=0;a<ar.length&&r!==0&&r<ar[a].priority;a++);ar.splice(a,0,n),a===0&&Jh(n)}};function hd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function pg(){}function Ay(n,r,a,u,p){if(p){if(typeof u=="function"){var x=u;u=function(){var re=Cl(w);x.call(re)}}var w=dg(r,u,n,0,null,!1,!1,"",pg);return n._reactRootContainer=w,n[Oi]=w.current,zs(n.nodeType===8?n.parentNode:n),Kr(),w}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var O=u;u=function(){var re=Cl(G);O.call(re)}}var G=ud(n,0,!1,null,null,!1,!1,"",pg);return n._reactRootContainer=G,n[Oi]=G.current,zs(n.nodeType===8?n.parentNode:n),Kr(function(){Al(r,G,a,u)}),G}function Pl(n,r,a,u,p){var x=a._reactRootContainer;if(x){var w=x;if(typeof p=="function"){var O=p;p=function(){var G=Cl(w);O.call(G)}}Al(r,w,n,p)}else w=Ay(a,r,n,p,u);return Cl(w)}$h=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=en(r.pendingLanes);a!==0&&(Hr(r,a|1),In(r,X()),(Mt&6)===0&&(Vo=X()+500,hr()))}break;case 13:Kr(function(){var u=Hi(n,1);if(u!==null){var p=Cn();di(u,n,1,p)}}),dd(n,1)}},kc=function(n){if(n.tag===13){var r=Hi(n,134217728);if(r!==null){var a=Cn();di(r,n,134217728,a)}dd(n,134217728)}},qh=function(n){if(n.tag===13){var r=xr(n),a=Hi(n,r);if(a!==null){var u=Cn();di(a,n,r,u)}dd(n,r)}},Kh=function(){return gt},Zh=function(n,r){var a=gt;try{return gt=n,r()}finally{gt=a}},Me=function(n,r,a){switch(r){case"input":if($e(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var u=a[r];if(u!==n&&u.form===n.form){var p=Ya(u);if(!p)throw Error(t(90));ht(u),$e(u,p)}}}break;case"textarea":A(n,a);break;case"select":r=a.value,r!=null&&kt(n,!!a.multiple,r,!1)}},lt=rd,Pt=Kr;var Cy={usingClientEntryPoint:!1,Events:[Gs,Ro,Ya,me,We,rd]},ia={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},by={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Pa(n),n===null?null:n.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||Ty,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{Qe=Ll.inject(by),st=Ll}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cy,Un.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hd(r))throw Error(t(200));return wy(n,r,null,a)},Un.createRoot=function(n,r){if(!hd(n))throw Error(t(299));var a=!1,u="",p=hg;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=ud(n,1,!1,null,null,a,!1,u,p),n[Oi]=r.current,zs(n.nodeType===8?n.parentNode:n),new fd(r)},Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Pa(r),n=n===null?null:n.stateNode,n},Un.flushSync=function(n){return Kr(n)},Un.hydrate=function(n,r,a){if(!Rl(r))throw Error(t(200));return Pl(null,n,r,!0,a)},Un.hydrateRoot=function(n,r,a){if(!hd(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,x="",w=hg;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),r=dg(r,null,n,1,a??null,p,!1,x,w),n[Oi]=r.current,zs(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,p]:r.mutableSourceEagerHydrationData.push(a,p);return new bl(r)},Un.render=function(n,r,a){if(!Rl(r))throw Error(t(200));return Pl(null,n,r,!1,a)},Un.unmountComponentAtNode=function(n){if(!Rl(n))throw Error(t(40));return n._reactRootContainer?(Kr(function(){Pl(null,null,n,!1,function(){n._reactRootContainer=null,n[Oi]=null})}),!0):!1},Un.unstable_batchedUpdates=rd,Un.unstable_renderSubtreeIntoContainer=function(n,r,a,u){if(!Rl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Pl(n,r,a,!1,u)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var Mg;function Gv(){if(Mg)return gd.exports;Mg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),gd.exports=Fy(),gd.exports}var Eg;function Oy(){if(Eg)return Dl;Eg=1;var i=Gv();return Dl.createRoot=i.createRoot,Dl.hydrateRoot=i.hydrateRoot,Dl}var ky=Oy();const By=oh(ky);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ah="179",zy=0,wg=1,Hy=2,Wv=1,jv=2,Ki=3,Dr=0,On=1,Zi=2,Pr=0,as=1,Tg=2,Ag=3,Cg=4,Vy=5,co=100,Gy=101,Wy=102,jy=103,Xy=104,Yy=200,$y=201,qy=202,Ky=203,tf=204,nf=205,Zy=206,Qy=207,Jy=208,eS=209,tS=210,nS=211,iS=212,rS=213,oS=214,rf=0,of=1,sf=2,ds=3,af=4,lf=5,cf=6,uf=7,lh=0,sS=1,aS=2,Lr=0,lS=1,cS=2,uS=3,Xv=4,dS=5,fS=6,hS=7,Yv=300,fs=301,hs=302,df=303,ff=304,Mc=306,hf=1e3,fo=1001,pf=1002,vi=1003,pS=1004,Nl=1005,Ai=1006,xd=1007,ho=1008,Li=1009,$v=1010,qv=1011,fa=1012,ch=1013,po=1014,Qi=1015,_a=1016,uh=1017,dh=1018,ha=1020,Kv=35902,Zv=1021,Qv=1022,gi=1023,pa=1026,ma=1027,Jv=1028,fh=1029,e0=1030,hh=1031,ph=1033,rc=33776,oc=33777,sc=33778,ac=33779,mf=35840,gf=35841,vf=35842,_f=35843,xf=36196,yf=37492,Sf=37496,Mf=37808,Ef=37809,wf=37810,Tf=37811,Af=37812,Cf=37813,bf=37814,Rf=37815,Pf=37816,Lf=37817,Df=37818,Nf=37819,If=37820,Uf=37821,lc=36492,Ff=36494,Of=36495,t0=36283,kf=36284,Bf=36285,zf=36286,mS=3200,gS=3201,n0=0,vS=1,Rr="",ii="srgb",ps="srgb-linear",dc="linear",It="srgb",Wo=7680,bg=519,_S=512,xS=513,yS=514,i0=515,SS=516,MS=517,ES=518,wS=519,Rg=35044,Pg="300 es",Ci=2e3,fc=2001;class xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(t)===-1&&o[e].push(t)}hasEventListener(e,t){const o=this._listeners;return o===void 0?!1:o[e]!==void 0&&o[e].indexOf(t)!==-1}removeEventListener(e,t){const o=this._listeners;if(o===void 0)return;const s=o[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const o=t[e.type];if(o!==void 0){e.target=this;const s=o.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lg=1234567;const ua=Math.PI/180,ms=180/Math.PI;function ys(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[o&255]+yn[o>>8&255]+yn[o>>16&255]+yn[o>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function mh(i,e){return(i%e+e)%e}function TS(i,e,t,o,s){return o+(i-e)*(s-o)/(t-e)}function AS(i,e,t){return i!==e?(t-i)/(e-i):0}function da(i,e,t){return(1-t)*i+t*e}function CS(i,e,t,o){return da(i,e,1-Math.exp(-t*o))}function bS(i,e=1){return e-Math.abs(mh(i,e*2)-e)}function RS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function PS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function LS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function DS(i,e){return i+Math.random()*(e-i)}function NS(i){return i*(.5-Math.random())}function IS(i){i!==void 0&&(Lg=i);let e=Lg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function US(i){return i*ua}function FS(i){return i*ms}function OS(i){return(i&i-1)===0&&i!==0}function kS(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function BS(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zS(i,e,t,o,s){const l=Math.cos,c=Math.sin,d=l(t/2),f=c(t/2),h=l((e+o)/2),m=c((e+o)/2),g=l((e-o)/2),_=c((e-o)/2),S=l((o-e)/2),M=c((o-e)/2);switch(s){case"XYX":i.set(d*m,f*g,f*_,d*h);break;case"YZY":i.set(f*_,d*m,f*g,d*h);break;case"ZXZ":i.set(f*g,f*_,d*m,d*h);break;case"XZX":i.set(d*m,f*M,f*S,d*h);break;case"YXY":i.set(f*S,d*m,f*M,d*h);break;case"ZYZ":i.set(f*M,f*S,d*m,d*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Hf={DEG2RAD:ua,RAD2DEG:ms,generateUUID:ys,clamp:_t,euclideanModulo:mh,mapLinear:TS,inverseLerp:AS,lerp:da,damp:CS,pingpong:bS,smoothstep:RS,smootherstep:PS,randInt:LS,randFloat:DS,randFloatSpread:NS,seededRandom:IS,degToRad:US,radToDeg:FS,isPowerOfTwo:OS,ceilPowerOfTwo:kS,floorPowerOfTwo:BS,setQuaternionFromProperEuler:zS,normalize:bn,denormalize:rs};class At{constructor(e=0,t=0){At.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,o=this.y,s=e.elements;return this.x=s[0]*t+s[3]*o+s[6],this.y=s[1]*t+s[4]*o+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(_t(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(_t(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y;return t*t+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const o=Math.cos(t),s=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*o-c*s+e.x,this.y=l*s+c*o+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xa{constructor(e=0,t=0,o=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=o,this._w=s}static slerpFlat(e,t,o,s,l,c,d){let f=o[s+0],h=o[s+1],m=o[s+2],g=o[s+3];const _=l[c+0],S=l[c+1],M=l[c+2],E=l[c+3];if(d===0){e[t+0]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(d===1){e[t+0]=_,e[t+1]=S,e[t+2]=M,e[t+3]=E;return}if(g!==E||f!==_||h!==S||m!==M){let y=1-d;const v=f*_+h*S+m*M+g*E,L=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const U=Math.sqrt(b),I=Math.atan2(U,v*L);y=Math.sin(y*I)/U,d=Math.sin(d*I)/U}const T=d*L;if(f=f*y+_*T,h=h*y+S*T,m=m*y+M*T,g=g*y+E*T,y===1-d){const U=1/Math.sqrt(f*f+h*h+m*m+g*g);f*=U,h*=U,m*=U,g*=U}}e[t]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,o,s,l,c){const d=o[s],f=o[s+1],h=o[s+2],m=o[s+3],g=l[c],_=l[c+1],S=l[c+2],M=l[c+3];return e[t]=d*M+m*g+f*S-h*_,e[t+1]=f*M+m*_+h*g-d*S,e[t+2]=h*M+m*S+d*_-f*g,e[t+3]=m*M-d*g-f*_-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,o,s){return this._x=e,this._y=t,this._z=o,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const o=e._x,s=e._y,l=e._z,c=e._order,d=Math.cos,f=Math.sin,h=d(o/2),m=d(s/2),g=d(l/2),_=f(o/2),S=f(s/2),M=f(l/2);switch(c){case"XYZ":this._x=_*m*g+h*S*M,this._y=h*S*g-_*m*M,this._z=h*m*M+_*S*g,this._w=h*m*g-_*S*M;break;case"YXZ":this._x=_*m*g+h*S*M,this._y=h*S*g-_*m*M,this._z=h*m*M-_*S*g,this._w=h*m*g+_*S*M;break;case"ZXY":this._x=_*m*g-h*S*M,this._y=h*S*g+_*m*M,this._z=h*m*M+_*S*g,this._w=h*m*g-_*S*M;break;case"ZYX":this._x=_*m*g-h*S*M,this._y=h*S*g+_*m*M,this._z=h*m*M-_*S*g,this._w=h*m*g+_*S*M;break;case"YZX":this._x=_*m*g+h*S*M,this._y=h*S*g+_*m*M,this._z=h*m*M-_*S*g,this._w=h*m*g-_*S*M;break;case"XZY":this._x=_*m*g-h*S*M,this._y=h*S*g-_*m*M,this._z=h*m*M+_*S*g,this._w=h*m*g+_*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const o=t/2,s=Math.sin(o);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,o=t[0],s=t[4],l=t[8],c=t[1],d=t[5],f=t[9],h=t[2],m=t[6],g=t[10],_=o+d+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(m-f)*S,this._y=(l-h)*S,this._z=(c-s)*S}else if(o>d&&o>g){const S=2*Math.sqrt(1+o-d-g);this._w=(m-f)/S,this._x=.25*S,this._y=(s+c)/S,this._z=(l+h)/S}else if(d>g){const S=2*Math.sqrt(1+d-o-g);this._w=(l-h)/S,this._x=(s+c)/S,this._y=.25*S,this._z=(f+m)/S}else{const S=2*Math.sqrt(1+g-o-d);this._w=(c-s)/S,this._x=(l+h)/S,this._y=(f+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let o=e.dot(t)+1;return o<1e-8?(o=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=o):(this._x=0,this._y=-e.z,this._z=e.y,this._w=o)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=o),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const o=this.angleTo(e);if(o===0)return this;const s=Math.min(1,t/o);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const o=e._x,s=e._y,l=e._z,c=e._w,d=t._x,f=t._y,h=t._z,m=t._w;return this._x=o*m+c*d+s*h-l*f,this._y=s*m+c*f+l*d-o*h,this._z=l*m+c*h+o*f-s*d,this._w=c*m-o*d-s*f-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const o=this._x,s=this._y,l=this._z,c=this._w;let d=c*e._w+o*e._x+s*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=o,this._y=s,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*o+t*this._x,this._y=S*s+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const h=Math.sqrt(f),m=Math.atan2(h,d),g=Math.sin((1-t)*m)/h,_=Math.sin(t*m)/h;return this._w=c*g+this._w*_,this._x=o*g+this._x*_,this._y=s*g+this._y*_,this._z=l*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,o){return this.copy(e).slerp(t,o)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),o=Math.random(),s=Math.sqrt(1-o),l=Math.sqrt(o);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,o=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=o}set(e,t,o){return o===void 0&&(o=this.z),this.x=e,this.y=t,this.z=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,o=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*o+l[6]*s,this.y=l[1]*t+l[4]*o+l[7]*s,this.z=l[2]*t+l[5]*o+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,o=this.y,s=this.z,l=e.elements,c=1/(l[3]*t+l[7]*o+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*o+l[8]*s+l[12])*c,this.y=(l[1]*t+l[5]*o+l[9]*s+l[13])*c,this.z=(l[2]*t+l[6]*o+l[10]*s+l[14])*c,this}applyQuaternion(e){const t=this.x,o=this.y,s=this.z,l=e.x,c=e.y,d=e.z,f=e.w,h=2*(c*s-d*o),m=2*(d*t-l*s),g=2*(l*o-c*t);return this.x=t+f*h+c*g-d*m,this.y=o+f*m+d*h-l*g,this.z=s+f*g+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,o=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*o+l[8]*s,this.y=l[1]*t+l[5]*o+l[9]*s,this.z=l[2]*t+l[6]*o+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(_t(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const o=e.x,s=e.y,l=e.z,c=t.x,d=t.y,f=t.z;return this.x=s*f-l*d,this.y=l*c-o*f,this.z=o*d-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const o=e.dot(this)/t;return this.copy(e).multiplyScalar(o)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(_t(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y,s=this.z-e.z;return t*t+o*o+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,o){const s=Math.sin(t)*e;return this.x=s*Math.sin(o),this.y=Math.cos(t)*e,this.z=s*Math.cos(o),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,o){return this.x=e*Math.sin(t),this.y=o,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),o=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=o,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,o=Math.sqrt(1-t*t);return this.x=o*Math.cos(e),this.y=t,this.z=o*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yd=new ie,Dg=new xa;class dt{constructor(e,t,o,s,l,c,d,f,h){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,o,s,l,c,d,f,h)}set(e,t,o,s,l,c,d,f,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=d,m[3]=t,m[4]=l,m[5]=f,m[6]=o,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],this}extractBasis(e,t,o){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,s=t.elements,l=this.elements,c=o[0],d=o[3],f=o[6],h=o[1],m=o[4],g=o[7],_=o[2],S=o[5],M=o[8],E=s[0],y=s[3],v=s[6],L=s[1],b=s[4],T=s[7],U=s[2],I=s[5],N=s[8];return l[0]=c*E+d*L+f*U,l[3]=c*y+d*b+f*I,l[6]=c*v+d*T+f*N,l[1]=h*E+m*L+g*U,l[4]=h*y+m*b+g*I,l[7]=h*v+m*T+g*N,l[2]=_*E+S*L+M*U,l[5]=_*y+S*b+M*I,l[8]=_*v+S*T+M*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[1],s=e[2],l=e[3],c=e[4],d=e[5],f=e[6],h=e[7],m=e[8];return t*c*m-t*d*h-o*l*m+o*d*f+s*l*h-s*c*f}invert(){const e=this.elements,t=e[0],o=e[1],s=e[2],l=e[3],c=e[4],d=e[5],f=e[6],h=e[7],m=e[8],g=m*c-d*h,_=d*f-m*l,S=h*l-c*f,M=t*g+o*_+s*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(s*h-m*o)*E,e[2]=(d*o-s*c)*E,e[3]=_*E,e[4]=(m*t-s*f)*E,e[5]=(s*l-d*t)*E,e[6]=S*E,e[7]=(o*f-h*t)*E,e[8]=(c*t-o*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,o,s,l,c,d){const f=Math.cos(l),h=Math.sin(l);return this.set(o*f,o*h,-o*(f*c+h*d)+c+e,-s*h,s*f,-s*(-h*c+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Sd.makeScale(e,t)),this}rotate(e){return this.premultiply(Sd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,o,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,o=e.elements;for(let s=0;s<9;s++)if(t[s]!==o[s])return!1;return!0}fromArray(e,t=0){for(let o=0;o<9;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sd=new dt;function r0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function HS(){const i=hc("canvas");return i.style.display="block",i}const Ng={};function ls(i){i in Ng||(Ng[i]=!0,console.warn(i))}function VS(i,e,t){return new Promise(function(o,s){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:o()}}setTimeout(l,t)})}const Ig=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ug=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GS(){const i={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===It&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===It&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rr?dc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],o=[.3127,.329];return i.define({[ps]:{primaries:e,whitePoint:o,transfer:dc,toXYZ:Ig,fromXYZ:Ug,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:o,transfer:It,toXYZ:Ig,fromXYZ:Ug,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),i}const wt=GS();function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let jo;class WS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let o;if(e instanceof HTMLCanvasElement)o=e;else{jo===void 0&&(jo=hc("canvas")),jo.width=e.width,jo.height=e.height;const s=jo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),o=jo}return o.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hc("canvas");t.width=e.width,t.height=e.height;const o=t.getContext("2d");o.drawImage(e,0,0,e.width,e.height);const s=o.getImageData(0,0,e.width,e.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=Ji(l[c]/255)*255;return o.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let o=0;o<t.length;o++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[o]=Math.floor(Ji(t[o]/255)*255):t[o]=Ji(t[o]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jS=0;class gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const o={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,d=s.length;c<d;c++)s[c].isDataTexture?l.push(Md(s[c].image)):l.push(Md(s[c]))}else l=Md(s);o.url=l}return t||(e.images[this.uuid]=o),o}}function Md(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?WS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let XS=0;const Ed=new ie;class kn extends xs{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,o=fo,s=fo,l=Ai,c=ho,d=gi,f=Li,h=kn.DEFAULT_ANISOTROPY,m=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=ys(),this.name="",this.source=new gh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=o,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=f,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const o=e[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&o&&s.isVector2&&o.isVector2||s&&o&&s.isVector3&&o.isVector3||s&&o&&s.isMatrix3&&o.isMatrix3?s.copy(o):this[t]=o}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const o={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),t||(e.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hf:e.x=e.x-Math.floor(e.x);break;case fo:e.x=e.x<0?0:1;break;case pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hf:e.y=e.y-Math.floor(e.y);break;case fo:e.y=e.y<0?0:1;break;case pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Yv;kn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,o=0,s=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=o,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,o,s){return this.x=e,this.y=t,this.z=o,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,o=this.y,s=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*o+c[8]*s+c[12]*l,this.y=c[1]*t+c[5]*o+c[9]*s+c[13]*l,this.z=c[2]*t+c[6]*o+c[10]*s+c[14]*l,this.w=c[3]*t+c[7]*o+c[11]*s+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,o,s,l;const f=e.elements,h=f[0],m=f[4],g=f[8],_=f[1],S=f[5],M=f[9],E=f[2],y=f[6],v=f[10];if(Math.abs(m-_)<.01&&Math.abs(g-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+E)<.1&&Math.abs(M+y)<.1&&Math.abs(h+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,T=(S+1)/2,U=(v+1)/2,I=(m+_)/4,N=(g+E)/4,H=(M+y)/4;return b>T&&b>U?b<.01?(o=0,s=.707106781,l=.707106781):(o=Math.sqrt(b),s=I/o,l=N/o):T>U?T<.01?(o=.707106781,s=0,l=.707106781):(s=Math.sqrt(T),o=I/s,l=H/s):U<.01?(o=.707106781,s=.707106781,l=0):(l=Math.sqrt(U),o=N/l,s=H/l),this.set(o,s,l,t),this}let L=Math.sqrt((y-M)*(y-M)+(g-E)*(g-E)+(_-m)*(_-m));return Math.abs(L)<.001&&(L=1),this.x=(y-M)/L,this.y=(g-E)/L,this.z=(_-m)/L,this.w=Math.acos((h+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(_t(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this.w=e.w+(t.w-e.w)*o,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YS extends xs{constructor(e=1,t=1,o={}){super(),o=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},o),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=o.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const s={width:e,height:t,depth:o.depth},l=new kn(s);this.textures=[];const c=o.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(o),this.depthBuffer=o.depthBuffer,this.stencilBuffer=o.stencilBuffer,this.resolveDepthBuffer=o.resolveDepthBuffer,this.resolveStencilBuffer=o.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=o.depthTexture,this.samples=o.samples,this.multiview=o.multiview}_setTextureOptions(e={}){const t={minFilter:Ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let o=0;o<this.textures.length;o++)this.textures[o].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,o=1){if(this.width!==e||this.height!==t||this.depth!==o){this.width=e,this.height=t,this.depth=o;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=o,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,o=e.textures.length;t<o;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new gh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mo extends YS{constructor(e=1,t=1,o={}){super(e,t,o),this.isWebGLRenderTarget=!0}}class o0 extends kn{constructor(e=null,t=1,o=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:o,depth:s},this.magFilter=vi,this.minFilter=vi,this.wrapR=fo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $S extends kn{constructor(e=null,t=1,o=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:o,depth:s},this.magFilter=vi,this.minFilter=vi,this.wrapR=fo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ya{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,o=e.count;t<o;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const o=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(o),this.max.copy(e).add(o),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const o=e.geometry;if(o!==void 0){const l=o.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,fi):fi.fromBufferAttribute(l,c),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Il.copy(e.boundingBox)):(o.boundingBox===null&&o.computeBoundingBox(),Il.copy(o.boundingBox)),Il.applyMatrix4(e.matrixWorld),this.union(Il)}const s=e.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,o;return e.normal.x>0?(t=e.normal.x*this.min.x,o=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,o=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,o+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,o+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,o+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,o+=e.normal.z*this.min.z),t<=-e.constant&&o>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Ul.subVectors(this.max,oa),Xo.subVectors(e.a,oa),Yo.subVectors(e.b,oa),$o.subVectors(e.c,oa),Er.subVectors(Yo,Xo),wr.subVectors($o,Yo),eo.subVectors(Xo,$o);let t=[0,-Er.z,Er.y,0,-wr.z,wr.y,0,-eo.z,eo.y,Er.z,0,-Er.x,wr.z,0,-wr.x,eo.z,0,-eo.x,-Er.y,Er.x,0,-wr.y,wr.x,0,-eo.y,eo.x,0];return!wd(t,Xo,Yo,$o,Ul)||(t=[1,0,0,0,1,0,0,0,1],!wd(t,Xo,Yo,$o,Ul))?!1:(Fl.crossVectors(Er,wr),t=[Fl.x,Fl.y,Fl.z],wd(t,Xo,Yo,$o,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],fi=new ie,Il=new ya,Xo=new ie,Yo=new ie,$o=new ie,Er=new ie,wr=new ie,eo=new ie,oa=new ie,Ul=new ie,Fl=new ie,to=new ie;function wd(i,e,t,o,s){for(let l=0,c=i.length-3;l<=c;l+=3){to.fromArray(i,l);const d=s.x*Math.abs(to.x)+s.y*Math.abs(to.y)+s.z*Math.abs(to.z),f=e.dot(to),h=t.dot(to),m=o.dot(to);if(Math.max(-Math.max(f,h,m),Math.min(f,h,m))>d)return!1}return!0}const qS=new ya,sa=new ie,Td=new ie;class vh{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const o=this.center;t!==void 0?o.copy(t):qS.setFromPoints(e).getCenter(o);let s=0;for(let l=0,c=e.length;l<c;l++)s=Math.max(s,o.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const o=this.center.distanceToSquared(e);return t.copy(e),o>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const t=sa.lengthSq();if(t>this.radius*this.radius){const o=Math.sqrt(t),s=(o-this.radius)*.5;this.center.addScaledVector(sa,s/o),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(Td)),this.expandByPoint(sa.copy(e.center).sub(Td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xi=new ie,Ad=new ie,Ol=new ie,Tr=new ie,Cd=new ie,kl=new ie,bd=new ie;class KS{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const o=t.dot(this.direction);return o<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,o,s){Ad.copy(e).add(t).multiplyScalar(.5),Ol.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub(Ad);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Ol),d=Tr.dot(this.direction),f=-Tr.dot(Ol),h=Tr.lengthSq(),m=Math.abs(1-c*c);let g,_,S,M;if(m>0)if(g=c*f-d,_=c*d-f,M=l*m,g>=0)if(_>=-M)if(_<=M){const E=1/m;g*=E,_*=E,S=g*(g+c*_+2*d)+_*(c*g+_+2*f)+h}else _=l,g=Math.max(0,-(c*_+d)),S=-g*g+_*(_+2*f)+h;else _=-l,g=Math.max(0,-(c*_+d)),S=-g*g+_*(_+2*f)+h;else _<=-M?(g=Math.max(0,-(-c*l+d)),_=g>0?-l:Math.min(Math.max(-l,-f),l),S=-g*g+_*(_+2*f)+h):_<=M?(g=0,_=Math.min(Math.max(-l,-f),l),S=_*(_+2*f)+h):(g=Math.max(0,-(c*l+d)),_=g>0?l:Math.min(Math.max(-l,-f),l),S=-g*g+_*(_+2*f)+h);else _=c>0?-l:l,g=Math.max(0,-(c*_+d)),S=-g*g+_*(_+2*f)+h;return o&&o.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Ad).addScaledVector(Ol,_),S}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const o=Xi.dot(this.direction),s=Xi.dot(Xi)-o*o,l=e.radius*e.radius;if(s>l)return null;const c=Math.sqrt(l-s),d=o-c,f=o+c;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const o=-(this.origin.dot(e.normal)+e.constant)/t;return o>=0?o:null}intersectPlane(e,t){const o=this.distanceToPlane(e);return o===null?null:this.at(o,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let o,s,l,c,d,f;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(o=(e.min.x-_.x)*h,s=(e.max.x-_.x)*h):(o=(e.max.x-_.x)*h,s=(e.min.x-_.x)*h),m>=0?(l=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),o>c||l>s||((l>o||isNaN(o))&&(o=l),(c<s||isNaN(s))&&(s=c),g>=0?(d=(e.min.z-_.z)*g,f=(e.max.z-_.z)*g):(d=(e.max.z-_.z)*g,f=(e.min.z-_.z)*g),o>f||d>s)||((d>o||o!==o)&&(o=d),(f<s||s!==s)&&(s=f),s<0)?null:this.at(o>=0?o:s,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,o,s,l){Cd.subVectors(t,e),kl.subVectors(o,e),bd.crossVectors(Cd,kl);let c=this.direction.dot(bd),d;if(c>0){if(s)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Tr.subVectors(this.origin,e);const f=d*this.direction.dot(kl.crossVectors(Tr,kl));if(f<0)return null;const h=d*this.direction.dot(Cd.cross(Tr));if(h<0||f+h>c)return null;const m=-d*Tr.dot(bd);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,t,o,s,l,c,d,f,h,m,g,_,S,M,E,y){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,o,s,l,c,d,f,h,m,g,_,S,M,E,y)}set(e,t,o,s,l,c,d,f,h,m,g,_,S,M,E,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=o,v[12]=s,v[1]=l,v[5]=c,v[9]=d,v[13]=f,v[2]=h,v[6]=m,v[10]=g,v[14]=_,v[3]=S,v[7]=M,v[11]=E,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],t[9]=o[9],t[10]=o[10],t[11]=o[11],t[12]=o[12],t[13]=o[13],t[14]=o[14],t[15]=o[15],this}copyPosition(e){const t=this.elements,o=e.elements;return t[12]=o[12],t[13]=o[13],t[14]=o[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,o){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this}makeBasis(e,t,o){return this.set(e.x,t.x,o.x,0,e.y,t.y,o.y,0,e.z,t.z,o.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,o=e.elements,s=1/qo.setFromMatrixColumn(e,0).length(),l=1/qo.setFromMatrixColumn(e,1).length(),c=1/qo.setFromMatrixColumn(e,2).length();return t[0]=o[0]*s,t[1]=o[1]*s,t[2]=o[2]*s,t[3]=0,t[4]=o[4]*l,t[5]=o[5]*l,t[6]=o[6]*l,t[7]=0,t[8]=o[8]*c,t[9]=o[9]*c,t[10]=o[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,o=e.x,s=e.y,l=e.z,c=Math.cos(o),d=Math.sin(o),f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const _=c*m,S=c*g,M=d*m,E=d*g;t[0]=f*m,t[4]=-f*g,t[8]=h,t[1]=S+M*h,t[5]=_-E*h,t[9]=-d*f,t[2]=E-_*h,t[6]=M+S*h,t[10]=c*f}else if(e.order==="YXZ"){const _=f*m,S=f*g,M=h*m,E=h*g;t[0]=_+E*d,t[4]=M*d-S,t[8]=c*h,t[1]=c*g,t[5]=c*m,t[9]=-d,t[2]=S*d-M,t[6]=E+_*d,t[10]=c*f}else if(e.order==="ZXY"){const _=f*m,S=f*g,M=h*m,E=h*g;t[0]=_-E*d,t[4]=-c*g,t[8]=M+S*d,t[1]=S+M*d,t[5]=c*m,t[9]=E-_*d,t[2]=-c*h,t[6]=d,t[10]=c*f}else if(e.order==="ZYX"){const _=c*m,S=c*g,M=d*m,E=d*g;t[0]=f*m,t[4]=M*h-S,t[8]=_*h+E,t[1]=f*g,t[5]=E*h+_,t[9]=S*h-M,t[2]=-h,t[6]=d*f,t[10]=c*f}else if(e.order==="YZX"){const _=c*f,S=c*h,M=d*f,E=d*h;t[0]=f*m,t[4]=E-_*g,t[8]=M*g+S,t[1]=g,t[5]=c*m,t[9]=-d*m,t[2]=-h*m,t[6]=S*g+M,t[10]=_-E*g}else if(e.order==="XZY"){const _=c*f,S=c*h,M=d*f,E=d*h;t[0]=f*m,t[4]=-g,t[8]=h*m,t[1]=_*g+E,t[5]=c*m,t[9]=S*g-M,t[2]=M*g-S,t[6]=d*m,t[10]=E*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZS,e,QS)}lookAt(e,t,o){const s=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Ar.crossVectors(o,Wn),Ar.lengthSq()===0&&(Math.abs(o.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Ar.crossVectors(o,Wn)),Ar.normalize(),Bl.crossVectors(Wn,Ar),s[0]=Ar.x,s[4]=Bl.x,s[8]=Wn.x,s[1]=Ar.y,s[5]=Bl.y,s[9]=Wn.y,s[2]=Ar.z,s[6]=Bl.z,s[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,s=t.elements,l=this.elements,c=o[0],d=o[4],f=o[8],h=o[12],m=o[1],g=o[5],_=o[9],S=o[13],M=o[2],E=o[6],y=o[10],v=o[14],L=o[3],b=o[7],T=o[11],U=o[15],I=s[0],N=s[4],H=s[8],D=s[12],P=s[1],k=s[5],Z=s[9],q=s[13],ee=s[2],de=s[6],Q=s[10],ce=s[14],B=s[3],ue=s[7],oe=s[11],z=s[15];return l[0]=c*I+d*P+f*ee+h*B,l[4]=c*N+d*k+f*de+h*ue,l[8]=c*H+d*Z+f*Q+h*oe,l[12]=c*D+d*q+f*ce+h*z,l[1]=m*I+g*P+_*ee+S*B,l[5]=m*N+g*k+_*de+S*ue,l[9]=m*H+g*Z+_*Q+S*oe,l[13]=m*D+g*q+_*ce+S*z,l[2]=M*I+E*P+y*ee+v*B,l[6]=M*N+E*k+y*de+v*ue,l[10]=M*H+E*Z+y*Q+v*oe,l[14]=M*D+E*q+y*ce+v*z,l[3]=L*I+b*P+T*ee+U*B,l[7]=L*N+b*k+T*de+U*ue,l[11]=L*H+b*Z+T*Q+U*oe,l[15]=L*D+b*q+T*ce+U*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[4],s=e[8],l=e[12],c=e[1],d=e[5],f=e[9],h=e[13],m=e[2],g=e[6],_=e[10],S=e[14],M=e[3],E=e[7],y=e[11],v=e[15];return M*(+l*f*g-s*h*g-l*d*_+o*h*_+s*d*S-o*f*S)+E*(+t*f*S-t*h*_+l*c*_-s*c*S+s*h*m-l*f*m)+y*(+t*h*g-t*d*S-l*c*g+o*c*S+l*d*m-o*h*m)+v*(-s*d*m-t*f*g+t*d*_+s*c*g-o*c*_+o*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,o){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=o),this}invert(){const e=this.elements,t=e[0],o=e[1],s=e[2],l=e[3],c=e[4],d=e[5],f=e[6],h=e[7],m=e[8],g=e[9],_=e[10],S=e[11],M=e[12],E=e[13],y=e[14],v=e[15],L=g*y*h-E*_*h+E*f*S-d*y*S-g*f*v+d*_*v,b=M*_*h-m*y*h-M*f*S+c*y*S+m*f*v-c*_*v,T=m*E*h-M*g*h+M*d*S-c*E*S-m*d*v+c*g*v,U=M*g*f-m*E*f-M*d*_+c*E*_+m*d*y-c*g*y,I=t*L+o*b+s*T+l*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/I;return e[0]=L*N,e[1]=(E*_*l-g*y*l-E*s*S+o*y*S+g*s*v-o*_*v)*N,e[2]=(d*y*l-E*f*l+E*s*h-o*y*h-d*s*v+o*f*v)*N,e[3]=(g*f*l-d*_*l-g*s*h+o*_*h+d*s*S-o*f*S)*N,e[4]=b*N,e[5]=(m*y*l-M*_*l+M*s*S-t*y*S-m*s*v+t*_*v)*N,e[6]=(M*f*l-c*y*l-M*s*h+t*y*h+c*s*v-t*f*v)*N,e[7]=(c*_*l-m*f*l+m*s*h-t*_*h-c*s*S+t*f*S)*N,e[8]=T*N,e[9]=(M*g*l-m*E*l-M*o*S+t*E*S+m*o*v-t*g*v)*N,e[10]=(c*E*l-M*d*l+M*o*h-t*E*h-c*o*v+t*d*v)*N,e[11]=(m*d*l-c*g*l-m*o*h+t*g*h+c*o*S-t*d*S)*N,e[12]=U*N,e[13]=(m*E*s-M*g*s+M*o*_-t*E*_-m*o*y+t*g*y)*N,e[14]=(M*d*s-c*E*s-M*o*f+t*E*f+c*o*y-t*d*y)*N,e[15]=(c*g*s-m*d*s+m*o*f-t*g*f-c*o*_+t*d*_)*N,this}scale(e){const t=this.elements,o=e.x,s=e.y,l=e.z;return t[0]*=o,t[4]*=s,t[8]*=l,t[1]*=o,t[5]*=s,t[9]*=l,t[2]*=o,t[6]*=s,t[10]*=l,t[3]*=o,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,o,s))}makeTranslation(e,t,o){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,o,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),o=Math.sin(e);return this.set(1,0,0,0,0,t,-o,0,0,o,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,0,o,0,0,1,0,0,-o,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,0,o,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const o=Math.cos(t),s=Math.sin(t),l=1-o,c=e.x,d=e.y,f=e.z,h=l*c,m=l*d;return this.set(h*c+o,h*d-s*f,h*f+s*d,0,h*d+s*f,m*d+o,m*f-s*c,0,h*f-s*d,m*f+s*c,l*f*f+o,0,0,0,0,1),this}makeScale(e,t,o){return this.set(e,0,0,0,0,t,0,0,0,0,o,0,0,0,0,1),this}makeShear(e,t,o,s,l,c){return this.set(1,o,l,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,o){const s=this.elements,l=t._x,c=t._y,d=t._z,f=t._w,h=l+l,m=c+c,g=d+d,_=l*h,S=l*m,M=l*g,E=c*m,y=c*g,v=d*g,L=f*h,b=f*m,T=f*g,U=o.x,I=o.y,N=o.z;return s[0]=(1-(E+v))*U,s[1]=(S+T)*U,s[2]=(M-b)*U,s[3]=0,s[4]=(S-T)*I,s[5]=(1-(_+v))*I,s[6]=(y+L)*I,s[7]=0,s[8]=(M+b)*N,s[9]=(y-L)*N,s[10]=(1-(_+E))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,o){const s=this.elements;let l=qo.set(s[0],s[1],s[2]).length();const c=qo.set(s[4],s[5],s[6]).length(),d=qo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),e.x=s[12],e.y=s[13],e.z=s[14],hi.copy(this);const h=1/l,m=1/c,g=1/d;return hi.elements[0]*=h,hi.elements[1]*=h,hi.elements[2]*=h,hi.elements[4]*=m,hi.elements[5]*=m,hi.elements[6]*=m,hi.elements[8]*=g,hi.elements[9]*=g,hi.elements[10]*=g,t.setFromRotationMatrix(hi),o.x=l,o.y=c,o.z=d,this}makePerspective(e,t,o,s,l,c,d=Ci,f=!1){const h=this.elements,m=2*l/(t-e),g=2*l/(o-s),_=(t+e)/(t-e),S=(o+s)/(o-s);let M,E;if(f)M=l/(c-l),E=c*l/(c-l);else if(d===Ci)M=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(d===fc)M=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,o,s,l,c,d=Ci,f=!1){const h=this.elements,m=2/(t-e),g=2/(o-s),_=-(t+e)/(t-e),S=-(o+s)/(o-s);let M,E;if(f)M=1/(c-l),E=c/(c-l);else if(d===Ci)M=-2/(c-l),E=-(c+l)/(c-l);else if(d===fc)M=-1/(c-l),E=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=g,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,o=e.elements;for(let s=0;s<16;s++)if(t[s]!==o[s])return!1;return!0}fromArray(e,t=0){for(let o=0;o<16;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e[t+9]=o[9],e[t+10]=o[10],e[t+11]=o[11],e[t+12]=o[12],e[t+13]=o[13],e[t+14]=o[14],e[t+15]=o[15],e}}const qo=new ie,hi=new Zt,ZS=new ie(0,0,0),QS=new ie(1,1,1),Ar=new ie,Bl=new ie,Wn=new ie,Fg=new Zt,Og=new xa;class Di{constructor(e=0,t=0,o=0,s=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=o,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,o,s=this._order){return this._x=e,this._y=t,this._z=o,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,o=!0){const s=e.elements,l=s[0],c=s[4],d=s[8],f=s[1],h=s[5],m=s[9],g=s[2],_=s[6],S=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,o===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,o){return Fg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fg,t,o)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Og.setFromEuler(this),this.setFromQuaternion(Og,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class s0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JS=0;const kg=new ie,Ko=new xa,Yi=new Zt,zl=new ie,aa=new ie,eM=new ie,tM=new xa,Bg=new ie(1,0,0),zg=new ie(0,1,0),Hg=new ie(0,0,1),Vg={type:"added"},nM={type:"removed"},Zo={type:"childadded",child:null},Rd={type:"childremoved",child:null};class Mn extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new ie,t=new Di,o=new xa,s=new ie(1,1,1);function l(){o.setFromEuler(t,!1)}function c(){t.setFromQuaternion(o,void 0,!1)}t._onChange(l),o._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new dt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new s0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ko.setFromAxisAngle(e,t),this.quaternion.multiply(Ko),this}rotateOnWorldAxis(e,t){return Ko.setFromAxisAngle(e,t),this.quaternion.premultiply(Ko),this}rotateX(e){return this.rotateOnAxis(Bg,e)}rotateY(e){return this.rotateOnAxis(zg,e)}rotateZ(e){return this.rotateOnAxis(Hg,e)}translateOnAxis(e,t){return kg.copy(e).applyQuaternion(this.quaternion),this.position.add(kg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bg,e)}translateY(e){return this.translateOnAxis(zg,e)}translateZ(e){return this.translateOnAxis(Hg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,o){e.isVector3?zl.copy(e):zl.set(e,t,o);const s=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(aa,zl,this.up):Yi.lookAt(zl,aa,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),Ko.setFromRotationMatrix(Yi),this.quaternion.premultiply(Ko.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vg),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nM),Rd.child=e,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vg),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let o=0,s=this.children.length;o<s;o++){const c=this.children[o].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,o=[]){this[e]===t&&o.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(e,t,o);return o}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,eM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,tM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let o=0,s=t.length;o<s;o++)t[o].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let o=0,s=t.length;o<s;o++)t[o].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let o=0,s=t.length;o<s;o++)t[o].updateMatrixWorld(e)}updateWorldMatrix(e,t){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",o={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let h=0,m=f.length;h<m;h++){const g=f[h];l(e.shapes,g)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,h=this.material.length;f<h;f++)d.push(l(e.materials,this.material[f]));s.material=d}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];s.animations.push(l(e.animations,f))}}if(t){const d=c(e.geometries),f=c(e.materials),h=c(e.textures),m=c(e.images),g=c(e.shapes),_=c(e.skeletons),S=c(e.animations),M=c(e.nodes);d.length>0&&(o.geometries=d),f.length>0&&(o.materials=f),h.length>0&&(o.textures=h),m.length>0&&(o.images=m),g.length>0&&(o.shapes=g),_.length>0&&(o.skeletons=_),S.length>0&&(o.animations=S),M.length>0&&(o.nodes=M)}return o.object=s,o;function c(d){const f=[];for(const h in d){const m=d[h];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let o=0;o<e.children.length;o++){const s=e.children[o];this.add(s.clone())}return this}}Mn.DEFAULT_UP=new ie(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new ie,$i=new ie,Pd=new ie,qi=new ie,Qo=new ie,Jo=new ie,Gg=new ie,Ld=new ie,Dd=new ie,Nd=new ie,Id=new Yt,Ud=new Yt,Fd=new Yt;class mi{constructor(e=new ie,t=new ie,o=new ie){this.a=e,this.b=t,this.c=o}static getNormal(e,t,o,s){s.subVectors(o,t),pi.subVectors(e,t),s.cross(pi);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,o,s,l){pi.subVectors(s,t),$i.subVectors(o,t),Pd.subVectors(e,t);const c=pi.dot(pi),d=pi.dot($i),f=pi.dot(Pd),h=$i.dot($i),m=$i.dot(Pd),g=c*h-d*d;if(g===0)return l.set(0,0,0),null;const _=1/g,S=(h*f-d*m)*_,M=(c*m-d*f)*_;return l.set(1-S-M,M,S)}static containsPoint(e,t,o,s){return this.getBarycoord(e,t,o,s,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,o,s,l,c,d,f){return this.getBarycoord(e,t,o,s,qi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,qi.x),f.addScaledVector(c,qi.y),f.addScaledVector(d,qi.z),f)}static getInterpolatedAttribute(e,t,o,s,l,c){return Id.setScalar(0),Ud.setScalar(0),Fd.setScalar(0),Id.fromBufferAttribute(e,t),Ud.fromBufferAttribute(e,o),Fd.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Id,l.x),c.addScaledVector(Ud,l.y),c.addScaledVector(Fd,l.z),c}static isFrontFacing(e,t,o,s){return pi.subVectors(o,t),$i.subVectors(e,t),pi.cross($i).dot(s)<0}set(e,t,o){return this.a.copy(e),this.b.copy(t),this.c.copy(o),this}setFromPointsAndIndices(e,t,o,s){return this.a.copy(e[t]),this.b.copy(e[o]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,o,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,o),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),pi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,o,s,l){return mi.getInterpolation(e,this.a,this.b,this.c,t,o,s,l)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const o=this.a,s=this.b,l=this.c;let c,d;Qo.subVectors(s,o),Jo.subVectors(l,o),Ld.subVectors(e,o);const f=Qo.dot(Ld),h=Jo.dot(Ld);if(f<=0&&h<=0)return t.copy(o);Dd.subVectors(e,s);const m=Qo.dot(Dd),g=Jo.dot(Dd);if(m>=0&&g<=m)return t.copy(s);const _=f*g-m*h;if(_<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(o).addScaledVector(Qo,c);Nd.subVectors(e,l);const S=Qo.dot(Nd),M=Jo.dot(Nd);if(M>=0&&S<=M)return t.copy(l);const E=S*h-f*M;if(E<=0&&h>=0&&M<=0)return d=h/(h-M),t.copy(o).addScaledVector(Jo,d);const y=m*M-S*g;if(y<=0&&g-m>=0&&S-M>=0)return Gg.subVectors(l,s),d=(g-m)/(g-m+(S-M)),t.copy(s).addScaledVector(Gg,d);const v=1/(y+E+_);return c=E*v,d=_*v,t.copy(o).addScaledVector(Qo,c).addScaledVector(Jo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const a0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function Od(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Tt{constructor(e,t,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,o)}set(e,t,o){if(t===void 0&&o===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,o);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,o,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=o,wt.colorSpaceToWorking(this,s),this}setHSL(e,t,o,s=wt.workingColorSpace){if(e=mh(e,1),t=_t(t,0,1),o=_t(o,0,1),t===0)this.r=this.g=this.b=o;else{const l=o<=.5?o*(1+t):o+t-o*t,c=2*o-l;this.r=Od(c,l,e+1/3),this.g=Od(c,l,e),this.b=Od(c,l,e-1/3)}return wt.colorSpaceToWorking(this,s),this}setStyle(e,t=ii){function o(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=s[1],d=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return o(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return o(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return o(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ii){const o=a0[e.toLowerCase()];return o!==void 0?this.setHex(o,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return wt.workingToColorSpace(Sn.copy(this),e),Math.round(_t(Sn.r*255,0,255))*65536+Math.round(_t(Sn.g*255,0,255))*256+Math.round(_t(Sn.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(Sn.copy(this),t);const o=Sn.r,s=Sn.g,l=Sn.b,c=Math.max(o,s,l),d=Math.min(o,s,l);let f,h;const m=(d+c)/2;if(d===c)f=0,h=0;else{const g=c-d;switch(h=m<=.5?g/(c+d):g/(2-c-d),c){case o:f=(s-l)/g+(s<l?6:0);break;case s:f=(l-o)/g+2;break;case l:f=(o-s)/g+4;break}f/=6}return e.h=f,e.s=h,e.l=m,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ii){wt.workingToColorSpace(Sn.copy(this),e);const t=Sn.r,o=Sn.g,s=Sn.b;return e!==ii?`color(${e} ${t.toFixed(3)} ${o.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(o*255)},${Math.round(s*255)})`}offsetHSL(e,t,o){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+o)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,o){return this.r=e.r+(t.r-e.r)*o,this.g=e.g+(t.g-e.g)*o,this.b=e.b+(t.b-e.b)*o,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(Hl);const o=da(Cr.h,Hl.h,t),s=da(Cr.s,Hl.s,t),l=da(Cr.l,Hl.l,t);return this.setHSL(o,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,o=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*o+l[6]*s,this.g=l[1]*t+l[4]*o+l[7]*s,this.b=l[2]*t+l[5]*o+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Tt;Tt.NAMES=a0;let iM=0;class Sa extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=as,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tf,this.blendDst=nf,this.blendEquation=co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const o=e[t];if(o===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(o):s&&s.isVector3&&o&&o.isVector3?s.copy(o):this[t]=o}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const o={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(o.dispersion=this.dispersion),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(e).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(e).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(e).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(e).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(e).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapRotation!==void 0&&(o.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.shadowSide!==null&&(o.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(o.blending=this.blending),this.side!==Dr&&(o.side=this.side),this.vertexColors===!0&&(o.vertexColors=!0),this.opacity<1&&(o.opacity=this.opacity),this.transparent===!0&&(o.transparent=!0),this.blendSrc!==tf&&(o.blendSrc=this.blendSrc),this.blendDst!==nf&&(o.blendDst=this.blendDst),this.blendEquation!==co&&(o.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(o.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(o.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(o.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(o.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(o.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(o.depthFunc=this.depthFunc),this.depthTest===!1&&(o.depthTest=this.depthTest),this.depthWrite===!1&&(o.depthWrite=this.depthWrite),this.colorWrite===!1&&(o.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(o.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bg&&(o.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(o.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(o.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wo&&(o.stencilFail=this.stencilFail),this.stencilZFail!==Wo&&(o.stencilZFail=this.stencilZFail),this.stencilZPass!==Wo&&(o.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(o.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(o.rotation=this.rotation),this.polygonOffset===!0&&(o.polygonOffset=!0),this.polygonOffsetFactor!==0&&(o.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(o.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(o.linewidth=this.linewidth),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.dithering===!0&&(o.dithering=!0),this.alphaTest>0&&(o.alphaTest=this.alphaTest),this.alphaHash===!0&&(o.alphaHash=!0),this.alphaToCoverage===!0&&(o.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(o.premultipliedAlpha=!0),this.forceSinglePass===!0&&(o.forceSinglePass=!0),this.wireframe===!0&&(o.wireframe=!0),this.wireframeLinewidth>1&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(o.flatShading=!0),this.visible===!1&&(o.visible=!1),this.toneMapped===!1&&(o.toneMapped=!1),this.fog===!1&&(o.fog=!1),Object.keys(this.userData).length>0&&(o.userData=this.userData);function s(l){const c=[];for(const d in l){const f=l[d];delete f.metadata,c.push(f)}return c}if(t){const l=s(e.textures),c=s(e.images);l.length>0&&(o.textures=l),c.length>0&&(o.images=c)}return o}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let o=null;if(t!==null){const s=t.length;o=new Array(s);for(let l=0;l!==s;++l)o[l]=t[l].clone()}return this.clippingPlanes=o,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _h extends Sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new ie,Vl=new At;let rM=0;class Ri{constructor(e,t,o=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=o,this.usage=Rg,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,o){e*=this.itemSize,o*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[o+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,o=this.count;t<o;t++)Vl.fromBufferAttribute(this,t),Vl.applyMatrix3(e),this.setXY(t,Vl.x,Vl.y);else if(this.itemSize===3)for(let t=0,o=this.count;t<o;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,o=this.count;t<o;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,o=this.count;t<o;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,o=this.count;t<o;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let o=this.array[e*this.itemSize+t];return this.normalized&&(o=rs(o,this.array)),o}setComponent(e,t,o){return this.normalized&&(o=bn(o,this.array)),this.array[e*this.itemSize+t]=o,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,o){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),o=bn(o,this.array)),this.array[e+0]=t,this.array[e+1]=o,this}setXYZ(e,t,o,s){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),o=bn(o,this.array),s=bn(s,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=s,this}setXYZW(e,t,o,s,l){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),o=bn(o,this.array),s=bn(s,this.array),l=bn(l,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rg&&(e.usage=this.usage),e}}class l0 extends Ri{constructor(e,t,o){super(new Uint16Array(e),t,o)}}class c0 extends Ri{constructor(e,t,o){super(new Uint32Array(e),t,o)}}class En extends Ri{constructor(e,t,o){super(new Float32Array(e),t,o)}}let oM=0;const ni=new Zt,kd=new Mn,es=new ie,jn=new ya,la=new ya,un=new ie;class Ni extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r0(e)?c0:l0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,o=0){this.groups.push({start:e,count:t,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const o=this.attributes.normal;if(o!==void 0){const l=new dt().getNormalMatrix(e);o.applyNormalMatrix(l),o.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,o){return ni.makeTranslation(e,t,o),this.applyMatrix4(ni),this}scale(e,t,o){return ni.makeScale(e,t,o),this.applyMatrix4(ni),this}lookAt(e){return kd.lookAt(e),kd.updateMatrix(),this.applyMatrix4(kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const o=[];for(let s=0,l=e.length;s<l;s++){const c=e[s];o.push(c.x,c.y,c.z||0)}this.setAttribute("position",new En(o,3))}else{const o=Math.min(e.length,t.count);for(let s=0;s<o;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const l=t[o];jn.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const o=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];la.setFromBufferAttribute(d),this.morphTargetsRelative?(un.addVectors(jn.min,la.min),jn.expandByPoint(un),un.addVectors(jn.max,la.max),jn.expandByPoint(un)):(jn.expandByPoint(la.min),jn.expandByPoint(la.max))}jn.getCenter(o);let s=0;for(let l=0,c=e.count;l<c;l++)un.fromBufferAttribute(e,l),s=Math.max(s,o.distanceToSquared(un));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],f=this.morphTargetsRelative;for(let h=0,m=d.count;h<m;h++)un.fromBufferAttribute(d,h),f&&(es.fromBufferAttribute(e,h),un.add(es)),s=Math.max(s,o.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const o=t.position,s=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*o.count),4));const c=this.getAttribute("tangent"),d=[],f=[];for(let H=0;H<o.count;H++)d[H]=new ie,f[H]=new ie;const h=new ie,m=new ie,g=new ie,_=new At,S=new At,M=new At,E=new ie,y=new ie;function v(H,D,P){h.fromBufferAttribute(o,H),m.fromBufferAttribute(o,D),g.fromBufferAttribute(o,P),_.fromBufferAttribute(l,H),S.fromBufferAttribute(l,D),M.fromBufferAttribute(l,P),m.sub(h),g.sub(h),S.sub(_),M.sub(_);const k=1/(S.x*M.y-M.x*S.y);isFinite(k)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-S.y).multiplyScalar(k),y.copy(g).multiplyScalar(S.x).addScaledVector(m,-M.x).multiplyScalar(k),d[H].add(E),d[D].add(E),d[P].add(E),f[H].add(y),f[D].add(y),f[P].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let H=0,D=L.length;H<D;++H){const P=L[H],k=P.start,Z=P.count;for(let q=k,ee=k+Z;q<ee;q+=3)v(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const b=new ie,T=new ie,U=new ie,I=new ie;function N(H){U.fromBufferAttribute(s,H),I.copy(U);const D=d[H];b.copy(D),b.sub(U.multiplyScalar(U.dot(D))).normalize(),T.crossVectors(I,D);const k=T.dot(f[H])<0?-1:1;c.setXYZW(H,b.x,b.y,b.z,k)}for(let H=0,D=L.length;H<D;++H){const P=L[H],k=P.start,Z=P.count;for(let q=k,ee=k+Z;q<ee;q+=3)N(e.getX(q+0)),N(e.getX(q+1)),N(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let o=this.getAttribute("normal");if(o===void 0)o=new Ri(new Float32Array(t.count*3),3),this.setAttribute("normal",o);else for(let _=0,S=o.count;_<S;_++)o.setXYZ(_,0,0,0);const s=new ie,l=new ie,c=new ie,d=new ie,f=new ie,h=new ie,m=new ie,g=new ie;if(e)for(let _=0,S=e.count;_<S;_+=3){const M=e.getX(_+0),E=e.getX(_+1),y=e.getX(_+2);s.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),c.fromBufferAttribute(t,y),m.subVectors(c,l),g.subVectors(s,l),m.cross(g),d.fromBufferAttribute(o,M),f.fromBufferAttribute(o,E),h.fromBufferAttribute(o,y),d.add(m),f.add(m),h.add(m),o.setXYZ(M,d.x,d.y,d.z),o.setXYZ(E,f.x,f.y,f.z),o.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,S=t.count;_<S;_+=3)s.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,l),g.subVectors(s,l),m.cross(g),o.setXYZ(_+0,m.x,m.y,m.z),o.setXYZ(_+1,m.x,m.y,m.z),o.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,o=e.count;t<o;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(d,f){const h=d.array,m=d.itemSize,g=d.normalized,_=new h.constructor(f.length*m);let S=0,M=0;for(let E=0,y=f.length;E<y;E++){d.isInterleavedBufferAttribute?S=f[E]*d.data.stride+d.offset:S=f[E]*m;for(let v=0;v<m;v++)_[M++]=h[S++]}return new Ri(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ni,o=this.index.array,s=this.attributes;for(const d in s){const f=s[d],h=e(f,o);t.setAttribute(d,h)}const l=this.morphAttributes;for(const d in l){const f=[],h=l[d];for(let m=0,g=h.length;m<g;m++){const _=h[m],S=e(_,o);f.push(S)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,f=c.length;d<f;d++){const h=c[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const o=this.attributes;for(const f in o){const h=o[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let l=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],m=[];for(let g=0,_=h.length;g<_;g++){const S=h[g];m.push(S.toJSON(e.data))}m.length>0&&(s[f]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const o=e.index;o!==null&&this.setIndex(o.clone());const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let _=0,S=g.length;_<S;_++)m.push(g[_].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wg=new Zt,no=new KS,Gl=new vh,jg=new ie,Wl=new ie,jl=new ie,Xl=new ie,Bd=new ie,Yl=new ie,Xg=new ie,$l=new ie;class Vt extends Mn{constructor(e=new Ni,t=new _h){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,o=Object.keys(t);if(o.length>0){const s=t[o[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const d=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const o=this.geometry,s=o.attributes.position,l=o.morphAttributes.position,c=o.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(l&&d){Yl.set(0,0,0);for(let f=0,h=l.length;f<h;f++){const m=d[f],g=l[f];m!==0&&(Bd.fromBufferAttribute(g,e),c?Yl.addScaledVector(Bd,m):Yl.addScaledVector(Bd.sub(t),m))}t.add(Yl)}return t}raycast(e,t){const o=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),Gl.copy(o.boundingSphere),Gl.applyMatrix4(l),no.copy(e.ray).recast(e.near),!(Gl.containsPoint(no.origin)===!1&&(no.intersectSphere(Gl,jg)===null||no.origin.distanceToSquared(jg)>(e.far-e.near)**2))&&(Wg.copy(l).invert(),no.copy(e.ray).applyMatrix4(Wg),!(o.boundingBox!==null&&no.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(e,t,no)))}_computeIntersections(e,t,o){let s;const l=this.geometry,c=this.material,d=l.index,f=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,_=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const y=_[M],v=c[y.materialIndex],L=Math.max(y.start,S.start),b=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let T=L,U=b;T<U;T+=3){const I=d.getX(T),N=d.getX(T+1),H=d.getX(T+2);s=ql(this,v,e,o,h,m,g,I,N,H),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const M=Math.max(0,S.start),E=Math.min(d.count,S.start+S.count);for(let y=M,v=E;y<v;y+=3){const L=d.getX(y),b=d.getX(y+1),T=d.getX(y+2);s=ql(this,c,e,o,h,m,g,L,b,T),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const y=_[M],v=c[y.materialIndex],L=Math.max(y.start,S.start),b=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let T=L,U=b;T<U;T+=3){const I=T,N=T+1,H=T+2;s=ql(this,v,e,o,h,m,g,I,N,H),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const M=Math.max(0,S.start),E=Math.min(f.count,S.start+S.count);for(let y=M,v=E;y<v;y+=3){const L=y,b=y+1,T=y+2;s=ql(this,c,e,o,h,m,g,L,b,T),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function sM(i,e,t,o,s,l,c,d){let f;if(e.side===On?f=o.intersectTriangle(c,l,s,!0,d):f=o.intersectTriangle(s,l,c,e.side===Dr,d),f===null)return null;$l.copy(d),$l.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo($l);return h<t.near||h>t.far?null:{distance:h,point:$l.clone(),object:i}}function ql(i,e,t,o,s,l,c,d,f,h){i.getVertexPosition(d,Wl),i.getVertexPosition(f,jl),i.getVertexPosition(h,Xl);const m=sM(i,e,t,o,Wl,jl,Xl,Xg);if(m){const g=new ie;mi.getBarycoord(Xg,Wl,jl,Xl,g),s&&(m.uv=mi.getInterpolatedAttribute(s,d,f,h,g,new At)),l&&(m.uv1=mi.getInterpolatedAttribute(l,d,f,h,g,new At)),c&&(m.normal=mi.getInterpolatedAttribute(c,d,f,h,g,new ie),m.normal.dot(o.direction)>0&&m.normal.multiplyScalar(-1));const _={a:d,b:f,c:h,normal:new ie,materialIndex:0};mi.getNormal(Wl,jl,Xl,_.normal),m.face=_,m.barycoord=g}return m}class Fn extends Ni{constructor(e=1,t=1,o=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:o,widthSegments:s,heightSegments:l,depthSegments:c};const d=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const f=[],h=[],m=[],g=[];let _=0,S=0;M("z","y","x",-1,-1,o,t,e,c,l,0),M("z","y","x",1,-1,o,t,-e,c,l,1),M("x","z","y",1,1,e,o,t,s,c,2),M("x","z","y",1,-1,e,o,-t,s,c,3),M("x","y","z",1,-1,e,t,o,s,l,4),M("x","y","z",-1,-1,e,t,-o,s,l,5),this.setIndex(f),this.setAttribute("position",new En(h,3)),this.setAttribute("normal",new En(m,3)),this.setAttribute("uv",new En(g,2));function M(E,y,v,L,b,T,U,I,N,H,D){const P=T/N,k=U/H,Z=T/2,q=U/2,ee=I/2,de=N+1,Q=H+1;let ce=0,B=0;const ue=new ie;for(let oe=0;oe<Q;oe++){const z=oe*k-q;for(let ae=0;ae<de;ae++){const Be=ae*P-Z;ue[E]=Be*L,ue[y]=z*b,ue[v]=ee,h.push(ue.x,ue.y,ue.z),ue[E]=0,ue[y]=0,ue[v]=I>0?1:-1,m.push(ue.x,ue.y,ue.z),g.push(ae/N),g.push(1-oe/H),ce+=1}}for(let oe=0;oe<H;oe++)for(let z=0;z<N;z++){const ae=_+z+de*oe,Be=_+z+de*(oe+1),ke=_+(z+1)+de*(oe+1),ne=_+(z+1)+de*oe;f.push(ae,Be,ne),f.push(Be,ke,ne),B+=6}d.addGroup(S,B,D),S+=B,_+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(i){const e={};for(const t in i){e[t]={};for(const o in i[t]){const s=i[t][o];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][o]=null):e[t][o]=s.clone():Array.isArray(s)?e[t][o]=s.slice():e[t][o]=s}}return e}function Rn(i){const e={};for(let t=0;t<i.length;t++){const o=gs(i[t]);for(const s in o)e[s]=o[s]}return e}function aM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function u0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const lM={clone:gs,merge:Rn};var cM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nr extends Sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cM,this.fragmentShader=uM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=aM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const o={};for(const s in this.extensions)this.extensions[s]===!0&&(o[s]=!0);return Object.keys(o).length>0&&(t.extensions=o),t}}class d0 extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const br=new ie,Yg=new At,$g=new At;class Xn extends d0{constructor(e=50,t=1,o=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=o,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,o){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),o.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,Yg,$g),t.subVectors($g,Yg)}setViewOffset(e,t,o,s,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ua*.5*this.fov)/this.zoom,o=2*t,s=this.aspect*o,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;l+=c.offsetX*s/f,t-=c.offsetY*o/h,s*=c.width/f,o*=c.height/h}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-o,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ts=-90,ns=1;class dM extends Mn{constructor(e,t,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xn(ts,ns,e,t);s.layers=this.layers,this.add(s);const l=new Xn(ts,ns,e,t);l.layers=this.layers,this.add(l);const c=new Xn(ts,ns,e,t);c.layers=this.layers,this.add(c);const d=new Xn(ts,ns,e,t);d.layers=this.layers,this.add(d);const f=new Xn(ts,ns,e,t);f.layers=this.layers,this.add(f);const h=new Xn(ts,ns,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[o,s,l,c,d,f]=t;for(const h of t)this.remove(h);if(e===Ci)o.up.set(0,1,0),o.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===fc)o.up.set(0,-1,0),o.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:o,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,f,h,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=o.texture.generateMipmaps;o.texture.generateMipmaps=!1,e.setRenderTarget(o,0,s),e.render(t,l),e.setRenderTarget(o,1,s),e.render(t,c),e.setRenderTarget(o,2,s),e.render(t,d),e.setRenderTarget(o,3,s),e.render(t,f),e.setRenderTarget(o,4,s),e.render(t,h),o.texture.generateMipmaps=E,e.setRenderTarget(o,5,s),e.render(t,m),e.setRenderTarget(g,_,S),e.xr.enabled=M,o.texture.needsPMREMUpdate=!0}}class f0 extends kn{constructor(e=[],t=fs,o,s,l,c,d,f,h,m){super(e,t,o,s,l,c,d,f,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fM extends mo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const o={width:e,height:e,depth:1},s=[o,o,o,o,o,o];this.texture=new f0(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const o={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fn(5,5,5),l=new Nr({name:"CubemapFromEquirect",uniforms:gs(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:On,blending:Pr});l.uniforms.tEquirect.value=t;const c=new Vt(s,l),d=t.minFilter;return t.minFilter===ho&&(t.minFilter=Ai),new dM(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,o=!0,s=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,o,s);e.setRenderTarget(l)}}class os extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hM={type:"move"};class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const o of e.hand.values())this._getHandJoint(t,o)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,o){let s=null,l=null,c=null;const d=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,o),v=this._getHandJoint(h,E);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=m.position.distanceTo(g.position),S=.02,M=.005;h.inputState.pinching&&_>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,o),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(s=t.getPose(e.targetRaySpace,o),s===null&&l!==null&&(s=l),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(hM)))}return d!==null&&(d.visible=s!==null),f!==null&&(f.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const o=new os;o.matrixAutoUpdate=!1,o.visible=!1,e.joints[t.jointName]=o,e.add(o)}return e.joints[t.jointName]}}class xh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(e),this.density=t}clone(){return new xh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pM extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Hd=new ie,mM=new ie,gM=new dt;class ao{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,o,s){return this.normal.set(e,t,o),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,o){const s=Hd.subVectors(o,t).cross(mM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const o=e.delta(Hd),s=this.normal.dot(o);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:t.copy(e.start).addScaledVector(o,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),o=this.distanceToPoint(e.end);return t<0&&o>0||o<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const o=t||gM.getNormalMatrix(e),s=this.coplanarPoint(Hd).applyMatrix4(e),l=this.normal.applyMatrix3(o).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const io=new vh,vM=new At(.5,.5),Kl=new ie;class yh{constructor(e=new ao,t=new ao,o=new ao,s=new ao,l=new ao,c=new ao){this.planes=[e,t,o,s,l,c]}set(e,t,o,s,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(o),d[3].copy(s),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let o=0;o<6;o++)t[o].copy(e.planes[o]);return this}setFromProjectionMatrix(e,t=Ci,o=!1){const s=this.planes,l=e.elements,c=l[0],d=l[1],f=l[2],h=l[3],m=l[4],g=l[5],_=l[6],S=l[7],M=l[8],E=l[9],y=l[10],v=l[11],L=l[12],b=l[13],T=l[14],U=l[15];if(s[0].setComponents(h-c,S-m,v-M,U-L).normalize(),s[1].setComponents(h+c,S+m,v+M,U+L).normalize(),s[2].setComponents(h+d,S+g,v+E,U+b).normalize(),s[3].setComponents(h-d,S-g,v-E,U-b).normalize(),o)s[4].setComponents(f,_,y,T).normalize(),s[5].setComponents(h-f,S-_,v-y,U-T).normalize();else if(s[4].setComponents(h-f,S-_,v-y,U-T).normalize(),t===Ci)s[5].setComponents(h+f,S+_,v+y,U+T).normalize();else if(t===fc)s[5].setComponents(f,_,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),io.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),io.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(io)}intersectsSprite(e){io.center.set(0,0,0);const t=vM.distanceTo(e.center);return io.radius=.7071067811865476+t,io.applyMatrix4(e.matrixWorld),this.intersectsSphere(io)}intersectsSphere(e){const t=this.planes,o=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(o)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let o=0;o<6;o++){const s=t[o];if(Kl.x=s.normal.x>0?e.max.x:e.min.x,Kl.y=s.normal.y>0?e.max.y:e.min.y,Kl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let o=0;o<6;o++)if(t[o].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class h0 extends kn{constructor(e,t,o=po,s,l,c,d=vi,f=vi,h,m=pa,g=1){if(m!==pa&&m!==ma)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:g};super(_,s,l,c,d,f,m,o,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pc extends Ni{constructor(e=1,t=1,o=1,s=32,l=1,c=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:o,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:f};const h=this;s=Math.floor(s),l=Math.floor(l);const m=[],g=[],_=[],S=[];let M=0;const E=[],y=o/2;let v=0;L(),c===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(m),this.setAttribute("position",new En(g,3)),this.setAttribute("normal",new En(_,3)),this.setAttribute("uv",new En(S,2));function L(){const T=new ie,U=new ie;let I=0;const N=(t-e)/o;for(let H=0;H<=l;H++){const D=[],P=H/l,k=P*(t-e)+e;for(let Z=0;Z<=s;Z++){const q=Z/s,ee=q*f+d,de=Math.sin(ee),Q=Math.cos(ee);U.x=k*de,U.y=-P*o+y,U.z=k*Q,g.push(U.x,U.y,U.z),T.set(de,N,Q).normalize(),_.push(T.x,T.y,T.z),S.push(q,1-P),D.push(M++)}E.push(D)}for(let H=0;H<s;H++)for(let D=0;D<l;D++){const P=E[D][H],k=E[D+1][H],Z=E[D+1][H+1],q=E[D][H+1];(e>0||D!==0)&&(m.push(P,k,q),I+=3),(t>0||D!==l-1)&&(m.push(k,Z,q),I+=3)}h.addGroup(v,I,0),v+=I}function b(T){const U=M,I=new At,N=new ie;let H=0;const D=T===!0?e:t,P=T===!0?1:-1;for(let Z=1;Z<=s;Z++)g.push(0,y*P,0),_.push(0,P,0),S.push(.5,.5),M++;const k=M;for(let Z=0;Z<=s;Z++){const ee=Z/s*f+d,de=Math.cos(ee),Q=Math.sin(ee);N.x=D*Q,N.y=y*P,N.z=D*de,g.push(N.x,N.y,N.z),_.push(0,P,0),I.x=de*.5+.5,I.y=Q*.5*P+.5,S.push(I.x,I.y),M++}for(let Z=0;Z<s;Z++){const q=U+Z,ee=k+Z;T===!0?m.push(ee,ee+1,q):m.push(ee+1,ee,q),H+=3}h.addGroup(v,H,T===!0?1:2),v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class go extends Ni{constructor(e=1,t=1,o=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:o,heightSegments:s};const l=e/2,c=t/2,d=Math.floor(o),f=Math.floor(s),h=d+1,m=f+1,g=e/d,_=t/f,S=[],M=[],E=[],y=[];for(let v=0;v<m;v++){const L=v*_-c;for(let b=0;b<h;b++){const T=b*g-l;M.push(T,-L,0),E.push(0,0,1),y.push(b/d),y.push(1-v/f)}}for(let v=0;v<f;v++)for(let L=0;L<d;L++){const b=L+h*v,T=L+h*(v+1),U=L+1+h*(v+1),I=L+1+h*v;S.push(b,T,I),S.push(T,U,I)}this.setIndex(S),this.setAttribute("position",new En(M,3)),this.setAttribute("normal",new En(E,3)),this.setAttribute("uv",new En(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sh extends Ni{constructor(e=1,t=32,o=16,s=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:o,phiStart:s,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),o=Math.max(2,Math.floor(o));const f=Math.min(c+d,Math.PI);let h=0;const m=[],g=new ie,_=new ie,S=[],M=[],E=[],y=[];for(let v=0;v<=o;v++){const L=[],b=v/o;let T=0;v===0&&c===0?T=.5/t:v===o&&f===Math.PI&&(T=-.5/t);for(let U=0;U<=t;U++){const I=U/t;g.x=-e*Math.cos(s+I*l)*Math.sin(c+b*d),g.y=e*Math.cos(c+b*d),g.z=e*Math.sin(s+I*l)*Math.sin(c+b*d),M.push(g.x,g.y,g.z),_.copy(g).normalize(),E.push(_.x,_.y,_.z),y.push(I+T,1-b),L.push(h++)}m.push(L)}for(let v=0;v<o;v++)for(let L=0;L<t;L++){const b=m[v][L+1],T=m[v][L],U=m[v+1][L],I=m[v+1][L+1];(v!==0||c>0)&&S.push(b,T,I),(v!==o-1||f<Math.PI)&&S.push(T,U,I)}this.setIndex(S),this.setAttribute("position",new En(M,3)),this.setAttribute("normal",new En(E,3)),this.setAttribute("uv",new En(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mh extends Ni{constructor(e=1,t=.4,o=12,s=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:o,tubularSegments:s,arc:l},o=Math.floor(o),s=Math.floor(s);const c=[],d=[],f=[],h=[],m=new ie,g=new ie,_=new ie;for(let S=0;S<=o;S++)for(let M=0;M<=s;M++){const E=M/s*l,y=S/o*Math.PI*2;g.x=(e+t*Math.cos(y))*Math.cos(E),g.y=(e+t*Math.cos(y))*Math.sin(E),g.z=t*Math.sin(y),d.push(g.x,g.y,g.z),m.x=e*Math.cos(E),m.y=e*Math.sin(E),_.subVectors(g,m).normalize(),f.push(_.x,_.y,_.z),h.push(M/s),h.push(S/o)}for(let S=1;S<=o;S++)for(let M=1;M<=s;M++){const E=(s+1)*S+M-1,y=(s+1)*(S-1)+M-1,v=(s+1)*(S-1)+M,L=(s+1)*S+M;c.push(E,y,L),c.push(y,v,L)}this.setIndex(c),this.setAttribute("position",new En(d,3)),this.setAttribute("normal",new En(f,3)),this.setAttribute("uv",new En(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ri extends Sa{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=n0,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _M extends Sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xM extends Sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class p0 extends Mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Vd=new Zt,qg=new ie,Kg=new ie;class yM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yh,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,o=this.matrix;qg.setFromMatrixPosition(e.matrixWorld),t.position.copy(qg),Kg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kg),t.updateMatrixWorld(),Vd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?o.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):o.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),o.multiply(Vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class SM extends yM{constructor(){super(new Xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,o=ms*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(o!==t.fov||s!==t.aspect||l!==t.far)&&(t.fov=o,t.aspect=s,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Zg extends p0{constructor(e,t,o=0,s=Math.PI/3,l=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.distance=o,this.angle=s,this.penumbra=l,this.decay=c,this.map=null,this.shadow=new SM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class MM extends d0{constructor(e=-1,t=1,o=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=o,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,o,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=o-e,c=o+e,d=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,d-=m*this.view.offsetY,f=d-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class EM extends p0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wM extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Qg(i,e,t,o){const s=TM(o);switch(t){case Zv:return i*e;case Jv:return i*e/s.components*s.byteLength;case fh:return i*e/s.components*s.byteLength;case e0:return i*e*2/s.components*s.byteLength;case hh:return i*e*2/s.components*s.byteLength;case Qv:return i*e*3/s.components*s.byteLength;case gi:return i*e*4/s.components*s.byteLength;case ph:return i*e*4/s.components*s.byteLength;case rc:case oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sc:case ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gf:case _f:return Math.max(i,16)*Math.max(e,8)/4;case mf:case vf:return Math.max(i,8)*Math.max(e,8)/2;case xf:case yf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wf:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Af:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bf:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Df:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case If:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case lc:case Ff:case Of:return Math.ceil(i/4)*Math.ceil(e/4)*16;case t0:case kf:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Bf:case zf:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function TM(i){switch(i){case Li:case $v:return{byteLength:1,components:1};case fa:case qv:case _a:return{byteLength:2,components:1};case uh:case dh:return{byteLength:2,components:4};case po:case ch:case Qi:return{byteLength:4,components:1};case Kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function m0(){let i=null,e=!1,t=null,o=null;function s(l,c){t(l,c),o=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(o=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(o),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function AM(i){const e=new WeakMap;function t(d,f){const h=d.array,m=d.usage,g=h.byteLength,_=i.createBuffer();i.bindBuffer(f,_),i.bufferData(f,h,m),d.onUploadCallback();let S;if(h instanceof Float32Array)S=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=i.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=i.SHORT;else if(h instanceof Uint32Array)S=i.UNSIGNED_INT;else if(h instanceof Int32Array)S=i.INT;else if(h instanceof Int8Array)S=i.BYTE;else if(h instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:g}}function o(d,f,h){const m=f.array,g=f.updateRanges;if(i.bindBuffer(h,d),g.length===0)i.bufferSubData(h,0,m);else{g.sort((S,M)=>S.start-M.start);let _=0;for(let S=1;S<g.length;S++){const M=g[_],E=g[S];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,g[_]=E)}g.length=_+1;for(let S=0,M=g.length;S<M;S++){const E=g[S];i.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(i.deleteBuffer(f.buffer),e.delete(d))}function c(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,f));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(h.buffer,d,f),h.version=d.version}}return{get:s,remove:l,update:c}}var CM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,FM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,KM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,QM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iE="gl_FragColor = linearToOutputTexel( gl_FragColor );",rE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_E=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ME=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,TE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,CE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ew=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ow=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_w=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Aw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Iw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Uw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ow=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$w=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:CM,alphahash_pars_fragment:bM,alphamap_fragment:RM,alphamap_pars_fragment:PM,alphatest_fragment:LM,alphatest_pars_fragment:DM,aomap_fragment:NM,aomap_pars_fragment:IM,batching_pars_vertex:UM,batching_vertex:FM,begin_vertex:OM,beginnormal_vertex:kM,bsdfs:BM,iridescence_fragment:zM,bumpmap_pars_fragment:HM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:GM,clipping_planes_pars_vertex:WM,clipping_planes_vertex:jM,color_fragment:XM,color_pars_fragment:YM,color_pars_vertex:$M,color_vertex:qM,common:KM,cube_uv_reflection_fragment:ZM,defaultnormal_vertex:QM,displacementmap_pars_vertex:JM,displacementmap_vertex:eE,emissivemap_fragment:tE,emissivemap_pars_fragment:nE,colorspace_fragment:iE,colorspace_pars_fragment:rE,envmap_fragment:oE,envmap_common_pars_fragment:sE,envmap_pars_fragment:aE,envmap_pars_vertex:lE,envmap_physical_pars_fragment:xE,envmap_vertex:cE,fog_vertex:uE,fog_pars_vertex:dE,fog_fragment:fE,fog_pars_fragment:hE,gradientmap_pars_fragment:pE,lightmap_pars_fragment:mE,lights_lambert_fragment:gE,lights_lambert_pars_fragment:vE,lights_pars_begin:_E,lights_toon_fragment:yE,lights_toon_pars_fragment:SE,lights_phong_fragment:ME,lights_phong_pars_fragment:EE,lights_physical_fragment:wE,lights_physical_pars_fragment:TE,lights_fragment_begin:AE,lights_fragment_maps:CE,lights_fragment_end:bE,logdepthbuf_fragment:RE,logdepthbuf_pars_fragment:PE,logdepthbuf_pars_vertex:LE,logdepthbuf_vertex:DE,map_fragment:NE,map_pars_fragment:IE,map_particle_fragment:UE,map_particle_pars_fragment:FE,metalnessmap_fragment:OE,metalnessmap_pars_fragment:kE,morphinstance_vertex:BE,morphcolor_vertex:zE,morphnormal_vertex:HE,morphtarget_pars_vertex:VE,morphtarget_vertex:GE,normal_fragment_begin:WE,normal_fragment_maps:jE,normal_pars_fragment:XE,normal_pars_vertex:YE,normal_vertex:$E,normalmap_pars_fragment:qE,clearcoat_normal_fragment_begin:KE,clearcoat_normal_fragment_maps:ZE,clearcoat_pars_fragment:QE,iridescence_pars_fragment:JE,opaque_fragment:ew,packing:tw,premultiplied_alpha_fragment:nw,project_vertex:iw,dithering_fragment:rw,dithering_pars_fragment:ow,roughnessmap_fragment:sw,roughnessmap_pars_fragment:aw,shadowmap_pars_fragment:lw,shadowmap_pars_vertex:cw,shadowmap_vertex:uw,shadowmask_pars_fragment:dw,skinbase_vertex:fw,skinning_pars_vertex:hw,skinning_vertex:pw,skinnormal_vertex:mw,specularmap_fragment:gw,specularmap_pars_fragment:vw,tonemapping_fragment:_w,tonemapping_pars_fragment:xw,transmission_fragment:yw,transmission_pars_fragment:Sw,uv_pars_fragment:Mw,uv_pars_vertex:Ew,uv_vertex:ww,worldpos_vertex:Tw,background_vert:Aw,background_frag:Cw,backgroundCube_vert:bw,backgroundCube_frag:Rw,cube_vert:Pw,cube_frag:Lw,depth_vert:Dw,depth_frag:Nw,distanceRGBA_vert:Iw,distanceRGBA_frag:Uw,equirect_vert:Fw,equirect_frag:Ow,linedashed_vert:kw,linedashed_frag:Bw,meshbasic_vert:zw,meshbasic_frag:Hw,meshlambert_vert:Vw,meshlambert_frag:Gw,meshmatcap_vert:Ww,meshmatcap_frag:jw,meshnormal_vert:Xw,meshnormal_frag:Yw,meshphong_vert:$w,meshphong_frag:qw,meshphysical_vert:Kw,meshphysical_frag:Zw,meshtoon_vert:Qw,meshtoon_frag:Jw,points_vert:eT,points_frag:tT,shadow_vert:nT,shadow_frag:iT,sprite_vert:rT,sprite_frag:oT},De={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ti={basic:{uniforms:Rn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Rn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Rn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Rn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Rn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Rn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Rn([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Rn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Rn([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Rn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Rn([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Rn([De.common,De.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Rn([De.lights,De.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ti.physical={uniforms:Rn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Zl={r:0,b:0,g:0},ro=new Di,sT=new Zt;function aT(i,e,t,o,s,l,c){const d=new Tt(0);let f=l===!0?0:1,h,m,g=null,_=0,S=null;function M(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?t:e).get(T)),T}function E(b){let T=!1;const U=M(b);U===null?v(d,f):U&&U.isColor&&(v(U,1),T=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?o.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&o.buffers.color.setClear(0,0,0,0,c),(i.autoClear||T)&&(o.buffers.depth.setTest(!0),o.buffers.depth.setMask(!0),o.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(b,T){const U=M(T);U&&(U.isCubeTexture||U.mapping===Mc)?(m===void 0&&(m=new Vt(new Fn(1,1,1),new Nr({name:"BackgroundCubeMaterial",uniforms:gs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,N,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),ro.copy(T.backgroundRotation),ro.x*=-1,ro.y*=-1,ro.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ro.y*=-1,ro.z*=-1),m.material.uniforms.envMap.value=U,m.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(sT.makeRotationFromEuler(ro)),m.material.toneMapped=wt.getTransfer(U.colorSpace)!==It,(g!==U||_!==U.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,g=U,_=U.version,S=i.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):U&&U.isTexture&&(h===void 0&&(h=new Vt(new go(2,2),new Nr({name:"BackgroundMaterial",uniforms:gs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=U,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.toneMapped=wt.getTransfer(U.colorSpace)!==It,U.matrixAutoUpdate===!0&&U.updateMatrix(),h.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||_!==U.version||S!==i.toneMapping)&&(h.material.needsUpdate=!0,g=U,_=U.version,S=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function v(b,T){b.getRGB(Zl,u0(i)),o.buffers.color.setClear(Zl.r,Zl.g,Zl.b,T,c)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return d},setClearColor:function(b,T=1){d.set(b),f=T,v(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,v(d,f)},render:E,addToRenderList:y,dispose:L}}function lT(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),o={},s=_(null);let l=s,c=!1;function d(P,k,Z,q,ee){let de=!1;const Q=g(q,Z,k);l!==Q&&(l=Q,h(l.object)),de=S(P,q,Z,ee),de&&M(P,q,Z,ee),ee!==null&&e.update(ee,i.ELEMENT_ARRAY_BUFFER),(de||c)&&(c=!1,T(P,k,Z,q),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function f(){return i.createVertexArray()}function h(P){return i.bindVertexArray(P)}function m(P){return i.deleteVertexArray(P)}function g(P,k,Z){const q=Z.wireframe===!0;let ee=o[P.id];ee===void 0&&(ee={},o[P.id]=ee);let de=ee[k.id];de===void 0&&(de={},ee[k.id]=de);let Q=de[q];return Q===void 0&&(Q=_(f()),de[q]=Q),Q}function _(P){const k=[],Z=[],q=[];for(let ee=0;ee<t;ee++)k[ee]=0,Z[ee]=0,q[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Z,attributeDivisors:q,object:P,attributes:{},index:null}}function S(P,k,Z,q){const ee=l.attributes,de=k.attributes;let Q=0;const ce=Z.getAttributes();for(const B in ce)if(ce[B].location>=0){const oe=ee[B];let z=de[B];if(z===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(z=P.instanceColor)),oe===void 0||oe.attribute!==z||z&&oe.data!==z.data)return!0;Q++}return l.attributesNum!==Q||l.index!==q}function M(P,k,Z,q){const ee={},de=k.attributes;let Q=0;const ce=Z.getAttributes();for(const B in ce)if(ce[B].location>=0){let oe=de[B];oe===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor));const z={};z.attribute=oe,oe&&oe.data&&(z.data=oe.data),ee[B]=z,Q++}l.attributes=ee,l.attributesNum=Q,l.index=q}function E(){const P=l.newAttributes;for(let k=0,Z=P.length;k<Z;k++)P[k]=0}function y(P){v(P,0)}function v(P,k){const Z=l.newAttributes,q=l.enabledAttributes,ee=l.attributeDivisors;Z[P]=1,q[P]===0&&(i.enableVertexAttribArray(P),q[P]=1),ee[P]!==k&&(i.vertexAttribDivisor(P,k),ee[P]=k)}function L(){const P=l.newAttributes,k=l.enabledAttributes;for(let Z=0,q=k.length;Z<q;Z++)k[Z]!==P[Z]&&(i.disableVertexAttribArray(Z),k[Z]=0)}function b(P,k,Z,q,ee,de,Q){Q===!0?i.vertexAttribIPointer(P,k,Z,ee,de):i.vertexAttribPointer(P,k,Z,q,ee,de)}function T(P,k,Z,q){E();const ee=q.attributes,de=Z.getAttributes(),Q=k.defaultAttributeValues;for(const ce in de){const B=de[ce];if(B.location>=0){let ue=ee[ce];if(ue===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),ue!==void 0){const oe=ue.normalized,z=ue.itemSize,ae=e.get(ue);if(ae===void 0)continue;const Be=ae.buffer,ke=ae.type,ne=ae.bytesPerElement,ge=ke===i.INT||ke===i.UNSIGNED_INT||ue.gpuType===ch;if(ue.isInterleavedBufferAttribute){const pe=ue.data,be=pe.stride,Re=ue.offset;if(pe.isInstancedInterleavedBuffer){for(let Ye=0;Ye<B.locationSize;Ye++)v(B.location+Ye,pe.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ye=0;Ye<B.locationSize;Ye++)y(B.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Ye=0;Ye<B.locationSize;Ye++)b(B.location+Ye,z/B.locationSize,ke,oe,be*ne,(Re+z/B.locationSize*Ye)*ne,ge)}else{if(ue.isInstancedBufferAttribute){for(let pe=0;pe<B.locationSize;pe++)v(B.location+pe,ue.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let pe=0;pe<B.locationSize;pe++)y(B.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let pe=0;pe<B.locationSize;pe++)b(B.location+pe,z/B.locationSize,ke,oe,z*ne,z/B.locationSize*pe*ne,ge)}}else if(Q!==void 0){const oe=Q[ce];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(B.location,oe);break;case 3:i.vertexAttrib3fv(B.location,oe);break;case 4:i.vertexAttrib4fv(B.location,oe);break;default:i.vertexAttrib1fv(B.location,oe)}}}}L()}function U(){H();for(const P in o){const k=o[P];for(const Z in k){const q=k[Z];for(const ee in q)m(q[ee].object),delete q[ee];delete k[Z]}delete o[P]}}function I(P){if(o[P.id]===void 0)return;const k=o[P.id];for(const Z in k){const q=k[Z];for(const ee in q)m(q[ee].object),delete q[ee];delete k[Z]}delete o[P.id]}function N(P){for(const k in o){const Z=o[k];if(Z[P.id]===void 0)continue;const q=Z[P.id];for(const ee in q)m(q[ee].object),delete q[ee];delete Z[P.id]}}function H(){D(),c=!0,l!==s&&(l=s,h(l.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:H,resetDefaultState:D,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:y,disableUnusedAttributes:L}}function cT(i,e,t){let o;function s(h){o=h}function l(h,m){i.drawArrays(o,h,m),t.update(m,o,1)}function c(h,m,g){g!==0&&(i.drawArraysInstanced(o,h,m,g),t.update(m,o,g))}function d(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(o,h,0,m,0,g);let S=0;for(let M=0;M<g;M++)S+=m[M];t.update(S,o,1)}function f(h,m,g,_){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)c(h[M],m[M],_[M]);else{S.multiDrawArraysInstancedWEBGL(o,h,0,m,0,_,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E]*_[E];t.update(M,o,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function uT(i,e,t,o){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(N){return!(N!==gi&&o.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const H=N===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Li&&o.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Qi&&!H)}function f(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=f(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=M>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:L,maxVaryings:b,maxFragmentUniforms:T,vertexTextures:U,maxSamples:I}}function dT(i){const e=this;let t=null,o=0,s=!1,l=!1;const c=new ao,d=new dt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||o!==0||s;return s=_,o=g.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,S){const M=g.clippingPlanes,E=g.clipIntersection,y=g.clipShadows,v=i.get(g);if(!s||M===null||M.length===0||l&&!y)l?m(null):h();else{const L=l?0:o,b=L*4;let T=v.clippingState||null;f.value=T,T=m(M,_,b,S);for(let U=0;U!==b;++U)T[U]=t[U];v.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=o>0),e.numPlanes=o,e.numIntersection=0}function m(g,_,S,M){const E=g!==null?g.length:0;let y=null;if(E!==0){if(y=f.value,M!==!0||y===null){const v=S+E*4,L=_.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let b=0,T=S;b!==E;++b,T+=4)c.copy(g[b]).applyMatrix4(L,d),c.normal.toArray(y,T),y[T+3]=c.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function fT(i){let e=new WeakMap;function t(c,d){return d===df?c.mapping=fs:d===ff&&(c.mapping=hs),c}function o(c){if(c&&c.isTexture){const d=c.mapping;if(d===df||d===ff)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new fM(f.height);return h.fromEquirectangularTexture(i,c),e.set(c,h),c.addEventListener("dispose",s),t(h.texture,c.mapping)}else return null}}return c}function s(c){const d=c.target;d.removeEventListener("dispose",s);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:o,dispose:l}}const ss=4,Jg=[.125,.215,.35,.446,.526,.582],uo=20,Gd=new MM,ev=new Tt;let Wd=null,jd=0,Xd=0,Yd=!1;const lo=(1+Math.sqrt(5))/2,is=1/lo,tv=[new ie(-lo,is,0),new ie(lo,is,0),new ie(-is,0,lo),new ie(is,0,lo),new ie(0,lo,-is),new ie(0,lo,is),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)],hT=new ie;class nv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,o=.1,s=100,l={}){const{size:c=256,position:d=hT}=l;Wd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,o,s,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wd,jd,Xd),this._renderer.xr.enabled=Yd,e.scissorTest=!1,Ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const o=t||this._allocateTargets();return this._textureToCubeUV(e,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,o={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:_a,format:gi,colorSpace:ps,depthBuffer:!1},s=iv(e,t,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iv(e,t,o);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pT(l)),this._blurMaterial=mT(l,e,t)}return s}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,Gd)}_sceneToCubeUV(e,t,o,s,l){const f=new Xn(90,1,t,o),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,S=g.toneMapping;g.getClearColor(ev),g.toneMapping=Lr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null));const E=new _h({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),y=new Vt(new Fn,E);let v=!1;const L=e.background;L?L.isColor&&(E.color.copy(L),e.background=null,v=!0):(E.color.copy(ev),v=!0);for(let b=0;b<6;b++){const T=b%3;T===0?(f.up.set(0,h[b],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+m[b],l.y,l.z)):T===1?(f.up.set(0,0,h[b]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+m[b],l.z)):(f.up.set(0,h[b],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+m[b]));const U=this._cubeSize;Ql(s,T*U,b>2?U:0,U,U),g.setRenderTarget(s),v&&g.render(y,f),g.render(e,f)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=S,g.autoClear=_,e.background=L}_textureToCubeUV(e,t){const o=this._renderer,s=e.mapping===fs||e.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new Vt(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;Ql(t,0,0,3*f,2*f),o.setRenderTarget(t),o.render(c,Gd)}_applyPMREM(e){const t=this._renderer,o=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=tv[(s-l-1)%tv.length];this._blur(e,l-1,l,c,d)}t.autoClear=o}_blur(e,t,o,s,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,o,s,"latitudinal",l),this._halfBlur(c,e,o,o,s,"longitudinal",l)}_halfBlur(e,t,o,s,l,c,d){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Vt(this._lodPlanes[s],h),_=h.uniforms,S=this._sizeLods[o]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*uo-1),E=l/M,y=isFinite(l)?1+Math.floor(m*E):uo;y>uo&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${uo}`);const v=[];let L=0;for(let N=0;N<uo;++N){const H=N/E,D=Math.exp(-H*H/2);v.push(D),N===0?L+=D:N<y&&(L+=2*D)}for(let N=0;N<v.length;N++)v[N]=v[N]/L;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=c==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:b}=this;_.dTheta.value=M,_.mipInt.value=b-o;const T=this._sizeLods[s],U=3*T*(s>b-ss?s-b+ss:0),I=4*(this._cubeSize-T);Ql(t,U,I,3*T,2*T),f.setRenderTarget(t),f.render(g,Gd)}}function pT(i){const e=[],t=[],o=[];let s=i;const l=i-ss+1+Jg.length;for(let c=0;c<l;c++){const d=Math.pow(2,s);t.push(d);let f=1/d;c>i-ss?f=Jg[c-i+ss-1]:c===0&&(f=0),o.push(f);const h=1/(d-2),m=-h,g=1+h,_=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,M=6,E=3,y=2,v=1,L=new Float32Array(E*M*S),b=new Float32Array(y*M*S),T=new Float32Array(v*M*S);for(let I=0;I<S;I++){const N=I%3*2/3-1,H=I>2?0:-1,D=[N,H,0,N+2/3,H,0,N+2/3,H+1,0,N,H,0,N+2/3,H+1,0,N,H+1,0];L.set(D,E*M*I),b.set(_,y*M*I);const P=[I,I,I,I,I,I];T.set(P,v*M*I)}const U=new Ni;U.setAttribute("position",new Ri(L,E)),U.setAttribute("uv",new Ri(b,y)),U.setAttribute("faceIndex",new Ri(T,v)),e.push(U),s>ss&&s--}return{lodPlanes:e,sizeLods:t,sigmas:o}}function iv(i,e,t){const o=new mo(i,e,t);return o.texture.mapping=Mc,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function Ql(i,e,t,o,s){i.viewport.set(e,t,o,s),i.scissor.set(e,t,o,s)}function mT(i,e,t){const o=new Float32Array(uo),s=new ie(0,1,0);return new Nr({name:"SphericalGaussianBlur",defines:{n:uo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function rv(){return new Nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function ov(){return new Nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gT(i){let e=new WeakMap,t=null;function o(d){if(d&&d.isTexture){const f=d.mapping,h=f===df||f===ff,m=f===fs||f===hs;if(h||m){let g=e.get(d);const _=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return t===null&&(t=new nv(i)),g=h?t.fromEquirectangular(d,g):t.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return h&&S&&S.height>0||m&&S&&s(S)?(t===null&&(t=new nv(i)),g=h?t.fromEquirectangular(d):t.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",l),g.texture):null}}}return d}function s(d){let f=0;const h=6;for(let m=0;m<h;m++)d[m]!==void 0&&f++;return f===h}function l(d){const f=d.target;f.removeEventListener("dispose",l);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:o,dispose:c}}function vT(i){const e={};function t(o){if(e[o]!==void 0)return e[o];let s;switch(o){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(o)}return e[o]=s,s}return{has:function(o){return t(o)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(o){const s=t(o);return s===null&&ls("THREE.WebGLRenderer: "+o+" extension not supported."),s}}}function _T(i,e,t,o){const s={},l=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",c),delete s[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),o.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(g,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function f(g){const _=g.attributes;for(const S in _)e.update(_[S],i.ARRAY_BUFFER)}function h(g){const _=[],S=g.index,M=g.attributes.position;let E=0;if(S!==null){const L=S.array;E=S.version;for(let b=0,T=L.length;b<T;b+=3){const U=L[b+0],I=L[b+1],N=L[b+2];_.push(U,I,I,N,N,U)}}else if(M!==void 0){const L=M.array;E=M.version;for(let b=0,T=L.length/3-1;b<T;b+=3){const U=b+0,I=b+1,N=b+2;_.push(U,I,I,N,N,U)}}else return;const y=new(r0(_)?c0:l0)(_,1);y.version=E;const v=l.get(g);v&&e.remove(v),l.set(g,y)}function m(g){const _=l.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&h(g)}else h(g);return l.get(g)}return{get:d,update:f,getWireframeAttribute:m}}function xT(i,e,t){let o;function s(_){o=_}let l,c;function d(_){l=_.type,c=_.bytesPerElement}function f(_,S){i.drawElements(o,S,l,_*c),t.update(S,o,1)}function h(_,S,M){M!==0&&(i.drawElementsInstanced(o,S,l,_*c,M),t.update(S,o,M))}function m(_,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(o,S,0,l,_,0,M);let y=0;for(let v=0;v<M;v++)y+=S[v];t.update(y,o,1)}function g(_,S,M,E){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_.length;v++)h(_[v]/c,S[v],E[v]);else{y.multiDrawElementsInstancedWEBGL(o,S,0,l,_,0,E,0,M);let v=0;for(let L=0;L<M;L++)v+=S[L]*E[L];t.update(v,o,1)}}this.setMode=s,this.setIndex=d,this.render=f,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function yT(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function o(l,c,d){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=d*(l/3);break;case i.LINES:t.lines+=d*(l/2);break;case i.LINE_STRIP:t.lines+=d*(l-1);break;case i.LINE_LOOP:t.lines+=d*l;break;case i.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:o}}function ST(i,e,t){const o=new WeakMap,s=new Yt;function l(c,d,f){const h=c.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=m!==void 0?m.length:0;let _=o.get(d);if(_===void 0||_.count!==g){let P=function(){H.dispose(),o.delete(d),d.removeEventListener("dispose",P)};var S=P;_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let T=0;M===!0&&(T=1),E===!0&&(T=2),y===!0&&(T=3);let U=d.attributes.position.count*T,I=1;U>e.maxTextureSize&&(I=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const N=new Float32Array(U*I*4*g),H=new o0(N,U,I,g);H.type=Qi,H.needsUpdate=!0;const D=T*4;for(let k=0;k<g;k++){const Z=v[k],q=L[k],ee=b[k],de=U*I*4*k;for(let Q=0;Q<Z.count;Q++){const ce=Q*D;M===!0&&(s.fromBufferAttribute(Z,Q),N[de+ce+0]=s.x,N[de+ce+1]=s.y,N[de+ce+2]=s.z,N[de+ce+3]=0),E===!0&&(s.fromBufferAttribute(q,Q),N[de+ce+4]=s.x,N[de+ce+5]=s.y,N[de+ce+6]=s.z,N[de+ce+7]=0),y===!0&&(s.fromBufferAttribute(ee,Q),N[de+ce+8]=s.x,N[de+ce+9]=s.y,N[de+ce+10]=s.z,N[de+ce+11]=ee.itemSize===4?s.w:1)}}_={count:g,texture:H,size:new At(U,I)},o.set(d,_),d.addEventListener("dispose",P)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const E=d.morphTargetsRelative?1:1-M;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",h)}f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:l}}function MT(i,e,t,o){let s=new WeakMap;function l(f){const h=o.render.frame,m=f.geometry,g=e.get(f,m);if(s.get(g)!==h&&(e.update(g),s.set(g,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),s.get(f)!==h&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),s.set(f,h))),f.isSkinnedMesh){const _=f.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return g}function c(){s=new WeakMap}function d(f){const h=f.target;h.removeEventListener("dispose",d),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:c}}const g0=new kn,sv=new h0(1,1),v0=new o0,_0=new $S,x0=new f0,av=[],lv=[],cv=new Float32Array(16),uv=new Float32Array(9),dv=new Float32Array(4);function Ss(i,e,t){const o=i[0];if(o<=0||o>0)return i;const s=e*t;let l=av[s];if(l===void 0&&(l=new Float32Array(s),av[s]=l),e!==0){o.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,i[c].toArray(l,d)}return l}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,o=i.length;t<o;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,o=e.length;t<o;t++)i[t]=e[t]}function Ec(i,e){let t=lv[e];t===void 0&&(t=new Int32Array(e),lv[e]=t);for(let o=0;o!==e;++o)t[o]=i.allocateTextureUnit();return t}function ET(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function TT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function AT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function CT(i,e){const t=this.cache,o=e.elements;if(o===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(on(t,o))return;dv.set(o),i.uniformMatrix2fv(this.addr,!1,dv),sn(t,o)}}function bT(i,e){const t=this.cache,o=e.elements;if(o===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(on(t,o))return;uv.set(o),i.uniformMatrix3fv(this.addr,!1,uv),sn(t,o)}}function RT(i,e){const t=this.cache,o=e.elements;if(o===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(on(t,o))return;cv.set(o),i.uniformMatrix4fv(this.addr,!1,cv),sn(t,o)}}function PT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function LT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function DT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function NT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function IT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function UT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function FT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function OT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function kT(i,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(i.uniform1i(this.addr,s),o[0]=s);let l;this.type===i.SAMPLER_2D_SHADOW?(sv.compareFunction=i0,l=sv):l=g0,t.setTexture2D(e||l,s)}function BT(i,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(i.uniform1i(this.addr,s),o[0]=s),t.setTexture3D(e||_0,s)}function zT(i,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(i.uniform1i(this.addr,s),o[0]=s),t.setTextureCube(e||x0,s)}function HT(i,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(i.uniform1i(this.addr,s),o[0]=s),t.setTexture2DArray(e||v0,s)}function VT(i){switch(i){case 5126:return ET;case 35664:return wT;case 35665:return TT;case 35666:return AT;case 35674:return CT;case 35675:return bT;case 35676:return RT;case 5124:case 35670:return PT;case 35667:case 35671:return LT;case 35668:case 35672:return DT;case 35669:case 35673:return NT;case 5125:return IT;case 36294:return UT;case 36295:return FT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return HT}}function GT(i,e){i.uniform1fv(this.addr,e)}function WT(i,e){const t=Ss(e,this.size,2);i.uniform2fv(this.addr,t)}function jT(i,e){const t=Ss(e,this.size,3);i.uniform3fv(this.addr,t)}function XT(i,e){const t=Ss(e,this.size,4);i.uniform4fv(this.addr,t)}function YT(i,e){const t=Ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $T(i,e){const t=Ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qT(i,e){const t=Ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function KT(i,e){i.uniform1iv(this.addr,e)}function ZT(i,e){i.uniform2iv(this.addr,e)}function QT(i,e){i.uniform3iv(this.addr,e)}function JT(i,e){i.uniform4iv(this.addr,e)}function e1(i,e){i.uniform1uiv(this.addr,e)}function t1(i,e){i.uniform2uiv(this.addr,e)}function n1(i,e){i.uniform3uiv(this.addr,e)}function i1(i,e){i.uniform4uiv(this.addr,e)}function r1(i,e,t){const o=this.cache,s=e.length,l=Ec(t,s);on(o,l)||(i.uniform1iv(this.addr,l),sn(o,l));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||g0,l[c])}function o1(i,e,t){const o=this.cache,s=e.length,l=Ec(t,s);on(o,l)||(i.uniform1iv(this.addr,l),sn(o,l));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||_0,l[c])}function s1(i,e,t){const o=this.cache,s=e.length,l=Ec(t,s);on(o,l)||(i.uniform1iv(this.addr,l),sn(o,l));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||x0,l[c])}function a1(i,e,t){const o=this.cache,s=e.length,l=Ec(t,s);on(o,l)||(i.uniform1iv(this.addr,l),sn(o,l));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||v0,l[c])}function l1(i){switch(i){case 5126:return GT;case 35664:return WT;case 35665:return jT;case 35666:return XT;case 35674:return YT;case 35675:return $T;case 35676:return qT;case 5124:case 35670:return KT;case 35667:case 35671:return ZT;case 35668:case 35672:return QT;case 35669:case 35673:return JT;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return a1}}class c1{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.type=t.type,this.setValue=VT(t.type)}}class u1{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l1(t.type)}}class d1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,o){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const d=s[l];d.setValue(e,t[d.id],o)}}}const $d=/(\w+)(\])?(\[|\.)?/g;function fv(i,e){i.seq.push(e),i.map[e.id]=e}function f1(i,e,t){const o=i.name,s=o.length;for($d.lastIndex=0;;){const l=$d.exec(o),c=$d.lastIndex;let d=l[1];const f=l[2]==="]",h=l[3];if(f&&(d=d|0),h===void 0||h==="["&&c+2===s){fv(t,h===void 0?new c1(d,i,e):new u1(d,i,e));break}else{let g=t.map[d];g===void 0&&(g=new d1(d),fv(t,g)),t=g}}}class cc{constructor(e,t){this.seq=[],this.map={};const o=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<o;++s){const l=e.getActiveUniform(t,s),c=e.getUniformLocation(t,l.name);f1(l,c,this)}}setValue(e,t,o,s){const l=this.map[t];l!==void 0&&l.setValue(e,o,s)}setOptional(e,t,o){const s=t[o];s!==void 0&&this.setValue(e,o,s)}static upload(e,t,o,s){for(let l=0,c=t.length;l!==c;++l){const d=t[l],f=o[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,s)}}static seqWithValue(e,t){const o=[];for(let s=0,l=e.length;s!==l;++s){const c=e[s];c.id in t&&o.push(c)}return o}}function hv(i,e,t){const o=i.createShader(e);return i.shaderSource(o,t),i.compileShader(o),o}const h1=37297;let p1=0;function m1(i,e){const t=i.split(`
`),o=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=s;c<l;c++){const d=c+1;o.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return o.join(`
`)}const pv=new dt;function g1(i){wt._getMatrix(pv,wt.workingColorSpace,i);const e=`mat3( ${pv.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(i)){case dc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function mv(i,e,t){const o=i.getShaderParameter(e,i.COMPILE_STATUS),l=(i.getShaderInfoLog(e)||"").trim();if(o&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+m1(i.getShaderSource(e),d)}else return l}function v1(i,e){const t=g1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _1(i,e){let t;switch(e){case lS:t="Linear";break;case cS:t="Reinhard";break;case uS:t="Cineon";break;case Xv:t="ACESFilmic";break;case fS:t="AgX";break;case hS:t="Neutral";break;case dS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jl=new ie;function x1(){wt.getLuminanceCoefficients(Jl);const i=Jl.x.toFixed(4),e=Jl.y.toFixed(4),t=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function S1(i){const e=[];for(const t in i){const o=i[t];o!==!1&&e.push("#define "+t+" "+o)}return e.join(`
`)}function M1(i,e){const t={},o=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<o;s++){const l=i.getActiveAttrib(e,s),c=l.name;let d=1;l.type===i.FLOAT_MAT2&&(d=2),l.type===i.FLOAT_MAT3&&(d=3),l.type===i.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:d}}return t}function ca(i){return i!==""}function gv(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vv(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vf(i){return i.replace(E1,T1)}const w1=new Map;function T1(i,e){let t=ft[e];if(t===void 0){const o=w1.get(e);if(o!==void 0)t=ft[o],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,o);else throw new Error("Can not resolve #include <"+e+">")}return Vf(t)}const A1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _v(i){return i.replace(A1,C1)}function C1(i,e,t,o){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=o.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function xv(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function b1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wv?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===jv?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function R1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fs:case hs:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function P1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:e="ENVMAP_MODE_REFRACTION";break}return e}function L1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lh:e="ENVMAP_BLENDING_MULTIPLY";break;case sS:e="ENVMAP_BLENDING_MIX";break;case aS:e="ENVMAP_BLENDING_ADD";break}return e}function D1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,o=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:o,maxMip:t}}function N1(i,e,t,o){const s=i.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const f=b1(t),h=R1(t),m=P1(t),g=L1(t),_=D1(t),S=y1(t),M=S1(l),E=s.createProgram();let y,v,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ca).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ca).join(`
`),v.length>0&&(v+=`
`)):(y=[xv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),v=[xv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lr?"#define TONE_MAPPING":"",t.toneMapping!==Lr?ft.tonemapping_pars_fragment:"",t.toneMapping!==Lr?_1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,v1("linearToOutputTexel",t.outputColorSpace),x1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),c=Vf(c),c=gv(c,t),c=vv(c,t),d=Vf(d),d=gv(d,t),d=vv(d,t),c=_v(c),d=_v(d),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===Pg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=L+y+c,T=L+v+d,U=hv(s,s.VERTEX_SHADER,b),I=hv(s,s.FRAGMENT_SHADER,T);s.attachShader(E,U),s.attachShader(E,I),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function N(k){if(i.debug.checkShaderErrors){const Z=s.getProgramInfoLog(E)||"",q=s.getShaderInfoLog(U)||"",ee=s.getShaderInfoLog(I)||"",de=Z.trim(),Q=q.trim(),ce=ee.trim();let B=!0,ue=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,U,I);else{const oe=mv(s,U,"vertex"),z=mv(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+de+`
`+oe+`
`+z)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(Q===""||ce==="")&&(ue=!1);ue&&(k.diagnostics={runnable:B,programLog:de,vertexShader:{log:Q,prefix:y},fragmentShader:{log:ce,prefix:v}})}s.deleteShader(U),s.deleteShader(I),H=new cc(s,E),D=M1(s,E)}let H;this.getUniforms=function(){return H===void 0&&N(this),H};let D;this.getAttributes=function(){return D===void 0&&N(this),D};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(E,h1)),P},this.destroy=function(){o.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=U,this.fragmentShader=I,this}let I1=0;class U1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,o=e.fragmentShader,s=this._getShaderStage(t),l=this._getShaderStage(o),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const o of t)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let o=t.get(e);return o===void 0&&(o=new Set,t.set(e,o)),o}_getShaderStage(e){const t=this.shaderCache;let o=t.get(e);return o===void 0&&(o=new F1(e),t.set(e,o)),o}}class F1{constructor(e){this.id=I1++,this.code=e,this.usedTimes=0}}function O1(i,e,t,o,s,l,c){const d=new s0,f=new U1,h=new Set,m=[],g=s.logarithmicDepthBuffer,_=s.vertexTextures;let S=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(D){return h.add(D),D===0?"uv":`uv${D}`}function y(D,P,k,Z,q){const ee=Z.fog,de=q.geometry,Q=D.isMeshStandardMaterial?Z.environment:null,ce=(D.isMeshStandardMaterial?t:e).get(D.envMap||Q),B=ce&&ce.mapping===Mc?ce.image.height:null,ue=M[D.type];D.precision!==null&&(S=s.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const oe=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,z=oe!==void 0?oe.length:0;let ae=0;de.morphAttributes.position!==void 0&&(ae=1),de.morphAttributes.normal!==void 0&&(ae=2),de.morphAttributes.color!==void 0&&(ae=3);let Be,ke,ne,ge;if(ue){const xt=Ti[ue];Be=xt.vertexShader,ke=xt.fragmentShader}else Be=D.vertexShader,ke=D.fragmentShader,f.update(D),ne=f.getVertexShaderID(D),ge=f.getFragmentShaderID(D);const pe=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Re=q.isInstancedMesh===!0,Ye=q.isBatchedMesh===!0,bt=!!D.map,ht=!!D.matcap,V=!!ce,St=!!D.aoMap,Je=!!D.lightMap,vt=!!D.bumpMap,$e=!!D.normalMap,Rt=!!D.displacementMap,Ie=!!D.emissiveMap,ct=!!D.metalnessMap,kt=!!D.roughnessMap,Bt=D.anisotropy>0,F=D.clearcoat>0,A=D.dispersion>0,J=D.iridescence>0,he=D.sheen>0,xe=D.transmission>0,fe=Bt&&!!D.anisotropyMap,Ke=F&&!!D.clearcoatMap,Ae=F&&!!D.clearcoatNormalMap,He=F&&!!D.clearcoatRoughnessMap,Ze=J&&!!D.iridescenceMap,we=J&&!!D.iridescenceThicknessMap,Ne=he&&!!D.sheenColorMap,rt=he&&!!D.sheenRoughnessMap,Xe=!!D.specularMap,Pe=!!D.specularColorMap,ut=!!D.specularIntensityMap,j=xe&&!!D.transmissionMap,Me=xe&&!!D.thicknessMap,Ce=!!D.gradientMap,Ue=!!D.alphaMap,Se=D.alphaTest>0,me=!!D.alphaHash,We=!!D.extensions;let lt=Lr;D.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(lt=i.toneMapping);const Pt={shaderID:ue,shaderType:D.type,shaderName:D.name,vertexShader:Be,fragmentShader:ke,defines:D.defines,customVertexShaderID:ne,customFragmentShaderID:ge,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Ye,batchingColor:Ye&&q._colorsTexture!==null,instancing:Re,instancingColor:Re&&q.instanceColor!==null,instancingMorph:Re&&q.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ps,alphaToCoverage:!!D.alphaToCoverage,map:bt,matcap:ht,envMap:V,envMapMode:V&&ce.mapping,envMapCubeUVHeight:B,aoMap:St,lightMap:Je,bumpMap:vt,normalMap:$e,displacementMap:_&&Rt,emissiveMap:Ie,normalMapObjectSpace:$e&&D.normalMapType===vS,normalMapTangentSpace:$e&&D.normalMapType===n0,metalnessMap:ct,roughnessMap:kt,anisotropy:Bt,anisotropyMap:fe,clearcoat:F,clearcoatMap:Ke,clearcoatNormalMap:Ae,clearcoatRoughnessMap:He,dispersion:A,iridescence:J,iridescenceMap:Ze,iridescenceThicknessMap:we,sheen:he,sheenColorMap:Ne,sheenRoughnessMap:rt,specularMap:Xe,specularColorMap:Pe,specularIntensityMap:ut,transmission:xe,transmissionMap:j,thicknessMap:Me,gradientMap:Ce,opaque:D.transparent===!1&&D.blending===as&&D.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Se,alphaHash:me,combine:D.combine,mapUv:bt&&E(D.map.channel),aoMapUv:St&&E(D.aoMap.channel),lightMapUv:Je&&E(D.lightMap.channel),bumpMapUv:vt&&E(D.bumpMap.channel),normalMapUv:$e&&E(D.normalMap.channel),displacementMapUv:Rt&&E(D.displacementMap.channel),emissiveMapUv:Ie&&E(D.emissiveMap.channel),metalnessMapUv:ct&&E(D.metalnessMap.channel),roughnessMapUv:kt&&E(D.roughnessMap.channel),anisotropyMapUv:fe&&E(D.anisotropyMap.channel),clearcoatMapUv:Ke&&E(D.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&E(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&E(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&E(D.iridescenceMap.channel),iridescenceThicknessMapUv:we&&E(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&E(D.sheenColorMap.channel),sheenRoughnessMapUv:rt&&E(D.sheenRoughnessMap.channel),specularMapUv:Xe&&E(D.specularMap.channel),specularColorMapUv:Pe&&E(D.specularColorMap.channel),specularIntensityMapUv:ut&&E(D.specularIntensityMap.channel),transmissionMapUv:j&&E(D.transmissionMap.channel),thicknessMapUv:Me&&E(D.thicknessMap.channel),alphaMapUv:Ue&&E(D.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&($e||Bt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!de.attributes.uv&&(bt||Ue),fog:!!ee,useFog:D.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:be,skinning:q.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ae,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:D.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,decodeVideoTexture:bt&&D.map.isVideoTexture===!0&&wt.getTransfer(D.map.colorSpace)===It,decodeVideoTextureEmissive:Ie&&D.emissiveMap.isVideoTexture===!0&&wt.getTransfer(D.emissiveMap.colorSpace)===It,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Zi,flipSided:D.side===On,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:We&&D.extensions.clipCullDistance===!0&&o.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&D.extensions.multiDraw===!0||Ye)&&o.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:o.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Pt.vertexUv1s=h.has(1),Pt.vertexUv2s=h.has(2),Pt.vertexUv3s=h.has(3),h.clear(),Pt}function v(D){const P=[];if(D.shaderID?P.push(D.shaderID):(P.push(D.customVertexShaderID),P.push(D.customFragmentShaderID)),D.defines!==void 0)for(const k in D.defines)P.push(k),P.push(D.defines[k]);return D.isRawShaderMaterial===!1&&(L(P,D),b(P,D),P.push(i.outputColorSpace)),P.push(D.customProgramCacheKey),P.join()}function L(D,P){D.push(P.precision),D.push(P.outputColorSpace),D.push(P.envMapMode),D.push(P.envMapCubeUVHeight),D.push(P.mapUv),D.push(P.alphaMapUv),D.push(P.lightMapUv),D.push(P.aoMapUv),D.push(P.bumpMapUv),D.push(P.normalMapUv),D.push(P.displacementMapUv),D.push(P.emissiveMapUv),D.push(P.metalnessMapUv),D.push(P.roughnessMapUv),D.push(P.anisotropyMapUv),D.push(P.clearcoatMapUv),D.push(P.clearcoatNormalMapUv),D.push(P.clearcoatRoughnessMapUv),D.push(P.iridescenceMapUv),D.push(P.iridescenceThicknessMapUv),D.push(P.sheenColorMapUv),D.push(P.sheenRoughnessMapUv),D.push(P.specularMapUv),D.push(P.specularColorMapUv),D.push(P.specularIntensityMapUv),D.push(P.transmissionMapUv),D.push(P.thicknessMapUv),D.push(P.combine),D.push(P.fogExp2),D.push(P.sizeAttenuation),D.push(P.morphTargetsCount),D.push(P.morphAttributeCount),D.push(P.numDirLights),D.push(P.numPointLights),D.push(P.numSpotLights),D.push(P.numSpotLightMaps),D.push(P.numHemiLights),D.push(P.numRectAreaLights),D.push(P.numDirLightShadows),D.push(P.numPointLightShadows),D.push(P.numSpotLightShadows),D.push(P.numSpotLightShadowsWithMaps),D.push(P.numLightProbes),D.push(P.shadowMapType),D.push(P.toneMapping),D.push(P.numClippingPlanes),D.push(P.numClipIntersection),D.push(P.depthPacking)}function b(D,P){d.disableAll(),P.supportsVertexTextures&&d.enable(0),P.instancing&&d.enable(1),P.instancingColor&&d.enable(2),P.instancingMorph&&d.enable(3),P.matcap&&d.enable(4),P.envMap&&d.enable(5),P.normalMapObjectSpace&&d.enable(6),P.normalMapTangentSpace&&d.enable(7),P.clearcoat&&d.enable(8),P.iridescence&&d.enable(9),P.alphaTest&&d.enable(10),P.vertexColors&&d.enable(11),P.vertexAlphas&&d.enable(12),P.vertexUv1s&&d.enable(13),P.vertexUv2s&&d.enable(14),P.vertexUv3s&&d.enable(15),P.vertexTangents&&d.enable(16),P.anisotropy&&d.enable(17),P.alphaHash&&d.enable(18),P.batching&&d.enable(19),P.dispersion&&d.enable(20),P.batchingColor&&d.enable(21),P.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),D.push(d.mask)}function T(D){const P=M[D.type];let k;if(P){const Z=Ti[P];k=lM.clone(Z.uniforms)}else k=D.uniforms;return k}function U(D,P){let k;for(let Z=0,q=m.length;Z<q;Z++){const ee=m[Z];if(ee.cacheKey===P){k=ee,++k.usedTimes;break}}return k===void 0&&(k=new N1(i,P,D,l),m.push(k)),k}function I(D){if(--D.usedTimes===0){const P=m.indexOf(D);m[P]=m[m.length-1],m.pop(),D.destroy()}}function N(D){f.remove(D)}function H(){f.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:T,acquireProgram:U,releaseProgram:I,releaseShaderCache:N,programs:m,dispose:H}}function k1(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let d=i.get(c);return d===void 0&&(d={},i.set(c,d)),d}function o(c){i.delete(c)}function s(c,d,f){i.get(c)[d]=f}function l(){i=new WeakMap}return{has:e,get:t,remove:o,update:s,dispose:l}}function B1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sv(){const i=[];let e=0;const t=[],o=[],s=[];function l(){e=0,t.length=0,o.length=0,s.length=0}function c(g,_,S,M,E,y){let v=i[e];return v===void 0?(v={id:g.id,object:g,geometry:_,material:S,groupOrder:M,renderOrder:g.renderOrder,z:E,group:y},i[e]=v):(v.id=g.id,v.object=g,v.geometry=_,v.material=S,v.groupOrder=M,v.renderOrder=g.renderOrder,v.z=E,v.group=y),e++,v}function d(g,_,S,M,E,y){const v=c(g,_,S,M,E,y);S.transmission>0?o.push(v):S.transparent===!0?s.push(v):t.push(v)}function f(g,_,S,M,E,y){const v=c(g,_,S,M,E,y);S.transmission>0?o.unshift(v):S.transparent===!0?s.unshift(v):t.unshift(v)}function h(g,_){t.length>1&&t.sort(g||B1),o.length>1&&o.sort(_||yv),s.length>1&&s.sort(_||yv)}function m(){for(let g=e,_=i.length;g<_;g++){const S=i[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:o,transparent:s,init:l,push:d,unshift:f,finish:m,sort:h}}function z1(){let i=new WeakMap;function e(o,s){const l=i.get(o);let c;return l===void 0?(c=new Sv,i.set(o,[c])):s>=l.length?(c=new Sv,l.push(c)):c=l[s],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function H1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Tt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return i[e.id]=t,t}}}function V1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let G1=0;function W1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function j1(i){const e=new H1,t=V1(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)o.probe.push(new ie);const s=new ie,l=new Zt,c=new Zt;function d(h){let m=0,g=0,_=0;for(let D=0;D<9;D++)o.probe[D].set(0,0,0);let S=0,M=0,E=0,y=0,v=0,L=0,b=0,T=0,U=0,I=0,N=0;h.sort(W1);for(let D=0,P=h.length;D<P;D++){const k=h[D],Z=k.color,q=k.intensity,ee=k.distance,de=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=Z.r*q,g+=Z.g*q,_+=Z.b*q;else if(k.isLightProbe){for(let Q=0;Q<9;Q++)o.probe[Q].addScaledVector(k.sh.coefficients[Q],q);N++}else if(k.isDirectionalLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ce=k.shadow,B=t.get(k);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,o.directionalShadow[S]=B,o.directionalShadowMap[S]=de,o.directionalShadowMatrix[S]=k.shadow.matrix,L++}o.directional[S]=Q,S++}else if(k.isSpotLight){const Q=e.get(k);Q.position.setFromMatrixPosition(k.matrixWorld),Q.color.copy(Z).multiplyScalar(q),Q.distance=ee,Q.coneCos=Math.cos(k.angle),Q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Q.decay=k.decay,o.spot[E]=Q;const ce=k.shadow;if(k.map&&(o.spotLightMap[U]=k.map,U++,ce.updateMatrices(k),k.castShadow&&I++),o.spotLightMatrix[E]=ce.matrix,k.castShadow){const B=t.get(k);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,o.spotShadow[E]=B,o.spotShadowMap[E]=de,T++}E++}else if(k.isRectAreaLight){const Q=e.get(k);Q.color.copy(Z).multiplyScalar(q),Q.halfWidth.set(k.width*.5,0,0),Q.halfHeight.set(0,k.height*.5,0),o.rectArea[y]=Q,y++}else if(k.isPointLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),Q.distance=k.distance,Q.decay=k.decay,k.castShadow){const ce=k.shadow,B=t.get(k);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,B.shadowCameraNear=ce.camera.near,B.shadowCameraFar=ce.camera.far,o.pointShadow[M]=B,o.pointShadowMap[M]=de,o.pointShadowMatrix[M]=k.shadow.matrix,b++}o.point[M]=Q,M++}else if(k.isHemisphereLight){const Q=e.get(k);Q.skyColor.copy(k.color).multiplyScalar(q),Q.groundColor.copy(k.groundColor).multiplyScalar(q),o.hemi[v]=Q,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=De.LTC_FLOAT_1,o.rectAreaLTC2=De.LTC_FLOAT_2):(o.rectAreaLTC1=De.LTC_HALF_1,o.rectAreaLTC2=De.LTC_HALF_2)),o.ambient[0]=m,o.ambient[1]=g,o.ambient[2]=_;const H=o.hash;(H.directionalLength!==S||H.pointLength!==M||H.spotLength!==E||H.rectAreaLength!==y||H.hemiLength!==v||H.numDirectionalShadows!==L||H.numPointShadows!==b||H.numSpotShadows!==T||H.numSpotMaps!==U||H.numLightProbes!==N)&&(o.directional.length=S,o.spot.length=E,o.rectArea.length=y,o.point.length=M,o.hemi.length=v,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=b,o.pointShadowMap.length=b,o.spotShadow.length=T,o.spotShadowMap.length=T,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=b,o.spotLightMatrix.length=T+U-I,o.spotLightMap.length=U,o.numSpotLightShadowsWithMaps=I,o.numLightProbes=N,H.directionalLength=S,H.pointLength=M,H.spotLength=E,H.rectAreaLength=y,H.hemiLength=v,H.numDirectionalShadows=L,H.numPointShadows=b,H.numSpotShadows=T,H.numSpotMaps=U,H.numLightProbes=N,o.version=G1++)}function f(h,m){let g=0,_=0,S=0,M=0,E=0;const y=m.matrixWorldInverse;for(let v=0,L=h.length;v<L;v++){const b=h[v];if(b.isDirectionalLight){const T=o.directional[g];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(y),g++}else if(b.isSpotLight){const T=o.spot[S];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(y),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const T=o.rectArea[M];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(y),c.identity(),l.copy(b.matrixWorld),l.premultiply(y),c.extractRotation(l),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),M++}else if(b.isPointLight){const T=o.point[_];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(y),_++}else if(b.isHemisphereLight){const T=o.hemi[E];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(y),E++}}}return{setup:d,setupView:f,state:o}}function Mv(i){const e=new j1(i),t=[],o=[];function s(m){h.camera=m,t.length=0,o.length=0}function l(m){t.push(m)}function c(m){o.push(m)}function d(){e.setup(t)}function f(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:o,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:c}}function X1(i){let e=new WeakMap;function t(s,l=0){const c=e.get(s);let d;return c===void 0?(d=new Mv(i),e.set(s,[d])):l>=c.length?(d=new Mv(i),c.push(d)):d=c[l],d}function o(){e=new WeakMap}return{get:t,dispose:o}}const Y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function q1(i,e,t){let o=new yh;const s=new At,l=new At,c=new Yt,d=new _M({depthPacking:gS}),f=new xM,h={},m=t.maxTextureSize,g={[Dr]:On,[On]:Dr,[Zi]:Zi},_=new Nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:Y1,fragmentShader:$1}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const M=new Ni;M.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Vt(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wv;let v=this.type;this.render=function(I,N,H){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const D=i.getRenderTarget(),P=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Pr),Z.buffers.depth.getReversed()?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const q=v!==Ki&&this.type===Ki,ee=v===Ki&&this.type!==Ki;for(let de=0,Q=I.length;de<Q;de++){const ce=I[de],B=ce.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ue=B.getFrameExtents();if(s.multiply(ue),l.copy(B.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/ue.x),s.x=l.x*ue.x,B.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/ue.y),s.y=l.y*ue.y,B.mapSize.y=l.y)),B.map===null||q===!0||ee===!0){const z=this.type!==Ki?{minFilter:vi,magFilter:vi}:{};B.map!==null&&B.map.dispose(),B.map=new mo(s.x,s.y,z),B.map.texture.name=ce.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const oe=B.getViewportCount();for(let z=0;z<oe;z++){const ae=B.getViewport(z);c.set(l.x*ae.x,l.y*ae.y,l.x*ae.z,l.y*ae.w),Z.viewport(c),B.updateMatrices(ce,z),o=B.getFrustum(),T(N,H,B.camera,ce,this.type)}B.isPointLightShadow!==!0&&this.type===Ki&&L(B,H),B.needsUpdate=!1}v=this.type,y.needsUpdate=!1,i.setRenderTarget(D,P,k)};function L(I,N){const H=e.update(E);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new mo(s.x,s.y)),_.uniforms.shadow_pass.value=I.map.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(N,null,H,_,E,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(N,null,H,S,E,null)}function b(I,N,H,D){let P=null;const k=H.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)P=k;else if(P=H.isPointLight===!0?f:d,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const Z=P.uuid,q=N.uuid;let ee=h[Z];ee===void 0&&(ee={},h[Z]=ee);let de=ee[q];de===void 0&&(de=P.clone(),ee[q]=de,N.addEventListener("dispose",U)),P=de}if(P.visible=N.visible,P.wireframe=N.wireframe,D===Ki?P.side=N.shadowSide!==null?N.shadowSide:N.side:P.side=N.shadowSide!==null?N.shadowSide:g[N.side],P.alphaMap=N.alphaMap,P.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,P.map=N.map,P.clipShadows=N.clipShadows,P.clippingPlanes=N.clippingPlanes,P.clipIntersection=N.clipIntersection,P.displacementMap=N.displacementMap,P.displacementScale=N.displacementScale,P.displacementBias=N.displacementBias,P.wireframeLinewidth=N.wireframeLinewidth,P.linewidth=N.linewidth,H.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const Z=i.properties.get(P);Z.light=H}return P}function T(I,N,H,D,P){if(I.visible===!1)return;if(I.layers.test(N.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&P===Ki)&&(!I.frustumCulled||o.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,I.matrixWorld);const q=e.update(I),ee=I.material;if(Array.isArray(ee)){const de=q.groups;for(let Q=0,ce=de.length;Q<ce;Q++){const B=de[Q],ue=ee[B.materialIndex];if(ue&&ue.visible){const oe=b(I,ue,D,P);I.onBeforeShadow(i,I,N,H,q,oe,B),i.renderBufferDirect(H,null,q,oe,I,B),I.onAfterShadow(i,I,N,H,q,oe,B)}}}else if(ee.visible){const de=b(I,ee,D,P);I.onBeforeShadow(i,I,N,H,q,de,null),i.renderBufferDirect(H,null,q,de,I,null),I.onAfterShadow(i,I,N,H,q,de,null)}}const Z=I.children;for(let q=0,ee=Z.length;q<ee;q++)T(Z[q],N,H,D,P)}function U(I){I.target.removeEventListener("dispose",U);for(const H in h){const D=h[H],P=I.target.uuid;P in D&&(D[P].dispose(),delete D[P])}}}const K1={[rf]:of,[sf]:cf,[af]:uf,[ds]:lf,[of]:rf,[cf]:sf,[uf]:af,[lf]:ds};function Z1(i,e){function t(){let j=!1;const Me=new Yt;let Ce=null;const Ue=new Yt(0,0,0,0);return{setMask:function(Se){Ce!==Se&&!j&&(i.colorMask(Se,Se,Se,Se),Ce=Se)},setLocked:function(Se){j=Se},setClear:function(Se,me,We,lt,Pt){Pt===!0&&(Se*=lt,me*=lt,We*=lt),Me.set(Se,me,We,lt),Ue.equals(Me)===!1&&(i.clearColor(Se,me,We,lt),Ue.copy(Me))},reset:function(){j=!1,Ce=null,Ue.set(-1,0,0,0)}}}function o(){let j=!1,Me=!1,Ce=null,Ue=null,Se=null;return{setReversed:function(me){if(Me!==me){const We=e.get("EXT_clip_control");me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Me=me;const lt=Se;Se=null,this.setClear(lt)}},getReversed:function(){return Me},setTest:function(me){me?pe(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(me){Ce!==me&&!j&&(i.depthMask(me),Ce=me)},setFunc:function(me){if(Me&&(me=K1[me]),Ue!==me){switch(me){case rf:i.depthFunc(i.NEVER);break;case of:i.depthFunc(i.ALWAYS);break;case sf:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case af:i.depthFunc(i.EQUAL);break;case lf:i.depthFunc(i.GEQUAL);break;case cf:i.depthFunc(i.GREATER);break;case uf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=me}},setLocked:function(me){j=me},setClear:function(me){Se!==me&&(Me&&(me=1-me),i.clearDepth(me),Se=me)},reset:function(){j=!1,Ce=null,Ue=null,Se=null,Me=!1}}}function s(){let j=!1,Me=null,Ce=null,Ue=null,Se=null,me=null,We=null,lt=null,Pt=null;return{setTest:function(xt){j||(xt?pe(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(xt){Me!==xt&&!j&&(i.stencilMask(xt),Me=xt)},setFunc:function(xt,qn,hn){(Ce!==xt||Ue!==qn||Se!==hn)&&(i.stencilFunc(xt,qn,hn),Ce=xt,Ue=qn,Se=hn)},setOp:function(xt,qn,hn){(me!==xt||We!==qn||lt!==hn)&&(i.stencilOp(xt,qn,hn),me=xt,We=qn,lt=hn)},setLocked:function(xt){j=xt},setClear:function(xt){Pt!==xt&&(i.clearStencil(xt),Pt=xt)},reset:function(){j=!1,Me=null,Ce=null,Ue=null,Se=null,me=null,We=null,lt=null,Pt=null}}}const l=new t,c=new o,d=new s,f=new WeakMap,h=new WeakMap;let m={},g={},_=new WeakMap,S=[],M=null,E=!1,y=null,v=null,L=null,b=null,T=null,U=null,I=null,N=new Tt(0,0,0),H=0,D=!1,P=null,k=null,Z=null,q=null,ee=null;const de=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ce=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(B)[1]),Q=ce>=1):B.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Q=ce>=2);let ue=null,oe={};const z=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),Be=new Yt().fromArray(z),ke=new Yt().fromArray(ae);function ne(j,Me,Ce,Ue){const Se=new Uint8Array(4),me=i.createTexture();i.bindTexture(j,me),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<Ce;We++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(Me+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return me}const ge={};ge[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),pe(i.DEPTH_TEST),c.setFunc(ds),vt(!1),$e(wg),pe(i.CULL_FACE),St(Pr);function pe(j){m[j]!==!0&&(i.enable(j),m[j]=!0)}function be(j){m[j]!==!1&&(i.disable(j),m[j]=!1)}function Re(j,Me){return g[j]!==Me?(i.bindFramebuffer(j,Me),g[j]=Me,j===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Me),j===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function Ye(j,Me){let Ce=S,Ue=!1;if(j){Ce=_.get(Me),Ce===void 0&&(Ce=[],_.set(Me,Ce));const Se=j.textures;if(Ce.length!==Se.length||Ce[0]!==i.COLOR_ATTACHMENT0){for(let me=0,We=Se.length;me<We;me++)Ce[me]=i.COLOR_ATTACHMENT0+me;Ce.length=Se.length,Ue=!0}}else Ce[0]!==i.BACK&&(Ce[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(Ce)}function bt(j){return M!==j?(i.useProgram(j),M=j,!0):!1}const ht={[co]:i.FUNC_ADD,[Gy]:i.FUNC_SUBTRACT,[Wy]:i.FUNC_REVERSE_SUBTRACT};ht[jy]=i.MIN,ht[Xy]=i.MAX;const V={[Yy]:i.ZERO,[$y]:i.ONE,[qy]:i.SRC_COLOR,[tf]:i.SRC_ALPHA,[tS]:i.SRC_ALPHA_SATURATE,[Jy]:i.DST_COLOR,[Zy]:i.DST_ALPHA,[Ky]:i.ONE_MINUS_SRC_COLOR,[nf]:i.ONE_MINUS_SRC_ALPHA,[eS]:i.ONE_MINUS_DST_COLOR,[Qy]:i.ONE_MINUS_DST_ALPHA,[nS]:i.CONSTANT_COLOR,[iS]:i.ONE_MINUS_CONSTANT_COLOR,[rS]:i.CONSTANT_ALPHA,[oS]:i.ONE_MINUS_CONSTANT_ALPHA};function St(j,Me,Ce,Ue,Se,me,We,lt,Pt,xt){if(j===Pr){E===!0&&(be(i.BLEND),E=!1);return}if(E===!1&&(pe(i.BLEND),E=!0),j!==Vy){if(j!==y||xt!==D){if((v!==co||T!==co)&&(i.blendEquation(i.FUNC_ADD),v=co,T=co),xt)switch(j){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tg:i.blendFunc(i.ONE,i.ONE);break;case Ag:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cg:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tg:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ag:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}L=null,b=null,U=null,I=null,N.set(0,0,0),H=0,y=j,D=xt}return}Se=Se||Me,me=me||Ce,We=We||Ue,(Me!==v||Se!==T)&&(i.blendEquationSeparate(ht[Me],ht[Se]),v=Me,T=Se),(Ce!==L||Ue!==b||me!==U||We!==I)&&(i.blendFuncSeparate(V[Ce],V[Ue],V[me],V[We]),L=Ce,b=Ue,U=me,I=We),(lt.equals(N)===!1||Pt!==H)&&(i.blendColor(lt.r,lt.g,lt.b,Pt),N.copy(lt),H=Pt),y=j,D=!1}function Je(j,Me){j.side===Zi?be(i.CULL_FACE):pe(i.CULL_FACE);let Ce=j.side===On;Me&&(Ce=!Ce),vt(Ce),j.blending===as&&j.transparent===!1?St(Pr):St(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),l.setMask(j.colorWrite);const Ue=j.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Ie(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(j){P!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),P=j)}function $e(j){j!==zy?(pe(i.CULL_FACE),j!==k&&(j===wg?i.cullFace(i.BACK):j===Hy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),k=j}function Rt(j){j!==Z&&(Q&&i.lineWidth(j),Z=j)}function Ie(j,Me,Ce){j?(pe(i.POLYGON_OFFSET_FILL),(q!==Me||ee!==Ce)&&(i.polygonOffset(Me,Ce),q=Me,ee=Ce)):be(i.POLYGON_OFFSET_FILL)}function ct(j){j?pe(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function kt(j){j===void 0&&(j=i.TEXTURE0+de-1),ue!==j&&(i.activeTexture(j),ue=j)}function Bt(j,Me,Ce){Ce===void 0&&(ue===null?Ce=i.TEXTURE0+de-1:Ce=ue);let Ue=oe[Ce];Ue===void 0&&(Ue={type:void 0,texture:void 0},oe[Ce]=Ue),(Ue.type!==j||Ue.texture!==Me)&&(ue!==Ce&&(i.activeTexture(Ce),ue=Ce),i.bindTexture(j,Me||ge[j]),Ue.type=j,Ue.texture=Me)}function F(){const j=oe[ue];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function A(){try{i.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function he(){try{i.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xe(){try{i.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{i.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ke(){try{i.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{i.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function He(){try{i.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ze(){try{i.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{i.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ne(j){Be.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),Be.copy(j))}function rt(j){ke.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),ke.copy(j))}function Xe(j,Me){let Ce=h.get(Me);Ce===void 0&&(Ce=new WeakMap,h.set(Me,Ce));let Ue=Ce.get(j);Ue===void 0&&(Ue=i.getUniformBlockIndex(Me,j.name),Ce.set(j,Ue))}function Pe(j,Me){const Ue=h.get(Me).get(j);f.get(Me)!==Ue&&(i.uniformBlockBinding(Me,Ue,j.__bindingPointIndex),f.set(Me,Ue))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},ue=null,oe={},g={},_=new WeakMap,S=[],M=null,E=!1,y=null,v=null,L=null,b=null,T=null,U=null,I=null,N=new Tt(0,0,0),H=0,D=!1,P=null,k=null,Z=null,q=null,ee=null,Be.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:pe,disable:be,bindFramebuffer:Re,drawBuffers:Ye,useProgram:bt,setBlending:St,setMaterial:Je,setFlipSided:vt,setCullFace:$e,setLineWidth:Rt,setPolygonOffset:Ie,setScissorTest:ct,activeTexture:kt,bindTexture:Bt,unbindTexture:F,compressedTexImage2D:A,compressedTexImage3D:J,texImage2D:Ze,texImage3D:we,updateUBOMapping:Xe,uniformBlockBinding:Pe,texStorage2D:Ae,texStorage3D:He,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ke,scissor:Ne,viewport:rt,reset:ut}}function Q1(i,e,t,o,s,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new At,m=new WeakMap;let g;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,A){return S?new OffscreenCanvas(F,A):hc("canvas")}function E(F,A,J){let he=1;const xe=Bt(F);if((xe.width>J||xe.height>J)&&(he=J/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const fe=Math.floor(he*xe.width),Ke=Math.floor(he*xe.height);g===void 0&&(g=M(fe,Ke));const Ae=A?M(fe,Ke):g;return Ae.width=fe,Ae.height=Ke,Ae.getContext("2d").drawImage(F,0,0,fe,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+fe+"x"+Ke+")."),Ae}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),F;return F}function y(F){return F.generateMipmaps}function v(F){i.generateMipmap(F)}function L(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(F,A,J,he,xe=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let fe=A;if(A===i.RED&&(J===i.FLOAT&&(fe=i.R32F),J===i.HALF_FLOAT&&(fe=i.R16F),J===i.UNSIGNED_BYTE&&(fe=i.R8)),A===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(fe=i.R8UI),J===i.UNSIGNED_SHORT&&(fe=i.R16UI),J===i.UNSIGNED_INT&&(fe=i.R32UI),J===i.BYTE&&(fe=i.R8I),J===i.SHORT&&(fe=i.R16I),J===i.INT&&(fe=i.R32I)),A===i.RG&&(J===i.FLOAT&&(fe=i.RG32F),J===i.HALF_FLOAT&&(fe=i.RG16F),J===i.UNSIGNED_BYTE&&(fe=i.RG8)),A===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(fe=i.RG8UI),J===i.UNSIGNED_SHORT&&(fe=i.RG16UI),J===i.UNSIGNED_INT&&(fe=i.RG32UI),J===i.BYTE&&(fe=i.RG8I),J===i.SHORT&&(fe=i.RG16I),J===i.INT&&(fe=i.RG32I)),A===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(fe=i.RGB8UI),J===i.UNSIGNED_SHORT&&(fe=i.RGB16UI),J===i.UNSIGNED_INT&&(fe=i.RGB32UI),J===i.BYTE&&(fe=i.RGB8I),J===i.SHORT&&(fe=i.RGB16I),J===i.INT&&(fe=i.RGB32I)),A===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(fe=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(fe=i.RGBA16UI),J===i.UNSIGNED_INT&&(fe=i.RGBA32UI),J===i.BYTE&&(fe=i.RGBA8I),J===i.SHORT&&(fe=i.RGBA16I),J===i.INT&&(fe=i.RGBA32I)),A===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(fe=i.RGB9_E5),A===i.RGBA){const Ke=xe?dc:wt.getTransfer(he);J===i.FLOAT&&(fe=i.RGBA32F),J===i.HALF_FLOAT&&(fe=i.RGBA16F),J===i.UNSIGNED_BYTE&&(fe=Ke===It?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)}return(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function T(F,A){let J;return F?A===null||A===po||A===ha?J=i.DEPTH24_STENCIL8:A===Qi?J=i.DEPTH32F_STENCIL8:A===fa&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===po||A===ha?J=i.DEPTH_COMPONENT24:A===Qi?J=i.DEPTH_COMPONENT32F:A===fa&&(J=i.DEPTH_COMPONENT16),J}function U(F,A){return y(F)===!0||F.isFramebufferTexture&&F.minFilter!==vi&&F.minFilter!==Ai?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function I(F){const A=F.target;A.removeEventListener("dispose",I),H(A),A.isVideoTexture&&m.delete(A)}function N(F){const A=F.target;A.removeEventListener("dispose",N),P(A)}function H(F){const A=o.get(F);if(A.__webglInit===void 0)return;const J=F.source,he=_.get(J);if(he){const xe=he[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&D(F),Object.keys(he).length===0&&_.delete(J)}o.remove(F)}function D(F){const A=o.get(F);i.deleteTexture(A.__webglTexture);const J=F.source,he=_.get(J);delete he[A.__cacheKey],c.memory.textures--}function P(F){const A=o.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),o.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(A.__webglFramebuffer[he]))for(let xe=0;xe<A.__webglFramebuffer[he].length;xe++)i.deleteFramebuffer(A.__webglFramebuffer[he][xe]);else i.deleteFramebuffer(A.__webglFramebuffer[he]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[he])}else{if(Array.isArray(A.__webglFramebuffer))for(let he=0;he<A.__webglFramebuffer.length;he++)i.deleteFramebuffer(A.__webglFramebuffer[he]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let he=0;he<A.__webglColorRenderbuffer.length;he++)A.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[he]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=F.textures;for(let he=0,xe=J.length;he<xe;he++){const fe=o.get(J[he]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),c.memory.textures--),o.remove(J[he])}o.remove(F)}let k=0;function Z(){k=0}function q(){const F=k;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),k+=1,F}function ee(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function de(F,A){const J=o.get(F);if(F.isVideoTexture&&ct(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&J.__version!==F.version){const he=F.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(J,F,A);return}}else F.isExternalTexture&&(J.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+A)}function Q(F,A){const J=o.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){ge(J,F,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+A)}function ce(F,A){const J=o.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){ge(J,F,A);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+A)}function B(F,A){const J=o.get(F);if(F.version>0&&J.__version!==F.version){pe(J,F,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+A)}const ue={[hf]:i.REPEAT,[fo]:i.CLAMP_TO_EDGE,[pf]:i.MIRRORED_REPEAT},oe={[vi]:i.NEAREST,[pS]:i.NEAREST_MIPMAP_NEAREST,[Nl]:i.NEAREST_MIPMAP_LINEAR,[Ai]:i.LINEAR,[xd]:i.LINEAR_MIPMAP_NEAREST,[ho]:i.LINEAR_MIPMAP_LINEAR},z={[_S]:i.NEVER,[wS]:i.ALWAYS,[xS]:i.LESS,[i0]:i.LEQUAL,[yS]:i.EQUAL,[ES]:i.GEQUAL,[SS]:i.GREATER,[MS]:i.NOTEQUAL};function ae(F,A){if(A.type===Qi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ai||A.magFilter===xd||A.magFilter===Nl||A.magFilter===ho||A.minFilter===Ai||A.minFilter===xd||A.minFilter===Nl||A.minFilter===ho)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,ue[A.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,ue[A.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,ue[A.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,oe[A.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,oe[A.minFilter]),A.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,z[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===vi||A.minFilter!==Nl&&A.minFilter!==ho||A.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||o.get(A).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),o.get(A).__currentAnisotropy=A.anisotropy}}}function Be(F,A){let J=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",I));const he=A.source;let xe=_.get(he);xe===void 0&&(xe={},_.set(he,xe));const fe=ee(A);if(fe!==F.__cacheKey){xe[fe]===void 0&&(xe[fe]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,J=!0),xe[fe].usedTimes++;const Ke=xe[F.__cacheKey];Ke!==void 0&&(xe[F.__cacheKey].usedTimes--,Ke.usedTimes===0&&D(A)),F.__cacheKey=fe,F.__webglTexture=xe[fe].texture}return J}function ke(F,A,J){return Math.floor(Math.floor(F/J)/A)}function ne(F,A,J,he){const fe=F.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,J,he,A.data);else{fe.sort((we,Ne)=>we.start-Ne.start);let Ke=0;for(let we=1;we<fe.length;we++){const Ne=fe[Ke],rt=fe[we],Xe=Ne.start+Ne.count,Pe=ke(rt.start,A.width,4),ut=ke(Ne.start,A.width,4);rt.start<=Xe+1&&Pe===ut&&ke(rt.start+rt.count-1,A.width,4)===Pe?Ne.count=Math.max(Ne.count,rt.start+rt.count-Ne.start):(++Ke,fe[Ke]=rt)}fe.length=Ke+1;const Ae=i.getParameter(i.UNPACK_ROW_LENGTH),He=i.getParameter(i.UNPACK_SKIP_PIXELS),Ze=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let we=0,Ne=fe.length;we<Ne;we++){const rt=fe[we],Xe=Math.floor(rt.start/4),Pe=Math.ceil(rt.count/4),ut=Xe%A.width,j=Math.floor(Xe/A.width),Me=Pe,Ce=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),i.pixelStorei(i.UNPACK_SKIP_ROWS,j),t.texSubImage2D(i.TEXTURE_2D,0,ut,j,Me,Ce,J,he,A.data)}F.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,He),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ze)}}function ge(F,A,J){let he=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(he=i.TEXTURE_3D);const xe=Be(F,A),fe=A.source;t.bindTexture(he,F.__webglTexture,i.TEXTURE0+J);const Ke=o.get(fe);if(fe.version!==Ke.__version||xe===!0){t.activeTexture(i.TEXTURE0+J);const Ae=wt.getPrimaries(wt.workingColorSpace),He=A.colorSpace===Rr?null:wt.getPrimaries(A.colorSpace),Ze=A.colorSpace===Rr||Ae===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let we=E(A.image,!1,s.maxTextureSize);we=kt(A,we);const Ne=l.convert(A.format,A.colorSpace),rt=l.convert(A.type);let Xe=b(A.internalFormat,Ne,rt,A.colorSpace,A.isVideoTexture);ae(he,A);let Pe;const ut=A.mipmaps,j=A.isVideoTexture!==!0,Me=Ke.__version===void 0||xe===!0,Ce=fe.dataReady,Ue=U(A,we);if(A.isDepthTexture)Xe=T(A.format===ma,A.type),Me&&(j?t.texStorage2D(i.TEXTURE_2D,1,Xe,we.width,we.height):t.texImage2D(i.TEXTURE_2D,0,Xe,we.width,we.height,0,Ne,rt,null));else if(A.isDataTexture)if(ut.length>0){j&&Me&&t.texStorage2D(i.TEXTURE_2D,Ue,Xe,ut[0].width,ut[0].height);for(let Se=0,me=ut.length;Se<me;Se++)Pe=ut[Se],j?Ce&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Ne,rt,Pe.data):t.texImage2D(i.TEXTURE_2D,Se,Xe,Pe.width,Pe.height,0,Ne,rt,Pe.data);A.generateMipmaps=!1}else j?(Me&&t.texStorage2D(i.TEXTURE_2D,Ue,Xe,we.width,we.height),Ce&&ne(A,we,Ne,rt)):t.texImage2D(i.TEXTURE_2D,0,Xe,we.width,we.height,0,Ne,rt,we.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){j&&Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Xe,ut[0].width,ut[0].height,we.depth);for(let Se=0,me=ut.length;Se<me;Se++)if(Pe=ut[Se],A.format!==gi)if(Ne!==null)if(j){if(Ce)if(A.layerUpdates.size>0){const We=Qg(Pe.width,Pe.height,A.format,A.type);for(const lt of A.layerUpdates){const Pt=Pe.data.subarray(lt*We/Pe.data.BYTES_PER_ELEMENT,(lt+1)*We/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,lt,Pe.width,Pe.height,1,Ne,Pt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,we.depth,Ne,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Se,Xe,Pe.width,Pe.height,we.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,we.depth,Ne,rt,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Se,Xe,Pe.width,Pe.height,we.depth,0,Ne,rt,Pe.data)}else{j&&Me&&t.texStorage2D(i.TEXTURE_2D,Ue,Xe,ut[0].width,ut[0].height);for(let Se=0,me=ut.length;Se<me;Se++)Pe=ut[Se],A.format!==gi?Ne!==null?j?Ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Ne,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,Se,Xe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ce&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Ne,rt,Pe.data):t.texImage2D(i.TEXTURE_2D,Se,Xe,Pe.width,Pe.height,0,Ne,rt,Pe.data)}else if(A.isDataArrayTexture)if(j){if(Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Xe,we.width,we.height,we.depth),Ce)if(A.layerUpdates.size>0){const Se=Qg(we.width,we.height,A.format,A.type);for(const me of A.layerUpdates){const We=we.data.subarray(me*Se/we.data.BYTES_PER_ELEMENT,(me+1)*Se/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,we.width,we.height,1,Ne,rt,We)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ne,rt,we.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Xe,we.width,we.height,we.depth,0,Ne,rt,we.data);else if(A.isData3DTexture)j?(Me&&t.texStorage3D(i.TEXTURE_3D,Ue,Xe,we.width,we.height,we.depth),Ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ne,rt,we.data)):t.texImage3D(i.TEXTURE_3D,0,Xe,we.width,we.height,we.depth,0,Ne,rt,we.data);else if(A.isFramebufferTexture){if(Me)if(j)t.texStorage2D(i.TEXTURE_2D,Ue,Xe,we.width,we.height);else{let Se=we.width,me=we.height;for(let We=0;We<Ue;We++)t.texImage2D(i.TEXTURE_2D,We,Xe,Se,me,0,Ne,rt,null),Se>>=1,me>>=1}}else if(ut.length>0){if(j&&Me){const Se=Bt(ut[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Xe,Se.width,Se.height)}for(let Se=0,me=ut.length;Se<me;Se++)Pe=ut[Se],j?Ce&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Ne,rt,Pe):t.texImage2D(i.TEXTURE_2D,Se,Xe,Ne,rt,Pe);A.generateMipmaps=!1}else if(j){if(Me){const Se=Bt(we);t.texStorage2D(i.TEXTURE_2D,Ue,Xe,Se.width,Se.height)}Ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ne,rt,we)}else t.texImage2D(i.TEXTURE_2D,0,Xe,Ne,rt,we);y(A)&&v(he),Ke.__version=fe.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function pe(F,A,J){if(A.image.length!==6)return;const he=Be(F,A),xe=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+J);const fe=o.get(xe);if(xe.version!==fe.__version||he===!0){t.activeTexture(i.TEXTURE0+J);const Ke=wt.getPrimaries(wt.workingColorSpace),Ae=A.colorSpace===Rr?null:wt.getPrimaries(A.colorSpace),He=A.colorSpace===Rr||Ke===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Ze=A.isCompressedTexture||A.image[0].isCompressedTexture,we=A.image[0]&&A.image[0].isDataTexture,Ne=[];for(let me=0;me<6;me++)!Ze&&!we?Ne[me]=E(A.image[me],!0,s.maxCubemapSize):Ne[me]=we?A.image[me].image:A.image[me],Ne[me]=kt(A,Ne[me]);const rt=Ne[0],Xe=l.convert(A.format,A.colorSpace),Pe=l.convert(A.type),ut=b(A.internalFormat,Xe,Pe,A.colorSpace),j=A.isVideoTexture!==!0,Me=fe.__version===void 0||he===!0,Ce=xe.dataReady;let Ue=U(A,rt);ae(i.TEXTURE_CUBE_MAP,A);let Se;if(Ze){j&&Me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,ut,rt.width,rt.height);for(let me=0;me<6;me++){Se=Ne[me].mipmaps;for(let We=0;We<Se.length;We++){const lt=Se[We];A.format!==gi?Xe!==null?j?Ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,We,0,0,lt.width,lt.height,Xe,lt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,We,ut,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,We,0,0,lt.width,lt.height,Xe,Pe,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,We,ut,lt.width,lt.height,0,Xe,Pe,lt.data)}}}else{if(Se=A.mipmaps,j&&Me){Se.length>0&&Ue++;const me=Bt(Ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,ut,me.width,me.height)}for(let me=0;me<6;me++)if(we){j?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ne[me].width,Ne[me].height,Xe,Pe,Ne[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,Ne[me].width,Ne[me].height,0,Xe,Pe,Ne[me].data);for(let We=0;We<Se.length;We++){const Pt=Se[We].image[me].image;j?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,We+1,0,0,Pt.width,Pt.height,Xe,Pe,Pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,We+1,ut,Pt.width,Pt.height,0,Xe,Pe,Pt.data)}}else{j?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Xe,Pe,Ne[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,Xe,Pe,Ne[me]);for(let We=0;We<Se.length;We++){const lt=Se[We];j?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,We+1,0,0,Xe,Pe,lt.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,We+1,ut,Xe,Pe,lt.image[me])}}}y(A)&&v(i.TEXTURE_CUBE_MAP),fe.__version=xe.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function be(F,A,J,he,xe,fe){const Ke=l.convert(J.format,J.colorSpace),Ae=l.convert(J.type),He=b(J.internalFormat,Ke,Ae,J.colorSpace),Ze=o.get(A),we=o.get(J);if(we.__renderTarget=A,!Ze.__hasExternalTextures){const Ne=Math.max(1,A.width>>fe),rt=Math.max(1,A.height>>fe);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,fe,He,Ne,rt,A.depth,0,Ke,Ae,null):t.texImage2D(xe,fe,He,Ne,rt,0,Ke,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),Ie(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,xe,we.__webglTexture,0,Rt(A)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,xe,we.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(F,A,J){if(i.bindRenderbuffer(i.RENDERBUFFER,F),A.depthBuffer){const he=A.depthTexture,xe=he&&he.isDepthTexture?he.type:null,fe=T(A.stencilBuffer,xe),Ke=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=Rt(A);Ie(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,fe,A.width,A.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,fe,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,fe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ke,i.RENDERBUFFER,F)}else{const he=A.textures;for(let xe=0;xe<he.length;xe++){const fe=he[xe],Ke=l.convert(fe.format,fe.colorSpace),Ae=l.convert(fe.type),He=b(fe.internalFormat,Ke,Ae,fe.colorSpace),Ze=Rt(A);J&&Ie(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,He,A.width,A.height):Ie(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,He,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,He,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ye(F,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=o.get(A.depthTexture);he.__renderTarget=A,(!he.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),de(A.depthTexture,0);const xe=he.__webglTexture,fe=Rt(A);if(A.depthTexture.format===pa)Ie(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(A.depthTexture.format===ma)Ie(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function bt(F){const A=o.get(F),J=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const he=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),he){const xe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),A.__depthDisposeCallback=xe}A.__boundDepthTexture=he}if(F.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const he=F.texture.mipmaps;he&&he.length>0?Ye(A.__webglFramebuffer[0],F):Ye(A.__webglFramebuffer,F)}else if(J){A.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[he]),A.__webglDepthbuffer[he]===void 0)A.__webglDepthbuffer[he]=i.createRenderbuffer(),Re(A.__webglDepthbuffer[he],F,!1);else{const xe=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,fe)}}else{const he=F.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Re(A.__webglDepthbuffer,F,!1);else{const xe=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(F,A,J){const he=o.get(F);A!==void 0&&be(he.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&bt(F)}function V(F){const A=F.texture,J=o.get(F),he=o.get(A);F.addEventListener("dispose",N);const xe=F.textures,fe=F.isWebGLCubeRenderTarget===!0,Ke=xe.length>1;if(Ke||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=A.version,c.memory.textures++),fe){J.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[Ae]=[];for(let He=0;He<A.mipmaps.length;He++)J.__webglFramebuffer[Ae][He]=i.createFramebuffer()}else J.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)J.__webglFramebuffer[Ae]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Ke)for(let Ae=0,He=xe.length;Ae<He;Ae++){const Ze=o.get(xe[Ae]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),c.memory.textures++)}if(F.samples>0&&Ie(F)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ae=0;Ae<xe.length;Ae++){const He=xe[Ae];J.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Ae]);const Ze=l.convert(He.format,He.colorSpace),we=l.convert(He.type),Ne=b(He.internalFormat,Ze,we,He.colorSpace,F.isXRRenderTarget===!0),rt=Rt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Ne,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,J.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(J.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),ae(i.TEXTURE_CUBE_MAP,A);for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0)for(let He=0;He<A.mipmaps.length;He++)be(J.__webglFramebuffer[Ae][He],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,He);else be(J.__webglFramebuffer[Ae],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(A)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Ae=0,He=xe.length;Ae<He;Ae++){const Ze=xe[Ae],we=o.get(Ze);let Ne=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ne=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ne,we.__webglTexture),ae(Ne,Ze),be(J.__webglFramebuffer,F,Ze,i.COLOR_ATTACHMENT0+Ae,Ne,0),y(Ze)&&v(Ne)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ae=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,he.__webglTexture),ae(Ae,A),A.mipmaps&&A.mipmaps.length>0)for(let He=0;He<A.mipmaps.length;He++)be(J.__webglFramebuffer[He],F,A,i.COLOR_ATTACHMENT0,Ae,He);else be(J.__webglFramebuffer,F,A,i.COLOR_ATTACHMENT0,Ae,0);y(A)&&v(Ae),t.unbindTexture()}F.depthBuffer&&bt(F)}function St(F){const A=F.textures;for(let J=0,he=A.length;J<he;J++){const xe=A[J];if(y(xe)){const fe=L(F),Ke=o.get(xe).__webglTexture;t.bindTexture(fe,Ke),v(fe),t.unbindTexture()}}}const Je=[],vt=[];function $e(F){if(F.samples>0){if(Ie(F)===!1){const A=F.textures,J=F.width,he=F.height;let xe=i.COLOR_BUFFER_BIT;const fe=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ke=o.get(F),Ae=A.length>1;if(Ae)for(let Ze=0;Ze<A.length;Ze++)t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const He=F.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Ze=0;Ze<A.length;Ze++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),Ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ze]);const we=o.get(A[Ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,J,he,0,0,J,he,xe,i.NEAREST),f===!0&&(Je.length=0,vt.length=0,Je.push(i.COLOR_ATTACHMENT0+Ze),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Je.push(fe),vt.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Ze=0;Ze<A.length;Ze++){t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ze]);const we=o.get(A[Ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&f){const A=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Rt(F){return Math.min(s.maxSamples,F.samples)}function Ie(F){const A=o.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ct(F){const A=c.render.frame;m.get(F)!==A&&(m.set(F,A),F.update())}function kt(F,A){const J=F.colorSpace,he=F.format,xe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||J!==ps&&J!==Rr&&(wt.getTransfer(J)===It?(he!==gi||xe!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}function Bt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=Z,this.setTexture2D=de,this.setTexture2DArray=Q,this.setTexture3D=ce,this.setTextureCube=B,this.rebindTextures=ht,this.setupRenderTarget=V,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ie}function J1(i,e){function t(o,s=Rr){let l;const c=wt.getTransfer(s);if(o===Li)return i.UNSIGNED_BYTE;if(o===uh)return i.UNSIGNED_SHORT_4_4_4_4;if(o===dh)return i.UNSIGNED_SHORT_5_5_5_1;if(o===Kv)return i.UNSIGNED_INT_5_9_9_9_REV;if(o===$v)return i.BYTE;if(o===qv)return i.SHORT;if(o===fa)return i.UNSIGNED_SHORT;if(o===ch)return i.INT;if(o===po)return i.UNSIGNED_INT;if(o===Qi)return i.FLOAT;if(o===_a)return i.HALF_FLOAT;if(o===Zv)return i.ALPHA;if(o===Qv)return i.RGB;if(o===gi)return i.RGBA;if(o===pa)return i.DEPTH_COMPONENT;if(o===ma)return i.DEPTH_STENCIL;if(o===Jv)return i.RED;if(o===fh)return i.RED_INTEGER;if(o===e0)return i.RG;if(o===hh)return i.RG_INTEGER;if(o===ph)return i.RGBA_INTEGER;if(o===rc||o===oc||o===sc||o===ac)if(c===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(o===rc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===sc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===ac)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(o===rc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===oc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===sc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===ac)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===mf||o===gf||o===vf||o===_f)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(o===mf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===gf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===vf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===_f)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===xf||o===yf||o===Sf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(o===xf||o===yf)return c===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(o===Sf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Mf||o===Ef||o===wf||o===Tf||o===Af||o===Cf||o===bf||o===Rf||o===Pf||o===Lf||o===Df||o===Nf||o===If||o===Uf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(o===Mf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Ef)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===wf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Tf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Af)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Cf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===bf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Rf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Pf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Lf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Df)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Nf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===If)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Uf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===lc||o===Ff||o===Of)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(o===lc)return c===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Ff)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Of)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===t0||o===kf||o===Bf||o===zf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(o===lc)return l.COMPRESSED_RED_RGTC1_EXT;if(o===kf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Bf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===zf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===ha?i.UNSIGNED_INT_24_8:i[o]!==void 0?i[o]:null}return{convert:t}}class y0 extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const eA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const o=new y0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,o=new Nr({vertexShader:eA,fragmentShader:tA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new go(20,20),o)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iA extends xs{constructor(e,t){super();const o=this;let s=null,l=1,c=null,d="local-floor",f=1,h=null,m=null,g=null,_=null,S=null,M=null;const E=new nA,y={},v=t.getContextAttributes();let L=null,b=null;const T=[],U=[],I=new At;let N=null;const H=new Xn;H.viewport=new Yt;const D=new Xn;D.viewport=new Yt;const P=[H,D],k=new wM;let Z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ge=T[ne];return ge===void 0&&(ge=new zd,T[ne]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ne){let ge=T[ne];return ge===void 0&&(ge=new zd,T[ne]=ge),ge.getGripSpace()},this.getHand=function(ne){let ge=T[ne];return ge===void 0&&(ge=new zd,T[ne]=ge),ge.getHandSpace()};function ee(ne){const ge=U.indexOf(ne.inputSource);if(ge===-1)return;const pe=T[ge];pe!==void 0&&(pe.update(ne.inputSource,ne.frame,h||c),pe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function de(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",de),s.removeEventListener("inputsourceschange",Q);for(let ne=0;ne<T.length;ne++){const ge=U[ne];ge!==null&&(U[ne]=null,T[ne].disconnect(ge))}Z=null,q=null,E.reset();for(const ne in y)delete y[ne];e.setRenderTarget(L),S=null,_=null,g=null,s=null,b=null,ke.stop(),o.isPresenting=!1,e.setPixelRatio(N),e.setSize(I.width,I.height,!1),o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(L=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",de),s.addEventListener("inputsourceschange",Q),v.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(s,t)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,be=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=v.stencil?ma:pa,be=v.stencil?ha:po);const Ye={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:l};_=g.createProjectionLayer(Ye),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),b=new mo(_.textureWidth,_.textureHeight,{format:gi,type:Li,depthTexture:new h0(_.textureWidth,_.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const pe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new mo(S.framebufferWidth,S.framebufferHeight,{format:gi,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await s.requestReferenceSpace(d),ke.setContext(s),ke.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function Q(ne){for(let ge=0;ge<ne.removed.length;ge++){const pe=ne.removed[ge],be=U.indexOf(pe);be>=0&&(U[be]=null,T[be].disconnect(pe))}for(let ge=0;ge<ne.added.length;ge++){const pe=ne.added[ge];let be=U.indexOf(pe);if(be===-1){for(let Ye=0;Ye<T.length;Ye++)if(Ye>=U.length){U.push(pe),be=Ye;break}else if(U[Ye]===null){U[Ye]=pe,be=Ye;break}if(be===-1)break}const Re=T[be];Re&&Re.connect(pe)}}const ce=new ie,B=new ie;function ue(ne,ge,pe){ce.setFromMatrixPosition(ge.matrixWorld),B.setFromMatrixPosition(pe.matrixWorld);const be=ce.distanceTo(B),Re=ge.projectionMatrix.elements,Ye=pe.projectionMatrix.elements,bt=Re[14]/(Re[10]-1),ht=Re[14]/(Re[10]+1),V=(Re[9]+1)/Re[5],St=(Re[9]-1)/Re[5],Je=(Re[8]-1)/Re[0],vt=(Ye[8]+1)/Ye[0],$e=bt*Je,Rt=bt*vt,Ie=be/(-Je+vt),ct=Ie*-Je;if(ge.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ct),ne.translateZ(Ie),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Re[10]===-1)ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const kt=bt+Ie,Bt=ht+Ie,F=$e-ct,A=Rt+(be-ct),J=V*ht/Bt*kt,he=St*ht/Bt*kt;ne.projectionMatrix.makePerspective(F,A,J,he,kt,Bt),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function oe(ne,ge){ge===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ge.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ge=ne.near,pe=ne.far;E.texture!==null&&(E.depthNear>0&&(ge=E.depthNear),E.depthFar>0&&(pe=E.depthFar)),k.near=D.near=H.near=ge,k.far=D.far=H.far=pe,(Z!==k.near||q!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),Z=k.near,q=k.far),k.layers.mask=ne.layers.mask|6,H.layers.mask=k.layers.mask&3,D.layers.mask=k.layers.mask&5;const be=ne.parent,Re=k.cameras;oe(k,be);for(let Ye=0;Ye<Re.length;Ye++)oe(Re[Ye],be);Re.length===2?ue(k,H,D):k.projectionMatrix.copy(H.projectionMatrix),z(ne,k,be)};function z(ne,ge,pe){pe===null?ne.matrix.copy(ge.matrixWorld):(ne.matrix.copy(pe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ge.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ms*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(_===null&&S===null))return f},this.setFoveation=function(ne){f=ne,_!==null&&(_.fixedFoveation=ne),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ne)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(k)},this.getCameraTexture=function(ne){return y[ne]};let ae=null;function Be(ne,ge){if(m=ge.getViewerPose(h||c),M=ge,m!==null){const pe=m.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let be=!1;pe.length!==k.cameras.length&&(k.cameras.length=0,be=!0);for(let ht=0;ht<pe.length;ht++){const V=pe[ht];let St=null;if(S!==null)St=S.getViewport(V);else{const vt=g.getViewSubImage(_,V);St=vt.viewport,ht===0&&(e.setRenderTargetTextures(b,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(b))}let Je=P[ht];Je===void 0&&(Je=new Xn,Je.layers.enable(ht),Je.viewport=new Yt,P[ht]=Je),Je.matrix.fromArray(V.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(V.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(St.x,St.y,St.width,St.height),ht===0&&(k.matrix.copy(Je.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),be===!0&&k.cameras.push(Je)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){const ht=g.getDepthInformation(pe[0]);ht&&ht.isValid&&ht.texture&&E.init(ht,s.renderState)}if(Re&&Re.includes("camera-access")&&(e.state.unbindTexture(),g))for(let ht=0;ht<pe.length;ht++){const V=pe[ht].camera;if(V){let St=y[V];St||(St=new y0,y[V]=St);const Je=g.getCameraImage(V);St.sourceTexture=Je}}}for(let pe=0;pe<T.length;pe++){const be=U[pe],Re=T[pe];be!==null&&Re!==void 0&&Re.update(be,ge,h||c)}ae&&ae(ne,ge),ge.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:ge}),M=null}const ke=new m0;ke.setAnimationLoop(Be),this.setAnimationLoop=function(ne){ae=ne},this.dispose=function(){}}}const oo=new Di,rA=new Zt;function oA(i,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function o(y,v){v.color.getRGB(y.fogColor.value,u0(i)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function s(y,v,L,b,T){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),g(y,v)):v.isMeshPhongMaterial?(l(y,v),m(y,v)):v.isMeshStandardMaterial?(l(y,v),_(y,v),v.isMeshPhysicalMaterial&&S(y,v,T)):v.isMeshMatcapMaterial?(l(y,v),M(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),E(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(c(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?f(y,v,L,b):v.isSpriteMaterial?h(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===On&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===On&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const L=e.get(v),b=L.envMap,T=L.envMapRotation;b&&(y.envMap.value=b,oo.copy(T),oo.x*=-1,oo.y*=-1,oo.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(oo.y*=-1,oo.z*=-1),y.envMapRotation.value.setFromMatrix4(rA.makeRotationFromEuler(oo)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function c(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function f(y,v,L,b){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=b*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===On&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,v){v.matcap&&(y.matcap.value=v.matcap)}function E(y,v){const L=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:s}}function sA(i,e,t,o){let s={},l={},c=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(L,b){const T=b.program;o.uniformBlockBinding(L,T)}function h(L,b){let T=s[L.id];T===void 0&&(M(L),T=m(L),s[L.id]=T,L.addEventListener("dispose",y));const U=b.program;o.updateUBOMapping(L,U);const I=e.render.frame;l[L.id]!==I&&(_(L),l[L.id]=I)}function m(L){const b=g();L.__bindingPointIndex=b;const T=i.createBuffer(),U=L.__size,I=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,U,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function g(){for(let L=0;L<d;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const b=s[L.id],T=L.uniforms,U=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let I=0,N=T.length;I<N;I++){const H=Array.isArray(T[I])?T[I]:[T[I]];for(let D=0,P=H.length;D<P;D++){const k=H[D];if(S(k,I,D,U)===!0){const Z=k.__offset,q=Array.isArray(k.value)?k.value:[k.value];let ee=0;for(let de=0;de<q.length;de++){const Q=q[de],ce=E(Q);typeof Q=="number"||typeof Q=="boolean"?(k.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,Z+ee,k.__data)):Q.isMatrix3?(k.__data[0]=Q.elements[0],k.__data[1]=Q.elements[1],k.__data[2]=Q.elements[2],k.__data[3]=0,k.__data[4]=Q.elements[3],k.__data[5]=Q.elements[4],k.__data[6]=Q.elements[5],k.__data[7]=0,k.__data[8]=Q.elements[6],k.__data[9]=Q.elements[7],k.__data[10]=Q.elements[8],k.__data[11]=0):(Q.toArray(k.__data,ee),ee+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(L,b,T,U){const I=L.value,N=b+"_"+T;if(U[N]===void 0)return typeof I=="number"||typeof I=="boolean"?U[N]=I:U[N]=I.clone(),!0;{const H=U[N];if(typeof I=="number"||typeof I=="boolean"){if(H!==I)return U[N]=I,!0}else if(H.equals(I)===!1)return H.copy(I),!0}return!1}function M(L){const b=L.uniforms;let T=0;const U=16;for(let N=0,H=b.length;N<H;N++){const D=Array.isArray(b[N])?b[N]:[b[N]];for(let P=0,k=D.length;P<k;P++){const Z=D[P],q=Array.isArray(Z.value)?Z.value:[Z.value];for(let ee=0,de=q.length;ee<de;ee++){const Q=q[ee],ce=E(Q),B=T%U,ue=B%ce.boundary,oe=B+ue;T+=ue,oe!==0&&U-oe<ce.storage&&(T+=U-oe),Z.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=T,T+=ce.storage}}}const I=T%U;return I>0&&(T+=U-I),L.__size=T,L.__cache={},this}function E(L){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=48,b.storage=48):L.isMatrix4?(b.boundary=64,b.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),b}function y(L){const b=L.target;b.removeEventListener("dispose",y);const T=c.indexOf(b.__bindingPointIndex);c.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete l[b.id]}function v(){for(const L in s)i.deleteBuffer(s[L]);c=[],s={},l={}}return{bind:f,update:h,dispose:v}}class aA{constructor(e={}){const{canvas:t=HS(),context:o=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(o!==null){if(typeof WebGLRenderingContext<"u"&&o instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=o.getContextAttributes().alpha}else S=c;const M=new Uint32Array(4),E=new Int32Array(4);let y=null,v=null;const L=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let U=!1;this._outputColorSpace=ii;let I=0,N=0,H=null,D=-1,P=null;const k=new Yt,Z=new Yt;let q=null;const ee=new Tt(0);let de=0,Q=t.width,ce=t.height,B=1,ue=null,oe=null;const z=new Yt(0,0,Q,ce),ae=new Yt(0,0,Q,ce);let Be=!1;const ke=new yh;let ne=!1,ge=!1;const pe=new Zt,be=new ie,Re=new Yt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function ht(){return H===null?B:1}let V=o;function St(R,$){return t.getContext(R,$)}try{const R={alpha:!0,depth:s,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ah}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Se,!1),V===null){const $="webgl2";if(V=St($,R),V===null)throw St($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Je,vt,$e,Rt,Ie,ct,kt,Bt,F,A,J,he,xe,fe,Ke,Ae,He,Ze,we,Ne,rt,Xe,Pe,ut;function j(){Je=new vT(V),Je.init(),Xe=new J1(V,Je),vt=new uT(V,Je,e,Xe),$e=new Z1(V,Je),vt.reversedDepthBuffer&&_&&$e.buffers.depth.setReversed(!0),Rt=new yT(V),Ie=new k1,ct=new Q1(V,Je,$e,Ie,vt,Xe,Rt),kt=new fT(T),Bt=new gT(T),F=new AM(V),Pe=new lT(V,F),A=new _T(V,F,Rt,Pe),J=new MT(V,A,F,Rt),we=new ST(V,vt,ct),Ae=new dT(Ie),he=new O1(T,kt,Bt,Je,vt,Pe,Ae),xe=new oA(T,Ie),fe=new z1,Ke=new X1(Je),Ze=new aT(T,kt,Bt,$e,J,S,f),He=new q1(T,J,vt),ut=new sA(V,Rt,vt,$e),Ne=new cT(V,Je,Rt),rt=new xT(V,Je,Rt),Rt.programs=he.programs,T.capabilities=vt,T.extensions=Je,T.properties=Ie,T.renderLists=fe,T.shadowMap=He,T.state=$e,T.info=Rt}j();const Me=new iA(T,V);this.xr=Me,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Je.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Je.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(Q,ce,!1))},this.getSize=function(R){return R.set(Q,ce)},this.setSize=function(R,$,se=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=R,ce=$,t.width=Math.floor(R*B),t.height=Math.floor($*B),se===!0&&(t.style.width=R+"px",t.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(Q*B,ce*B).floor()},this.setDrawingBufferSize=function(R,$,se){Q=R,ce=$,B=se,t.width=Math.floor(R*se),t.height=Math.floor($*se),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(z)},this.setViewport=function(R,$,se,le){R.isVector4?z.set(R.x,R.y,R.z,R.w):z.set(R,$,se,le),$e.viewport(k.copy(z).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(ae)},this.setScissor=function(R,$,se,le){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,$,se,le),$e.scissor(Z.copy(ae).multiplyScalar(B).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(R){$e.setScissorTest(Be=R)},this.setOpaqueSort=function(R){ue=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,se=!0){let le=0;if(R){let X=!1;if(H!==null){const Ee=H.texture.format;X=Ee===ph||Ee===hh||Ee===fh}if(X){const Ee=H.texture.type,Le=Ee===Li||Ee===po||Ee===fa||Ee===ha||Ee===uh||Ee===dh,Ve=Ze.getClearColor(),Fe=Ze.getClearAlpha(),it=Ve.r,ot=Ve.g,Qe=Ve.b;Le?(M[0]=it,M[1]=ot,M[2]=Qe,M[3]=Fe,V.clearBufferuiv(V.COLOR,0,M)):(E[0]=it,E[1]=ot,E[2]=Qe,E[3]=Fe,V.clearBufferiv(V.COLOR,0,E))}else le|=V.COLOR_BUFFER_BIT}$&&(le|=V.DEPTH_BUFFER_BIT),se&&(le|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ze.dispose(),fe.dispose(),Ke.dispose(),Ie.dispose(),kt.dispose(),Bt.dispose(),J.dispose(),Pe.dispose(),ut.dispose(),he.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",hn),Me.removeEventListener("sessionend",xo),Bn.stop()};function Ce(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const R=Rt.autoReset,$=He.enabled,se=He.autoUpdate,le=He.needsUpdate,X=He.type;j(),Rt.autoReset=R,He.enabled=$,He.autoUpdate=se,He.needsUpdate=le,He.type=X}function Se(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function me(R){const $=R.target;$.removeEventListener("dispose",me),We($)}function We(R){lt(R),Ie.remove(R)}function lt(R){const $=Ie.get(R).programs;$!==void 0&&($.forEach(function(se){he.releaseProgram(se)}),R.isShaderMaterial&&he.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,se,le,X,Ee){$===null&&($=Ye);const Le=X.isMesh&&X.matrixWorld.determinant()<0,Ve=Fi(R,$,se,le,X);$e.setMaterial(le,Le);let Fe=se.index,it=1;if(le.wireframe===!0){if(Fe=A.getWireframeAttribute(se),Fe===void 0)return;it=2}const ot=se.drawRange,Qe=se.attributes.position;let st=ot.start*it,Ct=(ot.start+ot.count)*it;Ee!==null&&(st=Math.max(st,Ee.start*it),Ct=Math.min(Ct,(Ee.start+Ee.count)*it)),Fe!==null?(st=Math.max(st,0),Ct=Math.min(Ct,Fe.count)):Qe!=null&&(st=Math.max(st,0),Ct=Math.min(Ct,Qe.count));const yt=Ct-st;if(yt<0||yt===1/0)return;Pe.setup(X,le,Ve,se,Fe);let Ut,Lt=Ne;if(Fe!==null&&(Ut=F.get(Fe),Lt=rt,Lt.setIndex(Ut)),X.isMesh)le.wireframe===!0?($e.setLineWidth(le.wireframeLinewidth*ht()),Lt.setMode(V.LINES)):Lt.setMode(V.TRIANGLES);else if(X.isLine){let et=le.linewidth;et===void 0&&(et=1),$e.setLineWidth(et*ht()),X.isLineSegments?Lt.setMode(V.LINES):X.isLineLoop?Lt.setMode(V.LINE_LOOP):Lt.setMode(V.LINE_STRIP)}else X.isPoints?Lt.setMode(V.POINTS):X.isSprite&&Lt.setMode(V.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))Lt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const et=X._multiDrawStarts,Nt=X._multiDrawCounts,mt=X._multiDrawCount,en=Fe?F.get(Fe).bytesPerElement:1,oi=Ie.get(le).currentProgram.getUniforms();for(let wn=0;wn<mt;wn++)oi.setValue(V,"_gl_DrawID",wn),Lt.render(et[wn]/en,Nt[wn])}else if(X.isInstancedMesh)Lt.renderInstances(st,yt,X.count);else if(se.isInstancedBufferGeometry){const et=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Nt=Math.min(se.instanceCount,et);Lt.renderInstances(st,yt,Nt)}else Lt.render(st,yt)};function Pt(R,$,se){R.transparent===!0&&R.side===Zi&&R.forceSinglePass===!1?(R.side=On,R.needsUpdate=!0,So(R,$,se),R.side=Dr,R.needsUpdate=!0,So(R,$,se),R.side=Zi):So(R,$,se)}this.compile=function(R,$,se=null){se===null&&(se=R),v=Ke.get(se),v.init($),b.push(v),se.traverseVisible(function(X){X.isLight&&X.layers.test($.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),R!==se&&R.traverseVisible(function(X){X.isLight&&X.layers.test($.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),v.setupLights();const le=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){const Ve=Ee[Le];Pt(Ve,se,X),le.add(Ve)}else Pt(Ee,se,X),le.add(Ee)}),v=b.pop(),le},this.compileAsync=function(R,$,se=null){const le=this.compile(R,$,se);return new Promise(X=>{function Ee(){if(le.forEach(function(Le){Ie.get(Le).currentProgram.isReady()&&le.delete(Le)}),le.size===0){X(R);return}setTimeout(Ee,10)}Je.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let xt=null;function qn(R){xt&&xt(R)}function hn(){Bn.stop()}function xo(){Bn.start()}const Bn=new m0;Bn.setAnimationLoop(qn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(R){xt=R,Me.setAnimationLoop(R),R===null?Bn.stop():Bn.start()},Me.addEventListener("sessionstart",hn),Me.addEventListener("sessionend",xo),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera($),$=Me.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,$,H),v=Ke.get(R,b.length),v.init($),b.push(v),pe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ke.setFromProjectionMatrix(pe,Ci,$.reversedDepth),ge=this.localClippingEnabled,ne=Ae.init(this.clippingPlanes,ge),y=fe.get(R,L.length),y.init(),L.push(y),Me.enabled===!0&&Me.isPresenting===!0){const Ee=T.xr.getDepthSensingMesh();Ee!==null&&As(Ee,$,-1/0,T.sortObjects)}As(R,$,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(ue,oe),bt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,bt&&Ze.addToRenderList(y,R),this.info.render.frame++,ne===!0&&Ae.beginShadows();const se=v.state.shadowsArray;He.render(se,R,$),ne===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=y.opaque,X=y.transmissive;if(v.setupLights(),$.isArrayCamera){const Ee=$.cameras;if(X.length>0)for(let Le=0,Ve=Ee.length;Le<Ve;Le++){const Fe=Ee[Le];Br(le,X,R,Fe)}bt&&Ze.render(R);for(let Le=0,Ve=Ee.length;Le<Ve;Le++){const Fe=Ee[Le];ir(y,R,Fe,Fe.viewport)}}else X.length>0&&Br(le,X,R,$),bt&&Ze.render(R),ir(y,R,$);H!==null&&N===0&&(ct.updateMultisampleRenderTarget(H),ct.updateRenderTargetMipmap(H)),R.isScene===!0&&R.onAfterRender(T,R,$),Pe.resetDefaultState(),D=-1,P=null,b.pop(),b.length>0?(v=b[b.length-1],ne===!0&&Ae.setGlobalState(T.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function As(R,$,se,le){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ke.intersectsSprite(R)){le&&Re.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pe);const Le=J.update(R),Ve=R.material;Ve.visible&&y.push(R,Le,Ve,se,Re.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ke.intersectsObject(R))){const Le=J.update(R),Ve=R.material;if(le&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Re.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Re.copy(Le.boundingSphere.center)),Re.applyMatrix4(R.matrixWorld).applyMatrix4(pe)),Array.isArray(Ve)){const Fe=Le.groups;for(let it=0,ot=Fe.length;it<ot;it++){const Qe=Fe[it],st=Ve[Qe.materialIndex];st&&st.visible&&y.push(R,Le,st,se,Re.z,Qe)}}else Ve.visible&&y.push(R,Le,Ve,se,Re.z,null)}}const Ee=R.children;for(let Le=0,Ve=Ee.length;Le<Ve;Le++)As(Ee[Le],$,se,le)}function ir(R,$,se,le){const X=R.opaque,Ee=R.transmissive,Le=R.transparent;v.setupLightsView(se),ne===!0&&Ae.setGlobalState(T.clippingPlanes,se),le&&$e.viewport(k.copy(le)),X.length>0&&Ui(X,$,se),Ee.length>0&&Ui(Ee,$,se),Le.length>0&&Ui(Le,$,se),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Br(R,$,se,le){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[le.id]===void 0&&(v.state.transmissionRenderTarget[le.id]=new mo(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?_a:Li,minFilter:ho,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Ee=v.state.transmissionRenderTarget[le.id],Le=le.viewport||k;Ee.setSize(Le.z*T.transmissionResolutionScale,Le.w*T.transmissionResolutionScale);const Ve=T.getRenderTarget(),Fe=T.getActiveCubeFace(),it=T.getActiveMipmapLevel();T.setRenderTarget(Ee),T.getClearColor(ee),de=T.getClearAlpha(),de<1&&T.setClearColor(16777215,.5),T.clear(),bt&&Ze.render(se);const ot=T.toneMapping;T.toneMapping=Lr;const Qe=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),v.setupLightsView(le),ne===!0&&Ae.setGlobalState(T.clippingPlanes,le),Ui(R,se,le),ct.updateMultisampleRenderTarget(Ee),ct.updateRenderTargetMipmap(Ee),Je.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Ct=0,yt=$.length;Ct<yt;Ct++){const Ut=$[Ct],Lt=Ut.object,et=Ut.geometry,Nt=Ut.material,mt=Ut.group;if(Nt.side===Zi&&Lt.layers.test(le.layers)){const en=Nt.side;Nt.side=On,Nt.needsUpdate=!0,yo(Lt,se,le,et,Nt,mt),Nt.side=en,Nt.needsUpdate=!0,st=!0}}st===!0&&(ct.updateMultisampleRenderTarget(Ee),ct.updateRenderTargetMipmap(Ee))}T.setRenderTarget(Ve,Fe,it),T.setClearColor(ee,de),Qe!==void 0&&(le.viewport=Qe),T.toneMapping=ot}function Ui(R,$,se){const le=$.isScene===!0?$.overrideMaterial:null;for(let X=0,Ee=R.length;X<Ee;X++){const Le=R[X],Ve=Le.object,Fe=Le.geometry,it=Le.group;let ot=Le.material;ot.allowOverride===!0&&le!==null&&(ot=le),Ve.layers.test(se.layers)&&yo(Ve,$,se,Fe,ot,it)}}function yo(R,$,se,le,X,Ee){R.onBeforeRender(T,$,se,le,X,Ee),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(T,$,se,le,R,Ee),X.transparent===!0&&X.side===Zi&&X.forceSinglePass===!1?(X.side=On,X.needsUpdate=!0,T.renderBufferDirect(se,$,le,X,R,Ee),X.side=Dr,X.needsUpdate=!0,T.renderBufferDirect(se,$,le,X,R,Ee),X.side=Zi):T.renderBufferDirect(se,$,le,X,R,Ee),R.onAfterRender(T,$,se,le,X,Ee)}function So(R,$,se){$.isScene!==!0&&($=Ye);const le=Ie.get(R),X=v.state.lights,Ee=v.state.shadowsArray,Le=X.state.version,Ve=he.getParameters(R,X.state,Ee,$,se),Fe=he.getProgramCacheKey(Ve);let it=le.programs;le.environment=R.isMeshStandardMaterial?$.environment:null,le.fog=$.fog,le.envMap=(R.isMeshStandardMaterial?Bt:kt).get(R.envMap||le.environment),le.envMapRotation=le.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,it===void 0&&(R.addEventListener("dispose",me),it=new Map,le.programs=it);let ot=it.get(Fe);if(ot!==void 0){if(le.currentProgram===ot&&le.lightsStateVersion===Le)return Ca(R,Ve),ot}else Ve.uniforms=he.getUniforms(R),R.onBeforeCompile(Ve,T),ot=he.acquireProgram(Ve,Fe),it.set(Fe,ot),le.uniforms=Ve.uniforms;const Qe=le.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=Ae.uniform),Ca(R,Ve),le.needsLights=Ra(R),le.lightsStateVersion=Le,le.needsLights&&(Qe.ambientLightColor.value=X.state.ambient,Qe.lightProbe.value=X.state.probe,Qe.directionalLights.value=X.state.directional,Qe.directionalLightShadows.value=X.state.directionalShadow,Qe.spotLights.value=X.state.spot,Qe.spotLightShadows.value=X.state.spotShadow,Qe.rectAreaLights.value=X.state.rectArea,Qe.ltc_1.value=X.state.rectAreaLTC1,Qe.ltc_2.value=X.state.rectAreaLTC2,Qe.pointLights.value=X.state.point,Qe.pointLightShadows.value=X.state.pointShadow,Qe.hemisphereLights.value=X.state.hemi,Qe.directionalShadowMap.value=X.state.directionalShadowMap,Qe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Qe.spotShadowMap.value=X.state.spotShadowMap,Qe.spotLightMatrix.value=X.state.spotLightMatrix,Qe.spotLightMap.value=X.state.spotLightMap,Qe.pointShadowMap.value=X.state.pointShadowMap,Qe.pointShadowMatrix.value=X.state.pointShadowMatrix),le.currentProgram=ot,le.uniformsList=null,ot}function Aa(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=cc.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function Ca(R,$){const se=Ie.get(R);se.outputColorSpace=$.outputColorSpace,se.batching=$.batching,se.batchingColor=$.batchingColor,se.instancing=$.instancing,se.instancingColor=$.instancingColor,se.instancingMorph=$.instancingMorph,se.skinning=$.skinning,se.morphTargets=$.morphTargets,se.morphNormals=$.morphNormals,se.morphColors=$.morphColors,se.morphTargetsCount=$.morphTargetsCount,se.numClippingPlanes=$.numClippingPlanes,se.numIntersection=$.numClipIntersection,se.vertexAlphas=$.vertexAlphas,se.vertexTangents=$.vertexTangents,se.toneMapping=$.toneMapping}function Fi(R,$,se,le,X){$.isScene!==!0&&($=Ye),ct.resetTextureUnits();const Ee=$.fog,Le=le.isMeshStandardMaterial?$.environment:null,Ve=H===null?T.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ps,Fe=(le.isMeshStandardMaterial?Bt:kt).get(le.envMap||Le),it=le.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ot=!!se.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Qe=!!se.morphAttributes.position,st=!!se.morphAttributes.normal,Ct=!!se.morphAttributes.color;let yt=Lr;le.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(yt=T.toneMapping);const Ut=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Lt=Ut!==void 0?Ut.length:0,et=Ie.get(le),Nt=v.state.lights;if(ne===!0&&(ge===!0||R!==P)){const qt=R===P&&le.id===D;Ae.setState(le,R,qt)}let mt=!1;le.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Nt.state.version||et.outputColorSpace!==Ve||X.isBatchedMesh&&et.batching===!1||!X.isBatchedMesh&&et.batching===!0||X.isBatchedMesh&&et.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&et.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&et.instancing===!1||!X.isInstancedMesh&&et.instancing===!0||X.isSkinnedMesh&&et.skinning===!1||!X.isSkinnedMesh&&et.skinning===!0||X.isInstancedMesh&&et.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&et.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&et.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&et.instancingMorph===!1&&X.morphTexture!==null||et.envMap!==Fe||le.fog===!0&&et.fog!==Ee||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ae.numPlanes||et.numIntersection!==Ae.numIntersection)||et.vertexAlphas!==it||et.vertexTangents!==ot||et.morphTargets!==Qe||et.morphNormals!==st||et.morphColors!==Ct||et.toneMapping!==yt||et.morphTargetsCount!==Lt)&&(mt=!0):(mt=!0,et.__version=le.version);let en=et.currentProgram;mt===!0&&(en=So(le,$,X));let oi=!1,wn=!1,zr=!1;const Ft=en.getUniforms(),Tn=et.uniforms;if($e.useProgram(en.program)&&(oi=!0,wn=!0,zr=!0),le.id!==D&&(D=le.id,wn=!0),oi||P!==R){$e.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ft.setValue(V,"projectionMatrix",R.projectionMatrix),Ft.setValue(V,"viewMatrix",R.matrixWorldInverse);const mn=Ft.map.cameraPosition;mn!==void 0&&mn.setValue(V,be.setFromMatrixPosition(R.matrixWorld)),vt.logarithmicDepthBuffer&&Ft.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Ft.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),P!==R&&(P=R,wn=!0,zr=!0)}if(X.isSkinnedMesh){Ft.setOptional(V,X,"bindMatrix"),Ft.setOptional(V,X,"bindMatrixInverse");const qt=X.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Ft.setValue(V,"boneTexture",qt.boneTexture,ct))}X.isBatchedMesh&&(Ft.setOptional(V,X,"batchingTexture"),Ft.setValue(V,"batchingTexture",X._matricesTexture,ct),Ft.setOptional(V,X,"batchingIdTexture"),Ft.setValue(V,"batchingIdTexture",X._indirectTexture,ct),Ft.setOptional(V,X,"batchingColorTexture"),X._colorsTexture!==null&&Ft.setValue(V,"batchingColorTexture",X._colorsTexture,ct));const pn=se.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&we.update(X,se,en),(wn||et.receiveShadow!==X.receiveShadow)&&(et.receiveShadow=X.receiveShadow,Ft.setValue(V,"receiveShadow",X.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Tn.envMap.value=Fe,Tn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&$.environment!==null&&(Tn.envMapIntensity.value=$.environmentIntensity),wn&&(Ft.setValue(V,"toneMappingExposure",T.toneMappingExposure),et.needsLights&&ba(Tn,zr),Ee&&le.fog===!0&&xe.refreshFogUniforms(Tn,Ee),xe.refreshMaterialUniforms(Tn,le,B,ce,v.state.transmissionRenderTarget[R.id]),cc.upload(V,Aa(et),Tn,ct)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(cc.upload(V,Aa(et),Tn,ct),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Ft.setValue(V,"center",X.center),Ft.setValue(V,"modelViewMatrix",X.modelViewMatrix),Ft.setValue(V,"normalMatrix",X.normalMatrix),Ft.setValue(V,"modelMatrix",X.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const qt=le.uniformsGroups;for(let mn=0,Hr=qt.length;mn<Hr;mn++){const gt=qt[mn];ut.update(gt,en),ut.bind(gt,en)}}return en}function ba(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function Ra(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,$,se){const le=Ie.get(R);le.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Ie.get(R.texture).__webglTexture=$,Ie.get(R.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:se,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const se=Ie.get(R);se.__webglFramebuffer=$,se.__useDefaultFramebuffer=$===void 0};const Oc=V.createFramebuffer();this.setRenderTarget=function(R,$=0,se=0){H=R,I=$,N=se;let le=!0,X=null,Ee=!1,Le=!1;if(R){const Fe=Ie.get(R);if(Fe.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(V.FRAMEBUFFER,null),le=!1;else if(Fe.__webglFramebuffer===void 0)ct.setupRenderTarget(R);else if(Fe.__hasExternalTextures)ct.rebindTextures(R,Ie.get(R.texture).__webglTexture,Ie.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qe=R.depthTexture;if(Fe.__boundDepthTexture!==Qe){if(Qe!==null&&Ie.has(Qe)&&(R.width!==Qe.image.width||R.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(R)}}const it=R.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Le=!0);const ot=Ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ot[$])?X=ot[$][se]:X=ot[$],Ee=!0):R.samples>0&&ct.useMultisampledRTT(R)===!1?X=Ie.get(R).__webglMultisampledFramebuffer:Array.isArray(ot)?X=ot[se]:X=ot,k.copy(R.viewport),Z.copy(R.scissor),q=R.scissorTest}else k.copy(z).multiplyScalar(B).floor(),Z.copy(ae).multiplyScalar(B).floor(),q=Be;if(se!==0&&(X=Oc),$e.bindFramebuffer(V.FRAMEBUFFER,X)&&le&&$e.drawBuffers(R,X),$e.viewport(k),$e.scissor(Z),$e.setScissorTest(q),Ee){const Fe=Ie.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+$,Fe.__webglTexture,se)}else if(Le){const Fe=$;for(let it=0;it<R.textures.length;it++){const ot=Ie.get(R.textures[it]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+it,ot.__webglTexture,se,Fe)}}else if(R!==null&&se!==0){const Fe=Ie.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Fe.__webglTexture,se)}D=-1},this.readRenderTargetPixels=function(R,$,se,le,X,Ee,Le,Ve=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){$e.bindFramebuffer(V.FRAMEBUFFER,Fe);try{const it=R.textures[Ve],ot=it.format,Qe=it.type;if(!vt.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-le&&se>=0&&se<=R.height-X&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ve),V.readPixels($,se,le,X,Xe.convert(ot),Xe.convert(Qe),Ee))}finally{const it=H!==null?Ie.get(H).__webglFramebuffer:null;$e.bindFramebuffer(V.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(R,$,se,le,X,Ee,Le,Ve=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe)if($>=0&&$<=R.width-le&&se>=0&&se<=R.height-X){$e.bindFramebuffer(V.FRAMEBUFFER,Fe);const it=R.textures[Ve],ot=it.format,Qe=it.type;if(!vt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,st),V.bufferData(V.PIXEL_PACK_BUFFER,Ee.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ve),V.readPixels($,se,le,X,Xe.convert(ot),Xe.convert(Qe),0);const Ct=H!==null?Ie.get(H).__webglFramebuffer:null;$e.bindFramebuffer(V.FRAMEBUFFER,Ct);const yt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await VS(V,yt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,st),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ee),V.deleteBuffer(st),V.deleteSync(yt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,se=0){const le=Math.pow(2,-se),X=Math.floor(R.image.width*le),Ee=Math.floor(R.image.height*le),Le=$!==null?$.x:0,Ve=$!==null?$.y:0;ct.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,se,0,0,Le,Ve,X,Ee),$e.unbindTexture()};const Pa=V.createFramebuffer(),La=V.createFramebuffer();this.copyTextureToTexture=function(R,$,se=null,le=null,X=0,Ee=null){Ee===null&&(X!==0?(ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=X,X=0):Ee=0);let Le,Ve,Fe,it,ot,Qe,st,Ct,yt;const Ut=R.isCompressedTexture?R.mipmaps[Ee]:R.image;if(se!==null)Le=se.max.x-se.min.x,Ve=se.max.y-se.min.y,Fe=se.isBox3?se.max.z-se.min.z:1,it=se.min.x,ot=se.min.y,Qe=se.isBox3?se.min.z:0;else{const pn=Math.pow(2,-X);Le=Math.floor(Ut.width*pn),Ve=Math.floor(Ut.height*pn),R.isDataArrayTexture?Fe=Ut.depth:R.isData3DTexture?Fe=Math.floor(Ut.depth*pn):Fe=1,it=0,ot=0,Qe=0}le!==null?(st=le.x,Ct=le.y,yt=le.z):(st=0,Ct=0,yt=0);const Lt=Xe.convert($.format),et=Xe.convert($.type);let Nt;$.isData3DTexture?(ct.setTexture3D($,0),Nt=V.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ct.setTexture2DArray($,0),Nt=V.TEXTURE_2D_ARRAY):(ct.setTexture2D($,0),Nt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,$.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,$.unpackAlignment);const mt=V.getParameter(V.UNPACK_ROW_LENGTH),en=V.getParameter(V.UNPACK_IMAGE_HEIGHT),oi=V.getParameter(V.UNPACK_SKIP_PIXELS),wn=V.getParameter(V.UNPACK_SKIP_ROWS),zr=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ut.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ut.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,it),V.pixelStorei(V.UNPACK_SKIP_ROWS,ot),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qe);const Ft=R.isDataArrayTexture||R.isData3DTexture,Tn=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const pn=Ie.get(R),qt=Ie.get($),mn=Ie.get(pn.__renderTarget),Hr=Ie.get(qt.__renderTarget);$e.bindFramebuffer(V.READ_FRAMEBUFFER,mn.__webglFramebuffer),$e.bindFramebuffer(V.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let gt=0;gt<Fe;gt++)Ft&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ie.get(R).__webglTexture,X,Qe+gt),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ie.get($).__webglTexture,Ee,yt+gt)),V.blitFramebuffer(it,ot,Le,Ve,st,Ct,Le,Ve,V.DEPTH_BUFFER_BIT,V.NEAREST);$e.bindFramebuffer(V.READ_FRAMEBUFFER,null),$e.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(X!==0||R.isRenderTargetTexture||Ie.has(R)){const pn=Ie.get(R),qt=Ie.get($);$e.bindFramebuffer(V.READ_FRAMEBUFFER,Pa),$e.bindFramebuffer(V.DRAW_FRAMEBUFFER,La);for(let mn=0;mn<Fe;mn++)Ft?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pn.__webglTexture,X,Qe+mn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pn.__webglTexture,X),Tn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qt.__webglTexture,Ee,yt+mn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,qt.__webglTexture,Ee),X!==0?V.blitFramebuffer(it,ot,Le,Ve,st,Ct,Le,Ve,V.COLOR_BUFFER_BIT,V.NEAREST):Tn?V.copyTexSubImage3D(Nt,Ee,st,Ct,yt+mn,it,ot,Le,Ve):V.copyTexSubImage2D(Nt,Ee,st,Ct,it,ot,Le,Ve);$e.bindFramebuffer(V.READ_FRAMEBUFFER,null),$e.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Nt,Ee,st,Ct,yt,Le,Ve,Fe,Lt,et,Ut.data):$.isCompressedArrayTexture?V.compressedTexSubImage3D(Nt,Ee,st,Ct,yt,Le,Ve,Fe,Lt,Ut.data):V.texSubImage3D(Nt,Ee,st,Ct,yt,Le,Ve,Fe,Lt,et,Ut):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ee,st,Ct,Le,Ve,Lt,et,Ut.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ee,st,Ct,Ut.width,Ut.height,Lt,Ut.data):V.texSubImage2D(V.TEXTURE_2D,Ee,st,Ct,Le,Ve,Lt,et,Ut);V.pixelStorei(V.UNPACK_ROW_LENGTH,mt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,en),V.pixelStorei(V.UNPACK_SKIP_PIXELS,oi),V.pixelStorei(V.UNPACK_SKIP_ROWS,wn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,zr),Ee===0&&$.generateMipmaps&&V.generateMipmap(Nt),$e.unbindTexture()},this.copyTextureToTexture3D=function(R,$,se=null,le=null,X=0){return ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,$,se,le,X)},this.initRenderTarget=function(R){Ie.get(R).__webglFramebuffer===void 0&&ct.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ct.setTextureCube(R,0):R.isData3DTexture?ct.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ct.setTexture2DArray(R,0):ct.setTexture2D(R,0),$e.unbindTexture()},this.resetState=function(){I=0,N=0,H=null,$e.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}function Dt(i,e,{checkForDefaultPrevented:t=!0}={}){return function(s){if(i==null||i(s),t===!1||!s.defaultPrevented)return e==null?void 0:e(s)}}function Or(i,e=[]){let t=[];function o(l,c){const d=W.createContext(c),f=t.length;t=[...t,c];const h=g=>{var v;const{scope:_,children:S,...M}=g,E=((v=_==null?void 0:_[i])==null?void 0:v[f])||d,y=W.useMemo(()=>M,Object.values(M));return C.jsx(E.Provider,{value:y,children:S})};h.displayName=l+"Provider";function m(g,_){var E;const S=((E=_==null?void 0:_[i])==null?void 0:E[f])||d,M=W.useContext(S);if(M)return M;if(c!==void 0)return c;throw new Error(`\`${g}\` must be used within \`${l}\``)}return[h,m]}const s=()=>{const l=t.map(c=>W.createContext(c));return function(d){const f=(d==null?void 0:d[i])||l;return W.useMemo(()=>({[`__scope${i}`]:{...d,[i]:f}}),[d,f])}};return s.scopeName=i,[o,lA(s,...e)]}function lA(...i){const e=i[0];if(i.length===1)return e;const t=()=>{const o=i.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(l){const c=o.reduce((d,{useScope:f,scopeName:h})=>{const g=f(l)[`__scope${h}`];return{...d,...g}},{});return W.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return t.scopeName=e.scopeName,t}function Ev(i,e){if(typeof i=="function")return i(e);i!=null&&(i.current=e)}function S0(...i){return e=>{let t=!1;const o=i.map(s=>{const l=Ev(s,e);return!t&&typeof l=="function"&&(t=!0),l});if(t)return()=>{for(let s=0;s<o.length;s++){const l=o[s];typeof l=="function"?l():Ev(i[s],null)}}}}function _i(...i){return W.useCallback(S0(...i),i)}function Gf(i){const e=cA(i),t=W.forwardRef((o,s)=>{const{children:l,...c}=o,d=W.Children.toArray(l),f=d.find(dA);if(f){const h=f.props.children,m=d.map(g=>g===f?W.Children.count(h)>1?W.Children.only(null):W.isValidElement(h)?h.props.children:null:g);return C.jsx(e,{...c,ref:s,children:W.isValidElement(h)?W.cloneElement(h,void 0,m):null})}return C.jsx(e,{...c,ref:s,children:l})});return t.displayName=`${i}.Slot`,t}function cA(i){const e=W.forwardRef((t,o)=>{const{children:s,...l}=t;if(W.isValidElement(s)){const c=hA(s),d=fA(l,s.props);return s.type!==W.Fragment&&(d.ref=o?S0(o,c):c),W.cloneElement(s,d)}return W.Children.count(s)>1?W.Children.only(null):null});return e.displayName=`${i}.SlotClone`,e}var M0=Symbol("radix.slottable");function uA(i){const e=({children:t})=>C.jsx(C.Fragment,{children:t});return e.displayName=`${i}.Slottable`,e.__radixId=M0,e}function dA(i){return W.isValidElement(i)&&typeof i.type=="function"&&"__radixId"in i.type&&i.type.__radixId===M0}function fA(i,e){const t={...e};for(const o in e){const s=i[o],l=e[o];/^on[A-Z]/.test(o)?s&&l?t[o]=(...d)=>{const f=l(...d);return s(...d),f}:s&&(t[o]=s):o==="style"?t[o]={...s,...l}:o==="className"&&(t[o]=[s,l].filter(Boolean).join(" "))}return{...i,...t}}function hA(i){var o,s;let e=(o=Object.getOwnPropertyDescriptor(i.props,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?i.ref:(e=(s=Object.getOwnPropertyDescriptor(i,"ref"))==null?void 0:s.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?i.props.ref:i.props.ref||i.ref)}function pA(i){const e=i+"CollectionProvider",[t,o]=Or(e),[s,l]=t(e,{collectionRef:{current:null},itemMap:new Map}),c=E=>{const{scope:y,children:v}=E,L=rn.useRef(null),b=rn.useRef(new Map).current;return C.jsx(s,{scope:y,itemMap:b,collectionRef:L,children:v})};c.displayName=e;const d=i+"CollectionSlot",f=Gf(d),h=rn.forwardRef((E,y)=>{const{scope:v,children:L}=E,b=l(d,v),T=_i(y,b.collectionRef);return C.jsx(f,{ref:T,children:L})});h.displayName=d;const m=i+"CollectionItemSlot",g="data-radix-collection-item",_=Gf(m),S=rn.forwardRef((E,y)=>{const{scope:v,children:L,...b}=E,T=rn.useRef(null),U=_i(y,T),I=l(m,v);return rn.useEffect(()=>(I.itemMap.set(T,{ref:T,...b}),()=>void I.itemMap.delete(T))),C.jsx(_,{[g]:"",ref:U,children:L})});S.displayName=m;function M(E){const y=l(i+"CollectionConsumer",E);return rn.useCallback(()=>{const L=y.collectionRef.current;if(!L)return[];const b=Array.from(L.querySelectorAll(`[${g}]`));return Array.from(y.itemMap.values()).sort((I,N)=>b.indexOf(I.ref.current)-b.indexOf(N.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:c,Slot:h,ItemSlot:S},M,o]}var Ir=globalThis!=null&&globalThis.document?W.useLayoutEffect:()=>{},mA=Vv[" useId ".trim().toString()]||(()=>{}),gA=0;function wh(i){const[e,t]=W.useState(mA());return Ir(()=>{t(o=>o??String(gA++))},[i]),e?`radix-${e}`:""}var Th=Gv();const vA=oh(Th);var _A=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],$t=_A.reduce((i,e)=>{const t=Gf(`Primitive.${e}`),o=W.forwardRef((s,l)=>{const{asChild:c,...d}=s,f=c?t:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),C.jsx(f,{...d,ref:l})});return o.displayName=`Primitive.${e}`,{...i,[e]:o}},{});function xA(i,e){i&&Th.flushSync(()=>i.dispatchEvent(e))}function Ma(i){const e=W.useRef(i);return W.useEffect(()=>{e.current=i}),W.useMemo(()=>(...t)=>{var o;return(o=e.current)==null?void 0:o.call(e,...t)},[])}var yA=Vv[" useInsertionEffect ".trim().toString()]||Ir;function _o({prop:i,defaultProp:e,onChange:t=()=>{},caller:o}){const[s,l,c]=SA({defaultProp:e,onChange:t}),d=i!==void 0,f=d?i:s;{const m=W.useRef(i!==void 0);W.useEffect(()=>{const g=m.current;g!==d&&console.warn(`${o} is changing from ${g?"controlled":"uncontrolled"} to ${d?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=d},[d,o])}const h=W.useCallback(m=>{var g;if(d){const _=MA(m)?m(i):m;_!==i&&((g=c.current)==null||g.call(c,_))}else l(m)},[d,i,l,c]);return[f,h]}function SA({defaultProp:i,onChange:e}){const[t,o]=W.useState(i),s=W.useRef(t),l=W.useRef(e);return yA(()=>{l.current=e},[e]),W.useEffect(()=>{var c;s.current!==t&&((c=l.current)==null||c.call(l,t),s.current=t)},[t,s]),[t,o,l]}function MA(i){return typeof i=="function"}var EA=W.createContext(void 0);function wc(i){const e=W.useContext(EA);return i||e||"ltr"}var qd="rovingFocusGroup.onEntryFocus",wA={bubbles:!1,cancelable:!0},Ea="RovingFocusGroup",[Wf,E0,TA]=pA(Ea),[AA,Ms]=Or(Ea,[TA]),[CA,bA]=AA(Ea),w0=W.forwardRef((i,e)=>C.jsx(Wf.Provider,{scope:i.__scopeRovingFocusGroup,children:C.jsx(Wf.Slot,{scope:i.__scopeRovingFocusGroup,children:C.jsx(RA,{...i,ref:e})})}));w0.displayName=Ea;var RA=W.forwardRef((i,e)=>{const{__scopeRovingFocusGroup:t,orientation:o,loop:s=!1,dir:l,currentTabStopId:c,defaultCurrentTabStopId:d,onCurrentTabStopIdChange:f,onEntryFocus:h,preventScrollOnEntryFocus:m=!1,...g}=i,_=W.useRef(null),S=_i(e,_),M=wc(l),[E,y]=_o({prop:c,defaultProp:d??null,onChange:f,caller:Ea}),[v,L]=W.useState(!1),b=Ma(h),T=E0(t),U=W.useRef(!1),[I,N]=W.useState(0);return W.useEffect(()=>{const H=_.current;if(H)return H.addEventListener(qd,b),()=>H.removeEventListener(qd,b)},[b]),C.jsx(CA,{scope:t,orientation:o,dir:M,loop:s,currentTabStopId:E,onItemFocus:W.useCallback(H=>y(H),[y]),onItemShiftTab:W.useCallback(()=>L(!0),[]),onFocusableItemAdd:W.useCallback(()=>N(H=>H+1),[]),onFocusableItemRemove:W.useCallback(()=>N(H=>H-1),[]),children:C.jsx($t.div,{tabIndex:v||I===0?-1:0,"data-orientation":o,...g,ref:S,style:{outline:"none",...i.style},onMouseDown:Dt(i.onMouseDown,()=>{U.current=!0}),onFocus:Dt(i.onFocus,H=>{const D=!U.current;if(H.target===H.currentTarget&&D&&!v){const P=new CustomEvent(qd,wA);if(H.currentTarget.dispatchEvent(P),!P.defaultPrevented){const k=T().filter(Q=>Q.focusable),Z=k.find(Q=>Q.active),q=k.find(Q=>Q.id===E),de=[Z,q,...k].filter(Boolean).map(Q=>Q.ref.current);C0(de,m)}}U.current=!1}),onBlur:Dt(i.onBlur,()=>L(!1))})})}),T0="RovingFocusGroupItem",A0=W.forwardRef((i,e)=>{const{__scopeRovingFocusGroup:t,focusable:o=!0,active:s=!1,tabStopId:l,children:c,...d}=i,f=wh(),h=l||f,m=bA(T0,t),g=m.currentTabStopId===h,_=E0(t),{onFocusableItemAdd:S,onFocusableItemRemove:M,currentTabStopId:E}=m;return W.useEffect(()=>{if(o)return S(),()=>M()},[o,S,M]),C.jsx(Wf.ItemSlot,{scope:t,id:h,focusable:o,active:s,children:C.jsx($t.span,{tabIndex:g?0:-1,"data-orientation":m.orientation,...d,ref:e,onMouseDown:Dt(i.onMouseDown,y=>{o?m.onItemFocus(h):y.preventDefault()}),onFocus:Dt(i.onFocus,()=>m.onItemFocus(h)),onKeyDown:Dt(i.onKeyDown,y=>{if(y.key==="Tab"&&y.shiftKey){m.onItemShiftTab();return}if(y.target!==y.currentTarget)return;const v=DA(y,m.orientation,m.dir);if(v!==void 0){if(y.metaKey||y.ctrlKey||y.altKey||y.shiftKey)return;y.preventDefault();let b=_().filter(T=>T.focusable).map(T=>T.ref.current);if(v==="last")b.reverse();else if(v==="prev"||v==="next"){v==="prev"&&b.reverse();const T=b.indexOf(y.currentTarget);b=m.loop?NA(b,T+1):b.slice(T+1)}setTimeout(()=>C0(b))}}),children:typeof c=="function"?c({isCurrentTabStop:g,hasTabStop:E!=null}):c})})});A0.displayName=T0;var PA={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function LA(i,e){return e!=="rtl"?i:i==="ArrowLeft"?"ArrowRight":i==="ArrowRight"?"ArrowLeft":i}function DA(i,e,t){const o=LA(i.key,t);if(!(e==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(e==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return PA[o]}function C0(i,e=!1){const t=document.activeElement;for(const o of i)if(o===t||(o.focus({preventScroll:e}),document.activeElement!==t))return}function NA(i,e){return i.map((t,o)=>i[(e+o)%i.length])}var Ah=w0,Tc=A0,IA="Separator",wv="horizontal",UA=["horizontal","vertical"],b0=W.forwardRef((i,e)=>{const{decorative:t,orientation:o=wv,...s}=i,l=FA(o)?o:wv,d=t?{role:"none"}:{"aria-orientation":l==="vertical"?l:void 0,role:"separator"};return C.jsx($t.div,{"data-orientation":l,...d,...s,ref:e})});b0.displayName=IA;function FA(i){return UA.includes(i)}var OA=b0,R0="Toggle",P0=W.forwardRef((i,e)=>{const{pressed:t,defaultPressed:o,onPressedChange:s,...l}=i,[c,d]=_o({prop:t,onChange:s,defaultProp:o??!1,caller:R0});return C.jsx($t.button,{type:"button","aria-pressed":c,"data-state":c?"on":"off","data-disabled":i.disabled?"":void 0,...l,ref:e,onClick:Dt(i.onClick,()=>{i.disabled||d(!c)})})});P0.displayName=R0;var kr="ToggleGroup",[L0,D0]=Or(kr,[Ms]),N0=Ms(),Ch=rn.forwardRef((i,e)=>{const{type:t,...o}=i;if(t==="single"){const s=o;return C.jsx(kA,{...s,ref:e})}if(t==="multiple"){const s=o;return C.jsx(BA,{...s,ref:e})}throw new Error(`Missing prop \`type\` expected on \`${kr}\``)});Ch.displayName=kr;var[I0,U0]=L0(kr),kA=rn.forwardRef((i,e)=>{const{value:t,defaultValue:o,onValueChange:s=()=>{},...l}=i,[c,d]=_o({prop:t,defaultProp:o??"",onChange:s,caller:kr});return C.jsx(I0,{scope:i.__scopeToggleGroup,type:"single",value:rn.useMemo(()=>c?[c]:[],[c]),onItemActivate:d,onItemDeactivate:rn.useCallback(()=>d(""),[d]),children:C.jsx(F0,{...l,ref:e})})}),BA=rn.forwardRef((i,e)=>{const{value:t,defaultValue:o,onValueChange:s=()=>{},...l}=i,[c,d]=_o({prop:t,defaultProp:o??[],onChange:s,caller:kr}),f=rn.useCallback(m=>d((g=[])=>[...g,m]),[d]),h=rn.useCallback(m=>d((g=[])=>g.filter(_=>_!==m)),[d]);return C.jsx(I0,{scope:i.__scopeToggleGroup,type:"multiple",value:c,onItemActivate:f,onItemDeactivate:h,children:C.jsx(F0,{...l,ref:e})})});Ch.displayName=kr;var[zA,HA]=L0(kr),F0=rn.forwardRef((i,e)=>{const{__scopeToggleGroup:t,disabled:o=!1,rovingFocus:s=!0,orientation:l,dir:c,loop:d=!0,...f}=i,h=N0(t),m=wc(c),g={role:"group",dir:m,...f};return C.jsx(zA,{scope:t,rovingFocus:s,disabled:o,children:s?C.jsx(Ah,{asChild:!0,...h,orientation:l,dir:m,loop:d,children:C.jsx($t.div,{...g,ref:e})}):C.jsx($t.div,{...g,ref:e})})}),mc="ToggleGroupItem",O0=rn.forwardRef((i,e)=>{const t=U0(mc,i.__scopeToggleGroup),o=HA(mc,i.__scopeToggleGroup),s=N0(i.__scopeToggleGroup),l=t.value.includes(i.value),c=o.disabled||i.disabled,d={...i,pressed:l,disabled:c},f=rn.useRef(null);return o.rovingFocus?C.jsx(Tc,{asChild:!0,...s,focusable:!c,active:l,ref:f,children:C.jsx(Tv,{...d,ref:e})}):C.jsx(Tv,{...d,ref:e})});O0.displayName=mc;var Tv=rn.forwardRef((i,e)=>{const{__scopeToggleGroup:t,value:o,...s}=i,l=U0(mc,t),c={role:"radio","aria-checked":i.pressed,"aria-pressed":void 0},d=l.type==="single"?c:void 0;return C.jsx(P0,{...d,...s,ref:e,onPressedChange:f=>{f?l.onItemActivate(o):l.onItemDeactivate(o)}})}),VA=Ch,GA=O0,bh="Toolbar",[WA]=Or(bh,[Ms,D0]),Rh=Ms(),k0=D0(),[jA,B0]=WA(bh),z0=W.forwardRef((i,e)=>{const{__scopeToolbar:t,orientation:o="horizontal",dir:s,loop:l=!0,...c}=i,d=Rh(t),f=wc(s);return C.jsx(jA,{scope:t,orientation:o,dir:f,children:C.jsx(Ah,{asChild:!0,...d,orientation:o,dir:f,loop:l,children:C.jsx($t.div,{role:"toolbar","aria-orientation":o,dir:f,...c,ref:e})})})});z0.displayName=bh;var H0="ToolbarSeparator",V0=W.forwardRef((i,e)=>{const{__scopeToolbar:t,...o}=i,s=B0(H0,t);return C.jsx(OA,{orientation:s.orientation==="horizontal"?"vertical":"horizontal",...o,ref:e})});V0.displayName=H0;var XA="ToolbarButton",Ph=W.forwardRef((i,e)=>{const{__scopeToolbar:t,...o}=i,s=Rh(t);return C.jsx(Tc,{asChild:!0,...s,focusable:!i.disabled,children:C.jsx($t.button,{type:"button",...o,ref:e})})});Ph.displayName=XA;var YA="ToolbarLink",G0=W.forwardRef((i,e)=>{const{__scopeToolbar:t,...o}=i,s=Rh(t);return C.jsx(Tc,{asChild:!0,...s,focusable:!0,children:C.jsx($t.a,{...o,ref:e,onKeyDown:Dt(i.onKeyDown,l=>{l.key===" "&&l.currentTarget.click()})})})});G0.displayName=YA;var W0="ToolbarToggleGroup",j0=W.forwardRef((i,e)=>{const{__scopeToolbar:t,...o}=i,s=B0(W0,t),l=k0(t);return C.jsx(VA,{"data-orientation":s.orientation,dir:s.dir,...l,...o,ref:e,rovingFocus:!1})});j0.displayName=W0;var $A="ToolbarToggleItem",qA=W.forwardRef((i,e)=>{const{__scopeToolbar:t,...o}=i,s=k0(t),l={__scopeToolbar:i.__scopeToolbar};return C.jsx(Ph,{asChild:!0,...l,children:C.jsx(GA,{...s,...o,ref:e})})});qA.displayName=$A;var KA=z0,ZA=V0,QA=Ph,ec=G0,JA=j0;function eC(i,e=globalThis==null?void 0:globalThis.document){const t=Ma(i);W.useEffect(()=>{const o=s=>{s.key==="Escape"&&t(s)};return e.addEventListener("keydown",o,{capture:!0}),()=>e.removeEventListener("keydown",o,{capture:!0})},[t,e])}var tC="DismissableLayer",jf="dismissableLayer.update",nC="dismissableLayer.pointerDownOutside",iC="dismissableLayer.focusOutside",Av,X0=W.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Lh=W.forwardRef((i,e)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:l,onInteractOutside:c,onDismiss:d,...f}=i,h=W.useContext(X0),[m,g]=W.useState(null),_=(m==null?void 0:m.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,S]=W.useState({}),M=_i(e,N=>g(N)),E=Array.from(h.layers),[y]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),v=E.indexOf(y),L=m?E.indexOf(m):-1,b=h.layersWithOutsidePointerEventsDisabled.size>0,T=L>=v,U=sC(N=>{const H=N.target,D=[...h.branches].some(P=>P.contains(H));!T||D||(s==null||s(N),c==null||c(N),N.defaultPrevented||d==null||d())},_),I=aC(N=>{const H=N.target;[...h.branches].some(P=>P.contains(H))||(l==null||l(N),c==null||c(N),N.defaultPrevented||d==null||d())},_);return eC(N=>{L===h.layers.size-1&&(o==null||o(N),!N.defaultPrevented&&d&&(N.preventDefault(),d()))},_),W.useEffect(()=>{if(m)return t&&(h.layersWithOutsidePointerEventsDisabled.size===0&&(Av=_.body.style.pointerEvents,_.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(m)),h.layers.add(m),Cv(),()=>{t&&h.layersWithOutsidePointerEventsDisabled.size===1&&(_.body.style.pointerEvents=Av)}},[m,_,t,h]),W.useEffect(()=>()=>{m&&(h.layers.delete(m),h.layersWithOutsidePointerEventsDisabled.delete(m),Cv())},[m,h]),W.useEffect(()=>{const N=()=>S({});return document.addEventListener(jf,N),()=>document.removeEventListener(jf,N)},[]),C.jsx($t.div,{...f,ref:M,style:{pointerEvents:b?T?"auto":"none":void 0,...i.style},onFocusCapture:Dt(i.onFocusCapture,I.onFocusCapture),onBlurCapture:Dt(i.onBlurCapture,I.onBlurCapture),onPointerDownCapture:Dt(i.onPointerDownCapture,U.onPointerDownCapture)})});Lh.displayName=tC;var rC="DismissableLayerBranch",oC=W.forwardRef((i,e)=>{const t=W.useContext(X0),o=W.useRef(null),s=_i(e,o);return W.useEffect(()=>{const l=o.current;if(l)return t.branches.add(l),()=>{t.branches.delete(l)}},[t.branches]),C.jsx($t.div,{...i,ref:s})});oC.displayName=rC;function sC(i,e=globalThis==null?void 0:globalThis.document){const t=Ma(i),o=W.useRef(!1),s=W.useRef(()=>{});return W.useEffect(()=>{const l=d=>{if(d.target&&!o.current){let f=function(){Y0(nC,t,h,{discrete:!0})};const h={originalEvent:d};d.pointerType==="touch"?(e.removeEventListener("click",s.current),s.current=f,e.addEventListener("click",s.current,{once:!0})):f()}else e.removeEventListener("click",s.current);o.current=!1},c=window.setTimeout(()=>{e.addEventListener("pointerdown",l)},0);return()=>{window.clearTimeout(c),e.removeEventListener("pointerdown",l),e.removeEventListener("click",s.current)}},[e,t]),{onPointerDownCapture:()=>o.current=!0}}function aC(i,e=globalThis==null?void 0:globalThis.document){const t=Ma(i),o=W.useRef(!1);return W.useEffect(()=>{const s=l=>{l.target&&!o.current&&Y0(iC,t,{originalEvent:l},{discrete:!1})};return e.addEventListener("focusin",s),()=>e.removeEventListener("focusin",s)},[e,t]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Cv(){const i=new CustomEvent(jf);document.dispatchEvent(i)}function Y0(i,e,t,{discrete:o}){const s=t.originalEvent.target,l=new CustomEvent(i,{bubbles:!1,cancelable:!0,detail:t});e&&s.addEventListener(i,e,{once:!0}),o?xA(s,l):s.dispatchEvent(l)}const lC=["top","right","bottom","left"],Ur=Math.min,Yn=Math.max,gc=Math.round,tc=Math.floor,Pi=i=>({x:i,y:i}),cC={left:"right",right:"left",bottom:"top",top:"bottom"};function Xf(i,e,t){return Yn(i,Ur(e,t))}function er(i,e){return typeof i=="function"?i(e):i}function tr(i){return i.split("-")[0]}function Es(i){return i.split("-")[1]}function Dh(i){return i==="x"?"y":"x"}function Nh(i){return i==="y"?"height":"width"}function bi(i){const e=i[0];return e==="t"||e==="b"?"y":"x"}function Ih(i){return Dh(bi(i))}function uC(i,e,t){t===void 0&&(t=!1);const o=Es(i),s=Ih(i),l=Nh(s);let c=s==="x"?o===(t?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[l]>e.floating[l]&&(c=vc(c)),[c,vc(c)]}function dC(i){const e=vc(i);return[Yf(i),e,Yf(e)]}function Yf(i){return i.includes("start")?i.replace("start","end"):i.replace("end","start")}const bv=["left","right"],Rv=["right","left"],fC=["top","bottom"],hC=["bottom","top"];function pC(i,e,t){switch(i){case"top":case"bottom":return t?e?Rv:bv:e?bv:Rv;case"left":case"right":return e?fC:hC;default:return[]}}function mC(i,e,t,o){const s=Es(i);let l=pC(tr(i),t==="start",o);return s&&(l=l.map(c=>c+"-"+s),e&&(l=l.concat(l.map(Yf)))),l}function vc(i){const e=tr(i);return cC[e]+i.slice(e.length)}function gC(i){return{top:0,right:0,bottom:0,left:0,...i}}function $0(i){return typeof i!="number"?gC(i):{top:i,right:i,bottom:i,left:i}}function _c(i){const{x:e,y:t,width:o,height:s}=i;return{width:o,height:s,top:t,left:e,right:e+o,bottom:t+s,x:e,y:t}}function Pv(i,e,t){let{reference:o,floating:s}=i;const l=bi(e),c=Ih(e),d=Nh(c),f=tr(e),h=l==="y",m=o.x+o.width/2-s.width/2,g=o.y+o.height/2-s.height/2,_=o[d]/2-s[d]/2;let S;switch(f){case"top":S={x:m,y:o.y-s.height};break;case"bottom":S={x:m,y:o.y+o.height};break;case"right":S={x:o.x+o.width,y:g};break;case"left":S={x:o.x-s.width,y:g};break;default:S={x:o.x,y:o.y}}switch(Es(e)){case"start":S[c]-=_*(t&&h?-1:1);break;case"end":S[c]+=_*(t&&h?-1:1);break}return S}async function vC(i,e){var t;e===void 0&&(e={});const{x:o,y:s,platform:l,rects:c,elements:d,strategy:f}=i,{boundary:h="clippingAncestors",rootBoundary:m="viewport",elementContext:g="floating",altBoundary:_=!1,padding:S=0}=er(e,i),M=$0(S),y=d[_?g==="floating"?"reference":"floating":g],v=_c(await l.getClippingRect({element:(t=await(l.isElement==null?void 0:l.isElement(y)))==null||t?y:y.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(d.floating)),boundary:h,rootBoundary:m,strategy:f})),L=g==="floating"?{x:o,y:s,width:c.floating.width,height:c.floating.height}:c.reference,b=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d.floating)),T=await(l.isElement==null?void 0:l.isElement(b))?await(l.getScale==null?void 0:l.getScale(b))||{x:1,y:1}:{x:1,y:1},U=_c(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:L,offsetParent:b,strategy:f}):L);return{top:(v.top-U.top+M.top)/T.y,bottom:(U.bottom-v.bottom+M.bottom)/T.y,left:(v.left-U.left+M.left)/T.x,right:(U.right-v.right+M.right)/T.x}}const _C=50,xC=async(i,e,t)=>{const{placement:o="bottom",strategy:s="absolute",middleware:l=[],platform:c}=t,d=c.detectOverflow?c:{...c,detectOverflow:vC},f=await(c.isRTL==null?void 0:c.isRTL(e));let h=await c.getElementRects({reference:i,floating:e,strategy:s}),{x:m,y:g}=Pv(h,o,f),_=o,S=0;const M={};for(let E=0;E<l.length;E++){const y=l[E];if(!y)continue;const{name:v,fn:L}=y,{x:b,y:T,data:U,reset:I}=await L({x:m,y:g,initialPlacement:o,placement:_,strategy:s,middlewareData:M,rects:h,platform:d,elements:{reference:i,floating:e}});m=b??m,g=T??g,M[v]={...M[v],...U},I&&S<_C&&(S++,typeof I=="object"&&(I.placement&&(_=I.placement),I.rects&&(h=I.rects===!0?await c.getElementRects({reference:i,floating:e,strategy:s}):I.rects),{x:m,y:g}=Pv(h,_,f)),E=-1)}return{x:m,y:g,placement:_,strategy:s,middlewareData:M}},yC=i=>({name:"arrow",options:i,async fn(e){const{x:t,y:o,placement:s,rects:l,platform:c,elements:d,middlewareData:f}=e,{element:h,padding:m=0}=er(i,e)||{};if(h==null)return{};const g=$0(m),_={x:t,y:o},S=Ih(s),M=Nh(S),E=await c.getDimensions(h),y=S==="y",v=y?"top":"left",L=y?"bottom":"right",b=y?"clientHeight":"clientWidth",T=l.reference[M]+l.reference[S]-_[S]-l.floating[M],U=_[S]-l.reference[S],I=await(c.getOffsetParent==null?void 0:c.getOffsetParent(h));let N=I?I[b]:0;(!N||!await(c.isElement==null?void 0:c.isElement(I)))&&(N=d.floating[b]||l.floating[M]);const H=T/2-U/2,D=N/2-E[M]/2-1,P=Ur(g[v],D),k=Ur(g[L],D),Z=P,q=N-E[M]-k,ee=N/2-E[M]/2+H,de=Xf(Z,ee,q),Q=!f.arrow&&Es(s)!=null&&ee!==de&&l.reference[M]/2-(ee<Z?P:k)-E[M]/2<0,ce=Q?ee<Z?ee-Z:ee-q:0;return{[S]:_[S]+ce,data:{[S]:de,centerOffset:ee-de-ce,...Q&&{alignmentOffset:ce}},reset:Q}}}),SC=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(e){var t,o;const{placement:s,middlewareData:l,rects:c,initialPlacement:d,platform:f,elements:h}=e,{mainAxis:m=!0,crossAxis:g=!0,fallbackPlacements:_,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:M="none",flipAlignment:E=!0,...y}=er(i,e);if((t=l.arrow)!=null&&t.alignmentOffset)return{};const v=tr(s),L=bi(d),b=tr(d)===d,T=await(f.isRTL==null?void 0:f.isRTL(h.floating)),U=_||(b||!E?[vc(d)]:dC(d)),I=M!=="none";!_&&I&&U.push(...mC(d,E,M,T));const N=[d,...U],H=await f.detectOverflow(e,y),D=[];let P=((o=l.flip)==null?void 0:o.overflows)||[];if(m&&D.push(H[v]),g){const ee=uC(s,c,T);D.push(H[ee[0]],H[ee[1]])}if(P=[...P,{placement:s,overflows:D}],!D.every(ee=>ee<=0)){var k,Z;const ee=(((k=l.flip)==null?void 0:k.index)||0)+1,de=N[ee];if(de&&(!(g==="alignment"?L!==bi(de):!1)||P.every(B=>bi(B.placement)===L?B.overflows[0]>0:!0)))return{data:{index:ee,overflows:P},reset:{placement:de}};let Q=(Z=P.filter(ce=>ce.overflows[0]<=0).sort((ce,B)=>ce.overflows[1]-B.overflows[1])[0])==null?void 0:Z.placement;if(!Q)switch(S){case"bestFit":{var q;const ce=(q=P.filter(B=>{if(I){const ue=bi(B.placement);return ue===L||ue==="y"}return!0}).map(B=>[B.placement,B.overflows.filter(ue=>ue>0).reduce((ue,oe)=>ue+oe,0)]).sort((B,ue)=>B[1]-ue[1])[0])==null?void 0:q[0];ce&&(Q=ce);break}case"initialPlacement":Q=d;break}if(s!==Q)return{reset:{placement:Q}}}return{}}}};function Lv(i,e){return{top:i.top-e.height,right:i.right-e.width,bottom:i.bottom-e.height,left:i.left-e.width}}function Dv(i){return lC.some(e=>i[e]>=0)}const MC=function(i){return i===void 0&&(i={}),{name:"hide",options:i,async fn(e){const{rects:t,platform:o}=e,{strategy:s="referenceHidden",...l}=er(i,e);switch(s){case"referenceHidden":{const c=await o.detectOverflow(e,{...l,elementContext:"reference"}),d=Lv(c,t.reference);return{data:{referenceHiddenOffsets:d,referenceHidden:Dv(d)}}}case"escaped":{const c=await o.detectOverflow(e,{...l,altBoundary:!0}),d=Lv(c,t.floating);return{data:{escapedOffsets:d,escaped:Dv(d)}}}default:return{}}}}},q0=new Set(["left","top"]);async function EC(i,e){const{placement:t,platform:o,elements:s}=i,l=await(o.isRTL==null?void 0:o.isRTL(s.floating)),c=tr(t),d=Es(t),f=bi(t)==="y",h=q0.has(c)?-1:1,m=l&&f?-1:1,g=er(e,i);let{mainAxis:_,crossAxis:S,alignmentAxis:M}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return d&&typeof M=="number"&&(S=d==="end"?M*-1:M),f?{x:S*m,y:_*h}:{x:_*h,y:S*m}}const wC=function(i){return i===void 0&&(i=0),{name:"offset",options:i,async fn(e){var t,o;const{x:s,y:l,placement:c,middlewareData:d}=e,f=await EC(e,i);return c===((t=d.offset)==null?void 0:t.placement)&&(o=d.arrow)!=null&&o.alignmentOffset?{}:{x:s+f.x,y:l+f.y,data:{...f,placement:c}}}}},TC=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(e){const{x:t,y:o,placement:s,platform:l}=e,{mainAxis:c=!0,crossAxis:d=!1,limiter:f={fn:v=>{let{x:L,y:b}=v;return{x:L,y:b}}},...h}=er(i,e),m={x:t,y:o},g=await l.detectOverflow(e,h),_=bi(tr(s)),S=Dh(_);let M=m[S],E=m[_];if(c){const v=S==="y"?"top":"left",L=S==="y"?"bottom":"right",b=M+g[v],T=M-g[L];M=Xf(b,M,T)}if(d){const v=_==="y"?"top":"left",L=_==="y"?"bottom":"right",b=E+g[v],T=E-g[L];E=Xf(b,E,T)}const y=f.fn({...e,[S]:M,[_]:E});return{...y,data:{x:y.x-t,y:y.y-o,enabled:{[S]:c,[_]:d}}}}}},AC=function(i){return i===void 0&&(i={}),{options:i,fn(e){const{x:t,y:o,placement:s,rects:l,middlewareData:c}=e,{offset:d=0,mainAxis:f=!0,crossAxis:h=!0}=er(i,e),m={x:t,y:o},g=bi(s),_=Dh(g);let S=m[_],M=m[g];const E=er(d,e),y=typeof E=="number"?{mainAxis:E,crossAxis:0}:{mainAxis:0,crossAxis:0,...E};if(f){const b=_==="y"?"height":"width",T=l.reference[_]-l.floating[b]+y.mainAxis,U=l.reference[_]+l.reference[b]-y.mainAxis;S<T?S=T:S>U&&(S=U)}if(h){var v,L;const b=_==="y"?"width":"height",T=q0.has(tr(s)),U=l.reference[g]-l.floating[b]+(T&&((v=c.offset)==null?void 0:v[g])||0)+(T?0:y.crossAxis),I=l.reference[g]+l.reference[b]+(T?0:((L=c.offset)==null?void 0:L[g])||0)-(T?y.crossAxis:0);M<U?M=U:M>I&&(M=I)}return{[_]:S,[g]:M}}}},CC=function(i){return i===void 0&&(i={}),{name:"size",options:i,async fn(e){var t,o;const{placement:s,rects:l,platform:c,elements:d}=e,{apply:f=()=>{},...h}=er(i,e),m=await c.detectOverflow(e,h),g=tr(s),_=Es(s),S=bi(s)==="y",{width:M,height:E}=l.floating;let y,v;g==="top"||g==="bottom"?(y=g,v=_===(await(c.isRTL==null?void 0:c.isRTL(d.floating))?"start":"end")?"left":"right"):(v=g,y=_==="end"?"top":"bottom");const L=E-m.top-m.bottom,b=M-m.left-m.right,T=Ur(E-m[y],L),U=Ur(M-m[v],b),I=!e.middlewareData.shift;let N=T,H=U;if((t=e.middlewareData.shift)!=null&&t.enabled.x&&(H=b),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(N=L),I&&!_){const P=Yn(m.left,0),k=Yn(m.right,0),Z=Yn(m.top,0),q=Yn(m.bottom,0);S?H=M-2*(P!==0||k!==0?P+k:Yn(m.left,m.right)):N=E-2*(Z!==0||q!==0?Z+q:Yn(m.top,m.bottom))}await f({...e,availableWidth:H,availableHeight:N});const D=await c.getDimensions(d.floating);return M!==D.width||E!==D.height?{reset:{rects:!0}}:{}}}};function Ac(){return typeof window<"u"}function ws(i){return K0(i)?(i.nodeName||"").toLowerCase():"#document"}function $n(i){var e;return(i==null||(e=i.ownerDocument)==null?void 0:e.defaultView)||window}function Ii(i){var e;return(e=(K0(i)?i.ownerDocument:i.document)||window.document)==null?void 0:e.documentElement}function K0(i){return Ac()?i instanceof Node||i instanceof $n(i).Node:!1}function xi(i){return Ac()?i instanceof Element||i instanceof $n(i).Element:!1}function nr(i){return Ac()?i instanceof HTMLElement||i instanceof $n(i).HTMLElement:!1}function Nv(i){return!Ac()||typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof $n(i).ShadowRoot}function wa(i){const{overflow:e,overflowX:t,overflowY:o,display:s}=yi(i);return/auto|scroll|overlay|hidden|clip/.test(e+o+t)&&s!=="inline"&&s!=="contents"}function bC(i){return/^(table|td|th)$/.test(ws(i))}function Cc(i){try{if(i.matches(":popover-open"))return!0}catch{}try{return i.matches(":modal")}catch{return!1}}const RC=/transform|translate|scale|rotate|perspective|filter/,PC=/paint|layout|strict|content/,so=i=>!!i&&i!=="none";let Kd;function Uh(i){const e=xi(i)?yi(i):i;return so(e.transform)||so(e.translate)||so(e.scale)||so(e.rotate)||so(e.perspective)||!Fh()&&(so(e.backdropFilter)||so(e.filter))||RC.test(e.willChange||"")||PC.test(e.contain||"")}function LC(i){let e=Fr(i);for(;nr(e)&&!vs(e);){if(Uh(e))return e;if(Cc(e))return null;e=Fr(e)}return null}function Fh(){return Kd==null&&(Kd=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Kd}function vs(i){return/^(html|body|#document)$/.test(ws(i))}function yi(i){return $n(i).getComputedStyle(i)}function bc(i){return xi(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function Fr(i){if(ws(i)==="html")return i;const e=i.assignedSlot||i.parentNode||Nv(i)&&i.host||Ii(i);return Nv(e)?e.host:e}function Z0(i){const e=Fr(i);return vs(e)?i.ownerDocument?i.ownerDocument.body:i.body:nr(e)&&wa(e)?e:Z0(e)}function ga(i,e,t){var o;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=Z0(i),l=s===((o=i.ownerDocument)==null?void 0:o.body),c=$n(s);if(l){const d=$f(c);return e.concat(c,c.visualViewport||[],wa(s)?s:[],d&&t?ga(d):[])}else return e.concat(s,ga(s,[],t))}function $f(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function Q0(i){const e=yi(i);let t=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=nr(i),l=s?i.offsetWidth:t,c=s?i.offsetHeight:o,d=gc(t)!==l||gc(o)!==c;return d&&(t=l,o=c),{width:t,height:o,$:d}}function Oh(i){return xi(i)?i:i.contextElement}function us(i){const e=Oh(i);if(!nr(e))return Pi(1);const t=e.getBoundingClientRect(),{width:o,height:s,$:l}=Q0(e);let c=(l?gc(t.width):t.width)/o,d=(l?gc(t.height):t.height)/s;return(!c||!Number.isFinite(c))&&(c=1),(!d||!Number.isFinite(d))&&(d=1),{x:c,y:d}}const DC=Pi(0);function J0(i){const e=$n(i);return!Fh()||!e.visualViewport?DC:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function NC(i,e,t){return e===void 0&&(e=!1),!t||e&&t!==$n(i)?!1:e}function vo(i,e,t,o){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=i.getBoundingClientRect(),l=Oh(i);let c=Pi(1);e&&(o?xi(o)&&(c=us(o)):c=us(i));const d=NC(l,t,o)?J0(l):Pi(0);let f=(s.left+d.x)/c.x,h=(s.top+d.y)/c.y,m=s.width/c.x,g=s.height/c.y;if(l){const _=$n(l),S=o&&xi(o)?$n(o):o;let M=_,E=$f(M);for(;E&&o&&S!==M;){const y=us(E),v=E.getBoundingClientRect(),L=yi(E),b=v.left+(E.clientLeft+parseFloat(L.paddingLeft))*y.x,T=v.top+(E.clientTop+parseFloat(L.paddingTop))*y.y;f*=y.x,h*=y.y,m*=y.x,g*=y.y,f+=b,h+=T,M=$n(E),E=$f(M)}}return _c({width:m,height:g,x:f,y:h})}function Rc(i,e){const t=bc(i).scrollLeft;return e?e.left+t:vo(Ii(i)).left+t}function e_(i,e){const t=i.getBoundingClientRect(),o=t.left+e.scrollLeft-Rc(i,t),s=t.top+e.scrollTop;return{x:o,y:s}}function IC(i){let{elements:e,rect:t,offsetParent:o,strategy:s}=i;const l=s==="fixed",c=Ii(o),d=e?Cc(e.floating):!1;if(o===c||d&&l)return t;let f={scrollLeft:0,scrollTop:0},h=Pi(1);const m=Pi(0),g=nr(o);if((g||!g&&!l)&&((ws(o)!=="body"||wa(c))&&(f=bc(o)),g)){const S=vo(o);h=us(o),m.x=S.x+o.clientLeft,m.y=S.y+o.clientTop}const _=c&&!g&&!l?e_(c,f):Pi(0);return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-f.scrollLeft*h.x+m.x+_.x,y:t.y*h.y-f.scrollTop*h.y+m.y+_.y}}function UC(i){return Array.from(i.getClientRects())}function FC(i){const e=Ii(i),t=bc(i),o=i.ownerDocument.body,s=Yn(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),l=Yn(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let c=-t.scrollLeft+Rc(i);const d=-t.scrollTop;return yi(o).direction==="rtl"&&(c+=Yn(e.clientWidth,o.clientWidth)-s),{width:s,height:l,x:c,y:d}}const Iv=25;function OC(i,e){const t=$n(i),o=Ii(i),s=t.visualViewport;let l=o.clientWidth,c=o.clientHeight,d=0,f=0;if(s){l=s.width,c=s.height;const m=Fh();(!m||m&&e==="fixed")&&(d=s.offsetLeft,f=s.offsetTop)}const h=Rc(o);if(h<=0){const m=o.ownerDocument,g=m.body,_=getComputedStyle(g),S=m.compatMode==="CSS1Compat"&&parseFloat(_.marginLeft)+parseFloat(_.marginRight)||0,M=Math.abs(o.clientWidth-g.clientWidth-S);M<=Iv&&(l-=M)}else h<=Iv&&(l+=h);return{width:l,height:c,x:d,y:f}}function kC(i,e){const t=vo(i,!0,e==="fixed"),o=t.top+i.clientTop,s=t.left+i.clientLeft,l=nr(i)?us(i):Pi(1),c=i.clientWidth*l.x,d=i.clientHeight*l.y,f=s*l.x,h=o*l.y;return{width:c,height:d,x:f,y:h}}function Uv(i,e,t){let o;if(e==="viewport")o=OC(i,t);else if(e==="document")o=FC(Ii(i));else if(xi(e))o=kC(e,t);else{const s=J0(i);o={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return _c(o)}function t_(i,e){const t=Fr(i);return t===e||!xi(t)||vs(t)?!1:yi(t).position==="fixed"||t_(t,e)}function BC(i,e){const t=e.get(i);if(t)return t;let o=ga(i,[],!1).filter(d=>xi(d)&&ws(d)!=="body"),s=null;const l=yi(i).position==="fixed";let c=l?Fr(i):i;for(;xi(c)&&!vs(c);){const d=yi(c),f=Uh(c);!f&&d.position==="fixed"&&(s=null),(l?!f&&!s:!f&&d.position==="static"&&!!s&&(s.position==="absolute"||s.position==="fixed")||wa(c)&&!f&&t_(i,c))?o=o.filter(m=>m!==c):s=d,c=Fr(c)}return e.set(i,o),o}function zC(i){let{element:e,boundary:t,rootBoundary:o,strategy:s}=i;const c=[...t==="clippingAncestors"?Cc(e)?[]:BC(e,this._c):[].concat(t),o],d=Uv(e,c[0],s);let f=d.top,h=d.right,m=d.bottom,g=d.left;for(let _=1;_<c.length;_++){const S=Uv(e,c[_],s);f=Yn(S.top,f),h=Ur(S.right,h),m=Ur(S.bottom,m),g=Yn(S.left,g)}return{width:h-g,height:m-f,x:g,y:f}}function HC(i){const{width:e,height:t}=Q0(i);return{width:e,height:t}}function VC(i,e,t){const o=nr(e),s=Ii(e),l=t==="fixed",c=vo(i,!0,l,e);let d={scrollLeft:0,scrollTop:0};const f=Pi(0);function h(){f.x=Rc(s)}if(o||!o&&!l)if((ws(e)!=="body"||wa(s))&&(d=bc(e)),o){const S=vo(e,!0,l,e);f.x=S.x+e.clientLeft,f.y=S.y+e.clientTop}else s&&h();l&&!o&&s&&h();const m=s&&!o&&!l?e_(s,d):Pi(0),g=c.left+d.scrollLeft-f.x-m.x,_=c.top+d.scrollTop-f.y-m.y;return{x:g,y:_,width:c.width,height:c.height}}function Zd(i){return yi(i).position==="static"}function Fv(i,e){if(!nr(i)||yi(i).position==="fixed")return null;if(e)return e(i);let t=i.offsetParent;return Ii(i)===t&&(t=t.ownerDocument.body),t}function n_(i,e){const t=$n(i);if(Cc(i))return t;if(!nr(i)){let s=Fr(i);for(;s&&!vs(s);){if(xi(s)&&!Zd(s))return s;s=Fr(s)}return t}let o=Fv(i,e);for(;o&&bC(o)&&Zd(o);)o=Fv(o,e);return o&&vs(o)&&Zd(o)&&!Uh(o)?t:o||LC(i)||t}const GC=async function(i){const e=this.getOffsetParent||n_,t=this.getDimensions,o=await t(i.floating);return{reference:VC(i.reference,await e(i.floating),i.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function WC(i){return yi(i).direction==="rtl"}const jC={convertOffsetParentRelativeRectToViewportRelativeRect:IC,getDocumentElement:Ii,getClippingRect:zC,getOffsetParent:n_,getElementRects:GC,getClientRects:UC,getDimensions:HC,getScale:us,isElement:xi,isRTL:WC};function i_(i,e){return i.x===e.x&&i.y===e.y&&i.width===e.width&&i.height===e.height}function XC(i,e){let t=null,o;const s=Ii(i);function l(){var d;clearTimeout(o),(d=t)==null||d.disconnect(),t=null}function c(d,f){d===void 0&&(d=!1),f===void 0&&(f=1),l();const h=i.getBoundingClientRect(),{left:m,top:g,width:_,height:S}=h;if(d||e(),!_||!S)return;const M=tc(g),E=tc(s.clientWidth-(m+_)),y=tc(s.clientHeight-(g+S)),v=tc(m),b={rootMargin:-M+"px "+-E+"px "+-y+"px "+-v+"px",threshold:Yn(0,Ur(1,f))||1};let T=!0;function U(I){const N=I[0].intersectionRatio;if(N!==f){if(!T)return c();N?c(!1,N):o=setTimeout(()=>{c(!1,1e-7)},1e3)}N===1&&!i_(h,i.getBoundingClientRect())&&c(),T=!1}try{t=new IntersectionObserver(U,{...b,root:s.ownerDocument})}catch{t=new IntersectionObserver(U,b)}t.observe(i)}return c(!0),l}function YC(i,e,t,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:l=!0,elementResize:c=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:f=!1}=o,h=Oh(i),m=s||l?[...h?ga(h):[],...e?ga(e):[]]:[];m.forEach(v=>{s&&v.addEventListener("scroll",t,{passive:!0}),l&&v.addEventListener("resize",t)});const g=h&&d?XC(h,t):null;let _=-1,S=null;c&&(S=new ResizeObserver(v=>{let[L]=v;L&&L.target===h&&S&&e&&(S.unobserve(e),cancelAnimationFrame(_),_=requestAnimationFrame(()=>{var b;(b=S)==null||b.observe(e)})),t()}),h&&!f&&S.observe(h),e&&S.observe(e));let M,E=f?vo(i):null;f&&y();function y(){const v=vo(i);E&&!i_(E,v)&&t(),E=v,M=requestAnimationFrame(y)}return t(),()=>{var v;m.forEach(L=>{s&&L.removeEventListener("scroll",t),l&&L.removeEventListener("resize",t)}),g==null||g(),(v=S)==null||v.disconnect(),S=null,f&&cancelAnimationFrame(M)}}const $C=wC,qC=TC,KC=SC,ZC=CC,QC=MC,Ov=yC,JC=AC,eb=(i,e,t)=>{const o=new Map,s={platform:jC,...t},l={...s.platform,_c:o};return xC(i,e,{...s,platform:l})};var tb=typeof document<"u",nb=function(){},uc=tb?W.useLayoutEffect:nb;function xc(i,e){if(i===e)return!0;if(typeof i!=typeof e)return!1;if(typeof i=="function"&&i.toString()===e.toString())return!0;let t,o,s;if(i&&e&&typeof i=="object"){if(Array.isArray(i)){if(t=i.length,t!==e.length)return!1;for(o=t;o--!==0;)if(!xc(i[o],e[o]))return!1;return!0}if(s=Object.keys(i),t=s.length,t!==Object.keys(e).length)return!1;for(o=t;o--!==0;)if(!{}.hasOwnProperty.call(e,s[o]))return!1;for(o=t;o--!==0;){const l=s[o];if(!(l==="_owner"&&i.$$typeof)&&!xc(i[l],e[l]))return!1}return!0}return i!==i&&e!==e}function r_(i){return typeof window>"u"?1:(i.ownerDocument.defaultView||window).devicePixelRatio||1}function kv(i,e){const t=r_(i);return Math.round(e*t)/t}function Qd(i){const e=W.useRef(i);return uc(()=>{e.current=i}),e}function ib(i){i===void 0&&(i={});const{placement:e="bottom",strategy:t="absolute",middleware:o=[],platform:s,elements:{reference:l,floating:c}={},transform:d=!0,whileElementsMounted:f,open:h}=i,[m,g]=W.useState({x:0,y:0,strategy:t,placement:e,middlewareData:{},isPositioned:!1}),[_,S]=W.useState(o);xc(_,o)||S(o);const[M,E]=W.useState(null),[y,v]=W.useState(null),L=W.useCallback(B=>{B!==I.current&&(I.current=B,E(B))},[]),b=W.useCallback(B=>{B!==N.current&&(N.current=B,v(B))},[]),T=l||M,U=c||y,I=W.useRef(null),N=W.useRef(null),H=W.useRef(m),D=f!=null,P=Qd(f),k=Qd(s),Z=Qd(h),q=W.useCallback(()=>{if(!I.current||!N.current)return;const B={placement:e,strategy:t,middleware:_};k.current&&(B.platform=k.current),eb(I.current,N.current,B).then(ue=>{const oe={...ue,isPositioned:Z.current!==!1};ee.current&&!xc(H.current,oe)&&(H.current=oe,Th.flushSync(()=>{g(oe)}))})},[_,e,t,k,Z]);uc(()=>{h===!1&&H.current.isPositioned&&(H.current.isPositioned=!1,g(B=>({...B,isPositioned:!1})))},[h]);const ee=W.useRef(!1);uc(()=>(ee.current=!0,()=>{ee.current=!1}),[]),uc(()=>{if(T&&(I.current=T),U&&(N.current=U),T&&U){if(P.current)return P.current(T,U,q);q()}},[T,U,q,P,D]);const de=W.useMemo(()=>({reference:I,floating:N,setReference:L,setFloating:b}),[L,b]),Q=W.useMemo(()=>({reference:T,floating:U}),[T,U]),ce=W.useMemo(()=>{const B={position:t,left:0,top:0};if(!Q.floating)return B;const ue=kv(Q.floating,m.x),oe=kv(Q.floating,m.y);return d?{...B,transform:"translate("+ue+"px, "+oe+"px)",...r_(Q.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:ue,top:oe}},[t,d,Q.floating,m.x,m.y]);return W.useMemo(()=>({...m,update:q,refs:de,elements:Q,floatingStyles:ce}),[m,q,de,Q,ce])}const rb=i=>{function e(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:i,fn(t){const{element:o,padding:s}=typeof i=="function"?i(t):i;return o&&e(o)?o.current!=null?Ov({element:o.current,padding:s}).fn(t):{}:o?Ov({element:o,padding:s}).fn(t):{}}}},ob=(i,e)=>{const t=$C(i);return{name:t.name,fn:t.fn,options:[i,e]}},sb=(i,e)=>{const t=qC(i);return{name:t.name,fn:t.fn,options:[i,e]}},ab=(i,e)=>({fn:JC(i).fn,options:[i,e]}),lb=(i,e)=>{const t=KC(i);return{name:t.name,fn:t.fn,options:[i,e]}},cb=(i,e)=>{const t=ZC(i);return{name:t.name,fn:t.fn,options:[i,e]}},ub=(i,e)=>{const t=QC(i);return{name:t.name,fn:t.fn,options:[i,e]}},db=(i,e)=>{const t=rb(i);return{name:t.name,fn:t.fn,options:[i,e]}};var fb="Arrow",o_=W.forwardRef((i,e)=>{const{children:t,width:o=10,height:s=5,...l}=i;return C.jsx($t.svg,{...l,ref:e,width:o,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:i.asChild?t:C.jsx("polygon",{points:"0,0 30,0 15,10"})})});o_.displayName=fb;var hb=o_;function pb(i){const[e,t]=W.useState(void 0);return Ir(()=>{if(i){t({width:i.offsetWidth,height:i.offsetHeight});const o=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const l=s[0];let c,d;if("borderBoxSize"in l){const f=l.borderBoxSize,h=Array.isArray(f)?f[0]:f;c=h.inlineSize,d=h.blockSize}else c=i.offsetWidth,d=i.offsetHeight;t({width:c,height:d})});return o.observe(i,{box:"border-box"}),()=>o.unobserve(i)}else t(void 0)},[i]),e}var kh="Popper",[s_,Pc]=Or(kh),[mb,a_]=s_(kh),l_=i=>{const{__scopePopper:e,children:t}=i,[o,s]=W.useState(null);return C.jsx(mb,{scope:e,anchor:o,onAnchorChange:s,children:t})};l_.displayName=kh;var c_="PopperAnchor",u_=W.forwardRef((i,e)=>{const{__scopePopper:t,virtualRef:o,...s}=i,l=a_(c_,t),c=W.useRef(null),d=_i(e,c),f=W.useRef(null);return W.useEffect(()=>{const h=f.current;f.current=(o==null?void 0:o.current)||c.current,h!==f.current&&l.onAnchorChange(f.current)}),o?null:C.jsx($t.div,{...s,ref:d})});u_.displayName=c_;var Bh="PopperContent",[gb,vb]=s_(Bh),d_=W.forwardRef((i,e)=>{var pe,be,Re,Ye,bt,ht;const{__scopePopper:t,side:o="bottom",sideOffset:s=0,align:l="center",alignOffset:c=0,arrowPadding:d=0,avoidCollisions:f=!0,collisionBoundary:h=[],collisionPadding:m=0,sticky:g="partial",hideWhenDetached:_=!1,updatePositionStrategy:S="optimized",onPlaced:M,...E}=i,y=a_(Bh,t),[v,L]=W.useState(null),b=_i(e,V=>L(V)),[T,U]=W.useState(null),I=pb(T),N=(I==null?void 0:I.width)??0,H=(I==null?void 0:I.height)??0,D=o+(l!=="center"?"-"+l:""),P=typeof m=="number"?m:{top:0,right:0,bottom:0,left:0,...m},k=Array.isArray(h)?h:[h],Z=k.length>0,q={padding:P,boundary:k.filter(xb),altBoundary:Z},{refs:ee,floatingStyles:de,placement:Q,isPositioned:ce,middlewareData:B}=ib({strategy:"fixed",placement:D,whileElementsMounted:(...V)=>YC(...V,{animationFrame:S==="always"}),elements:{reference:y.anchor},middleware:[ob({mainAxis:s+H,alignmentAxis:c}),f&&sb({mainAxis:!0,crossAxis:!1,limiter:g==="partial"?ab():void 0,...q}),f&&lb({...q}),cb({...q,apply:({elements:V,rects:St,availableWidth:Je,availableHeight:vt})=>{const{width:$e,height:Rt}=St.reference,Ie=V.floating.style;Ie.setProperty("--radix-popper-available-width",`${Je}px`),Ie.setProperty("--radix-popper-available-height",`${vt}px`),Ie.setProperty("--radix-popper-anchor-width",`${$e}px`),Ie.setProperty("--radix-popper-anchor-height",`${Rt}px`)}}),T&&db({element:T,padding:d}),yb({arrowWidth:N,arrowHeight:H}),_&&ub({strategy:"referenceHidden",...q})]}),[ue,oe]=p_(Q),z=Ma(M);Ir(()=>{ce&&(z==null||z())},[ce,z]);const ae=(pe=B.arrow)==null?void 0:pe.x,Be=(be=B.arrow)==null?void 0:be.y,ke=((Re=B.arrow)==null?void 0:Re.centerOffset)!==0,[ne,ge]=W.useState();return Ir(()=>{v&&ge(window.getComputedStyle(v).zIndex)},[v]),C.jsx("div",{ref:ee.setFloating,"data-radix-popper-content-wrapper":"",style:{...de,transform:ce?de.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ne,"--radix-popper-transform-origin":[(Ye=B.transformOrigin)==null?void 0:Ye.x,(bt=B.transformOrigin)==null?void 0:bt.y].join(" "),...((ht=B.hide)==null?void 0:ht.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:i.dir,children:C.jsx(gb,{scope:t,placedSide:ue,onArrowChange:U,arrowX:ae,arrowY:Be,shouldHideArrow:ke,children:C.jsx($t.div,{"data-side":ue,"data-align":oe,...E,ref:b,style:{...E.style,animation:ce?void 0:"none"}})})})});d_.displayName=Bh;var f_="PopperArrow",_b={top:"bottom",right:"left",bottom:"top",left:"right"},h_=W.forwardRef(function(e,t){const{__scopePopper:o,...s}=e,l=vb(f_,o),c=_b[l.placedSide];return C.jsx("span",{ref:l.onArrowChange,style:{position:"absolute",left:l.arrowX,top:l.arrowY,[c]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[l.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[l.placedSide],visibility:l.shouldHideArrow?"hidden":void 0},children:C.jsx(hb,{...s,ref:t,style:{...s.style,display:"block"}})})});h_.displayName=f_;function xb(i){return i!==null}var yb=i=>({name:"transformOrigin",options:i,fn(e){var y,v,L;const{placement:t,rects:o,middlewareData:s}=e,c=((y=s.arrow)==null?void 0:y.centerOffset)!==0,d=c?0:i.arrowWidth,f=c?0:i.arrowHeight,[h,m]=p_(t),g={start:"0%",center:"50%",end:"100%"}[m],_=(((v=s.arrow)==null?void 0:v.x)??0)+d/2,S=(((L=s.arrow)==null?void 0:L.y)??0)+f/2;let M="",E="";return h==="bottom"?(M=c?g:`${_}px`,E=`${-f}px`):h==="top"?(M=c?g:`${_}px`,E=`${o.floating.height+f}px`):h==="right"?(M=`${-f}px`,E=c?g:`${S}px`):h==="left"&&(M=`${o.floating.width+f}px`,E=c?g:`${S}px`),{data:{x:M,y:E}}}});function p_(i){const[e,t="center"]=i.split("-");return[e,t]}var m_=l_,g_=u_,v_=d_,__=h_,Sb="Portal",zh=W.forwardRef((i,e)=>{var d;const{container:t,...o}=i,[s,l]=W.useState(!1);Ir(()=>l(!0),[]);const c=t||s&&((d=globalThis==null?void 0:globalThis.document)==null?void 0:d.body);return c?vA.createPortal(C.jsx($t.div,{...o,ref:e}),c):null});zh.displayName=Sb;function Mb(i,e){return W.useReducer((t,o)=>e[t][o]??t,i)}var Ts=i=>{const{present:e,children:t}=i,o=Eb(e),s=typeof t=="function"?t({present:o.isPresent}):W.Children.only(t),l=_i(o.ref,wb(s));return typeof t=="function"||o.isPresent?W.cloneElement(s,{ref:l}):null};Ts.displayName="Presence";function Eb(i){const[e,t]=W.useState(),o=W.useRef(null),s=W.useRef(i),l=W.useRef("none"),c=i?"mounted":"unmounted",[d,f]=Mb(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return W.useEffect(()=>{const h=nc(o.current);l.current=d==="mounted"?h:"none"},[d]),Ir(()=>{const h=o.current,m=s.current;if(m!==i){const _=l.current,S=nc(h);i?f("MOUNT"):S==="none"||(h==null?void 0:h.display)==="none"?f("UNMOUNT"):f(m&&_!==S?"ANIMATION_OUT":"UNMOUNT"),s.current=i}},[i,f]),Ir(()=>{if(e){let h;const m=e.ownerDocument.defaultView??window,g=S=>{const E=nc(o.current).includes(CSS.escape(S.animationName));if(S.target===e&&E&&(f("ANIMATION_END"),!s.current)){const y=e.style.animationFillMode;e.style.animationFillMode="forwards",h=m.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=y)})}},_=S=>{S.target===e&&(l.current=nc(o.current))};return e.addEventListener("animationstart",_),e.addEventListener("animationcancel",g),e.addEventListener("animationend",g),()=>{m.clearTimeout(h),e.removeEventListener("animationstart",_),e.removeEventListener("animationcancel",g),e.removeEventListener("animationend",g)}}else f("ANIMATION_END")},[e,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:W.useCallback(h=>{o.current=h?getComputedStyle(h):null,t(h)},[])}}function nc(i){return(i==null?void 0:i.animationName)||"none"}function wb(i){var o,s;let e=(o=Object.getOwnPropertyDescriptor(i.props,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?i.ref:(e=(s=Object.getOwnPropertyDescriptor(i,"ref"))==null?void 0:s.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?i.props.ref:i.props.ref||i.ref)}var Tb=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Ab="VisuallyHidden",x_=W.forwardRef((i,e)=>C.jsx($t.span,{...i,ref:e,style:{...Tb,...i.style}}));x_.displayName=Ab;var Cb=x_,[Lc]=Or("Tooltip",[Pc]),Dc=Pc(),y_="TooltipProvider",bb=700,qf="tooltip.open",[Rb,Hh]=Lc(y_),S_=i=>{const{__scopeTooltip:e,delayDuration:t=bb,skipDelayDuration:o=300,disableHoverableContent:s=!1,children:l}=i,c=W.useRef(!0),d=W.useRef(!1),f=W.useRef(0);return W.useEffect(()=>{const h=f.current;return()=>window.clearTimeout(h)},[]),C.jsx(Rb,{scope:e,isOpenDelayedRef:c,delayDuration:t,onOpen:W.useCallback(()=>{window.clearTimeout(f.current),c.current=!1},[]),onClose:W.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>c.current=!0,o)},[o]),isPointerInTransitRef:d,onPointerInTransitChange:W.useCallback(h=>{d.current=h},[]),disableHoverableContent:s,children:l})};S_.displayName=y_;var va="Tooltip",[Pb,Ta]=Lc(va),M_=i=>{const{__scopeTooltip:e,children:t,open:o,defaultOpen:s,onOpenChange:l,disableHoverableContent:c,delayDuration:d}=i,f=Hh(va,i.__scopeTooltip),h=Dc(e),[m,g]=W.useState(null),_=wh(),S=W.useRef(0),M=c??f.disableHoverableContent,E=d??f.delayDuration,y=W.useRef(!1),[v,L]=_o({prop:o,defaultProp:s??!1,onChange:N=>{N?(f.onOpen(),document.dispatchEvent(new CustomEvent(qf))):f.onClose(),l==null||l(N)},caller:va}),b=W.useMemo(()=>v?y.current?"delayed-open":"instant-open":"closed",[v]),T=W.useCallback(()=>{window.clearTimeout(S.current),S.current=0,y.current=!1,L(!0)},[L]),U=W.useCallback(()=>{window.clearTimeout(S.current),S.current=0,L(!1)},[L]),I=W.useCallback(()=>{window.clearTimeout(S.current),S.current=window.setTimeout(()=>{y.current=!0,L(!0),S.current=0},E)},[E,L]);return W.useEffect(()=>()=>{S.current&&(window.clearTimeout(S.current),S.current=0)},[]),C.jsx(m_,{...h,children:C.jsx(Pb,{scope:e,contentId:_,open:v,stateAttribute:b,trigger:m,onTriggerChange:g,onTriggerEnter:W.useCallback(()=>{f.isOpenDelayedRef.current?I():T()},[f.isOpenDelayedRef,I,T]),onTriggerLeave:W.useCallback(()=>{M?U():(window.clearTimeout(S.current),S.current=0)},[U,M]),onOpen:T,onClose:U,disableHoverableContent:M,children:t})})};M_.displayName=va;var Kf="TooltipTrigger",E_=W.forwardRef((i,e)=>{const{__scopeTooltip:t,...o}=i,s=Ta(Kf,t),l=Hh(Kf,t),c=Dc(t),d=W.useRef(null),f=_i(e,d,s.onTriggerChange),h=W.useRef(!1),m=W.useRef(!1),g=W.useCallback(()=>h.current=!1,[]);return W.useEffect(()=>()=>document.removeEventListener("pointerup",g),[g]),C.jsx(g_,{asChild:!0,...c,children:C.jsx($t.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...o,ref:f,onPointerMove:Dt(i.onPointerMove,_=>{_.pointerType!=="touch"&&!m.current&&!l.isPointerInTransitRef.current&&(s.onTriggerEnter(),m.current=!0)}),onPointerLeave:Dt(i.onPointerLeave,()=>{s.onTriggerLeave(),m.current=!1}),onPointerDown:Dt(i.onPointerDown,()=>{s.open&&s.onClose(),h.current=!0,document.addEventListener("pointerup",g,{once:!0})}),onFocus:Dt(i.onFocus,()=>{h.current||s.onOpen()}),onBlur:Dt(i.onBlur,s.onClose),onClick:Dt(i.onClick,s.onClose)})})});E_.displayName=Kf;var Vh="TooltipPortal",[Lb,Db]=Lc(Vh,{forceMount:void 0}),w_=i=>{const{__scopeTooltip:e,forceMount:t,children:o,container:s}=i,l=Ta(Vh,e);return C.jsx(Lb,{scope:e,forceMount:t,children:C.jsx(Ts,{present:t||l.open,children:C.jsx(zh,{asChild:!0,container:s,children:o})})})};w_.displayName=Vh;var _s="TooltipContent",T_=W.forwardRef((i,e)=>{const t=Db(_s,i.__scopeTooltip),{forceMount:o=t.forceMount,side:s="top",...l}=i,c=Ta(_s,i.__scopeTooltip);return C.jsx(Ts,{present:o||c.open,children:c.disableHoverableContent?C.jsx(A_,{side:s,...l,ref:e}):C.jsx(Nb,{side:s,...l,ref:e})})}),Nb=W.forwardRef((i,e)=>{const t=Ta(_s,i.__scopeTooltip),o=Hh(_s,i.__scopeTooltip),s=W.useRef(null),l=_i(e,s),[c,d]=W.useState(null),{trigger:f,onClose:h}=t,m=s.current,{onPointerInTransitChange:g}=o,_=W.useCallback(()=>{d(null),g(!1)},[g]),S=W.useCallback((M,E)=>{const y=M.currentTarget,v={x:M.clientX,y:M.clientY},L=Ob(v,y.getBoundingClientRect()),b=kb(v,L),T=Bb(E.getBoundingClientRect()),U=Hb([...b,...T]);d(U),g(!0)},[g]);return W.useEffect(()=>()=>_(),[_]),W.useEffect(()=>{if(f&&m){const M=y=>S(y,m),E=y=>S(y,f);return f.addEventListener("pointerleave",M),m.addEventListener("pointerleave",E),()=>{f.removeEventListener("pointerleave",M),m.removeEventListener("pointerleave",E)}}},[f,m,S,_]),W.useEffect(()=>{if(c){const M=E=>{const y=E.target,v={x:E.clientX,y:E.clientY},L=(f==null?void 0:f.contains(y))||(m==null?void 0:m.contains(y)),b=!zb(v,c);L?_():b&&(_(),h())};return document.addEventListener("pointermove",M),()=>document.removeEventListener("pointermove",M)}},[f,m,c,h,_]),C.jsx(A_,{...i,ref:l})}),[Ib,Ub]=Lc(va,{isInside:!1}),Fb=uA("TooltipContent"),A_=W.forwardRef((i,e)=>{const{__scopeTooltip:t,children:o,"aria-label":s,onEscapeKeyDown:l,onPointerDownOutside:c,...d}=i,f=Ta(_s,t),h=Dc(t),{onClose:m}=f;return W.useEffect(()=>(document.addEventListener(qf,m),()=>document.removeEventListener(qf,m)),[m]),W.useEffect(()=>{if(f.trigger){const g=_=>{const S=_.target;S!=null&&S.contains(f.trigger)&&m()};return window.addEventListener("scroll",g,{capture:!0}),()=>window.removeEventListener("scroll",g,{capture:!0})}},[f.trigger,m]),C.jsx(Lh,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:g=>g.preventDefault(),onDismiss:m,children:C.jsxs(v_,{"data-state":f.stateAttribute,...h,...d,ref:e,style:{...d.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[C.jsx(Fb,{children:o}),C.jsx(Ib,{scope:t,isInside:!0,children:C.jsx(Cb,{id:f.contentId,role:"tooltip",children:s||o})})]})})});T_.displayName=_s;var C_="TooltipArrow",b_=W.forwardRef((i,e)=>{const{__scopeTooltip:t,...o}=i,s=Dc(t);return Ub(C_,t).isInside?null:C.jsx(__,{...s,...o,ref:e})});b_.displayName=C_;function Ob(i,e){const t=Math.abs(e.top-i.y),o=Math.abs(e.bottom-i.y),s=Math.abs(e.right-i.x),l=Math.abs(e.left-i.x);switch(Math.min(t,o,s,l)){case l:return"left";case s:return"right";case t:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function kb(i,e,t=5){const o=[];switch(e){case"top":o.push({x:i.x-t,y:i.y+t},{x:i.x+t,y:i.y+t});break;case"bottom":o.push({x:i.x-t,y:i.y-t},{x:i.x+t,y:i.y-t});break;case"left":o.push({x:i.x+t,y:i.y-t},{x:i.x+t,y:i.y+t});break;case"right":o.push({x:i.x-t,y:i.y-t},{x:i.x-t,y:i.y+t});break}return o}function Bb(i){const{top:e,right:t,bottom:o,left:s}=i;return[{x:s,y:e},{x:t,y:e},{x:t,y:o},{x:s,y:o}]}function zb(i,e){const{x:t,y:o}=i;let s=!1;for(let l=0,c=e.length-1;l<e.length;c=l++){const d=e[l],f=e[c],h=d.x,m=d.y,g=f.x,_=f.y;m>o!=_>o&&t<(g-h)*(o-m)/(_-m)+h&&(s=!s)}return s}function Hb(i){const e=i.slice();return e.sort((t,o)=>t.x<o.x?-1:t.x>o.x?1:t.y<o.y?-1:t.y>o.y?1:0),Vb(e)}function Vb(i){if(i.length<=1)return i.slice();const e=[];for(let o=0;o<i.length;o++){const s=i[o];for(;e.length>=2;){const l=e[e.length-1],c=e[e.length-2];if((l.x-c.x)*(s.y-c.y)>=(l.y-c.y)*(s.x-c.x))e.pop();else break}e.push(s)}e.pop();const t=[];for(let o=i.length-1;o>=0;o--){const s=i[o];for(;t.length>=2;){const l=t[t.length-1],c=t[t.length-2];if((l.x-c.x)*(s.y-c.y)>=(l.y-c.y)*(s.x-c.x))t.pop();else break}t.push(s)}return t.pop(),e.length===1&&t.length===1&&e[0].x===t[0].x&&e[0].y===t[0].y?e:e.concat(t)}var R_=S_,Zf=M_,Qf=E_,Jf=w_,eh=T_,th=b_,Jd,Nc="HoverCard",[P_]=Or(Nc,[Pc]),Ic=Pc(),[Gb,Uc]=P_(Nc),L_=i=>{const{__scopeHoverCard:e,children:t,open:o,defaultOpen:s,onOpenChange:l,openDelay:c=700,closeDelay:d=300}=i,f=Ic(e),h=W.useRef(0),m=W.useRef(0),g=W.useRef(!1),_=W.useRef(!1),[S,M]=_o({prop:o,defaultProp:s??!1,onChange:l,caller:Nc}),E=W.useCallback(()=>{clearTimeout(m.current),h.current=window.setTimeout(()=>M(!0),c)},[c,M]),y=W.useCallback(()=>{clearTimeout(h.current),!g.current&&!_.current&&(m.current=window.setTimeout(()=>M(!1),d))},[d,M]),v=W.useCallback(()=>M(!1),[M]);return W.useEffect(()=>()=>{clearTimeout(h.current),clearTimeout(m.current)},[]),C.jsx(Gb,{scope:e,open:S,onOpenChange:M,onOpen:E,onClose:y,onDismiss:v,hasSelectionRef:g,isPointerDownOnContentRef:_,children:C.jsx(m_,{...f,children:t})})};L_.displayName=Nc;var D_="HoverCardTrigger",N_=W.forwardRef((i,e)=>{const{__scopeHoverCard:t,...o}=i,s=Uc(D_,t),l=Ic(t);return C.jsx(g_,{asChild:!0,...l,children:C.jsx($t.a,{"data-state":s.open?"open":"closed",...o,ref:e,onPointerEnter:Dt(i.onPointerEnter,Sc(s.onOpen)),onPointerLeave:Dt(i.onPointerLeave,Sc(s.onClose)),onFocus:Dt(i.onFocus,s.onOpen),onBlur:Dt(i.onBlur,s.onClose),onTouchStart:Dt(i.onTouchStart,c=>c.preventDefault())})})});N_.displayName=D_;var Gh="HoverCardPortal",[Wb,jb]=P_(Gh,{forceMount:void 0}),I_=i=>{const{__scopeHoverCard:e,forceMount:t,children:o,container:s}=i,l=Uc(Gh,e);return C.jsx(Wb,{scope:e,forceMount:t,children:C.jsx(Ts,{present:t||l.open,children:C.jsx(zh,{asChild:!0,container:s,children:o})})})};I_.displayName=Gh;var yc="HoverCardContent",U_=W.forwardRef((i,e)=>{const t=jb(yc,i.__scopeHoverCard),{forceMount:o=t.forceMount,...s}=i,l=Uc(yc,i.__scopeHoverCard);return C.jsx(Ts,{present:o||l.open,children:C.jsx(Xb,{"data-state":l.open?"open":"closed",...s,onPointerEnter:Dt(i.onPointerEnter,Sc(l.onOpen)),onPointerLeave:Dt(i.onPointerLeave,Sc(l.onClose)),ref:e})})});U_.displayName=yc;var Xb=W.forwardRef((i,e)=>{const{__scopeHoverCard:t,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:l,onInteractOutside:c,...d}=i,f=Uc(yc,t),h=Ic(t),m=W.useRef(null),g=_i(e,m),[_,S]=W.useState(!1);return W.useEffect(()=>{if(_){const M=document.body;return Jd=M.style.userSelect||M.style.webkitUserSelect,M.style.userSelect="none",M.style.webkitUserSelect="none",()=>{M.style.userSelect=Jd,M.style.webkitUserSelect=Jd}}},[_]),W.useEffect(()=>{if(m.current){const M=()=>{S(!1),f.isPointerDownOnContentRef.current=!1,setTimeout(()=>{var y;((y=document.getSelection())==null?void 0:y.toString())!==""&&(f.hasSelectionRef.current=!0)})};return document.addEventListener("pointerup",M),()=>{document.removeEventListener("pointerup",M),f.hasSelectionRef.current=!1,f.isPointerDownOnContentRef.current=!1}}},[f.isPointerDownOnContentRef,f.hasSelectionRef]),W.useEffect(()=>{m.current&&$b(m.current).forEach(E=>E.setAttribute("tabindex","-1"))}),C.jsx(Lh,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:c,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:Dt(l,M=>{M.preventDefault()}),onDismiss:f.onDismiss,children:C.jsx(v_,{...h,...d,onPointerDown:Dt(d.onPointerDown,M=>{M.currentTarget.contains(M.target)&&S(!0),f.hasSelectionRef.current=!1,f.isPointerDownOnContentRef.current=!0}),ref:g,style:{...d.style,userSelect:_?"text":void 0,WebkitUserSelect:_?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})})}),Yb="HoverCardArrow",F_=W.forwardRef((i,e)=>{const{__scopeHoverCard:t,...o}=i,s=Ic(t);return C.jsx(__,{...s,...o,ref:e})});F_.displayName=Yb;function Sc(i){return e=>e.pointerType==="touch"?void 0:i()}function $b(i){const e=[],t=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;t.nextNode();)e.push(t.currentNode);return e}var O_=L_,k_=N_,B_=I_,z_=U_,H_=F_,Fc="Tabs",[qb]=Or(Fc,[Ms]),V_=Ms(),[Kb,Wh]=qb(Fc),G_=W.forwardRef((i,e)=>{const{__scopeTabs:t,value:o,onValueChange:s,defaultValue:l,orientation:c="horizontal",dir:d,activationMode:f="automatic",...h}=i,m=wc(d),[g,_]=_o({prop:o,onChange:s,defaultProp:l??"",caller:Fc});return C.jsx(Kb,{scope:t,baseId:wh(),value:g,onValueChange:_,orientation:c,dir:m,activationMode:f,children:C.jsx($t.div,{dir:m,"data-orientation":c,...h,ref:e})})});G_.displayName=Fc;var W_="TabsList",j_=W.forwardRef((i,e)=>{const{__scopeTabs:t,loop:o=!0,...s}=i,l=Wh(W_,t),c=V_(t);return C.jsx(Ah,{asChild:!0,...c,orientation:l.orientation,dir:l.dir,loop:o,children:C.jsx($t.div,{role:"tablist","aria-orientation":l.orientation,...s,ref:e})})});j_.displayName=W_;var X_="TabsTrigger",Y_=W.forwardRef((i,e)=>{const{__scopeTabs:t,value:o,disabled:s=!1,...l}=i,c=Wh(X_,t),d=V_(t),f=K_(c.baseId,o),h=Z_(c.baseId,o),m=o===c.value;return C.jsx(Tc,{asChild:!0,...d,focusable:!s,active:m,children:C.jsx($t.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":h,"data-state":m?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:f,...l,ref:e,onMouseDown:Dt(i.onMouseDown,g=>{!s&&g.button===0&&g.ctrlKey===!1?c.onValueChange(o):g.preventDefault()}),onKeyDown:Dt(i.onKeyDown,g=>{[" ","Enter"].includes(g.key)&&c.onValueChange(o)}),onFocus:Dt(i.onFocus,()=>{const g=c.activationMode!=="manual";!m&&!s&&g&&c.onValueChange(o)})})})});Y_.displayName=X_;var $_="TabsContent",q_=W.forwardRef((i,e)=>{const{__scopeTabs:t,value:o,forceMount:s,children:l,...c}=i,d=Wh($_,t),f=K_(d.baseId,o),h=Z_(d.baseId,o),m=o===d.value,g=W.useRef(m);return W.useEffect(()=>{const _=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(_)},[]),C.jsx(Ts,{present:s||m,children:({present:_})=>C.jsx($t.div,{"data-state":m?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":f,hidden:!_,id:h,tabIndex:0,...c,ref:e,style:{...i.style,animationDuration:g.current?"0s":void 0},children:_&&l})})});q_.displayName=$_;function K_(i,e){return`${i}-trigger-${e}`}function Z_(i,e){return`${i}-content-${e}`}var Zb=G_,Qb=j_,Jb=Y_,eR=q_;const tR={"Terahertz MM Wave X-Ray Imaging System":[{name:"Python",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},{name:"Git",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},{name:"Arduino",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"}],"Friley Frights, a Labyrinth Horror Game":[{name:"Unity",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"},{name:"Git",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},{name:"C#",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"}]};function jh({left:i,right:e,leftClassName:t="",rightClassName:o=""}){return C.jsxs("div",{className:"relative w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-10 md:gap-24 items-center py-12",children:[C.jsx("div",{className:"hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-red-800/20 dark:bg-rose-300/15","aria-hidden":!0}),C.jsx("div",{className:"col-span-12 md:col-span-6 md:pr-10 flex flex-col items-end text-right gap-3 "+t,children:i}),C.jsx("div",{className:"col-span-12 md:col-span-6 md:pl-10 flex flex-col items-start text-left gap-3 "+o,children:e})]})}function nh({children:i}){return C.jsx("div",{className:"text-[11px] tracking-[0.3em] font-medium text-red-700/80 dark:text-rose-300/70",children:i})}function ic({tech:i}){return C.jsxs(O_,{openDelay:120,closeDelay:80,children:[C.jsx(k_,{asChild:!0,children:C.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-md transition-all duration-200 ease-out hover:-translate-y-px",children:C.jsx("img",{src:i.src,alt:i.name,className:"h-6 w-6 object-contain transition-transform duration-200 ease-out hover:scale-[1.04]"})})}),C.jsx(B_,{children:C.jsxs(z_,{sideOffset:10,className:"z-50 px-3 py-2 rounded-md bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.28)] dark:shadow-[0_10px_28px_-16px_rgba(0,0,0,0.55)] text-[12px] font-mono tracking-tight text-neutral-800 dark:text-neutral-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=open]:slide-in-from-bottom-1 transition-all duration-200",children:[C.jsx("span",{className:"text-red-700 dark:text-red-400 mr-2",children:"›"}),i.name,C.jsx(H_,{className:"fill-white/95 dark:fill-neutral-900/95"})]})})]})}const nR=[{title:"Terahertz MM Wave X-Ray Imaging System",tag:"Hardware * Python",media:{type:"gallery",images:[{src:"/images/thz/THZ_startup.png",alt:"Terahertz system startup screen"},{src:"/images/thz/thz_step1.png",alt:"Terahertz project step one"},{src:"/images/thz/thz_step2.png",alt:"Terahertz project step two"}]},blurb:"Placeholder project entry for the Terahertz MM Wave X-Ray Imaging System. Replace this description with the final project overview, responsibilities, stack, and outcome details."},{title:"Scurvy: A Self-Hosted E2E Anti-Cheat",tag:"Security * Systems",media:{type:"placeholder"},blurb:"Placeholder project entry for Scurvy. Replace this with the final summary of the anti-cheat design, detection model, architecture, and implementation details."},{title:"GoalSense: A Machine Learning Rocket League Replay Analysis Web-App",tag:"ML * Web App",media:{type:"placeholder"},blurb:"Placeholder project entry for GoalSense. Replace this with the final description covering replay ingestion, ML analysis, output insights, and the web application stack."},{title:"Wake: A Social Media App",tag:"Mobile * Social",media:{type:"placeholder"},blurb:"Placeholder project entry for Wake. Replace this with the final writeup for the app concept, user flows, backend/frontend stack, and what you built."},{title:"Cybooks: Ticket Marketplace for Students",tag:"Marketplace * Product",media:{type:"placeholder"},blurb:"Placeholder project entry for Cybooks. Replace this with the final summary of the marketplace concept, student use case, transaction flow, and implementation details."},{title:"Friley Frights, a Labyrinth Horror Game",tag:"Unity * C#",media:{type:"video",src:"/images/movie1.mp4"},blurb:"Friley Frights is a Euclidean horror game built in Unity as a final project for SE186 at Iowa State University. The game is based on a dormitory with labyrinth-like properties and uses algorithmic design, 3D game mechanics, and real-time graphics rendering. What makes it different is that the map changes behind the player, rearranging rooms in real time with raycasting and integer math. My contribution focused mainly on map design and building the dormitory room modules in my branch."}];function iR({images:i}){const[e,t]=W.useState(0),o=String(e),s=l=>{t(c=>(c+l+i.length)%i.length)};return C.jsxs(Zb,{value:o,onValueChange:l=>t(Number(l)),className:"group relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-26px_rgba(0,0,0,0.55)] dark:hover:shadow-[0_24px_56px_-28px_rgba(0,0,0,0.75)]",children:[C.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300",style:{boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.14), inset 0 -32px 48px -36px rgba(255,255,255,0.22)"}}),C.jsx("div",{className:"absolute inset-x-0 top-0 h-20 pointer-events-none bg-gradient-to-b from-white/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),i.map((l,c)=>C.jsx(eR,{value:String(c),className:"absolute inset-0 m-0 outline-none",children:C.jsx("img",{src:l.src,alt:l.alt,className:"w-full h-full object-cover block select-none",draggable:"false"})},l.src)),C.jsxs(R_,{delayDuration:80,children:[C.jsxs(Zf,{children:[C.jsx(Qf,{asChild:!0,children:C.jsx("button",{type:"button",onClick:()=>s(-1),className:"absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/55 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 hover:scale-105","aria-label":"Previous image",children:C.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4","aria-hidden":"true",children:C.jsx("path",{d:"M15 18l-6-6 6-6"})})})}),C.jsx(Jf,{children:C.jsxs(eh,{side:"top",sideOffset:6,className:"px-2 py-1 rounded-md bg-white/95 dark:bg-neutral-900/95 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-100 text-[11px] shadow-sm",children:["Previous",C.jsx(th,{className:"fill-white/95 dark:fill-neutral-900/95"})]})})]}),C.jsxs(Zf,{children:[C.jsx(Qf,{asChild:!0,children:C.jsx("button",{type:"button",onClick:()=>s(1),className:"absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/55 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 hover:scale-105","aria-label":"Next image",children:C.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4","aria-hidden":"true",children:C.jsx("path",{d:"M9 18l6-6-6-6"})})})}),C.jsx(Jf,{children:C.jsxs(eh,{side:"top",sideOffset:6,className:"px-2 py-1 rounded-md bg-white/95 dark:bg-neutral-900/95 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-100 text-[11px] shadow-sm",children:["Next",C.jsx(th,{className:"fill-white/95 dark:fill-neutral-900/95"})]})})]})]}),C.jsx(Qb,{"aria-label":"Project images",className:"absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/20 px-2 py-1 backdrop-blur-sm",children:i.map((l,c)=>C.jsx(Jb,{value:String(c),className:"h-2.5 w-2.5 rounded-full transition-all duration-200 outline-none "+(c===e?"bg-white scale-110":"bg-white/45 hover:bg-white/70"),"aria-label":`Show image ${c+1}`},l.src))})]})}function Bv({media:i,side:e,title:t}){const o=e==="left"?"ml-auto":"mr-auto",s=e==="left"?"justify-end":"justify-start",l="w-full max-w-md mt-8 md:mt-12 "+o,c="relative w-full max-w-md rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800/80 shadow-lg shadow-black/20 "+o,d=tR[t]||[];return i.type==="gallery"?C.jsxs("div",{className:l,children:[C.jsx("div",{className:c,children:C.jsx(iR,{images:i.images})}),d.length>0&&C.jsx("div",{className:"mt-4 flex flex-wrap items-center gap-4 "+s,children:d.map(f=>C.jsx(ic,{tech:f},f.name))})]}):i.type==="placeholder"?C.jsxs("div",{className:l,children:[C.jsx("div",{className:c,children:C.jsx("div",{className:"aspect-video w-full bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center",children:C.jsxs("div",{className:"text-center px-6",children:[C.jsx("div",{className:"text-[11px] tracking-[0.3em] font-medium text-red-700/80 dark:text-rose-300/70",children:"PROJECT PREVIEW"}),C.jsx("div",{className:"mt-3 text-sm text-neutral-500 dark:text-neutral-500",children:t})]})})}),d.length>0&&C.jsx("div",{className:"mt-4 flex flex-wrap items-center gap-4 "+s,children:d.map(f=>C.jsx(ic,{tech:f},f.name))})]}):i.type==="video"?C.jsxs("div",{className:l,children:[C.jsx("div",{className:c,children:C.jsx("video",{src:i.src,controls:!0,className:"w-full h-auto block bg-black"})}),d.length>0&&C.jsx("div",{className:"mt-4 flex flex-wrap items-center gap-4 "+s,children:d.map(f=>C.jsx(ic,{tech:f},f.name))})]}):C.jsxs("div",{className:l,children:[C.jsx("div",{className:c,children:C.jsx("img",{src:i.src,alt:i.alt,className:"w-full h-auto block"})}),d.length>0&&C.jsx("div",{className:"mt-4 flex flex-wrap items-center gap-4 "+s,children:d.map(f=>C.jsx(ic,{tech:f},f.name))})]})}function rR({project:i,idx:e}){const t=e%2===0,o=C.jsxs(C.Fragment,{children:[C.jsxs(nh,{children:[String(e+1).padStart(2,"0")," * ",i.tag.toUpperCase()]}),C.jsx("h3",{className:"text-2xl md:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight",children:i.title}),C.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed",children:i.blurb}),i.link&&C.jsxs("a",{href:i.link,target:"_blank",rel:"noopener",className:"mt-2 inline-flex items-center gap-1.5 text-xs font-mono tracking-wide text-red-800 dark:text-rose-300 hover:underline underline-offset-4",children:["View on GitHub",C.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:C.jsx("path",{d:"M7 17L17 7M9 7h8v8"})})]})]});return C.jsx(jh,{left:t?C.jsx(Bv,{media:i.media,side:"left",title:i.title}):o,right:t?o:C.jsx(Bv,{media:i.media,side:"right",title:i.title})})}function oR(){return C.jsxs("section",{id:"projects",className:"relative -mt-64 md:-mt-[22rem]",children:[C.jsx("div",{className:"-mb-8 md:-mb-12",children:C.jsx(jh,{left:C.jsx("div",{"aria-hidden":!0}),rightClassName:"md:items-start md:text-left",right:C.jsxs("div",{className:"w-full max-w-md",children:[C.jsx("div",{className:"text-3xl md:text-4xl font-light tracking-tight text-red-800 dark:text-red-300 mb-6",children:"Projects"}),C.jsx("div",{className:"border-t border-neutral-300 dark:border-neutral-800 pt-5"})]})})}),nR.map((i,e)=>C.jsx("div",{"data-habitat":e,className:"relative flex items-center",style:{minHeight:"200vh"},children:C.jsx(rR,{project:i,idx:e})},i.title))]})}function sR(){return C.jsxs("section",{id:"contact",className:"relative",children:[C.jsx(jh,{left:C.jsxs(C.Fragment,{children:[C.jsx(nh,{children:"EMAIL"}),C.jsx("a",{href:"mailto:gyocum@iastate.edu",className:"text-2xl md:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-red-800 dark:hover:text-rose-200 transition",children:"gyocum@iastate.edu"})]}),right:C.jsxs(C.Fragment,{children:[C.jsx(nh,{children:"PHONE"}),C.jsx("a",{href:"tel:+14255591201",className:"text-2xl md:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-red-800 dark:hover:text-rose-200 transition",children:"425.559.1201"})]})}),C.jsxs("div",{className:"text-center pt-12 pb-24 text-[11px] tracking-[0.3em] text-neutral-500",children:["© ",new Date().getFullYear()," GRIFFIN YOCUM"]})]})}function aR(){const i=W.useRef({activeIndex:-1,progress:0});return W.useEffect(()=>{const e=()=>{const t=window.innerHeight,o=t*.2,s=t*.8,l=document.querySelectorAll("[data-habitat]");let c=-1,d=0,f=0;l.forEach(h=>{const m=h.getBoundingClientRect(),g=Math.max(m.top,o),_=Math.min(m.bottom,s),S=Math.max(0,_-g);if(S>d){d=S,c=parseInt(h.dataset.habitat);const M=m.height+(s-o),E=s-m.top;f=Math.max(0,Math.min(1,E/M))}}),i.current={activeIndex:c,progress:f}};return window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),e(),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[]),i}const zv=i=>i*i*(3-2*i);function lR(i){return Hf.lerp(16,-16,i)}function cR(i,e,t){return i<.3?Hf.lerp(e,t,zv(i/.3)):i>.7?Hf.lerp(t,e,zv((i-.7)/.3)):t}function uR(i){const e=new Vt(new go(16,14),new ri({color:1839112}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-3),i.add(e);const t=new Vt(new Fn(16,.25,.4),new ri({color:2957070}));t.position.set(0,.12,3.2),i.add(t);const o=new ri({color:526344});[-7,7].forEach(c=>{const d=new Vt(new Fn(.2,10,14),o);d.position.set(c,5,-3),i.add(d)});const s=new Vt(new go(16,10),new ri({color:263174}));s.position.set(0,5,-10),i.add(s);const l=new Vt(new Fn(16,2,.3),new ri({color:394758}));l.position.set(0,9,0),i.add(l)}function dR(i,e){i.add(new EM(1118498,2)),[[-3,9,6],[3,9,6],[0,10,5]].forEach(([o,s,l])=>{const c=new Zg(16768416,1.6,24,Math.PI/5.5,.5,1);c.position.set(o,s,l),c.target.position.set(o*.25,0,-1.5),c.castShadow=!0,c.shadow.mapSize.set(512,512),e.add(c,c.target)});const t=new Zg(2245836,1.1,20,Math.PI/3.5,.7);t.position.set(0,7,-9),t.target.position.set(0,0,-2),e.add(t,t.target)}function fR(i){const l=new Vt(new go(4.4,3.8),new _h({color:0}));l.rotation.x=-Math.PI/2,l.position.set(0,.01,-2),i.add(l);const c=new ri({color:1710618});[-4.4/2,4.4/2].forEach(L=>{[0,3.8/2].forEach(b=>{const T=new Vt(new Fn(.12,6,.12),c);T.position.set(L,-3,-2+b),i.add(T)})});const d=new ri({color:2763306});[-2.6,2.6].forEach(L=>{const b=new Vt(new Mh(.38,.11,8,14),d);b.position.set(L,.35,-2),b.rotation.x=Math.PI/2,i.add(b);const T=new Vt(new pc(.05,.05,.35,8),d);T.position.set(L,.35,-2),T.rotation.x=Math.PI/2,i.add(T)});const f=new os,h=new ri({color:6044958}),m=new ri({color:3810576}),g=new ri({color:3815994}),_=new Vt(new Fn(4.4,.18,3.8),new ri({color:1971210}));f.add(_);const S=new Vt(new Fn(1.4,.08,.9),h);S.position.set(-.6,.83,.2),f.add(S),[[-.55,-.35],[-.55,.35],[.55,-.35],[.55,.35]].forEach(([L,b])=>{const T=new Vt(new Fn(.07,.76,.07),m);T.position.set(-.6+L,.43,.2+b),f.add(T)});const M=new Vt(new pc(.07,.09,2.3,10),g);M.position.set(1.3,1.24,-.4),f.add(M);const E=new Vt(new Sh(.15,10,8),new ri({color:5592405,emissive:3346688,emissiveIntensity:.8}));E.position.set(1.3,2.42,-.4),f.add(E);const y=new Vt(new Fn(.7,.7,.7),m);y.position.set(.9,.44,.9),f.add(y);const v=new Vt(new Fn(.9,.4,.6),h);return v.position.set(-.5,.29,-.9),f.add(v),f.position.set(0,-5.5,-2),i.add(f),{liftGroup:f,hole:l,BOTTOM:-5.5,TOP:.09}}function hR(){const i=W.useRef(null),e=aR();return W.useEffect(()=>{const t=i.current;if(!t)return;const o=new pM;o.fog=new xh(328967,.038);const s=new Xn(52,t.clientWidth/t.clientHeight,.1,80);s.position.set(0,3,11),s.lookAt(0,1.5,-1);const l=new aA({antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setSize(t.clientWidth,t.clientHeight),l.setClearColor(0,0),l.shadowMap.enabled=!0,l.shadowMap.type=jv,l.toneMapping=Xv,l.toneMappingExposure=1.1,t.appendChild(l.domElement);const c=new os;o.add(c),uR(c),dR(o,c);const{liftGroup:d,hole:f,BOTTOM:h,TOP:m}=fR(c),g=new ResizeObserver(()=>{s.aspect=t.clientWidth/t.clientHeight,s.updateProjectionMatrix(),l.setSize(t.clientWidth,t.clientHeight)});g.observe(t);let _,S=!1,M=!1;const E=()=>{if(S)return;_=requestAnimationFrame(E);const{activeIndex:y,progress:v}=e.current,L=y>=0;if(!(!L&&!M)){if(M=L,t.style.opacity=L?"1":"0",!L){l.render(o,s);return}c.position.y=lR(v),d.position.y=cR(v,h,m),f.visible=d.position.y<m-.1,l.render(o,s)}};return _=requestAnimationFrame(E),()=>{S=!0,cancelAnimationFrame(_),g.disconnect(),o.traverse(y=>{var v,L;(v=y.geometry)==null||v.dispose(),Array.isArray(y.material)?y.material.forEach(b=>b.dispose()):(L=y.material)==null||L.dispose()}),l.dispose(),t.innerHTML=""}},[]),C.jsx("div",{"aria-hidden":!0,style:{position:"fixed",top:"20vh",left:0,right:0,bottom:"20vh",zIndex:1,pointerEvents:"none",transition:"opacity 0.15s"},children:C.jsx("div",{ref:i,style:{width:"100%",height:"100%"}})})}const pR=`
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;function mR(i){const[e,t]=W.useState(i),o=W.useCallback((s,l)=>{const c=typeof s=="object"&&s!==null?s:{[s]:l};t(d=>({...d,...c})),window.parent.postMessage({type:"__edit_mode_set_keys",edits:c},"*"),window.dispatchEvent(new CustomEvent("tweakchange",{detail:c}))},[]);return[e,o]}function gR({title:i="Tweaks",noDeckControls:e=!1,children:t}){const[o,s]=W.useState(!1),l=W.useRef(null),c=W.useMemo(()=>typeof document<"u"&&!!document.querySelector("deck-stage"),[]),[d,f]=W.useState(()=>{try{return localStorage.getItem("deck-stage.railVisible")!=="0"}catch{return!0}}),h=E=>{f(E),window.postMessage({type:"__deck_rail_visible",on:E},"*")},m=W.useRef({x:16,y:16}),g=16,_=W.useCallback(()=>{const E=l.current;if(!E)return;const y=E.offsetWidth,v=E.offsetHeight,L=Math.max(g,window.innerWidth-y-g),b=Math.max(g,window.innerHeight-v-g);m.current={x:Math.min(L,Math.max(g,m.current.x)),y:Math.min(b,Math.max(g,m.current.y))},E.style.right=m.current.x+"px",E.style.bottom=m.current.y+"px"},[]);W.useEffect(()=>{if(!o)return;if(_(),typeof ResizeObserver>"u")return window.addEventListener("resize",_),()=>window.removeEventListener("resize",_);const E=new ResizeObserver(_);return E.observe(document.documentElement),()=>E.disconnect()},[o,_]),W.useEffect(()=>{const E=y=>{var L;const v=(L=y==null?void 0:y.data)==null?void 0:L.type;v==="__activate_edit_mode"?s(!0):v==="__deactivate_edit_mode"&&s(!1)};return window.addEventListener("message",E),window.parent.postMessage({type:"__edit_mode_available"},"*"),()=>window.removeEventListener("message",E)},[]);const S=()=>{s(!1),window.parent.postMessage({type:"__edit_mode_dismissed"},"*")},M=E=>{const y=l.current;if(!y)return;const v=y.getBoundingClientRect(),L=E.clientX,b=E.clientY,T=window.innerWidth-v.right,U=window.innerHeight-v.bottom,I=H=>{m.current={x:T-(H.clientX-L),y:U-(H.clientY-b)},_()},N=()=>{window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",N)};window.addEventListener("mousemove",I),window.addEventListener("mouseup",N)};return o?C.jsxs(C.Fragment,{children:[C.jsx("style",{children:pR}),C.jsxs("div",{ref:l,className:"twk-panel","data-noncommentable":"",style:{right:m.current.x,bottom:m.current.y},children:[C.jsxs("div",{className:"twk-hd",onMouseDown:M,children:[C.jsx("b",{children:i}),C.jsx("button",{className:"twk-x","aria-label":"Close tweaks",onMouseDown:E=>E.stopPropagation(),onClick:S,children:"✕"})]}),C.jsxs("div",{className:"twk-body",children:[c&&!e&&C.jsx(ih,{label:"Deck",children:C.jsx(rh,{label:"Thumbnail rail",value:d,onChange:h})}),t]})]})]}):null}function ih({label:i,children:e}){return C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"twk-sect",children:i}),e]})}function Xh({label:i,value:e,children:t,inline:o=!1}){return C.jsxs("div",{className:o?"twk-row twk-row-h":"twk-row",children:[C.jsxs("div",{className:"twk-lbl",children:[C.jsx("span",{children:i}),e!=null&&C.jsx("span",{className:"twk-val",children:e})]}),t]})}function ef({label:i,value:e,min:t=0,max:o=100,step:s=1,unit:l="",onChange:c}){return C.jsx(Xh,{label:i,value:`${e}${l}`,children:C.jsx("input",{type:"range",className:"twk-slider",min:t,max:o,step:s,value:e,onChange:d=>c(Number(d.target.value))})})}function rh({label:i,value:e,onChange:t}){return C.jsxs("div",{className:"twk-row twk-row-h",children:[C.jsx("div",{className:"twk-lbl",children:C.jsx("span",{children:i})}),C.jsx("button",{type:"button",className:"twk-toggle","data-on":e?"1":"0",role:"switch","aria-checked":!!e,onClick:()=>t(!e),children:C.jsx("i",{})})]})}function Hv({label:i,value:e,options:t,onChange:o}){const s=W.useRef(null),[l,c]=W.useState(!1),d=W.useRef(e);d.current=e;const f=y=>String(typeof y=="object"?y.label:y).length;if(!(t.reduce((y,v)=>Math.max(y,f(v)),0)<=({2:16,3:10}[t.length]??0))){const y=v=>{const L=t.find(b=>String(typeof b=="object"?b.value:b)===v);return L===void 0?v:typeof L=="object"?L.value:L};return C.jsx(vR,{label:i,value:e,options:t,onChange:v=>o(y(v))})}const g=t.map(y=>typeof y=="object"?y:{value:y,label:y}),_=Math.max(0,g.findIndex(y=>y.value===e)),S=g.length,M=y=>{const v=s.current.getBoundingClientRect(),L=v.width-4,b=Math.floor((y-v.left-2)/L*S);return g[Math.max(0,Math.min(S-1,b))].value},E=y=>{c(!0);const v=M(y.clientX);v!==d.current&&o(v);const L=T=>{if(!s.current)return;const U=M(T.clientX);U!==d.current&&o(U)},b=()=>{c(!1),window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",b)};window.addEventListener("pointermove",L),window.addEventListener("pointerup",b)};return C.jsx(Xh,{label:i,children:C.jsxs("div",{ref:s,role:"radiogroup",onPointerDown:E,className:l?"twk-seg dragging":"twk-seg",children:[C.jsx("div",{className:"twk-seg-thumb",style:{left:`calc(2px + ${_} * (100% - 4px) / ${S})`,width:`calc((100% - 4px) / ${S})`}}),g.map(y=>C.jsx("button",{type:"button",role:"radio","aria-checked":y.value===e,children:y.label},y.value))]})})}function vR({label:i,value:e,options:t,onChange:o}){return C.jsx(Xh,{label:i,children:C.jsx("select",{className:"twk-field",value:e,onChange:s=>o(s.target.value),children:t.map(s=>{const l=typeof s=="object"?s.value:s,c=typeof s=="object"?s.label:s;return C.jsx("option",{value:l,children:c},l)})})})}const _R=[{name:"C",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",category:"Backend"},{name:"C++",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",category:"Backend"},{name:"C#",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",category:"Backend"},{name:"Java",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",category:"Backend"},{name:"TypeScript",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",category:"Frontend"},{name:"Python",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",category:"Backend"},{name:"React",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",category:"Frontend"},{name:"Spring Boot",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",category:"Backend"},{name:"Node.js",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",category:"Backend"},{name:"PostgreSQL",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",category:"Backend"},{name:"Redis",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",category:"Backend"},{name:"Docker",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",category:"Infrastructure"},{name:"Linux",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",category:"Infrastructure"},{name:"Git",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",category:"Infrastructure"},{name:"Azure",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",category:"Infrastructure"},{name:"Unity",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",category:"Frontend"},{name:"PyTorch",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",category:"Backend"},{name:"Ollama",src:"https://ollama.com/public/ollama.png",iconBg:"white",category:"Backend"},{name:"Wireshark",src:"https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg",category:"Cybersecurity"},{name:"Burp Suite",src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/burpsuite.svg",tint:"invert(38%) sepia(94%) saturate(2200%) hue-rotate(0deg) brightness(95%) contrast(105%)",category:"Cybersecurity",monitorBg:"square"},{name:"Postman",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",category:"Backend"},{name:"Raspberry Pi",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",category:"Infrastructure"},{name:"Arduino",src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/arduino.svg",tint:"invert(48%) sepia(69%) saturate(773%) hue-rotate(141deg) brightness(91%) contrast(89%)",category:"Infrastructure",monitorSrc:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",monitorScale:1.08},{name:"Bash",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",category:"Infrastructure"},{name:"OAuth",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg",category:"Cybersecurity"}];function xR({tech:i}){return C.jsxs(O_,{openDelay:120,closeDelay:80,children:[C.jsx(k_,{asChild:!0,children:C.jsx("div",{className:"aspect-square flex items-center justify-center rounded-md hover:-translate-y-px transition-all duration-200 ease-out p-2.5 cursor-default",children:i.iconBg?C.jsx("div",{className:"w-full h-full max-w-[44px] max-h-[44px] rounded-full bg-white flex items-center justify-center p-1.5",children:C.jsx("img",{src:i.src,alt:i.name,className:"w-full h-full object-contain transition-transform duration-200 ease-out hover:scale-[1.04]",style:i.tint?{filter:i.tint}:void 0})}):C.jsx("img",{src:i.src,alt:i.name,className:"w-full h-full object-contain transition-transform duration-200 ease-out hover:scale-[1.04]",style:i.tint?{filter:i.tint}:void 0})})}),C.jsx(B_,{children:C.jsxs(z_,{sideOffset:10,className:"z-50 px-3 py-2 rounded-md bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.28)] dark:shadow-[0_10px_28px_-16px_rgba(0,0,0,0.55)] text-[12px] font-mono tracking-tight text-neutral-800 dark:text-neutral-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=open]:slide-in-from-bottom-1 transition-all duration-200",children:[C.jsx("span",{className:"text-red-700 dark:text-red-400 mr-2",children:"›"}),i.name,C.jsx(H_,{className:"fill-white/95 dark:fill-neutral-900/95"})]})})]})}function yR({dark:i}){return C.jsx("div",{"aria-hidden":!0,className:"fixed inset-0 z-0 pointer-events-none overflow-hidden",children:C.jsx("div",{className:i?"absolute inset-0 bg-black":"absolute inset-0 bg-neutral-50"})})}const SR={showDivider:!0,dividerStyle:"line",dividerWidth:1,scrollLink:"grow",centerColumns:!0,headshotSize:220,nameSize:86,accentIntensity:.8};function MR({t:i,dark:e,scrollProgress:t}){if(!i.showDivider)return null;let o=1,s=1;i.scrollLink==="grow"?(o=1,s=.5+t*.5):i.scrollLink==="fade"&&(s=Math.max(0,1-t*1.2));const l=e?"bg-rose-300/50":"bg-red-800/60";return i.dividerStyle==="dotted"?C.jsx("div",{"aria-hidden":!0,className:"absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center justify-start",style:{opacity:s,transform:`translateX(-50%) scaleY(${o})`,transformOrigin:"top"},children:C.jsx("div",{className:`w-px h-full ${l}`,style:{backgroundImage:e?"repeating-linear-gradient(to bottom, rgba(244,164,176,0.7) 0 4px, transparent 4px 10px)":"repeating-linear-gradient(to bottom, rgba(153,27,27,0.7) 0 4px, transparent 4px 10px)",background:"transparent"}})}):C.jsx("div",{"aria-hidden":!0,className:"absolute top-0 bottom-0 left-1/2 z-[5] flex flex-col items-center",style:{opacity:s,transform:`translateX(-50%) scaleY(${o})`,transformOrigin:"top",width:i.dividerWidth+"px"},children:C.jsx("div",{className:`w-full flex-1 ${l}`})})}function ER({dark:i,setDark:e}){const t="px-3 py-1.5 rounded-md text-[13px] outline-none transition text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-900 focus-visible:ring-1 focus-visible:ring-red-700/40 dark:focus-visible:ring-rose-300/50";return C.jsxs(KA,{className:"fixed top-0 inset-x-0 z-50 px-4 md:px-8 py-4 flex items-center justify-between gap-4 bg-white/82 dark:bg-black/88 backdrop-blur-md","aria-label":"Site navigation",children:[C.jsxs("div",{className:"flex items-center gap-1 relative z-10",children:[C.jsx(ec,{href:"https://github.com/gibby734",target:"_blank",rel:"noopener",className:t+" flex items-center justify-center","aria-label":"GitHub",children:C.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:C.jsx("path",{d:"M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.91c.58.1.79-.25.79-.56v-2.16c-3.2.7-3.88-1.35-3.88-1.35-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.28 5.69.41.36.77 1.08.77 2.18v3.24c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"})})}),C.jsx(ec,{href:"https://www.linkedin.com/in/griffinyocum/",target:"_blank",rel:"noopener",className:t+" flex items-center justify-center","aria-label":"LinkedIn",children:C.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:C.jsx("path",{d:"M4.98 3.5C4.98 4.88 3.87 6 2.49 6A2.5 2.5 0 0 1 0 3.5C0 2.12 1.11 1 2.49 1a2.5 2.5 0 0 1 2.49 2.5ZM.5 8h4V24h-4V8Zm7 0h3.84v2.18h.06c.53-1.01 1.84-2.18 3.79-2.18 4.05 0 4.8 2.66 4.8 6.12V24h-4v-7.03c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V24h-4V8Z"})})}),C.jsx(R_,{delayDuration:150,children:C.jsxs(Zf,{children:[C.jsx(Qf,{asChild:!0,children:C.jsx(QA,{onClick:()=>e(s=>!s),"aria-label":i?"Switch to light mode":"Switch to dark mode",className:t+" flex items-center gap-2",children:i?C.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[C.jsx("circle",{cx:"12",cy:"12",r:"4"}),C.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"})]}):C.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:C.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})})}),C.jsx(Jf,{children:C.jsxs(eh,{sideOffset:6,className:"px-2 py-1 rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] shadow-sm",children:[i?"Light mode":"Dark mode",C.jsx(th,{className:"fill-white dark:fill-neutral-900"})]})})]})})]}),C.jsx("div",{className:"hidden md:block absolute left-1/2 -translate-x-1/2 text-[13px] font-medium text-red-800 dark:text-red-400 pointer-events-none",children:C.jsxs("div",{className:"relative inline-block",children:[C.jsxs("span",{className:"absolute top-1/2 -translate-y-1/2 -left-5 flex h-2 w-2",children:[C.jsx("span",{className:"absolute inset-0 rounded-full bg-red-700 dark:bg-rose-400 animate-ping opacity-50"}),C.jsx("span",{className:"relative rounded-full h-2 w-2 bg-red-800 dark:bg-rose-300"})]}),C.jsx("span",{children:"Open to internships and new grad roles"})]})}),C.jsxs(JA,{type:"single",className:"flex items-center gap-1 flex-wrap justify-end relative z-10",children:[C.jsxs(ec,{href:"#",className:"px-3 py-1.5 rounded-md text-[13px] outline-none transition flex items-center gap-2 text-red-800 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 hover:bg-red-50/70 dark:hover:bg-red-950/30 focus-visible:ring-1 focus-visible:ring-red-700/40 dark:focus-visible:ring-rose-300/50","aria-label":"Download resume",children:[C.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[C.jsx("path",{d:"M12 3v12"}),C.jsx("path",{d:"M7 10l5 5 5-5"}),C.jsx("path",{d:"M5 21h14"})]}),C.jsx("span",{children:"Resume"})]}),C.jsx(ZA,{className:"w-px h-4 bg-neutral-300 dark:bg-neutral-800 mx-1 hidden sm:block"}),C.jsx(ec,{href:"#contact",className:t,children:"Contact"})]})]})}function wR({dark:i,t:e}){const t=W.useRef(null),[o,s]=W.useState(0);W.useEffect(()=>{const d=()=>{const f=t.current;if(f){const h=f.getBoundingClientRect(),m=h.height+window.innerHeight,g=Math.max(0,window.innerHeight-h.top);s(Math.max(0,Math.min(1,g/m)))}};return d(),window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",d),()=>{window.removeEventListener("scroll",d),window.removeEventListener("resize",d)}},[]);const l=e.centerColumns?"":"after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:-ml-[50%] after:w-[50%] after:h-px after:bg-gradient-to-r after:from-transparent after:to-red-800 dark:after:to-rose-300/60",c=e.centerColumns?"border-t border-neutral-300 dark:border-neutral-800 pt-3":"border-t border-neutral-300 dark:border-neutral-800 pt-3 -ml-[50%] pl-[50%]";return C.jsxs("section",{ref:t,className:"relative flex flex-col overflow-hidden pt-28 pb-40 md:pb-72",children:[C.jsx(MR,{t:e,dark:i,scrollProgress:o}),C.jsx("img",{src:"/images/einsteinbw.jpg",alt:"","aria-hidden":!0,className:"hidden md:block absolute right-[28vw] top-[520px] z-[2] w-[300px] h-auto opacity-[0.125] dark:opacity-[0.11] grayscale pointer-events-none select-none"}),C.jsxs("div",{className:"relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-32 items-start flex-1",children:[C.jsx("div",{className:"relative flex flex-col pt-32 md:pt-48 md:min-h-[1860px]",children:C.jsxs("div",{className:"flex flex-col gap-6 self-center md:self-end",children:[C.jsx("div",{className:"relative self-center md:self-end md:mr-12",children:C.jsx("div",{className:"relative rounded-full overflow-hidden ring-1 ring-red-800/50 dark:ring-rose-300/40 ring-offset-4 ring-offset-white dark:ring-offset-neutral-950",style:{width:e.headshotSize+"px",height:e.headshotSize+"px"},children:C.jsx("img",{src:"/images/headshot.jpg",alt:"Griffin Yocum",className:"w-full h-full object-cover grayscale-[0.15] blur-[0.5px]"})})}),C.jsxs("div",{className:"text-center md:text-right self-center md:self-end",children:[C.jsxs("h1",{className:"font-semibold tracking-tight leading-[0.9] text-red-800 dark:text-red-300",style:{fontSize:`clamp(40px, 6.5vw, ${e.nameSize}px)`},children:["GRIFFIN",C.jsx("br",{}),"YOCUM"]}),C.jsx("p",{className:"mt-4 text-[11px] md:text-xs tracking-[0.3em] font-medium text-red-700/80 dark:text-red-400/70",children:"SOFTWARE & CYBERSECURITY"})]}),C.jsxs("div",{className:"mt-28 md:mt-[30rem] w-full max-w-md self-center md:self-end",children:[C.jsx("div",{className:"text-3xl md:text-4xl font-light tracking-tight text-red-800 dark:text-red-300 mb-6 text-center md:text-right",children:"Technologies"}),C.jsx("div",{className:"border-t border-neutral-300 dark:border-neutral-800 pt-5 grid grid-cols-4 sm:grid-cols-5 gap-x-8 gap-y-6 max-w-md",children:_R.map(d=>C.jsx(xR,{tech:d},d.name))})]})]})}),C.jsxs("div",{className:"flex flex-col items-start text-left gap-16 md:gap-24 max-w-md md:pt-44 md:pl-8",children:[C.jsx("div",{className:"-mb-10 md:-mb-16",children:C.jsx("img",{src:"/images/ISU_COE.png",alt:"Iowa State University College of Engineering",className:"h-10 md:h-14 w-auto object-contain"})}),C.jsxs("div",{className:"text-base text-neutral-800 dark:text-neutral-300 "+c,children:["Junior · B.S. Software Engineering",C.jsx("span",{className:"block text-neutral-500 dark:text-neutral-500 text-sm mt-0.5",children:"Minor in Cybersecurity"}),C.jsx("span",{className:"block text-neutral-500 dark:text-neutral-500 text-sm mt-0.5",children:"Iowa State University · Expected May 2027"})]}),C.jsx("div",{className:"relative w-full overflow-visible",children:C.jsx("blockquote",{className:"relative z-10 w-full min-h-[220px] rounded-2xl pl-5 pr-5 py-5 text-[15px] leading-relaxed italic text-neutral-900 dark:text-neutral-100 before:content-[''] before:absolute before:top-4 before:bottom-4 before:left-0 before:w-px before:bg-red-800 dark:before:bg-red-400 "+l,children:C.jsxs("div",{className:"relative max-w-[320px]",children:['"Creativity is intelligence having fun."',C.jsx("br",{}),"- Albert Einstein"]})})}),C.jsx("div",{id:"about",className:"w-full pt-6 md:pt-14",children:C.jsxs("div",{className:"flex flex-col items-start gap-12 md:gap-16",children:[C.jsxs("div",{className:"flex flex-col items-start text-left gap-3",children:[C.jsx("div",{className:"text-[11px] tracking-[0.3em] font-medium text-red-700/80 dark:text-rose-300/70",children:"FOCUS"}),C.jsx("h3",{className:"text-2xl md:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight max-w-sm",children:"Designing, editing, debugging, and securing complex systems."}),C.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed",children:"My interest in video games pushed me to learn how software is built. I enjoy the parts of engineering where performance, correctness, and trust all matter at the same time."})]}),C.jsxs("div",{className:"flex flex-col items-start text-left gap-3 md:ml-12",children:[C.jsx("div",{className:"text-[11px] tracking-[0.3em] font-medium text-red-700/80 dark:text-rose-300/70",children:"ORIGIN"}),C.jsx("h3",{className:"text-2xl md:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight max-w-sm",children:"Sammamish, WA. Curious about technology from the start."}),C.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed",children:"Born in Sammamish, Washington in 2004, I have been interested in technology since my first iPod Touch and kept following that curiosity through software, cybersecurity, cloud, cryptocurrency, and AI."})]})]})})]})]}),C.jsxs("a",{href:"#about",className:"hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 text-[10px] tracking-[0.32em] uppercase text-neutral-500 dark:text-neutral-400 transition-opacity duration-300",style:{opacity:Math.max(0,.9-o*3.2)},children:[C.jsx("span",{children:"Scroll"}),C.jsx("span",{className:"relative flex h-9 w-5 items-start justify-center rounded-full border border-neutral-400/60 dark:border-neutral-700",children:C.jsx("span",{className:"mt-1.5 h-2 w-1 rounded-full bg-red-800/80 dark:bg-red-300/80 animate-bounce"})})]})]})}function TR(){const[i,e]=W.useState(!0),[t,o]=mR(SR);return W.useEffect(()=>{document.documentElement.classList.toggle("dark",i)},[i]),C.jsxs("div",{className:"min-h-screen relative font-sans antialiased bg-transparent text-neutral-900 dark:text-neutral-100",children:[C.jsx(yR,{dark:i}),C.jsx(hR,{}),C.jsxs("div",{className:"relative z-10",children:[C.jsx(ER,{dark:i,setDark:e}),C.jsx(wR,{dark:i,t}),C.jsx(oR,{dark:i}),C.jsx(sR,{dark:i}),C.jsxs(gR,{children:[C.jsx(ih,{label:"Divider"}),C.jsx(rh,{label:"Show divider",value:t.showDivider,onChange:s=>o("showDivider",s)}),C.jsx(Hv,{label:"Style",value:t.dividerStyle,options:["line","dotted"],onChange:s=>o("dividerStyle",s)}),C.jsx(ef,{label:"Width",value:t.dividerWidth,min:1,max:4,step:1,unit:"px",onChange:s=>o("dividerWidth",s)}),C.jsx(Hv,{label:"Scroll link",value:t.scrollLink,options:["grow","fade","static"],onChange:s=>o("scrollLink",s)}),C.jsx(ih,{label:"Layout"}),C.jsx(rh,{label:"Center each column",value:t.centerColumns,onChange:s=>o("centerColumns",s)}),C.jsx(ef,{label:"Headshot size",value:t.headshotSize,min:140,max:280,step:5,unit:"px",onChange:s=>o("headshotSize",s)}),C.jsx(ef,{label:"Name size",value:t.nameSize,min:56,max:120,step:2,unit:"px",onChange:s=>o("nameSize",s)})]})]})]})}By.createRoot(document.getElementById("root")).render(C.jsx(TR,{}));
