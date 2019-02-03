import React from 'react';
import UserCreate from './UserCreate';

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
                <UserCreate />
            </div>
        );
    }
}

export default App;