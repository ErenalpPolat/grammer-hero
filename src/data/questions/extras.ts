import type { Exercise, GameType } from "@/lib/exercise/types";

/**
 * Yeni 4 oyun tipi (word-scramble, find-mistake, drag-drop, memory-match) için
 * her dersi tek dosyada genişlet. index.ts BANKS'i mergele.
 */
export const EXTRA_QUESTIONS: Record<string, Partial<Record<GameType, Exercise[]>>> = {
  "ps-1": {
    "word-scramble": [
      { type: "word-scramble", id: "ps1-ws-1", answer: "play", hint: "I ___ football every day." },
      { type: "word-scramble", id: "ps1-ws-2", answer: "speak", hint: "We ___ English." },
      { type: "word-scramble", id: "ps1-ws-3", answer: "every", hint: "I drink coffee ___ morning." },
      { type: "word-scramble", id: "ps1-ws-4", answer: "live", hint: "They ___ in Istanbul." },
    ],
    "find-mistake": [
      {
        type: "find-mistake",
        id: "ps1-fm-1",
        tokens: ["I", "plays", "tennis", "every", "weekend"],
        wrongIndex: 1,
        correction: "play",
        hint: "1. tekil şahıs · yalın fiil",
      },
      {
        type: "find-mistake",
        id: "ps1-fm-2",
        tokens: ["We", "lives", "in", "Ankara"],
        wrongIndex: 1,
        correction: "live",
      },
      {
        type: "find-mistake",
        id: "ps1-fm-3",
        tokens: ["You", "speaks", "two", "languages"],
        wrongIndex: 1,
        correction: "speak",
      },
      {
        type: "find-mistake",
        id: "ps1-fm-4",
        tokens: ["They", "works", "at", "the", "hospital"],
        wrongIndex: 1,
        correction: "work",
      },
    ],
    "drag-drop": [
      {
        type: "drag-drop",
        id: "ps1-dd-1",
        sentence: "I ___ tea every morning.",
        options: ["drink", "drinks", "drinking"],
        answerIndex: 0,
      },
      {
        type: "drag-drop",
        id: "ps1-dd-2",
        sentence: "We ___ in Turkey.",
        options: ["lives", "live", "living"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "ps1-dd-3",
        sentence: "They ___ football together.",
        options: ["plays", "play", "played"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "ps1-dd-4",
        sentence: "You ___ very fast.",
        options: ["run", "runs", "running"],
        answerIndex: 0,
      },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "ps1-mm-1",
        prompt: "Özne ile fiili eşleştir:",
        pairs: [
          { left: "I", right: "play" },
          { left: "You", right: "speak" },
          { left: "We", right: "live" },
          { left: "They", right: "work" },
        ],
      },
      {
        type: "memory-match",
        id: "ps1-mm-2",
        prompt: "Türkçe → İngilizce:",
        pairs: [
          { left: "yaşamak", right: "live" },
          { left: "konuşmak", right: "speak" },
          { left: "oynamak", right: "play" },
          { left: "çalışmak", right: "work" },
        ],
      },
    ],
  },

  "ps-2": {
    "word-scramble": [
      { type: "word-scramble", id: "ps2-ws-1", answer: "doesn't", hint: "She ___ like coffee." },
      { type: "word-scramble", id: "ps2-ws-2", answer: "don't", hint: "I ___ eat meat." },
      { type: "word-scramble", id: "ps2-ws-3", answer: "drink", hint: "He doesn't ___ coffee." },
      { type: "word-scramble", id: "ps2-ws-4", answer: "play", hint: "They don't ___ tennis." },
    ],
    "find-mistake": [
      {
        type: "find-mistake",
        id: "ps2-fm-1",
        tokens: ["She", "don't", "like", "tea"],
        wrongIndex: 1,
        correction: "doesn't",
      },
      {
        type: "find-mistake",
        id: "ps2-fm-2",
        tokens: ["He", "doesn't", "plays", "football"],
        wrongIndex: 2,
        correction: "play",
        hint: "doesn't sonrası yalın",
      },
      {
        type: "find-mistake",
        id: "ps2-fm-3",
        tokens: ["They", "doesn't", "work", "here"],
        wrongIndex: 1,
        correction: "don't",
      },
      {
        type: "find-mistake",
        id: "ps2-fm-4",
        tokens: ["I", "doesn't", "have", "time"],
        wrongIndex: 1,
        correction: "don't",
      },
    ],
    "drag-drop": [
      {
        type: "drag-drop",
        id: "ps2-dd-1",
        sentence: "I ___ like spicy food.",
        options: ["doesn't", "don't", "isn't"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "ps2-dd-2",
        sentence: "She ___ work on Sundays.",
        options: ["don't", "doesn't", "isn't"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "ps2-dd-3",
        sentence: "We ___ have a car.",
        options: ["don't", "doesn't", "isn't"],
        answerIndex: 0,
      },
      {
        type: "drag-drop",
        id: "ps2-dd-4",
        sentence: "He doesn't ___ TV.",
        options: ["watches", "watch", "watching"],
        answerIndex: 1,
      },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "ps2-mm-1",
        prompt: "Özne → yardımcı fiil:",
        pairs: [
          { left: "I", right: "don't" },
          { left: "She", right: "doesn't" },
          { left: "We", right: "don't" },
          { left: "He", right: "doesn't" },
        ],
      },
    ],
  },

  "ps-3": {
    "word-scramble": [
      { type: "word-scramble", id: "ps3-ws-1", answer: "Does", hint: "___ she like coffee?" },
      { type: "word-scramble", id: "ps3-ws-2", answer: "Do", hint: "___ you speak English?" },
      { type: "word-scramble", id: "ps3-ws-3", answer: "speak", hint: "Does he ___ Turkish?" },
      { type: "word-scramble", id: "ps3-ws-4", answer: "play", hint: "Do they ___ football?" },
    ],
    "find-mistake": [
      {
        type: "find-mistake",
        id: "ps3-fm-1",
        tokens: ["Do", "she", "like", "coffee"],
        wrongIndex: 0,
        correction: "Does",
      },
      {
        type: "find-mistake",
        id: "ps3-fm-2",
        tokens: ["Does", "he", "plays", "football"],
        wrongIndex: 2,
        correction: "play",
      },
      {
        type: "find-mistake",
        id: "ps3-fm-3",
        tokens: ["Does", "they", "speak", "English"],
        wrongIndex: 1,
        correction: "they → Do they",
      },
      {
        type: "find-mistake",
        id: "ps3-fm-4",
        tokens: ["Do", "your", "father", "work", "here"],
        wrongIndex: 0,
        correction: "Does",
      },
    ],
    "drag-drop": [
      {
        type: "drag-drop",
        id: "ps3-dd-1",
        sentence: "___ you like pizza?",
        options: ["Does", "Do", "Are"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "ps3-dd-2",
        sentence: "___ she speak French?",
        options: ["Do", "Does", "Is"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "ps3-dd-3",
        sentence: "Do you ___ this song?",
        options: ["likes", "like", "liking"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "ps3-dd-4",
        sentence: "Does he ___ at the bank?",
        options: ["works", "work", "working"],
        answerIndex: 1,
      },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "ps3-mm-1",
        prompt: "Özne → soru yardımcı fiili:",
        pairs: [
          { left: "I / you / we / they", right: "Do" },
          { left: "he / she / it", right: "Does" },
          { left: "Do you like?", right: "Yes, I do." },
          { left: "Does she like?", right: "Yes, she does." },
        ],
      },
    ],
  },

  "ps-4": {
    "word-scramble": [
      { type: "word-scramble", id: "ps4-ws-1", answer: "plays", hint: "She ___ piano." },
      { type: "word-scramble", id: "ps4-ws-2", answer: "goes", hint: "He ___ to school." },
      { type: "word-scramble", id: "ps4-ws-3", answer: "watches", hint: "It ___ the birds." },
      { type: "word-scramble", id: "ps4-ws-4", answer: "studies", hint: "She ___ English." },
    ],
    "find-mistake": [
      {
        type: "find-mistake",
        id: "ps4-fm-1",
        tokens: ["She", "play", "the", "piano"],
        wrongIndex: 1,
        correction: "plays",
      },
      {
        type: "find-mistake",
        id: "ps4-fm-2",
        tokens: ["My", "father", "go", "to", "work"],
        wrongIndex: 2,
        correction: "goes",
      },
      {
        type: "find-mistake",
        id: "ps4-fm-3",
        tokens: ["He", "watch", "TV", "every", "evening"],
        wrongIndex: 1,
        correction: "watches",
      },
      {
        type: "find-mistake",
        id: "ps4-fm-4",
        tokens: ["She", "studys", "every", "night"],
        wrongIndex: 1,
        correction: "studies",
      },
    ],
    "drag-drop": [
      {
        type: "drag-drop",
        id: "ps4-dd-1",
        sentence: "She ___ to school.",
        options: ["go", "goes", "going"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "ps4-dd-2",
        sentence: "He ___ pizza.",
        options: ["like", "likes", "liking"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "ps4-dd-3",
        sentence: "The cat ___ tuna.",
        options: ["love", "loves", "loving"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "ps4-dd-4",
        sentence: "It ___ in winter.",
        options: ["snow", "snows", "snowing"],
        answerIndex: 1,
      },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "ps4-mm-1",
        prompt: "Yalın fiil → 3. tekil hali:",
        pairs: [
          { left: "play", right: "plays" },
          { left: "go", right: "goes" },
          { left: "watch", right: "watches" },
          { left: "study", right: "studies" },
        ],
      },
      {
        type: "memory-match",
        id: "ps4-mm-2",
        prompt: "Yalın → 3. tekil:",
        pairs: [
          { left: "do", right: "does" },
          { left: "have", right: "has" },
          { left: "fly", right: "flies" },
          { left: "fix", right: "fixes" },
        ],
      },
    ],
  },

  "ps-5": {
    "word-scramble": [
      { type: "word-scramble", id: "ps5-ws-1", answer: "has", hint: "She ___ a brother." },
      { type: "word-scramble", id: "ps5-ws-2", answer: "does", hint: "He ___ his homework." },
      { type: "word-scramble", id: "ps5-ws-3", answer: "goes", hint: "She ___ to school." },
      { type: "word-scramble", id: "ps5-ws-4", answer: "makes", hint: "She ___ delicious cakes." },
    ],
    "find-mistake": [
      {
        type: "find-mistake",
        id: "ps5-fm-1",
        tokens: ["He", "have", "two", "cats"],
        wrongIndex: 1,
        correction: "has",
      },
      {
        type: "find-mistake",
        id: "ps5-fm-2",
        tokens: ["She", "do", "her", "homework"],
        wrongIndex: 1,
        correction: "does",
      },
      {
        type: "find-mistake",
        id: "ps5-fm-3",
        tokens: ["My", "father", "go", "to", "the", "gym"],
        wrongIndex: 2,
        correction: "goes",
      },
    ],
    "drag-drop": [
      {
        type: "drag-drop",
        id: "ps5-dd-1",
        sentence: "She ___ two children.",
        options: ["have", "has", "having"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "ps5-dd-2",
        sentence: "He ___ to bed early.",
        options: ["go", "goes", "going"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "ps5-dd-3",
        sentence: "It ___ cold in winter.",
        options: ["get", "gets", "getting"],
        answerIndex: 1,
      },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "ps5-mm-1",
        prompt: "Yalın → 3. tekil hali (sık fiiller):",
        pairs: [
          { left: "have", right: "has" },
          { left: "do", right: "does" },
          { left: "go", right: "goes" },
          { left: "make", right: "makes" },
        ],
      },
    ],
  },

  "ps-6": {
    "word-scramble": [
      { type: "word-scramble", id: "ps6-ws-1", answer: "doesn't", hint: "She ___ like coffee." },
      { type: "word-scramble", id: "ps6-ws-2", answer: "Does", hint: "___ he speak Spanish?" },
      { type: "word-scramble", id: "ps6-ws-3", answer: "have", hint: "We ___ a meeting at 3." },
      { type: "word-scramble", id: "ps6-ws-4", answer: "plays", hint: "She ___ tennis on Sundays." },
    ],
    "find-mistake": [
      {
        type: "find-mistake",
        id: "ps6-fm-1",
        tokens: ["She", "don't", "speak", "Italian"],
        wrongIndex: 1,
        correction: "doesn't",
      },
      {
        type: "find-mistake",
        id: "ps6-fm-2",
        tokens: ["Do", "your", "sister", "work"],
        wrongIndex: 0,
        correction: "Does",
      },
      {
        type: "find-mistake",
        id: "ps6-fm-3",
        tokens: ["He", "have", "three", "siblings"],
        wrongIndex: 1,
        correction: "has",
      },
    ],
    "drag-drop": [
      {
        type: "drag-drop",
        id: "ps6-dd-1",
        sentence: "She ___ a brother.",
        options: ["have", "has", "having"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "ps6-dd-2",
        sentence: "I ___ understand the question.",
        options: ["doesn't", "don't", "isn't"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "ps6-dd-3",
        sentence: "___ they live here?",
        options: ["Does", "Do", "Are"],
        answerIndex: 1,
      },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "ps6-mm-1",
        prompt: "Olumlu → Olumsuz dönüşümü:",
        pairs: [
          { left: "She plays.", right: "She doesn't play." },
          { left: "I like.", right: "I don't like." },
          { left: "He has.", right: "He doesn't have." },
          { left: "They go.", right: "They don't go." },
        ],
      },
    ],
  },

  "past-1": {
    "word-scramble": [
      { type: "word-scramble", id: "past1-ws-1", answer: "worked", hint: "I ___ at a cafe last summer." },
      { type: "word-scramble", id: "past1-ws-2", answer: "studied", hint: "She ___ all night." },
      { type: "word-scramble", id: "past1-ws-3", answer: "played", hint: "We ___ tennis yesterday." },
      { type: "word-scramble", id: "past1-ws-4", answer: "stopped", hint: "I ___ at the red light." },
    ],
    "find-mistake": [
      {
        type: "find-mistake",
        id: "past1-fm-1",
        tokens: ["She", "studyed", "English", "yesterday"],
        wrongIndex: 1,
        correction: "studied",
      },
      {
        type: "find-mistake",
        id: "past1-fm-2",
        tokens: ["They", "watch", "the", "movie", "last", "night"],
        wrongIndex: 1,
        correction: "watched",
      },
      {
        type: "find-mistake",
        id: "past1-fm-3",
        tokens: ["I", "stoped", "at", "the", "shop"],
        wrongIndex: 1,
        correction: "stopped",
      },
    ],
    "drag-drop": [
      {
        type: "drag-drop",
        id: "past1-dd-1",
        sentence: "I ___ TV last night.",
        options: ["watch", "watched", "watching"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "past1-dd-2",
        sentence: "She ___ for the test.",
        options: ["study", "studyed", "studied"],
        answerIndex: 2,
      },
      {
        type: "drag-drop",
        id: "past1-dd-3",
        sentence: "We ___ at the party.",
        options: ["dance", "danced", "dancing"],
        answerIndex: 1,
      },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "past1-mm-1",
        prompt: "Yalın → -ed (düzenli):",
        pairs: [
          { left: "work", right: "worked" },
          { left: "play", right: "played" },
          { left: "study", right: "studied" },
          { left: "stop", right: "stopped" },
        ],
      },
    ],
  },

  "past-2": {
    "word-scramble": [
      { type: "word-scramble", id: "past2-ws-1", answer: "went", hint: "I ___ to school by bus." },
      { type: "word-scramble", id: "past2-ws-2", answer: "ate", hint: "We ___ pizza for lunch." },
      { type: "word-scramble", id: "past2-ws-3", answer: "saw", hint: "She ___ a great movie." },
      { type: "word-scramble", id: "past2-ws-4", answer: "bought", hint: "He ___ a new car." },
    ],
    "find-mistake": [
      {
        type: "find-mistake",
        id: "past2-fm-1",
        tokens: ["I", "eated", "breakfast", "at", "8"],
        wrongIndex: 1,
        correction: "ate",
      },
      {
        type: "find-mistake",
        id: "past2-fm-2",
        tokens: ["He", "buyed", "a", "new", "car"],
        wrongIndex: 1,
        correction: "bought",
      },
      {
        type: "find-mistake",
        id: "past2-fm-3",
        tokens: ["She", "goed", "to", "Paris", "last", "year"],
        wrongIndex: 1,
        correction: "went",
      },
      {
        type: "find-mistake",
        id: "past2-fm-4",
        tokens: ["We", "seed", "a", "great", "movie"],
        wrongIndex: 1,
        correction: "saw",
      },
    ],
    "drag-drop": [
      {
        type: "drag-drop",
        id: "past2-dd-1",
        sentence: "I ___ to school.",
        options: ["go", "went", "goed"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "past2-dd-2",
        sentence: "We ___ pizza.",
        options: ["eat", "ate", "eated"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "past2-dd-3",
        sentence: "He ___ a phone.",
        options: ["buy", "bought", "buyed"],
        answerIndex: 1,
      },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "past2-mm-1",
        prompt: "Yalın → düzensiz geçmiş:",
        pairs: [
          { left: "go", right: "went" },
          { left: "eat", right: "ate" },
          { left: "see", right: "saw" },
          { left: "buy", right: "bought" },
        ],
      },
      {
        type: "memory-match",
        id: "past2-mm-2",
        prompt: "Yalın → düzensiz geçmiş:",
        pairs: [
          { left: "have", right: "had" },
          { left: "make", right: "made" },
          { left: "take", right: "took" },
          { left: "drink", right: "drank" },
        ],
      },
    ],
  },

  "past-3": {
    "word-scramble": [
      { type: "word-scramble", id: "past3-ws-1", answer: "didn't", hint: "I ___ go to the party." },
      { type: "word-scramble", id: "past3-ws-2", answer: "go", hint: "She didn't ___ to school." },
      { type: "word-scramble", id: "past3-ws-3", answer: "eat", hint: "We didn't ___ breakfast." },
      { type: "word-scramble", id: "past3-ws-4", answer: "find", hint: "He didn't ___ his keys." },
    ],
    "find-mistake": [
      {
        type: "find-mistake",
        id: "past3-fm-1",
        tokens: ["She", "didn't", "went", "to", "school"],
        wrongIndex: 2,
        correction: "go",
      },
      {
        type: "find-mistake",
        id: "past3-fm-2",
        tokens: ["I", "didn't", "ate", "the", "cake"],
        wrongIndex: 2,
        correction: "eat",
      },
      {
        type: "find-mistake",
        id: "past3-fm-3",
        tokens: ["He", "doesn't", "called", "me", "yesterday"],
        wrongIndex: 1,
        correction: "didn't",
      },
    ],
    "drag-drop": [
      {
        type: "drag-drop",
        id: "past3-dd-1",
        sentence: "I ___ understand the question.",
        options: ["don't", "didn't", "doesn't"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "past3-dd-2",
        sentence: "She didn't ___ her keys.",
        options: ["found", "find", "finds"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "past3-dd-3",
        sentence: "We ___ enjoy the food.",
        options: ["doesn't", "don't", "didn't"],
        answerIndex: 2,
      },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "past3-mm-1",
        prompt: "Olumlu → Olumsuz (Past Simple):",
        pairs: [
          { left: "I went.", right: "I didn't go." },
          { left: "She ate.", right: "She didn't eat." },
          { left: "We saw.", right: "We didn't see." },
          { left: "They bought.", right: "They didn't buy." },
        ],
      },
    ],
  },

  "past-4": {
    "word-scramble": [
      { type: "word-scramble", id: "past4-ws-1", answer: "Did", hint: "___ you watch the game?" },
      { type: "word-scramble", id: "past4-ws-2", answer: "go", hint: "Did he ___ to Paris?" },
      { type: "word-scramble", id: "past4-ws-3", answer: "eat", hint: "Did you ___ dinner?" },
      { type: "word-scramble", id: "past4-ws-4", answer: "sleep", hint: "Did you ___ well?" },
    ],
    "find-mistake": [
      {
        type: "find-mistake",
        id: "past4-fm-1",
        tokens: ["Did", "she", "went", "home"],
        wrongIndex: 2,
        correction: "go",
      },
      {
        type: "find-mistake",
        id: "past4-fm-2",
        tokens: ["Do", "you", "call", "me", "yesterday"],
        wrongIndex: 0,
        correction: "Did",
      },
      {
        type: "find-mistake",
        id: "past4-fm-3",
        tokens: ["Did", "you", "ate", "dinner"],
        wrongIndex: 2,
        correction: "eat",
      },
    ],
    "drag-drop": [
      {
        type: "drag-drop",
        id: "past4-dd-1",
        sentence: "___ you sleep well?",
        options: ["Do", "Did", "Does"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "past4-dd-2",
        sentence: "Did he ___ to Paris?",
        options: ["went", "go", "goes"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "past4-dd-3",
        sentence: "Did she ___ the cake?",
        options: ["baked", "bakes", "bake"],
        answerIndex: 2,
      },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "past4-mm-1",
        prompt: "Olumlu → Soru (Past Simple):",
        pairs: [
          { left: "You went.", right: "Did you go?" },
          { left: "She ate.", right: "Did she eat?" },
          { left: "He won.", right: "Did he win?" },
          { left: "They came.", right: "Did they come?" },
        ],
      },
    ],
  },

  "past-5": {
    "word-scramble": [
      { type: "word-scramble", id: "past5-ws-1", answer: "yesterday", hint: "I saw him ___." },
      { type: "word-scramble", id: "past5-ws-2", answer: "ago", hint: "two days ___" },
      { type: "word-scramble", id: "past5-ws-3", answer: "last", hint: "I saw him ___ week." },
      { type: "word-scramble", id: "past5-ws-4", answer: "in", hint: "She was born ___ 1990." },
    ],
    "find-mistake": [
      {
        type: "find-mistake",
        id: "past5-fm-1",
        tokens: ["She", "went", "there", "ago", "two", "days"],
        wrongIndex: 3,
        correction: "two days ago (sıralama)",
      },
      {
        type: "find-mistake",
        id: "past5-fm-2",
        tokens: ["He", "was", "born", "on", "1990"],
        wrongIndex: 3,
        correction: "in",
      },
      {
        type: "find-mistake",
        id: "past5-fm-3",
        tokens: ["They", "left", "tomorrow", "morning"],
        wrongIndex: 2,
        correction: "yesterday",
      },
    ],
    "drag-drop": [
      {
        type: "drag-drop",
        id: "past5-dd-1",
        sentence: "I saw him ___ week.",
        options: ["yesterday", "last", "ago"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "past5-dd-2",
        sentence: "We moved here three years ___.",
        options: ["last", "in", "ago"],
        answerIndex: 2,
      },
      {
        type: "drag-drop",
        id: "past5-dd-3",
        sentence: "The store opened ___ 1995.",
        options: ["on", "at", "in"],
        answerIndex: 2,
      },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "past5-mm-1",
        prompt: "Zaman belirteci kullanım:",
        pairs: [
          { left: "5 days ___", right: "ago" },
          { left: "___ week", right: "last" },
          { left: "___ 1990", right: "in" },
          { left: "I saw him", right: "yesterday" },
        ],
      },
    ],
  },

  "past-6": {
    "word-scramble": [
      { type: "word-scramble", id: "past6-ws-1", answer: "went", hint: "I ___ to school." },
      { type: "word-scramble", id: "past6-ws-2", answer: "didn't", hint: "We ___ understand." },
      { type: "word-scramble", id: "past6-ws-3", answer: "Did", hint: "___ you finish?" },
      { type: "word-scramble", id: "past6-ws-4", answer: "ago", hint: "two weeks ___" },
    ],
    "find-mistake": [
      {
        type: "find-mistake",
        id: "past6-fm-1",
        tokens: ["She", "didn't", "ate", "breakfast"],
        wrongIndex: 2,
        correction: "eat",
      },
      {
        type: "find-mistake",
        id: "past6-fm-2",
        tokens: ["Did", "you", "went", "home"],
        wrongIndex: 2,
        correction: "go",
      },
      {
        type: "find-mistake",
        id: "past6-fm-3",
        tokens: ["He", "buyed", "a", "phone"],
        wrongIndex: 1,
        correction: "bought",
      },
    ],
    "drag-drop": [
      {
        type: "drag-drop",
        id: "past6-dd-1",
        sentence: "I ___ TV last night.",
        options: ["watch", "watched", "watching"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "past6-dd-2",
        sentence: "She ___ understand.",
        options: ["doesn't", "didn't", "don't"],
        answerIndex: 1,
      },
      {
        type: "drag-drop",
        id: "past6-dd-3",
        sentence: "He bought it two weeks ___.",
        options: ["ago", "last", "in"],
        answerIndex: 0,
      },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "past6-mm-1",
        prompt: "Şimdiki → Geçmiş hali (karışık):",
        pairs: [
          { left: "I work", right: "I worked" },
          { left: "She goes", right: "She went" },
          { left: "We eat", right: "We ate" },
          { left: "They buy", right: "They bought" },
        ],
      },
    ],
  },

  "pc-1": {
    "word-scramble": [
      { type: "word-scramble", id: "pc1-ws-1", answer: "playing", hint: "I am ___ football." },
      { type: "word-scramble", id: "pc1-ws-2", answer: "reading", hint: "She is ___ a book." },
      { type: "word-scramble", id: "pc1-ws-3", answer: "are", hint: "We ___ studying." },
      { type: "word-scramble", id: "pc1-ws-4", answer: "is", hint: "He ___ sleeping." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pc1-fm-1", tokens: ["I", "is", "playing", "football"], wrongIndex: 1, correction: "am" },
      { type: "find-mistake", id: "pc1-fm-2", tokens: ["She", "are", "reading", "a", "book"], wrongIndex: 1, correction: "is" },
      { type: "find-mistake", id: "pc1-fm-3", tokens: ["They", "is", "playing", "tennis"], wrongIndex: 1, correction: "are" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pc1-dd-1", sentence: "I ___ working now.", options: ["am", "is", "are"], answerIndex: 0 },
      { type: "drag-drop", id: "pc1-dd-2", sentence: "She ___ sleeping.", options: ["am", "is", "are"], answerIndex: 1 },
      { type: "drag-drop", id: "pc1-dd-3", sentence: "We ___ playing.", options: ["am", "is", "are"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pc1-mm-1",
        prompt: "Özne → yardımcı fiil:",
        pairs: [
          { left: "I", right: "am" },
          { left: "He / She / It", right: "is" },
          { left: "We / You / They", right: "are" },
          { left: "The kids", right: "are" },
        ],
      },
    ],
  },

  "pc-2": {
    "word-scramble": [
      { type: "word-scramble", id: "pc2-ws-1", answer: "isn't", hint: "She ___ working." },
      { type: "word-scramble", id: "pc2-ws-2", answer: "aren't", hint: "We ___ playing." },
      { type: "word-scramble", id: "pc2-ws-3", answer: "not", hint: "I am ___ working." },
      { type: "word-scramble", id: "pc2-ws-4", answer: "watching", hint: "He isn't ___ TV." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pc2-fm-1", tokens: ["She", "don't", "is", "working"], wrongIndex: 1, correction: "isn't" },
      { type: "find-mistake", id: "pc2-fm-2", tokens: ["We", "isn't", "watching", "TV"], wrongIndex: 1, correction: "aren't" },
      { type: "find-mistake", id: "pc2-fm-3", tokens: ["He", "isn't", "sleep", "now"], wrongIndex: 2, correction: "sleeping" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pc2-dd-1", sentence: "I ___ working today.", options: ["am not", "isn't", "aren't"], answerIndex: 0 },
      { type: "drag-drop", id: "pc2-dd-2", sentence: "She ___ studying.", options: ["am not", "isn't", "aren't"], answerIndex: 1 },
      { type: "drag-drop", id: "pc2-dd-3", sentence: "They ___ playing.", options: ["am not", "isn't", "aren't"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pc2-mm-1",
        prompt: "Olumlu → Olumsuz:",
        pairs: [
          { left: "I am playing.", right: "I am not playing." },
          { left: "She is reading.", right: "She isn't reading." },
          { left: "They are working.", right: "They aren't working." },
          { left: "It is raining.", right: "It isn't raining." },
        ],
      },
    ],
  },

  "pc-3": {
    "word-scramble": [
      { type: "word-scramble", id: "pc3-ws-1", answer: "Are", hint: "___ you working?" },
      { type: "word-scramble", id: "pc3-ws-2", answer: "Is", hint: "___ she sleeping?" },
      { type: "word-scramble", id: "pc3-ws-3", answer: "Am", hint: "___ I dreaming?" },
      { type: "word-scramble", id: "pc3-ws-4", answer: "playing", hint: "Are they ___ tennis?" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pc3-fm-1", tokens: ["Do", "you", "playing", "tennis"], wrongIndex: 0, correction: "Are" },
      { type: "find-mistake", id: "pc3-fm-2", tokens: ["Is", "she", "works", "here"], wrongIndex: 2, correction: "working" },
      { type: "find-mistake", id: "pc3-fm-3", tokens: ["Are", "they", "sleep", "now"], wrongIndex: 2, correction: "sleeping" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pc3-dd-1", sentence: "___ you listening?", options: ["Am", "Is", "Are"], answerIndex: 2 },
      { type: "drag-drop", id: "pc3-dd-2", sentence: "___ she dancing?", options: ["Am", "Is", "Are"], answerIndex: 1 },
      { type: "drag-drop", id: "pc3-dd-3", sentence: "___ I dreaming?", options: ["Am", "Is", "Are"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pc3-mm-1",
        prompt: "Soru özne → yardımcı:",
        pairs: [
          { left: "I", right: "Am" },
          { left: "He / She / It", right: "Is" },
          { left: "We / You / They", right: "Are" },
          { left: "The kids", right: "Are" },
        ],
      },
    ],
  },

  "pc-4": {
    "word-scramble": [
      { type: "word-scramble", id: "pc4-ws-1", answer: "running", hint: "She is ___ in the park." },
      { type: "word-scramble", id: "pc4-ws-2", answer: "writing", hint: "He is ___ a letter." },
      { type: "word-scramble", id: "pc4-ws-3", answer: "swimming", hint: "We are ___ in the pool." },
      { type: "word-scramble", id: "pc4-ws-4", answer: "lying", hint: "The dog is ___ on the bed." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pc4-fm-1", tokens: ["She", "is", "runing", "fast"], wrongIndex: 2, correction: "running" },
      { type: "find-mistake", id: "pc4-fm-2", tokens: ["I", "am", "writting", "a", "book"], wrongIndex: 2, correction: "writing" },
      { type: "find-mistake", id: "pc4-fm-3", tokens: ["The", "cat", "is", "lieing", "down"], wrongIndex: 3, correction: "lying" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pc4-dd-1", sentence: "She is ___ in the pool.", options: ["swiming", "swimming", "swimed"], answerIndex: 1 },
      { type: "drag-drop", id: "pc4-dd-2", sentence: "I am ___ a cake.", options: ["bakeing", "baking", "baked"], answerIndex: 1 },
      { type: "drag-drop", id: "pc4-dd-3", sentence: "We are ___ in the garden.", options: ["siting", "sitting", "sitted"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pc4-mm-1",
        prompt: "Yalın → -ing hali:",
        pairs: [
          { left: "run", right: "running" },
          { left: "write", right: "writing" },
          { left: "swim", right: "swimming" },
          { left: "lie", right: "lying" },
        ],
      },
      {
        type: "memory-match",
        id: "pc4-mm-2",
        prompt: "Yalın → -ing hali:",
        pairs: [
          { left: "play", right: "playing" },
          { left: "make", right: "making" },
          { left: "sit", right: "sitting" },
          { left: "bake", right: "baking" },
        ],
      },
    ],
  },

  "pc-5": {
    "word-scramble": [
      { type: "word-scramble", id: "pc5-ws-1", answer: "now", hint: "I am working ___." },
      { type: "word-scramble", id: "pc5-ws-2", answer: "currently", hint: "I am ___ learning Spanish." },
      { type: "word-scramble", id: "pc5-ws-3", answer: "moment", hint: "at the ___" },
      { type: "word-scramble", id: "pc5-ws-4", answer: "these", hint: "___ days" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pc5-fm-1", tokens: ["She", "studies", "English", "right", "now"], wrongIndex: 1, correction: "is studying" },
      { type: "find-mistake", id: "pc5-fm-2", tokens: ["He", "is", "speaking", "Turkish", "every", "day"], wrongIndex: 5, correction: "right now (alışkanlık olsa Present Simple)" },
      { type: "find-mistake", id: "pc5-fm-3", tokens: ["I", "work", "from", "home", "this", "week"], wrongIndex: 1, correction: "am working" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pc5-dd-1", sentence: "I am reading a book ___.", options: ["yesterday", "right now", "every day"], answerIndex: 1 },
      { type: "drag-drop", id: "pc5-dd-2", sentence: "She ___ a new language these days.", options: ["learns", "is learning", "learned"], answerIndex: 1 },
      { type: "drag-drop", id: "pc5-dd-3", sentence: "We ___ from home this week.", options: ["work", "are working", "worked"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pc5-mm-1",
        prompt: "Zaman belirteci → zaman:",
        pairs: [
          { left: "every day", right: "Present Simple" },
          { left: "right now", right: "Present Continuous" },
          { left: "this week", right: "Present Continuous" },
          { left: "yesterday", right: "Past Simple" },
        ],
      },
    ],
  },

  "pc-6": {
    "word-scramble": [
      { type: "word-scramble", id: "pc6-ws-1", answer: "playing", hint: "She is ___ tennis." },
      { type: "word-scramble", id: "pc6-ws-2", answer: "aren't", hint: "We ___ working." },
      { type: "word-scramble", id: "pc6-ws-3", answer: "Are", hint: "___ you listening?" },
      { type: "word-scramble", id: "pc6-ws-4", answer: "running", hint: "He is ___ in the park." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pc6-fm-1", tokens: ["She", "is", "play", "now"], wrongIndex: 2, correction: "playing" },
      { type: "find-mistake", id: "pc6-fm-2", tokens: ["Do", "you", "playing", "tennis"], wrongIndex: 0, correction: "Are" },
      { type: "find-mistake", id: "pc6-fm-3", tokens: ["I", "am", "writting", "a", "letter"], wrongIndex: 2, correction: "writing" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pc6-dd-1", sentence: "She is ___ a book.", options: ["read", "reading", "reads"], answerIndex: 1 },
      { type: "drag-drop", id: "pc6-dd-2", sentence: "We ___ working today.", options: ["am not", "isn't", "aren't"], answerIndex: 2 },
      { type: "drag-drop", id: "pc6-dd-3", sentence: "___ he sleeping?", options: ["Am", "Is", "Are"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pc6-mm-1",
        prompt: "Olumlu → Olumsuz → Soru:",
        pairs: [
          { left: "I am playing.", right: "I am not playing." },
          { left: "She is sleeping.", right: "Is she sleeping?" },
          { left: "We are working.", right: "Are we working?" },
          { left: "They are running.", right: "They aren't running." },
        ],
      },
    ],
  },
};
