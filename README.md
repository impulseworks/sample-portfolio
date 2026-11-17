# Maya Rivera — portfolio site (fictional sample)

A static, GitHub Pages-ready 3-page site for a fictional mechanical engineer. Built as a Standard-package sample for the impulseworks Fiverr shop.

Pages: Home (with About), Work, Resume & contact. Contact is a mailto placeholder only (`maya.rivera@example.com`). No CMS, no forms, no backend.

## Local preview

```bash
python3 -m http.server 8765 --directory .
# then open http://127.0.0.1:8765/
```

## Publishing on GitHub Pages

Copy the contents of this folder (not the sibling preview images) into a repository and enable GitHub Pages from the root (or `/docs`). Relative links work at the site root and under a project subpath such as `/repo-name/`. A custom `404.html` is included; GitHub Pages will use it for missing URLs.

Suggested public repo names:

- `maya-rivera`
- `maya-rivera-portfolio`
- `impulseworks-sample-portfolio`

The live URL would then be `https://<github-username>.github.io/<repo>/` unless a custom domain is added later. After a live URL exists, the Open Graph image path in each page’s `<head>` (`assets/og-image.png`) can optionally be changed to an absolute URL if a particular crawler requires it.

Do not replace this fictional content with anyone's real resume, photo, or employer names.
