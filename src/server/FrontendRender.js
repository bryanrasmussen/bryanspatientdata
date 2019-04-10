import Header from './Header';

const FrontendRender = ({ q }) => `
  <!DOCTYPE html>
  <html lang="en">
  ${Header('Patient Data Overview')}
    <body>
      <noscript><iframe id="app" class="appiframe" src="/serverside?${q}"/></noscript>
      <div id="clientSideApp">
      </div>
      <script src="/script/client.js"></script>
    </body>
  </html>
`;

export default FrontendRender;
