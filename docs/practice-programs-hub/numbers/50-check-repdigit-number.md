---
title: Check Repdigit Number
---

> **Number Problem 50: Check Repdigit Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
A repdigit number is a natural number composed of repeated instances of the same digit in a given base.
</div>

### Example

- Input: `7777`
- Output: `True` (all digits are 7)

---

## Java Solutions
```java
// Repdigit number check
String s = Integer.toString(n);
boolean isRepdigit = s.chars().allMatch(ch -> ch == s.charAt(0));
```

## Python Solutions
```python
# Repdigit number check
s = str(n)
is_repdigit = all(ch == s[0] for ch in s)
``` 

---

## 🔍 Explanation
- A repdigit number is composed of repeated instances of the same digit.
- Check if all digits are equal to the first digit.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(1)             | d = number of digits |
| Python   | O(d)            | O(1)             | d = number of digits |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases (single digit, leading zeros).
- Repdigits are a fun property in number theory.

---

## 🏷 Tags
`numbers`, `python`, `java`, `repdigit`, `easy`, `interview`, `digits`

