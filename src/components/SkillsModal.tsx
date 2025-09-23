import { FC } from 'react';
import Modal from './Modal';

interface Skill {
  name: string;
  description: string;
  level?: string;
  icon?: string;
  links?: { label: string; href: string }[];
  experience?: number; // 0-100%
}

interface SkillsModalProps {
  skill: Skill | null;
  isOpen: boolean;
  onClose: () => void;
}

const SkillsModal: FC<SkillsModalProps> = ({ skill, isOpen, onClose }) => {
  if (!skill) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="space-y-4 p-6">
        {/* Skill Name */}
        <h3 className="text-2xl font-bold flex items-center gap-2">
          {skill.icon && <span className="text-xl">{skill.icon}</span>}
          {skill.name}
        </h3>

        {/* Description */}
        <p className="text-gray-700">{skill.description}</p>

        {/* Experience / Proficiency */}
        {skill.experience !== undefined && (
          <div>
            <span className="text-gray-600 text-sm">Experience Level</span>
            <div className="w-full h-4 bg-gray-200 rounded mt-1 overflow-hidden">
              <div
                className="h-4 bg-theme rounded transition-all duration-1000"
                style={{ width: `${skill.experience}%` }}
              ></div>
            </div>
            <span className="text-gray-600 text-sm mt-1 block">{skill.experience}%</span>
          </div>
        )}

        {/* Links */}
        {skill.links && skill.links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {skill.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-theme hover:bg-theme-hover text-button px-3 py-1 rounded shadow transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default SkillsModal;
