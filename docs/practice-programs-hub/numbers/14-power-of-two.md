---
title: Check if a number is a power of two
tags:
  - java
  - python
  - numbers
  - easy
  - bit-manipulation
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
   Checking if a number is a power of two is a common bitwise and mathematical interview problem.
---

# 🧠 Problem: Check if a number is a power of two

Given an integer n, determine if it is a power of two.

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, power-of-two, bitwise

---

## ✅ Requirements
- **Input**: Integer n
- **Output**: Boolean, true if n is a power of two
- **Constraints**: n > 0

---

## 🧪 Example(s)
```text
Input: 16
Output: true
Input: 18
Output: false
```

---

## 🧪 Test Cases
| Input | Output |
|-------|--------|
| 1     | true   |
| 2     | true   |
| 3     | false  |
| 8     | true   |
| 16    | true   |
| 18    | false  |
| 0     | false  |
| -4    | false  |

---

## ☕ Java Solution
```java
// Method 1: Bitwise
public static boolean isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}

// Method 2: Iterative
public static boolean isPowerOfTwoIterative(int n) {
    if (n <= 0) return false;
    while (n % 2 == 0) n /= 2;
    return n == 1;
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Bitwise
def is_power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0

# Method 2: Iterative
def is_power_of_two_iterative(n):
    if n <= 0:
        return False
    while n % 2 == 0:
        n //= 2
    return n == 1
```

---

## 🔍 Explanation
- Bitwise: Only powers of two have a single 1 in binary.
- Iterative: Divide by 2 until 1.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(1)/O(log n)   | O(1)             | Bitwise/Iterative |
| Python   | O(1)/O(log n)   | O(1)             | Bitwise/Iterative |

---

## ⚠️ Interview Tips / Notes
- Discuss both bitwise and iterative approaches.
- Handle n <= 0 as a special case.

---

## 🏷 Tags
`numbers`, `python`, `java`, `power-of-two`, `easy`, `interview`, `bitwise`
--- 