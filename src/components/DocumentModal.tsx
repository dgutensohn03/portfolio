import React, { useState, useEffect } from 'react';
import {
  ArrowDownTrayIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

interface DocumentModalProps {
  isOpen: boolean;
  title: string;
  embedSrc: string;
  downloadSrc?: string;
  onClose: () => void;
}

const DocumentModal: React.FC<DocumentModalProps> = ({
  isOpen,
  title,
  embedSrc,
  downloadSrc,
  onClose,
}) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Simulate progress until iframe loads
  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + Math.random() * 10, 90));
    }, 300);
    return () => clearInterval(interval);
  }, [loading]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setProgress(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 w-11/12 md:w-3/4 h-5/6 p-6 relative rounded-2xl shadow-2xl flex flex-col">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 transition transform hover:scale-110"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: 'var(--color-theme)' }}
        >
          {title}
        </h2>

        {/* Progress Bar */}
        {loading && (
          <div className="w-full h-2 bg-gray-200 rounded overflow-hidden mb-4">
            <div
              className="h-full bg-theme transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Iframe */}
        <iframe
          src={embedSrc}
          className={`flex-1 w-full border rounded transition-opacity duration-300 ${
            loading ? 'opacity-0' : 'opacity-100'
          }`}
          title={title}
          onLoad={() => {
            setProgress(100);
            setTimeout(() => setLoading(false), 200); // smooth finish
          }}
        />

        {/* Download button */}
        {downloadSrc && (
          <a
            href={downloadSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-theme text-white rounded hover:bg-theme-hover transition w-max"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            <span>Download PDF</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default DocumentModal;
