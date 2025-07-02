---
title: Check Perfect Number
---

> **Number Problem 28: Check Perfect Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
Check if a number is a perfect number (sum of its proper divisors equals the number itself).
</div>

### Example

- Input: `28`
- Output: `True` (since 1 + 2 + 4 + 7 + 14 = 28)

---

## Java Solutions
```java
// Perfect number check
int sum = 0;
for (int i = 1; i <= n / 2; i++) {
    if (n % i == 0) sum += i;
}
boolean isPerfect = (sum == n);
```

## Python Solutions
```python
# Perfect number check
sum_ = 0
for i in range(1, n // 2 + 1):
    if n % i == 0:
        sum_ += i
is_perfect = (sum_ == n)
``` 

---

## 🔍 Explanation
- Sum all proper divisors (excluding the number itself) and compare to the number.
- Only need to check up to n/2 for divisors.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | n = input number |
| Python   | O(n)            | O(1)             | n = input number |

---

## ⚠️ Interview Tips / Notes
- Discuss known perfect numbers (6, 28, 496, ...).
- Efficient algorithms exist for large n, but brute force is common in interviews.

---

## 🏷 Tags
`numbers`, `python`, `java`, `perfect`, `easy`, `interview`, `divisors`

