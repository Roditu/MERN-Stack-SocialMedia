# MERN Fullstack Social Media

## Description
Final project Layanan aplikasi dengan MERN Stack and using docker nginx as deployment in private server

## Features

- Sign in and Signup with JWT Token and google account
- Post and Edit according to the account used 
- 1 Like per account
- Give a comment to posts
- Give suggestion posts according to the tags
- posts search according to title and tags

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Roditu/MERN-Stack-SocialMedia.git
    cd your-repo
    ```

2. Install dependencies:
    - client:
    ```sh
    npm install --legacy-peer-deps
    ```
    - server:
    ```sh
    npm install
    ```

3. build the project:
    - client:
    ```sh
    docker build . -t frontend:latest
    ```
    - server:
    ```sh
    docker build . -t backend:latest
    ```
    - root:
    docker compose up -d

## Usage

Explain how to use the project with a simple example:
- Make sure to change with your own Mongoose database and desire backend port in :
[Link Text](./server/index.js)
- Make sure to change with you own GoogleOauth Provider clientId:
[Link Text](./client/src/index.js)
- replace the url with the backend prefix or port that has been allocated
[Link Text](./client/src/api/index.js)

Credits:
[Link Text](https://www.youtube.com/c/javascriptmastery)