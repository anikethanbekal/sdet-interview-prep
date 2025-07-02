---
title: Count words in a multilingual string
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

# 🧠 Problem: Count words in a multilingual string

> **Category**: Internationalization Edge Cases  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Count words in a multilingual string.

---

## ☕ Java Solution

```java
// 1. Using regex for Unicode word boundaries
import java.util.regex.*;
public static int countWords(String s) {
    Matcher m = Pattern.compile("\\b\\w+\\b", Pattern.UNICODE_CHARACTER_CLASS).matcher(s);
    int count = 0;
    while (m.find()) count++;
    return count;
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using regex for Unicode word boundaries
def count_words(s):
    import re
    return len(re.findall(r'\b\w+\b', s, re.UNICODE))
```

---

## 🔍 Explanation

- Use regex with Unicode support to match words in multilingual text.
- Returns the count of words found.

**Edge Cases:**
- Empty string returns 0.
- Punctuation and symbols are not counted as words.
- Works for most languages with word boundaries.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(k)             | n = length of string, k = #words |
| Python   | O(n)            | O(k)             | n = length of string, k = #words |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
