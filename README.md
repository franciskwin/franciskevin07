# Online Resume — Francis Kevin Jothi G

Personal online resume and portfolio website for **Francis Kevin Jothi G**, a Full-Stack Developer specializing in Angular, PHP, Drupal, Adobe Experience Manager (AEM), and AI-powered product delivery.

This is a **static HTML / CSS / JavaScript** website. It does not use React, Next.js, Angular, or npm build tools.

## Technologies Used

- HTML5
- CSS3 (custom design system)
- Vanilla JavaScript
- Google Fonts (Sora, Caveat)
- Font Awesome 4 (CDN)
- Formspree (contact form endpoint)

## Features

- Responsive single-page layout (desktop, laptop, tablet, mobile)
- Hero section with profile photo, CTAs, and career stats
- About, skills, projects, experience, education, and highlights
- Downloadable PDF resume
- Contact form and contact details
- Smooth scroll navigation and scroll-triggered animations
- Ready for static hosting on Vercel, Netlify, or GitHub Pages

## Project Structure

```text
online-resume/
├── index.html                 # Main entry page
├── favicon.ico                # Site favicon
├── README.md                  # Project documentation
├── .gitignore
├── css/
│   └── portfolio.css          # Active site stylesheet
├── scripts/
│   └── main.js                # Navigation, animations, UI behavior
├── images/
│   ├── franciskevin.png       # Profile photo
│   ├── cc-bg-1.jpg            # Hero background
│   ├── contact-bg.jpg         # Contact section background
│   └── portfolio_image_assets/
│       ├── project-1.jpg … project-4.jpg
│       └── contact-map.png
└── docs/
    └── Francis_Kevin_Jothi_G_Resume.pdf
```

> Note: The repository may also contain unused legacy Creative CV template assets (`css/main.css`, `css/bootstrap.min.css`, `js/`, etc.). They are **not loaded** by `index.html` and are safe to ignore for deployment.

## Local Setup

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a modern browser  
   (or serve the folder with any static server).

Optional local server examples:

```bash
# Python
python -m http.server 5500

# Node (if installed globally)
npx serve .
```

Then visit `http://localhost:5500`.

No `npm install` is required for the website itself.

## Vercel Deployment

1. Push this repository to GitHub (`online-resume`).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New Project** and import `online-resume`.
4. Keep defaults for a static site:
   - Framework Preset: **Other**
   - Root Directory: project root (where `index.html` lives)
   - Build Command: leave empty
   - Output Directory: leave empty / `.`
5. Click **Deploy**.

Vercel serves `index.html` automatically. A `vercel.json` file is **not required**.

After deploy, update Open Graph URLs in `index.html` to your production domain if you want correct social previews:

```html
<meta property="og:image" content="https://YOUR-PROJECT.vercel.app/images/franciskevin.png">
```

## Contact Form

The contact form posts to Formspree. For production, create a Formspree form and replace the form `action` URL in `index.html` with your form endpoint.

## License

Personal portfolio project for Francis Kevin Jothi G.
Originally based on a Creative CV HTML template design, customized into a static personal resume site.
