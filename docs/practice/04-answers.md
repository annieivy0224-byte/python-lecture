# 解答與說明

::: warning 使用建議
請先嘗試自行完成 [5-1 字串基礎練習題](./01-string-basics)、[5-2 清單基礎練習題](./02-list-basics)、[5-3 字串與清單綜合練習題](./03-mixed) 後，再對照以下解答。每題解答僅為其中一種寫法，歡迎嘗試其他作法。
:::

## 5-1 字串基礎練習題 解答

### 第 1 題：反轉字串

```python
s = input()
print(s[::-1])
```

### 第 2 題：判斷回文

```python
s = input()

if s == s[::-1]:
    print('Yes')
else:
    print('No')
```

### 第 3 題：計算字串中母音的數量

```python
s = input()
v = 'aeiouAEIOU'

count = 0
for ch in s:
    if ch in v:
        count += 1

print(count)
```

### 第 4 題：將姓名格式化

```python
name = input()
first, last = name.split()

print(last.capitalize(), first.capitalize())
```

### 第 5 題：統計單字數量

```python
s = input()
words = s.split()

print(len(words))
```

### 第 6 題：移除字串中的數字

```python
s = input()

result = ''
for ch in s:
    if not ch.isdigit():
        result += ch

print(result)
```

### 第 7 題：將字串中的空白替換為下底線

```python
s = input()
print(s.replace(' ', '_'))
```

### 第 8 題：身分證字號開頭字母判斷（簡化版）

```python
n = input()

if len(n) == 10 and n[0].isalpha():
    print('Y')
else:
    print('N')
```

### 第 9 題：將日期字串轉換格式

```python
s = input()
year, month, day = s.split('-')

print(f'{year}年{month}月{day}日')
```

### 第 10 題：找出字串中最長的單字

```python
s = input()
words = s.split()

longest = words[0]
for w in words:
    if len(w) > len(longest):
        longest = w

print(longest)
```

---

## 5-2 清單基礎練習題 解答

### 第 1 題：找出最大值與最小值

```python
nums = list(map(int,input().split(',')))

max_val = max(nums)
min_val = min(nums)

print(f'最大值：{max_val}，最小值：{min_val}')
```

### 第 2 題：計算清單總和與平均

```python
scores = list(map(int,input().split(',')))

total = sum(scores)
average = total / len(scores)

print(f'總和：{total}，平均：{average:.2f}')
```

### 第 3 題：移除清單中的重複元素

```python
nums = list(map(int,input().split(',')))

result = []
for n in nums:
    if n not in result:
        result.append(n)

print(result)
```

### 第 4 題：篩選及格名單

```python
scores = list(map(int,input().split(',')))

passed = [s for s in scores if s >= 60]
print(''.join(map(str,passed)))
```

### 第 5 題：清單反轉

```python
nums = list(map(int,input().split(',')))

print(result[::-1])
```

### 第 6 題：兩個清單合併並排序

```python
list1 = list(map(int,input().split(',')))
list2 = list(map(int,input().split(',')))

merged = list1 + list2
merged.sort()

print(merged)
```

### 第 7 題：計算每個數字出現的次數

```python
# 方法 1
from collections import Counter

nums = list(map(int,input().split(',')))  
c = Counter(nums)
for i in c:
    print(f'{i}: {c[i]} 次')

# 方法 2
nums = list(map(int,input().split(',')))
n = sorted(set(nums))
for i in n:
    print(f'{i}: {nums.count(i)} 次')
```

### 第 8 題：將清單中所有數字加總並判斷奇偶

```python
nums = [1, 2, 3, 4, 5]

total = sum(nums)

if total % 2 == 0:
    print(f'總和為 {total}，是偶數')
else:
    print(f'總和為 {total}，是奇數')
```

### 第 9 題：清單中的偶數與奇數分類

```python
nums = [1, 2, 3, 4, 5, 6, 7, 8]

evens = [n for n in nums if n % 2 == 0]
odds = [n for n in nums if n % 2 != 0]

print(f'偶數：{evens}')
print(f'奇數：{odds}')
```

### 第 10 題：二維成績表計算每列總分

```python
students = [
    ['Amy', 80, 90, 85],
    ['Bob', 70, 65, 88],
    ['Cathy', 95, 92, 99]
]

for s in students:
    name = s[0]
    total = sum(s[1:])
    print(f'{name} 的總分：{total}')
```

---

## 5-3 字串與清單綜合練習題 解答

### 第 1 題：將句子拆解成單字清單並排序

```python
sentence = 'the Quick brown Fox jumps'

words = sentence.split()
words.sort(key=str.lower)

print(words)
```

### 第 2 題：統計字元出現頻率

```python
s = 'hello world'

s = s.replace(' ', '').lower()
chars = list(s)

unique_chars = list(set(chars))

# 依出現次數由高到低排序
unique_chars.sort(key=lambda c: chars.count(c), reverse=True)

for c in unique_chars[:3]:
    print(f'{c}: {chars.count(c)} 次')
```

::: tip 說明
`sort(key=...)` 的 `key` 參數可以指定一個函式，用來決定排序的依據。這裡使用 `lambda` 匿名函式 `lambda c: chars.count(c)`，表示依照每個字元在 `chars` 中出現的次數來排序。
:::

### 第 3 題：將清單資料轉換為一行字串並輸出

```python
data = [['Amy', 90], ['Bob', 85], ['Cathy', 95]]

items = [f'{name}:{score}' for name, score in data]
result = ','.join(items)

print(result)
```

### 第 4 題：解析 CSV 格式字串並計算平均

```python
line = '王小明,85,90,78,92'

parts = line.split(',')
name = parts[0]
scores = [int(x) for x in parts[1:]]

average = sum(scores) / len(scores)
print(f'{name} 的平均成績為 {average:.2f}')
```

### 第 5 題：找出句子中出現次數最多的單字

```python
sentence = 'the cat sat on the mat the cat ran'
words = sentence.split()

max_word = words[0]
max_count = 0

for w in words:
    c = words.count(w)
    if c > max_count:
        max_count = c
        max_word = w

print(f'出現次數最多的單字是 "{max_word}"，出現了 {max_count} 次')
```

### 第 6 題：將多行資料轉換為巢狀清單並篩選

```python
lines = [
    '王小明,85,90,78',
    '李小華,60,55,70',
    '陳小美,92,88,95'
]

result = []
for line in lines:
    parts = line.split(',')
    name = parts[0]
    scores = [int(x) for x in parts[1:]]
    result.append([name, scores])

qualified = []
for name, scores in result:
    avg = sum(scores) / len(scores)
    if avg >= 80:
        qualified.append(name)

print(f'平均達80分的學生：{qualified}')
```

### 第 7 題：身分證字號簡易檢查

```python
s = input('請輸入字串：')

is_valid = (
    len(s) == 10 and
    s[0].isalpha() and
    s[1:].isdigit()
)

if is_valid:
    print('格式正確')
else:
    print('格式錯誤')
```

### 第 8 題：將數字清單轉換為逗號分隔字串並反轉

```python
nums = [1, 2, 3, 4, 5]

s = ','.join(str(n) for n in nums)
print(f'原字串：{s}')
print(f'反轉後：{s[::-1]}')
```

說明：`s[::-1]` 是針對**整個字串**進行反轉，因此 `'1,2,3,4,5'` 反轉後變成 `'5,4,3,2,1'`（剛好每個數字仍是單字元，所以結果看起來像是把數字順序反轉；若數字超過一位數，結果會不同，可自行測試 `[10, 20, 30]` 觀察差異）。
