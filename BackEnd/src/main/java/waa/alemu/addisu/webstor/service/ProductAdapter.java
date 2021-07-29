package waa.alemu.addisu.webstor.service;

import waa.alemu.addisu.webstor.domain.Order;
import waa.alemu.addisu.webstor.domain.Product;

import java.util.ArrayList;
import java.util.List;

public class ProductAdapter {

    public static ProductDTO getProductDTO(Product product){
       ProductDTO productDto = new ProductDTO();
       if (product != null){
           productDto = new ProductDTO(product.getProductnumber(),product.getProductname(),
                   product.getDescription(),product.getPrice(),product.getQuantity());
           productDto.setQuantity(product.getQuantity());
          /* for (Order entry : product.getEntryList()){
               ProductEntryDTO entryDto = new ProductEntryDTO(entry.getDate(),
                       entry.getAmount(),
                       entry.getDescription());
               productDto.addEntry(entryDto);
           }*/
       }
       return productDto;
    }

    public static Product getProduct(ProductDTO productDto){
        Product product = new Product();
        if (product != null){
            product = new Product(productDto.getProductnumber(),productDto.getProductname(),
                    productDto.getDescription(), productDto.getPrice(),productDto.getQuantity());
            product.setQuantity(productDto.getQuantity());
            /*for (ProductEntryDTO entryDto : productDto.getEntryList()){
                Order entry = new Order(entryDto.getDate(),
                        entryDto.getAmount(),
                        entryDto.getDescription());
                product.addEntry(entry);
            }*/
        }
        return product;
    }

    public static List<ProductDTO> getProductDTOList(List<Product> products){
        List<ProductDTO> productDtoList = new ArrayList<ProductDTO>();
        if (products != null){
            for (Product product : products){
                productDtoList.add(getProductDTO(product));
            }
        }
        return productDtoList;
    }
}
