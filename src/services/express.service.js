require('dotenv').config();
const express = require('express');
const app = express();
const apiRouter = require('../routes');
const bodyParser = require('body-parser');
const cors = require('cors');

exports.start = () => {
	const port = process.env.PORT;

	//middlewares
	app.use(cors());
	app.use(bodyParser.json());
	app.use('/apiVentes', apiRouter);

	app.listen(port, (err) => {
		if (err) {
			console.log(`Error : ${err}`);
			process.exit();
		}
		console.log(`app is running on port ${port}`);
	})
}