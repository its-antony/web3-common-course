import type { Presentation } from '@/types/slide'

export const part00: Presentation = {
  id: 'part00',
  title: '导论',
  partNumber: 0,
  slides: [
    // Part 标题页
    {
      id: '00-title',
      type: 'title',
      title: '导论',
      subtitle: '开启你的 Web3 认知之旅',
    },

    // ========== 0.1 这门课解决什么问题 ==========
    {
      id: '0.1-section',
      type: 'section',
      title: '0.1 这门课解决什么问题',
      subtitle: '理解课程的核心价值与定位',
    },
    {
      id: '0.1-01',
      type: 'quote',
      title: '信息过载的时代',
      content: [
        {
          type: 'text',
          value: '在 Web3 的世界里，信息并不稀缺，甚至可以说是过载的。',
        },
      ],
    },
    {
      id: '0.1-02',
      type: 'content',
      title: '你可能每天都会看到',
      content: [
        {
          type: 'bullets',
          items: [
            '"比特币又突破新高了"',
            '"某某项目空投了大毛"',
            '"Web3 是下一代互联网革命"',
            '"区块链就是个庞氏骗局"',
          ],
        },
        {
          type: 'highlight',
          value: '这些信息就像散落在地上的拼图碎片，很难拼成一张完整的地图。',
        },
      ],
    },
    {
      id: '0.1-03',
      type: 'content',
      title: '痛点一：碎片化信息 → 系统性认知',
      content: [
        {
          type: 'text',
          value: '这门课帮你把这些碎片拼起来，构建一个结构化、系统化的认知地图：',
        },
        {
          type: 'numbered',
          items: [
            '底层：区块链是什么',
            '中间层：DeFi、NFT 怎么玩',
            '上层：Web3 有哪些赛道和机会',
          ],
        },
      ],
    },
    {
      id: '0.1-04',
      type: 'content',
      title: '痛点二：也是一门"避坑指南"',
      content: [
        {
          type: 'text',
          value: '对于新人来说，Web3 最可怕的不是"不懂"，而是"似懂非懂"。',
        },
        {
          type: 'bullets',
          items: [
            '很多人因为不懂私钥管理，导致资产被盗',
            '很多人因为不懂经济模型，接盘了注定归零的土狗项目',
            '很多人因为不懂风险控制，在一次黑天鹅事件中归零',
          ],
        },
        {
          type: 'highlight',
          value: '我们会花大量篇幅教你如何不亏钱。',
        },
      ],
    },
    {
      id: '0.1-05',
      type: 'content',
      title: '痛点三：从"看客"到"玩家"',
      content: [
        {
          type: 'text',
          value: '这门课不仅是听理论，更重要的是实操。',
        },
        {
          type: 'bullets',
          items: [
            '读一百篇钱包文章，不如亲自创建一个钱包、转一笔账',
            '听一百个 DeFi 故事，不如亲自去 Uniswap 做一次兑换',
          ],
        },
        {
          type: 'highlight',
          value: '我们会通过具体的实操任务，带你从旁观者变成真正的 Web3 参与者。',
        },
      ],
    },
    {
      id: '0.1-06',
      type: 'comparison',
      title: '这门课不解决什么问题',
      content: [
        {
          type: 'table',
          headers: ['不提供', '原因'],
          rows: [
            ['财富密码', '任何承诺高收益的都是骗局'],
            ['深度代码开发', '这是通识课，面向非技术背景人士'],
            ['暴富保证', 'Web3 高风险高回报，我们只能提升概率'],
          ],
        },
      ],
    },
    {
      id: '0.1-07',
      type: 'content',
      title: '案例：小白小明的 Web3 之旅',
      content: [
        {
          type: 'numbered',
          items: [
            '第一天：听大 V 说 NFT 火，买了个图片，跌了 90%',
            '第二天：听说新公链发币，点了钓鱼链接，钱包被盗空',
            '第三天：觉得太难了，决定退出',
          ],
        },
        {
          type: 'highlight',
          value: '这门课就是为了避免让大家成为那个"受伤的小明"。',
        },
      ],
    },
    {
      id: '0.1-summary',
      type: 'summary',
      title: '0.1 本节要点',
      content: [
        {
          type: 'bullets',
          items: [
            '课程帮你把碎片信息拼成系统认知地图',
            '重点教你如何不亏钱（安全与风险认知）',
            '通过实操任务让你从看客变成玩家',
            '不提供财富密码、不教代码、不保证暴富',
          ],
        },
      ],
    },

    // ========== 0.2 Web3 通识课的边界 ==========
    {
      id: '0.2-section',
      type: 'section',
      title: '0.2 Web3 通识课的边界',
      subtitle: '学什么，不学什么',
    },
    {
      id: '0.2-01',
      type: 'content',
      title: '三个圈层的学习边界',
      content: [
        {
          type: 'text',
          value: 'Web3 是一个庞大的生态，包含技术、金融、法律、社区运营等多个维度。作为一门"通识课"，我们必须有所为，有所不为。',
        },
      ],
    },
    {
      id: '0.2-02',
      type: 'content',
      title: '核心圈（必修）：建立世界观与基本技能',
      content: [
        {
          type: 'bullets',
          items: [
            '基本概念：区块链、去中心化、Token、智能合约',
            '核心工具：钱包（MetaMask）、交易所、区块浏览器',
            '安全意识：私钥管理、防骗指南',
            '行业全景：DeFi、NFT、GameFi 等赛道概览',
          ],
        },
      ],
    },
    {
      id: '0.2-03',
      type: 'content',
      title: '拓展圈（选修）：深入垂直赛道与商业逻辑',
      content: [
        {
          type: 'bullets',
          items: [
            '赛道分析：看懂某个赛道在解决什么问题，看懂项目的商业模式',
            '判断方法：给你一套分析项目的框架（Part 7）',
          ],
        },
        {
          type: 'highlight',
          value: '这一部分我们会带你"看见"，但不要求每个人都"精通"。',
        },
      ],
    },
    {
      id: '0.2-04',
      type: 'content',
      title: '边界外（不讲）',
      content: [
        {
          type: 'bullets',
          items: [
            '复杂的代码实现：不教怎么写 Solidity 代码，也不教怎么发币',
            '高频交易策略：不教 K 线技术分析，不教如何做日内交易',
            '法律合规细节：会提及风险，但不会深入各国的具体法律条文',
          ],
        },
      ],
    },
    {
      id: '0.2-05',
      type: 'comparison',
      title: '"认知"优于"资讯"',
      content: [
        {
          type: 'table',
          headers: ['类型', '示例', '特点'],
          rows: [
            ['资讯', 'Uniswap 推出 v4 版本', '有时效性，过几天就旧了'],
            ['认知', 'AMM 机制解决了流动性难题', '底层逻辑，长效有用'],
          ],
        },
        {
          type: 'highlight',
          value: '本课程侧重于培养你的"Web3 商业认知"和"底层逻辑思维"。',
        },
      ],
    },
    {
      id: '0.2-06',
      type: 'quote',
      title: '"方法论"优于"具体的鱼"',
      content: [
        {
          type: 'text',
          value: '授人以鱼不如授人以渔。我们不会告诉你"某某项目很好，快去买"，而是教你如何通过白皮书、链上数据、社区活跃度去判断一个项目是否靠谱。',
        },
      ],
    },
    {
      id: '0.2-07',
      type: 'comparison',
      title: '案例：老张和老李的一年',
      content: [
        {
          type: 'table',
          headers: ['人物', '策略', '结果'],
          rows: [
            ['老张（追逐资讯派）', '混迹电报群，追热点冲土狗', '精力耗尽，资产归零'],
            ['老李（建立体系派）', '系统学习底层逻辑，只投看懂的赛道', '资产稳步增值，睡得安稳'],
          ],
        },
        {
          type: 'highlight',
          value: '本课程希望培养更多的"老李"。',
        },
      ],
    },
    {
      id: '0.2-summary',
      type: 'summary',
      title: '0.2 本节要点',
      content: [
        {
          type: 'bullets',
          items: [
            '课程分为核心圈（必修）、拓展圈（选修）、边界外（不讲）',
            '认知比资讯更有价值，底层逻辑长效有用',
            '授人以渔：教方法论，不给具体的"财富密码"',
          ],
        },
      ],
    },

    // ========== 0.3 课程结构说明与学习建议 ==========
    {
      id: '0.3-section',
      type: 'section',
      title: '0.3 课程结构说明与学习建议',
      subtitle: '如何高效学习本课程',
    },
    {
      id: '0.3-01',
      type: 'content',
      title: '课程设计逻辑："倒金字塔"',
      content: [
        {
          type: 'text',
          value: '从宏观世界观，到底层技术原理，再到上层应用，最后回归个人决策。',
        },
      ],
    },
    {
      id: '0.3-02',
      type: 'steps',
      title: '第一阶段：建立认知（Part 1-2）',
      content: [
        {
          type: 'numbered',
          items: [
            'Part 1 世界观：Web3 到底是什么？为什么会有 Web3？',
            'Part 2 最小技术原理：区块链、Layer2 这些基本概念',
          ],
        },
      ],
    },
    {
      id: '0.3-03',
      type: 'content',
      title: '第二阶段：必会技能（Part 3）',
      content: [
        {
          type: 'highlight',
          value: 'Part 3 钱包与安全：这是最重要的一章！',
        },
        {
          type: 'text',
          value: '不学好这一章，不要进行任何资金操作，否则你的钱随时可能归零。',
        },
      ],
    },
    {
      id: '0.3-04',
      type: 'steps',
      title: '第三阶段：行业拆解（Part 4-6）',
      content: [
        {
          type: 'numbered',
          items: [
            'Part 4 Token 经济：钱从哪里来？为什么有的币涨有的币跌？',
            'Part 5 商业赛道：DeFi、NFT、GameFi、DePIN 等',
            'Part 6 风险与避坑：了解镰刀是怎么割韭菜的',
          ],
        },
      ],
    },
    {
      id: '0.3-05',
      type: 'steps',
      title: '第四阶段：进阶与决策（Part 7-11）',
      content: [
        {
          type: 'numbered',
          items: [
            'Part 7 判断方法：给你一套"火眼金睛"',
            'Part 8 & 9 角色与参与：找到你的位置',
            'Part 10 & 11 路径与资源：课程结束，旅程才刚开始',
          ],
        },
      ],
    },
    {
      id: '0.3-06',
      type: 'content',
      title: '学习建议',
      content: [
        {
          type: 'numbered',
          items: [
            '不要跳过 Part 3 — 这是你在 Web3 世界生存的氧气面罩',
            '"知行合一" — 去操作，体感比理论更重要',
            '必须输出 — 费曼学习法：能讲给别人听，说明你真懂了',
          ],
        },
      ],
    },
    {
      id: '0.3-07',
      type: 'comparison',
      title: '时间规划建议',
      content: [
        {
          type: 'table',
          headers: ['周次', '内容', '目标'],
          rows: [
            ['第一周', 'Part 0 - Part 3', '打基础，搞定钱包'],
            ['第二周', 'Part 4 - Part 6', '啃硬骨头，理解商业模式'],
            ['第三周', 'Part 7 - Part 11', '方法论与个人规划'],
          ],
        },
        {
          type: 'text',
          value: '每日投入建议：30-60 分钟',
        },
      ],
    },
    {
      id: '0.3-08',
      type: 'content',
      title: '案例：健身的比喻',
      content: [
        {
          type: 'bullets',
          items: [
            'Part 1-2 = 学习解剖学原理（肌肉怎么长）',
            'Part 3 = 学习如何安全使用器械（防止受伤）',
            'Part 4-6 = 具体的训练动作（卧推、深蹲、硬拉）',
            'Part 7-11 = 制定长期的训练计划',
          ],
        },
        {
          type: 'highlight',
          value: '只看书不举铁，永远练不出肌肉。不学安全直接冲土狗，大概率会受重伤。',
        },
      ],
    },
    {
      id: '0.3-summary',
      type: 'summary',
      title: '0.3 本节要点',
      content: [
        {
          type: 'bullets',
          items: [
            '课程分四个阶段：认知 → 技能 → 行业 → 决策',
            'Part 3 钱包安全是最重要的一章，不能跳过',
            '知行合一 + 输出倒逼输入 = 高效学习',
          ],
        },
      ],
    },

    // ========== 0.4 学习任务与输出要求说明 ==========
    {
      id: '0.4-section',
      type: 'section',
      title: '0.4 学习任务与输出要求说明',
      subtitle: '输出倒逼输入',
    },
    {
      id: '0.4-01',
      type: 'content',
      title: '为什么要设置"学习任务"？',
      content: [
        {
          type: 'numbered',
          items: [
            '强制思考：要回答问题，必须先在脑子里把逻辑理顺',
            '验证掌握：能写出来、做出来才是真懂',
            '建立作品集：你的产出都是未来的"简历"',
          ],
        },
      ],
    },
    {
      id: '0.4-02',
      type: 'comparison',
      title: '任务类型概览',
      content: [
        {
          type: 'table',
          headers: ['类型', '形式', '目的'],
          rows: [
            ['A 类：概念转述', '"用一句话总结…"', '检验概念理解深度'],
            ['B 类：对比分析', '"做一张对比表…"', '锻炼结构化思维'],
            ['C 类：实操交互', '"创建钱包并截图"', '打破动手恐惧症'],
          ],
        },
      ],
    },
    {
      id: '0.4-03',
      type: 'content',
      title: '如何高质量完成任务？',
      content: [
        {
          type: 'bullets',
          items: [
            '不要敷衍：敷衍任务就是敷衍你自己的时间',
            '  小红书、X推特建立社交媒体IP账号，用Notion沉淀你的学习记。',
            '善用工具：小红书、X推特建立社交媒体IP账号，用Notion沉淀你的学习记。X(Twitter)记录心得',
            '公开分享：通过公开分享沉淀的影响力和认知，根据IP定位写企打上 #挑战100天转型计划 #Web3转型学习等tag，并且@Maria和@Emily，导师会给你提供指导。',
          ],
        },
        {
          type: 'highlight',
          value: '公开分享沉淀内容资产会成为你撬动多种机会的杠杆，且让你拥有社交名片助力实现破圈收获同行关注进入业内社交圈子。',
        },
      ],
    },
    {
      id: '0.4-04',
      type: 'content',
      title: '案例：输出改变命运的实习生',
      content: [
        {
          type: 'bullets',
          items: [
            'A 同学：简历写着"精通 Web3"，面试时问具体概念支支吾吾',
            'B 同学：简历平平，但附上了一个月的"Web3 学习笔记"链接',
          ],
        },
        {
          type: 'highlight',
          value: '机构毫不犹豫地录用了 B 同学。在 Web3，Proof of Work > 简历。',
        },
      ],
    },
    {
      id: '0.4-05',
      type: 'quote',
      title: 'Proof of Work',
      content: [
        {
          type: 'text',
          value: '你的每一次作业，都是你的 Proof of Work。',
        },
      ],
    },
    {
      id: '0.4-summary',
      type: 'summary',
      title: '0.4 本节要点',
      content: [
        {
          type: 'bullets',
          items: [
            '学习任务分三类：概念转述、对比分析、实操交互',
            '输出倒逼输入，写出来才是真懂',
            '公开分享你的学习成果，建立 Proof of Work',
          ],
        },
      ],
    },

    // ========== Part 0 总结 ==========
    {
      id: '00-final',
      type: 'title',
      title: 'Part 0 完成',
      subtitle: '准备好进入 Web3 的世界了吗？',
    },
  ],
}
