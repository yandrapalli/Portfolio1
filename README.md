# Portfolio Website - Yandrapalli Snehalatha

A modern, responsive portfolio website showcasing my work as a Full Stack Web Developer. Built with HTML, CSS, and JavaScript featuring dynamic content rendering, glassmorphism effects, and smooth animations.

![Portfolio Preview](images/sneha.jpg)

## 🌟 Features

- **Dynamic Content System** - All portfolio data stored in JavaScript for easy updates
- **Modern Design** - Glassmorphism effects with gradient backgrounds and smooth animations
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Typing Effect** - Animated text in hero section cycling through roles
- **Smooth Animations** - Scroll-triggered animations and hover effects throughout
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Fast Loading** - Optimized assets and efficient code

## 🚀 Live Demo

[View Live Portfolio](https://yandrapalli.github.io/portfolio/)

## 📁 Project Structure

```
portfolio1/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles and animations
├── js/
│   ├── constants.js       # Portfolio data (projects, skills, etc.)
│   └── main.js           # Dynamic rendering and interactions
├── images/
│   ├── sneha.jpg         # Profile photo
│   ├── project1.jpg      # Project screenshots
│   └── project2.jpg
└── README.md             # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Dynamic content rendering
- **Font Awesome** - Icons
- **Google Fonts** - Inter & Poppins typography

## 💻 Sections

1. **Hero Section** - Introduction with typing effect and call-to-action buttons
2. **Projects** - Showcase of featured projects with tech stacks
3. **Experience** - Timeline of work experience and education
4. **Skills** - Technical and soft skills organized by category
5. **Contact** - Contact information and social media links

## 🎨 Design Features

- **Gradient Background** - Deep indigo to violet gradient with subtle pattern overlay
- **Glassmorphism** - Semi-transparent cards with backdrop blur
- **Liquid Glass Buttons** - Interactive buttons with glow effects
- **Floating Animations** - Smooth floating effects on profile photo
- **Parallax Scrolling** - Fixed background creates depth
- **Responsive Timeline** - Alternating layout on desktop, stacked on mobile

## 📝 How to Update Content

All portfolio content is stored in `js/constants.js`. Simply edit the data objects:

### Add a Project
```javascript
const PROJECTS = [
    {
        title: 'Your Project Name',
        description: 'Project description',
        image: 'images/project.jpg',
        technologies: ['Tech1', 'Tech2'],
        link: 'https://project-url.com',
        github: 'https://github.com/username/repo'
    }
];
```

### Add Experience
```javascript
const EXPERIENCE = [
    {
        type: 'work',  // or 'education'
        title: 'Job Title',
        organization: 'Company Name',
        duration: '2024 – Present',
        description: 'What you did...'
    }
];
```

### Update Skills
```javascript
const SKILLS = {
    languages: [
        { name: 'Java', icon: 'fab fa-java' }
    ]
};
```

### Update Contact Info
```javascript
const CONTACT = {
    email: 'your.email@example.com',
    phone: '+91 1234567890',
    location: 'Your Location',
    social: [...]
};
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yandrapalli/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

3. **Make changes**
   - Edit `js/constants.js` to update content
   - Edit `css/style.css` to modify styles
   - Refresh browser to see changes

### Deployment

#### GitHub Pages (Recommended)

1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select main branch as source
4. Your site will be live at `https://username.github.io/repository-name/`

#### Other Options
- **Netlify**: Drag and drop deployment
- **Vercel**: Connect GitHub repository
- **Traditional Hosting**: Upload files via FTP

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🎯 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 2 seconds
- **Optimized Images**: WebP format with fallbacks
- **Minimal Dependencies**: Only Font Awesome and Google Fonts

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Yandrapalli Snehalatha**

- Email: lathasneha925@gmail.com
- LinkedIn: [yandrapalli-snehalatha](https://www.linkedin.com/in/yandrapalli-snehalatha-24679027b)
- GitHub: [@yandrapalli](https://github.com/yandrapalli)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)

## 📞 Contact

Feel free to reach out if you have any questions or suggestions!

- 📧 Email: lathasneha925@gmail.com
- 📱 Phone: +91 9347790759
- 💼 LinkedIn: [Connect with me](https://www.linkedin.com/in/yandrapalli-snehalatha-24679027b)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by Yandrapalli Snehalatha
