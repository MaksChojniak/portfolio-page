export interface Project {
  id: string
  lang: string
  name: string
  desc: string
  stars?: string | null
  license?: string | null
  url?: string | null
  downloads?: string | null
}

export interface Docs{
  fallback: DocSection
  docSections: DocSection[]
}

export interface DocItem {
  id: string
  label: string
  title: string
  breadcrumb: string
  updated: string
  content: string
}

export interface DocSection {
  group: string
  items: DocItem[]
}


export const projects: Project[] = [
  { id: 'blocky-patrol', lang: 'Unity · Android', name: 'Blocky Patrol', downloads: '5k', url: 'https://play.google.com/store/apps/details?id=com.MMK.BlockyPatrol', desc: 'Voxel-style tower defense game on Google Play with wave-based combat, tower upgrades, and a clean low-poly aesthetic.' },
  { id: 'iso-racer', lang: 'Unity · Windows', name: 'ISO Racer', downloads: '1k', url: 'https://store.steampowered.com/app/2234020/Iso_Racer/', desc: 'Isometric racing game on Steam featuring drift physics, multiplayer, BUSTED mode, and customizable cars and tracks.' },
  { id: 'llm-router',  lang: 'Python · AI',       name: 'llm-router',  stars: '2.1k', license: 'MIT',        desc: 'Intelligent request routing across LLM providers with latency-aware fallback strategies.' },
  // { id: 'promptkit',   lang: 'TypeScript · CLI',   name: 'promptkit',   stars: '840',  license: 'MIT',        desc: 'Composable prompt engineering toolkit with versioning, evaluation, and diff tooling.' },
  // { id: 'vecstore',    lang: 'Rust · Infra',       name: 'vecstore',    stars: '310',  license: 'Apache 2.0', desc: 'Minimal, embeddable vector store with HNSW indexing and zero external deps.' },
  // { id: 'chain-eval',  lang: 'Python · Data',      name: 'chain-eval',  stars: '190',  license: 'MIT',        desc: 'End-to-end evaluation harness for LLM pipeline outputs with statistical aggregation.' },
  // { id: 'docfetch',    lang: 'Go · Tooling',       name: 'docfetch',    stars: '120',  license: 'MIT',        desc: 'Fast documentation scraper and offline indexer with semantic search support.' },
  // { id: 'tokenwatch',  lang: 'Python · ML',        name: 'tokenwatch',  stars: '88',   license: 'MIT',        desc: 'Real-time token usage monitor and cost estimator for multi-turn LLM applications.' },
]

export const home = {
  stats: [
    { num: projects.length,   sup: projects.length > 6 ?'+' : '',   label: 'open source repos' },
    { num: '0',               sup: '',                             label: 'GitHub stars' },
    { num: 'AI',              sup: '/ML',                           label: 'primary focus' },
  ]
}

