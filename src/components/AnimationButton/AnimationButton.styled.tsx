import styled from "styled-components";

const StyledAnimationButton = styled.button`
  &.button {
    --color: hsl(208, 72%, 39%);
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    border: 3px solid var(--color);
    color: white;
    background-color: black;
    padding: 0.5em 1em;
    border-radius: 0.25em;

    position: relative;
    isolation: isolate;
  }

  &.button::after {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    inset: 0;

    scale: 0 1;
    transform-origin: right;
    transition: scale 450ms;
  }

  &.button:hover::after,
  &.button:focus-visible::after {
    transform-origin: left;
    scale: 1 1;
  }
`;

export default StyledAnimationButton;
