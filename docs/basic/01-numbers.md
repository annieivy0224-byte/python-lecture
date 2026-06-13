# 0-1 整數與浮點數

## 整數 int

整數（int）是 Python 常用的內建數值型態，用來儲存沒有小數位數的數值。

```python
a = 10
b = -3
print(a, b)        # 10 -3
print(type(a))     # <class 'int'>
```

### 算術運算

```python
a = 10
b = 3

print(a + b)    # 13，加法
print(a - b)    # 7，減法
print(a * b)    # 30，乘法
print(a / b)    # 3.3333...，除法（結果為浮點數）
print(a // b)   # 3，整數除法（取整數部分）
print(a % b)    # 1，取餘數
print(a ** b)   # 1000，次方
```

### 運算子的優先順序

Python 的運算優先順序與數學相同：先乘除（含 `//`、`%`）再加減，括號優先。

```python
result = 2 + 3 * 4
print(result)   # 14，先算 3*4=12，再加2

result = (2 + 3) * 4
print(result)   # 20，括號優先
```

## 浮點數 float

浮點數（float）是用來儲存有小數位數的數值。

```python
x = 3.14
y = 0.5
print(x, y)        # 3.14 0.5
print(type(x))      # <class 'float'>
```

### 浮點數的精準度問題

由於電腦內部以二進位儲存浮點數，部分小數無法精確表示，可能出現誤差：

```python
print(0.1 + 0.2)    # 0.30000000000000004
```

::: tip 解決方式
若需要精確的小數運算，可以使用 `round()` 進行四捨五入，或使用 `decimal` 模組。
:::

### 無條件進位、無條件捨去與四捨五入

```python
import math

x = 3.7

print(math.ceil(x))    # 4，無條件進位
print(math.floor(x))   # 3，無條件捨去
print(round(x))        # 4，四捨五入
print(round(3.456, 2)) # 3.46，四捨五入到小數第二位
```

### 取出浮點數的整數部分

```python
x = 7.9

print(int(x))     # 7，直接轉型會捨去小數部分（無條件捨去）
```

### 自主練習

1. 計算 `17 // 5` 與 `17 % 5`，並說明兩者的意義。
2. 計算 `(5 + 3) ** 2 - 10 / 2` 的結果。
3. 將 `9.876` 分別使用 `round()`、`math.ceil()`、`math.floor()` 處理，並比較三者結果的差異。
