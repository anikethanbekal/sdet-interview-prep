---
title: Validate API response fields using string assertions
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

# 🧠 Problem: Validate API response fields using string assertions

> **Category**: SDET Use Cases  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Validate API response fields using string assertions.

---

## ☕ Java Solution

```java
// 1. Assert that a response contains a field value
public static boolean assertFieldContains(String response, String field, String expectedValue) {
    return response.contains(field + ":" + expectedValue);
}

// 2. Assert that a response does not contain a field
public static boolean assertFieldAbsent(String response, String field) {
    return !response.contains(field + ":");
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Assert that a response contains a field value
def assert_field_contains(response, field, expected_value):
    return f"{field}:{expected_value}" in response

# 2. Assert that a response does not contain a field
def assert_field_absent(response, field):
    return f"{field}:" not in response
```

---

## 🔍 Explanation

- Use string containment to check for field presence or absence in a response.
- Simple and works for flat string responses; for JSON, parse and check keys/values.

**Edge Cases:**
- Field present but value different: not matched.
- Field substring in another field: may cause false positives.
- For structured data, use a parser.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | n = length of response |
| Python   | O(n)            | O(1)             | n = length of response |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
