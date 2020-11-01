# Easylayout

A simple layout component in react js

## Installation

`npm i @vicmie/easylayout `

1. FlexLayout Component
2. FlexChild Component
3. PositionedElement
4. ListItem
5. List

`How to use`

```js
import React from "react";
import { PositionedElement, List, ListItem } from "@vicmie/easylayout";

{
  /* building a sidebar that is fixed to the left of the webpage  */
}

const SideBar = () => (
  <PositionedElement left={0.3} fixed height="100vh">
    <ListItem>
      <List icon="❤">Home</List>
      <List icon="❤">About</List>
      <List icon="❤">contact</List>
    </ListItem>
  </PositionedElement>
);
```
