(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{246:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("Keys模块用于管理本地密钥库。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),r("table",[t._m(5),t._v(" "),r("tbody",[r("tr",[r("td",[r("router-link",{attrs:{to:"./mnemonic.html"}},[t._v("mnemonic")])],1),t._v(" "),r("td",[t._v("通过读取系统熵来创建bip39助记词，也可以称为种子短语。")])]),t._v(" "),r("tr",[r("td",[r("router-link",{attrs:{to:"./add.html"}},[t._v("add")])],1),t._v(" "),r("td",[t._v("创建新密钥，或从助记词导入已有密钥")])]),t._v(" "),r("tr",[r("td",[r("router-link",{attrs:{to:"./list.html"}},[t._v("list")])],1),t._v(" "),r("td",[t._v("列出所有密钥")])]),t._v(" "),r("tr",[r("td",[r("router-link",{attrs:{to:"./show.html"}},[t._v("show")])],1),t._v(" "),r("td",[t._v("显示指定名称的关键信息")])]),t._v(" "),r("tr",[r("td",[r("router-link",{attrs:{to:"./delete.html"}},[t._v("delete")])],1),t._v(" "),r("td",[t._v("删除指定的密钥")])]),t._v(" "),r("tr",[r("td",[r("router-link",{attrs:{to:"./update.html"}},[t._v("update")])],1),t._v(" "),r("td",[t._v("更改用于保护私钥的密码")])])])]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),r("p",[t._v("这些密钥可以是go-crypto支持的任何格式，并且可以由轻客户端，完整节点或需要使用私钥签名的任何其他应用程序使用。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"hashgardcli-keys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hashgardcli-keys","aria-hidden":"true"}},[this._v("#")]),this._v(" hashgardcli keys")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述","aria-hidden":"true"}},[this._v("#")]),this._v(" 描述")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"使用方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方式","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用方式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[this._v("hashgardcli keys "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),this._v("command"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"相关命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 相关命令")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("命令")]),this._v(" "),e("th",[this._v("描述")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"标志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标志","aria-hidden":"true"}},[this._v("#")]),this._v(" 标志")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("名称, 速记")]),t._v(" "),r("th",[t._v("默认值")]),t._v(" "),r("th",[t._v("描述")]),t._v(" "),r("th",[t._v("是否必须")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("--help, -h")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("help for keys")]),t._v(" "),r("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"全局标志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局标志","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局标志")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("名称, 速记")]),t._v(" "),r("th",[t._v("默认值")]),t._v(" "),r("th",[t._v("描述")]),t._v(" "),r("th",[t._v("是否必须")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("--encoding, -e")]),t._v(" "),r("td",[t._v("hex")]),t._v(" "),r("td",[t._v("[string] Binary encoding (hex")]),t._v(" "),r("td",[t._v("b64")])]),t._v(" "),r("tr",[r("td",[t._v("--home")]),t._v(" "),r("td",[t._v("$HOME/.hashgard")]),t._v(" "),r("td",[t._v("[string] directory for config and data")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("--output, -o")]),t._v(" "),r("td",[t._v("text")]),t._v(" "),r("td",[t._v("[string] Output format (text")]),t._v(" "),r("td",[t._v("json)")])]),t._v(" "),r("tr",[r("td",[t._v("--trace")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("print out full stack trace on errors")]),t._v(" "),r("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"补充说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#补充说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 补充说明")])}],!1,null,null,null);e.default=s.exports}}]);