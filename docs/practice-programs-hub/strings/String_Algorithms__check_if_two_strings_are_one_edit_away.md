---
title: Check if two strings are one edit away
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

# 🧠 Problem: Check if two strings are one edit away

> **Category**: String Algorithms  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Check if two strings are one edit away.

---

## ☕ Java Solution

```java
// 1. One-pass check
public static boolean oneEditAway(String s1, String s2) {
    int m = s1.length(), n = s2.length();
    if (Math.abs(m - n) > 1) return false;
    String a = m < n ? s1 : s2;
    String b = m < n ? s2 : s1;
    int i = 0, j = 0, edits = 0;
    while (i < a.length() && j < b.length()) {
        if (a.charAt(i) != b.charAt(j)) {
            if (++edits > 1) return false;
            if (a.length() != b.length()) j++;
        } else {
            i++; j++;
        }
        j++;
    }
    return edits + (b.length() - j) <= 1;
}

// 2. Split by length difference
public static boolean oneEditAwayAlt(String s1, String s2) {
    int m = s1.length(), n = s2.length();
    if (Math.abs(m - n) > 1) return false;
    if (m == n) return oneReplace(s1, s2);
    if (m + 1 == n) return oneInsert(s1, s2);
    if (m - 1 == n) return oneInsert(s2, s1);
    return false;
}
private static boolean oneReplace(String s1, String s2) {
    boolean found = false;
    for (int i = 0; i < s1.length(); i++) {
        if (s1.charAt(i) != s2.charAt(i)) {
            if (found) return false;
            found = true;
        }
    }
    return true;
}
private static boolean oneInsert(String s1, String s2) {
    int i = 0, j = 0;
    while (i < s1.length() && j < s2.length()) {
        if (s1.charAt(i) != s2.charAt(j)) {
            if (i != j) return false;
            j++;
        } else {
            i++; j++;
        }
    }
    return true;
}
```

---

## 🔵🟡 Python Solution

```python
# 1. One-pass check
def one_edit_away(s1, s2):
    m, n = len(s1), len(s2)
    if abs(m - n) > 1:
        return False
    a, b = (s1, s2) if m < n else (s2, s1)
    i = j = edits = 0
    while i < len(a) and j < len(b):
        if a[i] != b[j]:
            if edits == 1:
                return False
            edits += 1
            if len(a) != len(b):
                j += 1
        else:
            i += 1
            j += 1
        j += 1
    return edits + (len(b) - j) <= 1

# 2. Split by length difference
def one_edit_away_alt(s1, s2):
    m, n = len(s1), len(s2)
    if abs(m - n) > 1:
        return False
    if m == n:
        return one_replace(s1, s2)
    if m + 1 == n:
        return one_insert(s1, s2)
    if m - 1 == n:
        return one_insert(s2, s1)
    return False

def one_replace(s1, s2):
    found = False
    for a, b in zip(s1, s2):
        if a != b:
            if found:
                return False
            found = True
    return True

def one_insert(s1, s2):
    i = j = 0
    while i < len(s1) and j < len(s2):
        if s1[i] != s2[j]:
            if i != j:
                return False
            j += 1
        else:
            i += 1
            j += 1
    return True
```

---

## 🔍 Explanation

- If the length difference is more than 1, return false.
- If lengths are equal, check for at most one replacement.
- If lengths differ by 1, check for at most one insertion/deletion.
- Use two pointers to compare characters and count edits.

**Edge Cases:**
- Both strings empty: true.
- One empty, one length 1: true.
- More than one edit needed: false.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | n = length of shorter string |
| Python   | O(n)            | O(1)             | n = length of shorter string |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
