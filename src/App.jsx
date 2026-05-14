import { useState, useEffect, useRef } from "react";
import KPSir from "./pages/KPSir";

const PRIMARY = "#0ea5e9";
const NAVY = "#0a0f1e";
const CYAN = "#22d3ee";
const GOLD = "#f59e0b";

const EXAMS = [
  { name: "GATE", tag: "National", color: "#0ea5e9" },
  { name: "ESE/IES", tag: "National", color: "#0ea5e9" },
  { name: "ISRO", tag: "National", color: "#8b5cf6" },
  { name: "DRDO", tag: "National", color: "#8b5cf6" },
  { name: "BARC", tag: "National", color: "#8b5cf6" },
  { name: "SSC JE", tag: "Central", color: "#10b981" },
  { name: "RRB JE", tag: "Central", color: "#10b981" },
  { name: "APPSC AE", tag: "State", color: "#f59e0b" },
  { name: "TSPSC AE", tag: "State", color: "#f59e0b" },
  { name: "TNPSC Engg", tag: "State", color: "#f59e0b" },
  { name: "KPSC AE", tag: "State", color: "#f59e0b" },
  { name: "UPPSC AE", tag: "State", color: "#f59e0b" },
  { name: "GPSC Engg", tag: "State", color: "#f59e0b" },
  { name: "HPPSC AE", tag: "State", color: "#f59e0b" },
  { name: "BHEL", tag: "PSU", color: "#ef4444" },
  { name: "NTPC", tag: "PSU", color: "#ef4444" },
  { name: "ONGC", tag: "PSU", color: "#ef4444" },
  { name: "GAIL", tag: "PSU", color: "#ef4444" },
  { name: "BEL", tag: "PSU", color: "#ef4444" },
  { name: "HAL", tag: "PSU", color: "#ef4444" },
];

const FEATURES = [
  { icon: "👤", title: "1-to-1 Mentorship", desc: "Dedicated mentor assigned per student. Personal attention, weekly calls, and customised roadmaps." },
  { icon: "🤖", title: "AI Analytics", desc: "Performance heatmaps, rank prediction, weak-topic detection, and smart recommendations." },
  { icon: "📋", title: "State-wise Test Series", desc: "Exact pattern mock tests for every state exam with negative marking and leaderboard." },
  { icon: "🎯", title: "Rank Predictor", desc: "ML-powered rank estimation based on test performance vs. real exam data." },
  { icon: "🎬", title: "Live Classes", desc: "Interactive sessions with top IIT/NIT faculty. Record, rewatch, ask doubts instantly." },
  { icon: "💬", title: "Doubt Solving", desc: "24/7 chat + video doubt resolution with subject experts in under 15 minutes." },
  { icon: "📅", title: "Mock Interviews", desc: "Simulated PSU/GATE interviews with expert panel feedback and improvement plan." },
  { icon: "📊", title: "Smart Dashboard", desc: "Study streaks, daily targets, attendance, notes, and download centre — all in one." },
];

const PLANS = [
  {
    name: "Free",
    price: "₹0",
    color: "#334155",
    features: ["5 Free Mock Tests", "Basic Analytics", "Exam Notifications", "Daily Quiz Access", "Community Forum"],
    cta: "Get Started Free",
  },
  {
    name: "Test Series",
    price: "₹999",
    sub: "/exam",
    color: "#0ea5e9",
    features: ["Unlimited Mocks", "Full Analytics", "Leaderboard Access", "Video Solutions", "PYQ Library", "Doubt Chat"],
    cta: "Buy Test Series",
    popular: true,
  },
  {
    name: "Premium Mentorship",
    price: "₹4,999",
    sub: "/month",
    color: "#8b5cf6",
    features: ["Everything in Test Series", "Weekly 1-to-1 Calls", "Personalised Roadmap", "Live Classes", "Mock Interviews", "AI Rank Predictor"],
    cta: "Start Mentorship",
  },
  {
    name: "Elite Coaching",
    price: "₹9,999",
    sub: "/month",
    color: "#f59e0b",
    features: ["Everything in Premium", "Daily Mentor Access", "Dedicated IIT/NIT Mentor", "PSU Interview Prep", "Resume Review", "Placement Guarantee*"],
    cta: "Go Elite",
  },
];

const TESTIMONIALS = [
  { name: "Arindam Mahator", exam: "GATE ECE 2024", rank: "AIR 47", img: "AM", review: "The way you explain concepts is clear and practical. It helps me understand better every day. Thank you sir for your constant support & guidance..!", state: "Andhra Pradesh" },
  { name: "Sandeep Tewaria", exam: "APPSC AE Civil 2024", rank: "Selected", img: "ST", review: "Thank you so much sir for being the Krishna of my Mahabharata, I have been blessed to find a mentor and teacher like you sir, your teaching style, your concepts all are so easy and simple to comprehend”.", state: "Telangana" },
  { name: "Subharthi Chattopadhyay", exam: "Gate2023", rank: "AIR 51", img: "SC", review: "Your mentorship is not limited to studies alone. You constantly inspire us to stay disciplined, positive, and determined in life.”", state: "westBengal" },
  { name: "Mohd Shehrozl", exam: "GAte 20264", rank: "Air315d", img: "MS", review: "“KP Sir is not just a teacher but a true mentor who guides students in both academics and personal growth.", state: "Gujarat" },
];

