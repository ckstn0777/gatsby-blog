import { css } from '@emotion/react';

export const postStyle = css`
  font-size: 1.5rem;
  margin-top: 2rem;
  word-break: break-all;

  h2 {
    margin: 32px 0 16px;
  }
  h3 {
    margin: 28px 0 16px;
  }
  h4 {
    margin: 14px 0 16px;
  }

  p {
    line-height: 1.8;
    margin: 1rem 0;
  }

  & :not(pre) > code {
    padding: 2px 6px;
    margin: 0 2.5px;
    border-radius: 5px;
    box-shadow: 0px 0px 1px 0px rgb(0 0 0 / 50%);
    color: black !important;
    -webkit-box-decoration-break: clone;
    background: linear-gradient(90deg, #73cbed 0%, #81f3bf 100%);
  }

  .gatsby-highlight {
    position: relative;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      content: attr(data-language);
      text-indent: 15px;
    }
    &[data-language='text'],
    &[data-language='none'] {
      &::before {
        display: none;
      }
    }
    pre {
      overflow-x: auto;
      overflow-y: hidden;
      background-color: rgb(40, 42, 54) !important;
      box-shadow: rgba(0, 0, 0, 0.55) 0px 6px 10px;
      margin-bottom: 2rem;
      font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New,
        monospace !important;
      code {
        font-family: inherit;
        line-height: 1.25em;
        color: #50fa7b;
        background-color: inherit;
        .keyword {
          color: #ff79c6;
        }
        .comment {
          color: #999;
        }
        .punctuation {
          color: white;
        }
        .string {
          color: #f1fa8c;
        }
        .function {
          color: #66d9ef;
        }
        .class-name {
          color: white;
        }
        .builtin {
          color: white;
        }
        .operator {
          color: #ff79c6;
        }
        .number {
          color: #bd93f9;
        }
      }
      .language-html {
        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.url,
        .token.inserted {
          color: #50fa7b;
        }
        .token.property,
        .token.tag,
        .token.boolean,
        .token.number,
        .token.constant,
        .token.symbol,
        .token.deleted {
          color: #ff79c6;
        }
        .token.atrule,
        .token.attr-value,
        .token.keyword {
          color: #f1fa8c;
        }
      }
    }
  }

  ${highlight('html', 'html')}
  ${highlight('javascript', 'JS')}
  ${highlight('css', 'CSS')}
  ${highlight('python', 'PYTHON')}
  ${highlight('shell', 'SHELL')}
 

  blockquote {
    margin: 24px 0;
    padding: 20px 22.4px;
    text-align: left;
    border-left: 5px solid #bdbdbd;
    background-color: #eeeeee;
  }

  a {
    color: #00bfa5;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  ul li {
    margin-left: 19px;
    // list-style: circle;
  }

  ol li {
    margin-left: 19px;
  }

  .gatsby-resp-image-wrapper {
    max-width: 640px;
    margin: 40px 0 16px;
    overflow: hidden;
    border-radius: 6px;
  }

  .gatsby-resp-image-wrapper + em {
    font-style: normal;
    color: #616161;
    display: block;
    margin-bottom: 40px;
    text-align: center;
    font-size: 1.2rem;
  }
`;

function highlight(language: string, text: string) {
  return css`
    .gatsby-highlight[data-language=${language}]::before {
      color: #ccc;
      content: ${text};
      text-align: end;
      top: 0.7rem;
      left: -1rem;
    }
  `;
}
