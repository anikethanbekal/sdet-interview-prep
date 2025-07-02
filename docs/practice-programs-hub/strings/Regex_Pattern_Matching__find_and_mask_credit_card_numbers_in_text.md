---
title: Find and mask credit card numbers in text
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

# 🧠 Problem: Find and mask credit card numbers in text

> **Category**: Regex Pattern Matching  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Find and mask credit card numbers in text.

---

## ☕ Java Solution

```java
// 1. Using regex to mask all but last 4 digits
import java.util.regex.*;
public static String maskCreditCards(String s) {
    return s.replaceAll("(\\b\\d{12})(\\d{4}\\b)", "************$2");
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using re.sub to mask all but last 4 digits
import re
def mask_credit_cards(s):
    return re.sub(r'(\b\d{12})(\d{4}\b)', lambda m: '*'*12 + m.group(2), s)
```

---

## 🔍 Explanation

- Use regex to find 16-digit numbers and mask the first 12 digits.
- Only masks numbers that look like credit cards (16 digits, word boundaries).

**Edge Cases:**
- No credit card numbers: returns original string.
- Multiple cards in one string.
- Non-digit separators not handled unless regex is changed.

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
