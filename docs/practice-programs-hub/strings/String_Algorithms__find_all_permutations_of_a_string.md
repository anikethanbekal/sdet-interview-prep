---
title: Find all permutations of a string
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

# 🧠 Problem: Find all permutations of a string

> **Category**: String Algorithms  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Find all permutations of a string.

---

## ☕ Java Solution

```java
// 1. Backtracking (recursive)
public static List<String> permute(String s) {
    List<String> result = new ArrayList<>();
    permuteHelper(s.toCharArray(), 0, result);
    return result;
}
private static void permuteHelper(char[] arr, int l, List<String> result) {
    if (l == arr.length) {
        result.add(new String(arr));
        return;
    }
    for (int i = l; i < arr.length; i++) {
        swap(arr, l, i);
        permuteHelper(arr, l + 1, result);
        swap(arr, l, i);
    }
}
private static void swap(char[] arr, int i, int j) {
    char temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
}

// 2. Using Set to avoid duplicates (for strings with duplicate chars)
public static Set<String> permuteUnique(String s) {
    Set<String> result = new HashSet<>();
    permuteUniqueHelper(s.toCharArray(), 0, result);
    return result;
}
private static void permuteUniqueHelper(char[] arr, int l, Set<String> result) {
    if (l == arr.length) {
        result.add(new String(arr));
        return;
    }
    Set<Character> seen = new HashSet<>();
    for (int i = l; i < arr.length; i++) {
        if (seen.add(arr[i])) {
            swap(arr, l, i);
            permuteUniqueHelper(arr, l + 1, result);
            swap(arr, l, i);
        }
    }
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Backtracking (recursive)
def permute(s):
    result = []
    def backtrack(path, used):
        if len(path) == len(s):
            result.append(''.join(path))
            return
        for i, c in enumerate(s):
            if used[i]: continue
            used[i] = True
            backtrack(path + [c], used)
            used[i] = False
    backtrack([], [False]*len(s))
    return result

# 2. Using set to avoid duplicates (for strings with duplicate chars)
def permute_unique(s):
    result = set()
    def backtrack(path, used):
        if len(path) == len(s):
            result.add(''.join(path))
            return
        for i, c in enumerate(s):
            if used[i]: continue
            used[i] = True
            backtrack(path + [c], used)
            used[i] = False
    backtrack([], [False]*len(s))
    return list(result)

# 3. Using itertools (for reference)
from itertools import permutations
def permute_itertools(s):
    return [''.join(p) for p in set(permutations(s))]
```

---

## 🔍 Explanation

- Use backtracking to generate all possible arrangements of the string's characters.
- For strings with duplicate characters, use a set to avoid duplicate permutations.
- Python's `itertools.permutations` can be used for a concise solution.

**Edge Cases:**
- Empty string: returns [""].
- Single character: returns [char].
- Duplicates: use set to avoid repeated permutations.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n!)           | O(n!)            | n = length of string |
| Python   | O(n!)           | O(n!)            | n = length of string |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
