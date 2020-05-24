var express = require('express');
import Game from './game'
var app = express();

app.use(express.static(__dirname));
app.use(express.json())


app.get('/', function(req, res) {
	res.render('index.html');
});

app.post('/api/submitEntry', async (req, res) => {
	try {
		const entry = {
			name: req.body.name,
			word: req. body. word
		}
		const entries = await Game.submitEntry(entry)
		res.status(200).json(entries)
	} catch (err) {
		console.log(err)
	}
})

var port = 3000;
app.listen(port, function() {
	console.log('Server', process.pid, 'listening on port', port);
});
