---
title: Remove diacritics (accents) from letters
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

# 🧠 Problem: Remove diacritics (accents) from letters

> **Category**: Internationalization Edge Cases  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Remove diacritics (accents) from letters.

---

## ☕ Java Solution

```java
// 1. Remove diacritics using Normalizer
import java.text.Normalizer;
public static String removeDiacritics(String s) {
    return Normalizer.normalize(s, Normalizer.Form.NFD)
        .replaceAll("\\p{M}", "");
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Remove diacritics using unicodedata
def remove_diacritics(s):
    import unicodedata
    return ''.join(c for c in unicodedata.normalize('NFD', s)
                  if not unicodedata.combining(c))
```

---

## 🔍 Explanation

- Normalize the string to NFD (decomposed form), then remove all combining marks.
- Returns the string without diacritics/accents.

**Edge Cases:**
- No diacritics: returns original string.
- Empty string returns empty string.
- Non-letter characters are unaffected.

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
