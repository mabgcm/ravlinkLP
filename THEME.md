# THEME.md

## 1. CSS VARIABLES

Source globals:
- `src/assets/css/main.css`
- `src/assets/css/responsive.css`
- `public/assets/css/vendor/font-family-plus-jakarta-sans.css`
- `public/assets/css/vendor/fontawesome.css`
- `public/assets/css/vendor/brands.css`
- `public/assets/css/vendor/regular.css`
- `public/assets/css/vendor/solid.css`

There is no `index.css` or `App.css`; the project imports `src/assets/css/main.css` and `src/assets/css/responsive.css` from `src/main.jsx`.

### `:root` in `src/assets/css/main.css`

```css
:root {
    --primary: #D1D1D1;
    --secondary: #040404;
    --text-color: #FFFFFF;
    --accent-color: #5e17eb;
    --accent-color-2: #FFFFFF;
    --accent-color-3: #1F1F1F;
    --accent-color-4: #0E0E0E;
    --accent-color-5: #0404047D;
    --accent-color-6: #5e17eb85;
    --accent-color-7: #FFFFFF8C;
    --star-color: #EFBC2A;
    --error-color: #e63946;
    --accent-transparent: #00000000;
    --accent-transparent-2: #00000073;
    --accent-transparent-3: rgba(255, 255, 255, 0.041);
    --box-shadow-top-left: -3px -3px 7px 0px rgba(94, 23, 235, 0.44);
    --box-shadow-bottom-right: 3px 3px 7px 0px rgba(94, 23, 235, 0.44);
    --box-shadow-top-left-wide: -3px -3px 10px 0px rgba(94, 23, 235, 0.44);
    --box-shadow-bottom-right-wide: 3px 3px 10px 0px rgba(94, 23, 235, 0.44);
    --global-font: "Plus Jakarta Sans", sans-serif;
    --global-border-radius: 25px 25px 25px 25px;
    --animation-normal: 1.25s;
    --animation-slow: 2s;
    --animation-fast: 0.75s;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-black: 900;
    --font-size-xs: 12px;
    --font-size-sm: 14px;
    --font-size-base: 16px;
    --font-size-lg: 18px;
    --font-size-xl: 20px;
    --font-size-2xl: 22px;
    --font-size-3xl: 24px;
    --font-size-4xl: 25px;
    --font-size-5xl: 28px;
    --font-size-6xl: 30px;
    --font-size-7xl: 32px;
    --font-size-8xl: 38px;
    --font-size-9xl: 40px;
    --font-size-10xl: 45px;
    --font-size-11xl: 46px;
    --font-size-12xl: 50px;
    --font-size-13xl: 56px;
    --font-size-14xl: 64px;
    --font-size-15xl: 100px;
    --font-size-16xl: 150px;
    --font-size-17xl: 200px;
    --line-height-tight: 1em;
    --line-height-snug: 1.2em;
    --line-height-normal: 1.3em;
    --line-height-relaxed: 1.4em;
    --line-height-loose: 1.5em;
    --line-height-extra-loose: 1.6em;
    --line-height-ultra-tight: 0.9em;
    --line-height-px-20: 20px;
    --line-height-px-21: 21px;
}
```

### Light Mode Overrides

Applied by adding `lightmode` to `body` in `src/Components/Theme/themeswitch.jsx`.

```css
.lightmode {
    --primary: #1F1F1F;
    --secondary: #FFFAFA;
    --text-color: #000000;
    --accent-color: #5e17eb;
    --accent-color-2: #000000;
    --accent-color-3: #e3caff;
    --accent-color-4: #f5f5f5;
    --accent-color-5: #FFFFFF7D;
    --accent-color-6: #5e17eb33;
    --accent-color-7: #FFFFFF8C;
    --star-color: #EFBC2A;
    --error-color: #E63946;
}
```

### `body.lightmode .keep-dark` Overrides

Used to keep hero/banner areas visually dark even when light mode is active.

```css
body.lightmode .keep-dark {
    --primary: #D1D1D1;
    --secondary: #040404;
    --text-color: #8B8B8B;
    --accent-color: #5e17eb;
    --accent-color-2: #FFFFFF;
    --accent-color-3: #1F1F1F;
    --accent-color-4: #0E0E0E;
    --accent-color-5: #0404047D;
    --accent-color-6: #5e17eb85;
    --accent-color-7: #FFFFFF8C;
    --star-color: #EFBC2A;
    --error-color: #e63946;
}
```

### Font Awesome Vendor Variables

```css
:root, :host {
  --fa-style-family-brands: 'Font Awesome 6 Brands';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 6 Brands';
}

:root, :host {
  --fa-style-family-classic: 'Font Awesome 6 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 6 Free';
}

:root, :host {
  --fa-style-family-classic: 'Font Awesome 6 Free';
  --fa-font-solid: normal 900 1em/1 'Font Awesome 6 Free';
}
```

### Referenced But Not Defined

These custom properties are referenced in CSS but are not defined in `:root`:

```css
--accent-color-1
--accent-border
--background-color
--value
```

Usage:
- `--accent-color-1`: `.wizard-progress-bar`, `.search-form button`
- `--accent-border`: `.card-blog .card_footer`
- `--background-color`: `.alert`
- `--value`: `@keyframes load`

## 2. TYPOGRAPHY

### Font Families

Primary UI font:

```css
--global-font: "Plus Jakarta Sans", sans-serif;
body {
    font-family: var(--global-font);
}
```

Font source:

```css
@import url('/assets/css/vendor/font-family-plus-jakarta-sans.css');
```

The local vendor font CSS loads Google-hosted `fonts.gstatic.com` files for `Plus Jakarta Sans` in these weights:

```css
font-weight: 400;
font-weight: 500;
font-weight: 600;
font-weight: 700;
```

Icon fonts:

```css
font-family: 'Font Awesome 6 Free';
font-family: 'Font Awesome 6 Brands';
```

Payment success/cancel standalone HTML pages use a separate inline font:

```css
font-family: Arial, sans-serif;
```

### Base Font Size

```css
--font-size-base: 16px;
button,
a {
    font-size: var(--font-size-base);
}

p {
    font-size: var(--font-size-lg); /* 18px */
}
```

### Heading Sizes

Desktop:

```css
h1 { font-size: 100px; line-height: 1.3em; }
h2 { font-size: 64px; line-height: 1.2em; }
h3 { font-size: 46px; line-height: 1.2em; }
h4 { font-size: 28px; line-height: 1.5em; }
h5 { font-size: 24px; line-height: 1.5em; }
h6 { font-size: 20px; line-height: 1.5em; }
```

All headings:

```css
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 700;
    margin: 0;
}
```

Tablet, `max-width: 991px`:

```css
h1 { font-size: 64px; }
h2 { font-size: 56px; }
h3 { font-size: 38px; }
h4 { font-size: 24px; }
h5 { font-size: 22px; }
h6 { font-size: 18px; }
button, a { font-size: 14px; }
```

Mobile, `max-width: 767px`:

```css
h1 { font-size: 45px; }
h2 { font-size: 40px; }
h3 { font-size: 30px; }
h4 { font-size: 22px; }
h5 { font-size: 20px; }
h6 { font-size: 16px; }
button, a { font-size: 12px; }
p { font-size: 14px; }
```

### Paragraphs

```css
p {
    font-size: 18px;
    margin-bottom: 14.4px;
    font-weight: 500;
    color: var(--text-color);
}
```

### Links And Buttons

```css
button,
a {
    font-size: 16px;
    color: var(--accent-color);
    text-decoration: none;
    font-weight: 600;
}
```

