/**
 * Portfolio — Antonio Lafuente
 * Main application entry point
 */

(function () {
    'use strict';

    /* ============================================
       i18n — Translations (ES / EN)
       ============================================ */

    const translations = {
        es: {
            nav_about: 'Sobre mí',
            nav_experience: 'Experiencia',
            nav_skills: 'Skills',
            nav_projects: 'Proyectos',
            nav_education: 'Formación',
            nav_contact: 'Contacto',
            hero_subtitle: 'Software Developer especializado en <strong>Java/Spring Boot</strong> y <strong>Mobile</strong> (Kotlin & Flutter). Construyo aplicaciones escalables con rigor técnico y Clean Architecture.',
            hero_cta_1: 'Hablemos',
            hero_cta_2: 'Ver experiencia',
            about_title: 'Sobre mí',
            about_lead: 'Desarrollador de Software con formación en Desarrollo de Aplicaciones Multiplataforma, especializado tanto en backend Java como en desarrollo mobile nativo y multiplataforma.',
            about_p2: 'Aporto madurez profesional y un compromiso con el rigor técnico desarrollado en entornos internacionales. Mi enfoque combina Clean Architecture, TDD y metodologías ágiles para entregar productos de alta calidad.',
            about_p3: 'He trabajado en plataformas SaaS B2B del sector HealthTech, implementando sistemas multi-tenant, integración con IA mediante LLMs, y arquitecturas de microservicios con cumplimiento RGPD.',
            stat_exp: 'Años de experiencia',
            stat_features: 'Funcionalidades entregadas',
            stat_corporate: 'Proyectos corporativos',
            stat_personal: 'Proyectos personales',
            exp_title: 'Experiencia',
            psicaid_role: 'Backend & Mobile Developer',
            psicaid_company: 'Psicaid — Valencia, España',
            psicaid_date: 'Feb 2026 – Actualidad',
            psicaid_li1: 'Diseñé y desarrollé APIs RESTful escalables y seguras para plataforma SaaS B2B HealthTech con arquitectura multi-tenant',
            psicaid_li2: 'Implementé autenticación JWT con aislamiento estricto de datos entre profesionales de la salud',
            psicaid_li3: 'Diseñé comunicación con microservicio Python (FastAPI) para procesamiento de notas clínicas mediante LLMs',
            psicaid_li4: 'Desarrollé sistema de trazabilidad y logs con clasificación de criticidad para cumplimiento RGPD',
            psicaid_li5: 'Lideré el desarrollo mobile con Flutter + Riverpod, integrando interfaz asistida por IA con resúmenes clínicos',
            psicaid_li6: 'Optimicé PostgreSQL con HikariCP y patrón DTO para payloads ligeros y paginados',
            psicaid_li7: 'Desplegué en Render, orquestando arquitectura distribuida para alta disponibilidad',
            pukkas_role: 'Junior Software Developer',
            pukkas_company: 'Pukkas S.L. — Barcelona, España',
            pukkas_date: 'Mar 2025 – Jun 2025',
            pukkas_li1: 'Arquitecturé e implementé 5 endpoints de APIs RESTful para consumo fluido de clientes móviles',
            pukkas_li2: 'Desarrollé 25+ funcionalidades para sitios web corporativos con alineamiento 100% al cliente',
            pukkas_li3: 'Completé 12 ciclos de Scrum con el 100% de tickets de Jira entregados en plazo',
            pukkas_li4: 'Participé en code reviews y documentación técnica para 6 proyectos corporativos',
            skills_title: 'Skills',
            skill_backend: 'Backend & Java',
            skill_mobile: 'Mobile',
            skill_arch: 'Arquitectura',
            skill_testing: 'Testing',
            skill_infra: 'Infraestructura',
            skill_other: 'Otros',
            projects_title: 'Proyectos',
            project_psicaid: 'Plataforma B2B completa para psicólogos. Lideré el desarrollo full-stack: experiencia mobile en Flutter con Riverpod (invalidación reactiva de datos, interfaz para resúmenes clínicos generados por LLMs, modo oscuro, layouts tablet) y backend en Java 17/Spring Boot 3 (APIs RESTful, JWT multi-tenant, integración con microservicio Python/FastAPI para IA, trazabilidad RGPD). Despliegue en Render.',
            project_taskflow: 'Sistema Full Stack completo de gestión de tareas con backend en Node.js/Express y frontend en Flutter. Autenticación JWT, sincronización CRUD en tiempo real y manejo robusto de errores con fpdart.',
            project_pennytrack: 'Aplicación de gestión financiera con Clean Architecture y BLoC/Cubit. Sincronización híbrida con persistencia local (Drift/SQLite) y Firebase Auth. Visualización de datos con gráficos avanzados.',
            project_chatapp: 'Aplicación de chat moderna para Android con mensajería instantánea fluida. Diseño limpio, arquitectura sólida y tecnologías modernas para una experiencia de comunicación confiable.',
            project_guesswars: 'Juego de cartas multijugador para Android con pistas dinámicas, música de fondo adaptativa, notificaciones push, captura de pantalla, autenticación Firebase, clasificación global e interfaz multilingüe.',
            project_horosco: 'App nativa de horóscopo con predicciones diarias, caché offline, MVVM con Dagger/Hilt, Retrofit, Room, Coroutines, StateFlow y tests completos (JUnit, Mockito, Espresso).',
            edu_title: 'Formación',
            edu1_title: 'Certified Agile Digital Product Practitioner™ (CADPP™)',
            edu1_desc: '75h de entrenamiento en metodologías ágiles (Scrum/Kanban), equipos multidisciplinarios y desarrollo con IA integrada.',
            edu2_title: 'Máster Java Masterclass (160h)',
            edu2_desc: 'Java 21, Spring Boot 3, Microservicios.',
            edu3_title: 'Grado Superior DAM',
            edu3_desc: 'Desarrollo de Aplicaciones Multiplataforma.',
            edu4_title: 'Flutter (250h)',
            edu4_desc: 'Desarrollo de aplicaciones Android/iOS con Flutter.',
            edu5_title: 'Kotlin + Jetpack Compose (54h)',
            edu5_desc: 'Kotlin con Jetpack Compose y Firebase para Android.',
            edu6_title: 'Bases de Datos',
            edu6_desc: 'Diseño y Programación de Bases de Datos.',
            languages_title: 'Idiomas',
            lang_native: 'Nativo',
            contact_title: 'Contacto',
            contact_text: '¿Tienes un proyecto en mente o buscas un desarrollador para tu equipo? Hablemos.',
            footer_rights: 'Todos los derechos reservados',
        },
        en: {
            nav_about: 'About',
            nav_experience: 'Experience',
            nav_skills: 'Skills',
            nav_projects: 'Projects',
            nav_education: 'Education',
            nav_contact: 'Contact',
            hero_subtitle: 'Software Developer specializing in <strong>Java/Spring Boot</strong> and <strong>Mobile</strong> (Kotlin & Flutter). I build scalable applications with technical rigor and Clean Architecture.',
            hero_cta_1: "Let's talk",
            hero_cta_2: 'View experience',
            about_title: 'About',
            about_lead: 'Software Developer with a background in Multiplatform Application Development, specialized in both Java backend and native & cross-platform mobile development.',
            about_p2: 'I bring professional maturity and a commitment to technical rigor developed in international environments. My approach combines Clean Architecture, TDD, and agile methodologies to deliver high-quality products.',
            about_p3: 'I have worked on B2B SaaS platforms in the HealthTech sector, implementing multi-tenant systems, AI integration via LLMs, and microservice architectures with GDPR compliance.',
            stat_exp: 'Years of experience',
            stat_features: 'Features delivered',
            stat_corporate: 'Corporate projects',
            stat_personal: 'Personal projects',
            exp_title: 'Experience',
            psicaid_role: 'Backend & Mobile Developer',
            psicaid_company: 'Psicaid — Valencia, Spain',
            psicaid_date: 'Feb 2026 – Present',
            psicaid_li1: 'Designed and developed scalable, secure RESTful APIs for a B2B HealthTech SaaS platform with multi-tenant architecture',
            psicaid_li2: 'Implemented JWT authentication with strict data isolation between healthcare professionals',
            psicaid_li3: 'Designed communication with a Python microservice (FastAPI) for clinical note processing via LLMs',
            psicaid_li4: 'Developed a comprehensive traceability and logging system with criticality classification for GDPR compliance',
            psicaid_li5: 'Led mobile development with Flutter + Riverpod, integrating AI-assisted interface with clinical summaries',
            psicaid_li6: 'Optimized PostgreSQL with HikariCP and DTO pattern for lightweight, paginated payloads',
            psicaid_li7: 'Deployed on Render, orchestrating distributed architecture for high availability',
            pukkas_role: 'Junior Software Developer',
            pukkas_company: 'Pukkas S.L. — Barcelona, Spain',
            pukkas_date: 'Mar 2025 – Jun 2025',
            pukkas_li1: 'Architected and implemented 5 RESTful API endpoints for seamless mobile client consumption',
            pukkas_li2: 'Developed 25+ features for corporate websites with 100% client specification alignment',
            pukkas_li3: 'Completed 12 Scrum cycles with 100% of assigned Jira tickets delivered on time',
            pukkas_li4: 'Participated in peer code reviews and technical documentation for 6 corporate projects',
            skills_title: 'Skills',
            skill_backend: 'Backend & Java',
            skill_mobile: 'Mobile',
            skill_arch: 'Architecture',
            skill_testing: 'Testing',
            skill_infra: 'Infrastructure',
            skill_other: 'Other',
            projects_title: 'Projects',
            project_psicaid: 'Complete B2B platform for psychologists. I led full-stack development: mobile experience in Flutter with Riverpod (reactive data invalidation, interface for LLM-generated clinical summaries, dark mode, tablet layouts) and backend in Java 17/Spring Boot 3 (RESTful APIs, multi-tenant JWT, integration with Python/FastAPI microservice for AI, GDPR traceability). Deployed on Render.',
            project_taskflow: 'Complete Full Stack task management system with Node.js/Express backend and Flutter frontend. JWT authentication, real-time CRUD sync, and robust error handling with fpdart.',
            project_pennytrack: 'Financial management app with Clean Architecture and BLoC/Cubit. Hybrid sync with local persistence (Drift/SQLite) and Firebase Auth. Data visualization with advanced charts.',
            project_chatapp: 'Modern chat application for Android with seamless instant messaging. Clean design, solid architecture, and modern technologies for a reliable communication experience.',
            project_guesswars: 'Multiplayer card game for Android with dynamic hints, adaptive background music, push notifications, screenshot capture, Firebase auth, global leaderboard, and multilingual interface.',
            project_horosco: 'Native horoscope app with daily predictions, offline cache, MVVM with Dagger/Hilt, Retrofit, Room, Coroutines, StateFlow, and comprehensive tests (JUnit, Mockito, Espresso).',
            edu_title: 'Education',
            edu1_title: 'Certified Agile Digital Product Practitioner™ (CADPP™)',
            edu1_desc: '75h of training in agile methodologies (Scrum/Kanban), multidisciplinary teams, and AI-integrated development.',
            edu2_title: 'Java Masterclass (160h)',
            edu2_desc: 'Java 21, Spring Boot 3, Microservices.',
            edu3_title: 'Higher Degree DAM',
            edu3_desc: 'Multiplatform Application Development.',
            edu4_title: 'Flutter (250h)',
            edu4_desc: 'Android/iOS application development with Flutter.',
            edu5_title: 'Kotlin + Jetpack Compose (54h)',
            edu5_desc: 'Kotlin with Jetpack Compose and Firebase for Android.',
            edu6_title: 'Databases',
            edu6_desc: 'Database Design and Programming.',
            languages_title: 'Languages',
            lang_native: 'Native',
            contact_title: 'Contact',
            contact_text: "Have a project in mind or looking for a developer for your team? Let's talk.",
            footer_rights: 'All rights reserved',
        }
    };

    /* ============================================
       State
       ============================================ */

    let currentLang = localStorage.getItem('lang') || 'es';

    /* ============================================
       Theme Module
       ============================================ */

    const Theme = {
        getPreferred() {
            const stored = localStorage.getItem('theme');
            if (stored) return stored;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        },

        set(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        },

        toggle() {
            const current = document.documentElement.getAttribute('data-theme');
            this.set(current === 'dark' ? 'light' : 'dark');
        },

        init() {
            this.set(this.getPreferred());

            document.getElementById('themeToggle').addEventListener('click', () => this.toggle());

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    this.set(e.matches ? 'dark' : 'light');
                }
            });
        }
    };

    /* ============================================
       i18n Module
       ============================================ */

    const I18n = {
        set(lang) {
            currentLang = lang;
            localStorage.setItem('lang', lang);
            document.documentElement.lang = lang;

            const langLabel = document.querySelector('.lang-label');
            if (langLabel) langLabel.textContent = lang.toUpperCase();

            const mobileLangBtn = document.getElementById('mobileLangBtn');
            if (mobileLangBtn) mobileLangBtn.textContent = lang === 'es' ? 'EN' : 'ES';

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const translation = translations[lang]?.[key];
                if (translation) {
                    el.innerHTML = translation;
                }
            });
        },

        toggle() {
            this.set(currentLang === 'es' ? 'en' : 'es');
        },

        init() {
            this.set(currentLang);

            document.getElementById('langToggle').addEventListener('click', () => this.toggle());

            const mobileLangBtn = document.getElementById('mobileLangBtn');
            if (mobileLangBtn) {
                mobileLangBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
                mobileLangBtn.addEventListener('click', () => this.toggle());
            }
        }
    };

    /* ============================================
       Mobile Menu Module
       ============================================ */

    const MobileMenu = {
        btn: null,
        menu: null,

        toggle() {
            this.btn.classList.toggle('active');
            this.menu.classList.toggle('open');
        },

        close() {
            this.btn.classList.remove('active');
            this.menu.classList.remove('open');
        },

        init() {
            this.btn = document.getElementById('mobileMenuBtn');
            this.menu = document.getElementById('mobileMenu');

            this.btn.addEventListener('click', () => this.toggle());

            this.menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => this.close());
            });
        }
    };

    /* ============================================
       Scroll Reveal Module
       ============================================ */

    const ScrollReveal = {
        init() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px'
            });

            document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
        }
    };

    /* ============================================
       Navigation Module
       ============================================ */

    const Navigation = {
        nav: null,
        lastScroll: 0,
        ticking: false,

        onScroll() {
            const current = window.scrollY;

            if (current > this.lastScroll && current > 100) {
                this.nav.classList.add('nav-hidden');
            } else {
                this.nav.classList.remove('nav-hidden');
            }

            this.lastScroll = current;
            this.ticking = false;
        },

        initNavHide() {
            this.nav = document.getElementById('topNav');

            window.addEventListener('scroll', () => {
                if (!this.ticking) {
                    requestAnimationFrame(() => this.onScroll());
                    this.ticking = true;
                }
            }, { passive: true });
        },

        initActiveLink() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach(link => {
                            link.style.color = '';
                            if (link.getAttribute('href') === `#${id}`) {
                                link.style.color = 'var(--md-sys-color-primary)';
                            }
                        });
                    }
                });
            }, {
                threshold: 0.3,
                rootMargin: '-80px 0px -50% 0px'
            });

            sections.forEach(section => observer.observe(section));
        },

        initSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });
        },

        init() {
            this.initNavHide();
            this.initActiveLink();
            this.initSmoothScroll();
        }
    };

    /* ============================================
       Bootstrap
       ============================================ */

    document.addEventListener('DOMContentLoaded', () => {
        Theme.init();
        I18n.init();
        MobileMenu.init();
        ScrollReveal.init();
        Navigation.init();
    });

})();
