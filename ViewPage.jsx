import { useState } from 'react';
import './Payment.css'
import Stripe from './Stripe';

function View() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1>The Cart Page</h1>
			{showItem ? (
				<Stripe />
			) : (
				<>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8voUJwA9QOwyufCegpTCSeTChspfboXGgZQ&usqp=CAU" alt='Spatula' />
					<h3>Total cost of the order items</h3>
                    <button onClick={() => setShowItem(true)}>Proceed to Buy</button>
				</>
			)}
		</div>
	);
}

export default View;