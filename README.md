# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Components explained

## Sidebar

Renders a list of custom Link components.
Props to pass into link components:
An array of objects. Objects should have keys of "label" and "path".
The "label" keys value will be the visible text of the link.
The "path" keys value will be the URL path to be navigated to.

```
Example: const links = [
{ label: "Dropdown", path: "/" },
{ label: "Accordion", path: "/accordion" },
{ label: "Buttons", path: "/buttons" },
{ label: "Modal", path: "/modal" },
{ label: "Table", path: "/table" },
{ label: "Counter", path: "/counter" },
];
```

## Dropdown

Props to pass in:
Array of objects. Objects should have keys of "id", "label" and "value".
The "label" keys value will appear as the visible text in list of dropdown options.
The "value" keys value will be the data to be operated on depending on the selected option.

```
Example: const options = [
{ label: "Red", value: "red" },
{ label: "Green", value: "green" },
{ label: "Blue", value: "blue" },
];
```

## Accordion

Props to pass in:
Array of objects. Objects should have keys of "id", "label", and "content"
The "label" keys value will be the visible text for accordion options.
The "content" keys value will be the visible text of the expanded option.

Example:

```
const items = [
{
id: 1,
label: "Can I use React on a project?",
content:
"You can use react on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. ",
},
{
id: 2,
label: "What day is it?",
content:
"You can use react on any project you want. You can use React on any project you want. You can use React on any project you want. You can use react on any project you want.",
}
]


```

## Button

Use as you would a JSX button element. Pass only one prop of either "primary, secondary, warning, success or danger" or none.
Pass in props of "rounded", "outline" or both if you would like their styling to be applied else omit them. Event handlers can be passed down.

```
Example: <Button success rounded outline className="mb-5" onClick={handleClick}>This is a custom button</Button>
```

## Modal

All necessary props are in place.
Only need to change text of the Button and Modal components inside "actionBar" variable as well as text for Button componenet in return value of ModalPage and any content you wish for the page.

Example:

```
const actionBar = (
<div>
<Button onClick={handleClose} primary>
:arrow_forward: Accept
</Button>
</div>
);
const modal = (
<Modal onClose={handleClose} actionBar={actionBar}>
<mark><p>Here is an important agreement for you to accept</p></mark>
</Modal>
);
return (
<div>
<Button onClick={handleClick} primary>
<mark>Open Modal</mark>
</Button>
{showModal && modal}
<mark>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
condimentum, purus sed placerat ullamcorper, erat ligula gravida lacus,
tempor auctor velit massa et felis. Curabitur sed lectus et ante
porttitor volutpat. Ut eleifend dapibus erat sit amet iaculis.
Suspendisse potenti. Nullam id justo ut justo gravida mollis. Donec
justo felis, hendrerit quis fringilla quis, faucibus vitae ligula.
Curabitur mollis vulputate nulla sed auctor. Cras id tortor tortor.
</p>
</mark>
```

## Table/Sortable Table

Code that needs to be provided by user of this componenet.

### In the TablePage component

- A variable called "data" pointing to an array of objects that will represent rows of the table.

```
const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];
```

- A variable called "config" pointing to an array of objects that will control how to configure table data. add the "sortValue" property to make that column sortable.

```
const config = [
    {
      label: "Fruit",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
  ];


```

- A variable called "keyFn" that points to a function that returns a key to be used in list creation.

```
const keyFn = (fruit) => {
    return fruit.name;
  };
```

### In the SortableTable component

- Replace the properties being accesed on the "column" object with the property needed according to your needs.

### In the Table component

- Replace the properties being accesed on the "column" object with the property needed according to your needs.

## Counter

No props are needed.
