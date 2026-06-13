import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Python 初階課程講義',
  description: '基礎入門、List 與 String 進階操作、進階資料型態與實戰題庫',
  lang: 'zh-TW',
  base: '/python-lecture/',

  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '基礎內容', link: '/basic/01-numbers' },
      { text: '清單 (List)', link: '/list/01-slicing' },
      { text: '字串 (String)', link: '/string/01-slicing-format' },
      { text: '進階應用', link: '/advanced/01-tuple' },
      { text: '題庫練習', link: '/practice/01-string-basics' }
    ],

    sidebar: [
      {
        text: '課程簡介',
        items: [
          { text: '前言與環境準備', link: '/' }
        ]
      },
      {
        text: '零、基礎內容',
        items: [
          { text: '0-1 整數與浮點數', link: '/basic/01-numbers' },
          { text: '0-2 布林與邏輯運算', link: '/basic/02-bool-logic' },
          { text: '0-3 字串基礎與型態轉換', link: '/basic/03-string-basics' },
          { text: '0-4 if 條件式', link: '/basic/04-if' },
          { text: '0-5 while 迴圈', link: '/basic/05-while' },
          { text: '0-6 for 迴圈', link: '/basic/06-for' }
        ]
      },
      {
        text: '一、List 進階操作',
        items: [
          { text: '1-1 切片 (Slicing) 與 -1 索引', link: '/list/01-slicing' },
          { text: '1-2 排序、反轉與複製', link: '/list/02-sort-reverse-copy' },
          { text: '1-3 新增、刪除與插入', link: '/list/03-modify' },
          { text: '1-4 in / not in 與 index、count', link: '/list/04-in-not-in' },
          { text: '1-5 List Comprehension', link: '/list/05-comprehension' },
          { text: '1-6 巢狀清單與雙層迴圈', link: '/list/06-nested-list' }
        ]
      },
      {
        text: '二、String 進階操作',
        items: [
          { text: '2-1 字串切片與格式化輸出', link: '/string/01-slicing-format' },
          { text: '2-2 split / join 字串分割與合併', link: '/string/02-split-join' },
          { text: '2-3 strip、replace 與大小寫轉換', link: '/string/03-strip-replace-case' },
          { text: '2-4 find、count 與 in 判斷', link: '/string/04-find-count' },
          { text: '2-5 字串與清單的互相轉換', link: '/string/05-string-list-convert' }
        ]
      },
      {
        text: '三、進階應用：其他資料型態',
        items: [
          { text: '4-1 元組 tuple', link: '/advanced/01-tuple' },
          { text: '4-2 集合 set', link: '/advanced/02-set' },
          { text: '4-3 字典 dict', link: '/advanced/03-dict' }
        ]
      },
      {
        text: '四、實戰題庫練習（基礎版）',
        items: [
          { text: '5-1 字串基礎練習題', link: '/practice/01-string-basics' },
          { text: '5-2 清單基礎練習題', link: '/practice/02-list-basics' },
          { text: '5-3 字串與清單綜合練習題', link: '/practice/03-mixed' },
          { text: '5-4 解答與說明', link: '/practice/04-answers' }
        ]
      }
    ],

    socialLinks: [],

    docFooter: {
      prev: '上一頁',
      next: '下一頁'
    },

    outline: {
      label: '本頁目錄'
    },

    returnToTopLabel: '回到頂部',
    sidebarMenuLabel: '選單',
    darkModeSwitchLabel: '深色模式',
    lastUpdated: {
      text: '最後更新於'
    }
  },

  markdown: {
    lineNumbers: true
  }
})
