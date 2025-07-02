---
title: Count the number of digits in a number
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
   Counting digits is a basic number manipulation problem, often used to test loops and integer division.
---

# 🧠 Problem: Count the number of digits in a number

Given an integer n, return the number of digits in n.

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, count, digit-manipulation

---

## ✅ Requirements
- **Input**: Integer n
- **Output**: Integer, number of digits
- **Constraints**: n >= 0

---

## 🧪 Example(s)
```text
Input: 1234
Output: 4
```

---

## 🧪 Test Cases
| Input | Output |
|-------|--------|
| 1234  | 4      |
| 0     | 1      |
| 9     | 1      |
| 1001  | 4      |
| 99999 | 5      |

---

## ☕ Java Solution
```java
// Method 1: Iterative
public static int countDigits(int n) {
    if (n == 0) return 1;
    int count = 0;
    while (n > 0) {
        count++;
        n /= 10;
    }
    return count;
}

// Method 2: String Conversion
public static int countDigitsString(int n) {
    return Integer.toString(n).length();
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Iterative
def count_digits(n):
    if n == 0:
        return 1
    count = 0
    while n > 0:
        count += 1
        n //= 10
    return count

# Method 2: String Conversion
def count_digits_string(n):
    return len(str(n))
```

---

## 🔍 Explanation
- Divide by 10 repeatedly and count the steps.
- Can also use string conversion for digit count.
- Special case for n = 0.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(1)             | d = number of digits |
| Python   | O(d)            | O(1)             | d = number of digits |

---

## ⚠️ Interview Tips / Notes
- Discuss handling of negative numbers if required.
- Can also use log10 for a mathematical approach.

---

## 🏷 Tags
`numbers`, `python`, `java`, `count`, `easy`, `interview`, `digit-manipulation`
--- 