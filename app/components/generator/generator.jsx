import { CheckCheck, Copy, RefreshCw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import copyToClipboard from '../../../lib/copy';
import {
  generatePassphrase,
  generateSecret,
} from '../../../lib/generateSecret';
import Popover from '../layouts/popover';
import PassphraseOptions from './passphraseOptions';
import PasswordOptions from './passwordOptions';

export default function Generator() {
  let [type, setType] = useState('password');
  let [value, setValue] = useState('rvpibhg0aer9wgbn35');

  let [data, setData] = useState({
    length: 12,
    numbers: true,
    lowercase: true,
    uppercase: true,
    symbols: false,
  });

  useEffect(() => {
    generate();
  }, [data, type]);

  function generate() {
    if (type === 'password') {
      setValue(generateSecret(data));
    } else {
      setValue(generatePassphrase(data));
    }
  }

  let refreshIconRef = useRef();

  let [copied, setCopied] = useState(false);

  function copy() {
    copyToClipboard(value);
    if (copied) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 relative z-20">
      <div className="px-4 sm:px-6 py-8 bg-gray-200 shadow rounded-xl -mt-24 flex flex-col">
        <div className="flex gap-5 flex-col md:flex-row">
          <div className="flex-1">
            <div className="w-full h-full rounded-lg bg-white border border-gray-300 shadow-sm flex divide-x divide-gray-300">
              <input
                type="text"
                readOnly
                onFocus={(e) => e.target.select()}
                className="w-full h-full p-4 rounded-l-lg font-mono text-lg focus:ring-2 focus:ring-blue-600 focus:outline-none shadow-sm duration-200 z-30"
                value={value}
              />
              <button
                className="px-5 font-sans bg-gray-100 hover:bg-gray-300 duration-200 shadow-sm text-gray-800 rounded-r-lg relative group"
                onClick={copy}
              >
                {copied ? (
                  <CheckCheck
                    size={20}
                    className="inline-block text-green-600"
                  />
                ) : (
                  <Copy size={20} className="inline-block" />
                )}
                <Popover>{copied ? 'Copied!' : 'Copy'}</Popover>
              </button>
            </div>
          </div>
          <div>
            <button
              className="py-4 px-8 font-bold bg-blue-600/80 hover:bg-blue-600 duration-200 shadow-sm text-white rounded-lg flex items-center gap-3 w-full md:w-auto justify-center"
              onClick={() => {
                generate();
                refreshIconRef.current.animate(
                  [
                    { transform: 'rotate(0deg)' },
                    { transform: 'rotate(180deg)' },
                  ],
                  {
                    duration: 150,
                    iterations: 1,
                    easing: 'ease-in-out',
                  }
                );
              }}
            >
              <RefreshCw size={20} ref={refreshIconRef} />
              Generate
            </button>
          </div>
        </div>
        <div className="font-bold text-base text-gray-500 mt-3">Options</div>
        {type === 'password' ? (
          <PasswordOptions
            switchType={() => setType('passphrase')}
            onChange={setData}
          />
        ) : (
          <PassphraseOptions
            switchType={() => setType('password')}
            onChange={setData}
          />
        )}
      </div>
    </div>
  );
}
