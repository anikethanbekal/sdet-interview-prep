---
title: Extract domain name from URL
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

# 🧠 Problem: Extract domain name from URL

> **Category**: Regex Pattern Matching  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Extract domain name from URL.

---

## ☕ Java Solution

```java
// 1. Using regex
import java.util.regex.*;
public static String extractDomain(String url) {
    Matcher m = Pattern.compile("https?://([^/]+)/?").matcher(url);
    if (m.find()) return m.group(1);
    return null;
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using re and urlparse
import re
from urllib.parse import urlparse
def extract_domain(url):
    parsed = urlparse(url)
    if parsed.netloc:
        return parsed.netloc
    m = re.match(r'https?://([^/]+)/?', url)
    return m.group(1) if m else None
```

---

## 🔍 Explanation

- Use regex or urlparse to extract the domain part from a URL.
- Handles both http and https.

**Edge Cases:**
- No protocol: may not match.
- Subdomains and ports are included in netloc.
- Malformed URLs return None/null.

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
