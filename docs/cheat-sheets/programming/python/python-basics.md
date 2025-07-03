---
title: Python Basics Cheat Sheet
tags:
  - python
  - python-basics
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
topic: python-basics
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A foundational cheat sheet covering the absolute basics of the Python programming language, including data types, variables, operators, and control flow. Perfect for beginners or as a quick refresher.
---

# 📘 Python Basics

This cheat sheet provides a quick reference for the fundamental building blocks of the Python language.

---

## 🧠 Data Types

Python has several built-in data types.

| Type | Description | Example |
|---|---|---|
| `int` | Integer numbers | `x = 10` |
| `float` | Floating-point numbers | `x = 20.5` |
| `str` | String (sequence of characters) | `x = "Hello"` |
| `bool` | Boolean (`True` or `False`) | `x = True` |
| `list` | Ordered, mutable collection | `x = ["apple", "banana"]` |
| `tuple` | Ordered, immutable collection | `x = ("apple", "banana")` |
| `dict` | Unordered, mutable collection of key-value pairs | `x = {"name": "John", "age": 30}` |
| `set` | Unordered, mutable collection of unique elements | `x = {"apple", "banana"}` |

---

## ✅ Variables

A variable is created the moment you first assign a value to it.

```python
# Variable assignment
name = "John"
age = 30
```

---

## ✅ Operators

| Type | Operators | Description |
|---|---|---|
| **Arithmetic** | `+`, `-`, `*`, `/`, `%` (modulus), `**` (exponent), `//` (floor division) | Used to perform common mathematical operations. |
| **Comparison** | `==`, `!=`, `>`, `<`, `>=`, `<=` | Used to compare two values. |
| **Logical** | `and`, `or`, `not` | Used to combine conditional statements. |
| **Assignment** | `=`, `+=`, `-=`, `*=`, `/=` | Used to assign values to variables. |

---

## ✅ Control Flow

### Conditional Statements

- **`if-elif-else`**: Executes a block of code if a specified condition is true.
  ```python
  if age > 18:
      print("Adult")
  elif age == 18:
      print("Just an adult")
  else:
      print("Minor")
  ```

### Loop Statements

- **`for` loop**: Iterates over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).
  ```python
  fruits = ["apple", "banana", "cherry"]
  for fruit in fruits:
      print(fruit)
  ```
- **`while` loop**: Executes a set of statements as long as a condition is true.
  ```python
  i = 1
  while i < 6:
      print(i)
      i += 1
  ```

---

## ✅ Functions

A function is a block of code which only runs when it is called.

```python
# Defining a function
def my_function():
    print("Hello from a function")

# Calling a function
my_function()
```

---

## 🏷 Tags

`python`, `python-basics`, `sdet`, `programming`, `core-python`
