export default function SocialIcon({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-full 
                 bg-[#eef5fa]/90 hover:bg-[#e2eefa] text-slate-800
                 dark:bg-[#1e2336]/60 dark:hover:bg-[#252b42]/80 dark:text-gray-100
                 backdrop-blur-md border border-white/60 dark:border-white/10 
                 shadow-[0_4px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                 hover:scale-110 hover:-translate-y-1 active:scale-90"
    >
      <span className="text-xl">{icon}</span>
    </a>
  );
}
