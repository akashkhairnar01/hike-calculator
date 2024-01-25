/* eslint-disable prefer-const */
import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonPage, IonRange, IonRow, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [percent, setPercent] = useState<number>(0);
  const [currentSalary, setCurrentSalary] = useState<number>(0);
  let [hike, setHike] = useState<number>(0);

  const handleCurrentSalary = (e: any) => {
    setHike(0);
    setCurrentSalary(e.target.value!= "" ? parseInt(e.target.value) : 0);
  }
  const calculateHike = (e: any) => {
    hike =(currentSalary * (percent/100));
    setHike(hike);
  }
  const handlePercent = (e: any) => {
    setPercent(parseInt(e.target.value));
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hike calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calculate hike based on percentage</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size-md='6' sizeLg='6' offsetMd='3'>
              <IonCard>
                <IonCardContent>
                  <IonRow>
                    <IonCol>
                      <IonInput value={currentSalary} label="Current salary" labelPlacement="floating"
                        fill="outline" placeholder="Enter current salary" onInput={handleCurrentSalary}></IonInput>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonRange aria-label="Custom range" value={percent} pin={true} 
                      onIonKnobMoveEnd={handlePercent} labelPlacement="start" label="Percentage" min={1} max={1000}></IonRange>
                      {percent}
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonButton expand='block' color='dark' onClick={calculateHike}>Calculate</IonButton>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size-md='6' sizeLg='6' offsetMd='3'>
              {hike > 0 &&
                <IonCard>
                  <IonCardContent>
                    <h2>The salary hike will be <b>{hike}/-</b></h2>
                    <h2>Gross salary will be <b>{currentSalary + hike}/-</b></h2>
                  </IonCardContent>
                </IonCard>
              }
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* <ExploreContainer name="Tab 1 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
