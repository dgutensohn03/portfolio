import { useState } from 'react';
import Modal from './Modal';

interface Skill {
  name: string;
  description: string;
  level: string;
  icon: string;
  experience?: number; // ✅ added since you use it in JSX
  links?: { label: string; href: string }[];
}

interface SkillsProps {
  skills: Skill[];
  onSkillClick: (skill: Skill) => void;
}

const Skills: React.FC<SkillsProps> = ({ skills, onSkillClick }) => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  return (
    <>
      {/* Skills Buttons */}
      <section className="bg-alt shadow rounded-lg p-6 mb-12">
        <h2 className="text-2xl mb-4 border-b pb-2 theme-text font-semibold">
          Skills
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, idx) => (
            <button
              key={skill.name}
              onClick={() => onSkillClick(skill)}
              className="bg-theme text-button px-4 py-2 rounded hover:bg-theme-hover flex items-center gap-1 font-medium shadow transform transition duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {skill.name}
            </button>
          ))}
        </div>
      </section>

      {/* Skill Modal */}
      <Modal isOpen={!!activeSkill} onClose={() => setActiveSkill(null)}>
        {activeSkill && (
          <>
            <h3 className="text-xl font-bold mb-2 theme-text">{activeSkill.name}</h3>
            <p className="text-gray-700 mb-4">{activeSkill.description}</p>

            {activeSkill.experience !== undefined && (
              <div className="mb-4">
                <span className="text-gray-600 text-sm">Experience</span>
                <div className="w-full h-4 bg-gray-200 rounded mt-1 overflow-hidden">
                  <div
                    className="h-4 bg-theme rounded transition-all duration-1000"
                    style={{ width: `${activeSkill.experience}%` }}
                  ></div>
                </div>
                <span className="text-gray-600 text-sm mt-1 block">
                  {activeSkill.experience}%
                </span>
              </div>
            )}

            {activeSkill.links && (
              <div className="flex flex-wrap gap-2">
                {activeSkill.links.map((link) => (
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
          </>
        )}
      </Modal>
    </>
  );
};

export default Skills;
