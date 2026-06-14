# 1-5 while 迴圈

`while` 迴圈會在條件成立時，**重複執行**程式區塊，直到條件不成立為止。

## 基本語法

```python
while 條件:
    # 重複執行的程式碼
```

## 重複改變數值

```python
i = 1

while i <= 5:
    print(i)
    i += 1   # 每次迴圈結束時，i 加 1
```

執行結果：

```
1
2
3
4
5
```

::: warning 無窮迴圈
如果忘記在迴圈中改變條件變數（例如忘記寫 `i += 1`），條件會永遠成立，造成**無窮迴圈**，程式將無法結束。
:::

## 累加總和

```python
total = 0
i = 1

while i <= 100:
    total += i
    i += 1

print(f'1 加到 100 的總和為 {total}')
```

執行結果：

```
1 加到 100 的總和為 5050
```

## 條件成立才離開迴圈

`while` 迴圈也常用來處理「直到滿足某條件才結束」的情境，例如反覆要求使用者輸入，直到輸入正確為止。

```python
password = ''

while password != '1234':
    password = input('請輸入密碼：')

print('密碼正確，登入成功')
```

## break：強制跳出迴圈

```python
i = 1

while True:
    if i > 5:
        break
    print(i)
    i += 1
```

執行結果與前面範例相同，但使用 `while True` 搭配 `break` 來控制結束時機，常用於需要在迴圈**中間**判斷是否結束的情境。

## continue：跳過此次迴圈，繼續下一次

```python
i = 0

while i < 10:
    i += 1
    if i % 2 == 0:
        continue   # 跳過偶數，不印出
    print(i)
```

執行結果：

```
1
3
5
7
9
```

## 範例：猜數字遊戲

```python
import random

answer = random.randint(1, 100)
guess = -1

while guess != answer:
    guess = int(input('請猜一個 1~100 的數字：'))

    if guess > answer:
        print('太大了')
    elif guess < answer:
        print('太小了')

print('恭喜你猜對了！')
```

### 自主練習

1. 使用 `while` 迴圈計算 `1` 到 `n` 的總和（`n` 由使用者輸入）。
2. 使用 `while` 迴圈印出 `1~20` 中所有的奇數。
3. 使用 `while` 迴圈，反覆要求使用者輸入數字，直到使用者輸入 `0` 為止，並計算輸入數字的總和（不含 `0`）。
4. 使用 `while` 搭配 `break`，計算一個正整數的所有因數。
