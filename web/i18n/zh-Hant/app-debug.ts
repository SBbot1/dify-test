const translation = {
  pageTitle: {
    line1: '提示詞',
    line2: '編排',
  },
  orchestrate: '編排',
  promptMode: {
    simple: '切換到專家模式以編輯完整的提示詞',
    advanced: '專家模式',
    switchBack: '返回簡易模式',
    advancedWarning: {
      title: '您已切換到專家模式，一旦修改提示詞，將無法返回簡易模式。',
      description: '在專家模式下，您可以編輯完整的提示詞。',
      learnMore: '瞭解更多',
      ok: '確定',
    },
    operation: {
      addMessage: '新增訊息',
    },
    contextMissing: '上下文內容塊缺失，提示詞的有效性可能不好。',
  },
  operation: {
    applyConfig: '釋出',
    resetConfig: '重置',
    debugConfig: '除錯',
    addFeature: '新增功能',
    automatic: '產生',
    stopResponding: '停止響應',
    agree: '贊同',
    disagree: '反對',
    cancelAgree: '取消贊同',
    cancelDisagree: '取消反對',
    userAction: '使用者表示',
  },
  notSetAPIKey: {
    title: 'LLM 提供者的金鑰未設定',
    trailFinished: '試用已結束',
    description: '在除錯之前需要設定 LLM 提供者的金鑰。',
    settingBtn: '去設定',
  },
  trailUseGPT4Info: {
    title: '當前不支援使用 gpt-4',
    description: '使用 gpt-4，請設定 API Key',
  },
  feature: {
    groupChat: {
      title: '聊天增強',
      description: '為聊天型應用新增預對話設定，可以提升使用者體驗。',
    },
    groupExperience: {
      title: '體驗增強',
    },
    conversationOpener: {
      title: '對話開場白',
      description:
        '在對話型應用中，讓 AI 主動說第一段話可以拉近與使用者間的距離。',
    },
    suggestedQuestionsAfterAnswer: {
      title: '下一步問題建議',
      description: '設定下一步問題建議可以讓使用者更好的對話。',
      resDes: '回答結束後系統會給出 3 個建議',
      tryToAsk: '試著問問',
    },
    moreLikeThis: {
      title: '更多類似的',
      description: '一次生成多條文字，可在此基礎上編輯並繼續生成',
      generateNumTip: '每次生成數',
      tip: '使用此功能將會額外消耗 tokens',
    },
    speechToText: {
      title: '語音轉文字',
      description: '啟用後，您可以使用語音輸入。',
      resDes: '語音輸入已啟用',
    },
    textToSpeech: {
      title: '文字轉語音',
      description: '啟用後，文字可以轉換成語音。',
      resDes: '文字轉音訊已啟用',
    },
    citation: {
      title: '引用和歸屬',
      description: '啟用後，顯示源文件和生成內容的歸屬部分。',
      resDes: '引用和歸屬已啟用',
    },
    annotation: {
      title: '標註回覆',
      description:
        '啟用後，將標註使用者的回覆，以便在使用者重複提問時快速響應。',
      resDes: '標註回覆已啟用',
      scoreThreshold: {
        title: '分數閾值',
        description: '用於設定標註回覆的匹配相似度閾值。',
        easyMatch: '容易匹配',
        accurateMatch: '精準匹配',
      },
      matchVariable: {
        title: '匹配變數',
        choosePlaceholder: '請選擇變數',
      },
      cacheManagement: '標註管理',
      cached: '已標註',
      remove: '移除',
      removeConfirm: '刪除這個標註？',
      add: '新增標註',
      edit: '編輯標註',
    },
    dataSet: {
      title: '上下文',
      noData: '您可以匯入知識庫作為上下文',
      words: '詞',
      textBlocks: '文字塊',
      selectTitle: '選擇引用知識庫',
      selected: '個知識庫被選中',
      noDataSet: '未找到知識庫',
      toCreate: '去建立',
      notSupportSelectMulti: '目前只支援引用一個知識庫',
      queryVariable: {
        title: '查詢變數',
        tip: '該變數將用作上下文檢索的查詢輸入，獲取與該變數的輸入相關的上下文資訊。',
        choosePlaceholder: '請選擇變數',
        noVar: '沒有變數',
        noVarTip: '請建立變數',
        unableToQueryDataSet: '無法查詢知識庫',
        unableToQueryDataSetTip:
          '無法成功查詢知識庫，請在上下文部分選擇一個上下文查詢變數。',
        ok: '好的',
        contextVarNotEmpty: '上下文查詢變數不能為空',
        deleteContextVarTitle: '刪除變數“{{varName}}”？',
        deleteContextVarTip:
          '該變數已被設定為上下文查詢變數，刪除該變數將影響知識庫的正常使用。 如果您仍需要刪除它，請在上下文部分中重新選擇它。',
      },
    },
    tools: {
      title: '工具',
      tips: '工具提供了一個標準的 API 呼叫方式，將使用者輸入或變數作為 API 的請求引數，用於查詢外部資料作為上下文。',
      toolsInUse: '{{count}} 工具使用中',
      modal: {
        title: '工具',
        toolType: {
          title: '工具型別',
          placeholder: '請選擇工具型別',
        },
        name: {
          title: '名稱',
          placeholder: '請填寫名稱',
        },
        variableName: {
          title: '變數名稱',
          placeholder: '請填寫變數名稱',
        },
      },
    },
    conversationHistory: {
      title: '對話歷史',
      description: '設定對話角色的字首名稱',
      tip: '對話歷史未啟用，請在上面的提示中新增<histories>。',
      learnMore: '瞭解更多',
      editModal: {
        title: '編輯對話角色名稱',
        userPrefix: '使用者字首',
        assistantPrefix: '助手字首',
      },
    },
    toolbox: {
      title: '工具箱',
    },
    moderation: {
      title: '內容審查',
      description: '您可以呼叫審查 API 或者維護敏感詞庫來使模型更安全地輸出。',
      allEnabled: '審查輸入/審查輸出 內容已啟用',
      inputEnabled: '審查輸入內容已啟用',
      outputEnabled: '審查輸出內容已啟用',
      modal: {
        title: '內容審查設定',
        provider: {
          title: '類別',
          openai: 'OpenAI Moderation',
          openaiTip: {
            prefix: 'OpenAI Moderation 需要在',
            suffix: '中配置 OpenAI API 金鑰。',
          },
          keywords: '關鍵詞',
        },
        keywords: {
          tip: '每行一個，用換行符分隔。每行最多 100 個字元。',
          placeholder: '每行一個，用換行符分隔',
          line: '行',
        },
        content: {
          input: '審查輸入內容',
          output: '審查輸出內容',
          preset: '預設回覆',
          placeholder: '這裡預設回覆內容',
          condition: '審查輸入內容和審查輸出內容至少啟用一項',
          fromApi: '預設回覆透過 API 返回',
          errorMessage: '預設回覆不能為空',
          supportMarkdown: '支援 Markdown',
        },
        openaiNotConfig: {
          before: 'OpenAI 內容審查需要在',
          after: '中配置 OpenAI API 金鑰。',
        },
      },
    },
  },
  resetConfig: {
    title: '確認重置？',
    message: '重置將丟失當前頁面所有修改，恢復至上次釋出時的配置',
  },
  errorMessage: {
    nameOfKeyRequired: '變數 {{key}} 對應的名稱必填',
    valueOfVarRequired: '{{key}}必填',
    queryRequired: '主要文字必填',
    waitForResponse: '請等待上條資訊響應完成',
    waitForBatchResponse: '請等待批次任務完成',
    notSelectModel: '請選擇模型',
    waitForImgUpload: '請等待圖片上傳完成',
  },
  chatSubTitle: '提示詞',
  completionSubTitle: '字首提示詞',
  promptTip:
    '提示詞用於對 AI 的回覆做出一系列指令和約束。可插入表單變數，例如 {{input}}。這段提示詞不會被終端使用者所看到。',
  formattingChangedTitle: '編排已改變',
  formattingChangedText: '修改編排將重置除錯區域，確定嗎？',
  variableTitle: '變數',
  notSetVar:
    '變數能使使用者輸入表單引入提示詞或開場白，你可以試試在提示詞中輸入 {{input}}',
  variableTip:
    '變數將以表單形式讓使用者在對話前填寫，使用者填寫的表單內容將自動替換提示詞中的變數。',
  autoAddVar: '提示詞中引用了未定義的變數，是否自動新增到使用者輸入表單中？',
  variableTable: {
    key: '變數 Key',
    name: '欄位名稱',
    optional: '可選',
    type: '型別',
    action: '操作',
    typeString: '文字',
    typeSelect: '下拉選項',
  },
  varKeyError: {
    canNoBeEmpty: '變數不能為空',
    tooLong: '變數: {{key}} 長度太長。不能超過 30 個字元',
    notValid: '變數: {{key}} 非法。只能包含英文字元，數字和下劃線',
    notStartWithNumber: '變數: {{key}} 不能以數字開頭',
    keyAlreadyExists: '變數:{{key}} 已存在',
  },
  otherError: {
    promptNoBeEmpty: '提示詞不能為空',
    historyNoBeEmpty: '提示詞中必須設定對話歷史',
    queryNoBeEmpty: '提示詞中必須設定查詢內容',
  },
  variableConig: {
    'addModalTitle': '新增變數',
    'editModalTitle': '編輯變數',
    'description': '設定變數 {{varName}}',
    'fieldType': '欄位型別',
    'string': '文字',
    'text-input': '文字',
    'paragraph': '段落',
    'select': '下拉選項',
    'number': '數字',
    'notSet': '未設定，在 Prompt 中輸入 {{input}} 試試',
    'stringTitle': '文字框設定',
    'maxLength': '最大長度',
    'options': '選項',
    'addOption': '新增選項',
    'apiBasedVar': '基於 API 的變數',
    'varName': '變數名稱',
    'inputPlaceholder': '請輸入',
    'labelName': '顯示名稱',
    'required': '必填',
    'errorMsg': {
      varNameRequired: '變數名稱必填',
      labelNameRequired: '顯示名稱必填',
      varNameCanBeRepeat: '變數名稱不能重複',
      atLeastOneOption: '至少需要一個選項',
      optionRepeat: '選項不能重複',
    },
  },
  vision: {
    name: '視覺',
    description:
      '開啟視覺功能將允許模型輸入圖片，並根據影象內容的理解回答使用者問題',
    settings: '設定',
    visionSettings: {
      title: '視覺設定',
      resolution: '解析度',
      resolutionTooltip: `低解析度模式將使模型接收影象的低解析度版本，尺寸為512 x 512，並使用65 Tokens 來表示影象。這樣可以使API更快地返回響應，並在不需要高細節的用例中消耗更少的輸入。
      \n
      高解析度模式將首先允許模型檢視低解析度影象，然後根據輸入影象的大小建立512畫素的詳細裁剪影象。每個詳細裁剪影象使用兩倍的預算總共為129 Tokens。`,
      high: '高',
      low: '低',
      uploadMethod: '上傳方式',
      both: '兩者',
      localUpload: '本地上傳',
      url: 'URL',
      uploadLimit: '上傳數量限制',
    },
  },
  voice: {
    name: '音色',
    defaultDisplay: '預設音色',
    description: '文字轉語音音色設定',
    settings: '設定',
    voiceSettings: {
      title: '音色設定',
      language: '語言',
      resolutionTooltip: '文字轉語音音色支援語言。',
      voice: '音色',
      autoPlay: '自動播放',
      autoPlayEnabled: '開啟',
      autoPlayDisabled: '關閉',
    },
  },
  openingStatement: {
    title: '對話開場白',
    add: '新增開場白',
    writeOpener: '編寫開場白',
    placeholder:
      '在這裡寫下你的開場白，你可以使用變數，嘗試輸入 {{variable}}。',
    openingQuestion: '開場問題',
    noDataPlaceHolder:
      '在對話型應用中，讓 AI 主動說第一段話可以拉近與使用者間的距離。',
    varTip: '你可以使用變數， 試試輸入 {{variable}}',
    tooShort: '對話前提示詞至少 20 字才能生成開場白',
    notIncludeKey: '字首提示詞中不包含變數 {{key}}。請在字首提示詞中新增該變數',
  },
  modelConfig: {
    model: '語言模型',
    setTone: '模型設定',
    title: '模型及引數',
    modeType: {
      chat: '對話型',
      completion: '補全型',
    },
  },
  inputs: {
    title: '除錯與預覽',
    noPrompt: '嘗試在對話前提示框中編寫一些提示詞',
    userInputField: '使用者輸入',
    noVar: '填入變數的值，每次啟動新會話時該變數將自動替換提示詞中的變數。',
    chatVarTip: '填入變數的值，該值將在每次開啟一個新會話時自動替換到提示詞中',
    completionVarTip: '填入變數的值，該值將在每次提交問題時自動替換到提示詞中',
    previewTitle: '提示詞預覽',
    queryTitle: '查詢內容',
    queryPlaceholder: '請輸入文字內容',
    run: '執行',
  },
  result: '結果',
  datasetConfig: {
    settingTitle: '召回設定',
    knowledgeTip: '點選 “+” 按鈕新增知識庫',
    retrieveOneWay: {
      title: 'N選1召回',
      description:
        '根據使用者意圖和知識庫描述，由 Agent 自主判斷選擇最匹配的單個知識庫來查詢相關文字，適合知識庫區分度大且知識庫數量偏少的應用。',
    },
    retrieveMultiWay: {
      title: '多路召回',
      description:
        '根據使用者意圖同時匹配所有知識庫，從多路知識庫查詢相關文字片段，經過重排序步驟，從多路查詢結果中選擇匹配使用者問題的最佳結果，需配置 Rerank 模型 API。',
    },
    rerankModelRequired: '請選擇 Rerank 模型',
    params: '引數設定',
    top_k: 'Top K',
    top_kTip:
      '用於篩選與使用者問題相似度最高的文字片段。系統同時會根據選用模型上下文視窗大小動態調整分段數量。',
    score_threshold: 'Score 閾值',
    score_thresholdTip: '用於設定文字片段篩選的相似度閾值。',
    retrieveChangeTip:
      '修改索引模式和檢索模式可能會影響與該知識庫關聯的應用程式。',
  },
  debugAsSingleModel: '單一模型進行除錯',
  debugAsMultipleModel: '多個模型進行除錯',
  duplicateModel: '複製模型',
  publishAs: '釋出為',
  assistantType: {
    name: '助手型別',
    chatAssistant: {
      name: '基礎助手',
      description: '基於 LLM 構建一個聊天型助手',
    },
    agentAssistant: {
      name: '智慧助手',
      description: '構建一個智慧助手，他可以自主選擇工具完成你設定的任務',
    },
  },
  agent: {
    agentMode: 'Agent Mode',
    agentModeDes: '設定代理的推理模式型別',
    agentModeType: {
      ReACT: 'ReAct',
      functionCall: 'Function Calling',
    },
    setting: {
      name: 'Agent 設定',
      description:
        '智慧助手設定允許設定代理模式和內建提示等高階功能，僅在代理型別中可用。',
      maximumIterations: {
        name: '最大迭代次數',
        description: '限制代理型助手執行迭代的次數',
      },
    },
    buildInPrompt: '內建提示詞',
    firstPrompt: '第一次提示詞',
    nextIteration: '下一次迭代',
    promptPlaceholder: '在這裡寫下您的提示詞',
    tools: {
      name: '工具',
      description: '使用工具可以擴充套件代理的能力，比如搜尋網際網路或科學計算',
      enabled: '啟用',
    },
  },
}

export default translation
