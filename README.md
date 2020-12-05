# NameSearch Node App

A simple node application that will allow you to query [NameSpy REST API](https://www.namespy.dev/) for names

---

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/mahali00/NameSearch.git
    $ cd NameSearch
    $ yarn install

## Configure app

Open `./env` then edit it with your settings. You will need:

- PORT;
- API_URL;

## Running the project

    $ yarn start

    API endpoint

    GET /search?input=Kobi Bryant HTTP/1.1
    Host: localhost:4000

## Project Structure

The folder structure of this app is explained below:

| Name                    | Description                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| **node_modules**        | Contains all npm dependencies                                                                   |
| **src/api/middlewares** | Express middlewares which process the incoming requests before handling them down to the routes |
| **src/api/routes**      | Contain all express routes, separated by module/area of application                             |
| **src/utils**           | Contains all utility functions                                                                  |
| **index.js**            | Entry point to express app                                                                      |
| package.json            | Contains npm dependencies as well as [build scripts]                                            |
