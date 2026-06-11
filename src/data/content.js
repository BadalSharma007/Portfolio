// Centralized content — edit your data here.
import {
  SiGithub, SiX, SiLeetcode, SiKaggle, SiCodeforces,
  SiPython, SiCplusplus, SiMysql, SiOpenjdk,
  SiPytorch, SiTensorflow, SiKeras, SiScikitlearn, SiOpencv, SiSpacy, SiHuggingface, SiOllama,
  SiPandas, SiNumpy, SiPlotly,
  SiFastapi, SiFlask, SiNodedotjs, SiPostgresql, SiRedis, SiMongodb,
  SiDocker, SiGit, SiGithubactions, SiGooglecloud, SiLinux,
  SiEspressif, SiNvidia, SiRaspberrypi,
} from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'

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
  { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://linkedin.com/in/badal-kr-sharma-471a19263' },
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
      { name: 'AWS', level: 'Beginner', icon: SiGooglecloud, color: '#FF9900' },
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
    icon: FaLinkedinIn,
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
