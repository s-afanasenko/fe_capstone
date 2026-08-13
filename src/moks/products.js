import GreekSalad from "../assets/greek_salad.png";
import Bruschetta from "../assets/Bruschetta.jpg";
import LemonDesert from "../assets/lemon_desert.jpg";

const productsData = [
    {
        id: 1,
        url: "#",
		name: "Greek salad",
		description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
		price: 12.99,
		image: GreekSalad
    },
    {
        id: 2,
        url: "#",
		name: "Bruchetta",
		description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
		price: 5.99,
		image: Bruschetta
    },
    {
        id: 3,
        url: "#",
		name: "Lemon Dessert",
		description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
		price: 5.00,
		image: LemonDesert
    }
];
export default productsData;