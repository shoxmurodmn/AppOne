import React from "react";

import Container from "../../components/Container";

import Card from "./components/Card";

import cls from './Blog.module.scss'


const AppUse = () => {

    const items = [
        {
            img: require("../../assets/img/abonent/card.jpeg"),
            name: 'The Snap Pixel: How It Works and How to Install ',
        
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
        
        },
        {
            img: require("../../assets/img/abonent/card.jpeg"),
            name: 'Global Partner Solutions: A Partnership of Innovation',
           
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
        },
        {
            img: require("../../assets/img/abonent/card.jpeg"),
            name: '2021: An opportunity for Snapchatters to start fresh',
        
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
        }
    ]
    return (
        <section className={cls.section}>
            <Container>
                <div className={cls.sectionWrapper}>
                    <h2>Our recent blog</h2>
                    <p className={cls.sectionWrapperDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                    </p>

                    <div className={cls.sectionWrapperList}>
                        {items.map(item => (
                            <Card  {...item} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AppUse;