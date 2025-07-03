---
title: Python Exception Handling Cheat Sheet
tags:
  - python
  - python-exceptions
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
topic: python-exceptions
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet on Python exception handling, covering try, except, else, and finally blocks. Crucial for writing robust and stable automation scripts.
---

# 📘 Python Exception Handling

Exception handling allows you to handle errors gracefully without crashing your program.

---

## ✅ `try...except` Block

The `try` block lets you test a block of code for errors. The `except` block lets you handle the error.

```python
try:
    print(10 / 0)
except ZeroDivisionError:
    print("You can't divide by zero!")
```

---

## ✅ Handling Multiple Exceptions

You can define as many `except` blocks as you want.

```python
try:
    # ... some code
except FileNotFoundError:
    print("File not found.")
except (ValueError, TypeError):
    print("A ValueError or TypeError occurred.")
```

---

## ✅ `else` and `finally`

- The `else` block lets you execute code when there is no error.
- The `finally` block lets you execute code, regardless of the result of the try- and except blocks.

```python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("You can't divide by zero!")
else:
    print(f"The result is {result}")
finally:
    print("Executing finally clause.")
```

---

## ✅ Raising Exceptions

The `raise` keyword is used to raise an exception.

```python
x = -1

if x < 0:
    raise ValueError("Sorry, no numbers below zero")
```

---

## 💡 Tips for SDETs

- In Selenium, wrap your element-finding logic in a `try...except` block to handle `NoSuchElementException`.
- Use the `finally` block to ensure your browser instance (`driver.quit()`) is always closed, even if a test assertion fails.
- Create custom exceptions for your framework to represent specific testing errors, like `TestDataError`.

---

## 🏷 Tags

`python`, `python-exceptions`, `sdet`, `programming`, `core-python`
