# Forms

Gateway into your backend of the application – the user provides data in a form, and you do stuff with it.

## The form element

Container element. The form element wraps all of the inputs a user will interact with on a form.

Accepts two essential attributes

- action attribute
  - takes a URL value that tells the form where it should send its data to be processed.
- method attribute which
  - tells the browser which HTTP request method it should use to submit the form

```html
<form action="example.com/path" method="post">

</form>
```

## Form controls

These are all the elements users will interact with on the form, such as text boxes, dropdowns, checkboxes and buttons.

## The input element

Accepts a type attribute which tells the browser what type of data it should expect and how it should render the input element.

## Text input

```html
<form action="example.com/path" method="post">
  <input type="text">
</form>
```

## Labels

Inform users what type of data they are expected to enter.

```html
<form action="example.com/path" method="post">
  <label for="first_name">First Name:</label>
  <input type="text" id="first_name">
</form>
```

Labels accept a for attribute, which associates it with a particular input. The input we want to associate with a label needs an id attribute with the same value as the label’s for attribute.

When a label is associated with an input and is clicked, it will focus the cursor on that input, ready for the user to input some data. This helps make our forms more accessible to users who rely on assistive technologies.

## Placeholder attribute

```html
<label for="first_name">First Name:</label>
<input type="text" id="first_name" placeholder="Bob...">
```

## The name attribute

Let the backend, where we send our data, know what each piece of data represents.
```html
<label for="first_name">First Name:</label>
<input type="text" id="first_name" name="first_name">
```

The name attribute serves as a reference to the data inputted into a form control after submitting it. You can think of it as a variable name for the input. Form input should always have a name attribute; otherwise, it will be ignored when the form is submitted.

```html
<form action="https://httpbin.org/post" method="post">
  <div>
    <label for="first_name">First Name:</label>
    <input type="text" name="first_name" id="first_name">
  </div>

  <div>
    <label for="last_name">Last Name:</label>
    <input type="text" name="last_name" id="last_name">
  </div>

  <div>
    <label for="age">Age:</label>
    <input type="number" name="age" id="age">
  </div>

  <button type="submit">Submit</button>
</form>
```

The output we care about from the response is the “form” object. It should look something like this:

```html
"form": {
    "age": "33",
    "first_name": "John",
    "last_name": "Doe"
  },```

### Using form controls outside of forms

It’s worth mentioning that you can use any of the form controls HTML provides outside of the <form> element, even when you don’t have a backend server where you can send data.

For example: have an input that gets some data from a user and display that somewhere else on the page with JavaScript

```hml
<div>
  <label for="username">What's your name?</label>
  <input type="text"id="username">
  <button class="greet-btn">Greet Me</button>
</div>

<h1 class="greeting"></h1>
```

```js
const name = document.querySelector("#username")
const greetMeButton = document.querySelector(".greet-btn")
const greetingOutput = document.querySelector(".greeting")

greetMeButton.addEventListener('click', (event) => {
   greetingOutput.innerText = `Hello ${name.value}`;
})
```

## The type attribute

Email inputs are specialized text inputs just for email addresses. They are different from text inputs in that they will display a different keyboard which will include the @ symbol on mobile devices to make entering email addresses easier. They also validate that the user has entered a correctly formatted email address.

Password inputs are another specialized text input. They differ from regular text inputs in that they mask the inputted data with another character – usually an asterisk (*) or bullet point (•) – to prevent anyone from seeing what has been entered.

The number input only accepts number values and ignores any other characters the user tries to enter.

To collect dates from a user, we can use a date input. This input is unique because it provides a better user experience for choosing dates by rendering a simple date picker calendar.

## Text area

To create a text area, we use the element:

`<textarea></textarea>`

Unlike input elements, Textarea elements do have a closing tag. This allows you to wrap some initial content you want the text area to display:

```html
<textarea>Some initial content</textarea>
```

Text area elements accept a couple of unique attributes that other form controls do not. These are the rows and cols attributes. They allow you to control the initial height (rows) and width (cols) of the text area:

```html
<textarea rows="20" cols="60"></textarea>
```

Selection elements
Sometimes you will want users to select a value from a predefined list. This is where select elements will be useful.

## Select dropdown

