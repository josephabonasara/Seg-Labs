// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Organic Banana",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.50,
		image: "assets/Organic Banana.png",
		category: "fruit"
	},
	{
		name: "Organic Broccoli",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 2.00,
		image: "assets/Organic Broccoli.png",
		category: "vegetables"
	},
	
	{
		name: "Organic Tomatoes",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 3.00,
		image: "assets/Organic Tomatoes.png",
		category: "fruit"
	},
    {
        name: "Organic Spinach",
        lactoseFree: true,
		nutFree: true,
		organic: true,
        price: 4.50,
		image: "assets/Organic Spinach.png",
		category: "vegetable"
    },
    {
        name: "Organic Apple",
        lactoseFree: true,
		nutFree: true,
		organic: true,
        price: 1.00,
		image: "assets/Organic Apple.png",
		category: "fruit"
    },
    {
        name: "Organic Peanuts",
        lactoseFree: true,
		nutFree: false,
		organic: true,
        price: 5.00,
		image: "assets/Organic Peanuts.png",
		category: "other"
    },
    {
        name: "Non-Organic Frozen Ravioli",
        lactoseFree: false,
		nutFree: true,
		organic: false,
        price: 6.00,
		image: "assets/Non-Organic Frozen Ravioli.png",
		category: "other"
    },
    {
        name: "Non-Organic Chicken",
        lactoseFree: true,
		nutFree: true,
		organic: false,
        price: 7.00,
		image: "assets/Non-Organic Chicken.png",
		category: "proteins"
    },
    {
        name: "Non-Organic Greek Yogurt",
        lactoseFree: false,
		nutFree: true,
		organic: false,
        price: 3.00,
		image: "assets/Non-Organic Greek Yogurt.png",
		category: "dairy"
    },
    {
        name: "Non-Organic Peanut Butter Ice Cream",
        lactoseFree: false,
		nutFree: false,
		organic: false,
        price: 7.00,
		image: "assets/Non-Organic Peanut Butter Ice Cream.png",
		category: "dairy"
    },
	{
        name: "Organic Lactose Free Milk",
        lactoseFree: true,
		nutFree: true,
		organic: true,
        price: 2.50,
		image: "assets/Organic Lactose Free Milk.png",
		category: "dairy"
    },
	{
        name: "Organic Mozarella Cheese",
        lactoseFree: false,
		nutFree: true,
		organic: true,
        price: 3.50,
		image: "assets/Organic Mozarella Cheese.png",
		category: "dairy"
    },
	{
        name: "Non-Organic Butter",
        lactoseFree: false,
		nutFree: true,
		organic: false,
        price: 3.00,
		image: "assets/Non-Organic Butter.png",
		category: "dairy"
    }
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	if(restriction["None"]==true){
		for (let i=0; i<prods.length; i+=1) {
			product_names.push([prods[i].name, prods[i].price,prods[i].image]);	
	}}else{
		for (let i=0; i<prods.length; i+=1) {
			console.log(restriction["Organic"]+ "=="+ prods[i].organic+ " "+ restriction["Nutallergt"]+ "=="+ prods[i].nutFree+ " "+ restriction["Lactose-intolerant"]+ "=="+ prods[i].lactoseFree+ " ");
			if((restriction["Organic"]==prods[i].organic|| restriction["Organic"]==false) &&(restriction["Nutallergy"]==prods[i].nutFree|| restriction["Nutallergy"]==false) && (restriction["Lactose-intolerant"]==prods[i].lactoseFree|| restriction["Lactose-intolerant"]==false)){
				product_names.push([prods[i].name, prods[i].price,prods[i].image]);	
			}
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