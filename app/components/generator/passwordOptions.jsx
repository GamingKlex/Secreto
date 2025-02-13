import { useEffect, useState } from 'react';

export default function PasswordOptions({ switchType, onChange }) {
  let [length, setLength] = useState(12);
  let [numbers, setNumbers] = useState(true);
  let [lowercase, setLowercase] = useState(true);
  let [uppercase, setUppercase] = useState(true);
  let [symbols, setSymbols] = useState(false);

  useEffect(() => {
    onChange({ length, numbers, lowercase, uppercase, symbols });
  }, [length, numbers, lowercase, uppercase, symbols]);

  return (
    <div className="flex gap-2 flex-col lg:flex-row lg:gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <input
            type="range"
            className="w-32 rounded-lg border border-gray-300 shadow-sm"
            value={length}
            onChange={(e) => {
              let value = parseInt(e.target.value);
              value = Math.max(8, Math.min(64, value));
              setLength(value || 8);
            }}
            min="8"
            max="64"
          />
          <label className="font-bold text-gray-800 text-nowrap flex items-start gap-1">
            <input
              type="text"
              className="w-7 bg-transparent outline-none focus:border-gray-600 border-b border-transparent duration-100"
              value={length}
              onChange={(e) => {
                let value = parseInt(e.target.value);
                value = Math.max(8, Math.min(64, value));
                setLength(value || 8);
              }}
            />
            characters
          </label>
        </div>
        <div className="flex items-center gap-3">
          <input
            checked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
            id="numbers"
            type="checkbox"
            className="rounded-lg border border-gray-300 shadow-sm"
          />
          <label
            for="numbers"
            className="font-bold text-gray-800 text-nowrap flex items-start gap-1"
          >
            Include numbers <span className="font-normal">(0-9)</span>
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <input
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
            id="lowercase"
            type="checkbox"
            className="rounded-lg border border-gray-300 shadow-sm"
          />
          <label
            for="lowercase"
            className="font-bold text-gray-800 text-nowrap flex items-start gap-1"
          >
            Include lowercase <span className="font-normal">(a-z)</span>
          </label>
        </div>
        <div className="flex items-center gap-3">
          <input
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
            id="uppercase"
            type="checkbox"
            className="rounded-lg border border-gray-300 shadow-sm"
          />
          <label
            for="uppercase"
            className="font-bold text-gray-800 text-nowrap flex items-start gap-1"
          >
            Include uppercase <span className="font-normal">(A-Z)</span>
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <input
            checked={symbols}
            onChange={(e) => setSymbols(e.target.checked)}
            id="symbols"
            type="checkbox"
            className="rounded-lg border border-gray-300 shadow-sm"
          />
          <label
            for="symbols"
            className="font-bold text-gray-800 text-nowrap flex items-start gap-1"
          >
            Include symbols <span className="font-normal">(e.g. !@#$%^&*)</span>
          </label>
        </div>
      </div>
      <div className="ml-auto flex items-end">
        <div className="py-1.5 px-3 font-bold text-sm bg-gray-600 duration-200 shadow-sm text-white rounded-l-lg">
          Password
        </div>
        <button
          className="py-1.5 px-3 font-bold text-sm bg-gray-400 hover:bg-gray-500 duration-200 shadow-sm text-white rounded-r-lg"
          onClick={switchType}
        >
          Passphrase
        </button>
      </div>
    </div>
  );
}
