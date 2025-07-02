---
title: Check for emoji presence in a string
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

# 🧠 Problem: Check for emoji presence in a string

> **Category**: Internationalization Edge Cases  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Check for emoji presence in a string.

---

## ☕ Java Solution

```java
// 1. Using regex for emoji ranges
import java.util.regex.*;
public static boolean containsEmoji(String s) {
    Pattern emoji = Pattern.compile("[\uD83C-\uDBFF\uDC00-\uDFFF]+|\u2600-\u27BF");
    Matcher m = emoji.matcher(s);
    return m.find();
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using regex for emoji ranges
def contains_emoji(s):
    import re
    emoji_pattern = re.compile(r'[\U0001F600-\U0001F64F\U0001F300-\U0001F5FF\U0001F680-\U0001F6FF\U0001F1E0-\U0001F1FF]')
    return bool(emoji_pattern.search(s))
```

---

## 🔍 Explanation

- Use regex to match Unicode ranges for emojis.
- Returns true if any emoji is found in the string.

**Edge Cases:**
- No emoji: returns false.
- Multiple emojis: returns true if at least one is present.
- Surrogate pairs in Java are handled by regex.

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
