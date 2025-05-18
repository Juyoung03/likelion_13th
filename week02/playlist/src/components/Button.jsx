import clsx from "clsx";

export default function Button({ children, variant = "primary", className, ...props }) {
  const baseStyle = "rounded-lg font-semibold transition-colors duration-200";

  // 반응형 크기 클래스: 기본, sm, md 화면에 따라 크기 자동 조절
  const responsiveSizeStyle = `
    text-sm px-3 py-1.5
    sm:text-base sm:px-4 sm:py-2
    md:text-lg md:px-5 md:py-3
  `;

  const variantStyle = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-50",
  };

  return (
    <button
      className={clsx(baseStyle, responsiveSizeStyle, variantStyle[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}