import { useState } from 'react';
import ContactCard from './components/ContactCard';
import DocumentModal from './components/DocumentModal';
// import { FaFilePdf } from 'react-icons/fa';
// import ResumeIcon from './components/ResumeIcon';
import Skills from './components/Skills';
import SkillsModal from './components/SkillsModal';
import Header from './components/Header';

// import Modal from './components/Modal';
import ProjectModal from './components/ProjectModal';
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  PhoneIcon,
  ArrowDownTrayIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import './index.css';

import Project1Image from './assets/project-1-vcert.png';
import Project2Image from './assets/project-1-vcert.png';
import Footer from './components/Footer';

interface Project {
  title: string;
  thumbnail: string;
  description: string;
  fullDescription?: JSX.Element;
  repoLink: string;
  liveDemoLink: string;
}

type Experience = {
  title: string;
  period: string;
  responsibilities: string[];
};

const projects: Project[] = [
  {
    title: 'VCert Training Platform',
    thumbnail: Project1Image,
    description: 'Fast-paced learning challenges for VCERT Certified Sellers.',
    fullDescription: (
      <div className="text-gray-700 space-y-4">
        <p>
          <strong>VCERT Performance+</strong> is a dynamic, web-based learning platform designed to enhance the skills of VCERT Certified Sellers through interactive challenges and real-time performance tracking.
        </p>
        <h4 className="font-semibold">Built With</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>HTML5, CSS3 (Flexbox/Grid), JavaScript for front-end UI</li>
          <li>Firebase Authentication for secure sign-in</li>
          <li>Firebase Firestore for real-time user data and analytics</li>
          <li>Firebase Hosting for deployment and performance monitoring</li>
        </ul>
        <h4 className="font-semibold">Key Features</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Interactive weekly challenges with points, badges, and leaderboard</li>
          <li>Responsive design for desktop and mobile</li>
          <li>User progress tracking and analytics dashboard</li>
          <li>Clean and intuitive interface for high engagement</li>
        </ul>
      </div>
    ),
    repoLink: '#',
    liveDemoLink: 'https://lhtclients.com/Projects/Valvoline/VCert/2024/dev/',
  },
  {
    title: 'Project Two',
    description: 'Example project description for Project Two.',
    thumbnail: Project2Image,
    repoLink: '#',
    liveDemoLink: '#',
  },
];

const skills = [
  {
    name: 'React',
    description: 'Front-end library for building UI components.',
    level: 'Advanced',
    icon: '⚛️',
    links: [
      { label: 'Official Docs', url: 'https://reactjs.org/' },
      { label: 'VCert Project', url: 'https://lhtclients.com/Projects/Valvoline/VCert/2024/dev/' },
    ],
  },
  {
    name: 'Node.js',
    description: 'Back-end runtime environment using JavaScript.',
    level: 'Advanced',
    icon: '🟢',
    links: [
      { label: 'Official Docs', url: 'https://nodejs.org/' },
    ],
  },
  {
    name: 'SCORM/xAPI',
    description: 'Standards for e-learning content tracking and reporting.',
    level: 'Advanced',
    icon: '📚',
    links: [
      { label: 'xAPI Reference', url: 'https://xapi.com/' },
      { label: 'SCORM Guide', url: 'https://scorm.com/' },
    ],
  },
  {
    name: 'Docker',
    description: 'Containerization and deployment of applications.',
    level: 'Intermediate',
    icon: '🐳',
    links: [
      { label: 'Docker Docs', url: 'https://docs.docker.com/' },
    ],
  },
  {
    name: 'Adobe Suite',
    description: 'Photoshop, Illustrator, Animate CC, After Effects, Premiere Pro.',
    level: 'Advanced',
    icon: '🎨',
  },
  {
    name: 'Storyline/Rise/Captivate',
    description: 'eLearning authoring tools for interactive training modules.',
    level: 'Advanced',
    icon: '📖',
  },
  {
    name: 'Google Cloud / AWS / Azure',
    description: 'Cloud development, deployment, and serverless solutions.',
    level: 'Intermediate',
    icon: '☁️',
  },
  {
    name: 'PostgreSQL / SQL / JSON',
    description: 'Database management and structured/unstructured data handling.',
    level: 'Advanced',
    icon: '🗄️',
  },
];


