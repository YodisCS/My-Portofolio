import { useState, useEffect } from "react";
import {
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaSun,
  FaMoon,
  FaBehance,
} from "react-icons/fa";
import { FaThreads, FaTiktok } from "react-icons/fa6";
import LinkButton from "./components/LinkButton";
import SocialIcon from "./components/SocialIcon";
import MyProfilePhoto from "./assets/myprofil.jpg";

const DATA_RAHASIA = {
  GITHUB: "aHR0cHM6Ly9naXRodWIuY29tL3lvZGlzQ1M=",
  WA: "aHR0cHM6Ly93YS5tZS82MjgxMjM0NTY3ODkw",
  EMAIL: "bWFpbHRvOnlvZGlzLnNwdEBnbWFpbC5jb20=",
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden selection:bg-purple-300 selection:text-purple-900">
      <div className="absolute top-[10%] left-[-15%] md:left-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#fca5a5]/30 dark:bg-[#4c1d95]/30 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] md:right-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#67e8f9]/30 dark:bg-[#0891b2]/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-3 rounded-full bg-white/70 dark:bg-[#1e2336]/70 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-sm hover:scale-110 transition-transform duration-200 cursor-pointer text-xl"
        >
          {isDarkMode ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-slate-700" />
          )}
        </button>
      </div>
      <div className="relative z-10 w-full max-w-[420px] p-8 mt-10 rounded-[2.5rem] bg-white/40 dark:bg-[#0a0f1c]/50 backdrop-blur-md border border-white/80 dark:border-white/10 shadow-lg animate-in fade-in slide-in-from-bottom-5 duration-700">
        {/* Header Profil */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-24 h-24 mb-4 rounded-full p-1 bg-gradient-to-tr from-[#fbcfe8] to-[#67e8f9] dark:from-purple-600 dark:to-cyan-500 shadow-md animate-in zoom-in duration-500 delay-150">
            <img
              src={MyProfilePhoto}
              alt="Yodis Saputra"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-full border-2 border-white dark:border-[#0a0f1c]"
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-1 text-slate-900 dark:text-white">
            Yodis Saputra
          </h1>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
            UI/UX Designer & Web Developer <span></span>
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[280px] leading-relaxed">
            Membangun ide menjadi realitas, satu baris kode setiap kalinya.
          </p>
        </div>
        <div className="w-full space-y-0">
          <LinkButton
            title="Portofolio Behance"
            icon={<FaBehance className="text-[#0057ff] dark:text-[#337eff]" />}
            href="https://yodisporto.netlify.app/"
          />
          <LinkButton
            title="GitHub"
            icon={<FaGithub className="text-slate-900 dark:text-white" />}
            secretHref={DATA_RAHASIA.GITHUB}
          />
          <LinkButton
            title="WhatsApp"
            icon={<FaWhatsapp className="text-[#25D366]" />}
            secretHref={DATA_RAHASIA.WA}
            isContact={true}
          />
          <LinkButton
            title="Email"
            icon={<FaEnvelope className="text-[#EA4335]" />}
            secretHref={DATA_RAHASIA.EMAIL}
          />
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <SocialIcon
            icon={<FaInstagram className="text-pink-600 dark:text-pink-400" />}
            href="https://www.instagram.com/ysptttt"
          />
          <SocialIcon
            icon={<FaThreads className="text-slate-900 dark:text-white" />}
            href="https://www.threads.net/@ysptttt"
          />
          <SocialIcon
            icon={<FaTiktok className="text-slate-900 dark:text-white" />}
            href="https://www.tiktok.com/@sptttttttt_"
          />
          <SocialIcon
            icon={<FaLinkedin className="text-[#0A66C2] dark:text-[#2d7dcf]" />}
            href="https://www.linkedin.com/in/yodis-saputra-07674b303"
          />
        </div>
      </div>

      <div className="mt-8 mb-4 text-xs font-medium text-slate-500 dark:text-slate-400/80 z-10 relative">
        © Yodis Saputra
      </div>
    </div>
  );
}

export default App;