### Frequently Used Text Classes

```css
.accent-color { color: var(--accent-color); }
.title-heading { color: var(--primary); -webkit-text-fill-color: var(--primary); }
.title-heading-banner { color: var(--primary); -webkit-text-fill-color: var(--primary); }
.sub-heading span { font-size: 16px; font-weight: 700; line-height: 1.5em; color: var(--primary); }
.sub-heading i { color: var(--accent-color); font-size: 20px; }
.counter-text { text-align: center; color: var(--primary); font-size: 22px; font-weight: 600; line-height: 1em; }
.text-404 { font-size: 200px; font-weight: 700; line-height: 0.9em; }
.profile-name { color: var(--primary); font-size: 20px; font-weight: 700; line-height: 1.5em; }
.testimonial-description { font-size: 18px; font-weight: 500; line-height: 1.6em; }
.profile-bio { font-size: 16px; }
.blog-link { font-size: 28px; color: var(--primary); font-weight: 700; }
.blog-link-post { font-size: 20px; color: var(--primary); font-weight: 700; }
.meta-data { font-size: 16px; font-weight: 500; line-height: 1.5em; color: var(--primary); }
.meta-data-post { font-size: 16px; font-weight: 500; line-height: 1.5em; color: var(--text-color); }
.copyright, .legal-link { font-size: 16px; font-weight: 500; line-height: 1.5em; color: var(--text-color); }
```

## 3. COLOR PALETTE

### Dark Theme Default

```css
Primary foreground: #D1D1D1
Secondary page background: #040404
Body text: #FFFFFF
Accent / brand purple: #5e17eb
Accent foreground 2: #FFFFFF
Card dark surface: #1F1F1F
Deep dark surface: #0E0E0E
Overlay dark: #0404047D
Purple translucent: #5e17eb85
White translucent: #FFFFFF8C
Star rating: #EFBC2A
Error: #e63946
Transparent: #00000000
Overlay transparent 2: #00000073
Glass surface: rgba(255, 255, 255, 0.041)
WhatsApp green: #25D366
WhatsApp text: #ffffff
```

### Light Theme

```css
Primary foreground: #1F1F1F
Secondary page background: #FFFAFA
Body text: #000000
Accent / brand purple: #5e17eb
Accent foreground 2: #000000
Light purple border/surface: #e3caff
Light surface: #f5f5f5
Light overlay: #FFFFFF7D
Purple translucent: #5e17eb33
White translucent: #FFFFFF8C
Star rating: #EFBC2A
Error: #E63946
```

### Primary Brand Color

```css
--accent-color: #5e17eb;
```

This purple is used for CTAs, section glow gradients, icons, link hover states, borders, shadows, selected wizard options, section dividers, and Meta/marketing CTA emphasis.

### Secondary Color

```css
--secondary: #040404; /* default dark background */
--secondary: #FFFAFA; /* light mode background */
```

### Accent Colors

```css
--accent-color-2: #FFFFFF; /* dark mode CTA text/icon foreground */
--accent-color-3: #1F1F1F; /* card/surface border and gradient stop */
--accent-color-4: #0E0E0E; /* dark card/nav/form surface */
--accent-color-5: #0404047D; /* image overlay */
--accent-color-6: #5e17eb85; /* purple divider glow */
--accent-color-7: #FFFFFF8C; /* light-mode image overlay */
```

### Background Colors And Gradients

Main page:

```css
body { background-color: var(--secondary); color: var(--primary); }
```

Core dark card gradient:

```css
radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 50%)
radial-gradient(at bottom right, var(--accent-color-3) 0%, var(--accent-color-4) 50%)
```

Core glow overlays:

```css
linear-gradient(180deg, var(--accent-color) 0%, var(--accent-transparent) 100%)
linear-gradient(180deg, var(--accent-color) 0%, var(--accent-transparent) 65%)
linear-gradient(360deg, var(--accent-color) 0%, var(--accent-transparent) 65%)
radial-gradient(at bottom center, var(--accent-color) 0%, var(--accent-transparent) 40%)
radial-gradient(at top center, var(--accent-color) 0%, var(--accent-transparent) 40%)
radial-gradient(at center center, var(--accent-color-6) 0%, var(--accent-transparent) 70%)
```

Patterned hero:

```css
.banner-layout-wrapper {
    background-image: radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 50%);
}
.banner-layout-wrapper::before {
    background-image: url('/assets/images/regular-square-grids-4AL3FJ8.png');
    opacity: 0.3;
}
body.lightmode .banner-layout-wrapper::before {
    background-image: url('/assets/images/regular-square-grids-4AL3FJ8-light.png');
}
```

Image overlay gradients:

```css
.case-studies-content::before {
    background-image: linear-gradient(180deg, var(--accent-color-5) 0%, var(--secondary) 100%);
}
body.lightmode .case-studies-content::before {
    background-image: linear-gradient(180deg, var(--accent-color-7) 10%, var(--accent-color-3) 100%);
}
.guide-banner::before {
    background-image: linear-gradient(180deg, var(--accent-color-5) 0%, var(--secondary) 100%);
}
body.lightmode .guide-banner::before {
    background-image: linear-gradient(180deg, var(--accent-color-7) 0%, var(--accent-color-3) 100%);
}
```

### Text Colors

```css
Headings: var(--primary)
Body paragraphs: var(--text-color)
Links default: var(--accent-color)
Nav links: var(--primary)
Nav active/hover: var(--accent-color)
Muted footer/contact links: var(--text-color)
Stars: var(--star-color)
Errors: var(--accent-color) in `.error-text`, var(--error-color) in newsletter error
```

### Button Colors And Hover States

```css
.btn-accent {
    background-color: var(--accent-color-4);
    color via .btn-title: var(--accent-color-2);
    box-shadow: var(--box-shadow-top-left);
}
.btn-accent:hover {
    background-color: var(--accent-color-4);
    box-shadow: var(--box-shadow-bottom-right);
}
.btn:hover .btn-title a,
.btn:hover .btn-title span,
.btn:focus .btn-title a,
.btn:focus .btn-title span {
    color: var(--accent-color) !important;
}
```

## 4. BUTTON STYLES

### Base `.btn`

Used for most CTA links/buttons with a nested `.btn-title` and `.icon-circle`.

```css
.btn {
    max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 100px 100px 100px 100px;
    padding: 5px 5px 5px 5px;
    justify-content: space-between;
    align-self: stretch;
}
```

### `.btn-accent`

Used in hero CTA, service cards, pricing cards, newsletter submit, guide CTA, lead wizard, not-found CTA.

```css
.btn-accent {
    fill: var(--accent-color-2);
    transition: all 0.6s;
    background-color: var(--accent-color-4);
    box-shadow: var(--box-shadow-top-left);
}

body.lightmode .btn-accent {
    border: 1px solid var(--accent-color);
}

body.lightmode .keep-dark .btn-accent {
    border: none;
}

.btn-accent:hover {
    box-shadow: var(--box-shadow-bottom-right);
    background-color: var(--accent-color-4);
}
```

Nested label:

```css
.btn-title {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-snug);
    padding: 20px 30px 20px 30px;
    color: var(--accent-color-2);
    text-decoration: none;
    align-self: center;
    width: 100%;
    transition: all 0.6s;
}

.btn-title a,
.btn-title span {
    color: var(--primary);
}
```

Hover text:

```css
.btn:hover .btn-title a,
.btn:hover .btn-title span,
.btn:focus .btn-title a,
.btn:focus .btn-title span {
    color: var(--accent-color) !important;
}
```

Responsive nested label:

