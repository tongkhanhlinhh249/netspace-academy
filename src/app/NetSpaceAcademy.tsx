import academyHeroImg from "../assets/academy-hero-student.webp";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BookOpen,
  Award,
  Building2,
  Check,
  Phone,
  Facebook,
  Mic,
  Smartphone,
  Sparkles,
  Mail,
  Youtube,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Rocket,
  Send,
  Bot,
  Brain,
  Clapperboard,
  TrendingUp,
  Dumbbell,
  Layers,
  Quote,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SEOHead } from "./components/SEOHead";
import { useLanguage } from "./LanguageContext";
import imgTuan from "../imports/Tuan-half-body.jpg";
import imgThanh from "../imports/Thanh-half-body.jpg";

const TEAM_IMG =
  "https://cdn.netspace.vn/editor-assets/3/tap-the-du-hanh-vu-tru-2048x1152-g7idoeb9gar7.webp";

const GRADIENT_TEXT =
  "text-transparent bg-clip-text bg-[linear-gradient(to_right,#1EAAFF,#9462FB_70%,#F86880_85%,#FAE096)]";
// Six pillar accents drawn from the NetSpace palette (primary, secondary, accent, pink, yellow + a violet-pink blend)
const PILLAR_COLORS = ["#1EAAFF", "#9462FB", "#2CC4CE", "#F86880", "#F5A524", "#C25BD6"];
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

const CONTACT_EMAIL = "academy@netspace.vn";
const CONTACT_PHONE: string = "0888 138 888"; // TODO: xác nhận SĐT riêng của Academy (hiện dùng hotline NetSpace ở footer)
// TODO: thay bằng kênh chính thức của NetSpace Academy
const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/netspaceco", Icon: Facebook },
  { label: "TikTok", href: "https://www.tiktok.com/", Icon: TikTokIcon },
  { label: "YouTube", href: "https://www.youtube.com/", Icon: Youtube },
];

// Hero collage: positions (sm and up) of the 3 course cards and the small AI-task chips around the photo
const HERO_COURSE_POS = [
  "sm:-left-2 sm:top-[4%]",
  "sm:-right-3 sm:top-[40%]",
  "sm:-left-2 sm:bottom-[0%]",
];
const HERO_TASK_POS = [
  "sm:right-[4%] sm:top-[2%]",
  "sm:left-[0%] sm:top-[43%]",
  "sm:right-[2%] sm:bottom-[4%]",
];

