/*!
 * iro.js v5.2.3
 * 2016-2020 James Daniel
 * Licensed under MPL 2.0
 * github.com/jaames/iro.js
 */
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n=n||self).iro=t()}(this,function(){"use strict";var m,s,t,i,o,k={},M=[],r=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function j(n,t){for(var i in t)n[i]=t[i];return n}function y(n){var t=n.parentNode;t&&t.removeChild(n)}function d(n,t,i){var r,e,u,o,l=arguments;if(t=j({},t),3<arguments.length)for(i=[i],r=3;r<arguments.length;r++)i.push(l[r]);if(null!=i&&(t.children=i),null!=n&&null!=n.defaultProps)for(e in n.defaultProps)void 0===t[e]&&(t[e]=n.defaultProps[e]);return o=t.key,null!=(u=t.ref)&&delete t.ref,null!=o&&delete t.key,c(n,t,o,u)}function c(n,t,i,r){var e={type:n,props:t,key:i,ref:r,n:null,i:null,e:0,o:null,l:null,c:null,constructor:void 0};return m.vnode&&m.vnode(e),e}function O(n){return n.children}function I(n,t){this.props=n,this.context=t}function w(n,t){if(null==t)return n.i?w(n.i,n.i.n.indexOf(n)+1):null;for(var i;t<n.n.length;t++)if(null!=(i=n.n[t])&&null!=i.o)return i.o;return"function"==typeof n.type?w(n):null}function f(n){var t,i;if(null!=(n=n.i)&&null!=n.c){for(n.o=n.c.base=null,t=0;t<n.n.length;t++)if(null!=(i=n.n[t])&&null!=i.o){n.o=n.c.base=i.o;break}return f(n)}}function e(n){(!n.f&&(n.f=!0)&&1===s.push(n)||i!==m.debounceRendering)&&(i=m.debounceRendering,(m.debounceRendering||t)(u))}function u(){var n,t,i,r,e,u,o,l;for(s.sort(function(n,t){return t.p.e-n.p.e});n=s.pop();)n.f&&(r=i=void 0,u=(e=(t=n).p).o,o=t.w,l=t.u,t.u=!1,o&&(i=[],r=x(o,e,j({},e),t.m,void 0!==o.ownerSVGElement,null,i,l,null==u?w(e):u),v(i,e),r!=u&&f(e)))}function A(t,i,n,r,e,u,o,l,s){var c,f,a,h,v,d,g,b=n&&n.n||M,p=b.length;if(l==k&&(l=null!=u?u[0]:p?w(n,0):null),c=0,i.n=S(i.n,function(n){if(null!=n){if(n.i=i,n.e=i.e+1,null===(a=b[c])||a&&n.key==a.key&&n.type===a.type)b[c]=void 0;else for(f=0;f<p;f++){if((a=b[f])&&n.key==a.key&&n.type===a.type){b[f]=void 0;break}a=null}if(h=x(t,n,a=a||k,r,e,u,o,null,l,s),(f=n.ref)&&a.ref!=f&&(g=g||[]).push(f,n.c||h,n),null!=h){if(null==d&&(d=h),null!=n.l)h=n.l,n.l=null;else if(u==a||h!=l||null==h.parentNode){n:if(null==l||l.parentNode!==t)t.appendChild(h);else{for(v=l,f=0;(v=v.nextSibling)&&f<p;f+=2)if(v==h)break n;t.insertBefore(h,l)}"option"==i.type&&(t.value="")}l=h.nextSibling,"function"==typeof i.type&&(i.l=h)}}return c++,n}),i.o=d,null!=u&&"function"!=typeof i.type)for(c=u.length;c--;)null!=u[c]&&y(u[c]);for(c=p;c--;)null!=b[c]&&R(b[c],b[c]);if(g)for(c=0;c<g.length;c++)N(g[c],g[++c],g[++c])}function S(n,t,i){if(null==i&&(i=[]),null==n||"boolean"==typeof n)t&&i.push(t(null));else if(Array.isArray(n))for(var r=0;r<n.length;r++)S(n[r],t,i);else i.push(t?t(function(n){if(null==n||"boolean"==typeof n)return null;if("string"==typeof n||"number"==typeof n)return c(null,n,null,null);if(null==n.o&&null==n.c)return n;var t=c(n.type,n.props,n.key,null);return t.o=n.o,t}(n)):n);return i}function a(n,t,i){"-"===t[0]?n.setProperty(t,i):n[t]="number"==typeof i&&!1===r.test(t)?i+"px":null==i?"":i}function E(n,t,i,r,e){var u,o,l,s,c;if("key"===(t=e?"className"===t?"class":t:"class"===t?"className":t)||"children"===t);else if("style"===t)if(u=n.style,"string"==typeof i)u.cssText=i;else{if("string"==typeof r&&(u.cssText="",r=null),r)for(o in r)i&&o in i||a(u,o,"");if(i)for(l in i)r&&i[l]===r[l]||a(u,l,i[l])}else"o"===t[0]&&"n"===t[1]?(s=t!==(t=t.replace(/Capture$/,"")),t=((c=t.toLowerCase())in n?c:t).slice(2),i?(r||n.addEventListener(t,h,s),(n.t||(n.t={}))[t]=i):n.removeEventListener(t,h,s)):"list"!==t&&"tagName"!==t&&"form"!==t&&!e&&t in n?n[t]=null==i?"":i:"function"!=typeof i&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==i||!1===i?n.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),i):null==i||!1===i?n.removeAttribute(t):n.setAttribute(t,i))}function h(n){return this.t[n.type](m.event?m.event(n):n)}function x(n,t,i,r,e,u,o,l,s,c){var f,a,h,v,d,g,b,p,y,w,x=t.type;if(void 0!==t.constructor)return null;(f=m.e)&&f(t);try{n:if("function"==typeof x){if(p=t.props,y=(f=x.contextType)&&r[f.c],w=f?y?y.props.value:f.i:r,i.c?b=(a=t.c=i.c).i=a.k:("prototype"in x&&x.prototype.render?t.c=a=new x(p,w):(t.c=a=new I(p,w),a.constructor=x,a.render=_),y&&y.sub(a),a.props=p,a.state||(a.state={}),a.context=w,a.m=r,h=a.f=!0,a.M=[]),null==a.j&&(a.j=a.state),null!=x.getDerivedStateFromProps&&j(a.j==a.state?a.j=j({},a.j):a.j,x.getDerivedStateFromProps(p,a.j)),h)null==x.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&o.push(a);else{if(null==x.getDerivedStateFromProps&&null==l&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(p,w),!l&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(p,a.j,w)){for(a.props=p,a.state=a.j,a.f=!1,(a.p=t).o=null!=s?s!==i.o?s:i.o:null,t.n=i.n,f=0;f<t.n.length;f++)t.n[f]&&(t.n[f].i=t);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(p,a.j,w)}for(v=a.props,d=a.state,a.context=w,a.props=p,a.state=a.j,(f=m.O)&&f(t),a.f=!1,a.p=t,a.w=n,f=a.render(a.props,a.state,a.context),t.n=S(null!=f&&f.type==O&&null==f.key?f.props.children:f),null!=a.getChildContext&&(r=j(j({},r),a.getChildContext())),h||null==a.getSnapshotBeforeUpdate||(g=a.getSnapshotBeforeUpdate(v,d)),A(n,t,i,r,e,u,o,s,c),a.base=t.o;f=a.M.pop();)a.j&&(a.state=a.j),f.call(a);h||null==v||null==a.componentDidUpdate||a.componentDidUpdate(v,d,g),b&&(a.k=a.i=null)}else t.o=function(n,t,i,r,e,u,o,l){var s,c,f,a,h=i.props,v=t.props;if(e="svg"===t.type||e,null==n&&null!=u)for(s=0;s<u.length;s++)if(null!=(c=u[s])&&(null===t.type?3===c.nodeType:c.localName===t.type)){n=c,u[s]=null;break}if(null==n){if(null===t.type)return document.createTextNode(v);n=e?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),u=null}return null===t.type?h!==v&&(null!=u&&(u[u.indexOf(n)]=null),n.data=v):t!==i&&(null!=u&&(u=M.slice.call(n.childNodes)),f=(h=i.props||k).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,l||(a||f)&&(a&&f&&a.I==f.I||(n.innerHTML=a&&a.I||"")),function(n,t,i,r,e){var u;for(u in i)u in t||E(n,u,null,i[u],r);for(u in t)e&&"function"!=typeof t[u]||"value"===u||"checked"===u||i[u]===t[u]||E(n,u,t[u],i[u],r)}(n,v,h,e,l),t.n=t.props.children,a||A(n,t,i,r,"foreignObject"!==t.type&&e,u,o,k,l),l||("value"in v&&void 0!==v.value&&v.value!==n.value&&(n.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==n.checked&&(n.checked=v.checked))),n}(i.o,t,i,r,e,u,o,c);(f=m.diffed)&&f(t)}catch(n){m.o(n,t,i)}return t.o}function v(n,t){for(var i;i=n.pop();)try{i.componentDidMount()}catch(n){m.o(n,i.p)}m.c&&m.c(t)}function N(n,t,i){try{"function"==typeof n?n(t):n.current=t}catch(n){m.o(n,i)}}function R(n,t,i){var r,e,u;if(m.unmount&&m.unmount(n),(r=n.ref)&&N(r,null,t),i||"function"==typeof n.type||(i=null!=(e=n.o)),n.o=n.l=null,null!=(r=n.c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){m.o(n,t)}r.base=r.w=null}if(r=n.n)for(u=0;u<r.length;u++)r[u]&&R(r[u],t,i);null!=e&&y(e)}function _(n,t,i){return this.constructor(n,i)}m={},I.prototype.setState=function(n,t){var i=this.j!==this.state&&this.j||(this.j=j({},this.state));"function"==typeof n&&!(n=n(i,this.props))||j(i,n),null!=n&&this.p&&(this.u=!1,t&&this.M.push(t),e(this))},I.prototype.forceUpdate=function(n){this.p&&(n&&this.M.push(n),this.u=!0,e(this))},I.prototype.render=O,s=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=m.debounceRendering,m.o=function(n,t,i){for(var r;t=t.i;)if((r=t.c)&&!r.i)try{if(r.constructor&&null!=r.constructor.getDerivedStateFromError)r.setState(r.constructor.getDerivedStateFromError(n));else{if(null==r.componentDidCatch)continue;r.componentDidCatch(n)}return e(r.k=r)}catch(t){n=t}throw n},o=k;var n="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",l="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?",g="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?",b=new RegExp("rgb"+l),p=new RegExp("rgba"+g),P=new RegExp("hsl"+l),z=new RegExp("hsla"+g),$="^(?:#?|0x?)",H="([0-9a-fA-F]{1})",T="([0-9a-fA-F]{2})",W=new RegExp($+H+H+H+"$"),C=new RegExp($+H+H+H+H+"$"),D=new RegExp($+T+T+T+"$"),F=new RegExp($+T+T+T+T+"$"),G=Math.log,L=Math.round,B=Math.floor;function U(n,t,i){return Math.min(Math.max(n,t),i)}function q(n,t){var i=-1<n.indexOf("%"),r=parseFloat(n);return i?t/100*r:r}function J(n){return parseInt(n,16)}function K(n){return n.toString(16).padStart(2,"0")}var Q=function(n,t){this.$={h:0,s:0,v:0,a:1},n&&this.set(n),this.onChange=t,this.initialValue=Object.assign({},this.$)},V={hsv:{configurable:!0},hsva:{configurable:!0},hue:{configurable:!0},saturation:{configurable:!0},value:{configurable:!0},alpha:{configurable:!0},kelvin:{configurable:!0},red:{configurable:!0},green:{configurable:!0},blue:{configurable:!0},rgb:{configurable:!0},rgba:{configurable:!0},hsl:{configurable:!0},hsla:{configurable:!0},rgbString:{configurable:!0},rgbaString:{configurable:!0},hexString:{configurable:!0},hex8String:{configurable:!0},hslString:{configurable:!0},hslaString:{configurable:!0}};Q.prototype.set=function(n){if("string"==typeof n)/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(n)?this.hexString=n:/^rgba?/.test(n)?this.rgbString=n:/^hsla?/.test(n)&&(this.hslString=n);else{if("object"!=typeof n)throw new Error("Invalid color value");n instanceof Q?this.hsv=n.hsv:"object"==typeof n&&"r"in n&&"g"in n&&"b"in n?this.rgb=n:"object"==typeof n&&"h"in n&&"s"in n&&"v"in n?this.hsv=n:"object"==typeof n&&"h"in n&&"s"in n&&"l"in n&&(this.hsl=n)}},Q.prototype.setChannel=function(n,t,i){var r;this[n]=Object.assign({},this[n],((r={})[t]=i,r))},Q.prototype.reset=function(){this.hsva=this.initialValue},Q.prototype.clone=function(){return new Q(this)},Q.prototype.unbind=function(){this.onChange=void 0},Q.hsvToRgb=function(n){var t=n.h/60,i=n.s/100,r=n.v/100,e=B(t),u=t-e,o=r*(1-i),l=r*(1-u*i),s=r*(1-(1-u)*i),c=e%6,f=[s,r,r,l,o,o][c],a=[o,o,s,r,r,l][c];return{r:U(255*[r,l,o,o,s,r][c],0,255),g:U(255*f,0,255),b:U(255*a,0,255)}},Q.rgbToHsv=function(n){var t=n.r/255,i=n.g/255,r=n.b/255,e=Math.max(t,i,r),u=Math.min(t,i,r),o=e-u,l=0,s=e,c=0===e?0:o/e;switch(e){case u:l=0;break;case t:l=(i-r)/o+(i<r?6:0);break;case i:l=(r-t)/o+2;break;case r:l=(t-i)/o+4}return{h:60*l%360,s:U(100*c,0,100),v:U(100*s,0,100)}},Q.hsvToHsl=function(n){var t=n.s/100,i=n.v/100,r=(2-t)*i,e=r<=1?r:2-r,u=e<1e-9?0:t*i/e;return{h:n.h,s:U(100*u,0,100),l:U(50*r,0,100)}},Q.hslToHsv=function(n){var t=2*n.l,i=n.s*(t<=100?t:200-t)/100,r=t+i<1e-9?0:2*i/(t+i);return{h:n.h,s:U(100*r,0,100),v:U((t+i)/2,0,100)}},Q.kelvinToRgb=function(n){var t,i,r,e=n/100;return r=e<66?(t=255,i=-155.25485562709179-.44596950469579133*(i=e-2)+104.49216199393888*G(i),e<20?0:.8274096064007395*(r=e-10)-254.76935184120902+115.67994401066147*G(r)):(t=351.97690566805693+.114206453784165*(t=e-55)-40.25366309332127*G(t),i=325.4494125711974+.07943456536662342*(i=e-50)-28.0852963507957*G(i),255),{r:U(B(t),0,255),g:U(B(i),0,255),b:U(B(r),0,255)}},Q.rgbToKelvin=function(n){for(var t,i=n.r,r=n.b,e=1e3,u=4e4;.4<u-e;){t=.5*(u+e);var o=Q.kelvinToRgb(t);o.b/o.r>=r/i?u=t:e=t}return t},V.hsv.get=function(){var n=this.$;return{h:n.h,s:n.s,v:n.v}},V.hsv.set=function(n){var t=this.$;if(n=Object.assign({},t,n),this.onChange){var i={h:!1,v:!1,s:!1,a:!1};for(var r in t)i[r]=n[r]!=t[r];this.$=n,(i.h||i.s||i.v||i.a)&&this.onChange(this,i)}else this.$=n},V.hsva.get=function(){return Object.assign({},this.$)},V.hsva.set=function(n){this.hsv=n},V.hue.get=function(){return this.$.h},V.hue.set=function(n){this.hsv={h:n}},V.saturation.get=function(){return this.$.s},V.saturation.set=function(n){this.hsv={s:n}},V.value.get=function(){return this.$.v},V.value.set=function(n){this.hsv={v:n}},V.alpha.get=function(){return this.$.a},V.alpha.set=function(n){this.hsv=Object.assign({},this.hsv,{a:n})},V.kelvin.get=function(){return Q.rgbToKelvin(this.rgb)},V.kelvin.set=function(n){this.rgb=Q.kelvinToRgb(n)},V.red.get=function(){return this.rgb.r},V.red.set=function(n){this.rgb=Object.assign({},this.rgb,{r:n})},V.green.get=function(){return this.rgb.g},V.green.set=function(n){this.rgb=Object.assign({},this.rgb,{g:n})},V.blue.get=function(){return this.rgb.b},V.blue.set=function(n){this.rgb=Object.assign({},this.rgb,{b:n})},V.rgb.get=function(){var n=Q.hsvToRgb(this.$),t=n.r,i=n.g,r=n.b;return{r:L(t),g:L(i),b:L(r)}},V.rgb.set=function(n){this.hsv=Object.assign({},Q.rgbToHsv(n),{a:void 0===n.a?1:n.a})},V.rgba.get=function(){return Object.assign({},this.rgb,{a:this.alpha})},V.rgba.set=function(n){this.rgb=n},V.hsl.get=function(){var n=Q.hsvToHsl(this.$),t=n.h,i=n.s,r=n.l;return{h:L(t),s:L(i),l:L(r)}},V.hsl.set=function(n){this.hsv=Object.assign({},Q.hslToHsv(n),{a:void 0===n.a?1:n.a})},V.hsla.get=function(){return Object.assign({},this.hsl,{a:this.alpha})},V.hsla.set=function(n){this.hsl=n},V.rgbString.get=function(){var n=this.rgb;return"rgb("+n.r+", "+n.g+", "+n.b+")"},V.rgbString.set=function(n){var t,i,r,e,u=1;if((t=b.exec(n))?(i=q(t[1],255),r=q(t[2],255),e=q(t[3],255)):(t=p.exec(n))&&(i=q(t[1],255),r=q(t[2],255),e=q(t[3],255),u=q(t[4],1)),!t)throw new Error("Invalid rgb string");this.rgb={r:i,g:r,b:e,a:u}},V.rgbaString.get=function(){var n=this.rgba;return"rgba("+n.r+", "+n.g+", "+n.b+", "+n.a+")"},V.rgbaString.set=function(n){this.rgbString=n},V.hexString.get=function(){var n=this.rgb;return"#"+K(n.r)+K(n.g)+K(n.b)},V.hexString.set=function(n){var t,i,r,e,u=255;if((t=W.exec(n))?(i=17*J(t[1]),r=17*J(t[2]),e=17*J(t[3])):(t=C.exec(n))?(i=17*J(t[1]),r=17*J(t[2]),e=17*J(t[3]),u=17*J(t[4])):(t=D.exec(n))?(i=J(t[1]),r=J(t[2]),e=J(t[3])):(t=F.exec(n))&&(i=J(t[1]),r=J(t[2]),e=J(t[3]),u=J(t[4])),!t)throw new Error("Invalid hex string");this.rgb={r:i,g:r,b:e,a:u/255}},V.hex8String.get=function(){var n=this.rgba;return"#"+K(n.r)+K(n.g)+K(n.b)+K(B(255*n.a))},V.hex8String.set=function(n){this.hexString=n},V.hslString.get=function(){var n=this.hsl;return"hsl("+n.h+", "+n.s+"%, "+n.l+"%)"},V.hslString.set=function(n){var t,i,r,e,u=1;if((t=P.exec(n))?(i=q(t[1],360),r=q(t[2],100),e=q(t[3],100)):(t=z.exec(n))&&(i=q(t[1],360),r=q(t[2],100),e=q(t[3],100),u=q(t[4],1)),!t)throw new Error("Invalid hsl string");this.hsl={h:i,s:r,l:e,a:u}},V.hslaString.get=function(){var n=this.hsla;return"hsl("+n.h+", "+n.s+"%, "+n.l+"%, "+n.a+")"},V.hslaString.set=function(n){this.hslString=n},Object.defineProperties(Q.prototype,V);var X;function Y(n){var t=n.width,i=n.sliderSize,r=n.borderWidth,e=n.handleRadius,u=n.padding,o=n.sliderShape,l="horizontal"===n.layoutDirection;return i=i||2*u+2*e+2*r,"circle"===o?{handleStart:n.padding+n.handleRadius,handleRange:t-2*u-2*e-2*r,width:t,height:t,cx:t/2,cy:t/2,radius:t/2-r/2}:{handleStart:i/2,handleRange:t-i,radius:i/2,x:0,y:0,width:l?i:t,height:l?t:i}}function Z(n,t){var i=Y(n),r=i.width,e=i.height,u=i.handleRange,o=i.handleStart,l="horizontal"===n.layoutDirection,s=l?r/2:e/2,c=o+function(n,t){var i=t.hsva,r=t.rgb;switch(n.sliderType){case"red":return r.r/2.55;case"green":return r.g/2.55;case"blue":return r.b/2.55;case"alpha":return 100*i.a;case"kelvin":var e=n.minTemperature,u=n.maxTemperature-e,o=(t.kelvin-e)/u*100;return Math.max(0,Math.min(o,100));case"hue":return i.h/=3.6;case"saturation":return i.s;case"value":default:return i.v}}(n,t)/100*u;return l&&(c=-1*c+u+2*o),{x:l?s:c,y:l?c:s}}function nn(n){var t=n.width/2;return{width:n.width,radius:t-n.borderWidth,cx:t,cy:t}}function tn(n,t,i){var r=n.wheelAngle,e=n.wheelDirection;return((t=!i&&"clockwise"===e||i&&"anticlockwise"===e?(i?180:360)-(r-t):r+t)%360+360)%360}function rn(n,t,i){var r=nn(n),e=r.cx,u=r.cy,o=n.width/2-n.padding-n.handleRadius-n.borderWidth;t=e-t,i=u-i;var l=tn(n,Math.atan2(-i,-t)*(180/Math.PI)),s=Math.min(Math.sqrt(t*t+i*i),o);return{h:Math.round(l),s:Math.round(100/o*s)}}function en(n){var t=n.width;return{width:t,height:t,radius:n.padding+n.handleRadius}}function un(n,t,i){var r=en(n),e=r.width,u=r.height,o=r.radius,l=(t-o)/(e-2*o)*100,s=(i-o)/(u-2*o)*100;return{s:Math.max(0,Math.min(l,100)),v:Math.max(0,Math.min(100-s,100))}}function on(n){X=X||document.getElementsByTagName("base");var t=window.navigator.userAgent,i=/^((?!chrome|android).)*safari/i.test(t),r=/iPhone|iPod|iPad/i.test(t),e=window.location;return(i||r)&&0<X.length?e.protocol+"//"+e.host+e.pathname+e.search+n:n}function ln(n,t,i,r){for(var e=0;e<r.length;e++){var u=r[e].x-t,o=r[e].y-i;if(Math.sqrt(u*u+o*o)<n.handleRadius)return e}return null}var sn=["mousemove","touchmove","mouseup","touchend"],cn=function(t){function n(n){t.call(this,n),this.uid=(Math.random()+1).toString(36).substring(5)}return t&&(n.__proto__=t),((n.prototype=Object.create(t&&t.prototype)).constructor=n).prototype.render=function(n){var t=this.handleEvent.bind(this),i={onMouseDown:t,ontouchstart:t},r="horizontal"===n.layoutDirection,e=null===n.margin?n.sliderMargin:n.margin,u={overflow:"visible",display:r?"inline-block":"block"};return 0<n.index&&(u[r?"marginLeft":"marginTop"]=e),d(O,null,n.children(this.uid,i,u))},n.prototype.handleEvent=function(n){var t=this,i=this.props.onInput,r=this.base.getBoundingClientRect();n.preventDefault();var e=n.touches?n.changedTouches[0]:n,u=e.clientX-r.left,o=e.clientY-r.top;switch(n.type){case"mousedown":case"touchstart":sn.forEach(function(n){document.addEventListener(n,t,{passive:!1})}),i(u,o,0);break;case"mousemove":case"touchmove":i(u,o,1);break;case"mouseup":case"touchend":i(u,o,2),sn.forEach(function(n){document.removeEventListener(n,t)})}},n}(I);function fn(n){var t=n.r,i=n.url;return d("svg",{className:"IroHandle IroHandle--"+n.index+" "+(n.isActive?"IroHandle--isActive":""),x:n.x,y:n.y,style:{overflow:"visible"}},i&&d("use",Object.assign({xlinkHref:on(i)},n.props)),!i&&d("circle",{r:t,fill:"none","stroke-width":2,stroke:"#000"}),!i&&d("circle",{r:t-2,fill:n.fill,"stroke-width":2,stroke:"#fff"}))}function an(e){var n=e.activeIndex,u=void 0!==n&&n<e.colors.length?e.colors[n]:e.color,t=Y(e),r=t.width,o=t.height,l=t.radius,s=Z(e,u),c=function(n,t){var i=t.hsv,r=t.rgb;switch(n.sliderType){case"red":return[[0,"rgb(0,"+r.g+","+r.b+")"],[100,"rgb(255,"+r.g+","+r.b+")"]];case"green":return[[0,"rgb("+r.r+",0,"+r.b+")"],[100,"rgb("+r.r+",255,"+r.b+")"]];case"blue":return[[0,"rgb("+r.r+","+r.g+",0)"],[100,"rgb("+r.r+","+r.g+",255)"]];case"alpha":return[[0,"rgba("+r.r+","+r.g+","+r.b+",0)"],[100,"rgb("+r.r+","+r.g+","+r.b+")"]];case"kelvin":for(var e=[],u=n.minTemperature,o=n.maxTemperature,l=o-u,s=u,c=0;s<o;s+=l/8,c+=1){var f=Q.kelvinToRgb(s),a=f.r,h=f.g,v=f.b;e.push([12.5*c,"rgb("+a+","+h+","+v+")"])}return e;case"hue":return[[0,"#f00"],[16.666,"#ff0"],[33.333,"#0f0"],[50,"#0ff"],[66.666,"#00f"],[83.333,"#f0f"],[100,"#f00"]];case"saturation":var d=Q.hsvToHsl({h:i.h,s:0,v:i.v}),g=Q.hsvToHsl({h:i.h,s:100,v:i.v});return[[0,"hsl("+d.h+","+d.s+"%,"+d.l+"%)"],[100,"hsl("+g.h+","+g.s+"%,"+g.l+"%)"]];case"value":default:var b=Q.hsvToHsl({h:i.h,s:i.s,v:100});return[[0,"#000"],[100,"hsl("+b.h+","+b.s+"%,"+b.l+"%)"]]}}(e,u),f="alpha"===e.sliderType;return d(cn,Object.assign({},e,{onInput:function(n,t,i){var r=function(n,t,i){var r,e=Y(n),u=e.handleRange,o=e.handleStart;r="horizontal"===n.layoutDirection?-1*i+u+o:t-o,r=Math.max(Math.min(r,u),0);var l=Math.round(100/u*r);switch(n.sliderType){case"kelvin":var s=n.minTemperature;return s+l/100*(n.maxTemperature-s);case"alpha":return l/100;case"hue":return 3.6*l;case"red":case"blue":case"green":return 2.55*l;default:return l}}(e,n,t);e.parent.inputActive=!0,u[e.sliderType]=r,e.onInput(i)}}),function(n,t,i){return d("svg",Object.assign({},t,{className:"IroSlider",width:r,height:o,style:i}),d("defs",null,d("linearGradient",Object.assign({id:"g"+n},function(n){var t="horizontal"===n.layoutDirection;return{x1:"0%",y1:t?"100%":"0%",x2:t?"0%":"100%",y2:"0%"}}(e)),c.map(function(n){return d("stop",{offset:n[0]+"%","stop-color":n[1]})})),f&&d("pattern",{id:"b"+n,width:"8",height:"8",patternUnits:"userSpaceOnUse"},d("rect",{x:"0",y:"0",width:"8",height:"8",fill:"#fff"}),d("rect",{x:"0",y:"0",width:"4",height:"4",fill:"#ccc"}),d("rect",{x:"4",y:"4",width:"4",height:"4",fill:"#ccc"})),f&&d("pattern",{id:"f"+n,width:"100%",height:"100%"},d("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url("+on("#b"+n)+")"}),d("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url("+on("#g"+n)+")"}))),d("rect",{className:"IroSliderBg",rx:l,ry:l,x:e.borderWidth/2,y:e.borderWidth/2,width:r-e.borderWidth,height:o-e.borderWidth,"stroke-width":e.borderWidth,stroke:e.borderColor,fill:"url("+on((f?"#f":"#g")+n)+")"}),d(fn,{isActive:!0,index:u.index,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:s.x,y:s.y}))})}function hn(e){var n=en(e),r=n.width,u=n.height,o=n.radius,l=e.colors,s=e.parent,t=e.activeIndex,c=void 0!==t&&t<e.colors.length?e.colors[t]:e.color,f=function(n,t){return[[[0,"#fff"],[100,"hsl("+t.hue+",100%,50%)"]],[[0,"rgba(0,0,0,0)"],[100,"#000"]]]}(0,c),a=l.map(function(n){return function(n,t){var i=en(n),r=i.width,e=i.height,u=i.radius,o=t.hsv,l=u,s=r-2*u,c=e-2*u;return{x:l+o.s/100*s,y:l+(c-o.v/100*c)}}(e,n)});return d(cn,Object.assign({},e,{onInput:function(n,t,i){if(0===i){var r=ln(e,n,t,a);null!==r?s.setActiveColor(r):(s.inputActive=!0,c.hsv=un(e,n,t),e.onInput(i))}else 1===i&&(s.inputActive=!0,c.hsv=un(e,n,t));e.onInput(i)}}),function(n,t,i){return d("svg",Object.assign({},t,{className:"IroBox",width:r,height:u,style:i}),d("defs",null,d("linearGradient",{id:"s"+n,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},f[0].map(function(n){return d("stop",{offset:n[0]+"%","stop-color":n[1]})})),d("linearGradient",{id:"l"+n,x1:"0%",y1:"0%",x2:"0%",y2:"100%"},f[1].map(function(n){return d("stop",{offset:n[0]+"%","stop-color":n[1]})})),d("pattern",{id:"f"+n,width:"100%",height:"100%"},d("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url("+on("#s"+n)+")"}),d("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url("+on("#l"+n)+")"}))),d("rect",{rx:o,ry:o,x:e.borderWidth/2,y:e.borderWidth/2,width:r-e.borderWidth,height:u-e.borderWidth,"stroke-width":e.borderWidth,stroke:e.borderColor,fill:"url("+on("#f"+n)+")"}),l.filter(function(n){return n!==c}).map(function(n){return d(fn,{isActive:!1,index:n.index,fill:n.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:a[n.index].x,y:a[n.index].y})}),d(fn,{isActive:!0,index:c.index,fill:c.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:a[c.index].x,y:a[c.index].y}))})}fn.defaultProps={fill:"none",x:0,y:0,r:8,url:null,props:{x:0,y:0}},an.defaultProps=Object.assign({},{sliderShape:"bar",sliderType:"value",minTemperature:2200,maxTemperature:11e3});var vn=Array.apply(null,{length:360}).map(function(n,t){return t});function dn(e){var n=nn(e),r=n.width,u=n.radius,o=n.cx,l=n.cy,s=e.colors,c=e.borderWidth,f=e.parent,a=e.color,h=a.hsv,v=s.map(function(n){return function(n,t){var i=t.hsv,r=nn(n),e=r.cx,u=r.cy,o=n.width/2-n.padding-n.handleRadius-n.borderWidth,l=(180+tn(n,i.h,!0))*(Math.PI/180),s=i.s/100*o,c="clockwise"===n.wheelDirection?-1:1;return{x:e+s*Math.cos(l)*c,y:u+s*Math.sin(l)*c}}(e,n)});return d(cn,Object.assign({},e,{onInput:function(n,t,i){if(0===i){var r=ln(e,n,t,v);null!==r?f.setActiveColor(r):(f.inputActive=!0,a.hsv=rn(e,n,t),e.onInput(i))}else 1===i&&(f.inputActive=!0,a.hsv=rn(e,n,t));e.onInput(i)}}),function(n,t,i){return d("svg",Object.assign({},t,{className:"IroWheel",width:r,height:r,style:i}),d("defs",null,d("radialGradient",{id:n},d("stop",{offset:"0%","stop-color":"#fff"}),d("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"}))),d("g",{className:"IroWheelHue","stroke-width":u,fill:"none"},vn.map(function(n){return d("path",{key:n,d:function(n,t,i,r,e){var u=e-r<=180?0:1;return r*=Math.PI/180,e*=Math.PI/180,"M "+(n+i*Math.cos(e))+" "+(t+i*Math.sin(e))+" A "+i+" "+i+" 0 "+u+" 0 "+(n+i*Math.cos(r))+" "+(t+i*Math.sin(r))}(o,l,u/2,n,n+1.5),stroke:"hsl("+tn(e,n)+", 100%, 50%)"})})),d("circle",{className:"IroWheelSaturation",cx:o,cy:l,r:u,fill:"url("+on("#"+n)+")"}),e.wheelLightness&&d("circle",{className:"IroWheelLightness",cx:o,cy:l,r:u,fill:"#000",opacity:1-h.v/100}),d("circle",{className:"IroWheelBorder",cx:o,cy:l,r:u,fill:"none",stroke:e.borderColor,"stroke-width":c}),s.filter(function(n){return n!==a}).map(function(n){return d(fn,{isActive:!1,index:n.index,fill:n.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:v[n.index].x,y:v[n.index].y})}),d(fn,{isActive:!0,index:a.index,fill:a.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:v[a.index].x,y:v[a.index].y}))})}var gn=function(i){function n(n){var t=this;i.call(this,n),this.colors=[],this.inputActive=!1,this.events={},this.activeEvents={},this.deferredEvents={},this.id=n.id,(0<n.colors.length?n.colors:[n.color]).forEach(function(n){return t.addColor(n)}),this.setActiveColor(0),this.state=Object.assign({},n,{color:this.color,colors:this.colors,layout:n.layout})}return i&&(n.__proto__=i),((n.prototype=Object.create(i&&i.prototype)).constructor=n).prototype.addColor=function(n,t){void 0===t&&(t=this.colors.length);var i=new Q(n,this.onColorChange.bind(this));this.colors.splice(t,0,i),this.colors.forEach(function(n,t){return n.index=t}),this.state&&this.setState({colors:this.colors}),this.deferredEmit("color:init",i)},n.prototype.removeColor=function(n){var t=this.colors.splice(n,1)[0];t.unbind(),this.colors.forEach(function(n,t){return n.index=t}),this.state&&this.setState({colors:this.colors}),t.index===this.color.index&&this.setActiveColor(0),this.emit("color:remove",t)},n.prototype.setActiveColor=function(n){this.color=this.colors[n],this.state&&this.setState({color:this.color}),this.emit("color:setActive",this.color)},n.prototype.setColors=function(n){var t=this;this.colors.forEach(function(n){return n.unbind()}),this.colors=[],n.forEach(function(n){return t.addColor(n)}),this.setActiveColor(0),this.emit("color:setAll",this.colors)},n.prototype.on=function(n,t){var i=this,r=this.events;(Array.isArray(n)?n:[n]).forEach(function(n){(r[n]||(r[n]=[])).push(t),i.deferredEvents[n]&&(i.deferredEvents[n].forEach(function(n){t.apply(null,n)}),i.deferredEvents[n]=[])})},n.prototype.off=function(n,i){var r=this;(Array.isArray(n)?n:[n]).forEach(function(n){var t=r.events[n];t&&t.splice(t.indexOf(i),1)})},n.prototype.emit=function(n){for(var t=this,i=[],r=arguments.length-1;0<r--;)i[r]=arguments[r+1];var e=this.activeEvents;!!e.hasOwnProperty(n)&&e[n]||(e[n]=!0,(this.events[n]||[]).forEach(function(n){return n.apply(t,i)}),e[n]=!1)},n.prototype.deferredEmit=function(n){for(var t,i=[],r=arguments.length-1;0<r--;)i[r]=arguments[r+1];var e=this.deferredEvents;(t=this).emit.apply(t,[n].concat(i)),(e[n]||(e[n]=[])).push(i)},n.prototype.setOptions=function(n){this.setState(Object.assign({},this.state,n))},n.prototype.resize=function(n){this.setOptions({width:n})},n.prototype.reset=function(){this.colors.forEach(function(n){return n.reset()}),this.setState({colors:this.colors})},n.prototype.onMount=function(n){this.el=n,this.deferredEmit("mount",this)},n.prototype.onColorChange=function(n,t){this.setState({color:this.color}),this.inputActive&&(this.inputActive=!1,this.emit("input:change",n,t)),this.emit("color:change",n,t)},n.prototype.emitInputEvent=function(n){0===n?this.emit("input:start",this.color):1===n?this.emit("input:move",this.color):2===n&&this.emit("input:end",this.color)},n.prototype.render=function(n,e){var u=this,t=e.layout;return Array.isArray(t)||(t=[{component:dn},{component:an}],e.transparency&&t.push({component:an,options:{sliderType:"alpha"}})),d("div",{class:"IroColorPicker",id:e.id,style:{display:e.display}},t.map(function(n,t){var i=n.component,r=n.options;return d(i,Object.assign({},e,r,{ref:void 0,onInput:u.emitInputEvent.bind(u),parent:u,index:t}))}))},n}(I);gn.defaultProps=Object.assign({},{width:300,height:300,handleRadius:8,handleSvg:null,handleProps:{x:0,y:0},color:"#fff",colors:[],borderColor:"#fff",borderWidth:0,wheelLightness:!0,wheelAngle:0,wheelDirection:"anticlockwise",layoutDirection:"vertical",sliderSize:null,sliderMargin:12,padding:6},{colors:[],display:"block",id:null,layout:"default",margin:null});var bn,pn,yn,wn,xn=(mn.prototype=(bn=gn).prototype,Object.assign(mn,bn),mn.A=bn,mn);function mn(t,n){var i,r=document.createElement("div");function e(){var n=t instanceof Element?t:document.querySelector(t);n.appendChild(i.base),i.onMount(n)}return function(n,t,i){var r,e,u;m.i&&m.i(n,t),e=(r=i===o)?null:i&&i.n||t.n,n=d(O,null,[n]),u=[],x(t,r?t.n=n:(i||t).n=n,e||k,k,void 0!==t.ownerSVGElement,i&&!r?[i]:e?null:M.slice.call(t.childNodes),u,!1,i||k,r),v(u,n)}(d(bn,Object.assign({},{ref:function(n){return i=n}},n)),r),"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e),i}return(yn=pn=pn||{}).version="5.2.3",yn.Color=Q,yn.ColorPicker=xn,(wn=yn.ui||(yn.ui={})).h=d,wn.ComponentBase=cn,wn.Handle=fn,wn.Slider=an,wn.Wheel=dn,wn.Box=hn,pn});/*!
 * RangeTouch v2.0
 * https://github.com/sampotts/rangetouch
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("RangeTouch",t):e.RangeTouch=t()}(this,function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t={addCSS:!0,thumbWidth:15,watch:!0};var n=function(e){return null!=e?e.constructor:null},r=function(e,t){return!!(e&&t&&e instanceof t)},u=function(e){return null==e},i=function(e){return n(e)===Object},o=function(e){return n(e)===String},a=function(e){return Array.isArray(e)},c=function(e){return r(e,NodeList)},l={nullOrUndefined:u,object:i,number:function(e){return n(e)===Number&&!Number.isNaN(e)},string:o,boolean:function(e){return n(e)===Boolean},function:function(e){return n(e)===Function},array:a,nodeList:c,element:function(e){return r(e,Element)},event:function(e){return r(e,Event)},empty:function(e){return u(e)||(o(e)||a(e)||c(e))&&!e.length||i(e)&&!Object.keys(e).length}};function s(e,t){if(1>t){var n=function(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}(t);return parseFloat(e.toFixed(n))}return Math.round(e/t)*t}return function(){function n(e,r){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,n),l.element(e)?this.element=e:l.string(e)&&(this.element=document.querySelector(e)),l.element(this.element)&&l.empty(this.element.rangeTouch)&&(this.config=Object.assign({},t,r),this.init())}return r=n,i=[{key:"setup",value:function(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},u=null;if(l.empty(e)||l.string(e)?u=Array.from(document.querySelectorAll(l.string(e)?e:'input[type="range"]')):l.element(e)?u=[e]:l.nodeList(e)?u=Array.from(e):l.array(e)&&(u=e.filter(l.element)),l.empty(u))return null;var i=Object.assign({},t,r);l.string(e)&&i.watch&&new MutationObserver(function(t){Array.from(t).forEach(function(t){Array.from(t.addedNodes).forEach(function(t){l.element(t)&&function(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}(t,e)&&new n(t,i)})})}).observe(document.body,{childList:!0,subtree:!0});return u.map(function(e){return new n(e,r)})}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}],(u=[{key:"init",value:function(){n.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){n.enabled&&(this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,n=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach(function(e){t.element[n](e,function(e){return t.set(e)},!1)})}},{key:"get",value:function(e){if(!n.enabled||!l.event(e))return null;var t,r=e.target,u=e.changedTouches[0],i=parseFloat(r.getAttribute("min"))||0,o=parseFloat(r.getAttribute("max"))||100,a=parseFloat(r.getAttribute("step"))||1,c=r.getBoundingClientRect(),f=100/c.width*(this.config.thumbWidth/2)/100;return 0>(t=100/c.width*(u.clientX-c.left))?t=0:100<t&&(t=100),50>t?t-=(100-2*t)*f:50<t&&(t+=2*(t-50)*f),i+s(t/100*(o-i),a)}},{key:"set",value:function(e){n.enabled&&l.event(e)&&!e.target.disabled&&(e.preventDefault(),e.target.value=this.get(e),function(e,t){if(e&&t){var n=new Event(t);e.dispatchEvent(n)}}(e.target,"touchend"===e.type?"change":"input"))}}])&&e(r.prototype,u),i&&e(r,i),n;var r,u,i}()});
//page js
var loc = false, locip;
var ps = false, noNewSegs = false;
var isOn = false, nlA = false, isLv = false, isInfo = false, syncSend = false, syncTglRecv = true, isRgbw = false;
var whites = [0,0,0];
var expanded = [false];
var powered = [true];
var nlDur = 60, nlTar = 0;
var nlFade = false;
var selectedFx = 0;
var csel = 0;
var currentPreset = -1;
var lastUpdate = 0;
var segCount = 0, ledCount = 0, lowestUnused = 0, maxSeg = 0, lSeg = 0;
var pcMode = false, pcModeA = false, lastw = 0;
var d = document;
const ranges = RangeTouch.setup('input[type="range"]', {});
var pJson = {};
var pO = null, pN = "", pI = 0;
var pmt = 1, pmtLS = 0, pmtLast = 0;
var lastinfo = {};
var cfg = {
	theme:{base:"dark", bg:{url:""}, alpha:{bg:0.6,tab:0.8}, color:{bg:""}},
	comp :{colors:{picker: true, rgb: false, quick: true, hex: false}, labels:true, pcmbot:false, pid:true}
};

