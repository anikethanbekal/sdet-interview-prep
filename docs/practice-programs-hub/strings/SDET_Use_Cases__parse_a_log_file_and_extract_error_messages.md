---
title: Parse a log file and extract error messages
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

# 🧠 Problem: Parse a log file and extract error messages

> **Category**: SDET Use Cases  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Parse a log file and extract error messages.

---

## ☕ Java Solution

```java
// 1. Extract error messages from log lines
public static List<String> extractErrorMessages(List<String> logLines) {
    List<String> errors = new ArrayList<>();
    for (String line : logLines) {
        if (line.contains("ERROR")) {
            errors.add(line);
        }
    }
    return errors;
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Extract error messages from log lines
def extract_error_messages(log_lines):
    return [line for line in log_lines if 'ERROR' in line]
```

---

## 🔍 Explanation

- Iterate through each log line and collect those containing the substring 'ERROR'.
- Can be adapted for different error keywords or regex patterns.

**Edge Cases:**
- No error lines: returns empty list.
- Case sensitivity: only matches 'ERROR' as uppercase.
- Empty input: returns empty list.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n * m)        | O(k * m)         | n = lines, m = line length, k = error lines |
| Python   | O(n * m)        | O(k * m)         | n = lines, m = line length, k = error lines |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
