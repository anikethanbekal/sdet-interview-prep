---
title: Check Niven Number
---

> **Number Problem 36: Check Niven Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
A Niven (Harshad) number is divisible by the sum of its digits.
</div>

### Example

- Input: `18`
- Output: `True` (since 1 + 8 = 9, and 18 % 9 == 0)

---

## Java Solutions
```java
// Niven number check
int sum = 0, temp = n;
while (temp != 0) {
    sum += temp % 10;
    temp /= 10;
}
boolean isNiven = (n % sum == 0);
```

## Python Solutions
```python
# Niven number check
sum_ = sum(int(d) for d in str(n))
is_niven = (n % sum_ == 0)
``` 

---

## 🔍 Explanation
- A Niven (Harshad) number is divisible by the sum of its digits.
- Calculate the digit sum, then check divisibility.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(1)             | d = number of digits |
| Python   | O(d)            | O(1)             | d = number of digits |

---

## ⚠️ Interview Tips / Notes
- Niven and Harshad numbers are the same concept.
- Handle negative numbers if required.

---

## 🏷 Tags
`numbers`, `python`, `java`, `niven`, `harshad`, `easy`, `interview`, `digit-manipulation`