```css
@media screen and (max-width: 991px) {
    .btn-title { padding: 17px 27px 17px 27px; }
}
@media screen and (max-width: 767px) {
    .btn-title { padding: 15px 25px 15px 25px; }
}
```

Hero compact CTA override:

```css
.banner-content .btn.btn-accent {
    display: inline-flex;
    align-self: flex-start;
    width: auto;
    gap: 12px;
    padding: 4px 6px;
}
.banner-content .btn.btn-accent .btn-title {
    width: auto;
    padding: 12px 16px;
}
.banner-content .btn.btn-accent .icon-circle {
    width: 46px;
    height: 46px;
    font-size: var(--font-size-4xl);
}
```

### `.icon-circle`

Used as the circular arrow/icon node inside CTAs and sidebar phone CTA.

```css
.icon-circle {
    position: relative;
    background-color: var(--accent-color);
    color: var(--primary);
    font-size: var(--font-size-6xl);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.3s ease-in-out;
}
```

Responsive:

```css
@media screen and (max-width: 991px) {
    .icon-circle { width: 53px; height: 53px; }
}
@media screen and (max-width: 767px) {
    .icon-circle { width: 46px; height: 46px; }
}
```

### `.btn-sidebar`

Defined but not heavily used in current JSX.

```css
.btn-sidebar {
    display: inline-block;
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-sm);
    text-align: center;
    padding: 17px 32px;
    border-radius: 30px !important;
    transition: all 0.15s ease-in-out;
    border-radius: 25px;
    line-height: var(--line-height-tight);
    letter-spacing: 1px;
}
```

### Theme Toggle `#themeSwitch`

```css
#themeSwitch {
    height: 45px;
    width: 45px;
    padding: 0;
    border-radius: 50%;
    background-color: var(--accent-color-4);
    display: flex;
    justify-content: center;
    align-items: center;
    order: 2;
}
#themeSwitch i {
    font-size: var(--font-size-xl);
}
```

Behavior:
- Icon class is `fas fa-moon` in dark mode.
- Icon class changes to `fas fa-sun` in light mode.
- Adds/removes `body.lightmode`.
- Swaps `.site-logo` from `assets/images/ravlink-logo.png` to `assets/images/ravlink-logo-dark.png`.

### Language Switch `.lang-switch`

```css
.lang-switch {
    height: 45px;
    width: 45px;
    padding: 0;
    border-radius: 50%;
    background-color: var(--accent-color-4);
    display: flex;
    justify-content: center;
    align-items: center;
    order: 2;
    border: none;
    color: var(--primary);
}
.lang-switch span {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    letter-spacing: 0.5px;
}
```

### Navbar Menu Button `.nav-btn`

```css
.nav-btn {
    display: block;
    padding: 8px 16px;
    background-color: transparent;
    color: var(--primary);
    box-shadow: none;
    border: none;
    transition: all 0.3s ease;
    order: 1;
}
```

### Sidebar Close `.close-btn`

```css
.close-btn {
    display: inline-block;
    justify-content: center;
    background-color: var(--accent-color);
    border: var(--accent-color);
    border-radius: 8px 8px 8px 8px;
    color: var(--primary);
    font-weight: var(--font-weight-bold);
    position: relative;
    font-size: var(--font-size-base);
    cursor: pointer;
    padding: 8px 18px;
    transition: all 0.4s;
}
.close-btn:hover {
    background-color: var(--accent-transparent);
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
}
```

### Search Button `.search-btn`

```css
.search-btn {
    font-size: var(--font-size-xl);
    background-color: transparent;
    border: none;
    color: var(--primary);
}
.search-btn:hover {
    color: var(--accent-color);
}
```

### Video Play Button `.request-loader`

Used by `src/Components/Video/VideoButton.jsx`.

```css
.request-loader {
    position: relative;
    height: 70px;
    border-radius: 50% !important;
    border: none;
    background-color: var(--secondary);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary);
    font-size: var(--font-size-4xl);
    aspect-ratio: 1/1;
    transition: all 0.3s ease-in-out;
}
.request-loader:hover {
    border: none;
    color: var(--primary);
    background-color: var(--accent-color);
}
```

Ripple animation:

```css
.request-loader::after,
.request-loader::before {
    opacity: 0.2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    color: var(--accent-color);
    border: 4px solid currentColor;
    border-radius: 50%;
    animation-name: ripple;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(.65, 0, .34, 1);
    z-index: 0;
}
.request-loader::after {
    animation-delay: 0.5s;
    animation-duration: 3s;
}
.request-loader::before {
    animation-delay: 0.2s;
    animation-duration: 3s;
}
```

### Floating WhatsApp `.whatsapp-float`

```css
.whatsapp-float {
    position: fixed;
    right: 24px;
    bottom: 24px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #25D366;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    z-index: 1200;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.whatsapp-float:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.28);
}
```

## 5. CARD STYLES

### Base `.card`

```css
.card {
    position: relative;
    border-radius: var(--global-border-radius);
    border: none;
    overflow: hidden;
}
```

### Shared Card Language

Most cards use:
- `border-radius: 25px`
- `border: 1px solid var(--accent-color-3)`
- radial gradient dark surfaces
- purple glow pseudo-elements
- padding commonly `30px`
- hover shadow flipping from top-left to bottom-right

Core repeated gradients:

```css
radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 50%)
radial-gradient(at bottom right, var(--accent-color-3) 0%, var(--accent-color-4) 50%)
radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 70%)
```

### `.card-service`

```css
.card-service {
    background-color: transparent;
    background-image: radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 50%);
    border-radius: var(--global-border-radius);
    padding: 30px 30px 30px 30px;
    border: 1px solid var(--accent-color-3);
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 30px;
    z-index: 1;
}
.col:nth-child(even) .card-service {
    background-image: radial-gradient(at bottom right, var(--accent-color-3) 0%, var(--accent-color-4) 50%);
}
```

### Service Icon Cards

```css
.service-icon-wrapper {
    width: 100px;
    min-height: 100px;
    border-radius: 32px;
    background-color: var(--secondary);
}
.service-icon {
    width: 80px;
    min-height: 80px;
    background-image: radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 70%);
    border-radius: var(--global-border-radius);
    box-shadow: var(--box-shadow-top-left);
    transition: all 0.3s;
}
.service-icon:hover {
    box-shadow: var(--box-shadow-bottom-right);
}
```

### `.card-case-studies`

```css
.card-case-studies {
    display: flex;
    flex-direction: column;
    gap: 50px 50px;
    background-color: var(--secondary);
    padding: 50px 50px 50px 50px;
    border-radius: var(--global-border-radius);
    overflow: hidden;
    position: relative;
    z-index: 1;
}
body.lightmode .card-case-studies {
    background-color: var(--accent-color-4);
}
.card-case-studies::before {
    background-image: radial-gradient(at bottom center, var(--accent-color) 0%, var(--accent-transparent) 50%);
    opacity: 0.1;
}
```

### `.case-studies-content`

```css
.case-studies-content {
    display: flex;
    flex-direction: column;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: space-between;
    min-height: 400px;
    padding: 30px 30px 30px 30px;
    border: 1px solid var(--accent-color-3);
    overflow: hidden;
    position: relative;
    z-index: 1;
}
.case-studies-content::before {
    background-image: linear-gradient(180deg, var(--accent-color-5) 0%, var(--secondary) 100%);
}
```

Background variants:

