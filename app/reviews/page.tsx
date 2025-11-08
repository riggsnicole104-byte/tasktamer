export default function ReviewsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Reviews</h1>

      <p className="mb-6 text-slate-700">
        Want to leave a review? Send it to:{" "}
        <a href="mailto:tasktamerhelp@gmail.com" className="text-pink-600">tasktamerhelp@gmail.com</a>
      </p>

      <blockquote className="p-4 border-l-4 border-pink-500 bg-pink-50 mb-4">
        “She saved my sanity.” — Small business owner
      </blockquote>

      <blockquote className="p-4 border-l-4 border-violet-500 bg-violet-50 mb-4">
        “My life finally feels manageable.” — Single mom
      </blockquote>
    </main>
  );
}
