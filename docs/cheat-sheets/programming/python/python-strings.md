---
title: Python Strings Cheat Sheet
tags:
  - python
  - python-strings
  - sdet
  - programming
  - core-python
categories:
  - Programming
  - Language-Specific
  - Python
difficulty:
  - easy
background: bg-[#dbeafe]  # Light blue for language-specific
badge_color: text-blue-800 bg-blue-100
topic: python-strings
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet on Python string manipulation, covering common methods and f-strings. Essential for any Python developer or SDET working with text data.
---

# 📘 Python Strings

Strings in Python are immutable sequences of Unicode characters.

---

## 🧠 String Creation and Formatting

### Creating Strings

```python
s1 = 'Hello'
s2 = "World"
s3 = """This is a
multiline string."""
```

### f-Strings (Formatted String Literals)

The most common and convenient way to format strings.

```python
name = "Alice"
age = 30
print(f"My name is {name} and I am {age} years old.")
# Output: My name is Alice and I am 30 years old.
```

---

## ✅ Common String Methods

| Method | Description | Example |
|---|---|---|
| `strip()` | Removes leading/trailing whitespace. | `"  hello  ".strip()` -> `"hello"` |
| `lower()` | Converts the string to lowercase. | `"Hello".lower()` -> `"hello"` |
| `upper()` | Converts the string to uppercase. | `"Hello".upper()` -> `"HELLO"` |
| `replace(old, new)` | Replaces a specified substring with another. | `"hello".replace("l", "p")` -> `"heppo"` |
| `split(separator)` | Splits the string into a list of substrings. | `"a,b,c".split(",")` -> `['a', 'b', 'c']` |
| `join(iterable)` | Joins the elements of an iterable into a single string. | `",".join(['a', 'b', 'c'])` -> `"a,b,c"` |
| `startswith(prefix)` | Returns `True` if the string starts with the specified prefix. | `"hello".startswith("he")` -> `True` |
| `endswith(suffix)` | Returns `True` if the string ends with the specified suffix. | `"hello".endswith("lo")` -> `True` |
| `find(substring)` | Returns the lowest index of the substring. Returns -1 if not found. | `"hello".find("l")` -> `2` |
| `count(substring)` | Returns the number of non-overlapping occurrences of a substring. | `"hello".count("l")` -> `2` |

---

## ✅ Slicing

You can return a range of characters by using the slice syntax.

```python
s = "Hello, World!"

print(s[2:5])    # "llo"
print(s[:5])     # "Hello"
print(s[7:])     # "World!"
print(s[-5:-2])  # "orl"
```

---

## 💡 Tips for SDETs

- Use f-strings for building dynamic locators in Selenium or for creating formatted log messages.
- The `strip()` method is very useful for cleaning up text extracted from web elements.
- `split()` is essential for parsing data from CSV files or other delimited text.

---

## 🏷 Tags

`python`, `python-strings`, `sdet`, `programming`, `core-python`
