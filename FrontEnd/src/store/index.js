import { createStore } from 'redux';


const initialProduct = new Map();
/*
initialProduct.set('45123',{productnumber:'45123',productname:"frist Object",price:30,description:"this is short discripton",quantity:5});
initialProduct.set('54124',{productnumber:'54124',productname:"next object",price:40,description:"this is asdfasd asdf  discripton",quantity:5});
initialProduct.set('65125',{productnumber:'65125',productname:"third object",price:9,description:"thir dobje d is shoert discripton",quantity:5});
*/
const initialUser={
    firstName:"Addisu",
    lastName:"Alemu",
    email:"aalemu@miu.edu",
    phone:"78345743",
    street:"15th street 24",city:"Fairfield",zip:52557,
    type:'ATM',number:'7893845623',valid:"02/14",ccv:345}




const usersReducer = (state = {
    cart: initialProduct,user:initialUser,count:3},
                      action) => {



    if(action.type == 'add'){
        console.log(action.product)
        let newProduct={...action.product};
        newProduct.quantity=1;
       // let products=state.cart.filter(p=>p.productnumber==action.product.productnumber);
        if(state.cart.has(newProduct.productnumber)){

        /*if(products.length>0){
            products[0].quantity=1000;
            state.cart.remove(products[0]);
            state.push(products[0])
            console.log(products[0].quantity)
            console.log(state.cart.get(products[0]))
            */
            console.log("add additon")
            newProduct.quantity=state.cart.get(newProduct.productnumber).quantity+1;
        }

            console.log("add first")
            console.log(newProduct)


        return{
            cart:state.cart.set(action.product.productnumber,newProduct),
            user:state.user,
            count:state.cart.size
        };
    }
    if(action.type == 'remove'){
        let newcart= state.cart
        let toBeDeleted=newcart.get(parseInt(action.productnumber));
        console.log(newcart)

    if(toBeDeleted.quantity>1){
        toBeDeleted.quantity--;
    }else{
        console.log('removing')
        newcart.delete(toBeDeleted.productnumber);

    }
        console.log(toBeDeleted.quantity)
        console.log(toBeDeleted)
        console.log(newcart)
        return{
            cart:newcart,
            //cart:new Map([...state.cart].filter((k,v)=>v.productnumber!=action.productnumber)),
            user: state.user,
            count:newcart.size
        }

    }
    if(action.type == 'userinfo'){

         return{
            cart:state.cart,
            user:action.user,
            count:state.cart.size

            }
        }
         if(action.type == 'clear'){

         return{
            cart:new Map(),
            user:state.user,
            count:state.cart.size

        };
    }



    return state;

}

const store = createStore(usersReducer);

export default store;