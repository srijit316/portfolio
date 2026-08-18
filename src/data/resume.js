// Single source of truth for site content. Edit here, not in components.

export const profile = {
  name: 'Srijit Banerjee',
  subtitle: 'Founder @ CaseMock  |  CS @ Davidson',
  location: 'Charlotte, NC',
  availability: 'Open to SWE + AI roles',
  email: 'srijit316@gmail.com',
  linkedin: 'https://linkedin.com/in/srijitbanerjee04',
  github: 'https://github.com/srijit316',
  resume: '/Srijit_Banerjee_Resume.pdf',
  headshot: '/headshot.jpg',
}

// The one line that replaces the old About blurb.
export const quote = {
  text: 'If, if, if ... doesn\u2019t exist.',
  author: 'Rafael Nadal',
}

// Nav links. Education is omitted on purpose: it sits directly under the quote
// at the top of the column, so a jump link to it buys nothing and a fifth item
// overflows the nav at mobile widths.
export const sections = [
  { id: 'experience', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'interests', label: 'Interests' },
]

export const projects = [
  {
    name: 'CaseMock',
    category: 'Voice AI',
    live: 'https://casemock.ai/',
    repo: null,
    blurb:
      'Consulting interview simulator with real-time voice interaction and an agentic evaluation pipeline that scores answers against consulting rubrics. 100+ users.',
    tags: ['Python', 'Gemini API', 'ElevenLabs', 'n8n', 'GCP'],
  },
  {
    name: 'Daily Research Digest',
    category: 'Agentic AI',
    live: 'https://srijit316.github.io/daily_research_digest/site/',
    repo: 'https://github.com/srijit316/daily_research_digest',
    blurb:
      'Autonomous news agent. A GitHub Actions cron fetches tech and sports stories from Hacker News, Reddit and RSS each morning; Claude Code dedupes, ranks and summarizes them; the digest publishes itself to GitHub Pages. No servers, no paid APIs.',
    tags: ['Python', 'Claude Code', 'GitHub Actions', 'RSS', 'Pages'],
  },
  {
    name: 'LangGraph Essay Writer',
    category: 'Agentic AI',
    live: 'https://langgraph-essay-writer.onrender.com',
    repo: 'https://github.com/srijit316/langgraph-essay-writer',
    blurb:
      'Cyclic agent that plans, researches, drafts, critiques and revises an essay. The Gradio UI exists to make graph engineering visible: checkpointing, interrupt-after-node, state inspection and time travel.',
    tags: ['Python', 'LangGraph', 'Gradio', 'Render'],
  },
  {
    name: 'build_gpt',
    category: 'Machine Learning',
    live: null,
    repo: 'https://github.com/srijit316/build_gpt',
    blurb:
      'A character-level transformer written from scratch in PyTorch — no nn.Transformer, no HuggingFace. Attention, residuals, layer norm and feedforward all spelled out across 6 blocks and 6 heads.',
    tags: ['Python', 'PyTorch', 'Transformers'],
  },
  {
    name: 'Basketball Win Probability',
    category: 'Machine Learning',
    live: null,
    repo: 'https://github.com/srijit316/Basketball-live-game-predictor',
    blurb:
      'Real-time win probability model for D1 men’s college basketball across 2500+ games, reaching 85% consistency with ESPN’s forecasts.',
    tags: ['Python', 'Pandas', 'Scikit-learn'],
  },
]

export const experience = [
  {
    org: 'CaseMock',
    mark: 'CM',
    role: 'Founder',
    location: 'Davidson, NC',
  availability: 'Open to SWE + AI roles',
    period: "Jan '26 – Present",
    points: [
      'Built a consulting interview simulator with real-time voice interaction and automated feedback, reaching 100+ users who lacked access to realistic interview prep.',
      'Designed an agentic evaluation pipeline using Gemini, ElevenLabs, and n8n to generate adaptive follow-ups and score responses against consulting-style rubrics.',
    ],
    tags: ['Python', 'Gemini API', 'ElevenLabs', 'n8n', 'GCP'],
  },
  {
    org: 'Seattle Orcas (Major League Cricket)',
    mark: 'SO',
    role: 'Data & Ops Intern',
    location: 'United States',
    period: "May '26 – Jul '26",
    points: [
      'Transformed a manual booking process (50-person roster) into a pipeline that triggers AI agents to book flights, hotel rooms, and daily transportation, saving over $10,000 in booking and cancellation fees.',
      'Coordinated player media commitments and brand sponsorship schedules against a shifting match and travel calendar, aligning partner obligations with player availability so the team met its sponsor commitments and kept key partners satisfied.',
    ],
    tags: ['AI Agents', 'Workflow Automation', 'Ops Tooling'],
  },
  {
    org: 'Deloitte',
    mark: 'D',
    role: 'Technology & Innovation Intern',
    location: 'Remote, India',
    period: "Jun '25 – Aug '25",
    points: [
      'Developed HTML training modules on Deloitte software assets, equipping 1000+ employees with key digital capabilities and accelerating digital adoption.',
      'Built a Python reporting tool to analyze asset adoption metrics from internal systems, letting managers monitor usage across 12 core assets.',
    ],
    tags: ['Python', 'HTML', 'Data Analysis'],
  },
  {
    org: 'Precisely',
    mark: 'P',
    role: 'Sales Engineer Intern',
    location: 'Burlington, MA',
    period: "Jun '24 – Aug '24",
    points: [
      'Built an employee onboarding automation in Python via REST APIs and Data 360 Analyze, speeding up the process 20x.',
      'Created demo videos to simplify Precisely’s product features, enabling 500+ clients to adopt the tools more effectively.',
    ],
    tags: ['Python', 'REST API', 'Data 360 Analyze'],
  },
]

export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'SQL', 'C', 'C#', 'JavaScript', 'R', 'HTML/CSS'] },
  { group: 'Frameworks', items: ['React', 'Node.js', 'LangGraph', 'Streamlit'] },
  {
    group: 'Libraries',
    items: ['NumPy', 'Pandas', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Matplotlib', 'BeautifulSoup', 'Selenium'],
  },
  { group: 'Tools', items: ['Git', 'GitHub Actions', 'Docker', 'AWS', 'Google Cloud', 'VS Code'] },
]

export const interests = [
  { name: 'Sports Fan', icon: 'trophy' },
  { name: 'Coffee', icon: 'coffee' },
  { name: 'Ultimate Frisbee', icon: 'disc' },
  { name: 'Cooking', icon: 'chefhat' },
]

export const education = {
  school: 'Davidson College',
  mark: 'DC',
  degree: 'Bachelor of Science in Computer Science, Economics minor',
  gpa: 'GPA: 3.91 / 4.00',
  period: 'Graduated May 2026',
}
