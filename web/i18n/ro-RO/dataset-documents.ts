const translation = {
  list: {
    title: "Documente",
    desc: "Toate fișierele din Cunoștințe sunt afișate aici, iar întreaga Cunoaștere poate fi legată de cităriSuperBotsau indexată prin intermediul pluginului Chat.",
    addFile: "adaugă fișier",
    addPages: "Adaugă pagini",
    table: {
      header: {
        fileName: "NUMELE FIȘIERULUI",
        words: "CUVINTE",
        hitCount: "NUMĂR DE RECUPERĂRI",
        uploadTime: "TIMP DE ÎNCĂRCARE",
        status: "STARE",
        action: "ACȚIUNE",
      },
    },
    action: {
      uploadFile: "Încarcă un fișier nou",
      settings: "Setări de segment",
      addButton: "Adaugă segment",
      add: "Adaugă un segment",
      batchAdd: "Adăugare în lot",
      archive: "Arhivează",
      unarchive: "Dezarhivează",
      delete: "Șterge",
      enableWarning: "Fișierul arhivat nu poate fi activat",
      sync: "Sincronizează",
    },
    index: {
      enable: "Activează",
      disable: "Dezactivează",
      all: "Toate",
      enableTip: "Fișierul poate fi indexat",
      disableTip: "Fișierul nu poate fi indexat",
    },
    status: {
      queuing: "În coadă",
      indexing: "Indexare",
      paused: "Întrerupt",
      error: "Eroare",
      available: "Disponibil",
      enabled: "Activat",
      disabled: "Dezactivat",
      archived: "Arhivat",
    },
    empty: {
      title: "Nu există încă documentație",
      upload: {
        tip: "Puteți încărca fișiere, sincroniza de pe site-ul web sau din aplicații web precum Notion, GitHub etc.",
      },
      sync: {
        tip: "Superbot va descărca periodic fișiere din Notion și va finaliza procesarea.",
      },
    },
    delete: {
      title: "Sigur doriți să ștergeți?",
      content:
        "Dacă trebuie să reluați procesarea mai târziu, veți continua de unde ați rămas",
    },
    batchModal: {
      title: "Adăugare în lot a segmentelor",
      csvUploadTitle: "Trage și plasează fișierul tău CSV aici sau ",
      browse: "răsfoiește",
      tip: "Fișierul CSV trebuie să respecte următoarea structură:",
      question: "întrebare",
      answer: "răspuns",
      contentTitle: "conținut segment",
      content: "conținut",
      template: "Descărcați șablonul aici",
      cancel: "Anulează",
      run: "Rulează Lot",
      runError: "Eșec la rularea lotului",
      processing: "În procesare lot",
      completed: "Import finalizat",
      error: "Eroare la import",
      ok: "OK",
    },
  },
  metadata: {
    title: "Metadate",
    desc: "Etichetarea metadatelor pentru documente permite accesarea rapidă a acestora de către IA și expune sursa referințelor pentru utilizatori.",
    dateTimeFormat: "D MMMM YYYY hh:mm A",
    docTypeSelectTitle: "Vă rugăm să selectați un tip de document",
    docTypeChangeTitle: "Schimbați tipul de document",
    docTypeSelectWarning:
      "Dacă tipul de document este schimbat, metadatele completate acum nu vor mai fi păstrate",
    firstMetaAction: "Să începem",
    placeholder: {
      add: "Adaugă ",
      select: "Selectează ",
    },
    source: {
      upload_file: "Încarcă fișier",
      notion: "Sincronizează din Notion",
      github: "Sincronizează din Github",
    },
    type: {
      book: "Carte",
      webPage: "Pagină web",
      paper: "Lucrare",
      socialMediaPost: "Postare pe rețele sociale",
      personalDocument: "Document personal",
      businessDocument: "Document de afaceri",
      IMChat: "Conversație IM",
      wikipediaEntry: "Intrare Wikipedia",
      notion: "Sincronizează din Notion",
      github: "Sincronizează din Github",
      technicalParameters: "Parametri tehnici",
    },
    field: {
      processRule: {
        processDoc: "Procesează documentul",
        segmentRule: "Regulă de segment",
        segmentLength: "Lungimea segmentelor",
        processClean: "Curățare text procesare",
      },
      book: {
        title: "Titlu",
        language: "Limbă",
        author: "Autor",
        publisher: "Editor",
        publicationDate: "Data publicării",
        ISBN: "ISBN",
        category: "Categorie",
      },
      webPage: {
        title: "Titlu",
        url: "URL",
        language: "Limbă",
        authorPublisher: "Autor/Editor",
        publishDate: "Data publicării",
        topicsKeywords: "Subiecte/Cuvinte cheie",
        description: "Descriere",
      },
      paper: {
        title: "Titlu",
        language: "Limbă",
        author: "Autor",
        publishDate: "Data publicării",
        journalConferenceName: "Nume jurnal/conferință",
        volumeIssuePage: "Volum/Număr/Pagină",
        DOI: "DOI",
        topicsKeywords: "Subiecte/Cuvinte cheie",
        abstract: "Rezumat",
      },
      socialMediaPost: {
        platform: "Platformă",
        authorUsername: "Autor/Nume de utilizator",
        publishDate: "Data publicării",
        postURL: "URL postare",
        topicsTags: "Subiecte/Etichete",
      },
      personalDocument: {
        title: "Titlu",
        author: "Autor",
        creationDate: "Data creării",
        lastModifiedDate: "Ultima dată modificat",
        documentType: "Tip document",
        tagsCategory: "Etichete/Categorie",
      },
      businessDocument: {
        title: "Titlu",
        author: "Autor",
        creationDate: "Data creării",
        lastModifiedDate: "Ultima dată modificat",
        documentType: "Tip document",
        departmentTeam: "Departament/Echipă",
      },
      IMChat: {
        chatPlatform: "Platformă de chat",
        chatPartiesGroupName: "Persoane din chat/Nume grup",
        participants: "Participanți",
        startDate: "Data începerii",
        endDate: "Data încheierii",
        topicsKeywords: "Subiecte/Cuvinte cheie",
        fileType: "Tip fișier",
      },
      wikipediaEntry: {
        title: "Titlu",
        language: "Limbă",
        webpageURL: "URL pagină web",
        editorContributor: "Editor/Contributor",
        lastEditDate: "Ultima dată modificat",
        summaryIntroduction: "Rezumat/Introducere",
      },
      notion: {
        title: "Titlu",
        language: "Limbă",
        author: "Autor",
        createdTime: "Dată creare",
        lastModifiedTime: "Ultima dată modificat",
        url: "URL",
        tag: "Etichetă",
        description: "Descriere",
      },
      github: {
        repoName: "Nume depozit",
        repoDesc: "Descriere depozit",
        repoOwner: "Proprietar depozit",
        fileName: "Nume fișier",
        filePath: "Cale fișier",
        programmingLang: "Limbaj de programare",
        url: "URL",
        license: "Licență",
        lastCommitTime: "Ultima dată comitere",
        lastCommitAuthor: "Ultimul autor comitere",
      },
      originInfo: {
        originalFilename: "Nume fișier original",
        originalFileSize: "Dimensiune fișier original",
        uploadDate: "Dată încărcare",
        lastUpdateDate: "Ultima dată actualizare",
        source: "Sursă",
      },
      technicalParameters: {
        segmentSpecification: "Specificație segmente",
        segmentLength: "Lungime segmente",
        avgParagraphLength: "Lungime medie paragraf",
        paragraphs: "Paragrafe",
        hitCount: "Număr de recuperări",
        embeddingTime: "Timp încorporare",
        embeddedSpend: "Cheltuieli încorporare",
      },
    },
    languageMap: {
      zh: "Chineză",
      en: "Engleză",
      es: "Spaniolă",
      fr: "Franceză",
      de: "Germană",
      ja: "Japoneză",
      ko: "Coreeană",
      ru: "Rusă",
      ar: "Arabă",
      pt: "Portugheză",
      it: "Italiană",
      nl: "Olandeză",
      pl: "Poloneză",
      sv: "Suedeză",
      tr: "Turcă",
      he: "Ebraică",
      hi: "Hindi",
      da: "Daneză",
      fi: "Finlandeză",
      no: "Norvegiană",
      hu: "Maghiară",
      el: "Greacă",
      cs: "Cehă",
      th: "Tailandeză",
      id: "Indoneziană",
    },
    categoryMap: {
      book: {
        fiction: "Ficțiune",
        biography: "Biografie",
        history: "Istorie",
        science: "Știință",
        technology: "Tehnologie",
        education: "Educație",
        philosophy: "Filozofie",
        religion: "Religie",
        socialSciences: "ȘtiințeSociale",
        art: "Artă",
        travel: "Călătorii",
        health: "Sănătate",
        selfHelp: "AutoAjutorare",
        businessEconomics: "AfaceriEconomie",
        cooking: "Bucătărie",
        childrenYoungAdults: "CopiiTineri",
        comicsGraphicNovels: "ComicsRomaneCgrafice",
        poetry: "Poezie",
        drama: "Dramă",
        other: "Altele",
      },
      personalDoc: {
        notes: "Note",
        blogDraft: "Ciornă blog",
        diary: "Jurnal",
        researchReport: "Raport de cercetare",
        bookExcerpt: "Extras carte",
        schedule: "Program",
        list: "Listă",
        projectOverview: "Prezentare generală proiect",
        photoCollection: "Colecție foto",
        creativeWriting: "Scriere creativă",
        codeSnippet: "Fragment de cod",
        designDraft: "Schiță de design",
        personalResume: "CV personal",
        other: "Altele",
      },
      businessDoc: {
        meetingMinutes: "Proces-verbal ședință",
        researchReport: "Raport de cercetare",
        proposal: "Propunere",
        employeeHandbook: "Manual angajat",
        trainingMaterials: "Materiale de formare",
        requirementsDocument: "Document cerințe",
        designDocument: "Document de design",
        productSpecification: "Specificație produs",
        financialReport: "Raport financiar",
        marketAnalysis: "Analiză piață",
        projectPlan: "Plan de proiect",
        teamStructure: "Structură echipă",
        policiesProcedures: "Politici și proceduri",
        contractsAgreements: "Contracte și acorduri",
        emailCorrespondence: "Corespondență email",
        other: "Altele",
      },
    },
  },
  embedding: {
    processing: "Procesare încorporare...",
    paused: "Încorporare întreruptă",
    completed: "Încorporare finalizată",
    error: "Eroare la încorporare",
    docName: "Prelucrare document",
    mode: "Regula de segmentare",
    segmentLength: "Lungime segmente",
    textCleaning: "Pre-definiție și curățare text",
    segments: "Paragrafe",
    highQuality: "Mod calitate ridicată",
    economy: "Mod economic",
    estimate: "Consum estimat",
    stop: "Oprește procesarea",
    resume: "Reia procesarea",
    automatic: "Automat",
    custom: "Personalizat",
    previewTip:
      "Previzualizarea paragrafului va fi disponibilă după finalizarea încorporării",
  },
  segment: {
    paragraphs: "Paragrafe",
    keywords: "Cuvinte cheie",
    addKeyWord: "Adăugați un cuvânt cheie",
    keywordError: "Lungimea maximă a cuvântului cheie este de 20 de caractere",
    characters: "caractere",
    hitCount: "Număr de rezultate",
    vectorHash: "Vector hash: ",
    questionPlaceholder: "adăugați întrebarea aici",
    questionEmpty: "Întrebarea nu poate fi goală",
    answerPlaceholder: "adăugați răspunsul aici",
    answerEmpty: "Răspunsul nu poate fi gol",
    contentPlaceholder: "adăugați conținutul aici",
    contentEmpty: "Conținutul nu poate fi gol",
    newTextSegment: "Nou segment de text",
    newQaSegment: "Nou segment de întrebări și răspunsuri",
    delete: "Ștergeți acest fragment?",
  },
};

export default translation;
