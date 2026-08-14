# Research Portal – Ramón Barrera-Barrera

Static bilingual academic website for a university professor and researcher specializing in Tourism and Marketing. The site uses only HTML, CSS, and JavaScript and is ready for GitHub Pages.

## Website Structure

- `index.html` - Temporary development landing page.
- `index-full.html` - Full bilingual academic homepage preview.
- `images/hero.jpg` - Local full-width homepage hero background.
- `images/profile.jpg` - Replaceable local profile portrait placeholder.
- `publications.html` - Publication-page structure, filters, empty state, and dynamic list container.
- `data/publications.json` - Publication database loaded dynamically by `script.js`.
- `projects.html` - References / Bibliografía page with filters and a dynamic card list.
- `data/references.json` - Selected bibliographic-reference database loaded dynamically by `script.js`.
- `appendices.html` - Research resources page with filters and a dynamic card list.
- `data/research-resources.json` - Research-resource database for R packages, CRAN links, and methodological notes.
- `teaching.html` - Teaching areas, course descriptions, objectives, and materials.
- `contact.html` - Professional profile, academic links, and a frontend-only contact form.
- `style.css` - Shared responsive design and language-selector styles.
- `script.js` - English and Spanish translations, language persistence, navigation, filters, dynamic publication/resource/reference rendering, abstracts, and form behavior.

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

Replace `images/profile.jpg` with the researcher's official portrait when available, keeping the same filename so no HTML or CSS changes are required.

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

Do not edit `publications.html` to add publication records. Add a new object to the array in `data/publications.json`; the page will render it automatically.

Required fields:

- `title`, `authors`, `journal`, `year`
- `doi`, `doiUrl`
- `categories`
- `tags.en`, `tags.es`
- `abstract.en`, `abstract.es`
- `links`

Optional fields:

- `volume`, `issue`, `pages`, `publishedOnline`
- `qualityBadges`, `journalBadge`, `journalLogo`
- `featuredImage`, `featured`

Example:

```json
{
  "id": "publication-001",
  "featured": true,
  "title": "Original article title",
  "authors": "Author One, Author Two",
  "journal": "Journal Name",
  "year": "2026",
  "volume": "12",
  "issue": "2",
  "pages": "100-118",
  "publishedOnline": "2026-03-15",
  "doi": "10.xxxx/xxxxx",
  "doiUrl": "https://doi.org/10.xxxx/xxxxx",
  "qualityBadges": ["Q1", "SSCI", "Scopus"],
  "categories": ["tourism", "text-mining"],
  "tags": {
    "en": ["Text Mining", "Online Reviews"],
    "es": ["Minería de Textos", "Reseñas en Línea"]
  },
  "abstract": {
    "en": "English abstract.",
    "es": "Resumen en español."
  },
  "links": {
    "article": "https://doi.org/10.xxxx/xxxxx",
    "results": ""
  },
  "journalBadge": "JN",
  "journalLogo": "",
  "featuredImage": ""
}
```

Valid filter categories currently include `tourism`, `marketing`, `text-mining`, and `service-quality`. Keep titles, journals, authors, and DOI values in their original language.

The `article` link opens the published article. The optional `results` link may point to an interactive results page or an external GitHub Pages resource. The **Explore Results** button is rendered only when `links.results` contains a URL.

Interactive results pages should contain original interactive visualizations, dashboards, tables, or supplementary analyses created by the author. They should not reproduce copyrighted figures or tables from the published article unless permission or license allows it.

## How to Add New References

Do not edit `projects.html` to add individual references. Add a new object to `data/references.json`; the References / Bibliografía page will render it automatically.

Recommended fields:

- `authors`
- `year`
- `title`
- `journal`
- `categories`
- `tags.en`, `tags.es`
- `apa`
- `note.en`, `note.es`
- `links.source`

Example:

```json
{
  "id": "reference-example",
  "authors": "Author, A. A.",
  "year": "2026",
  "title": "Reference title",
  "journal": "Journal Name",
  "categories": ["text-mining", "methodology"],
  "tags": {
    "en": ["Text Mining"],
    "es": ["Minería de textos"]
  },
  "apa": "Author, A. A. (2026). Reference title. Journal Name.",
  "note": {
    "en": "Brief explanation of why this reference is relevant.",
    "es": "Breve explicación de por qué esta referencia es relevante."
  },
  "links": {
    "source": "https://example.com"
  }
}
```

Valid categories currently include `tourism`, `marketing`, `service-quality`, `text-mining`, `topic-modeling`, and `methodology`.

## How to Add New Interactive Appendices

The `appendices.html` page is now used as a research-resource catalog. Do not edit the HTML to add individual resources. Add new entries to `data/research-resources.json`.

## How to Add New Research Resources

Add a new object to `data/research-resources.json`. Use official CRAN links as the primary source for R package documentation instead of uploading local copies of CRAN PDFs.

Recommended fields:

- `packageName`
- `authors`
- `type`
- `version`
- `published`
- `categories`
- `tags.en`, `tags.es`
- `description.en`, `description.es`
- `researchUse.en`, `researchUse.es`
- `links.cran`

Example:

```json
{
  "id": "resource-example",
  "packageName": "examplePackage",
  "authors": "Author One, Author Two",
  "type": "R package",
  "version": "1.0.0",
  "published": "2026-01-01",
  "categories": ["text-mining"],
  "tags": {
    "en": ["Text Mining"],
    "es": ["Minería de textos"]
  },
  "description": {
    "en": "Brief package description.",
    "es": "Breve explicación del paquete."
  },
  "researchUse": {
    "en": "How this resource is used in research workflows.",
    "es": "Cómo se utiliza este recurso en los flujos de trabajo de investigación."
  },
  "links": {
    "cran": "https://CRAN.R-project.org/package=examplePackage"
  }
}
```

Valid categories currently include `text-mining`, `topic-modeling`, `sentiment-analysis`, and `visualization`.

## How to Deploy on GitHub Pages

1. Create a GitHub repository.
2. Upload all site files to the repository root.
3. Commit and push the files.
4. Open `Settings` > `Pages` in GitHub.
5. Under `Build and deployment`, select `Deploy from a branch`.
6. Choose the `main` branch and the repository root folder.
7. Save the settings.

The bilingual system uses relative links and browser `localStorage`, so it works both locally and on GitHub Pages without a server or external translation API.
