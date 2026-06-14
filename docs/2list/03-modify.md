# 2-3 新增、刪除與插入

## append()：在清單尾端新增元素

```python
fruits = ['apple', 'banana']

fruits.append('cherry')
print(fruits)   # ['apple', 'banana', 'cherry']
```

::: warning 注意
`append()` 一次只能新增**一個元素**。如果傳入一個清單，會把整個清單當作「一個元素」加進去：

```python
fruits = ['apple', 'banana']
fruits.append(['cherry', 'durian'])
print(fruits)   # ['apple', 'banana', ['cherry', 'durian']]
```

:::

## extend()：合併另一個清單的所有元素

```python
fruits = ['apple', 'banana']
more_fruits = ['cherry', 'durian']

fruits.extend(more_fruits)
print(fruits)   # ['apple', 'banana', 'cherry', 'durian']
```

## insert()：在指定位置插入元素

```python
fruits = ['apple', 'banana', 'cherry']

fruits.insert(1, 'orange')
print(fruits)   # ['apple', 'orange', 'banana', 'cherry']
```

`insert(index, value)` 會把 `value` 插入到 `index` 的位置，原本該位置及之後的元素依序往後移。

## del：刪除指定位置的元素

```python
fruits = ['apple', 'banana', 'cherry']

del fruits[1]
print(fruits)   # ['apple', 'cherry']
```

`del` 也可以搭配切片刪除多個元素：

```python
nums = [1, 2, 3, 4, 5]

del nums[1:3]
print(nums)   # [1, 4, 5]
```

## remove()：依「值」刪除元素

`remove()` 會刪除清單中**第一個**符合指定值的元素。

```python
fruits = ['apple', 'banana', 'cherry', 'banana']

fruits.remove('banana')
print(fruits)   # ['apple', 'cherry', 'banana']
```

::: tip del vs remove

- `del list[index]`：依**索引位置**刪除。
- `list.remove(value)`：依**內容值**刪除（找到第一個符合的）。
  :::

## pop()：取出並刪除指定位置的元素

`pop()` 會刪除指定索引的元素，**並回傳被刪除的值**。若不指定索引，預設刪除並回傳最後一個元素。

```python
fruits = ['apple', 'banana', 'cherry']

last_item = fruits.pop()
print(last_item)   # cherry
print(fruits)       # ['apple', 'banana']

first_item = fruits.pop(0)
print(first_item)   # apple
print(fruits)       # ['banana']
```

## clear()：清空清單

```python
fruits = ['apple', 'banana', 'cherry']

fruits.clear()
print(fruits)   # []
```

### 自主練習

1. 建立清單 `colors = ['red', 'green', 'blue']`，使用 `append()` 新增 `'yellow'`，再使用 `insert()` 在最前面插入 `'black'`。
2. 給定 `nums = [1, 2, 3, 4, 5, 6]`，使用 `del` 刪除索引 `2` 到 `4`（不含）的元素。
3. 給定 `data = [10, 20, 30, 20, 40]`，使用 `remove()` 刪除第一個 `20`，觀察結果。
4. 使用 `pop()` 依序取出並印出清單 `[1, 2, 3]` 中的每一個元素，直到清單為空。
