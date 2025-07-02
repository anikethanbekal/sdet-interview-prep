---
title: Check Twisted Prime
---

> **Number Problem 48: Check Twisted Prime**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
A twisted prime is a prime number whose reverse is also a prime number (same as emirp, but may include palindromic primes).
</div>

### Example

- Input: `13`
- Output: `True` (since 13 and 31 are both prime)

---

## Java Solutions
```java
// Twisted prime check
boolean isPrime(int x) {
    if (x < 2) return false;
    for (int i = 2; i <= Math.sqrt(x); i++)
        if (x % i == 0) return false;
    return true;
}
boolean isTwistedPrime(int n) {
    int rev = 0, temp = n;
    while (temp != 0) {
        rev = rev * 10 + temp % 10;
        temp /= 10;
    }
    return isPrime(n) && isPrime(rev);
}
```

## Python Solutions
```python
# Twisted prime check
def is_prime(x):
    if x < 2:
        return False
    for i in range(2, int(x ** 0.5) + 1):
        if x % i == 0:
            return False
    return True

def is_twisted_prime(n):
    rev = int(str(n)[::-1])
    return is_prime(n) and is_prime(rev)
``` 

---

## 🔍 Explanation
- A twisted prime is a prime whose reverse is also a prime (may include palindromic primes).
- Check primality of n and its reverse.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d + p)        | O(1)             | d = digits, p = primality checks |
| Python   | O(d + p)        | O(1)             | d = digits, p = primality checks |

---

## ⚠️ Interview Tips / Notes
- Discuss difference between twisted, emirp, and palindromic primes.
- Know a few twisted primes (13, 17, 31, 37, 101, ...).

---

## 🏷 Tags
`numbers`, `python`, `java`, `twisted-prime`, `medium`, `interview`, `reverse`

