export const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full font-medium text-white transition duration-300 ${className}`}
  >
    {children}
  </button>
);
