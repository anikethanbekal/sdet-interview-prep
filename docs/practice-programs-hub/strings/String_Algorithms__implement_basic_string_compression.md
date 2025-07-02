---
title: Implement basic string compression
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

# 🧠 Problem: Implement basic string compression

> **Category**: String Algorithms  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Implement basic string compression.

---

## ☕ Java Solution

```java
// 1. Basic string compression (aabcccccaaa -> a2b1c5a3)
public static String compress(String s) {
    if (s == null || s.isEmpty()) return s;
    StringBuilder sb = new StringBuilder();
    int count = 1;
    for (int i = 1; i <= s.length(); i++) {
        if (i == s.length() || s.charAt(i) != s.charAt(i - 1)) {
            sb.append(s.charAt(i - 1)).append(count);
            count = 1;
        } else {
            count++;
        }
    }
    String compressed = sb.toString();
    return compressed.length() < s.length() ? compressed : s;
}

// 2. Return compressed only if shorter
public static String compressIfShorter(String s) {
    String compressed = compress(s);
    return compressed.length() < s.length() ? compressed : s;
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Basic string compression (aabcccccaaa -> a2b1c5a3)
def compress(s):
    if not s:
        return s
    result = []
    count = 1
    for i in range(1, len(s) + 1):
        if i == len(s) or s[i] != s[i-1]:
            result.append(s[i-1] + str(count))
            count = 1
        else:
            count += 1
    compressed = ''.join(result)
    return compressed if len(compressed) < len(s) else s
```

---

## 🔍 Explanation

- Count consecutive characters and append the character and count to the result.
- Only return the compressed string if it is shorter than the original.

**Edge Cases:**
- Empty string returns empty string.
- No compression if result is not shorter.
- Single character returns itself.

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
