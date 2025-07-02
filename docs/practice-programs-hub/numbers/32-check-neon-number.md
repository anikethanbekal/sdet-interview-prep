---
title: Check Neon Number
---

> **Number Problem 32: Check Neon Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
Check if a number is a neon number (sum of digits of its square is equal to the number itself).
</div>

### Example

- Input: `9`
- Output: `True` (since 9² = 81, 8 + 1 = 9)

---

## Java Solutions
```java
// Neon check
int sq = n * n, sum = 0;
while (sq != 0) {
    sum += sq % 10;
    sq /= 10;
}
boolean isNeon = (sum == n);
```

## Python Solutions
```python
# Neon check
sq = n * n
sum_ = sum(int(d) for d in str(sq))
is_neon = (sum_ == n)
``` 

---
## 🔍 Explanation
- A neon number's square's digit sum equals the number itself.
- Calculate n², sum its digits, and compare to n.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(1)             | d = digits in n² |
| Python   | O(d)            | O(1)             | d = digits in n² |

---

## ⚠️ Interview Tips / Notes
- Only a few neon numbers exist (0, 1, 9).
- Discuss digit extraction methods.

---

## 🏷 Tags
`numbers`, `python`, `java`, `neon`, `easy`, `interview`, `digit-sum`
