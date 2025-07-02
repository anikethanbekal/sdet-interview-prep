---
title: Encode and decode strings (like in URL shorteners)
tags:
  - java
  - python
  - string
  - coding
categories:
  - Programming
  - Interview
difficulty: varies
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: string
date: 2025-07-01
author: Anikethan Bekal
intro: |
  This is a string problem often encountered in interviews. It tests understanding of fundamental concepts such as iteration, pattern matching, or algorithmic design depending on the problem.

---

# 🧠 Problem: Encode and decode strings (like in URL shorteners)

> **Category**: String Algorithms  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Encode and decode strings (like in URL shorteners).

---

## ☕ Java Solution

```java
// 1. Simple Base62 encoding/decoding for integers (common in URL shorteners)
public class Codec {
    private static final String BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    public String encode(int num) {
        if (num == 0) return "0";
        StringBuilder sb = new StringBuilder();
        while (num > 0) {
            sb.append(BASE62.charAt(num % 62));
            num /= 62;
        }
        return sb.reverse().toString();
    }
    public int decode(String s) {
        int num = 0;
        for (char c : s.toCharArray()) {
            num = num * 62 + BASE62.indexOf(c);
        }
        return num;
    }
}

// 2. Encode/decode with a map (for arbitrary strings)
public class StringCodec {
    private Map<String, String> map = new HashMap<>();
    private Map<String, String> rev = new HashMap<>();
    private int id = 0;
    public String encode(String longUrl) {
        String shortUrl = "http://short.url/" + id++;
        map.put(shortUrl, longUrl);
        rev.put(longUrl, shortUrl);
        return shortUrl;
    }
    public String decode(String shortUrl) {
        return map.get(shortUrl);
    }
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Simple Base62 encoding/decoding for integers
BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
def encode(num):
    if num == 0:
        return "0"
    s = []
    while num > 0:
        s.append(BASE62[num % 62])
        num //= 62
    return ''.join(reversed(s))

def decode(s):
    num = 0
    for c in s:
        num = num * 62 + BASE62.index(c)
    return num

# 2. Encode/decode with a map (for arbitrary strings)
class Codec:
    def __init__(self):
        self.map = {}
        self.rev = {}
        self.id = 0
    def encode(self, longUrl):
        shortUrl = f"http://short.url/{self.id}"
        self.map[shortUrl] = longUrl
        self.rev[longUrl] = shortUrl
        self.id += 1
        return shortUrl
    def decode(self, shortUrl):
        return self.map.get(shortUrl)
```

---

## 🔍 Explanation

- **Base62**: Used to encode integers to a short string (common for numeric IDs in URL shorteners).
- **Map-based**: For arbitrary strings, use a map to store the mapping between original and shortened URLs.
- In real systems, collision handling and persistence are needed.

**Edge Cases:**
- Encoding/decoding 0.
- Decoding unknown short URLs returns null/None.
- Repeated encoding of the same URL.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(log n)        | O(1)             | For Base62; n = integer value |
| Python   | O(log n)        | O(1)             | For Base62; n = integer value |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
