# 0-2 布林與邏輯運算

## 布林 bool

布林（bool）是一種儲存「真」或「假」的資料型態，內容只有 `True` 或 `False` 兩種可能。

```python
is_raining = True
is_sunny = False

print(is_raining)       # True
print(type(is_raining)) # <class 'bool'>
```

## 比較運算子

比較運算子的結果都是布林值。

```python
a = 10
b = 5

print(a > b)    # True
print(a < b)    # False
print(a == b)   # False，判斷是否相等
print(a != b)   # True，判斷是否不相等
print(a >= 10)  # True
print(a <= 5)   # False
```

::: warning `=` 與 `==` 的差別
`=` 是**賦值**（把值存入變數），`==` 是**判斷是否相等**。這是初學者最常混淆的地方。
:::

## 邏輯運算子：and、or、not

| 運算子 | 說明 |
|---|---|
| `and` | 兩者都為 `True` 時才為 `True` |
| `or` | 任一為 `True` 即為 `True` |
| `not` | 反轉布林值 |

```python
age = 20
has_id = True

print(age >= 18 and has_id)   # True，兩個條件都成立
print(age >= 18 or has_id)    # True，至少一個成立
print(not has_id)             # False
```

## 邏輯式的短路評估

`and` 與 `or` 具有「短路（short-circuit）」特性：一旦結果可以確定，就不會再繼續判斷後面的條件。

```python
def check():
    print('被呼叫了')
    return True

# and：左邊為 False，就不會再執行右邊
result = False and check()
print(result)   # False，'被呼叫了'不會被印出

# or：左邊為 True，就不會再執行右邊
result = True or check()
print(result)   # True，'被呼叫了'不會被印出
```

這個特性常用於避免錯誤，例如先判斷變數不是 `None`，再使用它：

```python
data = None

if data is not None and len(data) > 0:
    print('資料不為空')
else:
    print('資料為空或不存在')
```

如果寫成 `len(data) > 0 and data is not None`，當 `data` 為 `None` 時 `len(data)` 會先執行並產生錯誤。

### 自主練習

1. 給定 `score = 75`，寫一個邏輯式判斷 `score` 是否在 `60` 到 `100` 之間（含端點）。
2. 給定 `x = 5`、`y = 10`，分別計算 `x > 3 and y < 5`、`x > 3 or y < 5` 的結果。
3. 說明為什麼 `0 == False` 會印出 `True`？（提示：Python 中 `0` 與 `False` 在比較時會被視為相同）
