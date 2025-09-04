/* Production-Ready Design System */
:root {
    /* Colors */
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --primary-light: #8b5cf6;
    --secondary: #06b6d4;
    --accent: #f59e0b;
    
    /* Neutrals */
    --white: #ffffff;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
    
    /* Typography Scale */
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --text-xs: 0.75rem;      /* 12px */
    --text-sm: 0.875rem;     /* 14px */
    --text-base: 1rem;       /* 16px */
    --text-lg: 1.125rem;     /* 18px */
    --text-xl: 1.25rem;      /* 20px */
    --text-2xl: 1.5rem;      /* 24px */
    --text-3xl: 1.875rem;    /* 30px */
    --text-4xl: 2.25rem;     /* 36px */
    --text-5xl: 3rem;        /* 48px */
    --text-6xl: 3.75rem;     /* 60px */
    
    /* Spacing System */
    --space-1: 0.25rem;      /* 4px */
    --space-2: 0.5rem;       /* 8px */
    --space-3: 0.75rem;      /* 12px */
    --space-4: 1rem;         /* 16px */
    --space-5: 1.25rem;      /* 20px */
    --space-6: 1.5rem;       /* 24px */
    --space-8: 2rem;         /* 32px */
    --space-10: 2.5rem;      /* 40px */
    --space-12: 3rem;        /* 48px */
    --space-16: 4rem;        /* 64px */
    --space-20: 5rem;        /* 80px */
    --space-24: 6rem;        /* 96px */
    --space-32: 8rem;        /* 128px */
    
    /* Layout */
    --container-sm: 640px;
    --container-md: 768px;
    --container-lg: 1024px;
    --container-xl: 1280px;
    --container-2xl: 1400px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    
    /* Border Radius */
    --radius-sm: 0.375rem;
    --radius: 0.5rem;
    --radius-md: 0.75rem;
    --radius-lg: 1rem;
    --radius-xl: 1.5rem;
    --radius-2xl: 2rem;
    --radius-full: 9999px;
    
    /* Transitions */
    --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Global Reset */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    font-family: var(--font-family);
    font-size: var(--text-base);
    line-height: 1.6;
    color: var(--gray-700);
    background-color: var(--white);
}

/* Container System */
.container {
    width: 100%;
    max-width: var(--container-2xl);
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-6);
    padding-right: var(--space-6);
}

/* Professional Navigation */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid var(--gray-200);
    transition: all var(--transition);
    height: 72px;
}

.navbar.scrolled {
    background: rgba(17, 24, 39, 0.95);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: var(--shadow-xl);
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: var(--container-2xl);
    margin: 0 auto;
    padding: 0 var(--space-6);
}

.logo-wrapper {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    text-decoration: none;
}

.logo-text {
    font-size: var(--text-xl);
    font-weight: 800;
    color: var(--gray-900);
    transition: color var(--transition);
}

.navbar.scrolled .logo-text {
    color: var(--white);
}

.logo-accent {
    width: 8px;
    height: 8px;
    border-radius: var(--radius-full);
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.8; }
}

.nav-menu {
    display: flex;
    align-items: center;
    list-style: none;
    gap: var(--space-2);
}

.nav-link {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-3) var(--space-4);
    border-radius: var(--radius-full);
    text-decoration: none;
    color: var(--gray-700);
    font-weight: 500;
    font-size: var(--text-sm);
    transition: all var(--transition);
    white-space: nowrap;
}

.navbar.scrolled .nav-link {
    color: var(--gray-300);
}

.nav-link:hover, .nav-link.active {
    color: var(--white);
    background: var(--primary);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
}

.nav-icon {
    font-size: var(--text-base);
}

.nav-cta-btn {
    padding: var(--space-3) var(--space-6);
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: var(--white);
    text-decoration: none;
    border-radius: var(--radius-full);
    font-weight: 600;
    font-size: var(--text-sm);
    transition: all var(--transition);
    box-shadow: var(--shadow-sm);
    white-space: nowrap;
}

.nav-cta-btn:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-lg);
}

/* Hero Section */
.hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, var(--gray-50) 0%, var(--white) 100%);
    padding-top: 72px;
}

.hero-bg {
    position: absolute;
    inset: 0;
    z-index: -1;
}

