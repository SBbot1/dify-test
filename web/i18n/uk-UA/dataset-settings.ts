const translation = {
  title: 'Налаштування бази знань',
  desc: 'Тут ви можете змінити властивості та методи роботи бази знань.',
  form: {
    name: 'Назва бази знань',
    namePlaceholder: 'Введіть назву бази знань',
    nameError: 'Назва не може бути порожньою',
    desc: 'Опис бази знань',
    descInfo: 'Напишіть зрозумілий текстовий опис, щоб окреслити вміст бази знань. Цей опис використовуватиметься як основа для узгодження під час вибору з кількох баз знань для висновку.',
    descPlaceholder: 'Опишіть, що міститься в цій базі знань. Детальний опис дозволяє AI своєчасно отримати доступ до вмісту бази знань. Якщо значення порожнє,SuperBotвикористовуватиме стратегію влучань за умовчанням.',
    descWrite: 'Дізнайтеся, як написати хороший опис бази знань.',
    permissions: 'Дозволи',
    permissionsOnlyMe: 'Тільки я',
    permissionsAllMember: 'Усі члени команди',
    indexMethod: 'Метод індексації',
    indexMethodHighQuality: 'Висока якість',
    indexMethodHighQualityTip: 'Викликати модель Embedding для обробки, щоб забезпечити вищу точність під час запитів користувачів.',
    indexMethodEconomy: 'Економний',
    indexMethodEconomyTip: 'Використовуйте автономні векторні двигуни, індекси ключових слів тощо, щоб зменшити точність без використання токенів.',
    embeddingModel: 'Модель вбудовування',
    embeddingModelTip: 'Змінити вбудовану модель, будь ласка, перейдіть до ',
    embeddingModelTipLink: 'Налаштування',
    retrievalSetting: {
      title: 'Налаштування вибірки',
      learnMore: 'Дізнатися більше',
      description: ' про метод вибірки.',
      longDescription: ' про метод вибірки, ви можете змінити це будь-коли в налаштуваннях бази знань.',
    },
    save: 'Зберегти',
  },
}

export default translation
