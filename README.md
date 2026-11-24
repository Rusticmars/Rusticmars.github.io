# Personal physics website (Jekyll)

Built by GitHub Pages with Jekyll; no local software is needed.

## Where things live

- `_config.yml`: site name, description, hosting location (`baseurl`), form key, collections
- `_data/`: content that appears in lists
  - `themes.yml`: the research themes, in display order
  - `topics.yml`: the topics shown under each theme on the overview page
  - `publications.yml`: the selected publications list
  - `career.yml`: the career timeline
- `_research/`: one file per paper explanation (published at /research/<file name>/)
- `_software/`: one file per software page (published at /software/<file name>/)
- `_layouts/` and `_includes/`: shared page structure (navigation, footer, request forms)
- `index.html`: the overview page's own text (introductions, hero, contact)
- `assets/`: stylesheets and the form script
- `404.html`: page shown for addresses that do not exist
- Root files named after the old flat addresses (for example `alscn-ferroelectrics.html`) redirect to the new addresses; delete them once no old links are in use.

## Adding a paper

1. Copy an existing file in `_research/`, rename it (the file name becomes the address), and edit its front matter (title, citation, DOI, request title, short title, order) and its text.
2. Add a topic to `_data/topics.yml` under the right theme. Set `page: /research/<file name>/` to add the "Read the detailed explanation" link.
3. Add the paper to `_data/publications.yml`.

The request drop-down on the overview page and the navigation update on their own.

## Notes

- Pages are plain HTML inside the files; there is no Markdown processing.
- Do not type the characters `{{` or `{%` in page text, because Jekyll reads them as template code.
- If the site is ever served from a sub-folder (username.github.io/repo-name), set `baseurl` in `_config.yml` to "/repo-name".
- No PDFs are hosted. Each paper page links to the publisher (DOI) and offers a "Request a copy" form (Web3Forms).