var cpick = new iro.ColorPicker("#picker", {
	width: 260,
	wheelLightness: false,
  wheelAngle: 90,
  layout: [
    { 
      component: iro.ui.Wheel,
      options: {}
    },
    { 
      component: iro.ui.Slider,
      options: {
        sliderType: 'value'
      }
    },
    { 
      component: iro.ui.Slider,
      options: {
        sliderType: 'kelvin',
        minTemperature: 2100,
        maxTemperature: 10000
      }
    }
  ]
});

function handleVisibilityChange() {
	if (!document.hidden && new Date () - lastUpdate > 3000) {
		requestJson(null);
	}
}

function sCol(na, col) {
	d.documentElement.style.setProperty(na, col);
}

function applyCfg()
{
	cTheme(cfg.theme.base === "light");
	var bg = cfg.theme.color.bg;
	if (bg) sCol('--c-1', bg);
	var ccfg = cfg.comp.colors;
	d.getElementById('hexw').style.display = ccfg.hex ? "block":"none";
	d.getElementById('picker').style.display = ccfg.picker ? "block":"none";
	d.getElementById('rgbwrap').style.display = ccfg.rgb ? "block":"none";
	d.getElementById('qcs-w').style.display = ccfg.quick ? "block":"none";
	var l = cfg.comp.labels;
	var e = d.querySelectorAll('.tab-label');
	for(var i=0; i<e.length; i++)
		e[i].style.display = l ? "block":"none";
	e = d.querySelector('.hd');
	e.style.display = l ? "block":"none";
	sCol('--tbp',l ? "14px 14px 10px 14px":"10px 22px 4px 22px");
	sCol('--bbp',l ? "9px 0 7px 0":"10px 0 4px 0");
	sCol('--bhd',l ? "block":"none");
	sCol('--bmt',l ? "0px":"5px");
	sCol('--t-b', cfg.theme.alpha.tab);
	size();
	localStorage.setItem('wledUiCfg', JSON.stringify(cfg));
}

