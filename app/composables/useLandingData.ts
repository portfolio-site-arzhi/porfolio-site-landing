import type { Profile } from '../models/Profile'
import type { Experience } from '../models/Experience'
import type { SkillGroup } from '../models/SkillGroup'
import type { Education } from '../models/Education'
import type { Certification } from '../models/Certification'
import type { Project } from '../models/Project'
import { buildSocialLinks, pickLocalizedText } from '../utils/siteConfig'

export const useLandingData = () => {
  const { locale } = useI18n()
  const { siteConfigs } = useSiteConfigs()

  const profileFallback = useState<Profile>('profile', () => ({
    name: 'Ardi',
    role: 'Senior Frontend Developer',
    bio: 'Berpengalaman membangun aplikasi web yang performan dan skalabel dengan teknologi modern.',
    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&clotheType=Hoodie&clotheColor=Black&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light',
    socials: [
      { platform: 'GitHub', url: 'https://github.com', icon: 'mdi-github' },
      { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'mdi-linkedin' },
      { platform: 'Email', url: 'mailto:ardi@example.com', icon: 'mdi-email' }
    ]
  }))

  const profile = computed<Profile>(() => {
    const base = profileFallback.value
    const home = siteConfigs.value.home
    const about = siteConfigs.value.about
    const footer = siteConfigs.value.footer

    const bio = pickLocalizedText(home?.description, locale.value) ?? base.bio

    return {
      ...base,
      name: home?.name ?? base.name,
      role: home?.position ?? base.role,
      bio,
      avatar: home?.photo ?? base.avatar,
      socials: buildSocialLinks({ footer, about, fallback: base.socials })
    }
  })

  const aboutMe = computed<string>(() => {
    return pickLocalizedText(siteConfigs.value.about?.about_me, locale.value) ?? profile.value.bio
  })

  const experiences = useState<Experience[]>('experiences', () => [
    {
      id: 1,
      role: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Sekarang',
      description: 'Memimpin migrasi arsitektur frontend ke Nuxt 3. Mentoring developer junior dan menetapkan standar kualitas kode.',
      skills: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Vitest']
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Digital Creative Agency',
      period: '2021 - 2023',
      description: 'Mengembangkan landing page yang performan tinggi dan platform e-commerce untuk berbagai klien.',
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
      institution: 'Universitas Anda',
      program: 'S1 Teknik Informatika',
      period: '2017 - 2021',
      location: 'Indonesia',
      highlights: ['Lulus dengan predikat cumlaude', 'Fokus pada rekayasa web']
    }
  ])

  const certifications = useState<Certification[]>('certifications', () => [
    {
      id: 1,
      title: 'Frontend Certification',
      issuer: 'Nama Penerbit',
      issuedAt: '2024',
      credentialUrl: 'https://example.com',
      highlights: ['Arsitektur frontend modern', 'Testing & performansi']
    }
  ])

  const projects = useState<Project[]>('projects', () => [
    {
      id: 1,
      slug: 'ecommerce-dashboard',
      title: 'Dashboard E-Commerce',
      description: 'Dashboard analitik komprehensif untuk pemilik toko e-commerce untuk melacak penjualan dan inventaris.',
      image: 'https://picsum.photos/seed/project1/600/400',
      tags: ['Vue 3', 'Chart.js', 'Tailwind'],
      role: 'Frontend Lead',
      contributions: [
        'Merancang arsitektur informasi dashboard dan komponen chart yang dapat digunakan ulang',
        'Mengimplementasikan caching dan deduplikasi request untuk pengalaman pengguna yang lebih lancar',
        'Memperkenalkan gerbang testing dan linting untuk pengiriman yang konsisten'
      ],
      stack: ['Vue 3', 'TypeScript', 'Chart.js', 'Vite'],
      outcomes: ['Meningkatkan performansi loading data dan responsivitas yang dirasakan'],
      link: 'https://example.com',
      github: 'https://github.com'
    },
    {
      id: 2,
      slug: 'task-management-app',
      title: 'Aplikasi Manajemen Tugas',
      description: 'Alat manajemen tugas kolaboratif real-time dengan papan kanban drag-and-drop.',
      image: 'https://picsum.photos/seed/project2/600/400',
      tags: ['Nuxt', 'Firebase', 'Vuetify'],
      role: 'Senior Frontend',
      contributions: [
        'Membangun halaman dengan prioritas SSR dan UI kanban terkomponen untuk kemudahan pemeliharaan',
        'Mengimplementasikan update optimistik dan state UI yang toleran terhadap konflik',
        'Menambahkan event analitik dan error boundary untuk observabilitas'
      ],
      stack: ['Nuxt', 'Vue 3', 'Vuetify', 'Firebase'],
      outcomes: ['Mengurangi regresi UI dengan cakupan test pada utilitas kritis'],
      link: 'https://example.com',
      github: 'https://github.com'
    },
    {
      id: 3,
      slug: 'portfolio-website',
      title: 'Website Portfolio',
      description: 'Website portfolio personal yang dibangun dengan Nuxt 3 dan Vuetify (Website ini!).',
      image: 'https://picsum.photos/seed/project3/600/400',
      tags: ['Nuxt 3', 'Vuetify', 'TypeScript'],
      role: 'Owner',
      contributions: [
        'Membangun halaman yang ramah SEO dengan SSR dan hierarki informasi yang bersih',
        'Membuat lapisan data yang dapat digunakan ulang untuk mempersiapkan integrasi CMS',
        'Mengimplementasikan halaman detail portfolio untuk proyek privat atau API-only'
      ],
      stack: ['Nuxt', 'Vuetify', 'TypeScript'],
      outcomes: ['Visual yang profesional dan jelas dengan gerakan yang halus'],
      notes: 'Beberapa proyek bersifat privat; detail didokumentasikan di sini tanpa link publik.'
    },
    {
      id: 4,
      slug: 'payments-api',
      title: 'API Pembayaran',
      description: 'Layanan backend untuk orkestrasi pembayaran, webhooks, dan rekonsiliasi transaksi.',
      image: 'https://picsum.photos/seed/project4/600/400',
      tags: ['API', 'Pembayaran', 'Observabilitas'],
      role: 'Backend / API Developer',
      contributions: [
        'Merancang endpoint REST dan alur verifikasi signature webhook',
        'Mengimplementasikan strategi idempotensi untuk mencegah penagihan ganda',
        'Menambahkan logging terstruktur dan tracing untuk triase insiden yang lebih cepat'
      ],
      stack: ['Node.js', 'PostgreSQL', 'Redis', 'OpenTelemetry'],
      outcomes: ['Meningkatkan keandalan selama lalu lintas puncak dengan pemrosesan idempoten'],
      notes: 'Proyek API-only. Repository dan UI bersifat privat, jadi halaman ini mendokumentasikan ruang lingkup dan dampaknya.'
    }
  ])

  return {
    profile,
    aboutMe,
    experiences,
    skillGroups,
    educations,
    certifications,
    projects
  }
}
