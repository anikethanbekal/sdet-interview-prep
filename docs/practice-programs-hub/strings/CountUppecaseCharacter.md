---
title: Count Uppercase Characters in Java and Python
tags:
  - java
  - python
  - string
  - easy
  - language-syntax
categories:
  - Programming
  - Coding
difficulty: easy
background: bg-[#d1fae5]
badge_color: text-green-800 bg-green-100
topic: string-manipulation
date: 2025-06-29
author: Anikethan Bekal
intro: |
   This is a basic string manipulation problem where the goal is to count the number of uppercase characters in a given string.
---

# 🧠 Problem: Count Uppercase Characters

Write a function that takes a string as input and returns the number of uppercase characters in the string.

**Category**: Strings  
**Difficulty**: Easy  
**Tags**: string, brute-force, optimized

---

## ✅ Requirements

- **Input**: 
  - A non-empty string `str` (e.g., `"Hello World"`)
- **Output**: The count of uppercase characters in `str` (e.g., `2`)
- **Constraints**:
  - Case-sensitive comparison.
  - Time complexity should be linear `O(n)`.

---

## 🧪 Example(s)

```text
Input:  
  str = "Hello World"
Output: 2
```

---

## ☕ Java Solution

```java
 // m1 using char
public void chars(String str) {
	int count = 0;
	for (int i = 0; i < str.length(); i++) {
		if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') {
			count++;
		}
	}
	System.out.println(count);
}

// m2
public void method(String str) {
	int count = 0;
	for (int i = 0; i < str.length() - 1; i++) {
		if (Character.isUpperCase(str.charAt(i))) {
			count++;
		}
	}
	System.out.println(count);
}

// m3
public void chars3(String str) {
	int count = 0;
	for (int i = 0; i < str.length() - 1; i++) {
		if (str.charAt(i) >= 65 && str.charAt(i) <= 90) {
			count++;
		}
	}
	System.out.println(count);
}

public static void main(String[] args) {
	String str = "Hello World";
	count.chars(str);
	count.method(str);
	count.chars3(str);
}
```

---

## 🔵🟡 Python Solution

```python
def chars():
  str = "Hello World"
  count = 0
  for i in range(len(str)):
    if 'A' <= str[i] <= 'Z':
      count += 1
  print(f"Number of uppercase characters in '{str}': {count}")

def chars_method():
  str = "Hello World"
  count = 0
  for i in range(len(str)):
    if str[i].isupper():
      count += 1
  print(f"Number of uppercase characters in '{str}': {count}")

def in_method():
  s = "Hello World"
  count = sum(1 for s in s if s.isupper())
  print(f"Number of uppercase characters in '{s}': {count}")

if __name__ == "__main__":
  chars()
  chars_method()
  in_method()
```

---

## 🔍 Explanation

- **Java**:
- Iterates through each character in the string.
  - Uses `Character.isUpperCase()` to check if the character is uppercase.
  - Increments a counter for each uppercase character.
- **Python**:
  - Uses a generator expression with `isupper()` to count uppercase characters.
  - Efficient and concise.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes                          |
|----------|-----------------|------------------|--------------------------------|
| Java     | O(n)            | O(1)             | Iterates through the string    |
| Python   | O(n)            | O(1)             | Uses a generator expression    |

---

## ⚠️ Interview Tips / Notes

- Be prepared to count:
  - Uppercase and lowercase characters separately.
  - Characters with **Unicode**, emojis, or special characters (complex case).
- Avoid using built-in functions if interviewers ask for manual logic:
  - **Java Manual Approach**: Use ASCII values (`'A' <= char <= 'Z'`).
  - **Python Manual Approach**: Use ASCII values or loops.

---

## 🏷 Tags

`string`, `python`, `java`, `uppercase`, `easy`, `interview`, `syntax`, `language-syntax`

---