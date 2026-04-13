import { obfus } from "../utils/security";

export default function LinkButton({
  title,
  icon,
  href, // Tambahan agar link biasa tidak error
  secretHref,
  isContact = false,
}) {
  const handleClick = (e) => {
    e.preventDefault();

    let finalUrl = href;

    // Jika pakai link rahasia, proses dulu kodenya
    if (secretHref) {
      const rawUrl = obfus(secretHref);
      finalUrl =
        isContact && !rawUrl.includes(":") ? `https://wa.me/${rawUrl}` : rawUrl;
    }

    // Buka tab baru jika URL valid
    if (finalUrl && finalUrl !== "#") {
      window.open(finalUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer flex items-center justify-between w-full px-6 py-4 mb-4 font-semibold transition-transform duration-200 rounded-2xl bg-[#eef5fa]/90 hover:bg-[#e2eefa] dark:bg-[#1e2336]/60 dark:hover:bg-[#252b42]/80 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-sm hover:scale-105 active:scale-95 text-slate-800 dark:text-gray-100"
    >
      <div className="flex items-center gap-4 w-full">
        <span className="text-xl">{icon}</span>
        <span className="flex-1 text-center pr-6">{title}</span>
      </div>
    </button>
  );
}
