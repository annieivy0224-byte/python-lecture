# 4-3 字典 dict

字典（dict）是一種以「**鍵（key）─值（value）**」配對方式儲存資料的型態，可以透過鍵快速找到對應的值，是處理結構化資料時非常重要的工具。

## 設定字典及取出值

字典使用大括號 `{}`，每個項目以 `key: value` 表示，項目之間用逗號分隔。

```python
student = {'name': '小明', 'age': 18, 'score': 90}

print(student)             # {'name': '小明', 'age': 18, 'score': 90}
print(student['name'])     # 小明
print(student['score'])    # 90
```

::: warning key 不存在時
若使用 `student['xxx']` 取出不存在的鍵，會產生 `KeyError`。建議使用 `get()` 方法，可以在鍵不存在時回傳預設值，而不會報錯：

```python
print(student.get('height'))         # None
print(student.get('height', 0))      # 0，指定預設值
```
:::

## 新增及刪除字典內容

### 新增 / 修改

```python
student = {'name': '小明', 'age': 18}

student['score'] = 90        # 新增
student['age'] = 19           # 修改既有的值

print(student)   # {'name': '小明', 'age': 19, 'score': 90}
```

### 刪除

```python
student = {'name': '小明', 'age': 18, 'score': 90}

del student['score']
print(student)   # {'name': '小明', 'age': 18}

# pop()：刪除並回傳該值
age = student.pop('age')
print(age)        # 18
print(student)    # {'name': '小明'}
```

## 配合 in 與 not in 的使用

`in` 用於字典時，預設是判斷**鍵（key）**是否存在。

```python
student = {'name': '小明', 'age': 18}

print('name' in student)    # True
print('score' in student)   # False
```

## 逐一取出字典內容

### keys()、values()、items()

```python
student = {'name': '小明', 'age': 18, 'score': 90}

print(student.keys())     # dict_keys(['name', 'age', 'score'])
print(student.values())   # dict_values(['小明', 18, 90])
print(student.items())    # dict_items([('name', '小明'), ('age', 18), ('score', 90)])
```

```python
student = {'name': '小明', 'age': 18, 'score': 90}

for key in student:
    print(key, ':', student[key])
```

```python
student = {'name': '小明', 'age': 18, 'score': 90}

for key, value in student.items():
    print(f'{key}: {value}')
```

執行結果：

```
name: 小明
age: 18
score: 90
```

## 依照值排序

字典本身不支援像清單一樣的 `sort()`，但可以使用 `sorted()` 搭配 `key` 參數，對字典的項目進行排序。

```python
scores = {'Amy': 85, 'Bob': 92, 'Cathy': 78}

# 依照分數由高到低排序
sorted_items = sorted(scores.items(), key=lambda x: x[1], reverse=True)

for name, score in sorted_items:
    print(f'{name}: {score}')
```

執行結果：

```
Bob: 92
Amy: 85
Cathy: 78
```

## 累計人數（常見應用：統計次數）

```python
data = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']

count = {}

for item in data:
    if item in count:
        count[item] += 1
    else:
        count[item] = 1

print(count)   # {'apple': 3, 'banana': 2, 'cherry': 1}
```

::: tip 使用 get() 簡化累計
```python
data = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']

count = {}

for item in data:
    count[item] = count.get(item, 0) + 1

print(count)   # {'apple': 3, 'banana': 2, 'cherry': 1}
```
:::

## 範例：將清單資料轉換為字典統計

```python
scores = [85, 92, 78, 92, 85, 60, 92]

freq = {}
for s in scores:
    freq[s] = freq.get(s, 0) + 1

for score, times in sorted(freq.items()):
    print(f'{score} 分：出現 {times} 次')
```

執行結果：

```
60 分：出現 1 次
78 分：出現 1 次
85 分：出現 2 次
92 分：出現 3 次
```

## 範例：巢狀字典（多筆學生資料）

```python
students = {
    'A001': {'name': '小明', 'score': 85},
    'A002': {'name': '小華', 'score': 92}
}

for sid, info in students.items():
    print(f'學號 {sid}：{info["name"]}，成績 {info["score"]}')
```

執行結果：

```
學號 A001：小明，成績 85
學號 A002：小華，成績 92
```

### 自主練習

1. 建立一個字典 `prices = {'apple': 35, 'banana': 20, 'cherry': 80}`，印出所有商品名稱與價格。
2. 給定一句英文句子，使用字典統計每個單字出現的次數。
3. 給定 `scores = {'Amy': 85, 'Bob': 92, 'Cathy': 78, 'David': 92}`，找出分數最高的學生姓名（若有多人並列，全部列出）。
4. 建立一個巢狀字典儲存 3 位學生的姓名與三科成績，並計算每位學生的總分。
