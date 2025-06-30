---
title: Count occurrence of Characters in Java and Python
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
date: 2025-06-30
author: Anikethan Bekal
intro: |
   This is a basic string manipulation problem where the goal is to count the number of occurrence of characters in a given string.
---

# 🧠 Problem: Count Occurrence of Characters

Write a function that takes a string and character as input and returns the number of occurrences of a specific character in the string.

**Category**: Strings  
**Difficulty**: Easy  
**Tags**: string, brute-force, optimized

---

## ✅ Requirements

- **Input**: 
  - A non-empty string `text` (e.g., `"Code for coders"`) and `search` (e.g., `'o'`).
- **Output**: The count of occurrences of the character in `int` (e.g., `3`).
- **Constraints**:
  - Case-sensitive comparison.
  - Time complexity should be linear `O(n)`.

---

## 🧪 Example(s)

```text
Input:  
  text = "Code for coders";
	search = 'o';
Output: 3
```

---

## ☕ Java Solution

```java
// m1 : using charArray loops
public void charArray(String str, char c) {
	int count = 0;
	for (char ch : str.toCharArray()) {
		if (ch == c) {
			count++;
    }
	}
	System.out.println("Occurrence of " + c + " in " + '"' + str + '"' + " is : " + count);
}

// m2 : using charAt loops
public void charAt(String str, char c) {
	int count = 0;
	for (int i = 0; i < str.length(); i++) {
    if (str.charAt(i) == c) {
			count++;
		}
	}
	System.out.println("Occurrence of " + c + " in " + '"' + str + '"' + " is : " + count);
}

// m3 : using StringUtils from Apache Commons Lang
public void stringUtils(String str, char c) {
	int count = StringUtils.countMatches(str, c);
	System.out.println("Occurrence of " + c + " in " + '"' + str + '"' + " is : " + count);
}

public static void main(String[] args) {
	String text = "Code for coders";
	char search = 'o';
	CountOccurrenceOfCharacter count = new CountOccurrenceOfCharacter();
	count.charArray(text, search);
	count.charAt(text, search);
	count.stringUtils(text, search);
}
```

---

## 🔵🟡 Python Solution

```python
# m1 : using charArray (Python equivalent: iterating over string)
def char_array(s, c):
  count = sum(1 for ch in s if ch == c)
  print(f"Occurrence of '{c}' in \"{s}\" is: {count}")

# m2 : using character indexing (similar to charAt in Java)
def char_at(s, c):
  count = 0
  for i in range(len(s)):  # same logic as original Java
    if s[i] == c:
      count += 1
  print(f"Occurrence of '{c}' in \"{s}\" is: {count}")

# m3 : using Python's built-in count (like StringUtils.countMatches)
def string_utils(s, c):
  count = s.count(c)
  print(f"Occurrence of '{c}' in \"{s}\" is: {count}")

if __name__ == "__main__":
    text = "Code for coders"
    search = 'o'
    char_array(text, search)
    char_at(text, search)
    string_utils(text, search)
```

---

## 🔍 Explanation

- **Java**:
- Iterates through each character in the string.
  - Compares each character with the target character.
  - Increments a counter for each match.
- **Python**:
  - Uses a generator expression or built-in `count()` method for efficient counting.

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

`string`, `python`, `java`, `character-count`, `easy`, `interview`, `syntax`, `language-syntax`

---