// ─────────────────────────────────────────────────────────────
//  STORY CONTENT  —  edit the story text here.
//  Keep the layout/components unchanged unless you want to redesign a page.
//
//  Everything a normal person would want to reword lives in this file:
//  chapter titles, subtitles, captions, body lines, sticky notes,
//  speech bubbles, and the tiny doodle labels.
//
//  The drawings (stickmen, bus, papers, etc.) live in the components —
//  but their TEXT labels are pulled from here via `speech` and `labels`.
// ─────────────────────────────────────────────────────────────

/** Pastel accents available for panel labels + sticky notes. */
export type Tint = "yellow" | "sage" | "pink" | "blue";

/** The intro / cover page that opens a chapter. */
export interface ChapterIntro {
  chapterLabel: string; // e.g. "CHAPTER TWO"
  title: string; // e.g. "The School Saga"
  subtitle: string; // the little handwritten line under the title
  caption: string; // the small line at the very bottom
}

/** A single tap-through story page (2A, 2B, 2C, ...). */
export interface StoryPage {
  id: string; // unique id, e.g. "2a"
  label: string; // the badge text, e.g. "2A"
  tint: Tint; // colour of the badge/title highlight
  title: string;
  eyebrow?: string; // small handwritten line under the title
  body: string[]; // each string is its own paragraph/line
  caption?: string; // tiny handwritten line near the bottom
  stickyNote?: string; // the little sticky note comment
  stickyColor?: Tint; // sticky note colour (defaults to yellow)
  stickySide?: "left" | "right"; // which bottom corner it sits in
  // Free-form text used by that page's drawing (speech bubbles + doodle labels).
  speech?: Record<string, string>;
  labels?: Record<string, string>;
  bubbles?: string[]; // floating speech bubbles scattered around the drawing
}

export interface Chapter {
  intro: ChapterIntro;
  pages: StoryPage[];
}

