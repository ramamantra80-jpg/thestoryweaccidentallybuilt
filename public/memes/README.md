# Meme photos

Drop these image files in this folder. The filenames must match exactly
(or edit the `src` paths in `data/memes.ts`).

| file                      | shows up on            | which meme                          |
| ------------------------- | ---------------------- | ----------------------------------- |
| `spongebob-serious.jpg`   | 3B — Two Different Grinds | gangster / "serious" spongebob   |
| `wolf.jpg`                | 3C — Wolf Mode         | the lone wolf by the stormy sea     |
| `medieval-writer.jpg`     | 4A — Mandarin Exam     | the medieval guy writing with a quill |
| `patrick-sleeping.jpg`    | 4C — Peak Absurdity    | patrick yawning on the couch        |
| `dog-dolphin.jpg`         | 4C — Peak Absurdity    | the little dog riding the dolphin   |

Notes:
- `.jpg`, `.png`, `.gif`, and `.webp` all work — if your file is a `.gif`
  (animated) or `.png`, just change the extension in that row's `src` inside
  `data/memes.ts`.
- Until a file is present, the page shows a small 📷 placeholder instead of a
  broken image, so nothing looks broken while you gather the images.
- Square-ish crops look best (they're shown in little polaroid frames), but any
  aspect ratio works — it's center-cropped.
