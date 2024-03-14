import axios from "axios";
import partnersAPI from "./accounts/partners/partners.api";
import usersAPI from "./accounts/users/users.api";
import eventsAPI from "./events/events.api";
import reviewsAPI from "./reviews/reviews.api";

const NODE_ENV = process.env.NODE_ENV;
const baseURL =
  NODE_ENV === "production"
    ? "https://port-0-culture-land-am952nltdolcl9.sel5.cloudtype.app"
    : "http://localhost:5050";

export const client = axios.create({
  baseURL,
  withCredentials: true,
});

const api = {
  users: usersAPI,
  partners: partnersAPI,
  events: eventsAPI,
  reviews: reviewsAPI,
};

export default api;
