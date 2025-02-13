import { useEffect, useState } from 'react';

export default function PassphraseOptions({ switchType, onChange }) {
  let [words, setWords] = useState(4);
  let [dashes, setDashes] = useState(false);

  useEffect(() => {
    onChange({ words, dashes });
  }, [words, dashes]);

  return (
    <div className="flex gap-2 flex-col lg:flex-row lg:gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <input
            type="range"
            className="w-32 rounded-lg border border-gray-300 shadow-sm"
            value={words}
            onChange={(e) => {
              let value = parseInt(e.target.value);
              value = Math.max(4, Math.min(12, value));
              setWords(value || 4);
            }}
            min="4"
            max="12"
          />
          <label className="font-bold text-gray-800 text-nowrap flex items-start gap-1">
            <input
              type="text"
              className="w-5 bg-transparent outline-none focus:border-gray-600 border-b border-transparent duration-100"
              value={words}
              onChange={(e) => {
                let value = parseInt(e.target.value);
                value = Math.max(4, Math.min(12, value));
                setWords(value || 4);
              }}
            />
            words
          </label>
        </div>
        <div className="flex items-center gap-3">
          <input
            checked={dashes}
            onChange={(e) => setDashes(e.target.checked)}
            id="dashes"
            type="checkbox"
            className="rounded-lg border border-gray-300 shadow-sm"
          />
          <label
            for="dashes"
            className="font-bold text-gray-800 text-nowrap flex items-start gap-1"
          >
            Use dashes <span className="font-normal">(e.g. hello-world)</span>
          </label>
        </div>
      </div>
      <div className="ml-auto flex items-end">
        <button
          className="py-1.5 px-3 font-bold text-sm bg-gray-400 hover:bg-gray-500 duration-200 shadow-sm text-white rounded-l-lg"
          onClick={switchType}
        >
          Password
        </button>
        <div className="py-1.5 px-3 font-bold text-sm bg-gray-600 duration-200 shadow-sm text-white rounded-r-lg">
          Passphrase
        </div>
      </div>
    </div>
  );
}
