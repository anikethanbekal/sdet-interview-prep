---
title: Python File I/O Cheat Sheet
tags:
  - python
  - python-file-io
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
topic: python-file-io
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet on Python File I/O, covering how to read from and write to files. Essential for SDETs who need to work with test data files, configuration files, or log files.
---

# 📘 Python File I/O

Python has several functions for creating, reading, updating, and deleting files.

---

## ✅ Reading from a File

The `with` statement is the recommended way to handle file objects.

### Reading the Whole File

```python
with open("myfile.txt", "r") as f:
    content = f.read()
    print(content)
```

### Reading Line by Line

```python
with open("myfile.txt", "r") as f:
    for line in f:
        print(line, end='')
```

---

## ✅ Writing to a File

- **`"w"` (Write):** Overwrites the entire file.
- **`"a"` (Append):** Appends to the end of the file.

### Writing a String

```python
with open("myfile.txt", "w") as f:
    f.write("Hello, World!")
```

### Writing a List of Lines

```python
lines = ["Hello\n", "World\n"]
with open("myfile.txt", "w") as f:
    f.writelines(lines)
```

---

## ✅ File Modes

| Mode | Description |
|---|---|
| `"r"` | Read - Default value. Opens a file for reading, error if the file does not exist. |
| `"a"` | Append - Opens a file for appending, creates the file if it does not exist. |
| `"w"` | Write - Opens a file for writing, creates the file if it does not exist. |
| `"x"` | Create - Creates the specified file, returns an error if the file exists. |
| `"t"` | Text - Default value. Text mode. |
| `"b"` | Binary - Binary mode (e.g., images). |

---

## 💡 Tips for SDETs

- Use file I/O to read test data from CSV or JSON files.
- The `json` module is excellent for working with JSON files:
  ```python
  import json

  # Writing JSON
  with open('data.json', 'w') as f:
      json.dump(my_dict, f)

  # Reading JSON
  with open('data.json', 'r') as f:
      data = json.load(f)
  ```
- The `csv` module is great for CSV files.

---

## 🏷 Tags

`python`, `python-file-io`, `sdet`, `programming`, `core-python`