```css
.case-studies-content.local-business { background-image: url('/assets/images/local.jpg'); width: 56.2%; }
.case-studies-content.saas-leads { background-image: url('/assets/images/construction.jpg'); width: 42%; }
.case-studies-content.ecommerce { background-image: url('/assets/images/ecommerce.jpg'); width: 42%; }
.case-studies-content.startup-branding { background-image: url('/assets/images/startup.jpg'); width: 56.2%; }
```

Responsive:

```css
@media screen and (max-width: 991px) {
    .case-studies-content.local-business,
    .case-studies-content.saas-leads,
    .case-studies-content.ecommerce,
    .case-studies-content.startup-branding {
        width: 100%;
    }
}
```

### `.card-blog`

```css
.card-blog {
    position: relative;
    background-color: var(--accent-color-4);
    overflow: hidden;
    border: 1px solid var(--accent-color-3);
    height: 100%;
    transition: all 0.4s ease;
}
.card-blog .card-body {
    display: flex;
    flex-direction: column;
    gap: 20px 20px;
    padding: 30px 30px 30px 30px;
    text-align: start;
}
.card-blog:hover .blog-image {
    transform: scale(1.05) rotate(2deg);
    opacity: .8;
}
```

### `.card-pricing`

```css
.card-pricing {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 30px 30px;
    flex-grow: 1;
    text-align: start;
    padding: 30px 30px 30px 30px;
    border: 1px solid var(--accent-color-3);
    background-color: transparent;
    background-image: radial-gradient(at bottom right, var(--accent-color-3) 0%, var(--accent-color-4) 50%);
    color: var(--primary);
    position: relative;
}
```

Highlighted pricing:

```css
.card-pricing.pricing-highlight {
    width: 100%;
    height: 100%;
    padding-top: 0;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.card-pricing.pricing-highlight::before {
    background-image: radial-gradient(at top center, var(--accent-color) 0%, var(--accent-transparent) 60%);
    opacity: 0.2;
}
```

### `.card-testimonial`

```css
.card-testimonial {
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: transparent;
    text-align: left;
    background-image: radial-gradient(at bottom right, var(--accent-color-3) 0%, var(--accent-color-4) 50%);
    padding: 30px 30px 30px 30px;
    border: 1px solid var(--accent-color-3);
}
```

### `.card-about`

```css
.card-about {
    width: 425px;
    padding: 20px;
    background-image: radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 50%);
    color: var(--primary);
    box-shadow: var(--box-shadow-top-left);
    transition: all 0.6s;
}
.card-about:hover {
    box-shadow: var(--box-shadow-bottom-right);
}
```

### `.card-expertise`

```css
.card-expertise {
    width: 360px;
    padding: 20px;
    background-image: radial-gradient(at bottom right, var(--accent-color-3) 0%, var(--accent-color-4) 50%);
    color: var(--primary);
    box-shadow: var(--box-shadow-top-left);
    transition: all 0.6s;
}
.card-expertise:hover {
    box-shadow: var(--box-shadow-bottom-right);
}
```

### `.card-chooseus`

```css
.card-chooseus {
    background-color: transparent;
    background-image: radial-gradient(at bottom right, var(--accent-color-3) 0%, var(--accent-color-4) 50%);
    display: flex;
    flex-direction: row;
    min-height: 150px;
    width: 100%;
}
.card-chooseus:nth-child(even) {
    background-image: radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 70%);
}
```

### `.card-chooseus-cta`

```css
.card-chooseus-cta {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    background-image: radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 50%);
    color: var(--primary);
    box-shadow: var(--box-shadow-bottom-right);
    transition: all 0.3s;
}
.card-chooseus-cta:hover {
    box-shadow: var(--box-shadow-top-left);
}
```

## 6. NAVBAR / HEADER

### Structure

Component: `src/Components/Header/header.jsx`

```jsx
<div className="navbar-wrapper">
  <nav className="navbar navbar-expand-lg">
    <div className="navbar-container">
      <div className="logo-container">
        <NavLink className="navbar-brand" to="/">
          <img src="/assets/images/ravlink-logo.png" className="site-logo img-fluid" />
        </NavLink>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">...</div>
      <div className="navbar-action-container">...</div>
    </div>
  </nav>
</div>
```

### Wrapper

```css
.navbar-wrapper {
    display: flex;
    flex-direction: row;
    align-self: stretch;
    width: 100%;
    height: 100%;
    padding: 30px 30px 30px 30px;
}
```

Mobile:

```css
@media screen and (max-width: 767px) {
    .navbar-wrapper {
        padding: 20px 20px 20px 20px;
    }
}
```

### Navbar

```css
.navbar {
    position: relative;
    display: flex;
    width: 100%;
    z-index: 3;
    padding: 15px 30px 15px 30px;
    border: 1px solid var(--accent-color-3);
    background-color: var(--accent-color-4);
    border-radius: var(--global-border-radius);
}
```

There is no sticky header class, no `position: sticky`, and no scroll listener adding a sticky class. Header stays `position: relative`.

### Layout And Logo Placement

```css
.navbar-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
.logo-container {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.logo-container img {
    width: 40%;
}
```

Responsive:

```css
@media screen and (max-width: 991px) {
    .logo-container { width: 85%; }
    .logo { max-width: 125px; }
}
@media screen and (max-width: 767px) {
    .logo-container { width: 100%; }
    .logo-container img { width: 90%; }
}
```

### Nav Links

```css
.nav-link {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-loose);
    color: var(--primary);
    background-color: transparent;
    padding: 8px 16px 8px 16px !important;
}
.nav-link:hover,
.nav-link.active,
.nav-link.show {
    color: var(--accent-color) !important;
    background-color: transparent;
}
```

### Dropdown

```css
.dropdown-menu {
    border: none;
    padding: 0;
    border-radius: 25px;
    width: 220px;
    background-color: var(--secondary);
    overflow: hidden;
    box-shadow: 0 10px 30px 0 rgba(45, 45, 45, .2);
}
.dropdown-item {
    padding-block: 0.75rem;
    color: var(--primary);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    padding-inline: 0.75rem;
}
.dropdown-item:hover {
    background-color: var(--secondary);
    color: var(--text-color);
}
.dropdown-toggle::after {
    display: none !important;
}
```

### Desktop/Mobile Behavior

The Bootstrap collapse is intentionally hidden in custom CSS:

```css
.navbar-collapse {
    display: none !important;
    justify-content: space-between;
}
.navbar-expand-lg .navbar-collapse {
    display: none !important;
}
.navbar-expand-lg .navbar-toggler {
    display: block;
}
```

The hamburger/sidebar pattern is used at all widths. `.navbar-toggler.nav-btn` opens the custom `.sidebar`.

### Sidebar

Component: `src/Components/Sidebar/Sidebar.jsx`

```css
.sidebar {
    position: fixed;
    top: 0;
    left: -300px;
    width: 300px;
    height: 100%;
    background: var(--secondary);
    color: var(--primary);
    transition: transform 0.4s ease-in-out;
    z-index: 1000;
    overflow-y: auto;
    max-height: 100vh;
    padding: 0px 16px 0px 5px;
}
.sidebar.active {
    transform: translateX(300px);
}
```

Tablet/mobile sidebar:

```css
@media screen and (max-width: 991px) {
    .sidebar {
        width: 85vw;
        max-width: 360px;
        left: -85vw;
        padding: 0px 24px 24px 16px;
    }
    .sidebar.active {
        transform: translateX(85vw);
    }
}
```

Overlay:

```css
.sidebar-overlay {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    transition: left 0.4s ease-in-out;
    z-index: 4;
}
.sidebar-overlay.active {
    left: 0;
}
```

## 7. SPACING SYSTEM

### Section Padding

