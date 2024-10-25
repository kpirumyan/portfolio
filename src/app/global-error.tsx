"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>The Global error page</h2>
        <div>{error.message}</div>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
