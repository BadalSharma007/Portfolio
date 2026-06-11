# ============================================================================
# BADAL KUMAR SHARMA — PORTFOLIO WEBSITE
# React 18 + Vite + Tailwind CSS + Framer Motion
# 
# INSTRUCTIONS FOR PARSING AI:
# Each file is marked with "===== FILE: <path> =====" followed by its content.
# Create each file at the given path. After creating all files, run:
#   npm install
#   npm run dev      (local development)
#   npm run build    (production build)
#   npm run deploy   (deploy to GitHub Pages)
# ============================================================================


# ===== FILE: package.json =====
{
  "name": "badal-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "homepage": "https://badalsharma007.github.io/",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.300.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.17",
    "gh-pages": "^6.1.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "vite": "^5.1.0"
  }
}


# ===== FILE: vite.config.js =====
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: If deploying to GitHub Pages at a project URL (username.github.io/repo),
// set base to '/repo-name/'. If using a custom domain or username.github.io root,
// keep base as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})


# ===== FILE: tailwind.config.js =====
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0f',
          secondary: '#0f172a',
          card: '#1e293b',
        },
        accent: {
          primary: '#3b82f6',
          secondary: '#06b6d4',
          light: '#60a5fa',
        },
        txt: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
        },
        line: '#334155',
        success: '#22c55e',
        warning: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}


# ===== FILE: postcss.config.js =====
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}


# ===== FILE: index.html =====
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Badal Kumar Sharma — AI/ML Engineer, Competitive Programmer, building language models and agentic AI." />
    <meta name="author" content="Badal Kumar Sharma" />
    <meta property="og:title" content="Badal Kumar Sharma — AI/ML Engineer" />
    <meta property="og:description" content="Building language models, computer vision systems, and agentic AI pipelines." />
    <meta property="og:type" content="website" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
    <title>Badal Kumar Sharma — AI/ML Engineer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>


# ===== FILE: public/favicon.svg =====
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="#0a0a0f"/>
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
        font-family="Inter, sans-serif" font-size="30" font-weight="700" fill="url(#g)">BS</text>
</svg>


# ===== FILE: public/CNAME =====
# Replace with your custom domain. Delete this file if not using a custom domain.
# example: badalsharma.dev


# ===== FILE: public/.nojekyll =====
# This empty file prevents GitHub Pages from ignoring files that start with underscore.


# ===== FILE: src/main.jsx =====
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


# ===== FILE: src/index.css =====
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0a0a0f;
  color: #f8fafc;
  font-family: 'Inter', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #0a0a0f;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #3b82f6, #06b6d4);
  border-radius: 8px;
}
::-webkit-scrollbar-thumb:hover {
  background: #60a5fa;
}

/* Gradient text utility */
.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Glassmorphism card */
.glass {
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(51, 65, 85, 0.6);
}

/* Hide horizontal scrollbar on stat strip */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Rotating gradient border ring */
.gradient-ring {
  background: conic-gradient(from 0deg, #3b82f6, #06b6d4, #60a5fa, #3b82f6);
}


# ===== FILE: src/data/content.js =====
// Centralized content — edit your data here.
import {
  SiGithub, SiLinkedin, SiX, SiLeetcode, SiKaggle, SiCodeforces,
  SiPython, SiCplusplus, SiJavascript, SiMysql, SiOpenjdk,
  SiPytorch, SiTensorflow, SiKeras, SiScikitlearn, SiOpencv, SiSpacy, SiHuggingface, SiOllama,
  SiPandas, SiNumpy, SiPlotly,
  SiFastapi, SiFlask, SiNodedotjs, SiPostgresql, SiRedis, SiMongodb,
  SiDocker, SiGit, SiGithubactions, SiAmazon, SiGooglecloud, SiLinux,
  SiEspressif, SiNvidia, SiRaspberrypi,
} from 'react-icons/si'

export const PROFILE = {
  name: 'Badal Kumar Sharma',
  tagline: 'AI/ML Engineer | Competitive Programmer | Building Language Models & Agentic AI',
  subTagline: 'B.Tech CSE (AI & ML), Sharda University — 3rd Year | 8.4 CGPA',
  email: 'sonusharma4201434@gmail.com',
  location: 'Sharda University, Greater Noida, India',
  bio: "I build language models, computer vision systems, and agentic AI pipelines. Sometimes hardware too. From training 124M-parameter transformers from scratch to deploying ESP32-CAM edge devices that run entirely offline — I love bridging the gap between research and real-world impact. Competitive programming keeps my algorithmic thinking sharp (LeetCode 1770, Codeforces 1054), while Kaggle competitions push my ML engineering to the limit (Expert, Top 0.4% best rank). Currently exploring agentic AI workflows, LLM fine-tuning, and autonomous systems.",
  resumeUrl: '#', // Replace with your resume PDF link
}

export const TYPING_PHRASES = [
  'AI/ML Engineer',
  'Competitive Programmer',
  'Kaggle Expert',
  'LLM Builder',
]

export const SOCIALS = [
  { name: 'GitHub', icon: SiGithub, url: 'https://github.com/BadalSharma007' },
  { name: 'LinkedIn', icon: SiLinkedin, url: 'https://linkedin.com/in/badal-kr-sharma-471a19263' },
  { name: 'Twitter/X', icon: SiX, url: 'https://x.com/Badal_kr_sharma' },
  { name: 'LeetCode', icon: SiLeetcode, url: 'https://leetcode.com/u/Badalkrsharma' },
  { name: 'Kaggle', icon: SiKaggle, url: 'https://kaggle.com/badalkrsharma' },
  { name: 'Codeforces', icon: SiCodeforces, url: 'https://codeforces.com/profile/Badal_07' },
]

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Contact', href: '#contact' },
]

