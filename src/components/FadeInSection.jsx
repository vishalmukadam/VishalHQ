import { motion } from 'framer-motion';

const FadeInSection = ({ children, className = '', delay = 0 }) => (
  <motion.section
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55, delay }}
  >
    {children}
  </motion.section>
);

export default FadeInSection;
