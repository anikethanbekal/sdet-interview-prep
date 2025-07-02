---
title: Implement a simple diff checker between two strings
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

# 🧠 Problem: Implement a simple diff checker between two strings

> **Category**: Advanced System Tasks  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Implement a simple diff checker between two strings.

---

## ☕ Java Solution

```java
// 1. Simple diff checker (character by character)
public static List<String> simpleDiff(String a, String b) {
    List<String> diffs = new ArrayList<>();
    int n = Math.max(a.length(), b.length());
    for (int i = 0; i < n; i++) {
        char ca = i < a.length() ? a.charAt(i) : '-';
        char cb = i < b.length() ? b.charAt(i) : '-';
        if (ca != cb) diffs.add("Index " + i + ": '" + ca + "' vs '" + cb + "'");
    }
    return diffs;
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Simple diff checker (character by character)
def simple_diff(a, b):
    diffs = []
    n = max(len(a), len(b))
    for i in range(n):
        ca = a[i] if i < len(a) else '-'
        cb = b[i] if i < len(b) else '-'
        if ca != cb:
            diffs.append(f"Index {i}: '{ca}' vs '{cb}'")
    return diffs
```

---

## 🔍 Explanation

- Compare both strings character by character.
- Report differences with index and differing characters.

**Edge Cases:**
- Different lengths: missing characters shown as '-'.
- Empty strings: returns empty list.
- Identical strings: returns empty list.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(n)             | n = max length of strings |
| Python   | O(n)            | O(n)             | n = max length of strings |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
