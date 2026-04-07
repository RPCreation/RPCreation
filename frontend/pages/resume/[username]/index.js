import { useRouter } from 'next/router';

export default function SharedResumePage() {
  const { query } = useRouter();
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-2xl font-bold">Public Resume</h1>
      <p className="mt-2 text-zinc-300">Public profile route: virajai.com/resume/{query.username}</p>
      <p className="mt-4 text-sm text-zinc-400">Hook this page to backend public resume endpoint for production deployment.</p>
    </main>
  );
}
