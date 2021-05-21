	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 2.35
	},
	{
		name: "salmon",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 10.00
	},
    {
        name: "Dozen Eggs",
        lactoseFree: false,
		nutFree: false,
		organic: true,
        price: 2.50
    },
    {
        name: "Apple",
        lactoseFree: true,
		nutFree: true,
		organic: true,
        price: 1.00
    },
    {
        name: "Nutella",
        lactoseFree: true,
		nutFree: false,
		organic: true,
        price: 5.00
    },
    {
        name: "nutFree Spinach Pack",
        lactoseFree: true,
		nutFree: true,
		organic: true,
        price: 5.00
    },
    {
        name: "Frosted Flakes",
        lactoseFree: true,
		nutFree: false,
		organic: true,
        price: 4.00
    },
    {
        name: "Ground Beef",
        lactoseFree: false,
		nutFree: false,
		organic: true,
        price: 10.00
    },
    {
        name: "Chicken Breast",
        lactoseFree: false,
		nutFree: false,
		organic: true,
        price: 10.00
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
		else if ((restriction == "lactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "nutFree") && (prods[i].nutFree == true)){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if (restriction == "organic" && prods[i].organic==true){
			product_names.push([prods[i].name, prods[i].price]);	
		}
	}
	return product_names.sort(function([a,b], [c,d]){
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