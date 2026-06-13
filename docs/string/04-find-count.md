# 2-4 find、count 與 in 判斷

## in / not in：判斷子字串是否存在

```python
s = 'Python is fun'

print('Python' in s)       # True
print('Java' in s)         # False
print('Java' not in s)     # True
```

常用於條件判斷：

```python
email = 'test@example.com'

if '@' in email:
    print('這是一個有效的Email格式')
else:
    print('缺少@符號')
```

## find()：找出子字串第一次出現的位置

`find()` 會回傳子字串第一次出現的**索引位置**；若找不到，回傳 `-1`（**不會**產生錯誤）。

```python
s = 'Hello, Python! Python is great.'

print(s.find('Python'))    # 7，第一次出現的位置
print(s.find('Java'))      # -1，找不到
```

可以指定搜尋的起始位置，找出**下一次**出現的位置：

```python
s = 'Hello, Python! Python is great.'

first = s.find('Python')
second = s.find('Python', first + 1)

print(first)    # 7
print(second)   # 15
```

::: tip find() vs index()
- `str.find(sub)`：找不到回傳 `-1`。
- `str.index(sub)`：找不到會產生 `ValueError`（與清單的 `index()` 相同）。

通常 `find()` 較常用於「先判斷是否存在」的情境。
:::

## count()：計算子字串出現的次數

```python
s = 'banana'

print(s.count('a'))    # 3
print(s.count('an'))   # 2
print(s.count('xyz'))  # 0
```

## 範例：統計句子中某個單字的出現次數

```python
sentence = 'the quick brown fox jumps over the lazy dog the end'

count_the = sentence.split().count('the')
print(f'"the" 出現了 {count_the} 次')
```

執行結果：

```
"the" 出現了 3 次
```

::: warning split() + count() vs str.count()
`sentence.count('the')` 會把 `'the'` 當作**子字串**搜尋，因此 `'they'` 中的 `'the'` 也會被算進去。若要統計**完整單字**的次數，應先用 `split()` 切成單字清單，再用清單的 `count()`。
:::

## 範例：檢查身分證字號格式（簡化版）

```python
id_number = 'A123456789'

if len(id_number) == 10 and id_number[0].isalpha() and id_number[1:].isdigit():
    print('格式正確')
else:
    print('格式錯誤')
```

說明：
- `isalpha()`：判斷字元是否為英文字母
- `isdigit()`：判斷字串是否全為數字

## 範例：找出所有出現位置

利用迴圈搭配 `find()`，可以找出子字串**所有**出現的位置：

```python
s = 'ababcabcab'
target = 'ab'

positions = []
start = 0

while True:
    pos = s.find(target, start)
    if pos == -1:
        break
    positions.append(pos)
    start = pos + 1

print(positions)   # [0, 2, 5, 8]
```

### 自主練習

1. 給定 `s = 'Welcome to Python programming'`，判斷 `'Python'` 是否存在於字串中，並印出其第一次出現的索引位置。
2. 給定 `s = 'mississippi'`，計算字母 `'s'` 與 `'i'` 各出現幾次。
3. 給定一句英文句子，統計其中 `'is'` 這個單字（不是子字串）出現的次數。
4. 給定 `s = 'a-b-a-c-a-d'`，找出所有 `'a'` 出現的索引位置。