.gradient-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, 
        rgba(99, 102, 241, 0.08) 0%, 
        rgba(139, 92, 246, 0.04) 50%, 
        rgba(6, 182, 212, 0.08) 100%);
}

.animated-shapes {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.shape {
    position: absolute;
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    border-radius: var(--radius-full);
    opacity: 0.06;
    animation: float 8s ease-in-out infinite;
}

.shape-1 {
    width: 400px;
    height: 400px;
    top: -200px;
    right: -200px;
    animation-delay: 0s;
}

.shape-2 {
    width: 300px;
    height: 300px;
    bottom: -150px;
    left: -150px;
    animation-delay: -3s;
}

.shape-3 {
    width: 250px;
    height: 250px;
    top: 30%;
    right: 15%;
    animation-delay: -6s;
}

@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
    25% { transform: translateY(-30px) rotate(90deg) scale(1.1); }
    50% { transform: translateY(-15px) rotate(180deg) scale(0.9); }
    75% { transform: translateY(-40px) rotate(270deg) scale(1.05); }
}

.hero-content {
    max-width: 900px;
    text-align: center;
    padding: 0 var(--space-6);
    z-index: 1;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: var(--radius-full);
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--primary);
    margin-bottom: var(--space-8);
}

.hero-title {
    font-size: clamp(var(--text-4xl), 6vw, var(--text-6xl));
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: var(--space-6);
    color: var(--gray-900);
}

.title-line {
    display: block;
}

.gradient-text {
    background: linear-gradient(135deg, var(--primary), var(--primary-light), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: clamp(var(--text-lg), 2vw, var(--text-xl));
    color: var(--gray-600);
    margin-bottom: var(--space-12);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7;
}

.cta-group {
    display: flex;
    gap: var(--space-4);
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: var(--space-16);
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-4) var(--space-8);
    border-radius: var(--radius-full);
    text-decoration: none;
    font-weight: 600;
    font-size: var(--text-base);
    position: relative;
    overflow: hidden;
    transition: all var(--transition);
    border: none;
    cursor: pointer;
    white-space: nowrap;
}

.cta-button.primary {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: var(--white);
    box-shadow: var(--shadow-lg);
}

.cta-button.primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-2xl);
}

.cta-button.secondary {
    background: var(--white);
    color: var(--gray-700);
    border: 2px solid var(--gray-300);
}

.cta-button.secondary:hover {
    background: var(--gray-50);
    border-color: var(--primary);
    color: var(--primary);
    transform: translateY(-2px);
}

.hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-8);
    max-width: 600px;
    margin: 0 auto;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: var(--text-4xl);
    font-weight: 800;
    color: var(--primary);
    display: block;
    line-height: 1;
}

.stat-label {
    font-size: var(--text-sm);
    color: var(--gray-600);
    font-weight: 500;
    margin-top: var(--space-1);
}

/* Section System */
.section {
    padding: var(--space-24) 0;
    position: relative;
}

.section-header {
    text-align: center;
    margin-bottom: var(--space-20);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.section-badge {
    display: inline-block;
    padding: var(--space-2) var(--space-4);
    background: rgba(99, 102, 241, 0.1);
    color: var(--primary);
    font-size: var(--text-sm);
    font-weight: 600;
    border-radius: var(--radius-full);
    margin-bottom: var(--space-6);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.section-title {
    font-size: clamp(var(--text-3xl), 4vw, var(--text-5xl));
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: var(--gray-900);
    margin-bottom: var(--space-6);
}

.title-highlight {
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-subtitle {
    font-size: var(--text-xl);
    color: var(--gray-600);
    line-height: 1.7;
}

/* Features Grid */
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-8);
}

.feature-card {
    padding: var(--space-10);
    border-radius: var(--radius-2xl);
    background: var(--white);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--gray-100);
    text-align: center;
    transition: all var(--transition);
    position: relative;
    overflow: hidden;
}

.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    transform: scaleX(0);
    transition: transform var(--transition);
}

.feature-card:hover::before {
    transform: scaleX(1);
}

.feature-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
}

.feature-icon {
    font-size: var(--text-5xl);
    margin-bottom: var(--space-6);
    display: block;
}

.feature-card h3 {
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: var(--space-4);
}

.feature-card p {
    color: var(--gray-600);
    line-height: 1.6;
}

