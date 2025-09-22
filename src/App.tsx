import { useState } from 'react';

import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  PhoneIcon,
  ArrowDownTrayIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import './index.css';

import ProfileImage from './assets/IMG_7606.jpeg';

import Project1Image from './assets/project-1-vcert.png';
import Project2Image from './assets/project-1-vcert.png';

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
  { name: 'React', description: 'Front-end library for building UI components.' },
  { name: 'Node.js', description: 'Back-end runtime environment using JavaScript.' },
  { name: 'SCORM/xAPI', description: 'Standards for e-learning content tracking.' },
  { name: 'Docker', description: 'Containerization and deployment of apps.' },
  { name: 'Adobe Suite', description: 'Photoshop, Illustrator, Animate CC, After Effects, Premiere Pro.' },
  { name: 'Storyline/Rise/Captivate', description: 'eLearning authoring tools for interactive training.' },
  { name: 'Google Cloud / AWS / Azure', description: 'Cloud development and deployment.' },
  { name: 'PostgreSQL / SQL / JSON', description: 'Database and data management technologies.' },
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
  const [skillPopup, setSkillPopup] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto">
      {/* Header */}
      <header className="text-center mb-12">
        <div className="mx-auto w-32 h-32 rounded-full border-4 border-theme overflow-hidden mb-4 shadow-lg">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-32 h-32 object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 theme-text">Daniel Gutensohn</h1>
        <p className="flex justify-center items-center gap-2"><PhoneIcon className="w-5 h-5" /> 330-617-6756</p>
        <p className="flex justify-center items-center gap-2"><EnvelopeIcon className="w-5 h-5" /> dgutensohn@icloud.com</p>
        <p className="mt-4 max-w-xl mx-auto text-gray-700">
          Creative, adaptable full-stack developer with an eye for design and a passion for solving complex problems.
        </p>
        <a
          href="https://docs.google.com/document/d/1pNjtAP6pkoGphC8RW4Vq3Z41L-wc9hr3PGGzFL8p4J0/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-theme hover:bg-theme-hover text-button rounded font-semibold shadow-md"
        >
          <ArrowDownTrayIcon className="w-5 h-5" /> Download Resume
        </a>
      </header>

      {/* Skills */}
      <section className="bg-alt shadow rounded-lg p-6 mb-12">
        <h2 className="text-2xl mb-4 border-b pb-2 theme-text font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map(skill => (
            <div key={skill.name} className="relative">
              <button
                onClick={() => setSkillPopup(skillPopup === skill.name ? null : skill.name)}
                className="bg-theme text-button px-4 py-2 rounded hover:bg-theme-hover flex items-center gap-1 font-medium shadow transition"
                aria-label={skill.name}
              >
                {skill.name}
              </button>
              {skillPopup === skill.name && (
                <div className="popup absolute top-full mt-2 w-64 bg-popup-bg text-gray-800 text-sm rounded p-3 shadow-lg border border-gray-200 animate-fadeIn">
                  {skill.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

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
      {modalProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-alt rounded-lg p-6 max-w-lg w-full relative shadow-lg animate-fadeIn overflow-y-auto max-h-[90vh]">
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setModalProject(null)}
              aria-label="Close modal"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold mb-2">{modalProject.title}</h3>
            <img
              src={modalProject.thumbnail}
              alt={modalProject.title}
              className="w-full h-48 object-cover"
            />
            <div className="mb-4">{modalProject.fullDescription}</div>
            <div className="flex justify-between">
              <a
                href={modalProject.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-theme hover:bg-theme-hover text-button px-4 py-2 rounded font-semibold"
              >
                <CodeBracketIcon className="w-5 h-5" /> Repo
              </a>
              <a
                href={modalProject.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-theme hover:bg-theme-hover text-button px-4 py-2 rounded font-semibold"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5" /> Demo
              </a>
            </div>
          </div>
        </div>
      )}

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
    </div>
  );
}
