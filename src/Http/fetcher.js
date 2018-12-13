import fs from 'fs'
import { DB_URL } from './constants'

export class Fetcher {

    fetchAll({query: {start: start, limit: limit}}, res) {
        const result = fs.readFile(DB_URL);
        const data = JSON.parse(data);

        res.json(
            {
                cryptos: data,
                metadata: {...data.metadata}
            }
        )
    }
}