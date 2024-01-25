/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonCard, IonCardContent, IonCardHeader, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {

  const [currentSalary, setCurrentSalary] = useState<number>(0);
  const [newSalary, setNewSalary] = useState<number>(0);
  // eslint-disable-next-line prefer-const
  let [percent, setPercent] = useState<number>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function calculatePercent(event: any): void {
    percent = ((newSalary - currentSalary) / currentSalary) * 100;
    setPercent(Math.round(percent));
  }

  const handleNewSalary = (e: any) => {
    setNewSalary(e.target.value);
  }

  function handleCurrentSalary(event: any) {
    setCurrentSalary(event.target.value)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hike percentage calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size-md='6' sizeLg='6' offsetMd='3'>
              <IonCard>
                <IonCardContent>
                  <IonRow>
                    <IonCol>
                      <IonInput value={newSalary} label="New salary" labelPlacement="floating"
                        fill="outline" placeholder="Enter new or expected salary" onInput={handleNewSalary}></IonInput>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonInput value={currentSalary} label="Current salary" labelPlacement="floating"
                        fill="outline" placeholder="Enter current salary" onInput={handleCurrentSalary}></IonInput>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonButton expand='block' color='dark' onClick={calculatePercent}>Calculate</IonButton>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {percent &&
                <IonCard>
                  <IonCardHeader>The hike will be {percent} %</IonCardHeader>
                </IonCard>
              }
            </IonCol>
          </IonRow>
        </IonGrid>
        {/* <ExploreContainer name="Tab 2 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
