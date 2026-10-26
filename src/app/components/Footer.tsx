import { useLanguage } from "../LanguageContext";
import svgPaths from "../../imports/svg-6iveic3aht";
import imgLogo from "figma:asset/b04cc769a8804b323dedfa2e0c3da91e74ca94db.png";
import imgEllipse1495 from "figma:asset/c4aadffadb3864cece4dffe7be6f9b7a77a47e0c.png";
import imgEllipse1496 from "figma:asset/4d38d4e9b944405bd3fa5f4718d33c6c2d5605fe.png";
import imgEllipse1497 from "figma:asset/38a4b82388da65cf8cb2ad151b5ce824679e56ed.png";

const socialColumns = [
  {
    platform: {
      icon: (
        <svg
          className="size-full"
          fill="none"
          viewBox="0 0 18 18"
        >
          <g clipPath="url(#fb-clip)">
            <path d={svgPaths.p1514e00} fill="white" />
          </g>
          <defs>
            <clipPath id="fb-clip">
              <rect fill="white" height="18" width="18" />
            </clipPath>
          </defs>
        </svg>
      ),
      label: "Facebook",
      href: "https://www.facebook.com/netspaceco",
    },
    channel: {
      img: imgEllipse1496,
      name: "Nách Két",
      href: "https://www.tiktok.com/@nch.kt0",
    },
  },
  {
    platform: {
      icon: (
        <svg
          className="size-full"
          fill="none"
          viewBox="0 0 18 18"
        >
          <g clipPath="url(#li-clip)">
            <path d={svgPaths.p7d0ab00} fill="white" />
          </g>
          <defs>
            <clipPath id="li-clip">
              <rect fill="white" height="18" width="18" />
            </clipPath>
          </defs>
        </svg>
      ),
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/netspaceco/",
    },
    channel: {
      img: imgEllipse1497,
      name: "Hậu Cung Văn Phòng Truyện",
      href: "https://www.facebook.com/haucungvanphongtruyen",
    },
  },
  {
    platform: null,
    channel: {
      img: imgEllipse1495,
      name: "NetSpace siêu Nét",
      href: "https://www.facebook.com/netspacesieunet",
    },
  },
];

