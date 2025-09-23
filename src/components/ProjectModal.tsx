import type { FC } from 'react';
import { useEffect } from 'react';

import Modal from './Modal';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface Project {
  title: string;
  thumbnail: string;
  fullDescription?: JSX.Element;
  repoLink: string;
  liveDemoLink: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-3xl">
      <div className="flex flex-col max-h-[90vh] overflow-hidden rounded-lg shadow-xl bg-white">
        {/* Image header with hover zoom */}
        <div className="relative w-full h-full overflow-hidden rounded-t-lg shadow-lg">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
        <button
        aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg transition transform hover:scale-110"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>

        {/* Scrollable content */}
        <div className="p-6 overflow-y-auto">
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          <div className="mb-4 text-gray-700 space-y-4">{project.fullDescription}</div>

          <div className="flex flex-wrap gap-2 mt-4">
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-theme hover:bg-theme-hover text-button px-4 py-2 rounded font-semibold shadow-md"
            >
              <CodeBracketIcon className="w-5 h-5" /> Repo
            </a>
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-theme hover:bg-theme-hover text-button px-4 py-2 rounded font-semibold shadow-md"
            >
              <ArrowTopRightOnSquareIcon className="w-5 h-5" /> Demo
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