export const QUICK_FACTS = [
  { emoji: '🎓', text: 'B.Tech CSE (AI & ML), Sharda University, 3rd Year' },
  { emoji: '📊', text: '8.4 CGPA' },
  { emoji: '🏆', text: 'Kaggle Expert, 13 Badges' },
  { emoji: '⚡', text: 'LeetCode Rating 1770, Best Rank 54' },
]

export const COUNTERS = [
  { label: 'Projects', value: 8, suffix: '+' },
  { label: 'Internships', value: 3, suffix: '' },
  { label: 'Kaggle Competitions', value: 5, suffix: '+' },
  { label: 'LeetCode Problems', value: 350, suffix: '+' },
]

export const ACHIEVEMENTS = [
  {
    name: 'Kaggle · Heart Disease Prediction',
    platform: 'Kaggle',
    rank: '16 / 4,507',
    badge: 'Top 0.4%',
    badgeColor: 'success',
    score: 'AUC 0.95410',
    techniques: 'Feature engineering, ensemble methods, hyperparameter tuning',
    link: 'https://kaggle.com/badalkrsharma',
  },
  {
    name: 'Amazon ML Challenge 2025',
    platform: 'Amazon',
    rank: '663 / 80,332',
    badge: 'Top 0.8%',
    badgeColor: 'success',
    score: 'Price Prediction',
    techniques: 'XGBoost, TF-IDF, 400+ engineered features, log-price transform, 5-fold CV',
    link: 'https://github.com/BadalSharma007',
  },
  {
    name: 'Hacknovate Hackathon',
    platform: 'Hackathon',
    rank: '3rd Place',
    badge: '🥉 Podium Finish',
    badgeColor: 'warning',
    score: 'National Level',
    techniques: 'Full-stack AI solution built under time pressure',
    link: '#',
  },
  {
    name: 'Kaggle · Road Accident Risk (S5E10)',
    platform: 'Kaggle',
    rank: '445 / 10,285',
    badge: 'Top 4.3%',
    badgeColor: 'accent',
    score: 'Risk Modeling',
    techniques: 'LightGBM + XGBoost ensemble',
    link: 'https://kaggle.com/badalkrsharma',
  },
  {
    name: 'Kaggle · Student Test Scores (S6E1)',
    platform: 'Kaggle',
    rank: '613 / 4,319',
    badge: 'Top 15%',
    badgeColor: 'accent',
    score: 'Regression',
    techniques: 'Regression ensemble',
    link: 'https://kaggle.com/badalkrsharma',
  },
  {
    name: 'NCAA March ML Mania 2026',
    platform: 'Kaggle',
    rank: '5-Model Ensemble',
    badge: 'Ensemble Build',
    badgeColor: 'accent',
    score: 'Bracket Prediction',
    techniques: 'RF + XGB + CatBoost + LGB + PyTorch, Optuna tuning, Elo features',
    link: 'https://kaggle.com/badalkrsharma',
  },
]

export const PLATFORM_STATS = [
  { platform: 'LeetCode', metric: 'Rating', value: '1770', icon: SiLeetcode },
  { platform: 'LeetCode', metric: 'Best Rank', value: '54', icon: SiLeetcode },
  { platform: 'Codeforces', metric: 'Rating', value: '1054', icon: SiCodeforces },
  { platform: 'Kaggle', metric: 'Tier', value: 'Expert', icon: SiKaggle },
  { platform: 'Kaggle', metric: 'Badges', value: '13', icon: SiKaggle },
  { platform: 'GitHub', metric: 'Repos', value: '20+', icon: SiGithub },
]

