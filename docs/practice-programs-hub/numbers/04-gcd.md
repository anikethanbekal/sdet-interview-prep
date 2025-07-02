---
title: Find the GCD of two numbers
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
   GCD (Greatest Common Divisor) is a classic interview problem, testing understanding of number theory and recursion (Euclidean algorithm).
---

# 🧠 Problem: Find the GCD of two numbers

Given two integers a and b, return their greatest common divisor (GCD).

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, gcd, euclidean, recursion

---

## ✅ Requirements
- **Input**: Two integers a, b
- **Output**: Integer, GCD of a and b
- **Constraints**: a > 0, b > 0

---

## 🧪 Example(s)
```text
Input: 12, 18
Output: 6
```

---

## 🧪 Test Cases
| a  | b  | Output |
|----|----|--------|
| 12 | 18 | 6      |
| 7  | 5  | 1      |
| 100| 10 | 10     |
| 81 | 27 | 27     |
| 17 | 13 | 1      |

---

## ☕ Java Solution
```java
// Method 1: Recursive Euclidean Algorithm
public static int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

// Method 2: Iterative Euclidean Algorithm
public static int gcdIterative(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Recursive Euclidean Algorithm
def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)

# Method 2: Iterative Euclidean Algorithm
def gcd_iterative(a, b):
    while b != 0:
        a, b = b, a % b
    return a
```

---

## 🔍 Explanation
- Uses the Euclidean algorithm: gcd(a, b) = gcd(b, a % b).
- Recursion or iteration continues until b == 0.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(log min(a,b)) | O(1)             | Recursive/Iterative |
| Python   | O(log min(a,b)) | O(1)             | Recursive/Iterative |

---

## ⚠️ Interview Tips / Notes
- Discuss iterative vs. recursive approaches.
- GCD is used in LCM, fraction reduction, etc.
- Handle negative numbers if required.

---

## 🏷 Tags
`numbers`, `python`, `java`, `gcd`, `easy`, `interview`, `recursion`
--- 