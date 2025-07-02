---
title: Check Armstrong Number
---

> **Number Problem 27: Check Armstrong Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
Check if a number is an Armstrong number (sum of its own digits each raised to the power of the number of digits equals the number itself).
</div>

### Example

- Input: `153`
- Output: `True` (since 1³ + 5³ + 3³ = 153)

---

## Java Solutions
```java
// Armstrong check
int num = n, sum = 0, digits = 0, temp = n;
while (temp != 0) {
    digits++;
    temp /= 10;
}
temp = n;
while (temp != 0) {
    int d = temp % 10;
    sum += Math.pow(d, digits);
    temp /= 10;
}
boolean isArmstrong = (sum == n);
```

## Python Solutions
```python
# Armstrong check
digits = len(str(n))
sum_ = 0
temp = n
while temp != 0:
    d = temp % 10
    sum_ += d ** digits
    temp //= 10
is_armstrong = (sum_ == n)
``` 
---

## 🔍 Explanation
- Raise each digit to the power of the number of digits and sum.
- Can also use string conversion for digit extraction.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(1)             | d = number of digits |
| Python   | O(d)            | O(1)             | d = number of digits |

---

## ⚠️ Interview Tips / Notes
- Discuss generalization for n-digit numbers.
- Handle negative numbers if required.

---

## 🏷 Tags
`numbers`, `python`, `java`, `armstrong`, `easy`, `interview`, `digit-manipulation`

