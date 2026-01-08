import type { Profile } from '../models/Profile'
import type { Experience } from '../models/Experience'
import type { SkillGroup } from '../models/SkillGroup'
import type { Education } from '../models/Education'
import type { Certification } from '../models/Certification'
import type { Project } from '../models/Project'

export const useLandingData = () => {
  const profile = useState<Profile>('profile', () => ({
    name: 'Ardi',
    role: 'Senior Frontend Developer',
    bio: 'Passionate about building performant and scalable web applications with modern technologies.',
    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&clotheType=Hoodie&clotheColor=Black&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light',
    socials: [
      { platform: 'GitHub', url: 'https://github.com', icon: 'mdi-github' },
      { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'mdi-linkedin' },
      { platform: 'Email', url: 'mailto:ardi@example.com', icon: 'mdi-email' }
    ]
  }))

  const experiences = useState<Experience[]>('experiences', () => [
    {
      id: 1,
      role: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: 'Leading the frontend architecture migration to Nuxt 3. Mentoring junior developers and establishing code quality standards.',
      skills: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Vitest']
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Digital Creative Agency',
      period: '2021 - 2023',
      description: 'Developed high-performance landing pages and e-commerce platforms for various clients.',
      skills: ['Vue 2', 'SASS', 'JavaScript', 'Animation']
    }
  ])

  const skillGroups = useState<SkillGroup[]>('skillGroups', () => [
    {
      name: 'Frontend',
      skills: ['Vue', 'Nuxt', 'TypeScript', 'Vite', 'SSR', 'SEO', 'A11y', 'Performance']
    },
    {
      name: 'UI & Design Systems',
      skills: ['Vuetify', 'CSS Architecture', 'Tokens', 'Responsive Design', 'Micro-interactions']
    },
    {
      name: 'Tooling',
      skills: ['Vitest', 'ESLint', 'CI', 'Monorepo Patterns', 'DX']
    }
  ])

  const educations = useState<Education[]>('educations', () => [
    {
      id: 1,
      institution: 'Your University',
      program: 'B.Sc. Computer Science',
      period: '2017 - 2021',
      location: 'Indonesia',
      highlights: ['Graduated with honors', 'Focused on web engineering']
    }
  ])

  const certifications = useState<Certification[]>('certifications', () => [
    {
      id: 1,
      title: 'Frontend Certification',
      issuer: 'Issuer Name',
      issuedAt: '2024',
      credentialUrl: 'https://example.com',
      highlights: ['Modern frontend architecture', 'Testing & performance']
    }
  ])

  const projects = useState<Project[]>('projects', () => [
    {
      id: 1,
      slug: 'ecommerce-dashboard',
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive analytics dashboard for e-commerce store owners to track sales and inventory.',
      image: 'https://picsum.photos/seed/project1/600/400',
      tags: ['Vue 3', 'Chart.js', 'Tailwind'],
      role: 'Frontend Lead',
      contributions: [
        'Designed the dashboard information architecture and reusable chart components',
        'Implemented caching and request deduplication for smoother UX',
        'Introduced testing and linting gates for consistent delivery'
      ],
      stack: ['Vue 3', 'TypeScript', 'Chart.js', 'Vite'],
      outcomes: ['Improved data loading performance and perceived responsiveness'],
      link: 'https://example.com',
      github: 'https://github.com'
    },
    {
      id: 2,
      slug: 'task-management-app',
      title: 'Task Management App',
      description: 'Real-time collaborative task management tool with drag-and-drop kanban boards.',
      image: 'https://picsum.photos/seed/project2/600/400',
      tags: ['Nuxt', 'Firebase', 'Vuetify'],
      role: 'Senior Frontend',
      contributions: [
        'Built SSR-first pages and componentized kanban UI for maintainability',
        'Implemented optimistic updates and conflict-friendly UI states',
        'Added analytics events and error boundaries for observability'
      ],
      stack: ['Nuxt', 'Vue 3', 'Vuetify', 'Firebase'],
      outcomes: ['Reduced UI regressions with test coverage on critical utilities'],
      link: 'https://example.com',
      github: 'https://github.com'
    },
    {
      id: 3,
      slug: 'portfolio-website',
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with Nuxt 3 and Vuetify (This website!).',
      image: 'https://picsum.photos/seed/project3/600/400',
      tags: ['Nuxt 3', 'Vuetify', 'TypeScript'],
      role: 'Owner',
      contributions: [
        'Built SEO-friendly pages with SSR and clean information hierarchy',
        'Created reusable data layer to prepare CMS integration',
        'Implemented portfolio detail pages for private or API-only projects'
      ],
      stack: ['Nuxt', 'Vuetify', 'TypeScript'],
      outcomes: ['Clear, professional visual with subtle motion'],
      notes: 'Some projects are private; details are documented here without public links.'
    },
    {
      id: 4,
      slug: 'payments-api',
      title: 'Payments API',
      description: 'Backend service for payment orchestration, webhooks, and transaction reconciliation.',
      image: 'https://picsum.photos/seed/project4/600/400',
      tags: ['API', 'Payments', 'Observability'],
      role: 'Backend / API Developer',
      contributions: [
        'Designed REST endpoints and webhook signature verification flow',
        'Implemented idempotency strategy to prevent double-charges',
        'Added structured logging and tracing for faster incident triage'
      ],
      stack: ['Node.js', 'PostgreSQL', 'Redis', 'OpenTelemetry'],
      outcomes: ['Improved reliability during peak traffic with idempotent processing'],
      notes: 'API-only project. Repository and UI are private, so this page documents the scope and impact.'
    }
  ])

  return {
    profile,
    experiences,
    skillGroups,
    educations,
    certifications,
    projects
  }
}
