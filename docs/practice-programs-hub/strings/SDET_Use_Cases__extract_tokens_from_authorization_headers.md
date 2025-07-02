---
title: Extract tokens from authorization headers
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

# 🧠 Problem: Extract tokens from authorization headers

> **Category**: SDET Use Cases  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Extract tokens from authorization headers.

---

## ☕ Java Solution

```java
// 1. Extract Bearer token from header
public static String extractBearerToken(String header) {
    if (header == null) return null;
    String prefix = "Bearer ";
    return header.startsWith(prefix) ? header.substring(prefix.length()) : null;
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Extract Bearer token from header
def extract_bearer_token(header):
    prefix = 'Bearer '
    if header and header.startswith(prefix):
        return header[len(prefix):]
    return None
```

---

## 🔍 Explanation

- Check if the header starts with the expected prefix and extract the token.
- Returns the token string or None/null if not found.

**Edge Cases:**
- Header is None or empty: returns None/null.
- Prefix not present: returns None/null.
- Extra spaces or case differences are not handled unless added.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(n)             | n = length of header |
| Python   | O(n)            | O(n)             | n = length of header |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
