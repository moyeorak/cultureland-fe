import api from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

type UseQueryGetEventsOptions = {
  initialData?: Awaited<ReturnType<typeof api.events.getEvents>>;
};

export default function useQueryGetEvents(options?: UseQueryGetEventsOptions) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  const category = searchParams.get("category") || undefined;
  const orderBy =
    (searchParams.get("orderBy") as "recent" | "popular" | null) || undefined;
  const params: Parameters<typeof api.events.getEvents>[0] = {
    page: +page,
    category,
    orderBy,
  };

  const initialData = options?.initialData;
  const queryKey = ["events", { params }];
  const queryFn = () => api.events.getEvents(params);

  return useQuery({
    queryKey,
    queryFn,
    initialData,
  });
}
