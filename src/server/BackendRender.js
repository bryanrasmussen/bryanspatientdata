import Header from './Header';

const BackendRender = ({ body, title }) => `
  <!DOCTYPE html>
  <html lang="en">
    ${Header(title)}
    <body>
      <div id="app">${body}</div>
    </body>
  </html>
`;

export default BackendRender;
