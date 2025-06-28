---
title: Selenium-jsExecutor
date: 2025-06-24 19:00:01
background: bg-[#62ae41]
tags:
  - automation
  - testing
categories:
  - Programming
intro: |
  This cheat sheet is a crash course for Selenium javascript executor for  beginners and help to get the idea about the basic concepts of Selenium js executor.
---

## Introduction

JS Executor is a interface provided by the selenium to help execute js commands.

It provides two methods to interact with WebElements

### executeScript()
This method executes JavaScript in the context of the currently selected window or frame in Selenium
The script runs as an anonymous function and the script can return values. Data types returned are:
- WebElement
- List
- String
- Long
- Boolean

### executeAsyncScript()
This is method executes an asynchronous snippet of JavaScript in the context of the currently selected window or frame in Selenium.

## Why need?

In some cases the normal operations like sendkeys, click etc may not work directly.

## Template

```java
import org.openqa.selenium.JavascriptExecutor;
JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript​(java.lang.String script, java.lang.Object... args)
```

## Examples
```java
JavascriptExecutor js = (JavascriptExecutor) driver;
```
### Refresh window

```java
js.executeScript(“location.reload()”);
```

### Send text

```java
js.executeScript(“document.getElementByID(‘element id ’).value = ‘xyz’;”);
```

### Click on button
```java
js.executeScript("arguments[0].click();", button);
```

### Generate alert pop up

```java
js.executeScript("alert('hello world');");
```

### Vertical scroll up
```java
js.executeScript("window.scrollBy(0,150)");
```