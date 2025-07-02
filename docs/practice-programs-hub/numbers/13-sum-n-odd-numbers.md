---
title: Sum of first n odd numbers
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
   Summing the first n odd numbers is a simple arithmetic progression problem, often used to test loops and formulas.
---

# 🧠 Problem: Sum of first n odd numbers

Given an integer n, return the sum of the first n odd numbers (1, 3, ..., 2n-1).

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, sum, odd, formula

---

## ✅ Requirements
- **Input**: Integer n (n >= 1)
- **Output**: Integer, sum of first n odd numbers
- **Constraints**: n >= 1

---

## 🧪 Example(s)
```text
Input: 3
Output: 9
```

---

## 🧪 Test Cases
| Input | Output |
|-------|--------|
| 1     | 1      |
| 3     | 9      |
| 5     | 25     |
| 10    | 100    |
| 0     | 0      |

---

## ☕ Java Solution
```java
// Method 1: Formula
public static int sumOdd(int n) {
    return n * n;
}

// Method 2: Iterative
public static int sumOddIterative(int n) {
    int sum = 0, odd = 1;
    for (int i = 0; i < n; i++) {
        sum += odd;
        odd += 2;
    }
    return sum;
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Formula
def sum_odd(n):
    return n * n

# Method 2: Iterative
def sum_odd_iterative(n):
    total = 0
    odd = 1
    for _ in range(n):
        total += odd
        odd += 2
    return total
```

---

## 🔍 Explanation
- The sum of the first n odd numbers is n^2.
- Can also be solved with a loop.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(1)/O(n)       | O(1)             | Formula/Iterative |
| Python   | O(1)/O(n)       | O(1)             | Formula/Iterative |

---

## ⚠️ Interview Tips / Notes
- Discuss both formula and iterative approaches.
- Handle large n and integer overflow.

---

## 🏷 Tags
`numbers`, `python`, `java`, `sum`, `odd`, `easy`, `interview`, `formula`
--- 