import { Footer, Header, Heroes } from "./_components"

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center text-center gap-y-8 flex-1 px-6 pb-10 md:justify-start">
        <Header />
        <Heroes />
      </div>
      <Footer />
    </div>
  )
}

export default MarketingPage