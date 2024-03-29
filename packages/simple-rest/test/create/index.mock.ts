import nock from "nock";

nock("https://api.fake-rest.refine.dev:443", { encodedQueryParams: true })
  .post("/posts", { id: 1001, title: "foo", content: "bar" })
  .reply(201, { id: 1001, title: "foo", content: "bar" }, [
    "Server",
    "nginx/1.17.10",
    "Date",
    "Tue, 30 Mar 2021 11:33:00 GMT",
    "Content-Type",
    "application/json; charset=utf-8",
    "Content-Length",
    "54",
    "Connection",
    "close",
    "X-Powered-By",
    "Express",
    "Vary",
    "Origin, X-HTTP-Method-Override, Accept-Encoding",
    "Access-Control-Allow-Credentials",
    "true",
    "Cache-Control",
    "no-cache",
    "Pragma",
    "no-cache",
    "Expires",
    "-1",
    "Access-Control-Expose-Headers",
    "Location",
    "Location",
    "http://api.fake-rest.refine.dev/posts/1001",
    "X-Content-Type-Options",
    "nosniff",
    "ETag",
    'W/"36-aUpCEyKGcTsfoD+czkB83vdqSGs"',
  ]);
