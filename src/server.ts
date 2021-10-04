import express, { Express } from 'express'
import morgan from 'morgan'
import cors, { CorsOptions, CorsOptionsDelegate } from 'cors'

export class Server {
	private app: Express
	private port: number

	constructor() {
		this.app = express()
		this.port = 3000
		this.initialsMiddlewares()
	}

	public enableCors(opts: CorsOptions | CorsOptionsDelegate = { origin: true }) {
		this.app.use(cors(opts))
	}

	public build() {
		this.app.listen(this.port, () => {
			console.log(`Server on port ${this.port}`)
		})
	}

	public use(...args: any[]) {
		this.app.use(...args)
	}

	private initialsMiddlewares() {
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: true }))
		this.app.use(morgan('combined'))
	}
}
