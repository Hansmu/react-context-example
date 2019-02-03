import React from 'react';
import UserCreate from './UserCreate';
import {LanguageContext, ColorContext} from "../contexts/LanguageContext";

class App extends React.Component {
    state = {
        language: 'english'
    };

    changeLanguage = language => {
        this.setState({language});
    };

    render() {
        return (
            <div className={'ui container'}>
                <div>
                    Select a language:
                    <i className={'flag us'} onClick={() => this.changeLanguage('english')}/>
                    <i className={'flag nl'} onClick={() => this.changeLanguage('dutch')}/>
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value={this.state.language === 'english' ? 'blue' : 'red'}>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;