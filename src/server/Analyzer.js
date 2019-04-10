/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application strings into before sending it to the client.
 */
const Analyzer = ({ message }) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.css'>
      <title>Query Analysis</title>
    </head>
    <body>
      ${JSON.stringify(message, null, ' ')}
    </body>
  </html>
`;

export default Analyzer;
