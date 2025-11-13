import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useEmojiAPI from "./hooks/useEmojiAPI";
import EmojiGrid from "./components/EmojiGrid";

export default function App() {
  const { data, loading } = useEmojiAPI();
  const [query, setQuery] = useState("");

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const showResults = query.trim().length > 0;

  return (
    <div className="min-h-screen px-6 py-10 flex flex-col items-center bg-gradient-to-b from-indigo-50 to-purple-100">

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-10">
        Emoji Search
      </h1>

      {/* SEARCH BAR */}
      <div className="flex w-full max-w-3xl gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search emojis..."
          className="flex-1 px-5 py-3 rounded-xl border border-gray-300 bg-white shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-200"
        />

        <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition flex items-center justify-center">
          <FaSearch size={18} />
        </button>
      </div>

      {/* SHOW NOTHING INITIALLY UNTIL USER TYPES */}
      {showResults && (
        <>
          {/* RESULT COUNT */}
          <div className="mt-8 text-slate-700 text-lg text-center">
            Found <span className="font-bold">{filtered.length}</span> results 
            for "<span className="font-semibold">{query}</span>"
          </div>

          {/* GRID */}
          <div className="mt-8 w-full max-w-6xl">
            {loading ? (
              <p className="text-center text-slate-600 text-lg">Loading…</p>
            ) : (
              <EmojiGrid list={filtered} />
            )}
          </div>
        </>
      )}
    </div>
  );
}
