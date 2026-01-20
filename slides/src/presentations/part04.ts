import type { Presentation } from '@/types/slide'

export const part04: Presentation = {
  id: 'part04',
  title: 'Token 与经济系统',
  partNumber: 4,
  slides: [
    // Part 标题页
    {
      id: '04-title',
      type: 'title',
      title: 'Part 4',
      subtitle: 'Token 与经济系统',
    },

    // ==================== 4.1 Token 的基本功能与作用 ====================
    {
      id: '4.1-section',
      type: 'section',
      title: '4.1 Token 的基本功能与作用',
    },
    {
      id: '4.1-01',
      type: 'content',
      title: '什么是 Token',
      content: [
        {
          type: 'text',
          value: 'Token（代币）是区块链上的数字资产凭证，代表某种价值、权利或用途。',
        },
        {
          type: 'bullets',
          items: [
            'Token 是智能合约中的一条记录，记录着「谁拥有多少」',
            'Token 可以在链上自由转移和交易',
            '任何人都可以通过部署智能合约来发行 Token',
          ],
        },
      ],
    },
    {
      id: '4.1-02',
      type: 'comparison',
      title: 'Coin vs Token',
      content: [
        {
          type: 'table',
          headers: ['类型', '定义', '例子'],
          rows: [
            ['Coin', '区块链的原生资产', 'BTC、ETH、SOL'],
            ['Token', '建立在现有区块链上的资产', 'USDT、UNI、SHIB'],
          ],
        },
        {
          type: 'highlight',
          value: '日常交流中，这两个词经常互换使用，不必过于纠结',
        },
      ],
    },
    {
      id: '4.1-03',
      type: 'content',
      title: 'Token 的四大类型',
      content: [
        {
          type: 'numbered',
          items: [
            '支付型 Token — 用于支付和价值转移（USDT、USDC）',
            '功能型 Token — 用于访问产品或服务（BNB、FIL、LINK）',
            '治理型 Token — 用于参与项目决策（UNI、AAVE、MKR）',
            '证券型 Token — 代表真实资产所有权（RWA 项目）',
          ],
        },
        {
          type: 'highlight',
          value: '很多 Token 同时具备多种属性，分类只是帮助理解',
        },
      ],
    },
    {
      id: '4.1-04',
      type: 'content',
      title: 'Token 的核心功能',
      content: [
        {
          type: 'table',
          headers: ['功能', '说明', '例子'],
          rows: [
            ['价值存储', '持有 Token 作为资产保值', '持有 BTC 对抗通胀'],
            ['支付媒介', '用 Token 进行交易支付', '用 USDT 购买加密资产'],
            ['权益凭证', 'Token 代表某种权利', '持有 UNI 拥有投票权'],
            ['激励工具', '用 Token 奖励用户行为', '提供流动性获得奖励'],
          ],
        },
      ],
    },
    {
      id: '4.1-05',
      type: 'content',
      title: 'Token 的可编程性',
      content: [
        {
          type: 'text',
          value: 'Token 的真正价值在于其可编程性：',
        },
        {
          type: 'bullets',
          items: [
            '无需许可即可发行 — 任何人都可以创建 Token',
            '全球即时流通 — 24/7 在全球范围内转移',
            '透明可追溯 — 所有流转都记录在链上',
            '可组合性 — 不同 Token 可以像乐高一样组合',
          ],
        },
      ],
    },
    {
      id: '4.1-06',
      type: 'content',
      title: 'Token 技术标准',
      content: [
        {
          type: 'text',
          value: '在以太坊上，大多数 Token 遵循统一标准：',
        },
        {
          type: 'bullets',
          items: [
            'ERC-20 — 定义 Token 的基本功能：转账、查询余额、授权等',
            'ERC-721 — NFT 标准，每个 Token 都是独一无二的',
            'ERC-1155 — 多类型 Token，可同时包含同质化和非同质化',
          ],
        },
        {
          type: 'highlight',
          value: '正是因为有了统一标准，Token 才能在整个生态系统中自由流通',
        },
      ],
    },
    {
      id: '4.1-summary',
      type: 'summary',
      title: '4.1 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            'Token 是区块链上的数字资产凭证',
            'Token 分为支付型、功能型、治理型、证券型四大类',
            'Token 具备价值存储、支付媒介、权益凭证、激励工具等功能',
            'Token 的可编程性是 Web3 创新的基础',
          ],
        },
      ],
    },

    // ==================== 4.2 Token ≠ 股票 ≠ 积分 ====================
    {
      id: '4.2-section',
      type: 'section',
      title: '4.2 Token ≠ 股票 ≠ 积分',
    },
    {
      id: '4.2-01',
      type: 'content',
      title: '常见误区',
      content: [
        {
          type: 'text',
          value: '很多人第一次接触 Token 时会有这些误解：',
        },
        {
          type: 'bullets',
          items: [
            '❌「Token 就像公司股票，持有就能分享收益」',
            '❌「Token 就像会员积分，用来兑换服务」',
          ],
        },
        {
          type: 'highlight',
          value: '不清楚本质区别可能导致严重误判，把 Token 当股票投资却发现无处维权',
        },
      ],
    },
    {
      id: '4.2-02',
      type: 'comparison',
      title: 'Token vs 股票 vs 积分',
      content: [
        {
          type: 'table',
          headers: ['维度', 'Token', '股票', '积分'],
          rows: [
            ['发行方', '项目团队/协议', '注册公司', '商家'],
            ['法律地位', '多数无明确定位', '受证券法保护', '商家自定规则'],
            ['所有权', '不代表公司股权', '代表公司部分所有权', '无所有权含义'],
            ['可转让', '可自由转让', '可交易（有限制）', '通常不可转让'],
            ['归零风险', '高', '中（有破产清算）', '商家倒闭失效'],
          ],
        },
      ],
    },
    {
      id: '4.2-03',
      type: 'content',
      title: 'Token vs 股票：法律地位',
      content: [
        {
          type: 'table',
          headers: ['股票', 'Token'],
          rows: [
            ['受到严格的证券法监管', '大多数国家尚无明确法律定位'],
            ['公司必须定期披露财务信息', '项目方无披露义务（自愿披露）'],
            ['投资者权益受法律保护', '投资者权益缺乏法律保护'],
            ['公司破产时可参与资产清算', '项目失败后通常血本无归'],
          ],
        },
      ],
    },
    {
      id: '4.2-04',
      type: 'content',
      title: '持有 Token ≠ 持有股份',
      content: [
        {
          type: 'text',
          value: '持有某个项目的 Token，不代表你拥有该项目的股权：',
        },
        {
          type: 'bullets',
          items: [
            '你没有权利要求分红',
            '你没有权利审查公司账目',
            '你没有权利参与公司重大决策（除非是治理型 Token）',
            '项目方赚再多钱，也没有义务分给 Token 持有者',
          ],
        },
        {
          type: 'highlight',
          value: '类比：买了游乐园的游戏币，游乐园生意再好，也不会给你分红',
        },
      ],
    },
    {
      id: '4.2-05',
      type: 'content',
      title: 'Howey Test：证券认定标准',
      content: [
        {
          type: 'text',
          value: '美国 SEC 使用 Howey Test 判断某资产是否属于「证券」：',
        },
        {
          type: 'numbered',
          items: [
            '金钱投资',
            '投入共同事业',
            '期待利润',
            '利润来自他人努力',
          ],
        },
        {
          type: 'highlight',
          value: '四要素全部满足 → 被认定为证券，项目方可能面临法律风险',
        },
      ],
    },
    {
      id: '4.2-06',
      type: 'comparison',
      title: 'Token vs 积分',
      content: [
        {
          type: 'table',
          headers: ['维度', 'Token', '积分'],
          rows: [
            ['存储位置', '你自己的钱包（链上）', '商家服务器'],
            ['控制权', '完整控制权', '商家可修改规则、清零'],
            ['可转让性', '可自由转让给任何地址', '通常不能转让'],
            ['价值来源', '市场供需决定', '商家承诺'],
          ],
        },
      ],
    },
    {
      id: '4.2-07',
      type: 'content',
      title: '两类常见错误',
      content: [
        {
          type: 'table',
          headers: ['错误', '现实'],
          rows: [
            ['把 Token 当股票，高估其价值', 'Token 价格可能与项目成功完全脱钩'],
            ['低估归零风险', 'Token 背后通常没有「硬资产」，归零就是真的归零'],
          ],
        },
        {
          type: 'highlight',
          value: '历史上大多数 Token 最终归零',
        },
      ],
    },
    {
      id: '4.2-summary',
      type: 'summary',
      title: '4.2 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            'Token 持有者的权益远不如股东，不受证券法保护',
            'Token 与积分的核心区别在于所有权和可转让性',
            '不要把 Token 当股票投资，也不要低估归零风险',
            '理解 Howey Test 有助于判断 Token 的法律风险',
          ],
        },
      ],
    },

    // ==================== 4.3 稳定币专题 ====================
    {
      id: '4.3-section',
      type: 'section',
      title: '4.3 稳定币专题',
    },
    {
      id: '4.3-01',
      type: 'content',
      title: '什么是稳定币',
      content: [
        {
          type: 'text',
          value: '稳定币（Stablecoin）是价格锚定法定货币（通常是美元）的加密货币，目标是保持 1:1 的汇率。',
        },
        {
          type: 'bullets',
          items: [
            '避险 — 行情不好时，把资产换成稳定币保值',
            '交易媒介 — 用稳定币作为加密世界的「美元」',
            '跨境转账 — 24/7 即时到账，手续费低',
            'DeFi 基础 — 大多数 DeFi 协议以稳定币计价',
          ],
        },
      ],
    },
    {
      id: '4.3-02',
      type: 'content',
      title: '稳定币的三种类型',
      content: [
        {
          type: 'numbered',
          items: [
            '法币抵押型 — 等额美元储备支撑（USDT、USDC）',
            '加密资产抵押型 — 超额加密资产抵押（DAI）',
            '算法稳定币 — 通过算法调节供需（UST 已崩盘）',
          ],
        },
        {
          type: 'highlight',
          value: '目前没有成功的纯算法稳定币',
        },
      ],
    },
    {
      id: '4.3-03',
      type: 'comparison',
      title: 'USDT vs USDC vs DAI',
      content: [
        {
          type: 'table',
          headers: ['维度', 'USDT', 'USDC', 'DAI'],
          rows: [
            ['发行方', 'Tether Limited', 'Circle（美国）', 'MakerDAO'],
            ['抵押机制', '法币抵押', '法币抵押', '加密资产超额抵押'],
            ['去中心化', '完全中心化', '完全中心化', '高度去中心化'],
            ['可冻结', '是', '是', '否'],
          ],
        },
      ],
    },
    {
      id: '4.3-04',
      type: 'content',
      title: '稳定币的核心风险',
      content: [
        {
          type: 'table',
          headers: ['稳定币', '核心风险'],
          rows: [
            ['USDT', '储备构成不透明、监管风险'],
            ['USDC', '银行风险（2023 硅谷银行事件）、监管合规'],
            ['DAI', '抵押品波动、清算风险、智能合约风险'],
          ],
        },
        {
          type: 'highlight',
          value: '没有「最好」的稳定币，只有「最适合」的',
        },
      ],
    },
    {
      id: '4.3-05',
      type: 'content',
      title: '稳定币脱锚历史',
      content: [
        {
          type: 'table',
          headers: ['稳定币', '时间', '脱锚原因'],
          rows: [
            ['USDT', '2018年10月', '市场恐慌储备不足，跌至 $0.85'],
            ['USDC', '2023年3月', '硅谷银行倒闭，跌至 $0.87'],
            ['DAI', '2020年3月', 'ETH 暴跌导致大规模清算'],
          ],
        },
      ],
    },
    {
      id: '4.3-06',
      type: 'content',
      title: 'UST/Luna 崩盘警示',
      content: [
        {
          type: 'text',
          value: '2022年5月，UST 在几天内归零，LUNA 从 $80+ 跌到不足 $0.0001',
        },
        {
          type: 'bullets',
          items: [
            'UST 市值从 ~$18B 归零',
            'LUNA 市值从 ~$40B 归零',
            '无数投资者血本无归',
            '创始人 Do Kwon 被多国通缉',
          ],
        },
      ],
    },
    {
      id: '4.3-07',
      type: 'content',
      title: 'UST 的死亡螺旋',
      content: [
        {
          type: 'numbered',
          items: [
            'UST 大量抛售 → 脱锚跌破 $1',
            '套利者销毁 UST 铸造 LUNA',
            'LUNA 供给暴增 → 价格暴跌',
            '需要更多 LUNA 才能换回 $1',
            'LUNA 进一步稀释暴跌 → 信心崩溃',
          ],
        },
        {
          type: 'highlight',
          value: '关键问题：Anchor 提供约 20% 年化收益，来源不可持续',
        },
      ],
    },
    {
      id: '4.3-08',
      type: 'content',
      title: 'UST 教训',
      content: [
        {
          type: 'bullets',
          items: [
            '「稳定」不等于「无风险」— 算法稳定币在极端情况下可能完全失效',
            '高收益 = 高风险 — 20% 的「稳定」收益本身就是巨大红旗',
            '理解机制很重要 — 如果你不理解收益从哪里来，你可能就是「收益来源」',
            '分散风险 — 不要把所有资金放在单一稳定币',
          ],
        },
      ],
    },
    {
      id: '4.3-summary',
      type: 'summary',
      title: '4.3 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            '稳定币分为法币抵押型、加密资产抵押型、算法型三类',
            'USDT 流动性最大，USDC 最合规，DAI 最去中心化',
            '即使是法币抵押型稳定币也有脱锚风险',
            'UST 崩盘证明了纯算法稳定币的脆弱性',
          ],
        },
      ],
    },

    // ==================== 4.4 通胀、解锁与激励 ====================
    {
      id: '4.4-section',
      type: 'section',
      title: '4.4 通胀、解锁与激励',
    },
    {
      id: '4.4-01',
      type: 'content',
      title: 'Token 供应量基础',
      content: [
        {
          type: 'table',
          headers: ['概念', '定义', '例子'],
          rows: [
            ['总供应量', 'Token 的最大发行量上限', 'BTC: 2100 万枚，永不增发'],
            ['流通量', '当前市场上可自由交易的数量', 'BTC: 约 1950 万枚'],
            ['锁仓量', '被锁定暂时不能交易的数量', '团队锁仓、投资人锁仓'],
          ],
        },
        {
          type: 'highlight',
          value: '关系：流通量 + 锁仓量 ≤ 总供应量',
        },
      ],
    },
    {
      id: '4.4-02',
      type: 'content',
      title: '市值 vs FDV',
      content: [
        {
          type: 'table',
          headers: ['概念', '计算公式'],
          rows: [
            ['市值（Market Cap）', '价格 × 流通量'],
            ['完全稀释市值（FDV）', '价格 × 总供应量'],
          ],
        },
        {
          type: 'highlight',
          value: '如果市值「很低」但 FDV 很高，说明还有大量 Token 未流通，未来解锁可能带来巨大抛压',
        },
      ],
    },
    {
      id: '4.4-03',
      type: 'content',
      title: '解锁计划（Vesting）',
      content: [
        {
          type: 'text',
          value: '解锁是指 Token 分批释放给持有者的机制，通常针对：',
        },
        {
          type: 'bullets',
          items: [
            '团队成员 — 防止项目方拿钱就跑',
            '早期投资人 — 避免上线后立即砸盘',
            '顾问 — 绑定长期利益',
            '生态激励 — 按计划释放奖励',
          ],
        },
      ],
    },
    {
      id: '4.4-04',
      type: 'content',
      title: '解锁相关术语',
      content: [
        {
          type: 'table',
          headers: ['术语', '含义'],
          rows: [
            ['悬崖期（Cliff）', '完全锁仓阶段，一枚 Token 都不能动'],
            ['线性释放', '悬崖期后，每月/每周按比例释放'],
            ['TGE', 'Token Generation Event，Token 正式发行时刻'],
            ['TGE 解锁比例', '发行时立即释放的比例（如 10%）'],
          ],
        },
      ],
    },
    {
      id: '4.4-05',
      type: 'content',
      title: '大额解锁的影响',
      content: [
        {
          type: 'text',
          value: '经济学 101：供给增加 + 需求不变 = 价格下跌',
        },
        {
          type: 'numbered',
          items: [
            '持有者可能选择卖出套现',
            '市场预期抛压，提前抛售避险',
            '买盘不足以承接，价格下跌',
          ],
        },
        {
          type: 'highlight',
          value: '解锁占流通量 >10% 需警惕',
        },
      ],
    },
    {
      id: '4.4-06',
      type: 'comparison',
      title: '通胀型 vs 通缩型 Token',
      content: [
        {
          type: 'table',
          headers: ['类型', '机制', '代表'],
          rows: [
            ['通胀型', '持续增发新 Token', 'DOT（年通胀率约 10%）'],
            ['通缩型', '通过销毁减少供给', 'BNB（定期回购销毁）'],
            ['双重机制', '增发 + 销毁', 'ETH（质押奖励 + 手续费销毁）'],
          ],
        },
      ],
    },
    {
      id: '4.4-07',
      type: 'comparison',
      title: '真实收益 vs Token 排放',
      content: [
        {
          type: 'table',
          headers: ['类型', '来源', '可持续性'],
          rows: [
            ['真实收益', '协议实际业务收入', '可持续（只要业务持续）'],
            ['Token 排放', '增发新 Token', '不可持续（总量有限）'],
          ],
        },
        {
          type: 'highlight',
          value: '当你看到「年化 100%+」的收益时，问自己：收益从哪里来？',
        },
      ],
    },
    {
      id: '4.4-08',
      type: 'content',
      title: '高 APY 的真相',
      content: [
        {
          type: 'text',
          value: '当遇到「高收益」项目时，问自己：',
        },
        {
          type: 'numbered',
          items: [
            '收益从哪里来？是业务收入还是 Token 增发？',
            'Token 会贬值吗？如果大量增发，价格可能暴跌',
            '本金安全吗？高收益往往伴随高风险',
          ],
        },
        {
          type: 'highlight',
          value: '存 100 美元获得 100% 年化，但 Token 只值 20 美元，实际亏了 80%',
        },
      ],
    },
    {
      id: '4.4-summary',
      type: 'summary',
      title: '4.4 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            '区分「总供应量」和「流通量」，关注 FDV',
            '大额解锁可能带来巨大抛压，提前关注解锁日历',
            '区分通胀型和通缩型 Token 的不同价值逻辑',
            '区分「真实收益」和「Token 排放」，避免被高 APY 迷惑',
          ],
        },
      ],
    },

    // ==================== 4.5 为什么大多数 Token 会失败 ====================
    {
      id: '4.5-section',
      type: 'section',
      title: '4.5 为什么大多数 Token 会失败',
    },
    {
      id: '4.5-01',
      type: 'quote',
      title: '残酷的事实',
      content: [
        {
          type: 'text',
          value: '超过 90% 的 Token 最终会失败',
        },
      ],
    },
    {
      id: '4.5-02',
      type: 'content',
      title: '什么叫「失败」',
      content: [
        {
          type: 'bullets',
          items: [
            '价格归零或接近归零',
            '项目停止运营',
            '流动性枯竭，无法卖出',
          ],
        },
        {
          type: 'highlight',
          value: '如果你随机购买一个 Token，大概率会亏损，这不是运气不好，而是基本概率',
        },
      ],
    },
    {
      id: '4.5-03',
      type: 'content',
      title: 'Token 失败的常见原因',
      content: [
        {
          type: 'bullets',
          items: [
            '无实际用途（空气币）— 40%',
            '经济模型不可持续 — 25%',
            '团队问题 — 20%',
            '技术/安全问题 — 10%',
            '竞争/监管 — 5%',
          ],
        },
      ],
    },
    {
      id: '4.5-04',
      type: 'content',
      title: '无实际用途（空气币）',
      content: [
        {
          type: 'bullets',
          items: [
            '没有解决任何真实问题',
            '纯概念炒作，蹭热点',
            '只有买卖行为，没有实际使用场景',
          ],
        },
        {
          type: 'highlight',
          value: '判断方法：如果这个 Token 价格归零，还有人会用这个产品吗？',
        },
      ],
    },
    {
      id: '4.5-05',
      type: 'content',
      title: '经济模型不可持续',
      content: [
        {
          type: 'bullets',
          items: [
            '高通胀无限增发',
            '收益依赖新用户资金（庞氏结构）',
            '激励设计有缺陷，无法持续',
          ],
        },
        {
          type: 'highlight',
          value: '判断方法：如果没有新用户进入，收益还能持续吗？',
        },
      ],
    },
    {
      id: '4.5-06',
      type: 'content',
      title: '团队问题',
      content: [
        {
          type: 'table',
          headers: ['问题类型', '表现'],
          rows: [
            ['跑路（Rug Pull）', '卷款消失，项目突然停止'],
            ['能力不足', '技术做不出来，运营跟不上'],
            ['内部分裂', '核心成员离开，方向分歧'],
            ['动机不纯', '只为圈钱，无心做事'],
          ],
        },
      ],
    },
    {
      id: '4.5-07',
      type: 'content',
      title: '庞氏结构的特征',
      content: [
        {
          type: 'numbered',
          items: [
            '收益来源是新用户资金，而非真实业务',
            '必须不断拉新才能维持',
            '承诺不合理的高回报（如「无风险」年化 50%+）',
            '无法清晰解释收益从哪里来',
          ],
        },
      ],
    },
    {
      id: '4.5-08',
      type: 'comparison',
      title: '快速判断三问',
      content: [
        {
          type: 'table',
          headers: ['问题', '健康项目', '庞氏结构'],
          rows: [
            ['收益从哪里来？', '交易手续费、借贷利息等', '「很复杂」或说不清'],
            ['没有新用户还能持续吗？', '能，只是可能降低', '不能，会崩盘'],
            ['为什么收益这么高？', '早期阶段 + 承担风险', '「我们的模式很特别」'],
          ],
        },
      ],
    },
    {
      id: '4.5-09',
      type: 'content',
      title: 'Token 红旗检查清单（1/2）',
      content: [
        {
          type: 'text',
          value: '团队红旗：',
        },
        {
          type: 'bullets',
          items: [
            '团队完全匿名，无法验证真实身份',
            '团队有负面记录（之前参与过失败或诈骗项目）',
            '团队 Token 无锁仓，可以随时卖出',
          ],
        },
        {
          type: 'text',
          value: '产品红旗：',
        },
        {
          type: 'bullets',
          items: [
            '没有实际产品，只有白皮书和 PPT',
            '解决的是伪问题，没有真实需求',
            '路线图一直延期，融资后无进展',
          ],
        },
      ],
    },
    {
      id: '4.5-10',
      type: 'content',
      title: 'Token 红旗检查清单（2/2）',
      content: [
        {
          type: 'text',
          value: '经济红旗：',
        },
        {
          type: 'bullets',
          items: [
            '承诺不合理高收益（年化 100%+ 且「稳定」）',
            '收益来源不清晰，强调拉人返佣',
            'Token 高度集中，少数地址持有大量 Token',
          ],
        },
        {
          type: 'text',
          value: '社区红旗：',
        },
        {
          type: 'bullets',
          items: [
            '社区只讨论价格，没有产品和技术讨论',
            '批评声音被删除，不允许质疑',
            '官方频繁喊单，制造 FOMO 情绪',
          ],
        },
      ],
    },
    {
      id: '4.5-11',
      type: 'content',
      title: '建立健康心态',
      content: [
        {
          type: 'bullets',
          items: [
            '失败是常态，成功是例外',
            '不要 All-in 任何单一项目',
            '用「亏得起」的钱参与',
            '警惕幸存者偏差 — 你听到的都是成功故事',
          ],
        },
        {
          type: 'highlight',
          value: '投资前问自己：如果这个 Token 归零，我能接受吗？',
        },
      ],
    },
    {
      id: '4.5-summary',
      type: 'summary',
      title: '4.5 要点回顾',
      content: [
        {
          type: 'bullets',
          items: [
            '超过 90% 的 Token 最终会失败，这是基本概率',
            '失败原因包括：无实际用途、经济模型不可持续、团队问题等',
            '学会识别庞氏结构，使用红旗检查清单评估项目',
            '建立理性预期，用亏得起的钱参与',
          ],
        },
      ],
    },

    // Part 4 结束页
    {
      id: '04-end',
      type: 'title',
      title: 'Part 4 完成',
      subtitle: '下一章：主流赛道与商业模式',
    },
  ],
}
