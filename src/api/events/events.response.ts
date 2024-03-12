import { ResponseData } from "@/types/Event.type";

export type resData<D = null> =
  | {
      success: true;
      result: ResponseData;
      error: null;
    }
  | {
      success: false;
      result: null;
      error: { message: string };
    };
