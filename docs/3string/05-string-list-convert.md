# 3-5 字串與清單的互相轉換

字串與清單之間經常需要互相轉換，這在處理文字資料（如 CSV、使用者輸入）時非常常見。

::: tip 本節是字串與清單的整合應用
這一節會同時用到第 2 章（清單操作）與第 3 章（字串方法）的技巧，是兩者的綜合運用。
:::

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

### 方法一：將字元合併，直接使用 `join()`

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

::: warning str(list) 不是你要的結果
`str(list)` 會把整個清單轉成包含中括號與逗號的字串：

```python
nums = [1, 2, 3]

print(str(nums))   # '[1, 2, 3]'，包含中括號，通常不是我們要的
```

若想要 `'1,2,3'` 這種格式，需要先將每個元素轉為字串再使用 `join()`：

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

## 轉換方法總整理

| 需求 | 寫法 |
|------|------|
| 字串逐字元拆成清單 | `list(s)` |
| 字串依分隔符拆成清單 | `s.split(sep)` |
| 字串清單合併為字串 | `'sep'.join(lst)` |
| 字元清單合併為字串 | `''.join(chars)` |
| 數字清單合併為字串 | `'sep'.join([str(n) for n in nums])` |

### 自主練習

1. 給定 `s = 'hello'`，使用 `list()` 將其拆解為字元清單，再使用 `sorted()` 排序後，用 `join()` 合併回字串（結果應為 `'ehllo'`）。
2. 給定 `nums = [1, 2, 3, 4, 5]`，將其轉換為字串 `'1+2+3+4+5'`（提示：使用 `'+'.join(...)` 並搭配 `str()`）。
3. 給定一句以空白分隔的英文句子，將每個單字反轉後，重新組合成一句話（單字順序不變，但每個單字內部字元順序反轉）。
4. 給定 `line = 'A,90,B,85,C,78'`，請分兩步完成：
   - 先用 `split(',')` 切割，取得 `['A', '90', 'B', '85', 'C', '78']`
   - 再用 list comprehension 或迴圈，每兩個元素組成一個子清單，產生 `[['A', 90], ['B', 85], ['C', 78]]`
   （提示：用 `range(0, len(data), 2)` 每次跳兩格）