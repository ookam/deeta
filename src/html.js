import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta
          content='width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1, viewport-fit=cover'
          name='viewport'
        />
        <meta
          name="robots"
          content="noarchive"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.5.4/js/uikit.min.js"
        />
        <link
          rel="stylesheet"
          media="screen"
          href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.5.4/css/uikit.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ="
          crossorigin="anonymous"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
          className="uk-section-primary"
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
