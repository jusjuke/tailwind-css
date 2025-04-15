export default function Button({ children, ...props }) {
  return (
    <button {...props} className="bg-amber-400 text-stone-900 font-semibold uppercase rounded px-4 py-2 hover:bg-amber-500">
      {children}
    </button>
  );
}