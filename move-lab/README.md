# MOVE LAB

**Responsive marketing mentorship landing page | Portfolio project**

MOVE LAB is a marketing, growth and digital strategy mentorship initiative by Marcos Castro and EMI Marketing e Conteúdo. This repository showcases a standalone, framework-free adaptation of the original landing page.

## Features

- Responsive, custom-designed marketing website
- Mobile navigation with accessible toggle and Escape-key support
- Scroll-aware header and mobile call to action
- Progressive reveal animations with reduced-motion support
- Application form with client-side validation (demonstration only)

## Tech stack

- HTML5
- CSS3 (custom properties, responsive layouts and animations)
- Vanilla JavaScript
- Google Fonts (Space Grotesk, Archivo and Space Mono)

## Run locally

Open `index.html` in a modern browser, or run a static web server from the project folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Important: form integration

**This is a portfolio demo.** The application form validates input locally but **does not send, save, or process submissions**. The original exported project displayed a success message without a submission endpoint. A real deployment requires a backend or form service, appropriate privacy information, and end-to-end testing.

## Implementation notes

The source project was exported with `x-dc`/`sc-if` custom tags, `{{ ... }}` template expressions, a `DCLogic` component, and a missing `support.js` runtime dependency. This adaptation removes those dependencies, separates markup, styles and interactions, and preserves the original design language.

## My role

Project concept, digital strategy and web implementation in collaboration with **EMI Marketing e Conteúdo**.

## Next steps

- Test across devices and browsers
- Audit accessibility with automated and manual checks
- Add real project screenshots and a live demo
- Integrate a production-ready form endpoint if needed

---

Built by [Marcos Castro](https://github.com/marcuscastrodev).
