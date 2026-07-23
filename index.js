// =============================================================
// DATA - Using Fast Loading Placeholder Images
// =============================================================
const data = {
    services: [
        {
            icon: '🎨',
            title: 'UI/UX Design',
            description: 'From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users.'
        },
        {
            icon: '💻',
            title: 'Frontend Development',
            description: 'Production-grade code with React and modern CSS. Pixel-perfect, fully responsive, SEO-friendly and blazing fast.'
        },
        {
            icon: '🚀',
            title: 'Landing Pages',
            description: 'High-converting pages for SaaS, apps and personal brands. Designed to communicate value instantly and drive action.'
        }
    ],
    projects: [
        {
            title: 'Finlo — Fintech App',
            category: 'Fintech',
            tags: ['SaaS', 'Figma', 'Tailwind'],
            description: 'Marketing site and onboarding flow for a personal finance app targeting young professionals.',
            image: 'https://picsum.photos/seed/finlo/600/400',
            github: '#',
            live: '#'
        },
        {
            title: 'Novu — SaaS Dashboard',
            category: 'SaaS',
            tags: ['SaaS', 'React', 'Node'],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis, odit nam aperiam fugiat optio libero.',
            image: 'https://picsum.photos/seed/novu/600/400',
            github: '#',
            live: '#'
        },
        {
            title: 'Orea — Creative Agency',
            category: 'Agency',
            tags: ['Animation', 'Figma', 'Webflow'],
            description: 'Bold editorial site for a Paris-based branding studio. Scroll-driven animations and custom cursor to match their premium positioning.',
            image: 'https://picsum.photos/seed/orea/600/400',
            github: '#',
            live: '#'
        }
    ],
    animations: [
        {
            title: 'Character Walk Cycle',
            category: '2D Animation',
            date: 'Mar 2025',
            description: 'A fluid walk cycle animation created for a game character using Adobe Animate. Features smooth transitions and dynamic posing.',
            video: 'https://www.w3schools.com/html/mov_bbb.mp4',
            thumbnail: 'https://picsum.photos/seed/walkcycle/600/400',
            github: '#',
            live: '#'
        },
        {
            title: 'Explainer Video - Tech Startup',
            category: 'Motion Graphics',
            date: 'Feb 2025',
            description: 'Animated explainer video for a tech startup showcasing their product features with engaging motion graphics and clean typography.',
            video: 'https://www.w3schools.com/html/mov_bbb.mp4',
            thumbnail: 'https://picsum.photos/seed/explainer/600/400',
            github: '#',
            live: '#'
        },
        {
            title: 'Logo Animation Showcase',
            category: 'Logo Animation',
            date: 'Jan 2025',
            description: 'Dynamic logo animation with particle effects and smooth transitions, created for a creative agency\'s brand identity.',
            video: 'https://www.w3schools.com/html/mov_bbb.mp4',
            thumbnail: 'https://picsum.photos/seed/logoshow/600/400',
            github: '#',
            live: '#'
        }
    ]
};

// =============================================================
// RENDER FUNCTIONS
// =============================================================

// Render Services
function renderServices() {
    const container = document.getElementById('servicesGrid');
    container.innerHTML = data.services.map(service => `
        <div class="service-card">
            <div class="icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');
}

// Render Projects
function renderProjects() {
    const container = document.getElementById('projectsGrid');
    container.innerHTML = data.projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy" />
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
            </div>
            <div class="project-content">
                <div class="project-category">${project.category}</div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                    <a href="${project.live}" target="_blank">View Case Study →</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Animations
function renderAnimations() {
    const container = document.getElementById('animationsGrid');
    container.innerHTML = data.animations.map((animation, index) => `
        <div class="animation-card">
            <div class="animation-video">
                <video id="animVideo${index}" muted loop playsinline preload="metadata">
                    <source src="${animation.video}" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <img src="${animation.thumbnail}" alt="${animation.title}" loading="lazy" class="video-placeholder-img" />
                <button class="animation-play-btn" onclick="toggleAnimation(${index})" aria-label="Play animation">
                    <i class="fas fa-play"></i>
                </button>
            </div>
            <div class="animation-content">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span class="animation-category">${animation.category}</span>
                    <span class="animation-date">${animation.date}</span>
                </div>
                <h3>${animation.title}</h3>
                <p>${animation.description}</p>
                <div class="animation-links">
                    <a href="${animation.github}" target="_blank"><i class="fab fa-github"></i> Source</a>
                    <a href="${animation.live}" target="_blank">View Project →</a>
                </div>
            </div>
        </div>
    `).join('');
}

// =============================================================
// VIDEO PLAY/PAUSE TOGGLE
// =============================================================
function toggleAnimation(index) {
    const video = document.getElementById(`animVideo${index}`);
    const btn = video.closest('.animation-video').querySelector('.animation-play-btn');
    const icon = btn.querySelector('i');
    
    // Hide thumbnail
    const thumbnail = video.closest('.animation-video').querySelector('.video-placeholder-img');
    
    if (video.paused) {
        video.play();
        icon.className = 'fas fa-pause';
        if (thumbnail) thumbnail.style.display = 'none';
    } else {
        video.pause();
        icon.className = 'fas fa-play';
        if (thumbnail) thumbnail.style.display = 'block';
    }
}

// =============================================================
// SCROLL REVEAL
// =============================================================
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
}

// =============================================================
// LAZY LOAD IMAGES
// =============================================================
function initLazyLoad() {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
}

// =============================================================
// NAVBAR SCROLL EFFECT
// =============================================================
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
}

// =============================================================
// BACK TO TOP
// =============================================================
function initBackToTop() {
    const btn = document.getElementById('back-top');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// =============================================================
// MOBILE MENU
// =============================================================
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeMenu');

    function toggleMenu() {
        menu.classList.toggle('open');
        overlay.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}

// =============================================================
// THEME TOGGLE
// =============================================================
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const icon = toggle.querySelector('i');
    const body = document.body;

    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light') {
        body.classList.add('light');
        icon.className = 'fas fa-sun';
    }

    toggle.addEventListener('click', () => {
        body.classList.toggle('light');
        const isLight = body.classList.contains('light');
        icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
    });
}

// =============================================================
// ACTIVE NAV LINK
// =============================================================
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a:not(.theme-toggle)');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    });
}

// =============================================================
// LOADING SCREEN
// =============================================================
function initLoading() {
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => loader.classList.add('hidden'), 600);
    });
}

// =============================================================
// CONTACT FORM
// =============================================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
}

// =============================================================
// INITIALIZE EVERYTHING
// =============================================================
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderProjects();
    renderAnimations();
    initScrollReveal();
    initLazyLoad();
    initNavbarScroll();
    initBackToTop();
    initMobileMenu();
    initTheme();
    initActiveNav();
    initLoading();
    initContactForm();
});