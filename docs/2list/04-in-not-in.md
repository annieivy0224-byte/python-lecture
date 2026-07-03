# 2-4 in / not in 與 index、count

## in 與 not in：判斷元素是否存在

```python
fruits = ['apple', 'banana', 'cherry']

print('apple' in fruits)      # True
print('mango' in fruits)      # False
print('mango' not in fruits)  # True
```

這在配合 `if` 條件式時非常實用：

```python
fruits = ['apple', 'banana', 'cherry']

target = 'banana'
if target in fruits:
    print(f'{target} 在清單中')
else:
    print(f'{target} 不在清單中')
```

## index()：找出元素第一次出現的位置

```python
fruits = ['apple', 'banana', 'cherry', 'banana']

pos = fruits.index('banana')
print(pos)   # 1，回傳第一次出現的索引
```

::: warning 常見錯誤：元素不存在時會發生錯誤
如果元素不存在於清單中，`index()` 會產生 `ValueError`，程式會直接中斷：

```python
fruits = ['apple', 'banana', 'cherry']
print(fruits.index('mango'))   # ValueError: 'mango' is not in list
```

使用前請先用 `in` 確認元素存在：

```python
fruits = ['apple', 'banana', 'cherry']

target = 'mango'
if target in fruits:
    print(fruits.index(target))
else:
    print(f'{target} 不存在於清單中')
```
:::

## count()：計算元素出現的次數

```python
nums = [1, 2, 2, 3, 2, 4, 5, 2]

print(nums.count(2))   # 4
print(nums.count(9))   # 0，不存在則回傳 0（不會發生錯誤）
```

## 綜合範例：統計與查找

```python
scores = [85, 90, 78, 90, 65, 90, 88]

# 判斷是否有人拿到滿分
if 100 in scores:
    print('有人拿到滿分')
else:
    print('沒有人拿到滿分')

# 計算 90 分出現的次數
count_90 = scores.count(90)
print(f'90 分出現了 {count_90} 次')

# 找出第一個 90 分的位置
pos = scores.index(90)
print(f'第一個 90 分出現在索引 {pos}')
```

執行結果：

```
沒有人拿到滿分
90 分出現了 3 次
第一個 90 分出現在索引 1
```

## 本節方法一覽

| 方法 | 說明 | 找不到時 |
|------|------|---------|
| `x in list` | 判斷 x 是否存在，回傳 True/False | 回傳 False（不報錯） |
| `list.index(x)` | 回傳 x 第一次出現的索引 | ❌ 產生 ValueError |
| `list.count(x)` | 回傳 x 出現的次數 | 回傳 0（不報錯） |

### 自主練習

1. 給定 `letters = ['a', 'b', 'c', 'd', 'e']`，判斷 `'c'` 與 `'z'` 是否存在於清單中，並分別印出結果。
2. 給定 `nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]`，計算 `5` 出現的次數，並找出 `5` 第一次出現的索引位置。
3. 寫一個程式，輸入一個數字，判斷它是否存在於 `nums = [10, 20, 30, 40, 50]` 中；若存在則印出其索引位置，否則印出「不存在」。