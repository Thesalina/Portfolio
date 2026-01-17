import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 text-white shadow-lg";

    const variants = {
        primary: "bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-cyan-500/50",
        secondary: "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20",
        outline: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
