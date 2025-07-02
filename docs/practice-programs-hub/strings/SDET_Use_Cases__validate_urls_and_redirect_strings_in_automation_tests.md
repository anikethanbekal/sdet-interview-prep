---
title: Validate URLs and redirect strings in automation tests
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

# 🧠 Problem: Validate URLs and redirect strings in automation tests

> **Category**: SDET Use Cases  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Validate URLs and redirect strings in automation tests.

---

## ☕ Java Solution

```java
// 1. Validate URL format using regex
public static boolean isValidUrl(String url) {
    return url.matches("^(https?://)?([\\w.-]+)\\.([a-z]{2,6})([/\\w .-]*)*/?$\");
}

// 2. Check if redirect string matches expected pattern
public static boolean isValidRedirect(String redirect, String expected) {
    return redirect.equals(expected);
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Validate URL format using regex
def is_valid_url(url):
    import re
    return bool(re.match(r'^(https?://)?([\w.-]+)\.([a-z]{2,6})([/\w .-]*)*/?$', url))

# 2. Check if redirect string matches expected pattern
def is_valid_redirect(redirect, expected):
    return redirect == expected
```

---

## 🔍 Explanation

- Use regex to validate URL format (basic check).
- Compare redirect string to expected value.

**Edge Cases:**
- URL regex is basic; may not cover all valid URLs.
- Empty or null input: returns false.
- For production, use a URL parsing library.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | n = length of url |
| Python   | O(n)            | O(1)             | n = length of url |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
