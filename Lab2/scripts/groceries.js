	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Organic banana",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 1.35
	},
	{
		name: "Organic Brocoli",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	
	{
		name: "Organic tomatoes",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 3.00
	},
    {
        name: "Organic Spinach",
        lactoseFree: true,
		nutFree: true,
		organic: true,
        price: 4.50
    },
    {
        name: "Organic Apple",
        lactoseFree: true,
		nutFree: true,
		organic: true,
        price: 1.00
    },
    {
        name: "Organic Peanuts",
        lactoseFree: true,
		nutFree: false,
		organic: true,
        price: 5.00
    },
    {
        name: "Non-Organic Frozen Ravioli",
        lactoseFree: false,
		nutFree: true,
		organic: false,
        price: 6.00
    },
    {
        name: "Non-Organic Chicken",
        lactoseFree: true,
		nutFree: true,
		organic: false,
        price: 7.00
    },
    {
        name: "Non-Organic Greek Yogurt",
        lactoseFree: false,
		nutFree: true,
		organic: false,
        price: 3.00
    },
    {
        name: "Non-Organic Peanut Butter Ice Cream",
        lactoseFree: false,
		nutFree: false,
		organic: false,
        price: 7.00
    },
	{
        name: "Organic Lactose Free Milk",
        lactoseFree: true,
		nutFree: true,
		organic: true,
        price: 2.50
    }
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if (restriction=="None"){
			product_names.push([prods[i].name, prods[i].price]);	
        }
		else if ((restriction == "Lactose-intolerant Nutallergy and Organic") && (prods[i].lactoseFree == true && (prods[i].nutFree == true)&& (prods[i].organic== true))){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "Lactose-intolerant and Nutallergy") && (prods[i].lactoseFree == true && (prods[i].nutFree == true))){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "Lactose-intolerant and Organic") && (prods[i].lactoseFree == true && (prods[i].organic == true))){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "Nutallergy and Organic") && (prods[i].organic == true && (prods[i].nutFree == true))){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "Lactose-intolerant") && (prods[i].lactoseFree == true)){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "Nutallergy") && (prods[i].nutFree == true)){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if (restriction == "Organic" && prods[i].organic==true){
			product_names.push([prods[i].name, prods[i].price]);	
		}
	}
	return product_names.sort(function([a,b], [c,d]){ // method taken from https://stackoverflow.com/a/50415269
		return b-d;
	});;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}