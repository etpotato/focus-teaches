"use client";
import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Text } from '../../components';
import { useDataContext } from "@/contexts";
import styles from './index.module.css';

export const Location = () => {

  const data = useDataContext();

  if (!data) {
      return null;
  }

  const { map } = data;

  return (
    <section className={styles.location}>
      <div className={styles.text}>
           <Text className={styles.title} tag='h2'>{map.title}</Text>
           <Text className={styles.subtitle} tag='span'>{map.subtitle}</Text>
      </div>
      <YMaps query={{ apikey: '52b2f753-bf22-4e06-b223-97be2fd204b4' }}>
          <div>
              <Map className={styles.map} defaultState={{ center: [55.7528488147893,37.62321311084745], zoom: 12 }}>
                  {map.locations.map((location, index) => (
              <Placemark key={index} geometry={location} />
            ))}
            </Map>
          </div>
      </YMaps>
    </section>
  );
}
