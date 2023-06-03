"use client";

export interface IButton
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

export const Button = ({ onClick, children, className, ...props }: IButton) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`px-2 py-1 text-primary-white bg-primary rounded border-0 hover:bg-primary-dark ${className}`}
    >
      {children}
    </button>
  );
};
