# 2-1 字串切片與格式化輸出

字串（str）本質上也是一序列字元的集合，因此清單中學過的索引與切片技巧，同樣可以套用在字串上。

## 索引運算子

```python
s = 'Python'

print(s[0])    # P
print(s[5])    # n
print(s[-1])   # n，最後一個字元
print(s[-2])   # o，倒數第二個字元
```

## 字串切片

```python
s = 'Hello, Python!'

print(s[0:5])    # Hello
print(s[7:13])   # Python
print(s[:5])     # Hello
print(s[7:])     # Python!
print(s[::-1])   # !nohtyP ,olleH，反轉字串
```

::: tip 字串不可變
字串是**不可變（immutable）**的資料型態，無法用 `s[0] = 'h'` 來修改其中的字元，只能透過切片、合併等方式產生新的字串。
:::

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

### 自主練習

1. 給定 `s = 'Hello, World!'`，使用切片分別取出 `'Hello'` 與 `'World'`。
2. 將字串 `'abcdef'` 反轉並印出。
3. 使用 f-string 印出圓周率 `3.14159265` 取小數點後三位的結果。
4. 給定姓名與分數，使用 f-string 並設定欄寬，印出對齊的成績單（例如姓名靠左寬度 6，分數靠右寬度 4）。
