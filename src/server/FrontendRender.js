import Header from './Header';

const FrontendRender = ({ title }) => `
  <!DOCTYPE html>
  <html lang="en">
    ${Header(title)}
    <body>
      <noscript><iframe id="app" width="100%"
      height="100%" src="/serverside"/></noscript>
      <div id="clientSideApp">
      </div>
      <script src="/script/client.js"></script>
    </body>
  </html>
`;

export default FrontendRender;
