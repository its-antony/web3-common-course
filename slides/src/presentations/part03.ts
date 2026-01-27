import type { Presentation } from '@/types/slide'

export const part03: Presentation = {
  id: 'part03',
  title: '钱包账户与资产安全',
  partNumber: 3,
  slides: [
    // Part 标题页
    {
      id: '03-title',
      type: 'title',
      title: 'Part 3: 钱包账户与资产安全',
      subtitle: '这是你在 Web3 世界生存的氧气面罩',
    },

    // ========== 3.1 钱包、地址、私钥、助记词的关系 ==========
    {
      id: '3.1-section',
      type: 'section',
      title: '3.1 钱包、地址、私钥、助记词',
      subtitle: '理解 Web3 身份与资产的核心概念',
    },
    {
      id: '3.1-01',
      type: 'quote',
      title: '最重要的结论',
      content: [
        {
          type: 'text',
          value: '在 Web3 世界，谁掌握私钥，谁就拥有资产的绝对控制权。',
        },
      ],
    },
    {
      id: '3.1-02',
      type: 'comparison',
      title: '四个核心概念速览',
      content: [
        {
          type: 'table',
          headers: ['概念', '英文', '一句话解释'],
          rows: [
            ['助记词', 'Seed Phrase', '12 或 24 个英文单词，用于备份和恢复钱包'],
            ['私钥', 'Private Key', '一串随机字符，是资产的「终极密码」'],
            ['公钥', 'Public Key', '由私钥派生，用于验证签名'],
            ['地址', 'Address', '由公钥派生，是你的「收款账号」'],
          ],
        },
      ],
    },
    {
      id: '3.1-03',
      type: 'content',
      title: '派生关系：从助记词到地址',
      content: [
        {
          type: 'text',
          value: '四者之间存在严格的单向派生关系：',
        },
        {
          type: 'text',
          value: '助记词 → 私钥 → 公钥 → 地址',
        },
        {
          type: 'bullets',
          items: [
            '单向派生：助记词可以推导出私钥，但私钥无法反推助记词',
            '一对多关系：一个助记词可以派生出无数个私钥/地址',
            '不可逆：丢失助记词，即使知道地址也无法找回资产',
          ],
        },
      ],
    },
    {
      id: '3.1-04',
      type: 'comparison',
      title: '用银行账户类比理解',
      content: [
        {
          type: 'table',
          headers: ['Web3 概念', '银行类比', '说明'],
          rows: [
            ['助记词', '银行卡 + 密码 + 身份证', '拥有它就能完全控制账户'],
            ['私钥', '银行卡密码（但更强）', '授权任何操作的唯一凭证'],
            ['公钥', '银行内部账户验证信息', '用户一般不直接接触'],
            ['地址', '银行卡号', '可以公开，用于收款'],
          ],
        },
        {
          type: 'highlight',
          value: '重要区别：银行可以帮你重置密码，但 Web3 中没有人能帮你找回私钥。',
        },
      ],
    },
    {
      id: '3.1-05',
      type: 'content',
      title: '钱包到底是什么？',
      content: [
        {
          type: 'highlight',
          value: '钱包不存储你的资产，资产永远在区块链上。钱包只是管理私钥的工具。',
        },
        {
          type: 'text',
          value: '钱包的三个核心功能：',
        },
        {
          type: 'numbered',
          items: [
            '保管私钥：安全存储你的私钥/助记词',
            '签名交易：用私钥对交易进行签名',
            '广播交易：将签名后的交易发送到区块链网络',
          ],
        },
      ],
    },
    {
      id: '3.1-06',
      type: 'comparison',
      title: '为什么说「私钥即一切」？',
      content: [
        {
          type: 'table',
          headers: ['场景', '传统金融', 'Web3'],
          rows: [
            ['忘记密码', '银行可重置', '无人能帮你'],
            ['卡片丢失', '可补办', '私钥丢失 = 资产永久丢失'],
            ['被盗刷', '可冻结、可追回', '转走即无法追回'],
            ['继承', '法律程序办理', '无私钥则无法继承'],
          ],
        },
      ],
    },
    {
      id: '3.1-07',
      type: 'quote',
      title: 'Not Your Keys, Not Your Coins',
      content: [
        {
          type: 'text',
          value: '不是你的私钥，就不是你的币。',
        },
      ],
    },
    {
      id: '3.1-summary',
      type: 'summary',
      title: '3.1 本节要点',
      content: [
        {
          type: 'bullets',
          items: [
            '助记词 → 私钥 → 公钥 → 地址，单向派生关系',
            '钱包是管理私钥的工具，资产在区块链上',
            '私钥丢失 = 资产永久丢失，泄露 = 可能被盗',
            'Not Your Keys, Not Your Coins',
          ],
        },
      ],
    },

    // ========== 3.2 钱包与交易所的本质区别 ==========
    {
      id: '3.2-section',
      type: 'section',
      title: '3.2 钱包与交易所的本质区别',
      subtitle: '托管 vs 自托管',
    },
    {
      id: '3.2-01',
      type: 'comparison',
      title: '核心问题：谁控制你的私钥？',
      content: [
        {
          type: 'table',
          headers: ['存放方式', '谁控制私钥？', '你拥有什么？'],
          rows: [
            ['自托管钱包', '你自己', '真正的资产所有权'],
            ['交易所账户', '交易所', '交易所给你的「欠条」'],
          ],
        },
      ],
    },
    {
      id: '3.2-02',
      type: 'content',
      title: '自托管钱包（Non-Custodial）',
      content: [
        {
          type: 'text',
          value: '私钥由用户自己保管，如 MetaMask、Trust Wallet、Ledger 硬件钱包等。',
        },
        {
          type: 'bullets',
          items: [
            '✅ 完全控制：只有你能动用资产',
            '✅ 抗审查：没有人能冻结你的账户',
            '✅ 无需许可：随时可以转账，无需审批',
            '❌ 责任自负：私钥丢失 = 资产永久丢失',
            '❌ 无客服：出问题只能自己解决',
          ],
        },
      ],
    },
    {
      id: '3.2-03',
      type: 'content',
      title: '托管交易所（Custodial）',
      content: [
        {
          type: 'text',
          value: '由交易所代为保管私钥，如 Binance、OKX、Coinbase 等。',
        },
        {
          type: 'bullets',
          items: [
            '✅ 使用方便：注册即用，类似传统金融',
            '✅ 忘记密码可找回：有客服和验证机制',
            '✅ 法币出入金方便：支持银行卡、支付宝等',
            '❌ 交易所可能跑路：历史上发生过多次',
            '❌ 可能被冻结：交易所可以限制你的账户',
          ],
        },
      ],
    },
    {
      id: '3.2-04',
      type: 'comparison',
      title: '风险对比',
      content: [
        {
          type: 'table',
          headers: ['风险类型', '自托管钱包', '托管交易所'],
          rows: [
            ['私钥丢失', '⚠️ 高风险：永久丢失', '✅ 低风险：可找回'],
            ['平台跑路', '✅ 不适用', '⚠️ 高风险：血本无归'],
            ['监管冻结', '✅ 低风险：难以审查', '⚠️ 高风险：可能被冻'],
            ['操作失误', '⚠️ 高风险：转错不可撤', '✅ 低风险：可能可撤'],
          ],
        },
      ],
    },
    {
      id: '3.2-05',
      type: 'comparison',
      title: '适用场景选择',
      content: [
        {
          type: 'table',
          headers: ['你的情况', '推荐方式', '理由'],
          rows: [
            ['新手，少量资金试水', '交易所', '学习成本低，出错可找客服'],
            ['频繁交易', '交易所', '交易速度快，手续费低'],
            ['长期持有', '自托管钱包', '降低交易所风险'],
            ['大额资产', '硬件钱包', '最高安全级别'],
            ['参与 DeFi/NFT', '自托管钱包', 'DApp 需要连接钱包'],
          ],
        },
      ],
    },
    {
      id: '3.2-06',
      type: 'content',
      title: '最佳实践：分散存储',
      content: [
        {
          type: 'text',
          value: '真正成熟的做法是两者结合：',
        },
        {
          type: 'bullets',
          items: [
            '交易所（10-30%）：需要交易和出入金的部分',
            '热钱包（10-20%）：日常使用和 DApp 交互',
            '冷钱包（50-80%）：长期持有的核心资产',
          ],
        },
        {
          type: 'highlight',
          value: '核心原则：不要把所有鸡蛋放在一个篮子里。',
        },
      ],
    },
    {
      id: '3.2-07',
      type: 'content',
      title: '案例：FTX 暴雷的教训',
      content: [
        {
          type: 'text',
          value: '2022 年 11 月，全球第二大交易所 FTX 崩盘：',
        },
        {
          type: 'bullets',
          items: [
            '创始人 SBF 挪用用户存款投资其他业务',
            '用户资产缺口约 80 亿美元',
            '超过 100 万用户的资产被冻结',
            'SBF 因欺诈罪被判处 25 年监禁',
          ],
        },
        {
          type: 'highlight',
          value: '教训：再大的交易所也可能倒闭，长期持有应转到自托管钱包。',
        },
      ],
    },
    {
      id: '3.2-summary',
      type: 'summary',
      title: '3.2 本节要点',
      content: [
        {
          type: 'bullets',
          items: [
            '自托管 vs 托管：谁控制私钥，谁就控制资产',
            '交易所方便但有跑路风险，自托管安全但责任自负',
            '最佳实践：分散存储，冷热分离',
            'FTX 教训：再大的交易所也可能倒闭',
          ],
        },
      ],
    },

    // ========== 3.3 授权、签名与交互的基本逻辑 ==========
    {
      id: '3.3-section',
      type: 'section',
      title: '3.3 授权、签名与交互',
      subtitle: '理解链上操作的基本逻辑',
    },
    {
      id: '3.3-01',
      type: 'content',
      title: '什么是「签名」？',
      content: [
        {
          type: 'text',
          value: '当你在钱包中点击「确认」按钮时，实际上是在用私钥对一条消息进行数字签名。',
        },
        {
          type: 'bullets',
          items: [
            '证明这笔交易确实是由私钥持有者发起的',
            '一旦签名，交易就具有「法律效力」（在区块链上）',
            '签名不等于发送资产，但可能授权别人动用你的资产',
          ],
        },
        {
          type: 'highlight',
          value: '类比：签名就像在支票上签字，签了名的支票别人就可以去兑现。',
        },
      ],
    },
    {
      id: '3.3-02',
      type: 'content',
      title: '三种常见的链上交互',
      content: [
        {
          type: 'numbered',
          items: [
            '普通转账（Transfer）：把资产从你的地址发送到另一个地址',
            'Token 授权（Approve）：允许某个合约动用你的特定 Token',
            '合约调用：与智能合约交互（Swap、存款、Mint NFT 等）',
          ],
        },
      ],
    },
    {
      id: '3.3-03',
      type: 'comparison',
      title: 'Token 授权的危险性',
      content: [
        {
          type: 'table',
          headers: ['授权类型', '含义', '风险等级'],
          rows: [
            ['精确授权', '只授权本次交易需要的数量', '⭐ 低'],
            ['无限授权', '授权合约可以动用你的全部余额', '⭐⭐⭐ 高'],
          ],
        },
        {
          type: 'highlight',
          value: '警告：很多 DApp 默认请求无限授权，一旦合约有漏洞，你的全部资产都可能被盗。',
        },
      ],
    },
    {
      id: '3.3-04',
      type: 'comparison',
      title: '识别危险的授权请求',
      content: [
        {
          type: 'table',
          headers: ['特征', '正常授权', '可疑授权'],
          rows: [
            ['来源', '知名 DApp 官网', '不明链接、空投页面'],
            ['金额', '精确金额或合理上限', '无限授权（Unlimited）'],
            ['合约', '经过审计的知名协议', '未知合约地址'],
            ['时机', '你主动发起操作', '突然弹出的请求'],
          ],
        },
      ],
    },
    {
      id: '3.3-05',
      type: 'content',
      title: '授权请求的危险信号',
      content: [
        {
          type: 'text',
          value: '立即拒绝如果看到：',
        },
        {
          type: 'bullets',
          items: [
            '无限授权请求：显示 "Unlimited" 或超大数字',
            '不明合约：合约地址你从未见过',
            '异常 Token：授权的不是你打算交易的 Token',
            '钓鱼网站：URL 拼写错误（如 uniswop.com）',
            '空投诱导：声称需要授权才能领取空投',
          ],
        },
      ],
    },
    {
      id: '3.3-06',
      type: 'content',
      title: '如何管理授权',
      content: [
        {
          type: 'text',
          value: '推荐工具：',
        },
        {
          type: 'bullets',
          items: [
            'Revoke.cash：查看和撤销授权，多链支持',
            'Etherscan Token Approvals：以太坊链',
            'DeBank：多链支持',
          ],
        },
        {
          type: 'highlight',
          value: '定期检查和清理授权是良好的安全习惯，建议每月检查一次。',
        },
      ],
    },
    {
      id: '3.3-07',
      type: 'comparison',
      title: '签名类型：链上 vs 链下',
      content: [
        {
          type: 'table',
          headers: ['类型', '是否消耗 Gas', '风险'],
          rows: [
            ['链上签名', '是', '中'],
            ['链下签名', '否', '高 ⚠️'],
          ],
        },
        {
          type: 'highlight',
          value: '不要因为「不花 Gas」就随意签名！免费的签名可能让你损失全部资产。',
        },
      ],
    },
    {
      id: '3.3-summary',
      type: 'summary',
      title: '3.3 本节要点',
      content: [
        {
          type: 'bullets',
          items: [
            '签名 = 用私钥证明交易是你发起的',
            '授权让合约可以动用你的 Token，无限授权风险极高',
            '定期使用 Revoke.cash 检查和清理授权',
            '链下签名不花 Gas 但同样危险',
          ],
        },
      ],
    },

    // ========== 3.4 新手最容易踩的安全坑 ==========
    {
      id: '3.4-section',
      type: 'section',
      title: '3.4 新手最容易踩的安全坑',
      subtitle: '识别骗局，保护资产',
    },
    {
      id: '3.4-01',
      type: 'content',
      title: 'Web3 安全的残酷现实',
      content: [
        {
          type: 'highlight',
          value: '在 Web3 世界，没有银行帮你追回损失，没有客服帮你重置密码。',
        },
        {
          type: 'text',
          value: '2023 年数据：',
        },
        {
          type: 'bullets',
          items: [
            '因钓鱼和骗局损失：超过 20 亿美元',
            '平均每起钓鱼攻击损失：约 5 万美元',
            '新用户在前 3 个月最容易受骗',
          ],
        },
      ],
    },
    {
      id: '3.4-02',
      type: 'content',
      title: '骗局一：钓鱼网站',
      content: [
        {
          type: 'text',
          value: '伪造知名 DApp 网站，域名与官方极其相似：',
        },
        {
          type: 'bullets',
          items: [
            '正确：uniswap.org',
            '危险：uniswop.org、un1swap.com',
          ],
        },
        {
          type: 'highlight',
          value: '绝对铁律：任何要求你输入助记词的网站都是骗局。',
        },
      ],
    },
    {
      id: '3.4-03',
      type: 'content',
      title: '骗局二：假空投',
      content: [
        {
          type: 'text',
          value: '钱包里突然出现不明 Token，声称需要去某网站「领取」。',
        },
        {
          type: 'text',
          value: '正确处理：',
        },
        {
          type: 'numbered',
          items: [
            '不要交互：不要转移、不要授权、不要访问链接',
            '隐藏代币：在钱包中隐藏这些垃圾 Token',
            '不要恐慌：这些 Token 本身不会盗取你的资产',
          ],
        },
      ],
    },
    {
      id: '3.4-04',
      type: 'comparison',
      title: '骗局三：社工攻击（假客服）',
      content: [
        {
          type: 'table',
          headers: ['骗子说', '真相'],
          rows: [
            ['我是 MetaMask 客服', 'MetaMask 没有客服，更不会私信你'],
            ['需要验证你的钱包', '没有任何验证需要你提供助记词'],
            ['同步钱包需要助记词', '同步只需要导入，不需要给任何人'],
            ['恭喜你中奖', '真正的空投不需要你做任何验证'],
          ],
        },
      ],
    },
    {
      id: '3.4-05',
      type: 'content',
      title: '骗局四：恶意授权',
      content: [
        {
          type: 'text',
          value: '诱导你对恶意合约进行无限授权，一旦授权立即转走资产。',
        },
        {
          type: 'text',
          value: '防护措施：',
        },
        {
          type: 'bullets',
          items: [
            '使用精确授权而非无限授权',
            '定期用 Revoke.cash 检查授权',
            '不确定就拒绝',
          ],
        },
      ],
    },
    {
      id: '3.4-06',
      type: 'comparison',
      title: '助记词安全存储',
      content: [
        {
          type: 'table',
          headers: ['应该做 ✅', '绝对不要做 ❌'],
          rows: [
            ['纸质备份，防水防火保存', '截图保存'],
            ['钢板刻录', '存在云盘'],
            ['多地备份（2-3 个安全地点）', '发给自己的微信/邮箱'],
            ['使用硬件钱包', '存在备忘录 APP'],
          ],
        },
      ],
    },
    {
      id: '3.4-07',
      type: 'content',
      title: '多钱包策略',
      content: [
        {
          type: 'bullets',
          items: [
            '热钱包（最多 5%）：用于日常小额操作、空投交互',
            '温钱包（15-25%）：用于 DeFi、NFT 交易',
            '冷钱包（70-80%）：长期持有的核心资产',
          ],
        },
      ],
    },
    {
      id: '3.4-summary',
      type: 'summary',
      title: '3.4 本节要点',
      content: [
        {
          type: 'bullets',
          items: [
            '常见骗局：钓鱼网站、假空投、假客服、恶意授权',
            '任何索要助记词的都是骗子',
            '助记词纸质备份，绝不截图存云端',
            '采用多钱包策略，冷热分离',
          ],
        },
      ],
    },

    // ========== 3.5 实操：测试网第一笔交易 ==========
    {
      id: '3.5-section',
      type: 'section',
      title: '3.5 实操：测试网第一笔交易',
      subtitle: '在安全环境中实践',
    },
    {
      id: '3.5-01',
      type: 'content',
      title: '为什么要用测试网？',
      content: [
        {
          type: 'bullets',
          items: [
            '测试币没有真实价值，可以免费领取',
            '操作方式与主网完全一致',
            '即使操作失误也不会有任何损失',
          ],
        },
        {
          type: 'highlight',
          value: '在正式使用真金白银之前，务必先在测试网上多练习！',
        },
      ],
    },
    {
      id: '3.5-02',
      type: 'steps',
      title: '实操步骤一：安装 MetaMask',
      steps: [
        {
          title: '步骤 1',
          description: '访问 metamask.io（只从官方网站下载！）',
        },
        {
          title: '步骤 2',
          description: '点击 Download，选择浏览器扩展',
        },
        {
          title: '步骤 3',
          description: '在 Chrome Web Store 点击「添加到 Chrome」',
        },
        {
          title: '步骤 4',
          description: '创建新钱包，设置密码',
        },
        {
          title: '步骤 5',
          description: '备份助记词（用纸笔抄下来，不要截图！）',
        },
        {
          title: '步骤 6',
          description: '确认助记词，完成创建',
        },
      ],
    },
    {
      id: '3.5-03',
      type: 'content',
      title: '实操步骤二：添加测试网络',
      content: [
        {
          type: 'text',
          value: '推荐添加 Sepolia 测试网（以太坊官方测试网）：',
        },
        {
          type: 'numbered',
          items: [
            '点击 MetaMask 左上角网络选择器',
            '在设置中启用「显示测试网络」',
            '选择 Sepolia',
          ],
        },
      ],
    },
    {
      id: '3.5-04',
      type: 'content',
      title: '实操步骤三：领取测试币',
      content: [
        {
          type: 'text',
          value: '测试币通过「水龙头」（Faucet）免费领取：',
        },
        {
          type: 'bullets',
          items: [
            'Google Cloud Faucet: cloud.google.com/web3/faucet',
            'Alchemy Faucet: sepoliafaucet.com',
            'Infura Faucet: infura.io/faucet/sepolia',
          ],
        },
        {
          type: 'highlight',
          value: '水龙头可能有 24 小时领取限制，如果一个不工作尝试另一个。',
        },
      ],
    },
    {
      id: '3.5-05',
      type: 'steps',
      title: '实操步骤四：完成转账',
      steps: [
        {
          title: '步骤 1',
          description: '点击「发送」按钮',
        },
        {
          title: '步骤 2',
          description: '输入接收地址（可以创建第二个账户）',
        },
        {
          title: '步骤 3',
          description: '输入金额（如 0.01 SepoliaETH）',
        },
        {
          title: '步骤 4',
          description: '查看交易详情（含 Gas 费）',
        },
        {
          title: '步骤 5',
          description: '点击「确认」',
        },
        {
          title: '步骤 6',
          description: '等待交易完成（通常 15-30 秒）',
        },
      ],
    },
    {
      id: '3.5-06',
      type: 'content',
      title: '实操步骤五：查看区块浏览器',
      content: [
        {
          type: 'text',
          value: '区块浏览器是查看区块链数据的网站：',
        },
        {
          type: 'bullets',
          items: [
            '以太坊主网：etherscan.io',
            'Sepolia 测试网：sepolia.etherscan.io',
          ],
        },
        {
          type: 'text',
          value: '在区块浏览器可以看到交易哈希、状态、发送方、接收方、Gas 费等信息。',
        },
      ],
    },
    {
      id: '3.5-07',
      type: 'content',
      title: '完成检查清单',
      content: [
        {
          type: 'bullets',
          items: [
            '✅ MetaMask 已安装并创建钱包',
            '✅ 助记词已安全备份（纸质，非截图）',
            '✅ 已添加测试网',
            '✅ 已领取测试币',
            '✅ 已完成至少一笔测试转账',
            '✅ 已在区块浏览器查看交易记录',
          ],
        },
        {
          type: 'highlight',
          value: '恭喜！你已经具备了在 Web3 世界独立操作的基础能力！',
        },
      ],
    },
    {
      id: '3.5-summary',
      type: 'summary',
      title: '3.5 本节要点',
      content: [
        {
          type: 'bullets',
          items: [
            '测试网是无风险的练习环境',
            '钱包安装要从官方网站下载',
            '助记词必须纸质备份',
            '通过水龙头领取测试币',
            '区块浏览器可以查看所有交易记录',
          ],
        },
      ],
    },

    // ========== Part 3 总结 ==========
    {
      id: '03-final',
      type: 'title',
      title: 'Part 3 完成',
      subtitle: '你已经掌握了 Web3 世界生存的基本技能',
    },
  ],
}