function tglHex()
{
	cfg.comp.colors.hex = !cfg.comp.colors.hex;
	applyCfg();
}

function tglTheme()
{
	cfg.theme.base = (cfg.theme.base === "light") ? "dark":"light";
	applyCfg();
}

function tglLabels()
{
	cfg.comp.labels = !cfg.comp.labels;
	applyCfg();
}

function cTheme(light) {
	if (light) {
	sCol('--c-1','#eee');
	sCol('--c-f','#000');
	sCol('--c-2','#ddd');
	sCol('--c-3','#bbb');
	sCol('--c-4','#aaa');
	sCol('--c-5','#999');
	sCol('--c-6','#999');
	sCol('--c-8','#888');
	sCol('--c-b','#444');
	sCol('--c-c','#333');
	sCol('--c-e','#111');
	sCol('--c-d','#222');
	sCol('--c-r','#c42');
	sCol('--c-o','rgba(204, 204, 204, 0.9)');
	sCol('--c-sb','#0003'); sCol('--c-sbh','#0006');
	sCol('--c-tb','rgba(204, 204, 204, var(--t-b))');
	sCol('--c-tba','rgba(170, 170, 170, var(--t-b))');
	sCol('--c-tbh','rgba(204, 204, 204, var(--t-b))');
	d.getElementById('imgw').style.filter = "invert(0.8)";
	} else {
	sCol('--c-1','#111');
	sCol('--c-f','#fff');
	sCol('--c-2','#222');
	sCol('--c-3','#333');
	sCol('--c-4','#444');
	sCol('--c-5','#555');
	sCol('--c-6','#666');
	sCol('--c-8','#888');
	sCol('--c-b','#bbb');
	sCol('--c-c','#ccc');
	sCol('--c-e','#eee');
	sCol('--c-d','#ddd');
	sCol('--c-r','#831');
	sCol('--c-o','rgba(34, 34, 34, 0.9)');
	sCol('--c-sb','#fff3'); sCol('--c-sbh','#fff5');
	sCol('--c-tb','rgba(34, 34, 34, var(--t-b))');
	sCol('--c-tba','rgba(102, 102, 102, var(--t-b))');
	sCol('--c-tbh','rgba(51, 51, 51, var(--t-b))');
	d.getElementById('imgw').style.filter = "unset";
	}
}

