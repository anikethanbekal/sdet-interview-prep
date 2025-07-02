---
title: Count the number of set bits in a number
tags:
  - java
  - python
  - numbers
  - easy
  - bit-manipulation
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
   Counting set bits (Hamming weight) is a classic bitwise interview problem.
---

# 🧠 Problem: Count the number of set bits in a number

Given an integer n, return the number of 1s in its binary representation.

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, set-bits, bitwise

---

## ✅ Requirements
- **Input**: Integer n (n >= 0)
- **Output**: Integer, number of set bits
- **Constraints**: n >= 0

---

## 🧪 Example(s)
```text
Input: 13
Output: 3
```

---

## ☕ Java Solution
```java
// Method 1: Brian Kernighan's Algorithm
public static int countSetBits(int n) {
    int count = 0;
    while (n > 0) {
        n &= (n - 1);
        count++;
    }
    return count;
}

// Method 2: Simple Loop
public static int countSetBitsSimple(int n) {
    int count = 0;
    while (n > 0) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Brian Kernighan's Algorithm
def count_set_bits(n):
    count = 0
    while n > 0:
        n &= n - 1
        count += 1
    return count

# Method 2: Simple Loop
def count_set_bits_simple(n):
    count = 0
    while n > 0:
        count += n & 1
        n >>= 1
    return count
```
---

## 🔍 Explanation
- Brian Kernighan's: Removes the lowest set bit each time.
- Simple loop: Checks each bit.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(k)/O(log n)   | O(1)             | k = set bits |
| Python   | O(k)/O(log n)   | O(1)             | k = set bits |

---

## ⚠️ Interview Tips / Notes
- Discuss both methods and their efficiency.
- Useful in bitmasking, cryptography, etc.

---

## 🏷 Tags
`numbers`, `python`, `java`, `set-bits`, `easy`, `interview`, `bitwise`
--- 
