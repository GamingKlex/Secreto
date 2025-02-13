import Faq from '../components/faq/faq';
import Features from '../components/features';
import Generator from '../components/generator/generator';

export function meta({}) {
  return [
    { title: 'Secreto' },
    {
      name: 'description',
      content:
        'A simple web app to generate passwords, passphrases, and secrets.',
    },
  ];
}

export default function Home() {
  return (
    <>
      <div className="relative bg-blue-600/80 py-12 z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col gap-5 mb-20">
          <div className="flex gap-3">
            <div className="flex flex-col justify-between items-end font-normal font-poppins text-3xl md:text-4xl text-white">
              <div>Generate</div>
              <div>and</div>
            </div>
            <div className="font-poppins text-3xl md:text-4xl font-bold text-white">
              secure <br />
              passwords, <br />
              passphrases, <br />
              secrets.
            </div>
          </div>
          <div className="text-xl md:text-2xl font-normal text-blue-100">
            Completly <span className="underline">free</span> and{' '}
            <span className="underline">in the browser</span>.
          </div>
        </div>
      </div>
      <Generator />

      <Features />

      <Faq />
    </>
  );
}
