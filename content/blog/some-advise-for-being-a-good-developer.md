---
title: "Some Advise If You Want To Be A Great Developer"
date: 2021-06-06T10:35:43+02:00
draft: true
---

I am a software developer for almost 8 years now. There is a lot that has changed during those years. I learned a lot. Both on the technological side but also as a human being. 

Last night I was thinking what a good software developer should have besides knowing his tech stack. 

This article is mostly targeted to new developers who just started their coding journey but these things also happen to more experienced developers. It's a good reminder to be aware of good coding practices.

For the coding example I am using TypeScript.

So here are (x) things that I believe you should know and expect.
## Write Code For Other Humans

> Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live"
> 
> -- <cite>John Woods </cite>

This might sound a little harsh but it captures the essence. You need to write code so that others can understand it easily. 

You might think that your jobs as a software developer is to write code. And it certainly is. Most of the time though you read code[^1]. 

And this is comprehensible. You have to read a lot of code to understand a code base at large. You have to review and refactor both your own code and those of others. Therefore maintainable code should be easy to read.

### Name Things Properly 

A function should always tell you what is does just by its name. And more important: just that, not more. What does the function `add(a: number, b: number): number` do? Well it adds the numbers `a` and `b` together and returns the result. Easy.

A bad example: `coords(x: number, y: number): number[]`. So we can see that this function wants to do something with coordinates `x` and `y`. But what exactly? The return type `array` is not helping. All we know is that we get an array back. Will it contain the `x` and `y`? Maybe, we don't know.

These mistakes happen quite often because you have a bias towards the project that you are working with. So for you `coords` might make total sense in that moment but a year later you certainly forgot. And we don't speak of others who don't know the project.

Other naming mistakes
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

Why is that better? In terms of how much code we've written the first one is much shorter. But there are at least two things that the second one does better.

In second one the code is the single source of truth. That means the code does exactly what we tell it to do. We increase the counters by X. Hence the function name.

Now in the first sample you could change the expression for `increasedCounter`.
```typescript
// map over counters array and increase them by x
const increasedCounters = counters.map(counter => counter + 100);
```
Can you spot the mistake? You know changed the function so that it always adds `100` but you forgot to change the comment which says `x`. "I could also forget to change the function name." Sure but it's much more likely that you change a function name than correcting a comment (personal experience).

There is another advantage. You made your code more modular. Meaning that you can reuse this function and benefit from it. If you change it you have to do it only once.

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
Don't be confused by this. This is TypeScript specific. What it basically does is allow the "map part" to be used on strings and numbers. Making it more versatile. It uses function overload to deal with the types.

But again there are no comments. Everything is described with code directly.

One more thing to comments. If you need comments and there is no way around it always describe the goal of the code is and NOT what is does. 

In our example we can see that we map over the counters. The comment is therefore useless. What could be the goal? Maybe a user triggered a button in a game which then needs to update some numbers in the UI. The counters could be those numbers. Describing that would make a much better comment as to why the code exists in the first place.

* split concerns (a function name with an "and" in it probably can be split into two) 
* reduce cognitive overload as much as possible
* think about your public API twice. Renaming a public function name can break systems.

## Legacy code is the norm

Speaking about legacy code. There are the norm. You will be dealing with those on a regular basis. 

* 70/30 is my ratio of legacy 
* Make improvements one step at a time
* Rewrite small bits and don't add more confusing code.

## Listen and discuss to push code quality

* Listen to what others say. Especially from senior peers. They were where your are. Think about it. Try to implement it yourself and figure out if it works out for you.
* If you have advice or criticism say it. Ask the other if you can make comments. This will ensure that they are ready for it. Having an opinion and articulating it pushes for code quality.

## You get better if you actually code yourself

* Tutorials are good. They show what to do. But they will not learn you the craft.
* Come up with your own project idea and implement what you saw in the tutorial. Try to explore more than what you just saw. 
* Write tutorials for others so that you can consolidate your knowledge.

## Google is your friend

[^1]: [Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship](https://www.goodreads.com/quotes/835238-indeed-the-ratio-of-time-spent-reading-versus-writing-is)
