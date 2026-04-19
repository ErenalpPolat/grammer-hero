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

  "fut-1": {
    "word-scramble": [
      { type: "word-scramble", id: "fut1-ws-1", answer: "will", hint: "I ___ call you tomorrow." },
      { type: "word-scramble", id: "fut1-ws-2", answer: "tomorrow", hint: "I will see you ___." },
      { type: "word-scramble", id: "fut1-ws-3", answer: "arrive", hint: "The bus will ___ soon." },
      { type: "word-scramble", id: "fut1-ws-4", answer: "help", hint: "They will ___ you." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "fut1-fm-1", tokens: ["I", "will", "calls", "you"], wrongIndex: 2, correction: "call" },
      { type: "find-mistake", id: "fut1-fm-2", tokens: ["They", "wills", "come"], wrongIndex: 1, correction: "will" },
      { type: "find-mistake", id: "fut1-fm-3", tokens: ["He", "will", "to", "help"], wrongIndex: 2, correction: "—" },
      { type: "find-mistake", id: "fut1-fm-4", tokens: ["She", "will", "arriving", "soon"], wrongIndex: 2, correction: "arrive" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "fut1-dd-1", sentence: "I ___ call you later.", options: ["will", "wills", "willing"], answerIndex: 0 },
      { type: "drag-drop", id: "fut1-dd-2", sentence: "They will ___ tomorrow.", options: ["comes", "come", "coming"], answerIndex: 1 },
      { type: "drag-drop", id: "fut1-dd-3", sentence: "She will ___ the project.", options: ["finish", "finishes", "finishing"], answerIndex: 0 },
      { type: "drag-drop", id: "fut1-dd-4", sentence: "We ___ be there.", options: ["will", "wills", "willing"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "fut1-mm-1",
        prompt: "Türkçe → İngilizce:",
        pairs: [
          { left: "yapacağım", right: "I will do" },
          { left: "gelecek", right: "she will come" },
          { left: "arayacağız", right: "we will call" },
          { left: "yardım edecek", right: "he will help" },
        ],
      },
    ],
  },

  "fut-2": {
    "word-scramble": [
      { type: "word-scramble", id: "fut2-ws-1", answer: "won't", hint: "I ___ forget you." },
      { type: "word-scramble", id: "fut2-ws-2", answer: "Will", hint: "___ you help me?" },
      { type: "word-scramble", id: "fut2-ws-3", answer: "not", hint: "She will ___ be late." },
      { type: "word-scramble", id: "fut2-ws-4", answer: "forget", hint: "I won't ___ your name." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "fut2-fm-1", tokens: ["Do", "you", "will", "come"], wrongIndex: 0, correction: "Will" },
      { type: "find-mistake", id: "fut2-fm-2", tokens: ["He", "willn't", "call"], wrongIndex: 1, correction: "won't" },
      { type: "find-mistake", id: "fut2-fm-3", tokens: ["Will", "you", "coming", "tomorrow"], wrongIndex: 2, correction: "come" },
      { type: "find-mistake", id: "fut2-fm-4", tokens: ["They", "will", "not", "comes"], wrongIndex: 3, correction: "come" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "fut2-dd-1", sentence: "I ___ go there.", options: ["won't", "don't", "am not"], answerIndex: 0 },
      { type: "drag-drop", id: "fut2-dd-2", sentence: "___ you help me?", options: ["Do", "Will", "Are"], answerIndex: 1 },
      { type: "drag-drop", id: "fut2-dd-3", sentence: "She ___ be late.", options: ["won't", "doesn't", "isn't"], answerIndex: 0 },
      { type: "drag-drop", id: "fut2-dd-4", sentence: "___ it rain tomorrow?", options: ["Does", "Is", "Will"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "fut2-mm-1",
        prompt: "Olumlu → Olumsuz:",
        pairs: [
          { left: "I will call.", right: "I won't call." },
          { left: "She will come.", right: "She won't come." },
          { left: "We will help.", right: "We won't help." },
          { left: "They will forget.", right: "They won't forget." },
        ],
      },
    ],
  },

  "fut-3": {
    "word-scramble": [
      { type: "word-scramble", id: "fut3-ws-1", answer: "going", hint: "I am ___ to study." },
      { type: "word-scramble", id: "fut3-ws-2", answer: "am", hint: "I ___ going to travel." },
      { type: "word-scramble", id: "fut3-ws-3", answer: "to", hint: "She is going ___ learn." },
      { type: "word-scramble", id: "fut3-ws-4", answer: "visit", hint: "I'm going to ___ my family." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "fut3-fm-1", tokens: ["She", "going", "to", "come"], wrongIndex: 1, correction: "is going" },
      { type: "find-mistake", id: "fut3-fm-2", tokens: ["They", "are", "going", "learns"], wrongIndex: 3, correction: "learn" },
      { type: "find-mistake", id: "fut3-fm-3", tokens: ["He", "is", "going", "buy"], wrongIndex: 3, correction: "to buy" },
      { type: "find-mistake", id: "fut3-fm-4", tokens: ["I", "is", "going", "to", "study"], wrongIndex: 1, correction: "am" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "fut3-dd-1", sentence: "I ___ going to travel.", options: ["is", "am", "are"], answerIndex: 1 },
      { type: "drag-drop", id: "fut3-dd-2", sentence: "She ___ going to study.", options: ["am", "is", "are"], answerIndex: 1 },
      { type: "drag-drop", id: "fut3-dd-3", sentence: "They are going to ___ here.", options: ["moves", "move", "moving"], answerIndex: 1 },
      { type: "drag-drop", id: "fut3-dd-4", sentence: "We ___ going to learn.", options: ["is", "am", "are"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "fut3-mm-1",
        prompt: "Özne → be + going to:",
        pairs: [
          { left: "I", right: "am going to" },
          { left: "He", right: "is going to" },
          { left: "We", right: "are going to" },
          { left: "They", right: "are going to" },
        ],
      },
    ],
  },

  "fut-4": {
    "word-scramble": [
      { type: "word-scramble", id: "fut4-ws-1", answer: "aren't", hint: "They ___ going to stay." },
      { type: "word-scramble", id: "fut4-ws-2", answer: "Are", hint: "___ you going to eat?" },
      { type: "word-scramble", id: "fut4-ws-3", answer: "isn't", hint: "He ___ going to come." },
      { type: "word-scramble", id: "fut4-ws-4", answer: "Is", hint: "___ she going to help us?" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "fut4-fm-1", tokens: ["She", "don't", "going", "to", "come"], wrongIndex: 1, correction: "isn't" },
      { type: "find-mistake", id: "fut4-fm-2", tokens: ["Do", "you", "going", "to", "travel"], wrongIndex: 0, correction: "Are" },
      { type: "find-mistake", id: "fut4-fm-3", tokens: ["Is", "he", "going", "to", "helping"], wrongIndex: 4, correction: "help" },
      { type: "find-mistake", id: "fut4-fm-4", tokens: ["They", "isn't", "going", "to", "stay"], wrongIndex: 1, correction: "aren't" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "fut4-dd-1", sentence: "I ___ going to eat.", options: ["don't", "am not", "isn't"], answerIndex: 1 },
      { type: "drag-drop", id: "fut4-dd-2", sentence: "___ you going to travel?", options: ["Do", "Are", "Will"], answerIndex: 1 },
      { type: "drag-drop", id: "fut4-dd-3", sentence: "She ___ going to come.", options: ["isn't", "aren't", "don't"], answerIndex: 0 },
      { type: "drag-drop", id: "fut4-dd-4", sentence: "___ they going to move?", options: ["Is", "Are", "Do"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "fut4-mm-1",
        prompt: "Olumlu → Olumsuz:",
        pairs: [
          { left: "I am going to eat.", right: "I'm not going to eat." },
          { left: "She is going to come.", right: "She isn't going to come." },
          { left: "We are going to stay.", right: "We aren't going to stay." },
          { left: "They are going to help.", right: "They aren't going to help." },
        ],
      },
    ],
  },

  "fut-5": {
    "word-scramble": [
      { type: "word-scramble", id: "fut5-ws-1", answer: "will", hint: "(Phone rings) I ___ get it!" },
      { type: "word-scramble", id: "fut5-ws-2", answer: "going", hint: "I'm ___ to study medicine." },
      { type: "word-scramble", id: "fut5-ws-3", answer: "fall", hint: "Careful! You are going to ___!" },
      { type: "word-scramble", id: "fut5-ws-4", answer: "promise", hint: "I ___ I will help." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "fut5-fm-1", tokens: ["(Phone)", "I", "am", "going", "to", "answer"], wrongIndex: 2, correction: "will" },
      { type: "find-mistake", id: "fut5-fm-2", tokens: ["Look!", "It", "will", "rain"], wrongIndex: 2, correction: "is going to" },
      { type: "find-mistake", id: "fut5-fm-3", tokens: ["She", "will", "study", "medicine", "(planned)"], wrongIndex: 1, correction: "is going to" },
      { type: "find-mistake", id: "fut5-fm-4", tokens: ["Careful!", "You", "will", "fall"], wrongIndex: 2, correction: "are going to" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "fut5-dd-1", sentence: "(Phone rings) I ___ answer it!", options: ["am going to", "will", "do"], answerIndex: 1 },
      { type: "drag-drop", id: "fut5-dd-2", sentence: "She ___ study medicine (plan).", options: ["will", "is going to", "does"], answerIndex: 1 },
      { type: "drag-drop", id: "fut5-dd-3", sentence: "Look! It ___ rain.", options: ["will", "is going to", "does"], answerIndex: 1 },
      { type: "drag-drop", id: "fut5-dd-4", sentence: "I promise, I ___ help.", options: ["am going to", "will", "do"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "fut5-mm-1",
        prompt: "Durum → Uygun yapı:",
        pairs: [
          { left: "Anlık karar", right: "will" },
          { left: "Önceden plan", right: "be going to" },
          { left: "Genel tahmin", right: "will" },
          { left: "Kanıta dayalı öngörü", right: "be going to" },
        ],
      },
    ],
  },

  "fut-6": {
    "word-scramble": [
      { type: "word-scramble", id: "fut6-ws-1", answer: "forget", hint: "I won't ___ you." },
      { type: "word-scramble", id: "fut6-ws-2", answer: "barbecue", hint: "We're going to have a ___ on Sunday." },
      { type: "word-scramble", id: "fut6-ws-3", answer: "meeting", hint: "Will you come to the ___?" },
      { type: "word-scramble", id: "fut6-ws-4", answer: "house", hint: "We're going to buy a new ___." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "fut6-fm-1", tokens: ["She", "will", "buys", "a", "dress"], wrongIndex: 2, correction: "buy" },
      { type: "find-mistake", id: "fut6-fm-2", tokens: ["Do", "you", "going", "to", "come"], wrongIndex: 0, correction: "Are" },
      { type: "find-mistake", id: "fut6-fm-3", tokens: ["I", "am", "going", "buy", "a", "laptop"], wrongIndex: 3, correction: "to buy" },
      { type: "find-mistake", id: "fut6-fm-4", tokens: ["He", "willn't", "forget"], wrongIndex: 1, correction: "won't" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "fut6-dd-1", sentence: "We ___ going to move.", options: ["is", "am", "are"], answerIndex: 2 },
      { type: "drag-drop", id: "fut6-dd-2", sentence: "___ you help me?", options: ["Do", "Will", "Have"], answerIndex: 1 },
      { type: "drag-drop", id: "fut6-dd-3", sentence: "I ___ forget.", options: ["won't", "doesn't", "isn't"], answerIndex: 0 },
      { type: "drag-drop", id: "fut6-dd-4", sentence: "Look! That glass ___ fall!", options: ["will", "is going to", "does"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "fut6-mm-1",
        prompt: "Cümle → Zaman biçimi:",
        pairs: [
          { left: "I'll get it!", right: "will (anlık karar)" },
          { left: "I'm going to move.", right: "be going to (plan)" },
          { left: "It's going to rain.", right: "be going to (kanıt)" },
          { left: "I think she'll win.", right: "will (tahmin)" },
        ],
      },
    ],
  },

  "perf-1": {
    "word-scramble": [
      { type: "word-scramble", id: "perf1-ws-1", answer: "seen", hint: "I have ___ that film." },
      { type: "word-scramble", id: "perf1-ws-2", answer: "has", hint: "She ___ finished." },
      { type: "word-scramble", id: "perf1-ws-3", answer: "gone", hint: "They have ___ home." },
      { type: "word-scramble", id: "perf1-ws-4", answer: "eaten", hint: "I have ___ lunch." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "perf1-fm-1", tokens: ["I", "has", "seen", "it"], wrongIndex: 1, correction: "have" },
      { type: "find-mistake", id: "perf1-fm-2", tokens: ["She", "has", "went", "home"], wrongIndex: 2, correction: "gone" },
      { type: "find-mistake", id: "perf1-fm-3", tokens: ["They", "have", "ate", "lunch"], wrongIndex: 2, correction: "eaten" },
      { type: "find-mistake", id: "perf1-fm-4", tokens: ["He", "have", "finished"], wrongIndex: 1, correction: "has" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "perf1-dd-1", sentence: "I ___ seen the film.", options: ["has", "have", "am"], answerIndex: 1 },
      { type: "drag-drop", id: "perf1-dd-2", sentence: "She has ___ her work.", options: ["finish", "finishes", "finished"], answerIndex: 2 },
      { type: "drag-drop", id: "perf1-dd-3", sentence: "They have ___ to Paris.", options: ["go", "went", "gone"], answerIndex: 2 },
      { type: "drag-drop", id: "perf1-dd-4", sentence: "He ___ arrived.", options: ["have", "has", "is"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "perf1-mm-1",
        prompt: "V1 → V3:",
        pairs: [
          { left: "go", right: "gone" },
          { left: "see", right: "seen" },
          { left: "eat", right: "eaten" },
          { left: "write", right: "written" },
        ],
      },
    ],
  },

  "perf-2": {
    "word-scramble": [
      { type: "word-scramble", id: "perf2-ws-1", answer: "haven't", hint: "I ___ seen her." },
      { type: "word-scramble", id: "perf2-ws-2", answer: "Has", hint: "___ she arrived?" },
      { type: "word-scramble", id: "perf2-ws-3", answer: "Have", hint: "___ you finished?" },
      { type: "word-scramble", id: "perf2-ws-4", answer: "hasn't", hint: "He ___ called." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "perf2-fm-1", tokens: ["Do", "you", "have", "seen", "it"], wrongIndex: 0, correction: "Have" },
      { type: "find-mistake", id: "perf2-fm-2", tokens: ["She", "hasn't", "finish", "yet"], wrongIndex: 2, correction: "finished" },
      { type: "find-mistake", id: "perf2-fm-3", tokens: ["Has", "they", "arrived"], wrongIndex: 0, correction: "Have" },
      { type: "find-mistake", id: "perf2-fm-4", tokens: ["I", "have", "not", "saw", "it"], wrongIndex: 3, correction: "seen" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "perf2-dd-1", sentence: "I ___ finished.", options: ["haven't", "hasn't", "didn't"], answerIndex: 0 },
      { type: "drag-drop", id: "perf2-dd-2", sentence: "___ she arrived?", options: ["Have", "Has", "Did"], answerIndex: 1 },
      { type: "drag-drop", id: "perf2-dd-3", sentence: "He ___ called me.", options: ["haven't", "hasn't", "doesn't"], answerIndex: 1 },
      { type: "drag-drop", id: "perf2-dd-4", sentence: "___ you seen the film?", options: ["Do", "Have", "Are"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "perf2-mm-1",
        prompt: "Olumlu → Soru:",
        pairs: [
          { left: "I have seen it.", right: "Have I seen it?" },
          { left: "She has finished.", right: "Has she finished?" },
          { left: "They have arrived.", right: "Have they arrived?" },
          { left: "He has called.", right: "Has he called?" },
        ],
      },
    ],
  },

  "perf-3": {
    "word-scramble": [
      { type: "word-scramble", id: "perf3-ws-1", answer: "already", hint: "I have ___ eaten." },
      { type: "word-scramble", id: "perf3-ws-2", answer: "yet", hint: "She hasn't arrived ___." },
      { type: "word-scramble", id: "perf3-ws-3", answer: "just", hint: "They have ___ left." },
      { type: "word-scramble", id: "perf3-ws-4", answer: "never", hint: "I have ___ been to Japan." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "perf3-fm-1", tokens: ["I", "have", "yet", "finished"], wrongIndex: 2, correction: "already" },
      { type: "find-mistake", id: "perf3-fm-2", tokens: ["She", "hasn't", "arrived", "already"], wrongIndex: 3, correction: "yet" },
      { type: "find-mistake", id: "perf3-fm-3", tokens: ["Have", "you", "never", "been", "there"], wrongIndex: 2, correction: "ever" },
      { type: "find-mistake", id: "perf3-fm-4", tokens: ["They", "have", "just", "went"], wrongIndex: 3, correction: "gone" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "perf3-dd-1", sentence: "I have ___ finished. (çoktan)", options: ["yet", "already", "just"], answerIndex: 1 },
      { type: "drag-drop", id: "perf3-dd-2", sentence: "Has he arrived ___?", options: ["already", "yet", "just"], answerIndex: 1 },
      { type: "drag-drop", id: "perf3-dd-3", sentence: "Have you ___ tried sushi?", options: ["yet", "ever", "just"], answerIndex: 1 },
      { type: "drag-drop", id: "perf3-dd-4", sentence: "I have ___ arrived.", options: ["yet", "ever", "just"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "perf3-mm-1",
        prompt: "Belirteç → Anlam:",
        pairs: [
          { left: "already", right: "çoktan" },
          { left: "yet", right: "henüz (olumsuz/soru)" },
          { left: "just", right: "az önce" },
          { left: "ever", right: "hiç (soru)" },
        ],
      },
    ],
  },

  "perf-4": {
    "word-scramble": [
      { type: "word-scramble", id: "perf4-ws-1", answer: "yesterday", hint: "I saw it ___." },
      { type: "word-scramble", id: "perf4-ws-2", answer: "visited", hint: "She has ___ Paris twice." },
      { type: "word-scramble", id: "perf4-ws-3", answer: "went", hint: "We ___ to Rome last year." },
      { type: "word-scramble", id: "perf4-ws-4", answer: "since", hint: "I haven't seen him ___ Monday." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "perf4-fm-1", tokens: ["I", "have", "seen", "him", "yesterday"], wrongIndex: 1, correction: "—" },
      { type: "find-mistake", id: "perf4-fm-2", tokens: ["She", "has", "visited", "Paris", "in", "2015"], wrongIndex: 1, correction: "—" },
      { type: "find-mistake", id: "perf4-fm-3", tokens: ["When", "have", "you", "arrived"], wrongIndex: 1, correction: "did" },
      { type: "find-mistake", id: "perf4-fm-4", tokens: ["He", "was", "born", "in", "1990", "have"], wrongIndex: 5, correction: "—" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "perf4-dd-1", sentence: "I ___ him yesterday.", options: ["have seen", "saw", "was seeing"], answerIndex: 1 },
      { type: "drag-drop", id: "perf4-dd-2", sentence: "She ___ Paris three times.", options: ["visited", "has visited", "was visiting"], answerIndex: 1 },
      { type: "drag-drop", id: "perf4-dd-3", sentence: "When ___ he arrive?", options: ["has", "did", "is"], answerIndex: 1 },
      { type: "drag-drop", id: "perf4-dd-4", sentence: "They ___ here since morning.", options: ["are", "were", "have been"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "perf4-mm-1",
        prompt: "Zaman belirteci → Zaman:",
        pairs: [
          { left: "yesterday", right: "Past Simple" },
          { left: "in 2015", right: "Past Simple" },
          { left: "recently", right: "Present Perfect" },
          { left: "since Monday", right: "Present Perfect" },
        ],
      },
    ],
  },

  "perf-5": {
    "word-scramble": [
      { type: "word-scramble", id: "perf5-ws-1", answer: "for", hint: "I have lived here ___ 10 years." },
      { type: "word-scramble", id: "perf5-ws-2", answer: "since", hint: "She has been here ___ Monday." },
      { type: "word-scramble", id: "perf5-ws-3", answer: "years", hint: "For three ___." },
      { type: "word-scramble", id: "perf5-ws-4", answer: "Monday", hint: "Since ___." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "perf5-fm-1", tokens: ["I", "have", "lived", "here", "since", "ten", "years"], wrongIndex: 4, correction: "for" },
      { type: "find-mistake", id: "perf5-fm-2", tokens: ["She", "has", "worked", "here", "for", "2018"], wrongIndex: 4, correction: "since" },
      { type: "find-mistake", id: "perf5-fm-3", tokens: ["We", "are", "friends", "for", "yesterday"], wrongIndex: 3, correction: "since" },
      { type: "find-mistake", id: "perf5-fm-4", tokens: ["I", "haven't", "eaten", "for", "breakfast"], wrongIndex: 3, correction: "since" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "perf5-dd-1", sentence: "I have studied ___ 5 years.", options: ["since", "for", "ago"], answerIndex: 1 },
      { type: "drag-drop", id: "perf5-dd-2", sentence: "She has lived here ___ 2010.", options: ["for", "since", "ago"], answerIndex: 1 },
      { type: "drag-drop", id: "perf5-dd-3", sentence: "We have known each other ___ childhood.", options: ["for", "since", "ago"], answerIndex: 1 },
      { type: "drag-drop", id: "perf5-dd-4", sentence: "I have waited ___ an hour.", options: ["since", "for", "ago"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "perf5-mm-1",
        prompt: "for vs. since:",
        pairs: [
          { left: "ten years", right: "for" },
          { left: "2010", right: "since" },
          { left: "an hour", right: "for" },
          { left: "Monday", right: "since" },
        ],
      },
    ],
  },

  "perf-6": {
    "word-scramble": [
      { type: "word-scramble", id: "perf6-ws-1", answer: "lost", hint: "She has ___ her keys." },
      { type: "word-scramble", id: "perf6-ws-2", answer: "tried", hint: "Have you ever ___ sushi?" },
      { type: "word-scramble", id: "perf6-ws-3", answer: "known", hint: "He has ___ me for years." },
      { type: "word-scramble", id: "perf6-ws-4", answer: "closed", hint: "She has just ___ the door." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "perf6-fm-1", tokens: ["She", "have", "seen", "it"], wrongIndex: 1, correction: "has" },
      { type: "find-mistake", id: "perf6-fm-2", tokens: ["I", "have", "seen", "him", "yesterday"], wrongIndex: 1, correction: "saw (no 'have')" },
      { type: "find-mistake", id: "perf6-fm-3", tokens: ["He", "has", "went", "home"], wrongIndex: 2, correction: "gone" },
      { type: "find-mistake", id: "perf6-fm-4", tokens: ["They", "haven't", "arrived", "already"], wrongIndex: 3, correction: "yet" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "perf6-dd-1", sentence: "We ___ eaten already.", options: ["has", "have", "did"], answerIndex: 1 },
      { type: "drag-drop", id: "perf6-dd-2", sentence: "He has ___ me for years.", options: ["know", "knows", "known"], answerIndex: 2 },
      { type: "drag-drop", id: "perf6-dd-3", sentence: "I haven't called her ___ Friday.", options: ["for", "since", "ago"], answerIndex: 1 },
      { type: "drag-drop", id: "perf6-dd-4", sentence: "He ___ Berlin last year.", options: ["has visited", "visited", "is visiting"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "perf6-mm-1",
        prompt: "Durum → Zaman:",
        pairs: [
          { left: "yesterday", right: "Past Simple" },
          { left: "since 2010", right: "Present Perfect" },
          { left: "just now (az önce)", right: "Present Perfect" },
          { left: "in 1990", right: "Past Simple" },
        ],
      },
    ],
  },

  "mod-1": {
    "word-scramble": [
      { type: "word-scramble", id: "mod1-ws-1", answer: "can", hint: "I ___ swim." },
      { type: "word-scramble", id: "mod1-ws-2", answer: "can't", hint: "I ___ hear you." },
      { type: "word-scramble", id: "mod1-ws-3", answer: "Can", hint: "___ you help me?" },
      { type: "word-scramble", id: "mod1-ws-4", answer: "swim", hint: "She can ___." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "mod1-fm-1", tokens: ["She", "cans", "swim"], wrongIndex: 1, correction: "can" },
      { type: "find-mistake", id: "mod1-fm-2", tokens: ["Do", "you", "can", "help"], wrongIndex: 0, correction: "Can" },
      { type: "find-mistake", id: "mod1-fm-3", tokens: ["They", "can", "to", "dance"], wrongIndex: 2, correction: "—" },
      { type: "find-mistake", id: "mod1-fm-4", tokens: ["He", "can", "speaks", "French"], wrongIndex: 2, correction: "speak" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "mod1-dd-1", sentence: "I ___ swim.", options: ["cans", "can", "is can"], answerIndex: 1 },
      { type: "drag-drop", id: "mod1-dd-2", sentence: "She can ___ three languages.", options: ["speak", "speaks", "speaking"], answerIndex: 0 },
      { type: "drag-drop", id: "mod1-dd-3", sentence: "___ you help me?", options: ["Do", "Are", "Can"], answerIndex: 2 },
      { type: "drag-drop", id: "mod1-dd-4", sentence: "I ___ hear you.", options: ["don't", "can't", "am not"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "mod1-mm-1",
        prompt: "Kullanım → Anlam:",
        pairs: [
          { left: "I can swim.", right: "yetenek" },
          { left: "Can I use it?", right: "izin" },
          { left: "It can be cold.", right: "olasılık" },
          { left: "I can't hear.", right: "yetenek yok" },
        ],
      },
    ],
  },

  "mod-2": {
    "word-scramble": [
      { type: "word-scramble", id: "mod2-ws-1", answer: "could", hint: "I ___ swim at five." },
      { type: "word-scramble", id: "mod2-ws-2", answer: "Could", hint: "___ you pass the salt?" },
      { type: "word-scramble", id: "mod2-ws-3", answer: "couldn't", hint: "She ___ find her keys." },
      { type: "word-scramble", id: "mod2-ws-4", answer: "read", hint: "I could ___ at four." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "mod2-fm-1", tokens: ["I", "could", "to", "read"], wrongIndex: 2, correction: "—" },
      { type: "find-mistake", id: "mod2-fm-2", tokens: ["Could", "you", "helps", "me"], wrongIndex: 2, correction: "help" },
      { type: "find-mistake", id: "mod2-fm-3", tokens: ["Do", "you", "could", "come"], wrongIndex: 0, correction: "Could" },
      { type: "find-mistake", id: "mod2-fm-4", tokens: ["She", "couldn't", "found", "it"], wrongIndex: 2, correction: "find" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "mod2-dd-1", sentence: "I ___ read at five.", options: ["can", "could", "must"], answerIndex: 1 },
      { type: "drag-drop", id: "mod2-dd-2", sentence: "___ you pass the salt?", options: ["Must", "Could", "Do"], answerIndex: 1 },
      { type: "drag-drop", id: "mod2-dd-3", sentence: "She ___ find her keys yesterday.", options: ["can't", "couldn't", "doesn't"], answerIndex: 1 },
      { type: "drag-drop", id: "mod2-dd-4", sentence: "___ I borrow your pen? (kibar)", options: ["Must", "Should", "Could"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "mod2-mm-1",
        prompt: "Durum → Modal:",
        pairs: [
          { left: "Geçmiş yetenek", right: "could" },
          { left: "Kibar rica", right: "could" },
          { left: "Şimdiki yetenek", right: "can" },
          { left: "Geçmişte yetenek yok", right: "couldn't" },
        ],
      },
    ],
  },

  "mod-3": {
    "word-scramble": [
      { type: "word-scramble", id: "mod3-ws-1", answer: "should", hint: "You ___ drink water." },
      { type: "word-scramble", id: "mod3-ws-2", answer: "shouldn't", hint: "You ___ smoke." },
      { type: "word-scramble", id: "mod3-ws-3", answer: "Should", hint: "___ I call him?" },
      { type: "word-scramble", id: "mod3-ws-4", answer: "advice", hint: "'should' expresses ___." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "mod3-fm-1", tokens: ["You", "should", "to", "study"], wrongIndex: 2, correction: "—" },
      { type: "find-mistake", id: "mod3-fm-2", tokens: ["She", "shoulds", "rest"], wrongIndex: 1, correction: "should" },
      { type: "find-mistake", id: "mod3-fm-3", tokens: ["Do", "you", "should", "go"], wrongIndex: 0, correction: "Should" },
      { type: "find-mistake", id: "mod3-fm-4", tokens: ["He", "should", "drives", "slowly"], wrongIndex: 2, correction: "drive" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "mod3-dd-1", sentence: "You ___ get more sleep.", options: ["shoulds", "should", "must"], answerIndex: 1 },
      { type: "drag-drop", id: "mod3-dd-2", sentence: "He ___ drive so fast.", options: ["should", "shouldn't", "mustn't"], answerIndex: 1 },
      { type: "drag-drop", id: "mod3-dd-3", sentence: "___ I apologize?", options: ["Do", "Should", "Must"], answerIndex: 1 },
      { type: "drag-drop", id: "mod3-dd-4", sentence: "We ___ help our friends.", options: ["should", "shouldn't", "mustn't"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "mod3-mm-1",
        prompt: "Durum → Cümle:",
        pairs: [
          { left: "Sağlığı için", right: "You should drink water." },
          { left: "Zararlı olduğu için", right: "You shouldn't smoke." },
          { left: "Karar için", right: "Should I call him?" },
          { left: "Tutum için", right: "You should be kind." },
        ],
      },
    ],
  },

  "mod-4": {
    "word-scramble": [
      { type: "word-scramble", id: "mod4-ws-1", answer: "must", hint: "You ___ wear a seatbelt." },
      { type: "word-scramble", id: "mod4-ws-2", answer: "mustn't", hint: "You ___ smoke here." },
      { type: "word-scramble", id: "mod4-ws-3", answer: "have", hint: "I ___ to go now." },
      { type: "word-scramble", id: "mod4-ws-4", answer: "to", hint: "She has ___ pay tax." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "mod4-fm-1", tokens: ["You", "musts", "stop"], wrongIndex: 1, correction: "must" },
      { type: "find-mistake", id: "mod4-fm-2", tokens: ["I", "must", "to", "go"], wrongIndex: 2, correction: "—" },
      { type: "find-mistake", id: "mod4-fm-3", tokens: ["He", "have", "to", "pay"], wrongIndex: 1, correction: "has" },
      { type: "find-mistake", id: "mod4-fm-4", tokens: ["Do", "you", "must", "leave"], wrongIndex: 0, correction: "Must" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "mod4-dd-1", sentence: "You ___ wear a helmet.", options: ["may", "must", "can"], answerIndex: 1 },
      { type: "drag-drop", id: "mod4-dd-2", sentence: "Children ___ play with matches.", options: ["must", "mustn't", "should"], answerIndex: 1 },
      { type: "drag-drop", id: "mod4-dd-3", sentence: "I ___ to work early.", options: ["must", "have", "should"], answerIndex: 1 },
      { type: "drag-drop", id: "mod4-dd-4", sentence: "She ___ be tired.", options: ["must", "should", "may"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "mod4-mm-1",
        prompt: "Kullanım → Anlam:",
        pairs: [
          { left: "You must stop.", right: "zorunluluk" },
          { left: "You mustn't smoke.", right: "yasak" },
          { left: "She must be tired.", right: "güçlü tahmin" },
          { left: "I have to work.", right: "dış zorunluluk" },
        ],
      },
    ],
  },

  "mod-5": {
    "word-scramble": [
      { type: "word-scramble", id: "mod5-ws-1", answer: "may", hint: "It ___ rain." },
      { type: "word-scramble", id: "mod5-ws-2", answer: "might", hint: "She ___ come." },
      { type: "word-scramble", id: "mod5-ws-3", answer: "May", hint: "___ I come in?" },
      { type: "word-scramble", id: "mod5-ws-4", answer: "possibility", hint: "may / might = ___" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "mod5-fm-1", tokens: ["She", "mights", "come"], wrongIndex: 1, correction: "might" },
      { type: "find-mistake", id: "mod5-fm-2", tokens: ["He", "may", "to", "be", "late"], wrongIndex: 2, correction: "—" },
      { type: "find-mistake", id: "mod5-fm-3", tokens: ["Do", "you", "may", "help"], wrongIndex: 0, correction: "May" },
      { type: "find-mistake", id: "mod5-fm-4", tokens: ["It", "mays", "rain"], wrongIndex: 1, correction: "may" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "mod5-dd-1", sentence: "It ___ rain tomorrow.", options: ["might", "musts", "should"], answerIndex: 0 },
      { type: "drag-drop", id: "mod5-dd-2", sentence: "___ I come in?", options: ["Must", "Should", "May"], answerIndex: 2 },
      { type: "drag-drop", id: "mod5-dd-3", sentence: "He ___ be tired.", options: ["might", "mights", "is might"], answerIndex: 0 },
      { type: "drag-drop", id: "mod5-dd-4", sentence: "They ___ not know.", options: ["may", "mays", "don't may"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "mod5-mm-1",
        prompt: "Cümle → Anlam:",
        pairs: [
          { left: "It may rain.", right: "olasılık" },
          { left: "May I come in?", right: "kibar izin" },
          { left: "He might be late.", right: "olasılık" },
          { left: "They may not agree.", right: "olumsuz olasılık" },
        ],
      },
    ],
  },

  "mod-6": {
    "word-scramble": [
      { type: "word-scramble", id: "mod6-ws-1", answer: "must", hint: "You ___ wear a seatbelt." },
      { type: "word-scramble", id: "mod6-ws-2", answer: "could", hint: "I ___ swim at six." },
      { type: "word-scramble", id: "mod6-ws-3", answer: "should", hint: "You ___ study harder." },
      { type: "word-scramble", id: "mod6-ws-4", answer: "might", hint: "It ___ rain." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "mod6-fm-1", tokens: ["She", "musts", "finish"], wrongIndex: 1, correction: "must" },
      { type: "find-mistake", id: "mod6-fm-2", tokens: ["They", "should", "to", "rest"], wrongIndex: 2, correction: "—" },
      { type: "find-mistake", id: "mod6-fm-3", tokens: ["Do", "I", "may", "open"], wrongIndex: 0, correction: "May" },
      { type: "find-mistake", id: "mod6-fm-4", tokens: ["He", "must", "to", "pay"], wrongIndex: 2, correction: "—" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "mod6-dd-1", sentence: "You ___ smoke here.", options: ["may", "mustn't", "can"], answerIndex: 1 },
      { type: "drag-drop", id: "mod6-dd-2", sentence: "I ___ swim at six.", options: ["can", "could", "must"], answerIndex: 1 },
      { type: "drag-drop", id: "mod6-dd-3", sentence: "___ I borrow your book?", options: ["Do", "Must", "May"], answerIndex: 2 },
      { type: "drag-drop", id: "mod6-dd-4", sentence: "You ___ study harder.", options: ["must", "should", "could"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "mod6-mm-1",
        prompt: "Modal → Ana anlam:",
        pairs: [
          { left: "can", right: "yetenek / izin" },
          { left: "could", right: "geçmiş yetenek / rica" },
          { left: "should", right: "tavsiye" },
          { left: "must", right: "zorunluluk" },
        ],
      },
    ],
  },

  "cond-1": {
    "word-scramble": [
      { type: "word-scramble", id: "cond1-ws-1", answer: "boils", hint: "If you heat water, it ___." },
      { type: "word-scramble", id: "cond1-ws-2", answer: "melts", hint: "Ice ___ if you heat it." },
      { type: "word-scramble", id: "cond1-ws-3", answer: "freezes", hint: "Water ___ at 0°C." },
      { type: "word-scramble", id: "cond1-ws-4", answer: "grow", hint: "If the sun shines, plants ___." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "cond1-fm-1", tokens: ["If", "you", "heat", "water", "it", "will", "boils"], wrongIndex: 5, correction: "—" },
      { type: "find-mistake", id: "cond1-fm-2", tokens: ["If", "the", "sun", "shined", "plants", "grow"], wrongIndex: 3, correction: "shines" },
      { type: "find-mistake", id: "cond1-fm-3", tokens: ["Plants", "die", "if", "they", "won't", "get", "water"], wrongIndex: 4, correction: "don't" },
      { type: "find-mistake", id: "cond1-fm-4", tokens: ["If", "babies", "are", "hungry", "they", "cried"], wrongIndex: 5, correction: "cry" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "cond1-dd-1", sentence: "If you heat water, it ___.", options: ["boils", "will boil", "boiled"], answerIndex: 0 },
      { type: "drag-drop", id: "cond1-dd-2", sentence: "If it ___ cold, ice forms.", options: ["will get", "gets", "got"], answerIndex: 1 },
      { type: "drag-drop", id: "cond1-dd-3", sentence: "Plants die if they ___ water.", options: ["won't get", "don't get", "didn't get"], answerIndex: 1 },
      { type: "drag-drop", id: "cond1-dd-4", sentence: "If you mix red and blue, you ___ purple.", options: ["will get", "get", "got"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "cond1-mm-1",
        prompt: "Sebep → Sonuç:",
        pairs: [
          { left: "heat water", right: "it boils" },
          { left: "heat ice", right: "it melts" },
          { left: "press button", right: "light comes on" },
          { left: "no water", right: "plants die" },
        ],
      },
    ],
  },

  "cond-2": {
    "word-scramble": [
      { type: "word-scramble", id: "cond2-ws-1", answer: "will", hint: "If it rains, I ___ stay home." },
      { type: "word-scramble", id: "cond2-ws-2", answer: "rains", hint: "If it ___, I'll take an umbrella." },
      { type: "word-scramble", id: "cond2-ws-3", answer: "study", hint: "If you ___, you'll pass." },
      { type: "word-scramble", id: "cond2-ws-4", answer: "tell", hint: "I'll ___ you if I see him." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "cond2-fm-1", tokens: ["If", "it", "will", "rain", "I", "stay"], wrongIndex: 2, correction: "—" },
      { type: "find-mistake", id: "cond2-fm-2", tokens: ["If", "you", "study", "you", "pass"], wrongIndex: 4, correction: "will pass" },
      { type: "find-mistake", id: "cond2-fm-3", tokens: ["I", "tell", "you", "if", "I", "see", "him"], wrongIndex: 1, correction: "will tell" },
      { type: "find-mistake", id: "cond2-fm-4", tokens: ["If", "she", "will", "call", "I", "help"], wrongIndex: 2, correction: "—" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "cond2-dd-1", sentence: "If it ___, I'll stay home.", options: ["rains", "will rain", "rained"], answerIndex: 0 },
      { type: "drag-drop", id: "cond2-dd-2", sentence: "If you study hard, you ___.", options: ["pass", "will pass", "passed"], answerIndex: 1 },
      { type: "drag-drop", id: "cond2-dd-3", sentence: "We ___ late if we don't hurry.", options: ["are", "will be", "were"], answerIndex: 1 },
      { type: "drag-drop", id: "cond2-dd-4", sentence: "If he ___ me, I'll help.", options: ["calls", "will call", "called"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "cond2-mm-1",
        prompt: "If clause → Main clause:",
        pairs: [
          { left: "If it rains,", right: "I'll stay home." },
          { left: "If you study,", right: "you'll pass." },
          { left: "If we don't hurry,", right: "we'll be late." },
          { left: "If I have time,", right: "I'll visit you." },
        ],
      },
    ],
  },

  "cond-3": {
    "word-scramble": [
      { type: "word-scramble", id: "cond3-ws-1", answer: "were", hint: "If I ___ rich, I would travel." },
      { type: "word-scramble", id: "cond3-ws-2", answer: "would", hint: "If I had a car, I ___ drive." },
      { type: "word-scramble", id: "cond3-ws-3", answer: "knew", hint: "If I ___ her, I'd talk to her." },
      { type: "word-scramble", id: "cond3-ws-4", answer: "travel", hint: "If I were rich, I would ___." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "cond3-fm-1", tokens: ["If", "I", "was", "rich", "I", "will", "travel"], wrongIndex: 5, correction: "would" },
      { type: "find-mistake", id: "cond3-fm-2", tokens: ["If", "she", "has", "a", "car", "she", "would", "drive"], wrongIndex: 2, correction: "had" },
      { type: "find-mistake", id: "cond3-fm-3", tokens: ["I", "will", "tell", "you", "if", "I", "knew"], wrongIndex: 1, correction: "would" },
      { type: "find-mistake", id: "cond3-fm-4", tokens: ["What", "will", "you", "do", "if", "you", "won"], wrongIndex: 1, correction: "would" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "cond3-dd-1", sentence: "If I ___ you, I would apologize.", options: ["am", "was", "were"], answerIndex: 2 },
      { type: "drag-drop", id: "cond3-dd-2", sentence: "If we had more time, we ___ travel.", options: ["will", "would", "would have"], answerIndex: 1 },
      { type: "drag-drop", id: "cond3-dd-3", sentence: "She would call if she ___ your number.", options: ["has", "will have", "knew"], answerIndex: 2 },
      { type: "drag-drop", id: "cond3-dd-4", sentence: "If he ___ harder, he would pass.", options: ["studied", "studies", "will study"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "cond3-mm-1",
        prompt: "Durum → Cümle:",
        pairs: [
          { left: "Hayali zenginlik", right: "If I were rich, I would..." },
          { left: "Tavsiye", right: "If I were you, I would..." },
          { left: "Hayali yetenek", right: "If I could fly..." },
          { left: "Hayali durum", right: "If I had a car..." },
        ],
      },
    ],
  },

  "cond-4": {
    "word-scramble": [
      { type: "word-scramble", id: "cond4-ws-1", answer: "had", hint: "If I ___ studied, I would have passed." },
      { type: "word-scramble", id: "cond4-ws-2", answer: "have", hint: "I would ___ come if I'd known." },
      { type: "word-scramble", id: "cond4-ws-3", answer: "known", hint: "If I had ___, I would have come." },
      { type: "word-scramble", id: "cond4-ws-4", answer: "regret", hint: "Type 3 = past ___ (pişmanlık)." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "cond4-fm-1", tokens: ["If", "I", "would", "have", "known"], wrongIndex: 2, correction: "had" },
      { type: "find-mistake", id: "cond4-fm-2", tokens: ["If", "he", "studied", "he", "would", "have", "passed"], wrongIndex: 2, correction: "had studied" },
      { type: "find-mistake", id: "cond4-fm-3", tokens: ["We", "will", "have", "won", "if", "had", "played"], wrongIndex: 1, correction: "would" },
      { type: "find-mistake", id: "cond4-fm-4", tokens: ["If", "they", "caught", "the", "train", "would"], wrongIndex: 2, correction: "had caught" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "cond4-dd-1", sentence: "If I ___ studied, I would have passed.", options: ["have", "had", "would have"], answerIndex: 1 },
      { type: "drag-drop", id: "cond4-dd-2", sentence: "She ___ helped if she had known.", options: ["will have", "would have", "had"], answerIndex: 1 },
      { type: "drag-drop", id: "cond4-dd-3", sentence: "If he ___ me, I would have answered.", options: ["called", "had called", "would call"], answerIndex: 1 },
      { type: "drag-drop", id: "cond4-dd-4", sentence: "I would have gone if I ___ invited.", options: ["were", "had been", "was"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "cond4-mm-1",
        prompt: "If clause → Main clause (past):",
        pairs: [
          { left: "If I had studied,", right: "I would have passed." },
          { left: "If I had known,", right: "I would have come." },
          { left: "If we had left,", right: "we wouldn't have missed it." },
          { left: "If they had called,", right: "we would have answered." },
        ],
      },
    ],
  },

  "cond-5": {
    "word-scramble": [
      { type: "word-scramble", id: "cond5-ws-1", answer: "when", hint: "Call me ___ you get home." },
      { type: "word-scramble", id: "cond5-ws-2", answer: "if", hint: "I'll come ___ you want." },
      { type: "word-scramble", id: "cond5-ws-3", answer: "unless", hint: "I won't come ___ you invite me." },
      { type: "word-scramble", id: "cond5-ws-4", answer: "not", hint: "Unless = if ___." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "cond5-fm-1", tokens: ["Unless", "you", "don't", "study"], wrongIndex: 2, correction: "—" },
      { type: "find-mistake", id: "cond5-fm-2", tokens: ["When", "you", "will", "come", "I'm", "happy"], wrongIndex: 2, correction: "—" },
      { type: "find-mistake", id: "cond5-fm-3", tokens: ["If", "she", "will", "call", "I'll", "answer"], wrongIndex: 2, correction: "—" },
      { type: "find-mistake", id: "cond5-fm-4", tokens: ["I'll", "call", "when", "I", "will", "arrive"], wrongIndex: 4, correction: "—" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "cond5-dd-1", sentence: "Call me ___ you get home.", options: ["if", "when", "unless"], answerIndex: 1 },
      { type: "drag-drop", id: "cond5-dd-2", sentence: "I'll come ___ you want me to.", options: ["if", "when", "unless"], answerIndex: 0 },
      { type: "drag-drop", id: "cond5-dd-3", sentence: "You'll fail ___ you study.", options: ["if", "when", "unless"], answerIndex: 2 },
      { type: "drag-drop", id: "cond5-dd-4", sentence: "___ I see him, I'll tell him.", options: ["If", "When", "Unless"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "cond5-mm-1",
        prompt: "Anlam → Bağlaç:",
        pairs: [
          { left: "Kesinlikle olacak", right: "when" },
          { left: "Olma olasılığı", right: "if" },
          { left: "= if not", right: "unless" },
          { left: "Soru: ya da", right: "whether" },
        ],
      },
    ],
  },

  "cond-6": {
    "word-scramble": [
      { type: "word-scramble", id: "cond6-ws-1", answer: "boils", hint: "Water ___ at 100°C." },
      { type: "word-scramble", id: "cond6-ws-2", answer: "would", hint: "If I had money, I ___ buy it." },
      { type: "word-scramble", id: "cond6-ws-3", answer: "had", hint: "If I ___ known, I would have come." },
      { type: "word-scramble", id: "cond6-ws-4", answer: "unless", hint: "You'll be late ___ you hurry." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "cond6-fm-1", tokens: ["If", "I", "will", "have", "time", "I", "call"], wrongIndex: 2, correction: "—" },
      { type: "find-mistake", id: "cond6-fm-2", tokens: ["If", "I", "was", "you", "I'd", "go"], wrongIndex: 2, correction: "were" },
      { type: "find-mistake", id: "cond6-fm-3", tokens: ["If", "I", "would", "have", "known"], wrongIndex: 2, correction: "had" },
      { type: "find-mistake", id: "cond6-fm-4", tokens: ["When", "she", "will", "arrive", "tell", "her"], wrongIndex: 2, correction: "—" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "cond6-dd-1", sentence: "If you heat water, it ___.", options: ["boils", "will boil", "boiled"], answerIndex: 0 },
      { type: "drag-drop", id: "cond6-dd-2", sentence: "If I ___ rich, I would travel.", options: ["am", "was", "were"], answerIndex: 2 },
      { type: "drag-drop", id: "cond6-dd-3", sentence: "If he ___ called, I would have answered.", options: ["have", "had", "would have"], answerIndex: 1 },
      { type: "drag-drop", id: "cond6-dd-4", sentence: "We'll be late ___ we hurry.", options: ["if", "unless", "when"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "cond6-mm-1",
        prompt: "Tip → Yapı:",
        pairs: [
          { left: "Type 0", right: "if + PS, PS" },
          { left: "Type 1", right: "if + PS, will" },
          { left: "Type 2", right: "if + past, would" },
          { left: "Type 3", right: "if + past perfect, would have" },
        ],
      },
    ],
  },

  "pass-1": {
    "word-scramble": [
      { type: "word-scramble", id: "pass1-ws-1", answer: "spoken", hint: "English is ___ here." },
      { type: "word-scramble", id: "pass1-ws-2", answer: "made", hint: "Cars are ___ in Germany." },
      { type: "word-scramble", id: "pass1-ws-3", answer: "cleaned", hint: "The office is ___ daily." },
      { type: "word-scramble", id: "pass1-ws-4", answer: "by", hint: "Made ___ my mother." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pass1-fm-1", tokens: ["English", "speaks", "here"], wrongIndex: 1, correction: "is spoken" },
      { type: "find-mistake", id: "pass1-fm-2", tokens: ["These", "cars", "is", "made"], wrongIndex: 2, correction: "are" },
      { type: "find-mistake", id: "pass1-fm-3", tokens: ["The", "letter", "is", "writes"], wrongIndex: 3, correction: "written" },
      { type: "find-mistake", id: "pass1-fm-4", tokens: ["The", "song", "is", "love"], wrongIndex: 3, correction: "loved" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pass1-dd-1", sentence: "English ___ spoken here.", options: ["is", "are", "be"], answerIndex: 0 },
      { type: "drag-drop", id: "pass1-dd-2", sentence: "These cars are ___ in Germany.", options: ["make", "made", "making"], answerIndex: 1 },
      { type: "drag-drop", id: "pass1-dd-3", sentence: "The rooms ___ cleaned daily.", options: ["is", "are", "am"], answerIndex: 1 },
      { type: "drag-drop", id: "pass1-dd-4", sentence: "The song is ___ by many.", options: ["love", "loved", "loves"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pass1-mm-1",
        prompt: "Active → Passive:",
        pairs: [
          { left: "They speak English.", right: "English is spoken." },
          { left: "She writes letters.", right: "Letters are written." },
          { left: "He makes cakes.", right: "Cakes are made." },
          { left: "We clean rooms.", right: "Rooms are cleaned." },
        ],
      },
    ],
  },

  "pass-2": {
    "word-scramble": [
      { type: "word-scramble", id: "pass2-ws-1", answer: "built", hint: "The bridge was ___ in 1900." },
      { type: "word-scramble", id: "pass2-ws-2", answer: "was", hint: "The cake ___ eaten." },
      { type: "word-scramble", id: "pass2-ws-3", answer: "were", hint: "The keys ___ found." },
      { type: "word-scramble", id: "pass2-ws-4", answer: "written", hint: "The letter was ___ by her." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pass2-fm-1", tokens: ["The", "letters", "was", "written"], wrongIndex: 2, correction: "were" },
      { type: "find-mistake", id: "pass2-fm-2", tokens: ["The", "book", "was", "wrote"], wrongIndex: 3, correction: "written" },
      { type: "find-mistake", id: "pass2-fm-3", tokens: ["The", "windows", "was", "broken"], wrongIndex: 2, correction: "were" },
      { type: "find-mistake", id: "pass2-fm-4", tokens: ["The", "film", "were", "made", "in", "1985"], wrongIndex: 2, correction: "was" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pass2-dd-1", sentence: "The bridge ___ built in 1900.", options: ["is", "was", "were"], answerIndex: 1 },
      { type: "drag-drop", id: "pass2-dd-2", sentence: "The letters ___ written last night.", options: ["was", "were", "are"], answerIndex: 1 },
      { type: "drag-drop", id: "pass2-dd-3", sentence: "The book was ___ by Shakespeare.", options: ["wrote", "written", "writes"], answerIndex: 1 },
      { type: "drag-drop", id: "pass2-dd-4", sentence: "The dinner was ___ by my dad.", options: ["cook", "cooked", "cooks"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pass2-mm-1",
        prompt: "Active → Passive (past):",
        pairs: [
          { left: "They built it.", right: "It was built." },
          { left: "She wrote the book.", right: "The book was written." },
          { left: "He broke the vase.", right: "The vase was broken." },
          { left: "We made the cake.", right: "The cake was made." },
        ],
      },
    ],
  },

  "pass-3": {
    "word-scramble": [
      { type: "word-scramble", id: "pass3-ws-1", answer: "be", hint: "The work will ___ finished." },
      { type: "word-scramble", id: "pass3-ws-2", answer: "delivered", hint: "Letters will be ___." },
      { type: "word-scramble", id: "pass3-ws-3", answer: "built", hint: "A school will be ___." },
      { type: "word-scramble", id: "pass3-ws-4", answer: "made", hint: "The decision will be ___." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pass3-fm-1", tokens: ["The", "project", "will", "finish"], wrongIndex: 3, correction: "be finished" },
      { type: "find-mistake", id: "pass3-fm-2", tokens: ["The", "school", "will", "be", "build"], wrongIndex: 4, correction: "built" },
      { type: "find-mistake", id: "pass3-fm-3", tokens: ["The", "prize", "will", "given"], wrongIndex: 3, correction: "be given" },
      { type: "find-mistake", id: "pass3-fm-4", tokens: ["The", "decision", "will", "made"], wrongIndex: 3, correction: "be made" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pass3-dd-1", sentence: "The work ___ finished next week.", options: ["will", "will be", "is"], answerIndex: 1 },
      { type: "drag-drop", id: "pass3-dd-2", sentence: "The windows will be ___ tomorrow.", options: ["clean", "cleaned", "cleaning"], answerIndex: 1 },
      { type: "drag-drop", id: "pass3-dd-3", sentence: "The decision will be ___ by the committee.", options: ["make", "made", "making"], answerIndex: 1 },
      { type: "drag-drop", id: "pass3-dd-4", sentence: "The package will be ___ at 10.", options: ["deliver", "delivered", "delivering"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pass3-mm-1",
        prompt: "Active → Passive (future):",
        pairs: [
          { left: "They will build it.", right: "It will be built." },
          { left: "She will write the book.", right: "The book will be written." },
          { left: "We will send the letters.", right: "The letters will be sent." },
          { left: "He will open the door.", right: "The door will be opened." },
        ],
      },
    ],
  },

  "pass-4": {
    "word-scramble": [
      { type: "word-scramble", id: "pass4-ws-1", answer: "be", hint: "The work must ___ done." },
      { type: "word-scramble", id: "pass4-ws-2", answer: "solved", hint: "This can be ___." },
      { type: "word-scramble", id: "pass4-ws-3", answer: "locked", hint: "The door should be ___." },
      { type: "word-scramble", id: "pass4-ws-4", answer: "read", hint: "This book should be ___." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pass4-fm-1", tokens: ["This", "problem", "can", "solved"], wrongIndex: 3, correction: "be solved" },
      { type: "find-mistake", id: "pass4-fm-2", tokens: ["The", "work", "must", "finish"], wrongIndex: 3, correction: "be finished" },
      { type: "find-mistake", id: "pass4-fm-3", tokens: ["The", "mess", "must", "be", "clean"], wrongIndex: 4, correction: "cleaned" },
      { type: "find-mistake", id: "pass4-fm-4", tokens: ["The", "door", "should", "locked"], wrongIndex: 3, correction: "be locked" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pass4-dd-1", sentence: "The work must ___ finished.", options: ["is", "be", "are"], answerIndex: 1 },
      { type: "drag-drop", id: "pass4-dd-2", sentence: "This can ___ solved.", options: ["be", "is", "was"], answerIndex: 0 },
      { type: "drag-drop", id: "pass4-dd-3", sentence: "The door should be ___.", options: ["lock", "locked", "locking"], answerIndex: 1 },
      { type: "drag-drop", id: "pass4-dd-4", sentence: "The mess must be ___.", options: ["clean", "cleaned", "cleaning"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pass4-mm-1",
        prompt: "Modal → Passive:",
        pairs: [
          { left: "can", right: "can be + V3" },
          { left: "must", right: "must be + V3" },
          { left: "should", right: "should be + V3" },
          { left: "will", right: "will be + V3" },
        ],
      },
    ],
  },

  "pass-5": {
    "word-scramble": [
      { type: "word-scramble", id: "pass5-ws-1", answer: "by", hint: "Broken ___ John." },
      { type: "word-scramble", id: "pass5-ws-2", answer: "made", hint: "The cake was ___ by Maria." },
      { type: "word-scramble", id: "pass5-ws-3", answer: "are", hint: "Poems ___ written by her." },
      { type: "word-scramble", id: "pass5-ws-4", answer: "written", hint: "The book was ___ in 2015." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pass5-fm-1", tokens: ["The", "house", "built", "by", "them"], wrongIndex: 2, correction: "was built" },
      { type: "find-mistake", id: "pass5-fm-2", tokens: ["The", "cake", "was", "make"], wrongIndex: 3, correction: "made" },
      { type: "find-mistake", id: "pass5-fm-3", tokens: ["Poems", "is", "written", "by", "her"], wrongIndex: 1, correction: "are" },
      { type: "find-mistake", id: "pass5-fm-4", tokens: ["The", "report", "will", "submitted"], wrongIndex: 3, correction: "be submitted" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pass5-dd-1", sentence: "The house ___ built by them.", options: ["is", "was", "were"], answerIndex: 1 },
      { type: "drag-drop", id: "pass5-dd-2", sentence: "Poems ___ written by her.", options: ["is", "are", "was"], answerIndex: 1 },
      { type: "drag-drop", id: "pass5-dd-3", sentence: "The vase was ___ by John.", options: ["break", "broke", "broken"], answerIndex: 2 },
      { type: "drag-drop", id: "pass5-dd-4", sentence: "The letter has been ___ by my teacher.", options: ["read", "reads", "reading"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pass5-mm-1",
        prompt: "Active → Passive adımları:",
        pairs: [
          { left: "Object", right: "yeni özne" },
          { left: "Verb", right: "be + V3" },
          { left: "Subject", right: "by + object / silinebilir" },
          { left: "Tense", right: "be formunda görünür" },
        ],
      },
    ],
  },

  "pass-6": {
    "word-scramble": [
      { type: "word-scramble", id: "pass6-ws-1", answer: "spoken", hint: "English is ___ here." },
      { type: "word-scramble", id: "pass6-ws-2", answer: "built", hint: "The bridge was ___ in 1900." },
      { type: "word-scramble", id: "pass6-ws-3", answer: "finished", hint: "The project will be ___." },
      { type: "word-scramble", id: "pass6-ws-4", answer: "made", hint: "The decision must be ___." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pass6-fm-1", tokens: ["The", "bridge", "built", "in", "1900"], wrongIndex: 2, correction: "was built" },
      { type: "find-mistake", id: "pass6-fm-2", tokens: ["These", "cars", "are", "make"], wrongIndex: 3, correction: "made" },
      { type: "find-mistake", id: "pass6-fm-3", tokens: ["The", "work", "must", "finished"], wrongIndex: 3, correction: "be finished" },
      { type: "find-mistake", id: "pass6-fm-4", tokens: ["The", "book", "was", "publish"], wrongIndex: 3, correction: "published" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pass6-dd-1", sentence: "English ___ spoken here.", options: ["is", "are", "was"], answerIndex: 0 },
      { type: "drag-drop", id: "pass6-dd-2", sentence: "The bridge ___ built in 1900.", options: ["is", "was", "will be"], answerIndex: 1 },
      { type: "drag-drop", id: "pass6-dd-3", sentence: "The project ___ finished next week.", options: ["will", "will be", "is"], answerIndex: 1 },
      { type: "drag-drop", id: "pass6-dd-4", sentence: "The work must ___ completed.", options: ["is", "be", "was"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pass6-mm-1",
        prompt: "Zaman → Passive:",
        pairs: [
          { left: "Present Simple", right: "is/are + V3" },
          { left: "Past Simple", right: "was/were + V3" },
          { left: "Future", right: "will be + V3" },
          { left: "Modal", right: "modal + be + V3" },
        ],
      },
    ],
  },

  "pcp-1": {
    "word-scramble": [
      { type: "word-scramble", id: "pcp1-ws-1", answer: "was", hint: "I ___ watching TV." },
      { type: "word-scramble", id: "pcp1-ws-2", answer: "were", hint: "They ___ playing." },
      { type: "word-scramble", id: "pcp1-ws-3", answer: "reading", hint: "She was ___ a book." },
      { type: "word-scramble", id: "pcp1-ws-4", answer: "sleeping", hint: "We were ___ at midnight." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pcp1-fm-1", tokens: ["They", "was", "playing"], wrongIndex: 1, correction: "were" },
      { type: "find-mistake", id: "pcp1-fm-2", tokens: ["I", "were", "sleeping"], wrongIndex: 1, correction: "was" },
      { type: "find-mistake", id: "pcp1-fm-3", tokens: ["She", "was", "read", "a", "book"], wrongIndex: 2, correction: "reading" },
      { type: "find-mistake", id: "pcp1-fm-4", tokens: ["We", "were", "study"], wrongIndex: 2, correction: "studying" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pcp1-dd-1", sentence: "I ___ watching TV at 8.", options: ["was", "were", "did"], answerIndex: 0 },
      { type: "drag-drop", id: "pcp1-dd-2", sentence: "They ___ playing football.", options: ["was", "were", "did"], answerIndex: 1 },
      { type: "drag-drop", id: "pcp1-dd-3", sentence: "She was ___ coffee.", options: ["drink", "drank", "drinking"], answerIndex: 2 },
      { type: "drag-drop", id: "pcp1-dd-4", sentence: "We ___ sleeping at midnight.", options: ["was", "were", "are"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pcp1-mm-1",
        prompt: "Özne → was/were:",
        pairs: [
          { left: "I", right: "was" },
          { left: "He/She/It", right: "was" },
          { left: "You", right: "were" },
          { left: "We/They", right: "were" },
        ],
      },
    ],
  },

  "pcp-2": {
    "word-scramble": [
      { type: "word-scramble", id: "pcp2-ws-1", answer: "wasn't", hint: "I ___ sleeping." },
      { type: "word-scramble", id: "pcp2-ws-2", answer: "weren't", hint: "They ___ working." },
      { type: "word-scramble", id: "pcp2-ws-3", answer: "Were", hint: "___ you listening?" },
      { type: "word-scramble", id: "pcp2-ws-4", answer: "Was", hint: "___ she working at 10?" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pcp2-fm-1", tokens: ["Did", "you", "were", "sleeping"], wrongIndex: 0, correction: "Were" },
      { type: "find-mistake", id: "pcp2-fm-2", tokens: ["They", "wasn't", "working"], wrongIndex: 1, correction: "weren't" },
      { type: "find-mistake", id: "pcp2-fm-3", tokens: ["Was", "they", "dancing"], wrongIndex: 0, correction: "Were" },
      { type: "find-mistake", id: "pcp2-fm-4", tokens: ["I", "weren't", "watching"], wrongIndex: 1, correction: "wasn't" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pcp2-dd-1", sentence: "I ___ sleeping.", options: ["wasn't", "weren't", "didn't"], answerIndex: 0 },
      { type: "drag-drop", id: "pcp2-dd-2", sentence: "___ you working?", options: ["Did", "Was", "Were"], answerIndex: 2 },
      { type: "drag-drop", id: "pcp2-dd-3", sentence: "She ___ reading.", options: ["wasn't", "weren't", "didn't"], answerIndex: 0 },
      { type: "drag-drop", id: "pcp2-dd-4", sentence: "They ___ playing.", options: ["wasn't", "weren't", "didn't"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pcp2-mm-1",
        prompt: "Olumlu → Soru:",
        pairs: [
          { left: "I was reading.", right: "Was I reading?" },
          { left: "She was cooking.", right: "Was she cooking?" },
          { left: "We were playing.", right: "Were we playing?" },
          { left: "They were eating.", right: "Were they eating?" },
        ],
      },
    ],
  },

  "pcp-3": {
    "word-scramble": [
      { type: "word-scramble", id: "pcp3-ws-1", answer: "when", hint: "I was reading ___ you came." },
      { type: "word-scramble", id: "pcp3-ws-2", answer: "while", hint: "___ I was cooking, the bell rang." },
      { type: "word-scramble", id: "pcp3-ws-3", answer: "rang", hint: "The bell ___ while I was cooking." },
      { type: "word-scramble", id: "pcp3-ws-4", answer: "walking", hint: "While I was ___, it rained." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pcp3-fm-1", tokens: ["While", "I", "walked", "it", "rained"], wrongIndex: 2, correction: "was walking" },
      { type: "find-mistake", id: "pcp3-fm-2", tokens: ["When", "I", "cooked", "the", "bell", "was", "ringing"], wrongIndex: 5, correction: "—" },
      { type: "find-mistake", id: "pcp3-fm-3", tokens: ["I", "slept", "when", "you", "called"], wrongIndex: 1, correction: "was sleeping" },
      { type: "find-mistake", id: "pcp3-fm-4", tokens: ["While", "she", "studied", "I", "watched"], wrongIndex: 2, correction: "was studying" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pcp3-dd-1", sentence: "I ___ reading when you came.", options: ["read", "was reading", "have read"], answerIndex: 1 },
      { type: "drag-drop", id: "pcp3-dd-2", sentence: "While I was cooking, the bell ___.", options: ["was ringing", "rang", "rings"], answerIndex: 1 },
      { type: "drag-drop", id: "pcp3-dd-3", sentence: "When he ___, I was sleeping.", options: ["called", "was calling", "calls"], answerIndex: 0 },
      { type: "drag-drop", id: "pcp3-dd-4", sentence: "While I ___ home, it started to rain.", options: ["walked", "was walking", "walks"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pcp3-mm-1",
        prompt: "Süre tipi → Zaman:",
        pairs: [
          { left: "Süren eylem", right: "Past Continuous" },
          { left: "Kesen kısa eylem", right: "Past Simple" },
          { left: "İki paralel eylem", right: "while + Past Continuous" },
          { left: "Kesinti noktası", right: "when + Past Simple" },
        ],
      },
    ],
  },

  "pcp-4": {
    "word-scramble": [
      { type: "word-scramble", id: "pcp4-ws-1", answer: "had", hint: "I ___ seen it before." },
      { type: "word-scramble", id: "pcp4-ws-2", answer: "seen", hint: "I had ___ the film." },
      { type: "word-scramble", id: "pcp4-ws-3", answer: "left", hint: "The train had already ___." },
      { type: "word-scramble", id: "pcp4-ws-4", answer: "finished", hint: "She had ___ by 6." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pcp4-fm-1", tokens: ["I", "had", "saw", "the", "film"], wrongIndex: 2, correction: "seen" },
      { type: "find-mistake", id: "pcp4-fm-2", tokens: ["She", "had", "cooks", "dinner"], wrongIndex: 2, correction: "cooked" },
      { type: "find-mistake", id: "pcp4-fm-3", tokens: ["They", "has", "lived", "there"], wrongIndex: 1, correction: "had" },
      { type: "find-mistake", id: "pcp4-fm-4", tokens: ["He", "had", "eat", "already"], wrongIndex: 2, correction: "eaten" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pcp4-dd-1", sentence: "When I arrived, the train had ___ left.", options: ["already", "yet", "just"], answerIndex: 0 },
      { type: "drag-drop", id: "pcp4-dd-2", sentence: "She had ___ dinner before he came.", options: ["cook", "cooked", "cooking"], answerIndex: 1 },
      { type: "drag-drop", id: "pcp4-dd-3", sentence: "I had ___ the book before the film.", options: ["read", "reads", "reading"], answerIndex: 0 },
      { type: "drag-drop", id: "pcp4-dd-4", sentence: "By 6 PM, he ___ left.", options: ["has", "had", "was"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pcp4-mm-1",
        prompt: "Geçmişte sıralama:",
        pairs: [
          { left: "Önce olan", right: "Past Perfect (had + V3)" },
          { left: "Sonra olan", right: "Past Simple" },
          { left: "Süren eylem", right: "Past Continuous" },
          { left: "Biten eylem", right: "Past Simple" },
        ],
      },
    ],
  },

  "pcp-5": {
    "word-scramble": [
      { type: "word-scramble", id: "pcp5-ws-1", answer: "hadn't", hint: "She ___ finished by 6." },
      { type: "word-scramble", id: "pcp5-ws-2", answer: "Had", hint: "___ you seen it?" },
      { type: "word-scramble", id: "pcp5-ws-3", answer: "gone", hint: "He hadn't ___ there." },
      { type: "word-scramble", id: "pcp5-ws-4", answer: "before", hint: "Had you eaten ___?" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pcp5-fm-1", tokens: ["Did", "you", "had", "eaten"], wrongIndex: 0, correction: "Had" },
      { type: "find-mistake", id: "pcp5-fm-2", tokens: ["He", "hadn't", "went"], wrongIndex: 2, correction: "gone" },
      { type: "find-mistake", id: "pcp5-fm-3", tokens: ["Had", "he", "leave"], wrongIndex: 2, correction: "left" },
      { type: "find-mistake", id: "pcp5-fm-4", tokens: ["They", "didn't", "met", "before"], wrongIndex: 1, correction: "hadn't" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pcp5-dd-1", sentence: "She ___ finished by 6.", options: ["haven't", "hadn't", "didn't"], answerIndex: 1 },
      { type: "drag-drop", id: "pcp5-dd-2", sentence: "___ you seen it before?", options: ["Did", "Had", "Were"], answerIndex: 1 },
      { type: "drag-drop", id: "pcp5-dd-3", sentence: "He hadn't ___ there before.", options: ["be", "been", "was"], answerIndex: 1 },
      { type: "drag-drop", id: "pcp5-dd-4", sentence: "___ he left when you called?", options: ["Did", "Had", "Was"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pcp5-mm-1",
        prompt: "Olumlu → Olumsuz/Soru:",
        pairs: [
          { left: "I had seen it.", right: "I hadn't seen it." },
          { left: "She had left.", right: "Had she left?" },
          { left: "They had eaten.", right: "They hadn't eaten." },
          { left: "He had gone.", right: "Had he gone?" },
        ],
      },
    ],
  },

  "pcp-6": {
    "word-scramble": [
      { type: "word-scramble", id: "pcp6-ws-1", answer: "watching", hint: "I was ___ TV at 8." },
      { type: "word-scramble", id: "pcp6-ws-2", answer: "were", hint: "They ___ playing." },
      { type: "word-scramble", id: "pcp6-ws-3", answer: "had", hint: "She ___ already left." },
      { type: "word-scramble", id: "pcp6-ws-4", answer: "seen", hint: "Had you ___ the film?" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "pcp6-fm-1", tokens: ["They", "was", "watching"], wrongIndex: 1, correction: "were" },
      { type: "find-mistake", id: "pcp6-fm-2", tokens: ["I", "had", "saw", "it"], wrongIndex: 2, correction: "seen" },
      { type: "find-mistake", id: "pcp6-fm-3", tokens: ["Had", "he", "leave"], wrongIndex: 2, correction: "left" },
      { type: "find-mistake", id: "pcp6-fm-4", tokens: ["While", "I", "cooked", "the", "bell", "rang"], wrongIndex: 2, correction: "was cooking" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "pcp6-dd-1", sentence: "I ___ TV at 8.", options: ["watched", "was watching", "have watched"], answerIndex: 1 },
      { type: "drag-drop", id: "pcp6-dd-2", sentence: "She had ___ before I came.", options: ["leave", "left", "leaves"], answerIndex: 1 },
      { type: "drag-drop", id: "pcp6-dd-3", sentence: "While I ___, the lights went out.", options: ["studied", "was studying", "have studied"], answerIndex: 1 },
      { type: "drag-drop", id: "pcp6-dd-4", sentence: "By 9, we ___ dinner.", options: ["finished", "had finished", "have finished"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "pcp6-mm-1",
        prompt: "Durum → Zaman:",
        pairs: [
          { left: "Saat 8'de süren eylem", right: "Past Continuous" },
          { left: "Geçmişten önceki olay", right: "Past Perfect" },
          { left: "İki paralel eylem", right: "Past Continuous + Past Continuous" },
          { left: "Kesilen eylem", right: "Past Cont + Past Simple" },
        ],
      },
    ],
  },

  "used-1": {
    "word-scramble": [
      { type: "word-scramble", id: "used1-ws-1", answer: "used", hint: "I ___ to play football." },
      { type: "word-scramble", id: "used1-ws-2", answer: "to", hint: "She used ___ live here." },
      { type: "word-scramble", id: "used1-ws-3", answer: "play", hint: "We used to ___." },
      { type: "word-scramble", id: "used1-ws-4", answer: "smoke", hint: "My dad used to ___." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "used1-fm-1", tokens: ["She", "used", "to", "lived"], wrongIndex: 3, correction: "live" },
      { type: "find-mistake", id: "used1-fm-2", tokens: ["I", "use", "to", "play"], wrongIndex: 1, correction: "used" },
      { type: "find-mistake", id: "used1-fm-3", tokens: ["He", "used", "to", "has", "long", "hair"], wrongIndex: 3, correction: "have" },
      { type: "find-mistake", id: "used1-fm-4", tokens: ["I", "used", "to", "drinks", "coffee"], wrongIndex: 3, correction: "drink" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "used1-dd-1", sentence: "I ___ play football.", options: ["use to", "used to", "am used to"], answerIndex: 1 },
      { type: "drag-drop", id: "used1-dd-2", sentence: "She used to ___ in Paris.", options: ["lived", "live", "living"], answerIndex: 1 },
      { type: "drag-drop", id: "used1-dd-3", sentence: "We used to ___ to school by bus.", options: ["go", "going", "went"], answerIndex: 0 },
      { type: "drag-drop", id: "used1-dd-4", sentence: "He used to ___ a lot.", options: ["smoke", "smokes", "smoking"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "used1-mm-1",
        prompt: "Durum → Cümle:",
        pairs: [
          { left: "Eski alışkanlık", right: "I used to + V1" },
          { left: "Geçmişte durum", right: "I used to be" },
          { left: "Artık yok", right: "used to" },
          { left: "Fiil şekli", right: "yalın (V1)" },
        ],
      },
    ],
  },

  "used-2": {
    "word-scramble": [
      { type: "word-scramble", id: "used2-ws-1", answer: "didn't", hint: "I ___ use to like coffee." },
      { type: "word-scramble", id: "used2-ws-2", answer: "use", hint: "She didn't ___ to play." },
      { type: "word-scramble", id: "used2-ws-3", answer: "travel", hint: "They didn't use to ___." },
      { type: "word-scramble", id: "used2-ws-4", answer: "wear", hint: "She didn't use to ___ glasses." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "used2-fm-1", tokens: ["She", "didn't", "used", "to", "play"], wrongIndex: 2, correction: "use" },
      { type: "find-mistake", id: "used2-fm-2", tokens: ["He", "don't", "use", "to", "smoke"], wrongIndex: 1, correction: "didn't" },
      { type: "find-mistake", id: "used2-fm-3", tokens: ["I", "didn't", "use", "to", "likes"], wrongIndex: 4, correction: "like" },
      { type: "find-mistake", id: "used2-fm-4", tokens: ["They", "didn't", "used", "to", "travel"], wrongIndex: 2, correction: "use" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "used2-dd-1", sentence: "I ___ like coffee.", options: ["don't use to", "didn't use to", "didn't used to"], answerIndex: 1 },
      { type: "drag-drop", id: "used2-dd-2", sentence: "He didn't ___ smoke.", options: ["used to", "use to", "using to"], answerIndex: 1 },
      { type: "drag-drop", id: "used2-dd-3", sentence: "She didn't use to ___ glasses.", options: ["wore", "wear", "wearing"], answerIndex: 1 },
      { type: "drag-drop", id: "used2-dd-4", sentence: "They ___ travel much.", options: ["don't use to", "didn't use to", "didn't used to"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "used2-mm-1",
        prompt: "Olumlu → Olumsuz:",
        pairs: [
          { left: "I used to smoke.", right: "I didn't use to smoke." },
          { left: "She used to live here.", right: "She didn't use to live here." },
          { left: "They used to travel.", right: "They didn't use to travel." },
          { left: "He used to work.", right: "He didn't use to work." },
        ],
      },
    ],
  },

  "used-3": {
    "word-scramble": [
      { type: "word-scramble", id: "used3-ws-1", answer: "Did", hint: "___ you use to play tennis?" },
      { type: "word-scramble", id: "used3-ws-2", answer: "use", hint: "Did he ___ to smoke?" },
      { type: "word-scramble", id: "used3-ws-3", answer: "Where", hint: "___ did you use to live?" },
      { type: "word-scramble", id: "used3-ws-4", answer: "smoke", hint: "Did you use to ___?" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "used3-fm-1", tokens: ["Do", "you", "used", "to", "play"], wrongIndex: 0, correction: "Did" },
      { type: "find-mistake", id: "used3-fm-2", tokens: ["Did", "you", "used", "to", "smoke"], wrongIndex: 2, correction: "use" },
      { type: "find-mistake", id: "used3-fm-3", tokens: ["Did", "he", "use", "to", "drinks"], wrongIndex: 4, correction: "drink" },
      { type: "find-mistake", id: "used3-fm-4", tokens: ["Where", "do", "you", "use", "to", "live"], wrongIndex: 1, correction: "did" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "used3-dd-1", sentence: "___ you use to play tennis?", options: ["Do", "Did", "Are"], answerIndex: 1 },
      { type: "drag-drop", id: "used3-dd-2", sentence: "Did he ___ smoke?", options: ["used to", "use to", "using to"], answerIndex: 1 },
      { type: "drag-drop", id: "used3-dd-3", sentence: "Where ___ you use to live?", options: ["do", "did", "are"], answerIndex: 1 },
      { type: "drag-drop", id: "used3-dd-4", sentence: "Did you use to ___ coffee?", options: ["drank", "drink", "drinks"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "used3-mm-1",
        prompt: "Olumlu → Soru:",
        pairs: [
          { left: "I used to play.", right: "Did I use to play?" },
          { left: "She used to live here.", right: "Did she use to live here?" },
          { left: "They used to travel.", right: "Did they use to travel?" },
          { left: "He used to work.", right: "Did he use to work?" },
        ],
      },
    ],
  },

  "used-4": {
    "word-scramble": [
      { type: "word-scramble", id: "used4-ws-1", answer: "visited", hint: "Yesterday I ___ my friend." },
      { type: "word-scramble", id: "used4-ws-2", answer: "used", hint: "I ___ to play every day." },
      { type: "word-scramble", id: "used4-ws-3", answer: "went", hint: "Last year I ___ to Paris." },
      { type: "word-scramble", id: "used4-ws-4", answer: "habit", hint: "'used to' = past ___" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "used4-fm-1", tokens: ["Yesterday", "I", "used", "to", "go"], wrongIndex: 2, correction: "went (no used to)" },
      { type: "find-mistake", id: "used4-fm-2", tokens: ["They", "used", "to", "move", "in", "2015"], wrongIndex: 1, correction: "moved (no used to)" },
      { type: "find-mistake", id: "used4-fm-3", tokens: ["I", "used", "to", "visit", "Rome", "last", "year"], wrongIndex: 1, correction: "visited (no used to)" },
      { type: "find-mistake", id: "used4-fm-4", tokens: ["Last", "week", "I", "used", "to", "see", "him"], wrongIndex: 3, correction: "saw (no used to)" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "used4-dd-1", sentence: "I ___ every Sunday. (alışkanlık)", options: ["went", "used to go", "was going"], answerIndex: 1 },
      { type: "drag-drop", id: "used4-dd-2", sentence: "Yesterday I ___ to the market.", options: ["went", "used to go", "was going"], answerIndex: 0 },
      { type: "drag-drop", id: "used4-dd-3", sentence: "They ___ in 2020.", options: ["visited", "used to visit", "were visiting"], answerIndex: 0 },
      { type: "drag-drop", id: "used4-dd-4", sentence: "He ___ smoke but quit.", options: ["used to", "smoked", "smokes"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "used4-mm-1",
        prompt: "Durum → Yapı:",
        pairs: [
          { left: "Her pazar (alışkanlık)", right: "used to" },
          { left: "Geçen yaz (bir kez)", right: "Past Simple" },
          { left: "Dün (belirli)", right: "Past Simple" },
          { left: "Çocukken (alışkanlık)", right: "used to" },
        ],
      },
    ],
  },

  "used-5": {
    "word-scramble": [
      { type: "word-scramble", id: "used5-ws-1", answer: "am", hint: "I ___ used to getting up early." },
      { type: "word-scramble", id: "used5-ws-2", answer: "getting", hint: "I'm used to ___ up early." },
      { type: "word-scramble", id: "used5-ws-3", answer: "get", hint: "You'll ___ used to it." },
      { type: "word-scramble", id: "used5-ws-4", answer: "living", hint: "She's used to ___ alone." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "used5-fm-1", tokens: ["I", "used", "to", "living", "here"], wrongIndex: 1, correction: "am used" },
      { type: "find-mistake", id: "used5-fm-2", tokens: ["She", "is", "used", "to", "get"], wrongIndex: 4, correction: "getting" },
      { type: "find-mistake", id: "used5-fm-3", tokens: ["He", "used", "to", "drinking", "coffee"], wrongIndex: 3, correction: "drink" },
      { type: "find-mistake", id: "used5-fm-4", tokens: ["I'm", "used", "to", "drink", "coffee"], wrongIndex: 3, correction: "drinking" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "used5-dd-1", sentence: "I'm used to ___ coffee.", options: ["drink", "drinking", "drinks"], answerIndex: 1 },
      { type: "drag-drop", id: "used5-dd-2", sentence: "She used to ___ in Paris.", options: ["live", "living", "lived"], answerIndex: 0 },
      { type: "drag-drop", id: "used5-dd-3", sentence: "We need to ___ used to it.", options: ["be", "get", "have"], answerIndex: 1 },
      { type: "drag-drop", id: "used5-dd-4", sentence: "I'm not ___ to cold weather.", options: ["use", "used", "using"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "used5-mm-1",
        prompt: "Yapı → Anlam:",
        pairs: [
          { left: "used to + V1", right: "geçmiş alışkanlık" },
          { left: "be used to + V-ing", right: "şu an alışkın" },
          { left: "get used to + V-ing", right: "alışmak (süreç)" },
          { left: "Fiil şekli", right: "farklı: V1 vs. V-ing" },
        ],
      },
    ],
  },

  "used-6": {
    "word-scramble": [
      { type: "word-scramble", id: "used6-ws-1", answer: "used", hint: "I ___ to play football." },
      { type: "word-scramble", id: "used6-ws-2", answer: "use", hint: "Did you ___ to play tennis?" },
      { type: "word-scramble", id: "used6-ws-3", answer: "visited", hint: "Last year we ___ Italy." },
      { type: "word-scramble", id: "used6-ws-4", answer: "get", hint: "You'll ___ used to it." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "used6-fm-1", tokens: ["She", "didn't", "used", "to", "travel"], wrongIndex: 2, correction: "use" },
      { type: "find-mistake", id: "used6-fm-2", tokens: ["I'm", "used", "to", "drink", "coffee"], wrongIndex: 3, correction: "drinking" },
      { type: "find-mistake", id: "used6-fm-3", tokens: ["Yesterday", "I", "used", "to", "visit", "grandma"], wrongIndex: 2, correction: "visited (no used to)" },
      { type: "find-mistake", id: "used6-fm-4", tokens: ["Do", "you", "use", "to", "live", "here"], wrongIndex: 0, correction: "Did" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "used6-dd-1", sentence: "My dad ___ smoke a lot.", options: ["use to", "used to", "is used to"], answerIndex: 1 },
      { type: "drag-drop", id: "used6-dd-2", sentence: "I'm not used to ___ alone.", options: ["live", "lives", "living"], answerIndex: 2 },
      { type: "drag-drop", id: "used6-dd-3", sentence: "___ you use to live here?", options: ["Do", "Did", "Are"], answerIndex: 1 },
      { type: "drag-drop", id: "used6-dd-4", sentence: "You'll ___ used to it soon.", options: ["be", "get", "have"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "used6-mm-1",
        prompt: "Durum → Yapı:",
        pairs: [
          { left: "Eski alışkanlık", right: "used to + V1" },
          { left: "Alışkın olmak", right: "be used to + V-ing" },
          { left: "Alışmak", right: "get used to + V-ing" },
          { left: "Belirli zaman", right: "Past Simple" },
        ],
      },
    ],
  },

  "comp-1": {
    "word-scramble": [
      { type: "word-scramble", id: "comp1-ws-1", answer: "taller", hint: "She is ___ than me." },
      { type: "word-scramble", id: "comp1-ws-2", answer: "biggest", hint: "The ___ room in the house." },
      { type: "word-scramble", id: "comp1-ws-3", answer: "hotter", hint: "Today is ___ than yesterday." },
      { type: "word-scramble", id: "comp1-ws-4", answer: "easier", hint: "This test is ___." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "comp1-fm-1", tokens: ["She", "is", "more", "tall"], wrongIndex: 2, correction: "—" },
      { type: "find-mistake", id: "comp1-fm-2", tokens: ["Today", "is", "hoter"], wrongIndex: 2, correction: "hotter" },
      { type: "find-mistake", id: "comp1-fm-3", tokens: ["He", "is", "the", "most", "tall"], wrongIndex: 3, correction: "—" },
      { type: "find-mistake", id: "comp1-fm-4", tokens: ["This", "is", "easyer"], wrongIndex: 2, correction: "easier" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "comp1-dd-1", sentence: "She is ___ than me.", options: ["tall", "taller", "more tall"], answerIndex: 1 },
      { type: "drag-drop", id: "comp1-dd-2", sentence: "The ___ room.", options: ["bigger", "biggest", "most big"], answerIndex: 1 },
      { type: "drag-drop", id: "comp1-dd-3", sentence: "Today is ___ than yesterday.", options: ["hot", "hotter", "most hot"], answerIndex: 1 },
      { type: "drag-drop", id: "comp1-dd-4", sentence: "This is the ___ book.", options: ["funnier", "funniest", "most funny"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "comp1-mm-1",
        prompt: "Sıfat → -er:",
        pairs: [
          { left: "tall", right: "taller" },
          { left: "big", right: "bigger" },
          { left: "hot", right: "hotter" },
          { left: "easy", right: "easier" },
        ],
      },
    ],
  },

  "comp-2": {
    "word-scramble": [
      { type: "word-scramble", id: "comp2-ws-1", answer: "more", hint: "___ beautiful" },
      { type: "word-scramble", id: "comp2-ws-2", answer: "most", hint: "The ___ interesting" },
      { type: "word-scramble", id: "comp2-ws-3", answer: "expensive", hint: "more ___" },
      { type: "word-scramble", id: "comp2-ws-4", answer: "famous", hint: "the most ___" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "comp2-fm-1", tokens: ["She", "is", "beautifuler"], wrongIndex: 2, correction: "more beautiful" },
      { type: "find-mistake", id: "comp2-fm-2", tokens: ["This", "is", "most", "difficult"], wrongIndex: 2, correction: "the most" },
      { type: "find-mistake", id: "comp2-fm-3", tokens: ["It", "is", "more", "easier"], wrongIndex: 2, correction: "—" },
      { type: "find-mistake", id: "comp2-fm-4", tokens: ["He", "is", "famousest"], wrongIndex: 2, correction: "most famous" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "comp2-dd-1", sentence: "This book is ___ than that.", options: ["interestinger", "more interesting", "most interesting"], answerIndex: 1 },
      { type: "drag-drop", id: "comp2-dd-2", sentence: "The ___ actor in Hollywood.", options: ["more famous", "most famous", "famousest"], answerIndex: 1 },
      { type: "drag-drop", id: "comp2-dd-3", sentence: "Paris is ___ than Ankara.", options: ["expensive", "more expensive", "most expensive"], answerIndex: 1 },
      { type: "drag-drop", id: "comp2-dd-4", sentence: "This is the ___ question.", options: ["difficult", "more difficult", "most difficult"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "comp2-mm-1",
        prompt: "Sıfat → more/most:",
        pairs: [
          { left: "beautiful", right: "more beautiful" },
          { left: "difficult", right: "more difficult" },
          { left: "interesting", right: "most interesting" },
          { left: "famous", right: "most famous" },
        ],
      },
    ],
  },

  "comp-3": {
    "word-scramble": [
      { type: "word-scramble", id: "comp3-ws-1", answer: "better", hint: "good → ___" },
      { type: "word-scramble", id: "comp3-ws-2", answer: "worst", hint: "bad → ___ (en)" },
      { type: "word-scramble", id: "comp3-ws-3", answer: "farther", hint: "far → ___" },
      { type: "word-scramble", id: "comp3-ws-4", answer: "best", hint: "good → ___ (en)" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "comp3-fm-1", tokens: ["Today", "is", "worser"], wrongIndex: 2, correction: "worse" },
      { type: "find-mistake", id: "comp3-fm-2", tokens: ["The", "school", "is", "more", "far"], wrongIndex: 3, correction: "—" },
      { type: "find-mistake", id: "comp3-fm-3", tokens: ["This", "is", "more", "better"], wrongIndex: 2, correction: "—" },
      { type: "find-mistake", id: "comp3-fm-4", tokens: ["The", "goodest", "restaurant"], wrongIndex: 1, correction: "best" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "comp3-dd-1", sentence: "Her English is ___ than mine.", options: ["good", "better", "gooder"], answerIndex: 1 },
      { type: "drag-drop", id: "comp3-dd-2", sentence: "Today is ___ than yesterday.", options: ["bad", "worse", "worser"], answerIndex: 1 },
      { type: "drag-drop", id: "comp3-dd-3", sentence: "She lives ___ than me.", options: ["far", "farther", "most far"], answerIndex: 1 },
      { type: "drag-drop", id: "comp3-dd-4", sentence: "The ___ movie I've seen.", options: ["bad", "worst", "worser"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "comp3-mm-1",
        prompt: "V1 → Comparative → Superlative:",
        pairs: [
          { left: "good", right: "better / best" },
          { left: "bad", right: "worse / worst" },
          { left: "far", right: "farther / farthest" },
          { left: "much/many", right: "more / most" },
        ],
      },
    ],
  },

  "comp-4": {
    "word-scramble": [
      { type: "word-scramble", id: "comp4-ws-1", answer: "as", hint: "tall ___ him" },
      { type: "word-scramble", id: "comp4-ws-2", answer: "tall", hint: "as ___ as" },
      { type: "word-scramble", id: "comp4-ws-3", answer: "isn't", hint: "She ___ as tall." },
      { type: "word-scramble", id: "comp4-ws-4", answer: "same", hint: "the ___ as" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "comp4-fm-1", tokens: ["She", "is", "as", "taller", "as", "him"], wrongIndex: 3, correction: "tall" },
      { type: "find-mistake", id: "comp4-fm-2", tokens: ["He", "is", "as", "tall", "than", "him"], wrongIndex: 4, correction: "as" },
      { type: "find-mistake", id: "comp4-fm-3", tokens: ["It", "is", "as", "more", "difficult", "as"], wrongIndex: 3, correction: "—" },
      { type: "find-mistake", id: "comp4-fm-4", tokens: ["She", "is", "as", "older", "as"], wrongIndex: 3, correction: "old" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "comp4-dd-1", sentence: "He is as ___ as his brother.", options: ["taller", "tall", "most tall"], answerIndex: 1 },
      { type: "drag-drop", id: "comp4-dd-2", sentence: "This is as good ___ that.", options: ["than", "as", "so"], answerIndex: 1 },
      { type: "drag-drop", id: "comp4-dd-3", sentence: "She isn't ___ tall as her sister.", options: ["more", "as", "so"], answerIndex: 1 },
      { type: "drag-drop", id: "comp4-dd-4", sentence: "The test was ___ as I thought.", options: ["as hard", "harder", "hardest"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "comp4-mm-1",
        prompt: "Anlam → Yapı:",
        pairs: [
          { left: "A = B", right: "as + sıfat + as" },
          { left: "A ≠ B (az)", right: "not as + sıfat + as" },
          { left: "A > B", right: "sıfat + -er than / more ... than" },
          { left: "En yüksek", right: "the + superlative" },
        ],
      },
    ],
  },

  "comp-5": {
    "word-scramble": [
      { type: "word-scramble", id: "comp5-ws-1", answer: "same", hint: "the ___ as" },
      { type: "word-scramble", id: "comp5-ws-2", answer: "from", hint: "different ___" },
      { type: "word-scramble", id: "comp5-ws-3", answer: "to", hint: "similar ___" },
      { type: "word-scramble", id: "comp5-ws-4", answer: "as", hint: "the same ___" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "comp5-fm-1", tokens: ["My", "car", "is", "different", "than", "yours"], wrongIndex: 4, correction: "from" },
      { type: "find-mistake", id: "comp5-fm-2", tokens: ["This", "is", "same", "as", "that"], wrongIndex: 2, correction: "the same" },
      { type: "find-mistake", id: "comp5-fm-3", tokens: ["Similar", "as", "mine"], wrongIndex: 1, correction: "to" },
      { type: "find-mistake", id: "comp5-fm-4", tokens: ["The", "same", "than", "yours"], wrongIndex: 2, correction: "as" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "comp5-dd-1", sentence: "My bag is the same ___ yours.", options: ["than", "as", "to"], answerIndex: 1 },
      { type: "drag-drop", id: "comp5-dd-2", sentence: "This is different ___ that.", options: ["than", "as", "from"], answerIndex: 2 },
      { type: "drag-drop", id: "comp5-dd-3", sentence: "His style is similar ___ mine.", options: ["than", "as", "to"], answerIndex: 2 },
      { type: "drag-drop", id: "comp5-dd-4", sentence: "This recipe is the ___ as before.", options: ["similar", "same", "different"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "comp5-mm-1",
        prompt: "İlişki → Yapı:",
        pairs: [
          { left: "Aynı", right: "the same as" },
          { left: "Farklı", right: "different from" },
          { left: "Benzer", right: "similar to" },
          { left: "Yaklaşık", right: "almost the same" },
        ],
      },
    ],
  },

  "comp-6": {
    "word-scramble": [
      { type: "word-scramble", id: "comp6-ws-1", answer: "faster", hint: "This car is ___." },
      { type: "word-scramble", id: "comp6-ws-2", answer: "most", hint: "The ___ interesting." },
      { type: "word-scramble", id: "comp6-ws-3", answer: "better", hint: "good → ___." },
      { type: "word-scramble", id: "comp6-ws-4", answer: "as", hint: "tall ___ him" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "comp6-fm-1", tokens: ["This", "is", "more", "better"], wrongIndex: 2, correction: "—" },
      { type: "find-mistake", id: "comp6-fm-2", tokens: ["Today", "is", "hoter"], wrongIndex: 2, correction: "hotter" },
      { type: "find-mistake", id: "comp6-fm-3", tokens: ["She", "is", "as", "taller", "as"], wrongIndex: 3, correction: "tall" },
      { type: "find-mistake", id: "comp6-fm-4", tokens: ["Different", "than", "yours"], wrongIndex: 1, correction: "from" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "comp6-dd-1", sentence: "She is the ___ student.", options: ["cleverer", "cleverest", "most clever"], answerIndex: 1 },
      { type: "drag-drop", id: "comp6-dd-2", sentence: "Today is ___ than yesterday.", options: ["bad", "worse", "worser"], answerIndex: 1 },
      { type: "drag-drop", id: "comp6-dd-3", sentence: "He is as ___ as his brother.", options: ["tall", "taller", "tallest"], answerIndex: 0 },
      { type: "drag-drop", id: "comp6-dd-4", sentence: "My style is similar ___ hers.", options: ["than", "as", "to"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "comp6-mm-1",
        prompt: "Sıfat tipi → Comparative:",
        pairs: [
          { left: "Tek heceli", right: "sıfat + -er" },
          { left: "Çok heceli", right: "more + sıfat" },
          { left: "Düzensiz", right: "better/worse/farther" },
          { left: "Eşitlik", right: "as + sıfat + as" },
        ],
      },
    ],
  },

  "art-1": {
    "word-scramble": [
      { type: "word-scramble", id: "art1-ws-1", answer: "an", hint: "___ apple" },
      { type: "word-scramble", id: "art1-ws-2", answer: "a", hint: "___ book" },
      { type: "word-scramble", id: "art1-ws-3", answer: "an", hint: "___ hour" },
      { type: "word-scramble", id: "art1-ws-4", answer: "a", hint: "___ university" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "art1-fm-1", tokens: ["I", "saw", "a", "elephant"], wrongIndex: 2, correction: "an" },
      { type: "find-mistake", id: "art1-fm-2", tokens: ["She", "bought", "a", "orange"], wrongIndex: 2, correction: "an" },
      { type: "find-mistake", id: "art1-fm-3", tokens: ["It", "was", "a", "hour"], wrongIndex: 2, correction: "an" },
      { type: "find-mistake", id: "art1-fm-4", tokens: ["He", "is", "an", "university", "student"], wrongIndex: 2, correction: "a" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "art1-dd-1", sentence: "I have ___ apple.", options: ["a", "an", "the"], answerIndex: 1 },
      { type: "drag-drop", id: "art1-dd-2", sentence: "She is ___ doctor.", options: ["a", "an", "the"], answerIndex: 0 },
      { type: "drag-drop", id: "art1-dd-3", sentence: "He has ___ umbrella.", options: ["a", "an", "the"], answerIndex: 1 },
      { type: "drag-drop", id: "art1-dd-4", sentence: "It was ___ honest mistake.", options: ["a", "an", "the"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "art1-mm-1",
        prompt: "Ses → Article:",
        pairs: [
          { left: "apple", right: "an" },
          { left: "book", right: "a" },
          { left: "hour (sessiz h)", right: "an" },
          { left: "university (y sesi)", right: "a" },
        ],
      },
    ],
  },

  "art-2": {
    "word-scramble": [
      { type: "word-scramble", id: "art2-ws-1", answer: "the", hint: "___ door" },
      { type: "word-scramble", id: "art2-ws-2", answer: "sun", hint: "the ___" },
      { type: "word-scramble", id: "art2-ws-3", answer: "USA", hint: "the ___" },
      { type: "word-scramble", id: "art2-ws-4", answer: "piano", hint: "plays the ___" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "art2-fm-1", tokens: ["I", "live", "in", "USA"], wrongIndex: 3, correction: "the USA" },
      { type: "find-mistake", id: "art2-fm-2", tokens: ["She", "plays", "piano"], wrongIndex: 2, correction: "the piano" },
      { type: "find-mistake", id: "art2-fm-3", tokens: ["Moon", "is", "bright"], wrongIndex: 0, correction: "The moon" },
      { type: "find-mistake", id: "art2-fm-4", tokens: ["Close", "a", "door"], wrongIndex: 1, correction: "the" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "art2-dd-1", sentence: "Close ___ door.", options: ["a", "an", "the"], answerIndex: 2 },
      { type: "drag-drop", id: "art2-dd-2", sentence: "___ sun rises.", options: ["A", "An", "The"], answerIndex: 2 },
      { type: "drag-drop", id: "art2-dd-3", sentence: "She plays ___ violin.", options: ["a", "an", "the"], answerIndex: 2 },
      { type: "drag-drop", id: "art2-dd-4", sentence: "He is ___ best player.", options: ["a", "an", "the"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "art2-mm-1",
        prompt: "Kullanım → Örnek:",
        pairs: [
          { left: "Belirli", right: "the door" },
          { left: "Tek olan", right: "the sun" },
          { left: "Ülke (USA/UK)", right: "the USA" },
          { left: "Müzik aleti", right: "the piano" },
        ],
      },
    ],
  },

  "art-3": {
    "word-scramble": [
      { type: "word-scramble", id: "art3-ws-1", answer: "a", hint: "İlk bahsediş" },
      { type: "word-scramble", id: "art3-ws-2", answer: "the", hint: "İkinci bahsediş" },
      { type: "word-scramble", id: "art3-ws-3", answer: "the", hint: "Özel yapı: ___ Eiffel Tower" },
      { type: "word-scramble", id: "art3-ws-4", answer: "a", hint: "Herhangi bir şey" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "art3-fm-1", tokens: ["I", "want", "the", "car", "(any)"], wrongIndex: 2, correction: "a" },
      { type: "find-mistake", id: "art3-fm-2", tokens: ["He", "is", "a", "engineer"], wrongIndex: 2, correction: "an" },
      { type: "find-mistake", id: "art3-fm-3", tokens: ["A", "moon", "is", "bright"], wrongIndex: 0, correction: "The" },
      { type: "find-mistake", id: "art3-fm-4", tokens: ["I", "saw", "the", "dog", "(first time)"], wrongIndex: 2, correction: "a" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "art3-dd-1", sentence: "I saw ___ dog. ___ dog was big.", options: ["a / The", "The / a", "a / a"], answerIndex: 0 },
      { type: "drag-drop", id: "art3-dd-2", sentence: "Pass me ___ book on the table.", options: ["a", "an", "the"], answerIndex: 2 },
      { type: "drag-drop", id: "art3-dd-3", sentence: "I want ___ car. (any)", options: ["a", "an", "the"], answerIndex: 0 },
      { type: "drag-drop", id: "art3-dd-4", sentence: "___ Statue of Liberty", options: ["A", "An", "The"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "art3-mm-1",
        prompt: "Durum → Article:",
        pairs: [
          { left: "İlk bahsediş", right: "a/an" },
          { left: "Tekrar bahsediş", right: "the" },
          { left: "Herhangi biri", right: "a/an" },
          { left: "Belirli nesne", right: "the" },
        ],
      },
    ],
  },

  "art-4": {
    "word-scramble": [
      { type: "word-scramble", id: "art4-ws-1", answer: "no", hint: "Genel çoğul → ___ article" },
      { type: "word-scramble", id: "art4-ws-2", answer: "general", hint: "Water is important. (___)" },
      { type: "word-scramble", id: "art4-ws-3", answer: "music", hint: "I love ___ (tanımlıksız)" },
      { type: "word-scramble", id: "art4-ws-4", answer: "breakfast", hint: "___ is at 8" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "art4-fm-1", tokens: ["I", "love", "the", "music"], wrongIndex: 2, correction: "— (no article)" },
      { type: "find-mistake", id: "art4-fm-2", tokens: ["The", "English", "is", "global"], wrongIndex: 0, correction: "— (no article)" },
      { type: "find-mistake", id: "art4-fm-3", tokens: ["She", "studies", "the", "medicine"], wrongIndex: 2, correction: "— (no article)" },
      { type: "find-mistake", id: "art4-fm-4", tokens: ["The", "cats", "are", "cute"], wrongIndex: 0, correction: "— (no article)" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "art4-dd-1", sentence: "I like ___ coffee.", options: ["a", "the", "— (tanımlıksız)"], answerIndex: 2 },
      { type: "drag-drop", id: "art4-dd-2", sentence: "___ dogs are friendly.", options: ["A", "The", "— (tanımlıksız)"], answerIndex: 2 },
      { type: "drag-drop", id: "art4-dd-3", sentence: "She studies ___ medicine.", options: ["a", "the", "— (tanımlıksız)"], answerIndex: 2 },
      { type: "drag-drop", id: "art4-dd-4", sentence: "We had ___ lunch.", options: ["a", "the", "— (tanımlıksız)"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "art4-mm-1",
        prompt: "Tip → Article var/yok:",
        pairs: [
          { left: "Genel çoğul", right: "tanımlıksız" },
          { left: "Sayılamayan (genel)", right: "tanımlıksız" },
          { left: "Yemek adları (genel)", right: "tanımlıksız" },
          { left: "Akademik konu", right: "tanımlıksız" },
        ],
      },
    ],
  },

  "art-5": {
    "word-scramble": [
      { type: "word-scramble", id: "art5-ws-1", answer: "Turkey", hint: "He lives in ___ (no article)" },
      { type: "word-scramble", id: "art5-ws-2", answer: "the", hint: "___ Nile" },
      { type: "word-scramble", id: "art5-ws-3", answer: "Mount", hint: "___ Everest" },
      { type: "word-scramble", id: "art5-ws-4", answer: "Netherlands", hint: "the ___" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "art5-fm-1", tokens: ["He", "lives", "in", "the", "Turkey"], wrongIndex: 3, correction: "— (no article)" },
      { type: "find-mistake", id: "art5-fm-2", tokens: ["We", "visited", "the", "Paris"], wrongIndex: 2, correction: "— (no article)" },
      { type: "find-mistake", id: "art5-fm-3", tokens: ["She", "lives", "in", "Netherlands"], wrongIndex: 3, correction: "the Netherlands" },
      { type: "find-mistake", id: "art5-fm-4", tokens: ["Nile", "is", "long"], wrongIndex: 0, correction: "The Nile" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "art5-dd-1", sentence: "He lives in ___ Turkey.", options: ["a", "the", "— (tanımlıksız)"], answerIndex: 2 },
      { type: "drag-drop", id: "art5-dd-2", sentence: "___ Thames is in London.", options: ["A", "The", "— (tanımlıksız)"], answerIndex: 1 },
      { type: "drag-drop", id: "art5-dd-3", sentence: "I climbed ___ Mount Everest.", options: ["a", "the", "— (tanımlıksız)"], answerIndex: 2 },
      { type: "drag-drop", id: "art5-dd-4", sentence: "He lives in ___ Netherlands.", options: ["a", "the", "— (tanımlıksız)"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "art5-mm-1",
        prompt: "Yer türü → the var/yok:",
        pairs: [
          { left: "Şehir (Paris)", right: "tanımlıksız" },
          { left: "Ülke (Turkey)", right: "tanımlıksız" },
          { left: "Ülke (USA, UK, Netherlands)", right: "the" },
          { left: "Nehir/deniz/okyanus", right: "the" },
        ],
      },
    ],
  },

  "art-6": {
    "word-scramble": [
      { type: "word-scramble", id: "art6-ws-1", answer: "an", hint: "___ apple" },
      { type: "word-scramble", id: "art6-ws-2", answer: "the", hint: "___ Eiffel Tower" },
      { type: "word-scramble", id: "art6-ws-3", answer: "no", hint: "Cats are cute — ___ article" },
      { type: "word-scramble", id: "art6-ws-4", answer: "USA", hint: "the ___" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "art6-fm-1", tokens: ["She", "is", "the", "engineer"], wrongIndex: 2, correction: "an" },
      { type: "find-mistake", id: "art6-fm-2", tokens: ["I", "live", "in", "the", "Turkey"], wrongIndex: 3, correction: "— (no article)" },
      { type: "find-mistake", id: "art6-fm-3", tokens: ["She", "plays", "piano"], wrongIndex: 2, correction: "the piano" },
      { type: "find-mistake", id: "art6-fm-4", tokens: ["I", "love", "the", "music"], wrongIndex: 2, correction: "— (no article)" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "art6-dd-1", sentence: "I have ___ orange.", options: ["a", "an", "the"], answerIndex: 1 },
      { type: "drag-drop", id: "art6-dd-2", sentence: "___ Eiffel Tower.", options: ["A", "An", "The"], answerIndex: 2 },
      { type: "drag-drop", id: "art6-dd-3", sentence: "She plays ___ guitar.", options: ["a", "an", "the"], answerIndex: 2 },
      { type: "drag-drop", id: "art6-dd-4", sentence: "I live in ___ USA.", options: ["a", "an", "the"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "art6-mm-1",
        prompt: "Article kuralı:",
        pairs: [
          { left: "a / an", right: "ilk bahsediş, herhangi biri" },
          { left: "the", right: "belirli, tek, ikinci bahsediş" },
          { left: "tanımlıksız", right: "genel isim, çoğul, sayılamayan" },
          { left: "Özel yer", right: "değişir: Paris → —, USA → the" },
        ],
      },
    ],
  },

  "qtag-1": {
    "word-scramble": [
      { type: "word-scramble", id: "qtag1-ws-1", answer: "aren't", hint: "You are tired, ___ you?" },
      { type: "word-scramble", id: "qtag1-ws-2", answer: "isn't", hint: "She is here, ___ she?" },
      { type: "word-scramble", id: "qtag1-ws-3", answer: "are", hint: "They aren't ready, ___ they?" },
      { type: "word-scramble", id: "qtag1-ws-4", answer: "I", hint: "I am right, aren't ___?" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "qtag1-fm-1", tokens: ["She", "is", "here,", "is", "she"], wrongIndex: 3, correction: "isn't" },
      { type: "find-mistake", id: "qtag1-fm-2", tokens: ["You", "are", "tired,", "don't", "you"], wrongIndex: 3, correction: "aren't" },
      { type: "find-mistake", id: "qtag1-fm-3", tokens: ["It", "wasn't", "cold,", "wasn't", "it"], wrongIndex: 3, correction: "was" },
      { type: "find-mistake", id: "qtag1-fm-4", tokens: ["I", "am", "right,", "amn't", "I"], wrongIndex: 3, correction: "aren't" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "qtag1-dd-1", sentence: "You are tired, ___?", options: ["are you", "aren't you", "don't you"], answerIndex: 1 },
      { type: "drag-drop", id: "qtag1-dd-2", sentence: "She isn't here, ___?", options: ["is she", "isn't she", "does she"], answerIndex: 0 },
      { type: "drag-drop", id: "qtag1-dd-3", sentence: "They are students, ___?", options: ["are they", "aren't they", "don't they"], answerIndex: 1 },
      { type: "drag-drop", id: "qtag1-dd-4", sentence: "I am right, ___?", options: ["am I", "aren't I", "don't I"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "qtag1-mm-1",
        prompt: "Cümle → Tag:",
        pairs: [
          { left: "You are happy,", right: "aren't you?" },
          { left: "She is here,", right: "isn't she?" },
          { left: "They aren't ready,", right: "are they?" },
          { left: "I am right,", right: "aren't I?" },
        ],
      },
    ],
  },

  "qtag-2": {
    "word-scramble": [
      { type: "word-scramble", id: "qtag2-ws-1", answer: "haven't", hint: "You have seen it, ___ you?" },
      { type: "word-scramble", id: "qtag2-ws-2", answer: "hasn't", hint: "She has left, ___ she?" },
      { type: "word-scramble", id: "qtag2-ws-3", answer: "have", hint: "They haven't met, ___ they?" },
      { type: "word-scramble", id: "qtag2-ws-4", answer: "has", hint: "She hasn't called, ___ she?" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "qtag2-fm-1", tokens: ["She", "has", "left,", "hasn't", "her"], wrongIndex: 4, correction: "she" },
      { type: "find-mistake", id: "qtag2-fm-2", tokens: ["He", "has", "seen", "it,", "doesn't", "he"], wrongIndex: 4, correction: "hasn't" },
      { type: "find-mistake", id: "qtag2-fm-3", tokens: ["They", "haven't", "met,", "haven't", "they"], wrongIndex: 3, correction: "have" },
      { type: "find-mistake", id: "qtag2-fm-4", tokens: ["You", "have", "done,", "didn't", "you"], wrongIndex: 3, correction: "haven't" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "qtag2-dd-1", sentence: "You have finished, ___?", options: ["have you", "haven't you", "do you"], answerIndex: 1 },
      { type: "drag-drop", id: "qtag2-dd-2", sentence: "She has left, ___?", options: ["has she", "hasn't she", "does she"], answerIndex: 1 },
      { type: "drag-drop", id: "qtag2-dd-3", sentence: "They haven't met, ___?", options: ["have they", "haven't they", "did they"], answerIndex: 0 },
      { type: "drag-drop", id: "qtag2-dd-4", sentence: "He has seen it, ___?", options: ["has he", "hasn't he", "does he"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "qtag2-mm-1",
        prompt: "Cümle → Tag:",
        pairs: [
          { left: "You have finished,", right: "haven't you?" },
          { left: "She has left,", right: "hasn't she?" },
          { left: "They haven't met,", right: "have they?" },
          { left: "He hasn't eaten,", right: "has he?" },
        ],
      },
    ],
  },

  "qtag-3": {
    "word-scramble": [
      { type: "word-scramble", id: "qtag3-ws-1", answer: "don't", hint: "You like it, ___ you?" },
      { type: "word-scramble", id: "qtag3-ws-2", answer: "doesn't", hint: "He plays, ___ he?" },
      { type: "word-scramble", id: "qtag3-ws-3", answer: "do", hint: "You don't smoke, ___ you?" },
      { type: "word-scramble", id: "qtag3-ws-4", answer: "does", hint: "He doesn't work, ___ he?" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "qtag3-fm-1", tokens: ["She", "plays", "piano,", "isn't", "she"], wrongIndex: 3, correction: "doesn't" },
      { type: "find-mistake", id: "qtag3-fm-2", tokens: ["He", "doesn't", "work,", "doesn't", "he"], wrongIndex: 3, correction: "does" },
      { type: "find-mistake", id: "qtag3-fm-3", tokens: ["You", "like", "coffee,", "aren't", "you"], wrongIndex: 3, correction: "don't" },
      { type: "find-mistake", id: "qtag3-fm-4", tokens: ["They", "speak", "English,", "don't", "him"], wrongIndex: 4, correction: "they" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "qtag3-dd-1", sentence: "You like tea, ___?", options: ["do you", "don't you", "aren't you"], answerIndex: 1 },
      { type: "drag-drop", id: "qtag3-dd-2", sentence: "He works here, ___?", options: ["does he", "doesn't he", "isn't he"], answerIndex: 1 },
      { type: "drag-drop", id: "qtag3-dd-3", sentence: "They don't live here, ___?", options: ["do they", "don't they", "aren't they"], answerIndex: 0 },
      { type: "drag-drop", id: "qtag3-dd-4", sentence: "She doesn't speak French, ___?", options: ["does she", "doesn't she", "is she"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "qtag3-mm-1",
        prompt: "Present Simple → Tag:",
        pairs: [
          { left: "You like...", right: "don't you?" },
          { left: "He plays...", right: "doesn't he?" },
          { left: "She doesn't...", right: "does she?" },
          { left: "They don't...", right: "do they?" },
        ],
      },
    ],
  },

  "qtag-4": {
    "word-scramble": [
      { type: "word-scramble", id: "qtag4-ws-1", answer: "didn't", hint: "You called, ___ you?" },
      { type: "word-scramble", id: "qtag4-ws-2", answer: "did", hint: "She didn't come, ___ she?" },
      { type: "word-scramble", id: "qtag4-ws-3", answer: "wasn't", hint: "It was cold, ___ it?" },
      { type: "word-scramble", id: "qtag4-ws-4", answer: "were", hint: "They weren't there, ___ they?" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "qtag4-fm-1", tokens: ["You", "went,", "did", "you"], wrongIndex: 2, correction: "didn't" },
      { type: "find-mistake", id: "qtag4-fm-2", tokens: ["He", "was", "happy,", "didn't", "he"], wrongIndex: 3, correction: "wasn't" },
      { type: "find-mistake", id: "qtag4-fm-3", tokens: ["She", "didn't", "call,", "didn't", "she"], wrongIndex: 3, correction: "did" },
      { type: "find-mistake", id: "qtag4-fm-4", tokens: ["They", "ate,", "didn't", "them"], wrongIndex: 3, correction: "they" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "qtag4-dd-1", sentence: "You called, ___?", options: ["did you", "didn't you", "do you"], answerIndex: 1 },
      { type: "drag-drop", id: "qtag4-dd-2", sentence: "She didn't leave, ___?", options: ["did she", "didn't she", "does she"], answerIndex: 0 },
      { type: "drag-drop", id: "qtag4-dd-3", sentence: "He was happy, ___?", options: ["was he", "wasn't he", "did he"], answerIndex: 1 },
      { type: "drag-drop", id: "qtag4-dd-4", sentence: "It wasn't cold, ___?", options: ["was it", "wasn't it", "did it"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "qtag4-mm-1",
        prompt: "Past → Tag:",
        pairs: [
          { left: "You went...", right: "didn't you?" },
          { left: "She didn't call...", right: "did she?" },
          { left: "He was...", right: "wasn't he?" },
          { left: "They weren't...", right: "were they?" },
        ],
      },
    ],
  },

  "qtag-5": {
    "word-scramble": [
      { type: "word-scramble", id: "qtag5-ws-1", answer: "can't", hint: "You can swim, ___ you?" },
      { type: "word-scramble", id: "qtag5-ws-2", answer: "won't", hint: "She will come, ___ she?" },
      { type: "word-scramble", id: "qtag5-ws-3", answer: "shouldn't", hint: "We should go, ___ we?" },
      { type: "word-scramble", id: "qtag5-ws-4", answer: "will", hint: "You won't forget, ___ you?" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "qtag5-fm-1", tokens: ["You", "can", "swim,", "don't", "you"], wrongIndex: 3, correction: "can't" },
      { type: "find-mistake", id: "qtag5-fm-2", tokens: ["She", "will", "come,", "doesn't", "she"], wrongIndex: 3, correction: "won't" },
      { type: "find-mistake", id: "qtag5-fm-3", tokens: ["They", "can't", "come,", "can't", "they"], wrongIndex: 3, correction: "can" },
      { type: "find-mistake", id: "qtag5-fm-4", tokens: ["You", "won't", "forget,", "don't", "you"], wrongIndex: 3, correction: "will" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "qtag5-dd-1", sentence: "You can swim, ___?", options: ["can you", "can't you", "don't you"], answerIndex: 1 },
      { type: "drag-drop", id: "qtag5-dd-2", sentence: "She will help, ___?", options: ["will she", "won't she", "does she"], answerIndex: 1 },
      { type: "drag-drop", id: "qtag5-dd-3", sentence: "We should leave, ___?", options: ["should we", "shouldn't we", "don't we"], answerIndex: 1 },
      { type: "drag-drop", id: "qtag5-dd-4", sentence: "He won't come, ___?", options: ["will he", "won't he", "does he"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "qtag5-mm-1",
        prompt: "Modal → Tag:",
        pairs: [
          { left: "can", right: "can't" },
          { left: "will", right: "won't" },
          { left: "should", right: "shouldn't" },
          { left: "must", right: "mustn't" },
        ],
      },
    ],
  },

  "qtag-6": {
    "word-scramble": [
      { type: "word-scramble", id: "qtag6-ws-1", answer: "aren't", hint: "You are tired, ___ you?" },
      { type: "word-scramble", id: "qtag6-ws-2", answer: "hasn't", hint: "She has left, ___ she?" },
      { type: "word-scramble", id: "qtag6-ws-3", answer: "didn't", hint: "They went home, ___ they?" },
      { type: "word-scramble", id: "qtag6-ws-4", answer: "can't", hint: "You can swim, ___ you?" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "qtag6-fm-1", tokens: ["She", "plays", "piano,", "isn't", "she"], wrongIndex: 3, correction: "doesn't" },
      { type: "find-mistake", id: "qtag6-fm-2", tokens: ["He", "doesn't", "work,", "doesn't", "he"], wrongIndex: 3, correction: "does" },
      { type: "find-mistake", id: "qtag6-fm-3", tokens: ["I", "am", "right,", "am", "I"], wrongIndex: 3, correction: "aren't" },
      { type: "find-mistake", id: "qtag6-fm-4", tokens: ["You", "won't", "forget,", "don't", "you"], wrongIndex: 3, correction: "will" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "qtag6-dd-1", sentence: "You are tired, ___?", options: ["are you", "aren't you", "don't you"], answerIndex: 1 },
      { type: "drag-drop", id: "qtag6-dd-2", sentence: "She has left, ___?", options: ["has she", "hasn't she", "does she"], answerIndex: 1 },
      { type: "drag-drop", id: "qtag6-dd-3", sentence: "They went home, ___?", options: ["did they", "didn't they", "do they"], answerIndex: 1 },
      { type: "drag-drop", id: "qtag6-dd-4", sentence: "He will come, ___?", options: ["will he", "won't he", "does he"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "qtag6-mm-1",
        prompt: "Zaman/Fiil → Tag:",
        pairs: [
          { left: "be (is/are)", right: "isn't/aren't" },
          { left: "have/has", right: "haven't/hasn't" },
          { left: "Present Simple", right: "don't/doesn't" },
          { left: "Modal", right: "modal + n't" },
        ],
      },
    ],
  },

  "rs-1": {
    "word-scramble": [
      { type: "word-scramble", id: "rs1-ws-1", answer: "was", hint: "He said he ___ tired." },
      { type: "word-scramble", id: "rs1-ws-2", answer: "would", hint: "She said she ___ come." },
      { type: "word-scramble", id: "rs1-ws-3", answer: "told", hint: "He ___ me a story." },
      { type: "word-scramble", id: "rs1-ws-4", answer: "had", hint: "She said she ___ eaten." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "rs1-fm-1", tokens: ["He", "said", "he", "is", "tired"], wrongIndex: 3, correction: "was" },
      { type: "find-mistake", id: "rs1-fm-2", tokens: ["She", "told", "she", "was", "happy"], wrongIndex: 1, correction: "said" },
      { type: "find-mistake", id: "rs1-fm-3", tokens: ["He", "said", "he", "will", "come"], wrongIndex: 3, correction: "would" },
      { type: "find-mistake", id: "rs1-fm-4", tokens: ["She", "said", "me", "she", "was", "tired"], wrongIndex: 1, correction: "told" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "rs1-dd-1", sentence: "He said he ___ tired.", options: ["is", "was", "were"], answerIndex: 1 },
      { type: "drag-drop", id: "rs1-dd-2", sentence: "She ___ me she was happy.", options: ["said", "told", "asked"], answerIndex: 1 },
      { type: "drag-drop", id: "rs1-dd-3", sentence: "He said he ___ come.", options: ["will", "would", "can"], answerIndex: 1 },
      { type: "drag-drop", id: "rs1-dd-4", sentence: "She said she ___ eaten.", options: ["has", "had", "was"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "rs1-mm-1",
        prompt: "Direct → Reported (zaman):",
        pairs: [
          { left: "am/is/are", right: "was/were" },
          { left: "Present Simple", right: "Past Simple" },
          { left: "Past Simple", right: "Past Perfect" },
          { left: "will", right: "would" },
        ],
      },
    ],
  },

  "rs-2": {
    "word-scramble": [
      { type: "word-scramble", id: "rs2-ws-1", answer: "if", hint: "He asked ___ I was ok." },
      { type: "word-scramble", id: "rs2-ws-2", answer: "where", hint: "She asked ___ I lived." },
      { type: "word-scramble", id: "rs2-ws-3", answer: "lived", hint: "She asked where I ___." },
      { type: "word-scramble", id: "rs2-ws-4", answer: "could", hint: "She asked if I ___ help." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "rs2-fm-1", tokens: ["She", "asked", "where", "do", "I", "live"], wrongIndex: 3, correction: "— (no do)" },
      { type: "find-mistake", id: "rs2-fm-2", tokens: ["He", "asked", "that", "I", "was", "ok"], wrongIndex: 2, correction: "if" },
      { type: "find-mistake", id: "rs2-fm-3", tokens: ["She", "asked", "if", "were", "we", "coming"], wrongIndex: 3, correction: "we were" },
      { type: "find-mistake", id: "rs2-fm-4", tokens: ["He", "asked", "where", "I", "live"], wrongIndex: 4, correction: "lived" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "rs2-dd-1", sentence: "He asked ___ I was tired.", options: ["that", "if", "where"], answerIndex: 1 },
      { type: "drag-drop", id: "rs2-dd-2", sentence: "She asked where I ___.", options: ["live", "lived", "do live"], answerIndex: 1 },
      { type: "drag-drop", id: "rs2-dd-3", sentence: "He asked what time I ___.", options: ["leave", "left", "have left"], answerIndex: 1 },
      { type: "drag-drop", id: "rs2-dd-4", sentence: "She asked if he ___ help.", options: ["can", "could", "did"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "rs2-mm-1",
        prompt: "Soru tipi → Aktarım:",
        pairs: [
          { left: "Yes/No", right: "asked if/whether + clause" },
          { left: "Wh-soru", right: "asked wh-word + clause" },
          { left: "Soru sırası", right: "özne + fiil (soru değil)" },
          { left: "'do/did'", right: "düşer (yok)" },
        ],
      },
    ],
  },

  "rs-3": {
    "word-scramble": [
      { type: "word-scramble", id: "rs3-ws-1", answer: "to", hint: "He told me ___ open the door." },
      { type: "word-scramble", id: "rs3-ws-2", answer: "not", hint: "She told us ___ to be late." },
      { type: "word-scramble", id: "rs3-ws-3", answer: "told", hint: "She ___ me to sit down." },
      { type: "word-scramble", id: "rs3-ws-4", answer: "asked", hint: "He ___ me to help." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "rs3-fm-1", tokens: ["He", "asked", "me", "open", "the", "door"], wrongIndex: 3, correction: "to open" },
      { type: "find-mistake", id: "rs3-fm-2", tokens: ["She", "said", "me", "to", "be", "quiet"], wrongIndex: 1, correction: "told" },
      { type: "find-mistake", id: "rs3-fm-3", tokens: ["He", "told", "them", "don't", "run"], wrongIndex: 3, correction: "not to" },
      { type: "find-mistake", id: "rs3-fm-4", tokens: ["She", "told", "us", "to", "don't", "talk"], wrongIndex: 4, correction: "not to" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "rs3-dd-1", sentence: "He told me ___ the window.", options: ["open", "to open", "opening"], answerIndex: 1 },
      { type: "drag-drop", id: "rs3-dd-2", sentence: "She asked me ___ her.", options: ["help", "to help", "helping"], answerIndex: 1 },
      { type: "drag-drop", id: "rs3-dd-3", sentence: "He told us ___ late.", options: ["don't be", "not to be", "to not be"], answerIndex: 1 },
      { type: "drag-drop", id: "rs3-dd-4", sentence: "She ___ us to sit down.", options: ["said", "told", "asked me"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "rs3-mm-1",
        prompt: "Emir/Rica → Yapı:",
        pairs: [
          { left: "Olumlu emir", right: "told/asked + obj + to + V1" },
          { left: "Olumsuz emir", right: "told/asked + obj + not to + V1" },
          { left: "'say'", right: "emir için uygun değil" },
          { left: "'tell / ask'", right: "emir/rica için standart" },
        ],
      },
    ],
  },

  "rs-4": {
    "word-scramble": [
      { type: "word-scramble", id: "rs4-ws-1", answer: "then", hint: "now → ___" },
      { type: "word-scramble", id: "rs4-ws-2", answer: "there", hint: "here → ___" },
      { type: "word-scramble", id: "rs4-ws-3", answer: "that", hint: "this → ___" },
      { type: "word-scramble", id: "rs4-ws-4", answer: "next", hint: "tomorrow → the ___ day" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "rs4-fm-1", tokens: ["He", "said", "he", "would", "come", "tomorrow"], wrongIndex: 5, correction: "the next day" },
      { type: "find-mistake", id: "rs4-fm-2", tokens: ["She", "said", "she", "was", "leaving", "now"], wrongIndex: 5, correction: "then" },
      { type: "find-mistake", id: "rs4-fm-3", tokens: ["He", "said", "he", "lived", "here"], wrongIndex: 4, correction: "there" },
      { type: "find-mistake", id: "rs4-fm-4", tokens: ["She", "said", "this", "book", "was", "good"], wrongIndex: 2, correction: "that" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "rs4-dd-1", sentence: "He said he would come ___.", options: ["tomorrow", "the next day", "today"], answerIndex: 1 },
      { type: "drag-drop", id: "rs4-dd-2", sentence: "She said she was there ___.", options: ["yesterday", "the day before", "today"], answerIndex: 1 },
      { type: "drag-drop", id: "rs4-dd-3", sentence: "He said he lived ___.", options: ["here", "there", "now"], answerIndex: 1 },
      { type: "drag-drop", id: "rs4-dd-4", sentence: "He said he was leaving ___.", options: ["now", "then", "tomorrow"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "rs4-mm-1",
        prompt: "Direct → Reported:",
        pairs: [
          { left: "now", right: "then" },
          { left: "here", right: "there" },
          { left: "today", right: "that day" },
          { left: "tomorrow", right: "the next day" },
        ],
      },
    ],
  },

  "rs-5": {
    "word-scramble": [
      { type: "word-scramble", id: "rs5-ws-1", answer: "would", hint: "will → ___" },
      { type: "word-scramble", id: "rs5-ws-2", answer: "could", hint: "can → ___" },
      { type: "word-scramble", id: "rs5-ws-3", answer: "might", hint: "may → ___" },
      { type: "word-scramble", id: "rs5-ws-4", answer: "had", hint: "must → ___ to" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "rs5-fm-1", tokens: ["She", "said", "she", "can", "swim"], wrongIndex: 3, correction: "could" },
      { type: "find-mistake", id: "rs5-fm-2", tokens: ["He", "said", "it", "may", "rain"], wrongIndex: 3, correction: "might" },
      { type: "find-mistake", id: "rs5-fm-3", tokens: ["She", "said", "she", "will", "come"], wrongIndex: 3, correction: "would" },
      { type: "find-mistake", id: "rs5-fm-4", tokens: ["He", "said", "she", "must", "to", "leave"], wrongIndex: 3, correction: "had" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "rs5-dd-1", sentence: "She said she ___ swim.", options: ["can", "could", "will"], answerIndex: 1 },
      { type: "drag-drop", id: "rs5-dd-2", sentence: "He said it ___ rain.", options: ["may", "might", "will"], answerIndex: 1 },
      { type: "drag-drop", id: "rs5-dd-3", sentence: "She said she ___ come.", options: ["will", "would", "won't"], answerIndex: 1 },
      { type: "drag-drop", id: "rs5-dd-4", sentence: "He said she ___ to leave.", options: ["must", "had", "has"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "rs5-mm-1",
        prompt: "Modal → Backshift:",
        pairs: [
          { left: "will", right: "would" },
          { left: "can", right: "could" },
          { left: "may", right: "might" },
          { left: "must", right: "had to" },
        ],
      },
    ],
  },

  "rs-6": {
    "word-scramble": [
      { type: "word-scramble", id: "rs6-ws-1", answer: "said", hint: "He ___ he was tired." },
      { type: "word-scramble", id: "rs6-ws-2", answer: "told", hint: "She ___ me to sit down." },
      { type: "word-scramble", id: "rs6-ws-3", answer: "asked", hint: "He ___ me if I could help." },
      { type: "word-scramble", id: "rs6-ws-4", answer: "would", hint: "Backshift of 'will' → ___" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "rs6-fm-1", tokens: ["She", "told", "that", "she", "was", "happy"], wrongIndex: 1, correction: "said" },
      { type: "find-mistake", id: "rs6-fm-2", tokens: ["He", "said", "he", "will", "come", "tomorrow"], wrongIndex: 3, correction: "would" },
      { type: "find-mistake", id: "rs6-fm-3", tokens: ["She", "asked", "where", "do", "I", "live"], wrongIndex: 3, correction: "— (no do)" },
      { type: "find-mistake", id: "rs6-fm-4", tokens: ["He", "asked", "me", "open", "the", "door"], wrongIndex: 3, correction: "to open" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "rs6-dd-1", sentence: "She ___ me she was tired.", options: ["said", "told", "asked"], answerIndex: 1 },
      { type: "drag-drop", id: "rs6-dd-2", sentence: "He said he ___ come the next day.", options: ["will", "would", "can"], answerIndex: 1 },
      { type: "drag-drop", id: "rs6-dd-3", sentence: "She asked where I ___.", options: ["live", "lived", "do live"], answerIndex: 1 },
      { type: "drag-drop", id: "rs6-dd-4", sentence: "He told us ___ late.", options: ["don't be", "not to be", "to not be"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "rs6-mm-1",
        prompt: "Direct → Reported (genel):",
        pairs: [
          { left: "Statement", right: "said (that) + clause" },
          { left: "Y/N soru", right: "asked if/whether + clause" },
          { left: "Wh-soru", right: "asked wh-word + clause" },
          { left: "Emir", right: "told + obj + to/not to + V1" },
        ],
      },
    ],
  },

  "rel-1": {
    "word-scramble": [
      { type: "word-scramble", id: "rel1-ws-1", answer: "who", hint: "The man ___ called me." },
      { type: "word-scramble", id: "rel1-ws-2", answer: "whom", hint: "The person ___ I met. (formal)" },
      { type: "word-scramble", id: "rel1-ws-3", answer: "lives", hint: "The girl who ___ next door." },
      { type: "word-scramble", id: "rel1-ws-4", answer: "called", hint: "The woman who ___ me." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "rel1-fm-1", tokens: ["The", "boy", "which", "lives", "here"], wrongIndex: 2, correction: "who" },
      { type: "find-mistake", id: "rel1-fm-2", tokens: ["The", "girl", "where", "won"], wrongIndex: 2, correction: "who" },
      { type: "find-mistake", id: "rel1-fm-3", tokens: ["The", "doctor", "what", "works"], wrongIndex: 2, correction: "who" },
      { type: "find-mistake", id: "rel1-fm-4", tokens: ["The", "person", "whose", "I", "met"], wrongIndex: 2, correction: "whom" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "rel1-dd-1", sentence: "The woman ___ called is my aunt.", options: ["which", "who", "where"], answerIndex: 1 },
      { type: "drag-drop", id: "rel1-dd-2", sentence: "The man ___ you met. (formal)", options: ["who", "whom", "which"], answerIndex: 1 },
      { type: "drag-drop", id: "rel1-dd-3", sentence: "The child ___ is crying.", options: ["which", "who", "where"], answerIndex: 1 },
      { type: "drag-drop", id: "rel1-dd-4", sentence: "I know the person ___ wrote this.", options: ["which", "who", "where"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "rel1-mm-1",
        prompt: "İsim tipi → Relative:",
        pairs: [
          { left: "İnsan (özne)", right: "who / that" },
          { left: "İnsan (object, formal)", right: "whom" },
          { left: "İnsan (object, günlük)", right: "who / that" },
          { left: "Hayvan/eşya", right: "which / that" },
        ],
      },
    ],
  },

  "rel-2": {
    "word-scramble": [
      { type: "word-scramble", id: "rel2-ws-1", answer: "which", hint: "The book ___ I read." },
      { type: "word-scramble", id: "rel2-ws-2", answer: "bought", hint: "The car which he ___." },
      { type: "word-scramble", id: "rel2-ws-3", answer: "cat", hint: "The ___ which lives with us." },
      { type: "word-scramble", id: "rel2-ws-4", answer: "barking", hint: "The dog which is ___." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "rel2-fm-1", tokens: ["The", "dog", "who", "is", "barking"], wrongIndex: 2, correction: "which/that" },
      { type: "find-mistake", id: "rel2-fm-2", tokens: ["The", "movie", "who", "we", "saw"], wrongIndex: 2, correction: "which/that" },
      { type: "find-mistake", id: "rel2-fm-3", tokens: ["The", "cat", "where", "lives"], wrongIndex: 2, correction: "which/that" },
      { type: "find-mistake", id: "rel2-fm-4", tokens: ["The", "book", "whom", "I", "read"], wrongIndex: 2, correction: "which/that" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "rel2-dd-1", sentence: "The book ___ I read was great.", options: ["who", "which", "whose"], answerIndex: 1 },
      { type: "drag-drop", id: "rel2-dd-2", sentence: "The dog ___ is barking is mine.", options: ["who", "which", "whose"], answerIndex: 1 },
      { type: "drag-drop", id: "rel2-dd-3", sentence: "The house ___ she bought is big.", options: ["who", "which", "whose"], answerIndex: 1 },
      { type: "drag-drop", id: "rel2-dd-4", sentence: "I saw a bird ___ could talk.", options: ["who", "which", "whose"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "rel2-mm-1",
        prompt: "İsim → Relative pronoun:",
        pairs: [
          { left: "Kitap", right: "which/that" },
          { left: "Araba", right: "which/that" },
          { left: "Köpek", right: "which/that" },
          { left: "Kuş", right: "which/that" },
        ],
      },
    ],
  },

  "rel-3": {
    "word-scramble": [
      { type: "word-scramble", id: "rel3-ws-1", answer: "that", hint: "The best book ___ I've read." },
      { type: "word-scramble", id: "rel3-ws-2", answer: "both", hint: "'that' = insan + eşya = ___" },
      { type: "word-scramble", id: "rel3-ws-3", answer: "defining", hint: "'that' kullanılır → ___ clause" },
      { type: "word-scramble", id: "rel3-ws-4", answer: "dropped", hint: "Object 'that' → ___" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "rel3-fm-1", tokens: ["My", "father,", "that", "lives", "in", "Ankara"], wrongIndex: 2, correction: "who" },
      { type: "find-mistake", id: "rel3-fm-2", tokens: ["The", "best", "book", "who", "I", "read"], wrongIndex: 3, correction: "that" },
      { type: "find-mistake", id: "rel3-fm-3", tokens: ["The", "dog", "that", "is", "barking,", "that", "is", "mine"], wrongIndex: 5, correction: "(extra that)" },
      { type: "find-mistake", id: "rel3-fm-4", tokens: ["The", "cake", "whom", "she", "made"], wrongIndex: 2, correction: "that" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "rel3-dd-1", sentence: "The man ___ called me is my friend.", options: ["which", "that", "where"], answerIndex: 1 },
      { type: "drag-drop", id: "rel3-dd-2", sentence: "The best movie ___ I've seen.", options: ["who", "which", "that"], answerIndex: 2 },
      { type: "drag-drop", id: "rel3-dd-3", sentence: "The house ___ we bought is new.", options: ["who", "that", "where"], answerIndex: 1 },
      { type: "drag-drop", id: "rel3-dd-4", sentence: "The cake ___ she made is delicious.", options: ["who", "that", "where"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "rel3-mm-1",
        prompt: "'that' kullanımı:",
        pairs: [
          { left: "İnsan", right: "that (= who)" },
          { left: "Eşya", right: "that (= which)" },
          { left: "Superlative", right: "that tercih edilir" },
          { left: "Non-defining", right: "that kullanılmaz" },
        ],
      },
    ],
  },

  "rel-4": {
    "word-scramble": [
      { type: "word-scramble", id: "rel4-ws-1", answer: "whose", hint: "The boy ___ bike was stolen." },
      { type: "word-scramble", id: "rel4-ws-2", answer: "possession", hint: "whose = ___" },
      { type: "word-scramble", id: "rel4-ws-3", answer: "mother", hint: "The boy whose ___ is a doctor." },
      { type: "word-scramble", id: "rel4-ws-4", answer: "tires", hint: "The car whose ___ are flat." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "rel4-fm-1", tokens: ["The", "girl", "who", "dog", "is", "this"], wrongIndex: 2, correction: "whose" },
      { type: "find-mistake", id: "rel4-fm-2", tokens: ["The", "car", "which", "tires", "are", "flat"], wrongIndex: 2, correction: "whose" },
      { type: "find-mistake", id: "rel4-fm-3", tokens: ["The", "company", "who", "employees", "are", "happy"], wrongIndex: 2, correction: "whose" },
      { type: "find-mistake", id: "rel4-fm-4", tokens: ["The", "boy", "who's", "mother", "is", "a", "doctor"], wrongIndex: 2, correction: "whose" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "rel4-dd-1", sentence: "The boy ___ bike was stolen.", options: ["who", "whose", "whom"], answerIndex: 1 },
      { type: "drag-drop", id: "rel4-dd-2", sentence: "The car ___ tires are flat.", options: ["who", "whose", "which"], answerIndex: 1 },
      { type: "drag-drop", id: "rel4-dd-3", sentence: "The writer ___ book I love.", options: ["who", "whose", "whom"], answerIndex: 1 },
      { type: "drag-drop", id: "rel4-dd-4", sentence: "The dog ___ tail is wagging.", options: ["who", "whose", "where"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "rel4-mm-1",
        prompt: "Anlam → Kelime:",
        pairs: [
          { left: "İyelik", right: "whose" },
          { left: "who is / has", right: "who's" },
          { left: "İnsan için iyelik", right: "whose" },
          { left: "Eşya için iyelik", right: "whose" },
        ],
      },
    ],
  },

  "rel-5": {
    "word-scramble": [
      { type: "word-scramble", id: "rel5-ws-1", answer: "where", hint: "The city ___ I was born." },
      { type: "word-scramble", id: "rel5-ws-2", answer: "when", hint: "The day ___ we met." },
      { type: "word-scramble", id: "rel5-ws-3", answer: "why", hint: "The reason ___ he left." },
      { type: "word-scramble", id: "rel5-ws-4", answer: "place", hint: "where → refers to ___" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "rel5-fm-1", tokens: ["The", "day", "which", "we", "met"], wrongIndex: 2, correction: "when" },
      { type: "find-mistake", id: "rel5-fm-2", tokens: ["The", "restaurant", "when", "we", "dined"], wrongIndex: 2, correction: "where" },
      { type: "find-mistake", id: "rel5-fm-3", tokens: ["The", "reason", "when", "I", "called"], wrongIndex: 2, correction: "why" },
      { type: "find-mistake", id: "rel5-fm-4", tokens: ["The", "place", "why", "I", "grew", "up"], wrongIndex: 2, correction: "where" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "rel5-dd-1", sentence: "This is the place ___ we met.", options: ["which", "where", "when"], answerIndex: 1 },
      { type: "drag-drop", id: "rel5-dd-2", sentence: "I remember the day ___ we met.", options: ["which", "where", "when"], answerIndex: 2 },
      { type: "drag-drop", id: "rel5-dd-3", sentence: "The reason ___ he left.", options: ["where", "when", "why"], answerIndex: 2 },
      { type: "drag-drop", id: "rel5-dd-4", sentence: "The restaurant ___ we had dinner.", options: ["which", "where", "when"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "rel5-mm-1",
        prompt: "İsim tipi → Relative adverb:",
        pairs: [
          { left: "Yer", right: "where" },
          { left: "Zaman", right: "when" },
          { left: "Sebep", right: "why" },
          { left: "İsim", right: "who/which/that" },
        ],
      },
    ],
  },

  "rel-6": {
    "word-scramble": [
      { type: "word-scramble", id: "rel6-ws-1", answer: "who", hint: "The woman ___ called." },
      { type: "word-scramble", id: "rel6-ws-2", answer: "which", hint: "The book ___ I read." },
      { type: "word-scramble", id: "rel6-ws-3", answer: "whose", hint: "The boy ___ bike was stolen." },
      { type: "word-scramble", id: "rel6-ws-4", answer: "where", hint: "The city ___ I was born." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "rel6-fm-1", tokens: ["The", "dog", "who", "is", "barking"], wrongIndex: 2, correction: "which/that" },
      { type: "find-mistake", id: "rel6-fm-2", tokens: ["The", "city", "when", "I", "grew", "up"], wrongIndex: 2, correction: "where" },
      { type: "find-mistake", id: "rel6-fm-3", tokens: ["The", "reason", "who", "I", "called"], wrongIndex: 2, correction: "why" },
      { type: "find-mistake", id: "rel6-fm-4", tokens: ["The", "car", "which", "tires", "are", "flat"], wrongIndex: 2, correction: "whose" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "rel6-dd-1", sentence: "The man ___ called me.", options: ["which", "who", "where"], answerIndex: 1 },
      { type: "drag-drop", id: "rel6-dd-2", sentence: "The book ___ I read.", options: ["who", "which", "whose"], answerIndex: 1 },
      { type: "drag-drop", id: "rel6-dd-3", sentence: "The boy ___ bike was stolen.", options: ["who", "whose", "which"], answerIndex: 1 },
      { type: "drag-drop", id: "rel6-dd-4", sentence: "That's the reason ___ I called.", options: ["where", "when", "why"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "rel6-mm-1",
        prompt: "Relative Pronoun tablosu:",
        pairs: [
          { left: "İnsan", right: "who / whom / that" },
          { left: "Eşya/hayvan", right: "which / that" },
          { left: "İyelik", right: "whose" },
          { left: "Yer/zaman/sebep", right: "where / when / why" },
        ],
      },
    ],
  },

  "gi-1": {
    "word-scramble": [
      { type: "word-scramble", id: "gi1-ws-1", answer: "reading", hint: "I enjoy ___ books." },
      { type: "word-scramble", id: "gi1-ws-2", answer: "doing", hint: "She finished ___ her work." },
      { type: "word-scramble", id: "gi1-ws-3", answer: "seeing", hint: "He avoided ___ her." },
      { type: "word-scramble", id: "gi1-ws-4", answer: "going", hint: "She suggested ___ out." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "gi1-fm-1", tokens: ["She", "finished", "to", "do"], wrongIndex: 2, correction: "doing (no to)" },
      { type: "find-mistake", id: "gi1-fm-2", tokens: ["I", "enjoy", "to", "read"], wrongIndex: 2, correction: "reading (no to)" },
      { type: "find-mistake", id: "gi1-fm-3", tokens: ["He", "avoided", "to", "see"], wrongIndex: 2, correction: "seeing (no to)" },
      { type: "find-mistake", id: "gi1-fm-4", tokens: ["I", "can't", "imagine", "to", "live"], wrongIndex: 3, correction: "living (no to)" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "gi1-dd-1", sentence: "I love ___ movies.", options: ["watch", "to watch", "watching"], answerIndex: 2 },
      { type: "drag-drop", id: "gi1-dd-2", sentence: "She enjoys ___ in the park.", options: ["run", "to run", "running"], answerIndex: 2 },
      { type: "drag-drop", id: "gi1-dd-3", sentence: "Can you imagine ___ there?", options: ["live", "to live", "living"], answerIndex: 2 },
      { type: "drag-drop", id: "gi1-dd-4", sentence: "Do you mind ___ the window?", options: ["open", "to open", "opening"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "gi1-mm-1",
        prompt: "Fiil → Yapısı:",
        pairs: [
          { left: "enjoy", right: "+ V-ing" },
          { left: "finish", right: "+ V-ing" },
          { left: "avoid", right: "+ V-ing" },
          { left: "suggest", right: "+ V-ing" },
        ],
      },
    ],
  },

  "gi-2": {
    "word-scramble": [
      { type: "word-scramble", id: "gi2-ws-1", answer: "to", hint: "I want ___ go." },
      { type: "word-scramble", id: "gi2-ws-2", answer: "go", hint: "I want to ___." },
      { type: "word-scramble", id: "gi2-ws-3", answer: "decided", hint: "She ___ to travel." },
      { type: "word-scramble", id: "gi2-ws-4", answer: "promised", hint: "He ___ to help." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "gi2-fm-1", tokens: ["She", "decided", "going"], wrongIndex: 2, correction: "to go" },
      { type: "find-mistake", id: "gi2-fm-2", tokens: ["He", "promised", "being"], wrongIndex: 2, correction: "to be" },
      { type: "find-mistake", id: "gi2-fm-3", tokens: ["I", "hope", "seeing", "you"], wrongIndex: 2, correction: "to see" },
      { type: "find-mistake", id: "gi2-fm-4", tokens: ["They", "refused", "signing"], wrongIndex: 2, correction: "to sign" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "gi2-dd-1", sentence: "I want ___ a car.", options: ["buy", "to buy", "buying"], answerIndex: 1 },
      { type: "drag-drop", id: "gi2-dd-2", sentence: "She agreed ___ with us.", options: ["come", "to come", "coming"], answerIndex: 1 },
      { type: "drag-drop", id: "gi2-dd-3", sentence: "They planned ___ early.", options: ["leave", "to leave", "leaving"], answerIndex: 1 },
      { type: "drag-drop", id: "gi2-dd-4", sentence: "He learned ___ the guitar.", options: ["play", "to play", "playing"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "gi2-mm-1",
        prompt: "Fiil → Yapısı:",
        pairs: [
          { left: "want", right: "+ to V1" },
          { left: "decide", right: "+ to V1" },
          { left: "agree", right: "+ to V1" },
          { left: "hope", right: "+ to V1" },
        ],
      },
    ],
  },

  "gi-3": {
    "word-scramble": [
      { type: "word-scramble", id: "gi3-ws-1", answer: "to", hint: "Remember ___ call (future)." },
      { type: "word-scramble", id: "gi3-ws-2", answer: "calling", hint: "I remember ___ him (past)." },
      { type: "word-scramble", id: "gi3-ws-3", answer: "smoking", hint: "He stopped ___ (quit)." },
      { type: "word-scramble", id: "gi3-ws-4", answer: "regret", hint: "I ___ saying that." },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "gi3-fm-1", tokens: ["I", "remember", "to", "meet", "him", "last", "year"], wrongIndex: 2, correction: "meeting (past)" },
      { type: "find-mistake", id: "gi3-fm-2", tokens: ["Remember", "locking", "the", "door", "when", "you", "leave"], wrongIndex: 1, correction: "to lock (future)" },
      { type: "find-mistake", id: "gi3-fm-3", tokens: ["I", "tried", "opening", "the", "jar", "but", "couldn't"], wrongIndex: 2, correction: "to open (struggle)" },
      { type: "find-mistake", id: "gi3-fm-4", tokens: ["He", "stopped", "to", "smoke", "last", "year"], wrongIndex: 2, correction: "smoking (quit)" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "gi3-dd-1", sentence: "Remember ___ the door (future).", options: ["lock", "to lock", "locking"], answerIndex: 1 },
      { type: "drag-drop", id: "gi3-dd-2", sentence: "I remember ___ him (past).", options: ["to meet", "meeting", "met"], answerIndex: 1 },
      { type: "drag-drop", id: "gi3-dd-3", sentence: "He stopped ___ (quit).", options: ["smoke", "to smoke", "smoking"], answerIndex: 2 },
      { type: "drag-drop", id: "gi3-dd-4", sentence: "Don't forget ___ me.", options: ["call", "to call", "calling"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "gi3-mm-1",
        prompt: "Yapı → Anlam:",
        pairs: [
          { left: "remember + to V1", right: "ileride unutma" },
          { left: "remember + V-ing", right: "geçmişi hatırla" },
          { left: "stop + V-ing", right: "bırakmak" },
          { left: "stop + to V1", right: "yapmak için durmak" },
        ],
      },
    ],
  },

  "gi-4": {
    "word-scramble": [
      { type: "word-scramble", id: "gi4-ws-1", answer: "in", hint: "interested ___ learning" },
      { type: "word-scramble", id: "gi4-ws-2", answer: "at", hint: "good ___ singing" },
      { type: "word-scramble", id: "gi4-ws-3", answer: "for", hint: "thank you ___ helping" },
      { type: "word-scramble", id: "gi4-ws-4", answer: "of", hint: "tired ___ waiting" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "gi4-fm-1", tokens: ["She's", "good", "at", "to", "play"], wrongIndex: 3, correction: "playing (no to)" },
      { type: "find-mistake", id: "gi4-fm-2", tokens: ["I'm", "tired", "of", "to", "wait"], wrongIndex: 3, correction: "waiting (no to)" },
      { type: "find-mistake", id: "gi4-fm-3", tokens: ["He", "apologized", "for", "be", "late"], wrongIndex: 3, correction: "being (V-ing)" },
      { type: "find-mistake", id: "gi4-fm-4", tokens: ["Afraid", "of", "to", "fly"], wrongIndex: 2, correction: "flying (no to)" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "gi4-dd-1", sentence: "Interested in ___.", options: ["learn", "to learn", "learning"], answerIndex: 2 },
      { type: "drag-drop", id: "gi4-dd-2", sentence: "Good at ___.", options: ["play", "to play", "playing"], answerIndex: 2 },
      { type: "drag-drop", id: "gi4-dd-3", sentence: "Thank you for ___.", options: ["help", "to help", "helping"], answerIndex: 2 },
      { type: "drag-drop", id: "gi4-dd-4", sentence: "Tired of ___.", options: ["wake", "to wake", "waking"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "gi4-mm-1",
        prompt: "Kalıp → Edat:",
        pairs: [
          { left: "interested", right: "in + V-ing" },
          { left: "good", right: "at + V-ing" },
          { left: "tired", right: "of + V-ing" },
          { left: "thank you", right: "for + V-ing" },
        ],
      },
    ],
  },

  "gi-5": {
    "word-scramble": [
      { type: "word-scramble", id: "gi5-ws-1", answer: "happy", hint: "I'm ___ to help." },
      { type: "word-scramble", id: "gi5-ws-2", answer: "too", hint: "It's ___ cold to go." },
      { type: "word-scramble", id: "gi5-ws-3", answer: "enough", hint: "old ___ to travel" },
      { type: "word-scramble", id: "gi5-ws-4", answer: "to", hint: "came here ___ see you" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "gi5-fm-1", tokens: ["It's", "too", "cold", "going", "outside"], wrongIndex: 3, correction: "to go" },
      { type: "find-mistake", id: "gi5-fm-2", tokens: ["This", "problem", "is", "enough", "hard"], wrongIndex: 3, correction: "(after adj)" },
      { type: "find-mistake", id: "gi5-fm-3", tokens: ["I", "came", "for", "see", "you"], wrongIndex: 2, correction: "to" },
      { type: "find-mistake", id: "gi5-fm-4", tokens: ["He's", "ready", "leaving"], wrongIndex: 2, correction: "to leave" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "gi5-dd-1", sentence: "I'm happy ___ you.", options: ["see", "to see", "seeing"], answerIndex: 1 },
      { type: "drag-drop", id: "gi5-dd-2", sentence: "It's too cold ___ outside.", options: ["go", "to go", "going"], answerIndex: 1 },
      { type: "drag-drop", id: "gi5-dd-3", sentence: "He's old ___ to travel.", options: ["too", "enough", "very"], answerIndex: 1 },
      { type: "drag-drop", id: "gi5-dd-4", sentence: "It's hard ___ a good job.", options: ["find", "to find", "finding"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "gi5-mm-1",
        prompt: "Yapı → Kullanım:",
        pairs: [
          { left: "sıfat + to V1", right: "happy to see" },
          { left: "too + adj + to V1", right: "too cold to go" },
          { left: "adj + enough + to V1", right: "old enough to" },
          { left: "to + V1 (amaç)", right: "came to see" },
        ],
      },
    ],
  },

  "gi-6": {
    "word-scramble": [
      { type: "word-scramble", id: "gi6-ws-1", answer: "reading", hint: "enjoy ___" },
      { type: "word-scramble", id: "gi6-ws-2", answer: "to", hint: "decided ___ go" },
      { type: "word-scramble", id: "gi6-ws-3", answer: "at", hint: "good ___ singing" },
      { type: "word-scramble", id: "gi6-ws-4", answer: "enough", hint: "old ___ to drive" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "gi6-fm-1", tokens: ["She", "decided", "going"], wrongIndex: 2, correction: "to go" },
      { type: "find-mistake", id: "gi6-fm-2", tokens: ["I", "enjoy", "to", "read"], wrongIndex: 2, correction: "reading (no to)" },
      { type: "find-mistake", id: "gi6-fm-3", tokens: ["Good", "at", "to", "play"], wrongIndex: 2, correction: "playing (no to)" },
      { type: "find-mistake", id: "gi6-fm-4", tokens: ["Too", "cold", "going"], wrongIndex: 2, correction: "to go" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "gi6-dd-1", sentence: "I enjoy ___ books.", options: ["read", "to read", "reading"], answerIndex: 2 },
      { type: "drag-drop", id: "gi6-dd-2", sentence: "She wants ___ a car.", options: ["buy", "to buy", "buying"], answerIndex: 1 },
      { type: "drag-drop", id: "gi6-dd-3", sentence: "Tired of ___.", options: ["wait", "to wait", "waiting"], answerIndex: 2 },
      { type: "drag-drop", id: "gi6-dd-4", sentence: "He came ___ see me.", options: ["for", "to", "in"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "gi6-mm-1",
        prompt: "Genel kural:",
        pairs: [
          { left: "enjoy / finish / mind", right: "+ V-ing" },
          { left: "want / decide / hope", right: "+ to V1" },
          { left: "Preposition sonrası", right: "+ V-ing" },
          { left: "too/enough sonrası", right: "+ to V1" },
        ],
      },
    ],
  },

  "phv-1": {
    "word-scramble": [
      { type: "word-scramble", id: "phv1-ws-1", answer: "up", hint: "get ___ (kalkmak)" },
      { type: "word-scramble", id: "phv1-ws-2", answer: "along", hint: "get ___ with (iyi geçinmek)" },
      { type: "word-scramble", id: "phv1-ws-3", answer: "over", hint: "get ___ (atlatmak)" },
      { type: "word-scramble", id: "phv1-ws-4", answer: "on", hint: "get ___ (araca binmek)" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "phv1-fm-1", tokens: ["She", "gets", "along", "her", "sister"], wrongIndex: 3, correction: "with her" },
      { type: "find-mistake", id: "phv1-fm-2", tokens: ["He", "gets", "up", "the", "bus"], wrongIndex: 2, correction: "on" },
      { type: "find-mistake", id: "phv1-fm-3", tokens: ["I", "can't", "get", "on", "this", "problem"], wrongIndex: 3, correction: "over" },
      { type: "find-mistake", id: "phv1-fm-4", tokens: ["We", "get", "up", "on", "little", "money"], wrongIndex: 2, correction: "by" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "phv1-dd-1", sentence: "I ___ at 6.", options: ["get up", "get on", "get over"], answerIndex: 0 },
      { type: "drag-drop", id: "phv1-dd-2", sentence: "He ___ with everyone.", options: ["gets up", "gets along", "gets off"], answerIndex: 1 },
      { type: "drag-drop", id: "phv1-dd-3", sentence: "She ___ the loss.", options: ["got up", "got on", "got over"], answerIndex: 2 },
      { type: "drag-drop", id: "phv1-dd-4", sentence: "Don't forget to ___ the bus.", options: ["get up", "get on", "get over"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "phv1-mm-1",
        prompt: "Phrasal verb → Anlam:",
        pairs: [
          { left: "get up", right: "kalkmak" },
          { left: "get along with", right: "iyi geçinmek" },
          { left: "get over", right: "atlatmak" },
          { left: "get by", right: "az ile geçinmek" },
        ],
      },
    ],
  },

  "phv-2": {
    "word-scramble": [
      { type: "word-scramble", id: "phv2-ws-1", answer: "on", hint: "turn ___ (açmak)" },
      { type: "word-scramble", id: "phv2-ws-2", answer: "off", hint: "turn ___ (kapatmak)" },
      { type: "word-scramble", id: "phv2-ws-3", answer: "down", hint: "turn ___ (reddetmek)" },
      { type: "word-scramble", id: "phv2-ws-4", answer: "up", hint: "turn ___ (sesi artırmak)" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "phv2-fm-1", tokens: ["He", "turned", "on", "the", "offer"], wrongIndex: 2, correction: "down" },
      { type: "find-mistake", id: "phv2-fm-2", tokens: ["Turn", "off", "the", "volume"], wrongIndex: 1, correction: "up/down" },
      { type: "find-mistake", id: "phv2-fm-3", tokens: ["He", "turned", "off", "at", "the", "party"], wrongIndex: 2, correction: "up" },
      { type: "find-mistake", id: "phv2-fm-4", tokens: ["Please", "turn", "up", "the", "light"], wrongIndex: 2, correction: "on" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "phv2-dd-1", sentence: "Please ___ the light.", options: ["turn on", "turn down", "turn up"], answerIndex: 0 },
      { type: "drag-drop", id: "phv2-dd-2", sentence: "___ the TV, it's loud.", options: ["Turn on", "Turn down", "Turn up"], answerIndex: 1 },
      { type: "drag-drop", id: "phv2-dd-3", sentence: "He ___ the offer.", options: ["turned on", "turned up", "turned down"], answerIndex: 2 },
      { type: "drag-drop", id: "phv2-dd-4", sentence: "He ___ unexpectedly.", options: ["turned on", "turned up", "turned off"], answerIndex: 1 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "phv2-mm-1",
        prompt: "Phrasal verb → Anlam:",
        pairs: [
          { left: "turn on", right: "açmak" },
          { left: "turn off", right: "kapatmak" },
          { left: "turn up", right: "sesi artırmak / gelmek" },
          { left: "turn down", right: "sesi kısmak / reddetmek" },
        ],
      },
    ],
  },

  "phv-3": {
    "word-scramble": [
      { type: "word-scramble", id: "phv3-ws-1", answer: "after", hint: "look ___ (göz kulak olmak)" },
      { type: "word-scramble", id: "phv3-ws-2", answer: "for", hint: "look ___ (aramak)" },
      { type: "word-scramble", id: "phv3-ws-3", answer: "up", hint: "look ___ (sözlükte aramak)" },
      { type: "word-scramble", id: "phv3-ws-4", answer: "into", hint: "look ___ (araştırmak)" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "phv3-fm-1", tokens: ["I'm", "looking", "up", "my", "keys"], wrongIndex: 2, correction: "for" },
      { type: "find-mistake", id: "phv3-fm-2", tokens: ["Police", "are", "looking", "for", "the", "case"], wrongIndex: 3, correction: "into" },
      { type: "find-mistake", id: "phv3-fm-3", tokens: ["She", "looks", "for", "her", "baby"], wrongIndex: 2, correction: "after" },
      { type: "find-mistake", id: "phv3-fm-4", tokens: ["Look", "after", "the", "word", "in", "dictionary"], wrongIndex: 1, correction: "up" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "phv3-dd-1", sentence: "Can you ___ the kids?", options: ["look after", "look for", "look up"], answerIndex: 0 },
      { type: "drag-drop", id: "phv3-dd-2", sentence: "I'm ___ my phone.", options: ["looking after", "looking for", "looking up"], answerIndex: 1 },
      { type: "drag-drop", id: "phv3-dd-3", sentence: "Please ___ the word.", options: ["look after", "look for", "look up"], answerIndex: 2 },
      { type: "drag-drop", id: "phv3-dd-4", sentence: "Police are ___ the matter.", options: ["looking after", "looking for", "looking into"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "phv3-mm-1",
        prompt: "Phrasal verb → Anlam:",
        pairs: [
          { left: "look after", right: "göz kulak olmak" },
          { left: "look for", right: "aramak" },
          { left: "look up", right: "sözlükte aramak" },
          { left: "look into", right: "araştırmak" },
        ],
      },
    ],
  },

  "phv-4": {
    "word-scramble": [
      { type: "word-scramble", id: "phv4-ws-1", answer: "off", hint: "take ___ (kalkmak/çıkarmak)" },
      { type: "word-scramble", id: "phv4-ws-2", answer: "up", hint: "take ___ (yeni hobi)" },
      { type: "word-scramble", id: "phv4-ws-3", answer: "after", hint: "take ___ (benzemek)" },
      { type: "word-scramble", id: "phv4-ws-4", answer: "over", hint: "take ___ (devralmak)" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "phv4-fm-1", tokens: ["He", "took", "after", "painting"], wrongIndex: 2, correction: "up" },
      { type: "find-mistake", id: "phv4-fm-2", tokens: ["Please", "take", "up", "your", "shoes"], wrongIndex: 2, correction: "off" },
      { type: "find-mistake", id: "phv4-fm-3", tokens: ["His", "son", "took", "up", "the", "company"], wrongIndex: 3, correction: "over" },
      { type: "find-mistake", id: "phv4-fm-4", tokens: ["The", "plane", "took", "up", "at", "8"], wrongIndex: 3, correction: "off" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "phv4-dd-1", sentence: "The plane ___ at 8.", options: ["took off", "took up", "took over"], answerIndex: 0 },
      { type: "drag-drop", id: "phv4-dd-2", sentence: "He ___ painting.", options: ["took off", "took up", "took after"], answerIndex: 1 },
      { type: "drag-drop", id: "phv4-dd-3", sentence: "She ___ her mom.", options: ["takes off", "takes up", "takes after"], answerIndex: 2 },
      { type: "drag-drop", id: "phv4-dd-4", sentence: "His son will ___ the business.", options: ["take off", "take up", "take over"], answerIndex: 2 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "phv4-mm-1",
        prompt: "Phrasal verb → Anlam:",
        pairs: [
          { left: "take off", right: "kalkmak / çıkarmak" },
          { left: "take up", right: "yeni hobi" },
          { left: "take after", right: "benzemek" },
          { left: "take over", right: "devralmak" },
        ],
      },
    ],
  },

  "phv-5": {
    "word-scramble": [
      { type: "word-scramble", id: "phv5-ws-1", answer: "up", hint: "give ___ (pes etmek)" },
      { type: "word-scramble", id: "phv5-ws-2", answer: "off", hint: "put ___ (ertelemek)" },
      { type: "word-scramble", id: "phv5-ws-3", answer: "down", hint: "break ___ (bozulmak)" },
      { type: "word-scramble", id: "phv5-ws-4", answer: "up", hint: "break ___ (ayrılmak)" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "phv5-fm-1", tokens: ["We", "put", "on", "the", "meeting"], wrongIndex: 2, correction: "off" },
      { type: "find-mistake", id: "phv5-fm-2", tokens: ["They", "broke", "down", "last", "month"], wrongIndex: 2, correction: "up (ilişki)" },
      { type: "find-mistake", id: "phv5-fm-3", tokens: ["Put", "off", "your", "coat"], wrongIndex: 1, correction: "on" },
      { type: "find-mistake", id: "phv5-fm-4", tokens: ["Don't", "give", "in", "smoking"], wrongIndex: 2, correction: "up" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "phv5-dd-1", sentence: "Don't ___ smoking.", options: ["give up", "give in", "give out"], answerIndex: 0 },
      { type: "drag-drop", id: "phv5-dd-2", sentence: "___ the meeting.", options: ["Put on", "Put off", "Put up"], answerIndex: 1 },
      { type: "drag-drop", id: "phv5-dd-3", sentence: "My car ___.", options: ["broke up", "broke down", "broke off"], answerIndex: 1 },
      { type: "drag-drop", id: "phv5-dd-4", sentence: "They ___ last week.", options: ["broke up", "broke down", "broke off"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "phv5-mm-1",
        prompt: "Phrasal verb → Anlam:",
        pairs: [
          { left: "give up", right: "pes etmek" },
          { left: "put off", right: "ertelemek" },
          { left: "put on", right: "giymek" },
          { left: "break down", right: "bozulmak" },
        ],
      },
    ],
  },

  "phv-6": {
    "word-scramble": [
      { type: "word-scramble", id: "phv6-ws-1", answer: "up", hint: "get ___ (kalkmak)" },
      { type: "word-scramble", id: "phv6-ws-2", answer: "on", hint: "turn ___ (açmak)" },
      { type: "word-scramble", id: "phv6-ws-3", answer: "after", hint: "look ___ (bakmak)" },
      { type: "word-scramble", id: "phv6-ws-4", answer: "off", hint: "take ___ (kalkmak)" },
    ],
    "find-mistake": [
      { type: "find-mistake", id: "phv6-fm-1", tokens: ["Don't", "give", "in", "on", "dreams"], wrongIndex: 2, correction: "up" },
      { type: "find-mistake", id: "phv6-fm-2", tokens: ["She", "looks", "for", "her", "baby"], wrongIndex: 2, correction: "after" },
      { type: "find-mistake", id: "phv6-fm-3", tokens: ["He", "took", "up", "his", "shoes"], wrongIndex: 2, correction: "off" },
      { type: "find-mistake", id: "phv6-fm-4", tokens: ["My", "car", "broke", "up", "yesterday"], wrongIndex: 3, correction: "down" },
    ],
    "drag-drop": [
      { type: "drag-drop", id: "phv6-dd-1", sentence: "I ___ at 7.", options: ["get up", "get on", "get over"], answerIndex: 0 },
      { type: "drag-drop", id: "phv6-dd-2", sentence: "Please ___ the TV.", options: ["turn on", "turn up", "turn off"], answerIndex: 0 },
      { type: "drag-drop", id: "phv6-dd-3", sentence: "Can you ___ the kids?", options: ["look after", "look for", "look up"], answerIndex: 0 },
      { type: "drag-drop", id: "phv6-dd-4", sentence: "The plane ___.", options: ["took off", "took up", "took over"], answerIndex: 0 },
    ],
    "memory-match": [
      {
        type: "memory-match",
        id: "phv6-mm-1",
        prompt: "Fiil → Yaygın particles:",
        pairs: [
          { left: "get", right: "up/along/over/by" },
          { left: "turn", right: "on/off/up/down" },
          { left: "look", right: "after/for/up/into" },
          { left: "take", right: "off/up/after/over" },
        ],
      },
    ],
  },
};
