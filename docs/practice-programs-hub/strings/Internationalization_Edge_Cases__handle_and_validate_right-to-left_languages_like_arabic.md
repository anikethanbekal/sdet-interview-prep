---
title: Handle and validate right-to-left languages (like Arabic)
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

# 🧠 Problem: Handle and validate right-to-left languages (like Arabic)

> **Category**: Internationalization Edge Cases  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Handle and validate right-to-left languages (like Arabic).

---

## ☕ Java Solution

```java
// 1. Check for right-to-left characters (e.g., Arabic, Hebrew)
public static boolean containsRTL(String s) {
    for (char c : s.toCharArray()) {
        if (Character.UnicodeBlock.of(c) == Character.UnicodeBlock.ARABIC ||
            Character.UnicodeBlock.of(c) == Character.UnicodeBlock.HEBREW) {
            return true;
        }
    }
    return false;
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Check for right-to-left characters (e.g., Arabic, Hebrew)
def contains_rtl(s):
    for c in s:
        if '\u0600' <= c <= '\u06FF' or '\u0590' <= c <= '\u05FF':
            return True
    return False
```

---

## 🔍 Explanation

- Check if any character in the string belongs to a right-to-left Unicode block (e.g., Arabic, Hebrew).
- Returns true if any such character is found.

**Edge Cases:**
- No RTL characters: returns false.
- Mixed scripts: returns true if at least one RTL character is present.
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
