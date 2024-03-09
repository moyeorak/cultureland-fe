export type Response<D = null> =
  | {
      success: true;
      result: D;
      error: null;
    }
  | {
      success: false;
      result: null;
      message: string;
    }
  | {
      success: true;
      result: D;
      message: null;
    };
