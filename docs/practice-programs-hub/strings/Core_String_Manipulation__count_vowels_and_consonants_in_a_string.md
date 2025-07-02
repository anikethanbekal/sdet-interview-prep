---
title: Count vowels and consonants in a string
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

# 🧠 Problem: Count vowels and consonants in a string

> **Category**: Core String Manipulation  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Count vowels and consonants in a string.

---

## ☕ Java Solution

```java
// 1. Count vowels and consonants
public static int[] countVowelsAndConsonants(String s) {
    int vowels = 0, consonants = 0;
    for (char c : s.toLowerCase().toCharArray()) {
        if (Character.isLetter(c)) {
            if ("aeiou".indexOf(c) >= 0) vowels++;
            else consonants++;
        }
    }
    return new int[]{vowels, consonants};
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Count vowels and consonants
def count_vowels_and_consonants(s):
    vowels = consonants = 0
    for c in s.lower():
        if c.isalpha():
            if c in 'aeiou':
                vowels += 1
            else:
                consonants += 1
    return vowels, consonants
```

---

## 🔍 Explanation

- Convert the string to lowercase and iterate through each character.
- If the character is a letter, check if it is a vowel or consonant and increment the respective counter.

**Edge Cases:**
- Empty string returns (0, 0).
- Non-letter characters are ignored.
- Case-insensitive.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | n = length of string |
| Python   | O(n)            | O(1)             | n = length of string |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
