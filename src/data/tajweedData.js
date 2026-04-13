// Tajweed Book Data - Information Only (No exercises)
// Based on "Learn Tajweed The Easy Way" - Dr. Abdulazeez Abdulraheem

export const tajweedLessons = [
  {
    id: "1a",
    title: "Introduction to Tajweed",
    category: "intro",
    content: {
      definition: "To recite the Quran as per the Makharij & Sifaat of letters and the rules of recitation.",
      importance: "These rules occur on every page and in every line of the Qur'an. Therefore, it is necessary to learn Tajweed.",
      hadith: {
        arabic: "مَنْ لَمْ يَتَغَنَّ بِالْقُرْآنِ فَلَيْسَ مِنَّا",
        english: "He who does not recite the Qur'an in a pleasant tone is not of us.",
        source: "Abu Dawud"
      },
      threeComponents: [
        { arabic: "مَخَارِج", english: "Makharij", desc: "Articulation points — where each sound comes from" },
        { arabic: "صِفَات", english: "Sifaat", desc: "Characteristics — quality/nature of each letter" },
        { arabic: "قَوَاعِد", english: "Qawaid", desc: "Rules — the recitation rules (Noon, Meem, Madd etc.)" }
      ],
      whyMistakes: [
        "Improper learning",
        "Mother tongue effects carried into Arabic",
        "No exposure to Tajweed"
      ]
    }
  },
  // Lesson 2a - Letters: م، ب
{
  id: "2a",
  title: "Letters: م، ب",
  category: "makharij",
  letters: [
    {
      letter: "م",
      name: "Meem",
      makhraj: "Join the OUTER parts of the lips",
      tip: "Both lips come together on the outside",
      image: "meem.png"  // ← ADDED
    },
    {
      letter: "ب",
      name: "Ba",
      makhraj: "Join the INNER parts of the lips",
      tip: "Both lips press together from inside",
      image: "baa.png"  // ← ADDED
    }
  ]
},

// Lesson 3a - Letters: و، ف
{
  id: "3a",
  title: "Letters: و، ف",
  category: "makharij",
  letters: [
    {
      letter: "و",
      name: "Waw",
      makhraj: "Form a circle of the lips, then separate them to produce sound",
      commonMistake: "Don't say it as 'va'!",
      image: "waw.png"  // ← ADDED
    },
    {
      letter: "ف",
      name: "Fa",
      makhraj: "Touch the LOWER lip to the EDGE of the upper teeth",
      commonMistake: "Don't say it as 'va'!",
      image: "faa.png"  // ← ADDED
    }
  ]
},

// Lesson 4a - Letter: ث
{
  id: "4a",
  title: "Letter: ث",
  category: "makharij",
  letters: [
    {
      letter: "ث",
      name: "Tha",
      makhraj: "Touch the TIP of the tongue to the EDGE of the upper teeth — blow with a LIGHT sound",
      commonMistakes: ["Don't say it as 'za'!", "Don't take out more than the tip"],
      image: "thaa.png"  // ← ADDED
    }
  ]
},

// Lesson 5a - Letter: ذ
{
  id: "5a",
  title: "Letter: ذ",
  category: "makharij",
  letters: [
    {
      letter: "ذ",
      name: "Dhal",
      makhraj: "Touch the TIP of the tongue to the EDGE of the upper teeth — blow with a STRONG sound",
      commonMistakes: ["Don't say it as 'za'!", "Don't take out more than the tip"],
      image: "thaal.png"  // ← ADDED
    }
  ]
},

// Lesson 6a - Letter: ظ
{
  id: "6a",
  title: "Letter: ظ",
  category: "makharij",
  letters: [
    {
      letter: "ظ",
      name: "Dha",
      makhraj: "Touch the TIP of the tongue to the EDGE of upper teeth — blow with a VERY THICK & HIGH sound. Say ذ with 'awe'!",
      commonMistakes: ["Don't say it as 'Zaw' or 'Zoy'!", "Don't take out more than the tip"],
      image: "zaa_heavy.png"  // ← ADDED
    }
  ]
},

// Lesson 7a - Letters: ت، د، ط
{
  id: "7a",
  title: "Letters: ت، د، ط",
  category: "makharij",
  letters: [
    {
      letter: "ت",
      name: "Ta",
      makhraj: "Touch the TIP of the tongue to the ROOTS of the upper teeth",
      image: "taa.png"  // ← ADDED
    },
    {
      letter: "د",
      name: "Dal",
      makhraj: "Touch the TIP of the tongue to the ROOTS of the upper teeth",
      image: "daal.png"  // ← ADDED
    },
    {
      letter: "ط",
      name: "Tua",
      makhraj: "Thicken the tongue and touch it to the upper gum. Say ت with 'awe'!",
      commonMistakes: ["Don't say 'twa' or 'taa'", "Don't make your lips round for ط"],
      image: "taa_heavy.png"  // ← ADDED
    }
  ]
},

// Lesson 8a - Letters: ز، س، ص
{
  id: "8a",
  title: "Letters: ز، س، ص",
  category: "makharij",
  letters: [
    {
      letter: "ز",
      name: "Zay",
      makhraj: "Touch the tongue to the EDGE of lower teeth — blow with a STRONG sound",
      image: "zaa.png"  // ← ADDED
    },
    {
      letter: "س",
      name: "Seen",
      makhraj: "Touch the tongue to the EDGE of lower teeth — blow with a SOFT sound",
      image: "seen.png"  // ← ADDED
    },
    {
      letter: "ص",
      name: "Suad",
      makhraj: "THICKEN the tongue, touch to the edge of lower teeth — blow with a THICK & HIGH sound",
      commonMistakes: ["Don't say 'sa' or 'swa'", "Don't make your lips round for ص"],
      image: "saad.png"  // ← ADDED
    }
  ]
},

// Lesson 9a - Letters: ل، ن، ر
{
  id: "9a",
  title: "Letters: ل، ن، ر",
  category: "makharij",
  letters: [
    {
      letter: "ل",
      name: "Lam",
      makhraj: "Touch the TIP of the tongue to the upper gums NEAR the roots of the teeth",
      image: "laam.png"  // ← ADDED
    },
    {
      letter: "ن",
      name: "Noon",
      makhraj: "Touch the TIP of the tongue to the upper gums A LITTLE ABOVE the roots",
      image: "noon.png"  // ← ADDED
    },
    {
      letter: "ر",
      name: "Ra",
      makhraj: "Touch the TIP of the tongue to the upper gums ABOVE the roots. Arabic Ra is between Mexican and English R.",
      commonMistakes: ["Don't say ر as 'ra' (low). It is like 'raw' but without making lips round."],
      image: "raa.png"  // ← ADDED
    }
  ]
},

// Lesson 10a - Letters: ج، ش، ي
{
  id: "10a",
  title: "Letters: ج، ش، ي",
  category: "makharij",
  letters: [
    {
      letter: "ج",
      name: "Jeem",
      makhraj: "Touch the MIDDLE (not the edge) of the tongue to the palate or roof of the mouth",
      image: "jeem.png"  // ← ADDED
    },
    {
      letter: "ش",
      name: "Sheen",
      makhraj: "The MIDDLE of the tongue is close to touching the palate",
      image: "sheen.png"  // ← ADDED
    },
    {
      letter: "ي",
      name: "Ya",
      makhraj: "The MIDDLE of the tongue is close to touching the palate",
      commonMistake: "Don't lose the letter especially in يِ",
      image: "yaa.png"  // ← ADDED
    }
  ]
},

// Lesson 11a - Letter: ض
{
  id: "11a",
  title: "Letter: ض",
  category: "makharij",
  letters: [
    {
      letter: "ض",
      name: "Duad",
      makhraj: "Touch the EDGE of the tongue to the roots of the molars, either to the right or left",
      commonMistake: "Don't say ز، ذ، ظ، ضا",
      image: "daad.png"  // ← ADDED
    }
  ]
},

// Lesson 12a - Letters: ك، ق
{
  id: "12a",
  title: "Letters: ك، ق",
  category: "makharij",
  letters: [
    {
      letter: "ك",
      name: "Kaf",
      makhraj: "Touch the INNER part of the tongue to the roof of the mouth right at the BACK",
      image: "kaaf.png"  // ← ADDED
    },
    {
      letter: "ق",
      name: "Qaf",
      makhraj: "Touch the inner part of tongue to the roof of the mouth right at the BACK — A LITTLE INSIDE (behind the uvula)",
      commonMistakes: ["Don't say ك or خ", "Don't say it with a low sound"],
      image: "qaaf.png"  // ← ADDED
    }
  ]
},

// Lesson 13a - Letters: ء، هـ
{
  id: "13a",
  title: "Letters: ء، هـ",
  category: "makharij",
  letters: [
    {
      letter: "ء",
      name: "Hamzah",
      makhraj: "From the LOWER part of the throat",
      commonMistakes: ["Don't say without a jerk", "It is NOT same as 'a' in English"],
      image: "hamza.png"  // ← ADDED
    },
    {
      letter: "هـ",
      name: "Ha",
      makhraj: "From the LOWER part of the throat",
      commonMistake: "Don't say without a jerk (especially during recitation)",
      image: "haa.png"  // ← ADDED
    }
  ]
},

// Lesson 14a - Letter: ع
{
  id: "14a",
  title: "Letter: ع",
  category: "makharij",
  letters: [
    {
      letter: "ع",
      name: "Ain",
      makhraj: "From the MIDDLE part of the throat",
      commonMistakes: [
        "Don't say ع as ء",
        "Anything too much becomes bad",
        "If you say ح and ع properly, they appear normal",
        "For practice you can exaggerate — but NOT during recitation"
      ],
      image: "ain.png"  // ← ADDED
    }
  ]
},

// Lesson 15a - Letter: ح
{
  id: "15a",
  title: "Letter: ح",
  category: "makharij",
  letters: [
    {
      letter: "ح",
      name: "Ha (heavy)",
      makhraj: "From the MIDDLE of the throat — take a deep breath and release it from INSIDE the throat!",
      commonMistake: "Don't say ح as 'ha'!",
      image: "haa_heavy.png"  // ← ADDED
    }
  ]
},

// Lesson 16a - Letter: غ
{
  id: "16a",
  title: "Letter: غ",
  category: "makharij",
  letters: [
    {
      letter: "غ",
      name: "Ghain",
      makhraj: "From the UPPER part of the throat",
      commonMistake: "Don't recite it thin — it is a THICK and HIGH sounding letter",
      image: "ghain.png"  // ← ADDED
    }
  ]
},

// Lesson 17a - Letter: خ
{
  id: "17a",
  title: "Letter: خ",
  category: "makharij",
  letters: [
    {
      letter: "خ",
      name: "Kha",
      makhraj: "From the UPPER part of the throat",
      commonMistake: "Don't recite it thin — it is a THICK and HIGH sounding letter",
      image: "khaa.png"  // ← ADDED
    }
  ]
},
  {
    id: "18a",
    title: "Review: Makharij of All Letters",
    category: "review",
    content: {
      summary: "To recite the Quran nicely: take care of Makharij, Sifaat, and Rules of Recitation.",
      groups: [
        {
          label: "Throat letters (6)",
          letters: ["ء", "هـ", "ع", "ح", "غ", "خ"]
        },
        {
          label: "Tongue letters (18+)",
          letters: ["ق", "ك", "ج", "ش", "ي", "ض", "ل", "ن", "ر", "ط", "د", "ت", "ظ", "ذ", "ث", "ز", "س", "ص"]
        },
        {
          label: "Lip letters (4)",
          letters: ["م", "ب", "و", "ف"]
        }
      ],
      sifaat: {
        thin: "Remaining letters (default)",
        thick: "Thick letters: ل (in اللَّه after Fatha/Dhamma), ر (with Fatha/Dhamma)",
        thickHigh: "Thick & High: ق، غ، خ",
        veryThickHigh: "Very Thick & High: ص، ض، ط، ظ"
      }
    }
  },
  {
    id: "19a",
    title: "Words with Fathah (Thick vs Thin)",
    category: "sifaat",
    content: {
      rule: "Letters are either THICK or THIN in sound.",
      categories: [
        { label: "Thin (default)", desc: "All remaining letters produce a thin/light sound" },
        { label: "Thick (تَفْخِيم)", desc: "ل (only in word اللَّه after Fatha/Dhamma) and ر (with Fatha/Dhamma)" },
        { label: "Thick & High (اسْتِعْلَاء)", desc: "ق، غ، خ" },
        { label: "Very Thick & High (إِطْبَاق)", desc: "ص، ض، ط، ظ" }
      ]
    }
  },
  {
    id: "20a",
    title: "Alif Madd (مَدّ الْأَلِف)",
    category: "madd",
    content: {
      rule: "When Alif comes after a Fathah letter → stretch TWICE",
      symbol: "ـَا",
      examples: ["قَالَ", "كَانَ", "مَا"],
      note: "Thick/thin rule applies — e.g. قَا (thick), خَا (thick & high), صَا (very thick & high)"
    }
  },
  {
    id: "21a",
    title: "Words with Kasrah",
    category: "sifaat",
    content: {
      rule: "With Kasrah (Zair/ِ), thick letters still sound thick.",
      categories: [
        { label: "Thick & High with Kasrah", desc: "قِ، غِ، خِ" },
        { label: "Very Thick & High with Kasrah", desc: "صِ، ضِ، طِ، ظِ" },
        { label: "Thin with Kasrah", desc: "All remaining letters" }
      ]
    }
  },
  {
    id: "22a",
    title: "Yaa Madd (مَدّ الْيَاء)",
    category: "madd",
    content: {
      rule: "If a Kasrah letter is followed by Yaa-Saakinah (يْ) → stretch TWICE",
      symbol: "ـِيْ",
      examples: ["فِي", "الَّذِينَ", "قِيلَ"],
      note: "Thick/thin rule applies to the letter before Yaa Madd"
    }
  },
  {
    id: "23a",
    title: "Words with Dhammah",
    category: "sifaat",
    content: {
      rule: "With Dhammah (Pesh/ُ), thick letters still sound thick.",
      categories: [
        { label: "Thick & High with Dhammah", desc: "قُ، غُ، خُ" },
        { label: "Very Thick & High with Dhammah", desc: "صُ، ضُ، طُ، ظُ" },
        { label: "Thin with Dhammah", desc: "All remaining letters" }
      ]
    }
  },
  {
    id: "24a",
    title: "Waw Madd (مَدّ الْوَاو)",
    category: "madd",
    content: {
      rule: "If a Dhammah letter is followed by Waw-Saakinah (وْ) → stretch TWICE",
      symbol: "ـُوْ",
      examples: ["يَقُولُ", "نُوحٌ", "مُوسَى"],
      note: "Special care for ص، ض، ط، ظ and ع، خ، غ"
    }
  },
  {
    id: "25a",
    title: "Standing Fathah, Standing Kasrah, Inverted Dhammah",
    category: "madd",
    content: {
      rule: "Standing Fathah (ـٰ), Standing Kasrah (ـٖ), Inverted Dhammah (ـۗ) are like Alif Madd, Yaa Madd, Waaw Madd — stretch TWICE each.",
      types: [
        { symbol: "ـٰ", name: "Standing Fathah", like: "Alif Madd", examples: ["هَٰذَا", "ذَٰلِكَ", "الرَّحْمَٰن"] },
        { symbol: "ـٖ", name: "Standing Kasrah", like: "Yaa Madd", examples: ["بِسْمِ"] },
        { symbol: "ـۗ", name: "Inverted Dhammah", like: "Waaw Madd", examples: ["رَحْمَتُ اللَّهِ"] }
      ]
    }
  },
  {
    id: "26a",
    title: "Standing Fathah Special Case",
    category: "madd",
    content: {
      rule: "Sometimes ى is written but NOT pronounced. A Standing Fathah is placed on the letter BEFORE it.",
      instruction: "Don't pronounce ى if there is a Standing Fathah on the letter before it.",
      examples: ["هُدَى (read as هُدَ)", "عِيسَى (read as عِيسَ)"]
    }
  },
  {
    id: "27a",
    title: "Sukoon (سُكُون)",
    category: "sukoon",
    content: {
      rule: "A letter with Sukoon (ْ) is NOT read separately — it joins with the previous letter.",
      points: [
        "Called 'Sakinah' letters",
        "This lesson is divided into 6 parts: Soft Waw, Soft Yaa, Hamzah Saakinah, Qalqalah, Hams etc."
      ]
    }
  },
  {
    id: "28a",
    title: "Soft Waw (لَيِّن وَاو)",
    category: "sukoon",
    content: {
      rule: "If a Fathah letter is followed by Waw-Saakinah (وَْ) → pronounce softly & quickly",
      english_like: "Like 'ou' in 'mouth', 'south', 'house' — NOT like in 'how' or 'cow'",
      symbol: "ـَوْ",
      examples: ["خَوْف", "يَوْم", "قَوْم"]
    }
  },
  {
    id: "29a",
    title: "Soft Yaa (لَيِّن يَاء)",
    category: "sukoon",
    content: {
      rule: "If a Fathah letter is followed by Yaa-Saakinah (يَْ) → pronounce softly & quickly",
      english_like: "Like 'eye', 'fly', 'Dubai'",
      symbol: "ـَيْ",
      examples: ["خَيْر", "بَيْت", "عَيْن"]
    }
  },
  {
    id: "30a",
    title: "Hamzah Saakinah",
    category: "sukoon",
    content: {
      rule: "Hamzah with Sukoon — pronounce with a little jerk/stop.",
      note: "Alif with harakah = Hamzah. Baby Hamzah can sit on: أ or ؤ or ئ",
      examples: ["أَمْر", "يُؤْمِن", "شَيْئ"]
    }
  },
  {
    id: "31a",
    title: "Hams Letters (هَمْس)",
    category: "sukoon",
    content: {
      rule: "If there is Sukoon on ك or ت — the BREATH should NOT be stopped while pronouncing them.",
      why: "Hams is valid for other letters too, but these two cause most mistakes.",
      example: { arabic: "أَكْبَر ، أَتْبَر", note: "If Imam stops breath, listeners can't tell which letter was said" },
      letters: ["ك", "ت"]
    }
  },
  {
    id: "32a",
    title: "Qalqalah (قَلْقَلَة)",
    category: "sukoon",
    content: {
      rule: "When قطب جد letters have a Sukoon sign — an extra echo/bounce sound occurs.",
      letters: ["ق", "ط", "ب", "ج", "د"],
      collection: "قُطْبُ جَدٍّ",
      why: "Helps the person standing behind Imam know which letter was recited.",
      extra_sound: "Similar to a half-Dhammah sound",
      examples: ["خَلَقَ", "يُطْعِم", "أَحَد", "قَبْل"]
    }
  },
  {
    id: "33a",
    title: "Double Fathah, Double Kasrah, Double Dhammah (تَنْوِين)",
    category: "tanween",
    content: {
      rule: "Double Fatha (ً), Double Kasrah (ٍ), Double Dhammah (ٌ) are called Tanween — they give the sound of Noon at the end.",
      note: "Tanween always appears at the END of a word.",
      types: [
        { name: "Double Fathah (ً)", example: "سَبِيلاً", sound: "an" },
        { name: "Double Kasrah (ٍ)", example: "أَيَّةٍ", sound: "in" },
        { name: "Double Dhammah (ٌ)", example: "كِتَابٌ", sound: "un" },
      ]
    }
  },
  {
    id: "34a",
    title: "Shaddah (شَدَّة)",
    category: "shaddah",
    content: {
      rule: "Shaddah letters are actually TWO letters — first is silent, second contains Shaddah with a vowel. Read with STRONG sound.",
      example: "إِنَّ = إِنْ + نَ",
      note: "Thick/thin rules still apply to Shaddah letters.",
      examples: ["كُلُّ", "رَبِّ", "رَبَّنَا"]
    }
  },
  {
    id: "35a",
    title: "Shaddah Special Cases",
    category: "shaddah",
    content: {
      types: [
        { name: "Shaddah followed by Madd", examples: ["قِيَّام", "الضَّالِّين"] },
        { name: "Shaddah with Tanween", examples: ["قِيَّامًا"] },
        { name: "Shaddah followed by Sukoon", examples: ["حَقٌّ"] },
        { name: "Shaddah followed by Soft Waw/Yaa", examples: ["عَدُوٌّ"] },
        { name: "Shaddah followed by Shaddah", examples: ["يُزَكِّي"] }
      ]
    }
  },
  {
    id: "36a",
    title: "Shaddah on م & ن (Ghunnah)",
    category: "ghunnah",
    content: {
      rule: "If there is a Shaddah on م or ن → pronounce with GHUNNAH (nasal sound stretched TWICE).",
      ghunnah: "Making a sound through your nose and stretching it twice (2 Harakaat)",
      examples: ["إِنَّ", "أَنَّهُمْ", "مِمَّا"],
      note: "The Shaddah symbol for Ghunnah looks slightly different in the Qur'an"
    }
  },
  {
    id: "37a",
    title: "Rules of Madd (Summary)",
    category: "madd",
    content: {
      intro: "Madd = to stretch. It gives you time to ponder the message of the Qur'an.",
      types: [
        {
          name: "1. Original Madd",
          desc: "Alif Madd, Yaa Madd, Waaw Madd (Lessons 20, 22, 24)",
          stretch: "2 Harakaat"
        },
        {
          name: "2a. Attached Madd (مَدّ مُتَّصِل)",
          desc: "Alif/Yaa/Waw Madd followed by Hamzah in the SAME word",
          stretch: "4-5 Harakaat",
          symbol: "ـٓ (pointed)"
        },
        {
          name: "2b. Madd Lazim (مَدّ لَازِم)",
          desc: "Alif/Yaa/Waw Madd followed by a letter with Sukoon or Shaddah WITHIN a word",
          stretch: "6 Harakaat",
          symbol: "ـٓ (pointed)"
        },
        {
          name: "2c. Separated Madd (مَدّ جَائِز مُنْفَصِل)",
          desc: "First word ends with Madd, second word BEGINS with Hamzah",
          stretch: "2 or 4-5 Harakaat",
          symbol: "ـ~ (wavy)"
        }
      ]
    }
  },
  {
    id: "38a",
    title: "Separated Letters (حُرُوف مُقَطَّعَة)",
    category: "special",
    content: {
      rule: "Letters that are NOT joined and read individually. Only Allah knows their meanings.",
      count: "14 Muqattaat letters occur 29 times in total",
      stretch_rule: "If letter name is 3 letters (e.g. نُون، مِيم) → read with 6 Harakaat Madd",
      examples: ["الم", "الر", "حم", "ق", "ن"],
      note: "If there is a standing Fathah → stretch 2; if pointed Madd symbol → stretch 6"
    }
  },
  {
    id: "39a",
    title: "Laam of the Word Allah (لَام الْجَلَالَة)",
    category: "special",
    content: {
      rule: "The Laam (ل) of the word اللَّهُ has a special rule.",
      thick: "If Fathah OR Dhammah comes BEFORE the word Allah → Laam is THICK (like 'Law' in English)",
      thin: "If Kasrah comes before the word Allah → Laam is THIN",
      examples_thick: ["قَالَ اللَّهُ", "رَسُولُ اللَّهِ"],
      examples_thin: ["بِسْمِ اللَّهِ", "لِلَّهِ"],
      purpose: "Helps listener in Salah distinguish what is being recited"
    }
  },
  {
    id: "40a",
    title: "Rules of Raa (رَاء)",
    category: "special",
    content: {
      note: "Arabic ر is pronounced somewhat like 'Raw' but without rounding the lips. It has a low frequency.",
      rules: [
        {
          number: 1,
          type: "THICK",
          condition: "If Fathah, Double Fathah, Dhammah, Double Dhammah, or Inverted Dhammah is on Raa → thick"
        },
        {
          number: 2,
          type: "THICK",
          condition: "Fathah/Dhammah letter followed by Raa Saakinah (رْ) → thick"
        },
        {
          number: 3,
          type: "THICK",
          condition: "Fathah/Dhammah letter + letter with Sukoon + Raa Saakinah → thick"
        },
        {
          number: 4,
          type: "THICK",
          condition: "Kasrah letter followed by Raa Saakinah AND next letter is one of: غ،خ،ق،ظ،ط،ض،ص → thick"
        },
        {
          number: 5,
          type: "THIN",
          condition: "Kasrah letter followed by Raa Saakinah (رْ) → thin"
        },
        {
          number: 6,
          type: "THIN",
          condition: "Soft Yaa followed by Raa Saakinah → thin (only when stopping قف)"
        }
      ]
    }
  },
  {
    id: "41a",
    title: "Rules of Raa — Special Cases",
    category: "special",
    content: {
      rule5b: {
        desc: "If a Kasrah occurs at the END of the word PRIOR to the word with Raa Saakinah → Raa is THICK",
        example: "حِجْرٌ (reading رْ as thick)"
      },
      note: "Don't recite with a Madd when stopping — the Alif after Waw was a temporary Hamzah"
    }
  },
  {
    id: "42a",
    title: "Shamsi Letters (حُرُوف شَمْسِيَّة)",
    category: "lam_rules",
    content: {
      rule: "When الـ is added before a tongue-tip letter or ش or ض → the Laam is SACRIFICED and a Shaddah is placed on the following letter.",
      reason: "Makhraj of ل and the following letter is the same → tongue tip can't do both quickly",
      letters: ["ت", "ث", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ل", "ن"],
      example: "الـ + شَمْس = الشَّمْس (Laam is silent, Sheen gets Shaddah)",
      examples: ["الشَّمْسُ", "الذِّكْرُ", "الصَّلَاةُ", "النُّورُ"]
    }
  },
  {
    id: "43a",
    title: "Qamari Letters (حُرُوف قَمَرِيَّة)",
    category: "lam_rules",
    content: {
      rule: "The remaining 14 letters are Qamari. When الـ is added before them → Laam is read CLEARLY (no sacrifice).",
      reason: "Makhraj of these letters is far from Laam → no conflict",
      letters: ["أ", "ب", "ج", "ح", "خ", "ع", "غ", "ف", "ق", "ك", "م", "و", "ه", "ي"],
      example: "الـ + قَمَر = الْقَمَر (Laam is clear)",
      examples: ["الْقَمَرُ", "الْكِتَابُ", "الْمُتَّقِينَ", "الْبَيِّنَاتُ"]
    }
  },
  {
    id: "44a",
    title: "Rules of Meem Saakinah (مِيم سَاكِنَة)",
    category: "meem_rules",
    content: {
      rules: [
        {
          number: 1,
          name: "Hide (إِخْفَاء شَفَوِي)",
          condition: "Meem Saakin followed by ب → suppress Meem with GHUNNAH while keeping lips joined, then say Baa",
          note: "Sukoon sign on such Meem is slightly rotated in Qur'an"
        },
        {
          number: 2,
          name: "Merge (إِدْغَام شَفَوِي)",
          condition: "Meem Saakin followed by another Meem → MERGE them (م + م → مّ)",
          examples: ["لَهُم مَّا", "فَمِنْهُم مَّن"]
        },
        {
          number: 3,
          name: "Express (إِظْهَار شَفَوِي)",
          condition: "Meem Saakin followed by any OTHER letter → read مْ normally",
          caution: "When followed by Waaw or Fa → make sure lips touch for مْ"
        }
      ]
    }
  },
  {
    id: "45a",
    title: "Rule 1 of Noon Saakinah/Tanween: Show (إِظْهَار)",
    category: "noon_rules",
    content: {
      rule: "If Noon Saakinah (نْ) or Tanween is followed by any THROAT letter (ء، هـ، ع، ح، غ، خ) → pronounce ن CLEARLY",
      letters: ["ء", "هـ", "ع", "ح", "غ", "خ"],
      examples: [
        "مِنْ هُوَ", "مِنْهُ", "سَمِيعٌ عَلِيمٌ",
        "مِنْ عِلْمٍ", "مِنْ غَيْرٍ", "مِنْ خَيْرٍ"
      ],
      note: "Read in normal way — no change"
    }
  },
  {
    id: "46a",
    title: "Rule 2 of Noon Saakinah/Tanween: Hide (إِخْفَاء)",
    category: "noon_rules",
    content: {
      rule: "If Noon Saakinah or Tanween is followed by any of 15 letters → SUPPRESS نْ and merge with GHUNNAH",
      letters: ["ف", "ث", "ذ", "ظ", "ت", "د", "ط", "ز", "س", "ص", "ج", "ش", "ض", "ك", "ق"],
      process: "Suppress the ن or Tanween + merge with following letter + Ghunnah",
      examples: [
        "أَنْثَى (ث)", "أَنذَرَ (ذ)", "إِنْ نَّتُمْ (ن → suppressed)", "مَن تَابَ (ت)"
      ]
    }
  },
  {
    id: "47a",
    title: "Examples: Hide (إِخْفَاء) — Noon Saakinah",
    category: "noon_rules",
    content: {
      examples_by_letter: [
        { letters: "ث ذ ظ", examples: ["أَنثَى", "أَنذِرْ", "يَنظُرُ"] },
        { letters: "ت د ط", examples: ["أَنتَ", "عِندَ", "نَطَقَ"] },
        { letters: "ز س ص", examples: ["أَنزَلَ", "عَن سَبِيل", "مِن صِيَام"] },
        { letters: "ج ش ف", examples: ["مَن جَاءَ", "مِن شَيءٍ", "أَنفُسَهُمْ"] },
        { letters: "ض ك ق", examples: ["مَن ضَلَّ", "إِن كُنتُمْ", "مِن قَرِيبٍ"] }
      ]
    }
  },
  {
    id: "48a",
    title: "Examples: Hide (إِخْفَاء) — Tanween",
    category: "noon_rules",
    content: {
      rule: "Tanween follows the same rules as Noon Saakinah — ending 'n' sound is same.",
      examples_by_letter: [
        { letters: "ث ذ ظ", examples: ["مَاءً ثَجَّاجًا", "نَفْسٍ ذَاقَة", "قَوْمًا ظَالِمِينَ"] },
        { letters: "ت د ط", examples: ["جَنَّاتٍ تَجْرِي", "قِنْوَانٌ دَانِيَة", "قِمَّطًا طَاغِين"] },
        { letters: "ز س ص", examples: ["كُلاًّ زُجَّين", "قَوْلاً سَدِيدًا", "عَمَلاً صَالِحًا"] },
        { letters: "ج ش ف", examples: ["فَصَبْرٌ جَمِيل", "نَفْسٌ شَيْئًا", "خَالِدًا فِيهَا"] },
        { letters: "ض ك ق", examples: ["قَوْمًا ضَالِّين", "رَقِيمٌ", "شَيءٌ قَدِيرٌ"] }
      ]
    }
  },
  {
    id: "49a",
    title: "Rule 3 of Noon Saakinah/Tanween: Merge (إِدْغَام)",
    category: "noon_rules",
    content: {
      rules: [
        {
          name: "Merge WITH Ghunnah",
          letters: ["ي", "و", "م", "ن"],
          collection: "يَنْمُو",
          desc: "If نْ or Tanween is followed by ي و م ن → merge with Ghunnah (Shaddah shown on following letter)",
          examples: ["لِمَن يَّشَاء", "مِن مَّاء", "مِن وَّال"]
        },
        {
          name: "Merge WITHOUT Ghunnah",
          letters: ["ل", "ر"],
          desc: "If نْ or Tanween is followed by ل or ر → merge WITHOUT Ghunnah",
          examples: ["مَن لَّم", "مِن رَّبِّكُمْ"]
        },
        {
          name: "Exception (4 words)",
          desc: "These 4 words — Yaa or Waaw are in ONE word after Noon Saakinah → read NORMALLY (no merge)",
          words: ["دُنْيَا", "بُنْيَان", "صِنْوَان", "قِنْوَان"]
        }
      ]
    }
  },
  {
    id: "50a",
    title: "Rule 4 of Noon Saakinah/Tanween: Change (إِقْلَاب)",
    category: "noon_rules",
    content: {
      rule: "If Noon Saakinah or Tanween is followed by ب → change نْ to مْ with GHUNNAH",
      how: "A tiny م is written above نْ or Tanween in Qur'an to indicate this change",
      examples_within: ["أَنبِيَاء → أَمبِيَاء (with Ghunnah)"],
      examples_between: ["مِن بَعد → مِم بَعد", "فَإِن بَغَتْ → فَإِم بَغَتْ"],
      summary: {
        title: "4 Rules of Noon Saakinah/Tanween",
        rules: [
          "Express (إِظْهَار) — with throat letters",
          "Hide (إِخْفَاء) — with 15 letters",
          "Merge (إِدْغَام) — with ينمو + لر",
          "Change (إِقْلَاب) — with ب"
        ]
      }
    }
  },
  {
    id: "51a",
    title: "Small Noon (نُون الْقُطْنِي)",
    category: "special",
    content: {
      rule: "When نْ is followed by a silent letter → Kasrah is placed on ن to make it easy to read.",
      tanween_rule: "If a letter with Tanween is followed by Hamzahtul-Wasl → Tanween is replaced by a tiny Noon with Kasrah.",
      note: "This occurs only BETWEEN two words.",
      examples: ["إِيمَانًا + الَّذِين = إِيمَانَنِ الَّذِين", "لُمَزَةٍ + الَّذِي = لُمَزَةَنِ الَّذِي"]
    }
  },
  {
    id: "52a",
    title: "Silent Letters",
    category: "special",
    content: {
      rules: [
        {
          number: 1,
          rule: "If a Fathah/Kasrah/Dhammah letter is followed by another letter with Sukoon or Shaddah → recite them merging and SKIP all letters between them",
          examples: ["فَالْيَوْم", "الْقَمَر", "الشَّمْس"]
        },
        {
          number: 2,
          rule: "If Alif is carrying a small CIRCLE over it → Alif is DROPPED",
          examples: ["أَنَا (sometimes written with circle on final Alif)"]
        },
        {
          number: 3,
          rule: "The word أَنَا should be read as أَنَ — HOWEVER if you STOP at أَنَا then stretch Alif Madd there"
        },
        {
          number: 4,
          rule: "After Standing Fathah, if there is a Yaa or Waw WITHOUT any sign → don't read it (in Indopak prints)",
          examples: ["عِيسَى", "مُوسَى", "الصَّلَاة"]
        },
        {
          number: 5,
          rule: "If there is NO sign on any letter → drop that letter. No sign = No sound."
        }
      ]
    }
  },
  {
    id: "53a",
    title: "Rules of Stopping — Part 1 (وَقْف)",
    category: "waqf",
    content: {
      definition: "Waqf قَف = when you stop to take breath. Stop where meanings are NOT distorted.",
      rules: [
        {
          number: 1,
          rule: "Make the LAST letter Saakin (add Sukoon) when stopping — for Fathah, Kasrah, Dhammah letters"
        },
        {
          number: 2,
          rule: "If there is Standing Fathah on the last letter → read it AS IS"
        },
        {
          number: 4,
          rule: "If last letter has Shaddah:",
          sub: [
            "4a: Stop at Shaddah (Fathah/Kasrah/Dhammah)",
            "4b: If Meem/Noon with Shaddah — stop with Ghunnah without harakaat",
            "4c: If Qalqalah letter with Shaddah — stop with strong Qalqalah"
          ]
        }
      ]
    }
  },
  {
    id: "54a",
    title: "Rules of Stopping — Part 2",
    category: "waqf",
    content: {
      rules: [
        {
          name: "Round Ta (ة) at end",
          rule: "If you stop at ة → convert to هـ and make it Saakinah"
        },
        {
          name: "Madd before last letter",
          rule: "If Alif Madd / Yaa Madd / Waw Madd before last letter → stop with 2, 4, or 6 Harakaat"
        },
        {
          name: "Soft Waw/Yaa before last letter",
          rule: "If Soft Waw or Soft Yaa before last letter → stop with 2, 4, or 6 Harakaat"
        }
      ]
    }
  },
  {
    id: "55a",
    title: "Rules of Restarting Recitation",
    category: "waqf",
    content: {
      intro: "If you stop in the middle of an Ayah, go back a word or two to maintain message flow. You may need to start with a connecting Hamzah in 3 cases.",
      rules: [
        {
          number: 1,
          rule: "If word starts with Alif and Laam (الـ) → start with Alif, Fathah on it",
          examples: ["الْحَمْدُ", "الرَّحْمَٰنُ", "الَّذِينَ"]
        },
        {
          number: 2,
          rule: "If word starts with الـ (Al + specific patterns) → same rule",
          examples: ["الَّذِي", "الَّذِينَ", "الَّتِي"]
        },
        {
          number: 3,
          rule: "Starting with some verbs (connecting Hamzah + Saakinah letter)",
          examples: ["إِذْهَبْ", "إِضْرِبْ", "إِشْكُرْ"],
          note: "If you stop after such words and restart from them → start with أ (except if third letter has Dhammah)"
        }
      ]
    }
  },
  {
    id: "56a",
    title: "Stop Signs in Qur'an",
    category: "waqf",
    content: {
      intro: "Stop signs ensure correct recitation without distorting meanings.",
      signs: [
        { sign: "م", name: "Waqf Laazim", meaning: "MUST stop here", desc: "Stopping here is Sunnah of the Prophet ﷺ" },
        { sign: "ط", name: "Waqf Mutlaq", meaning: "STOP — better to stop at this sign" },
        { sign: "ج", name: "Waqf Jaaiz", meaning: "Permissible — you may stop or continue" },
        { sign: "ز", name: "Waqf Mujawwaz", meaning: "Better to CONTINUE recitation" },
        { sign: "ص", name: "Waqf Murakhkhas", meaning: "Better to CONTINUE (stopping allowed due to long verse)" },
        { sign: "ق", name: "Waqf Awla", meaning: "Better to CONTINUE recitation" },
        { sign: "ح", name: "Waqf Mustaħsan", meaning: "Better to CONTINUE" },
        { sign: "سكته / سك", name: "Saktah", meaning: "PAUSE for 2 Harakaat without taking breath, then continue" },
        { sign: "وقفه", name: "Waqfah", meaning: "Long Saktah — stop longer without breath, then continue" },
        { sign: "∴ ∴ (pair)", name: "Muanaqah", meaning: "Stop at ONE of the two signs — your choice" },
        { sign: "O (circle)", name: "End of Ayah", meaning: "Given at verse ending with Ayah number" },
        { sign: "لا", name: "No Stopping", meaning: "Do NOT stop here — stopping gives wrong meaning" }
      ]
    }
  }
];
