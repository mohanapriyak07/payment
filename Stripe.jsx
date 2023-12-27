import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51ORd1nSBBNAXjIFsf4Pc6FhLwNV9hz3VQHQXU7Zg8Wu7FplQs96UlpQiOtGxuqgtPuMFt3B9LB5ar5c8BLsGROaS00tMxF3zD2";

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function Stripe() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}