const MENTORS = [
  
  { name: "Prof. KPSir", exp: "20 yrs", spec: "Civil /Gate/ESE/ APPSC / SSC JE", students: "1620+", rating: "5.0" },
  { name: "Dr. Shilpa.P", exp: "12 yrs", spec: "MECH / GATE / ESE / ISRO / DRDO / BARC", students: "100+", rating: "4.8" },
  { name: "Prof. G.Balaraju", exp: "22 yrs", spec: "MECH / GATE / ESE / ISRO / DRDO / ", students: "1490+", rating: "5.0" },
  { name: "Mr. Rajendra Prasad ", exp: "15 yrs", spec: "Civil /Gate/ESE/ APPSC / SSC JC", students: "620+", rating: "4.7" },
];

function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(target / 60);
        const id = setInterval(() => {
          start += step;
          if (start >= target) { setVal(target); clearInterval(id); }
          else setVal(start);
        }, 20);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

function NavBar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["Features", "Exams", "Test Series", "Mentors", "Pricing", "Dashboard"];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? (dark ? "rgba(10,15,30,0.97)" : "rgba(255,255,255,0.97)") : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? `1px solid ${dark ? "rgba(14,165,233,0.15)" : "rgba(0,0,0,0.08)"}` : "none",
      transition: "all 0.3s",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", height: 68, gap: 32 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: "linear-gradient(135deg,#0ea5e9,#22d3ee)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, fontWeight: 900, color: "#fff",
            boxShadow: "0 0 16px rgba(14,165,233,0.5)"
          }}>R</div>
          <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 20, color: dark ? "#e2e8f0" : "#0a0f1e", letterSpacing: -0.5 }}>
            <span style={{ color: PRIMARY }}>Rankers</span>Pro
          </span>
        </div>
        {/* Links */}
        <div style={{ display: "flex", gap: 4, flex: 1, justifyContent: "center", flexWrap: "wrap" }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} style={{
              padding: "6px 14px", borderRadius: 8, fontSize: 14, fontWeight: 600,
              color: dark ? "#94a3b8" : "#475569",
              textDecoration: "none", transition: "all 0.2s",
              fontFamily: "'Sora',sans-serif",
            }}
              onMouseEnter={e => { e.target.style.color = PRIMARY; e.target.style.background = dark ? "rgba(14,165,233,0.1)" : "rgba(14,165,233,0.08)"; }}
              onMouseLeave={e => { e.target.style.color = dark ? "#94a3b8" : "#475569"; e.target.style.background = "transparent"; }}
            >{l}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexShrink: 0 }}>
          <button onClick={() => setDark(!dark)} style={{
            width: 36, height: 36, borderRadius: 8, border: `1px solid ${dark ? "#1e293b" : "#e2e8f0"}`,
            background: "transparent", cursor: "pointer", fontSize: 18,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>{dark ? "☀️" : "🌙"}</button>
          <button style={{
            padding: "8px 18px", borderRadius: 10, border: "none", cursor: "pointer",
            background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", color: "#fff",
            fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 14,
            boxShadow: "0 4px 14px rgba(14,165,233,0.4)",
          }}>Book Free Session</button>
        </div>
      </div>
    </nav>
  );
}

