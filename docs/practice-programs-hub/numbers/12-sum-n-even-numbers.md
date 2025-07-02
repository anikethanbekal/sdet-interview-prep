---
title: Sum of first n even numbers
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
   Summing the first n even numbers is a simple arithmetic progression problem, often used to test loops and formulas.
---

# 🧠 Problem: Sum of first n even numbers

Given an integer n, return the sum of the first n even numbers (2, 4, ..., 2n).

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, sum, even, formula

---

## ✅ Requirements
- **Input**: Integer n (n >= 1)
- **Output**: Integer, sum of first n even numbers
- **Constraints**: n >= 1

---

## 🧪 Example(s)
```text
Input: 3
Output: 12
```

---

## 🧪 Test Cases
| Input | Output |
|-------|--------|
| 1     | 2      |
| 3     | 12     |
| 5     | 30     |
| 10    | 110    |
| 0     | 0      |

---

## ☕ Java Solution
```java
// Method 1: Formula
public static int sumEven(int n) {
    return n * (n + 1);
}

// Method 2: Iterative
public static int sumEvenIterative(int n) {
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += 2 * i;
    }
    return sum;
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Formula
def sum_even(n):
    return n * (n + 1)

# Method 2: Iterative
def sum_even_iterative(n):
    return sum(2 * i for i in range(1, n+1))
```

---

## 🔍 Explanation
- The nth even number is 2n, so sum = 2 + 4 + ... + 2n = n(n+1).
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
`numbers`, `python`, `java`, `sum`, `even`, `easy`, `interview`, `formula`
--- 