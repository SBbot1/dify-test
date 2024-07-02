const translation = {
  knowledge: 'Знання',
  documentCount: ' док.', // Скорочення від 'документів'
  wordCount: ' тис. слів',
  appCount: ' пов\'язаних додатків',
  createDataset: 'Створити Знання',
  createDatasetIntro: 'Імпортуйте власні текстові дані або записуйте дані в реальному часі через Webhook для покращення LLM-контексту.',
  deleteDatasetConfirmTitle: 'Видалити це Знання?',
  deleteDatasetConfirmContent:
        'Видалення "Знання" є незворотнім. Користувачі більше не матимуть доступу до Знань, а всі конфігурації підказок і журнали будуть безповоротно видалені.',
  datasetUsedByApp: 'Ці знання використовуються деякими додатками. Додатки більше не зможуть використовувати ці Знання, а всі конфігурації підказок та журнали будуть остаточно видалені.',
  datasetDeleted: 'Знання видалено',
  datasetDeleteFailed: 'Не вдалося видалити Знання',
  didYouKnow: 'Чи знаєте ви?',
  intro1: 'Знання можна інтегрувати до програмиSuperBot',
  intro2: 'як контекст',
  intro3: ',',
  intro4: 'або його ',
  intro5: 'можна створити',
  intro6: ' як автономний плагін індексу ChatGPT для публікації',
  unavailable: 'Недоступно',
  unavailableTip: 'Модель вбудовування недоступна, необхідно налаштувати модель вбудовування за замовчуванням',
  datasets: 'ЗНАННЯ',
  datasetsApi: 'API',
  retrieval: {
    semantic_search: {
      title: 'Векторний пошук',
      description: 'Генерує вбудовування запитів і шукає фрагмент тексту, найбільш схожий на його векторне представлення.',
    },
    full_text_search: {
      title: 'Повнотекстовий пошук',
      description: 'Індексує всі терміни в документі, дозволяючи користувачам шукати будь-який термін і отримувати відповідний фрагмент тексту, що містить цей термін.',
    },
    hybrid_search: {
      title: 'Гібридний пошук',
      description: 'Виконуйте повнотекстовий пошук і векторний пошук одночасно, повторно ранжуючи, щоб вибрати найкращу відповідність на запит користувача. Необхідна конфігурація Rerank model API.',
      recommend: 'Рекомендовано',
    },
    invertedIndex: {
      title: 'Інвертований індекс',
      description: 'Інвертований індекс – це структура, яка використовується для ефективного пошуку. Організований за термінами, кожен термін вказує на документи або веб-сторінки, що його містять.',
    },
    change: 'Змінити',
    changeRetrievalMethod: 'Змінити метод пошуку',
  },
  docsFailedNotice: 'документи не вдалося проіндексувати',
  retry: 'Повторити спробу',
}

export default translation
