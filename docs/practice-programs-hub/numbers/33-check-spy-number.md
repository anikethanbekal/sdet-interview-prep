---
title: Check Spy Number
---

> **Number Problem 33: Check Spy Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
Check if a number is a spy number (sum of its digits equals the product of its digits).
</div>

### Example

- Input: `1124`
- Output: `True` (since 1+1+2+4 = 8 and 1×1×2×4 = 8)

---

## Java Solutions
```java
// Spy number check
int sum = 0, prod = 1, temp = n;
while (temp != 0) {
    int d = temp % 10;
    sum += d;
    prod *= d;
    temp /= 10;
}
boolean isSpy = (sum == prod);
```

## Python Solutions
```python
# Spy number check
sum_ = 0
prod = 1
temp = n
while temp != 0:
    d = temp % 10
    sum_ += d
    prod *= d
    temp //= 10
is_spy = (sum_ == prod)
``` 

---

## 🔍 Explanation
- A spy number has equal sum and product of its digits.
- Extract digits, compute both, and compare.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(1)             | d = number of digits |
| Python   | O(d)            | O(1)             | d = number of digits |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases (zero digits, single digit numbers).
- Spy numbers are rare; know a few examples (1124, 123, ...).

---

## 🏷 Tags
`numbers`, `python`, `java`, `spy`, `easy`, `interview`, `digit-manipulation`

