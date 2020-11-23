products = [
	{
		name: "Mens Wear",
		size: "M",
		color: "White",
		price: 30,
		image: "https://previews.123rf.com/images/4max/4max1707/4max170700152/82808913-hipster-handsome-male-model-with-beard-wearing-white-blank-t-shirt-with-space-for-your-logo-or-desig.jpg",
		description: "White T Shirt"
	},
	{
		name: "Mens Wear",
		size: "L",
		color: "Black",
		price: 40,
		image: "https://www.thefashionisto.com/wp-content/uploads/2019/08/Asian-Male-Model-Black-Pants-Shirt.jpg",
		description: "Black Shirt"
	},
	{
		name: "Mens Wear",
		size: "L",
		color: "White and Black",
		price: 50,
		image: "https://www.fbbonline.in/media/product/56/811/1-zoom.jpg",
		description: "Party Wear"
	},
	{
		name: "Mens Wear",
		size: "XL",
		color: "White",
		price: 45,
		image: "https://cdn.luxe.digital/media/2019/09/12085003/casual-dress-code-men-style-summer-luxe-digital.jpg",
		description: "White Coloured Shirt"
	},
	{
		name: "Womens Wear",
		size: "L",
		color: "Yellow",
		price: 35,
		image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/8529019/2019/1/23/5d6a8e02-0fa0-4770-82f5-6b52d9c983561548242338312-Varanga-mustard-printed-straight-kurta-6361548242336928-1.jpg",
		description: "Casual Wear"
	},
	{
		name: "Womens Wear",
		size: "M",
		color: "Black",
		price: 49,
		image: "https://i.pinimg.com/originals/04/6a/ff/046affa5902a2c10d7a04c4d8006deba.jpg",
		description: "Black Party Wear"
	},
	{
		name: "Womens Wear",
		size: "L",
		color: "Navy Blue",
		price: 50,
		image: "https://ae01.alicdn.com/kf/HTB1eZQRXjzuK1RjSspeq6ziHVXay/Fashion-Women-Dresses-Dark-Blue-Office-Ladies-Work-Dress-Long-Sleeve-OL-Styles-Female-Clothes.jpg_q50.jpg",
		description: "Office Wear"
	},
	{
		name: "Womens Wear",
		size: "M",
		color: "Gray",
		price: 40,
		image: "https://i.pinimg.com/originals/9f/14/82/9f1482322748de3a8f511cddf5a2f6f6.jpg",
		description: "Formal Wear"
	},
	{
		name: "Kids Wear",
		size: "S",
		color: "White and Navy Blue",
		price: 25,
		image: "https://5.imimg.com/data5/CR/HJ/MY-21939481/aj-dezines-kids-party-wear-suit-set-for-boys-500x500.jpg",
		description: "Kids Party Wear"
	},
	{
		name: "Kids Wear",
		size: "M",
		color: "Gray",
		price: 30,
		image: "https://www.dhresource.com/0x0/f2/albu/g7/M00/E9/75/rBVaSltDQ3uAGGFAAAHH4geyAIw707.jpg",
		description: "Stylish Wear"
	},
	{
		name: "Kids Wear",
		size: "S",
		color: "Orange",
		price: 25,
		image: "https://images.cbazaar.com/images/orange-n-green-jacquard-kids-salwar-suit-kdmtk7221pista-u.jpg",
		description: "Party Wear"
	},
	{
		name: "Kids Wear",
		size: "S",
		color: "Red",
		price: 30,
		image: "https://img3.junaroad.com/uiproducts/16822867/pri_175_p-1577365950.jpg",
		description: "Fancy Wear"
	}
];

let cartNo=0;

function displayProducts(productsData, who="productwrapper"){
	let product="";
	productsData.forEach(function(p, index){
		let {name, image, size, color, price, description}=p;
		if (who=="productwrapper"){
			product+=`<div class="product">
						<div class="prodimg">
							<img src="${image}" width="100%"/>
						</div>
						<h3>${name}</h3>
						<p>Price: ${price} $</p>
						<p>Size: ${size}</p>
						<p>Color: ${color}</p>
						<p>${description}</p>
						<p><button onclick="addToCart(${index})">Add to Cart</button></p>
					</div>`
		}
		else if (who=="cart"){
			product+=`<div class="product">
							<div class="prodimg">
								<img src="${image}" width="100%"/>
							</div>
							<h3>${name}</h3>
							<p>Price: ${price} $</p>
							<p>Size: ${size}</p>
							<p>Color: ${color}</p>
							<p>${description}</p>
							<p><button onclick="removeFromCart(${index})">Remove From Cart</button></p>
						</div>`
		}
	});
	if(who=="cart")
		document.getElementById('head').innerHTML=`Cart(${cartNo})`;
	document.getElementById(who).innerHTML=product;
}
displayProducts(products);

