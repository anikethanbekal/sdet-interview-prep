---
title: Automate test case naming conventions from string inputs
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

# 🧠 Problem: Automate test case naming conventions from string inputs

> **Category**: SDET Use Cases  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Automate test case naming conventions from string inputs.

---

## ☕ Java Solution

```java
// 1. Convert string to snake_case
def toSnakeCase(String s) {
    return s.trim().toLowerCase().replaceAll("[^a-z0-9]+", "_").replaceAll("_+", "_").replaceAll("^_|_$", "");
}

// 2. Convert string to camelCase
def toCamelCase(String s) {
    String[] parts = s.trim().toLowerCase().split("[^a-z0-9]+", -1);
    StringBuilder sb = new StringBuilder(parts[0]);
    for (int i = 1; i < parts.length; i++) {
        if (!parts[i].isEmpty())
            sb.append(Character.toUpperCase(parts[i].charAt(0))).append(parts[i].substring(1));
    }
    return sb.toString();
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Convert string to snake_case
def to_snake_case(s):
    import re
    return re.sub(r'[^a-z0-9]+', '_', s.strip().lower()).strip('_')

# 2. Convert string to camelCase
def to_camel_case(s):
    import re
    parts = re.split(r'[^a-z0-9]+', s.strip().lower())
    return parts[0] + ''.join(word.capitalize() for word in parts[1:] if word)
```

---

## 🔍 Explanation

- Use regex to split and join words in the desired case format.
- Remove non-alphanumeric characters and handle spaces/underscores.

**Edge Cases:**
- Empty string returns empty string.
- Multiple spaces or special characters are handled.
- Leading/trailing underscores are removed.

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
