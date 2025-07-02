---
title: Run-length encoding of a string
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

# 🧠 Problem: Run-length encoding of a string

> **Category**: String Algorithms  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Run-length encoding of a string.

---

## ☕ Java Solution

```java
// 1. Simple run-length encoding
public static String runLengthEncode(String s) {
    if (s == null || s.isEmpty()) return "";
    StringBuilder sb = new StringBuilder();
    int count = 1;
    for (int i = 1; i <= s.length(); i++) {
        if (i == s.length() || s.charAt(i) != s.charAt(i - 1)) {
            sb.append(s.charAt(i - 1)).append(count);
            count = 1;
        } else {
            count++;
        }
    }
    return sb.toString();
}

// 2. Decode run-length encoded string
public static String runLengthDecode(String s) {
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < s.length(); ) {
        char c = s.charAt(i++);
        StringBuilder num = new StringBuilder();
        while (i < s.length() && Character.isDigit(s.charAt(i))) {
            num.append(s.charAt(i++));
        }
        int count = Integer.parseInt(num.toString());
        for (int j = 0; j < count; j++) sb.append(c);
    }
    return sb.toString();
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Simple run-length encoding
def run_length_encode(s):
    if not s:
        return ""
    result = []
    count = 1
    for i in range(1, len(s) + 1):
        if i == len(s) or s[i] != s[i-1]:
            result.append(s[i-1] + str(count))
            count = 1
        else:
            count += 1
    return ''.join(result)

# 2. Decode run-length encoded string
def run_length_decode(s):
    result = []
    i = 0
    while i < len(s):
        c = s[i]
        i += 1
        num = ''
        while i < len(s) and s[i].isdigit():
            num += s[i]
            i += 1
        result.append(c * int(num))
    return ''.join(result)
```

---

## 🔍 Explanation

- **Encoding**: Count consecutive characters and append the character and count to the result.
- **Decoding**: Read a character, then parse the following digits as the count, and repeat the character.

**Edge Cases:**
- Empty string returns empty string.
- Single character returns itself + 1.
- Input with digits as characters may need special handling.

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
