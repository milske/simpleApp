import {
  IonContent,
  IonHeader,
  IonPage,
  IonSplitPane,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonRouterOutlet,
  IonMenuToggle,
  IonItem,
  IonButton,
} from "@ionic/react";
import { Redirect, Route } from "react-router";
import Page1 from "./Page1";
import Page2 from "./Page2";

const Menu: React.FC = () => {
  const paths = [
    { name: "Home", url: "/app/page1" },
    { name: "News", url: "/app/page2" },
  ];

  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>MENU</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {paths.map((item, index) => (
              <IonMenuToggle key={index}>
                <IonItem routerLink={item.url} routerDirection="none">
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}
            <IonButton routerLink="/" routerDirection="back" expand="full">
              Logout
            </IonButton>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet
          id="main"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Route exact path="/app/page1" component={Page1} />
          <Route exact path="/app/page2" component={Page2} />
          <Redirect to="/app/page1" />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
