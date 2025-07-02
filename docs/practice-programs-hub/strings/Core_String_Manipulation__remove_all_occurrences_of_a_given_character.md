---
title: Remove all occurrences of a given character
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

# 🧠 Problem: Remove all occurrences of a given character

> **Category**: Core String Manipulation  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Remove all occurrences of a given character.

---

## ☕ Java Solution

```java
// 1. Using StringBuilder
public static String removeChar(String s, char c) {
    StringBuilder sb = new StringBuilder();
    for (char ch : s.toCharArray()) {
        if (ch != c) sb.append(ch);
    }
    return sb.toString();
}

// 2. Using replace (built-in)
public static String removeCharReplace(String s, char c) {
    return s.replace(Character.toString(c), "");
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using str.replace()
def remove_char_replace(s, c):
    return s.replace(c, '')

# 2. Using list comprehension
def remove_char_listcomp(s, c):
    return ''.join(ch for ch in s if ch != c)
```

---

## 🔍 Explanation

- Iterate through the string and append characters that are not the target.
- Or use built-in replace methods for a concise solution.

**Edge Cases:**
- Empty string returns empty string.
- Character not present: returns original string.
- Remove all: returns empty string.

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
