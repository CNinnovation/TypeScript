# Lab 1 - Prepare TypeScript Environment

## Install Git and GitHub Tools

1. Install the Git Tools [Git for Windows](https://git-for-windows.github.io/ "Git for Windows")
2. Register a GitHub Account at [GitHub](https://www.github.com "GitHub") if you don't have a GitHub Account yet and sign in to this account
3. Install GitHub Desktop [GitHub Desktop](https://github-windows.s3.amazonaws.com/GitHubSetup.exe "GitHub Desktop")
4. Install *GitHub Extensions to Visual Studio 2015* using Extensions and Updates within Visual Studio 2015
5. Clone the [course repository](https://github.com/CNinnovation/TypeScript "TypeScript Workshop") using one of the following options:

        a) Visual Studio 2015 Team Explorer
        b) the command line
        
```
git clone https://github.com/CNinnovation/TypeScript
```

## Install TypeScript using NPM

1. Install Node if it is not yet installed from [Node.js](https://nodejs.org "Node.js").
2. Install TypeScript using `npm install -g typescript`

Questions:

1. What can be installed with npm install?
2. What is the -g Option with npm install?


## Install Visual Studio Code

1. Install [Visual Studio Code](https://code.visualstudio.com/ "Visual Studio Code")


## Create a Hello, World Script

1. Create a HTML page that includes the JavaScript file hello.js
2. Create a hello.ts TypeScript file that writes a Hello, World! message
3. Compile the hello.ts TypeScript file using tsc
4. Open the HTML page and run the script

HTML File:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>TypeScript Sample</title>
</head>
<body>
  <h1>TypeScript Sample</h1>
  <script src="hello.js"></script>
</body>
</html>
```

TypeScript File:

```typescript
alert('hello, world!');
```

## Try Playground

1. Open Playground at TypeScriptLang: [Playground](http://typescriptlang.org/play/index.html "Playground")
2. Add the Hello, World! TypeScript code, check the generated JavaScript code and run the program

## ASP.NET Core

To create new Web applications, install .NET Core extensions to Visual Studio 2015

1. Install .NET Core on Windows using [Visual Studio official MSI installer](https://www.microsoft.com/net/core#windows ".NET Core")
2. Install the latest [NuGet Manager extensions for Visual Studio](https://www.microsoft.com/net/core#windows "NuGet")