export const PROJECTS = [
  {
    name: 'Third Eye',
    category: 'Edge AI / Hardware',
    description: 'Offline AI voice assistant for visually impaired users. No internet, no cloud — entirely local.',
    stack: ['ESP32-CAM', 'Ollama LLM', 'gTTS', 'Python'],
    github: 'https://github.com/BadalSharma007',
    demo: null,
    highlight: '🏆 Social Impact Project',
  },
  {
    name: 'Remindee.ai',
    category: 'Production SaaS',
    description: 'Production email assistant parsing 500+ emails/day. Extracts deadlines and tasks via spaCy + regex at 92% accuracy.',
    stack: ['FastAPI', 'PostgreSQL', 'Redis', 'Gmail API', 'OAuth2', 'spaCy'],
    github: null,
    privateRepo: true,
    demo: null,
    highlight: '⚡ 60% latency reduction with Redis',
  },
  {
    name: 'GPT from Scratch',
    category: 'Deep Learning',
    description: '124M-parameter GPT-2 style transformer built from scratch in PyTorch. Full training pipeline.',
    stack: ['PyTorch', 'tiktoken', 'AdamW', 'Cosine Annealing'],
    github: 'https://github.com/BadalSharma007',
    demo: null,
    highlight: '📉 Perplexity: 42.3 → 16.8',
  },
  {
    name: 'NexaAI Website Generator',
    category: 'Agentic AI',
    description: 'Fully autonomous website builder. Gemini Vision extracts design → LLM generates Next.js → Selenium validates → regenerates if score < 65.',
    stack: ['Gemini Vision', 'Next.js', 'Selenium', 'LLM Agents'],
    github: 'https://github.com/BadalSharma007',
    demo: null,
    highlight: '🤖 Zero human input, 4 pages built',
  },
  {
    name: 'Autonomous Driving Robot',
    category: 'Robotics / CV',
    description: 'ESP32-based self-driving robot with OpenCV lane following, A* path planning, and LLaVA-7B decision brain.',
    stack: ['ESP32', 'OpenCV', 'A*', 'LLaVA-7B', 'Ultrasonic', 'IR'],
    github: null,
    privateRepo: true,
    demo: null,
    highlight: '🚗 15 FPS real-time inference',
  },
  {
    name: 'Face Recognition Attendance',
    category: 'Computer Vision',
    description: 'EfficientNet-B4 with transfer learning on 200-identity dataset. TensorRT quantized for edge deployment.',
    stack: ['EfficientNet-B4', 'TensorRT', 'Flask', 'Transfer Learning'],
    github: 'https://github.com/BadalSharma007',
    demo: null,
    highlight: '⚡ 30+ FPS on edge devices',
  },
  {
    name: 'Amazon ML Challenge 2025',
    category: 'ML Competition',
    description: 'Product price prediction from catalog text. Rank 663 out of 80,332 teams.',
    stack: ['XGBoost', 'TF-IDF', 'SVD', 'Regex Feature Engineering'],
    github: 'https://github.com/BadalSharma007',
    demo: null,
    highlight: '🏆 Top 0.8% among 80K+ teams',
  },
  {
    name: 'ANPR System',
    category: 'Computer Vision',
    description: 'License plate detection + OCR pipeline handling 5+ regional formats in real-time.',
    stack: ['YOLOv8', 'EasyOCR', 'Python'],
    github: 'https://github.com/BadalSharma007',
    demo: null,
    highlight: '🎯 94% mAP detection accuracy',
  },
]

export const EXPERIENCES = [
  {
    company: 'VOIS (Vodafone)',
    role: 'Conversational AI Intern',
    duration: '2025',
    location: 'Remote / India',
    points: [
      'Designed LLM-based NLP pipelines on enterprise dialogue data',
      'Applied advanced prompt engineering improving model output accuracy by 30%+',
      'Prototyped agentic workflow automations for conversational systems',
      'Worked with production-scale conversational AI deployment',
    ],
  },
  {
    company: 'Shell-Edunet / AICTE',
    role: 'AI Intern',
    duration: 'Jan 2025 – Mar 2025',
    location: 'India',
    points: [
      'Built ML pipeline for EV charging demand prediction on 50K+ records',
      'Improved station deployment efficiency by 70% through predictive modeling',
      'Conducted NLP analysis on 10K+ dialogue samples for customer insight extraction',
      'Delivered actionable insights for infrastructure planning',
    ],
  },
  {
    company: 'IBM-SkillsBuild',
    role: 'Data Analytics Intern',
    duration: '2025',
    location: 'Remote / India',
    points: [
      'Built Power BI dashboards over 15K+ customer feedback entries',
      'Surfaced 3 key churn drivers through statistical analysis',
      'Informed retention strategy projected to reduce churn by 18%',
      'Created automated reporting pipelines for stakeholders',
    ],
  },
]

