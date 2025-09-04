// Simple transitions.js without conflicts
console.log('Transitions JS loading...');

document.addEventListener('DOMContentLoaded', function() {
    console.log('Transitions JS DOM ready');
    
    // ===== PAGE ENTRANCE ANIMATION =====
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(20px)';
    document.body.style.transition = 'all 0.6s ease-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    }, 100);
    
    // ===== FORM PAGE ANIMATIONS =====
    if (document.querySelector('.form-page')) {
        const progressContainer = document.querySelector('.progress-container');
        const formHeader = document.querySelector('.form-header');
        const formContent = document.querySelector('.form-content');
        
        // Animate progress container
        if (progressContainer) {
            progressContainer.style.transform = 'translateY(-50px)';
            progressContainer.style.opacity = '0';
            progressContainer.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
                progressContainer.style.transform = 'translateY(0)';
                progressContainer.style.opacity = '1';
            }, 200);
        }
        
        // Animate form header
        if (formHeader) {
            formHeader.style.transform = 'translateY(-30px)';
            formHeader.style.opacity = '0';
            formHeader.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
                formHeader.style.transform = 'translateY(0)';
                formHeader.style.opacity = '1';
            }, 400);
        }
        
        // Animate form content
        if (formContent) {
            formContent.style.transform = 'translateY(50px)';
            formContent.style.opacity = '0';
            formContent.style.transition = 'all 0.8s ease-out';
            
            setTimeout(() => {
                formContent.style.transform = 'translateY(0)';
                formContent.style.opacity = '1';
            }, 600);
        }
    }
    
    // ===== PROJECT OPTIONS ANIMATION =====
    const projectOptions = document.querySelectorAll('.project-option');
    projectOptions.forEach((option, i) => {
        option.style.transform = 'translateX(-50px)';
        option.style.opacity = '0';
        option.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            option.style.transform = 'translateX(0)';
            option.style.opacity = '1';
        }, 800 + (i * 100));
    });
    
    // ===== FORM GROUPS ANIMATION =====
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, i) => {
        group.style.transform = 'translateY(30px)';
        group.style.opacity = '0';
        group.style.transition = 'all 0.5s ease-out';
        
        setTimeout(() => {
            group.style.transform = 'translateY(0)';
            group.style.opacity = '1';
        }, 1000 + (i * 50));
    });
    
    // ===== BUTTON LOADING STATES =====
    document.querySelectorAll('button[type="submit"], .btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.disabled && !this.classList.contains('loading')) {
                this.classList.add('loading');
                
                // Remove loading state after 5 seconds (fallback)
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 5000);
            }
        });
    });
    
    // ===== SMOOTH TRANSITIONS FOR ELEMENTS =====
    const elementsToAnimate = document.querySelectorAll('.feature-card, .service-card, .portfolio-item, .contact-method');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });
    
    elementsToAnimate.forEach(element => {
        element.style.transform = 'translateY(50px)';
        element.style.opacity = '0';
        element.style.transition = 'all 0.6s ease-out';
        
        if (observer) {
            observer.observe(element);
        }
    });
    
    console.log('Transitions JS initialization complete');
});

// ===== PAGE EXIT TRANSITIONS =====
function addPageExitTransition() {
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
                e.preventDefault();
                
                document.body.style.transition = 'all 0.3s ease-in';
                document.body.style.opacity = '0';
                document.body.style.transform = 'translateY(-20px)';
                
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
}

// Initialize page exit transitions
window.addEventListener('load', addPageExitTransition);
