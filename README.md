# Secret Manager Implementation with NestJS

This project demonstrates the implementation of Google Secret Manager using the NestJS framework. It provides a simple and efficient way to manage secrets such as API keys, database credentials, and other sensitive information in a secure manner. The goal is to show how to integrate Google Secret Manager into a NestJS application to enhance the security and management of sensitive data.

## Features

- Google Secret Manager Integration: Securely stores and accesses secrets using Google Cloud's Secret Manager.
- Environment-Based Secrets: Manages secrets based on different environments (e.g., development, production).
- Automatic Secret Retrieval: Fetches secrets dynamically during application runtime.
- Best Practices: Implements security best practices for managing sensitive information.

# Getting Started

Prerequisites
Node.js v14+ and npm
NestJS CLI
Google Cloud Account with Secret Manager API enabled

## Installation

Clone the repository:

bash

```bash
git clone https://github.com/vinapro91/poc-secret-manager.git
cd secret-manager-nestjs
```

Install dependencies:

```bash
yarn
```

Set up Google Cloud credentials:

Create a Google Cloud project.
Enable the Secret Manager API.
Create and download a service account key JSON file.
Set the GOOGLE_APPLICATION_CREDENTIALS environment variable to the path of the JSON file.
Configure the secrets:

Store your secrets in Google Secret Manager.
Update the configuration in the application to retrieve these secrets.

# Running the Application

To start the application, run:

```bash
npm run start:dev
```

## Usage

The application will demonstrate how to securely access and manage secrets using Google Secret Manager within a NestJS project. You can adapt the code to fit your specific needs, whether it’s securing API keys, database credentials, or other sensitive data.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.
