// components/ui/Input.jsx
import clsx from "clsx";

export default function Input({ className, ...props }) {
  const baseStyle = `
    block w-full
    rounded-md
    border border-gray-300
    bg-white text-gray-900
    placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    dark:bg-gray-800 dark:text-white dark:border-gray-600
  `;

  const responsiveStyle = `
    text-sm px-3 py-2
    sm:text-base sm:px-4 sm:py-2.5
    md:text-lg md:px-5 md:py-3
  `;

  return (
    <input
      className={clsx(baseStyle, responsiveStyle, className)}
      {...props}
    />
  );
}