const HEADING = "font-['SVN-ZonaPro',_sans-serif] font-bold text-[#131313]";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  delay = 0,
  className = "",
  id,
  immediate = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  immediate?: boolean;
}) {
  return (
    <motion.div
      id={id}
      initial="hidden"
      {...(immediate ? { animate: "visible" } : { whileInView: "visible" })}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated hero backdrop: drifting colour orbs, a slowly panning grid and twinkling particles
const HERO_PARTICLES = [
  { x: "6%", y: "18%", size: 10, color: "#1EAAFF", dur: 7, delay: 0 },
  { x: "14%", y: "72%", size: 6, color: "#9462FB", dur: 6, delay: 1 },
  { x: "30%", y: "10%", size: 7, color: "#F86880", dur: 8, delay: 0.5 },
  { x: "42%", y: "84%", size: 9, color: "#6ADBE3", dur: 7.5, delay: 2 },
  { x: "52%", y: "22%", size: 5, color: "#9462FB", dur: 6.5, delay: 1.5 },
  { x: "66%", y: "8%", size: 8, color: "#1EAAFF", dur: 9, delay: 0.8 },
  { x: "78%", y: "78%", size: 6, color: "#F86880", dur: 7, delay: 2.4 },
  { x: "88%", y: "30%", size: 10, color: "#6ADBE3", dur: 8, delay: 0.3 },
  { x: "94%", y: "64%", size: 7, color: "#9462FB", dur: 6, delay: 1.2 },
  { x: "22%", y: "46%", size: 5, color: "#FAE096", dur: 7, delay: 2.8 },
];

function HeroBackdrop() {
  const reduce = useReducedMotion();
  const loop = (duration: number, delay = 0) => ({ duration, repeat: Infinity, ease: "easeInOut" as const, delay });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-clip" aria-hidden="true">
      {/* panning grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1EAAFF 1px, transparent 1px), linear-gradient(to bottom, #1EAAFF 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        animate={reduce ? undefined : { backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />
      {/* drifting orbs */}
      <motion.div
        className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-[#9462FB] blur-[150px] opacity-[0.16]"
        animate={reduce ? undefined : { x: [0, -70, 20, 0], y: [0, 50, -20, 0] }}
        transition={loop(18)}
      />
      <motion.div
        className="absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-[#1EAAFF] blur-[150px] opacity-[0.18]"
        animate={reduce ? undefined : { x: [0, 80, -10, 0], y: [0, -60, 20, 0] }}
        transition={loop(20, 2)}
      />
      <motion.div
        className="absolute top-[30%] left-[38%] w-[300px] h-[300px] rounded-full bg-[#F86880] blur-[140px] opacity-[0.08]"
        animate={reduce ? undefined : { x: [0, 60, -40, 0], y: [0, -40, 40, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={loop(22, 4)}
      />
      {/* twinkling particles */}
      {HERO_PARTICLES.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{ left: d.x, top: d.y, width: d.size, height: d.size, background: d.color }}
          animate={reduce ? { opacity: 0.35 } : { y: [0, -18, 0], opacity: [0.15, 0.6, 0.15], scale: [1, 1.25, 1] }}
          transition={loop(d.dur, d.delay)}
        />
      ))}
    </div>
  );
}

// Slowly rotating dashed rings and a pulsing glow behind the hero photo
function HeroRings() {
  const reduce = useReducedMotion();
  return (
    <div className="hidden sm:block absolute inset-0 pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(148,98,251,0.22) 0%, rgba(30,170,255,0.10) 55%, transparent 72%)" }}
        animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 -ml-[215px] -mt-[215px] w-[430px] h-[430px] rounded-full border border-dashed border-[#1EAAFF]/35"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 -ml-[265px] -mt-[265px] w-[530px] h-[530px] rounded-full border border-[#9462FB]/20"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-[#9462FB]/70" />
        <span className="absolute -bottom-1.5 left-[28%] w-2.5 h-2.5 rounded-full bg-[#F86880]/70" />
      </motion.div>
    </div>
  );
}

function SectionHead({
  label,
  title,
  desc,
}: {
  label?: string;
  title: React.ReactNode;
  desc?: string;
}) {
  return (
    <Reveal immediate className="flex flex-col items-center text-center gap-3 max-w-[680px] mx-auto">
      {label && (
        <span className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-[#1EAAFF]">
          <span className="w-6 h-px bg-[#1EAAFF]" />
          {label}
          <span className="w-6 h-px bg-[#1EAAFF]" />
        </span>
      )}
      <h2 className={`${HEADING} text-[30px] lg:text-[36px] leading-[1.2] m-0`}>
        {title}
      </h2>
      {desc && (
        <p className="text-[#5A5A7A] text-[16px] leading-[1.75] m-0">{desc}</p>
      )}
    </Reveal>
  );
}

type FormState = {
  name: string;
  phone: string;
  email: string;
  group: string;
  location: string;
  note: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  phone: "",
  email: "",
  group: "",
  location: "",
  note: "",
};

const FIELD_BASE =
  "w-full rounded-xl bg-white/90 border px-4 text-[15px] text-[#131313] placeholder:text-[#9A9AB4] outline-none transition-all duration-300 focus:border-[#1EAAFF] focus:shadow-[0_0_0_4px_rgba(30,170,255,0.12)]";

function FieldLabel({
  children,
  required,
  htmlFor,
}: {
  children: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-[14px] font-semibold text-[#131313] mb-2">
      {children}
      {required && <span className="text-[#F86880] ml-1">*</span>}
    </label>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-[13px] text-[#F86880] mt-1.5 m-0">{msg}</p>;
}

function TestimonialCarousel({ items }: { items: React.ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const atStart = el.scrollLeft <= 4;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (dir === 1 && atEnd) return el.scrollTo({ left: 0, behavior: "smooth" });
    if (dir === -1 && atStart) return el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const btn =
    "absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center border border-[#1EAAFF]/40 bg-white text-[#1EAAFF] shadow-lg shadow-[#1EAAFF]/15 transition-all hover:bg-[#1EAAFF] hover:text-white disabled:opacity-0 disabled:pointer-events-none";

  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((it, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
          >
            {it}
          </div>
        ))}
      </div>
      <button type="button" aria-label="Previous" onClick={() => go(-1)} className={`${btn} left-2 lg:-left-6`}>
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button type="button" aria-label="Next" onClick={() => go(1)} className={`${btn} right-2 lg:-right-6`}>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

function RegistrationForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const groups = [
    { value: "ai", label: t("AI ứng dụng", "Applied AI"), icon: Bot },
    { value: "creative", label: t("Sáng tạo hình ảnh & video", "Image & video creation"), icon: Clapperboard },
    { value: "personal", label: t("Phát triển kỹ năng cá nhân", "Personal skills development"), icon: TrendingUp },
    { value: "enterprise", label: t("Đào tạo cho doanh nghiệp", "Corporate training"), icon: Building2 },
  ];
  const locations = [
    { value: "hn", label: t("Offline tại Hà Nội", "Offline in Hanoi") },
    { value: "hcm", label: t("Offline tại Hồ Chí Minh", "Offline in Ho Chi Minh City") },
  ];

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    const req = t("Vui lòng nhập thông tin này", "This field is required");
    if (!form.name.trim()) e.name = req;
    if (!form.phone.trim()) e.phone = req;
    else if (!/^(\+?84|0)\d{9}$/.test(form.phone.replace(/[\s.-]/g, "")))
      e.phone = t("Số điện thoại chưa hợp lệ", "Invalid phone number");
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = t("Email chưa hợp lệ", "Invalid email address");
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      const first = Object.keys(e)[0];
      document.getElementById(`reg-${first}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitted(true);
  };

  const reset = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitted(false);
  };

  const errBorder = (k: keyof FormState) => (errors[k] ? "border-[#F86880]" : "border-[#1EAAFF]/25");

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center py-12 px-4"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1EAAFF] to-[#9462FB] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(30,170,255,0.4)]">
          <Rocket className="w-9 h-9 text-white" />
        </div>
        <h3 className={`${HEADING} text-[26px] leading-[1.25] mb-3 m-0`}>
          {t("Đăng ký thành công!", "Registration received!")}
        </h3>
        <p className="text-[#5A5A7A] text-[16px] leading-[1.75] max-w-[440px] mb-8 m-0">
          {t(
            "Cảm ơn bạn đã quan tâm đến NetSpace Academy. Đội ngũ tư vấn sẽ liên hệ với bạn trong vòng 24 giờ làm việc.",
            "Thank you for your interest in NetSpace Academy. Our advisory team will contact you within 24 business hours.",
          )}
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center px-8 h-[48px] rounded-full font-semibold text-[#1EAAFF] border border-[#1EAAFF]/40 bg-white/70 hover:bg-white hover:border-[#1EAAFF] transition-colors"
        >
          {t("Gửi đăng ký khác", "Submit another")}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
        <div className="md:col-span-2">
          <FieldLabel htmlFor="reg-name" required>{t("Họ và tên", "Full name")}</FieldLabel>
          <input
            id="reg-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder={t("Nguyễn Văn A", "Your full name")}
            className={`${FIELD_BASE} h-[52px] ${errBorder("name")}`}
          />
          <FieldError msg={errors.name} />
        </div>
        <div>
          <FieldLabel htmlFor="reg-phone" required>{t("Số điện thoại", "Phone number")}</FieldLabel>
          <input
            id="reg-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="0901 234 567"
            className={`${FIELD_BASE} h-[52px] ${errBorder("phone")}`}
          />
          <FieldError msg={errors.phone} />
        </div>
        <div>
          <FieldLabel htmlFor="reg-email">{t("Email (không bắt buộc)", "Email (optional)")}</FieldLabel>
          <input
            id="reg-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="email@example.com"
            className={`${FIELD_BASE} h-[52px] ${errBorder("email")}`}
          />
          <FieldError msg={errors.email} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
        <fieldset id="reg-group" className="border-0 p-0 m-0 min-w-0 md:col-span-2">
          <legend className="p-0 text-[14px] font-semibold text-[#131313] mb-3">
            {t("Nhóm kiến thức muốn nâng cấp", "Knowledge areas to upgrade")}
            <span className="ml-2 font-normal text-[#9A9AB4]">{t("(chọn một hoặc nhiều)", "(select one or more)")}</span>
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {groups.map((g) => {
              const selected = form.group ? form.group.split(",") : [];
              const active = selected.includes(g.value);
              const toggle = () => {
                const next = active ? selected.filter((v) => v !== g.value) : [...selected, g.value];
                set("group", groups.map((x) => x.value).filter((v) => next.includes(v)).join(","));
              };
              const Icon = g.icon;
              return (
                <label
                  key={g.value}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 cursor-pointer transition-all duration-300 ${
                    active
                      ? "border-[#1EAAFF] bg-[#1EAAFF]/[0.07] shadow-[0_0_0_4px_rgba(30,170,255,0.1)]"
                      : "border-[#1EAAFF]/25 bg-white/90 hover:border-[#1EAAFF]/60"
                  }`}
                >
                  <input type="checkbox" checked={active} onChange={toggle} className="sr-only" />
                  <span
                    className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                      active ? "bg-[#1EAAFF] border-[#1EAAFF]" : "border-[#1EAAFF]/40 bg-white"
                    }`}
                  >
                    {active && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                  </span>
                  <Icon className="w-4 h-4 text-[#1EAAFF] shrink-0" />
                  <span className="text-[15px] text-[#131313]">{g.label}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      </div>

      <fieldset id="reg-location" className="border-0 p-0 m-0 min-w-0">
        <legend className="p-0 text-[14px] font-semibold text-[#131313] mb-3">
          {t("Địa điểm", "Location")}
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {locations.map((l) => {
            const active = form.location === l.value;
            return (
              <label
                key={l.value}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 cursor-pointer transition-all duration-300 ${
                  active
                    ? "border-[#1EAAFF] bg-[#1EAAFF]/[0.07] shadow-[0_0_0_4px_rgba(30,170,255,0.1)]"
                    : errors.location
                      ? "border-[#F86880]/60 bg-white/90"
                      : "border-[#1EAAFF]/25 bg-white/90 hover:border-[#1EAAFF]/60"
                }`}
              >
                <input
                  type="radio"
                  name="location"
                  value={l.value}
                  checked={active}
                  onChange={() => set("location", l.value)}
                  className="sr-only"
                />
                <MapPin className={`w-5 h-5 shrink-0 ${active ? "text-[#1EAAFF]" : "text-[#9A9AB4]"}`} strokeWidth={1.6} />
                <span className="text-[14.5px] font-semibold text-[#131313] flex-1">{l.label}</span>
                {active && <Check className="w-4 h-4 text-[#1EAAFF] shrink-0" />}
              </label>
            );
          })}
        </div>
        <FieldError msg={errors.location} />
      </fieldset>

      <div>
        <FieldLabel htmlFor="reg-note">{t("Ghi chú thêm (nếu có)", "Additional notes (optional)")}</FieldLabel>
        <textarea
          id="reg-note"
          rows={4}
          value={form.note}
          onChange={(e) => set("note", e.target.value)}
          placeholder={t(
            "Mục tiêu học tập, khung giờ mong muốn, câu hỏi dành cho đội ngũ tư vấn...",
            "Your learning goals, preferred schedule, questions for our advisors...",
          )}
          className={`${FIELD_BASE} py-3.5 resize-y leading-[1.6] border-[#1EAAFF]/25`}
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
        <button
          type="submit"
          className="relative overflow-hidden group inline-flex items-center justify-center gap-2 px-8 h-[56px] rounded-full font-semibold text-white bg-gradient-to-r from-[#1EAAFF] to-[#9462FB] shadow-[0_0_20px_rgba(30,170,255,0.4)] hover:shadow-[0_0_30px_rgba(148,98,251,0.6)] transition-all duration-500"
        >
          <span className="relative z-10">{t("Gửi đăng ký", "Submit registration")}</span>
          <Send className="w-4 h-4 relative z-10" />
          <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </button>
      </div>
    </form>
  );
}

