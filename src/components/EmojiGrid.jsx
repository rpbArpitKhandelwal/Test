import EmojiCard from "./EmojiCard";

export default function EmojiGrid({ list }) {
  return (
    <div
      className="
        grid 
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 gap-8
      "
    >
      {list.map((item) => (
        <EmojiCard key={item.id} item={item} />
      ))}
    </div>
  );
}
