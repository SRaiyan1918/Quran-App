// Grammar Course Data - Lessons 1 to 19
// Based on "Learn Arabic Grammar The Easy Way" - Understand Quran Academy

export const grammarLessons = [
  {
    id: 1,
    title: "Pronouns",
    arabicTitle: "هُوَ، هُمْ، أنتَ، أنا، أنتُمْ، نَحْنُ",
    topic: "Personal Pronouns",
    quranCount: 1295,
    theory: {
      intro: "In this lesson, we learn 6 pronouns that occur 1295 times in the Qur'an!",
      points: [
        "These 6 words are extremely important — they appear on almost every page of the Qur'an.",
        "مَنْ means 'who' — used to ask questions about people."
      ],
      table: [
        { arabic: "هُوَ", english: "He", count: 481 },
        { arabic: "هُمْ", english: "They", count: 444 },
        { arabic: "أنتَ", english: "You", count: 81 },
        { arabic: "أنا", english: "I", count: 68 },
        { arabic: "أنتُمْ", english: "You all", count: 135 },
        { arabic: "نَحْنُ", english: "We", count: 86 },
      ],
      extra: [
        { label: "و (and) + هُوَ", result: "وَهُوَ", meaning: "and he" },
        { label: "ف (so/thus) + هُمْ", result: "فَهُمْ", meaning: "so they" },
        { label: "و + هُمْ", result: "وَهُمْ", meaning: "and they" },
        { label: "ف + هُوَ", result: "فَهُوَ", meaning: "so he" },
      ]
    },
    examples: [
      { arabic: "هُوَ مُسْلِمٌ", english: "He is a Muslim." },
      { arabic: "هُمْ مُسْلِمُونَ", english: "They are Muslims." },
      { arabic: "أنا مُسْلِمٌ", english: "I am a Muslim." },
      { arabic: "نَحْنُ مُسْلِمُونَ", english: "We are Muslims." },
    ],
exercises: [
  // EASY
  { type: "mcq", question: "What does هُوَ mean in English?", options: ["She", "He", "They", "We"], answer: "He" },
  { type: "mcq", question: "What is the meaning of نَحْنُ?", options: ["You", "They", "We", "I"], answer: "We" },
  { type: "mcq", question: "Which pronoun means 'You' (singular)?", options: ["هُمْ", "نَحْنُ", "أنتَ", "هُوَ"], answer: "أنتَ" },
  { type: "mcq", question: "What does أَنَا mean?", options: ["He", "She", "I", "You"], answer: "I" },
  { type: "mcq", question: "Which pronoun means 'They'?", options: ["هُمْ", "هُوَ", "نَحْنُ", "أنتُمْ"], answer: "هُمْ" },

  // MEDIUM - Matching
  { type: "match", question: "Match the Arabic pronouns with their English meanings", pairs: [
      { arabic: "هُوَ", english: "He" },
      { arabic: "هُمْ", english: "They" },
      { arabic: "أنتَ", english: "You (masculine)" },
      { arabic: "أنا", english: "I" },
      { arabic: "أنتُمْ", english: "You all" },
      { arabic: "نَحْنُ", english: "We" }
  ]},
  { type: "match", question: "Match the combined forms with their meanings", pairs: [
      { arabic: "وَهُوَ", english: "and he" },
      { arabic: "فَهُمْ", english: "so they" },
      { arabic: "فَهُوَ", english: "so he" },
      { arabic: "وَهُمْ", english: "and they" }
  ]},

  // MEDIUM-HARD - Fill in blanks
  { type: "fill", question: "وَ + هُمْ = ?", options: ["وَهُمْ", "فَهُمْ", "وَهُوَ", "فَنَحْنُ"], answer: "وَهُمْ" },
  { type: "fill", question: "فَ + هُوَ = ?", options: ["وَهُوَ", "فَهُوَ", "فَهُمْ", "فَنَحْنُ"], answer: "فَهُوَ" },
  { type: "fill", question: "Complete: مُسْلِمٌ ______ (He is a Muslim)", options: ["هُوَ", "هُمْ", "أنا", "نَحْنُ"], answer: "هُوَ" },
  { type: "fill", question: "Complete: مُسْلِمُونَ ______ (They are Muslims)", options: ["هُوَ", "هُمْ", "أنتَ", "نَحْنُ"], answer: "هُمْ" },
  { type: "fill", question: "Complete: مُسْلِمَةٌ ______ (She is a Muslim)", options: ["هُوَ", "هِيَ", "أنا", "نَحْنُ"], answer: "هِيَ" },

  // HARD
  { type: "mcq", question: "How do you say 'We are Muslims' in Arabic?", options: ["هُوَ مُسْلِمٌ", "نَحْنُ مُسْلِمُونَ", "هُمْ مُسْلِمُونَ", "أنا مُسْلِمٌ"], answer: "نَحْنُ مُسْلِمُونَ" },
  { type: "fill", question: "Translate to Arabic: 'I am a believer'", options: ["أنا مُؤْمِنٌ", "هُوَ مُؤْمِنٌ", "نَحْنُ مُؤْمِنُونَ", "هُمْ مُؤْمِنُونَ"], answer: "أنا مُؤْمِنٌ" }
]
},
  {
    id: 2,
    title: "Nouns & Plurals",
    arabicTitle: "هُوَ مُسْلِمٌ، هُمْ مُسْلِمُونَ...",
    topic: "Nouns, Definite Nouns, Plurals",
    theory: {
      intro: "In Arabic, a word can be a Noun (اسم), Verb (فعل), or Letter (حرف). This lesson covers Nouns.",
      points: [
        "Noun (اسم): Can be a name (like كِتَاب) or an attribute (like مُسْلِم).",
        "To make a noun definite (specific), add الـ before it.",
        "Arabic words don't start with Sukoon — so a temporary Hamzah is added: الـ → اَلـ",
        "Plural is formed by adding ون or ين at the end of a word."
      ],
      table: [
        { singular: "مُسْلِم", singular_en: "a Muslim", definite: "اَلْمُسْلِمُ", definite_en: "the Muslim", count: 42 },
        { singular: "مُؤْمِن", singular_en: "a believer", definite: "اَلْمُؤْمِنُ", definite_en: "the believer", count: 230 },
        { singular: "صَالِح", singular_en: "a pious person", definite: "اَلصَّالِحُ", definite_en: "the pious person", count: 136 },
        { singular: "كَافِر", singular_en: "a disbeliever", definite: "اَلْكَافِرُ", definite_en: "the disbeliever", count: 134 },
        { singular: "مُشْرِك", singular_en: "a polytheist", definite: "اَلْمُشْرِكُ", definite_en: "the polytheist", count: 49 },
      ],
      plurals: [
        { singular: "مُسْلِم", plural1: "مُسْلِمُونَ", plural2: "مُسْلِمِينَ" },
        { singular: "مُؤْمِن", plural1: "مُؤْمِنُونَ", plural2: "مُؤْمِنِينَ" },
        { singular: "صَالِح", plural1: "صَالِحُونَ", plural2: "صَالِحِينَ" },
        { singular: "كَافِر", plural1: "كَافِرُونَ", plural2: "كَافِرِينَ" },
        { singular: "مُشْرِك", plural1: "مُشْرِكُونَ", plural2: "مُشْرِكِينَ" },
      ]
    },
    examples: [
      { arabic: "هُوَ مُسْلِمٌ", english: "He is a Muslim." },
      { arabic: "هُمْ مُسْلِمُونَ", english: "They are Muslims." },
      { arabic: "هُوَ اَلْمُسْلِمُ", english: "He is the Muslim." },
    ],
exercises: [
  // EASY - Basic meanings (5 questions)
  {
    type: "mcq",
    question: "What does مُسْلِم mean in English?",
    options: ["Believer", "Muslim", "Disbeliever", "Pious person"],
    answer: "Muslim"
  },
  {
    type: "mcq",
    question: "What is the meaning of مُؤْمِن?",
    options: ["Muslim", "Polytheist", "Believer", "Disbeliever"],
    answer: "Believer"
  },
  {
    type: "mcq",
    question: "What does كَافِر mean?",
    options: ["Believer", "Muslim", "Pious person", "Disbeliever"],
    answer: "Disbeliever"
  },
  {
    type: "mcq",
    question: "What is the meaning of صَالِح?",
    options: ["Muslim", "Believer", "Pious person", "Polytheist"],
    answer: "Pious person"
  },
  {
    type: "mcq",
    question: "What does مُشْرِك mean?",
    options: ["Believer", "Muslim", "Pious person", "Polytheist"],
    answer: "Polytheist"
  },

  // EASY - Plural forms (5 questions)
  {
    type: "mcq",
    question: "What is the plural of مُسْلِم?",
    options: ["مُسْلِمَة", "مُسْلِمُونَ", "مُسْلِمَات", "مُسْلِمِين"],
    answer: ["مُسْلِمُونَ", "مُسْلِمِين"]
  },
  {
    type: "mcq",
    question: "Plural of مُؤْمِن is?",
    options: ["مُؤْمِنُونَ", "مُؤْمِنَة", "مُؤْمِنَات", "مُؤْمِنِين"],
    answer: ["مُؤْمِنُونَ", "مُؤْمِنِين"]
  },
  {
    type: "mcq",
    question: "What is the plural of صَالِح?",
    options: ["صَالِحُونَ", "صَالِحَة", "صَالِحَات", "صَالِحِين"],
    answer: ["صَالِحُونَ", "صَالِحِين"]
  },
  {
    type: "mcq",
    question: "Plural of كَافِر is?",
    options: ["كَافِرُونَ", "كَافِرَة", "كَافِرَات", "كَافِرِين"],
    answer: ["كَافِرُونَ", "كَافِرِين"]
  },
  {
    type: "mcq",
    question: "What is the plural of مُشْرِك?",
    options: ["مُشْرِكُونَ", "مُشْرِكَة", "مُشْرِكَات", "مُشْرِكِين"],
    answer: ["مُشْرِكُونَ", "مُشْرِكِين"]
  },

  // MEDIUM - Definite nouns (الـ) (4 questions)
  {
    type: "mcq",
    question: "How do you say 'the Muslim' in Arabic?",
    options: ["مُسْلِمٌ", "مُسْلِمُونَ", "اَلْمُسْلِمُ", "مُسْلِمَة"],
    answer: "اَلْمُسْلِمُ"
  },
  {
    type: "mcq",
    question: "How do you make a noun definite in Arabic?",
    options: ["Add ون at the end", "Add ين at the end", "Add الـ at the beginning", "Add ة at the end"],
    answer: ["Add الـ at the beginning", "Add ون at the end", "Add ين at the end"]
  },
  {
    type: "fill",
    question: "الـ + مُؤْمِن  = ?",
    options: ["مُؤْمِنُونَ", "اَلْمُؤْمِنُ", "مُؤْمِنَة", "مُؤْمِنَات"],
    answer: "اَلْمُؤْمِنُ"
  },
  {
    type: "fill",
    question: "Complete: اَلْمُسْلِمُ ______ (He is the Muslim)",
    options: ["هُوَ", "هُمْ", "أنا", "نَحْنُ"],
    answer: "هُوَ"
  },

  // MEDIUM - Matching (3 questions)
  {
    type: "match",
    question: "Match the singular noun with its meaning",
    pairs: [
      { arabic: "مُسْلِم", english: "Muslim" },
      { arabic: "مُؤْمِن", english: "Believer" },
      { arabic: "صَالِح", english: "Pious person" },
      { arabic: "كَافِر", english: "Disbeliever" },
      { arabic: "مُشْرِك", english: "Polytheist" }
    ]
  },
  {
    type: "match",
    question: "Match singular with its plural form",
    pairs: [
      { arabic: "مُسْلِم", english: "مُسْلِمُونَ" },
      { arabic: "مُؤْمِن", english: "مُؤْمِنُونَ" },
      { arabic: "صَالِح", english: "صَالِحُونَ" },
      { arabic: "كَافِر", english: "كَافِرُونَ" }
    ]
  },
  {
    type: "match",
    question: "Match the definite nouns",
    pairs: [
      { arabic: "اَلْمُسْلِمُ", english: "The Muslim" },
      { arabic: "اَلْمُؤْمِنُ", english: "The believer" },
      { arabic: "اَلصَّالِحُ", english: "The pious person" },
      { arabic: "اَلْكَافِرُ", english: "The disbeliever" }
    ]
  },

  // MEDIUM-HARD - Fill in blanks (4 questions)
  {
    type: "fill",
    question: "Complete the sentence:  ______ هُمْ (They are Muslims)",
    options: ["مُسْلِمٌ", "مُسْلِمُونَ", "مُسْلِمَة", "اَلْمُسْلِمُ"],
    answer: "مُسْلِمُونَ"
  },
  {
    type: "fill",
    question: "Complete:  ______ هُوَ (He is the believer)",
    options: ["مُؤْمِنٌ", "مُؤْمِنُونَ", "اَلْمُؤْمِنُ", "مُؤْمِنَة"],
    answer: "اَلْمُؤْمِنُ"
  },
  {
    type: "fill",
    question: "The plural مُسْلِمُونَ is used for which pronoun?",
    options: ["هُوَ", "هِيَ", "هُمْ", "أنا"],
    answer: "هُمْ"
  },

  // HARD - Application & translation (3+ questions)
  {
    type: "mcq",
    question: "How do you say 'They are believers' in Arabic?",
    options: ["هُوَ مُؤْمِنٌ", "هُمْ مُؤْمِنُونَ", "نَحْنُ مُؤْمِنُونَ", "أنا مُؤْمِنٌ"],
    answer: "هُمْ مُؤْمِنُونَ"
  },
  {
    type: "mcq",
    question: "Which is correct: 'He is a disbeliever'?",
    options: ["هُوَ مُسْلِمٌ", "هُوَ كَافِرٌ", "هُوَ مُؤْمِنٌ", "هُوَ صَالِحٌ"],
    answer: "هُوَ كَافِرٌ"
  },
  {
    type: "fill",
    question: "Translate to Arabic: 'We are Muslims'",
    options: ["هُوَ مُسْلِمٌ", "هُمْ مُسْلِمُونَ", "نَحْنُ مُسْلِمُونَ", "أنا مُسْلِمٌ"],
    answer: "نَحْنُ مُسْلِمُونَ"
  },
  {
    type: "mcq",
    question: "What is the feminine form of مُسْلِم?",
    options: ["مُسْلِمُونَ", "مُسْلِمَة", "مُسْلِمَات", "مُسْلِمِين"],
    answer: ["مُسْلِمَة", "مُسْلِمَات"]
  }
]
  },
  {
    id: 3,
    title: "Possessive Suffixes",
    arabicTitle: "رَبُّهُ، رَبُّهُمْ...",
    topic: "His, Their, Your, My, Our",
    quranCount: 772,
    theory: {
      intro: "These suffixes occur almost 8,000 times in the Qur'an — nearly once every line! They attach to nouns, verbs, or prepositions.",
      points: [
        "In Arabic, 'his', 'their', 'your', 'my', 'our' are NOT separate words.",
        "They are attached (suffixed) to the noun.",
        "We learn them attached to the noun رَبّ (Lord/Rabb).",
        "Pay special attention to: كَ (your), ي (my), كُمْ (your all), نَا (our)"
      ],
      table: [
        { suffix: "ـهُ", meaning: "His", example: "رَبُّهُ", example_en: "His Rabb" },
        { suffix: "ـهُمْ", meaning: "Their", example: "رَبُّهُمْ", example_en: "Their Rabb" },
        { suffix: "ـكَ", meaning: "Your", example: "رَبُّكَ", example_en: "Your Rabb" },
        { suffix: "ـي", meaning: "My", example: "رَبِّي", example_en: "My Rabb" },
        { suffix: "ـكُمْ", meaning: "Your (all)", example: "رَبُّكُمْ", example_en: "Your Rabb (all)" },
        { suffix: "ـنَا", meaning: "Our", example: "رَبُّنَا", example_en: "Our Rabb" },
      ],
      extra: [
        { arabic: "دِينُهُ", english: "his religion" },
        { arabic: "دِينُهُمْ", english: "their religion" },
        { arabic: "دِينُكَ", english: "your religion" },
        { arabic: "دِينِي", english: "my religion" },
        { arabic: "دِينُكُمْ", english: "your religion (all)" },
        { arabic: "دِينُنَا", english: "our religion" },
      ]
    },
    examples: [
      { arabic: "رَبُّهُ اللَّهُ", english: "His Lord is Allah." },
      { arabic: "رَبُّنَا اللَّهُ", english: "Our Lord is Allah." },
      { arabic: "مَنْ رَبُّكَ؟", english: "Who is your Lord?" },
    ],
    exercises: [
  // EASY - Basic suffix meanings (6 questions)
  {
    type: "mcq",
    question: "What does the suffix ـهُ mean?",
    options: ["His", "Her", "Their", "My"],
    answer: "His"
  },
  {
    type: "mcq",
    question: "What is the meaning of the suffix ـهُمْ?",
    options: ["His", "Our", "Their", "Your"],
    answer: "Their"
  },
  {
    type: "mcq",
    question: "What does the suffix ـكَ mean?",
    options: ["My", "Your", "His", "Our"],
    answer: "Your"
  },
  {
    type: "mcq",
    question: "What is the meaning of the suffix ـي?",
    options: ["Your", "His", "My", "Our"],
    answer: "My"
  },
  {
    type: "mcq",
    question: "What does the suffix ـكُمْ mean?",
    options: ["Your (singular)", "Your (plural/all)", "Our", "Their"],
    answer: "Your (plural/all)"
  },
  {
    type: "mcq",
    question: "What is the meaning of the suffix ـنَا?",
    options: ["My", "Your", "His", "Our"],
    answer: "Our"
  },

  // EASY - Words with suffixes (4 questions)
  {
    type: "mcq",
    question: "What does رَبُّهُ mean?",
    options: ["My Lord", "Your Lord", "His Lord", "Our Lord"],
    answer: "His Lord"
  },
  {
    type: "mcq",
    question: "What is the meaning of رَبِّي?",
    options: ["His Lord", "Our Lord", "Your Lord", "My Lord"],
    answer: "My Lord"
  },
  {
    type: "mcq",
    question: "What does رَبُّنَا mean?",
    options: ["My Lord", "Your Lord", "His Lord", "Our Lord"],
    answer: "Our Lord"
  },
  {
    type: "mcq",
    question: "What is the meaning of رَبُّكَ?",
    options: ["My Lord", "Your Lord", "His Lord", "Our Lord"],
    answer: "Your Lord"
  },

  // MEDIUM - Fill in the blanks (5 questions)
  {
    type: "fill",
    question: "رَبّ + ـهُ = ?",
    options: ["رَبِّي", "رَبُّكَ", "رَبُّهُ", "رَبُّنَا"],
    answer: "رَبُّهُ"
  },
  {
    type: "fill",
    question: "رَبّ + ـنَا = ?",
    options: ["رَبُّهُ", "رَبُّنَا", "رَبِّي", "رَبُّكَ"],
    answer: "رَبُّنَا"
  },
  {
    type: "fill",
    question: "رَبّ + ـكَ = ?",
    options: ["رَبُّهُ", "رَبُّنَا", "رَبِّي", "رَبُّكَ"],
    answer: "رَبُّكَ"
  },
  {
    type: "fill",
    question: "دِين + ـي = ?",
    options: ["دِينُهُ", "دِينُكَ", "دِينِي", "دِينُنَا"],
    answer: "دِينِي"
  },
  {
    type: "fill",
    question: "دِين + ـهُمْ = ?",
    options: ["دِينُهُ", "دِينُهُمْ", "دِينُكَ", "دِينُنَا"],
    answer: "دِينُهُمْ"
  },

  // MEDIUM - Matching (3 questions)
  {
    type: "match",
    question: "Match the suffix with its meaning",
    pairs: [
      { arabic: "ـهُ", english: "His" },
      { arabic: "ـهُمْ", english: "Their" },
      { arabic: "ـكَ", english: "Your" },
      { arabic: "ـي", english: "My" },
      { arabic: "ـكُمْ", english: "Your (all)" },
      { arabic: "ـنَا", english: "Our" }
    ]
  },
  {
    type: "match",
    question: "Match the word with its translation",
    pairs: [
      { arabic: "رَبُّهُ", english: "His Lord" },
      { arabic: "رَبُّهُمْ", english: "Their Lord" },
      { arabic: "رَبُّكَ", english: "Your Lord" },
      { arabic: "رَبِّي", english: "My Lord" },
      { arabic: "رَبُّكُمْ", english: "Your Lord (all)" },
      { arabic: "رَبُّنَا", english: "Our Lord" }
    ]
  },
  {
    type: "match",
    question: "Match the word with its meaning (Religion)",
    pairs: [
      { arabic: "دِينُهُ", english: "His religion" },
      { arabic: "دِينُهُمْ", english: "Their religion" },
      { arabic: "دِينُكَ", english: "Your religion" },
      { arabic: "دِينِي", english: "My religion" },
      { arabic: "دِينُنَا", english: "Our religion" }
    ]
  },

  // MEDIUM-HARD - Complete sentences (4 questions)
  {
    type: "fill",
    question: "Complete: رَبُّهُ اللَّهُ _____(His Lord is Allah)",
    options: ["هُوَ", "هُمْ", "أنا", "نَحْنُ"],
    answer: "هُوَ"
  },
  {
    type: "fill",
    question: "Complete: رَبُّنَا اللَّهُ _____ (Our Lord is Allah)",
    options: ["هُوَ", "هُمْ", "أنا", "نَحْنُ"],
    answer: "نَحْنُ"
  },
  {
    type: "fill",
    question: "Question: مَنْ رَبُّ ______؟ (Who is your Lord?)",
    options: ["هُ", "هُمْ", "كَ", "نَا"],
    answer: "كَ"
  },
  {
    type: "mcq",
    question: "How do you say 'His religion' in Arabic?",
    options: ["دِينِي", "دِينُكَ", "دِينُهُ", "دِينُنَا"],
    answer: "دِينُهُ"
  },

  // HARD - Application questions (4 questions)
  {
    type: "mcq",
    question: "Which suffix is attached to mean 'Your (all)'?",
    options: ["ـكَ", "ـكُمْ", "ـهُ", "ـهُمْ"],
    answer: "ـكُمْ"
  },
  {
    type: "fill",
    question: "Translate to Arabic: 'Our religion'",
    options: ["دِينُهُ", "دِينُهُمْ", "دِينُكَ", "دِينُنَا"],
    answer: "دِينُنَا"
  },
  {
    type: "mcq",
    question: "What is special about possessive suffixes in Arabic?",
    options: [
      "They are separate words",
      "They are attached to nouns/verbs/prepositions",
      "They come before the noun",
      "They are only used with verbs"
    ],
    answer: "They are attached to nouns/verbs/prepositions"
  },
  {
    type: "fill",
    question: "Complete the phrase: رَبِّي = My Lord, رَبُّنَا = ?",
    options: ["His Lord", "Your Lord", "Our Lord", "Their Lord"],
    answer: "Our Lord"
  }
]
  },
  {
    id: 4,
    title: "Feminine Forms",
    arabicTitle: "هِيَ، هَا، مُسْلِمَة، مُسْلِمَات",
    topic: "She, Her, Feminine Nouns & Plurals",
    quranCount: 64,
    theory: {
      intro: "هِيَ means 'she' — occurs 64 times in the Qur'an. هَا means 'her' — always attached at the end.",
      points: [
        "To make feminine: add ة at the end of a masculine noun.",
        "هَا (her) always comes at the end of the word.",
        "Feminine plural: replace ة with ات at the end.",
        "For Sahabiyyat: رَضِيَ اللَّهُ عَنْهَا (May Allah be pleased with her)"
      ],
      femTable: [
        { masculine: "مُسْلِم", feminine: "مُسْلِمَة", plural: "مُسْلِمَات" },
        { masculine: "مُؤْمِن", feminine: "مُؤْمِنَة", plural: "مُؤْمِنَات" },
        { masculine: "صَالِح", feminine: "صَالِحَة", plural: "صَالِحَات" },
        { masculine: "صَابِر", feminine: "صَابِرَة", plural: "صَابِرَات" },
      ],
      herForms: [
        { form: "رَبُّهَا", meaning: "her Lord" },
        { form: "دِينُهَا", meaning: "her religion" },
        { form: "كِتَابُهَا", meaning: "her book" },
      ]
    },
    examples: [
      { arabic: "هِيَ مُسْلِمَة", english: "She is a Muslim." },
      { arabic: "هِيَ مُؤْمِنَة", english: "She is a believer." },
      { arabic: "رَبُّهَا اللَّهُ", english: "Her Lord is Allah." },
    ],
    exercises: [
  // EASY - Feminine forms (5 questions)
  {
    type: "mcq",
    question: "What does هِيَ mean?",
    options: ["He", "She", "They", "We"],
    answer: "She"
  },
  {
    type: "mcq",
    question: "Feminine of مُسْلِم is?",
    options: ["مُسْلِمُونَ", "مُسْلِمَة", "مُسْلِمِينَ", "مُسْلِمَات"],
    answer: ["مُسْلِمَة", "مُسْلِمَات"]
  },
  {
    type: "mcq",
    question: "Feminine of مُؤْمِن is?",
    options: ["مُؤْمِنُونَ", "مُؤْمِنَة", "مُؤْمِنَات", "مُؤْمِنِين"],
    answer: ["مُؤْمِنَة", "مُؤْمِنَات"]
  },
  {
    type: "mcq",
    question: "How do you make a noun feminine in Arabic?",
    options: ["Add ون at end", "Add ين at end", "Add ة at end", "Add الـ at beginning"],
    answer: "Add ة at end"
  },
  {
    type: "mcq",
    question: "Feminine plural is made by replacing ة with?",
    options: ["ون", "ين", "ات", "ان"],
    answer: "ات"
  },

  // EASY - Her suffix (هـَا) (4 questions)
  {
    type: "mcq",
    question: "What does the suffix هَا mean?",
    options: ["His", "Their", "Her", "Our"],
    answer: "Her"
  },
  {
    type: "mcq",
    question: "What does رَبُّهَا mean?",
    options: ["His Lord", "Her Lord", "Our Lord", "Your Lord"],
    answer: "Her Lord"
  },
  {
    type: "mcq",
    question: "What is the meaning of دِينُهَا?",
    options: ["His religion", "Her religion", "Our religion", "Your religion"],
    answer: "Her religion"
  },
  {
    type: "mcq",
    question: "كِتَابُهَا means?",
    options: ["His book", "Her book", "Our book", "Your book"],
    answer: "Her book"
  },

  // MIXED with Lesson 1 & 2 (6 questions) - CORRECTED RTL FILL FORMAT
  {
    type: "mcq",
    question: "How do you say 'She is a Muslim' in Arabic?",
    options: ["هُوَ مُسْلِمٌ", "هُمْ مُسْلِمُونَ", "هِيَ مُسْلِمَة", "نَحْنُ مُسْلِمُونَ"],
    answer: "هِيَ مُسْلِمَة"
  },
  {
    type: "mcq",
    question: "How do you say 'She is a believer' in Arabic?",
    options: ["هُوَ مُؤْمِنٌ", "هِيَ مُؤْمِنَة", "هُمْ مُؤْمِنُونَ", "أنا مُؤْمِنٌ"],
    answer: "هِيَ مُؤْمِنَة"
  },
  {
    type: "fill",
    question: "Complete : مُسْلِمَة ______ (She is a Muslim)",
    options: ["هُوَ", "هِيَ", "هُمْ", "أنا"],
    answer: "هِيَ"
  },
  {
    type: "fill",
    question: "Complete : مُؤْمِنَة ______ (She is a believer)",
    options: ["هُوَ", "هِيَ", "هُمْ", "نَحْنُ"],
    answer: "هِيَ"
  },
  {
    type: "match",
    question: "Match masculine with feminine",
    pairs: [
      { arabic: "مُسْلِم", english: "مُسْلِمَة" },
      { arabic: "مُؤْمِن", english: "مُؤْمِنَة" },
      { arabic: "صَالِح", english: "صَالِحَة" },
      { arabic: "صَابِر", english: "صَابِرَة" }
    ]
  },
  {
    type: "match",
    question: "Match the pronoun with its meaning",
    pairs: [
      { arabic: "هُوَ", english: "He" },
      { arabic: "هِيَ", english: "She" },
      { arabic: "هُمْ", english: "They (masculine)" },
      { arabic: "أنا", english: "I" }
    ]
  },

  // MIXED with Lesson 3 (Possessive suffixes) - CORRECTED RTL FILL FORMAT
  {
    type: "fill",
    question: "Complete : ______ كِتَابُ (Her book)",
    options: ["هَا", "هُ", "نَا", "كَ"],
    answer: "هَا"
  },
  {
    type: "fill",
    question: "Complete : ______ رَبُّ (Her Lord)",
    options: ["هَا", "هُ", "نَا", "هُمْ"],
    answer: "هَا"
  },
  {
    type: "fill",
    question: "Complete : ______ دِينُ (Her religion)",
    options: ["هَا", "هُ", "كَ", "نَا"],
    answer: "هَا"
  },
  {
    type: "mcq",
    question: "What is the difference between ـهُ and ـهَا?",
    options: [
      "ـهُ means his, ـهَا means her",
      "ـهُ means her, ـهَا means his",
      "Both mean his",
      "Both mean her"
    ],
    answer: "ـهُ means his, ـهَا means her"
  },
  {
    type: "match",
    question: "Match the possessive suffix with its meaning",
    pairs: [
      { arabic: "ـهُ", english: "His" },
      { arabic: "ـهَا", english: "Her" },
      { arabic: "ـهُمْ", english: "Their" },
      { arabic: "ـنَا", english: "Our" },
      { arabic: "ـكَ", english: "Your" }
    ]
  },

  // MEDIUM - Feminine plurals (4 questions)
  {
    type: "mcq",
    question: "What is the feminine plural of مُسْلِمَة?",
    options: ["مُسْلِمُونَ", "مُسْلِمَات", "مُسْلِمِين", "مُسْلِمَة"],
    answer: "مُسْلِمَات"
  },
  {
    type: "mcq",
    question: "Feminine plural of مُؤْمِنَة is?",
    options: ["مُؤْمِنُونَ", "مُؤْمِنَات", "مُؤْمِنِين", "مُؤْمِنَة"],
    answer: "مُؤْمِنَات"
  },
  {
    type: "fill",
    question: "Complete: صَالِحَات is the plural of ______",
    options: ["صَالِحٌ", "صَالِحَةٌ", "صَالِحُونَ", "صَالِحِينَ"],
    answer: "صَالِحَةٌ"
  },
  {
    type: "fill",
    question: "Complete : مُسْلِمَات ______ (They are Muslim women - هُمْ feminine is هُنَّ)",
    options: ["هُوَ", "هُمْ", "هِيَ", "هُنَّ"],
    answer: "هُنَّ"
  },

  // HARD - Mixed application (5 questions) - CORRECTED RTL FILL FORMAT
  {
    type: "mcq",
    question: "How do you say 'Her Lord is Allah' in Arabic?",
    options: [
      "رَبُّهُ اللَّهُ",
      "رَبُّهَا اللَّهُ",
      "رَبُّنَا اللَّهُ",
      "رَبُّكَ اللَّهُ"
    ],
    answer: "رَبُّهَا اللَّهُ"
  },
  {
    type: "fill",
    question: "Complete : صَالِحَةٌ ______ (She is a pious person)",
    options: ["هُوَ", "هِيَ", "هُمْ", "نَحْنُ"],
    answer: "هِيَ"
  },
  {
    type: "mcq",
    question: "كِتَابُهَا means?",
    options: ["His book", "Her book", "Our book", "Your book"],
    answer: "Her book"
  },
  {
    type: "fill",
    question: "Complete : _____ رَضِيَ اللَّهُ عَنْ (May Allah be pleased with her - feminine)",
    options: ["هُ", "هَا", "هُمْ", "كَ"],
    answer: "هَا"
  }
]
  },
  {
    id: 5,
    title: "Prepositions: لِ، مِنْ، عَنْ",
    arabicTitle: "لِ، مِنْ، عَنْ",
    topic: "Prepositions: For, From, With",
    quranCount: 1361,
    theory: {
      intro: "These 3 prepositions are extremely common in the Qur'an. لِ occurs 1361 times alone!",
      points: [
        "لِ = for (example: لَكُمْ دِينُكُمْ = for you your religion)",
        "مِنْ = from (example: أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ = I seek refuge with Allah from Shaytan)",
        "عَنْ = with/about (example: رَضِيَ اللَّهُ عَنْهُ = May Allah be pleased with him)"
      ],
      forTable: [
        { form: "لَهُ", meaning: "for him" },
        { form: "لَهُمْ", meaning: "for them" },
        { form: "لَكَ", meaning: "for you" },
        { form: "لِي", meaning: "for me" },
        { form: "لَكُمْ", meaning: "for you all" },
        { form: "لَنَا", meaning: "for us" },
        { form: "لَهَا", meaning: "for her" },
      ],
      fromTable: [
        { form: "مِنْهُ", meaning: "from him" },
        { form: "مِنْهُمْ", meaning: "from them" },
        { form: "مِنْكَ", meaning: "from you" },
        { form: "مِنِّي", meaning: "from me" },
        { form: "مِنْكُمْ", meaning: "from you all" },
        { form: "مِنَّا", meaning: "from us" },
        { form: "مِنْهَا", meaning: "from her" },
      ]
    },
    examples: [
      { arabic: "هٰذَا لَهُ", english: "This is for him." },
      { arabic: "هٰذَا لَنَا", english: "This is for us." },
      { arabic: "رَضِيَ اللَّهُ عَنْهُ", english: "May Allah be pleased with him." },
    ],
exercises: [
  // BASIC MEANINGS - Prepositions (3 questions)
  {
    type: "mcq",
    question: "What does the preposition لِ mean?",
    options: ["From", "With", "For", "About"],
    answer: "For"
  },
  {
    type: "mcq",
    question: "What does the preposition مِنْ mean?",
    options: ["For", "From", "To", "On"],
    answer: "From"
  },
  {
    type: "mcq",
    question: "What does the preposition عَنْ mean?",
    options: ["For", "From", "With/About", "In"],
    answer: "With/About"
  },

  // JOINING - لِ forms (3 questions)
  {
    type: "mcq",
    question: "لَ + هُ = ?",
    options: ["لَهُ", "لَهُمْ", "لَكَ", "لِي"],
    answer: "لَهُ"
  },
  {
    type: "mcq",
    question: "لَ + كَ = ?",
    options: ["لَهُ", "لَهُمْ", "لَكَ", "لِي"],
    answer: "لَكَ"
  },
  {
    type: "mcq",
    question: "لَ + نَا = ?",
    options: ["لَهُ", "لَهُمْ", "لَنَا", "لَكَ"],
    answer: "لَنَا"
  },

  // JOINING - مِنْ forms (3 questions)
  {
    type: "mcq",
    question: "مِنْ + هُ = ?",
    options: ["مِنْهُ", "مِنْهُمْ", "مِنْكَ", "مِنِّي"],
    answer: "مِنْهُ"
  },
  {
    type: "mcq",
    question: "مِنْ + كَ = ?",
    options: ["مِنْهُ", "مِنْهُمْ", "مِنْكَ", "مِنِّي"],
    answer: "مِنْكَ"
  },
  {
    type: "mcq",
    question: "مِنْ + نَا = ?",
    options: ["مِنْهُ", "مِنْهُمْ", "مِنَّا", "مِنْكَ"],
    answer: "مِنَّا"
  },

  // JOINING - عَنْ forms (2 questions)
  {
    type: "mcq",
    question: "عَنْ + هُ = ?",
    options: ["عَنْهُ", "عَنْهُمْ", "عَنْكَ", "عَنِّي"],
    answer: "عَنْهُ"
  },
  {
    type: "mcq",
    question: "عَنْ + كَ = ?",
    options: ["عَنْهُ", "عَنْهُمْ", "عَنْكَ", "عَنَّا"],
    answer: "عَنْكَ"
  },

  // MEANING QUESTIONS (3 questions)
  {
    type: "mcq",
    question: "What does لَهُ mean?",
    options: ["For me", "For him", "For them", "For us"],
    answer: "For him"
  },
  {
    type: "mcq",
    question: "What does مِنْكَ mean?",
    options: ["From me", "From you", "From him", "From us"],
    answer: "From you"
  },
  {
    type: "mcq",
    question: "What does عَنْهُ mean?",
    options: ["About him", "About them", "About you", "About me"],
    answer: "About him"
  },

  // MATCHING (2 questions)
  {
    type: "match",
    question: "Match the لِ forms with their meanings",
    pairs: [
      { arabic: "لَهُ", english: "For him" },
      { arabic: "لَكَ", english: "For you" },
      { arabic: "لِي", english: "For me" },
      { arabic: "لَنَا", english: "For us" }
    ]
  },
  {
    type: "match",
    question: "Match the preposition with its meaning",
    pairs: [
      { arabic: "لِ", english: "For" },
      { arabic: "مِنْ", english: "From" },
      { arabic: "عَنْ", english: "About" }
    ]
  },

  // MIXED with previous lessons (3 questions)
  {
    type: "mcq",
    question: "هَذَا + لَهُ = ?",
    options: ["هَذَا لَهُ", "هَذَا لَنَا", "هَذَا لَكَ", "هَذَا لِي"],
    answer: "هَذَا لَهُ"
  },
  {
    type: "mcq",
    question: "رَضِيَ اللَّهُ + عَنْ + هُ = ?",
    options: [
      "رَضِيَ اللَّهُ عَنْهُ",
      "رَضِيَ اللَّهُ عَنْهَا",
      "رَضِيَ اللَّهُ عَنْهُمْ",
      "رَضِيَ اللَّهُ عَنَّا"
    ],
    answer: "رَضِيَ اللَّهُ عَنْهُ"
  },
  {
    type: "mcq",
    question: "How do you say 'For you all is your religion' in Arabic?",
    options: [
      "لَكُمْ دِينُكُمْ",
      "لَنَا دِينُنَا",
      "لَهُ دِينُهُ",
      "لَهُمْ دِينُهُمْ"
    ],
    answer: "لَكُمْ دِينُكُمْ"
  }
]  },
  {
    id: 6,
    title: "Prepositions: بِ، فِي، عَلَى",
    arabicTitle: "بِ، فِي، عَلَى",
    topic: "Prepositions: In/With, In, On",
    quranCount: 510,
    theory: {
      intro: "These 3 prepositions occur 3617 times in the Qur'an with 7 pronouns.",
      points: [
        "بِ = in/with (example: بِسْمِ اللَّهِ = In the name of Allah)",
        "فِي = in (example: فِي سَبِيلِ اللَّهِ = In the path of Allah)",
        "عَلَى = on (example: اَلسَّلَامُ عَلَيْكُمْ = Peace on you)"
      ],
      biTable: [
        { form: "بِهِ", meaning: "in/with him" },
        { form: "بِهِمْ", meaning: "in/with them" },
        { form: "بِكَ", meaning: "in/with you" },
        { form: "بِي", meaning: "in/with me" },
        { form: "بِكُمْ", meaning: "in/with you all" },
        { form: "بِنَا", meaning: "in/with us" },
      ],
      fiTable: [
        { form: "فِيهِ", meaning: "in him/it" },
        { form: "فِيهِمْ", meaning: "in them" },
        { form: "فِيكَ", meaning: "in you" },
        { form: "فِيَّ", meaning: "in me" },
        { form: "فِيكُمْ", meaning: "in you all" },
        { form: "فِينَا", meaning: "in us" },
      ],
      alaTable: [
        { form: "عَلَيْهِ", meaning: "on him" },
        { form: "عَلَيْهِمْ", meaning: "on them" },
        { form: "عَلَيْكَ", meaning: "on you" },
        { form: "عَلَيَّ", meaning: "on me" },
        { form: "عَلَيْكُمْ", meaning: "on you all" },
        { form: "عَلَيْنَا", meaning: "on us" },
      ]
    },
    examples: [
      { arabic: "بِسْمِ اللَّهِ", english: "In the name of Allah." },
      { arabic: "اَلسَّلَامُ عَلَيْكُمْ", english: "Peace be upon you." },
      { arabic: "فِي سَبِيلِ اللَّهِ", english: "In the path of Allah." },
    ],
exercises: [
  // BASIC MEANINGS - Prepositions (3 questions)
  {
    type: "mcq",
    question: "What does the preposition بِ mean?",
    options: ["On", "For", "In/With", "From"],
    answer: "In/With"
  },
  {
    type: "mcq",
    question: "What does the preposition فِي mean?",
    options: ["On", "In", "With", "From"],
    answer: "In"
  },
  {
    type: "mcq",
    question: "What does the preposition عَلَى mean?",
    options: ["In", "With", "On", "For"],
    answer: "On"
  },

  // JOINING - بِ forms (2 questions)
  {
    type: "mcq",
    question: "بِ + هُ = ?",
    options: ["بِهِ", "بِهِمْ", "بِكَ", "بِي"],
    answer: "بِهِ"
  },
  {
    type: "mcq",
    question: "بِ + نَا = ?",
    options: ["بِهِ", "بِهِمْ", "بِنَا", "بِكَ"],
    answer: "بِنَا"
  },

  // JOINING - فِي forms (2 questions)
  {
    type: "mcq",
    question: "فِي + هُ = ?",
    options: ["فِيهِ", "فِيهِمْ", "فِيكَ", "فِيَّ"],
    answer: "فِيهِ"
  },
  {
    type: "mcq",
    question: "فِي + نَا = ?",
    options: ["فِيهِ", "فِيهِمْ", "فِينَا", "فِيكَ"],
    answer: "فِينَا"
  },

  // JOINING - عَلَى forms (2 questions)
  {
    type: "mcq",
    question: "عَلَى + هُ = ?",
    options: ["عَلَيْهِ", "عَلَيْهِمْ", "عَلَيْكَ", "عَلَيَّ"],
    answer: "عَلَيْهِ"
  },
  {
    type: "mcq",
    question: "عَلَى + كُمْ = ?",
    options: ["عَلَيْهِمْ", "عَلَيْكُمْ", "عَلَيْنَا", "عَلَيَّ"],
    answer: "عَلَيْكُمْ"
  },

  // MEANING QUESTIONS (3 questions)
  {
    type: "mcq",
    question: "What does بِهِ mean?",
    options: ["In/with him", "In/with them", "In/with you", "In/with me"],
    answer: "In/with him"
  },
  {
    type: "mcq",
    question: "What does فِيهِ mean?",
    options: ["In him", "In them", "In you", "In me"],
    answer: "In him"
  },
  {
    type: "mcq",
    question: "What does عَلَيْهِ mean?",
    options: ["On him", "On them", "On you", "On me"],
    answer: "On him"
  },

  // MATCHING (2 questions)
  {
    type: "match",
    question: "Match the preposition with its meaning",
    pairs: [
      { arabic: "بِ", english: "In/With" },
      { arabic: "فِي", english: "In" },
      { arabic: "عَلَى", english: "On" }
    ]
  },
  {
    type: "match",
    question: "Match the forms with their meanings",
    pairs: [
      { arabic: "بِهِ", english: "In/with him" },
      { arabic: "فِيهِ", english: "In him" },
      { arabic: "عَلَيْهِ", english: "On him" }
    ]
  },

  // MIXED with previous lessons (4 questions)
  {
    type: "mcq",
    question: "بِسْمِ + اللَّهِ = ?",
    options: ["بِسْمِ اللَّهِ", "فِي سَبِيلِ اللَّهِ", "عَلَى اللَّهِ", "لِلَّهِ"],
    answer: "بِسْمِ اللَّهِ"
  },
  {
    type: "mcq",
    question: "اَلسَّلَامُ + عَلَيْكُمْ = ?",
    options: ["بِسْمِ اللَّهِ", "فِي سَبِيلِ اللَّهِ", "اَلسَّلَامُ عَلَيْكُمْ", "لِلَّهِ"],
    answer: "اَلسَّلَامُ عَلَيْكُمْ"
  },
  {
    type: "mcq",
    question: "فِي + سَبِيلِ + اللَّهِ = ?",
    options: ["بِسْمِ اللَّهِ", "فِي سَبِيلِ اللَّهِ", "عَلَى اللَّهِ", "مِنَ اللَّهِ"],
    answer: "فِي سَبِيلِ اللَّهِ"
  },
  {
    type: "mcq",
    question: "رَضِيَ اللَّهُ + عَنْ + هُ = ?",
    options: [
      "رَضِيَ اللَّهُ عَنْهُ",
      "رَضِيَ اللَّهُ عَنْهَا",
      "رَضِيَ اللَّهُ عَنْهُمْ",
      "رَضِيَ اللَّهُ عَنَّا"
    ],
    answer: "رَضِيَ اللَّهُ عَنْهُ"
  },

  // APPLICATION (2 questions)
  {
    type: "mcq",
    question: "How do you say 'In the name of Allah' in Arabic?",
    options: ["فِي سَبِيلِ اللَّهِ", "بِسْمِ اللَّهِ", "عَلَى اللَّهِ", "لِلَّهِ"],
    answer: "بِسْمِ اللَّهِ"
  },
  {
    type: "mcq",
    question: "How do you say 'Peace be upon you' in Arabic?",
    options: ["بِسْمِ اللَّهِ", "فِي سَبِيلِ اللَّهِ", "اَلسَّلَامُ عَلَيْكُمْ", "لَكَ دِينُكَ"],
    answer: "اَلسَّلَامُ عَلَيْكُمْ"
  }
]
  },
  {
    id: 7,
    title: "Prepositions: إِلَى، مَعَ، عِنْدَ",
    arabicTitle: "إِلَى، مَعَ، عِنْدَ",
    topic: "To, With, Near/Have",
    quranCount: 1096,
    theory: {
      intro: "These 3 words occur 1096 times in Qur'an with 7 pronouns.",
      points: [
        "إِلَى = to/toward (example: إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ)",
        "مَعَ = with (example: إِنَّ اللَّهَ مَعَ الصَّابِرِينَ = Allah is with the patient ones)",
        "عِنْدَ = with/near/have (example: كَمْ رِيَالاً عِنْدَكَ؟ = How many Riyals do you have?)"
      ],
      ilaTable: [
        { form: "إِلَيْهِ", meaning: "to him" },
        { form: "إِلَيْهِمْ", meaning: "to them" },
        { form: "إِلَيْكَ", meaning: "to you" },
        { form: "إِلَيَّ", meaning: "to me" },
        { form: "إِلَيْكُمْ", meaning: "to you all" },
        { form: "إِلَيْنَا", meaning: "to us" },
      ],
      maTable: [
        { form: "مَعَهُ", meaning: "with him" },
        { form: "مَعَهُمْ", meaning: "with them" },
        { form: "مَعَكَ", meaning: "with you" },
        { form: "مَعِي", meaning: "with me" },
        { form: "مَعَكُمْ", meaning: "with you all" },
        { form: "مَعَنَا", meaning: "with us" },
      ],
      indaTable: [
        { form: "عِنْدَهُ", meaning: "with/near him; he has" },
        { form: "عِنْدَهُمْ", meaning: "with/near them; they have" },
        { form: "عِنْدَكَ", meaning: "with/near you; you have" },
        { form: "عِنْدِي", meaning: "with/near me; I have" },
        { form: "عِنْدَكُمْ", meaning: "with/near you all; you have" },
        { form: "عِنْدَنَا", meaning: "with/near us; we have" },
      ]
    },
    examples: [
      { arabic: "إِنَّ اللَّهَ مَعَنَا", english: "Indeed Allah is with us." },
      { arabic: "هَلْ عِنْدَكَ قَلَمٌ؟", english: "Do you have a pen?" },
      { arabic: "إِلَيْنَا الْمَصِيرُ", english: "To us is the return." },
    ],
exercises: [
  // BASIC MEANINGS - Prepositions (3 questions)
  {
    type: "mcq",
    question: "What does the preposition إِلَى mean?",
    options: ["From", "To/Toward", "With", "Near"],
    answer: "To/Toward"
  },
  {
    type: "mcq",
    question: "What does the preposition مَعَ mean?",
    options: ["To", "From", "With", "On"],
    answer: "With"
  },
  {
    type: "mcq",
    question: "What does the preposition عِنْدَ mean?",
    options: ["To", "From", "With", "Near/Have"],
    answer: "Near/Have"
  },

  // JOINING - إِلَى forms (2 questions)
  {
    type: "mcq",
    question: "إِلَى + هُ = ?",
    options: ["إِلَيْهِ", "إِلَيْهِمْ", "إِلَيْكَ", "إِلَيَّ"],
    answer: "إِلَيْهِ"
  },
  {
    type: "mcq",
    question: "إِلَى + نَا = ?",
    options: ["إِلَيْهِ", "إِلَيْهِمْ", "إِلَيْنَا", "إِلَيْكَ"],
    answer: "إِلَيْنَا"
  },

  // JOINING - مَعَ forms (2 questions)
  {
    type: "mcq",
    question: "مَعَ + هُ = ?",
    options: ["مَعَهُ", "مَعَهُمْ", "مَعَكَ", "مَعِي"],
    answer: "مَعَهُ"
  },
  {
    type: "mcq",
    question: "مَعَ + نَا = ?",
    options: ["مَعَهُ", "مَعَهُمْ", "مَعَنَا", "مَعَكَ"],
    answer: "مَعَنَا"
  },

  // JOINING - عِنْدَ forms (2 questions)
  {
    type: "mcq",
    question: "عِنْدَ + هُ = ?",
    options: ["عِنْدَهُ", "عِنْدَهُمْ", "عِنْدَكَ", "عِنْدِي"],
    answer: "عِنْدَهُ"
  },
  {
    type: "mcq",
    question: "عِنْدَ + ي = ?",
    options: ["عِنْدَهُ", "عِنْدَهُمْ", "عِنْدَكَ", "عِنْدِي"],
    answer: "عِنْدِي"
  },

  // MEANING QUESTIONS (3 questions)
  {
    type: "mcq",
    question: "What does إِلَيْهِ mean?",
    options: ["To him", "To them", "To you", "To me"],
    answer: "To him"
  },
  {
    type: "mcq",
    question: "What does مَعَهُ mean?",
    options: ["With him", "With them", "With you", "With me"],
    answer: "With him"
  },
  {
    type: "mcq",
    question: "What does عِنْدَهُ mean?",
    options: ["Near him / He has", "Near them", "Near you", "Near me"],
    answer: "Near him / He has"
  },

  // MATCHING (2 questions)
  {
    type: "match",
    question: "Match the preposition with its meaning",
    pairs: [
      { arabic: "إِلَى", english: "To/Toward" },
      { arabic: "مَعَ", english: "With" },
      { arabic: "عِنْدَ", english: "Near/Have" }
    ]
  },
  {
    type: "match",
    question: "Match the forms with their meanings",
    pairs: [
      { arabic: "إِلَيْهِ", english: "To him" },
      { arabic: "مَعَهُ", english: "With him" },
      { arabic: "عِنْدَهُ", english: "Near him / He has" }
    ]
  },

  // MIXED with previous lessons (4 questions)
  {
    type: "mcq",
    question: "إِنَّ اللَّهَ + مَعَنَا = ?",
    options: [
      "إِنَّ اللَّهَ مَعَنَا",
      "إِنَّ اللَّهَ عَلَيْنَا",
      "إِنَّ اللَّهَ فِينَا",
      "إِنَّ اللَّهَ بِنَا"
    ],
    answer: "إِنَّ اللَّهَ مَعَنَا"
  },
  {
    type: "mcq",
    question: "هَلْ + عِنْدَكَ + قَلَمٌ = ?",
    options: [
      "هَلْ مَعَكَ قَلَمٌ",
      "هَلْ عِنْدَكَ قَلَمٌ",
      "هَلْ إِلَيْكَ قَلَمٌ",
      "هَلْ لَكَ قَلَمٌ"
    ],
    answer: "هَلْ عِنْدَكَ قَلَمٌ"
  },
  {
    type: "mcq",
    question: "إِلَيْنَا + الْمَصِيرُ = ?",
    options: [
      "إِلَيْهِمُ الْمَصِيرُ",
      "إِلَيْكَ الْمَصِيرُ",
      "إِلَيْنَا الْمَصِيرُ",
      "إِلَيْهِ الْمَصِيرُ"
    ],
    answer: "إِلَيْنَا الْمَصِيرُ"
  },
  {
    type: "mcq",
    question: "بِسْمِ + اللَّهِ = ?",
    options: ["بِسْمِ اللَّهِ", "فِي سَبِيلِ اللَّهِ", "عَلَى اللَّهِ", "لِلَّهِ"],
    answer: "بِسْمِ اللَّهِ"
  },

  // APPLICATION (2 questions)
  {
    type: "mcq",
    question: "How do you say 'Indeed Allah is with us' in Arabic?",
    options: [
      "إِنَّ اللَّهَ مَعَنَا",
      "إِنَّ اللَّهَ عَلَيْنَا",
      "إِنَّ اللَّهَ فِينَا",
      "إِنَّ اللَّهَ بِنَا"
    ],
    answer: "إِنَّ اللَّهَ مَعَنَا"
  },
  {
    type: "mcq",
    question: "What does 'عِنْدِي' mean?",
    options: ["With me", "To me", "Near me / I have", "From me"],
    answer: "Near me / I have"
  }
]
  },
  {
    id: 8,
    title: "Demonstrative Pronouns",
    arabicTitle: "هَٰذَا، هَٰؤُلَاء، ذَٰلِكَ، أُولَٰئِكَ",
    topic: "This, These, That, Those",
    quranCount: 953,
    theory: {
      intro: "These 4 demonstrative pronouns occur 953 times in the Qur'an.",
      points: [
        "هَٰذَا = This (for something near, masculine) — 225 times",
        "هَٰؤُلَاء = These (for persons near, plural) — 46 times",
        "ذَٰلِكَ = That (for something far, masculine) — 478 times",
        "أُولَٰئِكَ = Those (for persons far, plural) — 204 times",
        "Feminine of هَٰذَا = هَٰذِهِ (47 times)",
        "Feminine of ذَٰلِكَ = تِلْكَ (43 times)"
      ],
      table: [
        { arabic: "هَٰذَا", english: "This", count: 225 },
        { arabic: "هَٰؤُلَاء", english: "These", count: 46 },
        { arabic: "ذَٰلِكَ", english: "That", count: 478 },
        { arabic: "أُولَٰئِكَ", english: "Those", count: 204 },
        { arabic: "هَٰذِهِ", english: "This (feminine)", count: 47 },
        { arabic: "تِلْكَ", english: "That (feminine)", count: 43 },
      ]
    },
    examples: [
      { arabic: "هَٰذَا مُسْلِمٌ", english: "This is a Muslim." },
      { arabic: "ذَٰلِكَ الْكِتَابُ", english: "That is the Book." },
      { arabic: "أُولَٰئِكَ مُؤْمِنُونَ", english: "Those are believers." },
      { arabic: "هَٰؤُلَاء مُسْلِمُونَ", english: "These are Muslims." },
    ],
exercises: [
  // BASIC MEANINGS (6 questions)
  {
    type: "mcq",
    question: "What does هَٰذَا mean?",
    options: ["This", "These", "That", "Those"],
    answer: "This"
  },
  {
    type: "mcq",
    question: "What does هَٰؤُلَاء mean?",
    options: ["This", "These", "That", "Those"],
    answer: "These"
  },
  {
    type: "mcq",
    question: "What does ذَٰلِكَ mean?",
    options: ["This", "These", "That", "Those"],
    answer: "That"
  },
  {
    type: "mcq",
    question: "What does أُولَٰئِكَ mean?",
    options: ["This", "These", "That", "Those"],
    answer: "Those"
  },
  {
    type: "mcq",
    question: "What is the feminine of هَٰذَا?",
    options: ["ذَٰلِكَ", "تِلْكَ", "هَٰذِهِ", "أُولَٰئِكَ"],
    answer: "هَٰذِهِ"
  },
  {
    type: "mcq",
    question: "What is the feminine of ذَٰلِكَ?",
    options: ["هَٰذَا", "هَٰذِهِ", "تِلْكَ", "أُولَٰئِكَ"],
    answer: "تِلْكَ"
  },

  // JOINING - Demonstrative + Noun (4 questions)
  {
    type: "mcq",
    question: "هَٰذَا + مُسْلِمٌ = ?",
    options: ["هَٰذَا مُسْلِمٌ", "هَٰؤُلَاء مُسْلِمُونَ", "ذَٰلِكَ مُسْلِمٌ", "أُولَٰئِكَ مُسْلِمُونَ"],
    answer: "هَٰذَا مُسْلِمٌ"
  },
  {
    type: "mcq",
    question: "هَٰؤُلَاء + مُسْلِمُونَ = ?",
    options: ["هَٰذَا مُسْلِمٌ", "هَٰؤُلَاء مُسْلِمُونَ", "ذَٰلِكَ مُسْلِمٌ", "تِلْكَ مُسْلِمَةٌ"],
    answer: "هَٰؤُلَاء مُسْلِمُونَ"
  },
  {
    type: "mcq",
    question: "ذَٰلِكَ + كِتَابٌ = ?",
    options: ["هَٰذَا كِتَابٌ", "هَٰذِهِ كِتَابٌ", "ذَٰلِكَ كِتَابٌ", "تِلْكَ كِتَابٌ"],
    answer: "ذَٰلِكَ كِتَابٌ"
  },
  {
    type: "mcq",
    question: "أُولَٰئِكَ + مُؤْمِنُونَ = ?",
    options: ["هَٰؤُلَاء مُؤْمِنُونَ", "أُولَٰئِكَ مُؤْمِنُونَ", "هَٰذَا مُؤْمِنٌ", "ذَٰلِكَ مُؤْمِنٌ"],
    answer: "أُولَٰئِكَ مُؤْمِنُونَ"
  },

  // MEANING QUESTIONS (4 questions)
  {
    type: "mcq",
    question: "What is the meaning of 'هَٰذَا كِتَابٌ'?",
    options: ["That is a book", "This is a book", "These are books", "Those are books"],
    answer: "This is a book"
  },
  {
    type: "mcq",
    question: "What is the meaning of 'ذَٰلِكَ الْكِتَابُ'?",
    options: ["This is the book", "These are the books", "That is the book", "Those are the books"],
    answer: "That is the book"
  },
  {
    type: "mcq",
    question: "What is the meaning of 'هَٰذِهِ مُسْلِمَةٌ'?",
    options: ["This is a Muslim (male)", "This is a Muslim (female)", "That is a Muslim", "These are Muslims"],
    answer: "This is a Muslim (female)"
  },
  {
    type: "mcq",
    question: "What does 'تِلْكَ' refer to?",
    options: ["This (masculine)", "This (feminine)", "That (masculine)", "That (feminine)"],
    answer: "That (feminine)"
  },

  // MATCHING (2 questions)
  {
    type: "match",
    question: "Match the demonstrative pronoun with its meaning",
    pairs: [
      { arabic: "هَٰذَا", english: "This" },
      { arabic: "هَٰؤُلَاء", english: "These" },
      { arabic: "ذَٰلِكَ", english: "That" },
      { arabic: "أُولَٰئِكَ", english: "Those" },
      { arabic: "هَٰذِهِ", english: "This (feminine)" },
      { arabic: "تِلْكَ", english: "That (feminine)" }
    ]
  },
  {
    type: "match",
    question: "Match the Arabic phrase with its English translation",
    pairs: [
      { arabic: "هَٰذَا مُسْلِمٌ", english: "This is a Muslim" },
      { arabic: "هَٰؤُلَاء مُسْلِمُونَ", english: "These are Muslims" },
      { arabic: "ذَٰلِكَ كِتَابٌ", english: "That is a book" },
      { arabic: "أُولَٰئِكَ مُؤْمِنُونَ", english: "Those are believers" }
    ]
  },

  // MIXED with previous lessons (4 questions)
  {
    type: "mcq",
    question: "How do you say 'This is a Muslim' in Arabic?",
    options: ["هَٰذَا مُسْلِمٌ", "هُوَ مُسْلِمٌ", "هَٰذِهِ مُسْلِمَةٌ", "ذَٰلِكَ مُسْلِمٌ"],
    answer: "هَٰذَا مُسْلِمٌ"
  },
  {
    type: "mcq",
    question: "How do you say 'That is the Book' in Arabic?",
    options: ["هَٰذَا الْكِتَابُ", "ذَٰلِكَ الْكِتَابُ", "تِلْكَ الْكِتَابُ", "هَٰذِهِ الْكِتَابُ"],
    answer: "ذَٰلِكَ الْكِتَابُ"
  },
  {
    type: "mcq",
    question: "Which is correct for 'Those are believers'?",
    options: ["هَٰؤُلَاء مُؤْمِنُونَ", "أُولَٰئِكَ مُؤْمِنُونَ", "هَٰذَا مُؤْمِنٌ", "ذَٰلِكَ مُؤْمِنٌ"],
    answer: "أُولَٰئِكَ مُؤْمِنُونَ"
  }]
  },
  {
    id: 9,
    title: "Past Tense - فَعَلَ، فَتَحَ، جَعَلَ",
    arabicTitle: "فعل ماضٍ: فَعَلَ، فَتَحَ، جَعَلَ",
    topic: "Perfect Tense (فعل ماضٍ) - Pattern 1",
    quranCount: 26,
    theory: {
      intro: "فعل ماضٍ (Perfect Tense) = action that has been done/completed.",
      points: [
        "Verbs in Arabic are made of 3 root letters.",
        "In past tense — the ENDINGS change to show who did the action.",
        "Ending memory tip: اوا ـَـ تُ تَ تُمْ نَا",
        "فَعَلَ = he did | فَتَحَ = he opened | جَعَلَ = he made"
      ],
      conjugation: [
        { person: "He did", arabic: "فَعَلَ" },
        { person: "They all did", arabic: "فَعَلُوا" },
        { person: "You did", arabic: "فَعَلْتَ" },
        { person: "I did", arabic: "فَعَلْتُ" },
        { person: "You all did", arabic: "فَعَلْتُمْ" },
        { person: "We did", arabic: "فَعَلْنَا" },
      ],
      verb2: [
        { person: "He opened", arabic: "فَتَحَ" },
        { person: "They opened", arabic: "فَتَحُوا" },
        { person: "You opened", arabic: "فَتَحْتَ" },
        { person: "I opened", arabic: "فَتَحْتُ" },
        { person: "You all opened", arabic: "فَتَحْتُمْ" },
        { person: "We opened", arabic: "فَتَحْنَا" },
      ]
    },
    examples: [
      { arabic: "فَعَلَ خَيْرًا", english: "He did good." },
      { arabic: "فَتَحُوا الْكِتَابَ", english: "They opened the book." },
      { arabic: "جَعَلْنَا لَهُ نُورًا", english: "We made for him a light." },
    ],
exercises: [
  // BASIC MEANINGS - Verbs (3 questions)
  {
    type: "mcq",
    question: "What does فَعَلَ mean?",
    options: ["He opened", "He did", "He made", "He helped"],
    answer: "He did"
  },
  {
    type: "mcq",
    question: "What does فَتَحَ mean?",
    options: ["He did", "He made", "He opened", "He closed"],
    answer: "He opened"
  },
  {
    type: "mcq",
    question: "What does جَعَلَ mean?",
    options: ["He did", "He opened", "He made/put", "He took"],
    answer: "He made/put"
  },

  // فَعَلَ CONJUGATION (He did pattern) - 5 questions
  {
    type: "mcq",
    question: "What is the past tense for 'He did'?",
    options: ["فَعَلَ", "فَعَلُوا", "فَعَلْتَ", "فَعَلْتُ"],
    answer: "فَعَلَ"
  },
  {
    type: "mcq",
    question: "What is 'They all did' in Arabic?",
    options: ["فَعَلَ", "فَعَلُوا", "فَعَلْتَ", "فَعَلْنَا"],
    answer: "فَعَلُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'You did' (singular masculine)?",
    options: ["فَعَلَ", "فَعَلُوا", "فَعَلْتَ", "فَعَلْتُ"],
    answer: "فَعَلْتَ"
  },
  {
    type: "mcq",
    question: "What is 'I did' in Arabic?",
    options: ["فَعَلَ", "فَعَلُوا", "فَعَلْتَ", "فَعَلْتُ"],
    answer: "فَعَلْتُ"
  },
  {
    type: "mcq",
    question: "How do you say 'We did' in Arabic?",
    options: ["فَعَلْتُمْ", "فَعَلْنَا", "فَعَلُوا", "فَعَلْتَ"],
    answer: "فَعَلْنَا"
  },

  // فَتَحَ CONJUGATION (He opened pattern) - 4 questions
  {
    type: "mcq",
    question: "What is 'They opened' in Arabic?",
    options: ["فَتَحَ", "فَتَحُوا", "فَتَحْتَ", "فَتَحْتُ"],
    answer: "فَتَحُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'You opened' (singular)?",
    options: ["فَتَحَ", "فَتَحُوا", "فَتَحْتَ", "فَتَحْنَا"],
    answer: "فَتَحْتَ"
  },
  {
    type: "mcq",
    question: "What is 'I opened' in Arabic?",
    options: ["فَتَحَ", "فَتَحْتَ", "فَتَحْتُ", "فَتَحْنَا"],
    answer: "فَتَحْتُ"
  },
  {
    type: "mcq",
    question: "How do you say 'We opened' in Arabic?",
    options: ["فَتَحُوا", "فَتَحْتُمْ", "فَتَحْنَا", "فَتَحْتَ"],
    answer: "فَتَحْنَا"
  },

  // جَعَلَ CONJUGATION (He made pattern) - 3 questions
  {
    type: "mcq",
    question: "What is 'He made' in Arabic?",
    options: ["فَعَلَ", "فَتَحَ", "جَعَلَ", "نَصَرَ"],
    answer: "جَعَلَ"
  },
  {
    type: "mcq",
    question: "What is 'They made' in Arabic?",
    options: ["جَعَلَ", "جَعَلُوا", "جَعَلْتَ", "جَعَلْتُ"],
    answer: "جَعَلُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'We made' in Arabic?",
    options: ["جَعَلُوا", "جَعَلْتُمْ", "جَعَلْنَا", "جَعَلْتَ"],
    answer: "جَعَلْنَا"
  },

  // JOINING - Suffix addition (3 questions)
  {
    type: "mcq",
    question: "فَعَلَ + وا = ?",
    options: ["فَعَلَ", "فَعَلُوا", "فَعَلْتَ", "فَعَلْنَا"],
    answer: "فَعَلُوا"
  },
  {
    type: "mcq",
    question: "فَتَحَ + نَا = ?",
    options: ["فَتَحُوا", "فَتَحْتُمْ", "فَتَحْنَا", "فَتَحْتَ"],
    answer: "فَتَحْنَا"
  },
  {
    type: "mcq",
    question: "جَعَلَ + تُ = ?",
    options: ["جَعَلَ", "جَعَلُوا", "جَعَلْتَ", "جَعَلْتُ"],
    answer: "جَعَلْتُ"
  },

  // MATCHING (2 questions)
  {
    type: "match",
    question: "Match the past tense forms of فَعَلَ",
    pairs: [
      { arabic: "فَعَلَ", english: "He did" },
      { arabic: "فَعَلُوا", english: "They did" },
      { arabic: "فَعَلْتَ", english: "You did" },
      { arabic: "فَعَلْتُ", english: "I did" },
      { arabic: "فَعَلْنَا", english: "We did" }
    ]
  },
  {
    type: "match",
    question: "Match the past tense forms of فَتَحَ",
    pairs: [
      { arabic: "فَتَحَ", english: "He opened" },
      { arabic: "فَتَحُوا", english: "They opened" },
      { arabic: "فَتَحْتَ", english: "You opened" },
      { arabic: "فَتَحْتُ", english: "I opened" },
      { arabic: "فَتَحْنَا", english: "We opened" }
    ]
  }
]
  },
  {
    id: 10,
    title: "Past Tense - نَصَرَ، خَلَقَ، ذَكَرَ، عَبَدَ",
    arabicTitle: "فعل ماضٍ: نَصَرَ، خَلَقَ، ذَكَرَ، عَبَدَ",
    topic: "Perfect Tense - Pattern 2 (نَصَرَ style)",
    quranCount: 10,
    theory: {
      intro: "These verbs follow the same past tense pattern as lesson 9 but with different vowels.",
      points: [
        "نَصَرَ = he helped (10 times in Qur'an)",
        "خَلَقَ = he created (150 times)",
        "ذَكَرَ = he remembered (7 times)",
        "عَبَدَ = he worshipped (5 times)",
        "فعل ماضٍ is negated with: مَا (example: مَا خَلَقَ = he did not create)"
      ],
      conjugation: [
        { person: "He helped", arabic: "نَصَرَ" },
        { person: "They helped", arabic: "نَصَرُوا" },
        { person: "You helped", arabic: "نَصَرْتَ" },
        { person: "I helped", arabic: "نَصَرْتُ" },
        { person: "You all helped", arabic: "نَصَرْتُمْ" },
        { person: "We helped", arabic: "نَصَرْنَا" },
      ],
      verb2: [
        { person: "He created", arabic: "خَلَقَ" },
        { person: "They created", arabic: "خَلَقُوا" },
        { person: "You created", arabic: "خَلَقْتَ" },
        { person: "I created", arabic: "خَلَقْتُ" },
        { person: "You all created", arabic: "خَلَقْتُمْ" },
        { person: "We created", arabic: "خَلَقْنَا" },
      ]
    },
    examples: [
      { arabic: "نَصَرَ اللَّهُ", english: "Allah helped." },
      { arabic: "خَلَقَ اللَّهُ الْإِنْسَانَ", english: "Allah created the human." },
      { arabic: "مَا خَلَقَ شَيْئًا", english: "He did not create anything." },
    ],
exercises: [
  // BASIC MEANINGS - Verbs (4 questions)
  {
    type: "mcq",
    question: "What does نَصَرَ mean?",
    options: ["He helped", "He created", "He remembered", "He worshipped"],
    answer: "He helped"
  },
  {
    type: "mcq",
    question: "What does خَلَقَ mean?",
    options: ["He helped", "He created", "He remembered", "He worshipped"],
    answer: "He created"
  },
  {
    type: "mcq",
    question: "What does ذَكَرَ mean?",
    options: ["He helped", "He created", "He remembered", "He worshipped"],
    answer: "He remembered"
  },
  {
    type: "mcq",
    question: "What does عَبَدَ mean?",
    options: ["He helped", "He created", "He remembered", "He worshipped"],
    answer: "He worshipped"
  },

  // نَصَرَ CONJUGATION (He helped pattern) - 4 questions
  {
    type: "mcq",
    question: "What is 'They helped' in Arabic?",
    options: ["نَصَرَ", "نَصَرُوا", "نَصَرْتَ", "نَصَرْتُ"],
    answer: "نَصَرُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'You helped' (singular)?",
    options: ["نَصَرَ", "نَصَرُوا", "نَصَرْتَ", "نَصَرْنَا"],
    answer: "نَصَرْتَ"
  },
  {
    type: "mcq",
    question: "What is 'I helped' in Arabic?",
    options: ["نَصَرَ", "نَصَرْتَ", "نَصَرْتُ", "نَصَرْنَا"],
    answer: "نَصَرْتُ"
  },
  {
    type: "mcq",
    question: "How do you say 'We helped' in Arabic?",
    options: ["نَصَرُوا", "نَصَرْتُمْ", "نَصَرْنَا", "نَصَرْتَ"],
    answer: "نَصَرْنَا"
  },

  // خَلَقَ CONJUGATION (He created pattern) - 3 questions
  {
    type: "mcq",
    question: "What is 'He created' in Arabic?",
    options: ["نَصَرَ", "خَلَقَ", "ذَكَرَ", "عَبَدَ"],
    answer: "خَلَقَ"
  },
  {
    type: "mcq",
    question: "What is 'They created' in Arabic?",
    options: ["خَلَقَ", "خَلَقُوا", "خَلَقْتَ", "خَلَقْتُ"],
    answer: "خَلَقُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'We created' in Arabic?",
    options: ["خَلَقُوا", "خَلَقْتُمْ", "خَلَقْنَا", "خَلَقْتَ"],
    answer: "خَلَقْنَا"
  },

  // ذَكَرَ AND عَبَدَ - Basic forms (3 questions)
  {
    type: "mcq",
    question: "What is 'He remembered' in Arabic?",
    options: ["نَصَرَ", "خَلَقَ", "ذَكَرَ", "عَبَدَ"],
    answer: "ذَكَرَ"
  },
  {
    type: "mcq",
    question: "What is 'They worshipped' in Arabic?",
    options: ["عَبَدَ", "عَبَدُوا", "عَبَدْتَ", "عَبَدْتُ"],
    answer: "عَبَدُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'I remembered' in Arabic?",
    options: ["ذَكَرَ", "ذَكَرُوا", "ذَكَرْتَ", "ذَكَرْتُ"],
    answer: "ذَكَرْتُ"
  },

  // NEGATION with مَا (2 questions)
  {
    type: "mcq",
    question: "مَا + خَلَقَ = ?",
    options: ["He created", "He did not create", "He will create", "He is creating"],
    answer: "He did not create"
  },
  {
    type: "mcq",
    question: "How do you say 'He did not help' in Arabic?",
    options: ["نَصَرَ", "مَا نَصَرَ", "لَا نَصَرَ", "مَا يَنْصُرُ"],
    answer: "مَا نَصَرَ"
  },

  // JOINING - Suffix addition (2 questions)
  {
    type: "mcq",
    question: "نَصَرَ + وا = ?",
    options: ["نَصَرَ", "نَصَرُوا", "نَصَرْتَ", "نَصَرْنَا"],
    answer: "نَصَرُوا"
  },
  {
    type: "mcq",
    question: "خَلَقَ + نَا = ?",
    options: ["خَلَقُوا", "خَلَقْتُمْ", "خَلَقْنَا", "خَلَقْتَ"],
    answer: "خَلَقْنَا"
  },

  // MATCHING (2 questions)
  {
    type: "match",
    question: "Match the verb with its meaning",
    pairs: [
      { arabic: "نَصَرَ", english: "He helped" },
      { arabic: "خَلَقَ", english: "He created" },
      { arabic: "ذَكَرَ", english: "He remembered" },
      { arabic: "عَبَدَ", english: "He worshipped" }
    ]
  },
  {
    type: "match",
    question: "Match the past tense forms of نَصَرَ",
    pairs: [
      { arabic: "نَصَرَ", english: "He helped" },
      { arabic: "نَصَرُوا", english: "They helped" },
      { arabic: "نَصَرْتَ", english: "You helped" },
      { arabic: "نَصَرْتُ", english: "I helped" },
      { arabic: "نَصَرْنَا", english: "We helped" }
    ]
  }
]
  },
  {
    id: 11,
    title: "Past Tense - ضَرَبَ، سَمِعَ، عَلِمَ، عَمِلَ",
    arabicTitle: "فعل ماضٍ: ضَرَبَ، سَمِعَ، عَلِمَ، عَمِلَ",
    topic: "Perfect Tense - Pattern 3 (ضَرَبَ / سَمِعَ style)",
    quranCount: 22,
    theory: {
      intro: "Same past tense endings, different root patterns.",
      points: [
        "ضَرَبَ = he hit/struck (22 times)",
        "سَمِعَ = he listened (30 times)",
        "عَلِمَ = he knew (35 times)",
        "عَمِلَ = he did/worked (99 times)",
        "Negation of past tense: مَا ضَرَبَ = He did not hit"
      ],
      conjugation: [
        { person: "He listened", arabic: "سَمِعَ" },
        { person: "They listened", arabic: "سَمِعُوا" },
        { person: "You listened", arabic: "سَمِعْتَ" },
        { person: "I listened", arabic: "سَمِعْتُ" },
        { person: "You all listened", arabic: "سَمِعْتُمْ" },
        { person: "We listened", arabic: "سَمِعْنَا" },
      ]
    },
    examples: [
      { arabic: "سَمِعُوا الْقُرْآنَ", english: "They listened to the Qur'an." },
      { arabic: "عَلِمَ اللَّهُ", english: "Allah knew." },
      { arabic: "مَا ضَرَبَ زَيْدًا", english: "He did not hit Zaid." },
    ],
exercises: [
  // BASIC MEANINGS - Verbs (4 questions)
  {
    type: "mcq",
    question: "What does ضَرَبَ mean?",
    options: ["He listened", "He hit/struck", "He knew", "He worked"],
    answer: "He hit/struck"
  },
  {
    type: "mcq",
    question: "What does سَمِعَ mean?",
    options: ["He hit", "He knew", "He listened", "He worked"],
    answer: "He listened"
  },
  {
    type: "mcq",
    question: "What does عَلِمَ mean?",
    options: ["He hit", "He listened", "He knew", "He worked"],
    answer: "He knew"
  },
  {
    type: "mcq",
    question: "What does عَمِلَ mean?",
    options: ["He hit", "He listened", "He knew", "He did/worked"],
    answer: "He did/worked"
  },

  // ضَرَبَ CONJUGATION (He hit pattern) - 3 questions
  {
    type: "mcq",
    question: "What is 'They hit' in Arabic?",
    options: ["ضَرَبَ", "ضَرَبُوا", "ضَرَبْتَ", "ضَرَبْتُ"],
    answer: "ضَرَبُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'I hit' in Arabic?",
    options: ["ضَرَبَ", "ضَرَبْتَ", "ضَرَبْتُ", "ضَرَبْنَا"],
    answer: "ضَرَبْتُ"
  },
  {
    type: "mcq",
    question: "What is 'We hit' in Arabic?",
    options: ["ضَرَبُوا", "ضَرَبْتُمْ", "ضَرَبْنَا", "ضَرَبْتَ"],
    answer: "ضَرَبْنَا"
  },

  // سَمِعَ CONJUGATION (He listened pattern) - 4 questions
  {
    type: "mcq",
    question: "What is 'He listened' in Arabic?",
    options: ["ضَرَبَ", "سَمِعَ", "عَلِمَ", "عَمِلَ"],
    answer: "سَمِعَ"
  },
  {
    type: "mcq",
    question: "What is 'They listened' in Arabic?",
    options: ["سَمِعَ", "سَمِعُوا", "سَمِعْتَ", "سَمِعْتُ"],
    answer: "سَمِعُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'You listened' (singular)?",
    options: ["سَمِعَ", "سَمِعُوا", "سَمِعْتَ", "سَمِعْنَا"],
    answer: "سَمِعْتَ"
  },
  {
    type: "mcq",
    question: "What is 'We listened' in Arabic?",
    options: ["سَمِعُوا", "سَمِعْتُمْ", "سَمِعْنَا", "سَمِعْتَ"],
    answer: "سَمِعْنَا"
  },

  // عَلِمَ CONJUGATION (He knew pattern) - 3 questions
  {
    type: "mcq",
    question: "What is 'He knew' in Arabic?",
    options: ["ضَرَبَ", "سَمِعَ", "عَلِمَ", "عَمِلَ"],
    answer: "عَلِمَ"
  },
  {
    type: "mcq",
    question: "What is 'They knew' in Arabic?",
    options: ["عَلِمَ", "عَلِمُوا", "عَلِمْتَ", "عَلِمْتُ"],
    answer: "عَلِمُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'I knew' in Arabic?",
    options: ["عَلِمَ", "عَلِمْتَ", "عَلِمْتُ", "عَلِمْنَا"],
    answer: "عَلِمْتُ"
  },

  // عَمِلَ CONJUGATION (He worked pattern) - 3 questions
  {
    type: "mcq",
    question: "What is 'He worked' in Arabic?",
    options: ["ضَرَبَ", "سَمِعَ", "عَلِمَ", "عَمِلَ"],
    answer: "عَمِلَ"
  },
  {
    type: "mcq",
    question: "What is 'You worked' (plural - you all) in Arabic?",
    options: ["عَمِلَ", "عَمِلُوا", "عَمِلْتَ", "عَمِلْتُمْ"],
    answer: "عَمِلْتُمْ"
  },
  {
    type: "mcq",
    question: "How do you say 'We worked' in Arabic?",
    options: ["عَمِلُوا", "عَمِلْتُمْ", "عَمِلْنَا", "عَمِلْتَ"],
    answer: "عَمِلْنَا"
  },

  // NEGATION with مَا (2 questions)
  {
    type: "mcq",
    question: "مَا + ضَرَبَ = ?",
    options: ["He hit", "He did not hit", "He will hit", "He is hitting"],
    answer: "He did not hit"
  },
  {
    type: "mcq",
    question: "How do you say 'He did not know' in Arabic?",
    options: ["عَلِمَ", "مَا عَلِمَ", "لَا عَلِمَ", "مَا يَعْلَمُ"],
    answer: "مَا عَلِمَ"
  },

  // MATCHING (1 question)
  {
    type: "match",
    question: "Match the verb with its meaning",
    pairs: [
      { arabic: "ضَرَبَ", english: "He hit" },
      { arabic: "سَمِعَ", english: "He listened" },
      { arabic: "عَلِمَ", english: "He knew" },
      { arabic: "عَمِلَ", english: "He worked" }
    ]
  }
]
  },
  {
    id: 12,
    title: "Present/Future Tense - يَفْعَلُ، يَفْتَحُ، يَجْعَلُ",
    arabicTitle: "فعل مضارع: يَفْعَلُ، يَفْتَحُ، يَجْعَلُ",
    topic: "Imperfect Tense (فعل مضارع) - Intro",
    quranCount: 54,
    theory: {
      intro: "فعل مضارع = present or future tense. About 8500 words of the Qur'an are in this tense — nearly 1 in every line!",
      points: [
        "In past tense, the ENDINGS change.",
        "In present/future tense, the BEGINNINGS change.",
        "Starting letters memory: يَ تَ أَ نَ",
        "يَفْعَلُ = he does/will do | تَفْعَلُ = you do/will do | أَفْعَلُ = I do/will do | نَفْعَلُ = we do/will do"
      ],
      conjugation: [
        { person: "He does/will do", arabic: "يَفْعَلُ" },
        { person: "They do/will do", arabic: "يَفْعَلُونَ" },
        { person: "You do/will do", arabic: "تَفْعَلُ" },
        { person: "I do/will do", arabic: "أَفْعَلُ" },
        { person: "You all do/will do", arabic: "تَفْعَلُونَ" },
        { person: "We do/will do", arabic: "نَفْعَلُ" },
      ],
      verb2: [
        { person: "He opens/will open", arabic: "يَفْتَحُ" },
        { person: "They open/will open", arabic: "يَفْتَحُونَ" },
        { person: "You open/will open", arabic: "تَفْتَحُ" },
        { person: "I open/will open", arabic: "أَفْتَحُ" },
        { person: "You all open/will open", arabic: "تَفْتَحُونَ" },
        { person: "We open/will open", arabic: "نَفْتَحُ" },
      ]
    },
    examples: [
      { arabic: "يَفْعَلُ مَا يَشَاءُ", english: "He does what He wills." },
      { arabic: "يَجْعَلُ اللَّهُ نُورًا", english: "Allah makes a light." },
      { arabic: "نَفْتَحُ الْكِتَابَ", english: "We open the book." },
    ],
exercises: [
  // BASIC MEANINGS - Present tense verbs (3 questions)
  {
    type: "mcq",
    question: "What does يَفْعَلُ mean?",
    options: ["He did", "He does/will do", "He opened", "He makes"],
    answer: "He does/will do"
  },
  {
    type: "mcq",
    question: "What does يَفْتَحُ mean?",
    options: ["He opened", "He does", "He opens/will open", "He makes"],
    answer: "He opens/will open"
  },
  {
    type: "mcq",
    question: "What does يَجْعَلُ mean?",
    options: ["He did", "He opens", "He does", "He makes/will make"],
    answer: "He makes/will make"
  },

  // يَفْعَلُ CONJUGATION (He does pattern) - 5 questions
  {
    type: "mcq",
    question: "What is 'He does/will do' in Arabic?",
    options: ["يَفْعَلُ", "يَفْعَلُونَ", "تَفْعَلُ", "أَفْعَلُ"],
    answer: "يَفْعَلُ"
  },
  {
    type: "mcq",
    question: "What is 'They do/will do' in Arabic?",
    options: ["يَفْعَلُ", "يَفْعَلُونَ", "تَفْعَلُ", "نَفْعَلُ"],
    answer: "يَفْعَلُونَ"
  },
  {
    type: "mcq",
    question: "How do you say 'You do/will do' (singular masculine)?",
    options: ["يَفْعَلُ", "يَفْعَلُونَ", "تَفْعَلُ", "أَفْعَلُ"],
    answer: "تَفْعَلُ"
  },
  {
    type: "mcq",
    question: "What is 'I do/will do' in Arabic?",
    options: ["يَفْعَلُ", "تَفْعَلُ", "أَفْعَلُ", "نَفْعَلُ"],
    answer: "أَفْعَلُ"
  },
  {
    type: "mcq",
    question: "How do you say 'We do/will do' in Arabic?",
    options: ["يَفْعَلُونَ", "تَفْعَلُونَ", "أَفْعَلُ", "نَفْعَلُ"],
    answer: "نَفْعَلُ"
  },

  // يَفْتَحُ CONJUGATION (He opens pattern) - 4 questions
  {
    type: "mcq",
    question: "What is 'He opens/will open' in Arabic?",
    options: ["يَفْعَلُ", "يَفْتَحُ", "يَجْعَلُ", "نَفْتَحُ"],
    answer: "يَفْتَحُ"
  },
  {
    type: "mcq",
    question: "What is 'They open/will open' in Arabic?",
    options: ["يَفْتَحُ", "يَفْتَحُونَ", "تَفْتَحُ", "نَفْتَحُ"],
    answer: "يَفْتَحُونَ"
  },
  {
    type: "mcq",
    question: "How do you say 'You open/will open' (singular)?",
    options: ["يَفْتَحُ", "يَفْتَحُونَ", "تَفْتَحُ", "أَفْتَحُ"],
    answer: "تَفْتَحُ"
  },
  {
    type: "mcq",
    question: "What is 'We open/will open' in Arabic?",
    options: ["يَفْتَحُونَ", "تَفْتَحُونَ", "أَفْتَحُ", "نَفْتَحُ"],
    answer: "نَفْتَحُ"
  },

  // يَجْعَلُ CONJUGATION (He makes pattern) - 3 questions
  {
    type: "mcq",
    question: "What is 'He makes/will make' in Arabic?",
    options: ["يَفْعَلُ", "يَفْتَحُ", "يَجْعَلُ", "نَجْعَلُ"],
    answer: "يَجْعَلُ"
  },
  {
    type: "mcq",
    question: "What is 'They make/will make' in Arabic?",
    options: ["يَجْعَلُ", "يَجْعَلُونَ", "تَجْعَلُ", "نَجْعَلُ"],
    answer: "يَجْعَلُونَ"
  },
  {
    type: "mcq",
    question: "How do you say 'I make/will make' in Arabic?",
    options: ["يَجْعَلُ", "تَجْعَلُ", "أَجْعَلُ", "نَجْعَلُ"],
    answer: "أَجْعَلُ"
  },

  // PRESENT TENSE PREFIXES (2 questions)
  {
    type: "mcq",
    question: "In present tense, what changes in the verb compared to past tense?",
    options: ["The endings", "The beginnings (prefixes)", "The middle letters", "Nothing changes"],
    answer: "The beginnings (prefixes)"
  },
  {
    type: "mcq",
    question: "Which letter is NOT a present tense prefix?",
    options: ["يَ", "تَ", "أَ", "وَ"],
    answer: "وَ"
  },

  // JOINING - Prefix addition (2 questions)
  {
    type: "mcq",
    question: "أَ + فْعَلُ = ?",
    options: ["يَفْعَلُ", "تَفْعَلُ", "أَفْعَلُ", "نَفْعَلُ"],
    answer: "أَفْعَلُ"
  },
  {
    type: "mcq",
    question: "نَ + فْتَحُ = ?",
    options: ["يَفْتَحُ", "تَفْتَحُ", "أَفْتَحُ", "نَفْتَحُ"],
    answer: "نَفْتَحُ"
  },

  // MATCHING (1 question)
  {
    type: "match",
    question: "Match the present tense forms with their meanings",
    pairs: [
      { arabic: "يَفْعَلُ", english: "He does" },
      { arabic: "يَفْعَلُونَ", english: "They do" },
      { arabic: "تَفْعَلُ", english: "You do" },
      { arabic: "أَفْعَلُ", english: "I do" },
      { arabic: "نَفْعَلُ", english: "We do" }
    ]
  }
]
  },
  {
    id: 13,
    title: "Present Tense - يَنْصُرُ، يَخْلُقُ، يَذْكُرُ، يَعْبُدُ",
    arabicTitle: "فعل مضارع: يَنْصُرُ، يَخْلُقُ، يَذْكُرُ، يَعْبُدُ",
    topic: "Imperfect Tense - Pattern 2",
    quranCount: 28,
    theory: {
      intro: "Same present/future pattern but with نَصَرَ style verbs.",
      points: [
        "يَنْصُرُ = he helps/will help (28 times)",
        "يَخْلُقُ = he creates/will create (23 times)",
        "يَذْكُرُ = he remembers/will remember (17 times)",
        "يَعْبُدُ = he worships/will worship (80 times)",
        "Negation: لَا يَخْلُقُ = he does not create | مَا يَخْلُقُ = he does not create"
      ],
      conjugation: [
        { person: "He helps", arabic: "يَنْصُرُ" },
        { person: "They help", arabic: "يَنْصُرُونَ" },
        { person: "You help", arabic: "تَنْصُرُ" },
        { person: "I help", arabic: "أَنْصُرُ" },
        { person: "You all help", arabic: "تَنْصُرُونَ" },
        { person: "We help", arabic: "نَنْصُرُ" },
      ]
    },
    examples: [
      { arabic: "لَا يَخْلُقُ شَيْئًا", english: "He does not create anything." },
      { arabic: "يَعْبُدُونَ اللَّهَ", english: "They worship Allah." },
      { arabic: "نَذْكُرُ الرَّحْمَنَ", english: "We remember Ar-Rahman." },
    ],
exercises: [
  // BASIC MEANINGS - Present tense verbs (4 questions)
  {
    type: "mcq",
    question: "What does يَنْصُرُ mean?",
    options: ["He creates", "He helps/will help", "He remembers", "He worships"],
    answer: "He helps/will help"
  },
  {
    type: "mcq",
    question: "What does يَخْلُقُ mean?",
    options: ["He helps", "He creates/will create", "He remembers", "He worships"],
    answer: "He creates/will create"
  },
  {
    type: "mcq",
    question: "What does يَذْكُرُ mean?",
    options: ["He helps", "He creates", "He remembers/will remember", "He worships"],
    answer: "He remembers/will remember"
  },
  {
    type: "mcq",
    question: "What does يَعْبُدُ mean?",
    options: ["He helps", "He creates", "He remembers", "He worships/will worship"],
    answer: "He worships/will worship"
  },

  // يَنْصُرُ CONJUGATION (He helps pattern) - 4 questions
  {
    type: "mcq",
    question: "What is 'He helps/will help' in Arabic?",
    options: ["يَنْصُرُ", "يَنْصُرُونَ", "تَنْصُرُ", "أَنْصُرُ"],
    answer: "يَنْصُرُ"
  },
  {
    type: "mcq",
    question: "What is 'They help/will help' in Arabic?",
    options: ["يَنْصُرُ", "يَنْصُرُونَ", "تَنْصُرُ", "نَنْصُرُ"],
    answer: "يَنْصُرُونَ"
  },
  {
    type: "mcq",
    question: "How do you say 'You help/will help' (singular)?",
    options: ["يَنْصُرُ", "يَنْصُرُونَ", "تَنْصُرُ", "أَنْصُرُ"],
    answer: "تَنْصُرُ"
  },
  {
    type: "mcq",
    question: "What is 'We help/will help' in Arabic?",
    options: ["يَنْصُرُونَ", "تَنْصُرُونَ", "أَنْصُرُ", "نَنْصُرُ"],
    answer: "نَنْصُرُ"
  },

  // يَخْلُقُ CONJUGATION (He creates pattern) - 3 questions
  {
    type: "mcq",
    question: "What is 'He creates/will create' in Arabic?",
    options: ["يَنْصُرُ", "يَخْلُقُ", "يَذْكُرُ", "يَعْبُدُ"],
    answer: "يَخْلُقُ"
  },
  {
    type: "mcq",
    question: "What is 'They create/will create' in Arabic?",
    options: ["يَخْلُقُ", "يَخْلُقُونَ", "تَخْلُقُ", "نَخْلُقُ"],
    answer: "يَخْلُقُونَ"
  },
  {
    type: "mcq",
    question: "How do you say 'I create/will create' in Arabic?",
    options: ["يَخْلُقُ", "تَخْلُقُ", "أَخْلُقُ", "نَخْلُقُ"],
    answer: "أَخْلُقُ"
  },

  // يَذْكُرُ AND يَعْبُدُ (3 questions)
  {
    type: "mcq",
    question: "What is 'He remembers/will remember' in Arabic?",
    options: ["يَنْصُرُ", "يَخْلُقُ", "يَذْكُرُ", "يَعْبُدُ"],
    answer: "يَذْكُرُ"
  },
  {
    type: "mcq",
    question: "What is 'They worship/will worship' in Arabic?",
    options: ["يَعْبُدُ", "يَعْبُدُونَ", "تَعْبُدُ", "نَعْبُدُ"],
    answer: "يَعْبُدُونَ"
  },
  {
    type: "mcq",
    question: "How do you say 'We remember/will remember' in Arabic?",
    options: ["يَذْكُرُونَ", "تَذْكُرُونَ", "أَذْكُرُ", "نَذْكُرُ"],
    answer: "نَذْكُرُ"
  },

  // NEGATION with لَا (2 questions)
  {
    type: "mcq",
    question: "لَا + يَخْلُقُ = ?",
    options: ["He creates", "He will create", "He does not create", "He created"],
    answer: "He does not create"
  },
  {
    type: "mcq",
    question: "How do you say 'He does not help' in Arabic?",
    options: ["يَنْصُرُ", "لَا يَنْصُرُ", "مَا نَصَرَ", "لَا نَصَرَ"],
    answer: "لَا يَنْصُرُ"
  },

  // MATCHING (2 questions)
  {
    type: "match",
    question: "Match the present tense verb with its meaning",
    pairs: [
      { arabic: "يَنْصُرُ", english: "He helps" },
      { arabic: "يَخْلُقُ", english: "He creates" },
      { arabic: "يَذْكُرُ", english: "He remembers" },
      { arabic: "يَعْبُدُ", english: "He worships" }
    ]
  },
  {
    type: "match",
    question: "Match the present tense forms of يَنْصُرُ",
    pairs: [
      { arabic: "يَنْصُرُ", english: "He helps" },
      { arabic: "يَنْصُرُونَ", english: "They help" },
      { arabic: "تَنْصُرُ", english: "You help" },
      { arabic: "أَنْصُرُ", english: "I help" },
      { arabic: "نَنْصُرُ", english: "We help" }
    ]
  }
]
  },
  {
    id: 14,
    title: "Present Tense - يَضْرِبُ، يَسْمَعُ، يَعْلَمُ، يَعْمَلُ",
    arabicTitle: "فعل مضارع: يَضْرِبُ، يَسْمَعُ، يَعْلَمُ، يَعْمَلُ",
    topic: "Imperfect Tense - Pattern 3 & 4",
    quranCount: 39,
    theory: {
      intro: "Fourth major style of present/future tense verbs.",
      points: [
        "يَضْرِبُ = he hits (13 times)",
        "يَسْمَعُ = he listens (39 times)",
        "يَعْلَمُ = he knows (362 times)",
        "يَعْمَلُ = he does/works (166 times)",
        "مَاذَا = what (used to ask about actions)"
      ],
      conjugation: [
        { person: "He listens", arabic: "يَسْمَعُ" },
        { person: "They listen", arabic: "يَسْمَعُونَ" },
        { person: "You listen", arabic: "تَسْمَعُ" },
        { person: "I listen", arabic: "أَسْمَعُ" },
        { person: "You all listen", arabic: "تَسْمَعُونَ" },
        { person: "We listen", arabic: "نَسْمَعُ" },
      ]
    },
    examples: [
      { arabic: "يَسْمَعُ الْقُرْآنَ", english: "He listens to the Qur'an." },
      { arabic: "اللَّهُ يَعْلَمُ مَا تَعْمَلُونَ", english: "Allah knows what you all do." },
      { arabic: "مَاذَا يَسْمَعُ؟", english: "What does he listen to?" },
    ],
exercises: [
  // BASIC MEANINGS - Present tense verbs (4 questions)
  {
    type: "mcq",
    question: "What does يَضْرِبُ mean?",
    options: ["He listens", "He hits/strikes", "He knows", "He works"],
    answer: "He hits/strikes"
  },
  {
    type: "mcq",
    question: "What does يَسْمَعُ mean?",
    options: ["He hits", "He listens/hears", "He knows", "He works"],
    answer: "He listens/hears"
  },
  {
    type: "mcq",
    question: "What does يَعْلَمُ mean?",
    options: ["He hits", "He listens", "He knows", "He works"],
    answer: "He knows"
  },
  {
    type: "mcq",
    question: "What does يَعْمَلُ mean?",
    options: ["He hits", "He listens", "He knows", "He does/works"],
    answer: "He does/works"
  },

  // يَضْرِبُ CONJUGATION (He hits pattern) - 3 questions
  {
    type: "mcq",
    question: "What is 'He hits' in Arabic?",
    options: ["يَضْرِبُ", "يَضْرِبُونَ", "تَضْرِبُ", "أَضْرِبُ"],
    answer: "يَضْرِبُ"
  },
  {
    type: "mcq",
    question: "What is 'They hit' in Arabic?",
    options: ["يَضْرِبُ", "يَضْرِبُونَ", "تَضْرِبُ", "نَضْرِبُ"],
    answer: "يَضْرِبُونَ"
  },
  {
    type: "mcq",
    question: "How do you say 'I hit' in Arabic?",
    options: ["يَضْرِبُ", "تَضْرِبُ", "أَضْرِبُ", "نَضْرِبُ"],
    answer: "أَضْرِبُ"
  },

  // يَسْمَعُ CONJUGATION (He listens pattern) - 4 questions
  {
    type: "mcq",
    question: "What is 'He listens' in Arabic?",
    options: ["يَضْرِبُ", "يَسْمَعُ", "يَعْلَمُ", "يَعْمَلُ"],
    answer: "يَسْمَعُ"
  },
  {
    type: "mcq",
    question: "What is 'They listen' in Arabic?",
    options: ["يَسْمَعُ", "يَسْمَعُونَ", "تَسْمَعُ", "نَسْمَعُ"],
    answer: "يَسْمَعُونَ"
  },
  {
    type: "mcq",
    question: "How do you say 'You listen' (singular)?",
    options: ["يَسْمَعُ", "يَسْمَعُونَ", "تَسْمَعُ", "أَسْمَعُ"],
    answer: "تَسْمَعُ"
  },
  {
    type: "mcq",
    question: "What is 'We listen' in Arabic?",
    options: ["يَسْمَعُونَ", "تَسْمَعُونَ", "أَسْمَعُ", "نَسْمَعُ"],
    answer: "نَسْمَعُ"
  },

  // يَعْلَمُ CONJUGATION (He knows pattern) - 3 questions
  {
    type: "mcq",
    question: "What is 'He knows' in Arabic?",
    options: ["يَضْرِبُ", "يَسْمَعُ", "يَعْلَمُ", "يَعْمَلُ"],
    answer: "يَعْلَمُ"
  },
  {
    type: "mcq",
    question: "What is 'They know' in Arabic?",
    options: ["يَعْلَمُ", "يَعْلَمُونَ", "تَعْلَمُ", "نَعْلَمُ"],
    answer: "يَعْلَمُونَ"
  },
  {
    type: "mcq",
    question: "How do you say 'We know' in Arabic?",
    options: ["يَعْلَمُونَ", "تَعْلَمُونَ", "أَعْلَمُ", "نَعْلَمُ"],
    answer: "نَعْلَمُ"
  },

  // يَعْمَلُ CONJUGATION (He works pattern) - 3 questions
  {
    type: "mcq",
    question: "What is 'He works' in Arabic?",
    options: ["يَضْرِبُ", "يَسْمَعُ", "يَعْلَمُ", "يَعْمَلُ"],
    answer: "يَعْمَلُ"
  },
  {
    type: "mcq",
    question: "What is 'They work' in Arabic?",
    options: ["يَعْمَلُ", "يَعْمَلُونَ", "تَعْمَلُ", "نَعْمَلُ"],
    answer: "يَعْمَلُونَ"
  },
  {
    type: "mcq",
    question: "How do you say 'You all work' in Arabic?",
    options: ["يَعْمَلُ", "يَعْمَلُونَ", "تَعْمَلُ", "تَعْمَلُونَ"],
    answer: "تَعْمَلُونَ"
  },

  // QUESTION WORD مَاذَا (1 question)
  {
    type: "mcq",
    question: "What does مَاذَا mean?",
    options: ["Who", "Where", "What", "When"],
    answer: "What"
  },

  // MATCHING (2 questions)
  {
    type: "match",
    question: "Match the present tense verb with its meaning",
    pairs: [
      { arabic: "يَضْرِبُ", english: "He hits" },
      { arabic: "يَسْمَعُ", english: "He listens" },
      { arabic: "يَعْلَمُ", english: "He knows" },
      { arabic: "يَعْمَلُ", english: "He works" }
    ]
  },
  {
    type: "match",
    question: "Match the present tense forms of يَسْمَعُ",
    pairs: [
      { arabic: "يَسْمَعُ", english: "He listens" },
      { arabic: "يَسْمَعُونَ", english: "They listen" },
      { arabic: "تَسْمَعُ", english: "You listen" },
      { arabic: "أَسْمَعُ", english: "I listen" },
      { arabic: "نَسْمَعُ", english: "We listen" }
    ]
  }
]
  },
  {
    id: 15,
    title: "Imperative & Prohibitive - إِفْعَلْ، إِفْتَحْ، إِجْعَلْ",
    arabicTitle: "فعل أمر ونهي: إِفْعَلْ، إِفْتَحْ، إِجْعَلْ",
    topic: "Command (امر) and Prohibition (نهي)",
    theory: {
      intro: "فعل أمر = Do! | فعل نهي = Don't do! (lā + present tense)",
      points: [
        "إِفْعَلْ = Do! (singular) | إِفْعَلُوا = Do! (plural)",
        "لَا تَفْعَلْ = Don't do! (singular) | لَا تَفْعَلُوا = Don't do! (plural)",
        "سَوْفَ = will (soon in future) | سَ = will (very soon)",
        "لَنْ = never"
      ],
      imperativeTable: [
        { command: "Do!", arabic: "إِفْعَلْ" },
        { command: "Do! (all)", arabic: "إِفْعَلُوا" },
        { command: "Don't do!", arabic: "لَا تَفْعَلْ" },
        { command: "Don't do! (all)", arabic: "لَا تَفْعَلُوا" },
        { command: "Open!", arabic: "إِفْتَحْ" },
        { command: "Open! (all)", arabic: "إِفْتَحُوا" },
        { command: "Don't open!", arabic: "لَا تَفْتَحْ" },
        { command: "Make!", arabic: "إِجْعَلْ" },
        { command: "Make! (all)", arabic: "إِجْعَلُوا" },
        { command: "Don't make!", arabic: "لَا تَجْعَلْ" },
      ]
    },
    examples: [
      { arabic: "إِفْتَحْ!", english: "Open!" },
      { arabic: "لَا تَجْعَلُوا!", english: "Don't make! (all)" },
      { arabic: "إِفْعَلُوا خَيْرًا!", english: "Do good! (all)" },
    ],
exercises: [
  // BASIC MEANINGS - Command/Prohibition (3 questions)
  {
    type: "mcq",
    question: "What does إِفْعَلْ mean?",
    options: ["Don't do!", "Do! (singular)", "Open!", "Make!"],
    answer: "Do! (singular)"
  },
  {
    type: "mcq",
    question: "What does لَا تَفْعَلْ mean?",
    options: ["Do!", "Don't do! (singular)", "Open!", "Don't open!"],
    answer: "Don't do! (singular)"
  },
  {
    type: "mcq",
    question: "What is the difference between command (أمر) and prohibition (نهي)?",
    options: [
      "Command uses لا, Prohibition uses إفعل",
      "Command is positive (Do!), Prohibition is negative (Don't do!)",
      "Both mean the same",
      "Command is for past, Prohibition is for future"
    ],
    answer: "Command is positive (Do!), Prohibition is negative (Don't do!)"
  },

  // COMMANDS - إِفْعَلْ pattern (Do!) - 4 questions
  {
    type: "mcq",
    question: "How do you say 'Do!' (singular) in Arabic?",
    options: ["إِفْعَلْ", "إِفْعَلُوا", "لَا تَفْعَلْ", "لَا تَفْعَلُوا"],
    answer: "إِفْعَلْ"
  },
  {
    type: "mcq",
    question: "How do you say 'Do!' (plural) in Arabic?",
    options: ["إِفْعَلْ", "إِفْعَلُوا", "لَا تَفْعَلْ", "لَا تَفْعَلُوا"],
    answer: "إِفْعَلُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'Don't do!' (singular) in Arabic?",
    options: ["إِفْعَلْ", "إِفْعَلُوا", "لَا تَفْعَلْ", "لَا تَفْعَلُوا"],
    answer: "لَا تَفْعَلْ"
  },
  {
    type: "mcq",
    question: "How do you say 'Don't do!' (plural) in Arabic?",
    options: ["إِفْعَلْ", "إِفْعَلُوا", "لَا تَفْعَلْ", "لَا تَفْعَلُوا"],
    answer: "لَا تَفْعَلُوا"
  },

  // COMMANDS - إِفْتَحْ pattern (Open!) - 4 questions
  {
    type: "mcq",
    question: "How do you say 'Open!' (singular) in Arabic?",
    options: ["إِفْعَلْ", "إِفْتَحْ", "إِجْعَلْ", "لَا تَفْتَحْ"],
    answer: "إِفْتَحْ"
  },
  {
    type: "mcq",
    question: "How do you say 'Open!' (plural) in Arabic?",
    options: ["إِفْتَحْ", "إِفْتَحُوا", "لَا تَفْتَحْ", "لَا تَفْتَحُوا"],
    answer: "إِفْتَحُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'Don't open!' (singular) in Arabic?",
    options: ["إِفْتَحْ", "إِفْتَحُوا", "لَا تَفْتَحْ", "لَا تَفْتَحُوا"],
    answer: "لَا تَفْتَحْ"
  },
  {
    type: "mcq",
    question: "How do you say 'Don't open!' (plural) in Arabic?",
    options: ["إِفْتَحْ", "إِفْتَحُوا", "لَا تَفْتَحْ", "لَا تَفْتَحُوا"],
    answer: "لَا تَفْتَحُوا"
  },

  // COMMANDS - إِجْعَلْ pattern (Make!) - 3 questions
  {
    type: "mcq",
    question: "How do you say 'Make!' (singular) in Arabic?",
    options: ["إِفْعَلْ", "إِفْتَحْ", "إِجْعَلْ", "لَا تَجْعَلْ"],
    answer: "إِجْعَلْ"
  },
  {
    type: "mcq",
    question: "How do you say 'Make!' (plural) in Arabic?",
    options: ["إِجْعَلْ", "إِجْعَلُوا", "لَا تَجْعَلْ", "لَا تَجْعَلُوا"],
    answer: "إِجْعَلُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'Don't make!' (plural) in Arabic?",
    options: ["إِجْعَلْ", "إِجْعَلُوا", "لَا تَجْعَلْ", "لَا تَجْعَلُوا"],
    answer: "لَا تَجْعَلُوا"
  },

  // FUTURE PARTICLES (2 questions)
  {
    type: "mcq",
    question: "What does سَوْفَ mean?",
    options: ["Never", "Will (soon/far future)", "Will (very soon)", "Already"],
    answer: "Will (soon/far future)"
  },
  {
    type: "mcq",
    question: "What does لَنْ mean?",
    options: ["Will", "Soon", "Never", "Already"],
    answer: "Never"
  },

  // JOINING - Command formation (2 questions)
  {
    type: "mcq",
    question: "إِفْعَلْ + وا = ?",
    options: ["إِفْعَلْ", "إِفْعَلُوا", "لَا تَفْعَلْ", "لَا تَفْعَلُوا"],
    answer: "إِفْعَلُوا"
  },
  {
    type: "mcq",
    question: "لَا + تَفْعَلُوا = ?",
    options: ["إِفْعَلُوا", "لَا تَفْعَلْ", "لَا تَفْعَلُوا", "إِفْعَلْ"],
    answer: "لَا تَفْعَلُوا"
  },

  // MATCHING (2 questions)
  {
    type: "match",
    question: "Match the command forms with their meanings",
    pairs: [
      { arabic: "إِفْعَلْ", english: "Do! (singular)" },
      { arabic: "إِفْعَلُوا", english: "Do! (plural)" },
      { arabic: "لَا تَفْعَلْ", english: "Don't do! (singular)" },
      { arabic: "لَا تَفْعَلُوا", english: "Don't do! (plural)" }
    ]
  },
  {
    type: "match",
    question: "Match the command forms of فتح",
    pairs: [
      { arabic: "إِفْتَحْ", english: "Open! (singular)" },
      { arabic: "إِفْتَحُوا", english: "Open! (plural)" },
      { arabic: "لَا تَفْتَحْ", english: "Don't open! (singular)" },
      { arabic: "لَا تَفْتَحُوا", english: "Don't open! (plural)" }
    ]
  }
]
  },
  {
    id: 16,
    title: "Imperative - أُنْصُرْ، أُذْكُرْ، أُعْبُدْ، أُخْلُقْ",
    arabicTitle: "فعل أمر ونهي: أُنْصُرْ، أُذْكُرْ، أُعْبُدْ، أُخْلُقْ",
    topic: "Command & Prohibition - Pattern 2",
    theory: {
      intro: "Commands from نَصَرَ style verbs.",
      points: [
        "أُنْصُرْ = Help! | أُنْصُرُوا = Help! (all) | لَا تَنْصُرْ = Don't help!",
        "أُذْكُرْ = Remember! | أُذْكُرُوا = Remember! (all)",
        "أُعْبُدْ = Worship! | أُعْبُدُوا = Worship! (all)",
        "أُخْلُقْ = Create! | لَا تَخْلُقُوا = Don't create! (all)"
      ],
      table: [
        { command: "Help!", arabic: "أُنْصُرْ" },
        { command: "Help! (all)", arabic: "أُنْصُرُوا" },
        { command: "Don't help!", arabic: "لَا تَنْصُرْ" },
        { command: "Remember!", arabic: "أُذْكُرْ" },
        { command: "Remember! (all)", arabic: "أُذْكُرُوا" },
        { command: "Worship!", arabic: "أُعْبُدْ" },
        { command: "Worship! (all)", arabic: "أُعْبُدُوا" },
        { command: "Don't worship!", arabic: "لَا تَعْبُدْ" },
        { command: "Create!", arabic: "أُخْلُقْ" },
        { command: "Don't create! (all)", arabic: "لَا تَخْلُقُوا" },
      ]
    },
    examples: [
      { arabic: "أُعْبُدِ اللَّهَ!", english: "Worship Allah!" },
      { arabic: "أُذْكُرُوا الرَّحْمَنَ!", english: "Remember Ar-Rahman! (all)" },
      { arabic: "أُنْصُرْ زَيْدًا!", english: "Help Zaid!" },
    ],
exercises: [
  // BASIC MEANINGS - Command verbs (4 questions)
  {
    type: "mcq",
    question: "What does أُنْصُرْ mean?",
    options: ["Remember!", "Help!", "Worship!", "Create!"],
    answer: "Help!"
  },
  {
    type: "mcq",
    question: "What does أُذْكُرْ mean?",
    options: ["Help!", "Remember!", "Worship!", "Create!"],
    answer: "Remember!"
  },
  {
    type: "mcq",
    question: "What does أُعْبُدْ mean?",
    options: ["Help!", "Remember!", "Worship!", "Create!"],
    answer: "Worship!"
  },
  {
    type: "mcq",
    question: "What does أُخْلُقْ mean?",
    options: ["Help!", "Remember!", "Worship!", "Create!"],
    answer: "Create!"
  },

  // أُنْصُرْ PATTERN (Help!) - 4 questions
  {
    type: "mcq",
    question: "How do you say 'Help!' (singular) in Arabic?",
    options: ["أُنْصُرْ", "أُنْصُرُوا", "لَا تَنْصُرْ", "لَا تَنْصُرُوا"],
    answer: "أُنْصُرْ"
  },
  {
    type: "mcq",
    question: "How do you say 'Help!' (plural) in Arabic?",
    options: ["أُنْصُرْ", "أُنْصُرُوا", "لَا تَنْصُرْ", "لَا تَنْصُرُوا"],
    answer: "أُنْصُرُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'Don't help!' (singular) in Arabic?",
    options: ["أُنْصُرْ", "أُنْصُرُوا", "لَا تَنْصُرْ", "لَا تَنْصُرُوا"],
    answer: "لَا تَنْصُرْ"
  },
  {
    type: "mcq",
    question: "How do you say 'Don't help!' (plural) in Arabic?",
    options: ["أُنْصُرْ", "أُنْصُرُوا", "لَا تَنْصُرْ", "لَا تَنْصُرُوا"],
    answer: "لَا تَنْصُرُوا"
  },

  // أُذْكُرْ PATTERN (Remember!) - 3 questions
  {
    type: "mcq",
    question: "How do you say 'Remember!' (singular) in Arabic?",
    options: ["أُنْصُرْ", "أُذْكُرْ", "أُعْبُدْ", "أُخْلُقْ"],
    answer: "أُذْكُرْ"
  },
  {
    type: "mcq",
    question: "How do you say 'Remember!' (plural) in Arabic?",
    options: ["أُذْكُرْ", "أُذْكُرُوا", "لَا تَذْكُرْ", "لَا تَذْكُرُوا"],
    answer: "أُذْكُرُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'Don't remember!' (singular) in Arabic?",
    options: ["أُذْكُرْ", "أُذْكُرُوا", "لَا تَذْكُرْ", "لَا تَذْكُرُوا"],
    answer: "لَا تَذْكُرْ"
  },

  // أُعْبُدْ PATTERN (Worship!) - 3 questions
  {
    type: "mcq",
    question: "How do you say 'Worship!' (singular) in Arabic?",
    options: ["أُنْصُرْ", "أُذْكُرْ", "أُعْبُدْ", "أُخْلُقْ"],
    answer: "أُعْبُدْ"
  },
  {
    type: "mcq",
    question: "How do you say 'Worship!' (plural) in Arabic?",
    options: ["أُعْبُدْ", "أُعْبُدُوا", "لَا تَعْبُدْ", "لَا تَعْبُدُوا"],
    answer: "أُعْبُدُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'Don't worship!' (plural) in Arabic?",
    options: ["أُعْبُدْ", "أُعْبُدُوا", "لَا تَعْبُدْ", "لَا تَعْبُدُوا"],
    answer: "لَا تَعْبُدُوا"
  },

  // أُخْلُقْ PATTERN (Create!) - 3 questions
  {
    type: "mcq",
    question: "How do you say 'Create!' (singular) in Arabic?",
    options: ["أُنْصُرْ", "أُذْكُرْ", "أُعْبُدْ", "أُخْلُقْ"],
    answer: "أُخْلُقْ"
  },
  {
    type: "mcq",
    question: "How do you say 'Create!' (plural) in Arabic?",
    options: ["أُخْلُقْ", "أُخْلُقُوا", "لَا تَخْلُقْ", "لَا تَخْلُقُوا"],
    answer: "أُخْلُقُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'Don't create!' (plural) in Arabic?",
    options: ["أُخْلُقْ", "أُخْلُقُوا", "لَا تَخْلُقْ", "لَا تَخْلُقُوا"],
    answer: "لَا تَخْلُقُوا"
  },

  // JOINING - Command formation (2 questions)
  {
    type: "mcq",
    question: "أُنْصُرْ + وا = ?",
    options: ["أُنْصُرْ", "أُنْصُرُوا", "لَا تَنْصُرْ", "لَا تَنْصُرُوا"],
    answer: "أُنْصُرُوا"
  },
  {
    type: "mcq",
    question: "لَا + تَعْبُدُوا = ?",
    options: ["أُعْبُدُوا", "لَا تَعْبُدْ", "لَا تَعْبُدُوا", "أُعْبُدْ"],
    answer: "لَا تَعْبُدُوا"
  },

  // MATCHING (1 question)
  {
    type: "match",
    question: "Match the command forms with their meanings",
    pairs: [
      { arabic: "أُنْصُرْ", english: "Help!" },
      { arabic: "أُذْكُرُوا", english: "Remember! (all)" },
      { arabic: "أُعْبُدْ", english: "Worship!" },
      { arabic: "أُخْلُقُوا", english: "Create! (all)" },
      { arabic: "لَا تَنْصُرْ", english: "Don't help!" },
      { arabic: "لَا تَعْبُدُوا", english: "Don't worship! (all)" }
    ]
  }
]
  },
  {
    id: 17,
    title: "Imperative - إِضْرِبْ، إِسْمَعْ، إِعْلَمْ، إِعْمَلْ",
    arabicTitle: "فعل أمر ونهي: إِضْرِبْ، إِسْمَعْ، إِعْلَمْ، إِعْمَلْ",
    topic: "Command & Prohibition - Pattern 3 & 4",
    theory: {
      intro: "Commands from ضَرَبَ / سَمِعَ style verbs.",
      points: [
        "إِضْرِبْ = Hit! | إِضْرِبُوا = Hit! (all) | لَا تَضْرِبْ = Don't hit!",
        "إِسْمَعْ = Listen! | إِسْمَعُوا = Listen! (all)",
        "إِعْلَمْ = Know! | إِعْلَمُوا = Know! (all)",
        "إِعْمَلْ = Do/Work! | إِعْمَلُوا = Do! (all)"
      ],
      table: [
        { command: "Hit!", arabic: "إِضْرِبْ" },
        { command: "Hit! (all)", arabic: "إِضْرِبُوا" },
        { command: "Don't hit!", arabic: "لَا تَضْرِبْ" },
        { command: "Listen!", arabic: "إِسْمَعْ" },
        { command: "Listen! (all)", arabic: "إِسْمَعُوا" },
        { command: "Don't listen!", arabic: "لَا تَسْمَعْ" },
        { command: "Know!", arabic: "إِعْلَمْ" },
        { command: "Know! (all)", arabic: "إِعْلَمُوا" },
        { command: "Do/Work!", arabic: "إِعْمَلْ" },
        { command: "Do! (all)", arabic: "إِعْمَلُوا" },
      ]
    },
    examples: [
      { arabic: "إِسْمَعُوا الْقُرْآنَ!", english: "Listen to the Qur'an! (all)" },
      { arabic: "وَاعْلَمُوا أَنَّ اللَّهَ رَحِيمٌ", english: "And know that Allah is Merciful." },
      { arabic: "لَا تَضْرِبُوا زَيْدًا!", english: "Don't hit Zaid! (all)" },
    ],
exercises: [
  // BASIC MEANINGS - Command verbs (4 questions)
  {
    type: "mcq",
    question: "What does إِضْرِبْ mean?",
    options: ["Listen!", "Hit!", "Know!", "Work!"],
    answer: "Hit!"
  },
  {
    type: "mcq",
    question: "What does إِسْمَعْ mean?",
    options: ["Hit!", "Listen!", "Know!", "Work!"],
    answer: "Listen!"
  },
  {
    type: "mcq",
    question: "What does إِعْلَمْ mean?",
    options: ["Hit!", "Listen!", "Know!", "Work!"],
    answer: "Know!"
  },
  {
    type: "mcq",
    question: "What does إِعْمَلْ mean?",
    options: ["Hit!", "Listen!", "Know!", "Do/Work!"],
    answer: "Do/Work!"
  },

  // إِضْرِبْ PATTERN (Hit!) - 4 questions
  {
    type: "mcq",
    question: "How do you say 'Hit!' (singular) in Arabic?",
    options: ["إِضْرِبْ", "إِضْرِبُوا", "لَا تَضْرِبْ", "لَا تَضْرِبُوا"],
    answer: "إِضْرِبْ"
  },
  {
    type: "mcq",
    question: "How do you say 'Hit!' (plural) in Arabic?",
    options: ["إِضْرِبْ", "إِضْرِبُوا", "لَا تَضْرِبْ", "لَا تَضْرِبُوا"],
    answer: "إِضْرِبُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'Don't hit!' (singular) in Arabic?",
    options: ["إِضْرِبْ", "إِضْرِبُوا", "لَا تَضْرِبْ", "لَا تَضْرِبُوا"],
    answer: "لَا تَضْرِبْ"
  },
  {
    type: "mcq",
    question: "How do you say 'Don't hit!' (plural) in Arabic?",
    options: ["إِضْرِبْ", "إِضْرِبُوا", "لَا تَضْرِبْ", "لَا تَضْرِبُوا"],
    answer: "لَا تَضْرِبُوا"
  },

  // إِسْمَعْ PATTERN (Listen!) - 4 questions
  {
    type: "mcq",
    question: "How do you say 'Listen!' (singular) in Arabic?",
    options: ["إِضْرِبْ", "إِسْمَعْ", "إِعْلَمْ", "إِعْمَلْ"],
    answer: "إِسْمَعْ"
  },
  {
    type: "mcq",
    question: "How do you say 'Listen!' (plural) in Arabic?",
    options: ["إِسْمَعْ", "إِسْمَعُوا", "لَا تَسْمَعْ", "لَا تَسْمَعُوا"],
    answer: "إِسْمَعُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'Don't listen!' (singular) in Arabic?",
    options: ["إِسْمَعْ", "إِسْمَعُوا", "لَا تَسْمَعْ", "لَا تَسْمَعُوا"],
    answer: "لَا تَسْمَعْ"
  },
  {
    type: "mcq",
    question: "How do you say 'Don't listen!' (plural) in Arabic?",
    options: ["إِسْمَعْ", "إِسْمَعُوا", "لَا تَسْمَعْ", "لَا تَسْمَعُوا"],
    answer: "لَا تَسْمَعُوا"
  },

  // إِعْلَمْ PATTERN (Know!) - 3 questions
  {
    type: "mcq",
    question: "How do you say 'Know!' (singular) in Arabic?",
    options: ["إِضْرِبْ", "إِسْمَعْ", "إِعْلَمْ", "إِعْمَلْ"],
    answer: "إِعْلَمْ"
  },
  {
    type: "mcq",
    question: "How do you say 'Know!' (plural) in Arabic?",
    options: ["إِعْلَمْ", "إِعْلَمُوا", "لَا تَعْلَمْ", "لَا تَعْلَمُوا"],
    answer: "إِعْلَمُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'Don't know!' (singular) in Arabic?",
    options: ["إِعْلَمْ", "إِعْلَمُوا", "لَا تَعْلَمْ", "لَا تَعْلَمُوا"],
    answer: "لَا تَعْلَمْ"
  },

  // إِعْمَلْ PATTERN (Work!) - 3 questions
  {
    type: "mcq",
    question: "How do you say 'Work!' (singular) in Arabic?",
    options: ["إِضْرِبْ", "إِسْمَعْ", "إِعْلَمْ", "إِعْمَلْ"],
    answer: "إِعْمَلْ"
  },
  {
    type: "mcq",
    question: "How do you say 'Work!' (plural) in Arabic?",
    options: ["إِعْمَلْ", "إِعْمَلُوا", "لَا تَعْمَلْ", "لَا تَعْمَلُوا"],
    answer: "إِعْمَلُوا"
  },
  {
    type: "mcq",
    question: "How do you say 'Don't work!' (plural) in Arabic?",
    options: ["إِعْمَلْ", "إِعْمَلُوا", "لَا تَعْمَلْ", "لَا تَعْمَلُوا"],
    answer: "لَا تَعْمَلُوا"
  },

  // JOINING - Command formation (1 question)
  {
    type: "mcq",
    question: "إِسْمَعْ + وا = ?",
    options: ["إِسْمَعْ", "إِسْمَعُوا", "لَا تَسْمَعْ", "لَا تَسْمَعُوا"],
    answer: "إِسْمَعُوا"
  },

  // MATCHING (1 question)
  {
    type: "match",
    question: "Match the command forms with their meanings",
    pairs: [
      { arabic: "إِضْرِبْ", english: "Hit!" },
      { arabic: "إِسْمَعُوا", english: "Listen! (all)" },
      { arabic: "إِعْلَمْ", english: "Know!" },
      { arabic: "إِعْمَلُوا", english: "Work! (all)" },
      { arabic: "لَا تَضْرِبْ", english: "Don't hit!" },
      { arabic: "لَا تَسْمَعُوا", english: "Don't listen! (all)" }
    ]
  }
]
  },
  {
    id: 18,
    title: "Active Participle, Passive Participle & Masdar",
    arabicTitle: "اسم فاعل، اسم مفعول، فعل",
    topic: "Doer, One Affected, Name of Action",
    theory: {
      intro: "From any verb, we can derive 3 important noun forms.",
      points: [
        "اسم فاعل (Doer/Active Participle): فَاعِل pattern — e.g. فَاتِح = opener",
        "اسم مفعول (Passive/One affected): مَفْعُول pattern — e.g. مَفْتُوح = the one that is opened",
        "فِعْل (Masdar/Name of action): the action itself — e.g. فَتْح = opening",
        "Plural of فَاعِل: فَاعِلُونَ or فَاعِلِينَ",
        "Plural of مَفْعُول: مَفْعُولُونَ or مَفْعُولِينَ"
      ],
      table: [
        { verb: "فَعَلَ (did)", faeil: "فَاعِل (doer)", mafool: "مَفْعُول (one affected)", masdar: "فِعْل (action)" },
        { verb: "فَتَحَ (opened)", faeil: "فَاتِح (opener)", mafool: "مَفْتُوح (one opened)", masdar: "فَتْح (opening)" },
        { verb: "نَصَرَ (helped)", faeil: "نَاصِر (helper)", mafool: "مَنْصُور (one helped)", masdar: "نَصْر (help)" },
        { verb: "ضَرَبَ (hit)", faeil: "ضَارِب (one who hits)", mafool: "مَضْرُوب (one who is hit)", masdar: "ضَرْب (hitting)" },
        { verb: "سَمِعَ (listened)", faeil: "سَامِع (listener)", mafool: "مَسْمُوع (one listened to)", masdar: "سَمْع (listening)" },
        { verb: "جَعَلَ (made)", faeil: "جَاعِل (maker)", mafool: "مَجْعُول (one made)", masdar: "جَعْل (making)" },
      ]
    },
    examples: [
      { arabic: "أَنَا فَاعِلٌ", english: "I am a doer." },
      { arabic: "اَلْمَسْجِدُ مَفْتُوحٌ", english: "The masjid is opened." },
      { arabic: "اَلْمُسْلِمُونَ مَنْصُورُونَ", english: "The Muslims are helped." },
    ],
exercises: [
  // BASIC CONCEPTS - Three noun forms (3 questions)
  {
    type: "mcq",
    question: "What is اسم فاعل (Active Participle)?",
    options: [
      "The doer of the action (e.g., opener)",
      "The one affected by the action (e.g., opened)",
      "The action itself (e.g., opening)",
      "The past tense verb"
    ],
    answer: "The doer of the action (e.g., opener)"
  },
  {
    type: "mcq",
    question: "What is اسم مفعول (Passive Participle)?",
    options: [
      "The doer of the action",
      "The one affected by the action",
      "The action itself",
      "The present tense verb"
    ],
    answer: "The one affected by the action"
  },
  {
    type: "mcq",
    question: "What is Masdar (مصدر)?",
    options: [
      "The doer of the action",
      "The one affected by the action",
      "The action/name of the action",
      "The command form"
    ],
    answer: "The action/name of the action"
  },

  // PATTERN RECOGNITION - فَاعِل pattern (Doer) - 4 questions
  {
    type: "mcq",
    question: "What is the اسم فاعل (doer) of فَعَلَ?",
    options: ["فَاعِل", "مَفْعُول", "فِعْل", "يَفْعَلُ"],
    answer: "فَاعِل"
  },
  {
    type: "mcq",
    question: "What is the اسم فاعل (doer) of فَتَحَ?",
    options: ["مَفْتُوح", "فَتْح", "فَاتِح", "يَفْتَحُ"],
    answer: "فَاتِح"
  },
  {
    type: "mcq",
    question: "What is the اسم فاعل (doer) of نَصَرَ?",
    options: ["مَنْصُور", "نَصْر", "نَاصِر", "يَنْصُرُ"],
    answer: "نَاصِر"
  },
  {
    type: "mcq",
    question: "What is the اسم فاعل (doer) of ضَرَبَ?",
    options: ["مَضْرُوب", "ضَرْب", "ضَارِب", "يَضْرِبُ"],
    answer: "ضَارِب"
  },

  // PATTERN RECOGNITION - مَفْعُول pattern (One affected) - 4 questions
  {
    type: "mcq",
    question: "What is the اسم مفعول (one affected) of فَعَلَ?",
    options: ["فَاعِل", "مَفْعُول", "فِعْل", "يَفْعَلُ"],
    answer: "مَفْعُول"
  },
  {
    type: "mcq",
    question: "What is the اسم مفعول (one affected) of فَتَحَ?",
    options: ["فَاتِح", "فَتْح", "مَفْتُوح", "يَفْتَحُ"],
    answer: "مَفْتُوح"
  },
  {
    type: "mcq",
    question: "What is the اسم مفعول (one affected) of نَصَرَ?",
    options: ["نَاصِر", "نَصْر", "مَنْصُور", "يَنْصُرُ"],
    answer: "مَنْصُور"
  },
  {
    type: "mcq",
    question: "What is the اسم مفعول (one affected) of سَمِعَ?",
    options: ["سَامِع", "سَمْع", "مَسْمُوع", "يَسْمَعُ"],
    answer: "مَسْمُوع"
  },

  // PATTERN RECOGNITION - Masdar (Action name) - 4 questions
  {
    type: "mcq",
    question: "What is the Masdar (action name) of فَعَلَ?",
    options: ["فَاعِل", "مَفْعُول", "فِعْل", "يَفْعَلُ"],
    answer: "فِعْل"
  },
  {
    type: "mcq",
    question: "What is the Masdar of فَتَحَ?",
    options: ["فَاتِح", "مَفْتُوح", "فَتْح", "يَفْتَحُ"],
    answer: "فَتْح"
  },
  {
    type: "mcq",
    question: "What is the Masdar of نَصَرَ?",
    options: ["نَاصِر", "مَنْصُور", "نَصْر", "يَنْصُرُ"],
    answer: "نَصْر"
  },
  {
    type: "mcq",
    question: "What is the Masdar of ضَرَبَ?",
    options: ["ضَارِب", "مَضْرُوب", "ضَرْب", "يَضْرِبُ"],
    answer: "ضَرْب"
  },

  // MEANING QUESTIONS (3 questions)
  {
    type: "mcq",
    question: "What does فَاتِح mean?",
    options: ["Opened", "Opener", "Opening", "He opened"],
    answer: "Opener"
  },
  {
    type: "mcq",
    question: "What does مَفْتُوح mean?",
    options: ["Opener", "Opened/The one opened", "Opening", "He opens"],
    answer: "Opened/The one opened"
  },
  {
    type: "mcq",
    question: "What does فَتْح mean?",
    options: ["Opener", "The one opened", "Opening (the action)", "He opened"],
    answer: "Opening (the action)"
  },

  // MATCHING (2 questions)
  {
    type: "match",
    question: "Match the verb with its three derived forms",
    pairs: [
      { arabic: "فَتَحَ", english: "فَاتِح / مَفْتُوح / فَتْح" },
      { arabic: "نَصَرَ", english: "نَاصِر / مَنْصُور / نَصْر" },
      { arabic: "ضَرَبَ", english: "ضَارِب / مَضْرُوب / ضَرْب" },
      { arabic: "سَمِعَ", english: "سَامِع / مَسْمُوع / سَمْع" }
    ]
  },
  {
    type: "match",
    question: "Match the Arabic term with its English meaning",
    pairs: [
      { arabic: "فَاعِل", english: "Doer / Active Participle" },
      { arabic: "مَفْعُول", english: "One affected / Passive Participle" },
      { arabic: "مَصْدَر", english: "Action / Verbal Noun" }
    ]
  }
]
  },
  {
    id: 19,
    title: "Sarf-e-Sagheer (Short Conjugation Table)",
    arabicTitle: "صَرْف صَغِير",
    topic: "Summary of all verb forms",
    theory: {
      intro: "Sarf-e-Sagheer is the complete short table of all forms derived from a single verb root.",
      points: [
        "فَعَلَ = key for all فعل ماضٍ forms",
        "يَفْعَلُ = key for all فعل مضارع forms",
        "إِفْعَلْ = key for all أمر forms",
        "All 3 noun forms: فَاعِل (doer), مَفْعُول (one affected), فِعْل (action)",
        "This table summarizes lessons 9 to 18."
      ],
      summaryTable: [
        { form: "فَعَلَ", label: "Past (He did)", category: "ماضٍ" },
        { form: "يَفْعَلُ", label: "Present (He does)", category: "مضارع" },
        { form: "إِفْعَلْ", label: "Do! (Command)", category: "أمر" },
        { form: "لَا تَفْعَلْ", label: "Don't do! (Prohibition)", category: "نهي" },
        { form: "فَاعِل", label: "Doer", category: "اسم فاعل" },
        { form: "مَفْعُول", label: "One affected", category: "اسم مفعول" },
        { form: "فِعْل", label: "The action", category: "مصدر" },
      ],
      verbs: [
        { past: "فَعَلَ", present: "يَفْعَلُ", command: "إِفْعَلْ", faeil: "فَاعِل", mafool: "مَفْعُول", masdar: "فِعْل" },
        { past: "ضَرَبَ", present: "يَضْرِبُ", command: "إِضْرِبْ", faeil: "ضَارِب", mafool: "مَضْرُوب", masdar: "ضَرْب" },
        { past: "سَمِعَ", present: "يَسْمَعُ", command: "إِسْمَعْ", faeil: "سَامِع", mafool: "مَسْمُوع", masdar: "سَمْع" },
        { past: "خَلَقَ", present: "يَخْلُقُ", command: "أُخْلُقْ", faeil: "خَالِق", mafool: "مَخْلُوق", masdar: "خَلْق" },
        { past: "ذَكَرَ", present: "يَذْكُرُ", command: "أُذْكُرْ", faeil: "ذَاكِر", mafool: "مَذْكُور", masdar: "ذِكْر" },
      ]
    },
    examples: [
      { arabic: "خَالِق + مَخْلُوق + خَلْق", english: "Creator + Created + Creation" },
      { arabic: "سَامِع + مَسْمُوع + سَمْع", english: "Listener + Listened-to + Listening" },
    ],
exercises: [
  // BASIC CATEGORIES - Identifying verb forms (4 questions)
  {
    type: "mcq",
    question: "Which category does فَعَلَ belong to?",
    options: ["فعل مضارع (Present)", "فعل ماضٍ (Past)", "فعل أمر (Command)", "اسم فاعل (Doer)"],
    answer: "فعل ماضٍ (Past)"
  },
  {
    type: "mcq",
    question: "Which category does يَفْعَلُ belong to?",
    options: ["فعل ماضٍ (Past)", "فعل مضارع (Present)", "فعل أمر (Command)", "اسم مفعول (Passive)"],
    answer: "فعل مضارع (Present)"
  },
  {
    type: "mcq",
    question: "Which category does إِفْعَلْ belong to?",
    options: ["فعل ماضٍ (Past)", "فعل مضارع (Present)", "فعل أمر (Command)", "مصدر (Action)"],
    answer: "فعل أمر (Command)"
  },
  {
    type: "mcq",
    question: "Which category does لَا تَفْعَلْ belong to?",
    options: ["Command (أمر)", "Prohibition (نهي)", "Present (مضارع)", "Past (ماضٍ)"],
    answer: "Prohibition (نهي)"
  },

  // THREE NOUN FORMS (3 questions)
  {
    type: "mcq",
    question: "Which form means 'Doer' (Active Participle)?",
    options: ["فَاعِل", "مَفْعُول", "فِعْل", "يَفْعَلُ"],
    answer: "فَاعِل"
  },
  {
    type: "mcq",
    question: "Which form means 'One affected' (Passive Participle)?",
    options: ["فَاعِل", "مَفْعُول", "فِعْل", "إِفْعَلْ"],
    answer: "مَفْعُول"
  },
  {
    type: "mcq",
    question: "Which form means 'The action' (Masdar)?",
    options: ["فَاعِل", "مَفْعُول", "فِعْل", "تَفْعَلُ"],
    answer: "فِعْل"
  },

  // VERB CONJUGATION TABLE - Identifying forms (5 questions)
  {
    type: "mcq",
    question: "What is the past tense (فعل ماضٍ) of ضَرَبَ pattern?",
    options: ["يَضْرِبُ", "إِضْرِبْ", "ضَرَبَ", "ضَارِب"],
    answer: "ضَرَبَ"
  },
  {
    type: "mcq",
    question: "What is the present tense (فعل مضارع) of سَمِعَ?",
    options: ["سَمِعَ", "يَسْمَعُ", "إِسْمَعْ", "سَامِع"],
    answer: "يَسْمَعُ"
  },
  {
    type: "mcq",
    question: "What is the command (فعل أمر) of فَعَلَ?",
    options: ["فَعَلَ", "يَفْعَلُ", "إِفْعَلْ", "فَاعِل"],
    answer: "إِفْعَلْ"
  },
  {
    type: "mcq",
    question: "What is the active participle (اسم فاعل) of خَلَقَ?",
    options: ["خَلَقَ", "يَخْلُقُ", "خَالِق", "مَخْلُوق"],
    answer: "خَالِق"
  },
  {
    type: "mcq",
    question: "What is the passive participle (اسم مفعول) of ذَكَرَ?",
    options: ["ذَكَرَ", "يَذْكُرُ", "ذَاكِر", "مَذْكُور"],
    answer: "مَذْكُور"
  },

  // MEANING QUESTIONS (4 questions)
  {
    type: "mcq",
    question: "What does مَخْلُوق mean?",
    options: ["Creator", "One who is created", "Creation (action)", "He created"],
    answer: "One who is created"
  },
  {
    type: "mcq",
    question: "What does خَالِق mean?",
    options: ["Creator", "One who is created", "Creation (action)", "He created"],
    answer: "Creator"
  },
  {
    type: "mcq",
    question: "What does خَلْق mean?",
    options: ["Creator", "One who is created", "Creation (the action)", "He created"],
    answer: "Creation (the action)"
  },
  {
    type: "mcq",
    question: "What is the Masdar (action name) of ضَرَبَ?",
    options: ["ضَارِب", "مَضْرُوب", "ضَرْب", "يَضْرِبُ"],
    answer: "ضَرْب"
  },

  // MATCHING (4 questions)
  {
    type: "match",
    question: "Match the form with its category",
    pairs: [
      { arabic: "فَعَلَ", english: "Past (ماضٍ)" },
      { arabic: "يَفْعَلُ", english: "Present (مضارع)" },
      { arabic: "إِفْعَلْ", english: "Command (أمر)" },
      { arabic: "لَا تَفْعَلْ", english: "Prohibition (نهي)" }
    ]
  },
  {
    type: "match",
    question: "Match the Arabic term with its meaning",
    pairs: [
      { arabic: "فَاعِل", english: "Doer" },
      { arabic: "مَفْعُول", english: "One affected" },
      { arabic: "مَصْدَر", english: "Action name" }
    ]
  },
  {
    type: "match",
    question: "Match the verb with its complete conjugation set",
    pairs: [
      { arabic: "فَعَلَ", english: "يَفْعَلُ / إِفْعَلْ / فَاعِل / مَفْعُول / فِعْل" },
      { arabic: "نَصَرَ", english: "يَنْصُرُ / أُنْصُرْ / نَاصِر / مَنْصُور / نَصْر" },
      { arabic: "ضَرَبَ", english: "يَضْرِبُ / إِضْرِبْ / ضَارِب / مَضْرُوب / ضَرْب" }
    ]
  },
  {
    type: "match",
    question: "Match the form to its example from خَلَقَ",
    pairs: [
      { arabic: "Past (He created)", english: "خَلَقَ" },
      { arabic: "Present (He creates)", english: "يَخْلُقُ" },
      { arabic: "Command (Create!)", english: "أُخْلُقْ" },
      { arabic: "Doer (Creator)", english: "خَالِق" },
      { arabic: "One affected (Created)", english: "مَخْلُوق" },
      { arabic: "Action (Creation)", english: "خَلْق" }
    ]
  }
]
  }
];
