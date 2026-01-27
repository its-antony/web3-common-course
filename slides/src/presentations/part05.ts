import type { Presentation } from '@/types/slide'

export const part05: Presentation = {
  id: 'part05',
  title: '主流赛道与商业模式',
  partNumber: 5,
  slides: [
    // Part 标题页
    {
      id: '05-title',
      type: 'title',
      title: 'Part 5',
      subtitle: '主流赛道与商业模式',
    },

    // ==================== 5.1 DeFi 去中心化金融 ====================
    {
      id: '5.1-section',
      type: 'section',
      title: '5.1 DeFi：去中心化金融',
    },
    {
      id: '5.1-01',
      type: 'content',
      title: '什么是 DeFi',
      content: [
        {
          type: 'text',
          value: 'DeFi（Decentralized Finance）是建立在区块链上的金融服务生态系统',
        },
        {
          type: 'highlight',
          value: '核心理念：用代码（智能合约）取代传统金融中的中介机构',
        },
        {
          type: 'bullets',
          items: [
            '无需银行来存款',
            '无需券商来交易',
            '无需保险公司来投保',
            '口号："Bank the Unbanked"',
          ],
        },
      ],
    },
    {
      id: '5.1-02',
      type: 'comparison',
      title: 'DeFi vs 传统金融',
      content: [
        {
          type: 'table',
          headers: ['维度', '传统金融', 'DeFi'],
          rows: [
            ['准入门槛', '需要身份验证、开户审批', '无需许可，有钱包即可参与'],
            ['运营时间', '工作日、特定时段', '24/7 全天候运行'],
            ['资产托管', '机构托管你的资产', '用户自己掌控私钥'],
            ['透明度', '内部账本，外部不可见', '链上公开，任何人可审计'],
            ['结算速度', 'T+1 或更长', '分钟级甚至秒级'],
          ],
        },
      ],
    },
    {
      id: '5.1-03',
      type: 'content',
      title: 'DeFi 协议类型',
      content: [
        {
          type: 'table',
          headers: ['类型', '代表项目', '功能'],
          rows: [
            ['DEX 交易所', 'Uniswap、Curve', '无需注册即可交易代币'],
            ['借贷协议', 'Aave、Compound', '存款赚利息、超额抵押借款'],
            ['收益聚合器', 'Yearn、Convex', '自动寻找最优收益策略'],
            ['衍生品', 'dYdX、GMX', '永续合约、杠杆交易'],
          ],
        },
      ],
    },
    {
      id: '5.1-04',
      type: 'content',
      title: 'AMM 自动做市商',
      content: [
        {
          type: 'text',
          value: 'AMM 是 DEX 的核心机制，用算法替代传统订单簿：',
        },
        {
          type: 'bullets',
          items: [
            '流动性池：用户将代币对（如 ETH/USDC）存入池中',
            '恒定乘积公式：x * y = k',
            '价格由供需自动调整：买入越多，价格越高',
            '流动性提供者获得交易手续费分成',
          ],
        },
      ],
    },
    {
      id: '5.1-05',
      type: 'content',
      title: 'DeFi 的风险',
      content: [
        {
          type: 'table',
          headers: ['风险类型', '说明'],
          rows: [
            ['智能合约风险', '代码漏洞被黑客利用'],
            ['预言机风险', '价格数据被操纵'],
            ['无常损失', 'LP 提供流动性时的潜在损失'],
            ['监管风险', '政策变化导致协议受限'],
            ['经济模型风险', 'Token 激励失衡导致崩盘'],
          ],
        },
        {
          type: 'highlight',
          value: 'DeFi 的高收益往往意味着高风险',
        },
      ],
    },
    {
      id: '5.1-summary',
      type: 'summary',
      title: '5.1 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            'DeFi 用智能合约取代金融中介',
            '主要类型：DEX、借贷、收益聚合',
            'AMM 是去中心化交易的核心机制',
            '高收益往往意味着高风险',
          ],
        },
      ],
    },

    // ==================== 5.2 NFT 的价值来源与泡沫 ====================
    {
      id: '5.2-section',
      type: 'section',
      title: '5.2 NFT：价值来源与泡沫',
    },
    {
      id: '5.2-01',
      type: 'content',
      title: '什么是 NFT',
      content: [
        {
          type: 'text',
          value: 'NFT（Non-Fungible Token，非同质化代币）是区块链上独一无二、不可分割的数字资产凭证',
        },
        {
          type: 'table',
          headers: ['类型', '特点', '例子'],
          rows: [
            ['同质化代币', '每个代币都一样，可互相替换', 'BTC、ETH'],
            ['非同质化代币', '每个代币独特，不能互换', 'NFT 艺术品、域名'],
          ],
        },
        {
          type: 'highlight',
          value: 'NFT 就是区块链上的「数字产权证」',
        },
      ],
    },
    {
      id: '5.2-02',
      type: 'content',
      title: 'NFT 不只是「小图片」',
      content: [
        {
          type: 'bullets',
          items: [
            '数字艺术 — PFP/收藏品',
            '身份凭证 — 会员/门票',
            '游戏资产 — 道具/角色',
            '域名 — ENS/Unstoppable Domains',
            '金融凭证 — 债券/保险',
            '实物锚定 — 奢侈品/房产',
          ],
        },
      ],
    },
    {
      id: '5.2-03',
      type: 'content',
      title: 'NFT 的价值来源',
      content: [
        {
          type: 'table',
          headers: ['价值来源', '说明', '风险程度'],
          rows: [
            ['稀缺性', '限量发行，物以稀为贵', '中'],
            ['社区共识', '社区认可度越高价值越高', '高'],
            ['功能性', '有实际用途的 NFT 更有价值', '低'],
            ['艺术/文化价值', '艺术家声誉、文化意义', '高'],
            ['历史意义', '早期项目的收藏价值', '中'],
          ],
        },
      ],
    },
    {
      id: '5.2-04',
      type: 'content',
      title: 'NFT 的泡沫与风险',
      content: [
        {
          type: 'bullets',
          items: [
            '2022年1月 NFT 周交易量峰值约 170 亿美元',
            '2023年跌至约 1.5 亿美元，下跌超 99%',
            '大量 NFT 项目归零，流动性枯竭',
          ],
        },
        {
          type: 'table',
          headers: ['风险类型', '说明'],
          rows: [
            ['流动性风险', 'NFT 难以快速变现，可能有价无市'],
            ['项目方风险', '团队跑路、Rug Pull'],
            ['存储风险', '图片可能存储在中心化服务器'],
            ['版权问题', '持有 NFT ≠ 拥有版权'],
          ],
        },
      ],
    },
    {
      id: '5.2-summary',
      type: 'summary',
      title: '5.2 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            'NFT 是独一无二的数字资产凭证',
            'NFT 应用场景远超「小图片」',
            '功能性 NFT 价值相对稳定，收藏类风险高',
            '大多数 NFT 最终可能归零',
          ],
        },
      ],
    },

    // ==================== 5.3 GameFi 链游经济模型 ====================
    {
      id: '5.3-section',
      type: 'section',
      title: '5.3 GameFi：链游经济模型',
    },
    {
      id: '5.3-01',
      type: 'content',
      title: '什么是 GameFi',
      content: [
        {
          type: 'text',
          value: 'GameFi = Game + Finance，融合金融元素的区块链游戏',
        },
        {
          type: 'bullets',
          items: [
            '核心理念：Play-to-Earn（边玩边赚）',
            '游戏内资产以 NFT 形式存在，玩家真正拥有',
            '游戏内货币是可交易的加密货币',
            '玩家可以将游戏收益兑换成真实收入',
          ],
        },
      ],
    },
    {
      id: '5.3-02',
      type: 'content',
      title: '双代币模型',
      content: [
        {
          type: 'table',
          headers: ['代币类型', '特点', '例子'],
          rows: [
            ['治理代币', '总量有限，投资属性', 'AXS、GMT'],
            ['游戏代币', '总量无限，游戏内使用', 'SLP、GST'],
          ],
        },
        {
          type: 'highlight',
          value: '设计目的：将投资属性与游戏经济分离',
        },
      ],
    },
    {
      id: '5.3-03',
      type: 'content',
      title: '死亡螺旋',
      content: [
        {
          type: 'numbered',
          items: [
            '新玩家减少 → 代币需求下降',
            '代币价格下跌 → 游戏收益降低',
            '老玩家抛售离场 → 价格进一步下跌',
            '信心崩溃 → 项目崩盘',
          ],
        },
        {
          type: 'highlight',
          value: '当收益主要来自新玩家入场的资金时，一旦增速放缓，系统就会崩溃',
        },
      ],
    },
    {
      id: '5.3-04',
      type: 'content',
      title: 'Axie Infinity 兴衰',
      content: [
        {
          type: 'table',
          headers: ['阶段', '情况'],
          rows: [
            ['爆发期 2021年中', '日活超 200 万，菲律宾玩家涌入'],
            ['巅峰期 2021年底', 'SLP 价格高点 $0.4，月收入数百美元'],
            ['崩盘期 2022年', 'SLP 跌至 $0.003，跌幅超 99%'],
          ],
        },
        {
          type: 'bullets',
          items: [
            '崩盘原因：经济模型不可持续、游戏不好玩、依赖新用户',
          ],
        },
      ],
    },
    {
      id: '5.3-summary',
      type: 'summary',
      title: '5.3 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            'GameFi 是 Play-to-Earn 模式的实践',
            '双代币模型分离投资和游戏属性',
            '几乎所有爆火 GameFi 都经历了死亡螺旋',
            '当「赚钱」成为唯一目的，游戏就失去本质',
          ],
        },
      ],
    },

    // ==================== 5.4 SocialFi 与 DID ====================
    {
      id: '5.4-section',
      type: 'section',
      title: '5.4 SocialFi 与 DID',
    },
    {
      id: '5.4-01',
      type: 'content',
      title: '什么是 DID',
      content: [
        {
          type: 'text',
          value: 'DID（Decentralized Identifier）是不依赖中心化机构的身份识别方式',
        },
        {
          type: 'bullets',
          items: [
            '身份基于密码学（私钥）而非平台账号',
            '身份数据存储在区块链上',
            '用户可选择性地向不同应用披露信息',
          ],
        },
        {
          type: 'highlight',
          value: '传统账号是租来的房子，DID 是自己的房产',
        },
      ],
    },
    {
      id: '5.4-02',
      type: 'comparison',
      title: 'DID vs 传统账号',
      content: [
        {
          type: 'table',
          headers: ['维度', '传统账号', 'DID'],
          rows: [
            ['控制权', '平台控制', '用户自己控制'],
            ['可移植性', '无法迁移', '可跨平台使用'],
            ['数据所有权', '平台拥有', '你拥有自己的数据'],
            ['封号风险', '平台可随时封禁', '无法被任何人封禁'],
            ['变现能力', '收益归平台', '创作者直接获得收益'],
          ],
        },
      ],
    },
    {
      id: '5.4-03',
      type: 'content',
      title: 'DID 核心组件',
      content: [
        {
          type: 'bullets',
          items: [
            '钱包地址 — 最基础的链上身份',
            'ENS 域名 — 将地址映射为可读名称（如 vitalik.eth）',
            '链上声誉 — 交易历史、NFT 持有、DAO 参与',
            '可验证凭证 — 证明属性而不泄露全部信息',
          ],
        },
      ],
    },
    {
      id: '5.4-04',
      type: 'content',
      title: 'SocialFi 代表项目',
      content: [
        {
          type: 'table',
          headers: ['项目', '特点'],
          rows: [
            ['Lens Protocol', '社交图谱协议，用户拥有关注关系'],
            ['Farcaster', '去中心化社交网络，类似 Twitter'],
            ['Friend.tech', '社交代币化，可买卖与 KOL 的联系'],
          ],
        },
        {
          type: 'highlight',
          value: '如果换应用，你的粉丝、内容、关系都跟着走',
        },
      ],
    },
    {
      id: '5.4-summary',
      type: 'summary',
      title: '5.4 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            'DID 让用户从「平台的用户」变成「数据的主人」',
            'ENS 域名是重要的链上身份标识',
            'SocialFi 让创作者直接拥有数据和收益',
            '挑战：用户体验复杂、用户规模有限',
          ],
        },
      ],
    },

    // ==================== 5.5 RWA 现实世界资产上链 ====================
    {
      id: '5.5-section',
      type: 'section',
      title: '5.5 RWA：现实世界资产上链',
    },
    {
      id: '5.5-01',
      type: 'content',
      title: '什么是 RWA',
      content: [
        {
          type: 'text',
          value: 'RWA（Real World Assets）指将现实世界资产代币化后上链的资产',
        },
        {
          type: 'bullets',
          items: [
            '提高流动性 — 原本难以分割的资产可以 24/7 交易',
            '降低门槛 — 普通人可以小额投资原本无法触及的资产',
            '透明度 — 链上记录公开可查',
            '全球化 — 打破地域限制',
          ],
        },
      ],
    },
    {
      id: '5.5-02',
      type: 'content',
      title: 'RWA 核心概念',
      content: [
        {
          type: 'table',
          headers: ['概念', '说明'],
          rows: [
            ['代币化', '将资产所有权映射为链上代币'],
            ['托管', '由可信机构保管实物资产'],
            ['预言机', '将链下数据传递到链上'],
            ['储备证明(PoR)', '验证链下资产储备的真实性'],
          ],
        },
      ],
    },
    {
      id: '5.5-03',
      type: 'content',
      title: 'RWA 主要类型',
      content: [
        {
          type: 'table',
          headers: ['类型', '代表项目'],
          rows: [
            ['稳定币', 'USDT、USDC'],
            ['代币化国债', 'Ondo Finance、OpenEden'],
            ['代币化股权', 'Securitize、Polymath'],
            ['代币化房产', 'RealT、Lofty'],
            ['代币化商品', 'PAXG（黄金）'],
          ],
        },
        {
          type: 'highlight',
          value: '稳定币是最成功的 RWA',
        },
      ],
    },
    {
      id: '5.5-04',
      type: 'content',
      title: 'RWA 风险',
      content: [
        {
          type: 'table',
          headers: ['风险类型', '说明'],
          rows: [
            ['托管风险', '托管机构可能作恶、破产'],
            ['预言机风险', '数据传递可能出错或被操纵'],
            ['合规风险', '法律法规不确定'],
            ['赎回风险', '赎回机制可能不顺畅'],
          ],
        },
      ],
    },
    {
      id: '5.5-summary',
      type: 'summary',
      title: '5.5 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            'RWA 将现实资产代币化上链',
            '托管、预言机、储备证明是核心机制',
            'RWA 通常需要 KYC 合规',
            '托管风险是 RWA 的最大风险',
          ],
        },
      ],
    },

    // ==================== 5.6 DAO 去中心化自治组织 ====================
    {
      id: '5.6-section',
      type: 'section',
      title: '5.6 DAO：去中心化自治组织',
    },
    {
      id: '5.6-01',
      type: 'content',
      title: '什么是 DAO',
      content: [
        {
          type: 'text',
          value: 'DAO（Decentralized Autonomous Organization）是通过智能合约运行、由成员共同治理的组织形式',
        },
        {
          type: 'bullets',
          items: [
            '规则公开透明 — 写在智能合约里',
            '成员共同决策 — 通过代币投票',
            '资金共同管理 — 金库由智能合约控制',
            '没有层级结构 — 理论上成员平等',
          ],
        },
      ],
    },
    {
      id: '5.6-02',
      type: 'steps',
      title: 'DAO 治理流程',
      steps: [
        {
          title: '提案',
          description: '成员提出建议',
        },
        {
          title: '讨论',
          description: '社区论坛辩论',
        },
        {
          title: '投票',
          description: '代币持有者表决',
        },
        {
          title: '执行',
          description: '通过后实施提案',
        },
      ],
    },
    {
      id: '5.6-03',
      type: 'content',
      title: 'DAO 类型',
      content: [
        {
          type: 'table',
          headers: ['类型', '说明', '代表'],
          rows: [
            ['协议 DAO', '治理 DeFi 协议', 'MakerDAO、Uniswap'],
            ['投资 DAO', '集体投资项目', 'The LAO、BitDAO'],
            ['收藏 DAO', '集体收藏 NFT', 'PleasrDAO'],
            ['社交 DAO', '社区组织', 'FWB'],
            ['媒体 DAO', '去中心化媒体', 'Bankless DAO'],
          ],
        },
      ],
    },
    {
      id: '5.6-04',
      type: 'content',
      title: 'DAO 的挑战',
      content: [
        {
          type: 'bullets',
          items: [
            '治理参与度低 — 大多数代币持有者不投票',
            '巨鲸主导 — 少数大户控制投票结果',
            '效率问题 — 去中心化决策速度慢',
            '法律地位不明 — 大多数国家不承认 DAO 实体',
            '协调困难 — 没有负责人时谁推动执行',
          ],
        },
      ],
    },
    {
      id: '5.6-summary',
      type: 'summary',
      title: '5.6 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            'DAO 是成员共同治理的去中心化组织',
            '治理流程：提案 → 讨论 → 投票 → 执行',
            '完全去中心化的 DAO 很少，多是渐进式',
            '适合透明决策，不适合需要快速决策的场景',
          ],
        },
      ],
    },

    // ==================== 5.7 预测市场 Polymarket ====================
    {
      id: '5.7-section',
      type: 'section',
      title: '5.7 预测市场：Polymarket',
    },
    {
      id: '5.7-01',
      type: 'content',
      title: '什么是预测市场',
      content: [
        {
          type: 'text',
          value: '预测市场是允许人们对未来事件结果进行交易的市场，核心功能是用价格来表示概率',
        },
        {
          type: 'table',
          headers: ['代币价格', '意味着'],
          rows: [
            ['$0.30', '市场认为概率约 30%'],
            ['$0.60', '市场认为概率约 60%'],
            ['$0.95', '市场认为几乎确定会发生'],
          ],
        },
      ],
    },
    {
      id: '5.7-02',
      type: 'content',
      title: '为什么预测市场更准',
      content: [
        {
          type: 'bullets',
          items: [
            '真金白银的激励 — 参与者用钱投票，会认真研究',
            '信息聚合 — 汇集成千上万人的分散信息',
            '错误会被纠正 — 低估的上涨，高估的下跌',
            '实时调整 — 新信息出现后价格立即反应',
          ],
        },
        {
          type: 'highlight',
          value: '预测市场就像「用钱投票的民调」',
        },
      ],
    },
    {
      id: '5.7-03',
      type: 'comparison',
      title: 'Polymarket vs 传统博彩',
      content: [
        {
          type: 'table',
          headers: ['维度', '传统博彩', 'Polymarket'],
          rows: [
            ['资金托管', '平台托管，可能跑路', '智能合约托管'],
            ['赔率定价', '庄家设定', '市场供需决定'],
            ['透明度', '不透明', '所有交易链上可查'],
            ['结算', '依赖平台信誉', '自动结算，无需信任'],
          ],
        },
      ],
    },
    {
      id: '5.7-04',
      type: 'content',
      title: '2024 美国大选案例',
      content: [
        {
          type: 'bullets',
          items: [
            '大选相关交易量超过 30 亿美元',
            '单一「总统选举」市场超过 10 亿美元',
            'Polymarket 预测比传统民调更准确',
            '被《华尔街日报》、彭博社等主流媒体引用',
          ],
        },
      ],
    },
    {
      id: '5.7-summary',
      type: 'summary',
      title: '5.7 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            '预测市场用价格表示概率',
            '经济激励让预测更准确',
            'Polymarket 是最大的链上预测市场',
            '预测市场是「信息发现」工具',
          ],
        },
      ],
    },

    // ==================== 5.8 Meme 币现象 ====================
    {
      id: '5.8-section',
      type: 'section',
      title: '5.8 Meme 币现象解读',
    },
    {
      id: '5.8-01',
      type: 'content',
      title: '什么是 Meme 币',
      content: [
        {
          type: 'text',
          value: 'Meme 币是基于互联网迷因文化创建的加密货币',
        },
        {
          type: 'bullets',
          items: [
            '没有技术创新',
            '没有实际应用场景',
            '价值主要来自社区共识和文化认同',
          ],
        },
        {
          type: 'highlight',
          value: 'Meme 币的「价值」来自共识，不是来自技术或产品',
        },
      ],
    },
    {
      id: '5.8-02',
      type: 'content',
      title: 'Meme 币代表项目',
      content: [
        {
          type: 'table',
          headers: ['项目', '起源', '特点'],
          rows: [
            ['DOGE', '柴犬表情包', '最早的 Meme 币'],
            ['SHIB', '模仿 DOGE', '有 DEX 和 NFT'],
            ['PEPE', '悲伤蛙 Meme', '2023 年爆款'],
            ['WIF', '戴帽子的狗', 'Solana 生态代表'],
          ],
        },
      ],
    },
    {
      id: '5.8-03',
      type: 'content',
      title: 'Meme 币驱动因素',
      content: [
        {
          type: 'bullets',
          items: [
            '文化认同 — 社区归属感、对抗传统金融',
            '名人效应 — 马斯克一条推文可让价格暴涨',
            '「便宜」的心理错觉 — 低价格不等于低市值',
            'FOMO 情绪 — 暴富故事制造恐惧错过心理',
          ],
        },
      ],
    },
    {
      id: '5.8-04',
      type: 'content',
      title: 'Meme 币风险',
      content: [
        {
          type: 'table',
          headers: ['风险类型', '严重程度'],
          rows: [
            ['无价值支撑', '极高'],
            ['极端波动', '极高'],
            ['Rug Pull（跑路）', '极高'],
            ['流动性风险', '高'],
            ['信息不对称', '高'],
          ],
        },
        {
          type: 'highlight',
          value: '绝大多数 Meme 币最终会归零',
        },
      ],
    },
    {
      id: '5.8-summary',
      type: 'summary',
      title: '5.8 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            'Meme 币价值来自社区共识，不是技术',
            '名人效应和 FOMO 是主要驱动力',
            'Meme 币更接近「买彩票」而非「投资」',
            '只用完全能承受损失的资金参与',
          ],
        },
      ],
    },

    // ==================== 5.9 AI 与 Crypto 融合 ====================
    {
      id: '5.9-section',
      type: 'section',
      title: '5.9 AI + Crypto：融合趋势',
    },
    {
      id: '5.9-01',
      type: 'content',
      title: '为什么 AI 和 Crypto 会融合',
      content: [
        {
          type: 'table',
          headers: ['AI 的痛点', 'Crypto 能提供'],
          rows: [
            ['算力被巨头垄断', '去中心化算力网络'],
            ['数据被平台垄断', '去中心化数据市场'],
            ['AI 难以管理资金', '智能合约 + 钱包'],
          ],
        },
        {
          type: 'table',
          headers: ['Crypto 的痛点', 'AI 能提供'],
          rows: [
            ['链上操作复杂', 'AI 助手简化交互'],
            ['需要 24/7 监控', 'AI 自动化执行'],
          ],
        },
      ],
    },
    {
      id: '5.9-02',
      type: 'content',
      title: '三大融合方向',
      content: [
        {
          type: 'numbered',
          items: [
            'AI Agent — 能拥有钱包、自主执行交易的 AI',
            '去中心化算力 — 聚合全球 GPU 资源（Render、Akash）',
            '数据市场 — 去中心化数据交易（Ocean Protocol）',
          ],
        },
      ],
    },
    {
      id: '5.9-03',
      type: 'content',
      title: '真需求 vs 炒作',
      content: [
        {
          type: 'table',
          headers: ['领域', '真需求', '炒作'],
          rows: [
            ['去中心化算力', '能聚合资源降低成本', '能否真正与 AWS 竞争存疑'],
            ['AI Agent', '自动化有应用场景', '大多只是概念无产品'],
            ['数据市场', '数据确权有价值', '隐私计算技术不成熟'],
          ],
        },
        {
          type: 'highlight',
          value: '有真实产品和使用量才是真需求',
        },
      ],
    },
    {
      id: '5.9-summary',
      type: 'summary',
      title: '5.9 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            'AI + Crypto 三大方向：Agent、算力、数据',
            '去中心化算力是最有落地基础的方向',
            '这个领域炒作成分很高',
            '关注有实际产品的项目而非概念',
          ],
        },
      ],
    },

    // ==================== 5.10 已验证失败的模式 ====================
    {
      id: '5.10-section',
      type: 'section',
      title: '5.10 已验证失败的模式',
    },
    {
      id: '5.10-01',
      type: 'quote',
      title: '学习失败的价值',
      content: [
        {
          type: 'text',
          value: '在 Web3 世界，不亏钱比赚钱更重要',
        },
      ],
    },
    {
      id: '5.10-02',
      type: 'content',
      title: '六大失败模式',
      content: [
        {
          type: 'numbered',
          items: [
            '庞氏/资金盘 — 收益来自后来者本金',
            '算法稳定币 — Luna/UST 式崩溃',
            '交易所暴雷 — FTX、Mt.Gox',
            '无实际需求 — 只有叙事没有产品',
            '经济模型缺陷 — GameFi 死亡螺旋',
            '安全漏洞 — 智能合约被黑',
          ],
        },
      ],
    },
    {
      id: '5.10-03',
      type: 'content',
      title: 'Luna/UST 崩盘',
      content: [
        {
          type: 'table',
          headers: ['日期', '事件'],
          rows: [
            ['2022.5.7', '大规模抛售，UST 开始脱锚'],
            ['2022.5.9', 'UST 跌至 $0.60，LUNA 暴跌'],
            ['2022.5.11', '死亡螺旋，LUNA 供给暴增至 6.5 万亿'],
            ['2022.5.13', 'LUNA 从 $80 归零'],
          ],
        },
        {
          type: 'highlight',
          value: '损失约 600 亿美元市值蒸发',
        },
      ],
    },
    {
      id: '5.10-04',
      type: 'content',
      title: 'FTX 暴雷',
      content: [
        {
          type: 'bullets',
          items: [
            '曾是全球第二大交易所，估值 320 亿美元',
            '挪用客户资金给关联公司 Alameda',
            '高杠杆交易亏损巨大',
            '2022.11.11 申请破产，客户损失约 80 亿美元',
          ],
        },
        {
          type: 'highlight',
          value: '教训：中心化平台存在巨大对手方风险',
        },
      ],
    },
    {
      id: '5.10-05',
      type: 'content',
      title: '识别风险检查清单',
      content: [
        {
          type: 'table',
          headers: ['问题', '警示信号'],
          rows: [
            ['收益从哪里来？', '答不清楚或「新用户入场」'],
            ['团队是谁？', '匿名且无过往记录'],
            ['有真实产品吗？', '只有白皮书和路线图'],
            ['代币分布如何？', '高度集中在少数地址'],
            ['能随时提款吗？', '设置障碍或锁定期'],
          ],
        },
      ],
    },
    {
      id: '5.10-summary',
      type: 'summary',
      title: '5.10 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            '学习失败模式比追逐成功更重要',
            '庞氏结构、算法稳定币、交易所暴雷是常见模式',
            '永远问「钱从哪里来」',
            '2 个以上警示信号就要格外谨慎',
          ],
        },
      ],
    },

    // Part 5 结束页
    {
      id: '05-end',
      type: 'title',
      title: 'Part 5 完成',
      subtitle: '下一章：收益风险与结构性陷阱',
    },
  ],
}
