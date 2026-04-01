import { Footer } from "@/components/Footer";

const privacySections = [
  {
    id: "01",
    icon: "📋",
    title: "Information We Collect",
    content: null,
    cards: [
      { icon: "👤", label: "Account Info", value: "Name, email, hashed password" },
      { icon: "🥕", label: "Recipe Data", value: "Ingredients, preferences, saved recipes" },
      { icon: "⚙️", label: "Usage Data", value: "Feature usage, session data, device info" },
      { icon: "🌐", label: "Technical Data", value: "IP address, browser type, timestamps" },
    ],
    extra: "We collect information you provide when creating an account, generating recipes, or saving favorites. We also automatically collect certain technical data when you use our platform.",
  },
  {
    id: "02",
    icon: "🎯",
    title: "How We Use Your Information",
    bullets: [
      "Generate AI-powered recipes based on your ingredients and dietary preferences",
      "Authenticate you securely via NextAuth.js sessions",
      "Store and sync your saved and favourite recipes across devices",
      "Improve our AI prompts and user interface based on anonymous usage patterns",
      "Send important service updates, security alerts, or account notices",
    ],
    content: "We do not use your data for advertising profiling or sell it to third parties for marketing.",
  },
  {
    id: "03",
    icon: "🤝",
    title: "Data Sharing & Disclosure",
    bullets: [
      "Google GenAI — Your recipe prompts are sent to Google's Generative AI API to produce recipe suggestions.",
      "MongoDB Atlas — Your account and recipe data is stored securely in MongoDB cloud infrastructure.",
      "Legal requirements — We may disclose data when required by law or court order.",
    ],
    content: "We never sell, rent, or trade your personal information with advertisers or data brokers.",
  },
  {
    id: "04",
    icon: "🤖",
    title: "AI & Google GenAI Usage",
    highlight: "When you generate a recipe, the ingredients and preferences you enter are transmitted to Google's Generative AI API (@google/genai). Cookify does not store your prompts long-term, but Google's own data policies apply to these API interactions.",
    content: "We recommend not including sensitive personal information within your recipe prompts. Generated recipes are returned and stored in your Cookify account under your control.",
  },
  {
    id: "05",
    icon: "🔒",
    title: "Data Storage & Security",
    bullets: [
      "Passwords are hashed and never stored in plain text",
      "Authentication sessions managed by NextAuth.js with secure tokens",
      "Environment variables (API keys, secrets) never exposed to the frontend",
      "HTTPS enforced on all connections",
    ],
    content: "We retain your data for as long as your account is active. You may request deletion at any time.",
  },
  {
    id: "06",
    icon: "⚖️",
    title: "Your Rights",
    bullets: [
      "Access — Request a copy of all personal data we hold on you",
      "Correction — Update inaccurate or incomplete information",
      "Deletion — Request complete deletion of your account and data",
      "Portability — Export your saved recipes in a machine-readable format",
      "Withdrawal — Withdraw consent for optional data processing at any time",
    ],
    content: "To exercise any of these rights, contact us below. We will respond within 30 days.",
  },
  {
    id: "07",
    icon: "🍪",
    title: "Cookies & Local Storage",
    bullets: [
      "Session cookies — To keep you logged in via NextAuth.js",
      "Zustand state — In-memory state management for recipe preferences",
      "No tracking cookies — We do not use third-party advertising cookies",
    ],
    content: "You can clear cookies through your browser settings. Doing so will log you out of Cookify.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="relative w-full pt-10">

      {/* ===== SECTIONS ===== */}
      <section className="flex flex-col items-center gap-10 my-10 mt-16 px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-black text-center">
          What This Policy Covers
        </h2>

        <div className="w-full max-w-4xl flex flex-col gap-8">
          {privacySections.map((sec) => (
            <div
              key={sec.id}
              className="bg-gray-50 rounded-2xl px-6 sm:px-10 py-8 shadow-sm"
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-xs font-bold text-orange-500 flex-shrink-0">
                  {sec.id}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black flex items-center gap-2">
                  <span>{sec.icon}</span> {sec.title}
                </h3>
              </div>

              {/* Cards grid */}
              {sec.cards && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {sec.cards.map((card) => (
                    <div key={card.label} className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col gap-1">
                      <span className="text-xl">{card.icon}</span>
                      <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">{card.label}</span>
                      <span className="text-xs font-medium text-zinc-700">{card.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlight box */}
              {sec.highlight && (
                <div className="bg-orange-50 border border-orange-200 border-l-4 border-l-orange-500 rounded-xl p-4 mb-4">
                  <p className="text-sm text-orange-900">{sec.highlight}</p>
                </div>
              )}

              {/* Bullet list */}
              {sec.bullets && (
                <ul className="flex flex-col gap-3 mb-4">
                  {sec.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-600">
                      <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0 mt-1.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {/* Paragraph */}
              {sec.content && (
                <p className="text-sm text-zinc-500">{sec.content}</p>
              )}

              {sec.extra && (
                <p className="text-sm text-zinc-500 mt-3">{sec.extra}</p>
              )}
            </div>
          ))}
        </div>
      </section>

     

      <Footer />
    </div>
  );
}