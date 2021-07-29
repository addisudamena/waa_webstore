package waa.alemu.addisu.webstor.service;

import waa.alemu.addisu.webstor.data.ProductRepository;
import waa.alemu.addisu.webstor.domain.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;


@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;


    public void add(ProductDTO productDto){
        productRepository.save(ProductAdapter.getProduct(productDto));
    }

    public void update(ProductDTO productDto){
        productRepository.save(ProductAdapter.getProduct(productDto));
    }

    public ProductDTO getProduct(String productNumber){
        return ProductAdapter.getProductDTO((productRepository.findByProductnumber(Long.valueOf(productNumber))).get());
    }

    public ProductDTO findByProductNumber(long productNumber){
        Optional<Product> accOptional = productRepository.findByProductnumber(productNumber);
        if (accOptional.isPresent()){
            return ProductAdapter.getProductDTO(accOptional.get());
        }
        else{
            return null;
        }
    }

    public void delete(long productNumber){
        Product product = productRepository.findByProductnumber(productNumber).get();
        productRepository.delete(product);
    }

    public Collection<ProductDTO> findAll(){
        Collection<Product> products = productRepository.findAll();
        return ProductAdapter.getProductDTOList((List<Product>) products);
    }



}
