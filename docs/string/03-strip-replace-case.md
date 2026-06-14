# 3-3 strip、replace 與大小寫轉換

## strip()：去除字串前後空白

`strip()` 會去除字串**開頭與結尾**的空白字元（包含空格、Tab `\t`、換行 `\n`），但**不會**影響字串中間的空白。

```python
s = '   Hello, Python!   '

print(s.strip())   # 'Hello, Python!'
print(len(s))          # 21
print(len(s.strip()))  # 15
```

也可以用 `lstrip()`、`rstrip()` 分別去除左側或右側的空白：

```python
s = '   Hello   '

print(s.lstrip() + '|')   # 'Hello   |'
print(s.rstrip() + '|')   # '   Hello|'
```

## strip() 去除指定字元

`strip()` 也可以傳入參數，去除指定的字元（會去除前後**所有**符合的字元，直到遇到不符合的字元為止）。

```python
s = '###Python###'

print(s.strip('#'))   # 'Python'
```

## replace()：取代字串內容

`replace(old, new)` 會將字串中所有的 `old` 替換成 `new`，並回傳一個**新的字串**（原字串不會被改變）。

```python
s = 'I like apple. Apple is sweet.'

new_s = s.replace('apple', 'banana')
print(new_s)   # I like banana. Apple is sweet.
```

::: tip 注意大小寫
`replace()` 是區分大小寫的，例如上例中 `'Apple'`（大寫A）不會被替換。
:::

可以指定 `count` 參數限制替換的次數：

```python
s = 'a-b-c-d-e'

print(s.replace('-', '_', 2))   # a_b_c-d-e，只替換前兩個
```

## 大小寫轉換

| 方法             | 說明                             |
| ---------------- | -------------------------------- |
| `upper()`      | 全部轉為大寫                     |
| `lower()`      | 全部轉為小寫                     |
| `title()`      | 每個單字的第一個字母大寫         |
| `capitalize()` | 只有字串第一個字母大寫，其餘小寫 |
| `swapcase()`   | 大小寫互換                       |

```python
s = 'hello python world'

print(s.upper())        # HELLO PYTHON WORLD
print(s.lower())         # hello python world
print(s.title())         # Hello Python World
print(s.capitalize())    # Hello python world

s2 = 'Hello WORLD'
print(s2.swapcase())     # hELLO world
```

## 綜合範例：清理使用者輸入的資料

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

### 自主練習

1. 給定 `s = '   Python is fun!   '`，分別印出使用 `strip()`、`lstrip()`、`rstrip()` 後的結果，並比較其差異。
2. 給定 `s = 'apple, apple, banana, apple'`，使用 `replace()` 將所有 `'apple'` 替換成 `'orange'`。
3. 給定一個全大寫的句子 `s = 'PYTHON IS AWESOME'`，分別印出 `lower()`、`title()`、`capitalize()` 的結果。
4. 給定 `code = '###ABC-123###'`，使用 `strip('#')` 去除前後的 `#`，並印出結果。
