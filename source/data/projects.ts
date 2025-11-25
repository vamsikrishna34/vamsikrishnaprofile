
export interface Project {
  id: string;
  title: string;
  period: string;
  type: 'Academic' | 'Personal';
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 'fake-msg',
    title: 'Encountering Fake Messages from Text or Image',
    period: 'Aug–Oct 2022',
    type: 'Academic',
    description: 'Dual-input ML pipeline to detect spam in text and images using OCR + supervised models, achieving 98.56% accuracy on 5,500+ samples.',
    technologies: ['Python', 'EasyOCR', 'SVM', 'Logistic Regression', 'KNN'],
    highlights: [
      'Built hybrid ML-OCR model for multi-modal spam detection',
      'Co-authored peer-reviewed publication on secure messaging applications',
      'Validated on real-world samples for content filtering robustness'
    ]
  },
  {
    id: 'insightalert',
    title: 'InsightAlert – Meeting Summarizer & Action Item Extractor',
    period: 'Jan–Feb 2025',
    type: 'Personal',
    description: 'NLP tool to summarize meeting transcripts and extract action items with >90% precision using fine-tuned T5 and DistilBART.',
    technologies: ['Python', 'Hugging Face', 'T5', 'DistilBART', 'Gradio', 'Regex'],
    demoUrl: 'https://huggingface.co/spaces/YOUR_USERNAME/insightalert',
    highlights: [
      'Preprocessing improved multi-speaker transcript quality by ~40%',
      'Dual-output generation: concise summary + structured action items',
      'Validated across 5+ meeting formats for consistency and adaptability'
    ]
  },
  {
    id: 'autopromptx',
    title: 'AutoPromptX – GenAI Prompt Engineering & Orchestration Toolkit',
    period: 'Apr–May 2025',
    type: 'Personal',
    description: 'Modular CLI and web toolkit for designing, testing, and chaining GPT prompts with real-time agent orchestration.',
    technologies: ['Python', 'FastAPI', 'T5', 'Docker', 'LangChain', 'Bootstrap 5', 'GitHub Pages'],
    githubUrl: 'https://github.com/YOUR_USERNAME/autopromptx',
    demoUrl: 'https://YOUR_USERNAME.github.io/autopromptx',
    highlights: [
      'Multi-agent workflow: summarizer, reviewer, persona simulation',
      'Fallback via semantic similarity (SBERT) + regex heuristics',
      'Dockerized backend on Hugging Face; frontend served via GitHub Pages'
    ]
  },
  {
    id: 'stratomind',
    title: 'StratoMind – AI-Powered Strategy Assistant',
    period: 'Aug–Sep 2025',
    type: 'Personal',
    description: 'Converts CSV/PDF/DOCX into recruiter-ready insights using LangChain RAG, LangGraph, and Streamlit.',
    technologies: ['Python', 'LangChain', 'LangGraph', 'RAG', 'Streamlit', 'XGBoost', 'Apache Spark', 'ETL'],
    highlights: [
      'Schema-agnostic ETL pipeline with null-safe, demo-resilient logic',
      'Modular UI with onboarding clarity and explainable prediction overlays',
      'Designed for strategic analysis and structured data extraction'
    ]
  },
  {
    id: 'regulens',
    title: 'ReguLens — AI-Powered Regulatory Compliance Assistant',
    period: 'Nov 2025–Present',
    type: 'Personal',
    description: 'Interpretable compliance system using XGBoost for gap detection and RAG (Phi-3 + ChromaDB) for remediation, avoiding black-box LLMs.',
    technologies: ['Python', 'XGBoost', 'RAG', 'LangGraph', 'Streamlit', 'Spring Boot', 'Java', 'Kafka'],
    highlights: [
      'Legal-aware feature engineering via Regex/AST on SEC/GDPR clauses',
      'Zero-cost MLOps: Spring Boot + Kafka + CI/CD + drift monitoring',
      'Evidence-tracing UI for auditor credibility and explainable outputs'
    ]
  }
];