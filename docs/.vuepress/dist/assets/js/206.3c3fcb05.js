(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{178:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("首先，如果您没有帐户或忘记密码，则需要为自己创建一个帐户作为相应的验证程序操作员。")]),t._v(" "),s("p",[t._v("请按照"),s("a",{attrs:{href:"https://github.com/hashgard/hashgard/blob/master/docs/zh/hashgardcli/keys/add.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("钱包创建文档"),s("OutboundLink")],1),t._v("创建")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),s("p",[t._v("将在以下目录中生成事务：~/.hashgard/config/gentx 创建 CreateValidator 事务并通过刚刚创建的验证器操作员帐户对事务进行签名默认佣金数据为：")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"如何参与genesis过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何参与genesis过程","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何参与Genesis过程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"第1步：创建自己的帐户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第1步：创建自己的帐户","aria-hidden":"true"}},[this._v("#")]),this._v(" 第1步：创建自己的帐户")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"第2步：初始化您的节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第2步：初始化您的节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 第2步：初始化您的节点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("hashgard init --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("sif-3001 --moniker"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("${your_node_name}")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("注：已初始化过的不用执行此步骤")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"第3步：向-genesis-json-中添加账户信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第3步：向-genesis-json-中添加账户信息","aria-hidden":"true"}},[this._v("#")]),this._v(" 第3步：向 genesis.json 中添加账户信息")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("hashgard add-genesis-account "),e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("${your_wallet_name}")]),this._v(" 100000000gard\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("注意：name仅支持ASCII字符。使用Unicode字符将使您的节点无法访问。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"第4步：向-genesis-json-中添加账户信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第4步：向-genesis-json-中添加账户信息","aria-hidden":"true"}},[this._v("#")]),this._v(" 第4步：向 genesis.json 中添加账户信息")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("hashgard gentx --name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${your_wallet_name}")]),t._v(" --amount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("100000000gard --ip"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${validator_ip}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("注意：name仅支持ASCII字符。使用Unicode字符将使您的节点无法访问。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("delegation amount: 100000000 gard")]),this._v(" "),e("li",[this._v("commission rate: 0.1")]),this._v(" "),e("li",[this._v("commission max rate: 0.2")]),this._v(" "),e("li",[this._v("commission max change rate: 0.01")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"第5步：提交你的-gentx-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第5步：提交你的-gentx-json","aria-hidden":"true"}},[this._v("#")]),this._v(" 第5步：提交你的 gentx.json")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("通过创建拉取请求提交您的 gentx-node-ID.json 。\n在团队收集了所有 gen-tx 事务后，我们将发布"),e("code",[this._v("genesis")]),this._v("文件。\n然后，您可以下载最终的"),e("code",[this._v("genesis")]),this._v("文件并启动一个节点。")])}],!1,null,null,null);e.default=r.exports}}]);