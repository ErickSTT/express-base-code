import './infrastructure/config/config-loaders'
import { NodeFactory } from './NodeFactory'
import { AppRouter } from './app.routes'

function bootstrap() {
	const app = NodeFactory.CreateServer()
	app.use('/', AppRouter)
	app.build()
}

bootstrap()
