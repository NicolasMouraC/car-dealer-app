import ButtonProps from "@/app/types/ButtonProps";

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button
      className="p-5 bg-red-700 disabled:bg-gray-400"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
