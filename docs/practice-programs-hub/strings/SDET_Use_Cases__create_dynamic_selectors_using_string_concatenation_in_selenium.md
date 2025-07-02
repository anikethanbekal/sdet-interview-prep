---
title: Create dynamic selectors using string concatenation in Selenium
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

# 🧠 Problem: Create dynamic selectors using string concatenation in Selenium

> **Category**: SDET Use Cases  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Create dynamic selectors using string concatenation in Selenium.

---

## ☕ Java Solution

```java
// 1. Create dynamic XPath selector
public static String dynamicXPath(String base, String value) {
    return String.format("%s[@value='%s']", base, value);
}

// 2. Create dynamic CSS selector
public static String dynamicCss(String base, String value) {
    return String.format("%s[value='%s']", base, value);
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Create dynamic XPath selector
def dynamic_xpath(base, value):
    return f"{base}[@value='{value}']"

# 2. Create dynamic CSS selector
def dynamic_css(base, value):
    return f"{base}[value='{value}']"
```

---

## 🔍 Explanation

- Use string formatting to insert dynamic values into selector templates.
- Works for both XPath and CSS selectors.

**Edge Cases:**
- Special characters in value may need escaping.
- Empty base or value: returns incomplete selector.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(n)             | n = length of selector |
| Python   | O(n)            | O(n)             | n = length of selector |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
