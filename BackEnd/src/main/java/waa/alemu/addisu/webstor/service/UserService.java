package waa.alemu.addisu.webstor.service;

import waa.alemu.addisu.webstor.data.UserRepository;
import waa.alemu.addisu.webstor.domain.Order;
import waa.alemu.addisu.webstor.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;


@Service
public class UserService {
    @Autowired
    UserRepository userRepository;


    public void add(UserDTO userDto){
        userRepository.save(UserAdapter.getUser(userDto));
    }

    public void update(UserDTO userDto){
        userRepository.save(UserAdapter.getUser(userDto));
    }

    public UserDTO findByUserNumber(Long phoneNumber){
        Optional<User> accOptional = userRepository.findByPhoneNumber(phoneNumber);
        if (accOptional.isPresent()){
            return UserAdapter.getUserDTO(accOptional.get());
        }
        else{
            return null;
        }
    }


    public Collection<User> findOrders(){
            return userRepository.findByOrdersNotNull();
    }

    public void delete(Long phoneNumber){
        User user = userRepository.findByPhoneNumber(phoneNumber).get();
        userRepository.delete(user);
    }

    public Collection<UserDTO> findAll(){
        Collection<User> users = userRepository.findAll();
        return UserAdapter.getUserDTOList((List<User>) users);
    }

    public void addOrder(Long phoneNumber, Order order){
        User user = userRepository.findByPhoneNumber(phoneNumber).get();
        user.addOrder(order);
        userRepository.save(user);
    }

    public void removeOrder(Long phoneNumber, Order order){
        User user = userRepository.findByPhoneNumber(phoneNumber).get();
        user.removeOrder(order);
        userRepository.save(user);
    }
}
