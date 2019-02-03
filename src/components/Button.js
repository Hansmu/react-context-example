import React from 'react';
import {LanguageContext, ColorContext} from "../contexts/LanguageContext";

class Button extends React.Component {
    render() {
        return (
            <ColorContext.Consumer>
                {color => {
                    return (
                        <button className={`ui button ${color}`}>
                            <LanguageContext.Consumer>
                                {(value) => {
                                    return value === 'english' ? 'Submit' : 'Voorleggen';
                                }}
                            </LanguageContext.Consumer>
                        </button>
                    );
                }}
            </ColorContext.Consumer>
        );
    }
}

export default Button;
