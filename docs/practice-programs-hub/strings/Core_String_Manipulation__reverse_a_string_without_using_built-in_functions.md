---
title: Reverse a string without using built-in functions
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

# 🧠 Problem: Reverse a string without using built-in functions

> **Category**: Core String Manipulation  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Reverse a string without using built-in functions.

---

## ☕ Java Solution

```java
// 1. Using character array
public static String reverseString(String s) {
    char[] arr = s.toCharArray();
    int left = 0, right = arr.length - 1;
    while (left < right) {
        char temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return new String(arr);
}

// 2. Using StringBuilder (for reference, but not allowed if no built-ins)
public static String reverseStringBuilder(String s) {
    return new StringBuilder(s).reverse().toString();
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using list and two pointers
def reverse_string(s):
    arr = list(s)
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    return ''.join(arr)

# 2. Using slicing (for reference, but not allowed if no built-ins)
def reverse_string_slice(s):
    return s[::-1]
```

---

## 🔍 Explanation

- Convert the string to a character array/list and swap characters from both ends moving towards the center.
- Avoid using built-in reverse functions if not allowed.

**Edge Cases:**
- Empty string returns empty string.
- Single character returns itself.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(n)             | n = length of string |
| Python   | O(n)            | O(n)             | n = length of string |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
