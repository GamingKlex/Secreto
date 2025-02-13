export default function Popover({ children }) {
  return (
    <div className="pointer-events-none font-semibold absolute opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-200 -top-2 left-1/2 -translate-x-1/2 -translate-y-full z-50 bg-gray-500 text-white px-3 py-1.5 text-sm lg:text-base shadow-md rounded-lg">
      {children}
    </div>
  );
}
