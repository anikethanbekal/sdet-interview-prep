---
title: Validate a phone number format (e.g., (123) 456-7890)
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

# 🧠 Problem: Validate a phone number format (e.g., (123) 456-7890)

> **Category**: Regex Pattern Matching  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Validate a phone number format (e.g., (123) 456-7890).

---

## ☕ Java Solution

```java
// 1. Using regex
public static boolean isValidPhoneNumber(String s) {
    return s.matches("\\(\\d{3}\\) \\d{3}-\\d{4}");
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using re.fullmatch
def is_valid_phone_number(s):
    import re
    return re.fullmatch(r'\(\d{3}\) \d{3}-\d{4}', s) is not None
```

---

## 🔍 Explanation

- Use regex to match the exact phone number format (e.g., (123) 456-7890).
- Returns true if the string matches the pattern.

**Edge Cases:**
- Incorrect format returns false.
- Extra spaces or missing digits are not allowed.
- Only matches the specific format.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(1)            | O(1)             | Fixed-length string |
| Python   | O(1)            | O(1)             | Fixed-length string |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
