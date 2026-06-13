# 0-3 字串基礎與型態轉換

## 設定字串變數

字串（str）是 Python 的一種內建資料型態，內容是文字。可以用單引號或雙引號包住。

```python
s1 = 'Hello'
s2 = "Python"

print(s1, s2)   # Hello Python
```

如果字串內容本身包含引號，可以使用另一種引號包住，或使用反斜線 `\` 轉義：

```python
s = "It's a nice day"
print(s)   # It's a nice day

s2 = 'He said "Hello"'
print(s2)  # He said "Hello"

s3 = 'It\'s OK'
print(s3)  # It's OK
```

## 字串的加法與乘法

```python
a = 'Hello'
b = 'World'

print(a + ' ' + b)   # Hello World，字串相加（串接）
print(a * 3)         # HelloHelloHello，字串乘以整數（重複）
```

## 去除字串前後空白及計算長度

```python
s = '   Python   '

print(len(s))           # 12，包含前後空白的長度
print(s.strip())        # 'Python'
print(len(s.strip()))   # 6
```

## 字串轉整數 / 浮點數

當使用者輸入或從檔案讀取資料時，內容通常是字串，若要進行數值運算，需要先轉型。

```python
s = '100'

n = int(s)
print(n + 1)   # 101

s2 = '3.14'
f = float(s2)
print(f * 2)   # 6.28
```

::: warning 注意
若字串內容不是合法的數字，使用 `int()` 或 `float()` 會產生 `ValueError`。例如 `int('abc')` 會報錯。
:::

## 鍵盤輸入字串值

`input()` 會回傳使用者輸入的內容，型態永遠是**字串**。

```python
name = input('請輸入你的名字：')
print(f'你好，{name}！')

age_str = input('請輸入你的年齡：')
age = int(age_str)   # 需轉型才能進行數值運算
print(f'明年你將會是 {age + 1} 歲')
```

## 格式化輸出（複習）

```python
name = '小明'
score = 88.5

print(f'{name} 的成績是 {score} 分')
print('%s 的成績是 %.1f 分' % (name, score))   # 另一種格式化寫法
```

## 判斷字串中是否存在某個字

```python
s = 'Python is fun'

print('fun' in s)        # True
print('Java' in s)       # False
```

## 使用索引運算子

```python
s = 'Python'

print(s[0])    # P，第一個字元
print(s[-1])   # n，最後一個字元
```

## 字串內容轉大寫 / 小寫

```python
s = 'Hello Python'

print(s.upper())   # HELLO PYTHON
print(s.lower())   # hello python
```

### 自主練習

1. 請輸入兩個數字字串（例如 `'12'` 與 `'8'`），將其轉換為整數後計算總和並印出。
2. 給定 `s = '  Python Programming  '`，計算去除前後空白後的字串長度。
3. 請輸入一句話，判斷其中是否包含 `'Python'`（不分大小寫，提示可先轉小寫再判斷）。
