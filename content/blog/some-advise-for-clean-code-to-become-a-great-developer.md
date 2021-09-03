---
title: "Some Advise For Clean Code To Become A Great Developer"
date: 2021-06-06T10:35:43+02:00
draft: true
---

I am a software developer for almost 8 years now. There is a lot that has changed during those years. I learned a lot. Both on the technological side but also as a human being. 

Last night I was thinking what a good software developer should have besides knowing his tech stack. 

This article is mostly targeted to new developers who just started their coding journey but these things also happen to more experienced developers. It's a good reminder to use good coding practices.

Initially I wanted to make it more generic but it got pretty code heavy. I still think the title fits though.

For the coding examples I am using TypeScript.

So here are (x) things that I believe you should know and expect.

## You get better if you actually code yourself

This is kind of obvious right? 

But with youtube and course platforms it is easy to distract yourself. Tutorial hell is a thing.

Watching many many videos and reading blogs can help you. In addition though you have to use what you've seen in a real project.

The best way to do this is to always start small. Make a todo app!

Uhgh, another todo app? Yes that's right. Make it. 

A todo app is actually a very good start because you get to practice different concepts such as 
* create, read, update and delete todos.
* listing todos (collections/arrays), bulk remove checked todos (collections/arrays again)

After you did this try to enhance your todo app or better: Come up with your own project.

Do you have a problem that you can automate? Or a problem that you need to solve?

Look around you. Look at friends and family. How could software help them?

* Come up with your own project idea and implement what you saw in the tutorial. Try to explore more than what you just saw. 
* Write tutorials for others so that you can consolidate your knowledge.

## Write Code For Other Humans

> Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live"
> 
> -- <cite>John Woods </cite>

This might sound a little harsh but it captures the essence. You need to write code so that others can understand it easily. 

You might think that your jobs as a software developer is to write code. And it certainly is. Most of the time though you read code[^1]. 

And this is comprehensible. You have to read a lot of code to understand a code base at large. 

You have to review and refactor both your own code and those of others. Therefore maintainable code should be easy to read.

### Name Things Properly 

A function should always tell you what is does just by its name. And more important: just that, not more. 

What does the function `add(a: number, b: number): number` do? Well it adds the numbers `a` and `b` together and returns the result. Easy.

A bad example: `coords(x: number, y: number): number[]`. So we can see that this function wants to do something with coordinates `x` and `y`. But what exactly? The return type `array` is not helping. All we know is that we get an array back. Will it contain the `x` and `y`? Maybe, we don't know.

These mistakes happen quite often because you have a bias towards the project that you are working with. 

So for you the name `coords` might make total sense in that moment but a year later you certainly forgot. And we don't speak of others who don't know the project.

Other naming mistakes and how to avoid them.
```typescript
// one letter variables
const d = new Date() // what does this date stand for?

const creationDate = new Date() // much clearer

// acronyms
let asp = 'application service provider?, average selling price?'

let averageSellingPrice = '50€'; // don't be lazy, this is much better 

// abbreviations
const br = 'break? brown? brunch?'

const brown = '#624a2e';

// meaningless names or names that don't contain what they tell you
const xyz = 'some random value';

const xyz = [2, 4.6, 9]; // probably coordinates 
const xyzCoordinates = [2, 4.6, 9]; // would be more precise
```

### Use Comments Wisely

Bad:
```typescript
const counters = [25, 3698, 369];
const x = 2;   

// map over counters array and increase them by x
const increasedCounters = counters.map(counter => counter + x);
```
Better:
```typescript
const counters = [25, 3698, 369];   

function increasedCountersByX(counters: int[], x: int): int[] {
    return counters.map(counter => counter + x);
}

const increasedCounters = increasedCountersByX(counters, 2);
```

Why is that better? In terms of how much code we've written the first one is much shorter.

Let's debunk this.

For the second one the code is the single source of truth. That means that the function does exactly what the function name suggests.

That's the key point. You are using ACTUAL code to describe what should happen. You're not using a comment that is not executed.

Again, why is this better? You can now make assumptions about the code that you are using.

If your function signature looks like this `first_array_element(arr: any[]): any` you can easily write a test for it without even looking at its code.

This is because the function name tells you that it gives you the first element of an array. You can test for that.

If the function does not work like that the function has a bug or is wrongly named.

This raises the question: Why should I use a comment to describe a functionality when I can use a proper code for it? 

Don't be afraid to capsule logic into functions. Even if it's one or two lines of code.

Let's come back to the first example again You could change the expression for `increasedCounter`.
```typescript
// map over counters array and increase them by x
const increasedCounters = counters.map(counter => counter + 100);
```
Can you spot the mistake? You know changed the function so that it always adds `100` but you forgot to change the comment which says `x`. 

Now you have a comment that suggests the wrong thing. The code still works but it's a mistake and will be confusing in the future.

"I could also forget to change the function name." Sure but it's much more likely that you change a function name than correcting a comment (personal experience).

Also consider that my examples are kept short and simple to not make things more complicated.

In the real world those comments are more complex and obvious mistakes are not that obvious anymore.

There is another advantage. 

You made your code more modular. Meaning that you can reuse this function and benefit from it in multiple places.

