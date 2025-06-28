---
title: Reverse a String in Java and Python
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
topic: string manipulation
date: 2025-06-28
author: yourname
intro: |
   This is a basic string manipulation problem where the goal is to reverse a given string.
   It’s often used in interviews to assess fundamental understanding of strings, memory usage, and syntax differences between languages.
---

# 🧠 Problem: Reverse a String

Write a function that takes a string as input and returns the reversed version of that string.

**Category**: Arrays  
**Difficulty**: Easy  
**Tags**: array, hashmap, brute-force, optimized

---

## ✅ Requirements (if any)

- **Input**: A non-empty string `s` (e.g., `"hello"`)
- **Output**: The reversed string (e.g., `"olleh"`)
- **Constraints**:
  - No use of built-in reverse functions.
  - Time complexity should be linear `O(n)`.
  - Try to avoid extra space if possible (in-place logic where applicable).

---

## 🧪 Example(s)

```text
Input:  "hello"
Output: "olleh"

Input:  "abc"
Output: "cba"
```

---

## ☕ Java Solution

```java
// File: ReverseString.java
public class ReverseString {
    public static String reverse(String s) {
        return new StringBuilder(s).reverse().toString();
    }

    public static void main(String[] args) {
        String input = "hello";
        System.out.println(reverse(input));  // Output: olleh
    }
}
```

---

## 🐍 Python Solution

```python
def reverse(s):
    return s[::-1]

# Example usage
print(reverse("hello"))  # Output: olleh
```

---

## 🔍 Explanation

- **Java**:
  - Uses `StringBuilder` which has a `.reverse()` method.
  - `.toString()` converts the result back to a string.
  - Efficient and standard for short strings.

- **Python**:
  - Uses slicing `[::-1]`, a common idiom in Python for reversing.
  - It's concise and memory-efficient.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes                         |
|----------|------------------|------------------|-------------------------------|
| Java     | O(n)             | O(n)             | `StringBuilder` creates a copy |
| Python   | O(n)             | O(n)             | Slicing makes a new string     |

---

## ⚠️ Interview Tips / Notes

- Avoid using `StringBuilder` or slicing if interviewers ask for manual logic.
  - **Java Manual Approach**: Use `char[]`, swap in-place.
  - **Python Manual Approach**: Use a loop and string concatenation or list reversal.
- Be prepared to reverse:
  - **In-place** (e.g., `char[]`, mutable list)
  - With/without additional space
  - Strings with **Unicode**, emojis, or special characters (complex case)

---

## 🏷 Tags

`string`, `python`, `java`, `reversal`, `easy`, `interview`, `syntax`, `language-syntax`

---

## ✅ Benefits of This Format

| Section     | Benefit                                  |
|-------------|------------------------------------------|
| Dual Code   | Easier comparison across languages       |
| Explanation | Clear understanding of logic & choices   |
| Metadata    | Ready for use in MkDocs or Docusaurus    |
| Tips        | Prepares for real-world interviews       |