```html
<select name="Car">
  <option value="mercedes">Mercedes</option>
  <option value="tesla">Tesla</option>
  <option value="volvo">Volvo</option>
  <option value="bmw">BMW</option>
  <option value="mini">Mini</option>
  <option value="ford">Ford</option>
</select>
```

All the option elements should have a value attribute (otherwise the text content inside is used). This value will be sent to the server when the form is submitted.

We can set one of the options to be the default selected element when the browser first renders the form by giving one of the options the selected attribute:

```hml
<select name="Car">
  <option value="mercedes">Mercedes</option>
  <option value="tesla">Tesla</option>
  <option value="volvo" selected>Volvo</option>
  <option value="bmw">BMW</option>
  <option value="mini">Mini</option>
  <option value="ford">Ford</option>
</select>
```

Split the list of options into groups using the `<optgroup>` element. The optgroup element takes a label attribute which the browser uses as the label for each group:

```html
<select name="fashion">
  <optgroup label="Clothing">
    <option value="t_shirt">T-Shirts</option>
    <option value="sweater">Sweaters</option>
    <option value="coats">Coats</option>
  </optgroup>
  <optgroup label="Foot Wear">
    <option value="sneakers">Sneakers</option>
    <option value="boots">Boots</option>
    <option value="sandals">Sandals</option>
  </optgroup>
</select>
```

Radio buttons

Create multiple options that the user can choose one of. To create radio buttons, we use the ever adaptable input element again with a type attribute of “radio”:

```html
<h1>Ticket Type</h1>
<div>
  <input type="radio" id="child" name="ticket_type" value="child">
  <label for="child">Child</label>
</div>

<div>
  <input type="radio" id="adult" name="ticket_type" value="adult">
  <label for="adult">Adult</label>
</div>

<div>
  <input type="radio" id="senior" name="ticket_type" value="senior">
  <label for="senior">Senior</label>
</div>
```

When we select one of the radio buttons and then select another, it will deselect the first one. Radio buttons know to do this because they have the same name attribute. This is how the browser knows these elements are part of the same group of options.

We can set the default selected radio button by adding the checked attribute to it:

```html
<h1>Ticket Type</h1>
<div>
  <input type="radio" id="child" name="ticket_type" value="child">
  <label for="child">Child</label>
</div>

<div>
  <input type="radio" id="adult" name="ticket_type" value="adult" checked>
  <label for="adult">Adult</label>
</div>

<div>
  <input type="radio" id="senior" name="ticket_type" value="senior">
  <label for="senior">Senior</label>
</div>
```

## Checkboxes

To create a checkbox, we use the input element with a type attribute of “checkbox”:

```html
<h1>Pizza Toppings</h1>

<div>
  <input type="checkbox" id="sausage" name="topping" value="sausage">
  <label for="sausage">Sausage</label>
</div>

<div>
  <input type="checkbox" id="onions" name="topping" value="onions">
  <label for="onions">Onions</label>
</div>

<div>
  <input type="checkbox" id="pepperoni" name="topping" value="pepperoni">
  <label for="pepperoni">Pepperoni</label>
</div>

<div>
  <input type="checkbox" id="mushrooms" name="topping" value="mushrooms">
  <label for="mushrooms">Mushrooms</label>
</div>
```

We can also have a single checkbox when we want users to toggle if they want something to be true or false. Like signing up to a newsletter when they create an account for example:

```html
<div>
  <input type="checkbox" id="newsletter" name="news_letter">
  <label for="newsletter">Send me the news letter</label>
</div>
```

We can set checkboxes to be checked by default on page load by giving them a checked attribute:

```html
<div>
  <input type="checkbox" id="newsletter" name="news_letter" checked>
  <label for="newsletter">Send me the news letter</label>
</div>
```

## Buttons

The button element creates clickable buttons that the user can interact with to submit forms and trigger other actions.

To create a button, we use the `<button`> element. The content or text we want to have displayed inside the button will go within the opening and closing tags:

`<button>Click Me</button>`
The button element also accepts a type attribute that tells the browser which kind of button it is dealing with. There are three types of buttons available to us.

### Submit buttons

Once a user is finished filling in a form, they will need a way to submit it. There is a specialized button for this; the submit button. When a submit button is clicked, it will submit the form it is contained within. The type attribute has a value of submit by default, i.e. if the type is not specified or the value provided is invalid.

