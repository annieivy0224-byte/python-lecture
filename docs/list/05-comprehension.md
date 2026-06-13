# 1-5 List Comprehension

當我們要建立一個清單時，可以將其內容一個一個寫在中括號之內。如果清單的內容很多，用一一列舉的寫法不僅容易出錯，有時也不太實際。例如，想建立一個內容為 `1 ~ 1000` 的清單，採用列舉法實在不切實際。此時若使用**清單推導（list comprehension）**，可以輕鬆完成。

## 基本語法

```python
[運算式 for 變數 in 可迭代物件]
```

```python
a = [i + 1 for i in range(1000)]

print(a)
# [1, 2, 3, 4, 5, ..., 999, 1000]
```

在這個例子中，清單的內容宣告為 `i + 1`，其中 `i` 是由 `for` 指令說明：`i` 是 `range(1000)` 中的每一個值，也就是 `0 ~ 999`。

## 範例：建立字母清單

```python
a = [chr(ord('A') + i) for i in range(26)]

print(a)
# ['A', 'B', 'C', ..., 'Y', 'Z']
```

說明：`ord('A')` 是字元 `A` 的編碼值（65），`chr()` 則是將數值轉回字元。讓 `i` 從 `0` 遞增到 `25`，加上基底 `65` 後，依序得到 `A` 到 `Z`。

## 加上條件式：for...if

```python
[運算式 for 變數 in 可迭代物件 if 條件]
```

```python
a = [i for i in range(1, 1001) if i % 23 == 0 or i % 35 == 0]

print(a)
# [23, 35, 46, 69, 70, 92, ...]
```

這個例子先用 `for` 說明 `i` 是 `1 ~ 1000` 中的每個數，再用 `if` 篩選出能被 `23` 或 `35` 整除的數。

## 範例：對清單中每個元素做轉換

```python
nums = [1, 2, 3, 4, 5]

squares = [n ** 2 for n in nums]
print(squares)   # [1, 4, 9, 16, 25]
```

## 範例：篩選符合條件的字串

```python
words = ['apple', 'kiwi', 'banana', 'fig', 'cherry']

long_words = [w for w in words if len(w) > 4]
print(long_words)   # ['apple', 'banana', 'cherry']
```

## 範例：條件式運算（if...else）

list comprehension 也可以搭配 `if...else` 對每個元素做不同的轉換（此時 `if...else` 要放在運算式的位置，而不是篩選條件）：

```python
nums = [1, 2, 3, 4, 5, 6]

result = ['偶數' if n % 2 == 0 else '奇數' for n in nums]
print(result)   # ['奇數', '偶數', '奇數', '偶數', '奇數', '偶數']
```

### 自主練習

1. 建立一個清單，內容是小寫英文字母 `'a' ~ 'z'`。
2. 建立一個清單，內容是 2 的 1 次方到 2 的 10 次方。
3. 建立一個清單，內容是 `1 ~ 100` 中所有除以 `5` 餘數為 `3` 的數。
4. 給定 `nums = [12, 7, 5, 22, 9, 30, 14]`，使用 list comprehension 篩選出所有大於 `10` 的數。
5. 給定 `words = ['Tom', 'AMY', 'bob']`，使用 list comprehension 將所有字串轉為小寫。
