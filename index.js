import express from 'express';
import Game from './game'
const app = express();

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
		console.log('entries', entries)
		res.status(200).json(entries)
	} catch (err) {
		console.log(err)
	}
})

app.get('/api/getScores', async (req, res) => {
	try {
		const scores = await Game.getScores()
		res.status(200).json(scores)
	} catch (err) {
		console.log(err)
	}
})

var port = 3000;
app.listen(port, function() {
	console.log('Server', process.pid, 'listening on port', port);
});

export default app;