---
title: Convert a string to title case
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

# 🧠 Problem: Convert a string to title case

> **Category**: Core String Manipulation  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Convert a string to title case.

---

## ☕ Java Solution

```java
// 1. Using split and StringBuilder
public static String toTitleCase(String s) {
    if (s == null || s.isEmpty()) return s;
    String[] words = s.split(" ");
    StringBuilder sb = new StringBuilder();
    for (String word : words) {
        if (!word.isEmpty()) {
            sb.append(Character.toUpperCase(word.charAt(0)));
            if (word.length() > 1) sb.append(word.substring(1).toLowerCase());
        }
        sb.append(" ");
    }
    return sb.toString().trim();
}

// 2. Using regex (Java 9+)
public static String toTitleCaseRegex(String s) {
    return s == null ? null : s.replaceAll("\\b(\\w)(\\w*)\\b", m -> m.group(1).toUpperCase() + m.group(2).toLowerCase());
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using str.title()
def to_title_case_builtin(s):
    return s.title()

# 2. Manual split and capitalize
def to_title_case_manual(s):
    return ' '.join(word.capitalize() for word in s.split(' '))
```

---

## 🔍 Explanation

- Split the string into words, capitalize the first letter of each, and join them back.
- Python's `str.title()` and Java's manual approach both work for basic cases.
- For more complex cases (apostrophes, hyphens), further logic may be needed.

**Edge Cases:**
- Empty string returns empty string.
- Multiple spaces between words are preserved.
- Non-letter characters are not changed.

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
