# FullStackOpen (Under construction)
*Part 0, 1, 2 and 3 are finished, 4 is under construction.*

Check out the phonebook [here](https://phonebook-nsae.onrender.com). It's created with MERN(MongoDb, Express, React, Node) Axios, Mongoose, Vite and hosted on Render, and still a work in progress.

## Introduction
**Full Stack Open** is a comprehensive online course offered by the University of Helsinki, designed to teach modern web development from the ground up. It covers a wide range of topics, from the basics of web architecture to building full-stack web applications using cutting-edge technologies.

## Course Information
- **Course Name:** Full Stack Open
- **University:** University of Helsinki
- **Website:** [Full Stack Open](https://fullstackopen.com/)
  
## Topics covered
Throughout this course I will gain a deeper understanding of:
- JavaScript
- React
- Node.js
- Git and Version Control
- Databases
- RESTful APIs
- Deployment and Hosting
- And much more

## How to use this repository
To begin your exploration of my submissions for Full Stack Open, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Nicktvdd/FullStackOpen.git
   cd FullStackOpen/part[part]/[exercise]
   ```
  * Replace [part] with the part number & [exercise] with the exercise name. *
2. Explore the individual exercises and topics by navigating to the respective folders.
3. Run the [Installation](#installation) (except for part0). Make sure you have node and npm installed first.
4. Run the commands based on the part you are in.

## Installation
To run the exercises and solutions provided in this repository, you will need **Node.js, NPM and Git** installed on your computer.
  - Install the required dependencies when you're in the exercise folder:
    ```bash
    npm install

## Resources
For additional guidance and support, refer to the official Full Stack Open course website: [Full Stack Open](https://fullstackopen.com/)

## Table of Contents
- [Introduction](#introduction)
  - [Course Information](#course-information)
  - [Topics Covered](#topics-covered)
  - [How to Use This Repository](#how-to-use-this-repository)
  - [Resources](#resources)

- [Part0](#part-0---fundamentals-of-web-apps)
    - [What I have learned](#what-i-have-learned)

- [Part 1 - React](#part-1---react)
  - [Technologies](#technologies)
  - [Usage](#usage)
  - [Exercises](#exercises)

- [Part 2 - Communicating with Servers](#part-2---communicating-with-servers)
  - [Technologies](#technologies-part2)
  - [Usage](#usage-part2)
  - [Exercises](#exersises-part2)

- [Part 3 - Programming a Server with NodeJS and Express](#part-3---Programming-a-Server with-NodeJS-and-Express)
  - [Technologies](#technologies-part3)
  - [Usage](#usage-part3)
  - [Exercises](#exersises-part3)

# Part 0 - Fundamentals of web apps
## What I have learned

In Part 0, I gained a deep understanding of foundational web development concepts and technologies. This includes:
- Web architecture
- HTTP protocol and requests
- HTML and CSS
- JavaScript
- Client-server model
- Network requests and AJAX
- DOM manipulation and event handling
- Version control with Git
- Asynchronous programming
- Using GitHub for collaboration
- Building diagrams with Mermaid

# Part 1 - React
This repository contains the solutions and exercises for Part 1 of the Full Stack Open course offered by the University of Helsinki. Part 1 focuses on the fundamentals of web development with JavaScript and React.

## Technologies
- JavaScript
- React
- Git
- HTML
- NPM

## Usage
Navigate to the exercise folder
  ```bash
  cd [exercisefolder]
  ```
Run the program:
  ```bash
  npm run dev
  ```
    
## Exercises
This repository contains exercises related to the following topics:

### Courseinfo
**Description:** A React application that showcases course information, including the course name and a list of its parts. It demonstrates how to pass data between components and structure a React application.

**Key Concepts:**
- Component composition
- Props and data flow
- Organizing React code

### Unicafe
**Description:** A React application that showcases course information, including the course name and a list of its parts. It demonstrates how to pass data between components and structure a React application.

**Key Concepts:**
- Component composition
- Props and data flow
- Organizing React code

### Anecdotes
**Description:** A phonebook application built with React, allowing users to add, delete, and filter contacts. It introduces handling forms in React and managing component state.

**Key Concepts:**
- Form handling in React
- Managing component state
- Conditional rendering

# Part 2 - Communicating with Servers
This repository contains the solutions and exercises for Part 2 of the Full Stack Open course offered by the University of Helsinki. Part 2 focuses on communicating with a server, implementing user authentication, and handling asynchronous operations in web development.

## Technologies part2
- JavaScript
- React
- Express
- Json-Server
- Git
- HTML
- CSS
- NPM

## Usage part2
Navigate to the exercise folder
  ```bash
  cd [exercisefolder]
  ```
Run the program:
  ```bash
  npm run server
  npm run dev
  ```
  open the suggested port

## Exercises part2
This repository contains exercises related to the following topics:

### Courseinfo
**Description:** A React application that showcases course information, including the course name and a list of its parts. It demonstrates how to fetch and display data from a server using RESTful APIs.

**Key Concepts:**
- Fetching data from a server
- Displaying server data in a React application

### Phonebook
**Description:** A phonebook application built with React that allows users to add, delete, and filter contacts. It introduces handling forms, managing component state, and communicating with a server to store and retrieve data.

**Key Concepts:**
- Form handling in React
- Managing component state
- Communicating with a server for data storage

### Notes
**Description:** A note-taking application that showcases full-stack development. Users can create, modify, and delete notes, which are stored on a server. It introduces user authentication and full-stack development concepts.

**Key Concepts:**
- Input authentication
- Full-stack development
- Storing data on a server

# Part 3 - Programming a Server with NodeJS and Express
In this part I programmed a full-stack web phonebook that interacts with a database and deployed it online. Check out the phonebook [here](https://phonebook-nsae.onrender.com).

## Technologies part3
- JavaScript
- Node.js
- Express
- RESTful APIs
- JSON
- NPM

## Usage part3
Navigate to the backend folder
  ```bash
  cd part3/phonebook
  ```
Run the program:
  ```bash
  npm run dev
  ```
  Navigate to the frontend folder
  ```bash
  cd ../../part2/phonebok
  ```
Run the program:
  ```bash
  npm run dev
  ```
  open the suggested port

## Exercises part2

### Phonebook
**Description:** A Node.js and Express server that serves as the backend for a phonebook application. It demonstrates creating RESTful APIs, handling HTTP requests, and working with a database using Mongoose.

**Key Concepts:**
- Building a RESTful API
- Handling HTTP requests
- Database interactions with Mongoose
- CRUD operations for a phonebook