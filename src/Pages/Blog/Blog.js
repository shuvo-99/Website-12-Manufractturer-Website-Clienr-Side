import React from "react";

const Blog = () => {
  return (
    <div>
      <h1> 1 How will you improve the performance of a React Application?</h1>
      <p>
        Ans: Keeping component state local where necessary. <br />
        Memoizing React components to prevent unnecessary re-renders. <br />
        Code-splitting in React using dynamic import(). <br />
        Windowing or list virtualization in React. <br />
        Lazy loading images in React
      </p>
      <h1>
        2 What are the different ways to manage a state in a React application?
      </h1>
      <p>
        ans: about what types of state actually matter. There are four main
        types of state you need to properly manage in your React apps: Local
        state Global state Server state URL state
      </p>
      <h1>3 How does prototypical inheritance work?</h1>
      <p>
        ans: The Prototypal Inheritance is a feature in javascript used to add
        methods and properties in objects. It is a method by which an object can
        inherit the properties and methods of another object. Traditionally, in
        order to get and set the Prototype of an object, we use
        Object.getPrototypeOf and Object.
      </p>
      <h1>4. Why you do not set the state directly in React.</h1>
      <p>
        ans: One should never update the state directly because If you update it
        directly, calling the setState() afterward may just replace the update
        you made. When you directly update the state, it does not change
        this.state immediately. Instead, it creates a pending state transition,
        and accessing it after calling this method will only return the present
        value. You will lose control of the state across all components.
      </p>
      <h1>5.What is a unit test? Why should write unit tests? </h1>
      <p>
        ans: Unit testing ensures that all code meets quality standards before
        it's deployed. This ensures a reliable engineering environment where
        quality is paramount. Over the course of the product development life
        cycle, unit testing saves time and money, and helps developers write
        better code, more efficiently.
      </p>
    </div>
  );
};

export default Blog;
