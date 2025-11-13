import { useEffect, useState } from "react";

export default function useEmojiAPI() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchEmojis() {
    setLoading(true);
    try {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const json = await res.json();
      setData(json?.data?.memes || []);
    } catch (err) {
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEmojis();
  }, []);

  return { data, loading };
}
