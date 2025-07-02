---
title: Check Circular Prime
---

> **Number Problem 46: Check Circular Prime**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
A circular prime is a prime number that remains prime under all rotations of its digits.
</div>

### Example

- Input: `197`
- Output: `True` (since 197, 971, and 719 are all prime)

---

## Java Solutions
```java
// Circular prime check
boolean isPrime(int x) {
    if (x < 2) return false;
    for (int i = 2; i <= Math.sqrt(x); i++)
        if (x % i == 0) return false;
    return true;
}
boolean isCircularPrime(int n) {
    String s = Integer.toString(n);
    for (int i = 0; i < s.length(); i++) {
        if (!isPrime(Integer.parseInt(s))) return false;
        s = s.substring(1) + s.charAt(0);
    }
    return true;
}
```

## Python Solutions
```python
# Circular prime check
def is_prime(x):
    if x < 2:
        return False
    for i in range(2, int(x ** 0.5) + 1):
        if x % i == 0:
            return False
    return True

def is_circular_prime(n):
    s = str(n)
    for _ in range(len(s)):
        if not is_prime(int(s)):
            return False
        s = s[1:] + s[0]
    return True
``` 

---

## 🔍 Explanation
- A circular prime remains prime under all rotations of its digits.
- Rotate the digits and check primality for each rotation.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d·p)          | O(d)             | d = digits, p = primality checks |
| Python   | O(d·p)          | O(d)             | d = digits, p = primality checks |

---

## ⚠️ Interview Tips / Notes
- Know a few circular primes (197, 1193, ...).
- Discuss string manipulation and primality testing.

---

## 🏷 Tags
`numbers`, `python`, `java`, `circular-prime`, `medium`, `interview`, `rotation`

