# 3-3 strip、replace 與大小寫轉換

## .strip()：去除字串前後空白

`.strip()` 會去除字串**開頭與結尾**的空白字元（包含空格、Tab `\t`、換行 `\n`），但**不會**影響字串中間的空白。

```python
s = '   Hello, Python!   '

print(s.strip())           # 'Hello, Python!'
print(len(s))              # 21
print(len(s.strip()))      # 15
```

也可以用 `.lstrip()`、`.rstrip()` 分別去除左側或右側的空白：

```python
s = '   Hello   '

print(s.lstrip() + '|')   # 'Hello   |'
print(s.rstrip() + '|')   # '   Hello|'
```

## .strip() 去除指定字元

`.strip()` 也可以傳入參數，去除指定的字元（會去除**前後**所有符合的字元，直到遇到不符合的字元為止）。

```python
s = '###Python###'

print(s.strip('#'))   # 'Python'
```

::: warning strip() 不是「刪掉這個字串」
`strip('#')` 是從兩端逐字元比對，只要符合就移除，直到遇到不符合的字元為止。
如果字元出現在**中間**，不會被移除：

```python
s = '###Py#thon###'
print(s.strip('#'))   # 'Py#thon'，中間的 # 不受影響
```

:::

## .replace()：取代字串內容

`.replace(old, new, count)` 會將字串中所有的 `old` 替換成 `new`，並回傳一個**新的字串**（原字串不會被改變）。

```python
s = 'I like apple. Apple is sweet.'

new_s = s.replace('apple', 'banana')
print(new_s)   # I like banana. Apple is sweet.
print(s)       # I like apple. Apple is sweet.（原字串不變）
```

::: tip 注意大小寫
`replace()` 是區分大小寫的，例如上例中 `'Apple'`（大寫A）不會被替換。
:::

可以指定 `count` 參數限制替換的次數：

```python
s = 'a-b-c-d-e'

print(s.replace('-', '_', 2))   # a_b_c-d-e，只替換前兩個
```

### 指定替換次數

`replace(old, new, count)` 第三個參數可以限制最多替換幾次：

```python
t = 'aaabbbccc'

print(t.replace('a', 'A'))      # 'AAAbbbccc'，全部替換
print(t.replace('b', 'B', 2))   # 'aaaBBbccc'，只替換前兩個
```

## 大小寫轉換

| 方法               | 說明                             | 範例輸入          | 結果              |
| ------------------ | -------------------------------- | ----------------- | ----------------- |
| `s.upper()`      | 全部轉為大寫                     | `'hello'`       | `'HELLO'`       |
| `s.lower()`      | 全部轉為小寫                     | `'HELLO'`       | `'hello'`       |
| `s.title()`      | 首字母大寫                       | `'hello world'` | `'Hello World'` |
| `s.capitalize()` | 只有字串第一個字母大寫，其餘小寫 | `'hello WORLD'` | `'Hello world'` |
| `s.swapcase()`   | 大小寫互換                       | `'Hello World'` | `'hELLO wORLD'` |

```python
s = 'hello python world'

print(s.upper())       # HELLO PYTHON WORLD
print(s.lower())       # hello python world
print(s.title())       # Hello Python World
print(s.capitalize())  # Hello python world

s2 = 'Hello WORLD'
print(s2.swapcase())   # hELLO world
```

## 判斷字串的字元組成

語法：`字串.方法()` → 回傳布林值（`True` / `False`）

| 方法            | 說明                                 |
| --------------- | ------------------------------------ |
| `s.isalnum()` | 字元是否皆由**字母或數字**組成 |
| `s.isalpha()` | 字元是否**皆為字母**           |
| `s.isdigit()` | 字元是否**皆為數字**           |
| `s.islower()` | 字元是否**皆為小寫字母**       |
| `s.isupper()` | 字元是否**皆為大寫字母**       |

