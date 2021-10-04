import * as tsConfigPath from 'tsconfig-paths'
import * as tsConfigJson from '../../../tsconfig.json'

export const startConfigShortPath = () => {
	tsConfigPath.register({
		baseUrl: tsConfigJson.compilerOptions.baseUrl,
		paths: tsConfigJson.compilerOptions.paths,
	})
}
