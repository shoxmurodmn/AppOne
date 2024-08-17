import React from "react";

import Container from "../../components/Container";

import Card from "./components/Card";

import cls from './OurTeam.module.scss'


const AppUse = () => {

    const items = [
        {
            img: require("../../assets/img/abonent/card.jpeg"),
            name: 'Carla Press',
            job: 'App Developer',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
            networks: [
                {
                    name: "instagram",
                    img: require("../../assets/img/abonent/card.jpeg"),
                },
                {
                    name: "instagram",
                    img: require("../../assets/icons/instagram-fill.svg")
                },
                {
                    name: "instagram",
                    img: require("../../assets/icons/instagram-fill.svg")
                },
                {
                    name: "instagram",
                    img: require("../../assets/icons/instagram-fill.svg")
                },
                {
                    name: "instagram",
                    img: require("../../assets/icons/instagram-fill.svg")
                }
            ]
        },
        {
            img: require("../../assets/img/abonent/card.jpeg"),
            name: 'Carla Press',
            job: 'App Developer',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
            networks: [
                {
                    name: "instagram",
                    img: require("../../assets/icons/instagram-fill.svg")
                },
                {
                    name: "instagram",
                    img: require("../../assets/icons/instagram-fill.svg")
                },
                {
                    name: "instagram",
                    img: require("../../assets/icons/instagram-fill.svg")
                },
                {
                    name: "instagram",
                    img: require("../../assets/icons/instagram-fill.svg")
                },
                {
                    name: "instagram",
                    img: require("../../assets/icons/instagram-fill.svg")
                }
            ]
        },
        {
            img: require("../../assets/img/abonent/card.jpeg"),
            name: 'Carla Press',
            job: 'App Developer',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
            networks: [
                {
                    name: "instagram",
                    img: require("../../assets/icons/instagram-fill.svg")
                },
                {
                    name: "instagram",
                    img: require("../../assets/icons/instagram-fill.svg")
                },
                {
                    name: "instagram",
                    img: require("../../assets/icons/instagram-fill.svg")
                },
                {
                    name: "instagram",
                    img: require("../../assets/icons/instagram-fill.svg")
                },
                {
                    name: "instagram",
                    img: require("../../assets/icons/instagram-fill.svg")
                }
            ]
        }
    ]
    return (
        <section className={cls.section}>
            <Container>
                <div className={cls.sectionWrapper}>
                    <h2>Our reative team</h2>
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