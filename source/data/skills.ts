
export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    name: 'Programming & Databases',
    skills: ['Python (Advanced)', 'Java', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    name: 'Generative AI & NLP',
    skills: [
      'LangChain', 'LangGraph', 'RAG', 'Hugging Face Transformers',
      'T5', 'DistilBART', 'Phi-3', 'Prompt Engineering', 'Regex', 'AST Parsing'
    ]
  },
  {
    name: 'Machine Learning & Data',
    skills: [
      'PyTorch', 'TensorFlow', 'XGBoost', 'Scikit-learn',
      'Pandas', 'NumPy', 'Apache Spark', 'ETL', 'A/B Testing'
    ]
  },
  {
    name: 'Backend & APIs',
    skills: [
      'FastAPI', 'Flask', 'Django', 'Spring Boot',
      'RESTful APIs', 'Apache Kafka', 'Microservices'
    ]
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      'AWS (S3, Lambda, EC2)', 'Docker', 'GitHub Actions',
      'CI/CD Pipelines', 'Hugging Face Spaces'
    ]
  },
  {
    name: 'Frontend & Tools',
    skills: [
      'Streamlit', 'Gradio', 'HTML/CSS', 'Bootstrap 5',
      'Power BI', 'VS Code', 'Jupyter'
    ]
  },
  {
    name: 'Software Engineering',
    skills: [
      'OOP', 'Modular Architecture', 'Agile (Scrum)',
      'Unit Testing (pytest)', 'Git'
    ]
  }
];