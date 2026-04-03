import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface NavItem {
    label: string;
    fragment: string;
}

interface StatItem {
    value: string;
    label: string;
}

interface ServiceItem {
    icon: string;
    title: string;
    description: string;
}

interface AboutHighlightItem {
    icon: string;
    title: string;
    description: string;
}

interface SkillItem {
    mark: string;
    label: string;
    accent: string;
}

interface ProjectItem {
    title: string;
    category: string;
    description: string;
    tags: string[];
    accent: string;
    previewClass: string;
    previewImage?: string;
}

interface CertificateItem {
    title: string;
    issuer: string;
    date: string;
    description: string;
    tags: string[];
    image: string;
}

interface CertificateStatItem {
    value: string;
    label: string;
}

interface ContactItem {
    icon: string;
    title: string;
    value: string;
}

@Component({
    selector: 'lim-portfolio-page',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './lim.html',
    styleUrl: './lim.css'
})
export class LimPortfolioPage {
    protected readonly currentYear = new Date().getFullYear();
    protected readonly isDark = signal(false);

    protected readonly navItems: NavItem[] = [
        { label: 'Home', fragment: 'home' },
        { label: 'About', fragment: 'about' },
        { label: 'Skills', fragment: 'skills' },
        { label: 'Projects', fragment: 'projects' },
        { label: 'Certificates', fragment: 'certificates' },
        { label: 'Contact', fragment: 'contact' }
    ];

    protected readonly stats: StatItem[] = [
        { value: '3+', label: 'Years Experience' },
        { value: '10+', label: 'Projects Completed' },
        { value: '2+', label: 'Happy Clients' },
        { value: '3+', label: 'Certifications' }
    ];

    protected readonly aboutHighlights: AboutHighlightItem[] = [
        { icon: 'pi pi-code', title: 'Clean Code', description: 'Best practices' },
        { icon: 'pi pi-briefcase', title: 'Experience', description: '3+ years' },
        { icon: 'pi pi-graduation-cap', title: 'Education', description: 'IT' },
        { icon: 'pi pi-verified', title: 'Certified', description: 'Few certs' }
    ];

    protected readonly services: ServiceItem[] = [
        {
            icon: 'pi pi-code',
            title: 'Web Development',
            description: 'Building responsive and performant web applications using modern technologies.'
        },
        {
            icon: 'pi pi-box',
            title: 'UI/UX Design',
            description: 'Creating beautiful and intuitive user interfaces with great user experience.'
        },
        {
            icon: 'pi pi-graduation-cap',
            title: 'Consulting',
            description: 'Providing technical guidance and best practices for development teams.'
        }
    ];

    protected readonly primaryStack: SkillItem[] = [
        { mark: 'NG', label: 'Angular', accent: '#dd0031' },
        { mark: 'TS', label: 'TypeScript', accent: '#2563eb' },
        { mark: 'R', label: 'React', accent: '#06b6d4' },
        { mark: 'V', label: 'Vue', accent: '#22c55e' },
        { mark: 'N', label: 'Next.js', accent: '#111827' },
        { mark: 'TW', label: 'Tailwind', accent: '#14b8a6' },
        { mark: 'B', label: 'Bootstrap', accent: '#7c3aed' },
        { mark: 'S', label: 'Svelte', accent: '#f97316' },
        { mark: 'H5', label: 'HTML5', accent: '#f97316' }
    ];

    protected readonly secondaryStack: SkillItem[] = [
        { mark: 'EX', label: 'Express', accent: '#4b5563' },
        { mark: 'PG', label: 'PostgreSQL', accent: '#2563eb' },
        { mark: 'M', label: 'MongoDB', accent: '#22c55e' },
        { mark: 'J', label: 'Java', accent: '#ef4444' },
        { mark: 'SP', label: 'Spring', accent: '#84cc16' },
        { mark: 'N', label: 'Node.js', accent: '#16a34a' }
    ];

    protected readonly projects: ProjectItem[] = [
        {
            title: 'NexGen',
            category: 'Web App',
            description: 'The all-in-one platform to manage your team, track analytics, and build products users love.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            accent: '#7c3aed',
            previewClass: 'project-preview--nexgen',
            previewImage: 'profile/nexgen-preview.svg'
        },
        {
            title: 'Apex',
            category: 'Web App',
            description: 'A secure vault for your sensitive information, built with modern web technologies.',
            tags: ['React', 'TypeScript', 'Tailwind CSS', 'API Integration'],
            accent: '#f59e0b',
            previewClass: 'project-preview--apex',
            previewImage: 'profile/apex-preview.svg'
        }
    ];

    protected readonly certificates: CertificateItem[] = [
        {
            title: 'Certified HTML Developer',
            issuer: 'W3Schools',
            date: 'March 2025',
            description: 'Passed the W3Schools HTML certification exam at the Professional level.',
            tags: ['HTML', 'Web Development', 'Frontend'],
            image: 'profile/htmlCertificate.png'
        },
        {
            title: 'Certified Laravel Developer',
            issuer: 'W3Schools',
            date: 'February 2024',
            description: 'Passed the W3Schools CSS certification exam at the Professional level.',
            tags: ['API Integration', 'Database management', 'Clean architecture'],
            image: 'profile/laravelCertificate.png'
        }
    ];

    protected readonly certificateStats: CertificateStatItem[] = [
        { value: '2', label: 'Total Certifications' },
        { value: '1', label: 'Issuing Organizations' },
        { value: '2+', label: 'Years Learning' }
    ];

    protected readonly contactItems: ContactItem[] = [
        { icon: 'pi pi-envelope', title: 'Email', value: 'limbrian2003@gmail.com' },
        { icon: 'pi pi-phone', title: 'Phone', value: '+(63) 963-940-8196' },
        { icon: 'pi pi-map-marker', title: 'Location', value: 'Davao Del Norte, Tagum City, Philippines' }
    ];

    protected navigateToSection(fragment: string): void {
        const element = document.getElementById(fragment);
        if (!element) {
            return;
        }

        const headerOffset = 84;
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - headerOffset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    protected toggleTheme(): void {
        this.isDark.update((value) => !value);
    }
}
