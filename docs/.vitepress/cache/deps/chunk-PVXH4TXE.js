import {
  fromPairs_default,
  get_default,
  isNil_default,
  set_default
} from "./chunk-N33PAY7X.js";
import {
  isClient
} from "./chunk-27DSPEQQ.js";
import {
  circle_check_default,
  circle_close_default,
  circle_close_filled_default,
  close_default,
  info_filled_default,
  loading_default,
  success_filled_default,
  warning_filled_default
} from "./chunk-IFJDLX57.js";
import {
  Comment,
  Fragment,
  Text,
  createBlock,
  createCommentVNode,
  isVNode,
  openBlock,
  warn
} from "./chunk-XKSR56VD.js";

// play-table/node_modules/element-plus/es/utils/dom/aria.mjs
var FOCUSABLE_ELEMENT_SELECTORS = `a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])`;
var isVisible = (element) => {
  if (false)
    return true;
  const computed = getComputedStyle(element);
  return computed.position === "fixed" ? false : element.offsetParent !== null;
};
var obtainAllFocusableElements = (element) => {
  return Array.from(element.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS)).filter((item) => isFocusable(item) && isVisible(item));
};
var isFocusable = (element) => {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) {
    return true;
  }
  if (element.disabled) {
    return false;
  }
  switch (element.nodeName) {
    case "A": {
      return !!element.href && element.rel !== "ignore";
    }
    case "INPUT": {
      return !(element.type === "hidden" || element.type === "file");
    }
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA": {
      return true;
    }
    default: {
      return false;
    }
  }
};
var attemptFocus = (element) => {
  var _a;
  if (!isFocusable(element)) {
    return false;
  }
  (_a = element.focus) == null ? void 0 : _a.call(element);
  return document.activeElement === element;
};
var triggerEvent = function(elm, name, ...opts) {
  let eventName;
  if (name.includes("mouse") || name.includes("click")) {
    eventName = "MouseEvents";
  } else if (name.includes("key")) {
    eventName = "KeyboardEvent";
  } else {
    eventName = "HTMLEvents";
  }
  const evt = document.createEvent(eventName);
  evt.initEvent(name, ...opts);
  elm.dispatchEvent(evt);
  return elm;
};
var isLeaf = (el) => !el.getAttribute("aria-owns");
var getSibling = (el, distance, elClass) => {
  const { parentNode } = el;
  if (!parentNode)
    return null;
  const siblings = parentNode.querySelectorAll(elClass);
  const index = Array.prototype.indexOf.call(siblings, el);
  return siblings[index + distance] || null;
};
var focusNode = (el) => {
  if (!el)
    return;
  el.focus();
  !isLeaf(el) && el.click();
};

// play-table/node_modules/element-plus/es/utils/dom/event.mjs
var composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
  const handleEvent = (event) => {
    const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler == null ? void 0 : oursHandler(event);
    }
  };
  return handleEvent;
};
var whenMouse = (handler) => {
  return (e) => e.pointerType === "mouse" ? handler(e) : void 0;
};

// play-table/node_modules/element-plus/es/utils/browser.mjs
var isFirefox = () => isClient && /firefox/i.test(window.navigator.userAgent);

// play-table/node_modules/element-plus/es/utils/dom/position.mjs
var isInContainer = (el, container) => {
  if (!isClient || !el || !container)
    return false;
  const elRect = el.getBoundingClientRect();
  let containerRect;
  if (container instanceof Element) {
    containerRect = container.getBoundingClientRect();
  } else {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  }
  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
};
var getOffsetTop = (el) => {
  let offset = 0;
  let parent = el;
  while (parent) {
    offset += parent.offsetTop;
    parent = parent.offsetParent;
  }
  return offset;
};
var getOffsetTopDistance = (el, containerEl) => {
  return Math.abs(getOffsetTop(el) - getOffsetTop(containerEl));
};
var getClientXY = (event) => {
  let clientX;
  let clientY;
  if (event.type === "touchend") {
    clientY = event.changedTouches[0].clientY;
    clientX = event.changedTouches[0].clientX;
  } else if (event.type.startsWith("touch")) {
    clientY = event.touches[0].clientY;
    clientX = event.touches[0].clientX;
  } else {
    clientY = event.clientY;
    clientX = event.clientX;
  }
  return {
    clientX,
    clientY
  };
};

