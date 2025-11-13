export default function EmojiCard({ item }) {
  return (
    <div
      className="
        bg-white rounded-2xl shadow-md hover:shadow-xl 
        transition p-6 flex flex-col 
        items-center justify-between h-56
      "
    >
      <img
        src={item.url}
        alt={item.name}
        className="w-30 h-30 object-contain"
      />

      <h3 className="mt-4 text-center text-lg font-semibold text-slate-800 line-clamp-1">
        {item.name}
      </h3>
    </div>
  );
}
