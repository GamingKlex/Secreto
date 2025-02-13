export default function Footer() {
  return (
    <div className="bg-gray-200 py-3 flex items-center justify-center shadow-sm">
      <div className="max-w-6xl px-4 sm:px-6 flex items-center gap-4 w-full">
        <div className="flex items-center gap-4 text-base font-normal text-gray-700">
          <div>
            Created by{' '}
            <a
              className="font-semibold text-gray-800 hover:underline"
              href="https://github.com/GamingKlex"
              target="_blank"
            >
              @GamingKlex
            </a>
          </div>
          &middot;
          <div>
            View on{' '}
            <a
              className="font-semibold text-gray-800 hover:underline"
              href="https://github.com/GamingKlex/Secreto"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
