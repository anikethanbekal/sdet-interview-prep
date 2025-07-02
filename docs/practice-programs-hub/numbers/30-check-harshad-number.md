---
title: Check Harshad Number
---

> **Number Problem 30: Check Harshad Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
Check if a number is a Harshad number (divisible by the sum of its digits).
</div>

### Example

- Input: `18`
- Output: `True` (since 1 + 8 = 9, and 18 % 9 == 0)

---

## Java Solutions
```java
// Harshad number check
int sum = 0, temp = n;
while (temp != 0) {
    sum += temp % 10;
    temp /= 10;
}
boolean isHarshad = (n % sum == 0);
```

## Python Solutions
```python
# Harshad number check
sum_ = sum(int(d) for d in str(n))
is_harshad = (n % sum_ == 0)
``` 

---

## 🔍 Explanation
- A Harshad (Niven) number is divisible by the sum of its digits.
- Calculate the digit sum, then check divisibility.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(1)             | d = number of digits |
| Python   | O(d)            | O(1)             | d = number of digits |

---

## ⚠️ Interview Tips / Notes
- Discuss the relationship between Harshad and Niven numbers.
- Handle negative numbers if required.

---

## 🏷 Tags
`numbers`, `python`, `java`, `harshad`, `niven`, `easy`, `interview`, `digit-manipulation`

