import {
  Cloud,
  Fingerprint,
  LockKeyhole,
  Text,
  ThumbsUp,
  Zap,
} from 'lucide-react';

export default function Features() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col">
          <div className="size-12 bg-green-200 text-green-500 rounded flex items-center justify-center">
            <ThumbsUp size={28} />
          </div>
          <div className="text-lg md:text-xl font-bold font-poppins mt-4">
            Easy
          </div>
          <div className="text-base md:text-lg font-normal">
            Simple and easy to use interface.
          </div>
        </div>
        <div className="flex flex-col">
          <div className="size-12 bg-yellow-200 text-orange-500 rounded flex items-center justify-center">
            <Zap size={28} />
          </div>
          <div className="text-lg md:text-xl font-bold font-poppins mt-4">
            Fast
          </div>
          <div className="text-base md:text-lg font-normal">
            Generate passwords and passphrases in seconds.
          </div>
        </div>
        <div className="flex flex-col">
          <div className="size-12 bg-blue-200 text-blue-500 rounded flex items-center justify-center">
            <LockKeyhole size={28} />
          </div>
          <div className="text-lg md:text-xl font-bold font-poppins mt-4">
            Secure
          </div>
          <div className="text-base md:text-lg font-normal">
            Completly offline and in your browser.
          </div>
        </div>
        <div className="flex flex-col">
          <div className="size-12 bg-sky-200 text-sky-500 rounded flex items-center justify-center">
            <Cloud size={28} />
          </div>
          <div className="text-lg md:text-xl font-bold font-poppins mt-4">
            Flexible
          </div>
          <div className="text-base md:text-lg font-normal">
            Customize your passwords and passphrases to your needs.
          </div>
        </div>
        <div className="flex flex-col">
          <div className="size-12 bg-purple-200 text-purple-500 rounded flex items-center justify-center">
            <Text size={28} />
          </div>
          <div className="text-lg md:text-xl font-bold font-poppins mt-4">
            Passphrases
          </div>
          <div className="text-base md:text-lg font-normal">
            Generate secure and easy to remember passphrases with ease.
          </div>
        </div>
        <div className="flex flex-col">
          <div className="size-12 bg-red-200 text-red-500 rounded flex items-center justify-center">
            <Fingerprint size={28} />
          </div>
          <div className="text-lg md:text-xl font-bold font-poppins mt-4">
            Secrets
          </div>
          <div className="text-base md:text-lg font-normal">
            Generate secrets for your applications and services.
          </div>
        </div>
      </div>
    </div>
  );
}
