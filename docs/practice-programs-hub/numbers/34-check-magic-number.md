---
title: Check Magic Number
---

> **Number Problem 34: Check Magic Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
A magic number is a number whose repeated sum of digits eventually becomes 1.
</div>

### Example

- Input: `19`
- Output: `True` (since 1+9=10, 1+0=1)

---

## Java Solutions
```java
// Magic number check
int temp = n;
while (temp > 9) {
    int sum = 0;
    while (temp != 0) {
        sum += temp % 10;
        temp /= 10;
    }
    temp = sum;
}
boolean isMagic = (temp == 1);
```

## Python Solutions
```python
# Magic number check
temp = n
while temp > 9:
    sum_ = 0
    while temp != 0:
        sum_ += temp % 10
        temp //= 10
    temp = sum_
is_magic = (temp == 1)
``` 

---

## 🔍 Explanation
- A magic number reduces to 1 by repeatedly summing its digits.
- Similar to digital root calculation.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d^2)          | O(1)             | d = number of digits |
| Python   | O(d^2)          | O(1)             | d = number of digits |

---

## ⚠️ Interview Tips / Notes
- Discuss digital root and its properties.
- Magic numbers are a fun interview question for recursion/loops.

---

## 🏷 Tags
`numbers`, `python`, `java`, `magic`, `easy`, `interview`, `digital-root`

