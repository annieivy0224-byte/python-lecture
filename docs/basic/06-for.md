# 0-6 for 迴圈

`for` 迴圈用來逐一取出一個序列（字串、清單、`range()` 等）中的每一個元素，並執行相同的程式區塊。

## 逐一取出字串內容

```python
s = 'Python'

for ch in s:
    print(ch)
```

執行結果：

```
P
y
t
h
o
n
```

## 搭配 range()

`range(n)` 會產生 `0` 到 `n-1` 的整數序列。

```python
for i in range(5):
    print(i)
```

執行結果：

```
0
1
2
3
4
```

`range(start, end)` 產生 `start` 到 `end-1`；`range(start, end, step)` 可指定間隔。

```python
for i in range(1, 11):
    print(i, end=' ')
# 1 2 3 4 5 6 7 8 9 10
```

```python
for i in range(10, 0, -1):
    print(i, end=' ')
# 10 9 8 7 6 5 4 3 2 1
```

## 逐一取出清單內容

```python
fruits = ['apple', 'banana', 'cherry']

for fruit in fruits:
    print(fruit)
```

## 搭配 enumerate()：同時取得索引與值

```python
fruits = ['apple', 'banana', 'cherry']

for index, fruit in enumerate(fruits):
    print(f'{index}: {fruit}')
```

執行結果：

```
0: apple
1: banana
2: cherry
```

## 使用雙層迴圈

雙層迴圈常用於處理二維資料（如表格、矩陣）或進行所有組合的列舉。

```python
for i in range(1, 4):
    for j in range(1, 4):
        print(f'{i} x {j} = {i*j}')
```

執行結果（節錄）：

```
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
2 x 1 = 2
...
3 x 3 = 9
```

## break 與 continue（與 while 相同）

```python
for i in range(1, 11):
    if i == 5:
        break    # 印到4就結束
    print(i)
```

```python
for i in range(1, 11):
    if i % 2 == 0:
        continue  # 跳過偶數
    print(i)
```

## 範例：計算清單中所有元素的總和

```python
nums = [12, 5, 8, 22, 3]

total = 0
for n in nums:
    total += n

print(f'總和：{total}')
```

## 範例：找出 1~100 中所有質數

```python
for n in range(2, 101):
    is_prime = True
    for i in range(2, n):
        if n % i == 0:
            is_prime = False
            break
    if is_prime:
        print(n, end=' ')
```

### 自主練習

1. 使用 `for` 迴圈印出 `'Python'` 中每個字元及其索引位置（提示：使用 `enumerate()`）。
2. 使用 `for` 搭配 `range()` 印出 `1~10` 的平方值。
3. 給定 `nums = [3, 7, 2, 9, 4]`，使用雙層迴圈找出清單中任意兩數相加等於 `11` 的所有組合。
4. 使用雙層迴圈印出以下圖案：

```
*
**
***
****
*****
```