```css
.section {
    padding: 120px 20px 120px 20px;
}
.section + .section {
    padding-top: 60px;
}
.section-banner {
    padding: 0px 30px 0px 30px;
}
.section-guide {
    padding: 0px 30px 0px 30px;
}
.section-partner {
    padding: 0px 20px 0px 20px;
}
.section-footer {
    padding: 0px 30px 0px 30px;
}
.section-wrapper-digital-process {
    padding: 0px 30px 0px 30px;
}
```

Mobile:

```css
@media screen and (max-width: 767px) {
    .section-banner { padding: 0px 20px 0px 20px; }
    .section-guide { padding: 0px 20px 0px 20px; }
    .section-wrapper-digital-process { padding: 0px 20px 0px 20px; }
    .section-footer { padding: 0px 20px 20px 20px; }
}
```

### Container Width

```css
.hero-container {
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
}
```

FAQ max width:

```css
.faq-wrapper {
    width: 100%;
    max-width: 1024px;
}
```

Heading widths:

```css
.heading-container-short { max-width: 70%; }
.heading-container { align-self: center; text-align: center; }
.heading-container-medium { max-width: 75%; }
.heading-container-wide { max-width: 85%; text-align: center; }
```

Responsive:

```css
@media screen and (max-width: 991px) {
    .heading-container { max-width: 70%; }
}
@media screen and (max-width: 767px) {
    .heading-container,
    .heading-container-wide {
        max-width: 100%;
    }
}
```

### Gap Utility Classes

Base:

```css
.gspace-0 { gap: 0px 0px; }
.gspace-1 { gap: 10px 10px; }
.gspace-2 { gap: 20px 20px; }
.gspace-3 { gap: 30px 30px; }
.gspace-4 { gap: 40px 40px; }
.gspace-5 { gap: 50px 50px; }

.gspace-x-0 { column-gap: 0px; }
.gspace-x-1 { column-gap: 10px; }
.gspace-x-2 { column-gap: 20px; }
.gspace-x-3 { column-gap: 30px; }
.gspace-x-4 { column-gap: 40px; }
.gspace-x-5 { column-gap: 50px; }

.gspace-y-0 { row-gap: 0px; }
.gspace-y-1 { row-gap: 10px; }
.gspace-y-2 { row-gap: 20px; }
.gspace-y-3 { row-gap: 30px; }
.gspace-y-4 { row-gap: 40px; }
.gspace-y-5 { row-gap: 50px; }
```

Responsive gap variants:
- `gspace-sm-*`, `gspace-x-sm-*`, `gspace-y-sm-*` inside `@media screen and (min-width: 767px)`
- `gspace-md-*`, `gspace-x-md-*`, `gspace-y-md-*` inside `@media screen and (min-width: 992px)`
- Values are the same 0, 10, 20, 30, 40, 50px scale.

### Bootstrap Gutter Utility Overrides

Base:

```css
.grid-spacer-1 { --bs-gutter-x: 10px; --bs-gutter-y: 10px; }
.grid-spacer-2 { --bs-gutter-x: 20px; --bs-gutter-y: 20px; }
.grid-spacer-3 { --bs-gutter-x: 30px; --bs-gutter-y: 30px; }
.grid-spacer-4 { --bs-gutter-x: 40px; --bs-gutter-y: 40px; }
.grid-spacer-5 { --bs-gutter-x: 50px; --bs-gutter-y: 50px; }
.grid-spacer-x-1 { --bs-gutter-x: 10px; }
.grid-spacer-x-2 { --bs-gutter-x: 20px; }
.grid-spacer-x-3 { --bs-gutter-x: 30px; }
.grid-spacer-x-4 { --bs-gutter-x: 40px; }
.grid-spacer-x-5 { --bs-gutter-x: 50px; }
.grid-spacer-y-1 { --bs-gutter-y: 10px; }
.grid-spacer-y-2 { --bs-gutter-y: 20px; }
.grid-spacer-y-3 { --bs-gutter-y: 30px; }
.grid-spacer-y-4 { --bs-gutter-y: 40px; }
.grid-spacer-y-5 { --bs-gutter-y: 50px; }
```

Responsive grid variants:
- `grid-spacer-sm-*`, `grid-spacer-x-sm-*`, `grid-spacer-y-sm-*` at `min-width: 767px`
- `grid-spacer-md-*`, `grid-spacer-x-md-*`, `grid-spacer-y-md-*` at `min-width: 992px`
- Responsive variants include `0px` through `50px` values.

## 8. ANIMATIONS

### Animate.css

Imported in `src/main.jsx`:

```js
import "animate.css";
```

Also imported by `src/Components/Hooks/AnimateOnScroll.jsx`:

```js
import 'animate.css';
```

Wrapper hook:

```jsx
const AnimateOnScroll = ({
    children,
    animation = 'fadeInUp',
    delay = 0,
    speed = 'normal',
    threshold = 0.15,
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold,
    });

    const speedClass = {
        normal: '',
        fast: 'animate__fast',
        slow: 'animate__slow',
    }[speed];

    const child = React.Children.only(children);

    return cloneElement(child, {
        ref,
        className: `${child.props.className || ''} animate__animated ${
            inView ? `animate__${animation} ${speedClass}` : ''
        }`.trim(),
        style: {
            ...child.props.style,
            opacity: inView ? 1 : 0,
            animationDelay: inView ? `${delay}ms` : undefined,
        },
    });
};
```

Animate.css duration overrides:

```css
.animate-box {
    opacity: 0;
}
.animate__animated {
    animation-duration: 1.25s;
    animation-duration: var(--animation-normal, 1.25s);
}
.animate__animated.animate__fast {
    animation-duration: 0.75s;
    animation-duration: var(--animation-fast, 0.75s);
}
.animate__animated.animate__slow {
    animation-duration: 2s;
    animation-duration: var(--animation-slow, 2s);
}
```

Animations used:

```text
fadeInUp
fadeInDown
fadeInLeft
fadeInRight
```

Speeds used:

```text
normal
fast
slow
```

Components using `AnimateOnScroll`:
- Hero/banner: `fadeInUp`, `fadeInLeft`, `fadeInRight`
- Inner banner: `fadeInRight`
- Services headings/cards: `fadeInDown`, `fadeInLeft`
- Case studies headings/cards: `fadeInLeft`, `fadeInRight`, `fadeInUp`
- Pricing: `fadeInUp`, `fadeInLeft`, `fadeInRight`
- Testimonials: `fadeInDown`, `fadeInRight`, `fadeInUp`
- About/expertise/choose-us/newsletter/team/blog: mixed `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`

### Custom Keyframes

Copy exactly:

```css
@property --progress {
    syntax: '<integer>';
    inherits: true;
    initial-value: 0;
}

@keyframes load {
    to {
        --progress: var(var(--value))
    }
}

@keyframes ripple {
    from {
        opacity: 1;
        transform: scale3d(1, 1, 1);
        transform-origin: center;
        border-width: 0px;
    }

    to {
        opacity: 0;
        transform: scale3d(1.7, 1.7, 1.8);
        transform-origin: center;
        border-width: 13px;
    }
}

@keyframes menu-animation {
    0% {
        opacity: 0;
        -webkit-transform: scale(.04) translateY(300%);
        transform: scale(.04) translateY(300%);
    }

    40% {
        -webkit-transform: scale(.04) translateY(0);
        transform: scale(.04) translateY(0);
        -webkit-transition: ease-out;
        transition: ease-out;
    }

    60% {
        opacity: 1;
        -webkit-transform: scale(.02) translateY(0);
        transform: scale(.02) translateY(0);
    }

    61% {
        opacity: 1;
        -webkit-transform: scale(.04) translateY(0);
        transform: scale(.04) translateY(0);
    }

    99.9% {
        opacity: 1;
        height: 0;
        padding-bottom: 100%;
        border-radius: 100%;
    }

    100% {
        opacity: 1;
        -webkit-transform: scale(1) translateY(0);
        transform: scale(1) translateY(0);
        height: 100%;
        padding-bottom: 0;
        border-radius: 0;
    }
}
```

