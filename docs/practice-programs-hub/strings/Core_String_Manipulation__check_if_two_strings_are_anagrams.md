---
title: Check if two strings are anagrams
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

# 🧠 Problem: Check if two strings are anagrams

> **Category**: Core String Manipulation  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Check if two strings are anagrams.

---

## ☕ Java Solution

```java
// 1. Sort and compare
public static boolean areAnagramsSort(String s1, String s2) {
    if (s1.length() != s2.length()) return false;
    char[] a = s1.toCharArray(), b = s2.toCharArray();
    Arrays.sort(a); Arrays.sort(b);
    return Arrays.equals(a, b);
}

// 2. Count characters (ASCII)
public static boolean areAnagramsCount(String s1, String s2) {
    if (s1.length() != s2.length()) return false;
    int[] count = new int[256];
    for (int i = 0; i < s1.length(); i++) {
        count[s1.charAt(i)]++;
        count[s2.charAt(i)]--;
    }
    for (int c : count) if (c != 0) return false;
    return true;
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Sort and compare
def are_anagrams_sort(s1, s2):
    return sorted(s1) == sorted(s2)

# 2. Count characters (collections.Counter)
from collections import Counter
def are_anagrams_counter(s1, s2):
    return Counter(s1) == Counter(s2)
```

---

## 🔍 Explanation

- **Sort and compare**: Anagrams have the same sorted character sequence.
- **Count characters**: Anagrams have the same character counts for each letter.

**Edge Cases:**
- Different lengths: not anagrams.
- Empty strings: considered anagrams.
- Case sensitivity and ignoring spaces can be added if required.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n log n)      | O(n)             | n = length of string |
| Python   | O(n log n)      | O(n)             | n = length of string |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
