package waa.alemu.addisu.webstor.domain;

import javax.validation.constraints.Email;

public class Address {
    @Email(message = "Email should be valid")
    private String email;
    private String street;
    private String city;
    private int zip;


    public Address() {
    }

    public Address(String email, String street, String city, int zip) {
        this.email = email;
        this.street = street;
        this.city = city;
        this.zip = zip;
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

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getZip() {
        return zip;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }


}
