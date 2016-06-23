# Lab 7 - Object Orientation

## Person

1. Create a class `Person`
2. Add private fields `_firstname` and `_lastname`
3. Define a constructor to initialize these fields, but passing the fields should be optional
4. Add get and set accessors to these fields
5. Define a function `display` that writes information about the field values to the console
6. Define a function named `driveacar`. The implementation should write the name of the person and the information that the person drives slow to the console
6. Instantiate a `Person` object and invoke the `display` function witin *program.ts*

##  Rectangle

1. Create a `Rectangle` class with members for `width` and `height`
2. Create a `display` function that shows the values of the rectangle

## Displayable

1. Define the interface `Displayable` that contains a declaration for the `display` method
2. Let `Person` and `Rectangle` implement the interface `Displayable`
3. Define a global display method that receives an `Displayable` from the parameter
4. Invoke the `display` method passing rectangles and persons within *program.ts*

## Racer

1. Create a class `Racer` that derives from the base class `Person`
2. Add an additional private member for a car
3. Define a constructor that initializes `_firstname`, `_lastname`, and `_car`
4. Define the function `driveacar` that is similar to the implementation of the `Person` class, but the result is the person drives fast

## Compile and run the program

1. Compile all TypeScript Files to one JavaScript file with **tsc program.ts -out out.js**
2. Run the program using node **node out.js**




