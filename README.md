# ForensicEdge — Forensic Accounting Firm Template

A premium, multi-page HTML template for a **Forensic Accounting Firm** featuring a secure client portal dashboard for sharing financial documents and tracking investigation progress.

## 🛡️ Features

- **15 Pages** — Home, About, Services, Contact, 404, Coming Soon, Login, Dashboard (7 portal pages)
- **Secure Client Portal** — Dashboard overview, Case management, Document vault, Progress tracker, Reports, Notifications, Profile & Settings
- **Dark/Light Mode** — Toggle with localStorage persistence
- **Responsive Design** — Mobile-first approach (mobile, tablet, desktop breakpoints)
- **Modern UI** — Tailwind CSS, Glassmorphism, AOS scroll animations, Lucide icons, Google Fonts (Inter + Outfit)
- **Interactive** — Sidebar collapse, drag-drop upload, animated counters, form validation, chart animations

## 📂 File Structure

```
Forensic Accounting Firm/
├── assets/
│   ├── css/
│   │   ├── style.css           # Global design system
│   │   ├── dashboard.css       # Portal-specific styles
│   │   └── pages.css           # Marketing page styles
│   ├── js/
│   │   ├── main.js             # Shared utilities
│   │   ├── dashboard.js        # Portal interactivity
│   │   └── theme.js            # Dark/light toggle
│   ├── images/
│   └── fonts/
├── index.html                  # Home page
├── about.html                  # About Us
├── services.html               # Services
├── contact.html                # Contact
├── 404.html                    # Error page
├── coming-soon.html            # Pre-launch page
├── login.html                  # Portal login
├── dashboard.html              # Portal overview
├── dashboard-matters.html      # Case management
├── dashboard-documents.html    # Document vault
├── dashboard-progress.html     # Investigation tracker
├── dashboard-reports.html      # Reports & analytics
├── dashboard-notifications.html# Notifications
├── dashboard-profile.html      # Profile & settings
└── README.md
```

## 🚀 Setup

1. Open `index.html` in a browser
2. Navigate to any page via the header links
3. Access the client portal via the "Client Portal" button → `login.html` → `dashboard.html`

## 🎨 Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
- `--accent-gold`: Primary accent (#D4A843)
- `--accent-teal`: Secondary accent (#14B8A6)
- `--primary`: Background (#0B1120)

### Fonts
Change Google Fonts import in each HTML `<head>` and update `--font-body` / `--font-heading` variables.

### Tailwind
Tailwind config is inline in each `<script>` tag. Modify the `tailwind.config` object to customize.

## 📦 Dependencies (CDN)

- [Tailwind CSS](https://tailwindcss.com) — Utility framework
- [Lucide Icons](https://lucide.dev) — Icon set
- [AOS](https://michalsnik.github.io/aos/) — Scroll animations
- [Google Fonts](https://fonts.google.com) — Inter & Outfit

## 📜 Credits

- Design & Development: ForensicEdge Template
- Icons: Lucide
- Animations: AOS
- CSS Framework: Tailwind CSS

## 📋 Changelog

- **v1.0.0** — Initial release with 15 pages, dashboard portal, dark/light mode
