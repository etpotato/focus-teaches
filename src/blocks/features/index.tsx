"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useDataContext } from "@/contexts";
import Image from 'next/image';
import { Text } from '../../components';
import styles from './index.module.css';

SwiperCore.use([Navigation, Pagination]);

interface Feature {
    img: {
        id: string;
        alt: string;
    };
    title: string;
    text: string;
}

function SlideCard({ feature }: { feature: Feature }) {
    return (
        <div className={styles.slideContent}>
             <Image className={styles.image} src={`/img/features/${feature.img.id}.svg`} alt={feature.img.alt} width="122" height="122" />
            <div>
                <Text className={styles.title} tag='h2'>{feature.title}</Text>
                <Text className={styles.text} tag='span'>{feature.text}</Text>
            </div>
        </div>
    );
}

const InitSlider: React.FC = () => {
    const data = useDataContext();

    if (!data) {
        return null;
    }

    const { features } = data;

    return (
        <Swiper className={styles.list}
            slidesPerView={1}
            slidesPerGroup={1}
            navigation={{
                prevEl: '.buttonPrev',
                nextEl: '.buttonNext',
            }}
            pagination={{
                clickable: true,
                el: '.pagination',
                renderBullet: function (index, className) {
                    return `<div class="${className} ${styles.customBullet}"></div>`;
                },
            }}
            breakpoints={{

                1900:{
                    slidesPerView: 3,
                    spaceBetween: 50,
                },

                1200: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
            }}
        >
            {features.map((feature: Feature, index: number) => (
                <SwiperSlide key={index} className={styles.slide}>
                    <SlideCard feature={feature} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export const Features = () => {
    const data = useDataContext();

    if (!data) {
        return null;
    }

    return (
        <section className={styles.features}>
            <button className={`buttonPrev ${styles.button} ${styles.buttonPrev}`}></button>
            <InitSlider />
            <button className={`buttonNext ${styles.button} ${styles.buttonNext}`}></button>
            <div className={`pagination ${styles.customPagination}`}>
            </div>
        </section>
    )
}
