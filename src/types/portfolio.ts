export type ProjectCategory = 'all' | 'saas' | 'ai' | 'performance' | 'mobile';

export interface EcosystemBadge {
  label: string;
  type: 'healthtech' | 'initiative' | 'engineering';
}

export interface MetricHighlight {
  value: string;
  label: string;
}

export interface ProjectLinks {
  github?: string;
  liveDemo?: string;
  previewNote?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'saas' | 'ai' | 'performance' | 'mobile';
  ecosystemBadge: EcosystemBadge;
  contextAndProblem: string;
  engineeringChallenge: string;
  technicalSolution: string[];
  impactAndResults: string[];
  techStack: string[];
  highlightMetric?: MetricHighlight;
  links?: ProjectLinks;
}

export interface OpenSourceRepo {
  name: string;
  description: string;
  repoUrl: string;
  techStack: string[];
  highlight: string;
}

export interface ImpactMetric {
  id: string;
  metric: string;
  label: string;
  category: string;
  description: string;
  highlight: string;
  context: string;
  codeSnippet?: string;
}

export interface Experience {
  id: string;
  indexNumber: string;
  companyName: string;
  companyUrl?: string;
  companyLogo?: string;
  role: string;
  domain: string;
  period: string;
  periodNotice?: string;
  overview: string;
  keyDeliveries: string[];
  architecturalHighlights: string[];
  techStack: string[];
}

export interface SkillItem {
  name: string;
  isCore: boolean;
  context?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  status: string;
  year: string;
  languages?: string;
  institutionNotice?: string;
  highlights: string[];
}

export interface ProfileData {
  name: string;
  fullName: string;
  title: string;
  roleSummary: string;
  location: string;
  yearsOfExperience: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  avatarUrl: string;
  statusText: string;
  bioParagraphs: string[];
  pillars: Array<{
    title: string;
    subtitle: string;
    description: string;
    icon: string;
  }>;
  quickQualifications?: Array<{
    label: string;
    value: string;
  }>;
  dataTransparencyNote?: {
    title: string;
    description: string;
    editablePath: string;
    verifiedFields: string[];
    editableFields: string[];
  };
}
