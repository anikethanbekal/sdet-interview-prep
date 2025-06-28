---
title: Reverse a String in Java and Python
tags:
  - automation
  - testing
  - java
  - python
  - string
categories:
  - Programming
  - Coding
difficulty: easy
background: (optional) based on difficulty level tag below described  # light green background for easy problems
badge_color: (optional) based on difficulty level tag below described # for displaying tag badges
topic: string manipulation
date: 2025-06-26
author: yourname
intro: |
   This is a basic string manipulation problem where the goal is to reverse a given string.
   It’s often used in interviews to assess understanding of arrays or strings in different languages.
---

# 🔄 Problem: Reverse a String

Write a function that reverses a string.

---

## ✅ Requirements

- Input: A string (e.g., `"hello"`)
- Output: The reversed string (e.g., `"olleh"`)
- Constraints: No built-in reverse functions

---

## 📘 Java Solution

```java
public class ReverseString {
    public static void main(String[] args) {
        String str = "hello";
        String reversed = new StringBuilder(str).reverse().toString();
        System.out.println(reversed);  // olleh
    }
}
```

---

## 🐍 Python Solution

```python
def reverse_string(s):
    return s[::-1]

print(reverse_string("hello"))  # olleh
```

---

## 🔍 Explanation

- **Java** uses `StringBuilder` to reverse.
- **Python** uses slicing `[::-1]` for brevity.

---

## 💬 Notes

- In interviews, avoid `StringBuilder` if interviewer wants manual logic.
- For Unicode or emojis, special handling might be needed.

---

## 🏷 Tags

`string`, `python`, `java`, `easy`, `interview`, `logic`


---

## background color based on difficulty
| Use Case   | Tag               | Suggested Color | Tailwind Class              |
| ---------- | ----------------- | --------------- | --------------------------- |
| Difficulty | `easy`            | Light Green     | `bg-[#d1fae5]` (green-100)  |
| Difficulty | `medium`          | Light Yellow    | `bg-[#fef3c7]` (yellow-100) |
| Difficulty | `hard`            | Light Red       | `bg-[#fee2e2]` (red-100)    |
| Category   | `api`, `selenium` | Light Blue      | `bg-[#e0f2fe]` (blue-100)   |
| Status     | `draft`, `todo`   | Light Gray      | `bg-[#f3f4f6]` (gray-100)   |

## badge color based on difficulty

| **Type**   | **Value**        | **badge\_color**                |
| ---------- | ---------------- | ------------------------------- |
| Difficulty | `easy`           | `text-green-800 bg-green-100`   |
| Difficulty | `medium`         | `text-yellow-800 bg-yellow-100` |
| Difficulty | `hard`           | `text-red-800 bg-red-100`       |
| Category   | `api`, `backend` | `text-blue-800 bg-blue-100`     |
| Category   | `selenium`       | `text-purple-800 bg-purple-100` |
| Category   | `arrays`         | `text-indigo-800 bg-indigo-100` |
| Status     | `draft`          | `text-gray-800 bg-gray-100`     |
| Status     | `review`         | `text-orange-800 bg-orange-100` |
| Language   | `java`           | `text-red-700 bg-red-100`       |
| Language   | `python`         | `text-yellow-700 bg-yellow-100` |
| Testing    | `automation`     | `text-cyan-800 bg-cyan-100`     |
| Topic      | `string`, `dp`   | `text-teal-800 bg-teal-100`     |


## ✅ Benefits of This Template

| Section         | Purpose |
|------------------|---------|
| `---` YAML frontmatter | For filtering/tagging if used in MkDocs/Docusaurus |
| Title/Tags       | Makes it searchable later |
| Java + Python    | Great for side-by-side comparison |
| Explanation      | Shows understanding, not just code |
| Notes            | Add interviewer tips, variations |

---
