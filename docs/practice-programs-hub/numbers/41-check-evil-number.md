---
title: Check Evil Number
---

> **Number Problem 41: Check Evil Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
An evil number has an even number of 1s in its binary representation.
</div>

### Example

- Input: `9`
- Output: `True` (since 9 in binary is 1001, which has two 1s)

---

## Java Solutions
```java
// Evil number check
String bin = Integer.toBinaryString(n);
long count = bin.chars().filter(ch -> ch == '1').count();
boolean isEvil = (count % 2 == 0);
```

## Python Solutions
```python
# Evil number check
count = bin(n).count('1')
is_evil = (count % 2 == 0)
``` 

---

## 🔍 Explanation
- An evil number has an even number of 1s in its binary representation.
- Count the 1s in the binary form and check if even.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(1)             | d = number of bits |
| Python   | O(d)            | O(1)             | d = number of bits |

---

## ⚠️ Interview Tips / Notes
- Discuss bitwise operations and binary representation.
- Know the difference between evil and odious numbers.

---

## 🏷 Tags
`numbers`, `python`, `java`, `evil`, `easy`, `interview`, `bitwise`

