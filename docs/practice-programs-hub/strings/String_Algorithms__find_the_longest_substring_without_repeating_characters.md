---
title: Find the longest substring without repeating characters
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

# 🧠 Problem: Find the longest substring without repeating characters

> **Category**: String Algorithms  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Find the longest substring without repeating characters.

---

## ☕ Java Solution

```java
// 1. Sliding window with HashSet
public static int lengthOfLongestSubstringSet(String s) {
    int n = s.length(), ans = 0;
    Set<Character> set = new HashSet<>();
    int i = 0, j = 0;
    while (i < n && j < n) {
        if (!set.contains(s.charAt(j))) {
            set.add(s.charAt(j++));
            ans = Math.max(ans, j - i);
        } else {
            set.remove(s.charAt(i++));
        }
    }
    return ans;
}

// 2. Sliding window with int[256] for ASCII
public static int lengthOfLongestSubstringArray(String s) {
    int n = s.length(), ans = 0;
    int[] index = new int[256]; // stores last index + 1
    for (int j = 0, i = 0; j < n; j++) {
        i = Math.max(index[s.charAt(j)], i);
        ans = Math.max(ans, j - i + 1);
        index[s.charAt(j)] = j + 1;
    }
    return ans;
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Sliding window with set
def length_of_longest_substring_set(s):
    seen = set()
    left = result = 0
    for right, char in enumerate(s):
        while char in seen:
            seen.remove(s[left])
            left += 1
        seen.add(char)
        result = max(result, right - left + 1)
    return result

# 2. Sliding window with dict (optimized)
def length_of_longest_substring_dict(s):
    last = {}
    left = result = 0
    for right, char in enumerate(s):
        if char in last and last[char] >= left:
            left = last[char] + 1
        last[char] = right
        result = max(result, right - left + 1)
    return result
```

---

## 🔍 Explanation

- Use a sliding window to maintain a substring with unique characters.
- Expand the window by moving the right pointer; if a duplicate is found, move the left pointer to remove duplicates.
- Use a set or a map/array to track the last seen positions of characters for optimization.

**Edge Cases:**
- Empty string returns 0.
- All unique characters: returns length of string.
- All same characters: returns 1.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(min(n, m))     | m = charset size |
| Python   | O(n)            | O(min(n, m))     | m = charset size |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
