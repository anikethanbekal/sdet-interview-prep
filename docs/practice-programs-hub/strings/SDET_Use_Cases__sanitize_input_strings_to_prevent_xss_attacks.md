---
title: Sanitize input strings to prevent XSS attacks
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

# 🧠 Problem: Sanitize input strings to prevent XSS attacks

> **Category**: SDET Use Cases  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Sanitize input strings to prevent XSS attacks.

---

## ☕ Java Solution

```java
// 1. Basic HTML escape to prevent XSS
public static String sanitizeForXSS(String input) {
    if (input == null) return null;
    return input.replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\"", "&quot;")
                .replace("'", "&#x27;")
                .replace("/", "&#x2F;");
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Basic HTML escape to prevent XSS
def sanitize_for_xss(input):
    if input is None:
        return None
    return (input.replace('&', '&amp;')
                .replace('<', '&lt;')
                .replace('>', '&gt;')
                .replace('"', '&quot;')
                .replace("'", '&#x27;')
                .replace('/', '&#x2F;'))
```

---

## 🔍 Explanation

- Replace special HTML characters with their corresponding HTML entities.
- Prevents injection of HTML/JS code via user input.

**Edge Cases:**
- Null/None input: returns None.
- Already escaped input: escapes again (idempotent).
- Only basic HTML characters are handled; for production, use a library.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(n)             | n = length of input |
| Python   | O(n)            | O(n)             | n = length of input |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
