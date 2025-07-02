---
title: Check if a string is a palindrome
tags:
  - java
  - python
  - string
  - coding
categories:
  - Programming
  - Interview
difficulty: varies
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: string
date: 2025-07-01
author: Anikethan Bekal
intro: |
  This is a string problem often encountered in interviews. It tests understanding of fundamental concepts such as iteration, pattern matching, or algorithmic design depending on the problem.

---

# 🧠 Problem: Check if a string is a palindrome

> **Category**: Core String Manipulation  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Check if a string is a palindrome.

---

## ☕ Java Solution

```java
// 1. Two-pointer approach
public static boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s.charAt(left++) != s.charAt(right--)) return false;
    }
    return true;
}

// 2. Reverse and compare
public static boolean isPalindromeReverse(String s) {
    return s.equals(new StringBuilder(s).reverse().toString());
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Two-pointer approach
def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

# 2. Reverse and compare
def is_palindrome_reverse(s):
    return s == s[::-1]
```

---

## 🔍 Explanation

- Use two pointers from both ends, compare characters moving towards the center.
- Alternatively, reverse the string and compare to the original.

**Edge Cases:**
- Empty string and single character are palindromes.
- Case sensitivity and ignoring non-alphanumeric can be added if required.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1) / O(n)      | O(1) for two-pointer, O(n) for reverse |
| Python   | O(n)            | O(1) / O(n)      | O(1) for two-pointer, O(n) for reverse |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
