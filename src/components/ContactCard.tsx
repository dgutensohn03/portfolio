import React, { useState } from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import DocumentModal from './DocumentModal';

const ContactRow = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const contacts = [
    {
      label: 'Email',
      icon: <MdEmail />,
      value: 'dgutensohn@icloud.com',
      href: 'mailto:dgutensohn@icloud.com',
    },
    {
      label: 'Phone',
      icon: <MdPhone />,
      value: '330-617-6756',
      href: 'tel:+13306176756',
    },
    {
      label: 'GitHub',
      icon: <FaGithub />,
      value: 'dgutensohn03',
      href: 'https://github.com/dgutensohn03',
    },
    {
      label: 'LinkedIn',
      icon: <FaLinkedin />,
      value: 'Daniel Gutensohn',
      href: 'https://www.linkedin.com/in/daniel-gutensohn-a2860a71',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6">
      {/* Contact icons */}
      {contacts.map((contact) => (
        <a
          key={contact.label}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col items-center justify-center w-16 h-16 rounded-full border shadow-lg transform transition-transform duration-300 hover:scale-110"
          style={{
            color: 'var(--color-theme)',
            borderColor: 'var(--color-theme)',
            backgroundColor: 'var(--color-bg)',
            boxShadow: `0 4px 6px var(--color-shadow)`,
          }}
        >
          <div className="text-3xl">{contact.icon}</div>
          <span
            className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-center text-xs rounded py-1 px-2 whitespace-nowrap z-10"
            style={{
              backgroundColor: 'rgba(0,0,0,0.8)',
              color: 'var(--color-button-text)',
            }}
          >
            {contact.value}
          </span>
        </a>
      ))}

      {/* Resume icon */}
      <div
        className="group relative flex flex-col items-center justify-center w-16 h-16 rounded-full border shadow-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer"
        style={{
          color: 'var(--color-theme)',
          borderColor: 'var(--color-theme)',
          backgroundColor: 'var(--color-bg)',
          boxShadow: `0 4px 6px var(--color-shadow)`,
        }}
        onClick={() => setModalOpen(true)}
      >
        <FaFileAlt className="text-3xl" />
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

export default ContactRow;
