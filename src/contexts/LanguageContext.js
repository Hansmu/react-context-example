import React from 'react';

const LanguageContext = React.createContext('english');
/*
* Essentially the Context just creates a pipe. If you reuse the same pipe, you can provide it with different values.
* The provided value comes from either the default value or a Provider. If there is no Provider in the hierarchy, then it always uses the default value.
* */

const ColorContext = React.createContext('blue');

export {LanguageContext, ColorContext};
