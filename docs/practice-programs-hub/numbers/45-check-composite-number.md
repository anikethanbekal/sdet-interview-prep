---
title: Check Composite Number
---

> **Number Problem 45: Check Composite Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
A composite number has more than two positive divisors (not prime and not 1).
</div>

### Example

- Input: `9`
- Output: `True` (since 9 has divisors 1, 3, 9)

---

# Java Solutions
```java
// Composite number check
boolean isComposite = (n > 1);
for (int i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
        isComposite = true;
        break;
    }
}
if (n <= 3) isComposite = false;
```

## Python Solutions
```python
# Composite number check
is_composite = n > 3 and any(n % i == 0 for i in range(2, int(n ** 0.5) + 1))
``` 

---

## 🔍 Explanation
- A composite number has more than two positive divisors (not prime and not 1).
- Check divisibility by any number from 2 to sqrt(n).

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(√n)           | O(1)             | Trial division |
| Python   | O(√n)           | O(1)             | Trial division |

---

## ⚠️ Interview Tips / Notes
- Discuss the difference between prime and composite numbers.
- Handle edge cases (n <= 3).

---

## 🏷 Tags
`numbers`, `python`, `java`, `composite`, `easy`, `interview`, `divisors`

#