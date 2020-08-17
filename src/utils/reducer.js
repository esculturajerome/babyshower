// initialState
export const initialState = {
  userInfo: null,
  gifts: [
    {
      id: 1,
      imageUrl:
        "https://ph-test-11.slatic.net/p/971223ef85fc52d383364bf536619167.jpg_720x720q80.jpg_.webp",
    },
    {
      id: 2,
      imageUrl:
        "https://ph-test-11.slatic.net/p/971223ef85fc52d383364bf536619167.jpg_720x720q80.jpg_.webp",
    },
    {
      id: 3,
      imageUrl: "https://cf.shopee.ph/file/b26306e57538a12c1f045e19ff7426bd",
    },
  ],
  messages: [
    {
      id: 1,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum, odio in posuere efficitur, ipsum ipsum pharetra sem, eget feugiat velit lectus ac turpis. Integer lacus libero, elementum id urna ut, euismod gravida arcu. Suspendisse malesuada tempus tortor, at venenatis nulla sagittis vel. Suspendisse posuere, risus a dignissim suscipit, mi quam sollicitudin diam.",
    },
  ],
  cart: [
    {
      id: 1,
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum tempor massa in elementum. Phasellus semper felis ac risus gravida, eu scelerisque lorem commodo.",
      imageUrl:
        "https://ph-test-11.slatic.net/p/971223ef85fc52d383364bf536619167.jpg_720x720q80.jpg_.webp",
      title: "Title",
      shopeeUrl: "https://shopee.com/",
      lazadaUrl: "https://www.lazada.com.ph/",
      price: 100,
    },
    {
      id: 2,
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum tempor massa in elementum. Phasellus semper felis ac risus gravida, eu scelerisque lorem commodo.",
      imageUrl:
        "https://ph-test-11.slatic.net/p/971223ef85fc52d383364bf536619167.jpg_720x720q80.jpg_.webp",
      title: "Title",
      shopeeUrl: "https://shopee.com/",
      lazadaUrl: "https://www.lazada.com.ph/",
      price: 100,
    },
  ],
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

//Reducer
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "USER_SIGNIN":
      // Logic for adding item to cart
      return {
        ...state,
        userInfo: action.item,
      };
      break;
    case "USER_LOGOUT":
      // Logic for adding item to cart
      return {
        userInfo: action.item,
      };
      break;
    case "ADD_TO_CART":
      // Logic for adding item to cart
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
      break;
    case "REMOVE_FROM_CART":
      // Logic for Removing item from Cart
      let newCart = [...state.cart];

      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      if (index >= 0) {
        //exist remove it
        newCart.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}`);
      }

      return { ...state, cart: newCart };
      break;
    default:
      return state;
  }
}

export default reducer;
