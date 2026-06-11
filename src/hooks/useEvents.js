import {useMemo} from "react";
import useBlogData from "./useBlogData.js";

export default function useEvents(limit) {
  const {data, status} = useBlogData("/api/events.json");

  const events = useMemo(() => {
    if (!Array.isArray(data)) {
      return [];
    }

    const sorted = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
    return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
  }, [data, limit]);

  return {events, status};
}
