---
title: Reverse a number
tags:
  - java
  - python
  - numbers
  - easy
  - language-syntax
categories:
  - Programming
  - Coding
difficulty: easy
background: bg-[#e0f2fe]
badge_color: text-blue-800 bg-blue-100
topic: number-manipulation
date: 2025-07-01
author: Anikethan Bekal
intro: |
   Reversing a number is a basic digit manipulation problem, often used to test loops and integer operations.
---

# 🧠 Problem: Reverse a number

Given an integer n, return its digits reversed.

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, reverse, digit-manipulation

---

## ✅ Requirements
- **Input**: Integer n
- **Output**: Integer, reversed number
- **Constraints**: n >= 0

---

## 🧪 Example(s)
```text
Input: 1234
Output: 4321
```

---

## 🧪 Test Cases
| Input | Output |
|-------|--------|
| 1234  | 4321   |
| 100   | 1      |
| 0     | 0      |
| 9     | 9      |
| 1200  | 21     |

---

## ☕ Java Solution
```java
// Method 1: Integer Reversal
public static int reverseNumber(int n) {
    int reversed = 0;
    while (n > 0) {
        reversed = reversed * 10 + n % 10;
        n /= 10;
    }
    return reversed;
}

// Method 2: String Conversion
public static int reverseNumberString(int n) {
    String s = Integer.toString(n);
    StringBuilder sb = new StringBuilder(s).reverse();
    return Integer.parseInt(sb.toString());
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Integer Reversal
def reverse_number(n):
    reversed_num = 0
    while n > 0:
        reversed_num = reversed_num * 10 + n % 10
        n //= 10
    return reversed_num

# Method 2: String Conversion
def reverse_number_string(n):
    return int(str(n)[::-1])
```

---

## 🔍 Explanation
- Extract digits from right to left and build the reversed number.
- Can also convert to string and reverse.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(1)             | d = number of digits |
| Python   | O(d)            | O(1)             | d = number of digits |

---

## ⚠️ Interview Tips / Notes
- Discuss handling of negative numbers if required.
- Watch for integer overflow in Java.

---

## 🏷 Tags
`numbers`, `python`, `java`, `reverse`, `easy`, `interview`, `digit-manipulation`
--- 