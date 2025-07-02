---
title: Replace all spaces with %20
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

# 🧠 Problem: Replace all spaces with %20

> **Category**: Core String Manipulation  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Replace all spaces with %20.

---

## ☕ Java Solution

```java
// 1. Using StringBuilder
public static String replaceSpaces(String s) {
    StringBuilder sb = new StringBuilder();
    for (char c : s.toCharArray()) {
        if (c == ' ') sb.append("%20");
        else sb.append(c);
    }
    return sb.toString();
}

// 2. Using replace (built-in)
public static String replaceSpacesReplace(String s) {
    return s.replace(" ", "%20");
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using str.replace()
def replace_spaces(s):
    return s.replace(' ', '%20')

# 2. Using list comprehension
def replace_spaces_listcomp(s):
    return ''.join('%20' if c == ' ' else c for c in s)
```

---

## 🔍 Explanation

- Iterate through the string and replace spaces with "%20".
- Or use built-in replace methods for a concise solution.

**Edge Cases:**
- Empty string returns empty string.
- No spaces: returns original string.
- All spaces: returns "%20" repeated.

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
