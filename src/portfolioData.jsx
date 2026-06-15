import { FaFigma, FaLaptopCode, FaMobileAlt } from 'react-icons/fa'
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'
import profileImage from './assets/profileweb.png'
import project1Image from './assets/Project_1.png'
import project2Image from './assets/Project_2.png'
import project3Image from './assets/Project_3.png'
import project4Image from './assets/Project_4.png'
import project5Image from './assets/Project_5.png'
import project6Image from './assets/Project_6.png'

export const HERO_BACKGROUND = '/Halaman1.png'

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const TOOL_ITEMS = [
  { node: <SiHtml5 style={{ fontSize: '48px', color: '#E34C26' }} />, title: 'HTML5', href: 'https://html.spec.whatwg.org' },
  { node: <SiCss3 style={{ fontSize: '48px', color: '#1572B6' }} />, title: 'CSS3', href: 'https://www.w3.org/Style/CSS' },
  { node: <SiJavascript style={{ fontSize: '48px', color: '#F7DF1E' }} />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <SiReact style={{ fontSize: '48px', color: '#3498DB' }} />, title: 'React', href: 'https://react.dev' },
  { node: <SiLaravel style={{ fontSize: '48px', color: '#FF2D20' }} />, title: 'Laravel', href: 'https://laravel.com' },
  { node: <SiPhp style={{ fontSize: '48px', color: '#777BB4' }} />, title: 'PHP', href: 'https://www.php.net' },
  {
    node: (
      <div style={{ display: 'flex', gap: '0px' }}>
        <SiTailwindcss style={{ fontSize: '48px', color: '#06B6D4' }} />
        <div style={{ width: '48px', height: '48px', opacity: 0 }} />
      </div>
    ),
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
  },
]

export const SERVICES = [
  {
    id: 'web-dev',
    icon: FaLaptopCode,
    title: 'Website Development',
    description:
      'Building a solid website for your business. We create responsive, fast, and secure websites, ensuring your business is always accessible from anywhere, anytime',
  },
  {
    id: 'app-dev',
    icon: FaMobileAlt,
    title: 'App Development',
    description:
      'Turning innovative ideas into powerful mobile apps. We develop stable and intuitive iOS and Android apps, helping you connect with customers right at their fingertips',
  },
  {
    id: 'ui-ux',
    icon: FaFigma,
    title: 'UI / UX Designer',
    description:
      'More than just aesthetics, we design experiences. Through in-depth research and user-friendly interface design, we ensure users feel at home and can easily interact with your digital products.',
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'Old Calculator',
    description: 'A simple calculator web application',
    image: project1Image,
    githubLink: 'https://github.com/diulll/Old-calculator',
    websiteLink: 'https://old-calculator.vercel.app/',
  },
  {
    id: 2,
    title: 'Klinik PKP Kendal Web Platform',
    description: 'A public service website offering free housing consultations and housing data for Kendal Regency.',
    image: project2Image,
    githubLink: 'https://github.com/balai-p3kp-jawa-3/kendal',
    websiteLink: 'https://klinikpkpkendalkab.com/',
  },
  {
    id: 3,
    title: 'Aquarium Refill Illustration',
    description: 'A clean, minimal fishbowl graphic with a refill button',
    image: project3Image,
    githubLink: 'https://github.com/diulll',
    websiteLink: 'http://aquarium-refill.vercel.app/',
  },
  {
    id: 4,
    title: 'Pircycle Web Platform',
    description: 'An e-commerce and company profile for an eco-friendly plastic upcycling brand.',
    image: project4Image,
    githubLink: 'https://github.com/diulll/Pircycle',
    websiteLink: 'https://pircycle.gt.tc/',
  },
  {
    id: 5,
    title: 'BOM System',
    description: 'Efficiently manage Bill of Materials, recipes, and raw material calculations.',
    image: project5Image,
    githubLink: 'https://github.com/diulll/Bill-of-management',
    websiteLink: 'https://bom.kesug.com/',
  },
  {
    id: 6,
    title: 'Personal Portfolio Website',
    description: 'A sleek developer portfolio showcasing a modern landing page, tech skills, and custom web design work.',
    image: project6Image,
    githubLink: 'https://github.com/diulll/nauval Porto',
    websiteLink: null,
  },
]

export const SOCIAL_LINKS = [
  { href: 'https://wa.me/6281239638514', alt: 'WhatsApp', icon: 'https://cdn.simpleicons.org/whatsapp/888888' },
  { href: 'https://github.com/diulll', alt: 'GitHub', icon: 'https://cdn.simpleicons.org/github/888888' },
  { href: 'https://www.instagram.com/diul.f/', alt: 'Instagram', icon: 'https://cdn.simpleicons.org/instagram/888888' },
]

export const GLASS_NAV_STYLE = {
  backgroundColor: 'rgba(20, 20, 30, 0.4)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '50px',
  padding: '4px 18px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'auto',
  boxShadow: '0 8px 32px 0 rgba(255, 107, 107, 0.3)',
  animation: 'slideDown 0.3s ease-out',
  pointerEvents: 'auto',
}

export const GLASS_PANEL_STYLE = {
  backgroundColor: 'rgba(20, 20, 30, 0.4)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  padding: '15px 20px',
  maxWidth: '350px',
  zIndex: 100,
  boxShadow: '0 8px 32px 0 rgba(255, 107, 107, 0.3)',
  animation: 'fadeIn 0.3s ease-in',
}

export const ACTION_BUTTON_STYLE = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '50%',
  border: '2px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
}

export const PROJECT_CARD_STYLE = {
  backgroundColor: '#1a1a1a',
  borderRadius: '8px',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  minHeight: '300px',
  boxShadow: '0 20px 40px rgba(255, 107, 107, 0.2)',
}

export const SECTION_BASE_STYLE = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px 20px',
  backgroundColor: '#000',
  color: '#fff',
}

export const profile = profileImage
