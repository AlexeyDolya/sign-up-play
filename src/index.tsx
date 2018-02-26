import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './root.store';
import { Header } from './features/header';
import { SignUp } from './features/sign-up';
import './style.css';

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <SignUp />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
