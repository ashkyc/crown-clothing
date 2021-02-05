import Cart from "../../components/cart-dropdown/cart-dropdown.component";
import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
