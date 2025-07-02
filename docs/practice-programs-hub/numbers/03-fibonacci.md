---
title: Find the nth Fibonacci number
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
   Fibonacci is a classic sequence problem, testing recursion, iteration, and dynamic programming skills in interviews.
---

# 🧠 Problem: Find the nth Fibonacci number

Given an integer n, return the nth Fibonacci number (0-indexed).

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, recursion, iteration, dp

---

## ✅ Requirements
- **Input**: Integer n (n >= 0)
- **Output**: Integer, nth Fibonacci number
- **Constraints**: 0 <= n <= 30 (for simple solutions)

---

## 🧪 Example(s)
```text
Input: 7
Output: 13
```

---

## 🧪 Test Cases
| Input | Output |
|-------|--------|
| 0     | 0      |
| 1     | 1      |
| 2     | 1      |
| 5     | 5      |
| 10    | 55     |
| 15    | 610    |

---

## ☕ Java Solution
```java
// Method 1: Iterative
public static int fibonacci(int n) {
    if (n < 0) throw new IllegalArgumentException("n must be non-negative");
    if (n == 0) return 0;
    if (n == 1) return 1;
    int a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        int temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Method 2: Recursive
public static int fibonacciRecursive(int n) {
    if (n < 0) throw new IllegalArgumentException("n must be non-negative");
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}
// Note: Iterative is preferred for large n. Recursive is simple but inefficient for large n.
```

## 🔵🟡 Python Solution
```python
# Method 1: Iterative
def fibonacci(n):
    if n < 0:
        raise ValueError("n must be non-negative")
    if n == 0:
        return 0
    if n == 1:
        return 1
    a, b = 0, 1
    for _ in range(2, n+1):
        a, b = b, a + b
    return b

# Method 2: Recursive
def fibonacci_recursive(n):
    if n < 0:
        raise ValueError("n must be non-negative")
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
# Note: Iterative is preferred for large n. Recursive is simple but inefficient for large n.
```

---

## 🔍 Explanation
- Each number is the sum of the previous two.
- Iterative solution is efficient for small n.
- Recursion is less efficient without memoization.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)/O(2^n)     | O(1)/O(n)        | Iterative/Recursive |
| Python   | O(n)/O(2^n)     | O(1)/O(n)        | Iterative/Recursive |

---

## ⚠️ Interview Tips / Notes
- Discuss recursion, iteration, and dynamic programming.
- Handle edge cases (n=0, n=1).
- For large n, discuss memoization or matrix exponentiation.

---

## 🏷 Tags
`numbers`, `python`, `java`, `fibonacci`, `easy`, `interview`, `recursion`, `iteration`
--- 