function loadBg(iUrl) {
	let bg = document.getElementById('bg');
  let img = document.createElement("img");
  img.src = iUrl;
  if (iUrl == "") {
    var today = new Date();
    if (today.getMonth() == 11 && (today.getDate() > 23 && today.getDate() < 28)) img.src = "https://aircoookie.github.io/xmas.png";
  }
	img.addEventListener('load', (event) => {
		var a = parseFloat(cfg.theme.alpha.bg);
		d.getElementById('staytop2').style.background = "transparent";
		if (isNaN(a)) a = 0.6;
		bg.style.opacity = a;
		bg.style.backgroundImage = `url(${img.src})`;
		img = null;
	});
}

function onLoad() {
	if (window.location.protocol == "file:") {
	loc = true;
	locip = localStorage.getItem('locIp');
	if (!locip)
	{
		locip = prompt("File Mode. Please enter WLED IP!");
		localStorage.setItem('locIp', locip);
	}
	}
	var sett = localStorage.getItem('wledUiCfg');
	if (sett) cfg = mergeDeep(cfg, JSON.parse(sett));
	
	resetPUtil();
	
	applyCfg();
	loadBg(cfg.theme.bg.url);
	
	var cd = d.getElementById('csl').children;
	for (i = 0; i < cd.length; i++) {
		cd[i].style.backgroundColor = "rgb(0, 0, 0)";
	}
	selectSlot(0);
	updateTablinks(0);
	resetUtil();
	cpick.on("input:end", function() {
		setColor(1);
	});
	pmtLS = localStorage.getItem('wledPmt');
	setTimeout(function(){requestJson(null, false)}, 25);
	d.addEventListener("visibilitychange", handleVisibilityChange, false);
	size();
	d.getElementById("cv").style.opacity=0;
	if (localStorage.getItem('pcm') == "true") togglePcMode(true);
	var sls = d.querySelectorAll('input[type="range"]');
	for (var sl of sls) {
		sl.addEventListener('input', updateBubble, true);
		sl.addEventListener('touchstart', toggleBubble);
		sl.addEventListener('touchend', toggleBubble);
	}

}

