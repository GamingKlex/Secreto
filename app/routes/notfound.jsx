import { Link } from 'react-router';

export function meta({}) {
  return [
    { title: 'Secreto - 404 Page not found' },
    {
      name: 'description',
      content:
        'A simple web app to generate passwords, passphrases, and secrets.',
    },
  ];
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="p-6 sm:p-8 flex flex-col items-center text-center">
        <h1 className="text-2xl font-poppins font-bold leading-tight mb-4 mg:mb-5 tracking-tight md:text-3xl text-black">
          404 – Page not found
        </h1>
        <p className="text-sm text-gray-700 mb-6 mg:mb-7">
          The page you are looking for does not exist.
        </p>
        <div className="flex">
          <Link
            to={-1}
            className="flex items-center justify-center focus:ring-2 focus:outline-none font-medium rounded-md border border-neutral-600 hover:border-neutral-500 text-sm px-5 py-2.5 text-center bg-none hover:bg-white/5 focus:ring-brand-700 disabled:opacity-60 disabled:pointer-events-none"
          >
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
}
