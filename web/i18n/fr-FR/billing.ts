const translation = {
  currentPlan: "Plan Actuel",
  upgradeBtn: {
    plain: "Mettre à jour le plan",
    encourage: "Mettre à niveau maintenant",
    encourageShort: "Mise à niveau",
  },
  viewBilling: "Gérer la facturation et les abonnements",
  buyPermissionDeniedTip:
    "Veuillez contacter votre administrateur d'entreprise pour vous abonner",
  plansCommon: {
    title: "Choisissez un plan qui vous convient",
    yearlyTip: "Obtenez 2 mois gratuitement en vous abonnant annuellement !",
    mostPopular: "Le Plus Populaire",
    planRange: {
      monthly: "Mensuel",
      yearly: "Annuel",
    },
    month: "mois",
    year: "année",
    save: "Enregistrer",
    free: "Gratuit",
    currentPlan: "Plan Actuel",
    contractSales: "Contactez les ventes",
    contractOwner: "Contacter le chef d'équipe",
    startForFree: "Commencez gratuitement",
    getStartedWith: "Commencez avec",
    contactSales: "Contacter les ventes",
    talkToSales: "Parlez aux Ventes",
    modelProviders: "Fournisseurs de Modèles",
    teamMembers: "Membres de l'équipe",
    buildApps: "Construire des Applications",
    vectorSpace: "Espace Vectoriel",
    vectorSpaceBillingTooltip:
      "Chaque 1MB peut stocker environ 1,2 million de caractères de données vectorisées (estimé en utilisant les embeddings OpenAI, varie selon les modèles).",
    vectorSpaceTooltip:
      "L'espace vectoriel est le système de mémoire à long terme nécessaire pour que les LLMs comprennent vos données.",
    documentsUploadQuota: "Quota de téléchargement de documents",
    documentProcessingPriority: "Priorité de Traitement de Document",
    documentProcessingPriorityTip:
      "Pour une priorité de traitement de documents plus élevée, veuillez mettre à niveau votre plan.",
    documentProcessingPriorityUpgrade:
      "Traitez plus de données avec une précision plus élevée à des vitesses plus rapides.",
    priority: {
      standard: "Standard",
      priority: "Priorité",
      "top-priority": "Priorité Maximale",
    },
    logsHistory: "Historique des logs",
    customTools: "Outils personnalisés",
    unavailable: "Indisponible",
    days: "jours",
    unlimited: "Illimité",
    support: "Assistance",
    supportItems: {
      communityForums: "Forums communautaires",
      emailSupport: "Support par email",
      priorityEmail: "Support prioritaire par email et chat",
      logoChange: "Changement de logo",
      SSOAuthentication: "Authentification SSO",
      personalizedSupport: "Soutien personnalisé",
      dedicatedAPISupport: "Support dédié pour l'API",
      customIntegration: "Intégration personnalisée et support",
      ragAPIRequest: "Requêtes API RAG",
      bulkUpload: "Téléchargement en masse de documents",
      agentMode: "Mode Agent",
      workflow: "Flux de travail",
    },
    comingSoon: "Bientôt disponible",
    member: "Membre",
    memberAfter: "Membre",
    messageRequest: {
      title: "Crédits de message",
      tooltip:
        "Quotas d'invocation de messages pour divers plans utilisant les modèles OpenAI (sauf gpt4). Les messages dépassant la limite utiliseront votre clé API OpenAI.",
    },
    annotatedResponse: {
      title: "Limites de quota d'annotation",
      tooltip:
        "L'édition manuelle et l'annotation des réponses fournissent des capacités de réponse aux questions de haute qualité personnalisables pour les applications. (Applicable uniquement dans les applications de chat)",
    },
    ragAPIRequestTooltip:
      "Fait référence au nombre d'appels API invoquant uniquement les capacités de traitement de la base de connaissances de Superbot.",
    receiptInfo:
      "Seuls le propriétaire de l'équipe et l'administrateur de l'équipe peuvent s'abonner et consulter les informations de facturation",
  },
  plans: {
    sandbox: {
      name: "Bac à sable",
      description: "200 essais gratuits de GPT",
      includesTitle: "Inclus :",
    },
    professional: {
      name: "Professionnel",
      description:
        "Pour les individus et les petites équipes afin de débloquer plus de puissance à un prix abordable.",
      includesTitle: "Tout ce qui est dans le plan gratuit, plus :",
    },
    team: {
      name: "Équipe",
      description:
        "Collaborez sans limites et profitez d'une performance de premier ordre.",
      includesTitle:
        "Tout ce qui est inclus dans le plan Professionnel, plus :",
    },
    enterprise: {
      name: "Entreprise",
      description:
        "Obtenez toutes les capacités et le support pour les systèmes à grande échelle et critiques pour la mission.",
      includesTitle: "Tout ce qui est inclus dans le plan Équipe, plus :",
    },
  },
  vectorSpace: {
    fullTip: "L'espace vectoriel est plein.",
    fullSolution: "Mettez à niveau votre plan pour obtenir plus d'espace.",
  },
  apps: {
    fullTipLine1: "Mettez à jour votre plan pour",
    fullTipLine2: "construire plus d'applications.",
  },
  annotatedResponse: {
    fullTipLine1: "Mettez à niveau votre plan pour",
    fullTipLine2: "annotez plus de conversations.",
    quotaTitle: "Quota de Réponse d'Annotation",
  },
};

export default translation;
