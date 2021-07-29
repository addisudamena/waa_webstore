package waa.alemu.addisu.webstor.service;

import waa.alemu.addisu.webstor.domain.Address;
import waa.alemu.addisu.webstor.domain.CreditCard;
import waa.alemu.addisu.webstor.domain.User;

import java.util.ArrayList;
import java.util.List;

public class UserAdapter {

    public static UserDTO getUserDTO(User user){
        UserDTO userDto = new UserDTO();
        if (user != null){
            userDto = new UserDTO(
                    user.getPhoneNumber(),
                    user.getFirstName(),
                    user.getLastName(),
                    user.getAddress().getEmail(),
                    user.getAddress().getStreet(),
                    user.getAddress().getZip(),
                    user.getCreditCards().getType(),
                    user.getAddress().getCity(),
                    user.getCreditCards().getNumber(),
                    user.getCreditCards().getValidDate(),
                    user.getCreditCards().getValidationCode()


            );
           /*  userDto.setOrders(user.getOrders());
          for (Order entry : user.getEntryList()){
               UserEntryDTO entryDto = new UserEntryDTO(entry.getDate(),
                       entry.getAmount(),
                       entry.getDescription());
               userDto.addEntry(entryDto);
           }*/
        }
        return userDto;
    }

    public static User getUser(UserDTO userDto){
        User user = new User();
        if (user != null){
            user = new User(

                    userDto.getPhoneNumber(),
                    new Address(userDto.getEmail(),userDto.getStreet(),userDto.getCity(),userDto.getZip()),
                    new CreditCard(userDto.getType(),userDto.getNumber(),userDto.getValid(),userDto.getCcv()),
                    userDto.getFirstname(),
                    userDto.getLastname());


            /* user.setOrders(userDto.getOrders());
           for (UserEntryDTO entryDto : userDto.getEntryList()){
                Order entry = new Order(entryDto.getDate(),
                        entryDto.getAmount(),
                        entryDto.getDescription());
                user.addEntry(entry);
            }*/
        }
        return user;
    }

    public static List<UserDTO> getUserDTOList(List<User> users){
        List<UserDTO> userDtoList = new ArrayList<UserDTO>();
        if (users != null){
            for (User user : users){
                userDtoList.add(getUserDTO(user));
            }
        }
        return userDtoList;
    }
}
