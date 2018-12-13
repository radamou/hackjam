import axios from 'axios'
import fs from 'fs'
import { COINT_MARKET_URL, DB_URL } from './constants'

/**see this link to decorate client for caching https://dev.to/matthewbdaly/decorating-service-classes-54il */
export class Client {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    fetch() {
        axios.get(COINT_MARKET_URL)
            .then(({data}) => {
                fs.writeFile(
                    DB_URL,
                    JSON.stringify(
                        {
                            cryptos: data.data,
                            metadata: data.metadata
                        }
                    ),
                    error => {
                        error ?  console.log(err) : console.log('fetch and write ok');
                    }
                )
            })
        .catch(err => console.log(err))
    }
}