/*! For license information please see 729.975dfcbe.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[729],{9596:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r,o=t(9439),i=t(2791),u=t(8820),a=t(168),c=t(6444).ZP.div(r||(r=(0,a.Z)(["\n    position: relative;\n\n    input {\n        width: 280px;\n        height: 40px;\n        margin-bottom: 28px;\n        padding: 10px 42px 10px 12px;\n        box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\n        border-radius: 20px;\n        border: none;\n        \n        font-weight: 500;\n        font-size: 16px;\n        line-height: 1,4;\n        letter-spacing: 0.04em;\n        color: #535353;\n    }\n\n    button {\n        position: absolute;\n        top: 6px;\n        right: 12px;\n\n        height: 28px;\n        padding: 0;\n        \n        background-color: #ffffff;\n        border: none;\n\n        cursor: pointer;\n    }\n\n    @media (min-width: 768px) {\n        text-align: center;\n\n        input {\n            width: 608px;\n            height: 44px;\n            \n            margin-bottom: 40px;\n            padding: 8px 48px 8px 20px;            \n            border-radius: 40px;\n            \n            \n            font-weight: 500;\n            font-size: 20px;\n        }\n        \n        button {           \n            top: 8px;\n            right: 60px;\n        }\n    }\n\n    @media (min-width: 1280px) {        \n        button {             \n            right: 330px;\n        }\n    }\n"]))),l=t(184),f=function(e){var n=e.getValueMethod,t=(0,i.useState)(""),r=(0,o.Z)(t,2),a=r[0],f=r[1];return(0,i.useEffect)((function(){n(a)}),[a]),(0,l.jsxs)(c,{children:[(0,l.jsx)("input",{type:"text",placeholder:"Search",value:a,onChange:function(e){return f(e.target.value)}}),(0,l.jsx)("button",{type:"button",onClick:function(){return f("")},children:a?(0,l.jsx)(u.SV5,{size:28,color:"#111111"}):(0,l.jsx)(u.RB5,{size:24,color:"#111111"})})]})}},1729:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return R}});var r,o,i,u,a,c,l,f,p=t(9434),s=(0,t(6916).P1)([function(e){return e.news.news},function(e){return e.searchNews}],(function(e,n){return e.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())||e.description.toLowerCase().includes(n.toLowerCase())}))})),d=t(168),h=t(6444),y=t(1807),m=(0,h.ZP)(y.default)(r||(r=(0,d.Z)(["\n margin-bottom: 16px;\n  height: 66px;\n  overflow: hidden;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 33px;\n  letter-spacing: -0.01em;\n"]))),x=h.ZP.ul(o||(o=(0,d.Z)(["\n  display: grid;\n  grid-row-gap: 60px;\n  grid-template-columns: repeat(1, 1fr);\n  padding: 0;\n  list-style: none;\n  margin-top: 40px;\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 32px;\n    grid-row-gap: 60px;\n    margin-top: 60px;\n  }\n  @media (min-width: 1280px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"]))),b=h.ZP.li(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  @media (min-width: 768px) {\n    min-width: 336px;\n  }\n  @media (min-width: 1280px) {\n    min-width: 395px;\n  }\n"]))),g=h.ZP.div(u||(u=(0,d.Z)(["\n  width: 200px;\n  height: 8px;\n  margin-bottom: 4px;\n  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 40px;\n  @media (min-width: 768px) {\n    width: 280px;\n  }\n  @media (min-width: 1280px) {\n    width: 340px;\n  }\n"]))),v=(0,h.ZP)(y.default)(a||(a=(0,d.Z)(["\n  height: 154px;\n  overflow: hidden;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #111321;\n  @media (min-width: 1280px) {\n    height: 110px;\n  }\n"]))),w=h.ZP.div(c||(c=(0,d.Z)(["\n  display: flex;\n  margin-top: 40px;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),j=h.ZP.a(l||(l=(0,d.Z)(["\ncolor: #F59256;\ntext-decoration: underline;\ntransition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n&:hover, &:focus {\n  color: #000000;\n}\n"]))),O=t(184),_=function(){var e=(0,p.v9)(s);return(0,O.jsx)(x,{children:e&&e.map((function(e){var n=e.url,t=e.title,r=e.description,o=e.date;return(0,O.jsxs)(b,{children:[(0,O.jsx)(g,{}),(0,O.jsx)(m,{text:t,length:40}),(0,O.jsx)(v,{text:r,length:230}),(0,O.jsxs)(w,{children:[(0,O.jsx)("p",{children:o}),(0,O.jsx)(j,{href:"".concat(n),target:"_blank",rel:"noreferrer noopener",children:"Read more"})]})]},n)}))})},S=t(2791),P=t(7753),k=h.ZP.div(f||(f=(0,d.Z)(["    \n    padding-top: 40px;\n    padding-bottom: 68px;\n\n    h1 {\n        margin-bottom: 28px;\n        font-size: 24px;\n        line-height: 1.4;\n        text-align: center;\n        color: #111111;\n    }\n\n    @media (min-width: 768px) {\n        h1 {\n            margin-bottom: 40px;\n            font-size: 48px;\n        }               \n    }\n"]))),C=t(9596),E=t(565),R=function(){var e=(0,p.I0)();(0,S.useEffect)((function(){e((0,P.d)())}),[e]);return(0,O.jsxs)(k,{children:[(0,O.jsx)("h1",{children:"News"}),(0,O.jsx)(C.Z,{getValueMethod:function(n){return e((0,E.R)(n))}}),(0,O.jsx)(_,{})]})}},1725:function(e){"use strict";var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var u,a,c=o(e),l=1;l<arguments.length;l++){for(var f in u=Object(arguments[l]))t.call(u,f)&&(c[f]=u[f]);if(n){a=n(u);for(var p=0;p<a.length;p++)r.call(u,a[p])&&(c[a[p]]=u[a[p]])}}return c}},888:function(e,n,t){"use strict";var r=t(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,u){if(u!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1807:function(e,n,t){e.exports=t(5163)},5163:function(e,n,t){"use strict";n.default=void 0;var r=i(t(624)),o=i(t(2007));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,n){return!n||"object"!==u(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function s(e,n){return s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},s(e,n)}var d=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=f(this,p(n).call(this,e))).state={},t}var t,o,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(n,e),t=n,(o=[{key:"render",value:function(){var e,n=this.props,t=n.text,o=n.length,i=n.tail,u=n.tailClassName,l=c(n,["text","length","tail","tailClassName"]);return t.length<=this.props.length||this.props.length<0?r.default.createElement("span",l,this.props.text):(e=o-i.length<=0?"":t.slice(0,o-i.length),r.default.createElement("span",a({title:this.props.text},l),e,r.default.createElement("span",{style:{cursor:"auto"},className:u},i)))}}])&&l(t.prototype,o),i&&l(t,i),n}(r.default.Component);d.propTypes={text:o.default.string.isRequired,length:o.default.number.isRequired,tail:o.default.string,tailClassName:o.default.string},d.defaultProps={tail:"...",tailClassName:"more"};var h=d;n.default=h},559:function(e,n,t){"use strict";var r=t(1725),o="function"===typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,m="function"===typeof Symbol&&Symbol.iterator;function x(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function v(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||b}function w(){}function j(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||b}v.prototype.isReactComponent={},v.prototype.setState=function(e,n){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(x(85));this.updater.enqueueSetState(this,e,n,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var O=j.prototype=new w;O.constructor=j,r(O,v.prototype),O.isPureReactComponent=!0;var _={current:null},S=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var r,o={},u=null,a=null;if(null!=n)for(r in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(u=""+n.key),n)S.call(n,r)&&!P.hasOwnProperty(r)&&(o[r]=n[r]);var c=arguments.length-2;if(1===c)o.children=t;else if(1<c){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:e,key:u,ref:a,props:o,_owner:_.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===i}var E=/\/+/g,R=[];function $(e,n,t,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=n,o.func=t,o.context=r,o.count=0,o}return{result:e,keyPrefix:n,func:t,context:r,count:0}}function Z(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function T(e,n,t,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case u:a=!0}}if(a)return t(r,e,""===n?"."+N(e,0):n),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=n+N(o=e[c],c);a+=T(o,l,t,r)}else if(null===e||"object"!==typeof e?l=null:l="function"===typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"===typeof l)for(e=l.call(e),c=0;!(o=e.next()).done;)a+=T(o=o.value,l=n+N(o,c++),t,r);else if("object"===o)throw t=""+e,Error(x(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return a}function I(e,n,t){return null==e?0:T(e,"",n,t)}function N(e,n){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return n[e]}))}(e.key):n.toString(36)}function z(e,n){e.func.call(e.context,n,e.count++)}function L(e,n,t){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?q(e,r,t,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,n){return{$$typeof:i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+t)),r.push(e))}function q(e,n,t,r,o){var i="";null!=t&&(i=(""+t).replace(E,"$&/")+"/"),I(e,L,n=$(n,i,r,o)),Z(n)}var A={current:null};function U(){var e=A.current;if(null===e)throw Error(x(321));return e}var M={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:function(e,n,t){if(null==e)return e;var r=[];return q(e,r,null,n,t),r},forEach:function(e,n,t){if(null==e)return e;I(e,z,n=$(null,null,n,t)),Z(n)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var n=[];return q(e,n,null,(function(e){return e})),n},only:function(e){if(!C(e))throw Error(x(143));return e}},n.Component=v,n.Fragment=a,n.Profiler=l,n.PureComponent=j,n.StrictMode=c,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,n.cloneElement=function(e,n,t){if(null===e||void 0===e)throw Error(x(267,e));var o=r({},e.props),u=e.key,a=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,c=_.current),void 0!==n.key&&(u=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in n)S.call(n,f)&&!P.hasOwnProperty(f)&&(o[f]=void 0===n[f]&&void 0!==l?l[f]:n[f])}var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){l=Array(f);for(var p=0;p<f;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:i,type:e.type,key:u,ref:a,props:o,_owner:c}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:p,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},n.memo=function(e,n){return{$$typeof:h,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return U().useCallback(e,n)},n.useContext=function(e,n){return U().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return U().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return U().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return U().useLayoutEffect(e,n)},n.useMemo=function(e,n){return U().useMemo(e,n)},n.useReducer=function(e,n,t){return U().useReducer(e,n,t)},n.useRef=function(e){return U().useRef(e)},n.useState=function(e){return U().useState(e)},n.version="16.14.0"},624:function(e,n,t){"use strict";e.exports=t(559)}}]);
//# sourceMappingURL=729.975dfcbe.chunk.js.map