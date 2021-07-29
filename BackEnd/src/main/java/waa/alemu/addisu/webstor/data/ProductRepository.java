package waa.alemu.addisu.webstor.data;

import waa.alemu.addisu.webstor.domain.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends MongoRepository<Product, Long> {
    Optional<Product> findByProductnumber(long productNumber);

    /*
    @Query("{'email' : ?0}")
    Customer findCustomerWithPhone(String email);
    @Query("{'creditCard.type' : ?0}")
    List<Customer> findCustomerWithCreditCardType(String cctype);
    */


}
