---
title: Check Happy Number
---

> **Number Problem 35: Check Happy Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
A happy number is a number which eventually reaches 1 when replaced by the sum of the squares of its digits repeatedly.
</div>

### Example

- Input: `19`
- Output: `True` (since 1²+9²=82, 8²+2²=68, 6²+8²=100, 1²+0²+0²=1)

---

## Java Solutions
```java
// Happy number check
Set<Integer> seen = new HashSet<>();
int temp = n;
while (temp != 1 && !seen.contains(temp)) {
    seen.add(temp);
    int sum = 0;
    while (temp != 0) {
        int d = temp % 10;
        sum += d * d;
        temp /= 10;
    }
    temp = sum;
}
boolean isHappy = (temp == 1);
```

## Python Solutions
```python
# Happy number check
seen = set()
temp = n
while temp != 1 and temp not in seen:
    seen.add(temp)
    sum_ = 0
    while temp != 0:
        d = temp % 10
        sum_ += d * d
        temp //= 10
    temp = sum_
is_happy = (temp == 1)
``` 

---

## 🔍 Explanation
- A happy number eventually reaches 1 by repeatedly replacing the number with the sum of the squares of its digits.
- Use a set to detect cycles (non-happy numbers loop forever).

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d·k)          | O(k)             | d = digits, k = steps to 1 or cycle |
| Python   | O(d·k)          | O(k)             | d = digits, k = steps to 1 or cycle |

---

## ⚠️ Interview Tips / Notes
- Discuss cycle detection (Floyd's algorithm) for optimization.
- Know a few happy numbers (1, 7, 10, 13, 19, ...).

---

## 🏷 Tags
`numbers`, `python`, `java`, `happy`, `easy`, `interview`, `cycle-detection`

