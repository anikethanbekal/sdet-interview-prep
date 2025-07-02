---
title: Check if a string is a valid date (e.g., dd-mm-yyyy)
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

# 🧠 Problem: Check if a string is a valid date (e.g., dd-mm-yyyy)

> **Category**: Regex Pattern Matching  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Check if a string is a valid date (e.g., dd-mm-yyyy).

---

## ☕ Java Solution

```java
// 1. Using regex and date parsing
import java.util.regex.*;
import java.text.*;
public static boolean isValidDate(String s) {
    if (!s.matches("\\d{2}-\\d{2}-\\d{4}")) return false;
    SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
    sdf.setLenient(false);
    try {
        sdf.parse(s);
        return true;
    } catch (ParseException e) {
        return false;
    }
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Using regex and datetime
import re
from datetime import datetime
def is_valid_date(s):
    if not re.fullmatch(r"\d{2}-\d{2}-\d{4}", s):
        return False
    try:
        datetime.strptime(s, "%d-%m-%Y")
        return True
    except ValueError:
        return False
```

---

## 🔍 Explanation

- Use regex to check the format is dd-mm-yyyy.
- Use date parsing to ensure the date is valid (e.g., not 31-02-2020).

**Edge Cases:**
- Invalid days/months (e.g., 32-01-2020, 29-02-2019).
- Non-numeric input.
- Empty string returns false.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(1)            | O(1)             | Parsing fixed-length string |
| Python   | O(1)            | O(1)             | Parsing fixed-length string |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
