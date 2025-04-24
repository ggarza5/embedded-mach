import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_auto_auto_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fggarza5%2Fembedded-mach"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
            Deploy now
          </a>
        </div>
      </main>
      <iframe
        className="w-full max-w-[500px] h-[600px] border-0 rounded-lg shadow-lg row-start-3"
        src="https://testnet-dev.mach.exchange/embed?sellChain=10&buyChain=137&sellToken=0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85&buyToken=0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359&showBranding=false&chains=1,10,137&hideAIInput=true&logoUrl=https%3A%2F%2Fpicsum.photos%2F300%2F200&themePrimary=%2300ff00&themeBackground=%2384466"
      />
    </div>
  );
}
