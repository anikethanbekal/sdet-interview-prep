---
title: Check case sensitivity issues in user input validations
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

# 🧠 Problem: Check case sensitivity issues in user input validations

> **Category**: SDET Use Cases  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Check case sensitivity issues in user input validations.

---

## ☕ Java Solution

```java
// 1. Check if two strings are equal ignoring case
public static boolean equalsIgnoreCase(String a, String b) {
    return a.equalsIgnoreCase(b);
}

// 2. Check if input matches allowed values (case-insensitive)
public static boolean isAllowedInput(String input, String[] allowed) {
    for (String s : allowed) {
        if (s.equalsIgnoreCase(input)) return true;
    }
    return false;
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Check if two strings are equal ignoring case
def equals_ignore_case(a, b):
    return a.lower() == b.lower()

# 2. Check if input matches allowed values (case-insensitive)
def is_allowed_input(input, allowed):
    return input.lower() in (s.lower() for s in allowed)
```

---

## 🔍 Explanation

- Use case-insensitive comparison for validation.
- Convert both strings to lower (or upper) case before comparing.

**Edge Cases:**
- Empty strings: handled.
- Mixed case in allowed values: handled.
- Null/None input should be handled as needed.

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
