import React, { useState } from 'react';
import { FaFileAlt } from 'react-icons/fa';
import DocumentModal from './DocumentModal';

const ResumeIcon: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex justify-center p-4">
      {/* Resume icon styled like contact icons */}
      <div
        className="group relative flex items-center justify-center w-16 h-16 rounded-full border shadow-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer"
        style={{
          color: 'var(--color-theme)',
          borderColor: 'var(--color-theme)',
          backgroundColor: 'var(--color-bg)',
          boxShadow: `0 4px 6px var(--color-shadow)`,
        }}
        onClick={() => setModalOpen(true)}
      >
        <FaFileAlt className="text-3xl" />
        {/* Tooltip */}
        <span
          className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-center text-xs rounded py-1 px-2 whitespace-nowrap z-10"
          style={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'var(--color-button-text)',
          }}
        >
          Resume
        </span>
      </div>

      {/* Modal */}
      {modalOpen && (
        <DocumentModal
          title="My Resume"
          embedSrc="https://docs.google.com/document/d/1pNjtAP6pkoGphC8RW4Vq3Z41L-wc9hr3PGGzFL8p4J0/preview"
          downloadSrc="https://docs.google.com/document/d/1pNjtAP6pkoGphC8RW4Vq3Z41L-wc9hr3PGGzFL8p4J0/export?format=pdf"
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ResumeIcon;
