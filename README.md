# sdet-interview-prep
This includes interview cheat sheets for SDET/QA Engineers

## Introduction
    This is MkDocs material which is on top of MkDocs which provide more functionality. 
    ***Note:*** This is active developing repo. Expect changes frequently.
## How to Use This Repository

### Local Development

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/anikethanbekal/sdet-interview-prep.git](https://github.com/anikethanbekal/sdet-interview-prep.git)
    cd sdet-interview-prep
    ```

2.  **Pre-requisite:**
    - Python 3
    - PIP
    - VSCode
    * VSCode extension
      * YAML (redhat)

3.  **Set up a Python virtual environment (recommended):**

    ```shell script
    python3 -m venv venv
    source .venv/bin/activate # On macOS/Linux
    # .venv\Scripts\activate.bat # On Windows (Command Prompt)
    # .venv\Scripts\Activate.ps1 # On Windows (PowerShell)
    ```

5.  **Install dependencies:**
    ```shell script
    pip install mkdocs-material
    pip install mkdocs mkdocs-material pymdown-extensions
    ```

6.  **Serve the site locally:**
    ```shell script
    mkdocs serve
    ```
    Open your browser to `http://127.0.0.1:8000` (or the address provided in your terminal).


## Project Structure

[include] (projectStructure.txt)

## Generate projectStructure.txt automatically

```Shell Script
// To install tree in mac
brew install tree

// Run the following command with ignore unwanted files / directories.
tree -L 4 -I 'venv' -I 'temp' > projectStructure_temp.txt

```

## Standard Templates
1. Cheat-Sheets [include] (projectStructure.txt)
2. Practice Programs

## How to use the repo
1. Create the markdown file in respective directories according to it's standard
2. Do the changes in nav sections of mkdocs.yml

## Contributing

We welcome contributions! Please follow these steps to contribute:

1.  Fork the repository.
2.  Create a new feature branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes and test them locally (`mkdocs serve`).
4.  Commit your changes (`git commit -m "feat: Add new awesome content"`).
5.  Push your branch to your fork (`git push origin feature/your-feature-name`).
6.  Open a Pull Request to the `main` branch of this repository.

### Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions whenever changes are merged into the `main` branch. You can view the live site at:

`https://anikethanbekal.github.io/sdet-interview-prep`

# References
1. Project Structure: https://tree.nathanfriend.io
---

**Author:** Anikethanb Bekal