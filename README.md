# Research Portal – Ramón Barrera-Barrera

Static bilingual academic website for a university professor and researcher specializing in Tourism and Marketing. The site uses only HTML, CSS, and JavaScript and is ready for GitHub Pages.

## Website Structure

- `index.html` - Home page with biography, research interests, methods, featured publications, and projects.
- `publications.html` - Filterable publications with bilingual abstracts and interface controls.
- `projects.html` - Research projects with descriptions, methods, findings, and related publications.
- `appendices.html` - Interactive appendix and research-resource cards.
- `teaching.html` - Teaching areas, course descriptions, objectives, and materials.
- `contact.html` - Professional profile, academic links, and a frontend-only contact form.
- `style.css` - Shared responsive design and language-selector styles.
- `script.js` - English and Spanish translations, language persistence, navigation, filters, abstracts, and form behavior.

## Bilingual Functionality

English is the default language. The `EN` and `ES` buttons in the navigation change all interface content without reloading the page.

The selected language is stored in the browser under the `preferredLanguage` `localStorage` key. It therefore remains active when visitors move between pages. JavaScript also updates:

- The document `lang` attribute.
- Page titles and meta descriptions.
- Accessible `aria-label` text.
- Contact-form placeholders.
- Dynamic abstract and form-status messages.

Publication titles, author names, journal names, DOI references, project names, and formal article titles remain in their original language.

## How to Edit Content

Edit the relevant HTML page and update both language entries in `script.js`. Translatable elements use translation keys:

```html
<h1 data-i18n="publications.title">Publications</h1>
```

Placeholders and accessible labels use:

```html
<input data-i18n-placeholder="contact.namePlaceholder">
<nav data-i18n-aria-label="aria.primaryNavigation">
```

The English text inside each HTML element is a readable fallback if JavaScript is unavailable.

## How to Add Translations

The `translations` object in `script.js` contains matching `en` and `es` sections. Add the same key to both languages:

```javascript
en: {
  example: { heading: "Research resources" }
},
es: {
  example: { heading: "Recursos de investigación" }
}
```

Then connect the key to an element:

```html
<h2 data-i18n="example.heading">Research resources</h2>
```

Keep the key names identical in both language sections.

## How to Add Bilingual Content

1. Add the English fallback text to the relevant HTML file.
2. Add a unique `data-i18n` key to that element.
3. Add matching English and Spanish values to `translations.en` and `translations.es` in `script.js`.
4. For an input placeholder, use `data-i18n-placeholder`.
5. For an accessibility label, use `data-i18n-aria-label`.

Do not assign a translation key to publication titles, journals, author names, DOI references, project names, or formal article titles unless they should intentionally be translated.

## How to Add New Publications

In `publications.html`, copy a `.publication-card.full` block and update its categories, title, authors, journal, year, DOI, links, and abstract key.

Add the abstract in both language sections of `script.js`. Keep the publication title, journal, authors, and DOI unchanged between languages.

For a new filter, add a button to `.filter-toolbar`, use the same value in `data-filter` and `data-category`, and add its label to both translation sections.

## How to Add New Projects

Copy a `.project-card.detailed` block in `projects.html`. Keep the project name unchanged, then add bilingual keys for its description, methods, and findings in `script.js`.

## How to Add New Interactive Appendices

Copy a `.resource-card` block in `appendices.html`. Add bilingual keys for its heading and description, then replace the placeholder link with the final resource URL.

Interactive appendices may be separate HTML pages, external dashboards, hosted notebooks, or downloadable resources.

## How to Deploy on GitHub Pages

1. Create a GitHub repository.
2. Upload all site files to the repository root.
3. Commit and push the files.
4. Open `Settings` > `Pages` in GitHub.
5. Under `Build and deployment`, select `Deploy from a branch`.
6. Choose the `main` branch and the repository root folder.
7. Save the settings.

The bilingual system uses relative links and browser `localStorage`, so it works both locally and on GitHub Pages without a server or external translation API.
