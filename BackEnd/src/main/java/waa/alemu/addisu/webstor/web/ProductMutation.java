package waa.alemu.addisu.webstor.web;

import waa.alemu.addisu.webstor.service.ProductDTO;
import waa.alemu.addisu.webstor.service.ProductService;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProductMutation implements GraphQLMutationResolver {

    @Autowired
    private ProductService productService;

    public ProductDTO addProduct(final int productnumber, final String productHolder) {
        ProductDTO productDTO =new ProductDTO(productnumber, productHolder,"",0,12);
        productService.add(productDTO);
        return productDTO;
    }


}
