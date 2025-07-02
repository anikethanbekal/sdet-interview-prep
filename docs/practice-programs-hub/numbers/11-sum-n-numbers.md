---
title: Sum of first n natural numbers
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
   Summing the first n natural numbers is a classic formula-based and iterative problem, often used to test loops and mathematical reasoning.
---

# 🧠 Problem: Sum of first n natural numbers

Given an integer n, return the sum of the first n natural numbers (1 to n).

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, sum, formula

---

## ✅ Requirements
- **Input**: Integer n (n >= 1)
- **Output**: Integer, sum of numbers from 1 to n
- **Constraints**: n >= 1

---

## 🧪 Example(s)
```text
Input: 5
Output: 15
```

---

## 🧪 Test Cases
| Input | Output |
|-------|--------|
| 1     | 1      |
| 5     | 15     |
| 10    | 55     |
| 100   | 5050   |
| 0     | 0      |

---

## ☕ Java Solution
```java
// Method 1: Formula
public static int sumN(int n) {
    return n * (n + 1) / 2;
}

// Method 2: Iterative
public static int sumNIterative(int n) {
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Formula
def sum_n(n):
    return n * (n + 1) // 2

# Method 2: Iterative
def sum_n_iterative(n):
    return sum(range(1, n+1))
```

---

## 🔍 Explanation
- Uses the formula n(n+1)/2 for efficiency.
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
`numbers`, `python`, `java`, `sum`, `easy`, `interview`, `formula`
--- 