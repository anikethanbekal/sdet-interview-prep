---
title: Match and extract hashtags from a tweet
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

# 🧠 Problem: Match and extract hashtags from a tweet

> **Category**: Regex Pattern Matching  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Match and extract hashtags from a tweet.

---

## ☕ Java Solution

```java
// 1. Using regex
import java.util.regex.*;
public static List<String> extractHashtags(String s) {
    List<String> result = new ArrayList<>();
    Matcher m = Pattern.compile("#\\w+").matcher(s);
    while (m.find()) result.add(m.group());
    return result;
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using re.findall
def extract_hashtags(s):
    import re
    return re.findall(r'#\w+', s)
```

---

## 🔍 Explanation

- Use regex to find all hashtags (words starting with #).
- Return as a list of strings.

**Edge Cases:**
- No hashtags: returns empty list.
- Hashtags at start/end of string.
- Non-alphanumeric after #: not matched.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(k)             | n = length of string, k = #matches |
| Python   | O(n)            | O(k)             | n = length of string, k = #matches |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
