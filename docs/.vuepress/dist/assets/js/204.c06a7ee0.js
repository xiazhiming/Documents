(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{180:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("您可以通过使用一下命令来提交治理提议：")]),t._v(" "),t._m(3),e("p",[t._v("提交区块链治理提议以及发起提议所涉及的初始保证金，其中提议的类型包括Text/ParameterChange/SoftwareUpgrade这三种类型。")]),t._v(" "),e("p",[t._v("若提案没有到达投票期，您还需要通过"),e("router-link",{attrs:{to:"./抵押存款.html"}},[t._v("抵押存款")]),t._v("来激活提案")],1),t._v(" "),e("p",[t._v("提案到达投票期之后，您可以进行"),e("router-link",{attrs:{to:"./提案投票.html"}},[t._v("提案投票")])],1)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"提交在线治理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交在线治理","aria-hidden":"true"}},[this._v("#")]),this._v(" 提交在线治理")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("任何用户都可以存入一些令牌来发起提案。存款达到一定值min_deposit后，进入投票期，否则将保留存款期。其他人可以在存款期内存入提案。一旦存款总额达到min_deposit，输入投票期。但是，如果冻结时间超过存款期间的max_deposit_period，则提案将被关闭。")]),this._v(" "),a("li",[this._v("进入投票期的提案只能由验证人和委托人投票。未投票的代理人的投票将与其验证人的投票相同，并且投票的代理人的投票将保留。到达“voting_period”时，票数将被计算在内。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"如何提交在线治理？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何提交在线治理？","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何提交在线治理？")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("hashgardcli gov submit-proposal \\\n     --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${chain-id}")]),t._v(" \\\n     --title"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${proposal_title}")]),t._v(" \\\n     --type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${typ}")]),t._v(" \\\n     --description"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${desription}")]),t._v(" \\\n     --from"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${wallet_name}")]),t._v("\n")])])])}],!1,null,null,null);a.default=r.exports}}]);