// play-table/node_modules/@vue/shared/dist/shared.esm-bundler.js
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
var EMPTY_OBJ = true ? Object.freeze({}) : {};
var EMPTY_ARR = true ? Object.freeze([]) : [];
var NOOP = () => {
};
var extend = Object.assign;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty.call(val, key);
var isArray = Array.isArray;
var isMap = (val) => toTypeString(val) === "[object Map]";
var isDate = (val) => toTypeString(val) === "[object Date]";
var isFunction = (val) => typeof val === "function";
var isString = (val) => typeof val === "string";
var isSymbol = (val) => typeof val === "symbol";
var isObject = (val) => val !== null && typeof val === "object";
var isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var isReservedProp = makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
var isBuiltInDirective = makeMap(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
);
var cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
var capitalize = cacheStringFunction(
  (str) => str.charAt(0).toUpperCase() + str.slice(1)
);
var toHandlerKey = cacheStringFunction(
  (str) => str ? `on${capitalize(str)}` : ``
);
var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console";
var isGloballyWhitelisted = makeMap(GLOBALS_WHITE_LISTED);
var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
var isHTMLTag = makeMap(HTML_TAGS);
var isSVGTag = makeMap(SVG_TAGS);
var isVoidTag = makeMap(VOID_TAGS);
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isSpecialBooleanAttr = makeMap(specialBooleanAttrs);
var isBooleanAttr = makeMap(
  specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
);
var isKnownHtmlAttr = makeMap(
  `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`
);
var isKnownSvgAttr = makeMap(
  `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
);

// play-table/node_modules/element-plus/es/utils/types.mjs
var isUndefined = (val) => val === void 0;
var isBoolean = (val) => typeof val === "boolean";
var isNumber = (val) => typeof val === "number";
var isEmpty = (val) => !val && val !== 0 || isArray(val) && val.length === 0 || isObject(val) && !Object.keys(val).length;
var isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
var isPropAbsent = (prop) => {
  return isNil_default(prop);
};
var isStringNumber = (val) => {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};

// play-table/node_modules/element-plus/es/utils/strings.mjs
var escapeStringRegexp = (string = "") => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
var capitalize2 = (str) => capitalize(str);

// play-table/node_modules/element-plus/es/utils/objects.mjs
var keysOf = (arr) => Object.keys(arr);
var entriesOf = (arr) => Object.entries(arr);
var getProp = (obj, path, defaultValue) => {
  return {
    get value() {
      return get_default(obj, path, defaultValue);
    },
    set value(val) {
      set_default(obj, path, val);
    }
  };
};

// play-table/node_modules/element-plus/es/utils/error.mjs
var ElementPlusError = class extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
};
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message) {
  if (true) {
    const error = isString(scope) ? new ElementPlusError(`[${scope}] ${message}`) : scope;
    console.warn(error);
  }
}

// play-table/node_modules/element-plus/es/utils/dom/style.mjs
var SCOPE = "utils/dom/style";
var classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
var hasClass = (el, cls) => {
  if (!el || !cls)
    return false;
  if (cls.includes(" "))
    throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};
var addClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.add(...classNameToArray(cls));
};
var removeClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.remove(...classNameToArray(cls));
};
var getStyle = (element, styleName) => {
  var _a;
  if (!isClient || !element || !styleName)
    return "";
  let key = camelize(styleName);
  if (key === "float")
    key = "cssFloat";
  try {
    const style = element.style[key];
    if (style)
      return style;
    const computed = (_a = document.defaultView) == null ? void 0 : _a.getComputedStyle(element, "");
    return computed ? computed[key] : "";
  } catch (e) {
    return element.style[key];
  }
};
var setStyle = (element, styleName, value) => {
  if (!element || !styleName)
    return;
  if (isObject(styleName)) {
    entriesOf(styleName).forEach(([prop, value2]) => setStyle(element, prop, value2));
  } else {
    const key = camelize(styleName);
    element.style[key] = value;
  }
};
var removeStyle = (element, style) => {
  if (!element || !style)
    return;
  if (isObject(style)) {
    keysOf(style).forEach((prop) => removeStyle(element, prop));
  } else {
    setStyle(element, style, "");
  }
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString(value)) {
    return value;
  }
  debugWarn(SCOPE, "binding value must be a string or number");
}

// play-table/node_modules/element-plus/es/utils/dom/scroll.mjs
var isScroll = (el, isVertical) => {
  if (!isClient)
    return false;
  const key = {
    undefined: "overflow",
    true: "overflow-y",
    false: "overflow-x"
  }[String(isVertical)];
  const overflow = getStyle(el, key);
  return ["scroll", "auto", "overlay"].some((s) => overflow.includes(s));
};
var getScrollContainer = (el, isVertical) => {
  if (!isClient)
    return;
  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent))
      return window;
    if (isScroll(parent, isVertical))
      return parent;
    parent = parent.parentNode;
  }
  return parent;
};
var scrollBarWidth;
var getScrollBarWidth = (namespace) => {
  var _a;
  if (!isClient)
    return 0;
  if (scrollBarWidth !== void 0)
    return scrollBarWidth;
  const outer = document.createElement("div");
  outer.className = `${namespace}-scrollbar__wrap`;
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  document.body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;
  (_a = outer.parentNode) == null ? void 0 : _a.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
};
function scrollIntoView(container, selected) {
  if (!isClient)
    return;
  if (!selected) {
    container.scrollTop = 0;
    return;
  }
  const offsetParents = [];
  let pointer = selected.offsetParent;
  while (pointer !== null && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }
  const top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
  const bottom = top + selected.offsetHeight;
  const viewRectTop = container.scrollTop;
  const viewRectBottom = viewRectTop + container.clientHeight;
  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
}

// play-table/node_modules/element-plus/es/utils/vue/global-node.mjs
var globalNodes = [];
var target = !isClient ? void 0 : document.body;
function createGlobalNode(id) {
  const el = document.createElement("div");
  if (id !== void 0) {
    el.setAttribute("id", id);
  }
  target.appendChild(el);
  globalNodes.push(el);
  return el;
}
function removeGlobalNode(el) {
  globalNodes.splice(globalNodes.indexOf(el), 1);
  el.remove();
}
function changeGlobalNodesTarget(el) {
  if (el === target)
    return;
  target = el;
  globalNodes.forEach((el2) => {
    if (el2.contains(target) === false) {
      target.appendChild(el2);
    }
  });
}

// play-table/node_modules/element-plus/es/utils/vue/props/runtime.mjs
var epPropKey = "__epPropKey";
var definePropType = (val) => val;
var isEpProp = (val) => isObject(val) && !!val[epPropKey];
var buildProp = (prop, key) => {
  if (!isObject(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
var buildProps = (props) => fromPairs_default(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));

// play-table/node_modules/element-plus/es/utils/vue/icon.mjs
var iconPropType = definePropType([
  String,
  Object,
  Function
]);
var CloseComponents = {
  Close: close_default
};
var TypeComponents = {
  Close: close_default,
  SuccessFilled: success_filled_default,
  InfoFilled: info_filled_default,
  WarningFilled: warning_filled_default,
  CircleCloseFilled: circle_close_filled_default
};
var TypeComponentsMap = {
  success: success_filled_default,
  warning: warning_filled_default,
  error: circle_close_filled_default,
  info: info_filled_default
};
var ValidateComponentsMap = {
  validating: loading_default,
  success: circle_check_default,
  error: circle_close_default
};

// play-table/node_modules/element-plus/es/utils/vue/install.mjs
var withInstall = (main, extra) => {
  ;
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;
      main[key] = comp;
    }
  }
  return main;
};
var withInstallFunction = (fn, name) => {
  ;
  fn.install = (app) => {
    ;
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn;
};
var withInstallDirective = (directive, name) => {
  ;
  directive.install = (app) => {
    app.directive(name, directive);
  };
  return directive;
};
var withNoopInstall = (component) => {
  ;
  component.install = NOOP;
  return component;
};

// play-table/node_modules/element-plus/es/utils/vue/refs.mjs
var composeRefs = (...refs) => {
  return (el) => {
    refs.forEach((ref) => {
      if (isFunction(ref)) {
        ref(el);
      } else {
        ref.value = el;
      }
    });
  };
};

// play-table/node_modules/element-plus/es/constants/aria.mjs
var EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};

// play-table/node_modules/element-plus/es/constants/date.mjs
var datePickTypes = [
  "year",
  "month",
  "date",
  "dates",
  "week",
  "datetime",
  "datetimerange",
  "daterange",
  "monthrange"
];

// play-table/node_modules/element-plus/es/constants/key.mjs
var INSTALLED_KEY = Symbol("INSTALLED_KEY");

// play-table/node_modules/element-plus/es/constants/size.mjs
var componentSizes = ["", "default", "small", "large"];
var componentSizeMap = {
  large: 40,
  default: 32,
  small: 24
};

// play-table/node_modules/element-plus/es/utils/vue/size.mjs
var getComponentSize = (size) => {
  return componentSizeMap[size || "default"];
};

// play-table/node_modules/element-plus/es/utils/vue/validator.mjs
var isValidComponentSize = (val) => ["", ...componentSizes].includes(val);
var isValidDatePickType = (val) => [...datePickTypes].includes(val);

// play-table/node_modules/element-plus/es/utils/vue/vnode.mjs
var SCOPE2 = "utils/vue/vnode";
var PatchFlags = ((PatchFlags2) => {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
  return PatchFlags2;
})(PatchFlags || {});
function isFragment(node) {
  return isVNode(node) && node.type === Fragment;
}
function isText(node) {
  return isVNode(node) && node.type === Text;
}
function isComment(node) {
  return isVNode(node) && node.type === Comment;
}
var TEMPLATE = "template";
function isTemplate(node) {
  return isVNode(node) && node.type === TEMPLATE;
}
function isValidElementNode(node) {
  return isVNode(node) && !isFragment(node) && !isComment(node);
}
function getChildren(node, depth) {
  if (isComment(node))
    return;
  if (isFragment(node) || isTemplate(node)) {
    return depth > 0 ? getFirstValidNode(node.children, depth - 1) : void 0;
  }
  return node;
}
var getFirstValidNode = (nodes, maxDepth = 3) => {
  if (Array.isArray(nodes)) {
    return getChildren(nodes[0], maxDepth);
  } else {
    return getChildren(nodes, maxDepth);
  }
};
function renderIf(condition, ...args) {
  return condition ? renderBlock(...args) : createCommentVNode("v-if", true);
}
function renderBlock(...args) {
  return openBlock(), createBlock(...args);
}
var getNormalizedProps = (node) => {
  if (!isVNode(node)) {
    debugWarn(SCOPE2, "[getNormalizedProps] must be a VNode");
    return {};
  }
  const raw = node.props || {};
  const type = (isVNode(node.type) ? node.type.props : void 0) || {};
  const props = {};
  Object.keys(type).forEach((key) => {
    if (hasOwn(type[key], "default")) {
      props[key] = type[key].default;
    }
  });
  Object.keys(raw).forEach((key) => {
    props[camelize(key)] = raw[key];
  });
  return props;
};
var ensureOnlyChild = (children) => {
  if (!isArray(children) || children.length > 1) {
    throw new Error("expect to receive a single Vue element child");
  }
  return children[0];
};
var flattedChildren = (children) => {
  const vNodes = isArray(children) ? children : [children];
  const result = [];
  vNodes.forEach((child) => {
    var _a;
    if (isArray(child)) {
      result.push(...flattedChildren(child));
    } else if (isVNode(child) && isArray(child.children)) {
      result.push(...flattedChildren(child.children));
    } else {
      result.push(child);
      if (isVNode(child) && ((_a = child.component) == null ? void 0 : _a.subTree)) {
        result.push(...flattedChildren(child.component.subTree));
      }
    }
  });
  return result;
};

// play-table/node_modules/element-plus/es/utils/arrays.mjs
var unique = (arr) => [...new Set(arr)];
var castArray = (arr) => {
  if (!arr && arr !== 0)
    return [];
  return Array.isArray(arr) ? arr : [arr];
};

// play-table/node_modules/element-plus/es/utils/i18n.mjs
var isKorean = (text) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(text);

// play-table/node_modules/element-plus/es/utils/raf.mjs
var rAF = (fn) => isClient ? window.requestAnimationFrame(fn) : setTimeout(fn, 16);
var cAF = (handle) => isClient ? window.cancelAnimationFrame(handle) : clearTimeout(handle);

// play-table/node_modules/element-plus/es/utils/rand.mjs
var generateId = () => Math.floor(Math.random() * 1e4);
var getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

// play-table/node_modules/element-plus/es/utils/typescript.mjs
var mutable = (val) => val;

export {
  isVisible,
  obtainAllFocusableElements,
  isFocusable,
  attemptFocus,
  triggerEvent,
  isLeaf,
  getSibling,
  focusNode,
  composeEventHandlers,
  whenMouse,
  isFirefox,
  isInContainer,
  getOffsetTop,
  getOffsetTopDistance,
  getClientXY,
  makeMap,
  NOOP,
  extend,
  hasOwn,
  isArray,
  isMap,
  isDate,
  isFunction,
  isString,
  isSymbol,
  isObject,
  isPromise,
  toRawType,
  isIntegerKey,
  camelize,
  hyphenate,
  capitalize,
  hasChanged,
  isUndefined,
  isBoolean,
  isNumber,
  isEmpty,
  isElement,
  isPropAbsent,
  isStringNumber,
  escapeStringRegexp,
  capitalize2,
  keysOf,
  entriesOf,
  getProp,
  throwError,
  debugWarn,
  classNameToArray,
  hasClass,
  addClass,
  removeClass,
  getStyle,
  setStyle,
  removeStyle,
  addUnit,
  isScroll,
  getScrollContainer,
  getScrollBarWidth,
  scrollIntoView,
  createGlobalNode,
  removeGlobalNode,
  changeGlobalNodesTarget,
  epPropKey,
  definePropType,
  isEpProp,
  buildProp,
  buildProps,
  iconPropType,
  CloseComponents,
  TypeComponents,
  TypeComponentsMap,
  ValidateComponentsMap,
  withInstall,
  withInstallFunction,
  withInstallDirective,
  withNoopInstall,
  composeRefs,
  EVENT_CODE,
  componentSizes,
  getComponentSize,
  isValidComponentSize,
  isValidDatePickType,
  PatchFlags,
  isFragment,
  isText,
  isComment,
  isTemplate,
  isValidElementNode,
  getFirstValidNode,
  renderIf,
  renderBlock,
  getNormalizedProps,
  ensureOnlyChild,
  flattedChildren,
  unique,
  castArray,
  isKorean,
  rAF,
  cAF,
  generateId,
  getRandomInt,
  mutable
};
//# sourceMappingURL=chunk-PVXH4TXE.js.map
