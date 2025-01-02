interface TotalPriceProps {
	price: number;
	discount: number;
	months: number;
	isInstallment?: boolean;
}

const totalPrice = ({ price, discount, months, isInstallment }: TotalPriceProps): number => {
	const discountedPrice = price - (price * discount) / 100;

	if (isInstallment) {
		return discountedPrice / months;
	}

	return discountedPrice;
};

const price = totalPrice({ price: 100000, discount: 25, months: 12, isInstallment: true });

console.log(price); // 6250
