import { useAuth } from './useAuth';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Chat } from './Chat';
import { Login } from './Login';
import { Signup } from './Signup';
import { useResolved } from './useResolved';
import { useHistory } from 'react-router';

export const App = () => {
  const { authUser } = useAuth;
  const authResolved = useResolved(authUser);
  const hist = useHistory();

  useEffect(() => {
    if (authResolved) {
      hist.pushState(!!authUser ? '/' : '/login');
    }
  }, [authUser, authResolved, hist]);
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Chat} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};
