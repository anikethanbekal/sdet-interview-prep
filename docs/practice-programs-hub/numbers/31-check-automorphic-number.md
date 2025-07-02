---
title: Check Automorphic Number
---

> **Number Problem 31: Check Automorphic Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
Check if a number is an automorphic number (its square ends with the number itself).
</div>

### Example

- Input: `76`
- Output: `True` (since 76² = 5776 ends with 76)

---

## Java Solutions
```java
// Automorphic check
int sq = n * n;
String nStr = Integer.toString(n);
String sqStr = Integer.toString(sq);
boolean isAutomorphic = sqStr.endsWith(nStr);
```

## Python Solutions
```python
# Automorphic check
sq = n * n
is_automorphic = str(sq).endswith(str(n))
``` 

---

## 🔍 Explanation
- An automorphic number's square ends with the number itself.
- Convert both to strings and check the suffix.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(d)             | d = number of digits |
| Python   | O(d)            | O(d)             | d = number of digits |

---

## ⚠️ Interview Tips / Notes
- Discuss string vs. numeric approaches.
- Automorphic numbers are rare; know a few examples (5, 6, 25, 76, ...).

---

## 🏷 Tags
`numbers`, `python`, `java`, `automorphic`, `easy`, `interview`, `suffix`

