---
title: Implement a basic string tokenizer (like split())
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

# 🧠 Problem: Implement a basic string tokenizer (like split())

> **Category**: Advanced System Tasks  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Implement a basic string tokenizer (like split()).

---

## ☕ Java Solution

```java
// 1. Using manual split (single char delimiter)
public static String[] basicSplit(String s, char delimiter) {
    List<String> result = new ArrayList<>();
    StringBuilder sb = new StringBuilder();
    for (char c : s.toCharArray()) {
        if (c == delimiter) {
            result.add(sb.toString());
            sb.setLength(0);
        } else {
            sb.append(c);
        }
    }
    result.add(sb.toString());
    return result.toArray(new String[0]);
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Manual split (single char delimiter)
def basic_split(s, delimiter):
    result = []
    current = ''
    for c in s:
        if c == delimiter:
            result.append(current)
            current = ''
        else:
            current += c
    result.append(current)
    return result
```

---

## 🔍 Explanation

- Iterate through the string, splitting at each delimiter character.
- Collect substrings into a list/array.

**Edge Cases:**
- Empty string returns [''].
- Delimiter at start/end: empty string at start/end of result.
- Consecutive delimiters: empty strings in result.

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
