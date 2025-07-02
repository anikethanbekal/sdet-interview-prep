---
title: Remove duplicate characters from a string
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

# 🧠 Problem: Remove duplicate characters from a string

> **Category**: Core String Manipulation  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Remove duplicate characters from a string.

---

## ☕ Java Solution

```java
// 1. Using LinkedHashSet to preserve order
public static String removeDuplicates(String s) {
    Set<Character> seen = new LinkedHashSet<>();
    for (char c : s.toCharArray()) seen.add(c);
    StringBuilder sb = new StringBuilder();
    for (char c : seen) sb.append(c);
    return sb.toString();
}

// 2. Using boolean array for ASCII
public static String removeDuplicatesArray(String s) {
    boolean[] seen = new boolean[256];
    StringBuilder sb = new StringBuilder();
    for (char c : s.toCharArray()) {
        if (!seen[c]) {
            seen[c] = true;
            sb.append(c);
        }
    }
    return sb.toString();
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using set and order preservation
def remove_duplicates(s):
    seen = set()
    result = []
    for c in s:
        if c not in seen:
            seen.add(c)
            result.append(c)
    return ''.join(result)

# 2. Using dict.fromkeys (Python 3.7+ preserves order)
def remove_duplicates_dict(s):
    return ''.join(dict.fromkeys(s))
```

---

## 🔍 Explanation

- Use a set or boolean array to track seen characters and build the result string.
- Order is preserved by using LinkedHashSet (Java) or dict/set (Python 3.7+).

**Edge Cases:**
- Empty string returns empty string.
- All unique: returns original string.
- All duplicates: returns single character.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)/O(n)        | O(1) for ASCII, O(n) for set |
| Python   | O(n)            | O(n)             | n = length of string |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
