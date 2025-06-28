---
title: Selenium
date: 2025-06-25 16:00:00
background: bg-[#62ae41]
tags:
  - automation
  - testing
categories:
  - Programming
  - Testing
  - Automation
intro: |
  This cheat sheet is a crash course for working on files in Selenium beginners and help to get the idea about the basic concepts of files interactions in selenium.
---

## File uploads in Selenium
There are three ways to upload file in selenium

### sendKeys() method

```java
driver.findElement(By.id("upload")).sendKeys("path/to/the/file.txt");
driver.findElement(By.id("file-submit")).submit();
```

### Robot Class

```java
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

// Find the "Choose File" button element on the webpage
WebElement chooseFile = driver.findElement(By.xpath("//input[@id='uploadFile']"));
// Use Actions class to move to the "Choose File" button and click on it
Actions ac = new Actions(driver);
ac.click(chooseFile).perform();

// Initialize the Robot class
Robot rb = new Robot();

// Wait for 2 seconds to ensure the file dialog is open
rb.delay(2000);

// Copy the file path to the clipboard
StringSelection ss = new StringSelection("<path of the file to be uploaded>");
Toolkit.getDefaultToolkit().getSystemClipboard().setContents(ss, null);
rb.delay(1000);

// Simulate pressing CTRL + V to paste the copied file path
rb.keyPress(KeyEvent.VK_CONTROL);
rb.keyPress(KeyEvent.VK_V);
rb.keyRelease(KeyEvent.VK_CONTROL);
rb.keyRelease(KeyEvent.VK_V);

// Simulate pressing ENTER to confirm the file selections
rb.keyPress(KeyEvent.VK_ENTER);
rb.keyRelease(KeyEvent.VK_ENTER);
Thread.sleep(2000);
List<WebElement> uploadedPath= driver.findElements(By.cssSelector("p#uploadedFilePath"));

if(uploadedPath.size()>0) {
   System.out.println("File Uploaded successfully");
}
```

### AutoIT

AutoIt is a third-party freeware scripting tool designed to automate Windows GUI interactions such as native file dialogs and popups.
It can be integrated with Selenium to handle tasks outside the browser, using keystrokes, mouse actions, and window controls, actions that Selenium alone cannot perform.

```java
// Use Actions class to move to the "Choose File" button and click on it
Actions ac = new Actions(driver);
ac.click(chooseFile).perform();
Thread.sleep(2000);
Runtime.getRuntime().exec("D:\\Auto IT\\FileUpload.exe");                           
Thread.sleep(2000);
List<WebElement> uploadedPath= driver.findElements(By.cssSelector("p#uploadedFilePath"));
if(uploadedPath.size()>0) {
    System.out.println("File Uploaded successfully");
}
```

## Read Files

### Read data from excel

<Apache dependancy>
→ workbook > worksheet > row > cell
→ Index starts with 0 → e.g. row 1 cell 1 has the index of row 0 cell 0

1. Store file path in a string
```shell script
String path = "resources/Capitals.xlsx";
    OR 
File file = new File(“resources/Capitals.xlsx”);
```
2. Open the file
```shell script
FileInputStream fileInputStream = new FileInputStream(path);
```
3. Open the workbook using fileinputstream
```shell script
Workbook workbook = WorkbookFactory.create(fileInputStream);
```
4. Open the first worksheet
```shell script
Sheet sheet1 = workbook.getSheet("Sheet1");
    OR 
workbook.getSheetAt(0); //ALTERNATIVE
```
5. Go to first row
```shell script
Row row1 = sheet1.getRow(0);
```
6. Go to first cell on that first row and print
```shell script
Cell cell1 = row1.getCell(0);
```

### Using Buffered Reader
```java
FileReader reader = new FileReader("MyFile.txt");
BufferedReader bufferedReader = new BufferedReader(reader);
String line;
while ((line = bufferedReader.readLine()) != null){
    System.out.println(line); 
}
reader.close();
```

### Using FIS
```java
import java.io.FileInputStream;


FileInputStream inputStream = new FileInputStream("MyFile.txt");
InputStreamReader reader = new InputStreamReader(inputStream, "UTF-16");
int character; 
while ((character = reader.read()) != -1){ 
    System.out.print((char) character); 
}
reader.close();
```

### File Reader
```java

FileReader reader = new FileReader("MyFile.txt");
int character;
while ((character = reader.read()) != -1)
{ System.out.print((char) character); }
reader.close();
```

### CSV File Read

```java
import au.com.bytecode.opencsv.CSVReader;


String path = "filePath.csv";
Reader reader = new FileReader(path);
CSVReader csvreader = new CSVReader(reader);
List<String[]> data = csvreader.readAll();
for(String[] d : data){
    for(String c : d ){
        System.out.println(c); 
    }
}
```
## Java based
<p>We can't test desktop applications with Selenium. But we can use JAVA</p>

System.getProperty("user.dir"); =>gives the path of the current folder

System.getProperty("user.home"); =>gives you the user folder

Files.exists(Paths.get("path of the file")); =>Checks if a file path exists on your computer or not