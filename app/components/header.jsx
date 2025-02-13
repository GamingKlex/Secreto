export default function Header() {
  return (
    <div className="bg-gray-100 py-3 flex items-center justify-center shadow-sm">
      <div className="max-w-6xl px-4 sm:px-6 flex items-center gap-4 w-full">
        <img src="/Secreto/logo.png" alt="Secreto" className="h-8 w-auto" />
        <a
          href="/Secreto/"
          className="font-semibold font-poppins text-lg text-black"
        >
          Secreto
        </a>
      </div>
    </div>
  );
}
