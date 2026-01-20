import type { Presentation } from '@/types/slide'

export const part01: Presentation = {
  id: 'part01',
  title: 'Web3 全局速览',
  partNumber: 1,
  slides: [
    // Part 标题页
    {
      id: '01-title',
      type: 'title',
      title: 'Part 1: Web3 全局速览',
      subtitle: '理解 Web3 的本质与定位',
    },

    // ========== 1.1 Web3 是什么，不是什么 ==========
    {
      id: '1.1-section',
      type: 'section',
      title: '1.1 Web3 是什么，不是什么',
      subtitle: '建立 Web3 的核心认知',
    },
    {
      id: '1.1-01',
      type: 'content',
      title: 'Web3 的定义',
      content: [
        {
          type: 'text',
          value: 'Web3（也称 Web 3.0）是互联网的第三次演进，代表了一个去中心化的互联网愿景。',
        },
        {
          type: 'text',
          value: '这个概念最早由 Polkadot 创始人、以太坊联合创始人 Gavin Wood 在 2014 年提出。',
        },
      ],
    },
    {
      id: '1.1-02',
      type: 'quote',
      title: 'Web3 的本质',
      content: [
        {
          type: 'text',
          value: 'Web3 = 读 + 写 + 拥有',
        },
      ],
    },
    {
      id: '1.1-03',
      type: 'comparison',
      title: '互联网的演进',
      content: [
        {
          type: 'table',
          headers: ['维度', 'Web1', 'Web2', 'Web3'],
          rows: [
            ['你能做什么', '浏览信息', '创建和分享内容', '拥有你的数据和资产'],
            ['数据归谁', '网站所有者', '平台（如微信、抖音）', '你自己'],
            ['信任谁', '机构', '平台', '代码和协议'],
            ['典型代表', 'Yahoo、新浪', '微信、Facebook', '以太坊、Uniswap'],
          ],
        },
      ],
    },
    {
      id: '1.1-04',
      type: 'content',
      title: 'Web3 的核心特征',
      content: [
        {
          type: 'numbered',
          items: [
            '去中心化（Decentralized）：网络不再被单一公司或机构控制',
            '无需许可（Permissionless）：任何人都可以参与，不需要申请或审批',
            '原生支付（Native Payments）：使用加密货币进行支付',
            '无需信任（Trustless）：信任代码，而非公司承诺',
          ],
        },
      ],
    },
    {
      id: '1.1-05',
      type: 'content',
      title: 'Web3 不是什么：常见误解',
      content: [
        {
          type: 'bullets',
          items: [
            '误解 1：Web3 就是加密货币/炒币 → 真相：加密货币只是 Web3 的一部分',
            '误解 2：Web3 = 区块链 → 真相：区块链是底层技术之一',
            '误解 3：Web3 = 元宇宙 → 真相：两者有交集但不是同一个东西',
            '误解 4：Web3 会完全取代 Web2 → 真相：更可能是共存和互补',
            '误解 5：Web3 是完全匿名和安全的 → 真相：链上交易是公开可追溯的',
          ],
        },
      ],
    },
    {
      id: '1.1-06',
      type: 'content',
      title: '案例：从「账号被封」看差异',
      content: [
        {
          type: 'text',
          value: '2021 年 1 月，美国前总统特朗普的 Twitter 账号被永久封禁。这揭示了一个事实：',
        },
        {
          type: 'highlight',
          value: '在 Web2 世界，平台拥有绝对的控制权。',
        },
        {
          type: 'text',
          value: '而在 Web3 的社交应用（如 Lens Protocol、Farcaster）中，你的社交图谱存储在区块链上，没有任何单一平台可以「封禁」你的社交身份。',
        },
      ],
    },
    {
      id: '1.1-summary',
      type: 'summary',
      title: '1.1 本节要点',
      content: [
        {
          type: 'bullets',
          items: [
            'Web3 = 读 + 写 + 拥有，核心是用户拥有数据和资产',
            '四大特征：去中心化、无需许可、原生支付、无需信任',
            '加密货币、区块链、元宇宙都不能与 Web3 划等号',
            'Web3 不是完全匿名的，链上交易可追溯',
          ],
        },
      ],
    },

    // ========== 1.2 从 Web1 到 Web3：互联网的三次演变 ==========
    {
      id: '1.2-section',
      type: 'section',
      title: '1.2 从 Web1 到 Web3',
      subtitle: '互联网的三次演变',
    },
    {
      id: '1.2-01',
      type: 'quote',
      title: '互联网演进的主线',
      content: [
        {
          type: 'text',
          value: '从「信息」到「平台」再到「价值」',
        },
      ],
    },
    {
      id: '1.2-02',
      type: 'content',
      title: '三代互联网的核心变化',
      content: [
        {
          type: 'bullets',
          items: [
            'Web1：你可以看（只读）',
            'Web2：你可以看，还可以写（读写）',
            'Web3：你可以看，可以写，还可以拥有（读写拥有）',
          ],
        },
      ],
    },
    {
      id: '1.2-03',
      type: 'content',
      title: 'Web1.0：只读的静态网页（1990s-2000s）',
      content: [
        {
          type: 'bullets',
          items: [
            '只读（Read-Only）：用户只能浏览信息，无法互动',
            '静态页面：网页内容由网站管理员手动更新',
            '单向传播：信息从网站流向用户',
          ],
        },
        {
          type: 'text',
          value: '代表产品：Yahoo!、新浪、搜狐、网易',
        },
        {
          type: 'highlight',
          value: '用户角色：消费者（Consumer）',
        },
      ],
    },
    {
      id: '1.2-04',
      type: 'content',
      title: 'Web2.0：可读可写的平台经济（2000s-至今）',
      content: [
        {
          type: 'bullets',
          items: [
            '读 + 写：用户既能消费内容，也能创作内容',
            '平台主导：大型平台汇聚用户和内容',
            '数据集中：用户数据存储在平台服务器上',
            '免费 + 广告：用数据换服务',
          ],
        },
        {
          type: 'text',
          value: '代表产品：Facebook、微信、微博、抖音、YouTube',
        },
        {
          type: 'highlight',
          value: '用户角色：创作者（Creator）——但不是所有者',
        },
      ],
    },
    {
      id: '1.2-05',
      type: 'quote',
      title: 'Web2 的核心矛盾',
      content: [
        {
          type: 'text',
          value: '用户创造价值，平台拥有价值',
        },
      ],
    },
    {
      id: '1.2-06',
      type: 'content',
      title: 'Web3.0：可读可写可拥有的价值网络（2020s-未来）',
      content: [
        {
          type: 'bullets',
          items: [
            '读 + 写 + 拥有：用户可以真正拥有数字资产',
            '去中心化：数据存储在区块链上',
            '用户主权：私钥即身份，资产自我托管',
            '可组合性：不同应用之间可以互操作',
          ],
        },
        {
          type: 'text',
          value: '代表产品：以太坊、Uniswap、OpenSea、Lens Protocol',
        },
        {
          type: 'highlight',
          value: '用户角色：所有者（Owner）',
        },
      ],
    },
    {
      id: '1.2-07',
      type: 'comparison',
      title: '三代互联网对比',
      content: [
        {
          type: 'table',
          headers: ['维度', 'Web1.0', 'Web2.0', 'Web3.0'],
          rows: [
            ['时代', '1990s-2000s', '2000s-至今', '2020s-未来'],
            ['核心特征', '只读', '读写', '读写拥有'],
            ['数据存储', '网站服务器', '平台服务器', '区块链'],
            ['用户角色', '消费者', '创作者', '所有者'],
            ['信任基础', '机构背书', '平台信誉', '代码和协议'],
          ],
        },
      ],
    },
    {
      id: '1.2-summary',
      type: 'summary',
      title: '1.2 本节要点',
      content: [
        {
          type: 'bullets',
          items: [
            'Web1 只读、Web2 读写、Web3 读写拥有',
            'Web2 的核心矛盾：用户创造价值，平台拥有价值',
            'Web3 试图让用户真正拥有自己的数据和资产',
            '三代互联网是演进关系，而非替代关系',
          ],
        },
      ],
    },

    // ========== 1.3 Web3 在互联网与金融体系中的位置 ==========
    {
      id: '1.3-section',
      type: 'section',
      title: '1.3 Web3 的定位',
      subtitle: '在互联网与金融体系中的位置',
    },
    {
      id: '1.3-01',
      type: 'content',
      title: 'Web3 不是独立的「平行世界」',
      content: [
        {
          type: 'text',
          value: 'Web3 不是凭空出现的新世界，而是：',
        },
        {
          type: 'bullets',
          items: [
            '互联网的延伸——在现有互联网基础上增加了「价值层」',
            '金融系统的补充——提供了一种「开放金融」的新可能',
          ],
        },
      ],
    },
    {
      id: '1.3-02',
      type: 'content',
      title: '技术视角：Web3 技术栈分层',
      content: [
        {
          type: 'table',
          headers: ['层级', '功能', '代表项目'],
          rows: [
            ['用户入口层', '用户与 Web3 交互的界面', 'MetaMask、OKX Wallet'],
            ['应用层', '直接面向用户的产品', 'Uniswap、OpenSea'],
            ['协议层', '定义规则和标准的智能合约', 'ERC-20、Aave'],
            ['基础设施层', '底层区块链和配套设施', 'Ethereum、Chainlink'],
            ['数据存储层', '数据的持久化存储', 'IPFS、Arweave'],
          ],
        },
      ],
    },
    {
      id: '1.3-03',
      type: 'quote',
      title: 'Web3 的技术本质',
      content: [
        {
          type: 'text',
          value: 'Web3 是建立在传统互联网之上的「价值层」，而非独立运行。',
        },
      ],
    },
    {
      id: '1.3-04',
      type: 'comparison',
      title: '金融视角：TradFi vs DeFi',
      content: [
        {
          type: 'table',
          headers: ['维度', '传统金融 TradFi', 'Web3/DeFi'],
          rows: [
            ['准入门槛', '需要身份认证、银行账户', '只需一个钱包地址'],
            ['运营时间', '工作日、工作时间', '7×24 小时'],
            ['中介机构', '银行、券商、清算所', '智能合约自动执行'],
            ['透明度', '内部账本，用户不可见', '链上公开可查'],
            ['资产托管', '机构托管', '自我托管（私钥）'],
            ['监管状态', '完善的监管框架', '监管发展中'],
          ],
        },
      ],
    },
    {
      id: '1.3-05',
      type: 'content',
      title: 'TradFi 与 DeFi 的关系',
      content: [
        {
          type: 'numbered',
          items: [
            'DeFi 不是要「消灭」银行，而是提供了新的金融服务范式',
            '两者各有优势：传统金融有监管和用户保护，DeFi 有透明度和可访问性',
            '桥接越来越多：稳定币、法币出入金、RWA 正在连接两个世界',
            '未来可能是融合：传统金融机构也在探索区块链技术',
          ],
        },
      ],
    },
    {
      id: '1.3-06',
      type: 'quote',
      title: '统一的定位框架',
      content: [
        {
          type: 'text',
          value: 'Web3 = 互联网的「价值层」+ 金融系统的「开放分支」',
        },
      ],
    },
    {
      id: '1.3-07',
      type: 'content',
      title: '案例：跨境转账对比',
      content: [
        {
          type: 'text',
          value: '小王需要给在美国的朋友转 1000 美元：',
        },
        {
          type: 'bullets',
          items: [
            '传统银行：填写申请 → 审核 → SWIFT 转账 → 总耗时 3-7 天，成本 30-80 美元',
            'Web3 稳定币：买入 USDC → 转账到朋友钱包 → 总耗时几分钟，成本几美元',
          ],
        },
        {
          type: 'highlight',
          value: 'Web3 在「跨境、小额、即时、无需许可」场景有独特优势',
        },
      ],
    },
    {
      id: '1.3-summary',
      type: 'summary',
      title: '1.3 本节要点',
      content: [
        {
          type: 'bullets',
          items: [
            'Web3 是互联网的价值层，建立在传统互联网之上',
            '技术栈分五层：用户入口、应用、协议、基础设施、存储',
            'DeFi 与 TradFi 是补充关系，各有优势',
            'Web3 的独特价值：无需许可、可编程、全球无障碍、透明可审计',
          ],
        },
      ],
    },

    // ========== 1.4 为什么 Web3 周期性爆发又回落 ==========
    {
      id: '1.4-section',
      type: 'section',
      title: '1.4 Web3 的周期性',
      subtitle: '为什么爆发又回落',
    },
    {
      id: '1.4-01',
      type: 'content',
      title: '加密市场的「过山车」特性',
      content: [
        {
          type: 'bullets',
          items: [
            '2017 年：比特币从 1000 美元涨到近 20000 美元，随后跌去 80%',
            '2021 年：比特币突破 69000 美元历史新高，之后跌到 16000 美元',
            '山寨币的涨跌幅度更惊人，10 倍涨幅和 90% 跌幅都很常见',
          ],
        },
        {
          type: 'highlight',
          value: '这种剧烈波动不是偶然的，而是这个行业的结构性特征。',
        },
      ],
    },
    {
      id: '1.4-02',
      type: 'content',
      title: '历史周期回顾：2013 周期',
      content: [
        {
          type: 'text',
          value: '比特币首次被大众关注',
        },
        {
          type: 'bullets',
          items: [
            '高潮：比特币首次突破 1000 美元',
            '崩盘触发：Mt.Gox 交易所因安全问题倒闭',
            '留下的遗产：比特币的「数字黄金」叙事开始形成',
          ],
        },
      ],
    },
    {
      id: '1.4-03',
      type: 'content',
      title: '历史周期回顾：2017 周期',
      content: [
        {
          type: 'text',
          value: 'ICO 狂潮与泡沫',
        },
        {
          type: 'bullets',
          items: [
            '高潮：数千个 ICO 项目涌现，比特币突破 20000 美元',
            '崩盘触发：绝大多数 ICO 项目毫无价值，监管打击',
            '留下的遗产：以太坊生态成型，DeFi 早期协议开始发展',
          ],
        },
      ],
    },
    {
      id: '1.4-04',
      type: 'content',
      title: '历史周期回顾：2021 周期',
      content: [
        {
          type: 'text',
          value: 'DeFi、NFT 与机构入场',
        },
        {
          type: 'bullets',
          items: [
            '高潮：比特币突破 69000 美元，NFT 热潮，Meme 币狂热',
            '崩盘触发：Terra/Luna 崩盘（400 亿美元蒸发）、FTX 破产',
            '留下的遗产：DeFi 基础设施更成熟，监管框架加速建立',
          ],
        },
      ],
    },
    {
      id: '1.4-05',
      type: 'content',
      title: '周期背后的驱动因素',
      content: [
        {
          type: 'numbered',
          items: [
            '技术创新周期：新技术 → 新叙事 → 资金流入 → 价格上涨',
            '叙事与投机共振：叙事比实际产品更早到来，FOMO 情绪蔓延',
            '杠杆放大波动：加密市场杠杆普遍，上涨放大收益，下跌放大亏损',
            '宏观经济影响：低利率 → 资金流入；加息 → 流动性收紧',
            '监管与黑天鹅：监管利好推动上涨，黑天鹅加速恐慌',
          ],
        },
      ],
    },
    {
      id: '1.4-06',
      type: 'content',
      title: '如何理性看待周期',
      content: [
        {
          type: 'bullets',
          items: [
            '周期不是「坏事」：泡沫是创新的副产品，熊市是行业的「净化器」',
            '泡沫中有价值沉淀：2017 ICO 泡沫留下了以太坊生态，2021 NFT 热潮推动了创作者经济探索',
          ],
        },
        {
          type: 'highlight',
          value: '类比：2000 年互联网泡沫破裂，但 Google、Amazon、阿里巴巴活了下来并改变了世界。',
        },
      ],
    },
    {
      id: '1.4-07',
      type: 'content',
      title: '对普通人的建议',
      content: [
        {
          type: 'numbered',
          items: [
            '不要试图「抄底」或「逃顶」：没有人能准确预测周期转折点',
            '用「可失去」的钱参与：不要投入影响生活的资金',
            '关注长期价值，而非短期价格',
            '熊市是最好的学习时机：市场冷静时，噪音更少',
            '警惕「这次不一样」的说法：周期规律从未失效',
          ],
        },
      ],
    },
    {
      id: '1.4-summary',
      type: 'summary',
      title: '1.4 本节要点',
      content: [
        {
          type: 'bullets',
          items: [
            '加密市场的剧烈波动是结构性特征，不是偶然',
            '周期由技术创新、叙事投机、杠杆、宏观经济等因素驱动',
            '每轮周期后都有价值沉淀，基础设施更完善',
            '理性参与：不追涨杀跌，用可承受损失的钱，关注长期价值',
          ],
        },
      ],
    },

    // ========== 1.5 普通人进入 Web3 面临的真实难度 ==========
    {
      id: '1.5-section',
      type: 'section',
      title: '1.5 真实的门槛',
      subtitle: '普通人进入 Web3 面临的难度',
    },
    {
      id: '1.5-01',
      type: 'content',
      title: '为什么要谈「真实难度」',
      content: [
        {
          type: 'text',
          value: '进入 Web3 有真实的门槛和风险。这不是为了劝退，而是为了让你：',
        },
        {
          type: 'bullets',
          items: [
            '做好心理准备',
            '设定合理预期',
            '在真正投入时间和金钱之前，了解将面对什么',
          ],
        },
      ],
    },
    {
      id: '1.5-02',
      type: 'content',
      title: '门槛一：知识门槛',
      content: [
        {
          type: 'text',
          value: 'Web3 涉及的知识领域非常广泛且相互交织：',
        },
        {
          type: 'bullets',
          items: [
            '技术层面：区块链、智能合约、共识机制、密码学',
            '金融层面：交易、流动性、杠杆、衍生品',
            '经济层面：代币经济学、激励机制、博弈论',
            '安全层面：私钥管理、钓鱼识别、合约风险',
          ],
        },
        {
          type: 'highlight',
          value: '信息更新极快，需要持续学习',
        },
      ],
    },
    {
      id: '1.5-03',
      type: 'comparison',
      title: '门槛二：操作门槛',
      content: [
        {
          type: 'table',
          headers: ['Web2 体验', 'Web3 现实'],
          rows: [
            ['忘记密码可以重置', '丢失私钥 = 永久失去资产'],
            ['转错账可以追回', '链上转账不可逆'],
            ['操作简单直观', '需要理解 Gas、签名、授权等概念'],
            ['出问题可以找客服', '大部分情况只能自己负责'],
          ],
        },
      ],
    },
    {
      id: '1.5-04',
      type: 'content',
      title: '常见操作风险',
      content: [
        {
          type: 'bullets',
          items: [
            '转错地址：一个字母之差，资产可能永远消失',
            '转错网络：同一个地址在不同链上可能完全不同',
            'Gas 设置错误：交易可能卡住或浪费大量费用',
            '授权过度：给恶意合约「无限授权」可能导致资产被盗',
            '签名陷阱：看不懂的签名请求可能是「卖身契」',
          ],
        },
      ],
    },
    {
      id: '1.5-05',
      type: 'comparison',
      title: '门槛三：风险识别门槛',
      content: [
        {
          type: 'table',
          headers: ['骗局类型', '手法', '特征'],
          rows: [
            ['钓鱼网站', '伪造官网，骗取私钥', '域名微妙差异'],
            ['假空投', '发送假代币引导访问恶意网站', '「领取空投」弹窗'],
            ['Rug Pull', '项目方卷款跑路', '突然撤走流动性'],
            ['庞氏骗局', '用后入者资金支付收益', '超高年化收益 100%+'],
            ['假客服', '冒充官方客服私聊', '主动联系、索要私钥'],
          ],
        },
      ],
    },
    {
      id: '1.5-06',
      type: 'quote',
      title: '重要原则',
      content: [
        {
          type: 'text',
          value: '在 Web3 里，没有任何人需要你的私钥或助记词。任何索要这些信息的，100% 是骗子。',
        },
      ],
    },
    {
      id: '1.5-07',
      type: 'comparison',
      title: '门槛四：心理门槛',
      content: [
        {
          type: 'table',
          headers: ['情绪', '表现', '后果'],
          rows: [
            ['FOMO', '看到别人赚钱就想冲进去', '高位接盘，被套'],
            ['FUD', '看到负面消息就恐慌卖出', '低位割肉，踏空'],
            ['贪婪', '赚了还想赚更多', '利润回吐'],
            ['恐惧', '亏了不敢止损', '越亏越多'],
            ['过度自信', '几次成功后认为是高手', '加大仓位后爆亏'],
          ],
        },
      ],
    },
    {
      id: '1.5-08',
      type: 'steps',
      title: '实际的入门建议',
      content: [
        {
          type: 'numbered',
          items: [
            '阶段一：纯学习（0 资金投入）- 完成课程，测试网练习，建立认知框架',
            '阶段二：小额试错（100-500 元）- 完成真实链上操作，体验完整流程',
            '阶段三：有限参与 - 在理解范围内参与，设定止损线，持续学习复盘',
          ],
        },
      ],
    },
    {
      id: '1.5-09',
      type: 'comparison',
      title: '不同人群的建议',
      content: [
        {
          type: 'table',
          headers: ['人群', '建议'],
          rows: [
            ['完全新手', '先完成课程学习，用 3-6 个月建立基础认知'],
            ['Web2 技术人员', '可从技术角度入手，技术理解是很大优势'],
            ['金融从业者', '可从 DeFi 协议入手，概念有传统金融对照'],
            ['有投资经验者', '控制仓位，不要低估 Web3 的特殊风险'],
            ['时间有限者', '可以只做观察者，了解动态而不实际交易'],
          ],
        },
      ],
    },
    {
      id: '1.5-summary',
      type: 'summary',
      title: '1.5 本节要点',
      content: [
        {
          type: 'bullets',
          items: [
            '四类门槛：知识门槛、操作门槛、风险识别门槛、心理门槛',
            '任何索要私钥或助记词的都是骗子',
            '建议分阶段入门：纯学习 → 小额试错 → 有限参与',
            '以学习心态进入，而非暴富心态',
          ],
        },
      ],
    },

    // ========== Part 1 总结 ==========
    {
      id: '01-final',
      type: 'title',
      title: 'Part 1 完成',
      subtitle: '你已经建立了 Web3 的全局认知',
    },
  ],
}
