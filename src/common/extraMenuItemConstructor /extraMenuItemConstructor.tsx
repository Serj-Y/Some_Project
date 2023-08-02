
import React from "react"
import styles from "./extraMenuItemConstructor.module.scss"
import burgerIcon from "../assets/svg/hamburger.svg"


type PropsType = {
    option1?: any
    option2?:any
    option3?: any
    OnClick: any
    name: string
    weight: number
    price: any
    img: string
}



export const ExtraMenuItemConstructor: React.FC<PropsType> = (props) => {

    return (
        <div className={styles.itemContainer}>
            <div className={styles.item}>
                <img src={props.img || burgerIcon} alt={props.name} />
                <p className={styles.itemName} >{props.name}</p>
                <p className={styles.itemWeight} >{props.weight} g</p>
                <p className={styles.itemPrice} >${props.price}</p>
                <div>Extra Option</div>
                {props.option1}
                {props.option2}
                {props.option3}
                <button onClick={props.OnClick} >X</button>
            </div>
        </div>

    )
}


