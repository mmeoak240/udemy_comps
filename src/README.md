# Components explained

## Sidebar

Props to pass in:
Array of objects. Objects should have keys of "label" and "path".
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
Array of objects. Objects should have keys of "label" and "value".
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

Example:

```
const items = [
{
id: 1,
label: "Can I use React on a project?",
content:
"You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want. ",
},
{
id: 2,
label: "What day is it?",
content:
"You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.",
}
]

```

## Button

Use as you would a JSX button element. Pass only one prop of either "primary, secondary, warning, success or danger" or none.
Pass in props of "rounded", "outline" or both if you would like their styling to be applied else omit them. Event handlers can be applied.

```
Example: <Button>This is a custom button</Button>
```

## Modal

## Table

## Counter
