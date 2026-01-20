import type { Presentation } from '@/types/slide'

export const part08: Presentation = {
  id: 'part08',
  title: '行业角色与岗位全景',
  partNumber: 8,
  slides: [
    // Part 8 标题页
    {
      id: '08-title',
      type: 'title',
      title: 'Part 8',
      subtitle: '行业角色与岗位全景',
    },

    // 8.1 Web3 世界里都有哪些角色
    {
      id: '8.1-section',
      type: 'section',
      title: '8.1 Web3 世界里都有哪些角色',
    },
    {
      id: '8.1-01',
      type: 'content',
      title: 'Web3 生态角色五大类',
      content: [
        {
          type: 'table',
          headers: ['角色类别', '核心功能', '典型特征'],
          rows: [
            ['项目方/团队', '构建产品和协议', '创造价值、承担最大风险'],
            ['投资方', '提供资金和资源', '追求回报、影响项目方向'],
            ['服务方', '提供专业服务', '赋能生态、建立影响力'],
            ['用户群体', '使用产品和协议', '最广泛、需求多样'],
            ['基础设施', '维护网络运行', '技术门槛高、收益稳定'],
          ],
        },
      ],
    },
    {
      id: '8.1-02',
      type: 'content',
      title: '项目方/团队角色',
      content: [
        {
          type: 'bullets',
          items: [
            '创始人（Founder）— 确定愿景和战略方向、融资、团队搭建',
            '开发者（Developer）— 将想法变成可运行的代码',
            '运营与市场 — 用户增长、品牌建设、空投激励设计',
            'BD（商务拓展）— 建立合作关系、交易所上币',
            '社区管理 — 管理 Discord/Telegram，连接项目与用户',
          ],
        },
      ],
    },
    {
      id: '8.1-03',
      type: 'content',
      title: '开发者岗位类型',
      content: [
        {
          type: 'table',
          headers: ['岗位', '职责', '技术栈示例'],
          rows: [
            ['智能合约开发', '编写链上逻辑', 'Solidity, Rust, Move'],
            ['前端开发', '构建用户界面', 'React, Web3.js, ethers.js'],
            ['后端开发', '服务端逻辑、索引', 'Node.js, Go, The Graph'],
            ['协议/底层开发', '开发区块链底层', 'Rust, Go, C++'],
          ],
        },
      ],
    },
    {
      id: '8.1-04',
      type: 'content',
      title: '投资方角色',
      content: [
        {
          type: 'bullets',
          items: [
            'VC（风险投资）— 提供大额资金、行业资源和战略指导',
            '天使投资人 — 最早期介入，投资金额小但风险最高',
            '做市商（Market Maker）— 为代币提供流动性，减少价格波动',
          ],
        },
        {
          type: 'text',
          content: '知名 Web3 VC：a16z、Paradigm、Polychain、Binance Labs',
        },
        {
          type: 'highlight',
          variant: 'warning',
          content: 'VC 的代币成本远低于散户，他们解锁时可能会卖出',
        },
      ],
    },
    {
      id: '8.1-05',
      type: 'content',
      title: '服务方角色',
      content: [
        {
          type: 'table',
          headers: ['类型', '代表', '注意事项'],
          rows: [
            ['媒体', 'The Block, CoinDesk, 律动', '区分新闻报道和软文'],
            ['研究员/分析师', 'Messari, VC 内部研究团队', '产出项目分析、投资建议'],
            ['KOL', '技术型、分析型、喊单型', '推荐可能有利益冲突，需要 DYOR'],
            ['安全审计', 'CertiK, Trail of Bits', '审计过不代表 100% 安全'],
          ],
        },
      ],
    },
    {
      id: '8.1-06',
      type: 'content',
      title: '用户角色',
      content: [
        {
          type: 'bullets',
          items: [
            '交易者（Trader）— 长期持有者、波段交易者、量化交易者',
            '开发者用户 — 使用 Web3 基础设施构建应用',
            '撸毛党（Airdrop Hunter）— 参与项目交互期待空投',
            'NFT 收藏者 — 购买、持有和交易 NFT',
          ],
        },
        {
          type: 'highlight',
          variant: 'info',
          content: '撸毛是"付出不一定有回报"的活动，建议新手不要把它作为主要目标',
        },
      ],
    },
    {
      id: '8.1-07',
      type: 'content',
      title: '基础设施角色',
      content: [
        {
          type: 'table',
          headers: ['共识机制', '角色名称', '代表网络', '参与门槛'],
          rows: [
            ['PoW', '矿工', '比特币', '硬件成本高，需要矿机'],
            ['PoS', '验证者', '以太坊', '需质押资产（ETH 需 32 个）'],
            ['DPoS', '验证者/代理', 'Solana', '需获得社区投票支持'],
          ],
        },
        {
          type: 'text',
          content: '节点服务提供商：Infura、Alchemy、QuickNode',
        },
      ],
    },
    {
      id: '8.1-summary',
      type: 'summary',
      title: '8.1 本节要点',
      items: [
        'Web3 生态五大角色：项目方、投资方、服务方、用户、基础设施',
        '项目方是建设者，投资方提供资金，服务方赋能生态',
        'KOL 推荐需警惕利益冲突，永远 DYOR',
        '理解这些角色，才能找到自己在 Web3 中的位置',
      ],
    },

    // 8.2 技术岗与非技术岗的真实差异
    {
      id: '8.2-section',
      type: 'section',
      title: '8.2 技术岗与非技术岗的真实差异',
    },
    {
      id: '8.2-01',
      type: 'content',
      title: '技术岗位分类',
      content: [
        {
          type: 'numbered',
          items: [
            '智能合约开发 — Solidity/Rust，Web3 最核心技术岗',
            '前端开发 — React + ethers.js，构建 DApp 界面',
            '后端开发 — 链下服务、API、数据索引',
            '安全工程师 — 薪资天花板最高，负责审计和漏洞挖掘',
          ],
        },
      ],
    },
    {
      id: '8.2-02',
      type: 'content',
      title: '非技术岗位分类',
      content: [
        {
          type: 'bullets',
          items: [
            '运营 — 产品运营、活动运营、用户增长',
            '市场营销 — 内容营销、品牌营销、增长营销',
            'BD（商务拓展）— 建立合作关系，核心竞争力是人脉',
            '社区管理 — 7x24 响应，管理 Discord/Telegram',
            '研究员 — 行业研究、投资研究、链上分析',
          ],
        },
      ],
    },
    {
      id: '8.2-03',
      type: 'content',
      title: '技术岗薪资范围（2024 年）',
      content: [
        {
          type: 'table',
          headers: ['岗位', '初级 (0-2年)', '中级 (2-5年)', '高级 (5年+)'],
          rows: [
            ['智能合约开发', '$80K-$120K', '$120K-$200K', '$200K-$350K'],
            ['前端开发', '$60K-$100K', '$100K-$160K', '$160K-$250K'],
            ['安全工程师', '$100K-$150K', '$150K-$250K', '$250K-$500K+'],
          ],
        },
        {
          type: 'text',
          content: '数据来源：web3.career, Immunefi',
        },
      ],
    },
    {
      id: '8.2-04',
      type: 'content',
      title: '非技术岗薪资范围（2024 年）',
      content: [
        {
          type: 'table',
          headers: ['岗位', '初级 (0-2年)', '中级 (2-5年)', '高级 (5年+)'],
          rows: [
            ['社区管理', '$40K-$70K', '$70K-$100K', '$100K-$150K'],
            ['BD', '$60K-$100K', '$100K-$160K', '$160K-$250K+'],
            ['研究员', '$60K-$100K', '$100K-$150K', '$150K-$250K'],
          ],
        },
        {
          type: 'highlight',
          variant: 'info',
          content: '薪资通常包含 Token 激励，实际收入波动较大；熊市期间薪资普遍下调 20%-40%',
        },
      ],
    },
    {
      id: '8.2-05',
      type: 'comparison',
      title: '技术岗 vs 非技术岗',
      leftTitle: '技术岗',
      leftItems: [
        '薪资天花板更高',
        '更稳定的需求',
        '技能壁垒明显',
        '熊市影响较小',
      ],
      rightTitle: '非技术岗',
      rightItems: [
        '入门门槛较低',
        '依赖人脉和软技能',
        '牛熊市波动大',
        '晋升依赖机会',
      ],
    },
    {
      id: '8.2-06',
      type: 'content',
      title: '远程工作与 Web3 原生模式',
      content: [
        {
          type: 'bullets',
          items: [
            '70%+ 的 Web3 岗位支持全远程',
            '匿名与化名文化：很多从业者使用 ENS 域名、NFT 头像',
            '贡献者经济：通过 DAO 贡献、赏金任务获得 Token 奖励',
            '薪资支付：50%+ 使用稳定币，30% 混合支付',
          ],
        },
        {
          type: 'highlight',
          variant: 'info',
          content: '贡献者模式非常适合新人——可以在不离职的情况下积累经验',
        },
      ],
    },
    {
      id: '8.2-summary',
      type: 'summary',
      title: '8.2 本节要点',
      items: [
        '技术岗薪资天花板更高，安全岗可达 $500K+',
        '非技术岗入门门槛较低，但牛熊市波动大',
        '70%+ 岗位支持远程，匿名文化普遍',
        '贡献者经济是新人入行的好方式',
      ],
    },

    // 8.3 学生和 Web2 上班族的常见切入点
    {
      id: '8.3-section',
      type: 'section',
      title: '8.3 学生/Web2 上班族的常见切入点',
    },
    {
      id: '8.3-01',
      type: 'content',
      title: '学生的三大优势',
      content: [
        {
          type: 'table',
          headers: ['优势类型', '具体表现', '如何利用'],
          rows: [
            ['时间优势', '课余时间充足', '利用寒暑假参加黑客松、实习'],
            ['学习优势', '学习能力强，无思维包袱', '快速掌握新技术、新概念'],
            ['试错成本低', '没有家庭负担', '可以大胆尝试不同方向'],
          ],
        },
      ],
    },
    {
      id: '8.3-02',
      type: 'content',
      title: '学生推荐切入路径',
      content: [
        {
          type: 'numbered',
          items: [
            '实习 — 最直接的入行方式，Web3 实习薪资通常更高',
            '黑客松 — ETHGlobal、DoraHacks，作品可作为求职作品集',
            '社区贡献 — 内容创作、翻译工作、社区管理、Bug 反馈',
          ],
        },
        {
          type: 'highlight',
          variant: 'info',
          content: '很多项目会给活跃贡献者发放"贡献者空投"，这是行业认可的证明',
        },
      ],
    },
    {
      id: '8.3-03',
      type: 'content',
      title: 'Web2 技术岗转型路径',
      content: [
        {
          type: 'table',
          headers: ['Web2 背景', '转型方向', '转型难度'],
          rows: [
            ['后端开发', '智能合约开发', '⭐⭐'],
            ['前端开发', 'DApp 前端、钱包集成', '⭐'],
            ['安全工程师', '智能合约审计', '⭐⭐'],
            ['数据工程师', '链上数据分析', '⭐⭐'],
          ],
        },
        {
          type: 'text',
          content: '核心建议：利用现有技术栈优势，选择相关性高的方向',
        },
      ],
    },
    {
      id: '8.3-04',
      type: 'content',
      title: 'Web2 非技术岗转型路径',
      content: [
        {
          type: 'table',
          headers: ['Web2 背景', '转型方向', '可迁移技能'],
          rows: [
            ['产品经理', 'Web3 产品、DAO 运营', '需求分析、用户体验'],
            ['运营', '社区运营、增长负责人', '活动策划、用户运营'],
            ['市场/PR', 'Web3 市场、KOL 合作', '品牌建设、媒体关系'],
            ['财务/投资', '投研分析师', '财务分析、估值建模'],
          ],
        },
      ],
    },
    {
      id: '8.3-05',
      type: 'comparison',
      title: '兼职试水 vs 全职 All in',
      leftTitle: '兼职试水',
      leftItems: [
        '风险低，保留稳定收入',
        '投入有限，每周 10-20 小时',
        '成长速度较慢',
        '适合探索期、验证期',
      ],
      rightTitle: '全职 All in',
      rightItems: [
        '风险高，收入不稳定',
        '全身心投入',
        '成长速度快，3-6 个月入门',
        '适合确定期、深耕期',
      ],
    },
    {
      id: '8.3-06',
      type: 'content',
      title: '全职 All in 的前置条件',
      content: [
        {
          type: 'bullets',
          items: [
            '有 6-12 个月的生活储备金',
            '已经通过兼职方式验证了方向',
            '获得了至少一个明确的工作机会或项目邀请',
            '家人理解并支持你的决定',
            '有明确的 Plan B（如果 6 个月没进展怎么办）',
          ],
        },
        {
          type: 'highlight',
          variant: 'warning',
          content: '建议在牛市积累资源和人脉，熊市深耕学习，而非在熊市贸然 All in',
        },
      ],
    },
    {
      id: '8.3-summary',
      type: 'summary',
      title: '8.3 本节要点',
      items: [
        '学生优势：时间充足、学习能力强、试错成本低',
        '推荐路径：实习、黑客松、社区贡献',
        'Web2 转型：利用现有技术栈优势，选择相关性高的方向',
        '兼职试水风险低，全职 All in 需满足前置条件',
      ],
    },

    // 8.4 哪些岗位被严重高估
    {
      id: '8.4-section',
      type: 'section',
      title: '8.4 哪些岗位被严重高估',
    },
    {
      id: '8.4-01',
      type: 'content',
      title: '被高估岗位的共同特征',
      content: [
        {
          type: 'numbered',
          items: [
            '产出难以量化 — 工作成果模糊，缺乏明确 KPI',
            '头衔通胀严重 — "首席""总监"被滥用',
            '依赖市场周期 — 牛市需求暴涨，熊市迅速萎缩',
            '进入门槛与薪酬倒挂 — 实际技能门槛低但薪酬高',
          ],
        },
      ],
    },
    {
      id: '8.4-02',
      type: 'content',
      title: '被高估岗位：某些"顾问"角色',
      content: [
        {
          type: 'text',
          content: '典型画像：名片上印着 3-5 个项目的"Advisor"头衔，主要工作是站台和背书',
        },
        {
          type: 'comparison',
          leftTitle: '真正有价值的顾问',
          leftItems: ['每周 5+ 小时深度参与', '具体建议、资源对接、问题解决', '对项目成败有利益关联'],
          rightTitle: '泡沫型顾问',
          rightItems: ['每月偶尔露面', '发几条推文、参加一次 AMA', '只拿代币不担责任'],
        },
      ],
    },
    {
      id: '8.4-03',
      type: 'content',
      title: '被高估岗位：部分"社区运营"',
      content: [
        {
          type: 'text',
          content: '典型画像：用表情包和 meme 维持群内热度，无法提供增长、留存数据',
        },
        {
          type: 'text',
          content: '有价值的社区运营应该能够：',
        },
        {
          type: 'bullets',
          items: [
            '将社区反馈转化为产品改进建议',
            '建立用户分层和精细化运营体系',
            '培养真正的社区贡献者和布道者',
            '提供可量化的社区健康度指标',
          ],
        },
      ],
    },
    {
      id: '8.4-04',
      type: 'content',
      title: '为什么会被高估',
      content: [
        {
          type: 'bullets',
          items: [
            '信息不对称 — 行业术语障碍，外行难评估岗位价值',
            '成果归因困难 — 难以准确判断谁的功劳',
            '行业泡沫 — 牛市资金充裕，推高整体薪酬',
            '叙事驱动估值 — 需要"豪华团队"撑场面',
            '监管套利 — 本应有门槛的岗位变得"人人可做"',
          ],
        },
      ],
    },
    {
      id: '8.4-05',
      type: 'content',
      title: '如何识别真正有价值的机会',
      content: [
        {
          type: 'text',
          content: '问自己三个问题：',
        },
        {
          type: 'numbered',
          items: [
            '这个岗位创造什么不可替代的价值？',
            '如果市场转熊，这个岗位还会存在吗？',
            '这个岗位的薪酬在传统行业是什么水平？',
          ],
        },
      ],
    },
    {
      id: '8.4-06',
      type: 'content',
      title: '求职避坑指南',
      content: [
        {
          type: 'table',
          headers: ['红旗信号', '健康信号'],
          rows: [
            ['JD 模糊，大量使用"赋能""生态"', '有清晰的 OKR 定义'],
            ['只聊愿景，不谈具体工作', '汇报关系清晰'],
            ['代币占比超过 50%', '团队可验证'],
            ['头衔虚高，急于入职', '产品有真实数据'],
          ],
        },
      ],
    },
    {
      id: '8.4-summary',
      type: 'summary',
      title: '8.4 本节要点',
      items: [
        '被高估岗位特征：产出难量化、头衔通胀、依赖周期',
        '某些"顾问"和"社区运营"价值被严重高估',
        '评估岗位价值：问不可替代性、熊市生存、薪酬对比',
        '警惕 JD 模糊、代币占比过高、头衔虚高的职位',
      ],
    },

    // 8.5 建立 Web3 个人品牌与影响力
    {
      id: '8.5-section',
      type: 'section',
      title: '8.5 建立 Web3 个人品牌与影响力',
    },
    {
      id: '8.5-01',
      type: 'content',
      title: '为什么个人影响力很重要',
      content: [
        {
          type: 'bullets',
          items: [
            '去中心化信任机制 — 公开可追溯的内容输出是"链上简历"',
            '信息差是核心竞争力 — 建立影响力的过程就是获取优质信息的过程',
            '机会往往从社交媒体开始 — 工作、投资、合作、学习机会',
          ],
        },
        {
          type: 'highlight',
          variant: 'warning',
          content: '没有个人品牌，你就是"隐形人"——即使能力很强，也很难被发现',
        },
      ],
    },
    {
      id: '8.5-02',
      type: 'content',
      title: '影响力正向飞轮',
      content: [
        {
          type: 'numbered',
          items: [
            '内容输出 → 获得曝光',
            '获得曝光 → 建立连接',
            '建立连接 → 获取信息',
            '获取信息 → 提升认知',
            '提升认知 → 更好的内容输出',
          ],
        },
      ],
    },
    {
      id: '8.5-03',
      type: 'content',
      title: 'X/Twitter 账号定位',
      content: [
        {
          type: 'table',
          headers: ['定位类型', '内容特点', '适合人群'],
          rows: [
            ['学习者', '学习笔记、心得分享', '新手、转型者'],
            ['分析师', '项目分析、数据解读', '有研究能力的人'],
            ['开发者', '技术分享、代码教程', '技术背景人员'],
            ['观点输出', '行业洞察、趋势判断', '有独立思考能力的人'],
          ],
        },
        {
          type: 'highlight',
          variant: 'info',
          content: '新手建议：从"学习者"定位开始，真诚分享比"装专家"更有吸引力',
        },
      ],
    },
    {
      id: '8.5-04',
      type: 'steps',
      title: 'X/Twitter 内容策略',
      steps: [
        {
          title: '第一阶段（Day 1-30）',
          description: '转发 + 简评：关注高质量账号，每天转发 2-3 条有价值的内容',
        },
        {
          title: '第二阶段（Day 30-90）',
          description: '学习笔记：把学到的知识整理成推文或 Thread',
        },
        {
          title: '第三阶段（Day 90+）',
          description: '观点输出：对热点事件发表看法，展示思考能力',
        },
      ],
    },
    {
      id: '8.5-05',
      type: 'content',
      title: 'X/Twitter 互动技巧',
      content: [
        {
          type: 'numbered',
          items: [
            '高质量回复 — 在大 V 推文下留下有价值的评论，补充观点、提出问题',
            '参与讨论 — 加入 Twitter Space，在热点话题下发表观点',
            '建立连接 — 主动 DM 你欣赏的人，表达真诚的赞赏',
          ],
        },
        {
          type: 'highlight',
          variant: 'warning',
          content: '避免：无意义的"冲浪"评论、过度营销、复制粘贴的模板回复',
        },
      ],
    },
    {
      id: '8.5-06',
      type: 'comparison',
      title: 'X/Twitter vs 小红书',
      leftTitle: 'X/Twitter',
      leftItems: [
        '全球化、英语为主',
        '文字为主、Thread',
        'Web3 核心阵地、实时性强',
      ],
      rightTitle: '小红书',
      rightItems: [
        '中国大陆、中文',
        '图文并重、笔记形式',
        '科普为主、新手友好',
      ],
    },
    {
      id: '8.5-07',
      type: 'content',
      title: '从学习笔记开始',
      content: [
        {
          type: 'text',
          content: '费曼学习法：如果你不能简单地解释一件事，说明你还没有真正理解它',
        },
        {
          type: 'bullets',
          items: [
            '输出倒逼输入：有输出压力时学习会更认真',
            '设定最小目标：每天发一条推文，而非每天写深度文章',
            '建立仪式感：固定时间、固定环境写作',
            '寻找同行者：加入学习社群，互相督促',
          ],
        },
      ],
    },
    {
      id: '8.5-08',
      type: 'quote',
      title: '真实案例的启示',
      quote: '我没有任何内幕信息，没有技术能力，我唯一做对的事情就是——把学习过程公开记录下来。',
    },
    {
      id: '8.5-summary',
      type: 'summary',
      title: '8.5 本节要点',
      items: [
        '个人品牌在 Web3 是"链上简历"，影响力可转化为实际机会',
        'X/Twitter 是 Web3 核心阵地，从学习者定位开始',
        '内容原则：真实、有用、持续、独特',
        '输出倒逼输入，费曼学习法帮助深化理解',
      ],
    },

    // Part 8 总结页
    {
      id: '08-conclusion',
      type: 'content',
      title: 'Part 8 核心总结',
      content: [
        {
          type: 'table',
          headers: ['章节', '核心信息'],
          rows: [
            ['8.1', 'Web3 生态五大角色：项目方、投资方、服务方、用户、基础设施'],
            ['8.2', '技术岗薪资高但门槛高，非技术岗入门容易但波动大'],
            ['8.3', '学生和 Web2 转型者都有可行的切入路径'],
            ['8.4', '警惕被高估的岗位，用三个问题评估真实价值'],
            ['8.5', '建立个人品牌是 Web3 的核心竞争力'],
          ],
        },
      ],
    },

    // Part 8 结束页
    {
      id: '08-end',
      type: 'title',
      title: 'Part 8 完成',
      subtitle: '下一章：参与方式',
    },
  ],
}
