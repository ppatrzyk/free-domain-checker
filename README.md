# free-domain-checker

description todo

## Docker

todo

## local dev

1. Download and unzip WordNet SQLite database from [here](https://sourceforge.net/projects/wnsql/files/wnsql3/sqlite/3.1/).

2. Run

```
DB=<sqlite_file_location> npm run dev
```

# Acknowledgements

For registrered domains the app uses free [Scraper Run Whois API](https://scraper.run/api.html)

Synonyms are generated from [WordNet](https://wordnet.princeton.edu) database:

- [license](https://wordnet.princeton.edu/license-and-commercial-use)
- [sqlite file source](https://wnsql.sourceforge.net/)
- [sourceforge sqlite db link](https://sourceforge.net/projects/wnsql/)
