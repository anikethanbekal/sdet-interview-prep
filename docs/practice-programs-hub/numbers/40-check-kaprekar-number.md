---
title: Check Kaprekar Number
---

> **Number Problem 40: Check Kaprekar Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
A Kaprekar number is a number whose square can be split into two parts that add up to the original number.
</div>

### Example

- Input: `45`
- Output: `True` (since 45² = 2025, 20 + 25 = 45)

---

## Java Solutions
```java
// Kaprekar number check
int sq = n * n;
String sqStr = Integer.toString(sq);
int d = Integer.toString(n).length();
String right = sqStr.substring(sqStr.length() - d);
String left = sqStr.substring(0, sqStr.length() - d);
int l = (left.isEmpty()) ? 0 : Integer.parseInt(left);
int r = Integer.parseInt(right);
boolean isKaprekar = (l + r == n);
```

## Python Solutions
```python
# Kaprekar number check
sq = n * n
sq_str = str(sq)
d = len(str(n))
right = int(sq_str[-d:])
left = int(sq_str[:-d]) if sq_str[:-d] else 0
is_kaprekar = (left + right == n)
``` 

---

## 🔍 Explanation
- A Kaprekar number's square can be split into two parts that sum to the original number.
- Convert n² to string, split, and sum the parts.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(d)             | d = digits in n² |
| Python   | O(d)            | O(d)             | d = digits in n² |

---

## ⚠️ Interview Tips / Notes
- Know a few Kaprekar numbers (9, 45, 55, 99, 297, ...).
- Discuss string vs. numeric approaches.

---

## 🏷 Tags
`numbers`, `python`, `java`, `kaprekar`, `easy`, `interview`, `split`

