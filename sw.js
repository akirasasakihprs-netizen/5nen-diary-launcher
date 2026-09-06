// 5年日記帳ランチャーページ用のサービスワーカー
// ChromeのPWAインストール判定を満たすために、中身のあるfetchハンドラーを実装しています。
// （空のfetchハンドラーはChromeが「無効」として無視するため、実際にネットワーク
// 　リクエストを中継する処理を書く必要があります）

self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      // オフライン時などフェッチに失敗した場合は、そのまま何も返さない
      // （キャッシュによるオフライン対応は行っていません）
      return new Response("", { status: 504, statusText: "Network error" });
    })
  );
});
