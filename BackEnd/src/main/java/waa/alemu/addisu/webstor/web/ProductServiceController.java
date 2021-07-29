package waa.alemu.addisu.webstor.web;


import waa.alemu.addisu.webstor.domain.Order;
import waa.alemu.addisu.webstor.domain.Product;
import waa.alemu.addisu.webstor.domain.User;
import waa.alemu.addisu.webstor.service.ProductDTO;
import waa.alemu.addisu.webstor.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import waa.alemu.addisu.webstor.service.UserDTO;
import waa.alemu.addisu.webstor.service.UserService;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class ProductServiceController {
    @Autowired
    ProductService productService;

    @Autowired
    UserService userService;

    @GetMapping("/products/{productnumber}")
    public ResponseEntity<?> getProduct(@PathVariable Long productnumber) {
        if(productnumber == null){
            Collection<ProductDTO> allProducts=productService.findAll();
            return new ResponseEntity<Collection<ProductDTO>> (allProducts, HttpStatus.OK);
        }
        ProductDTO productDto = productService.findByProductNumber(productnumber);
        if (productDto == null) {
            return new ResponseEntity<CustomErrorType>(new CustomErrorType("Product with number= " + productnumber + " is not available"),HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<ProductDTO> (productDto, HttpStatus.OK);
    }


    @GetMapping("/products")
    public ResponseEntity<?> getAllProduct() {

            Collection<ProductDTO> allProducts=productService.findAll();
            return new ResponseEntity<Collection<ProductDTO>> (allProducts, HttpStatus.OK);

    }
    @GetMapping("/orders")
    public ResponseEntity<?> getAllOrders() {

            Collection<User> allOrders=userService.findOrders();

            return new ResponseEntity<Collection<User>> (allOrders, HttpStatus.OK);

    }

    @GetMapping("/deleteproduct/{productnumber}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long productnumber) {
        ProductDTO productDto = productService.findByProductNumber(productnumber);
        if (productDto == null) {
            return new ResponseEntity<CustomErrorType>(new CustomErrorType("Product with number= " + productnumber + " is not available"),HttpStatus.NOT_FOUND);
        }
        productService.delete(productnumber);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/deleteproduct/{productnumber}")
    public ResponseEntity<?> deleteProductDelete(@PathVariable Long productnumber) {
        ProductDTO productDto = productService.findByProductNumber(productnumber);
        if (productDto == null) {
            return new ResponseEntity<CustomErrorType>(new CustomErrorType("Product with number= " + productnumber + " is not available"),HttpStatus.NOT_FOUND);
        }
        productService.delete(productnumber);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    @PostMapping("/products")
    public ResponseEntity<?> handlePost(@RequestParam(value="operation", required = false, defaultValue = "") String operation,
                                        @RequestParam(value="productnumber", required = false) Long productNumber,
                                        @RequestParam(value="productname", required = false) String productName,
                                        @RequestParam(value="price", required = false) double price,
                                        @RequestParam(value="quantity", required = false) int quantity,
                                        @RequestParam(value="description", required = false) String description) {

        ProductDTO productDto = new ProductDTO();
            //create product
            if (productNumber != 0){
                productDto = new ProductDTO(productNumber, productName,description,price,quantity);
                productService.add(productDto);
            }


        return new ResponseEntity<ProductDTO> (productDto, HttpStatus.OK);
    }

    @PostMapping("/user")
    public ResponseEntity<?> handleOrder(@RequestParam(value="ccv", required = false) int ccv,
                                         @RequestParam(value="city", required = false) String city,
                                         @RequestParam(value="email", required = false) String email,
                                         @RequestParam(value="firstName", required = false) String lastName,
                                         @RequestParam(value="lastName", required = false) String firstName,
                                         @RequestParam(value="number", required = false) Long number,
                                         @RequestParam(value="phone", required = false) Long phone,
                                         @RequestParam(value="street", required = false) String street,
                                         @RequestParam(value="type", required = false) String type,
                                         @RequestParam(value="valid", required = false) String valid,
                                         @RequestParam(value="zip", required = false) int zip,
                                         @RequestParam(value="orders", required = false) String orders,
                                         @RequestParam(value="ammounts", required = false) String ammounts
                                         ) {
        UserDTO userDto=new UserDTO( phone,  firstName,  lastName,  email,street,  zip,  type,  city,  number,  valid,  ccv);
        userService.add(userDto);
        List<String> ordersList=Arrays.stream(orders.split(",")).collect(Collectors.toList());
        List<Integer> amountsList=  Arrays.stream(ammounts.split(",")).map(a->Integer.valueOf(a)).collect(Collectors.toList());

        for(int i=0;i<ordersList.size();i++){
            userService.addOrder(phone,new Order(ordersList.get(i),amountsList.get(i)));

            ProductDTO productDto =productService.getProduct(ordersList.get(i));
            productDto.setQuantity(productDto.getQuantity()-amountsList.get(i));
            productService.add(productDto);
        }

        return new ResponseEntity<UserDTO> (userDto, HttpStatus.OK);
    }

    @PutMapping("/products")
    public ResponseEntity<?> updateProduct(@RequestParam(value="operation", required = false, defaultValue = "") String operation,
                                           @RequestParam(value="productnumber", required = false) Long productNumber,
                                            @RequestParam(value="productname", required = false) String productName,
                                            @RequestParam(value="price", required = false) double price,
                                            @RequestParam(value="quantity", required = false) int quantity,
                                            @RequestParam(value="description", required = false) String description) {
        ProductDTO productDto = productService.findByProductNumber(productNumber);

        if (productDto != null){
            productDto = new ProductDTO(productNumber, productName,description,price,quantity);
            productService.add(productDto);
            return new ResponseEntity<ProductDTO> (productDto, HttpStatus.OK);
        }
        return new ResponseEntity<CustomErrorType>(new CustomErrorType("Product with number= " + productNumber + " is not available"),HttpStatus.NOT_FOUND);

    }



}


