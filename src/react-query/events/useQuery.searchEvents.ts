import api from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

type UseQuerySearchEventsOptions = {
  initialData?: Awaited<ReturnType<typeof api.events.getEvents>>;
};

export default function useQuerySearchEvents(
  options?: UseQuerySearchEventsOptions
) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  const category = searchParams.get("category") || undefined;
  const params: Parameters<typeof api.events.searchEvents>[0] = {
    page: +page,
    category,
    keywords: "",
  };

  const initialData = options?.initialData;
  const queryKey = ["events", { params }];
  const queryFn = () => api.events.searchEvents(params);

  return useQuery({
    queryKey,
    queryFn,
    initialData,
  });
}
