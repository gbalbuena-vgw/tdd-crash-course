import express from 'express';
import { CatService } from '../cat-service';

export function createServer(catService: CatService) {
	const app = express()
    
	app.use(express.json())
	app.get('/cats/:name', (req, res) => {
		const { name } = req.params;
		return res.json(catService.getByName(name));
	})
	return app
}
