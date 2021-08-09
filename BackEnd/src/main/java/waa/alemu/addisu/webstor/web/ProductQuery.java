package waa.alemu.addisu.webstor.web;
import org.springframework.stereotype.Component;
import waa.alemu.addisu.webstor.service.ProductDTO;
import waa.alemu.addisu.webstor.service.ProductService;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class ProductQuery implements GraphQLQueryResolver {

    @Autowired
    private ProductService productService;

    
     public Optional<ProductDTO> getProduct(final int productNumber) {
        return Optional.of(productService.findByProductNumber(productNumber));
    }
    
    public List<ProductDTO> getProducts() {
        return productService.findAll().stream().collect(Collectors.toList());
    }

   
}
