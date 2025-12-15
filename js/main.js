// ===== Page Loader =====
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, CONFIG.loaderDuration);
});

// ===== Typing Effect =====
class TypingEffect {
    constructor(element, texts, typingSpeed, deletingSpeed, delay) {
        this.element = element;
        this.texts = texts;
        this.typingSpeed = typingSpeed;
        this.deletingSpeed = deletingSpeed;
        this.delay = delay;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];

        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = this.delay;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// ===== Dynamic Content Rendering Functions =====

// Render Projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = PROJECTS.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                   
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                </div>
            </div>
        </div>
    `).join('');
}

// Render Experience Timeline
function renderExperience() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;

    timeline.innerHTML = EXPERIENCE.map(item => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3 class="timeline-title">${item.title}</h3>
                    <span class="timeline-date">${item.duration}</span>
                </div>
                <h4 class="timeline-company">${item.organization}</h4>
                <p class="timeline-description">${item.description}</p>
            </div>
        </div>
    `).join('');
}

// Render Skills
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    const skillCategories = [
        { title: 'Languages', items: SKILLS.languages },
        { title: 'Web Technologies', items: SKILLS.webTechnologies },
        { title: 'Backend', items: SKILLS.backend },
        { title: 'Database & Tools', items: SKILLS.tools }
    ];

    skillsGrid.innerHTML = skillCategories.map(category => `
        <div class="skill-category">
            <h3 class="category-title">${category.title}</h3>
            <div class="skill-items">
                ${category.items.map(skill => `
                    <div class="skill-item">
                        <i class="${skill.icon}"></i>
                        <span>${skill.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    // Render soft skills
    const softSkillsContainer = document.getElementById('softSkills');
    if (softSkillsContainer) {
        softSkillsContainer.innerHTML = `
            <h3 class="category-title">Soft Skills</h3>
            <div class="soft-skill-tags">
                ${SKILLS.softSkills.map(skill => `<span class="soft-skill-tag">${skill}</span>`).join('')}
            </div>
        `;
    }
}

// Render Contact Information
function renderContact() {
    // Render contact items
    const contactInfo = document.getElementById('contactInfo');
    if (contactInfo) {
        contactInfo.innerHTML = `
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-details">
                    <h4>Email</h4>
                    <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>
                </div>
            </div>

            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-phone"></i>
                </div>
                <div class="contact-details">
                    <h4>Phone</h4>
                    <a href="tel:${CONTACT.phone.replace(/\s/g, '')}">${CONTACT.phone}</a>
                </div>
            </div>

            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-details">
                    <h4>Location</h4>
                    <p>${CONTACT.location}</p>
                </div>
            </div>
        `;
    }

    // Render social links
    const socialLinks = document.getElementById('socialLinks');
    if (socialLinks) {
        socialLinks.innerHTML = CONTACT.social.map(social => `
            <a href="${social.url}" target="_blank" class="social-link" aria-label="${social.ariaLabel}">
                <i class="${social.icon}"></i>
            </a>
        `).join('');
    }
}

// Initialize typing effect when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log(`${APP_NAME} v${VERSION} loaded successfully`);

    // Render dynamic content
    renderProjects();
    renderExperience();
    renderSkills();
    renderContact();

    // Initialize Typing Effect
    const typingElement = document.getElementById('typingText');
    if (typingElement) {
        new TypingEffect(
            typingElement,
            TYPING_TEXTS,
            CONFIG.typingSpeed,
            CONFIG.deletingSpeed,
            CONFIG.delayBetweenTexts
        );
    }

    // ===== Navbar Scroll Effect =====
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===== Mobile Menu Toggle =====
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ===== Smooth Scroll for Navigation Links =====
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Active Link Highlighting on Scroll =====
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ===== Scroll Animations =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.project-card, .timeline-item, .skill-category, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
