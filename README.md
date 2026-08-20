# hantal.com

Source for the Hantal Advising marketing site — static HTML/CSS/JS, no build step.

## Structure

- `index.html`, `services.html`, `about.html`, `insights.html`, `contact.html` — the five pages
- `css/style.css` — shared stylesheet
- `js/main.js` — mobile nav toggle, Talks & Insights filter tabs, contact form handling
- `assets/` — logo, icon, headshot

## Local preview

```
python3 -m http.server 8000
```

then open `http://localhost:8000`.

## Deployment

Served via GitHub Pages (`main` branch, root). `CNAME` points Pages at the custom domain `hantal.com` — the domain's DNS still needs to be pointed at GitHub Pages for that to resolve (see repo Settings → Pages).

## Known placeholders (not yet wired up)

- Contact form has no backend — needs a form service (Formspree / Netlify Forms) with spam protection
- Talk entries on `insights.html` link to `#` — need real URLs per talk
- CV/bio PDF download on `about.html` is a placeholder
- Newsletter signup and Calendly link are not yet connected
