'use client';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800 print:hidden">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Interested in collaborating?{" "}
          <a
            href="mailto:alex@a-y.io"
            className="font-bold text-blue-600 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Get In Touch
          </a>
        </p>
      </div>
    </footer>
  );
}