cart=[];
let snum=0;
let fnum=0;
searchedProducts=[];
filterproduct=[];

function searchProduct(searchValue){
	console.log(searchValue);
	snum=1;
	if(fnum==0){
		searchedProducts = products.filter(function(product, index){
			return product.name.toUpperCase().indexOf(searchValue.toUpperCase())!=-1 || product.color.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
		});
	}
	else if(fnum==1){
		searchedProducts = filterproduct.filter(function(product, index){
			return product.name.toUpperCase().indexOf(searchValue.toUpperCase())!=-1 || product.color.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
		});
		fnum=0;
	}
	products=searchedProducts;
	displayProducts(searchedProducts);
}

function filterProduct(){
	let min=document.getElementById('min').value;
	let max=document.getElementById('max').value;
	fnum=1;
	
	if(snum==0){
		if(min=="Min")
		{
			if(max=="20")
			{
				filterproduct = products.filter(function(product){
					return product.price<=Number(max);
				});
			}
			else if(max=="30")
			{
				filterproduct = products.filter(function(product){
					return product.price<=Number(max);
				});
			}
			else if(max=="40")
			{
				filterproduct = products.filter(function(product){
					return product.price<=Number(max);
				});
			}
			else if(max=="Max")
				filterproduct=products;
		}
		else if(min=="10")
		{
			if(max=="20")
			{
				filterproduct = products.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="30")
			{
				filterproduct = products.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="40")
			{
				filterproduct = products.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="Max")
			{
				filterproduct = products.filter(function(product){
					return product.price>=Number(min);
				});
			}
		}
		else if(min=="20")
		{
			if(max=="20")
			{
				filterproduct = products.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="30")
			{
				filterproduct = products.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="40")
			{
				filterproduct = products.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="Max")
			{
				filterproduct = products.filter(function(product){
					return product.price>=Number(min);
				});
			}
		}
		else if(min=="30")
		{
			if(max=="30")
			{
				filterproduct = products.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="40")
			{
				filterproduct = products.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="Max")
			{
				filterproduct = products.filter(function(product){
					return product.price>=Number(min);
				});
			}
		}
		else if(min=="40")
		{
			if(max=="40")
			{
				filterproduct = products.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="Max")
			{
				filterproduct = products.filter(function(product){
					return product.price>=Number(min);
				});
			}
		}
	}
	else if(snum==1){
		if(min=="Min")
		{
			if(max=="20")
			{
				filterproduct = searchedProducts.filter(function(product){
					return product.price<=Number(max);
				});
			}
			else if(max=="30")
			{
				filterproduct = searchedProducts.filter(function(product){
					return product.price<=Number(max);
				});
			}
			else if(max=="40")
			{
				filterproduct = searchedProducts.filter(function(product){
					return product.price<=Number(max);
				});
			}
			else if(max=="Max")
				filterproduct=searchedProducts;
		}
		else if(min=="10")
		{
			if(max=="20")
			{
				filterproduct = searchedProducts.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="30")
			{
				filterproduct = searchedProducts.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="40")
			{
				filterproduct = searchedProducts.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="Max")
			{
				filterproduct = searchedProducts.filter(function(product){
					return product.price>=Number(min);
				});
			}
		}
		else if(min=="20")
		{
			if(max=="20")
			{
				filterproduct = searchedProducts.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="30")
			{
				filterproduct = searchedProducts.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="40")
			{
				filterproduct = searchedProducts.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="Max")
			{
				filterproduct = searchedProducts.filter(function(product){
					return product.price>=Number(min);
				});
			}
		}
		else if(min=="30")
		{
			if(max=="30")
			{
				filterproduct = searchedProducts.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="40")
			{
				filterproduct = searchedProducts.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="Max")
			{
				filterproduct = searchedProducts.filter(function(product){
					return product.price>=Number(min);
				});
			}
		}
		else if(min=="40")
		{
			if(max=="40")
			{
				filterproduct = searchedProducts.filter(function(product){
					return product.price>=Number(min) && product.price<=Number(max);
				});
			}
			else if(max=="Max")
			{
				filterproduct = searchedProducts.filter(function(product){
					return product.price>=Number(min);
				});
			}
		}
		snum=0;
	}
	products=filterproduct;
	displayProducts(filterproduct);
}

function addToCart(i){
	if(cart.includes(products[i])==true)
		alert("Product already added in cart");
	else{
		cart.push(products[i]);
		cartNo++;
		displayProducts(cart, "cart");
	}
}

function removeFromCart(index){
	cart.splice(index, 1);
	cartNo--;
	displayProducts(cart, "cart");
}