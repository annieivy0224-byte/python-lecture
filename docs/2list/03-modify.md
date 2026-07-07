# 2-3 新增、刪除與插入

## .append()：在清單尾端新增元素

```python
fruits = ['apple', 'banana']

fruits.append('cherry')
print(fruits)   # ['apple', 'banana', 'cherry']
```

::: warning 注意
`.append()` 一次只能新增**一個元素**。如果傳入一個清單，會把整個清單當作「一個元素」加進去：

```python
fruits = ['apple', 'banana']
fruits.append(['cherry', 'durian'])
print(fruits)   # ['apple', 'banana', ['cherry', 'durian']]
```

若想把另一個清單的元素逐一加入，請改用 `.extend()`。
:::

## 清單的合併與複製：+ 與 *

### + 合併兩個清單

`+` 會把兩個清單合併成一個**新的清單**，原本的清單不會改變：

```python
a = ['apple', 'banana']
b = ['cherry', 'durian']

c = a + b
print(c)   # ['apple', 'banana', 'cherry', 'durian']
print(a)   # ['apple', 'banana']（原清單不變）
```

::: tip + vs .extend()
- `a + b`：產生**新清單**，a 和 b 都不變。
- `a.extend(b)`：**直接修改** a，把 b 的元素加進去。
:::

### * 重複清單內容

`*` 會將清單的內容重複指定次數，產生一個**新的清單**：

```python
a = [0, 1]

print(a * 3)   # [0, 1, 0, 1, 0, 1]
print(a)       # [0, 1]（原清單不變）
```

常見用途是快速建立初始值清單：

```python
zeros = [0] * 5
print(zeros)   # [0, 0, 0, 0, 0]

blank = [None] * 3
print(blank)   # [None, None, None]
```

## .remove()：依「值」刪除元素

`.remove()` 會刪除清單中**第一個**符合指定值的元素。

```python
fruits = ['apple', 'banana', 'cherry', 'banana']

fruits.remove('banana')
print(fruits)   # ['apple', 'cherry', 'banana']
```

::: warning 常見錯誤：值不存在時會發生錯誤
若指定的值不在清單中，`.remove()` 會產生 `ValueError`：

```python
fruits = ['apple', 'banana']
fruits.remove('mango')   # ValueError: list.remove(x): x not in list
```

使用前建議先用 `in` 確認元素存在：

```python
if 'mango' in fruits:
    fruits.remove('mango')
else:
    print('找不到該元素')
```
:::

## .pop()：取出並刪除指定位置的元素
![alt text](image.png)

`.pop()` 會刪除指定索引的元素，**並回傳被刪除的值**。若不指定索引，預設刪除並回傳最後一個元素。

```python
fruits = ['apple', 'banana', 'cherry']

last_item = fruits.pop()
print(last_item)   # cherry
print(fruits)      # ['apple', 'banana']

first_item = fruits.pop(0)
print(first_item)  # apple
print(fruits)      # ['banana']
```

::: warning 常見錯誤：對空清單呼叫 pop()
若清單已經是空的，呼叫 `pop()` 會產生 `IndexError`：

```python
empty = []
empty.pop()   # IndexError: pop from empty list
```

使用前可先確認清單不為空：

```python
if fruits:
    item = fruits.pop()
```
:::

## .clear()：清空清單

```python
fruits = ['apple', 'banana', 'cherry']

fruits.clear()
print(fruits)   # []
```

## 本節方法一覽

| 方法 | 說明 | 會回傳值？ |
|------|------|-----------|
| `list.append(x)` | 在尾端新增一個元素 | 無 |
| `list.remove(x)` | 刪除第一個值為 x 的元素 | 無 |
| `list.pop(i)` | 刪除並回傳索引 i 的元素（預設最後一個） | ✅ 是 |
| `list.clear()` | 清空清單 | 無 |
| `a + b` | 合併兩個清單 | ✅ 是 |
| `a * n` | 將清單重複 n 次 | ✅ 是 |

### 自主練習

1. 建立清單 `colors = ['red', 'green', 'blue']`，使用 `.append()` 新增 `'yellow'`。
2. 給定 `data = [10, 20, 30, 20, 40]`，使用 `.remove()` 刪除第一個 `20`，觀察結果。
3. 使用 `.pop()` 依序取出並印出清單 `[1, 2, 3]` 中的每一個元素，直到清單為空。