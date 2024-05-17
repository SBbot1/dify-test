const translation = {
  list: {
    title: '文件',
    desc: '知識庫的所有檔案都在這裡顯示，整個知識庫都可以連結到SuperBot引用或透過 Chat 外掛進行索引。',
    addFile: '新增檔案',
    addPages: '新增頁面',
    table: {
      header: {
        fileName: '檔名',
        words: '字元數',
        hitCount: '召回次數',
        uploadTime: '上傳時間',
        status: '狀態',
        action: '操作',
      },
    },
    action: {
      uploadFile: '上傳新檔案',
      settings: '分段設定',
      addButton: '新增分段',
      add: '新增新分段',
      batchAdd: '批次新增',
      archive: '歸檔',
      unarchive: '撤銷歸檔',
      delete: '刪除',
      enableWarning: '歸檔的檔案無法啟用',
      sync: '同步',
    },
    index: {
      enable: '啟用中',
      disable: '禁用中',
      all: '全部',
      enableTip: '該檔案可以被索引',
      disableTip: '該檔案無法被索引',
    },
    status: {
      queuing: '排隊中',
      indexing: '索引中',
      paused: '已暫停',
      error: '錯誤',
      available: '可用',
      enabled: '已啟用',
      disabled: '已禁用',
      archived: '已歸檔',
    },
    empty: {
      title: '還沒有文件',
      upload: {
        tip: '您可以上傳檔案，從網站同步，或者從網路應用程式（如概念、GitHub 等）同步。',
      },
      sync: {
        tip: 'Dify 會定期從您的 Notion 中下載檔案並完成處理。',
      },
    },
    delete: {
      title: '確定刪除嗎？',
      content: '如果您需要稍後恢復處理，您將從您離開的地方繼續',
    },
    batchModal: {
      title: '批次新增分段',
      csvUploadTitle: '將您的 CSV 檔案拖放到此處，或',
      browse: '選擇檔案',
      tip: 'CSV 檔案必須符合以下結構：',
      question: '問題',
      answer: '回答',
      contentTitle: '分段內容',
      content: '內容',
      template: '下載模板',
      cancel: '取消',
      run: '匯入',
      runError: '批次匯入失敗',
      processing: '批次處理中',
      completed: '匯入完成',
      error: '匯入出錯',
      ok: '確定',
    },
  },
  metadata: {
    title: '元資料',
    desc: '標記文件的元資料允許 AI 及時訪問它們併為使用者公開參考來源。',
    dateTimeFormat: 'YYYY-MM-DD HH:mm',
    docTypeSelectTitle: '請選擇一種文件型別',
    docTypeChangeTitle: '更換文件型別',
    docTypeSelectWarning: '如果更改文件型別，將不再保留現在填充的元資料',
    firstMetaAction: '開始',
    placeholder: {
      add: '輸入',
      select: '選擇',
    },
    source: {
      upload_file: '檔案上傳',
      notion: '從 Notion 同步的文件',
      github: '從 Github 同步的程式碼',
    },
    type: {
      book: '書籍',
      webPage: '網頁',
      paper: '論文',
      socialMediaPost: '社交媒體帖子',
      personalDocument: '個人文件',
      businessDocument: '商務文件',
      IMChat: 'IM 聊天記錄',
      wikipediaEntry: '維基百科條目',
      notion: '從 Notion 同步的文件',
      github: '從 Github 同步的程式碼',
      technicalParameters: '技術引數',
    },
    field: {
      processRule: {
        processDoc: '預處理文件',
        segmentRule: '分段規則',
        segmentLength: '分段長度',
        processClean: '文字預處理與清洗',
      },
      book: {
        title: '標題',
        language: '語言',
        author: '作者',
        publisher: '出版商',
        publicationDate: '出版日期',
        ISBN: 'ISBN',
        category: '類別',
      },
      webPage: {
        title: '標題',
        url: '網址',
        language: '語言',
        authorPublisher: '作者/出版商',
        publishDate: '釋出日期',
        topicsKeywords: '主題/關鍵詞',
        description: '描述',
      },
      paper: {
        title: '標題',
        language: '語言',
        author: '作者',
        publishDate: '釋出日期',
        journalConferenceName: '期刊/會議名稱',
        volumeIssuePage: '卷/期/頁碼',
        DOI: 'DOI',
        topicsKeywords: '主題/關鍵詞',
        abstract: '摘要',
      },
      socialMediaPost: {
        platform: '平臺',
        authorUsername: '作者/使用者名稱',
        publishDate: '釋出日期',
        postURL: '帖子網址',
        topicsTags: '主題/標籤',
      },
      personalDocument: {
        title: '標題',
        author: '作者',
        creationDate: '建立日期',
        lastModifiedDate: '最後修改日期',
        documentType: '文件型別',
        tagsCategory: '標籤/類別',
      },
      businessDocument: {
        title: '標題',
        author: '作者',
        creationDate: '建立日期',
        lastModifiedDate: '最後修改日期',
        documentType: '文件型別',
        departmentTeam: '部門/團隊',
      },
      IMChat: {
        chatPlatform: '聊天平臺',
        chatPartiesGroupName: '聊天參與方/群組名稱',
        participants: '參與者',
        startDate: '開始日期',
        endDate: '結束日期',
        topicsKeywords: '主題/關鍵詞',
        fileType: '檔案型別',
      },
      wikipediaEntry: {
        title: '標題',
        language: '語言',
        webpageURL: '網頁網址',
        editorContributor: '編輯/貢獻者',
        lastEditDate: '最後編輯日期',
        summaryIntroduction: '摘要/介紹',
      },
      notion: {
        title: '標題',
        language: '語言',
        author: '作者',
        createdTime: '建立時間',
        lastModifiedTime: '最後修改時間',
        url: '網址',
        tag: '標籤',
        description: '描述',
      },
      github: {
        repoName: '倉庫名',
        repoDesc: '倉庫描述',
        repoOwner: '倉庫所有者',
        fileName: '檔名',
        filePath: '檔案路徑',
        programmingLang: '程式語言',
        url: '網址',
        license: '許可證',
        lastCommitTime: '最後提交時間',
        lastCommitAuthor: '最後提交者',
      },
      originInfo: {
        originalFilename: '原始檔名稱',
        originalFileSize: '原始檔案大小',
        uploadDate: '上傳日期',
        lastUpdateDate: '最後更新日期',
        source: '來源',
      },
      technicalParameters: {
        segmentSpecification: '分段規則',
        segmentLength: '段落長度',
        avgParagraphLength: '平均段落長度',
        paragraphs: '段落數量',
        hitCount: '召回次數',
        embeddingTime: '嵌入時間',
        embeddedSpend: '嵌入花費',
      },
    },
    languageMap: {
      zh: '中文',
      en: '英文',
      es: '西班牙語',
      fr: '法語',
      de: '德語',
      ja: '日語',
      ko: '韓語',
      ru: '俄語',
      ar: '阿拉伯語',
      pt: '葡萄牙語',
      it: '義大利語',
      nl: '荷蘭語',
      pl: '波蘭語',
      sv: '瑞典語',
      tr: '土耳其語',
      he: '希伯來語',
      hi: '印地語',
      da: '丹麥語',
      fi: '芬蘭語',
      no: '挪威語',
      hu: '匈牙利語',
      el: '希臘語',
      cs: '捷克語',
      th: '泰語',
      id: '印度尼西亞語',
    },
    categoryMap: {
      book: {
        fiction: '小說',
        biography: '傳記',
        history: '歷史',
        science: '科學',
        technology: '技術',
        education: '教育',
        philosophy: '哲學',
        religion: '宗教',
        socialSciences: '社會科學',
        art: '藝術',
        travel: '旅行',
        health: '健康',
        selfHelp: '自助',
        businessEconomics: '商業/經濟',
        cooking: '烹飪',
        childrenYoungAdults: '兒童/青少年',
        comicsGraphicNovels: '漫畫/圖形小說',
        poetry: '詩歌',
        drama: '戲劇',
        other: '其他',
      },
      personalDoc: {
        notes: '筆記',
        blogDraft: '部落格草稿',
        diary: '日記',
        researchReport: '研究報告',
        bookExcerpt: '書籍摘錄',
        schedule: '日程安排',
        list: '列表',
        projectOverview: '專案概述',
        photoCollection: '照片集',
        creativeWriting: '創意寫作',
        codeSnippet: '程式碼片段',
        designDraft: '設計草稿',
        personalResume: '個人簡歷',
        other: '其他',
      },
      businessDoc: {
        meetingMinutes: '會議紀要',
        researchReport: '研究報告',
        proposal: '提案',
        employeeHandbook: '員工手冊',
        trainingMaterials: '培訓材料',
        requirementsDocument: '需求文件',
        designDocument: '設計文件',
        productSpecification: '產品規格',
        financialReport: '財務報告',
        marketAnalysis: '市場分析',
        projectPlan: '專案計劃',
        teamStructure: '團隊結構',
        policiesProcedures: '政策和流程',
        contractsAgreements: '合同和協議',
        emailCorrespondence: '郵件往來',
        other: '其他',
      },
    },
  },
  embedding: {
    processing: '嵌入處理中...',
    paused: '嵌入已停止',
    completed: '嵌入已完成',
    error: '嵌入發生錯誤',
    docName: '預處理文件',
    mode: '分段規則',
    segmentLength: '分段長度',
    textCleaning: '文字預定義與清洗',
    segments: '段落',
    highQuality: '高質量模式',
    economy: '經濟模式',
    estimate: '預估消耗',
    stop: '停止處理',
    resume: '恢復處理',
    automatic: '自動',
    custom: '自定義',
    previewTip: '段落預覽將在嵌入完成後可用',
  },
  segment: {
    paragraphs: '段落',
    keywords: '關鍵詞',
    addKeyWord: '新增關鍵詞',
    keywordError: '關鍵詞最大長度為 20',
    characters: '字元',
    hitCount: '召回次數',
    vectorHash: '向量雜湊：',
    questionPlaceholder: '在這裡新增問題',
    questionEmpty: '問題不能為空',
    answerPlaceholder: '在這裡新增答案',
    answerEmpty: '答案不能為空',
    contentPlaceholder: '在這裡新增內容',
    contentEmpty: '內容不能為空',
    newTextSegment: '新文字分段',
    newQaSegment: '新問答分段',
    delete: '刪除這個分段？',
  },
}

export default translation
