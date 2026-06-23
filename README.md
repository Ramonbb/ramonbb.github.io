# Research Portal – Ramón Barrera-Barrera

Static academic personal website for a university professor and researcher specializing in Tourism and Marketing. The site is built with only HTML, CSS, and JavaScript and is ready for GitHub Pages.

## Website Structure

- `index.html` - Home page with biography, research interests, methods, featured publications, and featured projects.
- `publications.html` - Filterable publication cards with abstract toggles and placeholder links.
- `projects.html` - Research project cards with descriptions, methods, findings, and related publications.
- `appendices.html` - Interactive appendix/resource cards for datasets and research supplements.
- `teaching.html` - Teaching areas, course descriptions, learning objectives, and materials placeholders.
- `contact.html` - Professional profile, academic links, and a frontend-only contact form.
- `style.css` - Shared responsive design, layout, typography, cards, navigation, and accessibility styles.
- `script.js` - Shared JavaScript for mobile navigation, current year, publication filters, abstract toggles, and contact form demo behavior.

## How to Edit Content

Open the relevant `.html` file and replace placeholder text with final academic content. Most repeated items are organized as cards, so new content can be added by copying an existing card block and editing the text.

Common placeholders to update:

- University affiliation in `contact.html`.
- Email address in `contact.html`.
- GitHub, Google Scholar, ORCID, ResearchGate, and LinkedIn links.
- DOI and publication links in `publications.html`.
- Project links in `projects.html`.
- Interactive appendix links in `appendices.html`.

## How to Add New Publications

In `publications.html`, copy an existing block like this:

```html
<article class="publication-card full" data-category="tourism text-mining">
  ...
</article>
```

Then update:

- `data-category` with one or more filter categories.
- Title.
- Authors.
- Journal.
- Year.
- DOI.
- Abstract text.
- Publication link.
- Interactive appendix link.

If you need a new filter category, add a new button in the `.filter-toolbar` and use the same value in `data-filter` and `data-category`.

## How to Add New Projects

In `projects.html`, copy an existing `.project-card.detailed` article and update:

- Project title.
- Description.
- Methods used.
- Key findings.
- Related publications.
- Link placeholder.

## How to Add New Interactive Appendices

In `appendices.html`, copy an existing `.resource-card` article and update:

- Appendix title.
- Description.
- `Open Interactive Appendix` link.

Interactive appendices can be separate HTML pages, external dashboards, hosted notebooks, or downloadable research resources.

## How to Deploy on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files from this folder to the repository root.
3. Commit and push the files.
4. In GitHub, go to `Settings` > `Pages`.
5. Under `Build and deployment`, choose `Deploy from a branch`.
6. Select the `main` branch and the repository root folder.
7. Save the settings.

GitHub Pages will publish the site after a short build process. The URL will usually look like:

```text
https://your-username.github.io/your-repository-name/
```

For a user or organization site, name the repository:

```text
your-username.github.io
```

Then GitHub Pages will publish it at:

```text
https://your-username.github.io/
```
