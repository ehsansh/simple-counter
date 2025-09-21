# Counter Component Challenge

This project implements a simple counter component as part of a React + TypeScript coding challenge.  
The counter includes:

- A display showing the current count
- Buttons to increment and decrement the count
- The count never goes below zero

---

## Tech Stack

- **React** (with functional components + hooks)
- **TypeScript** (for type safety)
- **TailwindCSS** (for utility-first styling)

---

## Project Structure

- `useCounter` → A custom hook that encapsulates the counter logic (increment, decrement, preventing negative values).
    - This makes the logic modular and reusable.
- `Button` → A **dumb/presentational component** that only handles styling and rendering.
    - It follows the **principle of least privilege**: it doesn’t manage its own state; instead, parent components pass actions as props.
- `Counter` → A container component that wires `useCounter` with `Button`.

---

## Design Decisions

- **Separation of Concerns**:  
  Logic is inside the hook, UI is inside the components.
- **Accessibility**:  
  Buttons use the native `disabled` attribute and meaningful text for screen readers.
- **Styling**:  
  Used TailwindCSS with a small `Button.styles.ts` file to centralize style definitions.
- **Extensibility**:  
  Counter logic is abstracted into a hook, making it easy to plug into other components in the future.

---

## Usage

```bash
# Install dependencies
npm install

# Run the project
npm run dev
```
