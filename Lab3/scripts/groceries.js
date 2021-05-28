	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Organic Banana",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.50,
		image: "assets/banana.png"
	},
	{
		name: "Organic Broccoli",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 2.00,
		image: "assets/broccoli.png"
	},
	
	{
		name: "Organic Tomatoes",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 3.00,
		image: "assets/tomatoes.png"
	},
    {
        name: "Organic Spinach",
        lactoseFree: true,
		nutFree: true,
		organic: true,
        price: 4.50,
		image: "assets/spinach.png"
    },
    {
        name: "Organic Apple",
        lactoseFree: true,
		nutFree: true,
		organic: true,
        price: 1.00,
		image: "assets/apple.png"
    },
    {
        name: "Organic Peanuts",
        lactoseFree: true,
		nutFree: false,
		organic: true,
        price: 5.00,
		image: "assets/peanuts.png"
    },
    {
        name: "Non-Organic Frozen Ravioli",
        lactoseFree: false,
		nutFree: true,
		organic: false,
        price: 6.00,
		image: "assets/ravioli.png"
    },
    {
        name: "Non-Organic Chicken",
        lactoseFree: true,
		nutFree: true,
		organic: false,
        price: 7.00,
		image: "assets/chicken.png"
    },
    {
        name: "Non-Organic Greek Yogurt",
        lactoseFree: false,
		nutFree: true,
		organic: false,
        price: 3.00,
		image: "assets/yogurt.png"
    },
    {
        name: "Non-Organic Peanut Butter Ice Cream",
        lactoseFree: false,
		nutFree: false,
		organic: false,
        price: 7.00,
		image: "assets/peanutbutter.png"
    },
	{
        name: "Organic Lactose Free Milk",
        lactoseFree: true,
		nutFree: true,
		organic: true,
        price: 2.50,
		image: "assets/milk.png"
    },
	{
        name: "Organic Mozarella Cheese",
        lactoseFree: false,
		nutFree: true,
		organic: true,
        price: 3.50,
		image: "assets/cheese.png"
    },
	{
        name: "Non-Organic Butter",
        lactoseFree: false,
		nutFree: true,
		organic: false,
        price: 3.00,
		image: "assets/butter.png"
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