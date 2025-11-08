export default function PackagesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Packages</h1>

      <div className="space-y-8">

        <div>
          <h2 className="text-2xl font-semibold text-pink-600">Starter Reset – $39/week</h2>
          <p>Up to 3 tasks weekly. Great for simple help + reminders.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-600">Weekly Assistant – $99/week</h2>
          <p>10 tasks per week. Lists, scheduling, follow-ups, research.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-violet-600">Small Business Mode – $199/week</h2>
          <p>Inbox handling, listings, client messages, call scripts, organizing chaos.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-violet-600">Sell-It-For-You – $49 + 10%</h2>
          <p>I sell your items online. Photos, descriptions, messages, shipping.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-600">Social Media Lite – $75/week</h2>
          <p>Posting schedule, captions, basic engagement, and page hygiene.</p>
        </div>

      </div>

      <p className="mt-10 text-slate-700">
        Need something custom? Ask for a flat rate — I always make it easy.
      </p>
    </main>
  );
}
