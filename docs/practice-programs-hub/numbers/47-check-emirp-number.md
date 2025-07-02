---
title: Check Emirp Number
---

> **Number Problem 47: Check Emirp Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
An emirp number is a prime number that results in a different prime when its digits are reversed.
</div>

### Example

- Input: `13`
- Output: `True` (since 13 and 31 are both prime)

---

## Java Solutions
```java
// Emirp number check
boolean isPrime(int x) {
    if (x < 2) return false;
    for (int i = 2; i <= Math.sqrt(x); i++)
        if (x % i == 0) return false;
    return true;
}
boolean isEmirp(int n) {
    int rev = 0, temp = n;
    while (temp != 0) {
        rev = rev * 10 + temp % 10;
        temp /= 10;
    }
    return isPrime(n) && isPrime(rev) && n != rev;
}
```

## Python Solutions
```python
# Emirp number check
def is_prime(x):
    if x < 2:
        return False
    for i in range(2, int(x ** 0.5) + 1):
        if x % i == 0:
            return False
    return True

def is_emirp(n):
    rev = int(str(n)[::-1])
    return is_prime(n) and is_prime(rev) and n != rev
``` 

---

## 🔍 Explanation
- An emirp is a prime that becomes a different prime when its digits are reversed.
- Check primality of n and its reverse, and ensure they are not equal.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d + p)        | O(1)             | d = digits, p = primality checks |
| Python   | O(d + p)        | O(1)             | d = digits, p = primality checks |

---

## ⚠️ Interview Tips / Notes
- Know a few emirp numbers (13, 17, 31, 37, ...).
- Discuss difference from palindromic primes.

---

## 🏷 Tags
`numbers`, `python`, `java`, `emirp`, `medium`, `interview`, `reverse`

