# CLAUDE.md

Personal academic site (al-folio v1.2 thin starter). Runtime layouts, includes, and Sass come from the `al_folio_*` gems pinned in `Gemfile`; this repo holds content, config, and a few local overrides.

- Content: `_pages/`, `_bibliography/papers.bib`, `_data/{cv_en,cv_ko,socials,venues,coauthors}.yml` (CV tabs, rendered by `_includes/cv_body.liquid`), `_data/domestic_publications.yml` (Korean papers, bottom of Publications, ≤3rd author only), `_data/{projects_en,projects_ko}.yml` (Projects tabs, rendered by `_includes/projects_list.liquid`), `_news/`.
- Local overrides (shadow gem files): `_sass/_variables.scss`, `_sass/_themes.scss`, `_sass/_minimal.scss`, `assets/css/main.scss`, `_includes/news.liquid`, `_layouts/cv.liquid` (renders page content so `al-folio-cv.css` still loads), `_includes/selected_papers.liquid` (About list ordered by `selected = {1..4}`).
- Style: minimal black-and-white, Wanted Sans Variable; keep new styling inside `_sass/_minimal.scss`.
- `Gemfile` and `_config.yml` plugin lists must agree; a plugin in only one of them is silently inert.
- Do not commit on the owner's behalf.
- Build: `bundle exec jekyll build` (see README for the no-ImageMagick variant).
