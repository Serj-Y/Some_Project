import { v1 } from "uuid";
import Cola from "../common/assets/png/cupCola.png"
import Sprite from "../common/assets/png/cupSprite.png"
import Fanta from "../common/assets/png/cupFanta.png";
import AquaMineral from "../common/assets/png/bottleAquaMinerale.png";
import Espresso from "../common/assets/png/mugEspresso.png"
import Cappuccino from "../common/assets/png/mugCappuccino.png"
import Latte from "../common/assets/png/cupLatte.png"
import Tea from "../common/assets/png/mugTea.png"
import Hamburger from "../common/assets/png/Hamburger.png"
import Cheeseburger from "../common/assets/png/Cheeseburger.png"
import HamburgerXL from "../common/assets/png/HamburgerXL.png"
import BigJoh from "../common/assets/png/BigJoh.png"
import Cheese from "../common/assets/png/cheese.png"
import Meat from "../common/assets/png/meat.png"
import Bacon from "../common/assets/png/bacon.png"
import Cup from "../common/assets/png/cup.png"
import Bottle from "../common/assets/png/bottle.png"
import Pitcher from "../common/assets/png/pitcherIcon.png"
import Syrup from "../common/assets/png/syrup.png"
import CoffeeBeans from "../common/assets/png/coffeeBeans.png"


let initialState = {
    foodMenu: {
        burger: [
            { id: v1(), name: "Hamburger", weight: 250, price: 2.45, img: Hamburger, },
            { id: v1(), name: "Hamburger XL", weight: 350, price: 3.45, img: HamburgerXL, },
            { id: v1(), name: "Cheeseburger", weight: 300, price: 3, img: Cheeseburger, },
            { id: v1(), name: "Big John", weight: 550, price: 5.50, img: BigJoh, },
        ],
        burgerOptions: [
            { id: v1(), name: "Cheese", weight: 10, price: 0.10, img: Cheese, multiply: true },
            { id: v1(), name: "Meat", weight: 60, price: 0.50, img: Meat, multiply: true },
            { id: v1(), name: "Bacon", weight: 25, price: 0.30, img: Bacon, multiply: true }
        ],
    },
    drinksMenu: {
        cold: [
            { id: v1(), name: "CocaCola", weight: 500, price: 1.5, img: Cola, },
            { id: v1(), name: "Sprite", weight: 500, price: 1.5, img: Sprite, },
            { id: v1(), name: "Fanta", weight: 500, price: 1.5, img: Fanta, },
            {
                id: v1(), name: "Aqua Minerale", weight: 500, price: 1, img: AquaMineral, ownOption: [
                    { id: "default", name: "O.5L", weight: 500, price: "", img: Bottle, multiply: false },
                    { id: v1(), name: "1L", weight: 1000, price: 0.20, img: Bottle, multiply: false },
                ],
            },
        ],
        coldDrinksOptions: [
            { id: "default", name: "O.5L", weight: 500, price: "", img: Cup, multiply: false },
            { id: v1(), name: "1L", weight: 1000, price: 0.20, img: Bottle, multiply: false },
            { id: v1(), name: "1.5L", weight: 1500, price: 0.50, img: Bottle, multiply: false },
        ],

        hot: [
            {
                id: v1(), name: "Espresso", weight: 50, price: 1.5, img: Espresso, ownOption: [
                    { id: v1(), name: "Doppio", weight: 10, price: 1, img: CoffeeBeans, multiply: true },
                    { id: v1(), name: "Milk", weight: 20, price: 0.20, img: Pitcher, multiply: true },
                ]
            },
            { id: v1(), name: "Cappuccino", weight: 200, price: 2, img: Cappuccino, },
            { id: v1(), name: "Latte", weight: 300, price: 4.30, img: Latte, },
            { id: v1(), name: "Tea", weight: 350, price: 1.5, img: Tea, ownOption: [] },
        ],
        hotDrinksOptions: [
            { id: v1(), name: "Syrup", weight: 10, price: 0.50, img: Syrup, multiply: true },
        ]
    },
};

const menuReducer = (state = initialState) => {
    return state
}

export default menuReducer
