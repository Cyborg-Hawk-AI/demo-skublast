"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import {
  SAMPLE_PRODUCTS,
  COLUMN_MAPPINGS,
  GENERATED_LISTINGS,
  DEMO_STEPS,
  PUBLISH_RESULTS,
  MARKETPLACES,
  type GeneratedListing,
} from "@/lib/sample-data";

type StepId = "upload" | "map" | "generate" | "review" | "publish";

function QualityBadge({ score }: { score: number }) {
  const color =
    score >= 90 ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" :
    score >= 80 ? "text-amber-400 bg-amber-500/10 border-amber-500/30" :
    "text-red-400 bg-red-500/10 border-red-500/30";

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${color}`}>
      {score}/100
    </span>
  );
}

function StepIndicator({ currentStep }: { currentStep: StepId }) {
  const currentIndex = DEMO_STEPS.findIndex((s) => s.id === currentStep);

  return (
    <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2">
      {DEMO_STEPS.map((step, i) => {
        const isActive = i === currentIndex;
        const isDone = i < currentIndex;
        return (
          <div key={step.id} className="flex flex-1 items-center gap-2">
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm transition ${
                isActive
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30"
                  : isDone
                    ? "bg-brand-500/20 text-brand-300"
                    : "bg-white/5 text-gray-500"
              }`}
            >
              {isDone ? "✓" : step.icon}
            </div>
            <span
              className={`hidden text-xs font-medium sm:block ${
                isActive ? "text-white" : isDone ? "text-brand-300" : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
            {i < DEMO_STEPS.length - 1 && (
              <div className={`mx-1 h-px flex-1 ${isDone ? "bg-brand-500/40" : "bg-white/10"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function UploadStep({ onNext }: { onNext: () => void }) {
  const [uploaded, setUploaded] = useState(false);
  const [dragging, setDragging] = useState(false);

  const handleUpload = useCallback(() => {
    setUploaded(true);
  }, []);

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Upload Product Spreadsheet</h2>
        <p className="mt-1 text-sm text-gray-400">
          Drop your CSV or Excel file with raw product specifications.
        </p>
      </div>

      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); handleUpload(); }}
        onClick={handleUpload}
        className={`cursor-pointer rounded-2xl border-2 border-dashed p-12 text-center transition ${
          dragging
            ? "border-brand-400 bg-brand-500/10"
            : uploaded
              ? "border-emerald-500/50 bg-emerald-500/5"
              : "border-white/15 hover:border-brand-500/40 hover:bg-white/[0.02]"
        }`}
      >
        {uploaded ? (
          <div className="space-y-3">
            <div className="text-4xl">✅</div>
            <div className="font-medium text-emerald-300">texnova_catalog_q3_2026.xlsx</div>
            <div className="text-sm text-gray-400">
              {SAMPLE_PRODUCTS.length} products · 7 columns · 2.4 MB
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="text-4xl">📄</div>
            <div className="font-medium">Click or drag to upload</div>
            <div className="text-sm text-gray-500">CSV, XLS, XLSX up to 50 MB</div>
          </div>
        )}
      </div>

      {uploaded && (
        <div className="glass-card overflow-hidden">
          <div className="border-b border-white/10 px-4 py-3 text-sm font-medium text-gray-400">
            Preview — first 5 rows
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="px-4 py-2 font-medium text-gray-500">SKU</th>
                  <th className="px-4 py-2 font-medium text-gray-500">Product Name</th>
                  <th className="px-4 py-2 font-medium text-gray-500">Brand</th>
                  <th className="px-4 py-2 font-medium text-gray-500">Material</th>
                  <th className="px-4 py-2 font-medium text-gray-500">MRP</th>
                </tr>
              </thead>
              <tbody>
                {SAMPLE_PRODUCTS.map((p) => (
                  <tr key={p.sku} className="border-b border-white/5">
                    <td className="px-4 py-2 font-mono text-xs text-brand-300">{p.sku}</td>
                    <td className="px-4 py-2">{p.name}</td>
                    <td className="px-4 py-2 text-gray-400">{p.brand}</td>
                    <td className="px-4 py-2 text-gray-400">{p.material}</td>
                    <td className="px-4 py-2">₹{p.mrp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={!uploaded}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
        >
          Map Columns →
        </button>
      </div>
    </div>
  );
}

function MapStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [mapping, setMapping] = useState(false);
  const [mapped, setMapped] = useState(false);

  const runMapping = () => {
    setMapping(true);
    setTimeout(() => {
      setMapping(false);
      setMapped(true);
    }, 1800);
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="text-xl font-semibold">AI Column Mapping</h2>
        <p className="mt-1 text-sm text-gray-400">
          SKUBlast maps your spreadsheet columns to each marketplace&apos;s required fields.
        </p>
      </div>

      {!mapped && (
        <button onClick={runMapping} disabled={mapping} className="btn-primary">
          {mapping ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Mapping columns with AI...
            </span>
          ) : (
            "Run AI Column Mapping"
          )}
        </button>
      )}

      {(mapping || mapped) && (
        <div className="glass-card overflow-hidden">
          <div className="border-b border-white/10 px-4 py-3 text-sm font-medium">
            {mapping ? "Analyzing column headers..." : "✓ Mapping complete — 7/7 columns matched"}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="px-4 py-2 font-medium text-gray-500">Your Column</th>
                  <th className="px-4 py-2 font-medium text-gray-500">Amazon</th>
                  <th className="px-4 py-2 font-medium text-gray-500">Flipkart</th>
                  <th className="px-4 py-2 font-medium text-gray-500">eBay</th>
                  <th className="px-4 py-2 font-medium text-gray-500">Shopify</th>
                  <th className="px-4 py-2 font-medium text-gray-500">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {COLUMN_MAPPINGS.map((m, i) => (
                  <tr
                    key={m.source}
                    className={`border-b border-white/5 transition ${
                      mapping && i <= 2 ? "animate-pulse bg-brand-500/5" : ""
                    } ${mapped ? "opacity-100" : mapping ? (i <= 2 ? "opacity-100" : "opacity-30") : "opacity-0"}`}
                  >
                    <td className="px-4 py-2 font-medium">{m.source}</td>
                    <td className="px-4 py-2 font-mono text-xs text-gray-400">{m.amazon}</td>
                    <td className="px-4 py-2 font-mono text-xs text-gray-400">{m.flipkart}</td>
                    <td className="px-4 py-2 font-mono text-xs text-gray-400">{m.ebay}</td>
                    <td className="px-4 py-2 font-mono text-xs text-gray-400">{m.shopify}</td>
                    <td className="px-4 py-2">
                      <span className="text-emerald-400">{m.confidence}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <button onClick={onBack} className="btn-secondary">← Back</button>
        <button onClick={onNext} disabled={!mapped} className="btn-primary disabled:cursor-not-allowed disabled:opacity-40">
          Generate Listings →
        </button>
      </div>
    </div>
  );
}

function GenerateStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  const runGeneration = () => {
    setGenerating(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setGenerating(false);
          setDone(true);
          return 100;
        }
        return p + 20;
      });
    }, 600);
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="text-xl font-semibold">AI Listing Generation</h2>
        <p className="mt-1 text-sm text-gray-400">
          Self-hosted LLM creates SEO-optimized content per marketplace style guide.
        </p>
      </div>

      {!done && (
        <div className="glass-card p-6">
          {!generating && progress === 0 && (
            <div className="text-center">
              <p className="mb-4 text-gray-400">
                Ready to generate {SAMPLE_PRODUCTS.length} products × {MARKETPLACES.length} marketplaces ={" "}
                <strong className="text-white">{SAMPLE_PRODUCTS.length * MARKETPLACES.length} listings</strong>
              </p>
              <button onClick={runGeneration} className="btn-primary">
                Start AI Generation
              </button>
            </div>
          )}
          {(generating || progress > 0) && (
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Generating listings...</span>
                <span className="font-mono text-brand-300">{progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-600 to-cyan-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 md:grid-cols-4">
                {MARKETPLACES.map((mp, i) => (
                  <div
                    key={mp.id}
                    className={`rounded-lg px-3 py-2 ${
                      progress >= (i + 1) * 25 ? "bg-emerald-500/10 text-emerald-400" : "bg-white/5"
                    }`}
                  >
                    {progress >= (i + 1) * 25 ? "✓" : "…"} {mp.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {done && (
        <div className="space-y-3">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
            ✓ Generated 20 marketplace listings from 5 products (including variant child SKUs)
          </div>
          {GENERATED_LISTINGS.slice(0, 2).map((listing) => (
            <ListingPreviewCard key={listing.sku + listing.marketplace} listing={listing} compact />
          ))}
        </div>
      )}

      <div className="flex justify-between">
        <button onClick={onBack} className="btn-secondary">← Back</button>
        <button onClick={onNext} disabled={!done} className="btn-primary disabled:cursor-not-allowed disabled:opacity-40">
          Review Quality →
        </button>
      </div>
    </div>
  );
}

function ListingPreviewCard({ listing, compact = false }: { listing: GeneratedListing; compact?: boolean }) {
  const [expanded, setExpanded] = useState(!compact);

  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-white/[0.02]"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-brand-300">{listing.sku}</span>
          <span className="text-sm font-medium">{listing.productName}</span>
          <span className="rounded bg-white/10 px-2 py-0.5 text-xs text-gray-400">{listing.marketplace}</span>
        </div>
        <div className="flex items-center gap-3">
          <QualityBadge score={listing.qualityScore} />
          <span className="text-gray-500">{expanded ? "▲" : "▼"}</span>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-white/5 px-4 py-4 space-y-4">
          <div>
            <div className="text-xs font-medium uppercase text-gray-500">Title</div>
            <p className="mt-1 text-sm">{listing.title}</p>
          </div>
          <div>
            <div className="text-xs font-medium uppercase text-gray-500">Bullet Points</div>
            <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-gray-300">
              {listing.bullets.map((b) => (
                <li key={b.slice(0, 30)}>{b}</li>
              ))}
            </ul>
          </div>
          {!compact && (
            <>
              <div>
                <div className="text-xs font-medium uppercase text-gray-500">Description</div>
                <p className="mt-1 text-sm text-gray-400">{listing.description}</p>
              </div>
              <div>
                <div className="text-xs font-medium uppercase text-gray-500">Variants ({listing.variants.length})</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {listing.variants.map((v) => (
                    <span key={v.childSku} className="rounded-lg bg-white/5 px-2 py-1 font-mono text-xs text-gray-400">
                      {v.color}/{v.size} → {v.childSku}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
          {listing.issues.length > 0 && (
            <div className="space-y-2">
              {listing.issues.map((issue) => (
                <div
                  key={issue.message}
                  className={`rounded-lg px-3 py-2 text-xs ${
                    issue.severity === "error"
                      ? "border border-red-500/30 bg-red-500/10 text-red-300"
                      : "border border-amber-500/30 bg-amber-500/10 text-amber-300"
                  }`}
                >
                  {issue.severity === "error" ? "⛔" : "⚠️"} {issue.message}
                  {issue.fix && <span className="block mt-1 text-gray-400">Fix: {issue.fix}</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ReviewStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [selected, setSelected] = useState<string | null>(GENERATED_LISTINGS[0].sku + GENERATED_LISTINGS[0].marketplace);
  const avgScore = Math.round(
    GENERATED_LISTINGS.reduce((s, l) => s + l.qualityScore, 0) / GENERATED_LISTINGS.length
  );
  const issueCount = GENERATED_LISTINGS.reduce((s, l) => s + l.issues.length, 0);
  const errorCount = GENERATED_LISTINGS.reduce(
    (s, l) => s + l.issues.filter((i) => i.severity === "error").length,
    0
  );

  const activeListing = GENERATED_LISTINGS.find(
    (l) => l.sku + l.marketplace === selected
  );

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Quality Review</h2>
        <p className="mt-1 text-sm text-gray-400">
          QA agent scored all listings. Review flagged issues before publishing.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-brand-300">{avgScore}</div>
          <div className="text-xs text-gray-500">Avg. Score</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-amber-400">{issueCount}</div>
          <div className="text-xs text-gray-500">Issues Found</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-red-400">{errorCount}</div>
          <div className="text-xs text-gray-500">Blocking Errors</div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-2">
          {GENERATED_LISTINGS.map((listing) => {
            const id = listing.sku + listing.marketplace;
            return (
              <button
                key={id}
                onClick={() => setSelected(id)}
                className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition ${
                  selected === id
                    ? "border-brand-500/50 bg-brand-500/10"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                <div>
                  <span className="font-mono text-xs text-brand-300">{listing.sku}</span>
                  <span className="ml-2">{listing.marketplace}</span>
                </div>
                <div className="flex items-center gap-2">
                  {listing.issues.length > 0 && (
                    <span className="text-xs text-amber-400">{listing.issues.length} issues</span>
                  )}
                  <QualityBadge score={listing.qualityScore} />
                </div>
              </button>
            );
          })}
        </div>

        <div>
          {activeListing && <ListingPreviewCard listing={activeListing} />}
        </div>
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="btn-secondary">← Back</button>
        <button onClick={onNext} className="btn-primary">
          Publish to Marketplaces →
        </button>
      </div>
    </div>
  );
}

function PublishStep({ onBack }: { onBack: () => void }) {
  const [publishing, setPublishing] = useState(false);
  const [published, setPublished] = useState(false);
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<string[]>(
    MARKETPLACES.map((m) => m.id)
  );

  const toggleMarketplace = (id: string) => {
    setSelectedMarketplaces((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const runPublish = () => {
    setPublishing(true);
    setTimeout(() => {
      setPublishing(false);
      setPublished(true);
    }, 2500);
  };

  const totalPublished = PUBLISH_RESULTS
    .filter((r) => selectedMarketplaces.includes(r.marketplace.toLowerCase()))
    .reduce((s, r) => s + r.published, 0);

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Publish to Marketplaces</h2>
        <p className="mt-1 text-sm text-gray-400">
          Batch API push to connected marketplace accounts.
        </p>
      </div>

      {!published && (
        <>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {MARKETPLACES.map((mp) => {
              const selected = selectedMarketplaces.includes(mp.id);
              return (
                <button
                  key={mp.id}
                  onClick={() => toggleMarketplace(mp.id)}
                  className={`rounded-xl border p-4 text-left transition ${
                    selected
                      ? "border-brand-500/50 bg-brand-500/10"
                      : "border-white/10 bg-white/[0.02] opacity-50"
                  }`}
                >
                  <div className={`mb-2 h-1 w-8 rounded-full bg-gradient-to-r ${mp.color}`} />
                  <div className="font-medium">{mp.name}</div>
                  <div className="text-xs text-gray-500">{mp.region}</div>
                  <div className="mt-2 text-xs text-brand-300">{selected ? "✓ Selected" : "Deselected"}</div>
                </button>
              );
            })}
          </div>

          <div className="glass-card p-4 text-sm text-gray-400">
            Publishing <strong className="text-white">{GENERATED_LISTINGS.length}</strong> parent listings
            with variant child SKUs to <strong className="text-white">{selectedMarketplaces.length}</strong> marketplaces.
            Estimated credits: <strong className="text-brand-300">38 SKU publishes</strong>
          </div>

          <button
            onClick={runPublish}
            disabled={publishing || selectedMarketplaces.length === 0}
            className="btn-primary w-full py-3.5 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {publishing ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Publishing via API...
              </span>
            ) : (
              "🚀 Publish All Listings"
            )}
          </button>
        </>
      )}

      {published && (
        <div className="space-y-4">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-4 text-center">
            <div className="text-3xl">🎉</div>
            <div className="mt-2 text-lg font-semibold text-emerald-300">Publish Complete!</div>
            <div className="mt-1 text-sm text-gray-400">
              {totalPublished} listings live across {selectedMarketplaces.length} marketplaces
            </div>
          </div>

          <div className="glass-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Marketplace</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Published</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Failed</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {PUBLISH_RESULTS.filter((r) =>
                  selectedMarketplaces.includes(r.marketplace.toLowerCase())
                ).map((r) => (
                  <tr key={r.marketplace} className="border-b border-white/5">
                    <td className="px-4 py-3 font-medium">{r.marketplace}</td>
                    <td className="px-4 py-3 text-emerald-400">{r.published}</td>
                    <td className="px-4 py-3 text-red-400">{r.failed}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs ${
                          r.status === "success"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-amber-500/10 text-amber-400"
                        }`}
                      >
                        {r.status === "success" ? "Success" : "Partial — 2 need fixes"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/" className="btn-secondary text-center">Back to Home</Link>
            <button
              onClick={() => { setPublished(false); setPublishing(false); }}
              className="btn-primary"
            >
              Run Again
            </button>
          </div>
        </div>
      )}

      {!published && (
        <div className="flex justify-start">
          <button onClick={onBack} className="btn-secondary">← Back</button>
        </div>
      )}
    </div>
  );
}

export default function DemoPage() {
  const [step, setStep] = useState<StepId>("upload");

  const goNext = () => {
    const idx = DEMO_STEPS.findIndex((s) => s.id === step);
    if (idx < DEMO_STEPS.length - 1) {
      setStep(DEMO_STEPS[idx + 1].id as StepId);
    }
  };

  const goBack = () => {
    const idx = DEMO_STEPS.findIndex((s) => s.id === step);
    if (idx > 0) {
      setStep(DEMO_STEPS[idx - 1].id as StepId);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-8 text-center">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs text-amber-300">
          Interactive Mock Demo — No backend required
        </div>
        <h1 className="text-3xl font-bold">SKUBlast Product Demo</h1>
        <p className="mt-2 text-gray-400">
          Walk through the full pipeline with sample TexNova apparel catalog data.
        </p>
      </div>

      <div className="glass-card mb-8 p-6">
        <StepIndicator currentStep={step} />
      </div>

      <div className="glass-card p-6 md:p-8">
        {step === "upload" && <UploadStep onNext={goNext} />}
        {step === "map" && <MapStep onNext={goNext} onBack={goBack} />}
        {step === "generate" && <GenerateStep onNext={goNext} onBack={goBack} />}
        {step === "review" && <ReviewStep onNext={goNext} onBack={goBack} />}
        {step === "publish" && <PublishStep onBack={goBack} />}
      </div>
    </div>
  );
}
