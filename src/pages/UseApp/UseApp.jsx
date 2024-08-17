import React from "react";

import Container from "../../components/Container";

import cls from './UseApp.module.scss'


const AppUse = () => {
    return (
        <section style={{position: 'relative'}} className={cls.section}>
            <Container>
                <div className={cls.sectionWrapper}>
                    <h2>how to use the app perfectly</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                        Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                        Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>

                        <div className={cls.videoPlayer}>
                                test
                       </div>
                </div>
            </Container>
        </section>
    )
}

export default AppUse;