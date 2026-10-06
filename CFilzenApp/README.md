# chrisfilzen.com

React + Vite site for Azure Static Web Apps.

## Run locally
    npm install
    npm run dev

## Edit content
All text lives at the top of `src/App.jsx`. Put `headshot.jpg` and `resume.pdf` in `public/`.

## Deploy (Azure Static Web Apps + GitHub)
1. Replace the old site's files in your repo with these (keep the existing `.github/workflows/azure-static-web-apps-*.yml`).
2. In that workflow's `with:` block set: `app_location: "/"`, `api_location: ""`, `output_location: "dist"`.
3. Commit and push to the branch the workflow watches. GitHub Actions builds and deploys automatically.
4. Your custom domain stays attached; no DNS changes needed.

## Later: contact form / blog
Add an `/api` folder with an Azure Function and set `api_location: "api"`.
