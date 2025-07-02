---
title: Check Abundant Number
---

> **Number Problem 29: Check Abundant Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
Check if a number is an abundant number (sum of its proper divisors is greater than the number itself).
</div>

### Example

- Input: `12`
- Output: `True` (since 1 + 2 + 3 + 4 + 6 = 16 > 12)

---
## Java Solutions
```java
// Abundant number check
int sum = 0;
for (int i = 1; i <= n / 2; i++) {
    if (n % i == 0) sum += i;
}
boolean isAbundant = (sum > n);
```

## Python Solutions
```python
# Abundant number check
sum_ = 0
for i in range(1, n // 2 + 1):
    if n % i == 0:
        sum_ += i
is_abundant = (sum_ > n)
``` 

---
## 🔍 Explanation
- Sum all proper divisors (excluding the number itself) and check if the sum is greater than the number.
- Similar to perfect number, but sum > n.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | n = input number |
| Python   | O(n)            | O(1)             | n = input number |

---

## ⚠️ Interview Tips / Notes
- Discuss the difference between perfect, deficient, and abundant numbers.
- Abundant numbers are more common than perfect numbers.

---

## 🏷 Tags
`numbers`, `python`, `java`, `abundant`, `easy`, `interview`, `divisors`

