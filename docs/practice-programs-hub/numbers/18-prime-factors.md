---
title: Find all prime factors of a number
tags:
  - java
  - python
  - numbers
  - medium
  - factorization
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
   Prime factorization is a classic number theory problem, testing loops, divisibility, and optimization.
---

# 🧠 Problem: Find all prime factors of a number

Given an integer n, return a list of its prime factors.

**Category**: Numbers  
**Difficulty**: Medium  
**Tags**: numbers, prime-factors, factorization

---

## ✅ Requirements
- **Input**: Integer n (n > 1)
- **Output**: List of prime factors
- **Constraints**: n > 1

---

## 🧪 Example(s)
```text
Input: 60
Output: [2, 2, 3, 5]
```

---

## 🧪 Test Cases
```text
Input: 13   => Output: [13]
Input: 100  => Output: [2, 2, 5, 5]
Input: 1    => Output: [] (invalid, n > 1)
Input: 84   => Output: [2, 2, 3, 7]
```

---

## ☕ Java Solution
```java
// Method 1: Trial Division
public static List<Integer> primeFactors(int n) {
    List<Integer> factors = new ArrayList<>();
    for (int i = 2; i * i <= n; i++) {
        while (n % i == 0) {
            factors.add(i);
            n /= i;
        }
    }
    if (n > 1) factors.add(n);
    return factors;
}

// Method 2: Using Sieve (for multiple queries)
// Precompute primes with sieve, then use for factorization
// See: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
```

## 🔵🟡 Python Solution
```python
# Method 1: Trial Division
def prime_factors(n):
    factors = []
    i = 2
    while i * i <= n:
        while n % i == 0:
            factors.append(i)
            n //= i
        i += 1
    if n > 1:
        factors.append(n)
    return factors

# Method 2: Using Sieve (for multiple queries)
# Precompute primes with sieve, then use for factorization
# See: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
```

---

## 🔍 Explanation
- Trial division: Divide by each integer up to sqrt(n).
- Sieve: Useful for repeated queries.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(√n)           | O(log n)         | Trial division |
| Python   | O(√n)           | O(log n)         | Trial division |

---

## ⚠️ Interview Tips / Notes
- Discuss both methods and their use cases.
- Sieve is efficient for many queries.

---

## 🏷 Tags
`numbers`, `python`, `java`, `prime-factors`, `medium`, `interview`, `factorization`
--- 