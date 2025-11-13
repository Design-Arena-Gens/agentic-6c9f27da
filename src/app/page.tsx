import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center gap-6 py-24 px-8 text-center sm:text-left sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={110}
          height={22}
          priority
        />
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Agentic app is live
        </h1>
        <p className="max-w-xl text-lg leading-7 text-zinc-600 dark:text-zinc-400">
          Deployed on Vercel with a minimal Next.js + Tailwind setup.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="/api/health"
          >
            Health check API
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-full border border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Docs
          </a>
        </div>
      </main>
    </div>
  );
}
