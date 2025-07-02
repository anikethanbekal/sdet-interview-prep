---
title: Build a string search with case-insensitive and diacritic-insensitive support
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

# 🧠 Problem: Build a string search with case-insensitive and diacritic-insensitive support

> **Category**: Advanced System Tasks  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Build a string search with case-insensitive and diacritic-insensitive support.

---

## ☕ Java Solution

```java
// 1. Case-insensitive and diacritic-insensitive search
import java.text.Normalizer;
public static boolean containsIgnoreCaseDiacritics(String haystack, String needle) {
    String normHay = Normalizer.normalize(haystack, Normalizer.Form.NFD)
        .replaceAll("\\p{M}", "").toLowerCase();
    String normNeedle = Normalizer.normalize(needle, Normalizer.Form.NFD)
        .replaceAll("\\p{M}", "").toLowerCase();
    return normHay.contains(normNeedle);
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Case-insensitive and diacritic-insensitive search
def contains_ignore_case_diacritics(haystack, needle):
    import unicodedata
    def normalize(s):
        return ''.join(c for c in unicodedata.normalize('NFD', s)
                      if not unicodedata.combining(c)).lower()
    return normalize(needle) in normalize(haystack)
```

---

## 🔍 Explanation

- Normalize both strings to remove diacritics (accents) and convert to lowercase.
- Use standard substring search after normalization.

**Edge Cases:**
- Empty needle: always true.
- Empty haystack: always false unless needle is empty.
- Non-ASCII characters are handled.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n + m)        | O(n + m)         | n = haystack, m = needle |
| Python   | O(n + m)        | O(n + m)         | n = haystack, m = needle |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
