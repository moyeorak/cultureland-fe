import axios from "axios";
import reviewsAPI from "./reviews.api/reviews.api";

export const client = axios.create({
  baseURL: "https://port-0-culture-land-am952nltdolcl9.sel5.cloudtype.app",
  withCredentials: true,
});

const api = {
  reviews: reviewsAPI,
};

export default api;
