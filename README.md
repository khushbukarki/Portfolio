# 🎨 Khushbu Karki - Portfolio

<div align="center">

[![Repository Size](https://img.shields.io/github/repo-size/khushbukarki/Portfolio?style=flat-square&color=blue)](https://github.com/khushbukarki/Portfolio)
[![Contributors](https://img.shields.io/github/contributors/khushbukarki/Portfolio?style=flat-square&color=green)](https://github.com/khushbukarki/Portfolio)
[![Open Issues](https://img.shields.io/github/issues/khushbukarki/Portfolio?style=flat-square&color=orange)](https://github.com/khushbukarki/Portfolio)
[![Closed Issues](https://img.shields.io/github/issues-closed/khushbukarki/Portfolio?style=flat-square&color=gray)](https://github.com/khushbukarki/Portfolio)
[![GitHub License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

**A modern, interactive, and responsive portfolio website built with React + Vite, showcasing professional projects and skills with smooth animations.**

[View Live Demo](#-live-demo) • [Quick Start](#-quick-start) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Contact](#-contact)

</div>

---

## 🌟 Features

✨ **Modern & Interactive Design**
- Smooth scroll animations with AOS (Animate On Scroll) & Framer Motion
- Responsive layout for all devices (mobile, tablet, desktop)
- Dark/Light mode support with Tailwind CSS
- Component-based architecture with React

📱 **Fully Responsive**
- Mobile-first approach with Tailwind CSS
- Optimized for all screen sizes (320px - 4K)
- Touch-friendly interactions and animations

⚡ **Performance Optimized**
- Built with Vite for ultra-fast build times
- Minimal bundle size with tree-shaking
- Optimized asset loading
- Production-ready build system

🎯 **SEO Friendly**
- Semantic HTML structure
- Meta tags optimization
- Mobile-friendly design
- Fast page load times

🔄 **Interactive Elements**
- Smooth page transitions
- Scroll-triggered animations
- Interactive project cards
- Contact form with validation
- Responsive navigation

---

## 💻 Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend Framework** | React 18+ |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion, AOS |
| **Language** | JavaScript (ES6+) |
| **Package Manager** | npm/yarn |

### Key Dependencies:
- **aos** (v2.3.4) - Scroll animations
- **framer-motion** (latest) - Advanced animations
- **tailwindcss** (via CDN) - Utility-first CSS
- **vite** (v5.4.0) - Lightning-fast build tool

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js** v16+ or higher
- **npm** v8+ or **yarn** v1.22+
- Git

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/khushbukarki/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   - Navigate to `http://localhost:5173` (Vite default port)
   - Your portfolio will auto-refresh on file changes

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

---

## 📂 Project Structure

```
Portfolio/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/              # Page components
│   ├── styles/             # Global styles
│   ├── App.jsx             # Main app component
│   └── main.jsx            # React entry point
├── public/                 # Static assets
│   ├── images/
│   ├── icons/
│   └── ...
├── index.html              # HTML template
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

---

## 🎯 Live Demo

👉 **[View Portfolio Live](https://khushbukarki.com)** _(Update with your actual URL)_

### Featured Projects:

#### 1. 🌐 **Interactive Web Application**
- Modern React-based web app with real-time updates
- Smooth animations and responsive design
- **Tech:** React, Tailwind CSS, Framer Motion
- **[View Project →](https://github.com/khushbukarki/project-1)**

#### 2. 📊 **Data Visualization Dashboard**
- Interactive charts and analytics
- Real-time data updates
- **Tech:** React, Chart.js, API Integration
- **[View Project →](https://github.com/khushbukarki/project-2)**

#### 3. 🛍️ **E-commerce Platform**
- Full-stack e-commerce solution
- Payment integration & user authentication
- **Tech:** React, Node.js, MongoDB, Stripe
- **[View Project →](https://github.com/khushbukarki/project-3)**

---

## 🎨 Customization Guide

### 1. **Update Personal Information**

Edit `src/components/Navbar.jsx` and `src/components/Hero.jsx`:
```jsx
const personalInfo = {
  name: "Your Full Name",
  title: "Your Professional Title",
  email: "your-email@example.com",
  phone: "+1 (555) 123-4567",
  location: "City, Country"
};
```

### 2. **Add Your Projects**

Edit `src/components/Projects.jsx`:
```jsx
const projects = [
  {
    id: 1,
    title: "Project Title",
    description: "Short project description",
    image: "path/to/image",
    technologies: ["React", "Tailwind", "Vite"],
    liveLink: "https://project-url.com",
    githubLink: "https://github.com/username/project"
  },
  // Add more projects
];
```

### 3. **Customize Colors & Themes**

Edit `index.html` Tailwind config:
```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      }
    }
  }
};
```

### 4. **Update Social Media Links**

Edit `src/components/Footer.jsx`:
```jsx
const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourhandle",
  email: "your-email@example.com"
};
```

### 5. **Configure Animations**

Edit `src/main.jsx` to customize AOS:
```javascript
import AOS from 'aos';

AOS.init({
  duration: 800,
  easing: 'ease-in-out-sine',
  offset: 100,
  once: false
});
```

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Fork & Clone
```bash
git clone https://github.com/your-username/Portfolio.git
cd Portfolio
```

### Create Feature Branch
```bash
git checkout -b feature/AmazingFeature
```

### Make Changes & Test
- Edit files as needed
- Test on multiple browsers and screen sizes
- Run `npm run build` to check for errors

### Commit & Push
```bash
git add .
git commit -m 'feat: Add amazing feature'
git push origin feature/AmazingFeature
```

### Open Pull Request
- Navigate to GitHub and open a PR
- Provide clear description of changes
- Reference any related issues

### Contribution Guidelines
- ✅ Follow existing code style and conventions
- ✅ Add meaningful comments for complex logic
- ✅ Test on Chrome, Firefox, Safari, and Edge
- ✅ Update documentation for new features
- ✅ Keep commits atomic and meaningful

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173 and restart
npm run dev
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Build Errors
```bash
# Clear Vite cache
rm -rf .vite
npm run build
```

### Animations Not Showing
- Check browser console for errors
- Ensure AOS and Framer Motion are imported
- Verify CSS classes are applied
- Check data-aos attributes

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Verify Tailwind CSS is loaded via CDN
- Check if dark mode is interfering

### Dark Mode Issues
- Ensure `<html class="dark">` is set properly
- Clear localStorage for theme preference
- Check Tailwind dark mode configuration

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use this template for your own portfolio!

---

## 👤 Author

**Khushbu Karki**
- Master of Applied Technologies (Software Development)
- 🎓 Graduate
- 💼 Full-Stack Developer

### Connect With Me:
- **GitHub:** [@khushbukarki](https://github.com/khushbukarki)
- **Email:** [khushbu.karki@example.com](mailto:khushbu.karki@example.com) _(Update with your email)_
- **LinkedIn:** [Khushbu Karki](https://linkedin.com/in/khushbukarki) _(Update your profile)_
- **Portfolio:** [khushbukarki.com](https://khushbukarki.com) _(Update with your domain)_

---

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [AOS Library](https://michalsnik.github.io/aos/) - Scroll animations
- Community contributors and supporters

---

## 📞 Support & Contact

Have questions, feedback, or want to collaborate?

- 📧 **Email:** [khushbu.karki@example.com](mailto:khushbu.karki@example.com)
- 🐛 **Report Bugs:** [Create an Issue](https://github.com/khushbukarki/Portfolio/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/khushbukarki/Portfolio/discussions)
- 🤝 **Collaboration:** Open for freelance work and full-time opportunities

---

<div align="center">

### ⭐ If you find this project helpful, please give it a star! ⭐

### Made with ❤️ by [Khushbu Karki](https://github.com/khushbukarki)

**Happy Coding! 🚀**

</div>