function updateTablinks(tabI)
{
	tablinks = d.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	if (pcMode) return;
	tablinks[tabI].className += " active";
}

function openTab(tabI, force = false) {
	if (pcMode && !force) return;
	var i, tabcontent, tablinks;
	iSlide = tabI;
	_C.classList.toggle('smooth', false);
	_C.style.setProperty('--i', iSlide);
	updateTablinks(tabI);
}

var timeout;
function showToast(text, error = false) {
	if (error) d.getElementById('connind').style.backgroundColor = "#831";
	var x = d.getElementById("toast");
	x.innerHTML = text;
	x.className = error ? "error":"show";
	clearTimeout(timeout);
	x.style.animation = 'none';
	x.offsetHeight;
	x.style.animation = null; 
	timeout = setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2900);
}

function showErrorToast() {
	showToast('Connection to light failed!', true);
}
function clearErrorToast() {
	d.getElementById("toast").className = d.getElementById("toast").className.replace("error", "");
}

function getRuntimeStr(rt)
{
	var t = parseInt(rt);
	var days = Math.floor(t/86400);
	var hrs = Math.floor((t - days*86400)/3600);
	var mins = Math.floor((t - days*86400 - hrs*3600)/60);
	var str = days ? (days + " " + (days == 1 ? "day" : "days") + ", ") : "";
	str += (hrs || days) ? (hrs + " " + (hrs == 1 ? "hour" : "hours")) : "";
	if (!days && hrs) str += ", ";
	if (t > 59 && !days) str += mins + " min";
	if (t < 3600 && t > 59) str += ", ";
	if (t < 3600) str += (t - mins*60) + " sec"; 
	return str;
}

function inforow(key, val, unit = "")
{
	return `<tr><td class="keytd">${key}</td><td class="valtd">${val}${unit}</td></tr>`;
}

function getLowestUnusedP()
{
	var l = 1;
	for (var key in pJson)
	{
		if (key == l) l++;
  }
  if (l > 250) l = 250; 
	return l;
}

function checkUsed(i) {
	var id = d.getElementById(`p${i}id`).value;
	if (pJson[id] && (i == 0 || id != i)) {
		d.getElementById(`p${i}warn`).innerHTML = `&#9888; Overwriting ${pName(id)}!`
	} else {
		d.getElementById(`p${i}warn`).innerHTML = "";
	}
}

function pName(i) {
	var n = "Preset " + i;
	if (pJson[i].n) n = pJson[i].n;
	return n;
}

function papiVal(i) {
	if (!pJson[i]) return "";
	var o = Object.assign({},pJson[i]);
	if (o.win) return o.win;
	delete o.n; delete o.p; delete o.ql;
	return JSON.stringify(o);
}

function qlName(i) {
	if (!pJson[i]) return "";
  if (!pJson[i].ql) return "";
  return pJson[i].ql;
}

function cpBck() {
	var copyText = document.getElementById("bck");

  copyText.select();
  copyText.setSelectionRange(0, 999999);

  document.execCommand("copy");
	
	showToast("Copied to clipboard!")
}

function presetError(empty)
{
	var hasBackup = false; var bckstr = "";
	try {
		bckstr = localStorage.getItem("wledP");
		if (bckstr.length > 10) hasBackup = true;
	} catch (e) {
	
	}
	var cn = `<div class="seg c">`;
	if (empty) 
		cn += `You have no presets yet!`;
	else 
		cn += `Sorry, there was an issue loading your presets!`;

	if (hasBackup) {
		cn += `<br><br>`;
		if (empty)
			cn += `However, there is backup preset data of a previous installation available.<br>
			(Saving a preset will hide this and overwrite the backup)`;
		else
			cn += `Here is a backup of the last known good state:`;
		cn += `<textarea id="bck"></textarea><br>
			<button class="btn btn-p" onclick="cpBck()">Copy to clipboard</button>`
	}
	cn += `</div>`;
	d.getElementById('pcont').innerHTML = cn;
	if (hasBackup) d.getElementById('bck').value = bckstr;
}

function loadPresets()
{
	var url = '/presets.json';
	if (loc) {
		url = `http://${locip}/presets.json`;
	}
	
	fetch
	(url, {
		method: 'get'
	})
	.then(res => {
		if (!res.ok) {
			 showErrorToast();
		}
		return res.json();
	})
	.then(json => {
		pJson = json;
		populatePresets();
	})
	.catch(function (error) {
		showToast(error, true);
		console.log(error);
		presetError(false);
	})
}

var pQL = [];

function populateQL()
{
	var cn = "";
	if (pQL.length > 0) {
	cn += `<p class="labels">Quick load</p>`;
  
  var it = 0;
	for (var key in pQL)
	{
    cn += `<button class="xxs btn psts" id="p${pQL[key][0]}qlb" onclick="setPreset(${pQL[key][0]});">${pQL[key][1]}</button>`;
    it++;
    if (it > 4) {
      it = 0;
      cn += '<br>';
    }
  }
  if (it != 0) cn+= '<br>';
	
	cn += `<p class="labels">All presets</p>`;
	}
	d.getElementById('pql').innerHTML = cn;
}

function populatePresets(fromls)
{
	if (fromls) pJson = JSON.parse(localStorage.getItem("wledP"));
	delete pJson["0"];
	var cn = "";
	var arr = Object.entries(pJson);
	arr.sort(cmpP);
	var added = false;
  pQL = [];
  var is = [];

	for (var key in arr)
	{
		if (!isObject(arr[key][1])) continue;
		var i = parseInt(arr[key][0]);
		var qll = arr[key][1]["ql"];
    if (qll) pQL.push([i, qll]);
    is.push(i);
		
    cn += `<div class="seg pres" id="p${i}o">`;
    if (cfg.comp.pid) cn += `<div class="pid">${i}</div>`;
    cn += `<div class="segname pname" onclick="setPreset(${i})">${pName(i)}</div>
			<i class="icons e-icon flr ${expanded[i+100] ? "exp":""}" id="sege${i+100}" onclick="expand(${i+100})">&#xe395;</i>
			<div class="segin" id="seg${i+100}"></div>
		</div><br>`;
		added = true;
	}

	d.getElementById('pcont').innerHTML = cn;
	if (added) {
		if (pmtLS != pmt && pmt != 0) {
			localStorage.setItem("wledPmt", pmt);
			pJson["0"] = {};
			localStorage.setItem("wledP", JSON.stringify(pJson));
		}
    pmtLS = pmt;
    for (var a in is) {
      var i = is[a];
      if (expanded[i+100]) expand(i+100, true);
    }
	} else { presetError(true); }
	updatePA();
	populateQL();
}

function populateInfo(i)
{
	var cn="";
	var heap = i.freeheap/1000;
	heap = heap.toFixed(1);
	var pwr = i.leds.pwr;
	var pwru = "Not calculated";
	if (pwr > 1000) {pwr /= 1000; pwr = pwr.toFixed((pwr > 10) ? 0 : 1); pwru = pwr + " A";}
	else if (pwr > 0) {pwr = 50 * Math.round(pwr/50); pwru = pwr + " mA";}
	var urows="";
	for (var k in i.u)
	{
		var val = i.u[k];
		if (val[1]) {
			urows += inforow(k,val[0],val[1]);
		} else {
			urows += inforow(k,val);
		}
	}
	var vcn = "Kuuhaku";
	if (i.ver.startsWith("0.11.")) vcn = "Mirai";
	if (i.cn) vcn = i.cn;
	
	cn += `v${i.ver} "${vcn}"<br><br><table class="infot">
	${urows}
	${inforow("Build",i.vid)}
	${inforow("Signal strength",i.wifi.signal +"% ("+ i.wifi.rssi, " dBm)")}
	${inforow("Uptime",getRuntimeStr(i.uptime))}
	${inforow("Free heap",heap," kB")}
	${inforow("Estimated current",pwru)}
	${inforow("MAC address",i.mac)}
	${inforow("Filesystem",i.fs.u + "/" + i.fs.t + " kB (" +Math.round(i.fs.u*100/i.fs.t) + "%)")}
	${inforow("Environment",i.arch + " " + i.core + " (" + i.lwip + ")")}
	</table>`;
	d.getElementById('kv').innerHTML = cn;
}

