import Cart from "./layout/cart/Cart";
import Content from "./layout/content/Content";
import Header from "./layout/header/Header";


function App() {
	return (
		<div className="wrapper">
			<Cart/>
			<Header />
			<Content />
		</div>
	);
}

export default App;
