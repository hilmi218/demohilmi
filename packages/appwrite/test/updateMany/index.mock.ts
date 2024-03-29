import nock from "nock";

nock("https://matej10qa.appwrite.org:443", { encodedQueryParams: true })
  .post("/v1/account/sessions/anonymous", {})
  .reply(
    201,
    [
      "1f8b0800000000000003758f4b4fc3301084ff0a8a7a83467e35a4b91554240ef4800277d75ea8d5d68ed64e4584f8efb84dc8431527db33bbdf8cbf9399d14991649c89fb6d2698d2d9822b99514e93bb64a6106400bd0a718611c6e66439a7594979c145c1f294e6f92d21052171b8f680cf53186122d74c52c1a20f5f95416841fc1ac47b5085ee6434601c95d6d9e6e86a3f92df2e8d47c24a29f0be747bb0ff1aeb737833b55fe103c1ef468ba68a275d2c532ab254d0949deb38ffe834b403ce6fe4b1bfbf037ae3ba5d75306043d95467fb60b62863de9f3c10da7747d944f9e60982daf5cec0a429e9d5b5fd347642689549030d27a36028d8be1f505a3d165e62e8a143b9da066cba760107a9a39435eee1f28d1a31a62645c01a7e7e010d80e53437020000",
    ],
    [
      "Access-Control-Allow-Credentials",
      "true",
      "Access-Control-Allow-Headers",
      "Origin, Cookie, Set-Cookie, X-Requested-With, Content-Type, Access-Control-Allow-Origin, Access-Control-Request-Headers, Accept, X-Appwrite-Project, X-Appwrite-Key, X-Appwrite-Locale, X-Appwrite-Mode, X-Appwrite-JWT, X-Appwrite-Response-Format, X-SDK-Version, X-SDK-Name, X-SDK-Language, X-SDK-Platform, X-Appwrite-ID, Content-Range, Range, Cache-Control, Expires, Pragma",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE",
      "Access-Control-Allow-Origin",
      "https://localhost",
      "Access-Control-Expose-Headers",
      "X-Fallback-Cookies",
      "Content-Encoding",
      "gzip",
      "Content-Length",
      "298",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Fri, 16 Sep 2022 13:34:28 GMT",
      "Server",
      "Appwrite",
      "Set-Cookie",
      "a_session_6324555073b9706cb1f5_legacy=eyJpZCI6IjYzMjQ3YjY0MmMwMjQ4ZDJhMTQyIiwic2VjcmV0IjoiNzM5YmQ1MmNmZjM2ZTFjOTY2ODc1MGMzYzRmN2U1ZjA1YmFiNDYwOGQ2MWZlMjdhNDkzMTc5OTBkYzVjMTIwYTlhMjA2OWUwODVjM2FhNTg5NGViM2FmYTAzMzgzOTcyMTQ1MGI1ZDg1Nzk5NzBkNWQyMTkyODBkYzBmY2UwYzk3Y2VkOGU5YTkzZWI4YTgwMjZjYzlmMmE1NjFiZDNiYjcwNzE1NzZkNjAyNjZlOTgzNGNmZDE4MzFiZmE1ZjI4MDcyYjA0ZDIzNWU4MGE1Zjk5YTg1MjJlMDVjY2VmZjJjZTVlNTljMDBiMjg2MjBkMmM4YTZjNzliYmEyY2I4ZCJ9; expires=Sat, 16-Sep-2023 13:34:28 GMT; path=/; domain=.matej10qa.appwrite.org; secure; httponly",
      "Set-Cookie",
      "a_session_6324555073b9706cb1f5=eyJpZCI6IjYzMjQ3YjY0MmMwMjQ4ZDJhMTQyIiwic2VjcmV0IjoiNzM5YmQ1MmNmZjM2ZTFjOTY2ODc1MGMzYzRmN2U1ZjA1YmFiNDYwOGQ2MWZlMjdhNDkzMTc5OTBkYzVjMTIwYTlhMjA2OWUwODVjM2FhNTg5NGViM2FmYTAzMzgzOTcyMTQ1MGI1ZDg1Nzk5NzBkNWQyMTkyODBkYzBmY2UwYzk3Y2VkOGU5YTkzZWI4YTgwMjZjYzlmMmE1NjFiZDNiYjcwNzE1NzZkNjAyNjZlOTgzNGNmZDE4MzFiZmE1ZjI4MDcyYjA0ZDIzNWU4MGE1Zjk5YTg1MjJlMDVjY2VmZjJjZTVlNTljMDBiMjg2MjBkMmM4YTZjNzliYmEyY2I4ZCJ9; expires=Sat, 16-Sep-2023 13:34:28 GMT; path=/; domain=.matej10qa.appwrite.org; secure; httponly; samesite=None",
      "X-Content-Type-Options",
      "nosniff",
      "X-Debug-Fallback",
      "true",
      "X-Debug-Speed",
      "0.06734299659729",
      "X-Fallback-Cookies",
      '{"a_session_6324555073b9706cb1f5":"eyJpZCI6IjYzMjQ3YjY0MmMwMjQ4ZDJhMTQyIiwic2VjcmV0IjoiNzM5YmQ1MmNmZjM2ZTFjOTY2ODc1MGMzYzRmN2U1ZjA1YmFiNDYwOGQ2MWZlMjdhNDkzMTc5OTBkYzVjMTIwYTlhMjA2OWUwODVjM2FhNTg5NGViM2FmYTAzMzgzOTcyMTQ1MGI1ZDg1Nzk5NzBkNWQyMTkyODBkYzBmY2UwYzk3Y2VkOGU5YTkzZWI4YTgwMjZjYzlmMmE1NjFiZDNiYjcwNzE1NzZkNjAyNjZlOTgzNGNmZDE4MzFiZmE1ZjI4MDcyYjA0ZDIzNWU4MGE1Zjk5YTg1MjJlMDVjY2VmZjJjZTVlNTljMDBiMjg2MjBkMmM4YTZjNzliYmEyY2I4ZCJ9"}',
      "X-Ratelimit-Limit",
      "50",
      "X-Ratelimit-Remaining",
      "23",
      "X-Ratelimit-Reset",
      "1663336800",
      "Connection",
      "close",
    ],
  );

