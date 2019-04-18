(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{283:function(v,_,t){"use strict";t.r(_);var d=t(0),a=Object(d.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"hashgardlcd-用户文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashgardlcd-用户文档","aria-hidden":"true"}},[v._v("#")]),v._v(" hashgardlcd 用户文档")]),v._v(" "),t("h2",{attrs:{id:"基本功能介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本功能介绍","aria-hidden":"true"}},[v._v("#")]),v._v(" 基本功能介绍")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("提供 restful API 以及 swagger-ui")])]),v._v(" "),t("li",[t("p",[v._v("验证查询结果")])])]),v._v(" "),t("h2",{attrs:{id:"hashgardlcd-的用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashgardlcd-的用法","aria-hidden":"true"}},[v._v("#")]),v._v(" hashgardlcd 的用法")]),v._v(" "),t("p",[v._v("hashgardlcd 有三个子命令:")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("子命令")]),v._v(" "),t("th",[v._v("功能")]),v._v(" "),t("th",[v._v("示例命令")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("help")]),v._v(" "),t("td",[v._v("打印帮助信息")]),v._v(" "),t("td",[v._v("hashgardlcd help")])]),v._v(" "),t("tr",[t("td",[v._v("version")]),v._v(" "),t("td",[v._v("打印版本信息")]),v._v(" "),t("td",[v._v("hashgardlcd version")])]),v._v(" "),t("tr",[t("td",[v._v("start")]),v._v(" "),t("td",[v._v("启动一个 hashgardLCD 节点")]),v._v(" "),t("td",[v._v("hashgardlcd start --chain-id="),t("code",[v._v("<chain-id>")])])])])]),v._v(" "),t("h3",{attrs:{id:"start-子命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-子命令","aria-hidden":"true"}},[v._v("#")]),v._v(" start 子命令")]),v._v(" "),t("p",[t("code",[v._v("start")]),v._v("子命令有如下 flags 可配置")]),v._v(" "),t("h4",{attrs:{id:"flags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flags","aria-hidden":"true"}},[v._v("#")]),v._v(" flags")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("参数名称")]),v._v(" "),t("th",[v._v("类型")]),v._v(" "),t("th",[v._v("默认值")]),v._v(" "),t("th",[v._v("是否必填")]),v._v(" "),t("th",[v._v("功能描述")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("cors")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v('""')]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("允许跨域访问的地址（*允许所有）")])]),v._v(" "),t("tr",[t("td",[v._v("laddr")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v('"tcp://localhost:1317"')]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("侦听的地址和端口")])]),v._v(" "),t("tr",[t("td",[v._v("max-open")]),v._v(" "),t("td",[v._v("int")]),v._v(" "),t("td",[v._v("1000")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("最大连接数")])]),v._v(" "),t("tr",[t("td",[v._v("ssl-certfile")]),v._v(" "),t("td",[v._v("int")]),v._v(" "),t("td",[v._v("1000")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("ssl 证书所在目录，未设置将自动生成新的证书")])]),v._v(" "),t("tr",[t("td",[v._v("ssl-hosts")]),v._v(" "),t("td",[v._v("int")]),v._v(" "),t("td",[v._v("1000")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("使用 ssl 证书的域名")])]),v._v(" "),t("tr",[t("td",[v._v("ssl-keyfile")]),v._v(" "),t("td",[v._v("int")]),v._v(" "),t("td",[v._v("1000")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("ssl-key 文件所在目录，不设置 ssl 证书时会被忽略")])]),v._v(" "),t("tr",[t("td",[v._v("tls")]),v._v(" "),t("td",[v._v("bool")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("打开 SSL/TLS")])]),v._v(" "),t("tr",[t("td",[v._v("height")]),v._v(" "),t("td",[v._v("int")]),v._v(" "),t("td",[v._v("（最新区块高度）")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("查询的区块高度")])]),v._v(" "),t("tr",[t("td",[v._v("node")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v('"tcp://localhost:26657"')]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("全节点的 rpc 地址")])]),v._v(" "),t("tr",[t("td",[v._v("trust-node")]),v._v(" "),t("td",[v._v("bool")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("是否信任全节点")])]),v._v(" "),t("tr",[t("td",[v._v("help")]),v._v(" "),t("td",[v._v("bool")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("打印帮助信息")])]),v._v(" "),t("tr",[t("td",[v._v("indent")]),v._v(" "),t("td",[v._v("bool")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("输出结果格式化")])]),v._v(" "),t("tr",[t("td",[v._v("ledger")]),v._v(" "),t("td",[v._v("bool")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("使用 ledger 硬件钱包")])])])]),v._v(" "),t("h4",{attrs:{id:"全局-flags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局-flags","aria-hidden":"true"}},[v._v("#")]),v._v(" 全局 flags")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("参数名称")]),v._v(" "),t("th",[v._v("类型")]),v._v(" "),t("th",[v._v("默认值")]),v._v(" "),t("th",[v._v("是否必填")]),v._v(" "),t("th",[v._v("功能描述")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("chain-id")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("null")]),v._v(" "),t("td",[v._v("true")]),v._v(" "),t("td",[v._v("Tendermint 节点的 chain ID")])]),v._v(" "),t("tr",[t("td",[v._v("encoding")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v('"hex"')]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("设置字节编码，(可选 hex、b64、btc)")])]),v._v(" "),t("tr",[t("td",[v._v("home")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v('"$HOME/.hashgardlcd"')]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("配置 home 目录，key 和 proof 相关的信息都存于此")])]),v._v(" "),t("tr",[t("td",[v._v("output")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("text")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("输出格式(text、json)")])]),v._v(" "),t("tr",[t("td",[v._v("trace")]),v._v(" "),t("td",[v._v("bool")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("报错时是否打印完整调用栈")])])])]),v._v(" "),t("h2",{attrs:{id:"示例命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例命令","aria-hidden":"true"}},[v._v("#")]),v._v(" 示例命令")]),v._v(" "),t("ol",[t("li",[v._v("默认情况下，hashgardLCD 不信任连接全节点。但是如果您确定连接的完整节点是可信的，那么您应该在启动 hashgardLCD 时加上"),t("code",[v._v("--trust-node")]),v._v("：")])]),v._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[v._v("hashgardlcd start --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" --trust-node\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[v._v("如果需要在其他机器上访问此 hashgardlcd 节点，还需要配置"),t("code",[v._v("--laddr")]),v._v("参数，例如：")])]),v._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[v._v("hashgardlcd start --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" --laddr"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v("tcp://0.0.0.0:1317\n")])])]),t("h2",{attrs:{id:"rest-apis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rest-apis","aria-hidden":"true"}},[v._v("#")]),v._v(" REST APIs")]),v._v(" "),t("p",[v._v("hashgardlcd 启动以后，您可以在浏览器中访问"),t("code",[v._v("localhost:1317/swagger-ui/")]),v._v("，然后你将看到所有的 REST APIs。"),t("code",[v._v("swagger-ui")]),v._v("页面有关于 API 功能和所需参数的详细描述。在这里，我们只列出所有 API 并简要介绍它们的功能。")]),v._v(" "),t("ol",[t("li",[v._v("Tendermint 相关 APIs, 例如查询区块，交易和验证人集\n"),t("ol",[t("li",[t("code",[v._v("GET /node_info")]),v._v(": 查询所连接全节点的信息")]),v._v(" "),t("li",[t("code",[v._v("GET /syncing")]),v._v(": 查询所连接全节点是否处于追赶区块的状态")]),v._v(" "),t("li",[t("code",[v._v("GET /blocks/latest")]),v._v(": 获取最新区块")]),v._v(" "),t("li",[t("code",[v._v("GET /blocks/{height}")]),v._v(": 获取某一高度的区块")]),v._v(" "),t("li",[t("code",[v._v("GET /validatorsets/latest")]),v._v(": 获取最新的验证人集合")]),v._v(" "),t("li",[t("code",[v._v("GET /validatorsets/{height}")]),v._v(": 获取某一高度的验证人集合")]),v._v(" "),t("li",[t("code",[v._v("GET /txs/{hash}")]),v._v(": 通过交易 hash 查询交易")]),v._v(" "),t("li",[t("code",[v._v("GET /txs")]),v._v(": 搜索交易")]),v._v(" "),t("li",[t("code",[v._v("POST /txs")]),v._v(": 广播交易")])])]),v._v(" "),t("li",[v._v("Key management 模块的 APIs\n"),t("ol",[t("li",[t("code",[v._v("GET /keys")]),v._v(": 列出所有本地的秘钥")]),v._v(" "),t("li",[t("code",[v._v("POST /keys")]),v._v(": 创建新的秘钥")]),v._v(" "),t("li",[t("code",[v._v("GET /keys/seed")]),v._v(": 创建新的助记词")]),v._v(" "),t("li",[t("code",[v._v("GET /keys/{name}")]),v._v(": 根据秘钥名称查询秘钥")]),v._v(" "),t("li",[t("code",[v._v("PUT /keys/{name}")]),v._v(": 更新秘钥的密码")]),v._v(" "),t("li",[t("code",[v._v("DELETE /keys/{name}")]),v._v(": 删除秘钥")]),v._v(" "),t("li",[t("code",[v._v("GET /auth/accounts/{address}")]),v._v(": 查询秘钥对象账户的信息")])])]),v._v(" "),t("li",[v._v("创建、签名和广播交易的 APIs\n"),t("ol",[t("li",[t("code",[v._v("POST /tx/sign")]),v._v(": 签名交易")]),v._v(" "),t("li",[t("code",[v._v("POST /tx/broadcast")]),v._v(": 广播一个 amino 编码的交易")]),v._v(" "),t("li",[t("code",[v._v("POST /txs/send")]),v._v(": 广播一个非 amino 编码的交易")]),v._v(" "),t("li",[t("code",[v._v("GET /bank/coin/{coin-type}")]),v._v(": 查询 coin 的类型信息")]),v._v(" "),t("li",[t("code",[v._v("GET /bank/token-stats")]),v._v(": 查询 token 统计信息")]),v._v(" "),t("li",[t("code",[v._v("GET /bank/balances/{address}")]),v._v(": 查询账户的 token 数量")]),v._v(" "),t("li",[t("code",[v._v("POST /bank/accounts/{address}/transfers")]),v._v(": 发起转账交易")]),v._v(" "),t("li",[t("code",[v._v("POST /bank/burn")]),v._v(": 销毁 token")])])]),v._v(" "),t("li",[v._v("Stake 模块的 APIs\n"),t("ol",[t("li",[t("code",[v._v("POST /stake/delegators/{delegatorAddr}/delegate")]),v._v(": 发起委托交易")]),v._v(" "),t("li",[t("code",[v._v("POST /stake/delegators/{delegatorAddr}/redelegate")]),v._v(": 发起转委托交易")]),v._v(" "),t("li",[t("code",[v._v("POST /stake/delegators/{delegatorAddr}/unbond")]),v._v(": 发起解委托交易")]),v._v(" "),t("li",[t("code",[v._v("GET /stake/delegators/{delegatorAddr}/delegations")]),v._v(": 查询委托人的所有委托记录")]),v._v(" "),t("li",[t("code",[v._v("GET /stake/delegators/{delegatorAddr}/unbonding_delegations")]),v._v(": 查询委托人的所有解委托记录")]),v._v(" "),t("li",[t("code",[v._v("GET /stake/delegators/{delegatorAddr}/redelegations")]),v._v(": 查询委托人的所有转委托记录")]),v._v(" "),t("li",[t("code",[v._v("GET /stake/delegators/{delegatorAddr}/validators")]),v._v(": 查询委托人的所委托的所有验证人")]),v._v(" "),t("li",[t("code",[v._v("GET /stake/delegators/{delegatorAddr}/validators/{validatorAddr}")]),v._v(": 查询某个被委托的验证人上信息")]),v._v(" "),t("li",[t("code",[v._v("GET /stake/delegators/{delegatorAddr}/txs")]),v._v(": 查询所有委托人相关的委托交易")]),v._v(" "),t("li",[t("code",[v._v("GET /stake/delegators/{delegatorAddr}/delegations/{validatorAddr}")]),v._v(": 查询委托人在某个验证人上的委托记录")]),v._v(" "),t("li",[t("code",[v._v("GET /stake/delegators/{delegatorAddr}/unbonding_delegations/{validatorAddr}")]),v._v(": 查询委托人在某个验证人上所有的解委托记录")]),v._v(" "),t("li",[t("code",[v._v("GET /stake/validators")]),v._v(": 获取所有委托人信息")]),v._v(" "),t("li",[t("code",[v._v("GET /stake/validators/{validatorAddr}")]),v._v(": 获取某个委托人信息")]),v._v(" "),t("li",[t("code",[v._v("GET /stake/validators/{validatorAddr}/unbonding_delegations")]),v._v(": 获取某个验证人上的所有解委托记录")]),v._v(" "),t("li",[t("code",[v._v("GET /stake/validators/{validatorAddr}/redelegations")]),v._v(": 获取某个验证人上的所有转委托记录")]),v._v(" "),t("li",[t("code",[v._v("GET /stake/pool")]),v._v(": 获取权益池信息")]),v._v(" "),t("li",[t("code",[v._v("GET /stake/parameters")]),v._v(": 获取权益证明的参数")])])]),v._v(" "),t("li",[v._v("Governance 模块的 APIs\n"),t("ol",[t("li",[t("code",[v._v("POST /gov/proposal")]),v._v(": 发起提交提议交易")]),v._v(" "),t("li",[t("code",[v._v("GET /gov/proposals")]),v._v(": 查询提议")]),v._v(" "),t("li",[t("code",[v._v("POST /gov/proposals/{proposalId}/deposits")]),v._v(": 发起缴纳押金的交易")]),v._v(" "),t("li",[t("code",[v._v("GET /gov/proposals/{proposalId}/deposits")]),v._v(": 查询缴纳的押金")]),v._v(" "),t("li",[t("code",[v._v("POST /gov/proposals/{proposalId}/votes")]),v._v(": 发起投票交易")]),v._v(" "),t("li",[t("code",[v._v("GET /gov/proposals/{proposalId}/votes")]),v._v(": 查询投票")]),v._v(" "),t("li",[t("code",[v._v("GET /gov/proposals/{proposalId}")]),v._v(": 查询某个提议")]),v._v(" "),t("li",[t("code",[v._v("GET /gov/proposals/{proposalId}/deposits/{depositor}")]),v._v(":查询押金")]),v._v(" "),t("li",[t("code",[v._v("GET /gov/proposals/{proposalId}/votes/{voter}")]),v._v(": 查询投票")]),v._v(" "),t("li",[t("code",[v._v("GET/gov/params")]),v._v(": 查询可供治理的参数")])])]),v._v(" "),t("li",[v._v("Slashing 模块的 APIs\n"),t("ol",[t("li",[t("code",[v._v("GET /slashing/validators/{validatorPubKey}/signing_info")]),v._v(": 获取验证人的签名记录")]),v._v(" "),t("li",[t("code",[v._v("POST /slashing/validators/{validatorAddr}/unjail")]),v._v(": 赦免某个作恶的验证人节点")])])]),v._v(" "),t("li",[v._v("Distribution 模块的 APIs\n"),t("ol",[t("li",[t("code",[v._v("POST /distribution/{delegatorAddr}/withdrawAddress")]),v._v(": 设置收益取回地址")]),v._v(" "),t("li",[t("code",[v._v("GET /distribution/{delegatorAddr}/withdrawAddress")]),v._v(": 查询收益取回地址")]),v._v(" "),t("li",[t("code",[v._v("POST /distribution/{delegatorAddr}/withdrawReward")]),v._v(": 取回收益")]),v._v(" "),t("li",[t("code",[v._v("GET /distribution/{delegatorAddr}/distrInfo/{validatorAddr}")]),v._v(": 查询某个委托的收益分配信息")]),v._v(" "),t("li",[t("code",[v._v("GET /distribution/{delegatorAddr}/distrInfos")]),v._v(": 查询委托人所有委托的收益分配信息")]),v._v(" "),t("li",[t("code",[v._v("GET /distribution/{validatorAddr}/valDistrInfo")]),v._v(": 查询验证人的收益分配信息")])])]),v._v(" "),t("li",[v._v("查询版本\n"),t("ol",[t("li",[t("code",[v._v("GET /version")]),v._v(": 获取 hashgardHUB 的版本")]),v._v(" "),t("li",[t("code",[v._v("GET /node_version")]),v._v(": 查询全节点版本")])])])]),v._v(" "),t("h2",{attrs:{id:"特殊参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特殊参数","aria-hidden":"true"}},[v._v("#")]),v._v(" 特殊参数")]),v._v(" "),t("p",[v._v("这些是从部分挑选出来的可用于构建和广播交易的 APIs：")]),v._v(" "),t("ol",[t("li",[t("code",[v._v("POST /bank/accounts/{address}/transfers")])]),v._v(" "),t("li",[t("code",[v._v("POST /stake/delegators/{delegatorAddr}/delegate")])]),v._v(" "),t("li",[t("code",[v._v("POST /stake/delegators/{delegatorAddr}/redelegate")])]),v._v(" "),t("li",[t("code",[v._v("POST /stake/delegators/{delegatorAddr}/unbond")])]),v._v(" "),t("li",[t("code",[v._v("POST /gov/proposal")])]),v._v(" "),t("li",[t("code",[v._v("POST /gov/proposals/{proposalId}/deposits")])]),v._v(" "),t("li",[t("code",[v._v("POST /gov/proposals/{proposalId}/votes")])]),v._v(" "),t("li",[t("code",[v._v("POST /slashing/validators/{validatorAddr}/unjail")])])]),v._v(" "),t("p",[v._v("上述的 API 都有三个特殊的查询参数，如上下表所示。默认情况下，它们的值都是 false。每个参数都有其唯一的优先级(这里"),t("code",[v._v("0")]),v._v("是最高优先级)。如果多个参数的值都是"),t("code",[v._v("true")]),v._v("，则将忽略优先级较低的。例如，如果"),t("code",[v._v("generate-only")]),v._v("为"),t("code",[v._v("true")]),v._v("，那么其他参数，例如"),t("code",[v._v("simulate")]),v._v("和"),t("code",[v._v("commit")]),v._v("将被忽略。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("参数名字")]),v._v(" "),t("th",[v._v("类型")]),v._v(" "),t("th",[v._v("默认值")]),v._v(" "),t("th",[v._v("优先级")]),v._v(" "),t("th",[v._v("功能描述")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("generate-only")]),v._v(" "),t("td",[v._v("bool")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("0")]),v._v(" "),t("td",[v._v("构建一个未签名的交易并返回")])]),v._v(" "),t("tr",[t("td",[v._v("simulate")]),v._v(" "),t("td",[v._v("bool")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("1")]),v._v(" "),t("td",[v._v("用仿真的方式去执行交易")])]),v._v(" "),t("tr",[t("td",[v._v("commit")]),v._v(" "),t("td",[v._v("bool")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("2")]),v._v(" "),t("td",[v._v("等待交易被打包入块")])]),v._v(" "),t("tr",[t("td",[v._v("async")]),v._v(" "),t("td",[v._v("bool")]),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("3")]),v._v(" "),t("td",[v._v("用异步地方式广播交易")])])])])])}],!1,null,null,null);_.default=a.exports}}]);