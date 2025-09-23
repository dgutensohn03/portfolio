import type { FC } from 'react';
import { useState } from 'react';

import { Typewriter } from 'react-simple-typewriter';
import ProfileImage from '../assets/IMG_7606.jpeg';
import ContactCard from './ContactCard';
import DocumentModal from './DocumentModal';

const Header: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="w-full bg-theme text-white text-center relative">
      {/* Top padding for spacing */}
      <div className="pt-12 pb-8">
        {/* Profile Image */}
        <div className="mx-auto w-32 h-32 rounded-full border-4 border-white overflow-hidden mb-4 shadow-lg">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-32 h-32 object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Daniel Gutensohn</h1>

        {/* Typewriter Description */}
        <p className="max-w-xl mx-auto text-gray-100 mb-6 text-lg md:text-xl px-4 md:px-0">
          <Typewriter
            words={[
              'Creative, adaptable full-stack developer.',
              'Eye for design and clean code.',
              'Passionate about solving complex problems.'
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </p>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Contact Me</h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <ContactCard />
          </div>
        </div>

        {/* Resume Button */}
        <div className="mb-12">
          <button
            onClick={() => setModalOpen(true)}
            style={{
                color: 'var(--color-theme)'
              }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-theme font-semibold rounded shadow hover:scale-105 transition-transform"
          >

            View Resume
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <DocumentModal
        isOpen={modalOpen}
          title="My Resume"
          embedSrc="https://docs.google.com/document/d/1pNjtAP6pkoGphC8RW4Vq3Z41L-wc9hr3PGGzFL8p4J0/preview"
          downloadSrc="https://docs.google.com/document/d/1pNjtAP6pkoGphC8RW4Vq3Z41L-wc9hr3PGGzFL8p4J0/export?format=pdf"
          onClose={() => setModalOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
