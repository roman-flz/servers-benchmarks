import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 100, // Virtual users
  duration: "30s", // Test duration
  cloud: {
    projectID: 3727725, // Your project ID in K6 cloud
    name: "My First Test", // Test suite name
  },
};

export default function () {
  const res = http.get("http://127.0.0.1:8910/api/v1/");
  check(res, { "status is 200": (r) => r.status === 200 });
}
