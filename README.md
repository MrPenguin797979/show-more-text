# Show More Text Library

## Benefits

- Can use `transition` for the element.
- The data doesn't reload, so very fast.
- Uses _algorithms_ to show more text.

## Properties

- _Text Selector_ (required)
- _Font Size_ (default: `16`)
- _Line Height_ (default: `1.6`)
- _Line Clamp_ (default: `5`)
- _Show More Text_ (default: `See more`)
- _Hide Text_ (default: `See less`)

## Usage

```
ShowMoreText({
  textSelector: ".paragraph",
  fontSize: 15,
  lineHeight: 1.5,
  lineClamp: 3,
  showMoreText: "See more",
  hideText: "See less"
});
```
