import {useMemo} from "react";
import useBlogData from "./useBlogData.ts";
import type {BlogEvent} from "../types/event.ts";

export default function useEvents(limit?: number) {
  const {data, status} = useBlogData<BlogEvent[]>("/api/events.json");

  const events = useMemo(() => {
    if (!Array.isArray(data)) {
      return [];
    }

    const sorted = [...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
  }, [data, limit]);

  return {events, status};
}
