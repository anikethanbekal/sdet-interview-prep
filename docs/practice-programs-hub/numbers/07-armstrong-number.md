---
title: Check if a number is an Armstrong number
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
   Armstrong number checks are classic for digit manipulation and power calculations in interviews.
---

# 🧠 Problem: Check if a number is an Armstrong number

Given an integer n, determine if it is an Armstrong number (sum of its own digits each raised to the power of the number of digits equals the number itself).

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, armstrong, digit-manipulation

---

## ✅ Requirements
- **Input**: Integer n
- **Output**: Boolean, true if n is an Armstrong number
- **Constraints**: n >= 0

---

## 🧪 Example(s)
```text
Input: 153
Output: true
Input: 123
Output: false
```

---

## 🧪 Test Cases
| Input | Output |
|-------|--------|
| 153   | true   |
| 370   | true   |
| 371   | true   |
| 9474  | true   |
| 123   | false  |
| 10    | false  |

---

## ☕ Java Solution
```java
// Method 1: Power Sum
public static boolean isArmstrong(int n) {
    int original = n, sum = 0, digits = String.valueOf(n).length();
    while (n > 0) {
        int d = n % 10;
        sum += Math.pow(d, digits);
        n /= 10;
    }
    return sum == original;
}

// Method 2: String Conversion
public static boolean isArmstrongString(int n) {
    String s = Integer.toString(n);
    int sum = 0, digits = s.length();
    for (char c : s.toCharArray()) {
        sum += Math.pow(c - '0', digits);
    }
    return sum == n;
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Power Sum
def is_armstrong(n):
    digits = len(str(n))
    total = 0
    temp = n
    while temp > 0:
        d = temp % 10
        total += d ** digits
        temp //= 10
    return total == n

# Method 2: String Conversion
def is_armstrong_string(n):
    s = str(n)
    digits = len(s)
    return sum(int(c) ** digits for c in s) == n
```

---

## 🔍 Explanation
- Raise each digit to the power of the number of digits and sum.
- Can also use string conversion for digit extraction.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(1)             | d = number of digits |
| Python   | O(d)            | O(1)             | d = number of digits |

---

## ⚠️ Interview Tips / Notes
- Discuss generalization for n-digit numbers.
- Handle negative numbers if required.

---

## 🏷 Tags
`numbers`, `python`, `java`, `armstrong`, `easy`, `interview`, `digit-manipulation`
--- 