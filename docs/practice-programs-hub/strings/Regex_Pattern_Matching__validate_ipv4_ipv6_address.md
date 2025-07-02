---
title: Validate IPv4/IPv6 address
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

# 🧠 Problem: Validate IPv4/IPv6 address

> **Category**: Regex Pattern Matching  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Validate IPv4/IPv6 address.

---

## ☕ Java Solution

```java
// 1. Using regex for IPv4
public static boolean isValidIPv4(String s) {
    return s.matches("^(25[0-5]|2[0-4]\\d|1?\\d?\\d)(\\.(25[0-5]|2[0-4]\\d|1?\\d?\\d)){3}$");
}

// 2. Using regex for IPv6
public static boolean isValidIPv6(String s) {
    return s.matches("^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$");
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using ipaddress module
def is_valid_ipv4(s):
    import ipaddress
    try:
        ipaddress.IPv4Address(s)
        return True
    except ValueError:
        return False

def is_valid_ipv6(s):
    import ipaddress
    try:
        ipaddress.IPv6Address(s)
        return True
    except ValueError:
        return False
```

---

## 🔍 Explanation

- Use regex to match IPv4/IPv6 patterns (Java) or use the ipaddress module (Python).
- Returns true if the string is a valid IP address.

**Edge Cases:**
- Out-of-range numbers (e.g., 256.0.0.1) return false.
- Empty string returns false.
- Extra characters or missing sections return false.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(1)            | O(1)             | Fixed-length string |
| Python   | O(1)            | O(1)             | Fixed-length string |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
