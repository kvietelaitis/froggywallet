# froggywallet

## prerequisites

this project is based on go (backend), react (frontend) and docker (database). 

## 🐳 Docker Setup

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
