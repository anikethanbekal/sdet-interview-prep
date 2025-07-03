---
title: Java File I/O Cheat Sheet
tags:
  - java
  - file-io
  - sdet
  - programming
  - core-java
categories:
  - Programming
  - Language-Specific
  - Java
difficulty:
  - medium
background: bg-[#dbeafe]  # Light blue for language-specific
badge_color: text-blue-800 bg-blue-100
topic: file-handling
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet on Java File I/O, covering how to read from and write to files. Essential for SDETs who need to work with test data files, configuration files, or log files.
---

# 📘 Java File I/O

Java provides a rich set of APIs to perform file input and output (I/O) operations.

---

## 🧠 Core Classes

| Class | Description |
|---|---|
| `File` | Represents a file or directory path. |
| `FileReader` / `FileWriter` | For reading/writing character files. |
| `BufferedReader` / `BufferedWriter` | Provides buffering for efficient reading/writing of characters. |
| `FileInputStream` / `FileOutputStream` | For reading/writing raw bytes from/to files. |
| `java.nio.file.Files` | A modern and powerful utility class for file operations (Java 7+). |

---

## ✅ Reading from a File

### Using `BufferedReader` (Classic I/O)

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public void readFile(String filePath) {
    try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
        String line;
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

### Using `java.nio.file.Files` (Modern I/O)

```java
import java.nio.file.Files;
import java.nio.file.Paths;
import java.io.IOException;
import java.util.List;

public void readFileModern(String filePath) {
    try {
        List<String> lines = Files.readAllLines(Paths.get(filePath));
        for (String line : lines) {
            System.out.println(line);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

---

## ✅ Writing to a File

### Using `BufferedWriter` (Classic I/O)

```java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public void writeFile(String filePath, String content) {
    try (BufferedWriter writer = new BufferedWriter(new FileWriter(filePath))) {
        writer.write(content);
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

### Using `java.nio.file.Files` (Modern I/O)

```java
import java.nio.file.Files;
import java.nio.file.Paths;
import java.io.IOException;

public void writeFileModern(String filePath, String content) {
    try {
        Files.write(Paths.get(filePath), content.getBytes());
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

---

## 💡 Tips for SDETs

- Use file I/O to read test data from CSV, JSON, or properties files.
- Write test results or logs to output files for reporting and analysis.
- The `java.nio.file.Files` class is generally recommended for new code as it is more powerful and provides better error handling.
- Always use a `try-with-resources` statement to ensure that your file streams are closed automatically.

---

## 🏷 Tags

`java`, `file-io`, `sdet`, `programming`, `core-java`
