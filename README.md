# DeepSeek Harness 繁體中文版（zh-TW）／Traditional Chinese (Taiwan) Edition

基於 [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) 官方版本的**台灣繁體中文語系擴充版**：在原有「简体中文 / English」之外新增「**繁體中文（台灣用語）**」語系選項，瀏覽器 `zh-TW` / `zh-Hant` / `zh-HK` / `zh-MO` 自動偵測切換，25 個 Web UI 套件全量中文化。

This is an extended edition of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (dsh) — the open-source agent harness by DeepSeek AI — with a **Traditional Chinese (Taiwan) locale** added as a third language option (简体中文 / 繁體中文 / English), automatic `zh-TW` / `zh-Hant` / `zh-HK` / `zh-MO` browser detection, and fully localized UI copy using Taiwan terminology across 25 UI packages.

---

## 關鍵字 Keywords

`DeepSeek Harness` `dsh` `繁體中文` `台灣繁體` `zh-TW` `zh-Hant` `簡體中文` `中文化` `語系` `語言切換` `台灣用語` `Traditional Chinese` `Taiwan` `localization` `i18n` `agent harness` `AI agent` `智能體框架` `介面中文化`

## 特色 Features

- 新增第三語系「**繁體中文（台灣用語）**」：設置 → 語言 → 繁體中文（简体中文 / 繁體中文 / English）
- 瀏覽器語系自動偵測：`zh-TW` / `zh-Hant-TW` / `zh-HK` / `zh-MO` → 繁體中文；`zh-CN` / `zh-Hans` → 簡體中文；`en-*` → English
- 語系偏好持久化：寫入 `settings.yaml`（`locale.preference: zh-TW`），跨重新整理、跨裝置（共用 Host）保留
- 25 個 UI 套件全量中文化，採用台灣慣用語（代理、存取、封存、權限、清單、使用者、取得、參數、回應、發佈、偵測、背景、捲動、設定檔、執行階段、連線、指令、建立、拖曳、筆結果、相符、訊號、字元、快取、訊息、佇列、解析度、內建、摺疊、計劃…）
- 工具卡片（終端 / diff / 讀取 / 搜尋 / 網頁）隨語系切換顯示文字
- 簡體中文與英文字典維持官方原樣，未改動既有內容

- Third language option **Traditional Chinese (Taiwan usage)**: Settings → Language → 繁體中文
- Automatic browser detection: `zh-TW` / `zh-Hant-TW` / `zh-HK` / `zh-MO` → Traditional; `zh-CN` / `zh-Hans` → Simplified; `en-*` → English
- Preference persisted to `settings.yaml` (`locale.preference: zh-TW`), survives reloads and shared Host homes
- 25 UI packages fully localized with Taiwan terminology; Simplified Chinese and English copy unchanged

## 安裝與執行 Install & Run

前置需求 Prerequisites: Node.js ^22.19 || >=24，pnpm（corepack）

```sh
pnpm install
pnpm run build
pnpm dsh web
```

啟動後開啟 http://127.0.0.1:3080 → 設置 / Settings → 語言 / Language → 繁體中文

Open http://127.0.0.1:3080 after startup → Settings → Language → 繁體中文.

## 本版變更 What's in this edition

相對官方 `master`（截至 2026-08，上游 commit `47f9438`）新增 2 個 commit：

1. `feat: locale — 新增繁體中文（zh-TW）語系與台灣用語字典` — 語系骨架（`LOCALE_IDS`、瀏覽器偵測、語言選單）、25 個套件 `zhTw` 字典（OpenCC `s2twp` ＋ 台灣慣用詞覆寫）、4 個工具卡片 primitive 改 labels 注入、測試與 e2e 同步
2. `fix: locale — zhTw 型別完整性與台灣用語精修（複審回饋）` — zhTw 全面 typed `satisfies Record<XKey, string>`（編譯期強制 key 對應）；台灣慣用詞精修（回饋、建置、位址、離線、自訂、閒置）

品質驗證：`pnpm run typecheck`、`pnpm run test:gui`（3758 測試）、覆蓋率 All files 100% 全數通過。

## 上游與授權 Upstream & License

- 上游：https://github.com/deepseek-ai/deepseek-harness
- 授權：MIT（與上游一致，見 LICENSE）
- 本版本僅為語系擴充，未修改任何上游功能行為

## 聯絡 Contact

由 AI Agent 維護；聯絡方式（文字展示，勿用於任何帳號操作）：chiyulo.123@gmail.com
