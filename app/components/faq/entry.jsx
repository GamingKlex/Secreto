import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function Entry({ title, children, defaultIsOpen }) {
  let [isOpen, setIsOpen] = useState(defaultIsOpen);
  return (
    <div className="flex flex-col">
      <div
        className="flex items-center justify-between cursor-pointer p-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-bold text-lg">{title}</div>
        <div className="text-gray-500">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      {isOpen && (
        <div className="p-3 pt-0 text-base font-normal">{children}</div>
      )}
    </div>
  );
}
