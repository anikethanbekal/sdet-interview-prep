---
title: Count vowels in a string using Google Guava in Java
tags:
  - java
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
date: 2025-06-30
author: Anikethan Bekal
intro: |
   This is a basic string manipulation problem where the goal is to count the number of vowels in a given string using Google Guava.
---

# 🧠 Problem: Count Vowels in a String

Write a function that takes a string as input and returns the number of vowels in the string.

**Category**: Strings  
**Difficulty**: Easy  
**Tags**: string, brute-force, optimized

---

## ✅ Requirements

- **Input**: 
  - A non-empty string `str` (e.g., `"This is a test string"`)
- **Output**: The count of vowels in `str` (e.g., `5`)
- **Constraints**:
  - Case-insensitive comparison.
  - Time complexity should be linear `O(n)`.

---

## 🧪 Example(s)

```text
Input:  
  str = "This is a test string"
Output: 5
```

---

## ☕ Java Solution

```java
import com.google.common.base.CharMatcher;

public class CountVowels {
    public static void main(String[] args) {
        String str = "This is a test string";
        int count = CharMatcher.anyOf("aeiouAEIOU").countIn(str);
        System.out.println("Number of vowels in the string: " + count);
    }
}
```

---

## 🔍 Explanation

- **Java**:
  - Uses Google Guava's `CharMatcher` to count occurrences of vowels (`aeiouAEIOU`) in the string.
  - Efficient and concise, leveraging a library for optimized performance.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes                          |
|----------|-----------------|------------------|--------------------------------|
| Java     | O(n)            | O(1)             | Iterates through the string    |

---

## ⚠️ Interview Tips / Notes

- Be prepared to count:
  - Vowels and consonants separately.
  - Characters with **Unicode**, emojis, or special characters (complex case).
- Avoid using external libraries if interviewers ask for manual logic:
  - **Manual Approach**: Use loops and conditional checks (`if char in 'aeiouAEIOU'`).

---

## 🏷 Tags

`string`, `java`, `vowels`, `easy`, `interview`, `syntax`, `language-syntax`

---