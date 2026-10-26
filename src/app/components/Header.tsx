import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import imgLogo from "../../imports/Group-4.png";
import svgPaths from "../../imports/svg-gfv1ylbvdl";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentLanguage, setCurrentLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { to: "https://netspace.vn/about", labelVI: "Về chúng tôi", labelEN: "About Us", exact: false },
    { to: "https://netspace.vn/san-pham-dich-vu", labelVI: "Sản phẩm & Dịch vụ", labelEN: "Products & Services", exact: false },
    { to: "https://netspace.vn/tin-tuc", labelVI: "Tin tức", labelEN: "News", exact: false },
    { to: "https://netspace.vn/tuyen-dung", labelVI: "Tuyển dụng", labelEN: "Careers", exact: false },
    { to: "/", labelVI: "Về NetSpace Academy", labelEN: "NetSpace Academy", exact: false },
    { to: "https://netspace.vn/lien-he", labelVI: "Liên hệ", labelEN: "Contact", exact: false },
  ];

  const isActive = (to: string, exact: boolean) => {
    if (exact) return location.pathname === to || location.pathname === "";
    if (to.startsWith("http")) return false;
    return location.pathname === to;
  };

  return (
    <header className="fixed w-full z-50 flex justify-center px-[16px] pt-[16px] pb-[0px]">
      <div className="bg-white rounded-full shadow-[0px_8px_32px_0px_rgba(29,73,166,0.15)] border border-white/60 flex items-center justify-between gap-8 w-full max-w-[1140px] pl-[24px] pr-[16px] py-[12px]">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 h-10 w-[169.609px]">
          <img src={imgLogo} alt="NetSpace" className="h-full w-full object-contain" />
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`leading-6 text-[14px] whitespace-nowrap transition-colors ${
                isActive(link.to, link.exact)
                  ? "font-medium text-[#1EAAFF]"
                  : "font-medium text-[#000000] hover:text-[#1EAAFF]"
              }`}
            >
              {t(link.labelVI, link.labelEN)}
            </Link>
          ))}
        </nav>

        {/* Language Switcher - Desktop */}
        <div className="hidden sm:flex relative h-[38px] w-[130px] border border-[#1EAAFF]/40 rounded-full">
          <div
            className={`absolute top-1 h-7 w-[60px] bg-[#1eaaff] rounded-full outline-none transition-all duration-300 ${
              currentLanguage === "VI" ? "left-1" : "left-[64px]"
            }`}
          />
          {/* VI Button */}
          <button
            onClick={() => setCurrentLanguage("VI")}
            className="absolute top-1 left-1 h-7 w-[60px] flex items-center justify-center gap-1.5 z-10 transition-colors duration-300 cursor-pointer"
          >
            <span
              className={`font-bold text-xs leading-4 transition-colors duration-300 ${
                currentLanguage === "VI" ? "text-white" : "text-[rgba(30,170,255,0.7)]"
              }`}
            >
              VI
            </span>
          </button>
          {/* EN Button */}
          <button
            onClick={() => setCurrentLanguage("EN")}
            className="absolute top-1 left-[64px] h-7 w-[60px] flex items-center justify-center z-10 transition-colors duration-300 cursor-pointer"
          >
            <span
              className={`font-bold text-xs leading-4 transition-colors duration-300 ${
                currentLanguage === "EN" ? "text-white" : "text-[rgba(30,170,255,0.7)]"
              }`}
            >
              EN
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#1eaaff] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full mt-2 left-4 right-4 bg-white/60 backdrop-blur-xl rounded-2xl shadow-[0px_8px_32px_0px_rgba(29,73,166,0.15)] border border-white/60 p-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-4 rounded-lg hover:bg-[#1eaaff]/10 transition-colors ${
                  isActive(link.to, link.exact)
                    ? "font-bold text-[#1eaaff]"
                    : "font-medium text-[#000000] hover:text-[#1eaaff]"
                }`}
              >
                {t(link.labelVI, link.labelEN)}
              </Link>
            ))}
          </nav>

          {/* Mobile Language Switcher */}
          <div className="mt-4 pt-4 border-t border-white/40 flex justify-center">
            <div className="relative h-[38px] w-[130px] border border-[#1EAAFF]/40 rounded-full">
              <div
                className={`absolute top-1 h-7 w-[60px] bg-[#1eaaff] rounded-full outline-none transition-all duration-300 ${
                  currentLanguage === "VI" ? "left-1" : "left-[64px]"
                }`}
              />
              <button
                onClick={() => setCurrentLanguage("VI")}
                className="absolute top-1 left-1 h-7 w-[60px] flex items-center justify-center gap-1.5 z-10 transition-colors duration-300 cursor-pointer"
              >
                <span
                  className={`font-bold text-xs leading-4 transition-colors duration-300 ${
                    currentLanguage === "VI" ? "text-white" : "text-[rgba(30,170,255,0.7)]"
                  }`}
                >
                  VI
                </span>
              </button>
              <button
                onClick={() => setCurrentLanguage("EN")}
                className="absolute top-1 left-[64px] h-7 w-[60px] flex items-center justify-center z-10 transition-colors duration-300 cursor-pointer"
              >
                <span
                  className={`font-bold text-xs leading-4 transition-colors duration-300 ${
                    currentLanguage === "EN" ? "text-white" : "text-[rgba(30,170,255,0.7)]"
                  }`}
                >
                  EN
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}