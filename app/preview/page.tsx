import TradingViewWidget from "@/components/TradingViewWidget";
import Image from "next/image";
import {
  MARKET_OVERVIEW_WIDGET_CONFIG,
  HEATMAP_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
} from "@/lib/constants";

export default function PreviewPage() {
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;

  return (
    <main className="min-h-screen text-gray-400">
      <header className="sticky top-0 header">
        <div className="container header-wrapper">
          <Image
            src="/assets/icons/logo.svg"
            alt="Signalist logo"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
          <nav className="flex items-center gap-10 font-medium">
            <span className="text-yellow-500">Dashboard</span>
            <span>Search</span>
            <span>Watchlist</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500 text-yellow-900 text-sm font-bold">
              D
            </div>
            <span className="text-gray-400 hidden md:block">Dardan Kabashi</span>
          </div>
        </div>
      </header>

      <div className="container py-10">
        <section className="grid w-full gap-8 home-section">
          <div className="md:col-span-1 xl:col-span-4">
            <TradingViewWidget
              title="Market Overview"
              scriptUrl={`${scriptUrl}market-overview.js`}
              config={MARKET_OVERVIEW_WIDGET_CONFIG}
              height={600}
              className="custom-chart"
            />
          </div>
          <div className="md:col-span-1 xl:col-span-2">
            <TradingViewWidget
              scriptUrl={`${scriptUrl}stock-heatmap.js`}
              config={HEATMAP_WIDGET_CONFIG}
              height={600}
            />
          </div>
        </section>

        <section className="grid w-full gap-8 home-section mt-8">
          <div className="h-full md:col-span-1 xl:col-span-1">
            <TradingViewWidget
              scriptUrl={`${scriptUrl}timeline.js`}
              config={TOP_STORIES_WIDGET_CONFIG}
              height={600}
            />
          </div>
          <div className="md:col-span-1 xl:col-span-2">
            <TradingViewWidget
              scriptUrl={`${scriptUrl}market-quotes.js`}
              config={MARKET_DATA_WIDGET_CONFIG}
              height={600}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
