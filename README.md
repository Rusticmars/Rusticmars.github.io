# Personal physics website

Static site for GitHub Pages.

## Structure

- index.html: overview page
- research/<paper>/index.html: detailed explanation of one paper (alscn-ferroelectrics, inse-bandgap-transition, tmd-nonlinear-optics, abinit-overview)
- software/raman-spectra/index.html: page for the Raman post-processing tool
- assets/: shared files (style.css for the common design, navigation, and form; home.css and paper.css for page-specific rules; form.js for the request form)
- 404.html: shown for addresses that do not exist (its links assume the site is served at the root of its domain; see the comment inside the file)
- Root-level files named after the old addresses (alscn-ferroelectrics.html and so on) are redirects to the new addresses; they can be deleted once no old links remain in use.

No PDFs are hosted in this repository. Each paper page links to the publisher (DOI) and offers a "Request a copy" form (Web3Forms).

## Deploying

Upload the contents of this folder to the root of the repository, keeping the folders, then enable Pages (Settings, Pages, deploy from the main branch, root folder).

## Adding a paper

1. Copy an existing folder under research/, rename it, and edit the text and the form's title fields.
2. Add its summary and links to index.html (research list, publications list, and the request drop-down).
