---
title: Simulate string search using KMP algorithm
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

# 🧠 Problem: Simulate string search using KMP algorithm

> **Category**: Advanced System Tasks  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Simulate string search using KMP algorithm.

---

## ☕ Java Solution

```java
// 1. KMP algorithm for substring search
public static int kmpSearch(String haystack, String needle) {
    if (needle.isEmpty()) return 0;
    int[] lps = buildLPS(needle);
    int i = 0, j = 0;
    while (i < haystack.length()) {
        if (haystack.charAt(i) == needle.charAt(j)) {
            i++; j++;
            if (j == needle.length()) return i - j;
        } else if (j > 0) {
            j = lps[j - 1];
        } else {
            i++;
        }
    }
    return -1;
}
private static int[] buildLPS(String pat) {
    int[] lps = new int[pat.length()];
    int len = 0, i = 1;
    while (i < pat.length()) {
        if (pat.charAt(i) == pat.charAt(len)) {
            lps[i++] = ++len;
        } else if (len > 0) {
            len = lps[len - 1];
        } else {
            lps[i++] = 0;
        }
    }
    return lps;
}
```

---

## 🔵🟡 Python Solution

```python
# 1. KMP algorithm for substring search
def kmp_search(haystack, needle):
    if not needle:
        return 0
    def build_lps(pat):
        lps = [0] * len(pat)
        length = 0
        i = 1
        while i < len(pat):
            if pat[i] == pat[length]:
                length += 1
                lps[i] = length
                i += 1
            elif length > 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
        return lps
    lps = build_lps(needle)
    i = j = 0
    while i < len(haystack):
        if haystack[i] == needle[j]:
            i += 1
            j += 1
            if j == len(needle):
                return i - j
        elif j > 0:
            j = lps[j - 1]
        else:
            i += 1
    return -1
```

---

## 🔍 Explanation

- Preprocess the needle to build the LPS (Longest Prefix Suffix) array.
- Use the LPS array to efficiently search for the needle in the haystack.

**Edge Cases:**
- Empty needle: return 0.
- Needle longer than haystack: return -1.
- No match: return -1.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n + m)        | O(m)             | n = haystack, m = needle |
| Python   | O(n + m)        | O(m)             | n = haystack, m = needle |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