### Custom Animation Usage

```css
.request-loader::before,
.request-loader::after {
    animation-name: ripple;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(.65, 0, .34, 1);
}

.search-overlay {
    animation: menu-animation .8s ease-out forwards;
    -webkit-animation: menu-animation .8s ease-out forwards;
}
```

### Transitions

Common transitions:

```css
body { transition: all 0.3s ease; }
.btn-accent, .btn-title, .navbar-icon-wrapper { transition: all 0.6s; }
.nav-btn { transition: all 0.3s ease; }
.sidebar, .content-edit-sidebar { transition: transform 0.4s ease-in-out; }
.sidebar-overlay { transition: left 0.4s ease-in-out; }
.sidebar-dropdown-menu { transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out; }
.wizard-progress-bar { transition: width 260ms ease; }
.wizard-choice-card { transition: transform 180ms ease, border-color 180ms ease, background-color 180ms ease, box-shadow 180ms ease; }
.blog-image, .card-blog { transition: all 0.4s ease; }
.social-item, .icon-box { transition: all 0.5s; }
.whatsapp-float { transition: transform 0.2s ease, box-shadow 0.2s ease; }
```

## 9. COMPONENT PATTERNS

### Section Title Pattern

Typical section title structure:

```jsx
<div className="sub-heading align-self-center">
  <i className="fa-regular fa-circle-dot"></i>
  <span>Section Eyebrow</span>
</div>
<h2 className="title-heading heading-container heading-container-medium">Heading</h2>
```

Styles:

```css
.sub-heading {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
}
.sub-heading i {
    color: var(--accent-color);
    font-size: var(--font-size-xl);
}
.sub-heading span {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-loose);
    color: var(--primary);
}
.title-heading,
.title-heading-banner {
    background-image: none;
    -webkit-text-fill-color: var(--primary);
    color: var(--primary);
}
```

Original title gradient definitions exist but are overridden later:

```css
.title-heading-banner {
    background-image: linear-gradient(340deg, var(--accent-transparent) 30%, var(--primary) 100%);
}
.title-heading {
    background-image: linear-gradient(284deg, var(--accent-transparent) 3%, var(--primary) 100%);
}
.title-heading,
.title-heading-banner {
    background-image: none;
}
```

### Icons

Icon system:
- Font Awesome Free 6.4.0
- `fa-solid` weight 900
- `fa-regular` weight 400
- `fa-brands` weight 400

Common icon classes in JSX:

```text
fa-regular fa-circle-dot
fa-regular fa-circle-check
fa-solid fa-arrow-right
fa-solid fa-arrow-circle-right
fa-solid fa-circle-arrow-right
fa-solid fa-bars
fa-solid fa-angle-down
fa-solid fa-phone-volume
fa-solid fa-envelope
fa-solid fa-location-dot
fa-solid fa-calendar
fa-solid fa-folder
fa-solid fa-user
fa-solid fa-star
fa-solid fa-quote-right
fa-solid fa-brain
fa-solid fa-bug
fa-solid fa-check
fa-solid fa-xmark
fa-solid fa-play
fa-brands fa-whatsapp
fa-brands fa-facebook
fa-brands fa-instagram
fa-brands fa-linkedin
fa-brands fa-accessible-icon
```

### Gradients

Use these exact values for pixel matching:

```css
linear-gradient(180deg, var(--accent-color) 0%, var(--accent-transparent) 100%)
linear-gradient(180deg, var(--accent-color) 0%, var(--accent-transparent) 65%)
linear-gradient(360deg, var(--accent-color) 0%, var(--accent-transparent) 65%)
linear-gradient(360deg, var(--accent-color) 0%, var(--accent-transparent) 70%)
linear-gradient(180deg, var(--accent-transparent) 0%, var(--accent-color) 100%)
linear-gradient(180deg, var(--accent-transparent) 35%, var(--accent-color) 100%)
linear-gradient(180deg, var(--accent-color-5) 0%, var(--secondary) 100%)
linear-gradient(180deg, var(--accent-color-7) 0%, var(--accent-color-3) 100%)
linear-gradient(180deg, var(--accent-color-7) 10%, var(--accent-color-3) 100%)
linear-gradient(180deg, var(--accent-color-3) 0%, var(--accent-color-4) 100%)
radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 50%)
radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 60%)
radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 70%)
radial-gradient(at top left, var(--accent-color-3), var(--secondary) 50%)
radial-gradient(at bottom right, var(--accent-color-3) 0%, var(--accent-color-4) 50%)
radial-gradient(at bottom center, var(--accent-color) 0%, var(--accent-transparent) 40%)
radial-gradient(at bottom center, var(--accent-color) 0%, var(--accent-transparent) 50%)
radial-gradient(at bottom center, var(--accent-color) 0%, var(--accent-transparent) 60%)
radial-gradient(at center center, var(--accent-color) 0%, var(--accent-transparent) 50%)
radial-gradient(at center center, var(--accent-color) 0%, var(--accent-transparent) 70%)
radial-gradient(at center center, var(--accent-color) 0%, var(--accent-transparent) 75%)
radial-gradient(at center center, var(--accent-color) 0%, var(--accent-transparent) 80%)
radial-gradient(at center center, var(--accent-color) 0%, var(--secondary) 100%)
radial-gradient(at center center, var(--accent-color-6) 0%, var(--accent-transparent) 50%)
radial-gradient(at center center, var(--accent-color-6) 0%, var(--accent-transparent) 70%)
radial-gradient(at center left, var(--accent-color) 0%, var(--accent-transparent) 50%)
radial-gradient(at top center, var(--accent-color) 0%, var(--accent-transparent) 40%)
radial-gradient(at top center, var(--accent-color) 0%, var(--accent-transparent) 60%)
radial-gradient(at center center, var(--accent-transparent) 0%, var(--accent-color-4) 100%)
```

### Background Patterns And Textures

```css
/assets/images/regular-square-grids-4AL3FJ8.png
/assets/images/regular-square-grids-4AL3FJ8-light.png
/assets/images/svg/cross-out.svg
```

Pattern usage:
- `.banner-layout-wrapper::before`: full background pattern, `opacity: 0.3`
- `.content-overlay`: cursor image `url('/assets/images/svg/cross-out.svg')`

### Recessed Corner Cutout Pattern

Used around about/expertise/choose/social overlays:

```css
.about-spacer {
    width: 50px;
    height: 50px;
    border-radius: 25px 0px 0px 0px;
    box-shadow: -10px -10px 0px 0px var(--secondary);
}
.single-service-spacer {
    width: 50px;
    height: 50px;
    border-radius: 0px 0px 0px 25px;
    box-shadow: -10px 10px 0px 0px var(--secondary);
}
.chooseus-cta-spacer {
    width: 50px;
    height: 50px;
    border-radius: 0px 0px 25px 0px;
    box-shadow: 10px 10px 0px 0px var(--secondary);
}
.social-team-spacer {
    width: 50px;
    height: 50px;
    border-radius: 0px 25px 0px 0px;
    box-shadow: 10px -10px 0px 0px var(--secondary);
}
```

### Dividers / Spacers

