import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
  IonButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const doLogin = () => {
    navigation.push("/app", "root", "replace");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton onClick={() => doLogin()} expand="full">
          login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
