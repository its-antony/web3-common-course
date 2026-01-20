import type { Presentation } from '@/types/slide'

export const part06: Presentation = {
  id: 'part06',
  title: '收益风险与结构性陷阱',
  partNumber: 6,
  slides: [
    // Part 标题页
    {
      id: '06-title',
      type: 'title',
      title: 'Part 6',
      subtitle: '收益风险与结构性陷阱',
    },

    // ==================== 6.1 Web3 收益从哪里来 ====================
    {
      id: '6.1-section',
      type: 'section',
      title: '6.1 Web3 收益从哪里来',
    },
    {
      id: '6.1-01',
      type: 'content',
      title: '收益的四大来源',
      content: [
        {
          type: 'numbered',
          items: [
            '价格波动收益 — 低买高卖，零和博弈',
            '质押奖励 — 网络增发的新代币',
            '流动性挖矿 — 交易手续费分成 + 平台代币奖励',
            '空投激励 — 项目方代币分配预算',
          ],
        },
      ],
    },
    {
      id: '6.1-02',
      type: 'comparison',
      title: '零和 vs 正和博弈',
      content: [
        {
          type: 'table',
          headers: ['类型', '定义', 'Web3 示例'],
          rows: [
            ['零和博弈', '一方获利 = 另一方亏损', '价格投机、合约交易'],
            ['负和博弈', '加入摩擦成本后整体为负', '高频交易（含手续费）'],
            ['正和博弈', '通过价值创造整体增值', '长期持有优质资产'],
          ],
        },
        {
          type: 'highlight',
          value: '大部分交易行为都是零和或负和博弈',
        },
      ],
    },
    {
      id: '6.1-03',
      type: 'quote',
      title: '核心警示',
      content: [
        {
          type: 'text',
          value: '如果你找不到收益的来源，大概率你就是那个来源',
        },
      ],
    },
    {
      id: '6.1-04',
      type: 'content',
      title: 'Anchor Protocol 案例',
      content: [
        {
          type: 'bullets',
          items: [
            'Terra 生态的 Anchor 承诺 UST 存款可获得约 20% 年化收益',
            '实际情况：借款人支付的利息远低于 20%，缺口由 Terra 基金会补贴',
            '2022 年 5 月 UST 脱锚，Luna 崩盘，400 亿美元市值蒸发',
          ],
        },
        {
          type: 'highlight',
          value: '20% 的「稳定收益」本身就是巨大红旗',
        },
      ],
    },
    {
      id: '6.1-summary',
      type: 'summary',
      title: '6.1 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            '收益来自四个来源：价格波动、质押、流动性挖矿、空投',
            '大部分交易是零和或负和博弈',
            '每次投资前问：钱从哪里来？',
            '收益来源不明 = 你可能就是收益来源',
          ],
        },
      ],
    },

    // ==================== 6.2 高 APY 的真实含义 ====================
    {
      id: '6.2-section',
      type: 'section',
      title: '6.2 高 APY 的真实含义',
    },
    {
      id: '6.2-01',
      type: 'comparison',
      title: 'APY vs APR',
      content: [
        {
          type: 'table',
          headers: ['概念', '定义', '100% APR 对应'],
          rows: [
            ['APR', '年利率，不考虑复利', '100%'],
            ['APY（日复利）', '年化收益率，考虑复利', '171.5%'],
          ],
        },
        {
          type: 'highlight',
          value: 'DeFi 项目几乎都展示 APY 而非 APR，因为数字更大更吸引人',
        },
      ],
    },
    {
      id: '6.2-02',
      type: 'content',
      title: '高 APY 的真相',
      content: [
        {
          type: 'text',
          value: 'APY 衡量的是你获得的代币数量增长，而不是美元价值增长',
        },
        {
          type: 'table',
          headers: ['场景', '代币数量', '代币价格', '实际收益'],
          rows: [
            ['理想情况', '100x', '不变', '+9900%'],
            ['现实情况', '100x', '跌 99%', '0%'],
            ['常见情况', '100x', '跌 99.9%', '-90%'],
          ],
        },
      ],
    },
    {
      id: '6.2-03',
      type: 'content',
      title: 'APY 风险等级',
      content: [
        {
          type: 'table',
          headers: ['APY 范围', '风险等级', '典型来源'],
          rows: [
            ['0-10%', '低', 'ETH 质押、主流借贷协议'],
            ['10-50%', '中', '流动性挖矿、新兴协议'],
            ['50-100%', '高', '高激励期、小币种'],
            ['100-500%', '很高', '新项目冷启动'],
            ['500%+', '极高', '几乎必然是陷阱'],
          ],
        },
      ],
    },
    {
      id: '6.2-04',
      type: 'content',
      title: '无常损失',
      content: [
        {
          type: 'text',
          value: '当你向流动性池存入代币后，如果价格比发生变化，取出时价值会低于单纯持有',
        },
        {
          type: 'table',
          headers: ['ETH 价格变化', '无常损失'],
          rows: [
            ['涨 25%', '0.6%'],
            ['涨 50%', '2.0%'],
            ['涨/跌 100%', '5.7%'],
            ['涨 200%', '13.4%'],
          ],
        },
        {
          type: 'highlight',
          value: '只有当手续费收入 > 无常损失时，提供流动性才划算',
        },
      ],
    },
    {
      id: '6.2-summary',
      type: 'summary',
      title: '6.2 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            'APY 衡量代币数量，不是美元价值',
            '高 APY 意味着高通胀，代币价格必然下跌',
            '传统金融无风险利率约 4-5%，显著高于此需警惕',
            '提供流动性需考虑无常损失',
          ],
        },
      ],
    },

    // ==================== 6.3 常见割人结构与庞氏模型 ====================
    {
      id: '6.3-section',
      type: 'section',
      title: '6.3 庞氏模型与常见割人结构',
    },
    {
      id: '6.3-01',
      type: 'content',
      title: '庞氏模型核心特征',
      content: [
        {
          type: 'bullets',
          items: [
            '承诺高额、稳定的回报',
            '收益不来自真实的商业活动',
            '依赖持续的新资金流入',
            '当新资金跟不上时，必然崩盘',
          ],
        },
      ],
    },
    {
      id: '6.3-02',
      type: 'content',
      title: '庞氏模型识别清单',
      content: [
        {
          type: 'table',
          headers: ['警示信号', '具体表现', '风险等级'],
          rows: [
            ['收益来源不明', '无法清晰解释收益从哪来', '极高'],
            ['承诺固定高收益', '「稳定 20%」「保本保息」', '极高'],
            ['依赖拉新', '推荐奖励、层级分佣', '高'],
            ['锁仓机制', '强制锁仓、提款困难', '高'],
            ['团队匿名', '无法验证真实身份', '高'],
          ],
        },
      ],
    },
    {
      id: '6.3-03',
      type: 'content',
      title: 'Luna/UST 崩盘时间线',
      content: [
        {
          type: 'table',
          headers: ['日期', 'UST 价格', 'Luna 价格'],
          rows: [
            ['5月7日', '$0.98', '$80'],
            ['5月9日', '$0.60', '$30'],
            ['5月11日', '$0.30', '$1'],
            ['5月13日', '接近 $0', '接近 $0'],
          ],
        },
        {
          type: 'highlight',
          value: '约 400 亿美元市值蒸发',
        },
      ],
    },
    {
      id: '6.3-04',
      type: 'content',
      title: 'FTX 暴雷',
      content: [
        {
          type: 'bullets',
          items: [
            '曾是全球第二大交易所，估值 320 亿美元',
            '问题：挪用客户资金、财务造假、关联交易、缺乏监管',
            '2022.11.11 申请破产，客户损失约 80 亿美元',
          ],
        },
        {
          type: 'highlight',
          value: '教训：Not your keys, not your coins',
        },
      ],
    },
    {
      id: '6.3-05',
      type: 'content',
      title: '常见「割人」套路',
      content: [
        {
          type: 'table',
          headers: ['套路', '说明'],
          rows: [
            ['Rug Pull', '项目方突然撤走流动性，代币归零'],
            ['Slow Rug', '项目方逐步抛售持仓，价格缓慢下跌'],
            ['Honey Pot', '合约设置使用户只能买入无法卖出'],
          ],
        },
      ],
    },
    {
      id: '6.3-summary',
      type: 'summary',
      title: '6.3 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            '庞氏模型用新投资者的钱支付旧投资者收益',
            'Luna/UST 20% 收益不可持续是典型庞氏特征',
            'FTX 证明顶级机构背书不等于安全',
            '满足 3 个以上警示信号的项目建议远离',
          ],
        },
      ],
    },

    // ==================== 6.4 MEV 与隐性交易成本 ====================
    {
      id: '6.4-section',
      type: 'section',
      title: '6.4 MEV 与隐性交易成本',
    },
    {
      id: '6.4-01',
      type: 'content',
      title: '什么是 MEV',
      content: [
        {
          type: 'text',
          value: 'MEV（Maximal Extractable Value）是区块生产者通过控制交易顺序可以获取的额外价值',
        },
        {
          type: 'highlight',
          value: '你在链上的每一笔交易，都可能被人「偷看」并从中牟利',
        },
      ],
    },
    {
      id: '6.4-02',
      type: 'content',
      title: '三明治攻击',
      content: [
        {
          type: 'numbered',
          items: [
            '攻击者在 Mempool 发现你的大额交易',
            '攻击者先于你买入（推高价格）',
            '你的交易以更高价格成交',
            '攻击者卖出获利',
          ],
        },
        {
          type: 'highlight',
          value: '你多付的钱 = 攻击者的利润',
        },
      ],
    },
    {
      id: '6.4-03',
      type: 'content',
      title: 'MEV 的规模',
      content: [
        {
          type: 'bullets',
          items: [
            '以太坊上被提取的 MEV 总量超过 6 亿美元',
            '每天约有数百万美元的 MEV 被提取',
            '普通用户每笔大额交易可能损失 0.5-2%',
          ],
        },
        {
          type: 'highlight',
          value: 'MEV 就像是链上交易的「隐形税」',
        },
      ],
    },
    {
      id: '6.4-04',
      type: 'content',
      title: '如何减少 MEV 损失',
      content: [
        {
          type: 'table',
          headers: ['方法', '说明'],
          rows: [
            ['使用私有交易池', 'Flashbots Protect，不经过公开内存池'],
            ['降低滑点容忍度', '滑点越高，攻击空间越大'],
            ['拆分大额交易', '小额交易攻击成本高于收益'],
            ['使用 DEX 聚合器', '1inch、CoW Swap 提供 MEV 保护'],
          ],
        },
      ],
    },
    {
      id: '6.4-summary',
      type: 'summary',
      title: '6.4 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            'MEV 是链上交易的隐性成本',
            '三明治攻击是最常见的 MEV 类型',
            '使用 Flashbots Protect 可减少 MEV 损失',
            '大额交易建议拆分执行',
          ],
        },
      ],
    },

    // ==================== 6.5 跨链桥使用与风险 ====================
    {
      id: '6.5-section',
      type: 'section',
      title: '6.5 跨链桥使用与风险',
    },
    {
      id: '6.5-01',
      type: 'content',
      title: '什么是跨链桥',
      content: [
        {
          type: 'text',
          value: '跨链桥是连接不同区块链网络的协议，让你可以将资产从一条链「转移」到另一条链',
        },
        {
          type: 'bullets',
          items: [
            '最常见模式：锁定-铸造（Lock-Mint）',
            '原始资产被锁定在源链的合约中',
            '目标链上铸造等值的「包装」代币',
          ],
        },
      ],
    },
    {
      id: '6.5-02',
      type: 'content',
      title: '跨链桥安全事件',
      content: [
        {
          type: 'table',
          headers: ['事件', '时间', '损失金额'],
          rows: [
            ['Ronin Bridge', '2022.3', '6.25 亿美元'],
            ['BNB Bridge', '2022.10', '5.7 亿美元'],
            ['Wormhole', '2022.2', '3.2 亿美元'],
            ['Nomad', '2022.8', '1.9 亿美元'],
          ],
        },
        {
          type: 'highlight',
          value: '仅 2022 年，跨链桥攻击损失超过 20 亿美元',
        },
      ],
    },
    {
      id: '6.5-03',
      type: 'content',
      title: '跨链桥风险原因',
      content: [
        {
          type: 'bullets',
          items: [
            '技术复杂性 — 需要同时与多条链交互',
            '信任假设 — 依赖验证者/中继器',
            '高价值目标 — 锁定大量资产，吸引顶级黑客',
          ],
        },
      ],
    },
    {
      id: '6.5-04',
      type: 'content',
      title: '降低跨链桥风险',
      content: [
        {
          type: 'numbered',
          items: [
            '分批转移 — 先小额测试',
            '选择成熟的桥 — 优先官方桥',
            '考虑替代方案 — CEX 多链充提',
            '控制风险敞口 — 不在桥上留存过多资产',
          ],
        },
      ],
    },
    {
      id: '6.5-summary',
      type: 'summary',
      title: '6.5 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            '跨链桥是高价值攻击目标',
            '历史上多次重大安全事件',
            '选择成熟的桥，分批转移',
            '大额资金可考虑 CEX 中转',
          ],
        },
      ],
    },

    // ==================== 6.6 监管与合规风险 ====================
    {
      id: '6.6-section',
      type: 'section',
      title: '6.6 监管与合规风险',
    },
    {
      id: '6.6-01',
      type: 'content',
      title: '为什么关注监管',
      content: [
        {
          type: 'text',
          value: '「Web3 是去中心化的，不受监管」是危险的误解',
        },
        {
          type: 'bullets',
          items: [
            '交易所必须遵守所在地法规',
            '银行可能拒绝服务加密相关账户',
            '个人可能面临税务申报义务',
            '某些行为可能违法',
          ],
        },
        {
          type: 'highlight',
          value: '去中心化的是技术，但人仍生活在有法律管辖的国家',
        },
      ],
    },
    {
      id: '6.6-02',
      type: 'content',
      title: '主要地区监管态度',
      content: [
        {
          type: 'table',
          headers: ['地区', '态度', '交易合法性'],
          rows: [
            ['美国', '严格但分散', '合法（需合规）'],
            ['中国', '全面禁止', '禁止'],
            ['新加坡', '谨慎开放', '合法（需牌照）'],
            ['欧盟', '统一框架', '合法（MiCA）'],
            ['日本', '牌照制度', '合法（需牌照）'],
          ],
        },
      ],
    },
    {
      id: '6.6-03',
      type: 'content',
      title: '美国税务规则',
      content: [
        {
          type: 'table',
          headers: ['行为', '税务影响'],
          rows: [
            ['买入并持有', '无税'],
            ['卖出获利', '资本利得税 0-37%'],
            ['质押/挖矿收入', '按普通收入税率'],
            ['空投', '按收到时公允价值征税'],
            ['币币交易', '可能触发税务事件'],
          ],
        },
      ],
    },
    {
      id: '6.6-04',
      type: 'content',
      title: '风险降低建议',
      content: [
        {
          type: 'numbered',
          items: [
            '了解当地法规 — 不要假设「不知道就没事」',
            '保留交易记录 — 方便未来税务申报',
            '使用合规交易所 — 至少有基本保障',
            '分散地域风险 — 不要把资产放在单一司法管辖区',
          ],
        },
      ],
    },
    {
      id: '6.6-summary',
      type: 'summary',
      title: '6.6 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            '各国监管态度差异巨大',
            '美国将加密货币视为财产征税',
            '中国全面禁止加密货币交易业务',
            '保留交易记录，了解当地法规',
          ],
        },
      ],
    },

    // ==================== 6.7 普通人最容易处于的风险位置 ====================
    {
      id: '6.7-section',
      type: 'section',
      title: '6.7 普通人的风险位置',
    },
    {
      id: '6.7-01',
      type: 'content',
      title: '典型风险场景',
      content: [
        {
          type: 'table',
          headers: ['场景', '典型情况', '结果'],
          rows: [
            ['FOMO 追高', '「再不买就来不及了」', '买在高点成为接盘侠'],
            ['孤注一掷', '把所有积蓄投入', '一次下跌倾家荡产'],
            ['忽视安全', '私钥截图保存、随意授权', '资产被盗或丢失'],
            ['轻信消息', '跟 KOL 带单、「内幕消息」', '成为出货的接盘者'],
          ],
        },
      ],
    },
    {
      id: '6.7-02',
      type: 'content',
      title: '「最后接盘者」特征',
      content: [
        {
          type: 'table',
          headers: ['特征', '风险等级'],
          rows: [
            ['因为别人赚钱而入场', '极高'],
            ['不理解自己买的是什么', '极高'],
            ['投入超出承受能力的资金', '极高'],
            ['只看涨不考虑跌', '高'],
            ['追涨杀跌', '高'],
            ['没有退出策略', '中'],
          ],
        },
        {
          type: 'highlight',
          value: '符合 3 个以上特征，请暂停操作重新审视',
        },
      ],
    },
    {
      id: '6.7-03',
      type: 'content',
      title: '投资上限原则',
      content: [
        {
          type: 'text',
          value: '核心理念：只投入「亏完也不会影响生活」的钱',
        },
        {
          type: 'table',
          headers: ['你的情况', '建议上限'],
          rows: [
            ['有稳定收入，无负债', '可投资资产的 10-20%'],
            ['有房贷或其他负债', '可投资资产的 5-10%'],
            ['收入不稳定', '3 个月应急金之外'],
          ],
        },
      ],
    },
    {
      id: '6.7-04',
      type: 'content',
      title: '仓位与止损原则',
      content: [
        {
          type: 'table',
          headers: ['资产类型', '建议占比'],
          rows: [
            ['BTC + ETH', '60-80%'],
            ['主流代币', '15-30%'],
            ['高风险代币', '5-10%'],
            ['单一代币', '<20%'],
          ],
        },
        {
          type: 'bullets',
          items: [
            '持仓止损：单一资产亏损 20-30% 考虑止损',
            '总资产止损：亏损 30-50% 暂停操作，反思策略',
          ],
        },
      ],
    },
    {
      id: '6.7-summary',
      type: 'summary',
      title: '6.7 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            'FOMO、孤注一掷、轻信消息是典型风险场景',
            '对照「接盘者特征」检查自己',
            '建立投资上限、仓位管理、止损原则',
            '保护本金比追求高收益更重要',
          ],
        },
      ],
    },

    // Part 6 结束页
    {
      id: '06-end',
      type: 'title',
      title: 'Part 6 完成',
      subtitle: '下一章：项目快速判断方法',
    },
  ],
}
