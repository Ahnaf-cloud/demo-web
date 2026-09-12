export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  accentColor: string;
  iconName: string;
  overview: string;
  objective: string;
  designApproach: string;
  toolsUsed: string[];
  finalConcept: string;
  tags: string[];
  deliverables: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  skillsLearned: string[];
  credentialId: string;
  description: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  type: string;
  highlights: string[];
}

export interface EducationItem {
  period: string;
  institution: string;
  field: string;
  status: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    description: string;
    level: string;
  }[];
}
