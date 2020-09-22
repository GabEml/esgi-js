import React from 'react';
import GameView from './views/GameView';
import LoginView from './views/LoginView';
import WelcomeView from './views/WelcomeView';
import ChooseView from './views/ChooseView';

export default () => {
    return (
        <div className="c-app">
            <GameView />
            <LoginView /> 
            {/* <WelcomeView />  */}
            {/* <ChooseView /> */}
        </div>
    );
};
