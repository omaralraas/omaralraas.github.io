document.addEventListener('DOMContentLoaded', () => {
    // --- Typed.js Effect (Manual Implementation for lightweight) ---
    const roles = ["Cybersecurity Specialist", "Security Developer", "Penetration Tester", "Ethical Hacker"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    const typeTarget = document.getElementById('type-role');

    function type() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typeTarget.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typeTarget.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }
    type();

    // --- TagCloud.js ---
    const myTags = [
        'Python', 'Linux', 'SQL', 'Bash',
        'AES-256-GCM', 'SHA-256', 'PBKDF2',
        'Web Security', 'API Fuzzing', 'IDOR',
        'Burp Suite', 'Nmap', 'Metasploit',
        'Networking', 'TCP/IP', 'Firewalls',
        'JWT', 'Hashing', 'Crypto', 'Git',
        'HTB', 'picoCTF', 'TryHackMe'
    ];

    const tagCloud = TagCloud('.tagcloud-container', myTags, {
        radius: 200,
        maxSpeed: 'fast',
        initSpeed: 'normal',
        direction: 135,
        keep: true
    });

    // --- Dynamic Projects ---
    const projects = [
        {
            title: "Sentinel Web Scanner",
            desc: "A modular Web Vulnerability Scanner & API Fuzzer for OWASP Top 10, IDOR, and DNS record auditing.",
            tag: "security",
            lang: "Python",
            github: "https://github.com/omaralraas/sentinel-web-scanner"
        },
        {
            title: "Secure Password Manager",
            desc: "Custom-built password manager with salted SHA-256 hashing and dynamic resizing hash-tables.",
            tag: "dev",
            lang: "Python",
            github: "https://github.com/omaralraas/custom-hash-table-secure-password-manager"
        },
        {
            title: "Graph Network Mapper",
            desc: "Network topology simulator using BFS, DFS, and Dijkstra's algorithm for packet path analysis.",
            tag: "dev",
            lang: "Python",
            github: "https://github.com/omaralraas/graph-network-mapper"
        },
        {
            title: "CipherVault-PoC",
            desc: "Secure file-encryption proof of concept employing AES-256-GCM and PBKDF2 key derivation.",
            tag: "security",
            lang: "Python",
            github: "https://github.com/omaralraas/CipherVault-PoC"
        },
        {
            title: "OTA Proof of Concept",
            desc: "Simulating secure Over-The-Air updates for automotive systems following ISO/SAE standards.",
            tag: "security",
            lang: "Python",
            github: "https://github.com/omaralraas/OTA-POC"
        }
    ];

    const projectContainer = document.getElementById('project-list');

    function displayProjects(filter = 'all') {
        projectContainer.innerHTML = '';
        projects.filter(p => filter === 'all' || p.tag === filter).forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card glass animate-in';
            card.innerHTML = `
                <span class="project-tag">${p.lang}</span>
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="project-links">
                    <a href="${p.github}" target="_blank" title="Source Code"><i class="ph-github-logo"></i></a>
                    <a href="#" class="no-link" title="Documentation Ready"><i class="ph-file-text"></i></a>
                </div>
            `;
            projectContainer.appendChild(card);
        });
    }
    displayProjects();

    // Project Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayProjects(btn.dataset.filter);
        });
    });

    // --- Dynamic Certifications ---
    const certs = [
        "Google Cybersecurity Professional Certificate",
        "Automate Cybersecurity Tasks with Python",
        "Tools of the Trade: Linux and SQL",
        "Foundations of Cybersecurity",
        "Sound the Alarm: Detection and Response",
        "Assets, Threats, and Vulnerabilities",
        "Play It Safe: Manage Security Risks",
        "Connect and Protect: Networks and Network Security",
        "Put It to Work: Prepare for Cybersecurity Jobs",
        "Accelerate Your Job Search with AI"
    ];

    const certContainer = document.querySelector('.certs-grid');
    certs.forEach(c => {
        const div = document.createElement('div');
        div.className = 'cert-card glass';
        div.innerHTML = `
            <i class="ph-seal-check"></i>
            <h4>${c}</h4>
            <span>Issued by Google / Coursera</span>
        `;
        certContainer.appendChild(div);
    });

    // --- Navbar Scroll Effect ---
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Contact Form Mock ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        btn.textContent = "Encrypted Message Sent!";
        btn.style.background = "var(--primary-color)";
        contactForm.reset();
        setTimeout(() => {
            btn.textContent = "Send Secure Message";
            btn.style.background = "linear-gradient(135deg, var(--primary-color), var(--secondary-color))";
        }, 3000);
    });
});
