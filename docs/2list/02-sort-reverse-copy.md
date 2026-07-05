# 2-2 排序、反轉與複製

## .sort()：清單的排序 - 方法

`.sort()` 方法會**直接修改原本的清單**，將內容由小到大排序（預設為升冪）。

```python
nums = [5, 2, 9, 1, 7]

nums.sort()
print(nums)   # [1, 2, 5, 7, 9]
```

如果要由大到小排序，可以加上 `reverse=True`：

```python
nums = [5, 2, 9, 1, 7]

nums.sort(reverse=True)
print(nums)   # [9, 7, 5, 2, 1]
```

## sorted()：產生新清單而不更動原清單 - 函式

如果不想改變原本的清單，可以使用內建函式 `sorted()`，它會回傳一個新的已排序清單。

```python
nums = [5, 2, 9, 1, 7]

new_nums = sorted(nums)

print(nums)       # [5, 2, 9, 1, 7]（原清單不變）
print(new_nums)   # [1, 2, 5, 7, 9]
```
由大到小排序：

```python
nums = [5, 2, 9, 1, 7]

new_nums = sorted(nums, reverse=True)

print(nums)       # [5, 2, 9, 1, 7]（原清單不變）
print(new_nums)   # [1, 2, 5, 7, 9]
```

## 方法 vs 函式
`物件.方法()`

Python 中,將所有值皆當成一個物件(例如:字串、整數、浮點數都是物件)
「每個物件都有自己的方法, 這些方法只能被該類型的物件呼叫」

`函數()`

Python 中也提供許多已經寫好的程式供你使用,而這些程式跟任何物件都沒有關係,我們則稱為函數

## 字串清單的排序

`.sort()` 對字串清單會依照ASCII順序排序（大寫字母會排在小寫字母之前）。

```python
names = ['Tom', 'amy', 'Bob', 'cathy']

names.sort()
print(names)   # ['Bob', 'Tom', 'amy', 'cathy']
```

若希望忽略大小寫排序，可以使用 `key` 參數：

```python
names = ['Tom', 'amy', 'Bob', 'cathy']

names.sort(key=str.lower)
print(names)   # ['amy', 'Bob', 'cathy', 'Tom']
```

::: tip 什麼是 key 參數？
`key` 是一個函式，排序前會先對每個元素套用它，再依套用後的結果來比較大小。

`key=str.lower` 的意思是：比較時先把每個字串轉成小寫，讓大小寫不影響排序結果。

原本的元素值不會被改變，只是「用來比較的依據」不同而已。

```python
# 也可以用 lambda 寫法，效果相同
names.sort(key=lambda s: s.lower())
```
:::
## 什麼是 ASCII？

電腦只認識數字，所有的字元在電腦內部都是以一個整數來儲存。
**ASCII（American Standard Code for Information Interchange）** 就是一套規定「哪個數字代表哪個字元」的標準。

| 字元 | ASCII 值 | 字元 | ASCII 值 |
|------|---------|------|---------|
| `'A'` | 65 | `'Z'` | 90 |
| `'a'` | 97 | `'z'` | 122 | 

幾個重要規律：
- 大寫 `A–Z` 對應 65–90
- 小寫 `a–z` 對應 97–122
- **大寫字母的數值比小寫小**，所以排序時大寫永遠排在小寫前面

Python 中可以用 `ord()` 查一個字元的 ASCII 值，`chr()` 則是反過來：

```python
print(ord('A'))   # 65
print(ord('a'))   # 97
print(chr(66))    # 'B'
```

字串比大小時，Python 會從左到右逐字元比較 ASCII 值：

```python
print('Bob' < 'amy')   # True，因為 'B'(66) < 'a'(97)
print('apple' < 'banana')   # True，因為 'a'(97) < 'b'(98)
```

這就是為什麼 `.sort()` 排字串清單時，大寫會排在小寫前面。

## 清單的反轉：.reverse()

`.reverse()` 會將清單的順序**整個反過來**（並非排序）。

```python
nums = [5, 2, 9, 1, 7]

nums.reverse()
print(nums)   # [7, 1, 9, 2, 5]
```

::: tip 切片反轉 vs reverse()

- `nums[::-1]`：產生一個反轉後的**新清單**，原清單不變。
- `nums.reverse()`：**直接修改**原清單的順序。
:::

## 清單的複製

### 為什麼直接用 = 不行？

Python 中的變數是「貼在物件上的標籤」，不是「裝東西的容器」。

直接用 `=` 賦值，只是把另一個標籤貼到**同一個清單**上，並不會複製資料：

```
a ──┐
    ├──▶ [1, 2, 3]
b ──┘
```

```python
a = [1, 2, 3]
b = a          # b 與 a 指向同一個清單

b.append(4)
print(a)       # [1, 2, 3, 4]，a 也被改變了！
print(b)       # [1, 2, 3, 4]
```

### 正確複製：使用 [:] 或 .copy()

若要建立真正獨立的副本，讓兩個變數各自指向不同的清單：

```
a ──▶ [1, 2, 3]
b ──▶ [1, 2, 3]   ← 另一份獨立副本
```

```python
a = [1, 2, 3]
b = a[:]       # 或 b = a.copy()

b.append(4)
print(a)       # [1, 2, 3]，a 不受影響
print(b)       # [1, 2, 3, 4]
```

## 本節方法一覽

| 方法／函式 | 會改變原清單？ | 說明 |
|-----------|-------------|------|
| `list.sort()` | ✅ 是 | 原地排序 |
| `sorted(list)` | ❌ 否 | 回傳新的排序清單 |
| `list.reverse()` | ✅ 是 | 原地反轉 |
| `list[::-1]` | ❌ 否 | 回傳新的反轉清單 |
| `list.copy()` / `list[:]` | ❌ 否 | 回傳獨立副本 |

### 自主練習

1. 給定 `scores = [88, 72, 95, 60, 100, 76]`，使用 `sorted()` 印出由高到低排序後的成績，但**不要**改變原本的 `scores`。
2. 將 `scores` 使用 `.sort()` 直接由小到大排序並印出。
3. 給定 `words = ['banana', 'Apple', 'cherry', 'Date']`，請忽略大小寫排序並印出結果。
4. 練習複製清單：建立 `original = [1, 2, 3]`，再用 `.copy()` 建立 `duplicate`，對 `duplicate` 新增元素 `4`，確認 `original` 不受影響。