# 3-1 字串切片與格式化輸出

字串（str）本質上也是一序列字元的集合，因此清單中學過的索引與切片技巧，同樣可以套用在字串上。

## 索引運算子

```python
s = 'Python'

print(s[0])    # P
print(s[5])    # n
print(s[-1])   # n，最後一個字元
print(s[-2])   # o，倒數第二個字元
```

字串（str）本質上也是一序列字元的集合，因此**第 2 章學過的索引與切片技巧，同樣可以套用在字串上**。

| 操作       | 清單（List）                  | 字串（String）       |
| ---------- | ----------------------------- | -------------------- |
| 取單一元素 | `fruits[0]` → `'apple'`  | `s[0]` → `'P'`  |
| 負索引     | `fruits[-1]` → `'mango'` | `s[-1]` → `'n'` |
| 切片       | `fruits[1:3]`               | `s[1:4]`           |
| 反轉       | `nums[::-1]`                | `s[::-1]`          |

::: tip 字串不可變（Immutable）
字串與清單有一個關鍵差異：字串是**不可變**的資料型態，無法用索引修改其中的字元。

```python
s = 'Python'
s[0] = 'p'   # ❌ TypeError: 'str' object does not support item assignment
```

若要修改字串，必須透過切片、合併等方式產生**新的字串**：

```python
s = 'Python'
s = 'p' + s[1:]   # ✅ 產生新字串 'python'
```

:::


## 字串切片

```python
s = 'Hello, Python!'

print(s[0:5])    # Hello
print(s[7:13])   # Python
print(s[:5])     # Hello
print(s[7:])     # Python!
print(s[::-1])   # !nohtyP ,olleH，反轉字串
```

## 應用：用切片取出不重複子字串

結合切片與 `for` 迴圈，取出字串中所有長度為 `n` 的不重複子字串：

```python
s = 'nababbbeddfbe'
n = 2  # 子字串長度
li = []

for i in range(len(s) - n + 1):
    if s[i:i+n] not in li:
        li.append(s[i:i+n])

print(*li)
```

執行結果：

```
na ab ba bb be ed dd df fb
```

::: tip 為什麼 range 是 len(s) - n + 1？
字串長度為 6，子字串長度為 2，最後一個起始索引是 4（`s[4:6]`），
所以迴圈跑 `range(6 - 2 + 1)` = `range(5)` = `0, 1, 2, 3, 4`。
:::

## 應用：找出所有出現超過一次的子字串

```python
s = 'abcabc'
n = 2

seen = []
repeat = []

for i in range(len(s) - n + 1):
    sub = s[i:i+n]
    if sub in seen and sub not in repeat:
        repeat.append(sub)
    else:
        seen.append(sub)

print(f'重複出現的子字串：{', '.join(repeat)}')
```

執行結果：

```
重複出現的子字串：ab, bc
```

## List vs String 動態視圖比較

⬇️ 可以點擊玩玩看
<IndexDemo />

## 格式化輸出：f-string

f-string 是 Python 中最方便的字串格式化方式，在字串前加上 `f`，並用 `{}` 包住變數或運算式。

```python
name = '小明'
age = 18
height = 175.5

print(f'我是{name}，今年{age}歲，身高{height}公分')
```

執行結果：

```
我是小明，今年18歲，身高175.5公分
```

## 數值格式化

f-string 可以指定數值的顯示格式，例如小數位數、千分位：

```python
price = 1234567.891

print(f'{price:.2f}')     # 1234567.89，取小數點後兩位
print(f'{price:,.2f}')    # 1,234,567.89，加上千分位
```

## 對齊與寬度設定

```python
items = ['蘋果', '香蕉', '西瓜']
prices = [35, 20, 80]

for item, price in zip(items, prices):
    print(f'{item:<5}{price:>5}元')
```

執行結果：

```
蘋果      35元
香蕉      20元
西瓜      80元
```

- `:<5`：靠左對齊，總寬度 5
- `:>5`：靠右對齊，總寬度 5
- `:^5`：置中對齊，總寬度 5

## 範例：成績單格式化輸出

```python
name = '王小美'
chinese = 88
english = 95
math = 76

print(f'學生：{name}')
print(f'國文：{chinese:3d} 分')
print(f'英文：{english:3d} 分')
print(f'數學：{math:3d} 分')
print(f'平均：{(chinese + english + math) / 3:.1f} 分')
```

執行結果：

```
學生：王小美
國文： 88 分
英文： 95 分
數學： 76 分
平均：86.3 分
```

## 本節格式化語法一覽

| 格式碼    | 說明             | 範例         |
| --------- | ---------------- | ------------ |
| `:.2f`  | 小數點後 N 位    | `3.14`     |
| `:,.2f` | 千分位 + 小數    | `1,234.56` |
| `:<N`   | 靠左對齊，寬度 N | `'Hi   '`  |
| `:>N`   | 靠右對齊，寬度 N | `'   Hi'`  |
| `:^N`   | 置中對齊，寬度 N | `' Hi  '`  |
| `:Nd`   | 整數，至少寬度 N | `' 88'`    |

### 自主練習

1. 給定 `s = 'Hello, World!'`，使用切片分別取出 `'Hello'` 與 `'World'`。
2. 將字串 `'abcdef'` 反轉並印出。
3. 使用 f-string 印出圓周率 `3.14159265` 取小數點後三位的結果。
4. 給定姓名與分數，使用 f-string 並設定欄寬，印出對齊的成績單（例如姓名靠左寬度 6，分數靠右寬度 4）。
  