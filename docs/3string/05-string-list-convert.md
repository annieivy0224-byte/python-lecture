# 3-5 字串與清單的互相轉換

字串與清單之間經常需要互相轉換，這在處理文字資料（如 CSV、使用者輸入）時非常常見。

## 字串 → 清單

### 方法一：list()，逐字元拆解

```python
s = 'Python'

chars = list(s)
print(chars)   # ['P', 'y', 't', 'h', 'o', 'n']
```

### 方法二：split()，依分隔字元拆解

```python
s = 'apple,banana,cherry'

fruits = s.split(',')
print(fruits)   # ['apple', 'banana', 'cherry']
```

## 清單 → 字串

### 方法一：將字元合併，直接使用  `join()`

```python
chars = ['P', 'y', 't', 'h', 'o', 'n']

s = ''.join(chars)
print(s)   # Python
```

```python
fruits = ['apple', 'banana', 'cherry']

s = ', '.join(fruits)
print(s)   # apple, banana, cherry
```

### 方法二：將數字合併，先轉成 `str()` 再使用 `join()`

::: warning 注意差異
`str(list)` 會把整個清單轉成包含中括號與逗號的字串，這通常**不是**我們想要的結果：

```python
nums = [1, 2, 3]

print(str(nums))   # '[1, 2, 3]'，包含中括號
```

若想要 `'1,2,3'` 這種格式，需要先將每個元素轉為字串再使用 `join()` ：

```python
nums = [1, 2, 3]

s = ','.join([str(n) for n in nums])
print(s)   # '1,2,3'
```

:::

## 綜合範例：處理一行 CSV 資料

```python
line = '王小明,85,90,78'

# 字串 -> 清單
data = line.split(',')
name = data[0]
scores = [int(x) for x in data[1:]]

print(f'姓名：{name}')
print(f'成績：{scores}')
print(f'平均：{sum(scores)/len(scores):.1f}')

# 清單 -> 字串（重新組合輸出）
output = name + ',' + ','.join(str(s) for s in scores)
print(f'輸出：{output}')
```

執行結果：

```
姓名：王小明
成績：[85, 90, 78]
平均：84.3
輸出：王小明,85,90,78
```

## 範例：統計每個字元出現的次數

結合字串轉清單，再使用清單方法統計：

```python
s = 'mississippi'

chars = list(s)
unique_chars = sorted(set(chars))  # 去除重複並排序

for c in unique_chars:
    print(f'{c}: {chars.count(c)} 次')
```

執行結果：

```
i: 4 次
m: 1 次
p: 2 次
s: 4 次
```

### 自主練習

1. 給定 `s = 'hello'`，使用 `list()` 將其拆解為字元清單，再使用 `sorted()` 排序後，用 `join()` 合併回字串（結果應為 `'ehllo'`）。
2. 給定 `nums = [1, 2, 3, 4, 5]`，將其轉換為字串 `'1+2+3+4+5'`（提示：使用 `'+'.join(...)` 並搭配 `str()`）。
3. 給定一句以空白分隔的英文句子，將每個單字反轉後，重新組合成一句話（單字順序不變，但每個單字內部字元順序反轉）。
4. 給定 `line = 'A,90,B,85,C,78'`，將其轉換成巢狀清單 `[['A', 90], ['B', 85], ['C', 78]]`。
