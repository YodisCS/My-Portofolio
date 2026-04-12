import { motion } from 'framer-motion';
import { obfus } from '../utils/security';

export default function LinkButton({ title, icon, secretHref, isContact = false }) {
  const handleClick = () => {
    const rawUrl = obfus(secretHref);
    const finalUrl = isContact && !rawUrl.includes(':') 
      ? `https://wa.me/${rawUrl}` 
      : rawUrl;
      
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer flex items-center justify-between w-full px-6 py-4 mb-4 font-semibold transition-all duration-300 rounded-2xl bg-[#eef5fa]/90 dark:bg-[#1e2336]/60 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-sm"
    >
      <div className="flex items-center gap-4 w-full">
        <span className="text-xl">{icon}</span>
        <span className="flex-1 text-center pr-6">{title}</span>
      </div>
    </motion.button>
  );
}