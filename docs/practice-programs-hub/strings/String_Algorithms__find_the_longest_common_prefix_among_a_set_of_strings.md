---
title: Find the longest common prefix among a set of strings
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

# 🧠 Problem: Find the longest common prefix among a set of strings

> **Category**: String Algorithms  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Find the longest common prefix among a set of strings.

---

## ☕ Java Solution

```java
// 1. Horizontal scanning
public static String longestCommonPrefix(String[] strs) {
    if (strs == null || strs.length == 0) return "";
    String prefix = strs[0];
    for (int i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length() - 1);
            if (prefix.isEmpty()) return "";
        }
    }
    return prefix;
}

// 2. Vertical scanning
public static String longestCommonPrefixVertical(String[] strs) {
    if (strs == null || strs.length == 0) return "";
    for (int i = 0; i < strs[0].length(); i++) {
        char c = strs[0].charAt(i);
        for (int j = 1; j < strs.length; j++) {
            if (i == strs[j].length() || strs[j].charAt(i) != c) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Horizontal scanning
def longest_common_prefix(strs):
    if not strs:
        return ""
    prefix = strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ""
    return prefix

# 2. Vertical scanning
def longest_common_prefix_vertical(strs):
    if not strs:
        return ""
    for i in range(len(strs[0])):
        c = strs[0][i]
        for s in strs[1:]:
            if i == len(s) or s[i] != c:
                return strs[0][:i]
    return strs[0]
```

---

## 🔍 Explanation

- **Horizontal scanning**: Start with the first string as prefix, reduce it until all strings start with it.
- **Vertical scanning**: Compare characters at each position across all strings.
- Return the prefix found, or empty string if none exists.

**Edge Cases:**
- Empty input: return empty string.
- Only one string: return itself.
- No common prefix: return empty string.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n * m)        | O(1)             | n = #strings, m = min string length |
| Python   | O(n * m)        | O(1)             | n = #strings, m = min string length |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
