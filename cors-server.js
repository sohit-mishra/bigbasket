
import corsAnywhere from 'cors-anywhere';

const host = '0.0.0.0';
const port = 8080;

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
}).listen(port, host, () => {
  console.log(`CORS Anywhere server is running on http://${host}:${port}`);
});
