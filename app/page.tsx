import Link from "next/link";

const features = [
  {
    icon: "📊",
    title: "Bulk Sheet Ingestion",
    description:
      "Upload CSV or Excel with raw product specs. AI automatically maps your columns to marketplace-specific required fields.",
  },
  {
    icon: "✨",
    title: "AI Listing Generator",
    description:
      "SEO-optimized titles, bullet points, and descriptions tailored to each marketplace's style guide — powered by self-hosted LLM.",
  },
  {
    icon: "🚀",
    title: "Marketplace Publisher",
    description:
      "Direct API push to Amazon Seller Central, eBay, Flipkart, and Shopify. Batch publish hundreds of SKUs in minutes.",
  },
  {
    icon: "📈",
    title: "Quality Scorer",
    description:
      "Flags incomplete or low-quality listings before publish with actionable fix suggestions. Catch errors before they cost you.",
  },
  {
    icon: "🎨",
    title: "Variant Handler",
    description:
      "Auto-generates parent-child ASIN and listing structures for products with size, color, and other variant dimensions.",
  },
  {
    icon: "🤖",
    title: "Agentic Automation",
    description:
      "Ingestion, generation, QA, and publish agents run autonomously. You only review flagged listings before final publish.",
  },
];

const stats = [
  { value: "10,000+", label: "SKUs per batch" },
  { value: "4", label: "Marketplaces" },
  { value: "94%", label: "Avg. quality score" },
  { value: "15¢", label: "Per additional SKU" },
];

const competitors = [
  { name: "Listing agencies", price: "$1–3/SKU/marketplace", note: "Manual, slow, expensive" },
  { name: "Listing Mirror", price: "Sync only", note: "No AI generation from raw specs" },
  { name: "Codisto", price: "Sync only", note: "No bulk spec-to-listing pipeline" },
  { name: "SKUBlast", price: "$0.15/SKU", note: "Full AI pipeline + publish", highlight: true },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-brand-600/10 blur-3xl" />
          <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
              <span className="h-2 w-2 animate-pulse-soft rounded-full bg-brand-400" />
              Ecommerce Bulk SKU Listing Automation
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              From spreadsheet to{" "}
              <span className="gradient-text">marketplace listings</span> in minutes
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
              Upload a product spreadsheet. AI generates marketplace-ready listings and
              publishes them to Amazon, Flipkart, and eBay — at a fraction of agency costs.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/demo" className="btn-primary px-8 py-3.5 text-base">
                Try Interactive Demo
              </Link>
              <Link href="/#pricing" className="btn-secondary px-8 py-3.5 text-base">
                View Pricing
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              For manufacturers & wholesale sellers listing 100–10,000 SKUs
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-5 text-center">
                <div className="text-2xl font-bold text-brand-300 md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-white/5 bg-surface-800/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Everything you need to list at scale</h2>
            <p className="mt-4 text-gray-400">
              Stop paying listing agencies $1–3 per SKU per marketplace. Automate the entire
              pipeline from raw product data to live listings.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass-card group p-6 transition hover:border-brand-500/30 hover:bg-white/[0.05]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-2xl transition group-hover:bg-brand-500/20">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Three steps to live listings</h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Upload your product sheet",
                desc: "Drop a CSV or Excel file with raw specs — product names, materials, sizes, colors, pricing.",
              },
              {
                step: "02",
                title: "AI maps, generates & scores",
                desc: "Column mapping, SEO content generation, variant structuring, and quality scoring — all automated.",
              },
              {
                step: "03",
                title: "Review & publish",
                desc: "Fix flagged issues, approve listings, and batch publish to all connected marketplaces.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-bold text-brand-500/20">{item.step}</div>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-t border-white/5 bg-surface-800/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">10× cheaper than agencies</h2>
            <p className="mt-4 text-gray-400">
              Listing agencies charge per SKU per marketplace. SKUBlast charges per SKU published — period.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="px-6 py-4 text-left font-medium text-gray-400">Solution</th>
                  <th className="px-6 py-4 text-left font-medium text-gray-400">Cost</th>
                  <th className="px-6 py-4 text-left font-medium text-gray-400">Notes</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c) => (
                  <tr
                    key={c.name}
                    className={`border-b border-white/5 ${c.highlight ? "bg-brand-500/10" : ""}`}
                  >
                    <td className={`px-6 py-4 font-medium ${c.highlight ? "text-brand-300" : ""}`}>
                      {c.name}
                    </td>
                    <td className="px-6 py-4 text-gray-300">{c.price}</td>
                    <td className="px-6 py-4 text-gray-500">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Simple, credit-based pricing</h2>
            <p className="mt-4 text-gray-400">
              Pay for what you publish. No per-marketplace fees, no hidden costs.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-lg">
            <div className="glass-card relative overflow-hidden p-8">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/20 blur-2xl" />
              <div className="relative">
                <div className="text-sm font-medium uppercase tracking-wider text-brand-400">
                  Starter Plan
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-bold">$99</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="mt-2 text-gray-400">Includes 500 SKU publishes per month</p>

                <ul className="mt-8 space-y-3 text-sm text-gray-300">
                  {[
                    "500 SKU publishes included",
                    "$0.15 per additional SKU",
                    "All 4 marketplaces (Amazon, Flipkart, eBay, Shopify)",
                    "AI listing generation & quality scoring",
                    "Variant handler & batch publishing",
                    "Self-hosted LLM — no token markup",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href="/demo" className="btn-primary mt-8 w-full py-3.5">
                  Start with Demo
                </Link>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              Example: 2,000 SKUs/month = $99 + (1,500 × $0.15) = <strong className="text-gray-300">$324/mo</strong>
              <br />
              vs. agencies at $1/SKU × 4 marketplaces = <strong className="text-gray-300">$8,000/mo</strong>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-gradient-to-b from-surface-800/50 to-surface-900 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to blast your catalog live?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            See how SKUBlast transforms a 5-SKU product sheet into marketplace-ready listings
            across Amazon, Flipkart, eBay, and Shopify — in under 5 minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/demo" className="btn-primary px-8 py-3.5 text-base">
              Launch Interactive Demo
            </Link>
            <Link href="/research" className="btn-secondary px-8 py-3.5 text-base">
              Read the Research
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