export const TECH_STACK = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', level: 'Advanced', icon: SiPython, color: '#3776AB' },
      { name: 'C++', level: 'Intermediate', icon: SiCplusplus, color: '#00599C' },
      { name: 'JavaScript', level: 'Intermediate', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'SQL', level: 'Intermediate', icon: SiMysql, color: '#4479A1' },
      { name: 'Java', level: 'Intermediate', icon: SiOpenjdk, color: '#ED8B00' },
    ],
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'PyTorch', level: 'Advanced', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'TensorFlow', level: 'Intermediate', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'Keras', level: 'Intermediate', icon: SiKeras, color: '#D00000' },
      { name: 'Scikit-learn', level: 'Advanced', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'OpenCV', level: 'Advanced', icon: SiOpencv, color: '#5C3EE8' },
      { name: 'spaCy', level: 'Intermediate', icon: SiSpacy, color: '#09A3D5' },
      { name: 'Hugging Face', level: 'Intermediate', icon: SiHuggingface, color: '#FFD21E' },
      { name: 'Ollama', level: 'Intermediate', icon: SiOllama, color: '#FFFFFF' },
    ],
  },
  {
    category: 'Data & Analytics',
    items: [
      { name: 'Pandas', level: 'Advanced', icon: SiPandas, color: '#150458' },
      { name: 'NumPy', level: 'Advanced', icon: SiNumpy, color: '#013243' },
      { name: 'Matplotlib', level: 'Intermediate', icon: SiPlotly, color: '#11557C' },
      { name: 'Power BI', level: 'Intermediate', icon: SiPlotly, color: '#F2C811' },
    ],
  },
  {
    category: 'Backend & Databases',
    items: [
      { name: 'FastAPI', level: 'Advanced', icon: SiFastapi, color: '#009688' },
      { name: 'Flask', level: 'Intermediate', icon: SiFlask, color: '#FFFFFF' },
      { name: 'Node.js', level: 'Beginner', icon: SiNodedotjs, color: '#339933' },
      { name: 'PostgreSQL', level: 'Intermediate', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Redis', level: 'Intermediate', icon: SiRedis, color: '#DC382D' },
      { name: 'MongoDB', level: 'Beginner', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'Docker', level: 'Intermediate', icon: SiDocker, color: '#2496ED' },
      { name: 'Git / GitHub', level: 'Advanced', icon: SiGit, color: '#F05032' },
      { name: 'GitHub Actions', level: 'Intermediate', icon: SiGithubactions, color: '#2088FF' },
      { name: 'AWS', level: 'Beginner', icon: SiAmazon, color: '#FF9900' },
      { name: 'Google Cloud', level: 'Intermediate', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'Linux', level: 'Intermediate', icon: SiLinux, color: '#FCC624' },
    ],
  },
  {
    category: 'Hardware / Edge',
    items: [
      { name: 'ESP32', level: 'Intermediate', icon: SiEspressif, color: '#E7352C' },
      { name: 'TensorRT', level: 'Intermediate', icon: SiNvidia, color: '#76B900' },
      { name: 'Raspberry Pi', level: 'Beginner', icon: SiRaspberrypi, color: '#A22846' },
    ],
  },
]

