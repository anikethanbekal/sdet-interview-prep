---
title: Validate email address using regex
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

# 🧠 Problem: Validate email address using regex

> **Category**: Regex Pattern Matching  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Validate email address using regex.

---

## ☕ Java Solution

```java
// 1. Using regex
public static boolean isValidEmail(String s) {
    return s.matches("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$");
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using re.fullmatch
def is_valid_email(s):
    import re
    return re.fullmatch(r'[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+', s) is not None
```

---

## 🔍 Explanation

- Use regex to check for a basic valid email format.
- Returns true if the string matches the pattern.
- For stricter validation, use more complex regex or libraries.

**Edge Cases:**
- Missing @ or domain: returns false.
- Multiple @: returns false.
- Empty string returns false.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | n = length of string |
| Python   | O(n)            | O(1)             | n = length of string |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
