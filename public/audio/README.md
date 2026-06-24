# Soundtrack

Drop your music file here as:

    public/audio/story-soundtrack.mp3

That's the only step — once the file is here, the "play with music" button on
the music-choice screen (right after the tutorial) will play it.

## Changing things

Everything is editable in one file: `data/audioConfig.ts`

- `src` — change this if you name the file differently or use another folder
- `baseVolume` — volume through chapters 1–4 (default 0.25)
- `chapterFiveVolume` — slightly warmer for chapter 5 (default 0.34)
- `fadeToZeroLine` — the chapter-6 line where the music reaches silence
- `loop` — whether it repeats
- all the on-screen copy (title, subtitle, button labels, the mute label)

`.mp3` works everywhere; `.ogg`/`.m4a` also work in modern browsers — just
match the extension in `src`.
