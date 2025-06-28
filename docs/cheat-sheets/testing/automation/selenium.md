---
title: Selenium
date: 2024-05-04 19:50:01
background: bg-[#62ae41]
tags:
  - automation
  - testing
categories:
  - Programming
intro: |
  This cheat sheet is a crash course for Selenium beginners and help to get the idea about the basic concepts of Selenium.
---

## Getting Started

### Initialize Browser Drivers {.row-span-2}

| Browser   | Syntax                                  |
| --------- | --------------------------------------- |
| `Chrome`  | WebDriver driver = new ChromeDriver();  |
| `Edge`    | WebDriver driver = new EdgeDriver();    |
| `Firefox` | WebDriver driver = new FirefoxDriver(); |
| `Safari`  | WebDriver driver = new SafariDriver();  |

{.show-header .left-text}

### Selenium find elements {.col-span-2}

```java
//To fetch one element
driver.findElement(By.name (“key”));

//To fetch multiple elements
driver.findElements(By.name (“key”));
```

### Selenium Locators {.col-span-2}

| Locator           | Syntax                                        |
| ----------------- | --------------------------------------------- |
| `className`       | driver.findElement(By.className (“key”))      |
| `cssSelector`     | driver.findElement(By.cssSelector(key"))      |
| `id `             | driver.findElement(By.id(key"))               |
| `linkText`        | driver.findElement(By.linkText(key"))         |
| `name`            | driver.findElement(By.name(“key"))            |
| `partialLinkText` | driver.findElement(By.partialLinkText(“key")) |
| `tagName `        | driver.findElement(By.tagName (“key”))        |
| `xpath`           | driver.findElement(By.xpath(“key"))           |

{.show-header .left-text}

### Operations
#### Navigate to URL

```java
driver.get("https://www.example.com");
        or
driver.navigate().to("https://www.newsite.com");
```

### Basic Selenium Actions {.col-span-2}

#### Element Level {.col-span-2}

```java
WebElement element = driver.findElement(By.id("abc"));
```

| Description             | Syntax                    | ReturnType |
|--------------------|---------------------------|------------|
| `Enter Input`      | element.sendKeys("text"); | void       |
| `Click on element` | element.click();          | void       |
| `Clear Text `      | element.clear();          | void       |
| `Submit in form `  | element.submit();         | void       |

{.show-header .left-text}

##### Get keywords {.col-span-2}

| Description                            | Syntax                | ReturnType |
|-----------------------------------|-----------------------|------------|
| `Get Text`                        | element.getText();    | String     |
| `Get tag name`                    | element.getTagName(); | String     |
| `Get Width and Height of element` | element.getSize();    | Dimension  |

{.show-header .left-text}

##### Validation {.col-span-2}
 | Description                 | Syntax                 | ReturnType |
 |------------------------|------------------------|------------|
 | ` Element Displayed ?` | element.isDisplayed(); | boolean    |
 | `Element Enabled ?`    | element.isEnabled();   | boolean    |
 | ` Element Selected ? ` | element.isSelected();  | boolean    |

{.show-header .left-text}

### Navigation {.col-span-2}

| Description                     | Syntax                                           |
|---------------------------------|--------------------------------------------------|
| `Navigate to a new URL`         | driver.navigate().to("https://www.newsite.com"); |
| `Go forward to the next page`   | driver.navigate().forward();                     |
| `Go back to the previous page ` | driver.navigate().back();                        |
| `Refresh the current page`      | driver.navigate().refresh();                     |

{.show-header .left-text}


### Drop Down Handling

```java
WebElement day=driver.findElement(By.id("days"));
Select selectDay = new Select(day);
```

```java

// Select By index
selectDay.selectByIndex(0);

// Select By value
selectDay.selectByValue("value");

// Select By visible text
selectDay.selectByVisibleText("text");

// Select By partial visible text
selectDay.selectByContainsVisibleText("partial text");

// Fetch all the options
List<WebElement> opts = selectDay.getOptions();

// Deselect all options
selectDay.deselectAll();
```


### iFrame Handling {.col-span-2}

| Description                               | Syntax                                                                                                         |
|-------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| `Switch to a frame by index`              | driver.switchTo().frame("frameIndex");                                                                         |
| `Switch to a frame by frame ID or name`   | driver.switchTo().frame("frameId or name");                                                                    |
| `Switch to a frame by webelement`         | WebElement eleframe = driver.findElement(By.xpath("//frame[@name='val']")); driver.switchTo().frame(eleframe); |
| `Switch back to the parent frame content` | driver.switchTo().parentFrame();                                                                               |
| `Switch back to the main frame`           | driver.switchTo().defaultContent();                                                                            |
| `To fetch number of frames`               | driver.findElements(By.tagName("iframe"));                                                                     |

{.show-header .left-text}

### Window Handling

#### Basic Window Operations {.col-span-2}
| Description                        | Syntax                                                 |
|------------------------------------|--------------------------------------------------------|
| `Set window position`              | driver.manage().window().setPosition(new Point(0, 0)); |
| `Maximize window`                  | driver.manage().window().maximize();                   |
| `Minimize windowt`                 | driver.manage().window().minimize();                   |
| `Fullscreen`                       | driver.manage().window().fullscreen();                 |
| `Close the current browser window` | driver.close();                                        |
| `Close all browser windows`        | driver.quit();                                         |

{.show-header .left-text}

#### Advanced operations on windows

```java
// Get the current window handle
String window1Handle = driver.getWindowHandle();

// Get all window handles
Set<String> allWindowHandles = driver.getWindowHandles();

// Switch to a specific window
for (String eachHandle : allWindowHandles){
  if (!eachHandle.equals(window1Handle)){
    driver.switchTo().window(eachHandle);
	}
}

or 

String windowHandle = driver.getWindowHandle(); 
driver.switchTo().window(windowHandle);

// Switch to newly created window
driver.switchTo().newWindow(WindowType.TAB);
driver.switchTo().newWindow(WindowType.WINDOW);

```

### Take screenshot
```java

import org.apache.commons.io.FileUtils;
File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(scrFile, new File("./image.png"));

```

### Alerts/Pop-Ups

```java
Alert alert = driver.switchTo().alert();

// Used to click on the ‘OK’ button of the alert.
alert.accept();

// Used when the ‘Cancel’ button is clicked in the alert box.
alert.dismiss();

// Used to send text to an alert
alert.sendKeys("text");

// Used to capture the alert message.
alert().getText();

```

### Mouse and Keyboard Actions {.col-span-2}

```java
Actions actions = new Actions(driver);

// Shifts the mouse pointer to the center of the element and click on it
actions.moveToElement(element).click().build().perform();

// Performs double click on the element
actions.doubleClick(element).perform();

// Drags the element from one point and drops to another
actions.dragAndDrop(source, target).perform();

// Sends a series of keys to the element
actions.sendKeys(element, "text").perform();

// Press arrow down key
actions.sendKeys(Keys.ARROW_DOWN).build().perform();

// Press page up key
actions.sendKeys(Keys.PAGE_UP).build().perform();

// Perform multiple actions
actions.sendKeys(Keys.ARROW_LEFT).sendKeys(Keys.PAGE_DOWN).build().perform();

'''
build() is optional whereas perform() is mandatory.
'''
```

### Page Information {.col-span-1}

```java
// Get the page title
driver.getTitle();

// Get the current page URL
driver.getCurrentUrl();

// Get the entire page source code
driver.getPageSource();

```

### Waits {.col-span-3}
<p>There are 4 types of waits that can be used in a script</p>

- Thread.Sleep
- Implicit Wait
- Explicit Wait
- Fluent Wait

#### Thread - from java
<p>This is from java, it is a hard wait i.e; stops execution till time provided in milliseconds.</p>

```java
// throws InterruptedException
Thread.sleep(2000);
```

#### Implicit Wait
<p>Once the command is run, Implicit Wait remains for the entire duration for which the browser is open.</p>

```java
driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
```

#### Explicit Wait
<p>These are conditional waits can be applied to satisfy a particular condition</p>

```java
// Explicit Wait :- 
WebDriverWait wait = new WebDriverWait(driver, 10);
wait.until(ExpectedConditions.elementToBeClickable(element));
```

#### Fluent Wait
<p>Fluent Wait in Selenium marks the maximum amount of time for Selenium WebDriver to wait for a certain condition (web element) becomes visible.</p> <p>It also defines how frequently WebDriver will check if the condition appears before throwing the “ElementNotVisibleException”.</p>

```java
FluentWait wait = new FluentWait(driver);
//Specify the timeout of the wait
wait.withTimeout(5000, TimeUnit.MILLISECONDS);
//Specify polling time
wait.pollingEvery(250, TimeUnit.MILLISECONDS);
//Specify what exceptions to ignore
wait.ignoring(NoSuchElementException.class)
//This is how we specify the condition to wait on.
wait.until(ExpectedConditions.alertIsPresent());
```
### Selenium Grids
Start the hub
```java
java -jar selenium-server-standalone-x.y.z.jar -role hub
```
Start a node
```java
java -jar selenium-server-standalone-x.y.z.jar -role node -hub
```
Server
```java
http://localhost:4444/ui/index.html
```