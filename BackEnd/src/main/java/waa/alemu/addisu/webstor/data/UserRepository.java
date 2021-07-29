package waa.alemu.addisu.webstor.data;

import org.springframework.data.mongodb.repository.Query;
import waa.alemu.addisu.webstor.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, Long> {
    Optional<User> findByPhoneNumber(Long phoneNumber);


    Collection<User> findByOrdersNotNull();


}