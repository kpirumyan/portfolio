"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>The Test1 Error page</h2>
      <div>{error.message}</div>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
