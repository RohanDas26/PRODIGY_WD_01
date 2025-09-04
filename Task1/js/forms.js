// Complete forms.js - handles all form navigation
console.log('Forms JS loading...');

// Form data storage
let formData = {
    projectType: '',
    projectName: '',
    budget: '',
    timeline: '',
    features: [],
    description: '',
    inspiration: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    source: '',
    consent: false
};

// Utility functions
function loadFormData() {
    try {
        const saved = localStorage.getItem('nexus-form-data');
        if (saved) {
            formData = { ...formData, ...JSON.parse(saved) };
        }
    } catch (error) {
        console.log('Error loading form data:', error);
    }
}

function saveFormData() {
    try {
        localStorage.setItem('nexus-form-data', JSON.stringify(formData));
    } catch (error) {
        console.log('Error saving form data:', error);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Forms JS DOM ready');
    
    // ===== GET-STARTED PAGE (Step 1) =====
    if (document.getElementById('project-type-form')) {
        console.log('Initializing get-started page');
        loadFormData();
        
        const form = document.getElementById('project-type-form');
        const continueBtn = document.getElementById('continue-btn');
        const options = document.querySelectorAll('.project-option');
        
        // Back button functionality
        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'index.html';
            });
        });
        
        // Project option selection
        options.forEach(option => {
            option.addEventListener('click', function() {
                // Remove selection from all options
                options.forEach(opt => opt.classList.remove('selected'));
                
                // Add selection to clicked option
                this.classList.add('selected');
                
                // Update form data
                formData.projectType = this.getAttribute('data-type');
                saveFormData();
                
                // Enable continue button
                if (continueBtn) {
                    continueBtn.disabled = false;
                }
                
                console.log('Selected project type:', formData.projectType);
            });
        });
        
        // Form submission
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                if (formData.projectType) {
                    if (continueBtn) {
                        continueBtn.textContent = 'Loading...';
                        continueBtn.disabled = true;
                    }
                    
                    setTimeout(() => {
                        window.location.href = 'project-details.html';
                    }, 500);
                } else {
                    alert('Please select a project type to continue.');
                }
            });
        }
        
        // Pre-select saved option
        if (formData.projectType) {
            const savedOption = document.querySelector(`[data-type="${formData.projectType}"]`);
            if (savedOption) {
                savedOption.classList.add('selected');
                if (continueBtn) {
                    continueBtn.disabled = false;
                }
            }
        }
    }
    
    // ===== PROJECT-DETAILS PAGE (Step 2) =====
    if (document.getElementById('project-details-form')) {
        console.log('Initializing project-details page');
        loadFormData();
        
        const form = document.getElementById('project-details-form');
        
        // Back button functionality
        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'get-started.html';
            });
        });
        
        // Pre-fill form with saved data
        const fields = [
            { id: 'project-name', key: 'projectName' },
            { id: 'budget', key: 'budget' },
            { id: 'timeline', key: 'timeline' },
            { id: 'description', key: 'description' },
            { id: 'inspiration', key: 'inspiration' }
        ];
        
        fields.forEach(field => {
            const element = document.getElementById(field.id);
            if (element && formData[field.key]) {
                element.value = formData[field.key];
            }
        });
        
        // Pre-check saved features
        if (formData.features && formData.features.length > 0) {
            formData.features.forEach(feature => {
                const checkbox = document.querySelector(`input[value="${feature}"]`);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
        }
        
        // Real-time saving
        if (form) {
            form.addEventListener('input', function(e) {
                const { name, value, type, checked } = e.target;
                
                if (type === 'checkbox' && name === 'features') {
                    if (!formData.features) {
                        formData.features = [];
                    }
                    
                    if (checked) {
                        if (!formData.features.includes(value)) {
                            formData.features.push(value);
                        }
                    } else {
                        formData.features = formData.features.filter(f => f !== value);
                    }
                } else if (name) {
                    formData[name] = value;
                }
                
                saveFormData();
            });
            
            // Form submission
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const required = ['projectName', 'budget', 'timeline', 'description'];
                const missing = required.filter(field => !formData[field] || !formData[field].trim());
                
                if (missing.length === 0) {
                    const submitBtn = form.querySelector('button[type="submit"]');
                    if (submitBtn) {
                        submitBtn.textContent = 'Loading...';
                        submitBtn.disabled = true;
                    }
                    
                    setTimeout(() => {
                        window.location.href = 'contact-info.html';
                    }, 500);
                } else {
                    alert('Please fill in all required fields: ' + missing.join(', '));
                }
            });
        }
    }
    
    // ===== CONTACT-INFO PAGE (Step 3) =====
    if (document.getElementById('contact-info-form')) {
        console.log('Initializing contact-info page');
        loadFormData();
        
        const form = document.getElementById('contact-info-form');
        
        // Back button functionality
        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'project-details.html';
            });
        });
        
        // Pre-fill form with saved data
        const fields = [
            { id: 'first-name', key: 'firstName' },
            { id: 'last-name', key: 'lastName' },
            { id: 'email', key: 'email' },
            { id: 'phone', key: 'phone' },
            { id: 'company', key: 'company' },
            { id: 'role', key: 'role' }
        ];
        
        fields.forEach(field => {
            const element = document.getElementById(field.id);
            if (element && formData[field.key]) {
                element.value = formData[field.key];
            }
        });
        
        // Pre-select saved source
        if (formData.source) {
            const sourceRadio = document.querySelector(`input[name="source"][value="${formData.source}"]`);
            if (sourceRadio) {
                sourceRadio.checked = true;
            }
        }
        
        // Pre-check consent
        if (formData.consent) {
            const consentCheckbox = document.querySelector('input[name="consent"]');
            if (consentCheckbox) {
                consentCheckbox.checked = true;
            }
        }
        
        // Real-time saving
        if (form) {
            form.addEventListener('input', function(e) {
                const { name, value, type, checked } = e.target;
                
                if (type === 'checkbox') {
                    formData[name] = checked;
                } else if (type === 'radio') {
                    formData[name] = value;
                } else if (name) {
                    formData[name] = value;
                }
                
                saveFormData();
            });
            
            // Form submission
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const required = ['firstName', 'lastName', 'email'];
                const missing = required.filter(field => !formData[field] || !formData[field].trim());
                
                if (missing.length === 0 && formData.consent) {
                    const submitBtn = form.querySelector('button[type="submit"]');
                    if (submitBtn) {
                        submitBtn.textContent = 'Submitting...';
                        submitBtn.disabled = true;
                    }
                    
                    setTimeout(() => {
                        window.location.href = 'confirmation.html';
                    }, 1000);
                } else {
                    if (missing.length > 0) {
                        alert('Please fill in all required fields: ' + missing.join(', '));
                    } else {
                        alert('Please agree to receive communication about your project.');
                    }
                }
            });
        }
    }
    
    // ===== CONFIRMATION PAGE (Step 4) =====
    if (document.getElementById('project-summary')) {
        console.log('Initializing confirmation page');
        loadFormData();
        
        // Display project summary
        const summaryElements = [
            { id: 'summary-type', value: formatProjectType(formData.projectType) },
            { id: 'summary-budget', value: formatBudget(formData.budget) },
            { id: 'summary-timeline', value: formatTimeline(formData.timeline) },
            { id: 'summary-contact', value: formData.email || '-' }
        ];
        
        summaryElements.forEach(item => {
            const element = document.getElementById(item.id);
            if (element) {
                element.textContent = item.value || '-';
            }
        });
        
        // Back to home functionality
        document.querySelectorAll('a[href="index.html"], .btn-primary').forEach(btn => {
            btn.addEventListener('click', function(e) {
                if (this.getAttribute('href') === 'index.html' || this.textContent.toLowerCase().includes('back')) {
                    e.preventDefault();
                    
                    // Clear form data
                    try {
                        localStorage.removeItem('nexus-form-data');
                    } catch (error) {
                        console.log('Error clearing form data:', error);
                    }
                    
                    // Navigate to home
                    window.location.href = 'index.html';
                }
            });
        });
        
        // Print functionality
        document.querySelectorAll('button').forEach(btn => {
            if (btn.textContent.toLowerCase().includes('print')) {
                btn.addEventListener('click', function() {
                    window.print();
                });
            }
        });
    }
    
    console.log('Forms JS initialization complete');
});

// Helper functions
function formatProjectType(type) {
    const types = {
        website: 'Website Development',
        mobile: 'Mobile Application',
        design: 'UI/UX Design',
        fullstack: 'Full-Stack Solution'
    };
    return types[type] || type || '-';
}

function formatBudget(budget) {
    const budgets = {
        '1000-2999': '$1,000 - $2,999',
        '3000-4999': '$3,000 - $4,999',
        '5000-9999': '$5,000 - $9,999',
        '10000+': '$10,000+'
    };
    return budgets[budget] || budget || '-';
}

function formatTimeline(timeline) {
    const timelines = {
        '1-2weeks': '1-2 weeks',
        '1month': '1 month',
        '2-3months': '2-3 months',
        '3months+': '3+ months'
    };
    return timelines[timeline] || timeline || '-';
}
