---
title: Generate all prime numbers up to n
tags:
  - java
  - python
  - numbers
  - medium
  - sieve
categories:
  - Programming
  - Coding
difficulty: medium
background: bg-[#e0f2fe]
badge_color: text-blue-800 bg-blue-100
topic: number-manipulation
date: 2025-07-01
author: Anikethan Bekal
intro: |
   Generating all primes up to n is a classic sieve and brute-force problem, testing efficiency and optimization.
---

# 🧠 Problem: Generate all prime numbers up to n

Given an integer n, return a list of all prime numbers less than or equal to n.

**Category**: Numbers  
**Difficulty**: Medium  
**Tags**: numbers, primes, sieve, brute-force

---

## ✅ Requirements
- **Input**: Integer n (n >= 2)
- **Output**: List of primes <= n
- **Constraints**: n >= 2

---

## 🧪 Example(s)
```text
Input: 10
Output: [2, 3, 5, 7]
```

---

## 🧪 Test Cases
```text
Input: 2   => Output: [2]
Input: 20  => Output: [2, 3, 5, 7, 11, 13, 17, 19]
Input: 1   => Output: [] (invalid, n >= 2)
Input: 30  => Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```

---

## ☕ Java Solution
```java
// Method 1: Sieve of Eratosthenes
public static List<Integer> sieve(int n) {
    boolean[] isPrime = new boolean[n + 1];
    Arrays.fill(isPrime, true);
    isPrime[0] = isPrime[1] = false;
    for (int i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (int j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    List<Integer> primes = new ArrayList<>();
    for (int i = 2; i <= n; i++) {
        if (isPrime[i]) primes.add(i);
    }
    return primes;
}

// Method 2: Brute Force
public static List<Integer> bruteForcePrimes(int n) {
    List<Integer> primes = new ArrayList<>();
    for (int i = 2; i <= n; i++) {
        boolean isPrime = true;
        for (int j = 2; j * j <= i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.add(i);
    }
    return primes;
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Sieve of Eratosthenes
def sieve(n):
    is_prime = [True] * (n + 1)
    is_prime[0:2] = [False, False]
    for i in range(2, int(n ** 0.5) + 1):
        if is_prime[i]:
            for j in range(i * i, n + 1, i):
                is_prime[j] = False
    return [i for i, prime in enumerate(is_prime) if prime]

# Method 2: Brute Force
def brute_force_primes(n):
    primes = []
    for i in range(2, n + 1):
        is_prime = True
        for j in range(2, int(i ** 0.5) + 1):
            if i % j == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(i)
    return primes
```

---

## 🔍 Explanation
- Sieve: Efficiently marks non-primes.
- Brute force: Checks each number for primality.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n log log n)/O(n^2) | O(n)/O(1) | Sieve/Brute |
| Python   | O(n log log n)/O(n^2) | O(n)/O(1) | Sieve/Brute |

---

## ⚠️ Interview Tips / Notes
- Discuss both methods and their trade-offs.
- Sieve is preferred for large n.

---

## 🏷 Tags
`numbers`, `python`, `java`, `primes`, `medium`, `interview`, `sieve`, `brute-force`
--- 