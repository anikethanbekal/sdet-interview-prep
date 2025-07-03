---
title: Java String Handling Cheat Sheet
tags:
  - java
  - string-handling
  - sdet
  - programming
  - core-java
categories:
  - Programming
  - Language-Specific
  - Java
difficulty:
  - easy
  - medium
background: bg-[#dbeafe]  # Light blue for language-specific
badge_color: text-blue-800 bg-blue-100
topic: string-handling
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A comprehensive cheat sheet for Java String manipulation, covering common methods and best practices. Essential for any Java developer or SDET.
---

# 📘 Java String Handling

Java `String` is an immutable object, which means its state cannot be changed after it is created. This cheat sheet covers the most frequently used `String` methods and concepts.

---

## 🧠 Core Concepts

- **Immutability**: Once a `String` object is created, it cannot be altered. Methods that appear to modify a string actually return a new `String` object.
- **String Pool**: Java stores strings in a special memory area called the "string constant pool." This helps in reusing strings and saving memory.
- **`String` vs `StringBuilder` vs `StringBuffer`**:
  - `String`: Immutable.
  - `StringBuilder`: Mutable, not thread-safe. Use it for single-threaded string manipulation.
  - `StringBuffer`: Mutable and thread-safe. Use it in multi-threaded environments.

---

## ✅ Common String Methods

### Creating Strings

| Method/Constructor | Description | Example |
|---|---|---|
| `String literal` | The most common way to create a string. | `String s = "hello";` |
| `new String()` | Creates a new string object in the heap. | `String s = new String("hello");` |

### Comparison

| Method                                   | Description                                   | Example                   |
|------------------------------------------|-----------------------------------------------|---------------------------|
| `equals(Object anObject)`                | Compares this string to the specified object. | `s1.equals(s2)`           |
| `equalsIgnoreCase(String anotherString)` | Compares two strings, ignoring case.          | `s1.equalsIgnoreCase(s2)` |
| `compareTo(String anotherString)`        | Compares two strings lexicographically.       | `s1.compareTo(s2)`        |

### Searching

| Method | Description | Example |
|---|---|---|
| `indexOf(int ch)` | Returns the index of the first occurrence of the character. | `s.indexOf('a')` |
| `lastIndexOf(int ch)` | Returns the index of the last occurrence of the character. | `s.lastIndexOf('a')` |
| `contains(CharSequence s)` | Returns `true` if the string contains the specified sequence. | `s.contains("hello")` |
| `startsWith(String prefix)` | Checks if the string starts with the specified prefix. | `s.startsWith("He")` |
| `endsWith(String suffix)` | Checks if the string ends with the specified suffix. | `s.endsWith("lo")` |

### Substrings

| Method | Description | Example |
|---|---|---|
| `substring(int beginIndex)` | Returns a new string that is a substring of this string. | `s.substring(2)` |
| `substring(int beginIndex, int endIndex)` | Returns a substring from `beginIndex` to `endIndex-1`. | `s.substring(0, 5)` |

### Manipulation

| Method | Description | Example |
|---|---|---|
| `concat(String str)` | Concatenates the specified string to the end of this string. | `s1.concat(s2)` |
| `replace(char oldChar, char newChar)` | Replaces all occurrences of `oldChar` with `newChar`. | `s.replace('a', 'b')` |
| `toLowerCase()` | Converts the string to lower case. | `s.toLowerCase()` |
| `toUpperCase()` | Converts the string to upper case. | `s.toUpperCase()` |
| `trim()` | Removes leading and trailing whitespace. | `s.trim()` |
| `split(String regex)` | Splits the string around matches of the given regex. | `s.split(",")` |

### Other Useful Methods

| Method | Description | Example |
|---|---|---|
| `length()` | Returns the length of the string. | `s.length()` |
| `isEmpty()` | Returns `true` if the length is 0. | `s.isEmpty()` |
| `charAt(int index)` | Returns the character at the specified index. | `s.charAt(0)` |
| `toCharArray()` | Converts the string to a new character array. | `s.toCharArray()` |
| `format(String format, Object... args)` | Returns a formatted string using the specified format string and arguments. | `String.format("Name: %s", "John")` |

---

## 🧰 `StringBuilder` and `StringBuffer`

Use these when you need to perform a lot of string modifications.

```java
// StringBuilder Example
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
System.out.println(sb.toString()); // "Hello World"

// StringBuffer Example
StringBuffer sbf = new StringBuffer("Hello");
sbf.append(" World");
System.out.println(sbf.toString()); // "Hello World"
```

---

## 📌 Best Practices

- Use string literals (`""`) for creating strings unless you explicitly need a new object.
- Use `equals()` for content comparison, not `==`.
- Prefer `StringBuilder` for single-threaded string concatenation in loops.
- Use `String.format()` for creating formatted strings.

---

## 💡 Tips for SDETs and QA Engineers

- String manipulation is crucial for parsing and validating test data, API responses, and log messages.
- Understand the difference between `null` and an empty string (`""`).
- Be mindful of character encodings when dealing with strings from different sources.

---

## 🏷 Tags

`java`, `string-handling`, `sdet`, `programming`, `core-java`
