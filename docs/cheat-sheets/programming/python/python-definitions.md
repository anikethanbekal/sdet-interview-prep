---
title: Key Python Definitions Cheat Sheet
tags:
  - python
  - python-definitions
  - sdet
  - programming
  - core-python
  - interview-questions
categories:
  - Programming
  - Language-Specific
  - Python
  - Interview Questions
difficulty:
  - medium
background: bg-[#dbeafe]  # Light blue for language-specific
badge_color: text-blue-800 bg-blue-100
topic: python-definitions
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet that provides clear definitions and examples for fundamental Python terminology. An essential quick-reference guide for SDETs preparing for technical interviews.
---

# 📘 Key Python Definitions

This cheat sheet provides clear definitions and code examples for core Python terms.

---

## ✅ GIL (Global Interpreter Lock)

**Definition:**
The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode at the same time. This means that even on a multi-core processor, only one thread can be executing Python code at any given moment. The GIL simplifies memory management but is a performance bottleneck for CPU-bound multi-threaded programs.

---

## ✅ PEP 8

**Definition:**
PEP 8 is the official style guide for Python code. It provides conventions for writing readable and consistent Python code. Following PEP 8 is highly recommended.

**Example:**
- Use 4 spaces for indentation.
- Limit lines to 79 characters.
- Use snake_case for function and variable names.

---

## ✅ Virtual Environment

**Definition:**
A virtual environment is a self-contained directory tree that contains a Python installation for a particular version of Python, plus a number of additional packages. It allows you to work on a specific project without affecting other projects.

**Example:**

```bash
# Create a virtual environment
python3 -m venv myenv

# Activate it
source myenv/bin/activate
```

---

## ✅ `__pycache__`

**Definition:**
A directory that contains the `.pyc` files (compiled bytecode) for a Python module. When you run a Python program, the interpreter checks for a `__pycache__` directory and uses the `.pyc` files if they are up-to-date, which speeds up startup time.

---

## ✅ `__name__ == "__main__"`

**Definition:**
A common idiom in Python scripts. The `__name__` variable is a special built-in variable which evaluates to the name of the current module. When a Python script is run directly, `__name__` is set to `"__main__"`. This allows you to write code that will only be executed when the file is run as a script, but not when it is imported as a module into another script.

**Example:**

```python
def main():
    print("Running as a script")

if __name__ == "__main__":
    main()
```

---

## ✅ Duck Typing

**Definition:**
A concept related to dynamic typing, where the type or the class of an object is less important than the methods it defines. "If it walks like a duck and it quacks like a duck, then it must be a duck." In Python, you don't need to check an object's type to know if it has a certain method.

**Example:**

```python
class Duck:
    def quack(self):
        print("Quack!")

class Person:
    def quack(self):
        print("I'm quacking like a duck!")

def make_it_quack(duck):
    duck.quack()

make_it_quack(Duck())
make_it_quack(Person())
```

---

## 🏷 Tags

`python`, `python-definitions`, `sdet`, `programming`, `core-python`, `interview-questions`
