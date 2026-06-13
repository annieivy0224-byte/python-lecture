# 4-2 集合 set

集合（set）是一種**不重複、無順序**的資料集合，常用於去除重複資料、判斷成員關係，以及進行集合運算（聯集、交集、差集等）。

## 設定集合變數

set 使用大括號 `{}` 表示，但**內容不能重複**，重複的元素會自動被移除。

```python
nums = {1, 2, 3, 2, 1}
print(nums)   # {1, 2, 3}，重複的元素自動去除

fruits = set(['apple', 'banana', 'apple', 'cherry'])
print(fruits)   # {'apple', 'banana', 'cherry'}
```

::: warning 空集合
`{}` 代表的是**空字典**，不是空集合。要建立空集合，必須使用 `set()`：

```python
empty_set = set()
print(type(empty_set))   # <class 'set'>

empty_dict = {}
print(type(empty_dict))  # <class 'dict'>
```
:::

## set 是無順序的

set 中的元素**沒有固定順序**，也不能使用索引存取（`s[0]` 會產生錯誤）。

```python
s = {3, 1, 2}
print(s)   # 順序可能是 {1, 2, 3} 或其他順序
```

## add() 與 remove()：新增與刪除元素

```python
fruits = {'apple', 'banana'}

fruits.add('cherry')
print(fruits)   # {'apple', 'banana', 'cherry'}（順序可能不同）

fruits.remove('banana')
print(fruits)   # {'apple', 'cherry'}
```

::: tip discard() vs remove()
`remove()` 若刪除不存在的元素會產生 `KeyError`；`discard()` 則不會報錯，建議在不確定元素是否存在時使用 `discard()`。
:::

## 配合 in 與 not in 的使用

set 的 `in` 判斷速度比 list 快很多，常用於大量資料的成員檢查。

```python
visited = {'Taipei', 'Tokyo', 'Osaka'}

print('Tokyo' in visited)     # True
print('Seoul' not in visited) # True
```

## 聯集和交集

| 運算 | 符號 | 方法 | 說明 |
|---|---|---|---|
| 聯集 | `\|` | `union()` | 合併兩個集合的所有元素 |
| 交集 | `&` | `intersection()` | 兩個集合中**共同**的元素 |

```python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)   # {1, 2, 3, 4, 5, 6}，聯集
print(a & b)   # {3, 4}，交集

print(a.union(b))         # {1, 2, 3, 4, 5, 6}
print(a.intersection(b))  # {3, 4}
```

## 差集和對稱差集

| 運算 | 符號 | 方法 | 說明 |
|---|---|---|---|
| 差集 | `-` | `difference()` | 屬於 a 但不屬於 b 的元素 |
| 對稱差集 | `^` | `symmetric_difference()` | 只存在於其中一個集合，不同時存在於兩者 |

```python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a - b)   # {1, 2}，在a但不在b
print(b - a)   # {5, 6}，在b但不在a
print(a ^ b)   # {1, 2, 5, 6}，對稱差集
```

## 範例：找出兩班學生重複選課的人數

```python
class_a = {'Amy', 'Bob', 'Cathy', 'David'}
class_b = {'Bob', 'David', 'Eric', 'Frank'}

both = class_a & class_b
print(f'同時選兩堂課的學生：{both}')
print(f'人數：{len(both)}')
```

執行結果：

```
同時選兩堂課的學生：{'Bob', 'David'}
人數：2
```

## 範例：使用 set 移除清單中的重複元素

```python
nums = [1, 3, 2, 3, 1, 4, 2, 5]

unique_nums = list(set(nums))
print(unique_nums)   # 順序可能改變，例如 [1, 2, 3, 4, 5]
```

::: warning 注意
`set()` 不會保留原本的順序。若需要保留原順序，請參考 List 章節中「移除清單中的重複元素」的解法（使用迴圈逐一檢查）。
:::

### 自主練習

1. 給定 `a = {1, 2, 3}`、`b = {2, 3, 4}`，計算 `a` 與 `b` 的聯集、交集、差集（`a-b`）與對稱差集。
2. 給定一個包含重複數字的清單，使用 `set()` 計算清單中有幾個**不同**的數字。
3. 給定兩個學生名單（set），找出**只在第一班但不在第二班**的學生名單。
