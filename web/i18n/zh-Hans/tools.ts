const translation = {
  title: "工具",
  createCustomTool: "创建自定义工具",
  customToolTip: "了解更多关于 Superbot 自定义工具的信息",
  type: {
    all: "全部",
    builtIn: "内置",
    custom: "自定义",
    workflow: "工作流",
  },
  contribute: {
    line1: "我有兴趣为 ",
    line2: "Superbot 贡献工具。",
    viewGuide: "查看指南",
  },
  author: "作者",
  auth: {
    unauthorized: "去授权",
    authorized: "已授权",
    setup: "要使用请先授权",
    setupModalTitle: "设置授权",
    setupModalTitleDescription:
      "配置凭据后，工作区中的所有成员都可以在编排应用程序时使用此工具。",
  },
  includeToolNum: "包含 {{num}} 个工具",
  addTool: "添加工具",
  addToolModal: {
    type: "类型",
    category: "类别",
    add: "添加",
    added: "已添加",
    manageInTools: "去工具列表管理",
    emptyTitle: "没有可用的工作流工具",
    emptyTip: "去 “工作流 -> 发布为工具” 添加",
  },
  createTool: {
    title: "创建自定义工具",
    editAction: "编辑",
    editTitle: "编辑自定义工具",
    name: "名称",
    toolNamePlaceHolder: "输入工具名称",
    nameForToolCall: "工具调用名称",
    nameForToolCallPlaceHolder: "用于机器识别，如 getCurrentWeather, list_pets",
    nameForToolCallTip: "仅支持数字、字母、下划线。",
    description: "工具描述",
    descriptionPlaceholder: "工具用途的简要描述，例如获取特定位置的温度。",
    schema: "Schema",
    schemaPlaceHolder: "在此处输入您的 OpenAPI schema",
    viewSchemaSpec: "查看 OpenAPI-Swagger 规范",
    importFromUrl: "从 URL 中导入",
    importFromUrlPlaceHolder: "https://...",
    urlError: "请输入有效的 URL",
    examples: "例子",
    exampleOptions: {
      json: "天气(JSON)",
      yaml: "宠物商店(YAML)",
      blankTemplate: "空白模版",
    },
    availableTools: {
      title: "可用工具",
      name: "名称",
      description: "描述",
      method: "方法",
      path: "路径",
      action: "操作",
      test: "测试",
    },
    authMethod: {
      title: "鉴权方法",
      type: "鉴权类型",
      keyTooltip:
        "HTTP 头部名称，如果你不知道是什么，可以将其保留为 Authorization 或设置为自定义值",
      types: {
        none: "无",
        api_key: "API Key",
        apiKeyPlaceholder: "HTTP 头部名称，用于传递 API Key",
        apiValuePlaceholder: "输入 API Key",
      },
      key: "键",
      value: "值",
    },
    authHeaderPrefix: {
      title: "鉴权头部前缀",
      types: {
        basic: "Basic",
        bearer: "Bearer",
        custom: "Custom",
      },
    },
    privacyPolicy: "隐私协议",
    privacyPolicyPlaceholder: "请输入隐私协议",
    toolInput: {
      title: "工具入参",
      name: "名称",
      required: "必须",
      method: "方式",
      methodSetting: "用户输入",
      methodSettingTip: "用户在工具配置中填写",
      methodParameter: "LLM 填入",
      methodParameterTip: "LLM 在推理过程中填写",
      label: "标签",
      labelPlaceholder: "选择标签(可选)",
      description: "描述",
      descriptionPlaceholder: "参数意义的描述",
    },
    customDisclaimer: "自定义免责声明",
    customDisclaimerPlaceholder: "请输入自定义免责声明",
    confirmTitle: "确认保存？",
    confirmTip: "发布新的工具版本可能会影响该工具已关联的应用",
  },
  test: {
    title: "测试",
    parametersValue: "参数和值",
    parameters: "参数",
    value: "值",
    testResult: "测试结果",
    testResultPlaceholder: "测试结果将显示在这里",
  },
  thought: {
    using: "正在使用",
    used: "已使用",
    requestTitle: "请求来自",
    responseTitle: "响应来自",
  },
  setBuiltInTools: {
    info: "信息",
    setting: "设置",
    toolDescription: "工具描述",
    parameters: "参数",
    string: "字符串",
    number: "数字",
    required: "必填",
    infoAndSetting: "信息和设置",
  },
  noCustomTool: {
    title: "没有自定义工具!",
    content: "在此统一添加和管理你的自定义工具，方便构建应用时使用。",
    createTool: "创建工具",
  },
  noSearchRes: {
    title: "抱歉，没有结果！",
    content: "我们找不到任何与您的搜索相匹配的工具。",
    reset: "重置搜索",
  },
  builtInPromptTitle: "提示词",
  toolRemoved: "工具已被移除",
  notAuthorized: "工具未授权",
  howToGet: "如何获取",
  openInStudio: "在工作室中打开",
  toolNameUsageTip: "工具调用名称，用于 Agent 推理和提示词",
};

export default translation;
