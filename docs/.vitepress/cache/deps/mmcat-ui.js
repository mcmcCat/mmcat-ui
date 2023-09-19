import {
  Transition,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  defineComponent,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  shallowRef,
  toDisplayString,
  unref,
  useSlots,
  vShow,
  watch,
  withCtx,
  withDirectives
} from "./chunk-67UUJLDS.js";

// node_modules/.pnpm/mmcat-ui@1.1.0/node_modules/mmcat-ui/dist/mmcat-ui.js
Object.freeze({});
Object.freeze([]);
var P = (s) => typeof s == "string";
var n1 = (s) => s === void 0;
var o1 = (s) => typeof s == "number";
var c1 = class extends Error {
  constructor(e) {
    super(e), this.name = "McElementError";
  }
};
function i1(s, e) {
  if (true) {
    const t = P(s) ? new c1(`[${s}] ${e}`) : s;
    console.warn(t);
  }
}
var a1 = "utils/dom/style";
function l1(s, e = "px") {
  if (!s)
    return "";
  if (P(s))
    return s;
  if (o1(s))
    return `${s}${e}`;
  i1(a1, "binding value must be a string or number");
}
var $ = (s) => (s.install = function(e) {
  const { name: t } = s;
  e.component(t, s);
}, s);
var r1 = (s, e) => (s.install = (t) => {
  s._context = t._context, t.config.globalProperties[e] = s;
}, s);
var d1 = {
  color: String,
  size: [Number, String]
};
var u1 = "mc";
var p1 = "is-";
var y = (s, e, t, i, d) => {
  let u = `${s}-${e}`;
  return t && (u += `-${t}`), i && (u += `__${i}`), d && (u += `--${d}`), u;
};
var I = (s) => {
  const e = computed(() => u1);
  return {
    namespace: e,
    b: (o = "") => y(unref(e), s, o, "", ""),
    e: (o) => o ? y(unref(e), s, "", o, "") : "",
    m: (o) => o ? y(unref(e), s, "", "", o) : "",
    be: (o, h) => o && h ? y(unref(e), s, o, h, "") : "",
    em: (o, h) => o && h ? y(unref(e), s, "", o, h) : "",
    bm: (o, h) => o && h ? y(unref(e), s, o, "", h) : "",
    bem: (o, h, b) => o && h && b ? y(unref(e), s, o, h, b) : "",
    is: (o, ...h) => {
      const b = h.length >= 1 ? h[0] : true;
      return o && b ? `${p1}${o}` : "";
    }
  };
};
var h1 = defineComponent({
  name: "McIcon",
  __name: "icon",
  props: d1,
  setup(s) {
    const e = s, t = I("icon"), i = computed(() => !e.size && !e.color ? {} : {
      fontSize: n1(e.size) ? void 0 : l1(e.size),
      "--color": e.color
      // 通过 CSS 变量方式进行设置 color
    });
    return (d, u) => (openBlock(), createElementBlock("i", mergeProps({
      class: unref(t).b(),
      style: i.value
    }, d.$attrs), [
      renderSlot(d.$slots, "default")
    ], 16));
  }
});
var _1 = $(h1);
var m1 = {
  // 返回值的作用是仅在表达式为true的情况下才触发click事件
  click: (s) => s instanceof MouseEvent
};
var f1 = {
  size: String,
  type: {
    type: String
  },
  nativeType: {
    type: String,
    default: "button"
  },
  icon: {
    type: [Object, String],
    default: ""
  },
  disabled: Boolean,
  autofocus: Boolean,
  round: Boolean,
  plain: Boolean,
  circle: Boolean
};
var w1 = ["disabled", "autofocus", "type"];
var g1 = defineComponent({
  name: "McButton",
  __name: "button",
  props: f1,
  emits: m1,
  setup(s, { expose: e, emit: t }) {
    const i = I("button"), d = ref(), u = (l) => {
      t("click", l);
    };
    return e({
      ref: d
    }), (l, M) => {
      const m = resolveComponent("mc-icon");
      return openBlock(), createElementBlock("button", {
        ref_key: "_ref",
        ref: d,
        class: normalizeClass([
          unref(i).b(),
          unref(i).m(l.type),
          unref(i).m(l.size),
          unref(i).is("disabled", l.disabled),
          unref(i).is("plain", l.plain),
          unref(i).is("round", l.round),
          unref(i).is("circle", l.circle)
        ]),
        disabled: l.disabled,
        autofocus: l.autofocus,
        type: l.nativeType,
        onClick: u
      }, [
        l.icon || l.$slots.icon ? (openBlock(), createBlock(m, { key: 0 }, {
          default: withCtx(() => [
            l.icon ? (openBlock(), createBlock(resolveDynamicComponent(l.icon), { key: 0 })) : renderSlot(l.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : createCommentVNode("", true),
        renderSlot(l.$slots, "default")
      ], 10, w1);
    };
  }
});
var v1 = $(g1);
var $1 = {
  key: 0,
  t: "1694424462755",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1537",
  width: "18",
  height: "18"
};
var z1 = createBaseVNode("path", {
  d: "M511.2 124.1c52.4 0 103.3 10.3 151.1 30.5 46.2 19.5 87.7 47.5 123.4 83.2s63.7 77.2 83.2 123.4c20.2 47.8 30.5 98.6 30.5 151.1s-10.3 103.3-30.5 151.1c-19.5 46.2-47.5 87.7-83.2 123.4s-77.2 63.7-123.4 83.2c-47.8 20.2-98.6 30.5-151.1 30.5S407.9 890.2 360.1 870c-46.2-19.5-87.7-47.5-123.4-83.2s-63.7-77.2-83.2-123.4c-20.2-47.8-30.5-98.6-30.5-151.1s10.3-103.3 30.5-151.1C173 315 201 273.5 236.7 237.8s77.2-63.7 123.4-83.2c47.8-20.2 98.7-30.5 151.1-30.5m0-60C263.7 64.1 63 264.8 63 512.3s200.6 448.1 448.1 448.1 448.1-200.6 448.1-448.1-200.5-448.2-448-448.2z",
  "p-id": "1538"
}, null, -1);
var M1 = createBaseVNode("path", {
  d: "M737 337.2c-7.7 0-15.4 2.9-21.2 8.8l-269 269-140.2-140.2c-5.9-5.9-13.5-8.8-21.2-8.8-7.7 0-15.4 2.9-21.2 8.8-11.7 11.7-11.7 30.7 0 42.4l161.4 161.4c5.9 5.9 13.5 8.8 21.2 8.8 7.7 0 15.4-2.9 21.2-8.8l1-1 289.2-289.2c11.7-11.7 11.7-30.7 0-42.4-5.9-5.9-13.6-8.8-21.2-8.8z",
  "p-id": "1539"
}, null, -1);
var y1 = [
  z1,
  M1
];
var C1 = {
  key: 1,
  t: "1694424519538",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1682",
  width: "18",
  height: "18"
};
var b1 = createBaseVNode("path", {
  d: "M512.8 357.6c-16.6 0-40 12.3-40 27.4l10 245.1c0 15.2 13.4 27.4 30 27.4s30-12.3 30-27.4l10-245.1c0-15.2-23.5-27.4-40-27.4z",
  "p-id": "1683"
}, null, -1);
var E1 = createBaseVNode("path", {
  d: "M497.557695 765.262509a40 40 0 1 0 30.614675-73.910362 40 40 0 1 0-30.614675 73.910362Z",
  "p-id": "1684"
}, null, -1);
var S1 = createBaseVNode("path", {
  d: "M869.5 911.2h-713c-32.5 0-61.7-16.8-77.9-45-16.3-28.2-16.3-61.8 0-90l356.5-617.4c16.3-28.2 45.4-45 77.9-45 32.5 0 61.7 16.8 77.9 45l356.5 617.4c16.3 28.2 16.3 61.8 0 90s-45.4 45-77.9 45zM487 188.8L130.6 806.2c-7.8 13.5-2.6 25.5 0 30s10.3 15 26 15h712.9c15.6 0 23.4-10.5 26-15 2.6-4.5 7.8-16.5 0-30L539 188.8c-7.8-13.5-20.8-15-26-15s-18.2 1.4-26 15z",
  "p-id": "1685"
}, null, -1);
var x1 = [
  b1,
  E1,
  S1
];
var B1 = {
  key: 2,
  t: "1694424291879",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1392",
  width: "18",
  height: "18"
};
var I1 = createBaseVNode("path", {
  d: "M511.2 124.1c52.4 0 103.3 10.3 151.1 30.5 46.2 19.5 87.7 47.5 123.4 83.2s63.7 77.2 83.2 123.4c20.2 47.8 30.5 98.6 30.5 151.1s-10.3 103.3-30.5 151.1c-19.5 46.2-47.5 87.7-83.2 123.4s-77.2 63.7-123.4 83.2c-47.8 20.2-98.6 30.5-151.1 30.5S407.9 890.2 360.1 870c-46.2-19.5-87.7-47.5-123.4-83.2s-63.7-77.2-83.2-123.4c-20.2-47.8-30.5-98.6-30.5-151.1s10.3-103.3 30.5-151.1C173 315 201 273.5 236.7 237.8s77.2-63.7 123.4-83.2c47.8-20.2 98.7-30.5 151.1-30.5m0-60C263.7 64.1 63 264.8 63 512.3s200.6 448.1 448.1 448.1 448.1-200.6 448.1-448.1-200.5-448.2-448-448.2z",
  "p-id": "1393"
}, null, -1);
var L1 = createBaseVNode("path", {
  d: "M672.4 321c-7.7 0-15.4 2.9-21.2 8.8l-140 140-140-140c-5.9-5.9-13.5-8.8-21.2-8.8s-15.4 2.9-21.2 8.8c-11.7 11.7-11.7 30.7 0 42.4l140 140-140 140c-11.7 11.7-11.7 30.7 0 42.4 5.9 5.9 13.5 8.8 21.2 8.8 7.7 0 15.4-2.9 21.2-8.8l140-140 140 140c5.9 5.9 13.5 8.8 21.2 8.8s15.4-2.9 21.2-8.8c11.7-11.7 11.7-30.7 0-42.4l-140-140 140-140c11.7-11.7 11.7-30.7 0-42.4-5.8-5.8-13.5-8.8-21.2-8.8z",
  "p-id": "1394"
}, null, -1);
var T1 = [
  I1,
  L1
];
var N1 = {
  key: 3,
  t: "1694602254053",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "960",
  width: "18",
  height: "18"
};
var V1 = createBaseVNode("path", {
  d: "M930.3 899.5h-836c-16.6 0-30 13.4-30 30s13.4 30 30 30h836c16.6 0 30-13.4 30-30s-13.4-30-30-30zM157.3 844.8c1 0 2.1 0 3.1-0.1l212.8-18.9c8.2-0.7 15.8-4.3 21.6-10.1l500.1-500.1c13.7-13.7 13.7-35.8 0-49.5L701 72.1c-6.6-6.6-15.5-10.3-24.8-10.3s-18.2 3.7-24.7 10.3L151.7 571.9l-0.4 0.4c-5.8 5.8-9.4 13.5-10.1 21.7l-18.8 212.8c-0.9 10.3 2.8 20.5 10.1 27.8 6.6 6.5 15.6 10.2 24.8 10.2z m519-698.5l144.4 144.5-83.5 83.5-144.5-144.5 83.6-83.5zM209.8 612.8l333.4-333.4 144.5 144.5-333.4 333.3-158.5 14.1 14-158.5z",
  "p-id": "961"
}, null, -1);
var k1 = [
  V1
];
var P1 = { style: { "margin-left": "10px" } };
var D1 = defineComponent({
  name: "McMessage",
  __name: "message",
  props: {
    type: { default: "info" },
    message: { default: "this is a message." }
  },
  setup(s, { expose: e }) {
    const t = I("message"), i = ref(false);
    let d = null;
    const u = ref(20), l = ref(999);
    function M(_) {
      return new Promise((o) => {
        i.value = _, d = setTimeout(() => {
          clearTimeout(d), d = null, o("fade动画执行完成");
        }, 300);
      });
    }
    function m(_, o) {
      u.value = _, l.value = o;
    }
    return e({
      setIsShow: M,
      setTop: m,
      height: 40,
      // 信息框的高度
      consTop: 20,
      // 信息框的固定间距
      consZIndex: 999
      // 最低层级
    }), (_, o) => (openBlock(), createBlock(Transition, { name: "message-fade" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          style: normalizeStyle({ "margin-top": u.value + "px", "z-index": l.value }),
          class: normalizeClass([unref(t).b(), unref(t).m(_.type)])
        }, [
          _.type === "success" ? (openBlock(), createElementBlock("svg", $1, y1)) : createCommentVNode("", true),
          _.type === "warning" ? (openBlock(), createElementBlock("svg", C1, x1)) : createCommentVNode("", true),
          _.type === "danger" ? (openBlock(), createElementBlock("svg", B1, T1)) : createCommentVNode("", true),
          _.type === "info" ? (openBlock(), createElementBlock("svg", N1, k1)) : createCommentVNode("", true),
          createBaseVNode("span", P1, toDisplayString(_.message), 1)
        ], 6), [
          [vShow, i.value]
        ])
      ]),
      _: 1
    }));
  }
});
var O1 = function(s) {
  const e = createApp(
    D1,
    s
    // 传给Message组件的props
  );
  U1(e, s.duration);
};
var x = ref([]);
var U1 = function(s, e) {
  const t = document.createDocumentFragment(), i = s.mount(t);
  x.value.push(i), document.body.appendChild(t), U(i), i.setIsShow(true), watch(x, () => {
    U(i);
  }), A1(s, i, e);
};
var A1 = function(s, e, t) {
  e.timer = setTimeout(async () => {
    await e.setIsShow(false), s.unmount(), x.value = x.value.filter((i) => i !== e), clearTimeout(e.timer), e.timer = null;
  }, t ?? 3e3);
};
var U = function(s) {
  const { setTop: e, height: t, consTop: i, consZIndex: d } = s, u = x.value.findIndex((m) => m === s), l = t * u + (u + 1) * i, M = u + d;
  e(l, M);
};
var Z1 = r1(O1, "$message");
var B = "update:modelValue";
var j1 = {
  modelValue: {
    type: [String, Number, Object],
    default: ""
  },
  size: {
    type: String,
    default: ""
  },
  modelModifiers: { default: () => ({}) },
  prefix: String,
  suffix: String,
  allowClear: Boolean,
  password: Boolean,
  disabled: Boolean
};
var q1 = {
  [B]: (s) => P(s),
  compositionstart: (s) => s instanceof CompositionEvent,
  compositionupdate: (s) => s instanceof CompositionEvent,
  compositionend: (s) => s instanceof CompositionEvent
};
var W1 = ["type", "disabled"];
var F1 = createBaseVNode("svg", {
  t: "1694424291879",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1392"
}, [
  createBaseVNode("path", {
    d: "M511.2 124.1c52.4 0 103.3 10.3 151.1 30.5 46.2 19.5 87.7 47.5 123.4 83.2s63.7 77.2 83.2 123.4c20.2 47.8 30.5 98.6 30.5 151.1s-10.3 103.3-30.5 151.1c-19.5 46.2-47.5 87.7-83.2 123.4s-77.2 63.7-123.4 83.2c-47.8 20.2-98.6 30.5-151.1 30.5S407.9 890.2 360.1 870c-46.2-19.5-87.7-47.5-123.4-83.2s-63.7-77.2-83.2-123.4c-20.2-47.8-30.5-98.6-30.5-151.1s10.3-103.3 30.5-151.1C173 315 201 273.5 236.7 237.8s77.2-63.7 123.4-83.2c47.8-20.2 98.7-30.5 151.1-30.5m0-60C263.7 64.1 63 264.8 63 512.3s200.6 448.1 448.1 448.1 448.1-200.6 448.1-448.1-200.5-448.2-448-448.2z",
    "p-id": "1393"
  }),
  createBaseVNode("path", {
    d: "M672.4 321c-7.7 0-15.4 2.9-21.2 8.8l-140 140-140-140c-5.9-5.9-13.5-8.8-21.2-8.8s-15.4 2.9-21.2 8.8c-11.7 11.7-11.7 30.7 0 42.4l140 140-140 140c-11.7 11.7-11.7 30.7 0 42.4 5.9 5.9 13.5 8.8 21.2 8.8 7.7 0 15.4-2.9 21.2-8.8l140-140 140 140c5.9 5.9 13.5 8.8 21.2 8.8s15.4-2.9 21.2-8.8c11.7-11.7 11.7-30.7 0-42.4l-140-140 140-140c11.7-11.7 11.7-30.7 0-42.4-5.8-5.8-13.5-8.8-21.2-8.8z",
    "p-id": "1394"
  })
], -1);
var Q1 = [
  F1
];
var K1 = {
  focusable: "false",
  class: "u-eye",
  "data-icon": "eye",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
};
var R1 = createBaseVNode("path", { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" }, null, -1);
var Y1 = [
  R1
];
var H1 = {
  focusable: "false",
  class: "u-eye",
  "data-icon": "eye-invisible",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
};
var G1 = createBaseVNode("path", { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" }, null, -1);
var J1 = createBaseVNode("path", { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" }, null, -1);
var X1 = [
  G1,
  J1
];
var s2 = defineComponent({
  name: "McInput",
  __name: "input",
  props: j1,
  emits: q1,
  setup(s, { emit: e }) {
    const t = s, i = shallowRef(), d = ref(false), u = computed(() => i.value), l = computed(() => t.modelValue ? String(t.modelValue) : ""), M = useSlots(), m = ref(false), _ = computed(
      () => !!M.suffix || t.suffix || t.allowClear || t.password
    );
    watch(
      () => t.modelValue,
      () => {
        o();
      }
    );
    const o = () => {
      const n = u.value;
      !n || n.value === l.value || (n.value = l.value);
    }, h = async (n) => {
      const { value: z } = n.target;
      d.value || "lazy" in t.modelModifiers || (e(B, z), await nextTick(), o());
    }, b = async (n) => {
      const { value: z } = n.target;
      "lazy" in t.modelModifiers && (e(B, z), await nextTick(), o());
    }, W = (n) => {
      e("compositionstart", n), d.value = true;
    }, F = (n) => {
      e("compositionupdate", n);
    }, Q = (n) => {
      e("compositionend", n), d.value && (d.value = false, h(n));
    }, K = () => {
      var n;
      e(B, ""), (n = u == null ? void 0 : u.value) == null || n.focus();
    }, R = () => {
      m.value = !m.value;
    };
    onMounted(() => {
      o();
    });
    const f = I("input");
    return (n, z) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(f).b(), unref(f).m(n.size), unref(f).is("disabled", n.disabled)])
    }, [
      createBaseVNode("div", {
        class: normalizeClass(unref(f).e("wrapper"))
      }, [
        n.prefix || n.$slots.prefix ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(unref(f).e("prefix"))
        }, [
          createBaseVNode("span", {
            class: normalizeClass(unref(f).e("prefix-inner"))
          }, [
            renderSlot(n.$slots, "prefix", {}, () => [
              createTextVNode(toDisplayString(n.prefix), 1)
            ])
          ], 2)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("input", mergeProps({
          ref_key: "input",
          ref: i,
          class: unref(f).e("inner"),
          type: n.password && !m.value ? "password" : "text",
          disabled: n.disabled,
          onCompositionstart: W,
          onCompositionupdate: F,
          onCompositionend: Q,
          onInput: z[0] || (z[0] = (L) => h(L)),
          onChange: z[1] || (z[1] = (L) => b(L))
        }, n.$attrs), null, 16, W1),
        _.value ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(f).e("suffix"))
        }, [
          createBaseVNode("span", {
            class: normalizeClass(unref(f).e("suffix-inner"))
          }, [
            renderSlot(n.$slots, "suffix", {}, () => [
              createTextVNode(toDisplayString(n.suffix), 1)
            ]),
            !n.disabled && n.allowClear && n.modelValue ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(unref(f).e("clear")),
              onClick: K
            }, Q1, 2)) : createCommentVNode("", true),
            n.password ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(f).e("password")),
              onClick: R
            }, [
              withDirectives((openBlock(), createElementBlock("svg", K1, Y1, 512)), [
                [vShow, m.value]
              ]),
              withDirectives((openBlock(), createElementBlock("svg", H1, X1, 512)), [
                [vShow, !m.value]
              ])
            ], 2)) : createCommentVNode("", true)
          ], 2)
        ], 2)) : createCommentVNode("", true)
      ], 2)
    ], 2));
  }
});
var e2 = $(s2);
var t2 = {
  t: "1694150475019",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "903",
  width: "200",
  height: "200"
};
var n2 = createBaseVNode("path", {
  d: "M930.3 899.5h-836c-16.6 0-30 13.4-30 30s13.4 30 30 30h836c16.6 0 30-13.4 30-30s-13.4-30-30-30zM157.3 844.8c1 0 2.1 0 3.1-0.1l212.8-18.9c8.2-0.7 15.8-4.3 21.6-10.1l500.1-500.1c13.7-13.7 13.7-35.8 0-49.5L701 72.1c-6.6-6.6-15.5-10.3-24.8-10.3s-18.2 3.7-24.7 10.3L151.7 571.9l-0.4 0.4c-5.8 5.8-9.4 13.5-10.1 21.7l-18.8 212.8c-0.9 10.3 2.8 20.5 10.1 27.8 6.6 6.5 15.6 10.2 24.8 10.2z m519-698.5l144.4 144.5-83.5 83.5-144.5-144.5 83.6-83.5zM209.8 612.8l333.4-333.4 144.5 144.5-333.4 333.3-158.5 14.1 14-158.5z",
  "p-id": "904"
}, null, -1);
var o2 = [
  n2
];
var c2 = defineComponent({
  name: "Edit",
  __name: "Edit",
  setup(s) {
    return (e, t) => (openBlock(), createElementBlock("svg", t2, o2));
  }
});
var i2 = {
  t: "1694423103645",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1104",
  width: "200",
  height: "200"
};
var a2 = createBaseVNode("path", {
  d: "M512.4 523.3c-61.4 0-119.2-23.9-162.6-67.4s-67.4-101.2-67.4-162.6 23.9-119.2 67.4-162.6C393.2 87.3 451 63.3 512.4 63.3c61.4 0 119.2 23.9 162.6 67.4 43.4 43.4 67.4 101.2 67.4 162.6S718.5 412.5 675.1 456c-43.5 43.4-101.2 67.3-162.7 67.3z m0-400c-93.7 0-170 76.3-170 170s76.3 170 170 170 170-76.3 170-170-76.2-170-170-170zM929 959.4H96c-8.8 0-17.2-3.9-22.9-10.6s-8.2-15.6-6.7-24.3c16.3-98.5 70.2-188.6 151.7-253.9 81.8-65.6 186.3-101.7 294.4-101.7 108.1 0 212.6 36.1 294.4 101.7 81.5 65.3 135.4 155.5 151.7 253.9 1.4 8.7-1 17.6-6.7 24.3s-14.1 10.6-22.9 10.6z m-795.7-60h758.3C847.7 743 691.1 628.9 512.4 628.9c-178.6 0-335.2 114.1-379.1 270.5z",
  "p-id": "1105"
}, null, -1);
var l2 = [
  a2
];
var r2 = defineComponent({
  name: "User",
  __name: "User",
  setup(s) {
    return (e, t) => (openBlock(), createElementBlock("svg", i2, l2));
  }
});
var d2 = {
  t: "1694423779345",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1248",
  width: "200",
  height: "200"
};
var u2 = createBaseVNode("path", {
  d: "M951.6 908.5L778.3 735.3c27.6-31.9 49.9-67.7 66.4-106.8 21.1-49.9 31.8-103 31.8-157.7 0-54.7-10.7-107.7-31.8-157.7-20.4-48.2-49.6-91.5-86.8-128.7-37.2-37.2-80.5-66.4-128.7-86.8-49.9-21.1-103-31.8-157.7-31.8-54.7 0-107.7 10.7-157.7 31.8-48.2 20.4-91.5 49.6-128.7 86.8-37.2 37.2-66.4 80.5-86.8 128.7-21.1 49.9-31.8 103-31.8 157.7 0 54.7 10.7 107.7 31.8 157.7 20.4 48.2 49.6 91.5 86.8 128.7 37.2 37.2 80.5 66.4 128.7 86.8 49.9 21.1 103 31.8 157.7 31.8 54.7 0 107.7-10.7 157.7-31.8 39-16.5 74.8-38.8 106.7-66.3L909.1 951c11.7 11.7 30.7 11.7 42.4 0 11.8-11.7 11.8-30.7 0.1-42.5z m-480.1-92.6c-190.2 0-345-154.8-345-345s154.8-345 345-345 345 154.8 345 345-154.8 345-345 345z",
  "p-id": "1249"
}, null, -1);
var p2 = [
  u2
];
var h2 = defineComponent({
  name: "Search",
  __name: "Search",
  setup(s) {
    return (e, t) => (openBlock(), createElementBlock("svg", d2, p2));
  }
});
var _2 = {
  t: "1694424291879",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1392",
  width: "200",
  height: "200"
};
var m2 = createBaseVNode("path", {
  d: "M511.2 124.1c52.4 0 103.3 10.3 151.1 30.5 46.2 19.5 87.7 47.5 123.4 83.2s63.7 77.2 83.2 123.4c20.2 47.8 30.5 98.6 30.5 151.1s-10.3 103.3-30.5 151.1c-19.5 46.2-47.5 87.7-83.2 123.4s-77.2 63.7-123.4 83.2c-47.8 20.2-98.6 30.5-151.1 30.5S407.9 890.2 360.1 870c-46.2-19.5-87.7-47.5-123.4-83.2s-63.7-77.2-83.2-123.4c-20.2-47.8-30.5-98.6-30.5-151.1s10.3-103.3 30.5-151.1C173 315 201 273.5 236.7 237.8s77.2-63.7 123.4-83.2c47.8-20.2 98.7-30.5 151.1-30.5m0-60C263.7 64.1 63 264.8 63 512.3s200.6 448.1 448.1 448.1 448.1-200.6 448.1-448.1-200.5-448.2-448-448.2z",
  "p-id": "1393"
}, null, -1);
var f2 = createBaseVNode("path", {
  d: "M672.4 321c-7.7 0-15.4 2.9-21.2 8.8l-140 140-140-140c-5.9-5.9-13.5-8.8-21.2-8.8s-15.4 2.9-21.2 8.8c-11.7 11.7-11.7 30.7 0 42.4l140 140-140 140c-11.7 11.7-11.7 30.7 0 42.4 5.9 5.9 13.5 8.8 21.2 8.8 7.7 0 15.4-2.9 21.2-8.8l140-140 140 140c5.9 5.9 13.5 8.8 21.2 8.8s15.4-2.9 21.2-8.8c11.7-11.7 11.7-30.7 0-42.4l-140-140 140-140c11.7-11.7 11.7-30.7 0-42.4-5.8-5.8-13.5-8.8-21.2-8.8z",
  "p-id": "1394"
}, null, -1);
var w2 = [
  m2,
  f2
];
var g2 = defineComponent({
  name: "Error",
  __name: "Error",
  setup(s) {
    return (e, t) => (openBlock(), createElementBlock("svg", _2, w2));
  }
});
var v2 = {
  t: "1694424519538",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1682",
  width: "200",
  height: "200"
};
var $2 = createBaseVNode("path", {
  d: "M512.8 357.6c-16.6 0-40 12.3-40 27.4l10 245.1c0 15.2 13.4 27.4 30 27.4s30-12.3 30-27.4l10-245.1c0-15.2-23.5-27.4-40-27.4z",
  "p-id": "1683"
}, null, -1);
var z2 = createBaseVNode("path", {
  d: "M497.557695 765.262509a40 40 0 1 0 30.614675-73.910362 40 40 0 1 0-30.614675 73.910362Z",
  "p-id": "1684"
}, null, -1);
var M2 = createBaseVNode("path", {
  d: "M869.5 911.2h-713c-32.5 0-61.7-16.8-77.9-45-16.3-28.2-16.3-61.8 0-90l356.5-617.4c16.3-28.2 45.4-45 77.9-45 32.5 0 61.7 16.8 77.9 45l356.5 617.4c16.3 28.2 16.3 61.8 0 90s-45.4 45-77.9 45zM487 188.8L130.6 806.2c-7.8 13.5-2.6 25.5 0 30s10.3 15 26 15h712.9c15.6 0 23.4-10.5 26-15 2.6-4.5 7.8-16.5 0-30L539 188.8c-7.8-13.5-20.8-15-26-15s-18.2 1.4-26 15z",
  "p-id": "1685"
}, null, -1);
var y2 = [
  $2,
  z2,
  M2
];
var C2 = defineComponent({
  name: "Warning",
  __name: "Warning",
  setup(s) {
    return (e, t) => (openBlock(), createElementBlock("svg", v2, y2));
  }
});
var b2 = {
  t: "1694424462755",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1537",
  width: "200",
  height: "200"
};
var E2 = createBaseVNode("path", {
  d: "M511.2 124.1c52.4 0 103.3 10.3 151.1 30.5 46.2 19.5 87.7 47.5 123.4 83.2s63.7 77.2 83.2 123.4c20.2 47.8 30.5 98.6 30.5 151.1s-10.3 103.3-30.5 151.1c-19.5 46.2-47.5 87.7-83.2 123.4s-77.2 63.7-123.4 83.2c-47.8 20.2-98.6 30.5-151.1 30.5S407.9 890.2 360.1 870c-46.2-19.5-87.7-47.5-123.4-83.2s-63.7-77.2-83.2-123.4c-20.2-47.8-30.5-98.6-30.5-151.1s10.3-103.3 30.5-151.1C173 315 201 273.5 236.7 237.8s77.2-63.7 123.4-83.2c47.8-20.2 98.7-30.5 151.1-30.5m0-60C263.7 64.1 63 264.8 63 512.3s200.6 448.1 448.1 448.1 448.1-200.6 448.1-448.1-200.5-448.2-448-448.2z",
  "p-id": "1538"
}, null, -1);
var S2 = createBaseVNode("path", {
  d: "M737 337.2c-7.7 0-15.4 2.9-21.2 8.8l-269 269-140.2-140.2c-5.9-5.9-13.5-8.8-21.2-8.8-7.7 0-15.4 2.9-21.2 8.8-11.7 11.7-11.7 30.7 0 42.4l161.4 161.4c5.9 5.9 13.5 8.8 21.2 8.8 7.7 0 15.4-2.9 21.2-8.8l1-1 289.2-289.2c11.7-11.7 11.7-30.7 0-42.4-5.9-5.9-13.6-8.8-21.2-8.8z",
  "p-id": "1539"
}, null, -1);
var x2 = [
  E2,
  S2
];
var B2 = defineComponent({
  name: "Success",
  __name: "Success",
  setup(s) {
    return (e, t) => (openBlock(), createElementBlock("svg", b2, x2));
  }
});
var I2 = $(c2);
var L2 = $(r2);
var T2 = $(h2);
var N2 = $(g2);
var V2 = $(C2);
var k2 = $(B2);
var P2 = [
  _1,
  v1,
  Z1,
  e2,
  I2,
  L2,
  T2,
  N2,
  V2,
  k2
];
var A = Symbol("INSTALLED_KEY");
var O2 = {
  install(s) {
    s[A] || (s[A] = true, P2.forEach((e) => s.use(e)));
  }
};
export {
  I2 as Edit,
  N2 as Error,
  v1 as McButton,
  _1 as McIcon,
  e2 as McInput,
  Z1 as McMessage,
  T2 as Search,
  k2 as Success,
  L2 as User,
  V2 as Warning,
  O2 as default
};
//# sourceMappingURL=mmcat-ui.js.map
