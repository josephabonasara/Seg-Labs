
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";

	var organic = document.getElementById("Organic");
	var lactose = document.getElementById("Lactose-intolerant");
	var nut = document.getElementById("Nutallergy");

	var list={
		"None": true,
		"Organic":false,
		"Lactose-intolerant":false,
		"Nutallergy":false
	}

	if(organic.checked||lactose.checked||nut.checked){
		list["None"]=false;
		if(organic.checked){
			list["Organic"]=true;
		}
		if(lactose.checked){
			list["Lactose-intolerant"]=true;
		}
		if(nut.checked){
			list["Nutallergy"]=true;
		}
	}
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, list);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i][0];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(" "+ productName));
		s2.appendChild(label);
		s2.append(": \t"+optionArray[i][1]+"$");
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	
	//	console.log(optionArray[i][4]);
	    var image = document.createElement('img');
		image.className="pictures";
		image.src=""+optionArray[i][2]+"";
		s2.appendChild(image);
		s2.appendChild(document.createElement("br"));  	
	}
}
	//"</label><img class='items' src='" + inventory[i].img + "'/>
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("h4");
	para.innerHTML = "You selected the following products: ";
	para.appendChild(document.createElement("br"));
	var par = document.createElement("P");
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			par.appendChild(document.createTextNode(ele[i].value));
			par.appendChild(document.createElement("br"));
			var image = document.createElement('img');
			image.className="pictures";
			image.src="assets/"+ele[i].value+".png";
			par.appendChild(image);
			par.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(par);
	c.appendChild(document.createTextNode("Total price will be " + getTotalPrice(chosenProducts).toFixed(2)+"$"));
	var phrase=document.createElement("P");
	phrase.appendChild(document.createElement("br"));
	c.appendChild(phrase);
	
	if(document.getElementById("checkout")==null){
		var d = document.getElementById('outer');
		var inner2= document.createElement("div");
		inner2.className="inner";

		var but= document.createElement("button");
		but.className="blockCheckout";
		but.innerHTML="Proceed to Checkout";
		but.id="checkout";
     	inner2.appendChild(but);
		 
		d.appendChild(inner2);
	}
		
}

function start(){
	populateListProductChoices(this.id,'displayProduct');
	document.getElementById("home").click();
}
function gotoCart(){
	selectedItems();
	document.getElementById("cartTab").click();
}
function gotoClient(){
	document.getElementById("client").click();
}
function gotoProduct(){
	document.getElementById("productsTab").click();
}
