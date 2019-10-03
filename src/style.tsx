import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  .fresh-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin: 0.5em 0px;
  }

  .fresh-switch input {
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
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }

  .fresh-slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .fresh-slider {
    background-color: #2196f3;
  }

  input:focus + .fresh-slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .fresh-slider:before {
    transform: translateX(26px);
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

  .fresh-label {
    position: relative;
  }

  .fresh-title {
    display: block;
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
`

export default Global
