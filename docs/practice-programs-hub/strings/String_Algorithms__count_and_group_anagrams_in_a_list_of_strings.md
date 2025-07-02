---
title: Count and group anagrams in a list of strings
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

# 🧠 Problem: Count and group anagrams in a list of strings

> **Category**: String Algorithms  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Count and group anagrams in a list of strings.

---

## ☕ Java Solution

```java
// 1. Group anagrams using HashMap
public static List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    for (String s : strs) {
        char[] ca = s.toCharArray();
        Arrays.sort(ca);
        String key = new String(ca);
        map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
    }
    return new ArrayList<>(map.values());
}

// 2. Count anagram groups
public static int countAnagramGroups(String[] strs) {
    Set<String> set = new HashSet<>();
    for (String s : strs) {
        char[] ca = s.toCharArray();
        Arrays.sort(ca);
        set.add(new String(ca));
    }
    return set.size();
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Group anagrams using defaultdict
def group_anagrams(strs):
    from collections import defaultdict
    groups = defaultdict(list)
    for s in strs:
        key = ''.join(sorted(s))
        groups[key].append(s)
    return list(groups.values())

# 2. Count anagram groups
def count_anagram_groups(strs):
    return len({''.join(sorted(s)) for s in strs})
```

---

## 🔍 Explanation

- Sort each string to get a canonical form; group or count by this key.
- Use a map/dictionary to collect lists of anagrams.
- The number of unique sorted keys gives the number of anagram groups.

**Edge Cases:**
- Empty input returns empty list or 0.
- Single string: one group.
- Strings with different lengths cannot be anagrams.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n * k log k)  | O(n * k)         | n = #strings, k = max string length |
| Python   | O(n * k log k)  | O(n * k)         | n = #strings, k = max string length |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
