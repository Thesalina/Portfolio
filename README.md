# Portfolio — Salina Bishwokarma

A clean, minimal portfolio website with a chic aesthetic and pink accent theme. Built with React, Tailwind CSS, and Vite.

## ✨ Features

- **Chic Design** — Warm off-white & soft black palette with pink-400 accent
- **Dark / Light Mode** — Toggle between themes with smooth transitions
- **Responsive** — Mobile-first layout that looks great on all devices
- **Smooth Navigation** — Hash-free URLs with smooth scroll between sections
- **Animated Sections** — Subtle entrance animations with Framer Motion
- **Downloadable Resume** — One-click CV download from the hero section
- **Project Showcase** — Cards with live demo & source code links
- **SEO Ready** — Proper meta tags, semantic HTML, and custom favicon

## 🛠 Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Framework  | React 18, Vite 5                    |
| Styling    | Tailwind CSS 3 (custom `chic` theme)|
| Animation  | Framer Motion                       |
| Icons      | React Icons (FA, Feather)           |
| Backend    | Express.js, Nodemailer              |
| Deployment | Vercel                              |

## 📁 Sections

- **Hero** — Name, title, and CTA with a soft pink glowing orb
- **About** — Photo, bio, and quick-facts grid
- **Experience** — Vertical timeline of roles
- **Portfolio** — Project cards with hover effects
- **Skills** — Technical skill set
- **Contact** — Email, phone, and location
- **Footer** — Social links, resume, and tagline

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Backend Setup

The contact form requires the backend server to send emails.

```bash
cd backend
npm install
```

Create `backend/.env`:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

Start the backend:

```bash
npm start
```

The backend runs on port 4000. The frontend proxies `/api` requests to it via Vite.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## 📂 Project Structure

```
src/
├── assets/          # Images, resume PDF
├── components/
│   ├── Navbar.jsx       # Fixed nav with smooth scroll
│   ├── HeroSection.jsx  # Landing section
│   ├── About.jsx        # Bio & quick facts
│   ├── Experience.jsx   # Timeline
│   ├── Portfolio.jsx    # Project cards
│   ├── Skills.jsx       # Tech stack
│   ├── Services.jsx     # Services offered
│   ├── Contact.jsx      # Contact info
│   └── Footer.jsx       # Social links & tagline
├── App.jsx          # Main layout & dark mode logic
├── main.jsx         # Entry point
└── index.css        # Tailwind directives & base styles

public/
├── favicon.svg      # Custom pink "S" favicon

backend/
├── server.js        # Express + Nodemailer
└── .env             # Email credentials
```

## 📄 License

© 2026 Salina Bishwokarma. All rights reserved.