const experience: Experience[] = [
  {
    title: 'Lead Developer - LHT Learning',
    period: '2019 - Present',
    responsibilities: [
      'Delivered interactive online training to 50,000+ users across 50+ countries',
      'Built custom LRS and analytics dashboards using React, Google Cloud Functions, Postgres SQL, Microsoft OAuth, and Docker',
      'Implemented SCORM (1.2 & 2004), xAPI, and AICC-compliant solutions across platforms',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    title: 'Web Developer & Graphic Designer - Xcelerate Media',
    period: '2013 - 2019',
    responsibilities: [
      'Designed responsive, mobile-first user interfaces with attention to UX/UI principles, SEO, and accessibility',
      'Integrated custom APIs and multi-format content (HTML, Flash, WebGL)',
      'Conducted cross-platform testing and designed UI elements to enhance engagement',
    ],
  },
];

const education = [
  {
    degree: "Bachelor's in Computer Science",
    institution: 'Kent State University | Kent, Ohio',
    year: 2013,
    focus: 'Programming, Graphic Design, Web Design',
  },
  {
    degree: 'Associate Degree in Computer Information Technology',
    institution: 'Kent State University | Kent, Ohio',
    year: 2009,
    focus: 'Computer Assembly & Networking',
  },
];

export default function App() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="">
      {/* Header */}
<Header />

<div className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto">
{/* Skills */}

<Skills skills={skills} onSkillClick={(skill) => setActiveSkill(skill)} />

<SkillsModal
  skill={activeSkill}
  isOpen={!!activeSkill}
  onClose={() => setActiveSkill(null)}
/>



      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2 theme-text">Experience</h2>
        <div className="space-y-6">
          {experience.map(exp => (
            <div key={exp.title} className="card p-4 animate-fadeIn">
              <h3 className="text-xl font-bold theme-text">{exp.title}</h3>
              <p className="text-gray-600 italic mb-2">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-theme rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">{resp}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12 bg-alt shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 theme-text">Education</h2>
        <ul className="space-y-4">
          {education.map(edu => (
            <li key={edu.degree} className="text-gray-700">
              <p className="font-bold">{edu.degree}</p>
              <p>{edu.institution} — {edu.year}</p>
              <p className="italic">{edu.focus}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Portfolio Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2 theme-text">Portfolio Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map(proj => (
            <div
              key={proj.title}
              className="card overflow-hidden cursor-pointer flex-shrink-0 rounded-lg shadow hover:shadow-xl w-[320px] h-[420px]"
              onClick={() => setModalProject(proj)}
            >
              <img
                src={proj.thumbnail}
                alt={proj.title}
                className="w-full h-48 object-cover project-thumbnail"
              />
              <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-gray-700 mb-4">{proj.description}</p>
                <div className="flex justify-between mt-auto">
                  <a
                    href={proj.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-theme hover:bg-theme-hover text-button px-4 py-2 rounded font-semibold"
                  >
                    <CodeBracketIcon className="w-5 h-5" /> Repo
                  </a>
                  <a
                    href={proj.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-theme hover:bg-theme-hover text-button px-4 py-2 rounded font-semibold"
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
  project={modalProject}
  isOpen={!!modalProject}
  onClose={() => setModalProject(null)}
/>





      {/* Contact Form */}
      <section className="mb-12 bg-alt shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2 theme-text">Contact Me</h2>
        <form className="space-y-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-theme transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-theme transition"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-theme transition"
          />
          <button
            type="submit"
            className="flex items-center gap-2 bg-theme hover:bg-theme-hover text-button px-6 py-3 rounded font-semibold mx-auto shadow-md transition"
          >
            <EnvelopeIcon className="w-5 h-5" /> Send Message
          </button>
        </form>
      </section>
      <Footer />
<div id="modal-root"></div>
</div></div>
    
  );
}