```css
.underline-vertical {
    border-right: 1px solid var(--accent-color-3) !important;
    width: 3px;
    height: 100px;
}
.underline-accent-short {
    border-bottom: 2px solid var(--accent-color) !important;
    width: 20%;
}
.underline-muted-full {
    border-bottom: 1px solid var(--accent-color-3);
    width: 100%;
}
.footer-spacer,
.partnership-spacer,
.team-layout .spacer,
.newsletter-layout .spacer {
    height: 3px;
    background-image: radial-gradient(at center center, var(--accent-color-6) 0%, var(--accent-transparent) 70%);
}
```

## 10. BOOTSTRAP CUSTOMIZATION

### Imports

From `src/main.jsx`:

```js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
```

### Custom Bootstrap Theme

There is no Sass Bootstrap theme file and no Bootstrap variable build step. Customization is done after Bootstrap with normal CSS in `main.css` and `responsive.css`.

### Bootstrap Components Heavily Used

Common classes in JSX:

```text
container-like custom: hero-container
row
col
row-cols-lg-3
row-cols-lg-2
row-cols-md-2
row-cols-1
navbar
navbar-expand-lg
navbar-brand
navbar-toggler
collapse
navbar-collapse
navbar-nav
nav-item
nav-link
dropdown
dropdown-toggle
dropdown-menu
dropdown-item
accordion
accordion-item
accordion-header
accordion-button
accordion-collapse
accordion-body
card
card-body
d-flex
d-grid
flex-row
flex-column
flex-md-row
flex-lg-row
justify-content-center
justify-content-between
align-items-center
align-self-center
text-center
text-lg-start
text-md-start
order-1 / order-2 / order-lg-1 / order-lg-2
img-fluid
w-50
h-100
mb-0
p-0
g-5
```

### Bootstrap Overrides

Navbar collapse is disabled:

```css
.navbar-collapse,
.navbar-expand-lg .navbar-collapse {
    display: none !important;
}
.navbar-expand-lg .navbar-toggler {
    display: block;
}
```

Navbar visual overrides:

```css
.navbar {
    border: 1px solid var(--accent-color-3);
    background-color: var(--accent-color-4);
    padding: 15px 30px;
    border-radius: var(--global-border-radius);
}
.nav-link {
    color: var(--primary);
    padding: 8px 16px !important;
}
.nav-link:hover,
.nav-link.active,
.nav-link.show {
    color: var(--accent-color) !important;
}
```

Dropdown overrides:

```css
.dropdown-menu {
    border: none;
    border-radius: 25px;
    width: 220px;
    background-color: var(--secondary);
    box-shadow: 0 10px 30px 0 rgba(45, 45, 45, .2);
}
.dropdown-toggle::after {
    display: none !important;
}
```

Accordion overrides:

```css
.accordion {
    display: flex;
    flex-direction: column;
    gap: 20px 20px;
}
.accordion .accordion-item {
    background-color: transparent;
    border: none;
    outline: none;
    border-radius: 30px;
    gap: 20px 20px;
}
.accordion .accordion-button {
    background-image: radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 100%);
    border: 1px solid var(--accent-color-3);
    border-radius: 15px 15px 15px 15px !important;
    font-size: var(--font-size-3xl);
    font-weight: 700;
    line-height: var(--line-height-snug);
    padding: 15px 30px;
    color: var(--primary);
}
.accordion-button:focus,
.accordion .accordion-button:not(.collapsed) {
    box-shadow: none;
    color: var(--primary);
}
```

Grid gutter overrides:
- Custom classes set `--bs-gutter-x` and `--bs-gutter-y` to `0px`, `10px`, `20px`, `30px`, `40px`, `50px`.

## 11. LOGO & ASSETS

### Logo Files

Primary header logo:

```text
/assets/images/ravlink-logo.png
/assets/images/ravlink-logo-dark.png
```

Sidebar/footer currently use Marko logo paths in JSX, but theme switcher replaces all `.site-logo` elements with Ravlink logos:

```text
/assets/images/marko-logo.png
/assets/images/marko-logo-dark.png
```

Theme switch behavior:

```js
logo.setAttribute('src', 'assets/images/ravlink-logo-dark.png'); // light mode
logo.setAttribute('src', 'assets/images/ravlink-logo.png');      // dark mode
```

### Favicon

```html
<link rel="icon" href="/assets/images/favicon.ico">
```

Path:

```text
/assets/images/favicon.ico
```

### Brand / Decorative Images

Hero reviewer avatars:

```text
/assets/images/webby.png
/assets/images/clio.png
/assets/images/shorty.jpg
```

Hero / section patterns:

```text
/assets/images/regular-square-grids-4AL3FJ8.png
/assets/images/regular-square-grids-4AL3FJ8-light.png
```

Case studies backgrounds:

```text
/assets/images/local.jpg
/assets/images/construction.jpg
/assets/images/ecommerce.jpg
/assets/images/startup.jpg
```

Guide banner:

```text
/assets/images/guided.jpg
```

CTA service banner:

```text
/assets/images/ctabg.jpeg
```

About / choose / expertise images:

```text
/assets/images/dummy-img-600x400.jpg
/assets/images/choose.jpg
/assets/images/team.jpg
```

Single service images:

```text
/assets/images/servicehero.jpeg
/assets/images/service1.jpeg
/assets/images/service2.jpeg
```

Service icons:

```text
/assets/images/Icon-7.png
/assets/images/digital-marketing-icons-F4LJ4W8.png
/assets/images/Icon-8.png
/assets/images/Icon-5.png
/assets/images/Icon-6.png
/assets/images/Icon-4.png
```

Digital process icons:

```text
/assets/images/digital-marketing-icons-N952ZWA.png
/assets/images/Icon-11.png
/assets/images/Icon-10.png
/assets/images/Icon-12.png
```

Choose-us icons:

```text
/assets/images/Icon-2.png
/assets/images/icon-1.png
/assets/images/Icon-3.png
```

Partner logos:

```text
/assets/images/client-1.png
/assets/images/client-2.png
/assets/images/client-3.png
/assets/images/client-4.png
/assets/images/client-5.png
/assets/images/client-6.png
/assets/images/client-7.png
/assets/images/client-8.png
/assets/images/client-1-dark.png
/assets/images/client-2-dark.png
/assets/images/client-3-dark.png
/assets/images/client-4-dark.png
/assets/images/client-5-dark.png
/assets/images/client-6-dark.png
/assets/images/client-7-dark.png
/assets/images/client-8-dark.png
```

Testimonials:

```text
/assets/images/t1.jpg
/assets/images/t2.jpg
/assets/images/t3.jpg
/assets/images/t4.jpg
```

Blog:

```text
/assets/images/dummy-img-600x400.jpg
```

SVG utility assets:

```text
/assets/images/svg/cross-out.svg
/assets/images/svg/light-mode.svg
/assets/images/svg/mode-night.svg
```

Other available image assets in `public/assets/images`:

```text
/assets/images/Gp-1.png
/assets/images/clio.jpeg
/assets/images/download.png
/assets/images/dummy-img-1920x300.jpg
/assets/images/dummy-img-1920x900-2.jpg
/assets/images/dummy-img-1920x900.jpg
/assets/images/dummy-img-400x400.jpg
/assets/images/dummy-img-600x500.jpg
/assets/images/dummy-img-600x600.jpg
/assets/images/dummy-img-600x700.jpg
/assets/images/dummy-img-600x800.jpg
/assets/images/dummy-img-900x500.jpg
/assets/images/dummy-img-900x600.jpg
/assets/images/dummy-img-900x700.jpg
/assets/images/dummy-img-900x900.png
/assets/images/imgi_44_Line-Background-4.png
/assets/images/logo.png
```

