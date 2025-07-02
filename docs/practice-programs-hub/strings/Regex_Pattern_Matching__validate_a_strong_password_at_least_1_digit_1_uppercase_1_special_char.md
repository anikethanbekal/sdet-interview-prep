---
title: Validate a strong password (at least 1 digit, 1 uppercase, 1 special char)
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

# 🧠 Problem: Validate a strong password (at least 1 digit, 1 uppercase, 1 special char)

> **Category**: Regex Pattern Matching  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Validate a strong password (at least 1 digit, 1 uppercase, 1 special char).

---

## ☕ Java Solution

```java
// 1. Using regex
public static boolean isStrongPassword(String s) {
    return s.matches("^(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).+$");
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using re.fullmatch
def is_strong_password(s):
    import re
    return re.fullmatch(r'(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+', s) is not None
```

---

## 🔍 Explanation

- Use regex with lookaheads to ensure at least one uppercase, one digit, and one special character.
- Returns true if the string matches all criteria.

**Edge Cases:**
- Empty string returns false.
- Only letters or only digits: returns false.
- Minimum length not enforced unless added to regex.

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
