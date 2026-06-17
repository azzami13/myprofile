# Muhammad Azzam Izzuddin - Personal Web Profile Frontend

Frontend-only personal web profile/portfolio built with Next.js, TypeScript, and plain CSS. The content is based on Azzam's CV, resume, and editable portfolio documents.

## Main Sections

- Hero / personal profile
- About me
- Core skills
- Internship experience
- Selected projects
- Contact

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- CSS only, no Tailwind required
- Static frontend, suitable for Vercel deployment

## How to Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## How to Edit Content

Most text content is stored in:

```txt
src/data/site.ts
```

Edit this file to change:

- Name, title, tagline
- Contact information
- About me text
- Skills
- Experience
- Projects
- Image filenames

## Where to Add Images

Save your screenshots and profile photo in:

```txt
public/images/
```

Use these filenames so the placeholders are automatically filled:

| Filename | Usage |
|---|---|
| `public/images/profile-azzam.jpg` | Main profile photo in hero section |
| `public/images/cimitage-map.png` | Cimitage WebGIS map screenshot |
| `public/images/cimitage-route.png` | Cimitage route optimization screenshot |
| `public/images/cimitage-dashboard.png` | Cimitage booking/admin dashboard screenshot |
| `public/images/tukangkomputer-home.png` | TukangKomputer homepage/listing screenshot |
| `public/images/tukangkomputer-tracking.png` | TukangKomputer tracking/order screenshot |
| `public/images/tukangkomputer-admin.png` | TukangKomputer admin/SRS diagram screenshot |
| `public/images/kalium-dashboard.png` | Kalium dashboard screenshot |
| `public/images/kalium-food.png` | Kalium food intake/nutrition screenshot |
| `public/images/kalium-water.png` | Kalium water reminder/profile screenshot |
| `public/images/sikahim-home.png` | SIKAHIM homepage/event list screenshot |
| `public/images/sikahim-detail.png` | SIKAHIM activity detail/registration screenshot |
| `public/images/sikahim-erd.png` | SIKAHIM ERD/evaluation/admin screenshot |

Recommended image format: `.png` for screenshots/diagrams, `.jpg` for profile photo. Recommended width: 1200px or above for project images.

## Where to Add Resume PDF

Save your resume PDF in:

```txt
public/files/resume-azzam.pdf
```

The "Download Resume" button in the hero section points to that file.

## Deploy to Vercel

1. Push this project to GitHub.
2. Open Vercel.
3. Add New Project.
4. Import the GitHub repository.
5. Keep the framework as Next.js.
6. Click Deploy.

## Git Commands

```bash
git init
git add .
git commit -m "init personal web profile"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## Notes

- This project is frontend-only, so it does not need a backend or database.
- If an image file is missing, the website still shows a styled project visual area.
- After adding or replacing images, redeploy to Vercel.