/* Services Section */
.services-section {
    background: var(--gray-50);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: var(--space-8);
}

.service-card {
    background: var(--white);
    border-radius: var(--radius-2xl);
    padding: var(--space-10);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--gray-100);
    transition: all var(--transition);
    position: relative;
    overflow: hidden;
}

.service-card.featured {
    border: 2px solid var(--primary);
    transform: scale(1.02);
    box-shadow: var(--shadow-lg);
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-2xl);
}

.service-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-8);
}

.service-icon {
    font-size: var(--text-5xl);
}

.service-badge {
    padding: var(--space-2) var(--space-3);
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: var(--white);
    font-size: var(--text-xs);
    font-weight: 600;
    border-radius: var(--radius-full);
    text-transform: uppercase;
}

.service-card h3 {
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: var(--space-4);
}

.service-card > p {
    color: var(--gray-600);
    margin-bottom: var(--space-8);
    line-height: 1.7;
}

.service-features {
    list-style: none;
    margin-bottom: var(--space-10);
}

.service-features li {
    padding: var(--space-3) 0;
    color: var(--gray-600);
    font-size: var(--text-sm);
    border-bottom: 1px solid var(--gray-100);
}

.service-features li:last-child {
    border-bottom: none;
}

.service-price {
    font-size: var(--text-3xl);
    font-weight: 800;
    color: var(--primary);
}

/* Contact Section */
.contact-section {
    background: linear-gradient(135deg, var(--gray-900) 0%, var(--gray-800) 100%);
    color: var(--white);
}

.contact-section .section-title,
.contact-section .section-subtitle {
    color: var(--white);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-20);
    align-items: start;
}

.contact-methods {
    margin-top: var(--space-10);
}

.contact-method {
    display: flex;
    align-items: flex-start;
    gap: var(--space-5);
    padding: var(--space-8);
    margin-bottom: var(--space-6);
    border-radius: var(--radius-xl);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all var(--transition);
}

.contact-method:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(8px);
}

.contact-icon {
    font-size: var(--text-2xl);
    margin-top: var(--space-1);
}

.contact-method h4 {
    font-weight: 600;
    font-size: var(--text-lg);
    margin-bottom: var(--space-2);
}

.contact-method p {
    color: var(--gray-300);
    font-size: var(--text-base);
}

.contact-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: var(--radius-2xl);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: var(--space-10);
}

.contact-card h3 {
    color: var(--white);
    font-size: var(--text-2xl);
    margin-bottom: var(--space-6);
}

.contact-card p {
    color: var(--gray-300);
    margin-bottom: var(--space-8);
    line-height: 1.7;
}

.quick-steps {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
}

.quick-step {
    display: flex;
    align-items: center;
    gap: var(--space-4);
}

.step-number {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-full);
    background: var(--primary);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: var(--text-base);
    flex-shrink: 0;
}

/* Responsive Design */
@media (max-width: 1200px) {
    .container {
        padding-left: var(--space-5);
        padding-right: var(--space-5);
    }
    
    .nav-container {
        padding: 0 var(--space-5);
    }
}

@media (max-width: 768px) {
    .nav-menu {
        display: none;
    }
    
    .nav-container {
        padding: 0 var(--space-4);
    }
    
    .container {
        padding-left: var(--space-4);
        padding-right: var(--space-4);
    }
    
    .hero-content {
        padding: 0 var(--space-4);
    }
    
    .cta-group {
        flex-direction: column;
        align-items: center;
    }
    
    .cta-button {
        width: 100%;
        justify-content: center;
        max-width: 280px;
    }
    
    .hero-stats {
        grid-template-columns: 1fr;
        gap: var(--space-6);
    }
    
    .contact-content {
        grid-template-columns: 1fr;
        gap: var(--space-12);
    }
    
    .services-grid,
    .features-grid {
        grid-template-columns: 1fr;
    }
    
    .section {
        padding: var(--space-16) 0;
    }
    
    .section-header {
        margin-bottom: var(--space-12);
    }
}

@media (max-width: 480px) {
    .hero-section {
        min-height: 90vh;
    }
    
    .feature-card,
    .service-card {
        padding: var(--space-6);
    }
    
    .contact-card {
        padding: var(--space-6);
    }
}