function HeroSection({ dark }) {
  return (
    <section style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      background: dark
        ? "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(14,165,233,0.18) 0%, transparent 60%), linear-gradient(180deg,#0a0f1e 0%,#0d1424 100%)"
        : "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(14,165,233,0.12) 0%, transparent 60%), linear-gradient(180deg,#f0f9ff 0%,#e0f2fe 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {/* Grid bg */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(${dark ? "rgba(14,165,233,0.07)" : "rgba(14,165,233,0.04)"} 1px, transparent 1px), linear-gradient(90deg, ${dark ? "rgba(14,165,233,0.07)" : "rgba(14,165,233,0.04)"} 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
      {/* Glowing orbs */}
      <div style={{ position: "absolute", top: "15%", left: "8%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.15), transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", right: "10%", width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.12), transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "140px 24px 80px", textAlign: "center", position: "relative" }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px",
          borderRadius: 100, border: `1px solid rgba(14,165,233,0.4)`,
          background: dark ? "rgba(14,165,233,0.1)" : "rgba(14,165,233,0.08)",
          marginBottom: 28,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e", display: "inline-block" }} />
          <span style={{ fontFamily: "'Sora',sans-serif", fontSize: 13, fontWeight: 600, color: PRIMARY }}>India's # 1 All Engineering Exam 1:1 Mentorship Platform</span>
        </div>

        <h1 style={{
          fontFamily: "'Sora',sans-serif", fontWeight: 900, lineHeight: 1.08,
          fontSize: "clamp(38px,7vw,80px)", color: dark ? "#f1f5f9" : "#0a0f1e",
          marginBottom: 20, letterSpacing: -2,
        }}>
          Crack Any<br />
          <span style={{
            background: "linear-gradient(90deg,#0ea5e9,#22d3ee,#0ea5e9)",
            backgroundSize: "200%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Engineering Exam</span>
          <br />With Your Own Mentor
        </h1>

        <p style={{
          fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(16px,2.2vw,20px)",
          color: dark ? "#94a3b8" : "#475569", maxWidth: 640, margin: "0 auto 36px", lineHeight: 1.7,
        }}>
          Personalised 1-to-1 coaching for GATE, ESE, SSC JE, RRB JE, ISRO, DRDO, BARC, all PSUs and every State AE/JE exam across India — powered by KPSir..
              </p>
              <div style={{ marginBottom: 30 }}>
                  <a
                      href="#kp-sir-profile"
                      style={{
                          display: "inline-block",
                          padding: "14px 34px",
                          borderRadius: 14,
                          textDecoration: "none",
                          background: "linear-gradient(135deg,#f59e0b,#fbbf24)",
                          color: "#0a0f1e",
                          fontFamily: "'Sora',sans-serif",
                          fontWeight: 800,
                          fontSize: 18,
                          boxShadow: "0 8px 24px rgba(245,158,11,0.35)"
                      }}
                  >
                      👨‍🏫 KP Sir Profile
                  </a>
              </div>
              

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 60 }}>
          <button style={{
            padding: "15px 34px", borderRadius: 14, border: "none", cursor: "pointer",
            background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", color: "#fff",
            fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 16,
            boxShadow: "0 8px 32px rgba(14,165,233,0.45)", letterSpacing: 0.2,
            transition: "transform 0.15s",
          }}
            onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.target.style.transform = "translateY(0)"}
          >🚀 Start Learning Free</button>
          <button style={{
            padding: "15px 34px", borderRadius: 14, cursor: "pointer",
            border: `2px solid ${dark ? "rgba(14,165,233,0.4)" : "rgba(14,165,233,0.5)"}`,
            background: dark ? "rgba(14,165,233,0.08)" : "rgba(14,165,233,0.05)",
            color: dark ? "#e2e8f0" : "#0a0f1e",
            fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 16,
            backdropFilter: "blur(8px)", transition: "transform 0.15s",
          }}
            onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.target.style.transform = "translateY(0)"}
          >📅 Book Free Mentorship</button>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 0, justifyContent: "center", flexWrap: "wrap", borderRadius: 20, overflow: "hidden", border: `1px solid ${dark ? "rgba(14,165,233,0.15)" : "rgba(14,165,233,0.12)"}`, background: dark ? "rgba(14,165,233,0.05)" : "rgba(14,165,233,0.04)", backdropFilter: "blur(12px)" }}>
          {[
            { label: "Students Enrolled", val: 85000, suffix: "+" },
            { label: "Selections", val: 12400, suffix: "+" },
            { label: "Expert Mentors", val: 420, suffix: "+" },
            { label: "Exams Covered", val: 60, suffix: "+" },
          ].map((s, i) => (
            <div key={i} style={{
              flex: "1 1 160px", padding: "28px 24px", textAlign: "center",
              borderRight: i < 3 ? `1px solid ${dark ? "rgba(14,165,233,0.12)" : "rgba(14,165,233,0.1)"}` : "none",
            }}>
              <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 900, fontSize: 34, color: PRIMARY, lineHeight: 1 }}>
                <Counter target={s.val} suffix={s.suffix} />
              </div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: dark ? "#64748b" : "#64748b", marginTop: 6, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ dark }) {
  return (
    <section id="features" style={{ padding: "100px 24px", background: dark ? "#0d1424" : "#f8fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontFamily: "'Sora',sans-serif", color: PRIMARY, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: 2 }}>Platform Features</span>
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 900, fontSize: "clamp(28px,4vw,48px)", color: dark ? "#f1f5f9" : "#0a0f1e", marginTop: 10, letterSpacing: -1 }}>Everything You Need to Succeed</h2>
          <p style={{ fontFamily: "'DM Sans',sans-serif", color: dark ? "#64748b" : "#64748b", fontSize: 18, maxWidth: 540, margin: "12px auto 0" }}>A complete ecosystem built for serious engineering exam aspirants.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
          {FEATURES.map((f, i) => (
            <div key={i} style={{
              padding: "28px 26px", borderRadius: 18,
              background: dark ? "rgba(14,165,233,0.04)" : "#fff",
              border: `1px solid ${dark ? "rgba(14,165,233,0.12)" : "#e2e8f0"}`,
              transition: "all 0.25s", cursor: "default",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = PRIMARY; e.currentTarget.style.boxShadow = "0 12px 40px rgba(14,165,233,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = dark ? "rgba(14,165,233,0.12)" : "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icon}</div>
              <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 16, color: dark ? "#e2e8f0" : "#0a0f1e", marginBottom: 8 }}>{f.title}</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: dark ? "#64748b" : "#64748b", lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExamsSection({ dark }) {
  const [filter, setFilter] = useState("All");
  const tags = ["All", "National", "PSU", "State", "Central"];
  const filtered = filter === "All" ? EXAMS : EXAMS.filter(e => e.tag === filter);
  return (
    <section id="exams" style={{ padding: "100px 24px", background: dark ? "#0a0f1e" : "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontFamily: "'Sora',sans-serif", color: CYAN, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: 2 }}>Exams Covered</span>
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 900, fontSize: "clamp(28px,4vw,48px)", color: dark ? "#f1f5f9" : "#0a0f1e", marginTop: 10, letterSpacing: -1 }}>60+ Exams. One Platform.</h2>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
            {tags.map(t => (
              <button key={t} onClick={() => setFilter(t)} style={{
                padding: "8px 20px", borderRadius: 100, border: "2px solid",
                borderColor: filter === t ? PRIMARY : dark ? "#1e293b" : "#e2e8f0",
                background: filter === t ? PRIMARY : "transparent",
                color: filter === t ? "#fff" : dark ? "#94a3b8" : "#475569",
                fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.2s",
              }}>{t}</button>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          {filtered.map((e, i) => (
            <div key={i} style={{
              padding: "12px 20px", borderRadius: 12,
              border: `1.5px solid ${e.color}30`,
              background: dark ? `${e.color}12` : `${e.color}08`,
              display: "flex", flexDirection: "column", gap: 4, minWidth: 130, textAlign: "center",
              transition: "all 0.2s", cursor: "pointer",
            }}
              onMouseEnter={el => { el.currentTarget.style.background = `${e.color}22`; el.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={el => { el.currentTarget.style.background = dark ? `${e.color}12` : `${e.color}08`; el.currentTarget.style.transform = "translateY(0)"; }}
            >
              <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 15, color: e.color }}>{e.name}</span>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: dark ? "#475569" : "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{e.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestSeriesSection({ dark }) {
  const [active, setActive] = useState(0);
  const questions = [
      {
          q: "The first stage in water treatment is-:", opts: ["Sedimentation"	, "Filtration","Disinfection"," Coagulation and mixing"], ans: 4 },
      { q: "If the specific gravity of a suspended particle is increased from 2 to 3 the setting velocity will?", opts: ["not changed", "get doubled", "get increased by 1.5 times", "get increased by 2.25 times"], ans: 2 },
  ];
  const [sel, setSel] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="test-series" style={{ padding: "100px 24px", background: dark ? "#0d1424" : "#f0f9ff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontFamily: "'Sora',sans-serif", color: PRIMARY, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: 2 }}>Test Series</span>
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 900, fontSize: "clamp(28px,4vw,48px)", color: dark ? "#f1f5f9" : "#0a0f1e", marginTop: 10, letterSpacing: -1 }}>Real Exam. Real Experience.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* Mock test UI */}
          <div style={{ borderRadius: 20, overflow: "hidden", border: `1px solid ${dark ? "rgba(14,165,233,0.15)" : "#e2e8f0"}`, background: dark ? "#0a0f1e" : "#fff", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
            {/* Header */}
            <div style={{ padding: "14px 20px", background: "linear-gradient(90deg,#0a0f1e,#0f172a)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, color: "#e2e8f0", fontSize: 14 }}>GATE Mock Test 2025 — EE</span>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ padding: "4px 12px", borderRadius: 8, background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", fontFamily: "'Sora',sans-serif", fontWeight: 800, color: "#ef4444", fontSize: 14 }}>⏱ 02:34:18</div>
                <div style={{ padding: "4px 10px", borderRadius: 8, background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)", color: PRIMARY, fontSize: 12, fontWeight: 700, fontFamily: "'Sora',sans-serif" }}>Q {active + 1}/65</div>
              </div>
            </div>
            <div style={{ padding: "24px 22px" }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
                {[...Array(10)].map((_, i) => (
                  <div key={i} style={{
                    width: 28, height: 28, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 11, cursor: "pointer",
                    background: i === active ? PRIMARY : i < active ? "#22c55e" : dark ? "#1e293b" : "#f1f5f9",
                    color: i === active || i < active ? "#fff" : dark ? "#64748b" : "#475569",
                    transition: "all 0.15s",
                  }} onClick={() => { setActive(i < 2 ? i : 0); setSel(null); setSubmitted(false); }}>{i + 1}</div>
                ))}
                <span style={{ color: dark ? "#475569" : "#94a3b8", fontFamily: "'DM Sans',sans-serif", fontSize: 12, padding: "6px 0" }}>...+55 more</span>
              </div>
              <div style={{ padding: "18px", borderRadius: 12, background: dark ? "#111827" : "#f8fafc", border: `1px solid ${dark ? "#1e293b" : "#e2e8f0"}`, marginBottom: 16 }}>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, color: dark ? "#e2e8f0" : "#0a0f1e", fontSize: 15, lineHeight: 1.6 }}>
                  <span style={{ color: PRIMARY, fontWeight: 800, fontFamily: "'Sora',sans-serif" }}>Q{active + 1}. </span>
                  {questions[active]?.q}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {questions[active]?.opts.map((o, oi) => {
                  const isCorrect = oi === questions[active].ans;
                  const isSelected = sel === oi;
                  let bg = dark ? "#111827" : "#f8fafc";
                  let border = dark ? "#1e293b" : "#e2e8f0";
                  let color = dark ? "#e2e8f0" : "#0a0f1e";
                  if (submitted) {
                    if (isCorrect) { bg = "rgba(34,197,94,0.12)"; border = "#22c55e"; color = "#22c55e"; }
                    else if (isSelected) { bg = "rgba(239,68,68,0.1)"; border = "#ef4444"; color = "#ef4444"; }
                  } else if (isSelected) { bg = "rgba(14,165,233,0.1)"; border = PRIMARY; color = PRIMARY; }
                  return (
                    <div key={oi} onClick={() => !submitted && setSel(oi)} style={{
                      padding: "12px 16px", borderRadius: 10, border: `1.5px solid ${border}`,
                      background: bg, color, fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: 14,
                      cursor: submitted ? "default" : "pointer", transition: "all 0.15s", display: "flex", alignItems: "center", gap: 10,
                    }}>
                      <span style={{ width: 22, height: 22, borderRadius: "50%", border: `2px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{String.fromCharCode(65 + oi)}</span>
                      {o}
                      {submitted && isCorrect && <span style={{ marginLeft: "auto" }}>✓</span>}
                      {submitted && isSelected && !isCorrect && <span style={{ marginLeft: "auto" }}>✗</span>}
                    </div>
                  );
                })}
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                <button onClick={() => { if (sel !== null && !submitted) setSubmitted(true); }} style={{
                  flex: 1, padding: "11px", borderRadius: 10, border: "none", cursor: "pointer",
                  background: "linear-gradient(90deg,#0ea5e9,#22d3ee)", color: "#fff",
                  fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 14,
                }}>Submit Answer</button>
                <button onClick={() => { setActive(a => (a + 1) % 2); setSel(null); setSubmitted(false); }} style={{
                  padding: "11px 18px", borderRadius: 10, border: `1.5px solid ${dark ? "#1e293b" : "#e2e8f0"}`,
                  background: "transparent", cursor: "pointer", color: dark ? "#94a3b8" : "#64748b",
                  fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 14,
                }}>Next →</button>
              </div>
            </div>
          </div>
          {/* Analytics panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ padding: "22px", borderRadius: 18, border: `1px solid ${dark ? "rgba(14,165,233,0.12)" : "#e2e8f0"}`, background: dark ? "rgba(14,165,233,0.04)" : "#fff" }}>
              <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 15, color: dark ? "#e2e8f0" : "#0a0f1e", marginBottom: 16 }}>📊 Live Analytics</div>
              {[
                { label: "Accuracy", val: 78, color: "#22c55e" },
                { label: "Speed Score", val: 65, color: PRIMARY },
                { label: "Percentile", val: 91, color: "#8b5cf6" },
              ].map((m, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: dark ? "#94a3b8" : "#64748b", fontWeight: 600 }}>{m.label}</span>
                    <span style={{ fontFamily: "'Sora',sans-serif", fontSize: 13, color: m.color, fontWeight: 800 }}>{m.val}%</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 4, background: dark ? "#1e293b" : "#f1f5f9", overflow: "hidden" }}>
                    <div style={{ width: `${m.val}%`, height: "100%", borderRadius: 4, background: m.color, transition: "width 1s" }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: "22px", borderRadius: 18, border: `1px solid ${dark ? "rgba(14,165,233,0.12)" : "#e2e8f0"}`, background: dark ? "rgba(14,165,233,0.04)" : "#fff" }}>
              <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 15, color: dark ? "#e2e8f0" : "#0a0f1e", marginBottom: 16 }}>🏆 Leaderboard</div>
              {[
                { rank: 1, name: "Ravi K.", score: 89.3, badge: "🥇" },
                { rank: 2, name: "Asha M.", score: 87.1, badge: "🥈" },
                { rank: 3, name: "You", score: 84.5, badge: "🥉", highlight: true },
                { rank: 4, name: "Pradeep R.", score: 83.2, badge: "" },
                { rank: 5, name: "Sona T.", score: 81.8, badge: "" },
              ].map((p, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 10, marginBottom: 6,
                  background: p.highlight ? "rgba(14,165,233,0.1)" : "transparent",
                  border: p.highlight ? `1px solid rgba(14,165,233,0.2)` : "1px solid transparent",
                }}>
                  <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 12, color: dark ? "#475569" : "#94a3b8", width: 20, textAlign: "center" }}>#{p.rank}</span>
                  <span style={{ fontSize: 16 }}>{p.badge}</span>
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: p.highlight ? 800 : 600, fontSize: 14, color: p.highlight ? PRIMARY : dark ? "#94a3b8" : "#475569", flex: 1 }}>{p.name}</span>
                  <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 14, color: dark ? "#e2e8f0" : "#0a0f1e" }}>{p.score}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "22px", borderRadius: 18, border: `1px solid ${dark ? "rgba(14,165,233,0.12)" : "#e2e8f0"}`, background: dark ? "rgba(14,165,233,0.04)" : "#fff" }}>
              <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 15, color: dark ? "#e2e8f0" : "#0a0f1e", marginBottom: 14 }}>⚠️ Weak Topics Detected</div>
              {["Waste water treatment", "Disaster Mangement", "irrigation"].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", borderBottom: i < 2 ? `1px solid ${dark ? "#1e293b" : "#f1f5f9"}` : "none" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: dark ? "#94a3b8" : "#475569", flex: 1 }}>{t}</span>
                  <button style={{ padding: "3px 10px", borderRadius: 6, border: "none", cursor: "pointer", background: "rgba(14,165,233,0.1)", color: PRIMARY, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 11 }}>Practice</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MentorsSection({ dark }) {
  return (
    <section id="mentors" style={{ padding: "100px 24px", background: dark ? "#0a0f1e" : "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontFamily: "'Sora',sans-serif", color: GOLD, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: 2 }}>Meet Your Mentors</span>
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 900, fontSize: "clamp(28px,4vw,48px)", color: dark ? "#f1f5f9" : "#0a0f1e", marginTop: 10, letterSpacing: -1 }}>IIT & NIT Experts, Exclusively Yours</h2>
          <p style={{ fontFamily: "'DM Sans',sans-serif", color: dark ? "#64748b" : "#64748b", fontSize: 17, maxWidth: 500, margin: "10px auto 0" }}>Every mentor is hand-picked from top institutes with proven results.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 20 }}>
          {MENTORS.map((m, i) => (
            <div key={i} style={{
              padding: "28px 24px", borderRadius: 20, textAlign: "center",
              border: `1px solid ${dark ? "rgba(245,158,11,0.12)" : "#fef3c7"}`,
              background: dark ? "rgba(245,158,11,0.04)" : "#fffbeb",
              transition: "all 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(245,158,11,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{
                width: 72, height: 72, borderRadius: "50%", margin: "0 auto 16px",
                background: `linear-gradient(135deg,${GOLD},#fbbf24)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Sora',sans-serif", fontWeight: 900, fontSize: 22, color: "#0a0f1e",
                boxShadow: "0 8px 24px rgba(245,158,11,0.3)",
              }}>{m.name.split(" ").map(w => w[0]).join("").slice(0, 2)}</div>
              <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 16, color: dark ? "#f1f5f9" : "#0a0f1e", marginBottom: 4 }}>{m.name}</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: dark ? "#64748b" : "#78716c", marginBottom: 14 }}>{m.spec}</div>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
                <span style={{ padding: "3px 10px", borderRadius: 100, background: "rgba(14,165,233,0.1)", color: PRIMARY, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 11 }}>{m.exp} exp</span>
                <span style={{ padding: "3px 10px", borderRadius: 100, background: "rgba(34,197,94,0.1)", color: "#22c55e", fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 11 }}>★ {m.rating}</span>
                <span style={{ padding: "3px 10px", borderRadius: 100, background: "rgba(245,158,11,0.1)", color: GOLD, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 11 }}>{m.students} students</span>
              </div>
              <button style={{
                width: "100%", padding: "10px", borderRadius: 10, border: `1.5px solid ${GOLD}40`,
                background: "rgba(245,158,11,0.08)", color: GOLD,
                fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 14, cursor: "pointer",
                transition: "all 0.15s",
              }}
                onMouseEnter={e => { e.target.style.background = GOLD; e.target.style.color = "#0a0f1e"; }}
                onMouseLeave={e => { e.target.style.background = "rgba(245,158,11,0.08)"; e.target.style.color = GOLD; }}
              >📅 Book a Session</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardSection({ dark }) {
  return (
    <section id="dashboard" style={{ padding: "100px 24px", background: dark ? "#0d1424" : "#f8fafc" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontFamily: "'Sora',sans-serif", color: "#8b5cf6", fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: 2 }}>Student Dashboard</span>
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 900, fontSize: "clamp(28px,4vw,48px)", color: dark ? "#f1f5f9" : "#0a0f1e", marginTop: 10, letterSpacing: -1 }}>Your Command Centre</h2>
        </div>
        <div style={{ borderRadius: 24, overflow: "hidden", border: `1px solid ${dark ? "rgba(139,92,246,0.2)" : "#e2e8f0"}`, boxShadow: "0 30px 80px rgba(0,0,0,0.25)" }}>
          {/* Topbar */}
          <div style={{ background: "linear-gradient(90deg,#0a0f1e,#0f172a)", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>R</div>
              <span style={{ fontFamily: "'Sora',sans-serif", color: "#e2e8f0", fontWeight: 800, fontSize: 14 }}>Rankers Proe Dashboard</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
              <span style={{ fontFamily: "'DM Sans',sans-serif", color: "#64748b", fontSize: 13 }}>Ravi Kumar · GATE EE 2025</span>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#f59e0b,#fbbf24)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 13, color: "#0a0f1e" }}>RK</div>
            </div>
          </div>
          <div style={{ background: dark ? "#0a0f1e" : "#f8fafc", display: "grid", gridTemplateColumns: "200px 1fr", minHeight: 440 }}>
            {/* Sidebar */}
            <div style={{ borderRight: `1px solid ${dark ? "#1e293b" : "#e2e8f0"}`, padding: "20px 0" }}>
              {["📊 Overview", "📝 Tests", "🎓 Classes", "💬 Doubts", "📁 Materials", "🤖 AI Insights", "📅 Schedule", "⚙️ Settings"].map((item, i) => (
                <div key={i} style={{
                  padding: "10px 20px", fontFamily: "'DM Sans',sans-serif", fontWeight: i === 0 ? 700 : 500,
                  fontSize: 14, color: i === 0 ? PRIMARY : dark ? "#475569" : "#64748b",
                  background: i === 0 ? dark ? "rgba(14,165,233,0.1)" : "rgba(14,165,233,0.06)" : "transparent",
                  borderRight: i === 0 ? `3px solid ${PRIMARY}` : "3px solid transparent",
                  cursor: "pointer", transition: "all 0.15s",
                }}>{item}</div>
              ))}
            </div>
            {/* Main */}
            <div style={{ padding: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 18 }}>
                {[
                  { label: "Study Streak", val: "23 days", icon: "🔥", color: "#ef4444" },
                  { label: "Tests Done", val: "47", icon: "✅", color: "#22c55e" },
                  { label: "Current Rank", val: "#1,204", icon: "🏆", color: GOLD },
                  { label: "Accuracy", val: "78.3%", icon: "🎯", color: PRIMARY },
                ].map((s, i) => (
                  <div key={i} style={{ padding: "14px", borderRadius: 12, background: dark ? "#111827" : "#fff", border: `1px solid ${dark ? "#1e293b" : "#e2e8f0"}` }}>
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
                    <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 900, fontSize: 18, color: s.color }}>{s.val}</div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: dark ? "#475569" : "#94a3b8", fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ padding: "16px", borderRadius: 12, background: dark ? "#111827" : "#fff", border: `1px solid ${dark ? "#1e293b" : "#e2e8f0"}` }}>
                  <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 13, color: dark ? "#e2e8f0" : "#0a0f1e", marginBottom: 12 }}>Subject Performance</div>
                  {[
                    { sub: "Water Supply Engineeringy", pct: 85, color: "#22c55e" },
                    { sub: "Surveying", pct: 72, color: PRIMARY },
                    { sub: "Structures", pct: 58, color: "#f59e0b" },
                    { sub: "Air Pollution", pct: 45, color: "#ef4444" },
                  ].map((s, i) => (
                    <div key={i} style={{ marginBottom: 10 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: dark ? "#64748b" : "#64748b" }}>{s.sub}</span>
                        <span style={{ fontFamily: "'Sora',sans-serif", fontSize: 11, color: s.color, fontWeight: 700 }}>{s.pct}%</span>
                      </div>
                      <div style={{ height: 5, borderRadius: 3, background: dark ? "#1e293b" : "#f1f5f9" }}>
                        <div style={{ width: `${s.pct}%`, height: "100%", borderRadius: 3, background: s.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "16px", borderRadius: 12, background: dark ? "#111827" : "#fff", border: `1px solid ${dark ? "#1e293b" : "#e2e8f0"}` }}>
                  <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 13, color: dark ? "#e2e8f0" : "#0a0f1e", marginBottom: 12 }}>Upcoming Schedule</div>
                  {[
                    { time: "Today 6PM", label: "1-to-1 Mentor Call", icon: "📞", color: PRIMARY },
                                      { time: "Tomorrow 10AM", label: "Groundwater & Hydrology Live", icon: "🎬", color: "#8b5cf6" },
                    { time: "Sun 8AM", label: "Full GATE Mock", icon: "📝", color: GOLD },
                  ].map((e, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: i < 2 ? `1px solid ${dark ? "#1e293b" : "#f1f5f9"}` : "none", alignItems: "center" }}>
                      <span style={{ fontSize: 18 }}>{e.icon}</span>
                      <div>
                        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 700, color: dark ? "#e2e8f0" : "#0a0f1e" }}>{e.label}</div>
                        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: e.color, fontWeight: 600 }}>{e.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ dark }) {
  return (
    <section style={{ padding: "100px 24px", background: dark ? "#0a0f1e" : "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontFamily: "'Sora',sans-serif", color: "#22c55e", fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: 2 }}>Success Stories</span>
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 900, fontSize: "clamp(28px,4vw,48px)", color: dark ? "#f1f5f9" : "#0a0f1e", marginTop: 10, letterSpacing: -1 }}>Real Students. Real Selections.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{
              padding: "26px", borderRadius: 20,
              background: dark ? "rgba(34,197,94,0.04)" : "#f0fdf4",
              border: `1px solid ${dark ? "rgba(34,197,94,0.12)" : "#bbf7d0"}`,
              transition: "all 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(34,197,94,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#22c55e,#16a34a)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Sora',sans-serif", fontWeight: 900, fontSize: 14, color: "#fff", flexShrink: 0 }}>{t.img}</div>
                <div>
                  <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 15, color: dark ? "#f1f5f9" : "#0a0f1e" }}>{t.name}</div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: dark ? "#475569" : "#6b7280" }}>{t.state}</div>
                </div>
                <div style={{ marginLeft: "auto", padding: "3px 10px", borderRadius: 8, background: "rgba(34,197,94,0.12)", color: "#22c55e", fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 12 }}>{t.rank}</div>
              </div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: dark ? "#94a3b8" : "#374151", lineHeight: 1.65, marginBottom: 14, fontStyle: "italic" }}>"{t.review}"</div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ padding: "3px 10px", borderRadius: 8, background: "rgba(14,165,233,0.1)", color: PRIMARY, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 11 }}>{t.exam}</span>
                <span style={{ marginLeft: "auto", color: GOLD, fontSize: 13 }}>★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection({ dark }) {
  return (
    <section id="pricing" style={{ padding: "100px 24px", background: dark ? "#0d1424" : "#f0f9ff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontFamily: "'Sora',sans-serif", color: PRIMARY, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: 2 }}>Pricing</span>
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 900, fontSize: "clamp(28px,4vw,48px)", color: dark ? "#f1f5f9" : "#0a0f1e", marginTop: 10, letterSpacing: -1 }}>Simple, Transparent Plans</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 20 }}>
          {PLANS.map((p, i) => (
            <div key={i} style={{
              padding: "30px 24px", borderRadius: 22,
              background: p.popular ? `linear-gradient(160deg,${p.color}18,${p.color}08)` : dark ? "rgba(14,165,233,0.03)" : "#fff",
              border: `2px solid ${p.popular ? p.color : dark ? "rgba(14,165,233,0.1)" : "#e2e8f0"}`,
              position: "relative", transition: "all 0.25s",
              boxShadow: p.popular ? `0 20px 60px ${p.color}25` : "none",
            }}
              onMouseEnter={e => { if (!p.popular) { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = p.color; } }}
              onMouseLeave={e => { if (!p.popular) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = dark ? "rgba(14,165,233,0.1)" : "#e2e8f0"; } }}
            >
              {p.popular && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", padding: "3px 14px", borderRadius: 100, background: p.color, color: "#fff", fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 11, whiteSpace: "nowrap" }}>⭐ Most Popular</div>}
              <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 13, color: p.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>{p.name}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 20 }}>
                <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 900, fontSize: 36, color: dark ? "#f1f5f9" : "#0a0f1e" }}>{p.price}</span>
                {p.sub && <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: dark ? "#64748b" : "#94a3b8" }}>{p.sub}</span>}
              </div>
              <div style={{ marginBottom: 24 }}>
                {p.features.map((f, fi) => (
                  <div key={fi} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                    <span style={{ color: p.color, fontWeight: 800, marginTop: 1, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: dark ? "#94a3b8" : "#475569", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
              <button style={{
                width: "100%", padding: "12px", borderRadius: 12, border: "none", cursor: "pointer",
                background: p.popular ? p.color : `${p.color}15`,
                color: p.popular ? "#fff" : p.color,
                fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 14,
                boxShadow: p.popular ? `0 6px 20px ${p.color}40` : "none",
                transition: "all 0.15s",
              }}
                onMouseEnter={e => { e.target.style.background = p.color; e.target.style.color = "#fff"; }}
                onMouseLeave={e => { e.target.style.background = p.popular ? p.color : `${p.color}15`; e.target.style.color = p.popular ? "#fff" : p.color; }}
              >{p.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ dark }) {
  return (
    <footer style={{ background: "#0a0f1e", padding: "64px 24px 32px", borderTop: "1px solid rgba(14,165,233,0.1)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#fff", fontSize: 18 }}>R</div>
              <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 18, color: "#e2e8f0" }}><span style={{ color: PRIMARY }}>Rankers</span>Pro</span>
            </div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#475569", lineHeight: 1.7 }}>India's most personalised engineering exam mentorship platform. From GATE to State AE — we've got you covered.</p>
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              {["𝕏", "in", "📘", "▶"].map((s, i) => (
                <div key={i} style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.15)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#64748b", fontSize: 13, transition: "all 0.15s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(14,165,233,0.2)"; e.currentTarget.style.color = PRIMARY; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(14,165,233,0.1)"; e.currentTarget.style.color = "#64748b"; }}
                >{s}</div>
              ))}
            </div>
          </div>
          {[
            { heading: "Platform", links: ["Features", "Test Series", "Live Classes", "Mock Interviews", "AI Analytics"] },
            { heading: "Exams", links: ["GATE", "ESE/IES", "SSC JE", "RRB JE", "State AE/JE"] },
            { heading: "Company", links: ["About Us", "Careers", "Blog", "Press", "Contact"] },
            { heading: "Legal", links: ["Privacy Policy", "Terms of Service", "Refund Policy", "Cookie Policy"] },
          ].map((col, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 13, color: "#e2e8f0", marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>{col.heading}</div>
              {col.links.map((l, li) => (
                <div key={li} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#475569", marginBottom: 9, cursor: "pointer", transition: "color 0.15s" }}
                  onMouseEnter={e => e.target.style.color = PRIMARY}
                  onMouseLeave={e => e.target.style.color = "#475569"}
                >{l}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(14,165,233,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#334155" }}>© 2025 Rankers Pro Pvt. Ltd. All rights reserved.</span>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#334155" }}>Made with ❤️ for India's Engineering Aspirants</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://fonts.googleapis.com";
    document.head.appendChild(link);
    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap";
    document.head.appendChild(link2);
  }, []);
    return (
        <div style={{ background: dark ? "#0a0f1e" : "#fff", minHeight: "100vh", transition: "background 0.3s" }}>
            <NavBar dark={dark} setDark={setDark} />
            <HeroSection dark={dark} />
            <FeaturesSection dark={dark} />
            <ExamsSection dark={dark} />
            <TestSeriesSection dark={dark} />
            <MentorsSection dark={dark} />
            <DashboardSection dark={dark} />
            <TestimonialsSection dark={dark} />
            <PricingSection dark={dark} />
            <KPSir />
            <Footer dark={dark} />
        </div>
    );
}
