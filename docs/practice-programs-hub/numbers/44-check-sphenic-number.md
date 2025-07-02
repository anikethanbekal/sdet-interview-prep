---
title: Check Sphenic Number
---

> **Number Problem 44: Check Sphenic Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
A sphenic number is a positive integer that is the product of exactly three distinct prime numbers.
</div>

### Example

- Input: `30`
- Output: `True` (since 30 = 2 × 3 × 5)

---

## Java Solutions
```java
// Sphenic number check
int count = 0, temp = n;
for (int i = 2; i <= temp && count <= 3; i++) {
    if (temp % i == 0) {
        int c = 0;
        while (temp % i == 0) {
            temp /= i;
            c++;
        }
        if (c > 1) break;
        count++;
    }
}
boolean isSphenic = (count == 3 && temp == 1);
```

## Python Solutions
```python
# Sphenic number check
def is_sphenic(n):
    count = 0
    temp = n
    i = 2
    while i <= temp and count <= 3:
        if temp % i == 0:
            c = 0
            while temp % i == 0:
                temp //= i
                c += 1
            if c > 1:
                break
            count += 1
        i += 1
    return count == 3 and temp == 1
``` 

---

## 🔍 Explanation
- A sphenic number is the product of exactly three distinct primes.
- Factorize n and count distinct prime factors.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(√n)           | O(1)             | Trial division |
| Python   | O(√n)           | O(1)             | Trial division |

---

## ⚠️ Interview Tips / Notes
- Discuss prime factorization and uniqueness.
- Know a few sphenic numbers (30, 42, 66, ...).

---

## 🏷 Tags
`numbers`, `python`, `java`, `sphenic`, `medium`, `interview`, `prime-factors`

