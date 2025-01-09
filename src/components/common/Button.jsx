
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-md font-medium transition-all duration-300';
  
  const variants = {
    primary: 'bg-[#0783B9] text-white hover:bg-[#0783B9]',
    secondary: 'bg-transparent border-2 border-[#0783B9] text-[#0783B9] hover:bg-blue-50',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0783B9]'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;