---
title: Swap Pairs of Characters in a String
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
  This problem requires modifying a string by swapping each adjacent pair of characters.
---

# 🧠 Problem: Swap Pairs of Characters in a String

Write a function to swap every two adjacent characters in a string.

**Category**: Strings  
**Difficulty**: Easy  
**Tags**: string, syntax, language-specific

---

## ✅ Requirements

- **Input**: A string `s`
- **Output**: A new string with adjacent characters swapped

---

## 🧪 Example(s)

```text
Input: s = "abcd"
Output: "badc"
```

---

## ☕ Java Solution

```java
String s = "abcd";
StringBuilder result = new StringBuilder(s);
for (int i = 0; i < s.length() - 1; i += 2) {
    char temp = result.charAt(i);
    result.setCharAt(i, result.charAt(i + 1));
    result.setCharAt(i + 1, temp);
}
System.out.println("Swapped: " + result.toString());
```

---

## 🔵🟡 Python Solution

```python
s = "abcd"
lst = list(s)
for i in range(0, len(lst) - 1, 2):
    lst[i], lst[i + 1] = lst[i + 1], lst[i]
print("Swapped:", "".join(lst))
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
