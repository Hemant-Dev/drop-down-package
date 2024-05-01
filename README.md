# Dropdown Menu Creator

This JavaScript code provides functions to dynamically create dropdown menus and buttons with customizable styles. It includes functionality to toggle the visibility of dropdown menus when buttons are clicked.

## Functions

### 1. createButton(btnName, dropdownId)

This function creates a button element with the specified name and associates it with a dropdown menu using the provided ID.

- `btnName`: The text content of the button.
- `dropdownId`: The ID of the associated dropdown menu.

### 2. createDropDown(list)

This function creates a dropdown menu (unordered list) with the specified list items.

- `list`: An object containing the ID of the dropdown menu (`list.id`) and an array of items (`list.items`) to be displayed in the dropdown.

### 3. toggleDropdown(button)

This function toggles the visibility of the dropdown menu associated with the clicked button.

- `button`: The button element that triggered the dropdown toggle.

### 4. setStyle()

This function dynamically creates and appends a `<style>` element to the document head, providing CSS styles for buttons, list items, and dropdown menus.

### 5. initializeDropdowns(navData)

This function initializes dropdown menus based on the provided data.

- `navData`: An array containing objects representing the data for each dropdown menu/button combination. Each object should have the following properties:
  - `buttonName`: The name/text content of the button.
  - `dropdownId`: The ID of the associated dropdown menu.
  - `list`: An object containing the ID of the dropdown menu (`list.id`) and an array of items (`list.items`) to be displayed in the dropdown.

## Usage

1. Include the JavaScript file containing the above functions in your project.
2. Call the `initializeDropdowns(navData)` function with an array of data objects representing your dropdown menus/buttons.
3. Customize the CSS styles in the `setStyle()` function according to your design preferences.
4. Ensure that your HTML file contains an element with the ID "navbar" where the dropdown menus/buttons will be appended.

## Example

```javascript
const navData = [
  {
    buttonName: "Menu 1",
    dropdownId: "menu1",
    list: {
      id: "menu1",
      items: ["Item 1", "Item 2", "Item 3"],
    },
  },
  // Add more dropdown/button data objects as needed
];

initializeDropdowns(navData);
```
