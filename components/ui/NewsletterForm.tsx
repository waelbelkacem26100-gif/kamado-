"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex gap-2 mb-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="votre@email.com"
        className="flex-1 min-w-0 text-xs px-3 py-2 rounded-lg border bg-transparent focus:outline-none focus:border-[#00ff87] transition-colors"
        style={{ borderColor: "rgba(255,255,255,0.12)", color: "#f0f0f0" }}
      />
      <button
        type="submit"
        className="px-3 py-2 rounded-lg text-xs font-semibold text-[#050508] bg-[#00ff87] hover:opacity-90 transition-opacity flex-shrink-0"
      >
        OK
      </button>
    </form>
  );
}
