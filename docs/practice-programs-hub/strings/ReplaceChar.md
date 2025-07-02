---
title: Replace a Character at Specific Index
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
  This task is useful to understand how immutable strings are modified in Java and Python.
---

# 🧠 Problem: Replace a Character at Specific Index

Write a function to replace a character at a given index in a string.

**Category**: Strings  
**Difficulty**: Easy  
**Tags**: string, syntax, language-specific

---

## ✅ Requirements

- **Input**: A string `s`, index `i`, and character `c`
- **Output**: New string with character at index `i` replaced with `c`

---

## 🧪 Example(s)

```text
Input:
  s = "hello", i = 1, c = 'a'
Output: "hallo"
```

---

## ☕ Java Solution

```java
String s = "hello";
int index = 1;
char replacement = 'a';

StringBuilder sb = new StringBuilder(s);
sb.setCharAt(index, replacement);
System.out.println("Modified string: " + sb.toString());
```

---

## 🔵🟡 Python Solution

```python
s = "hello"
index = 1
replacement = 'a'

s = s[:index] + replacement + s[index+1:]
print("Modified string:", s)
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
