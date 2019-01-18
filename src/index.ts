import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab-countdown extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab-countdown',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('hello JupyterLab!');
    console.log('JupyterLab extension jupyterlab-countdown is activated!');
    setInterval(() => {
        console.log('time:',new Date())
      }, 1000)
  }
};

export default extension;
