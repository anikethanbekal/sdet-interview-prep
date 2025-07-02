---
title: Check Pronic Number
---

> **Number Problem 37: Check Pronic Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
A pronic number is the product of two consecutive integers, i.e., n = x * (x + 1).
</div>

### Example

- Input: `12`
- Output: `True` (since 3 * 4 = 12)

---

## Java Solutions
```java
// Pronic number check
boolean isPronic = false;
for (int i = 0; i <= n; i++) {
    if (i * (i + 1) == n) {
        isPronic = true;
        break;
    }
}
```

## Python Solutions
```python
# Pronic number check
is_pronic = False
for i in range(n + 1):
    if i * (i + 1) == n:
        is_pronic = True
        break
``` 

---

## 🔍 Explanation
- A pronic number is the product of two consecutive integers.
- Check all i such that i * (i + 1) == n.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(√n)           | O(1)             | Try all i up to √n |
| Python   | O(√n)           | O(1)             | Try all i up to √n |

---

## ⚠️ Interview Tips / Notes
- Pronic numbers are also called oblong or rectangular numbers.
- Know a few examples (0, 2, 6, 12, 20, ...).

---

## 🏷 Tags
`numbers`, `python`, `java`, `pronic`, `easy`, `interview`, `consecutive`

