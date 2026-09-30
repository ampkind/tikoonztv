TIKOONZ.TV V26 UNIFIED
Upload/replace:
index.html
visual.html
shows.html
about.html
assets/css/site.css
assets/js/site.js

Keep your existing tikoonz-logo.png in the site root.

Language:
KO / EN / JA / 中文
The selected language is stored in localStorage under 'tikoonz-tv-language',
so it remains selected when moving between HOME / VISUAL / SHOWS / ABOUT and after refresh.

V27 change: UAwvxZ8qJj4 moved from SHOWS to ABOUT and displayed as a large framed feature film.

V28 changes
- Restored large HOME featured YouTube screen (k6vBizqAXBs).
- Desktop hover over TV thumbnails starts a muted moving YouTube preview.
- Leaving the TV restores the still thumbnail.
- Thumbnail loading now prefers maxresdefault.jpg and falls back to hqdefault.jpg.
- Thumbnail images use contain instead of aggressive cover zoom/cropping.
- V27 ABOUT feature film move remains intact.

V29
- Restored SHOWS large featured video: XPd7XutfqSY.
- SHOWS featured video autoplays muted (browser autoplay requirement); viewer can enable sound in YouTube controls.
- SHOWS lower TV items retain hover moving previews and click-to-open playback.
- HOME large featured video and ABOUT feature remain.

V30
- Added a large VISUAL featured screen above the VISUAL gallery.
- Featured VISUAL video: 2_ZXLTNgjeg.
- HOME / VISUAL / SHOWS now all have a large top video screen.
- Existing hover previews, click playback, high-resolution thumbnails, language persistence, and ABOUT feature remain.

V31
- HOME, VISUAL, SHOWS and ABOUT top featured videos all autoplay.
- Autoplay begins muted because modern browsers generally block autoplay with sound.
- YouTube controls remain visible so the viewer can turn sound on immediately.
- Lower gallery hover previews and click-to-open playback remain unchanged.

V32
- ABOUT rebuilt from scratch.
- Removed the TV-card treatment and duplicate/modal structure from ABOUT.
- ABOUT now has one clean large 16:9 autoplay film followed by editorial identity text.
- HOME / VISUAL / SHOWS remain unchanged from V31.

V33
- Explicitly verified/fixed autoplay on the top featured players of HOME, VISUAL, SHOWS and ABOUT.
- All start muted to satisfy browser autoplay rules; viewers can enable sound with YouTube controls.

V34 CHANNEL PLAYER
HOME / VISUAL / SHOWS: featured + lower videos are one looping sequence.
Clicking any lower TV moves that video into the top player and the sequence continues from there.
Desktop hover previews remain. ABOUT loops its single featured film.
