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
  const params = { page: +page, category };

  const initialData = options?.initialData;
  const queryKey = ["events", { params }];
  const queryFn = () => api.events.getEvents(params);

  return useQuery({
    queryKey,
    queryFn,
    initialData,
  });
}
