# 4-1 元組 tuple

元組（tuple）與清單（list）非常相似，都可以儲存一系列的資料，最大的差別是 **tuple 是不可變（immutable）的**，建立之後不能新增、刪除或修改其內容。

## 設定 tuple 變數

tuple 使用小括號 `()` 來表示（也可以省略括號，但建議寫出來以提高可讀性）。

```python
point = (3, 5)
colors = ('red', 'green', 'blue')

print(point)    # (3, 5)
print(colors)   # ('red', 'green', 'blue')
print(type(point))  # <class 'tuple'>
```

## 取用部分 tuple 內容

tuple 的索引與切片用法與 list 完全相同。

```python
colors = ('red', 'green', 'blue', 'yellow')

print(colors[0])     # red
print(colors[-1])    # yellow
print(colors[1:3])   # ('green', 'blue')
```

## tuple 是不可變的

```python
point = (3, 5)

point[0] = 10   # TypeError: 'tuple' object does not support item assignment
```

::: tip 為什麼要用 tuple？
1. **資料保護**：不希望資料被誤改時，使用 tuple 較安全。
2. **效能較好**：tuple 比 list 佔用較少記憶體，存取速度也較快。
3. **可作為字典的鍵（key）**：list 不可以，但 tuple 可以（因為它是不可變的）。
:::

## 配合 in 與 not in 的使用

```python
colors = ('red', 'green', 'blue')

print('red' in colors)      # True
print('black' not in colors) # True
```

## 逐一取出 tuple 內容

```python
colors = ('red', 'green', 'blue')

for c in colors:
    print(c)
```

## 僅有 1 個元素的 tuple

要建立只有一個元素的 tuple，**必須加上逗號**，否則會被視為一般的數值或字串。

```python
a = (5)       # 這不是 tuple，是 int
b = (5,)      # 這才是 tuple

print(type(a))   # <class 'int'>
print(type(b))   # <class 'tuple'>
```

## 將 tuple 轉成 list

如果需要修改 tuple 的內容，可以先轉換成 list：

```python
colors = ('red', 'green', 'blue')

color_list = list(colors)
color_list.append('yellow')

print(color_list)   # ['red', 'green', 'blue', 'yellow']
```

## 多重賦值（tuple 解構）

```python
point = (3, 5)

x, y = point
print(x, y)   # 3 5
```

這個特性常用來一次交換兩個變數的值：

```python
a, b = 1, 2
a, b = b, a

print(a, b)   # 2 1
```

### 自主練習

1. 建立一個 tuple `dimensions = (1920, 1080)`，並使用解構方式取出寬度與高度，分別存入 `width` 與 `height`。
2. 給定 `t = (1, 2, 3)`，嘗試將 `t[0]` 改為 `100`，觀察並說明發生的錯誤。
3. 將 `t = (1, 2, 3)` 轉換為 list，新增一個元素 `4` 後，再轉換回 tuple。
4. 建立一個只包含數字 `7` 的 tuple，並確認其型態。