nock("https://matej10qa.appwrite.org:443", { encodedQueryParams: true })
  .patch(
    "/v1/databases/632455a0b8d017403ce9/collections/632455a55dc72e1aa016/documents/63245b0e9c8ea5620b4a",
    {
      data: { title: "Batch" },
      permissions: ['read("any")', 'write("any")'],
    },
  )
  .reply(
    200,
    [
      "1f8b08000000000000036d8f3b6fc2301485ffcb1503150f5d3f937883ad3b5b61b8b1af84253744b11910ea7fc711529ba1eb399fcee3092596c4e0e048c55f610b81b39fe258e26d0037dc53dac22a860a5825b5e9913bdf32192bb1d754f9959f980a8743a98c442977d8ed843d09e184750af7568b0da2439ce1fb18fe859553dac976af75f3078f3c7dc79ceb920cee0b6a4f589f8186c7193eaaffce5a2a81132f95cb3cef9612fbf9cee7ef0b43c604df48164428ecdc55a3a8a7cc4b08fb36a068342acf1dfcbc00252bd78a2c010000",
    ],
    [
      "Access-Control-Allow-Credentials",
      "true",
      "Access-Control-Allow-Headers",
      "Origin, Cookie, Set-Cookie, X-Requested-With, Content-Type, Access-Control-Allow-Origin, Access-Control-Request-Headers, Accept, X-Appwrite-Project, X-Appwrite-Key, X-Appwrite-Locale, X-Appwrite-Mode, X-Appwrite-JWT, X-Appwrite-Response-Format, X-SDK-Version, X-SDK-Name, X-SDK-Language, X-SDK-Platform, X-Appwrite-ID, Content-Range, Range, Cache-Control, Expires, Pragma",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE",
      "Access-Control-Allow-Origin",
      "https://localhost",
      "Access-Control-Expose-Headers",
      "X-Fallback-Cookies",
      "Content-Encoding",
      "gzip",
      "Content-Length",
      "212",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Fri, 16 Sep 2022 13:34:28 GMT",
      "Server",
      "Appwrite",
      "X-Content-Type-Options",
      "nosniff",
      "X-Debug-Fallback",
      "true",
      "X-Debug-Speed",
      "0.010021209716797",
      "X-Ratelimit-Limit",
      "120",
      "X-Ratelimit-Remaining",
      "118",
      "X-Ratelimit-Reset",
      "1663335300",
      "Connection",
      "close",
    ],
  );

nock("https://matej10qa.appwrite.org:443", { encodedQueryParams: true })
  .patch(
    "/v1/databases/632455a0b8d017403ce9/collections/632455a55dc72e1aa016/documents/632456c5998583bcb6d3",
    {
      data: { title: "Batch" },
      permissions: ['read("any")', 'write("any")'],
    },
  )
  .reply(
    200,
    [
      "1f8b08000000000000036d8f316fc2301085ff0a3a7500b5a0b31d3b8e37d8d8d94a07c777522da510c5664088ff8e2da49281f57b9feedebb418e796070b0f339fcc21710a730c531c7f3a9d0cc292f2a5ac8927d442acc28d9681374d7596d551f7a43aa8661629f99b6b93812a55c63b716e620d069eb84da18693f111d62952f23bd9595538d9376d3b4fa258f3cfdc5944aa504ee1bca1f5a1ec19fae475895fc796b4e88079e939f5aef3c0c1ceaaefdff0aedb5a6d04a16dea330f55739e57b9f782e616f0945dba00adcc1fd01d6cf755435010000",
    ],
    [
      "Access-Control-Allow-Credentials",
      "true",
      "Access-Control-Allow-Headers",
      "Origin, Cookie, Set-Cookie, X-Requested-With, Content-Type, Access-Control-Allow-Origin, Access-Control-Request-Headers, Accept, X-Appwrite-Project, X-Appwrite-Key, X-Appwrite-Locale, X-Appwrite-Mode, X-Appwrite-JWT, X-Appwrite-Response-Format, X-SDK-Version, X-SDK-Name, X-SDK-Language, X-SDK-Platform, X-Appwrite-ID, Content-Range, Range, Cache-Control, Expires, Pragma",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE",
      "Access-Control-Allow-Origin",
      "https://localhost",
      "Access-Control-Expose-Headers",
      "X-Fallback-Cookies",
      "Content-Encoding",
      "gzip",
      "Content-Length",
      "217",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Fri, 16 Sep 2022 13:34:28 GMT",
      "Server",
      "Appwrite",
      "X-Content-Type-Options",
      "nosniff",
      "X-Debug-Fallback",
      "true",
      "X-Debug-Speed",
      "0.022693157196045",
      "X-Ratelimit-Limit",
      "120",
      "X-Ratelimit-Remaining",
      "117",
      "X-Ratelimit-Reset",
      "1663335300",
      "Connection",
      "close",
    ],
  );
