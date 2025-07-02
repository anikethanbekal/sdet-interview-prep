---
title: Check Lucky Number
---

> **Number Problem 43: Check Lucky Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
A lucky number is a number that survives a certain elimination process (the sieve of Josephus). For simplicity, check if a number is lucky using the sieve method.
</div>

### Example

- Input: `19`
- Output: `True` (19 is a lucky number)

---

## Java Solutions
```java
// Lucky number check (recursive)
boolean isLucky(int n, int counter) {
    if (counter > n) return true;
    if (n % counter == 0) return false;
    return isLucky(n - n / counter, counter + 1);
}
// Usage: isLucky(n, 2)
```

## Python Solutions
```python
# Lucky number check (recursive)
def is_lucky(n, counter=2):
    if counter > n:
        return True
    if n % counter == 0:
        return False
    return is_lucky(n - n // counter, counter + 1)
# Usage: is_lucky(n)
``` 

---

## 🔍 Explanation
- A lucky number survives a sieve process (Josephus sieve).
- Recursively eliminate every k-th number; if n survives, it's lucky.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(log n)        | O(log n)         | Recursive depth |
| Python   | O(log n)        | O(log n)         | Recursive depth |

---

## ⚠️ Interview Tips / Notes
- Be ready to explain the sieve process.
- Lucky numbers are a fun recursion/interview topic.

---

## 🏷 Tags
`numbers`, `python`, `java`, `lucky`, `easy`, `interview`, `recursion`