export const docs: Docs = {
  fallback: {
    group: 'base',
    items: [
      {
        id: 'base', label: 'empty', title: 'empty',
        breadcrumb: 'empty', updated: 'N/A',
        content: `<h2>docs is empty</h2><p>This documentation is empty This documentation is empty This documentation is empty This documentation is empty This documentation is empty</p>`,
      },
    ],
  },
  docSections: [
    // {
    //   group: 'getting started',
    //   items: [
    //     {
    //       id: 'intro', label: 'introduction', title: 'introduction',
    //       breadcrumb: 'getting started', updated: 'jan 2025 · 3 min read',
    //       content: `<h2>overview</h2><p>This documentation covers all open source projects by Maksymilan Chojniak. Each project is designed to be minimal, composable, and well-documented.</p><p>All libraries follow a shared philosophy: zero magic, explicit configuration, and first-class developer experience.</p><pre><code><span class="cm"># Python</span>\n<span class="kw">pip install</span> llm-router promptkit chain-eval\n\n<span class="cm"># Node</span>\n<span class="kw">npm install</span> <span class="str">@mchojniak/promptkit</span></code></pre>`,
    //     },
    //     {
    //       id: 'install', label: 'installation', title: 'installation',
    //       breadcrumb: 'getting started', updated: '2025',
    //       content: `<h2>requirements</h2><p>Python 3.10+ is required for all Python packages.</p><pre><code><span class="kw">pip install</span> llm-router\n<span class="cm"># or with all extras</span>\n<span class="kw">pip install</span> llm-router[all]</code></pre>`,
    //     },
    //     {
    //       id: 'quickstart', label: 'quickstart', title: 'quickstart',
    //       breadcrumb: 'getting started', updated: '2025',
    //       content: `<h2>5-minute setup</h2><pre><code><span class="kw">from</span> llm_router <span class="kw">import</span> Router\nr = Router([<span class="str">"openai"</span>, <span class="str">"anthropic"</span>])\nr.chat(<span class="str">"hello world"</span>)</code></pre>`,
    //     },
    //   ],
    // },
    // {
    //   group: 'llm-router',
    //   items: [
    //     {
    //       id: 'config', label: 'configuration', title: 'configuration',
    //       breadcrumb: 'llm-router', updated: '2025',
    //       content: `<h2>config file</h2><p>Router accepts a YAML or Python dict config.</p><pre><code>providers:\n  - name: <span class="str">openai</span>\n    model: <span class="str">gpt-4o</span>\n    weight: <span class="str">0.7</span></code></pre>`,
    //     },
    //     {
    //       id: 'providers', label: 'providers', title: 'providers',
    //       breadcrumb: 'llm-router', updated: '2025',
    //       content: `<h2>supported providers</h2><p>OpenAI, Anthropic, Cohere, Mistral, and any OpenAI-compatible endpoint.</p>`,
    //     },
    //     {
    //       id: 'fallback', label: 'fallback logic', title: 'fallback logic',
    //       breadcrumb: 'llm-router', updated: '2025',
    //       content: `<h2>fallback strategies</h2><p>Latency-based, cost-based, or custom scoring functions for automatic failover.</p>`,
    //     },
    //   ],
    // },
    // {
    //   group: 'promptkit',
    //   items: [
    //     {
    //       id: 'templates', label: 'templates', title: 'templates',
    //       breadcrumb: 'promptkit', updated: '2025',
    //       content: `<h2>template syntax</h2><p>Promptkit uses Jinja2-compatible syntax with added LLM-specific helpers.</p><pre><code><span class="str">"Summarize: {{ text }}"</span></code></pre>`,
    //     },
    //     {
    //       id: 'eval', label: 'evaluation', title: 'evaluation',
    //       breadcrumb: 'promptkit', updated: '2025',
    //       content: `<h2>running evals</h2><p>Compare prompt versions across datasets with automatic statistical scoring.</p>`,
    //     },
    //   ],
    // },
  ]
}

export const about = {
  bio: 'AI Software Engineer based in Poland. I build open source tools, applications and games.',
  stack: ['Python', 'C#', 'C++', 'SQL', 'SciKit', 'Unity', '.NET', 'Firebase', 'Steamworks', 'Google Play', 'Docker', 'NUnit', 'XUnit'],
  focus: ['ML', 'AI agents', 'API design'],
  education: [
    // { 
    //   degree: 'M.Sc. Computer Science', 
    //   school: 'Warsaw University of Technology',      years: '2021 - 2023',         note: 'ML & AI', 
    //   transcript: 'https://...' 
    // },
    // { 
    //   degree: 'B.Sc. Applied Computer Science and Artificial Intelligence', 
    //   school: 'Sapienza University of Rome',          years: '2026 - present',      note: 'Erasmus+ program', 
    //   transcript: 'https://...' 
    // },
    { 
      degree: 'B.Sc. Artificial Intelligece',   
      school: 'Czestochowa University of Technology',   years: '2026 - present',    note: 'Transferred from CS',
      transcript: '/assets/resume/transcript/transcript-of-records-ai.pdf' 
    },
    { 
      degree: 'B.Sc. Computer Science',         
      school: 'Czestochowa University of Technology',   years: '2024 - 2026',         note: null as string | null,
      transcript: '/assets/resume/transcript/transcript-of-records-cs.pdf' 
    },
  ],
  certifications: [
    { 
      badge: 'GCP',   name: 'Introduction to Generative AI',      issuer: 'Google · 2025',
      link: '/assets/certificates/google_gen_ai_certificate.pdf' 
    },
    { 
      badge: 'HR',    name: 'Problem Solving - Intermediate',     issuer: 'HackerRank · 2025',
      link: 'https://www.hackerrank.com/certificates/28f6f760921a' 
    },
    { 
      badge: 'CB',    name: 'C++ - Basic',                        issuer: 'CppBuzz · 2025',
      link: '/assets/certificates/cppbuzz-cpp-certificate.pdf' 
    },
    { 
      badge: 'HR',    name: 'C# - Basic',                         issuer: 'HackerRank · 2023',
      link: 'https://www.hackerrank.com/certificates/ebd54a7fa872' 
    },
  ],
  timeline: [
    // { year: '2026', text: 'started Erasmus+ program at Sapienza' },
    { year: '2026', text: 'changed B.Sc. major to AI' },
    { year: '2024', text: 'started B.Sc. CS at PCz' },
  ],
  contact: [
    { label: 'github',   value: '@makschojniak' },
    { label: 'email',    value: 'maksgamedev@gmail.com' },
    { label: 'linkedIn',  value: '@maksymilian-chojniak' },
    { label: 'location', value: 'Warsaw, PL' },
  ],
}