To create a submit button, we use the button element with a type attribute of “submit”:

`<button type="submit">Submit</button>`

### Reset button

A reset button clears all the data the user has entered into the form and sets all the inputs in the form back to what they were initially.

To create a reset button, we use the button element with a type attribute of “reset”:

`<button type="reset">Reset</button>`

### Generic button

The third and final button type is simply a generic button that can be used for anything. It’s commonly used with JS for creating interactive UI’s.

To create a generic button, we use the button element with a type attribute of “button”:

`<button type="button">Click to Toggle</button>`

It is important to remember that a button within a form with the type value of submit (which happens to be the default value) will always try to make a new request and submit data back to the server. Hence, for buttons that are used within a form for different purposes other than submitting the data, the type attribute should always be specified to avoid unwanted effects of submitting a form.

## Organizing form elements

HTML provides a couple of elements that make it easy to organize forms into sections that are visually distinct and manageable to digest.

### Fieldset element

The fieldset element is a container element that allows us to group related form inputs into one logical unit.

To create a fieldset, we use the `<fieldset>` element. Whatever form inputs we want to group together go within the opening and closing fieldset tags:

```html
<fieldset>
  <label for="first_name">First Name</label>
  <input type="text" id="first_name" name="first_name">

  <label for="last_name">Last Name</label>
  <input type="text" id="last_name" name="last_name">
</fieldset>
```

### Legend

The legend element is used to give field sets a heading or caption so the user can see what a grouping of inputs is for.

To create a legend, we use the `<legend>` element with the text we want to display within its opening and closing tags. A legend should always come right after an opening fieldset tag:

```html
<fieldset>
  <legend>Contact Details</legend>

  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="phone_number">Phone Number:</label>
  <input type="tel" id="phone_number" name="phone_number">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
</fieldset>

<fieldset>
  <legend>Delivery Details</legend>

  <label for="street_address">Street Address:</label>
  <input type="text" id="street_address" name="street_address">

  <label for="city">City:</label>
  <input type="text" id="city" name="city">

  <label for="zip_code">Zip Code:</label>
  <input type="text" id="zip_code" name="zip_code">
</fieldset>
```

A common use-case for these elements is using a fieldset to group radio buttons and using a legend to communicate to the user what each of the options is ultimately for:

```html
<fieldset>
  <legend>What would you like to drink?</legend>

  <div>
    <input type="radio" name="drink" id="coffee" value="coffee">
    <label for="coffee">Coffee</label>
  </div>

  <div>
    <input type="radio" name="drink" id="tea" value="tea">
    <label for="tea">Tea</label>
  </div>

  <div>
    <input type="radio" name="drink" id="soda" value="soda">
    <label for="soda">Soda</label>
  </div>
</fieldset>
```

<https://developer.mozilla.org/en-US/docs/Learn/Forms#introductory_guides>

<https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form>

## Required validation

We will often want to ensure specific fields have been filled in before submitting the form, for example, the email and password in a login form.

```html
<form action="#" method="get">
  <div>
    <label for="user_email">*Email:</label>
    <input type="email" id="user_email" name="user_email" required>
  </div>
  <br>

  <div>
    <label for="user_password">*Password:</label>
    <input type="password" id="user_password" name="user_password" required>
  </div>

  <button type="submit">Login</button>
</form>
```

To ensure a good user experience and to meet accessibility guidelines, we should always indicate which fields are required. This will often be done by adding an asterisk(*) to the required field label.

## Text length validations

```html
<form action="#" method="get">
  <div>
    <textarea placeholder="What's happening?" minlength="5" maxlength="20"></textarea>
  </div>
  
  <button type="submit">Tweet</button>
</form>
```

## Pattern validations

```html
<form action="#" method="get">
  <div>
    <label for="zip_code">Postal / Zip Code:</label>
  </div>

  <input type="text" id="zip_code" name="zip_code" pattern="(\d{5}([\-]\d{4})?)" required>

  <div>
    <button type="submit">Submit</button>
  </div>
</form>
```

Client-side validations are not a silver bullet for ensuring users enter the correct data. To ensure the integrity of any user data coming into our systems, we should also have server-side validations in place.
