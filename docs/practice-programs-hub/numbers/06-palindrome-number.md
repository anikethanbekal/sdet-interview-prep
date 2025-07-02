---
title: Check if a number is a palindrome
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
   Palindrome number checks are common in interviews, testing logic, string/number manipulation, and edge case handling.
---

# 🧠 Problem: Check if a number is a palindrome

Given an integer n, determine if it reads the same backward as forward.

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, palindrome, reverse

---

## ✅ Requirements
- **Input**: Integer n
- **Output**: Boolean, true if n is a palindrome
- **Constraints**: n >= 0

---

## 🧪 Example(s)
```text
Input: 121
Output: true
Input: 123
Output: false
```

---

## 🧪 Test Cases
| Input | Output |
|-------|--------|
| 121   | true   |
| 123   | false  |
| 0     | true   |
| 9     | true   |
| 1221  | true   |
| 12321 | true   |
| 12345 | false  |

---

## ☕ Java Solution
```java
// Method 1: Reverse Integer
public static boolean isPalindrome(int n) {
    int original = n, reversed = 0;
    while (n > 0) {
        reversed = reversed * 10 + n % 10;
        n /= 10;
    }
    return original == reversed;
}

// Method 2: String Conversion
public static boolean isPalindromeString(int n) {
    String s = Integer.toString(n);
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s.charAt(left++) != s.charAt(right--)) return false;
    }
    return true;
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Reverse Integer
def is_palindrome(n):
    original = n
    reversed_num = 0
    while n > 0:
        reversed_num = reversed_num * 10 + n % 10
        n //= 10
    return original == reversed_num

# Method 2: String Conversion
def is_palindrome_string(n):
    s = str(n)
    return s == s[::-1]
```

---

## 🔍 Explanation
- Reverse the number and compare to the original.
- Can also convert to string and check if it reads the same backward.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(1)             | d = number of digits |
| Python   | O(d)            | O(1)             | d = number of digits |

---

## ⚠️ Interview Tips / Notes
- Discuss string vs. integer approaches.
- Handle negative numbers if required.

---

## 🏷 Tags
`numbers`, `python`, `java`, `palindrome`, `easy`, `interview`, `reverse`
--- 