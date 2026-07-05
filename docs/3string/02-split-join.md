# 3-2 split / join 字串分割與合併

## .split()：將字串切割為清單

`.split()` 會依照指定的分隔字元，將字串切割成一個**清單**。若不指定分隔字元，預設以**空白字元（包含空格、Tab、換行）**進行切割。

```python
s = 'apple banana cherry'

words = s.split()
print(words)   # ['apple', 'banana', 'cherry']
```

## 指定分隔字元

```python
s = '2024-06-13'

parts = s.split('-')
print(parts)   # ['2024', '06', '13']
```

```python
s = 'apple,banana,,cherry'

parts = s.split(',')
print(parts)   # ['apple', 'banana', '', 'cherry']
```

::: warning 連續分隔字元的差異
使用**指定分隔字元**時，連續的分隔字元會產生空字串 `''`；
但**不指定**分隔字元（依空白切割）時，連續空白會自動被忽略。

```python
s = 'a  b  c'          # 兩個空格

print(s.split())       # ['a', 'b', 'c']，連續空白忽略
print(s.split(' '))    # ['a', '', 'b', '', 'c']，連續空格產生空字串
```

:::

## .split() 處理 CSV 格式資料

`.split()` 在處理 CSV（逗號分隔）格式資料時非常實用：

```python
line = '王小明,85,90,78'

data = line.split(',')
print(data)         # ['王小明', '85', '90', '78']

name = data[0]
scores = [int(x) for x in data[1:]]
print(name, scores)  # 王小明 [85, 90, 78]
```

## ' '.join()：將清單合併為字串

`''.join()` 是 `.split()` 的相反操作，將清單中的所有元素以指定的字元合併成一個字串。

::: warning 語法
`''.join()` 是**字串**的方法，不是清單的方法。語法是：

```python
'分隔字元'.join(清單)
```

清單中的元素型態必須**全部都是字串**，數字需先轉型（見下方說明）。
:::

```python
words = ['apple', 'banana', 'cherry']

s = ', '.join(words)
print(s)   # apple, banana, cherry
```

```python
parts = ['2024', '06', '13']

date_str = '-'.join(parts)
print(date_str)   # 2024-06-13
```

## 數值清單轉字串再合併

由於 `''.join()` 只能合併字串，若清單中是數字，需要先用 `str()` 轉換：

```python
nums = [1, 2, 3, 4, 5]

# ❌ 錯誤寫法
# s = ','.join(nums)   # TypeError: sequence item 0: expected str instance, int found

# ✅ 正確寫法：先用 list comprehension 轉型
s = ','.join([str(n) for n in nums])
print(s)   # 1,2,3,4,5
```

## 綜合範例：分割並重組

```python
sentence = 'I love Python programming'

# 拆成單字清單
words = sentence.split()
print(words)   # ['I', 'love', 'Python', 'programming']

# 將每個單字反轉後再合併
reversed_words = [w[::-1] for w in words]
result = ' '.join(reversed_words)
print(result)   # I evol nohtyP gimmargorp
```

## 本節方法一覽

| 方法                | 說明             | 回傳型別     |
| ------------------- | ---------------- | ------------ |
| `str.split()`     | 依空白切割字串   | 清單（list） |
| `str.split(sep)`  | 依指定字元切割   | 清單（list） |
| `'sep'.join(lst)` | 將清單合併為字串 | 字串（str）  |

### 自主練習

1. 給定 `s = 'apple,banana,cherry,durian'`，使用 `.split(',')` 切割成清單，並印出第二個水果名稱。
2. 給定清單 `nums = [10, 20, 30, 40]`，使用 `''.join()` 將其合併為以 `' - '` 分隔的字串（例如 `'10 - 20 - 30 - 40'`）。
3. 給定字串 `'2024/06/13'`，使用 `.split('/')` 取出年、月、日，並用 f-string 印出 `'2024年06月13日'`。
4. 給定一句英文句子，計算其中有幾個單字（提示：先用 `.split()` 切割，再用 `.len()` 計算）。
