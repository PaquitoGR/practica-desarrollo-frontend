# KeePoP Buy and Sell Website - Front-End Documentation

This document provides an overview of the front-end of our Buy and Sell website, including instructions on how to set up and use the codebase.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Contact](#contact)

## Introduction

Welcome to KeePoP, my Buy and Sell website front-end! This project is designed to provide a platform for users to buy and sell items online. This document serves as a guide to help you understand and work with the front-end code.

## Features

Main page with a listing and search by item name.
User registration and login.
Creation of new advertisements and editing or deletion of existing ones.

## Getting Started

### Prerequisites

The front-end communicates with a modified vdersion of Json-Server, called Sparrest.js. To install this server, follow these steps:

Clone the repository from https://github.com/kasappeal/sparrest.js.
Install the dependencies within the repository directory using
```sh
npm install
```
Copy the provided `db.json` file to the root folder of sparrest.js, which contains sample test data for both users and items. All the preloaded users have the same `password: 321654`.
Alternatively, create a new file with the same name, and populate it with the following content:

```json
{
  "users": [],
  "ads": []
}
```
Once installed, start the server with

```sh
npm start
```

By default, the server will run on port 8000, so it can be accessed at http://127.0.0.1:8000/.

## Usage

- **Main page** with a listing of all items in the database and a search function by item name.
- **User registration** with validation for full name, email (which serves as the unique username), and password confirmation for added security.
- **Login** screen that automatically populates the email and password fields for newly registered users upon successful registration. Upon successful login, users are automatically directed to the main page.
- **Creation** of new advertisements, accessible only to logged-in users. Access to the advertisement creation page is restricted to logged-in users.
- **Deletion or editing** of advertisements owned by the logged-in user. Pages for deletion or editing are restricted and only accessible by the owner of the advertisement.
- Ads **images** are introduced via URL in a text field. If none is provided, a 'No image available' image is assigned. In case of an error while loading the URL, this same image is displayed.
- Press the **broccoli icon** at the top-left of any page, to return to home page.
- Each page shows a **loading spinner** while data is loading or being sent to the server, and a **notification shade** with explanatory text to inform the user, in green when everything has gone well, or in red when something has failed.
## Acknowledgments

ESLINT has been used to optimize code fault detection.

## Contact

You can contact me at:
paco.max@gmail.com or
[https://github.com/PaquitoGR](https://github.com/PaquitoGR)

---


