# Froggywallet

## Prerequisites

This project is based on Golang (backend), React (frontend) and Docker (database). Before starting any work, it is recommended to setup each of these tools.

## Docker Setup

### Windows

1. **Install Docker Desktop**
   - Make sure your system meets the [Docker Desktop requirements](https://docs.docker.com/desktop/install/windows-install/), especially that **WSL 2** is enabled.
   - Download and install Docker Desktop from the [official site](https://www.docker.com/products/docker-desktop/).
   - Follow the installation steps and restart your computer if needed.

2. **Verify Installation**

    Open **PowerShell** or **Windows Terminal**, then run:
    ```bash
    docker --version
    docker compose version
    ```
    Both commands should return version information if Docker is installed correctly.

3. **Run the Project**

    In the project’s root directory, run:
    ```bash
    docker compose pull
    docker compose up -d
    ```
    This will pull all required images and start the containers in the background.

4. **Stop the Containers**

    When you’re done, stop everything with:
    ```bash
    docker compose down
    ```
    Add `-v` to also remove volumes and delete all stored data:
    ```bash
    docker compose down -v
    ```

## Golang setup:

1. **Download and install Go**

    Visit the official [Go download page](https://go.dev/dl/) and install the package for your specific operating system.
    
2. **Verify the instalation**

    After the installation, open Powershell or Terminal, and run:
    ```
    go version
    ```
    
    If no errors are present, Go has been installed correctly.
    
3. **Running the backend part of the project**

    Navigate to the projects root directory and run the command:
    ```
    go run main.go --migrate --seed
    ```
    
    This will start the Golang part of the project, automatically installing packages from go.mod file and populate the database with tables (if Docker container setup is completed and it is operating).
    
## React setup:

1. **Install Node.js (for React and it's packages)**
    - Download from [https://nodejs.org/](https://nodejs.org/)
    - Run the installer.
    - Verify installation:
    ```bash
    node -v
    npm -v
    ```
    
2. **Install dependencies**

    Navigate to the projects root directory and run the command:
    
    ```
    npm install
    ```

    this will install all of the needed dependencies from the package.json file.
    
3. **Start React Frontend**

    Run the command:
    
    ```
    npm run dev
    ```
    
    This will start the React frontend.
