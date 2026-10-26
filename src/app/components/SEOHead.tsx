import { Helmet } from "react-helmet-async";

const SITE_NAME = "NetSpace";
const DEFAULT_OG_IMAGE =
  "https://cdn.netspace.vn/netspace_v2/assets/partner/images-1777027163769.webp";
const BASE_URL = "https://netspace.vn";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  canonicalPath?: string;
  lang?: "vi" | "en";
  noIndex?: boolean;
}

export function SEOHead({
  title,
  description,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  canonicalPath = "",
  lang = "vi",
  noIndex = false,
}: SEOHeadProps) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} – Reshaping The Future`;

  const defaultDescription =
    "NetSpace là startup AI tiên phong kiến tạo hệ sinh thái số toàn diện: truyền thông, công nghệ, KOL/KOC và chuyển đổi số cho doanh nghiệp Việt Nam.";

  const metaDescription = description || defaultDescription;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;

  return (
    <Helmet>
      {/* Language */}
      <html lang={lang} />

      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="NetSpace" />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={lang === "vi" ? "vi_VN" : "en_US"} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@netspace_vn" />
    </Helmet>
  );
}
