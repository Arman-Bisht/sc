// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Project Filter Functionality
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterButtons.forEach(btn => {
        btn.classList.remove('active', 'bg-secondary-container', 'text-on-secondary-fixed');
        btn.classList.add('bg-outline-variant/20', 'text-inverse-on-surface');
    });
    
    event.target.classList.add('active', 'bg-secondary-container', 'text-on-secondary-fixed');
    event.target.classList.remove('bg-outline-variant/20', 'text-inverse-on-surface');
    
    // Filter projects
    projects.forEach(project => {
        if (category === 'all') {
            project.style.display = 'block';
            setTimeout(() => {
                project.style.opacity = '1';
                project.style.transform = 'scale(1)';
            }, 10);
        } else {
            if (project.dataset.category === category) {
                project.style.display = 'block';
                setTimeout(() => {
                    project.style.opacity = '1';
                    project.style.transform = 'scale(1)';
                }, 10);
            } else {
                project.style.opacity = '0';
                project.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    project.style.display = 'none';
                }, 300);
            }
        }
    });
}

// Job Accordion Toggle
function toggleAccordion(jobId) {
    const content = document.getElementById(jobId);
    const icon = document.getElementById(jobId + '-icon');
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.textContent = 'expand_less';
    } else {
        content.classList.add('hidden');
        icon.textContent = 'expand_more';
    }
}

// Quote Modal
function openQuoteModal() {
    document.getElementById('quote-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeQuoteModal() {
    document.getElementById('quote-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Application Modal
function openApplicationModal(jobTitle) {
    document.getElementById('job-title').textContent = jobTitle;
    document.getElementById('application-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeApplicationModal() {
    document.getElementById('application-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Contact Form Submit Handler
function handleContactSubmit(event) {
    event.preventDefault();
    
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    const submitLoader = document.getElementById('submit-loader');
    
    // Show loading state
    submitText.textContent = 'Sending...';
    submitLoader.classList.remove('hidden');
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        submitText.textContent = 'Message Sent!';
        submitLoader.classList.add('hidden');
        
        // Reset form after 2 seconds
        setTimeout(() => {
            document.getElementById('contact-form').reset();
            submitText.textContent = 'Send Message';
            submitBtn.disabled = false;
            alert('Thank you for contacting us! We will get back to you shortly.');
        }, 2000);
    }, 1500);
}

// Quote Form Submit Handler
function handleQuoteSubmit(event) {
    event.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
        alert('Thank you for your quote request! Our team will contact you within 24 hours.');
        document.getElementById('quote-form').reset();
        closeQuoteModal();
    }, 500);
}

// Application Form Submit Handler
function handleApplicationSubmit(event) {
    event.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
        alert('Your application has been submitted successfully! We will review your application and contact you soon.');
        document.getElementById('application-form').reset();
        closeApplicationModal();
    }, 500);
}

// Smooth Scroll Animation on Page Load
document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
    
    // Initialize project cards transition
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
    });
});

// Close modals when clicking outside
document.getElementById('quote-modal').addEventListener('click', (e) => {
    if (e.target.id === 'quote-modal') {
        closeQuoteModal();
    }
});

document.getElementById('application-modal').addEventListener('click', (e) => {
    if (e.target.id === 'application-modal') {
        closeApplicationModal();
    }
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navigation');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});
