---
title: Write a custom string formatter (like Python's format() or Java's MessageFormat)
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

# 🧠 Problem: Write a custom string formatter (like Python's format() or Java's MessageFormat)

> **Category**: Advanced System Tasks  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Write a custom string formatter (like Python's format() or Java's MessageFormat).

---

## ☕ Java Solution

```java
// 1. Simple custom formatter using {0}, {1}, ...
public static String customFormat(String template, Object... args) {
    String result = template;
    for (int i = 0; i < args.length; i++) {
        result = result.replace("{" + i + "}", args[i].toString());
    }
    return result;
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Simple custom formatter using {0}, {1}, ...
def custom_format(template, *args):
    result = template
    for i, arg in enumerate(args):
        result = result.replace(f'{{{i}}}', str(arg))
    return result
```

---

## 🔍 Explanation

- Replace placeholders like {0}, {1}, ... in the template with corresponding arguments.
- Does not handle advanced formatting (padding, decimals, etc.).

**Edge Cases:**
- More placeholders than args: placeholders remain.
- More args than placeholders: extra args ignored.
- Non-string arguments are converted to string.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n * m)        | O(n + m)         | n = template length, m = #args |
| Python   | O(n * m)        | O(n + m)         | n = template length, m = #args |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
