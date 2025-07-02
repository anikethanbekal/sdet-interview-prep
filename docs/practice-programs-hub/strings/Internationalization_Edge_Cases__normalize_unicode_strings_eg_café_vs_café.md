---
title: Normalize Unicode strings (e.g., café vs café)
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

# 🧠 Problem: Normalize Unicode strings (e.g., café vs café)

> **Category**: Internationalization Edge Cases  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Normalize Unicode strings (e.g., café vs café).

---

## ☕ Java Solution

```java
// 1. Normalize to NFC (composed form)
import java.text.Normalizer;
public static String normalizeNFC(String s) {
    return Normalizer.normalize(s, Normalizer.Form.NFC);
}

// 2. Normalize to NFD (decomposed form)
public static String normalizeNFD(String s) {
    return Normalizer.normalize(s, Normalizer.Form.NFD);
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Normalize to NFC (composed form)
def normalize_nfc(s):
    import unicodedata
    return unicodedata.normalize('NFC', s)

# 2. Normalize to NFD (decomposed form)
def normalize_nfd(s):
    import unicodedata
    return unicodedata.normalize('NFD', s)
```

---

## 🔍 Explanation

- Use Unicode normalization to convert strings to a standard form (NFC or NFD).
- Useful for comparing visually identical but binary different strings.

**Edge Cases:**
- Already normalized: returns original string.
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