export const PROFILES = [
  {
    platform: 'GitHub',
    username: 'BadalSharma007',
    link: 'https://github.com/BadalSharma007',
    stat: 'Repositories & Projects',
    icon: SiGithub,
    color: '#ffffff',
  },
  {
    platform: 'LinkedIn',
    username: 'badal-kr-sharma',
    link: 'https://linkedin.com/in/badal-kr-sharma-471a19263',
    stat: 'Professional Network',
    icon: SiLinkedin,
    color: '#0A66C2',
  },
  {
    platform: 'Twitter/X',
    username: '@Badal_kr_sharma',
    link: 'https://x.com/Badal_kr_sharma',
    stat: 'Tech Thoughts & Updates',
    icon: SiX,
    color: '#ffffff',
  },
  {
    platform: 'LeetCode',
    username: 'Badalkrsharma',
    link: 'https://leetcode.com/u/Badalkrsharma',
    stat: 'Rating: 1770 | Best Rank: 54',
    icon: SiLeetcode,
    color: '#FFA116',
  },
  {
    platform: 'Kaggle',
    username: 'badalkrsharma',
    link: 'https://kaggle.com/badalkrsharma',
    stat: 'Expert | 13 Badges',
    icon: SiKaggle,
    color: '#20BEFF',
  },
  {
    platform: 'Codeforces',
    username: 'Badal_07',
    link: 'https://codeforces.com/profile/Badal_07',
    stat: 'Rating: 1054',
    icon: SiCodeforces,
    color: '#1F8ACB',
  },
]


# ===== FILE: src/hooks/useScrollSpy.js =====
import { useState, useEffect } from 'react'

// Tracks which section is currently in view for navbar active state.
export default function useScrollSpy(sectionIds, offset = 120) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return active
}


# ===== FILE: src/components/common/SectionWrapper.jsx =====
import { motion } from 'framer-motion'

// Reusable scroll-triggered fade-up wrapper with section header.
export default function SectionWrapper({ id, label, heading, subheading, children, className = '' }) {
  return (
    <section id={id} className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(label || heading || subheading) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 text-center"
          >
            {label && (
              <p className="text-accent-light uppercase tracking-widest text-sm font-semibold mb-3">
                {label}
              </p>
            )}
            {heading && (
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                {subheading}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}


# ===== FILE: src/components/common/AnimatedCounter.jsx =====
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// Counts up from 0 to target when scrolled into view.
export default function AnimatedCounter({ value, suffix = '', duration = 1500 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let startTime = null
    let raf
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.floor(eased * value))
      if (progress < 1) raf = requestAnimationFrame(step)
      else setCount(value)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref} className="font-mono">
      {count}{suffix}
    </span>
  )
}


# ===== FILE: src/components/common/ParticleBackground.jsx =====
import { useEffect, useRef } from 'react'

// Lightweight canvas particle network for the hero background.
export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 18000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(96, 165, 250, 0.6)'
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dist = Math.hypot(p.x - q.x, p.y - q.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - dist / 120)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      animationId = requestAnimationFrame(draw)
    }

    resize()
    if (!prefersReduced) draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
    />
  )
}


# ===== FILE: src/components/ScrollProgress.jsx =====
import { motion, useScroll, useSpring } from 'framer-motion'

// Thin gradient progress bar fixed at the very top.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-accent-gradient z-[60]"
    />
  )
}


