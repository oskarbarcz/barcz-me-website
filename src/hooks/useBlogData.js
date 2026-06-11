import {useEffect, useState} from "react";

const BLOG_URL = import.meta.env.VITE_BLOG_URL;

export default function useBlogData(endpoint) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${BLOG_URL}${endpoint}`, {signal: controller.signal})
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((payload) => {
        setData(payload);
        setStatus("ready");
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setStatus("error");
        }
      });

    return () => controller.abort();
  }, [endpoint]);

  return {data, status};
}
