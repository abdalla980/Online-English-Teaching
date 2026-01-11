import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Route, Switch } from 'wouter';
import meeting from "./pages/meeting.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Switch>
          <Route path="/" component={App} />
          <Route path="/book a meeting" component={meeting} />
          <App />
      </Switch>
  </StrictMode>
)
