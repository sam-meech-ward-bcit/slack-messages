import './App.css'

import MessagesPage from './layout/MessagesPage'
import MessageDetailsPage from './layout/MessageDetailsPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <p>About 🤗</p>
          </Route>
          <Route path="/users">
            <p>Users 🤗</p>
          </Route>
          <Route path="/messages/:messageId">
            <MessageDetailsPage></MessageDetailsPage>
          </Route>
          <Route path="/">
            <MessagesPage></MessagesPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
