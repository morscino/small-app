import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import CookieParser from 'cookie-parser';
import config from './config/index.js';
import routes from './src/api/rest/routes/index.js';
import { logger } from './src/helpers/logger.js';

const app = express();

app.use(cors());
app.use(CookieParser());
app.use(morgan(':date *** :method :: :url ** :response-time'));
app.use(
  bodyParser.json({
    limit: '50mb',
  })
);

// add routes
routes(app);
// serve app
const port = config.ServerConfig.port || '8911';
app.listen(port,() => logger.info(`app listening on port ${port}`));