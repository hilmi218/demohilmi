import nock from "nock";

nock("https://matej10qa.appwrite.org:443", { encodedQueryParams: true })
  .post("/v1/account/sessions/anonymous", {})
  .reply(
    201,
    [
      "1f8b0800000000000003758fcd4ec33010845f0545bd4123db49d334b7828ac4811e50e0eeda1b6a35b5a3b5531121de1da709f951c5c9f6ccee37e3ef60a164900549c4e275ba16541e4092f54a16290d1e828540e00ee4d6f91946185b92cd9226398d32c632128794a5f7846484f8e1da02becc6082f0821682b334f63e7c550aa10345b7203a802a34172501fd28d746376753db89fc7e6d3c11b64280b5b93981fed7d8b5e1cddc7e8302c11e278baaf2275d6d421a27614c43d6d631f6c948e8068cddf3f370ff00b4caf4bba254a05dde54ad5daa03729ff7278f84eedd53f65ebe7b06278e83333269480675a73f959e113a65d640c24509180b76ef47e45a4e85571f5af628536b874ddfcee128f594bcc6135cbf5123fad4207358c3cf2fa9a004d037020000",
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
      "299",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Fri, 16 Sep 2022 13:22:04 GMT",
      "Server",
      "Appwrite",
      "Set-Cookie",
      "a_session_6324555073b9706cb1f5_legacy=eyJpZCI6IjYzMjQ3ODdjMWMwYWYxZmNhMjg0Iiwic2VjcmV0IjoiYTVlYjYyYTM1YTBlZDVkYWFlZWNlNWM4YmJkNzlhYWI1NmExMGQxM2YwODRhNGU4MjM5MjY4OTMzMzg1MjJmZDM3N2EzNmE0YmE0MzA1YzI0ZmU1OWM2ZDJlZTU3MDUyMmYzODU2NjQzMjRhNzQ1NjViNDY3YWQzMjBiNDFjMTZiZDVkNTFlMDZiYWNkOGQzNGVlYWEyNTM5NjBkZDBjMGJkNDQ1NzkwYjMzY2IwYTYwMjdkZTY5Zjk4MDM4YmUwYWQxNmM3MmM5ZGVlZTljYjVlNDY0NjRhZGZiMzJhNzJlOGM1ZDU2OTI3MWE5MmJhYzNkNDRiNmUyZDlhMjg3MSJ9; expires=Sat, 16-Sep-2023 13:22:04 GMT; path=/; domain=.matej10qa.appwrite.org; secure; httponly",
      "Set-Cookie",
      "a_session_6324555073b9706cb1f5=eyJpZCI6IjYzMjQ3ODdjMWMwYWYxZmNhMjg0Iiwic2VjcmV0IjoiYTVlYjYyYTM1YTBlZDVkYWFlZWNlNWM4YmJkNzlhYWI1NmExMGQxM2YwODRhNGU4MjM5MjY4OTMzMzg1MjJmZDM3N2EzNmE0YmE0MzA1YzI0ZmU1OWM2ZDJlZTU3MDUyMmYzODU2NjQzMjRhNzQ1NjViNDY3YWQzMjBiNDFjMTZiZDVkNTFlMDZiYWNkOGQzNGVlYWEyNTM5NjBkZDBjMGJkNDQ1NzkwYjMzY2IwYTYwMjdkZTY5Zjk4MDM4YmUwYWQxNmM3MmM5ZGVlZTljYjVlNDY0NjRhZGZiMzJhNzJlOGM1ZDU2OTI3MWE5MmJhYzNkNDRiNmUyZDlhMjg3MSJ9; expires=Sat, 16-Sep-2023 13:22:04 GMT; path=/; domain=.matej10qa.appwrite.org; secure; httponly; samesite=None",
      "X-Content-Type-Options",
      "nosniff",
      "X-Debug-Fallback",
      "true",
      "X-Debug-Speed",
      "0.022549867630005",
      "X-Fallback-Cookies",
      '{"a_session_6324555073b9706cb1f5":"eyJpZCI6IjYzMjQ3ODdjMWMwYWYxZmNhMjg0Iiwic2VjcmV0IjoiYTVlYjYyYTM1YTBlZDVkYWFlZWNlNWM4YmJkNzlhYWI1NmExMGQxM2YwODRhNGU4MjM5MjY4OTMzMzg1MjJmZDM3N2EzNmE0YmE0MzA1YzI0ZmU1OWM2ZDJlZTU3MDUyMmYzODU2NjQzMjRhNzQ1NjViNDY3YWQzMjBiNDFjMTZiZDVkNTFlMDZiYWNkOGQzNGVlYWEyNTM5NjBkZDBjMGJkNDQ1NzkwYjMzY2IwYTYwMjdkZTY5Zjk4MDM4YmUwYWQxNmM3MmM5ZGVlZTljYjVlNDY0NjRhZGZiMzJhNzJlOGM1ZDU2OTI3MWE5MmJhYzNkNDRiNmUyZDlhMjg3MSJ9"}',
      "X-Ratelimit-Limit",
      "50",
      "X-Ratelimit-Remaining",
      "45",
      "X-Ratelimit-Reset",
      "1663336800",
      "Connection",
      "close",
    ],
  );

nock("https://matej10qa.appwrite.org:443", { encodedQueryParams: true })
  .get(
    "/v1/databases/632455a0b8d017403ce9/collections/632455a55dc72e1aa016/documents/63245b3987e0f40c7988",
  )
  .reply(
    200,
    [
      "1f8b08000000000000038d8fbd0ac2301485dfe5d241b1959bb469da6c8e82a39b7548932b04625b9a3888f8eea608d2d1f59c8ff3f382e8a22750701a67ba430e968299dd14dd38801a1edee790399b80bae495e8cbb69184b70a8d6c9b26f199994947b28798188e9c17d816ac3e33a69854acdc0b51ef1015e2023f26fb3f3cd17c7721a42501d405528fdd74a0876707dbe47fb3d68a254f6be5bacc1bbd27b3dc39fe5e082d84359213d31a59bd74a528ddeb406b08fbc622931596865a787f008b88f9cd2c010000",
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
      "203",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Fri, 16 Sep 2022 13:22:04 GMT",
      "Server",
      "Appwrite",
      "X-Content-Type-Options",
      "nosniff",
      "X-Debug-Fallback",
      "true",
      "X-Debug-Speed",
      "0.0029749870300293",
      "Connection",
      "close",
    ],
  );

nock("https://matej10qa.appwrite.org:443", { encodedQueryParams: true })
  .get(
    "/v1/databases/632455a0b8d017403ce9/collections/632455a55dc72e1aa016/documents/632456bf1eeb69a71a78",
  )
  .reply(
    200,
    [
      "1f8b08000000000000038d8eb10ac23014457f45829b56de4b9ba4cde6e8ee260e2fc91302ad2d4d9cc47f37011147d773cfe5dea7c8318f2cacc89cb2d88bc0c9af71c971be7fe0a6a2926c632844b7b253dadd90d9e9810c92e96be857a6cce1988b2341ca068606f519c1aade8239a0d43b000b50e5c712fe97175ea79852399484bd5cebd63c8eecebc5d3f79222a5823792910850d762d92047897f25707d00341db49e07f17a03e557b535ff000000",
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
      "178",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Fri, 16 Sep 2022 13:22:04 GMT",
      "Server",
      "Appwrite",
      "X-Content-Type-Options",
      "nosniff",
      "X-Debug-Fallback",
      "true",
      "X-Debug-Speed",
      "0.0029268264770508",
      "Connection",
      "close",
    ],
  );
