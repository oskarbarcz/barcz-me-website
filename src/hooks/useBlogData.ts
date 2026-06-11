import {useEffect, useState} from "react";

const BLOG_URL = import.meta.env.VITE_BLOG_URL;

export type FetchStatus = "loading" | "ready" | "error";

export default function useBlogData<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<FetchStatus>("loading");

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${BLOG_URL}${endpoint}`, {signal: controller.signal})
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json() as Promise<T>;
      })
      .then((payload) => {
        setData(payload);
        setStatus("ready");
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setStatus("error");
        }
      });

    return () => controller.abort();
  }, [endpoint]);

  return {data, status};
}
