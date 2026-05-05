export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI Cost Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track AI Prompt Costs<br />
          <span className="text-[#58a6ff]">Per Conversation</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Embed one script tag and instantly see exactly how much each customer chat session costs you. Set budget alerts before your AI bill explodes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Tracking — $19/mo
        </a>
        <div className="mt-12 rounded-xl border border-[#30363d] bg-[#161b22] p-5 text-left">
          <p className="text-xs text-[#8b949e] mb-2 uppercase tracking-widest">Embed in your app</p>
          <pre className="text-sm text-[#58a6ff] overflow-x-auto">{`import { PromptCost } from '@promptcost/sdk';

const tracker = new PromptCost({ apiKey: 'YOUR_KEY' });

await tracker.track({
  conversationId: session.id,
  model: 'gpt-4o',
  inputTokens: 512,
  outputTokens: 128
});`}</pre>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          {[
            ["Per-session cost", "Drill into every chat"],
            ["Budget alerts", "Email + webhook"],
            ["All LLM models", "GPT, Claude, Gemini"]
          ].map(([title, sub]) => (
            <div key={title} className="rounded-lg border border-[#30363d] bg-[#161b22] p-4">
              <p className="text-white font-semibold text-sm">{title}</p>
              <p className="text-[#8b949e] text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-1">Pro</p>
          <p className="text-4xl font-bold text-white mb-1">$19<span className="text-lg font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to control AI costs</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited conversations tracked",
              "Real-time cost dashboard",
              "Budget alerts via email & webhook",
              "All major LLM models supported",
              "JavaScript SDK + REST API",
              "30-day data retention"
            ].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How do I integrate the tracker?",
              "Install our npm package, initialize with your API key, and call tracker.track() after each LLM response. Takes under 5 minutes."
            ],
            [
              "Which AI models are supported?",
              "All OpenAI, Anthropic, Google Gemini, Mistral, and Cohere models. We auto-calculate cost from token counts using current pricing."
            ],
            [
              "How do budget alerts work?",
              "Set a daily or monthly spend limit per conversation or globally. We send email and webhook notifications the moment a threshold is crossed."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="rounded-lg border border-[#30363d] bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-6 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} PromptCost. All rights reserved.
      </footer>
    </main>
  );
}
