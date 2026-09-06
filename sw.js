// 5年日記帳ランチャーページ用の最小限のサービスワーカー
// ChromeのPWAインストール判定を満たすためだけに追加しています。
// オフライン動作やキャッシュ制御は行っていません（そのままネットワークに委ねます）。

self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
  // 何もしない（通常のネットワークリクエストをそのまま通す）
});
