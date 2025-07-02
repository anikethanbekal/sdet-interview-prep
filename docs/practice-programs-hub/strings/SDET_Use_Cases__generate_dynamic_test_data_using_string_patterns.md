---
title: Generate dynamic test data using string patterns
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

# 🧠 Problem: Generate dynamic test data using string patterns

> **Category**: SDET Use Cases  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Generate dynamic test data using string patterns.

---

## ☕ Java Solution

```java
// 1. Generate test data using a pattern (e.g., 'user_{i}@test.com')
public static List<String> generateTestData(String pattern, int count) {
    List<String> result = new ArrayList<>();
    for (int i = 1; i <= count; i++) {
        result.add(pattern.replace("{i}", String.valueOf(i)));
    }
    return result;
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Generate test data using a pattern (e.g., 'user_{i}@test.com')
def generate_test_data(pattern, count):
    return [pattern.replace('{i}', str(i)) for i in range(1, count+1)]
```

---

## 🔍 Explanation

- Replace the placeholder `{i}` in the pattern with numbers from 1 to count.
- Useful for generating emails, usernames, etc., for tests.

**Edge Cases:**
- If pattern does not contain `{i}`, returns same string multiple times.
- count <= 0 returns empty list.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n * m)        | O(n * m)         | n = count, m = pattern length |
| Python   | O(n * m)        | O(n * m)         | n = count, m = pattern length |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
