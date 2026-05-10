# Makar Sankranti — Festival Morning Scene

A pure CSS + JavaScript animated festival greeting page that renders a fully hand-crafted Makar Sankranti morning scene in the browser — no canvas, no SVG, no images. Every visual element on screen — the rising sun, drifting clouds, village houses, trees, and ground — is a styled HTML `div` animated entirely through CSS keyframes and JavaScript-injected inline styles.

---

## What This Project Does

When the page loads, a festive morning scene fills the viewport. A glowing sun rises from behind the horizon, four clouds drift lazily across the sky at staggered speeds and positions to create a sense of depth, four village houses stand silhouetted against the morning sky each with a triangular CSS roof and a rectangular body, and four trees dot the landscape between the houses. A wheat-gold ground plane anchors the scene at the bottom. Centered over the scene, the greeting **"Happy Makar Sankranti 🪁"** is displayed in a styled text block. The entire scene runs on a continuous animation loop with no user interaction required.

---

## Visual Elements — Built Entirely with CSS

All scene elements are `div` elements inside a `.scene` container. There are no `<img>` tags, no external assets, and no SVG shapes — every visual is drawn purely through CSS properties.

**1. Sun (`.sun`)**
A single `div` styled as a perfect circle using `border-radius: 50%`. It is positioned at the top-center of the `.scene` and given a warm yellow-orange radial gradient and a glowing `box-shadow` to simulate sunlight diffusion. A CSS `@keyframes` animation continuously shifts it vertically to simulate a slow rise.

**2. Clouds (`.cloud`)**
Four `div` elements, each absolutely positioned with different `top` values (`10%`, `15%`, `18%`, `20%`) and staggered negative `left` offsets (starting at `-100px`, `-400px`, `-700px`, `-800px`). Each cloud is a white rounded rectangle with `border-radius` applied, given a soft `box-shadow` to add puff. They animate using a single `cloudMove` keyframe that translates each element from its starting left offset to `100vw`, then instantly resets — creating a continuous rightward drift. Different animation durations (`70s`, `90s`, `90s`, `90s`) stagger the movement so the clouds never appear in lockstep.

**3. Houses (`.house`)**
Four `div` elements positioned at `left: 15%`, `30%`, `60%`, and `80%`. Each house is built from two layered CSS shapes: a triangular roof created using the `border` trick (zero-width-height div with colored left and right borders creating a CSS triangle), and a rectangular body below it. No images, no SVG — just border geometry.

**4. Trees (`.tree`)**
Four `div` elements at `left: 10%`, `40%`, `70%`, `90%`. Each tree uses a narrow vertical rectangle for the trunk with a dark green circular or elliptical `border-radius` shape stacked above it for the foliage — achieved through layered `::before` / `::after` pseudo-elements or stacked divs.

**5. Ground (`.ground`)**
A full-width `div` at the bottom of `.scene` with a warm earthy gradient fill, creating the horizon line that all houses and trees sit on.

**6. Greeting Text (`.text`)**
Absolutely positioned in the center of the `.scene`. Styled in a warm golden or festival-appropriate color with a large `font-size` and `text-shadow` for readability against the animated background.

---

## How the JavaScript Works — `script.js`

The JavaScript in this project handles one specific job: injecting unique inline `style` attributes onto each cloud and house `div` to give them different positions, offsets, and animation parameters — things that would require per-element custom values that would be verbose or repetitive to hard-code in HTML.

Each cloud `div` in `index.html` already carries an inline `style` attribute set directly in the markup:

```html
<div class="cloud" style="top:15%;left:-100px;animation:cloudMove 70s linear infinite"></div>
<div class="cloud" style="top:20%;left:-400px;animation:cloudMove 90s linear infinite"></div>
<div class="cloud" style="top:10%;left:-700px;animation:cloudMove 90s linear infinite"></div>
<div class="cloud" style="top:18%;left:-800px;animation:cloudMove 90s linear infinite"></div>
```

Similarly, each house carries its `left` position inline:

```html
<div class="house" style="left:15%"></div>
<div class="house" style="left:30%"></div>
<div class="house" style="left:60%"></div>
<div class="house" style="left:80%"></div>
```

The `script.js` file complements this by running any dynamic calculations or DOM manipulations that benefit from JavaScript — such as viewport-relative positioning adjustments, triggering entrance animations on page load, or randomizing any element properties that should vary on each visit.

---

## Styling — `style.css`

**Scene container (`.scene`):**
Full-viewport background — `width: 100vw; height: 100vh; position: relative; overflow: hidden`. The background is a CSS linear gradient that blends warm dawn colors (deep orange at the horizon fading to soft blue-sky at the top), simulating early morning light.

**Sun animation:**
```css
@keyframes sunRise {
  0%   { transform: translateY(60px); opacity: 0.6; }
  100% { transform: translateY(0px);  opacity: 1; }
}
```
The sun smoothly rises and its glow intensifies as it reaches its apex.

**Cloud animation:**
```css
@keyframes cloudMove {
  0%   { transform: translateX(0); }
  100% { transform: translateX(100vw); }
}
```
A linear, infinite rightward translation. Each cloud uses the same keyframe but different durations and delays for visual variety.

**Color palette:** Warm morning amber and orange for the sky gradient; wheat-gold for the ground; dark brown-green for houses and trees; soft white for clouds; golden yellow for the sun and greeting text.

**Responsive behavior:** The scene is built on `100vw × 100vh` so it always fills the viewport at any screen size. Percentage-based `left` and `top` values on positioned elements ensure they scale proportionally without breakpoints.

---

## Tech Stack

| Technology | Role |
|---|---|
| HTML5 | Scene structure — `.scene`, `.sun`, 4× `.cloud`, 4× `.house`, 4× `.tree`, `.ground`, `.text` |
| CSS3 | All visuals — gradients, border-radius, CSS triangle trick, `@keyframes` (sunRise, cloudMove), `box-shadow` glow effects |
| JavaScript (Vanilla) | Dynamic inline style injection for per-element position/animation values; load-time DOM manipulation |

---

## Project Structure

```
MakarSankranti/
├── index.html     # Full scene markup — .scene wrapper, .sun, 4x .cloud with inline styles, 4x .house, 4x .tree, .ground, .text
├── style.css      # All visual styling — viewport scene, gradient sky, CSS triangle roofs, cloudMove + sunRise keyframes, ground gradient, greeting text
└── script.js      # Dynamic DOM manipulation — per-element style injection, load-time animation triggers, viewport-relative positioning
```

---

## How to Run

1. Clone the repository
   ```bash
   git clone https://github.com/tripathipawan/MakarSankranti.git
   ```
2. Open `index.html` directly in any modern browser. No server, no build tool, no dependencies — everything runs offline from the file system.

---

## Repository

[https://github.com/tripathipawan/MakarSankranti](https://github.com/tripathipawan/MakarSankranti)
