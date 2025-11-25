// src/data/publications.ts
export interface Publication {
  title: string;
  venue: string;
  year: number;
  description: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    title: 'Encountering Fake Messages from Text or Image Using Machine Learning',
    venue: 'Peer-Reviewed Academic Paper',
    year: 2022,
    description: 'Introduced a hybrid ML-OCR model to detect spam in both textual and visual formats; achieved 98.56% accuracy on 5,500+ samples.',
    // link: 'https://...' // add if available
  },
  {
    title: 'Automatic Language Identification and Conversion System',
    venue: 'IJRAR, Volume 10, Issue 2',
    year: 2023,
    description: 'Developed a system for real-time language detection and conversion using NLP and machine learning models.',
    // link: 'https://ijrar.org/...' 
  }
];