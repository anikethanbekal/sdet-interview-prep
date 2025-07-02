---
title: Find the first non-repeating character
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

# 🧠 Problem: Find the first non-repeating character

> **Category**: Core String Manipulation  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Find the first non-repeating character.

---

## ☕ Java Solution

```java
// 1. Using LinkedHashMap (preserves order)
public static Character firstNonRepeatingChar(String s) {
    Map<Character, Integer> count = new LinkedHashMap<>();
    for (char c : s.toCharArray()) count.put(c, count.getOrDefault(c, 0) + 1);
    for (Map.Entry<Character, Integer> entry : count.entrySet()) {
        if (entry.getValue() == 1) return entry.getKey();
    }
    return null;
}

// 2. Using array for ASCII
public static Character firstNonRepeatingCharArray(String s) {
    int[] freq = new int[256];
    for (char c : s.toCharArray()) freq[c]++;
    for (char c : s.toCharArray()) if (freq[c] == 1) return c;
    return null;
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using collections.OrderedDict (preserves order)
from collections import OrderedDict
def first_non_repeating_char(s):
    count = OrderedDict()
    for c in s:
        count[c] = count.get(c, 0) + 1
    for c, v in count.items():
        if v == 1:
            return c
    return None

# 2. Using Counter and string traversal
from collections import Counter
def first_non_repeating_char_counter(s):
    freq = Counter(s)
    for c in s:
        if freq[c] == 1:
            return c
    return None
```

---

## 🔍 Explanation

- Count the frequency of each character while preserving order.
- Return the first character with a count of 1.
- Use a map/dictionary or array for counting.

**Edge Cases:**
- Empty string returns None/null.
- All repeating characters: returns None/null.
- Case sensitivity as per requirements.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1) / O(n)      | O(1) for ASCII, O(n) for map |
| Python   | O(n)            | O(1) / O(n)      | O(1) for ASCII, O(n) for dict |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
