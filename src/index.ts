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
    console.log('JupyterLab extension jupyterlab-countdown is activated!');
  }
};

export default extension;
