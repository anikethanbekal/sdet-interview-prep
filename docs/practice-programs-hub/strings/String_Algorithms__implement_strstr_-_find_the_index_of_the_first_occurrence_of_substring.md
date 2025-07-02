---
title: Implement strStr() – find the index of the first occurrence of substring
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

# 🧠 Problem: Implement strStr() – find the index of the first occurrence of substring

> **Category**: String Algorithms  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Implement strStr() – find the index of the first occurrence of substring.

---

## ☕ Java Solution

```java
// 1. Using built-in indexOf
public static int strStrIndexOf(String haystack, String needle) {
    return haystack.indexOf(needle);
}

// 2. Manual sliding window
public static int strStrManual(String haystack, String needle) {
    if (needle.isEmpty()) return 0;
    int n = haystack.length(), m = needle.length();
    for (int i = 0; i <= n - m; i++) {
        if (haystack.substring(i, i + m).equals(needle)) return i;
    }
    return -1;
}

// 3. KMP Algorithm (efficient for repeated searches)
public static int strStrKMP(String haystack, String needle) {
    if (needle.isEmpty()) return 0;
    int[] lps = computeLPSArray(needle);
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
private static int[] computeLPSArray(String pat) {
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
# 1. Using built-in find()
def str_str_builtin(haystack, needle):
    return haystack.find(needle)

# 2. Manual sliding window
def str_str_manual(haystack, needle):
    if needle == "":
        return 0
    n, m = len(haystack), len(needle)
    for i in range(n - m + 1):
        if haystack[i:i+m] == needle:
            return i
    return -1

# 3. KMP Algorithm
def str_str_kmp(haystack, needle):
    if needle == "":
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

- **Built-in**: Use `indexOf` (Java) or `find` (Python) for a direct solution.
- **Manual**: Slide a window of the needle's length over the haystack and compare substrings.
- **KMP**: Preprocess the needle to build an LPS (Longest Prefix Suffix) array for efficient searching, especially useful for repeated searches.

**Edge Cases:**
- If `needle` is empty, return 0.
- If `needle` is longer than `haystack`, return -1.
- If `needle` is not found, return -1.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n + m)        | O(m)             | KMP; n = len(haystack), m = len(needle) |
| Python   | O(n + m)        | O(m)             | KMP; n = len(haystack), m = len(needle) |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
