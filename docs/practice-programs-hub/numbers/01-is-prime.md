---
title: Check if a number is prime
tags:
  - java
  - python
  - numbers
  - easy
  - language-syntax
categories:
  - Programming
  - Interview
difficulty: easy
background: bg-[#e0f2fe]
badge_color: text-blue-800 bg-blue-100
topic: numbers
date: 2025-07-01
author: Anikethan Bekal
intro: |
  This is a classic interview question for SDET, QA, and Automation roles. It tests basic algorithmic thinking and understanding of number properties.
---

# 🧠 Problem: Check if a number is prime

Given an integer n, determine if it is a prime number.

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, prime, math

---

## ✅ Requirements
- **Input**: Integer n
- **Output**: Boolean, true if n is prime, false otherwise
- **Constraints**: n can be negative, zero, or positive

---

## 🧪 Example(s)
```text
Input: 17
Output: true
```

---

## 🧪 Test Cases
| Input | Output |
|-------|--------|
| 2     | true   |
| 17    | true   |
| 18    | false  |
| 1     | false  |
| -5    | false  |

---

## ☕ Java Solution
```java
// Method 1: Trial Division (check all numbers up to n-1)
public static boolean isPrimeTrial(int n) {
    if (n <= 1) return false;
    for (int i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// Method 2: Optimized (check up to sqrt(n), skip even numbers)
public static boolean isPrimeOptimized(int n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (int i = 3; i * i <= n; i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}
// Note: Method 2 is more efficient for large n.
```

---

## 🔵🟡 Python Solution
```python
# Method 1: Trial Division (check all numbers up to n-1)
def is_prime_trial(n):
    if n <= 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

# Method 2: Optimized (check up to sqrt(n), skip even numbers)
def is_prime_optimized(n):
    if n <= 1:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(n ** 0.5) + 1, 2):
        if n % i == 0:
            return False
    return True
# Note: Method 2 is more efficient for large n.
```

---

## 🔍 Explanation
- A prime number is greater than 1 and has no divisors other than 1 and itself.
- Method 1 checks all numbers up to n-1 (inefficient for large n).
- Method 2 checks up to sqrt(n) and skips even numbers (efficient).

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)/O(√n)      | O(1)             | Trial/Optimized |
| Python   | O(n)/O(√n)      | O(1)             | Trial/Optimized |

---

## ⚠️ Interview Tips / Notes
- Discuss both methods and their efficiency.
- Know the definition of a prime number.
- Handle negative numbers and edge cases (0, 1).

---

## 🏷 Tags
`numbers`, `python`, `java`, `prime`, `easy`, `interview`, `math`
---
