---
title: Check if a string contains only digits
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

# 🧠 Problem: Check if a string contains only digits

> **Category**: Core String Manipulation  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Check if a string contains only digits.

---

## ☕ Java Solution

```java
// 1. Using regex
public static boolean isOnlyDigitsRegex(String s) {
    return s != null && s.matches("\\d+");
}

// 2. Using Character.isDigit in a loop
public static boolean isOnlyDigitsLoop(String s) {
    if (s == null || s.isEmpty()) return false;
    for (int i = 0; i < s.length(); i++) {
        if (!Character.isDigit(s.charAt(i))) return false;
    }
    return true;
}

// 3. Using Java 8+ streams
public static boolean isOnlyDigitsStream(String s) {
    return s != null && !s.isEmpty() && s.chars().allMatch(Character::isDigit);
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using str.isdigit()
def is_only_digits_builtin(s):
    return isinstance(s, str) and s.isdigit() and len(s) > 0

# 2. Using regex
import re
def is_only_digits_regex(s):
    return isinstance(s, str) and re.fullmatch(r"\d+", s) is not None

# 3. Using a loop
def is_only_digits_loop(s):
    if not isinstance(s, str) or not s:
        return False
    for c in s:
        if not c.isdigit():
            return False
    return True
```

---

## 🔍 Explanation

There are several ways to check if a string contains only digits:
- **Regex**: Use a regular expression to match the entire string against one or more digits (`\d+`).
- **Character check**: Iterate through each character and check if it is a digit using `Character.isDigit` (Java) or `str.isdigit()` (Python).
- **Streams/Comprehensions**: Use Java streams or Python comprehensions to check all characters.

**Edge Cases:**
- Empty strings should return `false` (not considered as containing only digits).
- Null/None input should return `false`.
- Strings with spaces, signs, or decimal points are not considered as only digits.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | n = length of string |
| Python   | O(n)            | O(1)             | n = length of string |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
