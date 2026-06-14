# 2-2 排序、反轉與複製

## 清單的排序：sort()

`sort()` 方法會**直接修改原本的清單**，將內容由小到大排序（預設為升冪）。

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

## sorted()：產生新清單而不更動原清單

如果不想改變原本的清單，可以使用內建函式 `sorted()`，它會回傳一個新的已排序清單。

```python
nums = [5, 2, 9, 1, 7]

new_nums = sorted(nums)

print(nums)       # [5, 2, 9, 1, 7]（原清單不變）
print(new_nums)   # [1, 2, 5, 7, 9]
```

## 字串清單的排序

`sort()` 對字串清單會依照字典順序排序（大寫字母會排在小寫字母之前）。

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

## 清單的反轉：reverse()

`reverse()` 會將清單的順序**整個反過來**（並非排序）。

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

直接用 `=` 賦值並不會複製清單，而是讓兩個變數指向**同一份**資料：

```python
a = [1, 2, 3]
b = a          # b 與 a 指向同一個清單

b.append(4)
print(a)       # [1, 2, 3, 4]，a 也被改變了！
```

若要建立真正獨立的副本，可使用切片 `[:]` 或 `copy()`：

```python
a = [1, 2, 3]
b = a[:]       # 或 b = a.copy()

b.append(4)
print(a)       # [1, 2, 3]，a 不受影響
print(b)       # [1, 2, 3, 4]
```

### 自主練習

1. 給定 `scores = [88, 72, 95, 60, 100, 76]`，使用 `sorted()` 印出由高到低排序後的成績，但**不要**改變原本的 `scores`。
2. 將 `scores` 使用 `sort()` 直接由小到大排序並印出。
3. 給定 `words = ['banana', 'Apple', 'cherry', 'Date']`，請忽略大小寫排序並印出結果。
4. 練習複製清單：建立 `original = [1, 2, 3]`，再用 `copy()` 建立 `duplicate`，對 `duplicate` 新增元素 `4`，確認 `original` 不受影響。