// ─────────────────────────────────────────────────────────────
//  CHAPTER TWO  —  The School Saga
// ─────────────────────────────────────────────────────────────
export const chapterTwo: Chapter = {
  intro: {
    chapterLabel: "chapter two",
    title: "The School Saga",
    subtitle: "(where i realized IB was serious 😱😱)",
    caption: "not kidding this is serious 😂 ",
  },

  pages: [
    // ── 2A ──────────────────────────────────────────────
    {
      id: "2a",
      label: "2A",
      tint: "blue",
      title: "The Book Recommendation",
      eyebrow: "where a book rec met IB",
      body: [
        "so i recommended Atomic Habits cuz we were talking about books.",
        "she said she'd read it when she had time.",
        "which sounded normal at first…",
        "until i found out she had exams next month.",
        "like bruv, the last time i had exams was last year XD",
      ],
      caption: "the start of the serious arc 😂",
      stickyNote: "made me realize how lucky i am to not have one",
      stickyColor: "blue",
      stickySide: "left",
      speech: {
        her: "i'll read it when i have time",
        him: "😎👌🔥",
      },
      labels: {
        book: "Atomic Habits",
        calendar: "exams next month",
      },
    },

    // ── 2B ──────────────────────────────────────────────
    {
      id: "2b",
      label: "2B",
      tint: "sage",
      title: "The Field Trip",
      eyebrow: "a random field trip",
      body: [
        "then somehow, in the middle of everything, she went to a field trip in Jakarta Timur.",
        "the actual event? apparently not that gud.",
        "the bus ride, the singing, and the chaos with friends were peak.",
        "but the chairs were apparently built like a brick.",
        "while me? last time i went field trip, all i remember was touching an elephant's trunk... -_-",
      ],
      caption: "L event",
      stickyNote: "the event was there. the memories were on the bus.",
      stickyColor: "sage",
      stickySide: "right",
      speech: {
        verdict: "the event was meh but the bus ride carries",
      },
      labels: {
        sign: "Jakarta Timur",
        chair: "tuff chair",
        elephant: "elephant trunk", // little label for the elephant doodle
      },
    },

    // ── 2C ──────────────────────────────────────────────
    {
      id: "2c",
      label: "2C",
      tint: "pink",
      title: "What? Essays?",
      eyebrow: "there's more?",
      body: [
        "at first i thought the main problem was exams.",
        "then i found out there were essays too. not just one or two.",
        "TOK. IA. EE. basically a whole damn list.",
        "that was probably the moment i realized IB wasn't just school ",
        "it was serious like fr it is serious😂 ",
      ],
      caption: "before this, it was sunshine & rainbows. after this, it becomes serious😂 ",
      stickyNote: "as if exams weren't enough, IB added another thing",
      stickyColor: "pink",
      stickySide: "right",
      speech: {
        him: "wait, there's more?",
      },
      labels: {
        p1: "TOK",
        p2: "IA",
        p3: "EE",
        p4: "essays",
        p5: "exams",
        help: "damnn",
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────
//  CHAPTER THREE  —  The Grind Arc
// ─────────────────────────────────────────────────────────────
export const chapterThree: Chapter = {
  intro: {
    chapterLabel: "chapter three",
    title: "The Grind Arc",
    subtitle: "(where everybody was tired for different reasons)",
    caption: "this is actually the serious chapter fr",
  },

  pages: [
    // ── 3A ──────────────────────────────────────────────
    {
      id: "3a",
      label: "3A",
      tint: "pink",
      title: "The Exam Monster 😱",
      eyebrow: "when IB getting more serious",
      body: [
        "this was the part where exams started hitting.",
        "not just normal exam stress.",
        "more like too much to study, too little time, and somehow still procrastinating.",
      ],
      caption: "stress level: serious",
      stickyNote: "how much 'serious' i've been putting in this 🤣 ",
      stickyColor: "pink",
      stickySide: "right",
      bubbles: [
        "terrible",
        "haven't studied",
        "too much to study",
        "i regret procrastinating",
      ],
    },

    // ── 3B ──────────────────────────────────────────────
    {
      id: "3b",
      label: "3B",
      tint: "blue",
      title: "Two Different Grinds",
      eyebrow: "same exhaustion, different enemies",
      body: [
        "while she was fighting exams, i was fighting bugs in my AI.",
        "different battlefield.",
        "both high cortisol.",
      ],
      caption: "two grinders. two wolves.",
      stickyNote: "nobody was winning, but at least we both were trying",
      stickyColor: "blue",
      stickySide: "left",
      labels: {
        meTitle: "me",
        herTitle: "her",
        // my side
        ai: "AI",
        bugs: "bugs",
        broken: "why is this broken",
        // her side
        ib: "IB",
        exams: "exams",
        essays: "essays",
        sleep: "push through",
      },
    },

    // ── 3C ──────────────────────────────────────────────
    {
      id: "3c",
      label: "3C",
      tint: "sage",
      title: "Wolf Mode",
      eyebrow: "serious mode activated ",
      body: [
        "then came the real serious arc.",
        "nap in the evening.",
        "wake up at midnight.",
        "push through anyway.",
      ],
      caption: "no sleep, we grind 😎",
      stickyNote: "we were basically night creatures at this point",
      stickyColor: "sage",
      stickySide: "right",
      bubbles: [
        "push throuh",
        "both 😭",
        "i'm practically nocturnal now",
        "the same lol",
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
//  CHAPTER FOUR  —  The Chaos Continues
//  (the aftermath of the grind: lighter, dumber, peak absurdity)
// ─────────────────────────────────────────────────────────────
export const chapterFour: Chapter = {
  intro: {
    chapterLabel: "chapter four",
    title: "The Less Serious Arc",
    subtitle: "where the grind loosened up and the weirdness took over",
    caption: "less stress, more nonsense",
  },

  pages: [
    // ── 4A ──────────────────────────────────────────────
    {
      id: "4a",
      label: "4A",
      tint: "yellow",
      title: "Mandarin Exam",
      eyebrow: "the first absurd moment",
      body: [
        "then came the Mandarin exam.",
        "so naturally, i tried sending something in Chinese…",
        "which is brave, considering my Mandarin history is basically cooked",
      ],
      caption: "chinese master",
      stickyNote: "🔥🔥🔥",
      stickyColor: "yellow",
      stickySide: "right",
      bubbles: [
        "你还活着吗? 🤣",
        "i drew masterpieces there",
        
      ],
    },

    // ── 4B ──────────────────────────────────────────────
    {
      id: "4b",
      label: "4B",
      tint: "blue",
      title: "Sleeping",
      eyebrow: "where i thought she was actually sleeping at school",
      body: [
        "then she posted something abt school",
        "i asked if she was sleeping there. she said yes.",
        "so for a moment, i genuinely believed there was a whole school sleepover situation going on.",
        "turns out… it was just yearbook pics.",
      ],
      caption: "stema not cool 👎",
      stickyNote: "funny when u gave me the sonion reply, i thought it meant soon before 🤣",
      stickyColor: "blue",
      stickySide: "left",
      bubbles: [
        "ru sleeping at school?",
        "yea",
        "wait… actually?",
        "pics.",
        "stemas too lame for that",
      ],
    },

    // ── 4C ──────────────────────────────────────────────
    {
      id: "4c",
      label: "4C",
      tint: "sage",
      title: "Peak Absurdity",
      eyebrow: "where all logic fully collapsed",
      body: [
        "after that, the conversation stopped pretending to be normal.",
        "at first i thought i was the one that is weird and random",
        "patrick sleeping. ai dog slop. medieval speeches for sourdough",
        "then she join it too 🤣",
        "sonion. random stickers. tung tung sahur...",
        "somewhere here, i realized she wasn't just quiet and serious",
        "she was actually one of the most unpredictable people i know.",
      ],
      caption: "be assured thou shalt triumph...",
      stickyNote: "peak times",
      stickyColor: "sage",
      stickySide: "right",
      bubbles: [
        "son",
        "sonion?",
        "tung tung sahur",
        "be assured, thou shalt triumph…",
        "0% logic, 100% vibes",
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
//  CHAPTER FIVE  —  The Graduation Arc
//  (golden hour: where the online person became real)
// ─────────────────────────────────────────────────────────────
export const chapterFive: Chapter = {
  intro: {
    chapterLabel: "chapter five",
    title: "The Graduation Arc",
    subtitle: "where the online person became real",
    caption: "after all the chaos, the good ending arrived.",
  },

  pages: [
    // ── 5A ──────────────────────────────────────────────
    {
      id: "5a",
      label: "5A",
      tint: "yellow",
      title: "The Big Day",
      eyebrow: "from exam stress to graduation medal",
      body: [
        "after all the exams, essays, stress, and 'i think i'll fail' moments…",
        "graduation actually happened.",
        "the same person who was drowning in IB a few weeks ago was now standing there with a medal around her neck.",
      ],
      caption: "yeayy good ending",
      stickyNote: "proud of u",
      stickyColor: "yellow",
      stickySide: "right",
      labels: {
        p1: "IB",
        p2: "essays",
        p3: "exams",
        medal: "medal get",
      },
    },

    // ── 5B ──────────────────────────────────────────────
    {
      id: "5b",
      label: "5B",
      tint: "blue",
      title: "The photo",
      eyebrow: "what? photo?",
      body: [
        "then somehow, we actually took a photo together.",
        "which is funny because before this, most of the story existed inside messages.",
        "then suddenly there was actual evidence.",
      ],
      caption: "the internet person was real",
      stickyNote: "first real photo. not a meme this time.",
      stickyColor: "blue",
      stickySide: "left",
      labels: {
        tag: "evidence",
      },
    },

    // ── 5C ──────────────────────────────────────────────
    {
      id: "5c",
      label: "5C",
      tint: "pink",
      title: "The Phrase",
      eyebrow: "the line that somehow escaped my mouth",
      body: [
        "after the photo, i asked for your number.",
        "and somehow i said:",
        "which was probably one of the most cringiest things i said for a while",
      ],
      caption: "mom raised a brave man 😎 ",
      stickyNote: "till this day i'm still embarrased saying it...",
      stickyColor: "pink",
      stickySide: "right",
      speech: {
        line: "i want to keep talking with you despite our distances later on",
      },
      labels: {
        me: "me",
        her: "her",
      },
    },

    // ── 5D ──────────────────────────────────────────────
    {
      id: "5d",
      label: "5D",
      tint: "sage",
      title: "The Next Adventure",
      eyebrow: "Australia entered the chat",
      body: [
        "then the next thing appeared.",
        "Australia. July 10.",
        "not exactly a small thing.",
        "you said it felt scary, bittersweet but mostly scary.",
        "which makes sense. new country. new chapter. new everything.",
        "but yeah, i just know u'll pass through it like what u did to the exams",
      ],
      caption: "Australia entered the chat.",
      stickyNote: "good luck there, you'll crush it like what u always does",
      stickyColor: "sage",
      stickySide: "left",
      labels: {
        place: "Australia",
        date: "July 10",
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────
//  CHAPTER SIX  —  The Blank Canvas  (the final, pattern-breaking page)
//  No cards, no doodles, no clutter. Just black text on a white page,
//  revealed one line at a time. The emptiness is the design.
// ─────────────────────────────────────────────────────────────
export interface FinalChapter {
  chapterLabel: string;
  title: string;
  subtitle: string;
  // each inner array is its own quiet screen, revealed line by line.
  // (the title/subtitle is its own first screen, before these.)
  sections: string[][];
  replayLabel: string; // the gentle "start over" link at the very end
  // animation pacing — every value is in SECONDS. higher = slower / calmer.
  timing: FinalTiming;
}

export interface FinalTiming {
  titleDelay: number; // wait before the title screen fades in
  titleDuration: number; // how slowly the title itself fades in
  firstLineDelay: number; // wait before the first line of a screen appears
  lineGap: number; // pause between lines on the same screen
  lineDuration: number; // how slowly each line fades in
  endingPause: number; // extra pause after the last line, before the figures
  endingDuration: number; // how slowly the two figures fade in
  replayPause: number; // pause after the figures before the "read again" link
}

export const chapterSix: FinalChapter = {
  chapterLabel: "chapter VI",
  title: "The Blank Canvas",
  subtitle: "the part we don't know yet",
  // each array below is one screen, in order. add / remove / split freely —
  // the last screen automatically closes with the two stick figures.
  sections: [
    // screen 1
    ["this is the future.", "we don't know what will happen"],
    // screen 2
    [
      "maybe we stay close.",
      "maybe life gets busy.",
      "maybe we end up together.",
      "maybe this is the final chapter.",
    ],
    // screen 3
    ["but one thing was true."],
    // screen 4
    ["the story was real."],
    // screen 5 (closes with the two stick figures)
    ["thanks for reading this chapter with me.","and thank you for being part of the story.", "hope it made you smile"],
  ],
  replayLabel: "read again",

  // ── tweak the feel here (seconds) ──────────────────────────
  //   slower / more breathing room → raise lineGap + lineDuration.
  //   quicker → lower them.
  timing: {
    titleDelay: 0.4,
    titleDuration: 1.0,
    firstLineDelay: 0.5,
    lineGap: 1.2,
    lineDuration: 1.0,
    endingPause: 0.4,
    endingDuration: 1.2,
    replayPause: 1.0,
  },
};
