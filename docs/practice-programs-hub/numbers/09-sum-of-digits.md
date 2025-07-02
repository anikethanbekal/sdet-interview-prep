---
title: Sum of digits of a number
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
   Summing the digits of a number is a basic problem, often used to test loops and digit extraction.
---

# 🧠 Problem: Sum of digits of a number

Given an integer n, return the sum of its digits.

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, sum, digit-manipulation

---

## ✅ Requirements
- **Input**: Integer n
- **Output**: Integer, sum of digits
- **Constraints**: n >= 0

---

## 🧪 Example(s)
```text
Input: 1234
Output: 10
```

---

## 🧪 Test Cases
| Input | Output |
|-------|--------|
| 1234  | 10     |
| 0     | 0      |
| 9     | 9      |
| 1001  | 2      |
| 999   | 27     |

---

## ☕ Java Solution
```java
// Method 1: Iterative
def sumOfDigits(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

// Method 2: String Conversion
def sumOfDigitsString(int n) {
    int sum = 0;
    for (char c : Integer.toString(n).toCharArray()) {
        sum += c - '0';
    }
    return sum;
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Iterative
def sum_of_digits(n):
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    return total

# Method 2: String Conversion
def sum_of_digits_string(n):
    return sum(int(c) for c in str(n))
```

---

## 🔍 Explanation
- Extract each digit and add to the sum.
- Can also convert to string and sum digits.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(1)             | d = number of digits |
| Python   | O(d)            | O(1)             | d = number of digits |

---

## ⚠️ Interview Tips / Notes
- Discuss handling of negative numbers if required.

---

## 🏷 Tags
`numbers`, `python`, `java`, `sum`, `easy`, `interview`, `digit-manipulation`
--- 