You actually can go further with this. You can make this function generic and allow more types to be processed through this function.
```typescript
const counters = [25, 3698, 369];   

function genericAdd(elements: number[], x: number): number[]
function genericAdd(elements: string[], x: string): string[]
function genericAdd(elements: any[], x: any): string[] | number[] {
    return elements.map(element => element + x);
}

function increasedCountersByX(counters: number[], x: number): number[] {
    return genericAdd(counters, x);
}

function addWorldToStrings(strings: string[]): string[] {
    return genericAdd(strings, ' World');
}

const increasedCounters = increasedCountersByX(counters, 2);
const worldedStrings = addWorldToStrings(['Hello', 'You are the']);
```
Don't be confused by that. This is TypeScript specific. What it basically does is  it allows the "map part" to be used on strings and numbers. Making it more versatile. It uses function overload to deal with the types.

But again there are no comments. Everything is described with code directly.

One more thing to comments. If you need comments and there is no way around it always describe the goal of the code is and NOT what is does. 

In the first example we can see that we map over the counters. The code is tells us. The comment is therefore useless. 

What could be the goal? 

Maybe a user triggered a button in a game which then needs to update some numbers in the UI. The counters could be those numbers. 

Describing that would make a much better comment as to why the code exists in the first place.

### Split Concerns

I think a lot of people start writing code in an imperative way. No functions. No classes. No structure.

You learn the basics. `if` - `else`, `for`, `while` and so on.

Then your first program is always of type "if this happens then do that, then do this things and if the other thing happens to that again".

I certainly was introduced exactly this way, but maybe I am wrong and this has changed over the past years.

Anyhow this type of programming often is often translated into other paradigms. 

What does that mean?

When you first learn about OOP for example the main keypoints that get taught are classes, how to instantiate them, how to call methods and how extension works.

You learn the technical parts. You know how to do OOP. But at this point you don't learn how to use it effectively. You will use imperative code and stuff in into OOP code.

You end up with classes that have huge methods that do all kinds of things. Mixing and matching concerns and often time repeating themselves.

Then you get hired by a company and use what you have learned. Which then ends in a code base that is maybe OOP but messy and most of the time hard to maintain.

In short: a huge number of code bases are a mess. More so in smaller companies. 

I don't wanna attack anyone here. I think that (especially) universities don't teach clean code that well. At lot developers that I know say that they had to relearn a lot when they worked at real projects.

I wanted to give an introduction of why I think splitting concerns is a crucial concept to learn and to criticize the way programming is taught in school a little bit.

Don't feel discouraged now. Programming is a never ending learning experience. Everyone started somewhere.

As a small insert the first advice that I wanna give you: If you have the opportunity, always let more experienced developers review your code if you're just getting started.

Listen to them. You don't have to always agree and discussion is encouraged. Just be open to critique and think about it.

But let's look at some code to better understand what splitting concerns means in practice.

```typescript
class Person {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }

    updateDbAndSendEmail() {
        ...
    }
}

const person = new Person('Bob');
person.name = 'Max';
person.updateDbAndSendEmail();
```
This code is pretty straight forward. We have a `Person` class that has one property `name`. 

We instantiate a person, change their name and update the database plus send an email notification to someone.

So far so good! 

But actually this is bad code. Why? Because The class `Person` and its method `updateDbAndSendEmail` do things that they should not be capable of.

What is wrong exactly? I give you some hints:
* Should the Person know how to save itself to a database? What if there is no database? What does the method do then?
* Should the person know how to send an email? 
* What if we want to capitalize the name before sending the email but after saving it to the database. How would we do that?
* What if we don't want to send an email but save to the database?
* The method `updateDbAndSendEmail` does to many things. An "and" is always a bad sign in a method name.
* The `Person` class does things that it should not know about. Sending email or accessing a database is not the concern of a person.
* We are not able to change the flow of the updating process. We are bound to sending an email every time we update the person.

Now we will refactor this class to be more useful.
```typescript
class Person {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }

    capitalizeName() {
        // ...
    }
}

class Mailer {
    notify(message: string) {
        // ...
    }
}

class Database {
    updatePerson(person: Person) {
        // ...
    }
}

function updatePersonAndSendEmail(person: Person) {
    (new Database).updatePerson(person);
    person.capitalizeName();
    (new Mailer).notify(`Person ${person.name}`);
}

// same functionality as in the first example
const person = new Person('Bob');
person.name = 'Max';
updatePersonAndSendEmail(person);

// just save to the Database
person.name = 'Beth';
(new Database).updatePerson(person);
```
While this code is still far from perfect we managed to make our code more modular and split concerns into different classes.

We wrote more (boilerplate) code but we gained flexibility and maintainability.

The `Person` just holds its name und leaves the updating and email sending to the `Database` and `Mailer` class. 

In addition we are now able to just update the name of the person without sending an email to someone.

We have achieved composable code. 

Instead of using one method that is not extendible we used different classes and methods to compose the functionality that we desired.

### Think About Your Public API Twice. 

* Be careful what you expose
* Be private by default
* Renaming a public function name can break systems.

## Legacy code is the norm

Speaking about legacy code. There are the norm. You will be dealing with those on a regular basis. 

* 70/30 is my ratio of legacy 
* Make improvements one step at a time
* Rewrite small bits and don't add more confusing code.

## Listen and discuss to push code quality

* Listen to what others say. Especially from senior peers. They were where your are. Think about it. Try to implement it yourself and figure out if it works out for you.
* If you have advice or criticism say it. Ask the other if you can make comments. This will ensure that they are ready for it. Having an opinion and articulating it pushes for code quality.



## Google is your friend

[^1]: [Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship](https://www.goodreads.com/quotes/835238-indeed-the-ratio-of-time-spent-reading-versus-writing-is)
