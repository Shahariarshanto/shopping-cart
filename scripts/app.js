
// Common Function 
const updateInputValue = (product_btn, inputCount, priceText, price) =>{
    const count =  document.getElementById(inputCount).value ;
    let totalPrice = parseFloat(price);

    let valueCount = parseInt(count);
    if(product_btn){
        valueCount++;
        
    }
    if(!product_btn  && valueCount > 0){
        valueCount--; 
          
    }  

    totalPrice = valueCount * price;
    document.getElementById(inputCount).value = valueCount;
    document.getElementById(priceText).innerText = totalPrice;
    updatePrice()
}
// ! _________________________________________________________________

// phone-plus
document.getElementById("phone-plus").addEventListener("click",()=> updateInputValue(true, "phone-count","phone-total-price",1219));

// phone-minus
document.getElementById("phone-minus").addEventListener("click",()=> updateInputValue(false, "phone-count","phone-total-price",1219));
  
// case-plus
document.getElementById("case-plus").addEventListener("click",()=> updateInputValue(true, "case-count","case-total-price",59));

// case-minus
document.getElementById("case-minus").addEventListener("click",()=> updateInputValue(false,"case-count","case-total-price",59));


const updatePrice = ()=>{



    const phoneTotalPrice = parseFloat(document.getElementById("phone-total-price").innerText) ;

    const caseTotalPrice = parseFloat(document.getElementById("case-total-price").innerText) ;


    const subtotalPrice = phoneTotalPrice + caseTotalPrice;
    document.getElementById("subtotal").innerText = subtotalPrice;

    const taxPrice = parseFloat((subtotalPrice * 0.1).toFixed(2));
    document.getElementById("tax").innerText = taxPrice;

    const totalPrice = (phoneTotalPrice + caseTotalPrice + taxPrice ).toFixed(2) ;

    console.log(totalPrice);
    document.getElementById("total").innerText = totalPrice;



    

}