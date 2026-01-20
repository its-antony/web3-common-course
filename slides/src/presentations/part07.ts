import type { Presentation } from '@/types/slide'

export const part07: Presentation = {
  id: 'part07',
  title: '项目快速判断方法',
  partNumber: 7,
  slides: [
    // Part 7 标题页
    {
      id: '07-title',
      type: 'title',
      title: 'Part 7',
      subtitle: '项目快速判断方法',
    },

    // 7.1 普通人为什么不该"找好项目"
    {
      id: '7.1-section',
      type: 'section',
      title: '7.1 普通人为什么不该"找好项目"',
    },
    {
      id: '7.1-01',
      type: 'quote',
      title: '一个需要打破的幻觉',
      quote: '普通人可以通过"研究"找到好项目，实现财富跃迁——这个逻辑对 99% 的普通人不成立。',
    },
    {
      id: '7.1-02',
      type: 'content',
      title: '常见的危险幻觉',
      content: [
        {
          type: 'bullets',
          items: [
            '"我朋友早期买了 XXX，赚了 100 倍"',
            '"只要找到好项目，财富自由很简单"',
            '"做好研究，下一个百倍币就是你的"',
          ],
        },
        {
          type: 'highlight',
          variant: 'warning',
          content: '不是因为你不够聪明，而是这场游戏的规则本身就对你不利',
        },
      ],
    },
    {
      id: '7.1-03',
      type: 'content',
      title: '信息不对称：你永远是最后知道的人',
      content: [
        {
          type: 'text',
          content: '信息流动顺序：',
        },
        {
          type: 'numbered',
          items: [
            '项目方内部',
            '核心投资者/VC',
            '关系密切的 KOL',
            '媒体/社区',
            '普通散户（你）',
          ],
        },
        {
          type: 'highlight',
          variant: 'info',
          content: '当你看到"利好消息"时，思考：为什么这个信息会传到你这里？谁在你之前已经知道了？',
        },
      ],
    },
    {
      id: '7.1-04',
      type: 'comparison',
      title: '能力差距：你不是专业投资者',
      leftTitle: '专业机构的做法',
      leftItems: [
        '深度背调、访谈创始人、验证履历',
        '雇佣专业审计团队审查代码',
        '建立复杂模型模拟各种场景',
        '法务团队评估监管风险',
      ],
      rightTitle: '普通人能做到的',
      rightItems: [
        '只能看公开资料，无法验证',
        '看不懂代码，只能相信第三方',
        '只能看白皮书里的饼图',
        '完全没有能力判断',
      ],
    },
    {
      id: '7.1-05',
      type: 'content',
      title: '时间成本：你的时间值得更好的投资',
      content: [
        {
          type: 'text',
          content: '认真研究一个项目需要 20+ 小时，但你面临的现实是：',
        },
        {
          type: 'bullets',
          items: [
            '90% 以上的项目最终会失败',
            '即使项目本身不错，也可能因为市场周期、监管政策等外部因素亏损',
            '你选择的可能是"活下来但涨幅平平"的项目',
          ],
        },
        {
          type: 'highlight',
          variant: 'info',
          content: '这 20 小时用来学习新技能、提升本职工作，回报可能更确定',
        },
      ],
    },
    {
      id: '7.1-06',
      type: 'content',
      title: '幸存者偏差',
      content: [
        {
          type: 'text',
          content: '为什么社区里全是"我靠 XXX 赚了 100 倍"的故事？',
        },
        {
          type: 'highlight',
          variant: 'warning',
          content: '因为亏钱的人不会到处宣传',
        },
        {
          type: 'text',
          content: '假设 1000 人同时"精心挑选"项目：',
        },
        {
          type: 'bullets',
          items: [
            '约 10 人赚了 10 倍以上（1%）— 他们会活跃分享',
            '约 100 人小赚或持平（10%）',
            '约 890 人亏损（89%）— 他们保持沉默',
          ],
        },
      ],
    },
    {
      id: '7.1-07',
      type: 'comparison',
      title: '正确的心态调整',
      leftTitle: '错误心态',
      leftItems: [
        '我要找到下一个百倍币',
        '研究透彻就能赚钱',
        '别人能赚我也能赚',
        '这次一定不一样',
      ],
      rightTitle: '正确心态',
      rightItems: [
        '我参与是为了学习和了解行业',
        '我的研究能力有限，需要控制风险',
        '幸存者偏差让成功看起来比实际容易',
        '每个人都这么想，但大多数人会亏损',
      ],
    },
    {
      id: '7.1-08',
      type: 'content',
      title: '可行的替代策略',
      content: [
        {
          type: 'numbered',
          items: [
            '只用"输得起"的钱参与 — 假设这笔钱会归零',
            '降低预期 — 不追求暴富，追求学习和体验',
            '分散参与 — 不把筹码押在"找到好项目"上',
            '时间投入到确定性更高的事情 — 比如提升职业技能',
          ],
        },
      ],
    },
    {
      id: '7.1-summary',
      type: 'summary',
      title: '7.1 本节要点',
      items: [
        '信息不对称：普通人永远是信息链条的最后一环',
        '能力差距：你花 10 小时研究可能不如机构 1 小时尽调',
        '幸存者偏差：你只看到了成功的故事',
        '承认局限性不是放弃，而是更明智的参与方式',
      ],
    },

    // 7.2 项目快速扫描的核心维度
    {
      id: '7.2-section',
      type: 'section',
      title: '7.2 项目快速扫描的核心维度',
    },
    {
      id: '7.2-01',
      type: 'content',
      title: '为什么需要"快速扫描"框架',
      content: [
        {
          type: 'text',
          content: '快速扫描的目的不是找到好项目，而是：',
        },
        {
          type: 'bullets',
          items: [
            '排除明显的烂项目和骗局',
            '对参与的项目有基本认知',
            '降低踩雷的概率',
          ],
        },
        {
          type: 'highlight',
          variant: 'info',
          content: '时间投入建议：每个项目 15-30 分钟的快速扫描，而非几十小时的深度研究',
        },
      ],
    },
    {
      id: '7.2-02',
      type: 'content',
      title: '六维评估框架',
      content: [
        {
          type: 'numbered',
          items: [
            '团队背景 — 这个团队可信吗？有能力交付吗？',
            '融资情况 — 有没有专业机构背书？',
            '技术可行性 — 技术上能实现吗？代码靠谱吗？',
            'Token 经济模型 — 分配合理吗？会不会被大量抛售？',
            '社区活跃度 — 是真实用户还是机器人？',
            '产品进度 — 是在做事还是只在画饼？',
          ],
        },
      ],
    },
    {
      id: '7.2-03',
      type: 'content',
      title: '维度一：团队背景',
      content: [
        {
          type: 'table',
          headers: ['检查项', '加分信号', '减分信号'],
          rows: [
            ['身份公开', '创始人实名，可验证履历', '完全匿名，无法核实'],
            ['过往经历', '有成功项目经验', '无相关经验，履历造假'],
            ['专业能力', '技术+商业能力互补', '团队能力单一'],
          ],
        },
        {
          type: 'text',
          content: '查询工具：RootData、LinkedIn、Twitter、Google 搜索',
        },
      ],
    },
    {
      id: '7.2-04',
      type: 'content',
      title: '维度二：融资情况',
      content: [
        {
          type: 'text',
          content: '投资机构分级参考：',
        },
        {
          type: 'bullets',
          items: [
            'Tier 1（顶级）：a16z, Paradigm, Sequoia, Coinbase Ventures',
            'Tier 2（知名）：Multicoin, Polychain, Dragonfly',
            'Tier 3（一般）：其他有过成功案例的机构',
            'Tier 4（警惕）：完全不知名或查不到信息的机构',
          ],
        },
        {
          type: 'highlight',
          variant: 'warning',
          content: '顶级 VC 投资不等于项目一定成功（FTX 也有顶级 VC 投资）',
        },
      ],
    },
    {
      id: '7.2-05',
      type: 'content',
      title: '维度三：技术可行性',
      content: [
        {
          type: 'text',
          content: 'GitHub 快速判断技巧：',
        },
        {
          type: 'bullets',
          items: [
            '优质信号：持续提交、多个贡献者、有 Issues 和 PR',
            '警示信号：最近提交是几个月前、只有 1-2 个贡献者',
            '知名审计机构：Certik、Trail of Bits、OpenZeppelin',
          ],
        },
      ],
    },
    {
      id: '7.2-06',
      type: 'content',
      title: '维度四：Token 经济模型',
      content: [
        {
          type: 'table',
          headers: ['检查项', '加分信号', '减分信号'],
          rows: [
            ['团队份额', '15-20%，锁仓期长', '超过 30%，或无锁仓'],
            ['投资者份额', '比例适中，解锁期 1-3 年', '占比过高，即将大额解锁'],
            ['社区份额', '50% 以上分配给社区', '社区份额过低'],
          ],
        },
        {
          type: 'highlight',
          variant: 'warning',
          content: '参与前务必查看近 3-6 个月是否有大额解锁',
        },
      ],
    },
    {
      id: '7.2-07',
      type: 'content',
      title: '维度五：社区活跃度',
      content: [
        {
          type: 'text',
          content: '识别机器人的技巧：',
        },
        {
          type: 'bullets',
          items: [
            '评论高度雷同："Amazing project!" "LFG!"',
            '粉丝账号近期创建、无头像、无其他动态',
            '使用 Twitter Audit 等工具检测假粉比例',
          ],
        },
        {
          type: 'comparison',
          leftTitle: '真实社区',
          leftItems: ['粉丝增长平稳', '评论多样有深度', '允许质疑声音'],
          rightTitle: '假社区',
          rightItems: ['粉丝阶梯式暴涨', '评论雷同空洞', '质疑被删除攻击'],
        },
      ],
    },
    {
      id: '7.2-08',
      type: 'content',
      title: '维度六：产品进度',
      content: [
        {
          type: 'table',
          headers: ['检查项', '加分信号', '减分信号'],
          rows: [
            ['路线图', '清晰具体，时间节点明确', '模糊笼统，没有时间表'],
            ['历史交付', '过去里程碑按时完成', '反复延期，跳票严重'],
            ['产品状态', '可使用产品，有真实用户', '只有 Demo 或 PPT'],
          ],
        },
        {
          type: 'text',
          content: '查询工具：DefiLlama、DappRadar、Dune Analytics',
        },
      ],
    },
    {
      id: '7.2-summary',
      type: 'summary',
      title: '7.2 本节要点',
      items: [
        '六维评估框架：团队、融资、技术、Token、社区、产品',
        '每个维度都有具体的加分和减分信号',
        '使用工具：RootData、DefiLlama、Token Unlocks 等',
        '目标是排除烂项目，而非找到好项目',
      ],
    },

    // 7.3 什么时候可以直接不看一个项目
    {
      id: '7.3-section',
      type: 'section',
      title: '7.3 什么时候可以直接不看一个项目',
    },
    {
      id: '7.3-01',
      type: 'content',
      title: '红旗思维：学会说"不"',
      content: [
        {
          type: 'text',
          content: '更高效的策略：先用 2-5 分钟快速扫描红旗信号',
        },
        {
          type: 'bullets',
          items: [
            '如果发现一票否决型红旗，直接跳过',
            '如果发现多个警示型红旗，大概率也应该跳过',
            '这能帮你节省大量时间，避免被明显骗局吸引',
          ],
        },
      ],
    },
    {
      id: '7.3-02',
      type: 'content',
      title: '一票否决型红旗',
      content: [
        {
          type: 'text',
          content: '以下信号只要出现一个，直接跳过：',
        },
        {
          type: 'bullets',
          items: [
            '匿名团队 + 高收益承诺（如"日化 3%"）',
            '提现需要额外付费或"解锁"',
            '合约被检测工具标记为 Honeypot（蜜罐）',
            '项目方持有可无限增发的权限',
            '多个独立来源报道该项目是骗局',
            '流动性未锁定且团队可随时撤走',
          ],
        },
      ],
    },
    {
      id: '7.3-03',
      type: 'content',
      title: '综合判断型红旗',
      content: [
        {
          type: 'text',
          content: '以下信号同时出现 3 个以上就需要高度警惕：',
        },
        {
          type: 'bullets',
          items: [
            '团队完全匿名',
            '代码未开源',
            '无第三方审计',
            '白皮书空洞',
            '社区明显刷量',
            '大量 KOL 同时推广',
          ],
        },
        {
          type: 'highlight',
          variant: 'warning',
          content: '1-2 个红旗：保持警惕 | 3-4 个红旗：强烈建议跳过 | 5+ 个：几乎可确定是高风险项目',
        },
      ],
    },
    {
      id: '7.3-04',
      type: 'content',
      title: '经典骗局模式：Rug Pull',
      content: [
        {
          type: 'text',
          content: '项目方在吸引足够资金后，撤走流动性或抛售所有 Token 然后消失',
        },
        {
          type: 'bullets',
          items: [
            '流动性池未锁定',
            '团队持有大量 Token 且无锁仓',
            '突然停止更新社交媒体',
            '官方群突然禁言或解散',
          ],
        },
        {
          type: 'highlight',
          variant: 'error',
          content: '经典案例：Squid Game Token（2021）— 从 $0.01 涨到 $2,800 后归零',
        },
      ],
    },
    {
      id: '7.3-05',
      type: 'content',
      title: '经典骗局模式：Honeypot',
      content: [
        {
          type: 'text',
          content: '智能合约被设计成只能买不能卖，或卖出需支付极高费用',
        },
        {
          type: 'text',
          content: '如何检测：',
        },
        {
          type: 'numbered',
          items: [
            '访问 Token Sniffer (tokensniffer.com)',
            '输入 Token 合约地址',
            '查看是否标记为 "Honeypot" 或 "Sell disabled"',
          ],
        },
      ],
    },
    {
      id: '7.3-06',
      type: 'content',
      title: '经典骗局模式：Pump and Dump',
      content: [
        {
          type: 'text',
          content: '内部人员先低价买入，通过虚假宣传拉高价格，再高价卖给散户',
        },
        {
          type: 'bullets',
          items: [
            '突然大量 KOL 同时推广',
            '价格短期内暴涨（几小时内翻几倍）',
            '社区充斥"不要错过"的 FOMO 情绪',
            '无实际产品或进展，只有价格炒作',
          ],
        },
      ],
    },
    {
      id: '7.3-07',
      type: 'content',
      title: '经典骗局模式：庞氏骗局',
      content: [
        {
          type: 'text',
          content: '用后来者的资金支付先来者的"收益"，没有真实的价值创造',
        },
        {
          type: 'bullets',
          items: [
            '承诺固定高收益（日化/周化）',
            '鼓励拉人头，有推荐奖励',
            '收益来源不清楚或解释不通',
            '需要持续有新人加入才能维持',
          ],
        },
        {
          type: 'highlight',
          variant: 'error',
          content: '经典案例：BitConnect — 承诺日化 1%，最终崩盘，损失约 20 亿美元',
        },
      ],
    },
    {
      id: '7.3-08',
      type: 'steps',
      title: '5 分钟快速排除流程',
      steps: [
        {
          title: 'Step 1（30秒）',
          description: '查看是否有高收益承诺 → 有则直接跳过',
        },
        {
          title: 'Step 2（2分钟）',
          description: 'Token Sniffer 检测合约 → Honeypot 或严重警告则跳过',
        },
        {
          title: 'Step 3（1分钟）',
          description: 'Google 搜索 "项目名 + scam" → 有骗局报道则跳过',
        },
        {
          title: 'Step 4（1分钟）',
          description: '快速数红旗 → 3 个以上则建议跳过',
        },
        {
          title: 'Step 5',
          description: '如果以上都通过，可以进入详细评估',
        },
      ],
    },
    {
      id: '7.3-summary',
      type: 'summary',
      title: '7.3 本节要点',
      items: [
        '一票否决型红旗：高收益承诺、Honeypot、提现付费等',
        '综合判断：3 个以上警示信号应跳过',
        '四大骗局模式：Rug Pull、Honeypot、Pump and Dump、庞氏',
        '5 分钟快速排除流程，节省大量时间',
      ],
    },

    // 7.4 信息源与噪音的区分方法
    {
      id: '7.4-section',
      type: 'section',
      title: '7.4 信息源与噪音的区分方法',
    },
    {
      id: '7.4-01',
      type: 'content',
      title: 'Web3 的信息过载问题',
      content: [
        {
          type: 'text',
          content: '你会面临的信息洪流：',
        },
        {
          type: 'bullets',
          items: [
            'Twitter 上每天数千条项目相关推文',
            '各种媒体发布大量"深度分析"',
            'Discord/Telegram 群里消息刷屏',
            'KOL 们不断推荐"下一个百倍币"',
          ],
        },
        {
          type: 'highlight',
          variant: 'warning',
          content: '这些信息中，90% 是噪音，甚至是有害信息',
        },
      ],
    },
    {
      id: '7.4-02',
      type: 'content',
      title: '信息源的三个层级',
      content: [
        {
          type: 'numbered',
          items: [
            '一级信息源：官方 Twitter、官方 Discord、官方文档、链上数据',
            '二级信息源：专业媒体报道、研究机构研报、KOL 分析',
            '三级信息源：社区讨论、小道消息、传言/谣言',
          ],
        },
        {
          type: 'highlight',
          variant: 'info',
          content: '一级信息源第一时间查看，三级信息源娱乐为主，不可作为决策依据',
        },
      ],
    },
    {
      id: '7.4-03',
      type: 'content',
      title: '核心数据平台推荐',
      content: [
        {
          type: 'table',
          headers: ['平台', '用途'],
          rows: [
            ['DefiLlama', 'DeFi 协议 TVL、收入数据'],
            ['Dune Analytics', '自定义链上数据查询'],
            ['Token Terminal', '协议收入和估值数据'],
            ['Nansen', '聪明钱追踪、钱包分析'],
            ['RootData', '项目融资、团队信息'],
          ],
        },
      ],
    },
    {
      id: '7.4-04',
      type: 'content',
      title: '识别付费软文的特征',
      content: [
        {
          type: 'bullets',
          items: [
            '只说优点不说风险 — 正常分析会提及风险',
            '大量 KOL 同时发布 — 项目方批量购买 KOL',
            '结构相似、话术雷同 — 使用相同的模板和素材',
            '不披露利益关系 — 不说明是否持有 Token',
            '强调"不要错过" — 制造 FOMO 情绪',
            '只谈价格潜力 — 不讨论产品、技术',
          ],
        },
      ],
    },
    {
      id: '7.4-05',
      type: 'comparison',
      title: '付费软文 vs 正常分析',
      leftTitle: '付费软文写法',
      leftItems: [
        '🚀 重磅项目即将起飞！',
        '✅ 顶级 VC 投资',
        '✅ 技术领先',
        '现在上车还来得及！不要错过！',
      ],
      rightTitle: '正常分析写法',
      rightItems: [
        '优势：获得了 A、B 机构投资...',
        '风险：Token 解锁压力大...',
        '结论：有潜力但也存在风险',
        '利益披露：本人不持有该 Token',
      ],
    },
    {
      id: '7.4-06',
      type: 'content',
      title: '批判性阅读技巧',
      content: [
        {
          type: 'text',
          content: '阅读任何"分析文章"时，问自己：',
        },
        {
          type: 'numbered',
          items: [
            '作者是谁？有什么背景？',
            '作者有没有利益关系？',
            '文章有没有提及风险？',
            '是否有大量 KOL 同时发布类似内容？',
            '核心观点是否可验证？',
          ],
        },
      ],
    },
    {
      id: '7.4-07',
      type: 'content',
      title: '建立个人信息系统',
      content: [
        {
          type: 'text',
          content: '信息系统的核心原则：',
        },
        {
          type: 'bullets',
          items: [
            '精简而非全面：10 个高质量来源 > 100 个低质量来源',
            '分层管理：区分"必看"和"选看"',
            '定期清理：取关低质量信息源',
            '验证习惯：重要信息一定去一级来源验证',
          ],
        },
      ],
    },
    {
      id: '7.4-08',
      type: 'content',
      title: 'Twitter/X 信息管理技巧',
      content: [
        {
          type: 'numbered',
          items: [
            '使用列表：创建 "Web3 核心关注" 列表，只放最重要的账号',
            'Mute 噪音词：giveaway、airdrop、🚀、gem、100x',
            '关注质量而非数量：宁可 50 个高质量账号，也不要 500 个混杂账号',
            '警惕"刷屏式"推广：项目突然刷屏大概率是付费推广',
          ],
        },
      ],
    },
    {
      id: '7.4-summary',
      type: 'summary',
      title: '7.4 本节要点',
      items: [
        '信息分三级：一级（官方）最可靠，三级（传言）需验证',
        '核心数据平台：DefiLlama、RootData、Dune Analytics',
        '识别付费软文：只说好不说坏、大量 KOL 同时发布',
        '建立精简的个人信息系统，养成验证习惯',
      ],
    },

    // Part 7 总结页
    {
      id: '07-conclusion',
      type: 'content',
      title: 'Part 7 核心总结',
      content: [
        {
          type: 'table',
          headers: ['章节', '核心信息'],
          rows: [
            ['7.1', '普通人在项目筛选上有天然劣势，不要追求"找好项目"'],
            ['7.2', '用六维框架快速扫描，而非深度研究'],
            ['7.3', '识别红旗信号，学会快速说"不"'],
            ['7.4', '建立信息系统，过滤噪音，保持批判性'],
          ],
        },
      ],
    },
    {
      id: '07-final-quote',
      type: 'quote',
      title: 'Part 7 的核心态度',
      quote: '承认自己的局限性，不是放弃，而是更明智的参与方式。与其追求找到"下一个百倍币"，不如建立正确的风险认知和信息筛选能力。',
    },

    // Part 7 结束页
    {
      id: '07-end',
      type: 'title',
      title: 'Part 7 完成',
      subtitle: '下一章：行业角色与岗位全景',
    },
  ],
}
