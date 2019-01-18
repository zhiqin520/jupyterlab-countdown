import {JupyterLab, JupyterLabPlugin} from '@jupyterlab/application';

import '../style/index.css';

import {IMainMenu} from '@jupyterlab/mainmenu';

import {Menu} from '@phosphor/widgets';

import {ICommandPalette} from '@jupyterlab/apputils';


/**
 * Initialization data for the jupyterlab-countdown extension.
 */
const extension: JupyterLabPlugin<void> = {
    id: 'jupyterlab-countdown',
    autoStart: true,
    requires: [ICommandPalette, IMainMenu],
    activate: (
        app: JupyterLab,
        palette: ICommandPalette,
        mainMenu: IMainMenu
    ) => {
        console.log('hello JupyterLab!');
        console.log('JupyterLab extension jupyterlab-countdown is activated!');
        // setInterval(() => {
        //     console.log('time:',new Date())
        //   }, 1000)
        const {commands} = app;
        let command = 'labtutorial';
        let category = 'Tutorial';
        commands.addCommand(command, {
            label: 'New Labtutorial',
            caption: 'Open the Labtutorial',
            execute: (args) => {
                console.log('Hey')
            }
        });
        palette.addItem({command, category});

        let tutorialMenu: Menu = new Menu({commands});

        tutorialMenu.title.label = 'Tutorial';
        mainMenu.addMenu(tutorialMenu, {rank: 80});
        tutorialMenu.addItem({command});
    }
};

export default extension;
