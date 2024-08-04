const translation = {
  common: {
    welcome: '',
    appUnavailable: 'Додаток недоступний',
    appUnkonwError: 'Додаток недоступний',
  },
  chat: {
    newChat: 'Новий чат',
    pinnedTitle: 'Закріплені',
    unpinnedTitle: 'Чати',
    newChatDefaultName: 'Нова розмова',
    resetChat: 'Очистити розмову',
    powerBy: 'Забезпечується',
    prompt: 'Підказка',
    privatePromptConfigTitle: 'Налаштування розмови',
    publicPromptConfigTitle: 'Початкова підказка',
    configStatusDes: 'Перед початком ви можете змінити налаштування розмови',
    configDisabled: 'Для цього сеансу було використано налаштування попереднього сеансу.',
    startChat: 'Почати чат',
    privacyPolicyLeft: 'Будь ласка, ознайомтеся з ',
    privacyPolicyMiddle: 'політикою конфіденційності',
    privacyPolicyRight: ', наданою розробником програми.',
    deleteConversation: {
      title: 'Видалити розмову',
      content: 'Ви впевнені, що хочете видалити цю розмову?',
    },
    tryToSolve: 'Спробувати вирішити',
    temporarySystemIssue: 'Вибачте, тимчасова системна проблема.',
  },

  generation: {
    tabs: {
      create: 'Запустити один раз',
      batch: 'Запустити пакет',
      saved: 'Збережено',
    },
    savedNoData: {
      title: 'Ви ще не зберегли результат!',
      description: 'Почніть генерувати вміст і знайдіть збережені результати тут.',
      startCreateContent: 'Почати створювати вміст',
    },
    title: 'Доповнення AI',
    queryTitle: 'Вміст запиту',
    completionResult: 'Результат завершення',
    queryPlaceholder: 'Напишіть вміст свого запиту...',
    run: 'Виконати',
    copy: 'Копіювати',
    resultTitle: 'Доповнення AI',
    noData: 'AI дасть вам те, що ви хочете тут.',
    csvUploadTitle: 'Перетягніть файл CSV сюди або',
    browse: 'переглянути',
    csvStructureTitle: 'Файл CSV повинен відповідати наступній структурі:',
    downloadTemplate: 'Завантажити шаблон тут',
    field: 'Поле',
    batchFailed: {
      info: '{{num}} виконань не вдалося',
      retry: 'Повторити',
      outputPlaceholder: 'Вміст відсутній',
    },
    errorMsg: {
      empty: 'Будь ласка, введіть вміст у завантажений файл.',
      fileStructNotMatch: 'Завантажений CSV-файл не відповідає структурі.',
      emptyLine: 'Рядок {{rowIndex}} порожній',
      invalidLine: 'Рядок {{rowIndex}}: значення {{varName}} не може бути пустим',
      moreThanMaxLengthLine: 'Рядок {{rowIndex}}: значення {{varName}} не може містити більше {{maxLength}} символів',
      atLeastOne: 'Будь ласка, введіть принаймні один рядок у завантажений файл.',
    },

  },
}

export default translation
