import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}
declare const webpackConfig: () => Configuration;
export default webpackConfig;
