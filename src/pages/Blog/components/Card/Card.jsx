import React from "react";

import cls from './Card.module.scss'

const Card = (item) => {

    return (
        <div className={cls.card}>
            <div className={cls.cardImgBox}>
                <img src={item.img} alt={item.img} />
            </div>
            <div className={cls.cardBody}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            <a href="#">Read more</a>
            </div>

        </div>
    )
}

export default Card