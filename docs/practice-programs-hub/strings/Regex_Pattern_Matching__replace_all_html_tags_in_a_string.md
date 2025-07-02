---
title: Replace all HTML tags in a string
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

# 🧠 Problem: Replace all HTML tags in a string

> **Category**: Regex Pattern Matching  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Replace all HTML tags in a string.

---

## ☕ Java Solution

```java
// 1. Using regex
import java.util.regex.*;
public static String removeHtmlTags(String s) {
    return s.replaceAll("<[^>]+>", "");
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using re.sub
def remove_html_tags(s):
    import re
    return re.sub(r'<[^>]+>', '', s)
```

---

## 🔍 Explanation

- Use regex to match and remove all substrings that look like HTML tags (anything between < and >).
- Returns the string with tags removed.

**Edge Cases:**
- No tags: returns original string.
- Nested tags are handled.
- Malformed tags may not be fully removed.

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
