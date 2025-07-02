---
title: Find the LCM of two numbers
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
   LCM (Least Common Multiple) is a common interview problem, often paired with GCD to test understanding of number properties.
---

# 🧠 Problem: Find the LCM of two numbers

Given two integers a and b, return their least common multiple (LCM).

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, lcm, gcd

---

## ✅ Requirements
- **Input**: Two integers a, b
- **Output**: Integer, LCM of a and b
- **Constraints**: a > 0, b > 0

---

## 🧪 Example(s)
```text
Input: 12, 18
Output: 36
```

---

## 🧪 Test Cases
| a  | b  | Output |
|----|----|--------|
| 12 | 18 | 36     |
| 7  | 5  | 35     |
| 100| 10 | 100    |
| 81 | 27 | 81     |
| 17 | 13 | 221    |

---

## ☕ Java Solution
```java
// Method 1: Using GCD
public static int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}
public static int lcm(int a, int b) {
    return a * (b / gcd(a, b));
}

// Method 2: Iterative GCD
public static int gcdIterative(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
public static int lcmIterative(int a, int b) {
    return a * (b / gcdIterative(a, b));
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Using GCD
def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)
def lcm(a, b):
    return a * b // gcd(a, b)

# Method 2: Iterative GCD
def gcd_iterative(a, b):
    while b != 0:
        a, b = b, a % b
    return a
def lcm_iterative(a, b):
    return a * b // gcd_iterative(a, b)
```

---

## 🔍 Explanation
- LCM is calculated as (a * b) / gcd(a, b).
- Uses the GCD function for efficiency.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(log min(a,b)) | O(1)             | Uses GCD |
| Python   | O(log min(a,b)) | O(1)             | Uses GCD |

---

## ⚠️ Interview Tips / Notes
- LCM is useful in scheduling, fractions, and more.
- Discuss integer overflow for large numbers.

---

## 🏷 Tags
`numbers`, `python`, `java`, `lcm`, `easy`, `interview`, `gcd`
--- 