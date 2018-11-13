import React from 'react';
import Header from './Header';
import Content from './Content';
import DecoratedComponent from './DecoratedComponent';

// import '../../scss/components/_main.scss';

const headerTitle = 'Header title';
const extraHeaderProps = {
    subtTitle: 'Header subtitle'
};

const Main = () => (
    <main className="main">
        <Header title={headerTitle} {...extraHeaderProps} />
        <Content title="Content title" />
        <DecoratedComponent title="Decorated component title" />
    </main>
);

export default Main;