export function Footer() {
  const { t, currentLanguage } = useLanguage();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(162.184deg, rgb(30, 160, 247) 0%, rgb(57, 156, 248) 7.1429%, rgb(74, 151, 248) 14.286%, rgb(87, 146, 249) 21.429%, rgb(98, 141, 250) 28.571%, rgb(107, 136, 251) 35.714%, rgb(115, 131, 251) 42.857%, rgb(123, 126, 252) 50%, rgb(127, 122, 252) 57.143%, rgb(131, 119, 252) 64.286%, rgb(135, 115, 252) 71.429%, rgb(138, 111, 251) 78.571%, rgb(142, 107, 251) 85.714%, rgb(145, 102, 251) 92.857%, rgb(148, 98, 251) 100%)",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-[16px] pt-[40px] pb-[12px]">
        {/* Main two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mx-[0px] mt-[0px] mb-[40px]">
          {/* ── Left Column ── */}
          <div className="flex flex-col gap-6 flex-1 min-w-0">
            {/* Logo */}
            <div className="h-12 relative w-[202.594px] shrink-0">
              <img
                alt="NetSpace Logo"
                src={imgLogo}
                className="h-full w-full object-contain object-left"
              />
            </div>

            {/* Description */}
            <p className="leading-[26px] text-white text-[14px]">
              {currentLanguage === "VI" ? (
                <>
                  Công ty công nghệ - truyền thông - quảng cáo -
                  tư vấn chiến lược.
                  <br />
                  Kiến tạo hệ sinh thái toàn diện cho doanh
                  nghiệp Việt Nam.
                </>
              ) : (
                <>
                  Technology - media - advertising - strategic
                  consulting company.
                  <br />
                  Creating a comprehensive ecosystem for
                  Vietnamese businesses.
                </>
              )}
            </p>

            {/* Social section */}
            <div className="flex flex-col gap-6">
              <p className="font-bold leading-[1.2] text-white tracking-[0.7px] uppercase text-[16px]">
                {t("NetSpace on Social", "NetSpace on Social")}
              </p>

              {/* 2-row social layout */}
              <div className="flex flex-col gap-4">
                {/* Row 1: Platforms + Nách Két */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
                  {[
                    socialColumns[0].platform,
                    socialColumns[1].platform,
                  ].map(
                    (platform) =>
                      platform && (
                        <a
                          key={platform.label}
                          href={platform.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 group"
                        >
                          <div className="bg-white/10 rounded-full size-[32px] flex items-center justify-center shrink-0 p-[7px]">
                            {platform.icon}
                          </div>
                          <span className="font-semibold text-[14px] leading-[24px] text-white whitespace-nowrap group-hover:underline transition-all">
                            {platform.label}
                          </span>
                        </a>
                      ),
                  )}
                  {(() => {
                    const channel = socialColumns[0].channel;
                    return (
                      <a
                        key={channel.name}
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 group"
                      >
                        <div className="relative shrink-0 size-[32px]">
                          <img
                            alt={channel.name}
                            src={channel.img}
                            className="absolute inset-0 size-full object-cover rounded-full"
                          />
                        </div>
                        <span className="font-semibold text-[14px] leading-[24px] text-white group-hover:underline transition-all line-clamp-2">
                          {channel.name}
                        </span>
                      </a>
                    );
                  })()}
                </div>

                {/* Row 2: Channels */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
                  {[
                    socialColumns[2].channel, // NetSpace siêu Nét
                    socialColumns[1].channel, // Hậu Cung Văn Phòng Truyện
                  ].map((channel) => (
                    <a
                      key={channel.name}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 group w-full"
                    >
                      <div className="relative shrink-0 size-[32px]">
                        <img
                          alt={channel.name}
                          src={channel.img}
                          className="absolute inset-0 size-full object-cover rounded-full"
                        />
                      </div>
                      <span className="font-semibold text-[14px] leading-[24px] text-white group-hover:underline transition-all whitespace-nowrap">
                        {channel.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="flex flex-col gap-6 shrink-0 lg:w-[420px]">
            <p className="font-bold leading-[1.2] text-white tracking-[0.7px] uppercase text-[16px]">
              {t("Thông tin liên hệ", "Contact Information")}
            </p>

            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="relative flex items-start">
                <div className="absolute left-0 top-[4px] size-[20px] shrink-0">
                  <svg
                    className="size-full"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d={svgPaths.p26ddc800}
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.66667"
                    />
                    <path
                      d={svgPaths.p35ba4680}
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.66667"
                    />
                  </svg>
                </div>
                <div className="pl-9 flex flex-col gap-1">
                  <p className="font-semibold leading-[24px] text-white text-[14px]">
                    {t("Địa chỉ", "Address")}
                  </p>
                  <p className="leading-[22.75px] text-white text-[14px]">
                    {currentLanguage === "VI" ? (
                      <>
                        HO: Tầng 3, Tòa nhà Mipec, 229 Tây Sơn,
                        <br />
                        Phường Kim Liên, Hà Nội
                      </>
                    ) : (
                      <>
                        HO: Floor 3, Mipec Tower, 229 Tay Son
                        <br />
                        Kim Lien Ward, Hanoi
                      </>
                    )}
                  </p>
                  <p className="leading-[22.75px] text-white text-[14px]">
                    {currentLanguage === "VI" ? (
                      <>
                        Branch: DD1 - DD1A Bạch Mã, phường Hòa
                        Hưng,
                        <br />
                        Quận 10, Thành phố Hồ Chí Minh
                      </>
                    ) : (
                      <>
                        Branch: DD1 - DD1A Bach Ma Street, Hoa
                        Hung Ward,
                        <br />
                        District 10, Ho Chi Minh City
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Hotline */}
              <div className="relative flex items-start">
                <div className="absolute left-0 top-[4px] size-[20px] shrink-0">
                  <svg
                    className="size-full"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <g clipPath="url(#footer-phone-clip)">
                      <path
                        d={svgPaths.p1a7ce800}
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.66667"
                      />
                    </g>
                    <defs>
                      <clipPath id="footer-phone-clip">
                        <rect
                          fill="white"
                          height="20"
                          width="20"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="pl-9 flex flex-col gap-1">
                  <p className="font-semibold leading-[24px] text-white text-[14px]">
                    Hotline
                  </p>
                  <p className="leading-[24px] text-white text-[14px]">
                    0888 138 888
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="relative flex items-start">
                <div className="absolute left-0 top-[4px] size-[20px] shrink-0">
                  <svg
                    className="size-full"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d={svgPaths.pd919a80}
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.66667"
                    />
                    <path
                      d={svgPaths.p189c1170}
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.66667"
                    />
                  </svg>
                </div>
                <div className="pl-9 flex flex-col gap-1">
                  <p className="font-semibold leading-[24px] text-white text-[14px]">
                    Email
                  </p>
                  <p className="leading-[24px] text-white text-[14px]">
                    contact@netspace.vn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="relative border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 px-[0px] pt-[12px] pb-[0px]">
          <p className="leading-[20px] text-white/80 text-[12px]">
            {t(
              "© 2026 NetSpace.vn | Bản quyền đã được bảo lưu",
              "© 2026 NetSpace.vn | All rights reserved",
            )}
          </p>
          <p className="leading-[20px] text-white/80 text-center sm:text-right text-[12px]">
            {t(
              <>
                Vận hành bởi{" "}
                <a
                  href="https://netspace.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-100 transition-opacity"
                >
                  NetSpace
                </a>
              </>,
              <>
                Operated by{" "}
                <a
                  href="https://netspace.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-100 transition-opacity"
                >
                  NetSpace
                </a>
              </>,
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}