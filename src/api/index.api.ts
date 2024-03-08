import axios from "axios";
import eventsAPI from "./events/events.api";

export const client = axios.create({
  baseURL: "https://port-0-culture-land-am952nltdolcl9.sel5.cloudtype.app",
  withCredentials: true,
});

const api = {
  events: eventsAPI,
};

export default api;