```python
print('Ab123'.isalnum())   # True
print('Ab123'.isalpha())   # False，包含數字
print('123'.isdigit())     # True
print('hello'.islower())   # True
print('HELLO'.isupper())   # True
```

::: warning 注意
空白、特殊符號、標點符號都**不算**字母或數字，只要字串中含有這些字元，結果就會是 `False`。
空字串也會回傳 `False`。

```python
print('Ab 123'.isalnum())   # False，含有空白
print(''.isalpha())          # False，空字串
print('hello!'.isalpha())    # False，含有驚嘆號
```

:::

## 字元與 ASCII 碼的轉換

語法：`函式(引數)` → 這是**函式**，不是方法，不需要加在字串後面。

| 函式       | 傳入型別     | 回傳型別     | 說明                                |
| ---------- | ------------ | ------------ | ----------------------------------- |
| `chr(n)` | `int` 數字 | `str` 字串 | 將 **ASCII 碼**轉為對應**字元** |
| `ord(s)` | `str` 字串 | `int` 數字 | 將**字元**轉為對應 **ASCII 碼** |
```python
print(chr(65))    # 'A'
print(chr(90))    # 'Z'
print(chr(97))    # 'a'

print(ord('a'))   # 97
print(ord('z'))   # 122
print(ord('A'))   # 65
```

常見應用：搭配迴圈產生字母序列：

```python
# 印出 A 到 Z
for i in range(26):
    print(chr(ord('A') + i), end=' ')
# A B C D E F ... Z
```

## 綜合範例：清理使用者輸入的資料

處理使用者輸入時，常需要同時去除空白和統一大小寫，可以鏈式呼叫多個方法：

```python
raw_input = '   john_smith@Example.COM   '

# 去除前後空白，並轉為小寫
email = raw_input.strip().lower()
print(f'處理後的Email：{email}')
```

執行結果：

```
處理後的Email：john_smith@example.com
```

## 範例：將字串中的特定字取代

```python
text = '2024年06月13日'

# 將日期格式轉換為 2024/06/13
new_text = text.replace('年', '/').replace('月', '/').replace('日', '')
print(new_text)   # 2024/06/13
```

## 本節方法一覽

| 方法                                                  | 改變原字串？     | 說明                 |
| ----------------------------------------------------- | ---------------- | -------------------- |
| `s.strip()` / `s.lstrip()` / `s.rstrip()`       | ❌（回傳新字串） | 去除空白或指定字元   |
| `s.replace(old, new)`                               | ❌（回傳新字串） | 取代所有符合的子字串 |
| `s.upper()` / `s.lower()`                         | ❌（回傳新字串） | 大小寫轉換           |
| `s.title()` / `s.capitalize()` / `s.swapcase()` | ❌（回傳新字串） | 各種大小寫規則       |
| `s.isalnum()` / `s.isalpha()` / `s.isdigit()`   | ❌（回傳布林值） | 判斷字元組成         |
| `s.islower()` / `s.isupper()`                     | ❌（回傳布林值） | 判斷大小寫組成       |

| 函式       | 傳入型別     | 回傳型別     | 說明                                |
| ---------- | ------------ | ------------ | ----------------------------------- |
| `chr(n)` | `int` 數字 | `str` 字串 | 將 ASCII **數值**轉為對應**字元** |
| `ord(s)` | `str` 字串 | `int` 數字 | 將**字元**轉為對應 ASCII **數值** |

### 自主練習

1. 給定 `s = '   Python is fun!   '`，分別印出使用 `strip()`、`lstrip()`、`rstrip()` 後的結果，並比較其差異。
2. 給定 `s = 'apple, apple, banana, apple'`，使用 `replace()` 將所有 `'apple'` 替換成 `'orange'`。
3. 給定一個全大寫的句子 `s = 'PYTHON IS AWESOME'`，分別印出 `lower()`、`title()`、`capitalize()` 的結果。
4. 給定 `code = '###ABC-123###'`，使用 `strip('#')` 去除前後的 `#`，並印出結果。
