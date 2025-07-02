---
title: Check If Two Strings Are Anagrams
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
  This is a common string comparison problem used in interviews to assess understanding of sorting, hashing, and character frequency maps.
---

# 🧠 Problem: Check If Two Strings Are Anagrams

Write a function that checks whether two strings are anagrams of each other.

**Category**: Strings  
**Difficulty**: Easy  
**Tags**: string, syntax, language-specific

---

## ✅ Requirements

- **Input**: Two strings `s1` and `s2`
- **Output**: Boolean indicating if they are anagrams

---

## 🧪 Example(s)

```text
Input:
  s1 = "listen"
  s2 = "silent"
Output: True
```

---

## ☕ Java Solution

```java
String s1 = "listen";
String s2 = "silent";

char[] a = s1.toCharArray();
char[] b = s2.toCharArray();
Arrays.sort(a);
Arrays.sort(b);
boolean result = Arrays.equals(a, b);
System.out.println("Are anagrams: " + result);
```

---

## 🔵🟡 Python Solution

```python
s1 = "listen"
s2 = "silent"

result = sorted(s1) == sorted(s2)
print(f"Are anagrams: {result}")
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
