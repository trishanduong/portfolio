import React from 'react';

interface ResumeModalProps {
  isOpen: boolean,
  onClose: () => void,
  fileUrl: string,
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, fileUrl }) => {
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full fade-in" onClick={onClose}>
      <div className="relative z-50 top-0 mx-auto p-5 w-full h-full">
        <button className="absolute top-0 right-0 z-50 text-white font-bold bg-slate-600 p-2 px-4 rounded-full" onClick={onClose}>X</button>
        <iframe 
          src={fileUrl} 
          title="Resume" 
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};


export default ResumeModal;
