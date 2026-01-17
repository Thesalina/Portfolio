import { motion } from 'framer-motion';

const Card = ({ children, className = '', ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`glass rounded-2xl p-6 ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