### Webfonts

```text
/assets/webfonts/fa-brands-400.woff2
/assets/webfonts/fa-brands-400.ttf
/assets/webfonts/fa-regular-400.woff2
/assets/webfonts/fa-regular-400.ttf
/assets/webfonts/fa-solid-900.woff2
/assets/webfonts/fa-solid-900.ttf
/assets/webfonts/fa-v4compatibility.woff2
/assets/webfonts/fa-v4compatibility.ttf
```

Note: `public/assets/css/vendor/solid.css` references `/assets/font/fa-solid-900.ttf`, but the actual project file is `/assets/webfonts/fa-solid-900.ttf`.

## 12. META PIXEL

### Pixel ID

```text
668246525257469
```

Defined in:
- `index.html`
- `public/success.html`
- `public/cancel.html`

Boot script:

```html
<!-- Meta Pixel Code -->
<script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '668246525257469');
    fbq('track', 'PageView');
    window.__ravlinkMetaPixelBootPageViewTracked = true;
</script>
<!-- End Meta Pixel Code -->
```

Noscript:

```html
<noscript>
    <img height="1" width="1" style="display:none"
         src="https://www.facebook.com/tr?id=668246525257469&ev=PageView&noscript=1"/>
</noscript>
```

### Tracking Helpers

File: `src/analytics/metaPixel.js`

```js
window.fbq("track", eventName, buildPixelParams(params));
window.fbq("trackCustom", eventName, buildPixelParams(params));
```

Every event includes these default params when available:

```text
page_path: window.location.pathname
page_title: document.title
```

Param values are trimmed and string-limited to 80 characters.

### Automatic Page Events

File: `src/analytics/MetaPixelTracker.jsx`

Standard events:

```text
PageView
ViewContent
```

Custom page events:

```text
HomePageView
AboutPageView
ServicePageView
ServiceDetailView
CaseStudiesPageView
TeamPageView
PartnershipPageView
PricingPageView
TestimonialPageView
FaqPageView
BlogPageView
BlogArticleView
ContactPageView
UnknownPageView
PageExit
```

Route map:

```text
/ -> Home / home / HomePageView
/about -> About / company / AboutPageView
/service -> Services / services / ServicePageView
/single_services -> Service Detail / services / ServiceDetailView
/case_studies -> Case Studies / case_studies / CaseStudiesPageView
/team -> Team / company / TeamPageView
/partnership -> Partnership / company / PartnershipPageView
/pricing -> Pricing / pricing / PricingPageView
/testimonial -> Testimonials / social_proof / TestimonialPageView
/faq -> FAQ / support / FaqPageView
/blog -> Blog / blog / BlogPageView
/single_post -> Blog Article / blog / BlogArticleView
/contact -> Contact / lead / ContactPageView
```

### Time-On-Site Events

Site milestones:

```text
30s: EngagedVisit, TimeOnSite30s
60s: TimeOnSite60s
120s: TimeOnSite120s
300s: LongVisit, TimeOnSite300s
```

Page milestones:

```text
30s: TimeOnPage30s
60s: TimeOnPage60s
120s: TimeOnPage120s
```

### Scroll Events

Custom event:

```text
ScrollDepth
```

Depth params:

```text
25
50
75
90
```

### Section View Events

Observer:

```js
new IntersectionObserver(..., { threshold: 0.45 })
```

Events:

```text
ImportantSectionViewed
{SectionName}SectionViewed
```

Sections currently marked with `data-pixel-section`:

```text
pricing
contact
blog-article
blog
testimonials
footer
services
case-studies
```

### Video Events

Custom events:

```text
VideoPlay
VideoProgress
VideoPlayClick
```

Progress percentages:

```text
25
50
75
90
```

Hero video click label:

```jsx
data-fbq-event="VideoPlayClick"
data-fbq-label="hero-video"
```

### Click Tracking Events

Global click listener tracks:

```text
MobileMenuOpen
WhatsAppClick
EmailClick
PhoneClick
DownloadClick
OutboundLinkClick
SocialClick
FooterNavClick
```

Standard `Contact` event fires for:

```text
WhatsApp links
mailto links
tel links
```

### Explicit `data-fbq-event` Values In JSX

```text
NavClick
ContactCTA
QuestionnaireCTA
WhatsAppClick
PricingCTA
NewsletterSubmitClick
BlogArticleClick
BlogReadMoreClick
CaseStudyClick
ServiceCTA
VideoPlayClick
```

### Explicit Labels In JSX

```text
logo
home
about
services
case-studies
testimonials
pricing
blog
contact
pricing-intro
starter
growth
scale
expertise-card
chooseus-about
chooseus
guide-banner
floating-whatsapp
contact-card-phone
contact-card-email
newsletter
services-footer
digital-process
hero-video
footer-email
footer-phone
```

### Checkout Success Page Events

File: `public/success.html`

```js
fbq('track', 'PageView');
fbq('track', 'Purchase', {
  content_name: planMeta.name || 'Checkout',
  content_category: 'pricing_plan',
  value: planMeta.value,
  currency: 'CAD'
});
fbq('trackCustom', 'CheckoutCompleted', {
  plan: plan,
  plan_name: planMeta.name,
  value: planMeta.value,
  currency: 'CAD',
  page_path: window.location.pathname
});
```

Plan values:

```text
starter: Starter, 600 CAD
growth: Growth, 1000 CAD
scale: Scale, 1700 CAD
```

### Checkout Cancel Page Events

File: `public/cancel.html`

```js
fbq('track', 'PageView');
fbq('trackCustom', 'CheckoutCanceled', {
  plan: plan,
  page_path: window.location.pathname
});
fbq('trackCustom', 'FailedCheckout', {
  plan: plan,
  reason: 'checkout_canceled',
  page_path: window.location.pathname
});
```

## 13. FONTS (import URLs)

### CSS Imports From `src/assets/css/main.css`

Copy exactly:

```css
@import url('/assets/css/vendor/font-family-plus-jakarta-sans.css');
@import url('/assets/css/vendor/fontawesome.css');
@import url('/assets/css/vendor/brands.css');
@import url('/assets/css/vendor/regular.css');
@import url('/assets/css/vendor/solid.css');
```

### Plus Jakarta Sans Font URLs

The project uses local CSS that points to Google-hosted font files:

```css
src: url(https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko70yyygA.woff2) format('woff2');
src: url(https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko50yyygA.woff2) format('woff2');
src: url(https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko40yyygA.woff2) format('woff2');
src: url(https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2) format('woff2');
```

These same four URLs repeat for weights `400`, `500`, `600`, and `700`, each with different unicode ranges.

### Font Awesome Imports

```css
@font-face {
  font-family: 'Font Awesome 6 Brands';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("/assets/webfonts/fa-brands-400.woff2") format("woff2"), url("/assets/webfonts/fa-brands-400.ttf") format("truetype");
}

@font-face {
  font-family: 'Font Awesome 6 Free';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("/assets/webfonts/fa-regular-400.woff2") format("woff2"), url("/assets/webfonts/fa-regular-400.ttf") format("truetype");
}

@font-face {
  font-family: 'Font Awesome 6 Free';
  font-style: normal;
  font-weight: 900;
  font-display: block;
  src: url("/assets/webfonts/fa-solid-900.woff2") format("woff2"), url("/assets/font/fa-solid-900.ttf") format("truetype");
}
```

### HTML Font Links

There are no Google Fonts `<link>` tags in `index.html`. Fonts are loaded through CSS `@import`.
