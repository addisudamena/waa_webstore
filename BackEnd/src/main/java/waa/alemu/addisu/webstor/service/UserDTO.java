package waa.alemu.addisu.webstor.service;

import org.springframework.data.annotation.Id;
import waa.alemu.addisu.webstor.domain.Address;
import waa.alemu.addisu.webstor.domain.CreditCard;
import waa.alemu.addisu.webstor.domain.Order;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class UserDTO {

    @Id
    private Long phoneNumber;
    private String firstname;
    private String lastname;
    private String email;
    private String street;
    private int zip;
    private String type;
    private String city;
    private Long number;
    private String valid;
    private int ccv;


    public UserDTO(Long phoneNumber, String firstname, String lastname, String email, String street, int zip, String type, String city, long number, String valid, int ccv) {
        this.phoneNumber = phoneNumber;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.street = street;
        this.zip = zip;
        this.type = type;
        this.city = city;
        this.number = number;
        this.valid = valid;
        this.ccv = ccv;
    }


    public UserDTO() {
    }

    public void addOrder(Order order){
      //  orders.add(order);
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }




    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getZip() {
        return zip;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Long getNumber() {
        return number;
    }

    public void setNumber(Long number) {
        this.number = number;
    }

    public String getValid() {
        return valid;
    }

    public void setValid(String valid) {
        this.valid = valid;
    }

    public int getCcv() {
        return ccv;
    }

    public void setCcv(int ccv) {
        this.ccv = ccv;
    }
}