function populateSegments(s)
{
	var cn = "";
	segCount = 0, lowestUnused = 0; lSeg = 0;
 
	for (y in s.seg)
	{
		segCount++;
		
		var inst=s.seg[y];
		var i = parseInt(inst.id);
		powered[i] = inst.on;
		if (i == lowestUnused) lowestUnused = i+1;
		if (i > lSeg) lSeg = i;
		
		cn += `<div class="seg">
			<label class="check schkl">
				&nbsp;
				<input type="checkbox" id="seg${i}sel" onchange="selSeg(${i})" ${inst.sel ? "checked":""}>
				<span class="checkmark schk"></span>
			</label>
			<div class="segname" onclick="selSegEx(${i})">
				Segment ${i}
			</div>
			<i class="icons e-icon flr ${expanded[i] ? "exp":""}" id="sege${i}" onclick="expand(${i})">&#xe395;</i>
			<div class="segin ${expanded[i] ? "expanded":""}" id="seg${i}">
			<table class="segt">
				<tr>
					<td class="segtd">Start LED</td>
					<td class="segtd">Stop LED</td>
				</tr>
				<tr>
					<td class="segtd"><input class="noslide segn" id="seg${i}s" type="number" min="0" max="${ledCount-1}" value="${inst.start}" oninput="updateLen(${i})"></td>
					<td class="segtd"><input class="noslide segn" id="seg${i}e" type="number" min="0" max="${ledCount}" value="${inst.stop}" oninput="updateLen(${i})"></td>
				</tr>
			</table>
			<table class="segt">
				<tr>
					<td class="segtd">Grouping</td>
					<td class="segtd">Spacing</td>
				</tr>
				<tr>
					<td class="segtd"><input class="noslide segn" id="seg${i}grp" type="number" min="1" max="255" value="${inst.grp}" oninput="updateLen(${i})"></td>
					<td class="segtd"><input class="noslide segn" id="seg${i}spc" type="number" min="0" max="255" value="${inst.spc}" oninput="updateLen(${i})"></td>
				</tr>
			</table>
			<div class="h bp" id="seg${i}len"></div>
			<i class="icons e-icon pwr ${powered[i] ? "act":""}" id="seg${i}pwr" onclick="setSegPwr(${i})">&#xe08f;</i>
			<div class="sliderwrap il sws">
				<input id="seg${i}bri" class="noslide sis" onchange="setSegBri(${i})" oninput="updateTrail(this)" max="255" min="1" type="range" value="${inst.bri}" />
				<div class="sliderdisplay"></div>
			</div>
				<i class="icons e-icon cnf cnf-s" id="segc${i}" onclick="setSeg(${i})">&#xe390;</i>
				<i class="icons e-icon del" id="segd${i}" onclick="delSeg(${i})">&#xe037;</i>
				<label class="check revchkl">
					Reverse direction
					<input type="checkbox" id="seg${i}rev" onchange="setRev(${i})" ${inst.rev ? "checked":""}>
					<span class="checkmark schk"></span>
				</label>
				<label class="check revchkl">
					Mirror effect
					<input type="checkbox" id="seg${i}mi" onchange="setMi(${i})" ${inst.mi ? "checked":""}>
					<span class="checkmark schk"></span>
				</label>
			</div>
		</div><br>`;
	}

	d.getElementById('segcont').innerHTML = cn;
	if (lowestUnused >= maxSeg) {
		d.getElementById('segutil').innerHTML = '<span class="h">Maximum number of segments reached.</span>';
		noNewSegs = true;
	} else if (noNewSegs) {
		resetUtil();
		noNewSegs = false;
	}
	for (i = 0; i <= lSeg; i++) {
	updateLen(i);
	updateTrail(d.getElementById(`seg${i}bri`));
	if (segCount < 2) d.getElementById(`segd${lSeg}`).style.display = "none";
	}
	d.getElementById('rsbtn').style.display = (segCount > 1) ? "inline":"none";
}

function updateTrail(e, slidercol)
{
	if (e==null) return;
	var max = e.hasAttribute('max') ? e.attributes['max'].value : 255;
	var progress = e.value * 100 / max;
	progress = parseInt(progress);
	var scol;
	switch (slidercol) {
	case 1: scol = "#f00"; break;
	case 2: scol = "#0f0"; break;
	case 3: scol = "#00f"; break;
	default: scol = "var(--c-f)";
	}
	var val = `linear-gradient(90deg, ${scol} ${progress}%, var(--c-4) ${progress}%)`;
	e.parentNode.getElementsByClassName('sliderdisplay')[0].style.background = val;
}

function updateBubble(e)
{
	var bubble = e.target.parentNode.getElementsByTagName('output')[0]
	var max = e.target.hasAttribute('max') ? e.target.attributes.max.value : 255;

	if (bubble) {
		bubble.innerHTML = e.target.value
	}
}

function toggleBubble(e)
{
	e.target.parentNode.querySelector('output').classList.toggle('hidden');
}

function updateLen(s)
{
	if (!d.getElementById(`seg${s}s`)) return;
	var start = parseInt(d.getElementById(`seg${s}s`).value);
	var stop	= parseInt(d.getElementById(`seg${s}e`).value);
	var len = stop - start;
	var out = "(delete)"
	if (len > 1) {
		out = `${len} LEDs`;
	} else if (len == 1) {
		out = "1 LED"
	}
	
	if (d.getElementById(`seg${s}grp`) != null)
	{
		var grp = parseInt(d.getElementById(`seg${s}grp`).value);
		var spc = parseInt(d.getElementById(`seg${s}spc`).value);
		if (grp == 0) grp = 1;
		var virt = Math.ceil(len/(grp + spc));
		if (!isNaN(virt) && (grp > 1 || spc > 0)) out += ` (${virt} virtual)`;
	}
	
	d.getElementById(`seg${s}len`).innerHTML = out;
}

function updatePA()
{
	var ps = d.getElementsByClassName("seg");
	for (i = 0; i < ps.length; i++) {
		ps[i].style.backgroundColor = "var(--c-2)";
	}
	ps = d.getElementsByClassName("psts");
	for (i = 0; i < ps.length; i++) {
		ps[i].style.backgroundColor = "var(--c-2)";
	}
	if (currentPreset > 0) {
		var acv = d.getElementById(`p${currentPreset}o`);
		if (acv && !expanded[currentPreset+100])
			acv.style.background = "var(--c-6)";
		acv = d.getElementById(`p${currentPreset}qlb`);
		if (acv) acv.style.background = "var(--c-6)";
	}
}

function updateUI()
{
	d.getElementById('buttonPower').className = (isOn) ? "active":"";
	d.getElementById('buttonNl').className = (nlA) ? "active":"";
	d.getElementById('buttonSync').className = (syncSend) ? "active":"";

	d.getElementById('fxb' + selectedFx).style.backgroundColor = "var(--c-6)";
	updateTrail(d.getElementById('sliderBri'));
	updateTrail(d.getElementById('sliderSpeed'));
	updateTrail(d.getElementById('sliderIntensity'));
	updateTrail(d.getElementById('sliderW'));
	if (isRgbw) d.getElementById('wwrap').style.display = "block";

	spal = d.getElementById("selectPalette");
	spal.style.backgroundColor = (spal.selectedIndex > 0) ? "var(--c-6)":"var(--c-3)";
	updatePA();
	updateHex();
	updateRgb();
}

function displayRover(i,s)
{
	d.getElementById('rover').style.transform = (i.live && s.lor == 0) ? "translateY(0px)":"translateY(100%)";
	var sour = i.lip ? i.lip:""; if (sour.length > 2) sour = " from " + sour;
	d.getElementById('lv').innerHTML = `WLED is receiving live ${i.lm} data${sour}`;
	d.getElementById('roverstar').style.display = (i.live && s.lor) ? "block":"none";
}

function compare(a, b) {
	if (a.name < b.name) return -1;
	return 1;
}
function cmpP(a, b) {
	if (!a[1].n) return (a[0] > b[0]);
  return a[1].n.localeCompare(b[1].n,undefined, {numeric: true});
}

var jsonTimeout;
var reqC = 0;
function requestJson(command, rinfo = true, verbose = true) {
	d.getElementById('connind').style.backgroundColor = "#a90";
	lastUpdate = new Date();
	if (!jsonTimeout) jsonTimeout = setTimeout(showErrorToast, 3000);
	var req = null;
	e1 = d.getElementById('fxlist');
	e2 = d.getElementById('selectPalette');

	url = rinfo ? '/json/si': (command ? '/json/state':'/json');
	if (loc) {
		url = `http://${locip}${url}`;
	}
	
	type = command ? 'post':'get';
	if (command)
	{
    command.v = verbose;
    command.time = Math.floor(Date.now() / 1000);
		req = JSON.stringify(command);
		//console.log(req);
	}
	fetch
	(url, {
		method: type,
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		},
		body: req
	})
	.then(res => {
		if (!res.ok) {
			 showErrorToast();
		}
		return res.json();
	})
	.then(json => {
		clearTimeout(jsonTimeout);
		jsonTimeout = null;
		clearErrorToast();
		d.getElementById('connind').style.backgroundColor = "#070";
		if (!json) showToast('Empty response', true);
		if (json.success) return;
		var s = json;
		if (!command || rinfo) {
		if (!rinfo) {
		pmt = json.info.fs.pmt;
    if (pmt != pmtLS || pmt == 0) {
      setTimeout(loadPresets,99);
    }
    else populatePresets(true);
    pmtLast = pmt;
		var x='',y='<option value="0">Default</option>';
		json.effects.shift(); //remove solid
		for (i in json.effects) json.effects[i] = {id: parseInt(i)+1, name:json.effects[i]};
		json.effects.sort(compare);
		for (i in json.effects) {
		x += `<button class="btn${(i==0)?" first":""}" id="fxb${json.effects[i].id}" onclick="setX(${json.effects[i].id});">${json.effects[i].name}</button><br>`;
		}

		json.palettes.shift(); //remove default
		for (i in json.palettes) json.palettes[i] = {"id": parseInt(i)+1, "name":json.palettes[i]};
		json.palettes.sort(compare);
		for (i in json.palettes) {
		y += `<option value="${json.palettes[i].id}">${json.palettes[i].name}</option>`;
		}
		e1.innerHTML=x; e2.innerHTML=y;
		}
		
			var info = json.info;
			var name = info.name;
			d.getElementById('namelabel').innerHTML = name;
			if (name === "Dinnerbone") d.documentElement.style.transform = "rotate(180deg)";
			if (info.live) name = "(Live) " + name;
		if (loc) name = "(L) " + name;
			d.title = name;
			isRgbw = info.leds.wv;
			ledCount = info.leds.count;
			syncTglRecv = info.str;
      maxSeg = info.leds.maxseg;
      pmt = info.fs.pmt;
      if (!command && pmt != pmtLast) setTimeout(loadPresets,99);
      pmtLast = pmt;
		lastinfo = info;
		if (isInfo) populateInfo(info);
			s = json.state;
			displayRover(info, s);
		}
		isOn = s.on;
		d.getElementById('sliderBri').value= s.bri;
		nlA = s.nl.on;
		nlDur = s.nl.dur;
		nlTar = s.nl.tbri;
		nlFade = s.nl.fade;
		syncSend = s.udpn.send;
		savedPresets = s.pss;
		currentPreset = s.ps;
		d.getElementById('cyToggle').checked = (s.pl < 0) ? false : true;
		d.getElementById('cycs').value = s.ccnf.min;
		d.getElementById('cyce').value = s.ccnf.max;
		d.getElementById('cyct').value = s.ccnf.time /10;
		d.getElementById('cyctt').value = s.transition /10;
		
		var selc=0; var ind=0;
		populateSegments(s);
		for (i in s.seg)
		{
			if(s.seg[i].sel) {selc = ind; break;} ind++;
		}
		var i=s.seg[selc];
		if (!i) {
			showToast('No Segments!', true);
			updateUI();
			return;
		}
		var cd = d.getElementById('csl').children;
		for (e = 2; e >= 0; e--)
		{
			cd[e].style.backgroundColor = "rgb(" + i.col[e][0] + "," + i.col[e][1] + "," + i.col[e][2] + ")";
			if (isRgbw) whites[e] = parseInt(i.col[e][3]);
			selectSlot(csel);
		}
		d.getElementById('sliderSpeed').value = whites[csel];

		d.getElementById('sliderSpeed').value = i.sx;
		d.getElementById('sliderIntensity').value = i.ix;

		d.getElementById('fxb' + selectedFx).style.backgroundColor = "var(--c-3)";
		selectedFx = i.fx;
		e2.value = i.pal;
		if (!command) d.getElementById('Effects').scrollTop = d.getElementById('fxb' + selectedFx).offsetTop - d.getElementById('Effects').clientHeight/1.8;

		if (s.error && s.error != 0) {
      var errstr = "";
      switch (s.error) {
        case 10: errstr = "Could not mount filesystem!"; break;
        case 11: errstr = "Not enough space to save preset!"; break;
        case 12: errstr = "The requested preset does not exist."; break;
        case 19: errstr = "A filesystem error has occured."; break;
      }
      showToast('Error ' + s.error + ": " + errstr, true);
    }
		updateUI();
	})
	.catch(function (error) {
		showToast(error, true);
	  console.log(error);
	})
}

