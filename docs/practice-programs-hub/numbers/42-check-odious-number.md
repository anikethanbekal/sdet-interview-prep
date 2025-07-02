---
title: Check Odious Number
---

> **Number Problem 42: Check Odious Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
An odious number has an odd number of 1s in its binary representation.
</div>

### Example

- Input: `7`
- Output: `True` (since 7 in binary is 111, which has three 1s)

---

## Java Solutions
```java
// Odious number check
String bin = Integer.toBinaryString(n);
long count = bin.chars().filter(ch -> ch == '1').count();
boolean isOdious = (count % 2 == 1);
```

## Python Solutions
```python
# Odious number check
count = bin(n).count('1')
is_odious = (count % 2 == 1)
``` 

---

## 🔍 Explanation
- An odious number has an odd number of 1s in its binary representation.
- Count the 1s in the binary form and check if odd.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(1)             | d = number of bits |
| Python   | O(d)            | O(1)             | d = number of bits |

---

## ⚠️ Interview Tips / Notes
- Discuss bitwise operations and binary representation.
- Know the difference between odious and evil numbers.

---

## 🏷 Tags
`numbers`, `python`, `java`, `odious`, `easy`, `interview`, `bitwise`