# ===== FILE: src/components/Navbar.jsx =====
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { NAV_LINKS, PROFILE } from '../data/content'
import useScrollSpy from '../hooks/useScrollSpy'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(NAV_LINKS.map((l) => l.href.replace('#', '')))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/30' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => handleClick('#home')}
            className="text-xl font-bold gradient-text tracking-tight"
          >
            BKS
          </button>

          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className={`text-sm transition-colors relative ${
                      isActive ? 'text-accent-light font-semibold' : 'text-txt-secondary hover:text-txt-primary'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-gradient rounded-full"
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PROFILE.resumeUrl}
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-accent-primary text-accent-light hover:bg-accent-primary/10 transition-colors"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          <button
            className="lg:hidden text-txt-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-lg lg:hidden flex flex-col items-center justify-center gap-6"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleClick(link.href)}
                className="text-2xl font-semibold text-txt-primary hover:text-accent-light transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <a
              href={PROFILE.resumeUrl}
              className="mt-4 flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-gradient font-medium"
            >
              <Download size={18} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


# ===== FILE: src/components/Hero.jsx =====
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { PROFILE, TYPING_PHRASES, SOCIALS } from '../data/content'
import ParticleBackground from './common/ParticleBackground'

// Typing effect hook.
function useTyping(phrases, typeSpeed = 90, deleteSpeed = 45, pause = 1400) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index % phrases.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        )
      }, deleting ? deleteSpeed : typeSpeed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, pause])

  return text
}

export default function Hero() {
  const typed = useTyping(TYPING_PHRASES)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <ParticleBackground />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl animate-glow-pulse pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12 items-center">
        {/* Left 60% */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3"
        >
          <p className="text-txt-secondary text-xl mb-3">Hey, I'm</p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight gradient-text mb-4 leading-none">
            {PROFILE.name}
          </h1>
          <div className="h-10 md:h-12 mb-6">
            <span className="text-2xl md:text-3xl font-semibold text-accent-light font-mono">
              {typed}
              <span className="inline-block w-[3px] h-7 md:h-8 bg-accent-light ml-1 align-middle animate-pulse" />
            </span>
          </div>
          <p className="text-txt-secondary text-base md:text-lg max-w-xl leading-relaxed mb-8">
            Building language models, computer vision systems, and agentic AI pipelines.
            B.Tech CSE (AI &amp; ML) at Sharda University.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={() => scrollTo('projects')}
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-gradient font-medium shadow-lg shadow-accent-primary/30 hover:shadow-accent-primary/50 hover:-translate-y-0.5 transition-all"
            >
              View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={PROFILE.resumeUrl}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-accent-primary text-accent-light hover:bg-accent-primary/10 transition-colors"
            >
              <Download size={18} /> Download Resume
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-2 px-2 py-3 text-txt-secondary hover:text-accent-light transition-colors"
            >
              <Mail size={18} /> Contact Me
            </button>
          </div>

          <div className="flex items-center gap-5">
            {SOCIALS.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-txt-secondary hover:text-accent-light hover:scale-125 transition-all"
                >
                  <Icon size={26} />
                </a>
              )
            })}
          </div>
        </motion.div>

        {/* Right 40% */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-2 flex justify-center"
        >
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
            {/* Rotating gradient ring */}
            <div className="absolute inset-0 rounded-full gradient-ring animate-spin-slow blur-[2px]" />
            <div className="absolute inset-[6px] rounded-full bg-bg-primary" />
            {/* Photo placeholder */}
            <div className="absolute inset-[10px] rounded-full overflow-hidden bg-bg-card flex items-center justify-center">
              {/* Replace src with your photo: <img src="/profile.jpg" .../> */}
              <span className="text-6xl font-bold gradient-text">BKS</span>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-2 -right-6 glass px-4 py-2 rounded-xl text-sm font-semibold text-success"
            >
              Kaggle Expert
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-4 -left-8 glass px-4 py-2 rounded-xl text-sm font-mono font-semibold text-accent-light"
            >
              LeetCode 1770
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute -bottom-2 right-0 glass px-4 py-2 rounded-xl text-sm font-mono font-semibold text-warning"
            >
              8.4 CGPA
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


# ===== FILE: src/components/About.jsx =====
import { motion } from 'framer-motion'
import SectionWrapper from './common/SectionWrapper'
import AnimatedCounter from './common/AnimatedCounter'
import { PROFILE, QUICK_FACTS, COUNTERS } from '../data/content'

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-bg-secondary/40">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-accent-primary/10 -rotate-2 bg-bg-card aspect-[4/5] flex items-center justify-center">
            {/* Replace with <img src="/about.jpg" className="w-full h-full object-cover" /> */}
            <span className="text-7xl font-bold gradient-text">BKS</span>
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-xl text-sm font-medium whitespace-nowrap shadow-lg">
            <span className="text-accent-light font-semibold">3+</span> Internships ·{' '}
            <span className="text-accent-light font-semibold">8+</span> Projects ·{' '}
            <span className="text-success font-semibold">Kaggle Expert</span>
          </div>
        </motion.div>

        {/* Right — text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-accent-light uppercase tracking-widest text-sm font-semibold mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
            Building AI that actually works in the real world
          </h2>
          <p className="text-txt-secondary leading-relaxed mb-8">{PROFILE.bio}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {QUICK_FACTS.map((fact) => (
              <div
                key={fact.text}
                className="glass rounded-xl p-4 flex items-start gap-3 hover:-translate-y-1 transition-transform"
              >
                <span className="text-2xl">{fact.emoji}</span>
                <span className="text-sm text-txt-primary leading-snug">{fact.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Counters */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
      >
        {COUNTERS.map((c) => (
          <div key={c.label} className="text-center glass rounded-2xl py-8 px-4">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              <AnimatedCounter value={c.value} suffix={c.suffix} />
            </div>
            <div className="text-txt-secondary text-sm">{c.label}</div>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}


# ===== FILE: src/components/Achievements.jsx =====
import { motion } from 'framer-motion'
import { ExternalLink, Trophy } from 'lucide-react'
import SectionWrapper from './common/SectionWrapper'
import { ACHIEVEMENTS, PLATFORM_STATS } from '../data/content'

const badgeColors = {
  success: 'text-success bg-success/10 border-success/30',
  warning: 'text-warning bg-warning/10 border-warning/30',
  accent: 'text-accent-light bg-accent-primary/10 border-accent-primary/30',
}

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      label="Achievements"
      heading="Competing at the highest level"
      subheading="From Kaggle leaderboards to national hackathons — results that speak"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="group relative glass rounded-2xl p-6 border-l-4 border-accent-primary hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-primary/20 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold pr-4 leading-snug">{a.name}</h3>
              <Trophy size={20} className="text-warning shrink-0" />
            </div>
            <div className="flex items-end gap-3 mb-3">
              <span className="text-3xl font-bold gradient-text font-mono">{a.rank}</span>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full border mb-1 ${badgeColors[a.badgeColor]}`}
              >
                {a.badge}
              </span>
            </div>
            {a.score && (
              <p className="text-sm text-accent-light font-mono mb-2">{a.score}</p>
            )}
            <p className="text-sm text-txt-secondary leading-relaxed">{a.techniques}</p>
            {a.link && a.link !== '#' && (
              <a
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-accent-light mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                View Details <ExternalLink size={14} />
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Platform stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
        {PLATFORM_STATS.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div
              key={`${s.platform}-${s.metric}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-xl p-4 text-center hover:-translate-y-1 transition-transform"
            >
              <Icon size={24} className="mx-auto mb-2 text-accent-light" />
              <div className="text-2xl font-bold font-mono text-success">{s.value}</div>
              <div className="text-xs text-txt-secondary mt-1">{s.platform} · {s.metric}</div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}


# ===== FILE: src/components/Projects.jsx =====
import { motion } from 'framer-motion'
import { Github, ExternalLink, Lock, ArrowRight } from 'lucide-react'
import SectionWrapper from './common/SectionWrapper'
import { PROJECTS } from '../data/content'

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      label="Projects"
      heading="Things I've built"
      subheading="From LLMs running on microcontrollers to production email assistants"
      className="bg-bg-secondary/40"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="group glass rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-primary/20 transition-all flex flex-col"
          >
            {/* Image placeholder 16:9 */}
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-bg-card to-bg-secondary flex items-center justify-center">
              <span className="text-3xl font-bold gradient-text group-hover:scale-105 transition-transform">
                {p.name}
              </span>
              <span className="absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full bg-accent-primary/80 text-white backdrop-blur">
                {p.category}
              </span>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-sm text-txt-secondary leading-relaxed mb-3 flex-1">
                {p.description}
              </p>
              {p.highlight && (
                <p className="text-xs font-medium text-warning mb-4">{p.highlight}</p>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full border border-line text-txt-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2 border-t border-line/50">
                {p.privateRepo ? (
                  <span className="flex items-center gap-1.5 text-sm text-txt-secondary">
                    <Lock size={15} /> Private Repository
                  </span>
                ) : p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-txt-secondary hover:text-accent-light transition-colors"
                  >
                    <Github size={15} /> GitHub
                  </a>
                ) : null}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-accent-light hover:text-accent-secondary transition-colors"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/BadalSharma007?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent-primary text-accent-light hover:bg-accent-primary/10 transition-colors font-medium"
        >
          View All on GitHub
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </SectionWrapper>
  )
}


# ===== FILE: src/components/Experience.jsx =====
import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import SectionWrapper from './common/SectionWrapper'
import { EXPERIENCES } from '../data/content'

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      heading="Where I've worked"
      subheading="From telecom giants to government initiatives — real-world AI deployment"
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent" />

        <div className="space-y-10">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-16"
            >
              {/* Dot */}
              <div className="absolute left-0 top-1 w-12 h-12 rounded-full glass flex items-center justify-center border border-accent-primary/40">
                <Briefcase size={20} className="text-accent-light" />
              </div>

              <div className="glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-primary/10 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <span className="text-sm font-mono text-txt-secondary">{exp.duration}</span>
                </div>
                <p className="text-accent-light font-medium mb-1">{exp.role}</p>
                <p className="flex items-center gap-1.5 text-xs text-txt-secondary mb-4">
                  <MapPin size={13} /> {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-txt-secondary leading-relaxed">
                      <span className="text-accent-secondary mt-1.5 shrink-0">▹</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}


# ===== FILE: src/components/TechStack.jsx =====
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './common/SectionWrapper'
import { TECH_STACK } from '../data/content'

const levelColor = {
  Advanced: 'text-success',
  Intermediate: 'text-accent-light',
  Beginner: 'text-txt-secondary',
}

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <SectionWrapper
      id="tech"
      label="Tech Stack"
      heading="Tools I use to build"
      subheading="From training transformers to deploying on edge devices"
      className="bg-bg-secondary/40"
    >
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {TECH_STACK.map((cat, i) => (
          <button
            key={cat.category}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === i
                ? 'bg-accent-gradient text-white shadow-lg shadow-accent-primary/30'
                : 'glass text-txt-secondary hover:text-txt-primary'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {TECH_STACK[activeTab].items.map((tech) => {
            const Icon = tech.icon
            return (
              <div
                key={tech.name}
                className="group glass rounded-xl p-5 flex flex-col items-center gap-3 hover:-translate-y-1 hover:shadow-lg transition-all cursor-default"
                title={`${tech.name} — ${tech.level}`}
              >
                <Icon size={36} style={{ color: tech.color }} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-center">{tech.name}</span>
                <span className={`text-xs font-mono ${levelColor[tech.level]}`}>{tech.level}</span>
              </div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  )
}


# ===== FILE: src/components/Profiles.jsx =====
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionWrapper from './common/SectionWrapper'
import { PROFILES } from '../data/content'

export default function Profiles() {
  return (
    <SectionWrapper
      id="profiles"
      label="Connect"
      heading="Find me across the web"
      subheading="Competing, coding, and sharing knowledge"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROFILES.map((p, i) => {
          const Icon = p.icon
          return (
            <motion.a
              key={p.platform}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group glass rounded-2xl p-6 hover:-translate-y-1.5 hover:border-accent-primary/60 hover:shadow-xl hover:shadow-accent-primary/20 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <Icon size={40} style={{ color: p.color }} />
                <ArrowUpRight
                  size={22}
                  className="text-txt-secondary group-hover:text-accent-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">{p.platform}</h3>
              <p className="text-sm font-mono text-accent-light mb-3">{p.username}</p>
              <p className="text-sm text-txt-secondary">{p.stat}</p>
            </motion.a>
          )
        })}
      </div>
    </SectionWrapper>
  )
}


# ===== FILE: src/components/Contact.jsx =====
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Send } from 'lucide-react'
import { PROFILE, SOCIALS } from '../data/content'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Visual-only: open mail client with prefilled content.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary/60 to-bg-primary pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="relative max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-txt-secondary text-lg mb-8">
          Open for internships, collaborations, and interesting AI projects
        </p>

        {/* Email copy */}
        <button
          onClick={copyEmail}
          className="inline-flex items-center gap-2 glass px-5 py-3 rounded-xl font-mono text-accent-light hover:-translate-y-0.5 transition-all mb-8"
        >
          {PROFILE.email}
          {copied ? <Check size={18} className="text-success" /> : <Copy size={18} />}
        </button>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-6 mb-12">
          {SOCIALS.map((s) => {
            const Icon = s.icon
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-txt-secondary hover:text-accent-light hover:scale-125 transition-all"
              >
                <Icon size={28} />
              </a>
            )
          })}
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 text-left space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-bg-primary/60 border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-bg-primary/60 border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-primary transition-colors"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-bg-primary/60 border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-primary transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent-gradient font-medium shadow-lg shadow-accent-primary/30 hover:shadow-accent-primary/50 hover:-translate-y-0.5 transition-all"
          >
            <Send size={18} /> Send Message
          </button>
        </form>
      </motion.div>
    </section>
  )
}


# ===== FILE: src/components/Footer.jsx =====
import { Heart } from 'lucide-react'
import { PROFILE } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-txt-secondary">
        <p>© 2026 {PROFILE.name}. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with <Heart size={14} className="text-accent-secondary" /> React + Vite + Tailwind + Framer Motion
        </p>
        <p>Deployed on GitHub Pages</p>
      </div>
    </footer>
  )
}


# ===== FILE: src/components/BackToTop.jsx =====
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-accent-gradient flex items-center justify-center shadow-lg shadow-accent-primary/40 hover:-translate-y-1 transition-transform"
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}


# ===== FILE: src/App.jsx =====
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Profiles from './components/Profiles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="bg-bg-primary text-txt-primary min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Experience />
        <TechStack />
        <Profiles />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}


# ===== FILE: .gitignore =====
node_modules
dist
dist-ssr
*.local
.DS_Store
.vscode/*
!.vscode/extensions.json
.env
.env.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*


# ===== FILE: .github/workflows/deploy.yml =====
# Automatic deployment to GitHub Pages on push to main.
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4


# ===== FILE: README.md =====
# Badal Kumar Sharma — Portfolio

Production-ready single-page portfolio built with React 18 + Vite + Tailwind CSS + Framer Motion.

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
