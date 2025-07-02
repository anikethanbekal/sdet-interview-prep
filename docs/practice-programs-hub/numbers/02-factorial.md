---
title: Calculate the factorial of a number
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
   Factorial is a classic recursion/iteration problem, often used to test understanding of loops, recursion, and integer overflow in interviews.
---

# 🧠 Problem: Calculate the factorial of a number

Given a non-negative integer n, return n! (n factorial).

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, recursion, iteration

---

## ✅ Requirements
- **Input**: Integer n (n >= 0)
- **Output**: Integer, n!
- **Constraints**: 0 <= n <= 20 (to avoid overflow)

---

## 🧪 Example(s)
```text
Input: 5
Output: 120
```

---

## 🧪 Test Cases
| Input | Output |
|-------|--------|
| 0     | 1      |
| 1     | 1      |
| 5     | 120    |
| 10    | 3628800|

---

## ☕ Java Solution
```java
// Method 1: Iterative
public static long factorial(int n) {
    if (n < 0) throw new IllegalArgumentException("n must be non-negative");
    long result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Method 2: Recursive
public static long factorialRecursive(int n) {
    if (n < 0) throw new IllegalArgumentException("n must be non-negative");
    if (n == 0 || n == 1) return 1;
    return n * factorialRecursive(n - 1);
}
// Note: Iterative is preferred for large n to avoid stack overflow.
```

## 🔵🟡 Python Solution
```python
# Method 1: Iterative
def factorial(n):
    if n < 0:
        raise ValueError("n must be non-negative")
    result = 1
    for i in range(2, n+1):
        result *= i
    return result

# Method 2: Recursive
def factorial_recursive(n):
    if n < 0:
        raise ValueError("n must be non-negative")
    if n == 0 or n == 1:
        return 1
    return n * factorial_recursive(n-1)
# Note: Iterative is preferred for large n to avoid recursion limit.
```

---

## 🔍 Explanation
- Multiply all integers from 1 to n.
- Can be solved iteratively or recursively.
- Watch for integer overflow in Java.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)/O(n)        | Iterative/Recursive |
| Python   | O(n)            | O(1)/O(n)        | Iterative/Recursive |

---

## ⚠️ Interview Tips / Notes
- Discuss recursion vs. iteration.
- Handle edge cases (n=0, n=1).
- For large n, discuss BigInteger (Java) or arbitrary-precision in Python.

---

## 🏷 Tags
`numbers`, `python`, `java`, `factorial`, `easy`, `interview`, `recursion`, `iteration`
--- 