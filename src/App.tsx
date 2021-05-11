import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import { Provider } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import "./App.scss";
import Dashboard from "./pages/dashboard/Dashboard";
import Discount from "./pages/discount/Discount";
import Home from "./pages/home/Home";
import Messages from "./pages/messages/Messages";
import Notifications from "./pages/notifications/Notification";
import Settings from "./pages/settings/Settings";
import store from "./redux/store";
/* Theme variables */
import "./theme/variables.css";

const App = () => (
  <IonApp>
    <Provider store={store}>
      <IonReactRouter>
        <IonRouterOutlet animated={false}>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/discount">
            <Discount />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/messages">
            <Messages />
          </Route>
          <Route exact path="/notifications">
            <Notifications />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </Provider>
  </IonApp>
);

export default App;
