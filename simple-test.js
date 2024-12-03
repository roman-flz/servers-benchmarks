import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 100,
  duration: "30s",
  cloud: {
    projectID: 3727725,
    name: "My First Test",
  },
};

export default function () {
  const res = http.get("http://localhost:8151/api/v1");
  check(res, { "status is 200": (r) => r.status === 200 });
}
