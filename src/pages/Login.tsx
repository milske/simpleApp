import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
  IonButton,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const doLogin = () => {
    navigation.push("/app", "forward", "replace");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login to your account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Welcome</IonCardTitle>
          <IonCardSubtitle>to Gymnastics</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          Enter your username and password to log in to your account.
        </IonCardContent>
      </IonCard>
      <IonContent>
        <IonButton onClick={() => doLogin()} expand="full">
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
