# Minwall

Turns source code into wallpapers and seamless looping videos. Single file, no build.

    open index.html            # or: python3 -m http.server 8765  →  http://localhost:8765

- **Sources:** GitHub repo / subfolder URL (optional token for private repos), drag-drop a folder, file picker, or paste. Auto-pick scores files (primary language, src/ bonus, test/vendor/lockfile penalties) up to a KB budget; Re-roll does a weighted random pick.
- **Look:** 9 palettes, 9 mono fonts, syntax / gradient / mono coloring, rotation, margins, minify levels.
- **Overlay:** title mask (code fills the letters), word cloud built from the repo's own identifiers (as mask or colored layer), invert, feather.
- **Motion:** scroll up/down, typewriter, wandering spotlight, breathing mask, hue cycle. Every motion loops seamlessly.
- **Export:** PNG (0.5–2×), copy PNG, MP4 via WebCodecs (frame-perfect, faster than real time), WebM real-time fallback.
- **Keys:** Space play/pause · R surprise · P PNG · V video · F fullscreen stage. Paste code anywhere to use it.
