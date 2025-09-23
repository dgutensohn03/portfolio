import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

export default function Modal({ isOpen, onClose, children, maxWidth = 'max-w-2xl' }: ModalProps) {
  // Prevent background scrolling when modal is open
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow-lg relative w-full ${maxWidth} max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
        >
          &times;
        </button>

        <div className="">{children}</div>
      </div>
    </div>
  );
}