function togglePower() {
	isOn = !isOn;
	var obj = {"on": isOn};
	obj.transition = parseInt(d.getElementById('cyctt').value*10);
	requestJson(obj);
}

function toggleNl() {
	nlA = !nlA;
	if (nlA)
	{
		showToast(`Timer active. Your light will turn ${nlTar > 0 ? "on":"off"} ${nlFade ? "over":"after"} ${nlDur} minutes.`);
	} else {
		showToast('Timer deactivated.');
	}
	var obj = {"nl": {"on": nlA}};
	requestJson(obj);
}

function toggleSync() {
	syncSend = !syncSend;
	if (syncSend)
	{
		showToast('Other lights in the network will now sync to this one.');
	} else {
		showToast('This light and other lights in the network will no longer sync.');
	}
	var obj = {"udpn": {"send": syncSend}};
	if (syncTglRecv) obj.udpn.recv = syncSend;
	requestJson(obj);
}

function toggleLiveview() {
	isLv = !isLv;
	d.getElementById('liveview').style.display = (isLv) ? "block":"none";
	var url = loc ? `http://${locip}/liveview`:"/liveview";
	d.getElementById('liveview').src = (isLv) ? url:"about:blank";
	d.getElementById('buttonSr').className = (isLv) ? "active":"";
	size();
}

function toggleInfo() {
	isInfo = !isInfo;
	if (isInfo) populateInfo(lastinfo);
	d.getElementById('info').style.transform = (isInfo) ? "translateY(0px)":"translateY(100%)";
	d.getElementById('buttonI').className = (isInfo) ? "active":"";
}

function makeSeg() {
	var ns = 0;
	if (lowestUnused > 0) {
		var pend = d.getElementById(`seg${lowestUnused -1}e`).value;
		if (pend < ledCount) ns = pend;
	}
	var cn = `<div class="seg">
			<div class="segname newseg">
				New segment ${lowestUnused}
			</div>
			<br>
			<div class="segin expanded">
				<table class="segt">
					<tr>
						<td class="segtd">Start LED</td>
						<td class="segtd">Stop LED</td>
					</tr>
					<tr>
						<td class="segtd"><input class="noslide segn" id="seg${lowestUnused}s" type="number" min="0" max="${ledCount-1}" value="${ns}" oninput="updateLen(${lowestUnused})"></td>
						<td class="segtd"><input class="noslide segn" id="seg${lowestUnused}e" type="number" min="0" max="${ledCount}" value="${ledCount}" oninput="updateLen(${lowestUnused})"></td>
					</tr>
				</table>
				<div class="h" id="seg${lowestUnused}len">${ledCount - ns} LEDs</div>
				<i class="icons e-icon cnf cnf-s half" id="segc${lowestUnused}" onclick="setSeg(${lowestUnused}); resetUtil();">&#xe390;</i>
			</div>
		</div>`;
	d.getElementById('segutil').innerHTML = cn;
}

function resetUtil() {
	var cn = `<button class="btn btn-s btn-i" onclick="makeSeg()"><i class="icons btn-icon">&#xe18a;</i>Add segment</button><br>`;
	d.getElementById('segutil').innerHTML = cn;
}

function makeP(i) {
	return `
	<input type="text" class="ptxt noslide" id="p${i}txt" autocomplete="off" maxlength=32 value="${(i>0)?pName(i):""}" placeholder="Enter name..."/><br>
	<div class="c">Quick load label: <input type="text" class="stxt noslide" maxlength=2 value="${qlName(i)}" id="p${i}ql" autocomplete="off"/></div>
	<div class="h">(leave empty for no Quick load button)</div>
	<label class="check revchkl">
		${(i>0)?"Overwrite with state":"Use current state"}
		<input type="checkbox" id="p${i}cstgl" onchange="tglCs(${i})" ${(i>0)?"":"checked"}>
		<span class="checkmark schk"></span>
	</label><br>
	<div class="po2" id="p${i}o2">
		API command<br>
		<textarea class="noslide" id="p${i}api"></textarea>
	</div>
	<div class="po1" id="p${i}o1">
		<label class="check revchkl">
			Include brightness
			<input type="checkbox" id="p${i}ibtgl" checked>
			<span class="checkmark schk"></span>
		</label>
		<label class="check revchkl">
			Save segment bounds
			<input type="checkbox" id="p${i}sbtgl" checked>
			<span class="checkmark schk"></span>
		</label>
	</div>
	<div class="c">Save to ID <input class="noslide" id="p${i}id" type="number" oninput="checkUsed(${i})" max=250 min=1 value=${(i>0)?i:getLowestUnusedP()}></div>
	<div class="c">
		<button class="btn btn-i btn-p" onclick="saveP(${i})"><i class="icons btn-icon">&#xe390;</i>${(i>0)?"Save changes":"Save preset"}</button>
		${(i>0)?'<button class="btn btn-i btn-p" onclick="delP('+i+')"><i class="icons btn-icon">&#xe037;</i>Delete preset</button>':
						'<button class="btn btn-p" onclick="resetPUtil()">Cancel</button>'}
	</div>
	<div class="pwarn ${(i>0)?"bp":""} c" id="p${i}warn">

	</div>
	${(i>0)? ('<div class="h">ID ' +i+ '</div>'):""}`;
}

function makePUtil() {
	d.getElementById('putil').innerHTML = `<div class="seg pres">
		<div class="segname newseg">
			New preset</div>
		<div class="segin expanded">
		${makeP(0)}</div></div>`;
	updateTrail(d.getElementById('p0p'));
}

function resetPUtil() {
	var cn = `<button class="btn btn-s btn-i" onclick="makePUtil()"><i class="icons btn-icon">&#xe18a;</i>Create preset</button><br>`;
	d.getElementById('putil').innerHTML = cn;
}

function tglCs(i){
	var pss = d.getElementById(`p${i}cstgl`).checked;
	d.getElementById(`p${i}o1`).style.display = pss? "block" : "none";
	d.getElementById(`p${i}o2`).style.display = !pss? "block" : "none";
}

function selSegEx(s)
{
	var obj = {"seg":[]};
	for(i=0; i<=lSeg; i++){
		obj.seg.push({"sel":(i==s)?true:false});
	}
	requestJson(obj);
}

function selSeg(s){
	var sel = d.getElementById(`seg${s}sel`).checked;
	var obj = {"seg": {"id": s, "sel": sel}};
	requestJson(obj, false);
}

function setSeg(s){
	var start = parseInt(d.getElementById(`seg${s}s`).value);
	var stop	= parseInt(d.getElementById(`seg${s}e`).value);
	if (stop <= start) {delSeg(s); return;};
	var obj = {"seg": {"id": s, "start": start, "stop": stop}};
	if (d.getElementById(`seg${s}grp`))
	{
		var grp = parseInt(d.getElementById(`seg${s}grp`).value);
		var spc = parseInt(d.getElementById(`seg${s}spc`).value);
		obj.seg.grp = grp;
		obj.seg.spc = spc;
	}
	requestJson(obj);
}

function delSeg(s){
	if (segCount < 2) {
		showToast("You need to have multiple segments to delete one!");
		return;
	}
	expanded[s] = false;
	segCount--;
	var obj = {"seg": {"id": s, "stop": 0}};
	requestJson(obj, false);
}

function setRev(s){
	var rev = d.getElementById(`seg${s}rev`).checked;
	var obj = {"seg": {"id": s, "rev": rev}};
	requestJson(obj, false);
}

function setMi(s){
	var mi = d.getElementById(`seg${s}mi`).checked;
	var obj = {"seg": {"id": s, "mi": mi}};
	requestJson(obj, false);
}

function setSegPwr(s){
	var obj = {"seg": {"id": s, "on": !powered[s]}};
	requestJson(obj);
}

function setSegBri(s){
	var obj = {"seg": {"id": s, "bri": parseInt(d.getElementById(`seg${s}bri`).value)}};
	requestJson(obj);
}

function setX(ind) {
	var obj = {"seg": {"fx": parseInt(ind)}};
	requestJson(obj);
}

function setPalette()
{
	var obj = {"seg": {"pal": parseInt(d.getElementById('selectPalette').value)}};
	requestJson(obj);
}

function setBri() {
	var obj = {"bri": parseInt(d.getElementById('sliderBri').value)};
	obj.transition = parseInt(d.getElementById('cyctt').value*10);
	requestJson(obj);
}

function setSpeed() {
	var obj = {"seg": {"sx": parseInt(d.getElementById('sliderSpeed').value)}};
	requestJson(obj, false);
}

function setIntensity() {
	var obj = {"seg": {"ix": parseInt(d.getElementById('sliderIntensity').value)}};
	requestJson(obj, false);
}

function setLor(i) {
	var obj = {"lor": i};
	requestJson(obj);
}

