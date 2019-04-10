import Header from './Header';

const BackendRender = ({ body}) => `
  <!DOCTYPE html>
  <html lang="en">
    ${Header('Patient Data Overview')}
    <body>
      <div id="app">${body}</div>
    </body>
  </html>
`;

export default BackendRender;
