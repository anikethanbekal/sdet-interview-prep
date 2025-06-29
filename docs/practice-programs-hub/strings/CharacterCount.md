---
title: Count Character Occurrences in Java and Python
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
date: 2025-06-29
author: Anikethan Bekal
intro: |
   This is a basic string manipulation problem where the goal is to count the occurrences of a specific character in a given string.
   It’s often used in interviews to assess fundamental understanding of strings, memory usage, and syntax differences between languages.
---

# 🧠 Problem: Count Character Occurrences

Write a function that takes a string and a character as input and returns the number of times the character appears in the string.

**Category**: Strings  
**Difficulty**: Easy  
**Tags**: string, brute-force, optimized

---

## ✅ Requirements (if any)

- **Input**: 
  - A non-empty string `s` (e.g., `"hello"`)
  - A character `c` (e.g., `"l"`)
- **Output**: The count of occurrences of `c` in `s` (e.g., `2`)
- **Constraints**:
  - Case-sensitive comparison.
  - Time complexity should be linear `O(n)`.

---

## 🧪 Example(s)

```text
Input:  
  str = "hello"
  search = "l"
Output: 2
```

---

## ☕ Java Solution

```java
String str = "Hello";
int org_len = str.length();
String search = "l";
int new_len = str.replaceAll(search, "").length();
int diff = org_len - new_len;
System.out.println("Occurance of char : " + search + " is " + diff);
```

---

## 🔵🟡 Python Solution

```python
str = "Hello"  
search = "l"
org_len = len(str)
new_len = len(str.replace(search, ""))
diff = org_len - new_len
print(f"Number of times '{search}' appears in '{str}': {diff}")
```

---

## 🔍 Explanation

- **Java**:
  - Uses `replaceAll()` to remove all occurrences of the character.
  - The difference in length gives the count of occurrences.
- **Python**:
  - Uses `replace()` to remove all occurrences of the character.
  - The difference in length gives the count of occurrences.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes                          |
|----------|-----------------|------------------|--------------------------------|
| Java     | O(n)            | O(n)             | `replaceAll` creates a copy    |
| Python   | O(n)            | O(n)             | `replace` creates a new string |

---

## ⚠️ Interview Tips / Notes

- Be prepared to count:
  - Case-sensitive and case-insensitive occurrences.
  - Characters with **Unicode**, emojis, or special characters (complex case).
- Avoid using built-in functions if interviewers ask for manual logic:
  - **Java Manual Approach**: Use a loop and `char[]`.
  - **Python Manual Approach**: Use a loop and a counter variable.

---

## 🏷 Tags

`string`, `python`, `java`, `count`, `easy`, `interview`, `syntax`, `language-syntax`

---