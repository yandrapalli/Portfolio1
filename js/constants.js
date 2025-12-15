// Project Constants
const APP_NAME = 'Snehalatha Portfolio';
const VERSION = '1.0.0';

// Typing Text Array
const TYPING_TEXTS = [
    'Full Stack Web Developer',
    'Java Developer',
    'Problem Solver',
    'Tech Enthusiast'
];

// Configuration
const CONFIG = {
    animationDuration: 300,
    theme: 'dark',
    typingSpeed: 100,
    deletingSpeed: 50,
    delayBetweenTexts: 2000,
    loaderDuration: 2000
};

// ===== PORTFOLIO DATA =====

// Projects Data
const PROJECTS = [
    {
        title: 'Student Location Tracking System using RFID',
        description: 'Developed an IoT-based system to track student location using RFID-enabled college ID cards and GPS. Location data is uploaded to the cloud for real-time monitoring.',
        image: 'images/project1.jpg',
        technologies: ['Embedded C', 'Arduino Mega 2560', 'NodeMCU', 'RFID', 'GPS', 'ThingSpeak']

    },
    {
        title: 'Leaf Disease Detection using Machine Learning',
        description: 'Built a machine learning model using CNN to detect plant leaf diseases and improve prediction accuracy through model optimization.',
        image: 'images/project2.jpg',
        technologies: ['Python', 'Machine Learning', 'CNN', 'TensorFlow']

    }
];

// Experience Data
const EXPERIENCE = [
    {
        type: 'work',
        title: 'Full Stack Developer Trainee',
        organization: 'Tap Academy',
        duration: '2025 – Present',
        description: 'Undergoing professional training in full stack web development with hands-on experience in Java, JDBC, Servlets, Spring, Hibernate, MySQL, HTML, CSS, and JavaScript.'
    },
    {
        type: 'education',
        title: 'Bachelor of Technology (Computer Science Engineering)',
        organization: 'KSRM College of Engineering',
        duration: '2021 – 2025',
        description: 'Completed comprehensive coursework in computer science fundamentals, data structures, algorithms, and software engineering principles.'
    }
];

// Skills Data
const SKILLS = {
    languages: [
        { name: 'Java', icon: 'fab fa-java' }
    ],
    webTechnologies: [
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js' }
    ],
    backend: [
        { name: 'JDBC', icon: 'fas fa-database' },
        { name: 'Servlets', icon: 'fas fa-server' },
        { name: 'Spring', icon: 'fas fa-leaf' },
        { name: 'Hibernate', icon: 'fas fa-cogs' }
    ],
    tools: [
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'GitHub', icon: 'fab fa-github' }
    ],
    softSkills: ['Communication', 'Teamwork', 'Problem Solving', 'Time Management']
};

// Contact Information
const CONTACT = {
    email: 'lathasneha925@gmail.com',
    phone: '+91 9347790759',
    location: 'India',
    social: [
        {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin-in',
            url: 'https://www.linkedin.com/in/yandrapalli-snehalatha-24679027b',
            ariaLabel: 'LinkedIn'
        },
        {
            name: 'GitHub',
            icon: 'fab fa-github',
            url: 'https://github.com/yandrapalli',
            ariaLabel: 'GitHub'
        },
        {
            name: 'Email',
            icon: 'fas fa-envelope',
            url: 'mailto:lathasneha925@gmail.com',
            ariaLabel: 'Email'
        }
    ]
};
