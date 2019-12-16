import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  :root {
    --fresh-tooltip-color: #000;
    --fresh-tooltip-background: #eee;
    --fresh-toggle-color: #ccc;
    --fresh-toggle-on-color: #2196f3;
  }

  input,
  select,
  textarea,
  .fresh-input {
    background-color: transparent;
    box-sizing: border-box;
    box-shadow: none;
    max-width: 100%;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: inherit;
    border-radius: 3px;
    font: inherit;
    margin: 0.5em 0px;
    padding: 0.75em;
    transition: border-color 0.2s ease 0s;
  }

  /* Text Area and Markdown */
  textarea,
  .fresh-input-textarea,
  .fresh-input-markdown {
    min-height: 6rem;
  }
  .fresh-markdown-wrapper {
    .fresh-input-markdown {
      border-color: #eee; 
    }
    .fresh-input-textarea,
    .fresh-input-markdown {
      width: 100%;
    }
    @media (min-width: 800px) {
      display: flex;
      .fresh-input-textarea {
        width: 50%;  
      }
      .fresh-input-markdown {
        width: calc(50% - 0.5em);  
        margin-left: 0.5em;
      }
    }
  }
  
  /* Label and Tooltip */
  .fresh-label {
    position: relative;
  }

  .fresh-title {
    display: flex; 
    align-items: center;
    .fresh-tooltip {
      position: relative;
      color: var(--fresh-tooltip-color);
      &:after {
        position: absolute;
        left: 150%;
        min-width: 100px;
        content: attr(data-tooltip);
        opacity: 0;
        transition: all .3s ease-in-out .35s;
        visibility: hidden;
        z-index: 2;
        position: absolute;
        background-color: var(--fresh-tooltip-background);
        padding: 0.75em;
        border-radius: 3px;
        font-size: 0.8em;
      }
      &:hover:after {
        opacity: 1;
        left: 130%;
        visibility: visible;
      }
      .fresh-tooltip-icon {
        position: relative;
        height: 0.8em;
        width: 0.8em;
        min-height: 0.8em;
        min-width: 0.8em;
      }
    }
  }

  /* Reference Field */
  .fresh-focused {
    border: 1px solid #eee;
    max-height: 200px;
    overflow-y: scroll;
    position: absolute;
    background: white;
    width: 100%;
    margin-top: -0.5em;
    border-top: 0;
  }

  /* Tag Field */
  .fresh-input-tags {
    margin-top: 1rem;
  }

  .react-tagsinput-tag {
    background: #eee;
    padding: 6px 10px;
    margin: 0 6px 0 0;
  }

  .react-tagsinput-input {
    margin-top: 1rem;
    display: block;
  }

  /* Toggle Field */
  .fresh-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin: 0.5em 0px;
    .fresh-input-toggle {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .fresh-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--fresh-toggle-color);
      transition: 0.4s;
      border-width: 1px;
      border-style: solid;
      border-image: initial;
      border-color: inherit;
      border-radius: 34px;
      &.on {
        background-color: var(--fresh-toggle-on-color);
        &:focus {
          box-shadow: 0 0 1px var(--fresh-toggle-on-color);
        }
        &:before {
          transform: translateX(26px);
        }
      }
      &:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        transition: 0.4s;
        border-width: 1px;
        border-style: solid;
        border-image: initial;
        border-color: inherit;
        border-radius: 50%;
      }
    }
  }
`

export default Global
