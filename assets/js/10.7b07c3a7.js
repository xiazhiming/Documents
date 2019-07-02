(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{192:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"hrc-10-通证发行协议（issue模块）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hrc-10-通证发行协议（issue模块）","aria-hidden":"true"}},[t._v("#")]),t._v(" HRC-10 通证发行协议（issue模块）")]),t._v(" "),s("h3",{attrs:{id:"简述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简述","aria-hidden":"true"}},[t._v("#")]),t._v(" 简述")]),t._v(" "),s("p",[t._v("适合于企业级的高级资产发行标准")]),t._v(" "),s("h3",{attrs:{id:"摘要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#摘要","aria-hidden":"true"}},[t._v("#")]),t._v(" 摘要")]),t._v(" "),s("p",[t._v("标准同质化Token，该协议提供标准的token创建、转移、以及适合金融企业的高级管理功能：例如增发、冻结/解冻账户、销毁代币、强制转移等功能。")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",href:"imges/issue.png"}},[s("img",{attrs:{src:"imges/issue.png",alt:"imges/issue.png"}})])]),t._v(" "),s("h3",{attrs:{id:"使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("hashgardcli issue create "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("total-supply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n")])])]),s("h3",{attrs:{id:"释义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#释义","aria-hidden":"true"}},[t._v("#")]),t._v(" 释义")]),t._v(" "),s("h4",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name","aria-hidden":"true"}},[t._v("#")]),t._v(" name")]),t._v(" "),s("p",[t._v('通证名称，例如"mytoken" 。支持格式utf-8、 长度为3～32字符之间、可重复、必填、不支持修改。')]),t._v(" "),s("blockquote",[s("p",[t._v("Message")]),t._v(" "),s("ul",[s("li",[t._v("error：name encoding only supports utf-8.   //name 编码格式不正确。")]),t._v(" "),s("li",[t._v("error：The length of the name is between 3 and 32. //name字符长度应该在3～32。")]),t._v(" "),s("li",[t._v("error：The name cannot be empty.  //name不能为空。")])])]),t._v(" "),s("h4",{attrs:{id:"symbol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol","aria-hidden":"true"}},[t._v("#")]),t._v(" symbol")]),t._v(" "),s("p",[t._v('通证符号，例如"BTC"。仅支持数字和大写英文、长度2～8字符之间。可重复、不能为空，必填、不支持修改。')]),t._v(" "),s("blockquote",[s("p",[t._v("Message")]),t._v(" "),s("ul",[s("li",[t._v("error：symbol only supports numbers and capital letters. //symbol 仅支持大写字母和数字。")]),t._v(" "),s("li",[t._v("error：The length of the symbol is between 2 and 8. //symbol 字符长度为2～8。")]),t._v(" "),s("li",[t._v("error：The symbol cannot be empty.//symbol 不能为空。")])])]),t._v(" "),s("h4",{attrs:{id:"total-supply"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#total-supply","aria-hidden":"true"}},[t._v("#")]),t._v(" total-supply")]),t._v(" "),s("p",[t._v("通证发行总量，仅支持正整数。最大不超过2^64-1。必填、数量发行后受到burn和mint操作而发生改变。")]),t._v(" "),s("blockquote",[s("p",[t._v("Message")]),t._v(" "),s("ul",[s("li",[t._v("error：total-supply exceeds the upper limit. //total-supply 发行总量超出上限。")]),t._v(" "),s("li",[t._v("error：total-supply must be a positive integer.//total-supply 必须为正整数。")])])]),t._v(" "),s("h3",{attrs:{id:"flags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flags","aria-hidden":"true"}},[t._v("#")]),t._v(" Flags")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("是否必须")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--decimals")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),s("td",[t._v("18")]),t._v(" "),s("td",[t._v("（可选）代币精度，默认18位，最大18位")])]),t._v(" "),s("tr",[s("td",[t._v("--burn-Owenr-off")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("（可选）是否关闭Owenr销毁自己通证")])]),t._v(" "),s("tr",[s("td",[t._v("-burn-holder-off")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("（可选）是否关闭用户销毁自己通证")])]),t._v(" "),s("tr",[s("td",[t._v("--burn-from-off")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("（可选）是否关闭Owner可销毁任意账号下该代币的功能")])]),t._v(" "),s("tr",[s("td",[t._v("--minting")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("（可选）是否关闭Owen增发权限")])])])]),t._v(" "),s("p",[t._v("默认不设置为开启状态，操作不可逆，一旦设定或关闭将无法修改。")]),t._v(" "),s("h3",{attrs:{id:"burn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#burn","aria-hidden":"true"}},[t._v("#")]),t._v(" burn")]),t._v(" "),s("p",[t._v("持有该通证的所有用户或者Owen可以燃烧自己的可用余额。燃烧后通证总量减少。")]),t._v(" "),s("p",[t._v("Owen 销毁受--burn-Owen-off状态控制。用户销毁受-burn-holder-off状态控制。")]),t._v(" "),s("blockquote",[s("p",[t._v("Message")]),t._v(" "),s("ul",[s("li",[t._v("error：Burn token function is disabled.//燃烧功能被禁用。")]),t._v(" "),s("li",[t._v("error：The balance is less than the amount burned.//余额小于燃烧数量。")])])]),t._v(" "),s("h3",{attrs:{id:"burn-from"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#burn-from","aria-hidden":"true"}},[t._v("#")]),t._v(" burn-from")]),t._v(" "),s("p",[t._v("该通证的Owen可以销毁其他正常用户持有该通证的可用余额。燃烧后通证总量减少。该命令受到--burn-from-off状态控制。")]),t._v(" "),s("blockquote",[s("p",[t._v("Message")]),t._v(" "),s("ul",[s("li",[t._v("error：Owner mismatch with coin .//与通证发行者不匹配。")]),t._v(" "),s("li",[t._v("error：Burn-from function is disabled.//燃烧用户余额功能被禁用。")]),t._v(" "),s("li",[t._v("error：The balance is less than the amount burned.//余额小于燃烧数量。")]),t._v(" "),s("li",[t._v("error：burn-from address does not exist.//燃烧地址不存在。")])])]),t._v(" "),s("h3",{attrs:{id:"transfer-ownership"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transfer-ownership","aria-hidden":"true"}},[t._v("#")]),t._v(" transfer-ownership")]),t._v(" "),s("p",[t._v("将通证合约的所有权转移至新的地址账户。仅限于合约本身管理权，不涉及到本账户的通证。")]),t._v(" "),s("h3",{attrs:{id:"freezeaccount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#freezeaccount","aria-hidden":"true"}},[t._v("#")]),t._v(" freezeAccount")]),t._v(" "),s("p",[t._v("可以冻结用户该通证转入、转出功能。并带有时间参数。time仅支持时间戳格式，开始时间不能晚余结束时间。开始时间早于交易执行时间。 该命令受到freezeAccount-off状态控制。")]),t._v(" "),s("blockquote",[s("p",[t._v("Message")]),t._v(" "),s("ul",[s("li",[t._v("error：Owner mismatch with coin .//与通证发行者不匹配。")]),t._v(" "),s("li",[t._v("error：freezeAccount is disabled.//冻结账户功能被禁用。")]),t._v(" "),s("li",[t._v("error：freezeAccount does not exist.//冻结账户不存在。")]),t._v(" "),s("li",[t._v("error：starting time.//冻结开始时间不正确。")]),t._v(" "),s("li",[t._v("error：end time.//冻结结束时间不正确。")]),t._v(" "),s("li",[t._v("error：Start time cannot be less than end time.//冻结开始时间必须早于结束时间。")])])]),t._v(" "),s("h3",{attrs:{id:"unfreezeaccount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unfreezeaccount","aria-hidden":"true"}},[t._v("#")]),t._v(" unfreezeAccount")]),t._v(" "),s("p",[t._v("解冻用户的账户转入、转出的状态。")]),t._v(" "),s("blockquote",[s("p",[t._v("Message")]),t._v(" "),s("p",[t._v("error：Owner mismatch with coin .//与通证发行者不匹配。")]),t._v(" "),s("p",[t._v("error：unfreezeAccount is disable.//解冻功能被禁用。")]),t._v(" "),s("p",[t._v("error：unfreezeAccount does not exist.//解冻账户不存在")]),t._v(" "),s("p",[t._v("Warning：account is not freeze.//账户没有冻结状态")])]),t._v(" "),s("h3",{attrs:{id:"mint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mint","aria-hidden":"true"}},[t._v("#")]),t._v(" mint")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v(" hashgardcli issue mint "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("issue-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("Owen增发通证至自己账户。增发数量+现有发行数量不能超过2^64-1。增发数量仅支持正整数。该命令受到--minting-finished状态控制。默认增发至自己账户，也可发送至指定账户地址。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("是否必须")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--to")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",[t._v("（可选）增发到指定的账号地址")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("Message")]),t._v(" "),s("ul",[s("li",[t._v("error：Owner mismatch with coin .//与通证发行者不匹配。")]),t._v(" "),s("li",[t._v("error：minting  is disabled.//增发功能被禁用。")]),t._v(" "),s("li",[t._v("error：total-supply exceeds the upper limit.//供应总量超出发行上限。")]),t._v(" "),s("li",[t._v("error：mint quantity must be a positive integer.//增发数量必须为正整数。")])])]),t._v(" "),s("h4",{attrs:{id:"finish-minting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finish-minting","aria-hidden":"true"}},[t._v("#")]),t._v(" finish-minting")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" hashgardcli issue finish-minting  [issue-id] [flags]\n")])])]),s("p",[t._v("关闭通证的增发功能。")]),t._v(" "),s("blockquote",[s("p",[t._v("Message")]),t._v(" "),s("ul",[s("li",[t._v("error：Owner mismatch with coin .//与通证发行者不匹配。")])])]),t._v(" "),s("h3",{attrs:{id:"例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子","aria-hidden":"true"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("hashgardcli issue create foocoin FOO 100000000 --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("foo -o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("json\n")])])]),s("p",[t._v("进行本项操作需要您有Gard来进行支付矿工打包费用。如测试网络环境请领取测试代币。"),s("router-link",{attrs:{to:"/cli/hashgard/Faucet.html"}},[t._v("如何领取")])],1),t._v(" "),s("p",[t._v("进行上述操作后会需要您使用您输入当前地址钱包的密码进行发行通证操作。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"height"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3394"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"txhash"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"81D4B2054F741E901BE5A540DDA37BF53D1DEA16C94BF9E4BBDB1D1CD548DFA1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ERBjb2luMTU1NTU2NzUwNjAw"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"logs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg_index"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"log"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gas_wanted"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100000000000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gas_used"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18994244"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tags"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"action"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"issue"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"recipient"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gard1vf7pnhwh5v4lmdp59dms2andn2hhperghppkxc"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"issue-id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"coin174876e800"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("查询自己的账号")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("hashgardcli bank account foo\n")])])]),s("p",[t._v("你将会看到你的持币列表里多了一个形如“币名（issue-id）”特殊名称的币。后续对该币的操作请使用issue-id的值来进行，包括进行转账操作，要转的币也请使用该issue-id。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth/Account"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gard1f203m5q7hr4tkf0vredrn4wpxkx7zngn4pntye"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coins"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"denom"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foocoin(coin174876e800)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100000000"')]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"denom"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gard"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1010000000"')]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"public_key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tendermint/PubKeySecp256k1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A/rSPb+egaljwS1XGSSFKpaFkfjFzLWJFmtUdAlaQpLl"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"account_number"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sequence"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11"')]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"添加描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加描述")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("hashgardcli issue describe "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("issue-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description-file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h4",{attrs:{id:"describe-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#describe-file","aria-hidden":"true"}},[t._v("#")]),t._v(" describe-file")]),t._v(" "),s("p",[t._v("发行通证可用支持描述文件，格式支持json文件，大小不能超过1024字节。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("org //组织机构或个人名称 。")])]),t._v(" "),s("li",[s("p",[t._v("Logo  //通证项目图标或项目图标，仅支持网址链接。")])]),t._v(" "),s("li",[s("p",[t._v("website  //发行方官方的网站地址。")])]),t._v(" "),s("li",[s("p",[t._v("intro  //对于该项目的简单描述。")])])]),t._v(" "),s("h4",{attrs:{id:"模版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模版","aria-hidden":"true"}},[t._v("#")]),t._v(" 模版")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"org"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hashgard"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"website"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.hashgard.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"logo"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.hashgard.com/static/logo.2d949f3d.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"intro"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"新一代金融公有链"')]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Message")]),t._v(" "),s("ul",[s("li",[t._v("error：describe-file  length cannot exceed 1024.//文件内容长度不能大于1024。")]),t._v(" "),s("li",[t._v("error：the file must be json。//文件格式必须为json。")])])]),t._v(" "),s("h2",{attrs:{id:"发行查询总数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发行查询总数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 发行查询总数据")]),t._v(" "),s("blockquote",[s("p",[t._v("发行信息")]),t._v(" "),s("p",[t._v("name //发行通证名称")]),t._v(" "),s("p",[t._v("Issue-address //发行者地址")]),t._v(" "),s("p",[t._v("symbol //令牌符号")]),t._v(" "),s("p",[t._v("owenr //发行合约所有者地址")]),t._v(" "),s("p",[t._v("decimals //小数位精度")]),t._v(" "),s("p",[t._v("total-supply //发行总量")]),t._v(" "),s("p",[t._v("time  //发行时间")]),t._v(" "),s("p",[t._v("description //发行通证描述")]),t._v(" "),s("ul",[s("li",[t._v("logo")]),t._v(" "),s("li",[t._v("org  //组织机构或个人")]),t._v(" "),s("li",[t._v("intro   //通证描述")]),t._v(" "),s("li",[t._v("Website //网站地址")])]),t._v(" "),s("p",[t._v("disable")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("minting //增发功能")]),t._v(" "),s("ul",[s("li",[t._v("on")]),t._v(" "),s("li",[t._v("off")])])]),t._v(" "),s("li",[s("p",[t._v("burn-handlers //普通用户燃烧自己可用通证")]),t._v(" "),s("ul",[s("li",[t._v("on")]),t._v(" "),s("li",[t._v("off")])])]),t._v(" "),s("li",[s("p",[t._v("burn-Owenr //通证合约所有者燃烧自己可用通证")]),t._v(" "),s("ul",[s("li",[t._v("on")]),t._v(" "),s("li",[t._v("off")])])]),t._v(" "),s("li",[s("p",[t._v("burn-from //通证合约所有者燃烧用户可用通证")]),t._v(" "),s("ul",[s("li",[t._v("on")]),t._v(" "),s("li",[t._v("off")])])]),t._v(" "),s("li",[s("p",[t._v("freezeAccount //冻结账户功能")]),t._v(" "),s("ul",[s("li",[t._v("on")]),t._v(" "),s("li",[t._v("off")])])])])]),t._v(" "),s("blockquote",[s("p",[t._v("freeze-list  //冻结名单")]),t._v(" "),s("ul",[s("li",[t._v("address//冻结地址")]),t._v(" "),s("li",[t._v("time //冻结时间")]),t._v(" "),s("li",[t._v("in/out/both //转入/转出/全部")])])]),t._v(" "),s("blockquote",[s("p",[t._v("mint-list //增发记录列表")]),t._v(" "),s("p",[t._v("time")]),t._v(" "),s("ul",[s("li",[t._v("address //增发地址")]),t._v(" "),s("li",[t._v("amount//增发数量")])])]),t._v(" "),s("blockquote",[s("p",[t._v("Brun-list //燃烧记录列表")]),t._v(" "),s("p",[t._v("time//燃烧时间")]),t._v(" "),s("ul",[s("li",[t._v("address //燃烧地址")]),t._v(" "),s("li",[t._v("amount //燃烧数量")])])]),t._v(" "),s("blockquote",[s("p",[t._v("Holder-list //持有者列表")]),t._v(" "),s("ul",[s("li",[t._v("address //持有地址")]),t._v(" "),s("li",[t._v("amount //持有数量")])])]),t._v(" "),s("blockquote",[s("p",[t._v("transfer-ownership-list 转移记录")]),t._v(" "),s("ul",[s("li",[t._v("time //转移时间")]),t._v(" "),s("li",[t._v("From_address")]),t._v(" "),s("li",[t._v("To_address")])])]),t._v(" "),s("h3",{attrs:{id:"查询或搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询或搜索","aria-hidden":"true"}},[t._v("#")]),t._v(" 查询或搜索")]),t._v(" "),s("h4",{attrs:{id:"list-issue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-issue","aria-hidden":"true"}},[t._v("#")]),t._v(" list-issue")]),t._v(" "),s("p",[t._v("查询列表")]),t._v(" "),s("h4",{attrs:{id:"issue-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issue-id","aria-hidden":"true"}},[t._v("#")]),t._v(" issue-id")]),t._v(" "),s("p",[t._v("查询指定通证")]),t._v(" "),s("h4",{attrs:{id:"freeze"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#freeze","aria-hidden":"true"}},[t._v("#")]),t._v(" freeze")]),t._v(" "),s("p",[t._v("查询冻结名单")]),t._v(" "),s("h2",{attrs:{id:"命令帮助"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令帮助","aria-hidden":"true"}},[t._v("#")]),t._v(" 命令帮助")]),t._v(" "),s("h3",{attrs:{id:"发行命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发行命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 发行命令")]),t._v(" "),s("h4",{attrs:{id:"create"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create","aria-hidden":"true"}},[t._v("#")]),t._v(" create")]),t._v(" "),s("p",[t._v("Issue a new token  // 创建通证")]),t._v(" "),s("h4",{attrs:{id:"describe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#describe","aria-hidden":"true"}},[t._v("#")]),t._v(" describe")]),t._v(" "),s("p",[t._v("Token description  //通证的描述")]),t._v(" "),s("h3",{attrs:{id:"不可逆功能设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不可逆功能设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 不可逆功能设置")]),t._v(" "),s("h4",{attrs:{id:"irreversible-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#irreversible-functions","aria-hidden":"true"}},[t._v("#")]),t._v(" Irreversible Functions")]),t._v(" "),s("p",[t._v("Token smart contract setup, irreversible. //设置通证合约功能，该操作不可逆")]),t._v(" "),s("p",[t._v("Irreversible functions:  //所有不可逆的功能设置命令")]),t._v(" "),s("h4",{attrs:{id:"burn-owner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#burn-owner","aria-hidden":"true"}},[t._v("#")]),t._v(" burn-owner")]),t._v(" "),s("p",[t._v("Burn the token by token owner //合约所有者燃烧自己的可用通证")]),t._v(" "),s("h4",{attrs:{id:"burn-holder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#burn-holder","aria-hidden":"true"}},[t._v("#")]),t._v(" burn-holder")]),t._v(" "),s("p",[t._v("Burn token by token holder //普通用户燃烧自己的可用通证")]),t._v(" "),s("h4",{attrs:{id:"burn-from-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#burn-from-2","aria-hidden":"true"}},[t._v("#")]),t._v(" burn-from")]),t._v(" "),s("p",[t._v("Burn token from any holder by token owner //合约所有者燃烧普通用户的可用通证")]),t._v(" "),s("h4",{attrs:{id:"freeze-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#freeze-2","aria-hidden":"true"}},[t._v("#")]),t._v(" freeze")]),t._v(" "),s("p",[t._v("Freeze transfer token in and transfer token out by token owner //合约所有者冻结用户该通证的转入和转出功能")]),t._v(" "),s("h4",{attrs:{id:"minting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minting","aria-hidden":"true"}},[t._v("#")]),t._v(" minting")]),t._v(" "),s("p",[t._v("Token owner can mint additional token //合约管理者增发通证")]),t._v(" "),s("h3",{attrs:{id:"基础功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础功能")]),t._v(" "),s("h4",{attrs:{id:"approve"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#approve","aria-hidden":"true"}},[t._v("#")]),t._v(" approve")]),t._v(" "),s("p",[t._v("Approve spend tokens on behalf of sender //")]),t._v(" "),s("h4",{attrs:{id:"decrease-approval"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decrease-approval","aria-hidden":"true"}},[t._v("#")]),t._v(" decrease-approval")]),t._v(" "),s("p",[t._v("Decrease approve spend tokens on behalf of sender  //")]),t._v(" "),s("h4",{attrs:{id:"increase-approval"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#increase-approval","aria-hidden":"true"}},[t._v("#")]),t._v(" increase-approval")]),t._v(" "),s("p",[t._v("Increase approve spend tokens on behalf of sender //")]),t._v(" "),s("h4",{attrs:{id:"send-from"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#send-from","aria-hidden":"true"}},[t._v("#")]),t._v(" send-from")]),t._v(" "),s("p",[t._v("Send tokens from one address to another  //发送通证至其他地址")]),t._v(" "),s("h4",{attrs:{id:"lock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lock","aria-hidden":"true"}},[t._v("#")]),t._v(" lock")]),t._v(" "),s("p",[t._v("Lock up part of or all the tokens //用户自己锁定用户的部分或者全部通证")]),t._v(" "),s("h3",{attrs:{id:"高级功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高级功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 高级功能")]),t._v(" "),s("h4",{attrs:{id:"burn-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#burn-2","aria-hidden":"true"}},[t._v("#")]),t._v(" burn")]),t._v(" "),s("p",[t._v("Burn token by token holder //燃烧自己的通证")]),t._v(" "),s("h4",{attrs:{id:"burn-from-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#burn-from-3","aria-hidden":"true"}},[t._v("#")]),t._v(" burn-from")]),t._v(" "),s("p",[t._v("Burn all the available token of token holders by token owner //通证合约所有者燃烧用户可用余额")]),t._v(" "),s("h4",{attrs:{id:"freeze-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#freeze-3","aria-hidden":"true"}},[t._v("#")]),t._v(" freeze")]),t._v(" "),s("p",[t._v("Freeze transfer function of a certain address  //冻结用户的地址")]),t._v(" "),s("h4",{attrs:{id:"unfreeze"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unfreeze","aria-hidden":"true"}},[t._v("#")]),t._v(" unfreeze")]),t._v(" "),s("p",[t._v("UnFreeze transfer function of a certain address  //解冻用户的地址")]),t._v(" "),s("h4",{attrs:{id:"mint-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mint-2","aria-hidden":"true"}},[t._v("#")]),t._v(" mint")]),t._v(" "),s("p",[t._v("Mint additional token  //增发通证")]),t._v(" "),s("h4",{attrs:{id:"finish-minting-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finish-minting-2","aria-hidden":"true"}},[t._v("#")]),t._v(" finish-minting")]),t._v(" "),s("p",[t._v("Disable mint function//关闭增发功能")]),t._v(" "),s("h4",{attrs:{id:"transfer-ownership-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transfer-ownership-2","aria-hidden":"true"}},[t._v("#")]),t._v(" transfer-ownership")]),t._v(" "),s("p",[t._v("Transfer the ownership of a token  //转移合约所有权")]),t._v(" "),s("h3",{attrs:{id:"搜索和查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索和查询","aria-hidden":"true"}},[t._v("#")]),t._v(" 搜索和查询")]),t._v(" "),s("h4",{attrs:{id:"list-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-issues","aria-hidden":"true"}},[t._v("#")]),t._v(" list-issues")]),t._v(" "),s("p",[t._v("Query token issuance list      //查询发行列表")]),t._v(" "),s("h4",{attrs:{id:"query-issue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-issue","aria-hidden":"true"}},[t._v("#")]),t._v(" query-issue")]),t._v(" "),s("p",[t._v("Query a single token   //查询单个通证")]),t._v(" "),s("h4",{attrs:{id:"query-allowance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-allowance","aria-hidden":"true"}},[t._v("#")]),t._v(" query-allowance")]),t._v(" "),s("p",[t._v("Query //查询")]),t._v(" "),s("h4",{attrs:{id:"query-freeze"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-freeze","aria-hidden":"true"}},[t._v("#")]),t._v(" query-freeze")]),t._v(" "),s("p",[t._v("Query frozen address list //查询冻结名单")]),t._v(" "),s("h4",{attrs:{id:"search"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#search","aria-hidden":"true"}},[t._v("#")]),t._v(" search")]),t._v(" "),s("p",[t._v("Search Token    //搜索通证符号或名称")])])},[],!1,null,null,null);a.default=r.exports}}]);