function toggleCY() {
	var obj = {"pl" : -1};
	if (d.getElementById('cyToggle').checked)
	{
		obj = {"pl": 0, "ccnf": {"min": parseInt(d.getElementById('cycs').value), "max": parseInt(d.getElementById('cyce').value), "time": parseInt(d.getElementById('cyct').value*10)}};
		obj.transition = parseInt(d.getElementById('cyctt').value*10);
	}
	
	requestJson(obj);
}

function setPreset(i) {
	var obj = {"ps": i}

	showToast("Loading preset " + pName(i) +" (" + i + ")");

	requestJson(obj);
}

function saveP(i) {
	pI = parseInt(d.getElementById(`p${i}id`).value);
	if (!pI || pI < 1) pI = (i>0) ? i : getLowestUnusedP();
	pN = d.getElementById(`p${i}txt`).value;
	if (pN == "") pN = "Preset " + pI;
	var obj = {};
	if (!d.getElementById(`p${i}cstgl`).checked) {
		var raw = d.getElementById(`p${i}api`).value;
		try {
			obj = JSON.parse(raw);
		} catch (e) {
			obj["win"] = raw;
			if (raw.length < 2) {
				d.getElementById(`p${i}warn`).innerHTML = "&#9888; Please enter your API command first";
				return;
			} else if (raw.indexOf('{') > -1) {
				d.getElementById(`p${i}warn`).innerHTML = "&#9888; Syntax error in custom JSON API command";
				return;
			} else if (raw.indexOf("Please") == 0) {
        d.getElementById(`p${i}warn`).innerHTML = "&#9888; Please refresh the page before modifying this preset";
				return;
      }
		}
		obj["o"] = true;
	} else {
		obj["ib"] = d.getElementById(`p${i}ibtgl`).checked;
		obj["sb"] = d.getElementById(`p${i}sbtgl`).checked;
	}
	obj["psave"] = pI; obj["n"] = pN;
	var pQN = d.getElementById(`p${i}ql`).value;
	if (pQN.length > 0) obj["ql"] = pQN;

  showToast("Saving " + pN +" (" + pI + ")");
	requestJson(obj);
	if (obj["o"]) {
		pJson[pI] = obj;
    delete pJson[pI]["psave"];
    delete pJson[pI]["o"];
    delete pJson[pI]["v"];
    delete pJson[pI]["time"];
	} else {
		pJson[pI] = {"n":pN, "win":"Please refresh the page to see this newly saved command."};
		if (obj["win"]) pJson[pI]["win"] = obj["win"];
		if (obj["ql"])  pJson[pI]["ql"] = obj["ql"];
	}
	populatePresets();
	resetPUtil();
}

function delP(i) {
	var obj = {"pdel": i};
	requestJson(obj);
	delete pJson[i];
	populatePresets();
}

function selectSlot(b) {
	csel = b;
	var cd = d.getElementById('csl').children;
	for (i = 0; i < cd.length; i++) {
		cd[i].style.border="2px solid white";
		cd[i].style.margin="5px";
		cd[i].style.width="42px";
	}
	cd[csel].style.border="5px solid white";
	cd[csel].style.margin="2px";
	cd[csel].style.width="50px";
	cpick.color.set(cd[csel].style.backgroundColor);
	d.getElementById('sliderW').value = whites[csel];
	updateTrail(d.getElementById('sliderW'));
	updateHex();
	updateRgb();
}

var lasth = 0;
function pC(col)
{
	if (col == "rnd")
	{
	col = {h: 0, s: 0, v: 100};
	col.s = Math.floor((Math.random() * 50) + 50);
	do {
		col.h = Math.floor(Math.random() * 360);
	} while (Math.abs(col.h - lasth) < 50);
	lasth = col.h;
	}
	cpick.color.set(col);
	setColor(0);
}

function updateRgb()
{
	var col = cpick.color.rgb;
	var s = d.getElementById('sliderR');
	s.value = col.r; updateTrail(s,1);
	s = d.getElementById('sliderG');
	s.value = col.g; updateTrail(s,2);
	s = d.getElementById('sliderB');
	s.value = col.b; updateTrail(s,3);
}

function updateHex()
{
	var str = cpick.color.hexString;
	str = str.substring(1);
	var w = whites[csel];
	if (w > 0) str += w.toString(16);
	d.getElementById('hexc').value = str;
	d.getElementById('hexcnf').style.backgroundColor = "var(--c-3)";
}

function hexEnter() {
	d.getElementById('hexcnf').style.backgroundColor = "var(--c-6)";
	if(event.keyCode == 13) fromHex();
}

function fromHex()
{
	var str = d.getElementById('hexc').value;
	whites[csel] = parseInt(str.substring(6), 16);
	try {
		cpick.color.set("#" + str.substring(0,6));
	} catch (e) {
		cpick.color.set("#ffaa00");
	}
	if (isNaN(whites[csel])) whites[csel] = 0;
	setColor(2);
}

function fromRgb()
{
	var r = d.getElementById('sliderR').value;
	var g = d.getElementById('sliderG').value;
	var b = d.getElementById('sliderB').value;
	cpick.color.set(`rgb(${r},${g},${b})`);
	setColor(0);
}

function setColor(sr) {
	var cd = d.getElementById('csl').children;
	if (sr == 1 && cd[csel].style.backgroundColor == 'rgb(0, 0, 0)') cpick.color.setChannel('hsv', 'v', 100);
	cd[csel].style.backgroundColor = cpick.color.rgbString;
	if (sr != 2) whites[csel] = d.getElementById('sliderW').value;
	var col = cpick.color.rgb;
	var obj = {"seg": {"col": [[col.r, col.g, col.b, whites[csel]],[],[]]}};
	if (csel == 1) {
		obj = {"seg": {"col": [[],[col.r, col.g, col.b, whites[csel]],[]]}};
	} else if (csel == 2) {
		obj = {"seg": {"col": [[],[],[col.r, col.g, col.b, whites[csel]]]}};
	}
	updateHex();
	updateRgb();
	obj.transition = parseInt(d.getElementById('cyctt').value*10);
	requestJson(obj);
}

var hc = 0;
setInterval(function(){if (!isInfo) return; hc+=18; if (hc>300) hc=0; if (hc>200)hc=306; if (hc==144) hc+=36; if (hc==108) hc+=18;
d.getElementById('heart').style.color = `hsl(${hc}, 100%, 50%)`}, 910);

function openGH()
{
	window.open("https://github.com/Aircoookie/WLED/wiki");
}

var cnfr = false;
function cnfReset()
{
	if (!cnfr)
	{
		var bt = d.getElementById('resetbtn');
	bt.style.color = "#f00";
	bt.innerHTML = "Confirm Reboot";
	cnfr = true; return;
	}
	window.location.href = "/reset";
}

var cnfrS = false;
function rSegs()
{
	var bt = d.getElementById('rsbtn');
	if (!cnfrS)
	{
	bt.style.color = "#f00";
	bt.innerHTML = "Confirm reset";
	cnfrS = true; return;
	}
	cnfrS = false;
	bt.style.color = "#fff";
	bt.innerHTML = "Reset segments";
	var obj = {"seg":[{"start":0,"stop":ledCount,"sel":true}]};
	for(i=1; i<=lSeg; i++){
		obj.seg.push({"stop":0});
	}
	requestJson(obj);
}

function expand(i,a)
{
	if (!a) expanded[i] = !expanded[i];
	d.getElementById('seg' +i).style.display = (expanded[i]) ? "block":"none";
	d.getElementById('sege' +i).style.transform = (expanded[i]) ? "rotate(180deg)":"rotate(0deg)"
	if (i > 100) { //presets
		var p = i-100;
		d.getElementById(`p${p}o`).style.background = (expanded[i] || p != currentPreset)?"var(--c-2)":"var(--c-6)";
		if (d.getElementById('seg' +i).innerHTML == "") {
      d.getElementById('seg' +i).innerHTML = makeP(p);
      var papi = papiVal(p);
      d.getElementById(`p${p}api`).value = papi;
      if (papi.indexOf("Please") == 0) d.getElementById(`p${p}cstgl`).checked = true;
      tglCs(p);
		}
	}
}

function unfocusSliders() {
	d.getElementById("sliderBri").blur();
	d.getElementById("sliderSpeed").blur();
	d.getElementById("sliderIntensity").blur();
}

//sliding UI
const _C = document.querySelector('.container'), N = 4;

let iSlide = 0, x0 = null, scrollS = 0, locked = false, w;

function unify(e) {	return e.changedTouches ? e.changedTouches[0] : e }

function hasIroClass(classList) {
	for (var i = 0; i < classList.length; i++) {
		var element = classList[i];
		if (element.startsWith('Iro')) return true;
	}

	return false;
}


function lock(e) {
	if (pcMode) return;
	var l = e.target.classList;
	var pl = e.target.parentElement.classList;

	if (l.contains('noslide') || hasIroClass(l) || hasIroClass(pl)) return;

	x0 = unify(e).clientX;
	scrollS = d.getElementsByClassName("tabcontent")[iSlide].scrollTop;

	_C.classList.toggle('smooth', !(locked = true))
}

function move(e) {
	if(!locked || pcMode) return;
	var dx = unify(e).clientX - x0, s = Math.sign(dx), 
			f = +(s*dx/w).toFixed(2);

  if((iSlide > 0 || s < 0) && (iSlide < N - 1 || s > 0)
     && f > .12
     && d.getElementsByClassName("tabcontent")[iSlide].scrollTop == scrollS) {
		_C.style.setProperty('--i', iSlide -= s);
		f = 1 - f;
		updateTablinks(iSlide);
	}
	_C.style.setProperty('--f', f);
	_C.classList.toggle('smooth', !(locked = false));
	x0 = null
}

function size() { 
	w = window.innerWidth;
	var h = d.getElementById('top').clientHeight;
	sCol('--th', h + "px");
	sCol('--bh', d.getElementById('bot').clientHeight + "px");
	if (isLv) h -= 4;
	sCol('--tp', h + "px");
	togglePcMode();
}

function togglePcMode(fromB = false)
{
	if (fromB) {
	pcModeA = !pcModeA;
	localStorage.setItem('pcm', pcModeA);
	pcMode = pcModeA;
	}
	if (w < 1250 && !pcMode) return;
	if (!fromB && ((w < 1250 && lastw < 1250) || (w >= 1250 && lastw >= 1250))) return;
	openTab(0, true);
	if (w < 1250) {pcMode = false;}
	else if (pcModeA && !fromB) pcMode = pcModeA;
	updateTablinks(0);
	d.getElementById('buttonPcm').className = (pcMode) ? "active":"";
	d.getElementById('bot').style.height = (pcMode && !cfg.comp.pcmbot) ? "0":"auto";
	sCol('--bh', d.getElementById('bot').clientHeight + "px");
  _C.style.width = (pcMode)?'100%':'400%';
	lastw = w;
}

function isObject(item) {
	return (item && typeof item === 'object' && !Array.isArray(item));
}

function mergeDeep(target, ...sources) {
	if (!sources.length) return target;
	const source = sources.shift();

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) Object.assign(target, { [key]: {} });
				mergeDeep(target[key], source[key]);
			} else {
				Object.assign(target, { [key]: source[key] });
			}
		}
	}
	return mergeDeep(target, ...sources);
}

size();
_C.style.setProperty('--n', N);

window.addEventListener('resize', size, false);

_C.addEventListener('mousedown', lock, false);
_C.addEventListener('touchstart', lock, false);

_C.addEventListener('mouseout', move, false);
_C.addEventListener('mouseup', move, false);
_C.addEventListener('touchend', move, false);