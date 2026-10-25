# ejlee5826.github.io

Personal academic website of Eunju Lee, built with [al-folio](https://github.com/alshedivat/al-folio) v1.2 and hosted on GitHub Pages at <https://ejlee5826.github.io>.

## Where things live

| What                  | File                                   |
| --------------------- | -------------------------------------- |
| Site settings, fonts  | `_config.yml`                          |
| About page / bio      | `_pages/about.md`                      |
| Publications          | `_bibliography/papers.bib`             |
| Venue badge links     | `_data/venues.yml`                     |
| Co-author links       | `_data/coauthors.yml`                  |
| CV (English / 한국어 tabs) | `_data/cv_en.yml`, `_data/cv_ko.yml` (rendered by `_includes/cv_body.liquid`) |
| Korean papers (Publications bottom, ≤3rd author shown) | `_data/domestic_publications.yml` |
| Projects page         | `_data/projects_en.yml`, `_data/projects_ko.yml` (tabs, rendered by `_includes/projects_list.liquid`) |
| News (current year)   | `_news/*.md`                           |
| Social icons          | `_data/socials.yml`                    |
| Portrait              | `assets/img/prof_pic.jpg`              |
| Paper thumbnails      | `assets/img/publication_preview/<bibkey>.png` (+ `preview` field in the bib entry) |
| Visual style          | `_sass/_minimal.scss` (+ `_variables`, `_themes`) |

The news section only shows items dated in the current year (`_includes/news.liquid`).

## Local preview

```bash
bundle install
bundle exec jekyll serve      # http://localhost:4000/
```

ImageMagick (`convert`) is needed for responsive images. Without it, build with a local override:

```bash
printf 'imagemagick:\n  enabled: false\n' > /tmp/_config_local.yml
bundle exec jekyll serve --config _config.yml,/tmp/_config_local.yml
```

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to the `gh-pages` branch.

## Theme upgrades

Runtime code comes from the `al_folio_*` / `al_*` gems pinned in `Gemfile`. Local files in `_sass/`, `_includes/`, `assets/css/` shadow gem files; after bumping gem versions run:

```bash
bundle exec al-folio upgrade audit
bundle exec al-folio upgrade overrides audit
```
