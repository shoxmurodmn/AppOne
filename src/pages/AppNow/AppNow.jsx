import React from "react";

import Container from "../../components/Container";

import playMarketImg from '../../assets/img/paymarket.png';
import dowolondAppbanner from '../../assets/img/abonent/about.png'

import cls from './AppDowolond.module.scss'


const AppNow = () => {
    return (
        <section className={cls.section}>
            <Container>
                <div className={cls.sectionWrapper}>
                    <div className={cls.sectionWrapperDescription}>
                        <h2>Download App Now</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
                        <div className={cls.sectionWrapperButtongroup}>
                            <button>
                                <img src={playMarketImg} alt="playmarket" />
                            </button>
                            <button>
                                <img src={playMarketImg} alt="playmarket" />
                            </button>
                        </div>

                        
                            <ul className={cls.sectionWrapperList}>
                                <li>
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_135_704)">
                                            <path d="M5.83335 27.7083H29.1667V17.5H32.0834V29.1667C32.0834 29.5534 31.9297 29.9244 31.6562 30.1979C31.3827 30.4714 31.0118 30.625 30.625 30.625H4.37502C3.98825 30.625 3.61731 30.4714 3.34382 30.1979C3.07033 29.9244 2.91669 29.5534 2.91669 29.1667V17.5H5.83335V27.7083ZM20.4167 13.125H27.7084L17.5 23.3333L7.29169 13.125H14.5834V4.375H20.4167V13.125Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_135_704">
                                                <rect width="35" height="35" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>59865</span>
                                    <strong>Download</strong>
                                </li>

                                <li>
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_135_704)">
                                            <path d="M5.83335 27.7083H29.1667V17.5H32.0834V29.1667C32.0834 29.5534 31.9297 29.9244 31.6562 30.1979C31.3827 30.4714 31.0118 30.625 30.625 30.625H4.37502C3.98825 30.625 3.61731 30.4714 3.34382 30.1979C3.07033 29.9244 2.91669 29.5534 2.91669 29.1667V17.5H5.83335V27.7083ZM20.4167 13.125H27.7084L17.5 23.3333L7.29169 13.125H14.5834V4.375H20.4167V13.125Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_135_704">
                                                <rect width="35" height="35" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>59865</span>
                                    <strong>Download</strong>
                                </li>

                                <li>
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_135_704)">
                                            <path d="M5.83335 27.7083H29.1667V17.5H32.0834V29.1667C32.0834 29.5534 31.9297 29.9244 31.6562 30.1979C31.3827 30.4714 31.0118 30.625 30.625 30.625H4.37502C3.98825 30.625 3.61731 30.4714 3.34382 30.1979C3.07033 29.9244 2.91669 29.5534 2.91669 29.1667V17.5H5.83335V27.7083ZM20.4167 13.125H27.7084L17.5 23.3333L7.29169 13.125H14.5834V4.375H20.4167V13.125Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_135_704">
                                                <rect width="35" height="35" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>59865</span>
                                    <strong>Download</strong>
                                </li>
                            </ul>
                    
                    </div>

                    <div>
                        <img src={dowolondAppbanner} alt="" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AppNow;