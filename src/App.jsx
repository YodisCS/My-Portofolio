import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaBehance, FaGithub, FaWhatsapp, FaEnvelope, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';
import LinkButton from './components/LinkButton';
import SocialIcon from './components/SocialIcon';
import MyProfilePhoto from './assets/myprofil.jpg';

const DATA_RAHASIA = {
  GITHUB: "aHR0cHM6Ly9naXRodWIuY29tL3lvZGlzQ1M=", 
  WA: "aHR0cHM6Ly93YS5tZS82MjgxMjM0NTY3ODkw", 
  EMAIL: "bWFpbHRvOnlvZGlzLnNwdEBnbWFpbC5jb20=" 
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden selection:bg-purple-300 selection:text-purple-900">
      
      {/* Background Liquid Gradients */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-15%] md:left-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#fca5a5]/40 dark:bg-[#4c1d95]/40 rounded-full blur-[100px] md:blur-[140px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] right-[-15%] md:right-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#67e8f9]/40 dark:bg-[#0891b2]/30 rounded-full blur-[100px] md:blur-[140px] pointer-events-none"
      />

      {/* Tombol Toggle Tema */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-3 rounded-full bg-white/70 dark:bg-[#1e2336]/70 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:scale-110 transition-transform cursor-pointer"
        >
          {isDarkMode ? <FiSun className="text-xl text-yellow-400" /> : <FiMoon className="text-xl text-slate-700" />}
        </button>
      </div>

      {/* Kartu Utama - EFEK LIQUID GLASS */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[420px] p-8 mt-10 rounded-[2.5rem] 
                   bg-white/40 dark:bg-[#0a0f1c]/50 
                   backdrop-blur-2xl md:backdrop-blur-3xl
                   border border-white/80 dark:border-white/10 
                   shadow-[0_8px_32px_0_rgba(31,38,135,0.07),inset_0_0_0_1px_rgba(255,255,255,0.3)] 
                   dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_0_0_1px_rgba(255,255,255,0.05)]"
      >
        {/* Header Profil */}
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.1, stiffness: 200 }}
            className="w-24 h-24 mb-4 rounded-full p-1 bg-gradient-to-tr from-[#fbcfe8] to-[#67e8f9] dark:from-purple-600 dark:to-cyan-500 shadow-lg"
          >
            <img 
              src={MyProfilePhoto}
              alt="Yodis Saputra" 
              className="w-full h-full object-cover rounded-full border-2 border-white dark:border-[#0a0f1c]"
            />
          </motion.div>
          <h1 className="text-3xl font-bold tracking-tight mb-1 text-slate-900 dark:text-white">Yodis Saputra</h1>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
            UI/UX Designer & Web Developer <span>🇮🇩</span>
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[280px] leading-relaxed">
            Menyulap ide menjadi realitas digital dengan kode yang rapi, cepat, dan responsif.
          </p>
        </div>

        {/* Daftar Tombol Link */}
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="w-full">
          <motion.div variants={itemVariants}>
            <LinkButton title="Portofolio Behance" icon={<FaBehance className="text-[#0057ff] dark:text-[#337eff]" />} href="#" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <LinkButton title="GitHub" icon={<FaGithub className="text-slate-900 dark:text-white" />} secretHref={DATA_RAHASIA.GITHUB} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <LinkButton title="WhatsApp" icon={<FaWhatsapp className="text-[#25D366]" />} secretHref={DATA_RAHASIA.WA} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <LinkButton title="Email" icon={<FaEnvelope className="text-[#EA4335]" />} secretHref={DATA_RAHASIA.EMAIL} />
          </motion.div>
        </motion.div>

        {/* Ikon Sosial Media Bawah */}
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex justify-center gap-4 mt-8">
          <motion.div variants={itemVariants}><SocialIcon icon={<FaInstagram className="text-pink-600 dark:text-pink-400" />} href="https://www.instagram.com/ysptttt" /></motion.div>
          <motion.div variants={itemVariants}><SocialIcon icon={<FaThreads className="text-slate-900 dark:text-white" />} href="https://www.threads.net/@ysptttt" /></motion.div>
          <motion.div variants={itemVariants}><SocialIcon icon={<FaTiktok className="text-slate-900 dark:text-white" />} href="https://www.tiktok.com/@sptttttttt_" /></motion.div>
          <motion.div variants={itemVariants}><SocialIcon icon={<FaLinkedin className="text-[#0A66C2] dark:text-[#2d7dcf]" />} href="https://www.linkedin.com/in/yodis-saputra-07674b303" /></motion.div>
        </motion.div>

      </motion.div>

      {/* Footer */}
      <div className="mt-8 mb-4 text-xs font-medium text-slate-500 dark:text-slate-400/80 z-10 relative">
        © Yodis Saputra
      </div>
    </div>
  );
}

export default App;