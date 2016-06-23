# Lab 8 - Integration

## ASP.NET MVC Web Application

1. Create a new ASP.NET Web Application (.NET Framework)
2. Select MVC and select additional Web API for folders and core references

## Create a Hello View and Action Method

1. Create a view named *Hello* to the Views/Home folder
2. Add this method to the HomeController:

```csharp
public ActionResult Hello() => View();
```

3. Add a Input element with the id *name* to the View
4. Add a Button element with the id *button1*
5. Add a Div element with the id *div1*

## TypeScript Preparation

1. Add a **src** folder
2. Add a TypeScript file *helloworld.ts* to the src folder
3. Configure TypeScript to generate output to the /Scripts/App folder

## jQuery

1. Check if the jQuery Library is added
2. Add definitely typed for jQuery


## HelloWorld Domain Logic

1. Create the HelloWorld class 
2. Add a greet(name : string) method that returns "Hello, " prefixed to the name


## User Interface Logic

1. Create a Hello class for the Hello view
2. Use jQuery to retrieve the 

```javascript
/// <reference path="./helloworld.ts" />

$(() => {
    $("#button1").click(ev => {
        let name: string = $("#name").val();
        let greeting : string = new HelloWorld().greet(name);
        $("#div1").html(greeting);
    });
});
```

3. Add the JavaScript References to the HTML File

```html
<!-- reference -->
<script src="/Scripts/jquery-3.0.0.js"></script>
<script src="~/Scripts/App/helloworld.js"></script>
<script src="/Scripts/App/hello.js"></script>

<h2>Hello</h2>

<input type="text" id="name" name="name" />
<br />
<button id="button1" name="button1">Click Me!</button>
<br />
<div id="div1"></div>
```