export function NetSpaceAcademy() {
  const { t } = useLanguage();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pillars = [
    {
      icon: Target,
      title: t("Bắt đầu từ sản phẩm", "Start from the output"),
      desc: t(
        "Bắt đầu từ công việc và sản phẩm học viên phải hoàn thành.",
        "Everything starts from the work and the deliverables learners must complete.",
      ),
    },
    {
      icon: Dumbbell,
      title: t("Tối thiểu 60% thực hành", "At least 60% practice"),
      desc: t(
        "Tối thiểu 60% thời gian là thực hành, phản biện và hoàn thiện sản phẩm.",
        "At least 60% of the time goes to practice, critique and refining the final product.",
      ),
    },
    {
      icon: Layers,
      title: t("Bài toán thực tế", "Real-world problems"),
      desc: t(
        "Nội dung xây từ bài toán thực tế và năng lực đang vận hành tại NetSpace.",
        "Content built from real problems and the capabilities NetSpace runs today.",
      ),
    },
    {
      icon: Users,
      title: t("Giảng viên thực chiến", "Practitioner instructors"),
      desc: t(
        "Đội ngũ gồm giảng viên, trợ giảng có chuyên môn & kinh nghiệm thực chiến trực tiếp đứng lớp.",
        "Instructors and teaching assistants with hands-on expertise teach in person.",
      ),
    },
    {
      icon: ShieldCheck,
      title: t("Đạo đức & bản quyền", "Ethics & copyright"),
      desc: t(
        "Bảo vệ dữ liệu, bản quyền, kiểm chứng, đạo đức truyền thông là nội dung bắt buộc.",
        "Data protection, copyright, fact-checking and media ethics are mandatory content.",
      ),
    },
    {
      icon: Award,
      title: t("Chứng nhận theo năng lực", "Merit-based certification"),
      desc: t(
        "Chứng nhận gắn với mức tham dự, bài thực hành và sản phẩm cuối khóa.",
        "Certification is tied to attendance, practice assignments and the final product.",
      ),
    },
  ];

  // Small tasks floating around the hero photo; each ties back to one course group below (order matches HERO_TASK_POS)
  const aiTasks = [
    { icon: Smartphone, color: "#9462FB", label: t("Quay dựng bằng điện thoại", "Shoot & edit on phone") },
    { icon: Sparkles, color: "#1EAAFF", label: t("Viết prompt, soạn email", "Prompts & email drafts") },
    { icon: Mic, color: "#F86880", label: t("Luyện giọng & MC", "Voice & MC training") },
  ];

  const courseGroups = [
    {
      icon: Bot,
      bar: "from-[#1EAAFF] to-[#6ADBE3]",
      image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: t("AI ỨNG DỤNG", "APPLIED AI"),
      tagline: t(
        "Bứt phá hiệu suất công việc & học tập với công cụ AI an toàn, kiểm chứng",
        "Boost work and study performance with safe, verified AI tools",
      ),
      desc: t(
        "Ứng dụng các công cụ AI hàng đầu để tự động hóa quy trình làm việc văn phòng, nâng cao năng lực nghiên cứu, học tập thông minh và tối ưu hóa hiệu suất làm việc thực tế.",
        "Apply leading AI tools to automate office workflows, strengthen research, learn smarter and optimize real-world productivity.",
      ),
      courses: [
        { href: "#dang-ky", /* TODO: link landing page riêng */ name: t("AI ứng dụng cho môi giới Bất động sản", "Applied AI for real estate brokers") },
        { href: "#dang-ky", /* TODO: link landing page riêng */ name: t("AI cho công việc văn phòng", "AI for office work") },
        { href: "#dang-ky", /* TODO: link landing page riêng */ name: t("AI ứng dụng cho ngành Y tế", "Applied AI for healthcare") },
      ],
      audience: [
        t("Người đi làm văn phòng", "Office professionals"),
        t("Học sinh/Sinh viên", "Students"),
        t("Marketer/Designer", "Marketers/Designers"),
        t("Trẻ em & Thiếu niên", "Children & teens"),
        t("Doanh nghiệp muốn chuẩn hóa quy trình AI", "Companies standardizing AI workflows"),
      ],
    },
    {
      icon: Clapperboard,
      bar: "from-[#9462FB] to-[#F86880]",
      image: "https://images.pexels.com/photos/6593779/pexels-photo-6593779.jpeg?auto=compress&cs=tinysrgb&w=1080",
      title: t("SÁNG TẠO HÌNH ẢNH & VIDEO", "IMAGE & VIDEO CREATION"),
      tagline: t(
        "Làm chủ tư duy thiết kế & sáng tạo video ngắn chuyên nghiệp",
        "Master design thinking and professional short-form video",
      ),
      desc: t(
        "Làm chủ bộ công cụ sáng tạo để tự tay thiết kế và sản xuất hoàn thiện chuỗi video ngắn chuẩn thương mại đa nền tảng.",
        "Master the creative toolkit to design and produce complete, commercial-grade short video series across platforms.",
      ),
      courses: [
        { href: "#dang-ky", /* TODO: link landing page riêng */ name: t("Sáng tạo hình ảnh & video bằng điện thoại", "Image & video creation with a smartphone") },
      ],
      audience: [
        t("KOL/KOC", "KOL/KOC"),
        t("Nhà sáng tạo nội dung (Content Creator)", "Content creators"),
        t("Chủ shop online", "Online shop owners"),
        t("Doanh nghiệp SME & Đội ngũ Sales/Marketing", "SMEs & Sales/Marketing teams"),
      ],
    },
    {
      icon: TrendingUp,
      bar: "from-[#F86880] to-[#FAE096]",
      image: "https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=1080",
      title: t("PHÁT TRIỂN KỸ NĂNG CÁ NHÂN", "PERSONAL SKILLS DEVELOPMENT"),
      tagline: t(
        "Khẳng định vị thế - Làm chủ truyền thông – Biến uy tín cá nhân thành tài sản dài hạn",
        "Establish your standing, own your media presence, turn personal credibility into a lasting asset",
      ),
      desc: t(
        "Bứt phá bản lĩnh trước ống kính và khẳng định vị thế dẫn đầu trong kỷ nguyên số. Học phương pháp biến giá trị bản thân thành công cụ tạo doanh số và bảo vệ vững chắc uy tín thương hiệu.",
        "Build confidence on camera and lead in the digital era. Learn to turn personal value into a sales tool and firmly protect your brand's reputation.",
      ),
      courses: [
        { href: "#dang-ky", /* TODO: link landing page riêng */ name: t("Luyện giọng nói hấp dẫn & MC", "Compelling voice & MC training") },
        { href: "#dang-ky", /* TODO: link landing page riêng */ name: t("Phong thái phụ nữ", "Women's presence & poise") },
      ],
      audience: [
        t("Ban lãnh đạo (C-Level)", "C-Level leadership"),
        t("Cấp quản lý", "Managers"),
        t("KOL/KOC", "KOL/KOC"),
        t("Chuyên gia", "Experts"),
        t("Người phát ngôn doanh nghiệp", "Company spokespeople"),
        t("Bộ phận PR/Truyền thông nội bộ", "PR / internal comms teams"),
      ],
    },
  ];

  const instructors = [
    {
      name: t("Anh Tuấn Nguyễn", "Mr. Tuan Nguyen"),
      initials: "TN",
      img: imgTuan,
      role: t("Tổng Giám đốc NetSpace", "CEO, NetSpace"),
      bio: t(
        "Là chuyên gia tiên phong về TMĐT và cựu Phó TGĐ VCCorp với gần 20 năm kinh nghiệm sâu sắc trong công nghệ, chiến lược và marketing. Được mệnh danh là một “builder” biến các ý tưởng đột phá thành hiện thực.",
        "A pioneering e-commerce expert and former Deputy CEO of VCCorp with nearly 20 years of deep experience in technology, strategy and marketing. Known as a “builder” who turns bold ideas into reality.",
      ),
    },
    {
      name: t("Anh Nguyễn Đình Thành", "Mr. Nguyen Dinh Thanh"),
      initials: "NT",
      img: imgThanh,
      role: t("Phó Tổng giám đốc NetSpace", "Deputy CEO, NetSpace"),
      bio: t(
        "Chuyên gia truyền thông và văn hóa, nghiên cứu sinh Tiến sỹ truyền thông chuyển đổi số.",
        "A media and culture specialist, currently a PhD candidate in digital transformation communication.",
      ),
    },
    {
      name: t("Anh Long Kiều", "Mr. Long Kieu"),
      initials: "LK",
      role: t("Giám đốc sáng tạo Khối MCN", "Creative Director, MCN Division"),
      bio: t(
        "Tốt nghiệp ĐH Sân khấu Điện ảnh Hà Nội, là đạo diễn đứng sau các show truyền hình nổi bật như Sao Nhập Ngũ, KOC Việt Nam 2022 và Sao Nhập Học.",
        "A graduate of the Hanoi Academy of Theatre and Cinema, he directed standout TV shows including Sao Nhap Ngu, KOC Vietnam 2022 and Sao Nhap Hoc.",
      ),
    },
    {
      name: t("Anh Lê Tuấn Anh", "Mr. Le Tuan Anh"),
      initials: "TA",
      role: t("Đạo diễn hình ảnh Khối MCN", "Director of Photography, MCN Division"),
      bio: t(
        "Sở hữu hơn 8 năm kinh nghiệm đạo diễn hình ảnh cho các thương hiệu lớn như Vinhomes, BIDV và Garena, anh có thế mạnh chuyên sâu về setup ánh sáng và điều phối góc máy.",
        "With over 8 years as a director of photography for major brands such as Vinhomes, BIDV and Garena, he specializes in lighting setup and camera-angle direction.",
      ),
    },
    {
      name: t("Anh Hải Nam", "Mr. Hai Nam"),
      initials: "HN",
      role: t("CEO MyB Media", "CEO, MyB Media"),
      bio: t(
        "Hơn 10 năm kinh nghiệm Digital Marketing. Đào tạo Facebook Ads, TikTok Ads, Content Marketing, xây kênh đa nền tảng và ứng dụng AI trong marketing & vận hành doanh nghiệp.",
        "Over 10 years in Digital Marketing. Trains Facebook Ads, TikTok Ads, content marketing, multi-platform channel building and AI for marketing and business operations.",
      ),
    },
    {
      name: t("MC Mai Anh Thư", "MC Mai Anh Thu"),
      initials: "AT",
      role: "",
      bio: t(
        "Thạc sĩ Luật quốc tế, Tiến sĩ Báo chí học. Hơn 10 năm kinh nghiệm làm MC song ngữ & hoạt động trong lĩnh vực báo chí, truyền hình.",
        "Master of International Law and PhD in Journalism. Over 10 years as a bilingual MC working in journalism and television.",
      ),
    },
  ];

  const faqs = [
    {
      q: t("Các khóa học diễn ra khi nào?", "When do the courses take place?"),
      a: (
        <>
          {t(
            "Bạn có thể xem lịch khai giảng chi tiết của từng khóa tại trang thông tin riêng của từng khóa học tại mục ",
            "You can find each course's detailed intake schedule on its own information page in the ",
          )}
          <a
            href="#chuong-trinh"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("chuong-trinh")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="font-bold underline underline-offset-2 text-[#131313] hover:text-[#1EAAFF] transition-colors"
          >
            {t("Danh sách khóa học", "Course list")}
          </a>
          {t(".", " section.")}
        </>
      ),
    },
    {
      q: t("Khóa học diễn ra theo hình thức nào?", "What format are the courses delivered in?"),
      a: t(
        "Khóa học được tổ chức theo hình thức Offline trực tiếp tại lớp nhằm tối đa hóa trải nghiệm thực hành, tương tác và giải đáp 1-1 cùng giảng viên.",
        "Courses are held offline, in person, to maximize hands-on practice, interaction and 1-on-1 Q&A with instructors.",
      ),
    },
    {
      q: t("Tôi có nhận được chứng nhận sau khi hoàn thành khóa học không?", "Will I receive a certificate after completing a course?"),
      a: t(
        "Để đảm bảo chất lượng, chứng nhận tại NetSpace Academy được cấp dựa trên kết quả học tập thực tế (chuyên cần, bài tập và sản phẩm cuối khóa).",
        "To ensure quality, NetSpace Academy certificates are issued based on actual learning results (attendance, assignments and the final product).",
      ),
    },
    {
      q: t("Tôi có thể thanh toán bằng cách nào?", "How can I pay?"),
      a: t("Bạn có thể thanh toán qua chuyển khoản ngân hàng.", "You can pay by bank transfer."),
    },
    {
      q: t("Tôi có thể đăng ký đào tạo cho công ty của mình không?", "Can I register training for my company?"),
      a: t(
        "Chúng tôi có cung cấp các chương trình đào tạo doanh nghiệp (In-house Training) được thiết kế riêng biệt, bám sát mục tiêu phát triển và bài toán thực tế của từng đơn vị. Liên hệ để được tư vấn chi tiết hơn!",
        "We offer tailored in-house training programs built around each organization's growth goals and real-world challenges. Contact us for more detailed advice!",
      ),
    },
    {
      q: t("Khóa học có phù hợp với người mới bắt đầu không?", "Are the courses suitable for beginners?"),
      a: t(
        "Các khóa học được thiết kế theo lộ trình từ nền tảng đến thực chiến, giúp người mới bắt đầu hoặc chưa có kinh nghiệm chuyên sâu vẫn có thể dễ dàng tiếp thu. Giảng viên và trợ giảng sẽ đồng hành, hướng dẫn từng bước qua các bài tập thực hành.",
        "Courses follow a path from fundamentals to real-world practice, so beginners or those without deep experience can follow along easily. Instructors and teaching assistants guide you step by step through hands-on exercises.",
      ),
    },
  ];

  const testimonials = [
    {
      name: t("Chị Chung", "Ms. Chung"),
      initials: "C",
      role: t("HCNS", "HR & Admin"),
      course: t("AI cho công việc văn phòng", "AI for office work"),
      kind: "ai",
      quote: t(
        "Khóa học giúp tôi biết cách đặt câu lệnh rõ ràng để AI hỗ trợ hiệu quả hơn trong việc tóm tắt tài liệu, lên dàn ý, soạn email và báo cáo. Nội dung thực tế, dễ áp dụng, giúp tôi tiết kiệm đáng kể thời gian.",
        "The course taught me how to write clear prompts so AI helps more effectively with summarizing documents, outlining, and drafting emails and reports. The content is practical and easy to apply, saving me a significant amount of time.",
      ),
    },
    {
      name: t("Anh Nam", "Mr. Nam"),
      initials: "N",
      role: t("Khối Kinh doanh", "Sales Division"),
      course: t("AI cho công việc văn phòng", "AI for office work"),
      kind: "ai",
      quote: t(
        "Sau khóa học, tôi biết cách ứng dụng AI vào công việc kinh doanh như phát triển ý tưởng tiếp cận khách hàng, soạn email và chuẩn bị kịch bản tư vấn. AI giúp tôi có điểm khởi đầu tốt hơn và chủ động hơn trong công việc.",
        "After the course, I know how to apply AI to sales work, such as developing client outreach ideas, drafting emails and preparing consulting scripts. AI gives me a better starting point and makes me more proactive at work.",
      ),
    },
    {
      name: t("Chị Hà Phương", "Ms. Ha Phuong"),
      initials: "HP",
      role: t("Phụ trách MarCom", "MarCom Lead"),
      course: t("Sáng tạo hình ảnh & video bằng điện thoại", "Image & video creation with a smartphone"),
      kind: "video",
      quote: t(
        "Khóa học giúp tôi hệ thống quy trình sáng tạo từ lên ý tưởng, quay đến dựng video. Nhờ đó, tôi chủ động hơn khi sản xuất Reels, TikTok và hạn chế việc phải quay lại nhiều lần.",
        "The course helped me systemize the creative process from ideation and shooting to editing. As a result, I'm more proactive when producing Reels and TikTok and avoid reshooting many times.",
      ),
    },
    {
      name: t("Anh Đức Anh", "Mr. Duc Anh"),
      initials: "ĐA",
      role: t("Phụ trách SEO", "SEO Lead"),
      course: t("AI cho công việc văn phòng", "AI for office work"),
      kind: "ai",
      quote: t(
        "Khóa học giúp tôi ứng dụng AI để phân nhóm từ khóa, phân tích ý định tìm kiếm và lên dàn ý bài viết SEO. Nhờ viết prompt rõ ràng, tôi giảm thời gian soạn nội dung mà vẫn kiểm soát chất lượng trước khi đăng.",
        "The course taught me to apply AI to keyword clustering, search-intent analysis and SEO article outlines. By writing clear prompts, I spend less time drafting content while still controlling quality before publishing.",
      ),
    },
    {
      name: t("Anh Cao Cường", "Mr. Cao Cuong"),
      initials: "CC",
      role: t("Content Creator", "Content Creator"),
      course: t("Sáng tạo hình ảnh & video bằng điện thoại", "Image & video creation with a smartphone"),
      kind: "video",
      quote: t(
        "Sau khóa học, tôi tự tin hơn khi quay, chụp và dựng video bằng điện thoại. Từ bố cục, góc quay đến chỉnh màu, âm thanh, tôi có thể chủ động tạo ra những video chỉn chu hơn cho TikTok và Facebook.",
        "After the course, I'm more confident shooting, photographing and editing videos on my phone. From composition and camera angles to color grading and sound, I can produce more polished videos for TikTok and Facebook.",
      ),
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="NetSpace Academy – Học thật, làm được"
        description="Học viện năng lực AI, truyền thông và sáng tạo số từ kinh nghiệm triển khai thực tế tại doanh nghiệp."
        keywords="NetSpace Academy, đào tạo AI, đào tạo truyền thông, sáng tạo số, đào tạo thực chiến"
        canonicalPath="/netspace-academy"
      />
      <Header />

      <main>
        {/* Banner */}
        <section className="relative overflow-clip pt-[120px] lg:pt-[128px] pb-12 lg:pb-14 bg-[linear-gradient(180deg,#EEF7FF_0%,#F6F1FF_55%,#FFFFFF_100%)]">
          <HeroBackdrop />
          <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-y-12 gap-x-8 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="col-span-12 lg:col-span-6 flex flex-col gap-6"
            >
              <h1 className={`${HEADING} text-[36px] lg:text-[48px] leading-[1.15] m-0`}>
                <span className={GRADIENT_TEXT}>NETSPACE ACADEMY</span>
              </h1>
              <h2 className={`${HEADING} text-[#1A1A2E] text-[24px] lg:text-[30px] leading-[1.25] m-0 -mt-2`}>
                {t("Học thật, làm được", "Learn for real, deliver for real")}
              </h2>
              <p className="text-[#5A5A7A] text-[16px] leading-[1.75] max-w-[540px] m-0">
                {t(
                  "Học viện năng lực AI, truyền thông và sáng tạo số từ kinh nghiệm triển khai thực tế tại doanh nghiệp.",
                  "An academy for AI, media and digital creative skills, built on real-world experience delivering for businesses.",
                )}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#chuong-trinh"
                  className="relative overflow-hidden group inline-flex items-center gap-2 px-8 h-[56px] rounded-full font-semibold text-white bg-gradient-to-r from-[#1EAAFF] to-[#9462FB] shadow-[0_0_20px_rgba(30,170,255,0.4)] hover:shadow-[0_0_30px_rgba(148,98,251,0.6)] transition-all duration-500"
                >
                  <span className="relative z-10">{t("Khám phá chương trình", "Explore programs")}</span>
                  <ArrowRight className="w-4 h-4 relative z-10" />
                  <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
                <a
                  href="#dang-ky"
                  className="inline-flex items-center px-8 h-[56px] rounded-full font-semibold text-[#1EAAFF] border border-[#1EAAFF]/40 bg-white/70 hover:bg-white hover:border-[#1EAAFF] transition-colors"
                >
                  {t("Đăng ký tư vấn", "Request advice")}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="col-span-12 lg:col-span-6 relative"
            >
              <div className="relative sm:py-4">
                <HeroRings />
                <img src={academyHeroImg} alt={t("Học viên NetSpace Academy", "NetSpace Academy learner")} className="relative z-[1] w-full max-w-[340px] lg:max-w-[360px] mx-auto h-auto object-contain" />

                {/* Course group cards: row under the photo on mobile, scattered around it from sm up */}
                <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-0 sm:block sm:absolute sm:inset-0 sm:pointer-events-none">
                  {courseGroups.map((g, i) => (
                    <motion.button
                      key={i}
                      type="button"
                      onClick={() => document.getElementById(`course-group-${i}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                      className={`cursor-pointer text-left bg-white/90 backdrop-blur-md border border-[#1EAAFF]/20 hover:border-[#1EAAFF]/60 rounded-2xl px-2.5 py-3 sm:px-4 sm:py-3.5 shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 sm:absolute sm:z-10 sm:pointer-events-auto sm:w-[184px] ${HERO_COURSE_POS[i]}`}
                    >
                      <span className={`w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-gradient-to-br ${g.bar} flex items-center justify-center text-white`}>
                        <g.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </span>
                      <span className="text-[10px] sm:text-[12px] font-bold leading-[1.3] text-[#131313] uppercase">{g.title}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Small AI task chips (desktop/tablet only) */}
                <div className="hidden sm:block absolute inset-0 pointer-events-none" aria-hidden="true">
                  {aiTasks.map((task, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, i % 2 ? 5 : -5, 0] }}
                      transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                      className={`absolute z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-dashed backdrop-blur-sm ${HERO_TASK_POS[i]}`}
                      style={{ background: `${task.color}0F`, borderColor: `${task.color}40` }}
                    >
                      <task.icon className="w-3 h-3 shrink-0" strokeWidth={2} style={{ color: `${task.color}B3` }} />
                      <span className="text-[11px] font-medium tracking-wide whitespace-nowrap text-[#5A5A7A]">{task.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Philosophy */}
        <section className="relative py-16 lg:py-24 overflow-clip">
          <div className="absolute top-[20%] right-[-6%] w-[460px] h-[460px] bg-[#9462FB] rounded-full blur-[150px] opacity-[0.07] pointer-events-none" />
          <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
            <SectionHead
              title={
                <>
                  {t("Triết lý đào tạo ", "Hands-on ")}
                  <span className={GRADIENT_TEXT}>{t("thực chiến", "training philosophy")}</span>
                </>
              }
              desc={t(
                "Mọi chương trình tại NetSpace Academy được thiết kế trực tiếp từ kinh nghiệm vận hành doanh nghiệp, giúp bạn tự tin làm chủ công việc ngay sau khóa học.",
                "Every NetSpace Academy program is designed directly from real business operations, so you can confidently own your work right after the course.",
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((p, i) => {
                const c = PILLAR_COLORS[i % PILLAR_COLORS.length];
                return (
                  <Reveal key={i} delay={(i % 3) * 0.08}>
                    <div
                      className="group relative h-full overflow-hidden rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-1.5"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        borderColor: `${c}26`,
                        boxShadow: `0 8px 28px ${c}14`,
                      }}
                    >
                      <div className="absolute top-0 inset-x-0 h-1" style={{ background: `linear-gradient(to right, ${c}, ${c}55)` }} />
                      <span
                        className={`${HEADING} absolute top-6 right-7 text-[44px] leading-none`}
                        style={{ color: c, opacity: 0.18 }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div
                        className="relative w-14 h-14 mb-6 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                        style={{ background: `${c}14`, color: c }}
                      >
                        <p.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <h3 className={`${HEADING} text-[19px] leading-[1.3] mb-3 m-0`}>{p.title}</h3>
                      <p className="text-[#5A5A7A] text-[15px] leading-[1.7] m-0">{p.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 2: Courses 2026 */}
        <section
          id="chuong-trinh"
          className="relative py-16 lg:py-24 overflow-clip scroll-mt-[80px] bg-[linear-gradient(180deg,#FFFFFF_0%,#F6F1FF_100%)]"
        >
          <div className="absolute bottom-[-10%] left-[-6%] w-[460px] h-[460px] bg-[#1EAAFF] rounded-full blur-[150px] opacity-[0.08] pointer-events-none" />
          <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
            <SectionHead
              title={
                <>
                  {t("Nhóm khóa học trong năm ","Course groups in ")}
                  <span className={GRADIENT_TEXT}>2026</span>
                </>
              }
              desc={t(
                "Ba nhóm khóa học xoay quanh năng lực AI, sáng tạo nội dung và kỹ năng làm nghề, được thiết kế để học xong là làm được.",
                "Three course groups covering AI, content creation and professional skills, designed so you can apply what you learn right away.",
              )}
            />

            <div className="grid grid-cols-1 gap-16">
              {courseGroups.map((g, i) => (
                <Reveal key={i} delay={i * 0.1} className="h-full scroll-mt-[96px]" id={`course-group-${i}`}>
                  <div className="group h-full flex flex-col gap-6">
                    <div className="flex items-end justify-between gap-4">
                      <h3 className={`${HEADING} text-[26px] lg:text-[32px] leading-[1.2] m-0 uppercase ${GRADIENT_TEXT}`}>{g.title}</h3>
                    </div>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                      <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-xl shadow-[#1EAAFF]/15">
                        <img src={g.image} alt={g.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <div className="flex flex-col gap-5">
                        <div className="flex items-start gap-3">
                          <div className="flex flex-col items-center gap-1.5 pt-0.5 text-[#1EAAFF]">
                            <g.icon className="w-4 h-4" strokeWidth={1.75} />
                            <span className="w-px h-4 bg-[#1EAAFF]/40" />
                          </div>
                          <div>
                            <p className="text-[15px] font-semibold leading-[1.5] mb-1.5 m-0 text-transparent bg-clip-text bg-[linear-gradient(to_right,#1EAAFF,#9462FB)]">{g.tagline}</p>
                            <p className="text-[#5A5A7A] text-[14px] leading-[1.7] m-0">{g.desc}</p>
                          </div>
                        </div>
                        <ul className="flex flex-col list-none p-0 m-0">
                          {g.courses.map((c, k) => (
                            <li key={k} className="border-b border-[#1EAAFF]/15">
                              <a
                                href={c.href}
                                className="group/course flex items-center justify-between gap-4 py-3.5 text-[15px] leading-[1.5] text-[#131313] transition-colors hover:text-[#1EAAFF]"
                              >
                                <span>{c.name}</span>
                                <ArrowUpRight className="w-4 h-4 shrink-0 text-[#1EAAFF] opacity-50 transition-all duration-300 group-hover/course:opacity-100 group-hover/course:translate-x-0.5 group-hover/course:-translate-y-0.5" />
                              </a>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {g.audience.map((a, k) => (
                            <span key={k} className="px-3 py-1 rounded-full text-[12px] leading-[1.4] text-[#5A5A7A] bg-[#1EAAFF]/[0.06] border border-[#1EAAFF]/15">
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="flex justify-center">
              <a
                href="#dang-ky"
                className="relative overflow-hidden group inline-flex items-center gap-2 px-8 h-[56px] rounded-full font-semibold text-white bg-gradient-to-r from-[#1EAAFF] to-[#9462FB] shadow-[0_0_20px_rgba(30,170,255,0.4)] hover:shadow-[0_0_30px_rgba(148,98,251,0.6)] transition-all duration-500"
              >
                <span className="relative z-10">{t("Đăng ký tư vấn lộ trình", "Request a learning path")}</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
                <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* Section 3: Instructors */}
        <section className="relative py-16 lg:py-24 overflow-clip">
          <div className="absolute top-[10%] right-[-6%] w-[420px] h-[420px] bg-[#9462FB] rounded-full blur-[150px] opacity-[0.07] pointer-events-none" />
          <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
            <SectionHead
              title={
                <>
                  {t("Đội ngũ ", "Our ")}
                  <span className={GRADIENT_TEXT}>{t("giảng viên", "instructors")}</span>
                </>
              }
              desc={t(
                "Những người đang trực tiếp làm nghề, đứng lớp bằng kinh nghiệm thực chiến từ các dự án và thương hiệu lớn.",
                "Practitioners who teach with hands-on experience from real projects and leading brands.",
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instructors.map((p, i) => (
                <Reveal key={i} delay={(i % 3) * 0.08} className="h-full">
                  <div className="group relative h-full flex flex-col items-center text-center bg-white/85 backdrop-blur-md rounded-2xl p-8 border border-[#1EAAFF]/20 shadow-lg shadow-[#1EAAFF]/5 hover:border-[#1EAAFF]/50 hover:-translate-y-1 transition-all duration-500">
                    <div className="relative w-[112px] h-[112px] mb-5">
                      <div className="absolute -inset-1.5 rounded-full border border-dashed border-[#1EAAFF]/40 animate-[spin_20s_linear_infinite]" />
                      <div className="absolute inset-0 rounded-full p-[3px] bg-[linear-gradient(135deg,#1EAAFF,#9462FB_70%,#F86880)]">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          {p.img ? (
                            <img src={p.img} alt={p.name} className="w-full h-full object-cover object-top" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[linear-gradient(135deg,#EEF7FF,#F6F1FF)]">
                              <span className={`${HEADING} text-[30px] ${GRADIENT_TEXT}`}>{p.initials}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <h3 className={`${HEADING} text-[20px] leading-[1.3] mb-1.5 m-0`}>{p.name}</h3>
                    <p className="text-[14px] font-semibold leading-[1.5] mb-4 m-0 text-transparent bg-clip-text bg-[linear-gradient(to_right,#1EAAFF,#9462FB)]">
                      {p.role || "\u00A0"}
                    </p>
                    <div className="w-10 h-px bg-[#1EAAFF]/30 mb-4" />
                    <p className="text-[#5A5A7A] text-[14px] leading-[1.7] m-0">{p.bio}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Testimonials */}
        <section className="relative py-16 lg:py-24 overflow-clip bg-[linear-gradient(180deg,#FFFFFF_0%,#EEF7FF_100%)]">
          <div className="absolute top-[8%] left-[-6%] w-[420px] h-[420px] bg-[#1EAAFF] rounded-full blur-[150px] opacity-[0.08] pointer-events-none" />
          <div className="absolute bottom-[-8%] right-[-6%] w-[420px] h-[420px] bg-[#9462FB] rounded-full blur-[150px] opacity-[0.08] pointer-events-none" />
          <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
            <SectionHead
              title={
                <>
                  {t("Phản hồi từ ", "Feedback from ")}
                  <span className={GRADIENT_TEXT}>{t("học viên", "learners")}</span>
                </>
              }
              desc={t(
                "Những chia sẻ thật từ các đồng nghiệp đã tham gia khóa học và áp dụng ngay vào công việc hằng ngày.",
                "Honest words from colleagues who took the courses and applied them straight to their daily work.",
              )}
            />

            <TestimonialCarousel
              items={testimonials.map((m, i) => (
                <Reveal key={i} delay={(i % 3) * 0.08} className="h-full">
          <figure className="group relative m-0 h-full flex flex-col bg-white/85 backdrop-blur-md rounded-2xl p-8 border border-[#1EAAFF]/20 shadow-lg shadow-[#1EAAFF]/5 hover:border-[#1EAAFF]/50 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
            <div
              className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${
                m.kind === "ai" ? "from-[#1EAAFF] to-[#6ADBE3]" : "from-[#9462FB] to-[#F86880]"
              }`}
            />
            <Quote className="w-8 h-8 mb-4 text-[#9462FB]/40" strokeWidth={1.5} />
            <blockquote className="m-0 flex-1 text-[#131313] text-[14.5px] leading-[1.75]">
              {m.quote}
            </blockquote>
            <div className="mt-6 mb-4 pt-5 border-t border-[#1EAAFF]/15 flex items-center gap-4">
              <div className="relative w-12 h-12 shrink-0">
                <div className="absolute -inset-1 rounded-full border border-dashed border-[#1EAAFF]/40 animate-[spin_20s_linear_infinite]" />
                <div className="w-full h-full rounded-full p-[2px] bg-[linear-gradient(135deg,#1EAAFF,#9462FB_70%,#F86880)]">
                  <div className="w-full h-full rounded-full flex items-center justify-center bg-[linear-gradient(135deg,#EEF7FF,#F6F1FF)]">
                    <span className={`${HEADING} text-[15px] ${GRADIENT_TEXT}`}>{m.initials}</span>
                  </div>
                </div>
              </div>
              <figcaption className="min-w-0">
                <div className={`${HEADING} text-[16px] leading-[1.3]`}>{m.name}</div>
                <div className="text-[13px] leading-[1.5] text-[#5A5A7A]">{m.role}</div>
              </figcaption>
            </div>
            <div className="min-h-[47px]">
              <div className="inline-flex w-fit items-start gap-2 px-3 py-1.5 rounded-full text-[12px] leading-[1.4] font-semibold text-[#1EAAFF] bg-[#1EAAFF]/[0.06] border border-[#1EAAFF]/15">
                <BookOpen className="w-3.5 h-3.5 mt-px shrink-0" />
                <span>
                  <span className="font-normal text-[#5A5A7A]">{t("Khóa học", "Course")}: </span>
                  {m.course}
                </span>
              </div>
            </div>
          </figure>
                </Reveal>
              ))}
            />
          </div>
        </section>

        {/* Section 5: Registration */}
        <section
          id="dang-ky"
          className="relative py-16 lg:py-24 overflow-clip scroll-mt-[80px]"
        >
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #1EAAFF 1px, transparent 1px), linear-gradient(to bottom, #1EAAFF 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-[10%] right-[-6%] w-[460px] h-[460px] bg-[#9462FB] rounded-full blur-[150px] opacity-[0.1] pointer-events-none" />
          <div className="absolute bottom-[-8%] left-[-6%] w-[460px] h-[460px] bg-[#1EAAFF] rounded-full blur-[150px] opacity-[0.1] pointer-events-none" />
          <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-start">
              <Reveal className="flex flex-col gap-4">
                <h2 className={`${HEADING} text-[30px] lg:text-[40px] leading-[1.2] m-0`}>
                  {t("Đăng ký tư vấn chọn ", "Request advice to choose the ")}
                  <span className={GRADIENT_TEXT}>{t("khóa học phù hợp", "right course")}</span>
                </h2>
                <ul className="flex flex-col gap-4 list-none p-0 m-0 mt-2 max-w-[440px]">
                  {[
                    t("Tư vấn lộ trình học phù hợp với mục tiêu của bạn", "Learning path advice tailored to your goals"),
                    t("Giải đáp chi tiết về nội dung, hình thức & lịch học", "Detailed answers on content, format & schedule"),
                    t("Cập nhật ưu đãi học phí mới nhất dành cho bạn", "The latest tuition offers for you"),
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[16px] leading-[1.6] text-[#131313]">
                      <span className="mt-0.5 w-6 h-6 rounded-full bg-[#1EAAFF]/12 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#1EAAFF]" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-[#1EAAFF]/20 flex flex-col gap-4 max-w-[440px]">
                  <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#1EAAFF]">
                    {t("Thông tin liên hệ", "Contact")}
                  </span>
                  {CONTACT_PHONE && (
                    <a
                      href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-3 text-[16px] text-[#131313] hover:text-[#1EAAFF] transition-colors self-start"
                    >
                      <span className="w-10 h-10 rounded-full bg-[#1EAAFF]/10 flex items-center justify-center shrink-0">
                        <Phone className="w-[18px] h-[18px] text-[#1EAAFF]" strokeWidth={1.75} />
                      </span>
                      {t("SĐT", "Phone")}: {CONTACT_PHONE}
                    </a>
                  )}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-3 text-[16px] text-[#131313] hover:text-[#1EAAFF] transition-colors self-start"
                  >
                    <span className="w-10 h-10 rounded-full bg-[#1EAAFF]/10 flex items-center justify-center shrink-0">
                      <Mail className="w-[18px] h-[18px] text-[#1EAAFF]" strokeWidth={1.75} />
                    </span>
                    Email: {CONTACT_EMAIL}
                  </a>
                  <div className="flex items-start gap-3 text-[16px] leading-[1.6] text-[#131313]">
                    <span className="w-10 h-10 rounded-full bg-[#1EAAFF]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-[18px] h-[18px] text-[#1EAAFF]" strokeWidth={1.75} />
                    </span>
                    <div className="flex flex-col gap-1 pt-1.5">
                      <span className="font-semibold">{t("Địa điểm đào tạo:", "Training locations:")}</span>
                      <ul className="flex flex-col gap-1 list-none p-0 m-0 text-[15px] text-[#3F3F5A]">
                        <li>
                          <strong className="font-semibold text-[#131313]">{t("Hà Nội", "Hanoi")}:</strong>{" "}
                          {t("Tầng 3, Tòa nhà Mipec, 229 Tây Sơn, Phường Kim Liên, Hà Nội", "3rd floor, Mipec Building, 229 Tay Son, Kim Lien Ward, Hanoi")}
                        </li>
                        <li>
                          <strong className="font-semibold text-[#131313]">{t("Hồ Chí Minh", "Ho Chi Minh City")}:</strong>{" "}
                          {t("DD1 - DD1A Bạch Mã, Phường Hòa Hưng, Quận 10, TP. Hồ Chí Minh", "DD1 - DD1A Bach Ma, Hoa Hung Ward, District 10, Ho Chi Minh City")}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        title={label}
                        className="w-10 h-10 rounded-full border border-[#1EAAFF]/25 bg-white/80 flex items-center justify-center text-[#1EAAFF] transition-all duration-300 hover:bg-[#1EAAFF] hover:text-white hover:border-[#1EAAFF] hover:-translate-y-0.5"
                      >
                        <Icon className="w-[18px] h-[18px]" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal className="w-full">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-[28px] border border-dashed border-[#1EAAFF]/30 pointer-events-none" />
                  <div className="relative overflow-hidden bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#1EAAFF]/20 shadow-[0_20px_50px_rgba(30,170,255,0.12)]">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#1EAAFF] via-[#9462FB] to-[#F86880]" />
                    <RegistrationForm />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="relative py-16 lg:py-24 overflow-clip bg-[linear-gradient(180deg,#FFFFFF_0%,#F6F1FF_100%)]">
          <div className="absolute top-[10%] left-[-6%] w-[420px] h-[420px] bg-[#1EAAFF] rounded-full blur-[150px] opacity-[0.07] pointer-events-none" />
          <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <SectionHead
              title={
                <>
                  {t("Câu hỏi ", "Frequently asked ")}
                  <span className={GRADIENT_TEXT}>{t("thường gặp", "questions")}</span>
                </>
              }
            />
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                {[
                  { start: 0, items: faqs.slice(0, 3) },
                  { start: 3, items: faqs.slice(3) },
                ].map((col, c) => (
                  <Accordion
                    key={c}
                    type="single"
                    collapsible
                    defaultValue={c === 0 ? "faq-0" : undefined}
                    className="flex flex-col gap-4"
                  >
                {col.items.map((f, k) => {
                  const i = col.start + k;
                  return (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="rounded-2xl border border-[#1EAAFF]/20 bg-white/85 backdrop-blur-md px-6 shadow-[0_8px_28px_rgba(30,170,255,0.06)] transition-colors data-[state=open]:border-[#1EAAFF]/50 last:border-b"
                  >
                    <AccordionTrigger className="py-5 text-[16px] leading-[1.5] font-semibold text-[#131313] hover:no-underline [&>svg]:text-[#1EAAFF] [&>svg]:size-5">
                      <span className="flex items-start gap-4">
                        <span className={`${HEADING} text-[15px] leading-[1.6] shrink-0 ${GRADIENT_TEXT}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {f.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] leading-[1.75] text-[#5A5A7A]">
                      <p className="m-0 pb-5 pl-[34px]">{f.a}</p>
                    </AccordionContent>
                  </AccordionItem>
                );
                })}
                  </Accordion>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />

      {showTop && (
        <button
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full bg-[#1EAAFF] hover:bg-[#1EAAFF]/80 shadow-lg shadow-[#1EAAFF]/20 transition-all duration-300 flex items-center justify-center text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
