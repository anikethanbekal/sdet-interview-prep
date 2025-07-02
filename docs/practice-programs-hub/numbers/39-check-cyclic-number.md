---
title: Check Cyclic Number
---

> **Number Problem 39: Check Cyclic Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
A cyclic number is a number in which cyclic permutations of the digits are successive multiples of the number.
</div>

### Example

- Input: `142857`
- Output: `True` (since 142857 × 2 = 285714, ×3 = 428571, etc., all are cyclic permutations)

---

## Java Solutions
```java
// Cyclic number check (basic)
String nStr = Integer.toString(n);
String concat = nStr + nStr;
boolean isCyclic = true;
for (int i = 2; i <= nStr.length(); i++) {
    int prod = n * i;
    if (!concat.contains(Integer.toString(prod))) {
        isCyclic = false;
        break;
    }
}
```

## Python Solutions
```python
# Cyclic number check (basic)
n_str = str(n)
concat = n_str + n_str
is_cyclic = True
for i in range(2, len(n_str) + 1):
    prod = n * i
    if str(prod) not in concat:
        is_cyclic = False
        break
``` 

---

## 🔍 Explanation
- A cyclic number's cyclic permutations are successive multiples of the number.
- Concatenate the number to itself and check for all rotations.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d^2)          | O(d)             | d = number of digits |
| Python   | O(d^2)          | O(d)             | d = number of digits |

---

## ⚠️ Interview Tips / Notes
- 142857 is the most famous cyclic number.
- Discuss string manipulation and rotation logic.

---

## 🏷 Tags
`numbers`, `python`, `java`, `cyclic`, `medium`, `interview`, `rotation`

