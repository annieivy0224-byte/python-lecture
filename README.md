
# Python 初階課程講義（VitePress）

本專案使用 [VitePress](https://vitepress.dev/) 建立，內容涵蓋：

- **基礎內容**：整數/浮點數、布林與邏輯運算、字串基礎與型態轉換、if 條件式、while/for 迴圈
- **List 進階操作**：切片、排序反轉複製、新增刪除插入、in/not in、List Comprehension、巢狀清單
- **String 進階操作**：切片與格式化、split/join、strip/replace/大小寫、find/count、字串與清單互轉
- **進階應用**：tuple（元組）、set（集合）、dict（字典）
- **實戰題庫練習（基礎版）**：字串練習題、清單練習題、綜合練習題與解答

## 本機開發(注意! 資料夾名稱不能有中文)

```bash
npm install
npm run docs:dev
```

啟動後開啟瀏覽器，預設網址為 `http://localhost:5173`。

## 建置靜態網站

```bash
npm run docs:build
npm run docs:preview
```

建置後的檔案會輸出至 `docs/.vitepress/dist`。

---

## 部署到 GitHub Pages（公開連結給學員）

本專案已內建 GitHub Actions workflow（`.github/workflows/deploy.yml`），只要把專案推到 GitHub 並開啟 Pages 設定，即可自動部署。

### 步驟

1. **在 GitHub 上建立 repository**，名稱請設為 `python-lecture`（這樣才會跟 `docs/.vitepress/config.mts` 中的 `base: '/python-lecture/'` 對應）。

   > 若你想用不同的 repo 名稱，請把 `config.mts` 裡的 `base` 改成 `/你的repo名稱/`。
   >
2. **將本專案推送到該 repository 的 `main` 分支：**

   ```bash
   cd python-lecture
   git init
   git add .
   git commit -m "Initial commit: Python 初階課程講義"
   git branch -M main
   git remote add origin https://github.com/<你的GitHub帳號>/python-lecture.git
   git push -u origin main
   ```
3. **開啟 GitHub Pages 設定：**

   - 進入 GitHub 上的 repository 頁面
   - 點選 **Settings** → 左側選單 **Pages**
   - 在「Build and deployment」的「Source」選擇 **GitHub Actions**
4. **觸發部署：**

   - 推送到 `main` 分支後，會自動執行 `.github/workflows/deploy.yml`
   - 進入 repository 的 **Actions** 分頁，可以看到部署進度
   - Settings → Pages → Source 將 **"Deploy from a branch"** 改成 **"GitHub Actions"**
   - 完成後，網站網址會顯示在 **Settings → Pages** 頁面，通常為：

     ```
     https://annieivy0224-byte.github.io/python-lecture/
     ```
5. **將此網址公開分享給學員**，學員不需要安裝任何軟體，直接用瀏覽器開啟即可瀏覽完整講義。

### 之後更新內容

每次修改 `.md` 內容後，只需要禁入專案資料夾在終端機輸入：

```bash
git add .
git commit -m "更新講義內容"
git push
```

GitHub Actions 會自動重新建置並更新網站，幾分鐘後學員看到的內容就會更新。

---

## 目錄結構

```
.
├── package.json
├── .github
│   └── workflows
│       └── deploy.yml          # GitHub Pages 自動部署
└── docs
    ├── .vitepress
    │   └── config.mts
    ├── index.md
    ├── basic/                    # 基礎內容
    │   ├── 01-numbers.md
    │   ├── 02-bool-logic.md
    │   ├── 03-string-basics.md
    │   ├── 04-if.md
    │   ├── 05-while.md
    │   └── 06-for.md
    ├── list/                     # List 進階操作
    │   ├── 01-slicing.md
    │   ├── 02-sort-reverse-copy.md
    │   ├── 03-modify.md
    │   ├── 04-in-not-in.md
    │   ├── 05-comprehension.md
    │   └── 06-nested-list.md
    ├── string/                   # String 進階操作
    │   ├── 01-slicing-format.md
    │   ├── 02-split-join.md
    │   ├── 03-strip-replace-case.md
    │   ├── 04-find-count.md
    │   └── 05-string-list-convert.md
    ├── advanced/                 # 進階應用：tuple/set/dict
    │   ├── 01-tuple.md
    │   ├── 02-set.md
    │   └── 03-dict.md
    └── practice/                 # 實戰題庫練習
        ├── 01-string-basics.md
        ├── 02-list-basics.md
        ├── 03-mixed.md
        └── 04-answers.md
```

=======
