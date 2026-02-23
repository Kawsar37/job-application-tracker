1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById returns a single element, getElementsByClassName returns a HTML Collections, querySelector return the first element that match the CSS query, querySelectorAll returns a Node List.

2. How do you create and insert a new element into the DOM?

Ans: By using document.createElement(). Ex: if i want to create a div element then i wil use let element = document.createElement('div') and for insert the element into the DOM I can append as child like appendChild() or put like an innerHTML of an element.

3. What is Event Bubbling? And how does it work?

Ans: Event Bubbling is a process where an event starts at a target element and propagate up to parents elements in the DOM. If I clicked on a button then the click event occur and it will bubble up like the button -> parents -> body -> html -> document.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a technique to add a single event listener to parent element and handle all child event by using Event Bubbling. We do not need to add event listener to all element we can simply add a event listener to the parent element and we can use event.taget to identify the child element where event occur.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() stop the browser default behavior of an element such as form submission or link navigation and stopPropagation() stop the event bubbling. preventDefault() controls browser behavior and stopPropagation() controls event flow.
