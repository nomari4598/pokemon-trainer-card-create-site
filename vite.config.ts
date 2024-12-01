/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()], // Reactプラグインを設定
    test: {
        globals: true, // Jestライクなグローバル変数を使用
        environment: "happy-dom", // ブラウザ環境をエミュレート（`jsdom` でもOK）
        coverage: {
            reporter: ["text", "json", "html"], // カバレッジレポート形式
        },
        setupFiles: "./vitest.setup.ts", // テスト前に実行するセットアップファイル
    },
});
