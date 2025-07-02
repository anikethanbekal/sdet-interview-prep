---
title: Remove Leading Zeros from a String
tags:
  - java
  - python
  - string
  - easy
  - language-syntax
categories:
  - Programming
  - Coding
difficulty: easy
background: bg-[#d1fae5]
badge_color: text-green-800 bg-green-100
topic: string-manipulation
date: 2025-07-01
author: Anikethan Bekal
intro: |
  This problem evaluates how you manipulate and sanitize strings that may represent numbers.
---

# 🧠 Problem: Remove Leading Zeros from a String

Write a function to remove leading zeros from a string.

**Category**: Strings  
**Difficulty**: Easy  
**Tags**: string, syntax, language-specific

---

## ✅ Requirements

- **Input**: A string `s` containing digits
- **Output**: The string without leading zeros

---

## 🧪 Example(s)

```text
Input: s = "000123"
Output: "123"
```

---

## ☕ Java Solution

```java
String s = "000123";
String result = s.replaceFirst("^0+(?!$)", "");
System.out.println("Without leading zeros: " + result);
```

---

## 🔵🟡 Python Solution

```python
s = "000123"
result = s.lstrip('0')
print("Without leading zeros:", result)
```

---

## 🔍 Explanation

- **Java**:
  - Language-specific syntax demonstrated for the task.
- **Python**:
  - Uses intuitive string manipulation methods.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes                    |
|----------|-----------------|------------------|--------------------------|
| Java     | O(n)            | O(n)             | StringBuilder or Regex   |
| Python   | O(n)            | O(n)             | String slicing/lstrip    |

---

## ⚠️ Interview Tips / Notes

- Understand immutability in strings.
- Pay attention to index out-of-bound errors.
- Always validate inputs in real-world code.

---
