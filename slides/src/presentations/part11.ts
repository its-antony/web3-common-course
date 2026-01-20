import type { Presentation } from '@/types/slide'

export const part11: Presentation = {
  id: 'part11',
  title: '资源导航与延伸学习',
  partNumber: 11,
  slides: [
    // Part 11 标题页
    {
      id: '11-title',
      type: 'title',
      title: 'Part 11',
      subtitle: '资源导航与延伸学习',
    },

    // ===== 11.1 信息源与研究平台导航 =====
    {
      id: '11.1-section',
      type: 'section',
      title: '11.1 信息源与研究平台导航',
    },
    {
      id: '11.1-01',
      type: 'content',
      title: '为什么信息获取能力如此重要',
      content: [
        {
          type: 'bullets',
          items: [
            '没有统一的信息披露制度',
            '项目更新首先在社交媒体发布',
            '早期信息获取者能获得更多机会',
            '同时充斥大量噪音和虚假信息',
          ],
        },
        {
          type: 'highlight',
          variant: 'info',
          text: 'DYOR（Do Your Own Research）不是空话，依赖他人判断往往是亏损的开始',
        },
      ],
    },
    {
      id: '11.1-02',
      type: 'content',
      title: 'Twitter/X：Web3 的「公共广场」',
      content: [
        {
          type: 'bullets',
          items: [
            '项目官方首发渠道：重大更新、空投、合作公告',
            '创始人直接沟通：Vitalik、CZ 等大佬直接发推',
            '实时市场情绪：比任何指标都快的风向标',
            '社区讨论中心：技术讨论、观点交锋',
          ],
        },
      ],
    },
    {
      id: '11.1-03',
      type: 'content',
      title: '推荐关注账号分类',
      content: [
        {
          type: 'table',
          headers: ['类型', '关注理由', '示例'],
          rows: [
            ['项目官方', '第一时间获取更新', '@ethereum, @solana, @base'],
            ['创始人/团队', '了解项目思考和方向', '@VitalikButerin'],
            ['研究员/KOL', '专业分析和市场观点', '@DegenSpartan'],
            ['媒体机构', '新闻快讯和深度报道', '@TheBlock__, @Bankless'],
            ['数据账号', '链上数据和市场指标', '@lookonchain, @DefiLlama'],
          ],
        },
      ],
    },
    {
      id: '11.1-04',
      type: 'content',
      title: '高效使用 Twitter/X 的技巧',
      content: [
        {
          type: 'numbered',
          items: [
            '使用列表（Lists）功能，按时间线显示不被算法干扰',
            '善用搜索：from:账号 查看特定账号，$ETH 查看代币讨论',
            '识别可信账号：关注者质量、账号创建时间',
            '警惕陷阱：假冒官方、付费推广、FOMO 帖子',
          ],
        },
      ],
    },
    {
      id: '11.1-05',
      type: 'content',
      title: 'Discord：项目社区的核心阵地',
      content: [
        {
          type: 'table',
          headers: ['应该做的', '不应该做的'],
          rows: [
            ['阅读频道规则和 FAQ', '点击私信中的链接'],
            ['从 #announcements 开始', '透露私钥或助记词'],
            ['积极参与有价值的讨论', '相信「官方人员」主动私聊'],
            ['验证管理员身份再交流', '参与刷屏或垃圾信息'],
          ],
        },
        {
          type: 'highlight',
          variant: 'warning',
          text: 'Discord 是诈骗高发区，官方人员不会主动私聊索要任何信息',
        },
      ],
    },
    {
      id: '11.1-06',
      type: 'content',
      title: 'Telegram 与中英文媒体',
      content: [
        {
          type: 'table',
          headers: ['平台', '特点', '推荐'],
          rows: [
            ['Telegram', '即时性强、快讯推送', 'The Block, Wu Blockchain, 深潮'],
            ['英文媒体', '信息更快、更深入', 'The Block, Decrypt, Bankless'],
            ['中文媒体', '贴近本土视角', '深潮, Foresight News, 律动'],
          ],
        },
        {
          type: 'text',
          content: '建议中英文媒体都关注，互相补充',
        },
      ],
    },
    {
      id: '11.1-07',
      type: 'content',
      title: '信息可信度分级',
      content: [
        {
          type: 'table',
          headers: ['级别', '来源', '建议'],
          rows: [
            ['S 级', '官方文档/公告、白皮书', '优先采信'],
            ['A 级', '知名媒体深度、经验证 KOL', '推荐采信'],
            ['B 级', '一般媒体、社区热帖', '参考使用'],
            ['C 级', '个人博客、未验证消息', '谨慎对待'],
            ['D 级', '营销软文、来源不明', '不建议采信'],
          ],
        },
      ],
    },
    {
      id: '11.1-08',
      type: 'content',
      title: '信息验证清单',
      content: [
        {
          type: 'bullets',
          items: [
            '信息来源是否可靠？',
            '能否找到多个独立来源验证？',
            '发布者是否有利益冲突？',
            '信息是否过于「确定」？（真实信息通常有不确定性）',
            '时间戳是否合理？',
          ],
        },
      ],
    },
    {
      id: '11.1-summary',
      type: 'summary',
      title: '11.1 本节要点',
      items: [
        'Twitter/X 是 Web3 最重要的信息平台',
        'Discord 用于深度社区参与，但需警惕诈骗',
        '建立信息可信度分级体系',
        '交叉验证，不轻信单一来源',
      ],
    },

    // ===== 11.2 数据工具与浏览器使用指引 =====
    {
      id: '11.2-section',
      type: 'section',
      title: '11.2 数据工具与浏览器使用指引',
    },
    {
      id: '11.2-01',
      type: 'content',
      title: '为什么需要数据工具',
      content: [
        {
          type: 'bullets',
          items: [
            '验证交易：确认转账是否成功',
            '研究项目：分析协议数据和趋势',
            '追踪资金：观察大户动向和资金流',
            '发现机会：识别早期项目和趋势',
          ],
        },
        {
          type: 'highlight',
          variant: 'tip',
          text: '这些工具是「链上侦探」的必备装备',
        },
      ],
    },
    {
      id: '11.2-02',
      type: 'content',
      title: '主流区块浏览器',
      content: [
        {
          type: 'table',
          headers: ['公链', '浏览器', '网址'],
          rows: [
            ['Ethereum', 'Etherscan', 'etherscan.io'],
            ['Solana', 'Solscan', 'solscan.io'],
            ['BNB Chain', 'BscScan', 'bscscan.com'],
            ['Arbitrum', 'Arbiscan', 'arbiscan.io'],
            ['Base', 'Basescan', 'basescan.org'],
            ['Polygon', 'Polygonscan', 'polygonscan.com'],
          ],
        },
        {
          type: 'text',
          content: '大部分 EVM 兼容链的浏览器界面类似 Etherscan',
        },
      ],
    },
    {
      id: '11.2-03',
      type: 'content',
      title: '区块浏览器核心功能',
      content: [
        {
          type: 'table',
          headers: ['功能', '查看内容', '使用场景'],
          rows: [
            ['查询地址', '余额、持仓、交易历史', '确认收款、追踪地址'],
            ['查询交易', '状态、Gas 消耗、详情', '验证转账是否成功'],
            ['查询合约', '代码、交互记录、验证状态', '检查合约安全性'],
            ['查询代币', '信息、持有人分布', '研究代币分布'],
          ],
        },
      ],
    },
    {
      id: '11.2-04',
      type: 'steps',
      title: 'Etherscan 使用场景',
      steps: [
        {
          title: '查询钱包地址',
          description: '输入地址，查看 Balance、Token、Transactions',
        },
        {
          title: '验证交易状态',
          description: '输入 Txn Hash，查看 Status、Block、From/To、Value',
        },
        {
          title: '查看智能合约',
          description: '点击 Contract，查看是否 Verified、Source Code',
        },
      ],
    },
    {
      id: '11.2-05',
      type: 'content',
      title: 'DeFi 数据平台',
      content: [
        {
          type: 'table',
          headers: ['平台', '特点', '核心功能'],
          rows: [
            ['DefiLlama', 'TVL 数据权威', 'TVL 排名、收益率、DEX 交易量'],
            ['Dune Analytics', 'SQL 数据分析', '自定义查询、社区仪表板'],
            ['Token Terminal', '协议财务分析', 'Revenue、Fees、P/F Ratio'],
          ],
        },
      ],
    },
    {
      id: '11.2-06',
      type: 'content',
      title: '钱包追踪工具',
      content: [
        {
          type: 'table',
          headers: ['工具', '特点', '费用'],
          rows: [
            ['DeBank', '免费多链钱包追踪', '免费'],
            ['Nansen', '智能标签、聪明钱追踪', '付费 $150+/月'],
            ['Arkham', '地址身份识别、资金追踪', '部分免费'],
          ],
        },
        {
          type: 'highlight',
          variant: 'info',
          text: '新手免费组合：Etherscan + DefiLlama + DeBank 可满足 90% 需求',
        },
      ],
    },
    {
      id: '11.2-summary',
      type: 'summary',
      title: '11.2 本节要点',
      items: [
        '区块浏览器是查询链上数据的基础工具',
        'DefiLlama 是 DeFi 数据权威来源',
        'DeBank 是免费的多链钱包追踪工具',
        '学会使用这些工具，拥有独立验证能力',
      ],
    },

    // ===== 11.3 推荐学习资料清单 =====
    {
      id: '11.3-section',
      type: 'section',
      title: '11.3 推荐学习资料清单',
    },
    {
      id: '11.3-01',
      type: 'content',
      title: '如何使用这份清单',
      content: [
        {
          type: 'numbered',
          items: [
            '入门阶段：先看入门教程，建立基础认知',
            '进阶阶段：阅读白皮书和研究报告，深入理解',
            '专业阶段：学习技术文档，掌握细节',
          ],
        },
        {
          type: 'highlight',
          variant: 'tip',
          text: '不要试图一次读完所有资料，选择 2-3 个开始，循序渐进',
        },
      ],
    },
    {
      id: '11.3-02',
      type: 'content',
      title: '经典白皮书（必读）',
      content: [
        {
          type: 'table',
          headers: ['资料', '作者', '说明'],
          rows: [
            ['⭐ 比特币白皮书', 'Satoshi Nakamoto', '区块链起源，9 页经典'],
            ['⭐ 以太坊白皮书', 'Vitalik Buterin', '智能合约平台开创者'],
            ['Uniswap V2/V3 白皮书', 'Uniswap', 'AMM 机制经典'],
            ['Aave/Compound 白皮书', '各协议', 'DeFi 借贷基础'],
          ],
        },
      ],
    },
    {
      id: '11.3-03',
      type: 'content',
      title: '入门教程平台',
      content: [
        {
          type: 'table',
          headers: ['平台', '特点', '适合人群'],
          rows: [
            ['Binance Academy', '最全面的中英文教程', '所有人'],
            ['Coinbase Learn', '入门友好、语言简洁', '完全新手'],
            ['Ethereum.org Learn', '以太坊官方、权威准确', '所有人'],
            ['a16z Crypto Startup School', '顶级 VC 视角、视频课程', '有创业想法者'],
          ],
        },
      ],
    },
    {
      id: '11.3-04',
      type: 'content',
      title: '年度必读报告',
      content: [
        {
          type: 'table',
          headers: ['报告', '机构', '说明'],
          rows: [
            ['⭐ Messari Crypto Theses', 'Messari', '最全面的年度展望'],
            ['⭐ State of Crypto', 'a16z', '数据驱动的行业报告'],
            ['Developer Report', 'Electric Capital', '开发者生态分析'],
            ['Galaxy Research', 'Galaxy Digital', '机构级深度研究'],
          ],
        },
      ],
    },
    {
      id: '11.3-05',
      type: 'content',
      title: '视频与播客推荐',
      content: [
        {
          type: 'table',
          headers: ['频道/播客', '类型', '特点'],
          rows: [
            ['⭐ Finematics', 'YouTube', 'DeFi 动画讲解'],
            ['⭐ Whiteboard Crypto', 'YouTube', '概念白板讲解'],
            ['Bankless', 'YouTube + 播客', 'DeFi 深度内容'],
            ['Coin Bureau', 'YouTube', '项目分析'],
          ],
        },
      ],
    },
    {
      id: '11.3-06',
      type: 'content',
      title: '书籍推荐',
      content: [
        {
          type: 'table',
          headers: ['书名', '类型', '说明'],
          rows: [
            ['⭐ 精通比特币', '技术', '比特币技术圣经'],
            ['⭐ 精通以太坊', '技术', '以太坊开发必读'],
            ['The Infinite Machine', '故事', '以太坊创业故事'],
            ['The Bitcoin Standard', '理论', '比特币货币理论'],
          ],
        },
      ],
    },
    {
      id: '11.3-07',
      type: 'content',
      title: '技术学习资源',
      content: [
        {
          type: 'table',
          headers: ['资源', '类型', '说明'],
          rows: [
            ['⭐ CryptoZombies', '互动教程', '游戏化学 Solidity'],
            ['Solidity by Example', '代码示例', '实用代码片段'],
            ['Alchemy University', '系统课程', '完整 Web3 开发'],
            ['LearnWeb3', '分级课程', '免费学习路径'],
          ],
        },
      ],
    },
    {
      id: '11.3-summary',
      type: 'summary',
      title: '11.3 本节要点',
      items: [
        '必读经典：比特币白皮书、以太坊白皮书',
        '入门平台：Binance Academy、Coinbase Learn',
        '年度报告：Messari Crypto Theses、a16z State of Crypto',
        '技术学习：CryptoZombies、Alchemy University',
      ],
    },

    // ===== 11.4 不同方向的进阶学习路线图 =====
    {
      id: '11.4-section',
      type: 'section',
      title: '11.4 不同方向的进阶学习路线图',
    },
    {
      id: '11.4-01',
      type: 'content',
      title: '选择你的方向',
      content: [
        {
          type: 'bullets',
          items: [
            '投资研究：分析师、研究员',
            '技术开发：智能合约、DApp、基础设施',
            '运营增长：社区运营、市场、BD',
            '内容创作：KOL、媒体人、研究员',
            '创业：创始人、产品经理',
          ],
        },
        {
          type: 'highlight',
          variant: 'info',
          text: '不必现在就确定唯一方向，可以先探索 1-2 个感兴趣的领域',
        },
      ],
    },
    {
      id: '11.4-02',
      type: 'content',
      title: '投资研究方向',
      content: [
        {
          type: 'table',
          headers: ['阶段', '目标', '学习内容'],
          rows: [
            ['基础', '建立分析框架', '代币经济学、项目评估框架'],
            ['进阶', '掌握分析工具', 'Dune、DefiLlama、链上分析'],
            ['实战', '输出研报', '研报写作、模型构建'],
            ['深入', '建立影响力', 'Twitter/Mirror 输出'],
          ],
        },
        {
          type: 'text',
          content: '职业出口：加密基金研究员、独立分析师、投资顾问',
        },
      ],
    },
    {
      id: '11.4-03',
      type: 'content',
      title: '技术开发方向',
      content: [
        {
          type: 'table',
          headers: ['路线', '技能栈', '职业出口'],
          rows: [
            ['智能合约', 'Solidity → 合约安全 → DeFi 协议', '合约开发、安全审计'],
            ['前端 DApp', 'React → wagmi/viem → 钱包集成', '全栈 DApp 开发'],
            ['后端基础设施', '节点运维 → 索引服务 → API', '基础设施专家'],
          ],
        },
      ],
    },
    {
      id: '11.4-04',
      type: 'steps',
      title: '智能合约开发路线',
      steps: [
        {
          title: '入门',
          description: 'CryptoZombies 学习 Solidity 基础',
        },
        {
          title: '基础',
          description: 'ERC20/721 标准、Solidity by Example',
        },
        {
          title: '进阶',
          description: '阅读 Uniswap/Aave 源码',
        },
        {
          title: '安全',
          description: 'Damn Vulnerable DeFi、安全审计',
        },
        {
          title: '实战',
          description: 'Foundry/Hardhat 部署真实项目',
        },
      ],
    },
    {
      id: '11.4-05',
      type: 'content',
      title: '运营增长方向',
      content: [
        {
          type: 'table',
          headers: ['阶段', '目标', '实践方式'],
          rows: [
            ['体验', '了解社区运作', '活跃参与 3-5 个社区'],
            ['实践', '获得运营经验', '申请项目志愿者岗位'],
            ['进阶', '独立运营能力', '运营小型社区/项目'],
            ['专业', '团队管理', '加入项目核心团队'],
          ],
        },
        {
          type: 'text',
          content: '职业出口：社区经理、增长负责人、BD、市场总监',
        },
      ],
    },
    {
      id: '11.4-06',
      type: 'content',
      title: '内容创作方向',
      content: [
        {
          type: 'table',
          headers: ['形式', '平台', '特点'],
          rows: [
            ['推文/Thread', 'Twitter', '短平快、传播广'],
            ['长文', 'Mirror/公众号', '深度、沉淀'],
            ['视频', 'YouTube/B站', '直观、粉丝粘性'],
            ['播客', '小宇宙等', '陪伴感、深度访谈'],
          ],
        },
        {
          type: 'highlight',
          variant: 'tip',
          text: '每周 1-2 篇持续输出，坚持 3-6 个月建立影响力',
        },
      ],
    },
    {
      id: '11.4-07',
      type: 'content',
      title: '创业方向',
      content: [
        {
          type: 'table',
          headers: ['阶段', '重点', '行动'],
          rows: [
            ['探索期', '找到问题', '深度使用产品、发现痛点'],
            ['验证期', '验证需求', 'MVP 测试、用户访谈'],
            ['启动期', '组建团队', '找联创、搭建核心团队'],
            ['融资期', '获取资源', '种子轮融资、Grant 申请'],
          ],
        },
      ],
    },
    {
      id: '11.4-08',
      type: 'comparison',
      title: '根据背景选择方向',
      leftTitle: '技术背景',
      leftItems: [
        '金融/投资 → 投资研究',
        '程序员/CS → 技术开发',
        '媒体/内容 → 内容创作',
      ],
      rightTitle: '非技术背景',
      rightItems: [
        '市场/运营 → 运营增长',
        '创业经历 → 创业',
        '无特定背景 → 内容或社区运营',
      ],
    },
    {
      id: '11.4-09',
      type: 'content',
      title: '通用建议',
      content: [
        {
          type: 'numbered',
          items: [
            '先做，再优化：不要等到「准备好了」才开始',
            '建立作品集：有可展示的成果比简历更重要',
            '加入社区：在圈内建立人脉',
            '保持学习：Web3 变化快，持续学习是必须的',
            '小步试错：先兼职尝试，验证后再全职投入',
          ],
        },
      ],
    },
    {
      id: '11.4-summary',
      type: 'summary',
      title: '11.4 本节要点',
      items: [
        '五大方向：投资研究、技术开发、运营增长、内容创作、创业',
        '根据背景和目标选择适合的方向',
        '边学边做比纯学习更有效',
        '建立作品集和人脉是关键',
      ],
    },

    // Part 11 结束页
    {
      id: '11-end',
      type: 'title',
      title: '课程完成',
      subtitle: '恭喜你完成 Web3 通识课！',
    },
    {
      id: '11-final',
      type: 'quote',
      quote: '通识是起点，不是终点。选择你的方向，开始新的旅程。',
      attribution: 'Web3 通识课',
    },
  ],
}
