var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  var $http = {
    common: {
      baseUrl: "http://192.168.43.145:3000/api",
      data: {},
      header: {
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "GET",
      dataType: "json"
    },
    request(options = {}) {
      options.url = this.common.baseUrl + options.url;
      options.data = options.data || this.common.data;
      options.header = options.header || this.common.header;
      options.method = options.method || this.common.method;
      options.dataType = options.dataType || this.common.dataType;
      return new Promise((res, rej) => {
        uni.request(__spreadProps(__spreadValues({}, options), {
          success: (result) => {
            if (result.statusCode != 200) {
              return rej();
            }
            let data = result.data;
            res(data);
          }
        }));
      });
    }
  };
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$n = {};
  function _sfc_render$m(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "recommend" }, [
      vue.createElementVNode("view", { class: "recommend-item" }, [
        vue.createElementVNode("image", {
          class: "item-big",
          src: "/static/images/default.png"
        }),
        vue.createElementVNode("view", { class: "item-small" }, [
          vue.createElementVNode("image", {
            class: "item-img",
            src: "/static/images/default.png",
            mode: ""
          }),
          vue.createElementVNode("image", {
            class: "item-img",
            src: "/static/images/default.png",
            mode: ""
          }),
          vue.createElementVNode("image", {
            class: "item-img",
            src: "/static/images/default.png",
            mode: ""
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "recommend-item" }, [
        vue.createElementVNode("image", {
          class: "item-big",
          src: "/static/images/default.png"
        }),
        vue.createElementVNode("view", { class: "item-small" }, [
          vue.createElementVNode("image", {
            class: "item-img",
            src: "/static/images/default.png",
            mode: ""
          }),
          vue.createElementVNode("image", {
            class: "item-img",
            src: "/static/images/default.png",
            mode: ""
          }),
          vue.createElementVNode("image", {
            class: "item-img",
            src: "/static/images/default.png",
            mode: ""
          })
        ])
      ])
    ]);
  }
  var ComponentsCommonRecommend = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-82f1ca9a"], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/components/common/Recommend.vue"]]);
  const _sfc_main$m = {
    props: {
      cardTitle: String
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "card" }, [
      vue.createElementVNode("view", null, "-"),
      vue.createElementVNode("view", { class: "card-name" }, vue.toDisplayString($props.cardTitle), 1),
      vue.createElementVNode("view", null, "-")
    ]);
  }
  var Card = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-3879f0e9"], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/components/common/Card.vue"]]);
  const _sfc_main$l = {
    props: {
      dataList: Array,
      wrap: {
        type: String,
        default: "wrap"
      },
      itemW: {
        type: String,
        default: "375rpx"
      },
      bigH: {
        type: String,
        default: "375rpx"
      },
      nameSize: {
        type: String,
        default: "26rpx"
      }
    },
    methods: {
      itemclick(e) {
        getApp().globalData.href = e.href;
        if (e.type === "web") {
          uni.navigateTo({
            url: "/pages/webView/webView"
          });
        }
        if (e.type === "video") {
          uni.navigateTo({
            url: "/pages/videoView/videoView"
          });
        }
        if (e.type === "place") {
          formatAppLog("log", "at components/common/Activity.vue:57", getApp().globalData.href);
        }
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "activity",
      style: vue.normalizeStyle("flex-wrap:" + $props.wrap + ";")
    }, [
      vue.createCommentVNode(" \u5355\u4E2A\u6D3B\u52A8\u7EC4\u4EF6 "),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.dataList, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "activity-item",
          key: index,
          style: vue.normalizeStyle("width:" + $props.itemW + ";")
        }, [
          vue.createElementVNode("view", {
            onClick: ($event) => $options.itemclick(item)
          }, [
            vue.createElementVNode("image", {
              class: "activity-img",
              src: item.imgUrl,
              style: vue.normalizeStyle("height:" + $props.bigH + ";")
            }, null, 12, ["src"]),
            vue.createElementVNode("view", { class: "activity-content" }, [
              vue.createElementVNode("text", {
                class: "activity-name",
                style: vue.normalizeStyle("font-size:" + $props.nameSize + ";")
              }, vue.toDisplayString(item.name), 5),
              vue.createElementVNode("view", null, [
                vue.createElementVNode("text", { class: "activity-desc" }, vue.toDisplayString(item.desc), 1)
              ])
            ])
          ], 8, ["onClick"])
        ], 4);
      }), 128))
    ], 4);
  }
  var Activity = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-0643c8e8"], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/components/common/Activity.vue"]]);
  const _sfc_main$k = {
    data() {
      return {
        activityList: [
          {
            id: 1,
            imgUrl: "../../static/images/default.png",
            name: "\u3010\u6691\u5047\u54EA\u91CC\u73A9\u3011\u4E39\u666F\u5C71\u89C2\u666F\u53F0",
            desc: "\u4E0D\u53EF\u9519\u8FC7\u7684\u7EDD\u4E16\u7F8E\u666F"
          },
          {
            id: 2,
            imgUrl: "../../static/images/default.png",
            name: "\u3010\u6691\u5047\u54EA\u91CC\u73A9\u3011\u4E39\u666F\u5C71\u89C2\u666F\u53F0",
            desc: "\u4E0D\u53EF\u9519\u8FC7\u7684\u7EDD\u4E16\u7F8E\u666F"
          },
          {
            id: 3,
            imgUrl: "../../static/images/default.png",
            name: "\u3010\u6691\u5047\u54EA\u91CC\u73A9\u3011\u4E39\u666F\u5C71\u89C2\u666F\u53F0",
            desc: "\u4E0D\u53EF\u9519\u8FC7\u7684\u7EDD\u4E16\u7F8E\u666F"
          },
          {
            id: 4,
            imgUrl: "../../static/images/default.png",
            name: "\u3010\u6691\u5047\u54EA\u91CC\u73A9\u3011\u4E39\u666F\u5C71\u89C2\u666F\u53F0",
            desc: "\u4E0D\u53EF\u9519\u8FC7\u7684\u7EDD\u4E16\u7F8E\u666F"
          }
        ]
      };
    },
    components: {
      Activity
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Activity = vue.resolveComponent("Activity");
    return vue.openBlock(), vue.createElementBlock("view", { class: "activity-list" }, [
      vue.createCommentVNode(" \u6D3B\u52A8\u5217\u8868\u7EC4\u4EF6 "),
      vue.createVNode(_component_Activity, { dataList: $data.activityList }, null, 8, ["dataList"])
    ]);
  }
  var ActivityList = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/components/common/ActivityList.vue"]]);
  const _sfc_main$j = {};
  function _sfc_render$i(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "icons" }, [
      vue.createElementVNode("view", { class: "icons-item" }, [
        vue.createElementVNode("image", {
          src: "/static/images/default.png",
          class: "icons-img"
        }),
        vue.createElementVNode("text", { class: "icons-name" }, "\u5206\u7C7B")
      ]),
      vue.createElementVNode("view", { class: "icons-item" }, [
        vue.createElementVNode("image", {
          src: "/static/images/default.png",
          class: "icons-img"
        }),
        vue.createElementVNode("text", { class: "icons-name" }, "\u5206\u7C7B")
      ]),
      vue.createElementVNode("view", { class: "icons-item" }, [
        vue.createElementVNode("image", {
          src: "/static/images/default.png",
          class: "icons-img"
        }),
        vue.createElementVNode("text", { class: "icons-name" }, "\u5206\u7C7B")
      ]),
      vue.createElementVNode("view", { class: "icons-item" }, [
        vue.createElementVNode("image", {
          src: "/static/images/default.png",
          class: "icons-img"
        }),
        vue.createElementVNode("text", { class: "icons-name" }, "\u5206\u7C7B")
      ]),
      vue.createElementVNode("view", { class: "icons-item" }, [
        vue.createElementVNode("image", {
          src: "/static/images/default.png",
          class: "icons-img"
        }),
        vue.createElementVNode("text", { class: "icons-name" }, "\u5206\u7C7B")
      ]),
      vue.createElementVNode("view", { class: "icons-item" }, [
        vue.createElementVNode("image", {
          src: "/static/images/default.png",
          class: "icons-img"
        }),
        vue.createElementVNode("text", { class: "icons-name" }, "\u5206\u7C7B")
      ]),
      vue.createElementVNode("view", { class: "icons-item" }, [
        vue.createElementVNode("image", {
          src: "/static/images/default.png",
          class: "icons-img"
        }),
        vue.createElementVNode("text", { class: "icons-name" }, "\u5206\u7C7B")
      ]),
      vue.createElementVNode("view", { class: "icons-item" }, [
        vue.createElementVNode("image", {
          src: "/static/images/default.png",
          class: "icons-img"
        }),
        vue.createElementVNode("text", { class: "icons-name" }, "\u5206\u7C7B")
      ])
    ]);
  }
  var Icons = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-d3aaf4de"], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/components/common/Icons.vue"]]);
  const _sfc_main$i = {
    data() {
      return {};
    },
    props: {
      tipList: Array
    },
    components: {
      Activity
    },
    methods: {
      nav() {
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Activity = vue.resolveComponent("Activity");
    return vue.openBlock(), vue.createElementBlock("view", { class: "shop" }, [
      vue.createElementVNode("view", { class: "shop-item" }, [
        vue.createElementVNode("view", { class: "shop-text" }, [
          vue.createElementVNode("text", null, "\u63A8\u8350\u7EBF\u8DEF")
        ]),
        vue.createElementVNode("scroll-view", {
          "scroll-x": "true",
          class: "scroll-content"
        }, [
          vue.createElementVNode("view", { class: "scroll-item" }, [
            vue.createVNode(_component_Activity, {
              dataList: $props.tipList,
              wrap: "no-wrap"
            }, null, 8, ["dataList"])
          ])
        ])
      ])
    ]);
  }
  var Tips = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-79ed15de"], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/components/common/Tips.vue"]]);
  const _sfc_main$h = {
    data() {
      return {
        loadtimes: [
          { id: 0, times: 1 },
          { id: 1, times: 1 },
          { id: 2, times: 1 },
          { id: 3, times: 1 }
        ],
        status: [
          { id: 0, status: "\u52A0\u8F7D\u4E2D..." },
          { id: 1, status: "\u52A0\u8F7D\u4E2D..." },
          { id: 2, status: "\u52A0\u8F7D\u4E2D..." },
          { id: 3, status: "\u52A0\u8F7D\u4E2D..." }
        ]
      };
    },
    props: {
      pageList: Array,
      pageIndex: Number,
      pages: Array,
      clentHeight: Number
    },
    methods: {
      changePage(index) {
        this.$emit("pageChange", index);
      },
      onChangeTab(e) {
        this.$emit("pageChange", e.detail.current);
      },
      loadMore(index) {
        $http.request({
          url: "/index_list/data/" + index + "/" + this.loadtimes[index].times
        }).then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            this.pages[index].data.data.push(res.data[i]);
          }
          this.loadtimes[index].times++;
          if (res.code == "end") {
            this.status[index].status = "";
            this.loadtimes[index].times = -1;
          }
        }).catch(() => {
        });
      }
    },
    components: {
      Activity
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Activity = vue.resolveComponent("Activity");
    return vue.openBlock(), vue.createElementBlock("view", { class: "top-pages" }, [
      vue.createElementVNode("scroll-view", {
        "scroll-x": "true",
        class: "scroll-content",
        "scroll-into-view": "tab5",
        "scroll-with-animation": "true"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.pageList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            id: "tab" + index,
            class: "scroll-item",
            key: index
          }, [
            vue.createElementVNode("text", {
              class: vue.normalizeClass($props.pageIndex === index ? "selected-page" : "unselected-page"),
              onClick: ($event) => $options.changePage(index)
            }, vue.toDisplayString(item.name), 11, ["onClick"])
          ], 8, ["id"]);
        }), 128))
      ]),
      vue.createCommentVNode(" swiper\u7684change\u4E8B\u4EF6\u81EA\u5DF1\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u7684detail\u91CC\u6709swiper\u7684current\u5C5E\u6027\u503C "),
      vue.createElementVNode("swiper", {
        onChange: _cache[0] || (_cache[0] = (...args) => $options.onChangeTab && $options.onChangeTab(...args)),
        current: $props.pageIndex,
        style: vue.normalizeStyle("height:" + $props.clentHeight + "px;")
      }, [
        vue.createCommentVNode("\u8FD9\u91CC\u7684current\u5DF2\u7ECF\u5B9E\u73B0\u4E86\u70B9\u51FBtop\u66F4\u6362\u4E0B\u9762\u7684page"),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.pages, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", {
            class: "swiper-item",
            key: index
          }, [
            vue.createElementVNode("scroll-view", {
              "scroll-y": "true",
              style: vue.normalizeStyle("height:" + $props.clentHeight + "px;"),
              onScrolltolower: ($event) => $options.loadMore(index)
            }, [
              vue.createCommentVNode("scrolltolower\u7684\u89E6\u53D1\u81F3\u5C11\u6709\u4E24\u4E2A\u6761\u4EF6\uFF0C\u4E00\u4E2A\u662Fscroll\u5DF2\u7ECF\u586B\u6EE1\u4E86\uFF0C\u4E00\u4E2A\u662F\u6ED1\u52A8\u5230\u5E95\u90E8\u4E86"),
              vue.createVNode(_component_Activity, {
                dataList: item.data.data
              }, null, 8, ["dataList"]),
              vue.createElementVNode("view", { class: "status-text" }, vue.toDisplayString($data.status[index].status), 1)
            ], 44, ["onScrolltolower"])
          ]);
        }), 128))
      ], 44, ["current"])
    ]);
  }
  var TopPage = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-c26bd18a"], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/components/common/TopPage.vue"]]);
  const _sfc_main$g = {
    data() {
      return {
        showSwiper: false,
        imgUrls: [],
        topBarIndex: 0,
        topBar: [],
        newTopBar: [],
        tipList: [],
        clentHeight: 0,
        where: ""
      };
    },
    onLoad() {
      this.__init();
    },
    onReady() {
      uni.getSystemInfo({
        success: (res) => {
          this.clentHeight = res.windowHeight - uni.upx2px(80);
        }
      });
      uni.getLocation({
        type: "gcj02",
        geocode: true,
        success: function(res) {
          this.where = res.address.poiName;
        }
      });
    },
    onNavigationBarButtonTap(e) {
      if (e.float === "right") {
        uni.scanCode({
          success: function(res) {
            formatAppLog("log", "at pages/index/index.vue:69", "\u6761\u7801\u7C7B\u578B\uFF1A" + res.scanType);
            formatAppLog("log", "at pages/index/index.vue:70", "\u6761\u7801\u5185\u5BB9\uFF1A" + res.result);
          }
        });
      } else if (e.float === "left") {
        uni.getLocation({
          type: "gcj02",
          geocode: true,
          success: function(res) {
            this.where = res.address.poiName;
            formatAppLog("log", "at pages/index/index.vue:80", this.where);
          }
        });
      }
    },
    onNavigationBarSearchInputClicked(e) {
      uni.navigateTo({
        url: "/pages/search/search"
      });
    },
    methods: {
      itemclick(e) {
        let i = e.target.id - 1;
        getApp().globalData.href = this.imgUrls[i].href;
        if (this.imgUrls[i].type === "web") {
          uni.navigateTo({
            url: "/pages/webView/webView"
          });
        }
        if (this.imgUrls[i].type === "video") {
          uni.navigateTo({
            url: "/pages/videoView/videoView"
          });
        }
      },
      pageChange(index) {
        if (this.topBarIndex === index) {
          return;
        }
        this.topBarIndex = index;
      },
      __init() {
        $http.request({
          url: "/index_list/data"
        }).then((res) => {
          this.topBar = res.data.topBar;
          this.newTopBar = this.initData(res.data);
          this.imgUrls = res.data.data[0].data;
          this.tipList = res.data.data[5].data;
        }).catch(() => {
          uni.showToast({
            title: "\u8BF7\u6C42\u5931\u8D25",
            icon: "none"
          });
        });
      },
      initData(res) {
        let arr = [];
        for (let i = 0; i < this.topBar.length; i++) {
          let obj = {
            data: []
          };
          if (i == 0) {
            obj.data = res.data[1];
          } else if (i == 1) {
            obj.data = res.data[2];
          } else if (i == 2) {
            obj.data = res.data[3];
          } else if (i == 3) {
            obj.data = res.data[4];
          }
          arr.push(obj);
        }
        return arr;
      }
    },
    components: {
      Recommend: ComponentsCommonRecommend,
      Card,
      ActivityList,
      Icons,
      Tips,
      TopPage
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_test = vue.resolveComponent("test");
    const _component_coverview = vue.resolveComponent("coverview");
    const _component_Icons = vue.resolveComponent("Icons");
    const _component_Tips = vue.resolveComponent("Tips");
    const _component_TopPage = vue.resolveComponent("TopPage");
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createVNode(_component_test),
      vue.createVNode(_component_coverview, { class: "where" }, {
        default: vue.withCtx(() => [
          vue.createTextVNode(vue.toDisplayString($data.where), 1)
        ]),
        _: 1
      }),
      vue.createElementVNode("swiper", {
        "indicator-dots": "true",
        class: "swiper"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.imgUrls, (img, key) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", {
            key,
            onClick: _cache[0] || (_cache[0] = (...args) => $options.itemclick && $options.itemclick(...args))
          }, [
            vue.createElementVNode("image", {
              src: img.url,
              id: img.id,
              class: "images"
            }, null, 8, ["src", "id"])
          ]);
        }), 128))
      ]),
      vue.createVNode(_component_Icons),
      vue.createVNode(_component_Tips, { tipList: $data.tipList }, null, 8, ["tipList"]),
      vue.createVNode(_component_TopPage, {
        pageList: $data.topBar,
        pageIndex: $data.topBarIndex,
        onPageChange: $options.pageChange,
        pages: $data.newTopBar,
        clentHeight: $data.clentHeight
      }, null, 8, ["pageList", "pageIndex", "onPageChange", "pages", "clentHeight"]),
      vue.createCommentVNode(' 		<Recommend></Recommend>\r\n		<Card cardTitle="\u9644\u8FD1\u63A8\u8350"></Card>\r\n		<ActivityList></ActivityList> ')
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/pages/index/index.vue"]]);
  const _sfc_main$f = {
    data() {
      return {};
    },
    methods: {},
    components: {}
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesARAR = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/pages/AR/AR.vue"]]);
  const _sfc_main$e = {};
  function _sfc_render$d(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "login-other" }, [
      vue.createElementVNode("view", { class: "other-text" }, [
        vue.createElementVNode("view", null, "\u6216\u8005\u7528\u4E00\u4E0B\u65B9\u5F0F\u767B\u5F55")
      ]),
      vue.createElementVNode("view", { class: "other-ways" }, [
        vue.createElementVNode("view", { class: "other-item" }, [
          vue.createElementVNode("image", {
            src: "/static/images/wechat.png",
            mode: ""
          }),
          vue.createElementVNode("view", null, "\u5FAE\u4FE1\u767B\u5F55")
        ]),
        vue.createElementVNode("view", { class: "other-item" }, [
          vue.createElementVNode("image", {
            src: "/static/images/weibo.png",
            mode: ""
          }),
          vue.createElementVNode("view", null, "\u5FAE\u535A\u767B\u5F55")
        ]),
        vue.createElementVNode("view", { class: "other-item" }, [
          vue.createElementVNode("image", {
            src: "/static/images/QQ.png",
            mode: ""
          }),
          vue.createElementVNode("view", null, "QQ\u767B\u5F55")
        ])
      ])
    ]);
  }
  var LoginOther = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-b4d1e3fa"], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/components/common/login-other.vue"]]);
  const _sfc_main$d = {
    data() {
      return {
        userName: "",
        userPwd: "",
        rules: {
          userName: {
            rule: /\S/,
            msg: "\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A"
          },
          userPwd: {
            rule: /^[0-9a-zA-Z]{6,16}$/,
            msg: "\u5BC6\u7801\u5E94\u8BE5\u4E3A6-16\u4F4D\u5B57\u6BCD\u6216\u6570\u5B57"
          }
        }
      };
    },
    components: {
      LoginOther
    },
    methods: {
      goBack() {
        uni.navigateBack({
          delta: 1
        });
      },
      submit() {
        if (!this.validate("userName"))
          return;
        if (!this.validate("userPwd"))
          return;
        uni.showLoading({
          title: "\u767B\u5F55\u4E2D..."
        });
        setTimeout(function() {
          uni.hideLoading();
          uni.navigateBack({
            delta: 1
          });
        }, 2e3);
      },
      validate(key) {
        let bool = true;
        if (!this.rules[key].rule.test(this[key])) {
          uni.showToast({
            title: this.rules[key].msg,
            icon: "none"
          });
          bool = false;
          return false;
        }
        return bool;
      },
      goLoginTel() {
        uni.navigateTo({
          url: "/pages/login-tel/login-tel"
        });
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_LoginOther = vue.resolveComponent("LoginOther");
    return vue.openBlock(), vue.createElementBlock("view", { class: "login" }, [
      vue.createElementVNode("swiper", {
        vertical: "true",
        style: { "height": "100vh" }
      }, [
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("scroll-view", null, [
            vue.createElementVNode("view", { class: "login-tel" }, [
              vue.createElementVNode("view", { class: "tel-main" }, [
                vue.createElementVNode("view", {
                  class: "close",
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
                }, [
                  vue.createElementVNode("image", {
                    class: "close-img",
                    src: "/static/images/close.png",
                    mode: ""
                  })
                ]),
                vue.createElementVNode("view", { class: "logo" }, [
                  vue.createElementVNode("image", {
                    class: "logo-img",
                    src: "/static/images/default.png",
                    mode: ""
                  })
                ]),
                vue.createElementVNode("view", {
                  class: "tel",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.goLoginTel && $options.goLoginTel(...args))
                }, " \u624B\u673A\u53F7\u6CE8\u518C "),
                vue.createVNode(_component_LoginOther),
                vue.createElementVNode("view", { class: "login-go" }, [
                  vue.createElementVNode("view", null, "\u5DF2\u6709\u8D26\u53F7\uFF0C\u53BB\u767B\u9646"),
                  vue.createElementVNode("image", {
                    src: "/static/images/down.png",
                    mode: ""
                  })
                ])
              ])
            ])
          ])
        ]),
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("scroll-view", null, [
            vue.createElementVNode("view", { class: "login-tel" }, [
              vue.createElementVNode("view", { class: "tel-main" }, [
                vue.createCommentVNode(" \u5173\u95ED\u6309\u94AE "),
                vue.createElementVNode("view", {
                  class: "close close-center",
                  onClick: _cache[2] || (_cache[2] = (...args) => $options.goBack && $options.goBack(...args))
                }, [
                  vue.createElementVNode("view", null, [
                    vue.createElementVNode("image", {
                      class: "close-img",
                      src: "/static/images/close.png",
                      mode: ""
                    })
                  ]),
                  vue.createElementVNode("view", { class: "login-go" }, [
                    vue.createElementVNode("image", {
                      class: "close-img",
                      src: "/static/images/up.png",
                      mode: ""
                    }),
                    vue.createElementVNode("view", null, "\u6CA1\u6709\u8D26\u53F7\uFF0C\u53BB\u6CE8\u518C")
                  ]),
                  vue.createElementVNode("view")
                ]),
                vue.createElementVNode("view", { class: "login-form" }, [
                  vue.createElementVNode("view", { class: "login-user" }, [
                    vue.createElementVNode("text", { class: "user-text" }, "\u8D26\u53F7"),
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.userName = $event),
                      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7/\u6635\u79F0"
                    }, null, 512), [
                      [vue.vModelText, $data.userName]
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "login-user" }, [
                    vue.createElementVNode("text", { class: "user-text" }, "\u5BC6\u7801"),
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.userPwd = $event),
                      placeholder: "6-16\u4F4D\u5B57\u7B26"
                    }, null, 512), [
                      [vue.vModelText, $data.userPwd]
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "login-quick" }, [
                  vue.createElementVNode("view", null, "\u5FD8\u8BB0\u5BC6\u7801"),
                  vue.createElementVNode("view", null, "\u5BC6\u7801\u767B\u5F55")
                ]),
                vue.createElementVNode("view", {
                  class: "tel",
                  onClick: _cache[5] || (_cache[5] = (...args) => $options.submit && $options.submit(...args))
                }, " \u767B\u5F55 "),
                vue.createElementVNode("view", { class: "reminder" }, " \u6E29\u99A8\u63D0\u793A\uFF1A\u60A8\u53EF\u4EE5\u9009\u62E9\u514D\u5BC6\u767B\u5F55\uFF0C\u66F4\u52A0\u65B9\u4FBF "),
                vue.createVNode(_component_LoginOther)
              ])
            ])
          ])
        ])
      ])
    ]);
  }
  var PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-b237504c"], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/pages/login/login.vue"]]);
  const _sfc_main$c = {
    data() {
      return {
        clentHeight: 0,
        pageIndex: 0,
        spotIndex: 0,
        roadsWidth: 0,
        roadsIndex: 0,
        showRoads: false,
        indexs: [
          { name: "\u6E38\u7F8E\u666F" },
          { name: "\u54C1\u4EBA\u6587" },
          { name: "\u5BFB\u7F8E\u98DF" },
          { name: "\u4F4F\u6C11\u5BBF" }
        ],
        otherpoints: [
          {
            name: "\u4EBA\u6587",
            points: [
              {
                id: 1,
                title: "1",
                latitude: 39.9,
                longitude: 116.39,
                callout: {
                  content: "\u4EBA\u65871"
                },
                label: {
                  content: "\u4EBA\u65871"
                },
                iconPath: "../../static/images/point.png"
              },
              {
                id: 2,
                title: "2",
                latitude: 39.9,
                longitude: 116.4,
                callout: {
                  content: "\u4EBA\u65872"
                },
                label: {
                  content: "\u4EBA\u65872"
                },
                iconPath: "../../static/images/point.png"
              }
            ]
          },
          {
            name: "\u7F8E\u98DF",
            points: [
              {
                id: 1,
                title: "1",
                latitude: 39.9,
                longitude: 116.39,
                callout: {
                  content: "\u7F8E\u98DF1"
                },
                label: {
                  content: "\u7F8E\u98DF1"
                },
                iconPath: "../../static/images/point.png"
              },
              {
                id: 2,
                title: "2",
                latitude: 39.9,
                longitude: 116.4,
                callout: {
                  content: "\u7F8E\u98DF2"
                },
                label: {
                  content: "\u7F8E\u98DF2"
                },
                iconPath: "../../static/images/point.png"
              }
            ]
          },
          {
            name: "\u4F4F\u5BBF",
            points: [
              {
                id: 1,
                title: "1",
                latitude: 39.9,
                longitude: 116.39,
                callout: {
                  content: "\u4F4F\u5BBF1"
                },
                label: {
                  content: "\u4F4F\u5BBF1"
                },
                iconPath: "../../static/images/point.png"
              },
              {
                id: 2,
                title: "2",
                latitude: 39.9,
                longitude: 116.4,
                callout: {
                  content: "\u4F4F\u5BBF2"
                },
                label: {
                  content: "\u4F4F\u5BBF2"
                },
                iconPath: "../../static/images/point.png"
              }
            ]
          }
        ],
        spots: [
          {
            name: "\u666F\u533A1",
            points: [
              {
                id: 1,
                title: "1",
                latitude: 39.9,
                longitude: 116.39,
                callout: {
                  content: "\u817E\u8BAF\u5730\u56FE"
                },
                label: {
                  content: "\u9AD8\u5FB7\u5730\u56FE"
                },
                iconPath: "../../static/images/point.png"
              },
              {
                id: 2,
                title: "2",
                latitude: 39.9,
                longitude: 116.4,
                callout: {
                  content: "\u817E\u8BAF\u5730\u56FE"
                },
                label: {
                  content: "\u9AD8\u5FB7\u5730\u56FE"
                },
                iconPath: "../../static/images/point.png"
              },
              {
                id: 3,
                title: "3",
                latitude: 39.9,
                longitude: 116.41,
                callout: {
                  content: "\u817E\u8BAF\u5730\u56FE"
                },
                label: {
                  content: "\u9AD8\u5FB7\u5730\u56FE"
                },
                iconPath: "../../static/images/point.png"
              }
            ]
          },
          {
            name: "\u666F\u533A2",
            points: [
              {
                id: 1,
                title: "1",
                latitude: 39.95,
                longitude: 116.39,
                callout: {
                  content: "\u817E\u8BAF\u5730\u56FE"
                },
                label: {
                  content: "\u9AD8\u5FB7\u5730\u56FE"
                },
                iconPath: "../../static/images/point.png"
              },
              {
                id: 2,
                title: "2",
                latitude: 40,
                longitude: 116.39,
                callout: {
                  content: "\u817E\u8BAF\u5730\u56FE"
                },
                label: {
                  content: "\u9AD8\u5FB7\u5730\u56FE"
                },
                iconPath: "../../static/images/point.png"
              },
              {
                id: 3,
                title: "3",
                latitude: 40.05,
                longitude: 116.39,
                callout: {
                  content: "\u817E\u8BAF\u5730\u56FE"
                },
                label: {
                  content: "\u9AD8\u5FB7\u5730\u56FE"
                },
                iconPath: "../../static/images/point.png"
              }
            ]
          }
        ],
        controls: [
          {
            id: 0,
            position: {
              left: 300,
              top: 20,
              width: 40,
              height: 40
            },
            iconPath: "../../static/images/search.png",
            clickable: true
          },
          {
            id: 1,
            position: {
              left: 300,
              top: 80,
              width: 45,
              height: 45
            },
            iconPath: "../../static/images/loca.png",
            clickable: true
          },
          {
            id: 2,
            position: {
              left: 20,
              top: 20,
              width: 45,
              height: 45
            },
            iconPath: "../../static/images/roads.png",
            clickable: true
          }
        ]
      };
    },
    onLoad() {
      uni.getSystemInfo({
        success: (res) => {
          this.clentHeight = res.windowHeight - uni.upx2px(240);
          this.roadsWidth = res.windowWidth - uni.upx2px(270);
        }
      });
      $http.request({
        url: "/map/points"
      }).then((res) => {
      }).catch(() => {
      });
    },
    methods: {
      changePage(index) {
        if (this.pageIndex === index) {
          return;
        }
        this.pageIndex = index;
      },
      changeSpot(index) {
        if (this.spotIndex === index) {
          return;
        }
        this.spotIndex = index;
      },
      controltap(e) {
        if (e.detail.controlId === 1) {
          uni.getLocation({
            type: "gcj02",
            success: (res) => {
              this.longitude = res.longitude;
              this.latitude = res.latitude;
            }
          });
        } else if (e.detail.controlId === 0) {
          uni.navigateTo({
            url: "/pages/findPlaces/findPlaces"
          });
        } else if (e.detail.controlId === 2) {
          this.showRoads = !this.showRoads;
        }
      },
      former() {
        this.roadsIndex--;
        formatAppLog("log", "at pages/map/map.vue:325", this.roadsIndex);
      },
      latter() {
        this.roadsIndex++;
        formatAppLog("log", "at pages/map/map.vue:329", this.roadsIndex);
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", { class: "index-page" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.indexs, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
            vue.createElementVNode("text", {
              class: vue.normalizeClass($data.pageIndex === index ? "selected-index-text" : "unselected-index-text"),
              onClick: ($event) => $options.changePage(index)
            }, vue.toDisplayString(item.name), 11, ["onClick"])
          ]);
        }), 128))
      ]),
      $data.pageIndex === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "scroll-content"
      }, [
        vue.createElementVNode("scroll-view", {
          "scroll-x": "true",
          class: "scroll-content"
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.spots, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "scroll-item"
            }, [
              vue.createElementVNode("text", {
                class: vue.normalizeClass($data.spotIndex === index ? "selected-page" : "unselected-page"),
                onClick: ($event) => $options.changeSpot(index)
              }, vue.toDisplayString(item.name), 11, ["onClick"])
            ]);
          }), 128))
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        class: "map-page",
        id: "spots-map"
      }, [
        vue.createElementVNode("map", {
          class: "map",
          style: vue.normalizeStyle("height:" + $data.clentHeight + "px;"),
          markers: $data.spots[0].points,
          controls: $data.controls,
          onControltap: _cache[0] || (_cache[0] = (...args) => $options.controltap && $options.controltap(...args)),
          "enable-satellite": false
        }, null, 44, ["markers", "controls"])
      ]),
      $data.showRoads === true ? (vue.openBlock(), vue.createElementBlock("cover-view", {
        key: 1,
        class: "button-left",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.former && $options.former(...args))
      })) : vue.createCommentVNode("v-if", true),
      $data.showRoads === true ? (vue.openBlock(), vue.createElementBlock("cover-image", {
        key: 2,
        class: "roads-img",
        src: "/static/images/default.png",
        style: vue.normalizeStyle("width:" + $data.roadsWidth + "px;")
      }, null, 4)) : vue.createCommentVNode("v-if", true),
      $data.showRoads === true ? (vue.openBlock(), vue.createElementBlock("cover-view", {
        key: 3,
        class: "button-right",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.latter && $options.latter(...args))
      })) : vue.createCommentVNode("v-if", true)
    ], 64);
  }
  var PagesMapMap = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-0b31f540"], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/pages/map/map.vue"]]);
  const _sfc_main$b = {
    data() {
      return {};
    },
    methods: {
      goLogin() {
        formatAppLog("log", "at pages/user/user.vue:89", "\u70B9\u51FB\u5934\u50CF");
        uni.navigateTo({
          url: "/pages/login/login"
        });
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "my" }, [
      vue.createCommentVNode("\u5934\u90E8"),
      vue.createElementVNode("view", { class: "my-header" }, [
        vue.createElementVNode("view", { class: "header-main" }, [
          vue.createElementVNode("view", { class: "header-config" }, [
            vue.createElementVNode("image", {
              class: "config-img",
              src: "/static/images/config.png",
              mode: ""
            })
          ]),
          vue.createElementVNode("view", {
            class: "header-logo",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.goLogin && $options.goLogin(...args))
          }, [
            vue.createElementVNode("image", {
              class: "logo-img",
              src: "/static/images/default.png",
              mode: ""
            }),
            vue.createElementVNode("view", { class: "logo-name" }, "\u7528\u6237\u6635\u79F0")
          ])
        ])
      ]),
      vue.createCommentVNode("\u6211\u7684\u8BA2\u5355"),
      vue.createElementVNode("view", { class: "order" }, [
        vue.createElementVNode("view", { class: "order-title" }, [
          vue.createElementVNode("view", null, "\u6211\u7684\u8BA2\u5355"),
          vue.createElementVNode("view", null, "\u5168\u90E8\u8BA2\u5355 > ")
        ]),
        vue.createElementVNode("view", { class: "order-list" }, [
          vue.createElementVNode("view", { class: "order-item" }, [
            vue.createElementVNode("image", {
              class: "order-img",
              src: "/static/images/default.png",
              mode: ""
            }),
            vue.createElementVNode("view", null, "\u5F85\u4ED8\u6B3E")
          ]),
          vue.createElementVNode("view", { class: "order-item" }, [
            vue.createElementVNode("image", {
              class: "order-img",
              src: "/static/images/default.png",
              mode: ""
            }),
            vue.createElementVNode("view", null, "\u5F85\u4ED8\u6B3E")
          ]),
          vue.createElementVNode("view", { class: "order-item" }, [
            vue.createElementVNode("image", {
              class: "order-img",
              src: "/static/images/default.png",
              mode: ""
            }),
            vue.createElementVNode("view", null, "\u5F85\u4ED8\u6B3E")
          ]),
          vue.createElementVNode("view", { class: "order-item" }, [
            vue.createElementVNode("image", {
              class: "order-img",
              src: "/static/images/default.png",
              mode: ""
            }),
            vue.createElementVNode("view", null, "\u5F85\u4ED8\u6B3E")
          ]),
          vue.createElementVNode("view", { class: "order-item" }, [
            vue.createElementVNode("image", {
              class: "order-img",
              src: "/static/images/default.png",
              mode: ""
            }),
            vue.createElementVNode("view", null, "\u5F85\u4ED8\u6B3E")
          ])
        ])
      ]),
      vue.createCommentVNode("\u5185\u5BB9\u5217\u8868"),
      vue.createElementVNode("view", { class: "my-content" }, [
        vue.createElementVNode("view", { class: "my-content-item" }, [
          vue.createElementVNode("view", null, "\u6211\u7684\u6536\u85CF"),
          vue.createElementVNode("view", null, ">")
        ]),
        vue.createElementVNode("view", { class: "my-content-item" }, [
          vue.createElementVNode("view", null, "\u6211\u7684\u6536\u85CF"),
          vue.createElementVNode("view", null, ">")
        ]),
        vue.createElementVNode("view", { class: "my-content-item" }, [
          vue.createElementVNode("view", null, "\u6211\u7684\u6536\u85CF"),
          vue.createElementVNode("view", null, ">")
        ]),
        vue.createElementVNode("view", { class: "my-content-item" }, [
          vue.createElementVNode("view", null, "\u6211\u7684\u6536\u85CF"),
          vue.createElementVNode("view", null, ">")
        ]),
        vue.createElementVNode("view", { class: "my-content-item" }, [
          vue.createElementVNode("view", null, "\u6211\u7684\u6536\u85CF"),
          vue.createElementVNode("view", null, ">")
        ]),
        vue.createElementVNode("view", { class: "my-content-item" }, [
          vue.createElementVNode("view", null, "\u6211\u7684\u6536\u85CF"),
          vue.createElementVNode("view", null, ">")
        ]),
        vue.createElementVNode("view", { class: "my-content-item" }, [
          vue.createElementVNode("view", null, "\u6211\u7684\u6536\u85CF"),
          vue.createElementVNode("view", null, ">")
        ])
      ])
    ]);
  }
  var PagesUserUser = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-80842834"], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/pages/user/user.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        keyword: "",
        keywords: []
      };
    },
    onNavigationBarButtonTap(e) {
      if (e.float == "right") {
        this.search();
      }
    },
    onNavigationBarSearchInputConfirmed() {
      this.search();
    },
    onNavigationBarSearchInputChanged(e) {
      this.keyword = e.text;
    },
    onLoad() {
      uni.getStorage({
        key: "searchData",
        success: (res) => {
          this.keywords = JSON.parse(res.data);
        }
      });
    },
    methods: {
      search() {
        if (this.keyword === "") {
          return uni.showToast({
            title: "\u5173\u952E\u8BCD\u4E0D\u80FD\u4E3A\u7A7A",
            icon: "none"
          });
        } else {
          uni.redirectTo({
            url: "/pages/search-result/search-result?keyword=" + this.keyword
          });
          if (getApp().globalData.keywords.indexOf(this.keyword) == -1) {
            getApp().globalData.keywords.push(this.keyword);
            uni.setStorage({
              key: "searchData",
              data: JSON.stringify(getApp().globalData.keywords)
            });
          }
        }
      },
      clearHistory() {
        uni.removeStorage({
          key: "searchData"
        });
        getApp().globalData.keywords = this.keywords = [];
      }
    },
    components: {}
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "search" }, [
      vue.createElementVNode("view", { class: "search-item" }, [
        vue.createElementVNode("view", { class: "search-title" }, [
          vue.createElementVNode("view", { class: "gray-color" }, "\u6700\u8FD1\u641C\u7D22"),
          vue.createElementVNode("view", {
            class: "iconfont icon-shanchu dustbin gray-color",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.clearHistory && $options.clearHistory(...args))
          })
        ]),
        vue.createElementVNode("view", null, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.keywords, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "search-name gray-color",
              key: index
            }, vue.toDisplayString(item), 1);
          }), 128))
        ])
      ]),
      vue.createElementVNode("view", { class: "search-item" }, [
        vue.createElementVNode("view", { class: "search-title" }, [
          vue.createElementVNode("view", { class: "gray-color" }, "\u70ED\u95E8\u641C\u7D22")
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("view", { class: "search-name gray-color" }, "\u4E39\u666F\u5C71"),
          vue.createElementVNode("view", { class: "search-name gray-color" }, "\u7968\u4EF7"),
          vue.createElementVNode("view", { class: "search-name gray-color" }, "\u5929\u6C14"),
          vue.createElementVNode("view", { class: "search-name gray-color" }, "\u4EA4\u901A")
        ])
      ])
    ]);
  }
  var PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-4cedc0c6"], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/pages/search/search.vue"]]);
  const _sfc_main$9 = {};
  function _sfc_render$8(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "line" });
  }
  var Line = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-7dfd06f6"], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/components/common/Lines.vue"]]);
  const _sfc_main$8 = {
    props: {
      data: {}
    },
    methods: {
      nav() {
        getApp().globalData.href = this.data.href;
        formatAppLog("log", "at components/common/Place.vue:22", getApp().globalData.href);
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "event",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.nav && $options.nav(...args))
    }, [
      vue.createElementVNode("view", null, [
        vue.createElementVNode("image", {
          src: $props.data.imgUrl,
          mode: "",
          class: "img"
        }, null, 8, ["src"])
      ]),
      vue.createElementVNode("view", { class: "text-icon" }, [
        vue.createElementVNode("view", { class: "name" }, vue.toDisplayString($props.data.name), 1),
        vue.createElementVNode("view", { class: "description" }, vue.toDisplayString($props.data.desc), 1),
        vue.createElementVNode("view", { class: "navi-icon main-color iconfont icon-daohang" }, "\u5BFC\u822A")
      ])
    ]);
  }
  var Place = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-52d24cfe"], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/components/common/Place.vue"]]);
  const _sfc_main$7 = {
    props: {
      data: {}
    },
    methods: {
      nav() {
        getApp().globalData.href = this.data.href;
        uni.navigateTo({
          url: "/pages/webView/webView"
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "event",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.nav && $options.nav(...args))
    }, [
      vue.createElementVNode("view", null, [
        vue.createElementVNode("image", {
          src: $props.data.imgUrl,
          mode: "",
          class: "img"
        }, null, 8, ["src"])
      ]),
      vue.createElementVNode("view", { class: "text-icon" }, [
        vue.createElementVNode("view", { class: "name" }, vue.toDisplayString($props.data.name), 1),
        vue.createElementVNode("view", { class: "description" }, vue.toDisplayString($props.data.desc), 1),
        vue.createElementVNode("view", { class: "navi-icon" })
      ])
    ]);
  }
  var Event = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-2c4235de"], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/components/common/Event.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        keyword: "",
        resData: {}
      };
    },
    onLoad(e) {
      this.keyword = e.keyword;
      this.search();
    },
    onNavigationBarButtonTap(e) {
      if (e.float == "right") {
        this.search();
      }
    },
    onNavigationBarSearchInputConfirmed() {
      this.search();
    },
    onNavigationBarSearchInputChanged(e) {
      this.keyword = e.text;
    },
    methods: {
      search() {
        if (this.keyword === "") {
          return uni.showToast({
            title: "\u5173\u952E\u8BCD\u4E0D\u80FD\u4E3A\u7A7A",
            icon: "none"
          });
        } else {
          if (getApp().globalData.keywords.indexOf(this.keyword) == -1) {
            getApp().globalData.keywords.push(this.keyword);
            uni.setStorage({
              key: "searchData",
              data: JSON.stringify(getApp().globalData.keywords)
            });
          }
          $http.request({
            url: "/goods/search",
            data: {
              keyword: this.keyword
            }
          }).then((res) => {
            this.resData = res.data;
          }).catch(() => {
          });
        }
      }
    },
    components: {
      Lines: Line,
      Place,
      Event
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Place = vue.resolveComponent("Place");
    const _component_Lines = vue.resolveComponent("Lines");
    const _component_Event = vue.resolveComponent("Event");
    return vue.openBlock(), vue.createElementBlock("view", { class: "search-result" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.resData, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
          item.type === "place" ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
            vue.createVNode(_component_Place, { data: item }, null, 8, ["data"]),
            vue.createVNode(_component_Lines)
          ])) : vue.createCommentVNode("v-if", true),
          item.type === "web" ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
            vue.createVNode(_component_Event, { data: item }, null, 8, ["data"]),
            vue.createVNode(_component_Lines)
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      }), 128))
    ]);
  }
  var PagesSearchResultSearchResult = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/pages/search-result/search-result.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " aaa ");
  }
  var PagesFindPlacesFindPlaces = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/pages/findPlaces/findPlaces.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        userTel: "",
        rules: {
          userTel: {
            rule: /^1[3456789]\d{9}$/,
            msg: "\u8BF7\u8F93\u516511\u4F4D\u624B\u673A\u53F7"
          }
        }
      };
    },
    methods: {
      goNextCode() {
        if (!this.validate("userTel"))
          return;
        uni.navigateTo({
          url: "/pages/login-code/login-code"
        });
      },
      validate(key) {
        let bool = true;
        if (!this.rules[key].rule.test(this[key])) {
          uni.showToast({
            title: this.rules[key].msg,
            icon: "none"
          });
          bool = false;
          return false;
        }
        return bool;
      }
    },
    components: {
      Line
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Line = vue.resolveComponent("Line");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_Line),
      vue.createElementVNode("view", { class: "login-tel" }, [
        vue.createElementVNode("view", { class: "tel-main" }, [
          vue.createElementVNode("view", { class: "login-form" }, [
            vue.createElementVNode("view", { class: "login-user" }, [
              vue.createElementVNode("text", { class: "user-text" }, "\u624B\u673A\u53F7"),
              vue.withDirectives(vue.createElementVNode("input", {
                type: "number",
                focus: "true",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.userTel = $event),
                placeholder: "\u8BF7\u8F93\u516511\u4F4D\u624B\u673A\u53F7"
              }, null, 512), [
                [vue.vModelText, $data.userTel]
              ])
            ])
          ]),
          vue.createElementVNode("view", {
            class: "tel",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.goNextCode && $options.goNextCode(...args))
          }, " \u4E0B\u4E00\u6B65 ")
        ])
      ])
    ]);
  }
  var PagesLoginTelLoginTel = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-5356b614"], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/pages/login-tel/login-tel.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        codeNum: 10,
        codeMsg: "",
        disabled: false,
        userCode: ""
      };
    },
    onReady() {
      this.codeMsg = "\u91CD\u65B0\u53D1\u9001 (" + this.codeNum + ")";
      this.sendCode();
    },
    methods: {
      sendCode() {
        this.disabled = true;
        let timer = setInterval(() => {
          --this.codeNum;
          this.codeMsg = "\u91CD\u65B0\u53D1\u9001 (" + this.codeNum + ")";
        }, 1e3);
        setTimeout(() => {
          clearInterval(timer);
          this.codeNum = 10;
          this.disabled = false;
          this.codeMsg = "\u91CD\u65B0\u53D1\u9001";
        }, 1e4);
      },
      goNextIndex() {
        uni.switchTab({
          url: "/pages/index/index"
        });
      }
    },
    components: {
      Line
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Line = vue.resolveComponent("Line");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_Line),
      vue.createElementVNode("view", { class: "login-tel" }, [
        vue.createElementVNode("view", { class: "tel-main" }, [
          vue.createElementVNode("view", { class: "login-form" }, [
            vue.createElementVNode("view", { class: "login-user" }, [
              vue.createElementVNode("text", { class: "user-text" }, "\u9A8C\u8BC1\u7801"),
              vue.withDirectives(vue.createElementVNode("input", {
                type: "number",
                placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.userCode = $event)
              }, null, 512), [
                [vue.vModelText, $data.userCode]
              ]),
              vue.createElementVNode("button", {
                plain: "true",
                size: "mini",
                disabled: $data.disabled,
                onClick: _cache[1] || (_cache[1] = (...args) => $options.sendCode && $options.sendCode(...args))
              }, vue.toDisplayString($data.codeMsg), 9, ["disabled"])
            ])
          ]),
          vue.createElementVNode("view", {
            class: "tel",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.goNextIndex && $options.goNextIndex(...args))
          }, " \u4E0B\u4E00\u6B65 ")
        ])
      ])
    ]);
  }
  var PagesLoginCodeLoginCode = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-27a4a2a6"], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/pages/login-code/login-code.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        href: ""
      };
    },
    onLoad() {
      this.href = getApp().globalData.href;
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("web-view", { src: $data.href }, null, 8, ["src"])
    ]);
  }
  var PagesWebViewWebView = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/pages/webView/webView.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        href: "",
        danmuList: [
          {
            text: "\u7B2C 1s \u51FA\u73B0\u7684\u5F39\u5E55",
            color: "#ff0000",
            time: 1
          },
          {
            text: "\u7B2C 3s \u51FA\u73B0\u7684\u5F39\u5E55",
            color: "#ff00ff",
            time: 3
          }
        ],
        danmuValue: ""
      };
    },
    onReady: function(res) {
      this.videoContext = uni.createVideoContext("myVideo");
    },
    onLoad() {
      this.href = getApp().globalData.href;
    },
    methods: {
      sendDanmu: function() {
        this.videoContext.sendDanmu({
          text: this.danmuValue,
          color: this.getRandomColor()
        });
        this.danmuValue = "";
      },
      videoErrorCallback: function(e) {
        uni.showModal({
          content: e.target.errMsg,
          showCancel: false
        });
      },
      getRandomColor: function() {
        const rgb = [];
        for (let i = 0; i < 3; ++i) {
          let color = Math.floor(Math.random() * 256).toString(16);
          color = color.length == 1 ? "0" + color : color;
          rgb.push(color);
        }
        return "#" + rgb.join("");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "uni-padding-wrap uni-common-mt" }, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("video", {
            id: "myVideo",
            src: $data.href,
            onError: _cache[0] || (_cache[0] = (...args) => $options.videoErrorCallback && $options.videoErrorCallback(...args)),
            "danmu-list": $data.danmuList,
            "enable-danmu": "",
            "danmu-btn": "",
            controls: ""
          }, null, 40, ["src", "danmu-list"])
        ]),
        vue.createElementVNode("view", { class: "uni-list uni-common-mt" }, [
          vue.createElementVNode("view", { class: "uni-list-cell" }, [
            vue.createElementVNode("view", null, [
              vue.createElementVNode("view", { class: "uni-label" }, "\u5F39\u5E55\u5185\u5BB9")
            ]),
            vue.createElementVNode("view", { class: "uni-list-cell-db" }, [
              vue.withDirectives(vue.createElementVNode("input", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.danmuValue = $event),
                class: "uni-input",
                type: "text",
                placeholder: "\u5728\u6B64\u5904\u8F93\u5165\u5F39\u5E55\u5185\u5BB9"
              }, null, 512), [
                [vue.vModelText, $data.danmuValue]
              ])
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "uni-btn-v" }, [
          vue.createElementVNode("button", {
            onClick: _cache[2] || (_cache[2] = (...args) => $options.sendDanmu && $options.sendDanmu(...args)),
            class: "page-body-button"
          }, "\u53D1\u9001\u5F39\u5E55")
        ])
      ])
    ]);
  }
  var PagesVideoViewVideoView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/pages/videoView/videoView.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/AR/AR", PagesARAR);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/map/map", PagesMapMap);
  __definePage("pages/user/user", PagesUserUser);
  __definePage("components/common/Recommend", ComponentsCommonRecommend);
  __definePage("pages/search/search", PagesSearchSearch);
  __definePage("pages/search-result/search-result", PagesSearchResultSearchResult);
  __definePage("pages/findPlaces/findPlaces", PagesFindPlacesFindPlaces);
  __definePage("pages/login-tel/login-tel", PagesLoginTelLoginTel);
  __definePage("pages/login-code/login-code", PagesLoginCodeLoginCode);
  __definePage("pages/webView/webView", PagesWebViewWebView);
  __definePage("pages/videoView/videoView", PagesVideoViewVideoView);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    },
    globalData: {
      keywords: [],
      href: ""
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/\u4EE3\u7801/DCloud/\u9F99\u6CC9\u5C71\u5BFC\u89C8app/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
