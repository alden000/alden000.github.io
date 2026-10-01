# alden000.github.io

User site for GitHub Pages, served at **https://app.wwweeeiii.com**.

Because this user site has a custom domain, every project repo with GitHub Pages enabled (and no
custom domain of its own) is automatically served at `https://app.wwweeeiii.com/<repo>/`.
Projects with their own domain (e.g. `gnsslog` → `gnsslog.wwweeeiii.com`) redirect there.

`index.html` is a deliberately bare placeholder: it does not list or link to any repository, so
projects are only reachable by their `/<repo>/` address. Deployed by `.github/workflows/pages.yml` on every push to `main`.

Setup (one time): Settings → Pages → Source **GitHub Actions**, Custom domain **app.wwweeeiii.com**,
**Enforce HTTPS**. DNS: `CNAME app → alden000.github.io` (Cloudflare, DNS only).
