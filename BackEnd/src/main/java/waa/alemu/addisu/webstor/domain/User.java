package waa.alemu.addisu.webstor.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Document
public class User {
	@Id
	private Long phoneNumber;

	private Address address;
	private CreditCard creditCards;
	private String firstName;
	private String lastName;

	private List<Order> orders;

	public User(Long phoneNumber, Address address, CreditCard creditCards, String firstName, String lastName) {
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.creditCards = creditCards;
		this.firstName = firstName;
		this.lastName = lastName;
		this.orders=new ArrayList<>();

	}

	public User() {
	}

	public void addOrder(Order order){
		orders.add(order);
	}
	public void removeOrder(Order order){
		orders.remove(order);
	}
	public void computeBalance() {
		/*balance=0;
		for (Order entry : orders) {
			balance+=entry.getAmount();
		}*/
	}
	public void deposit(double amount){
		/*Order entry = new Order(new Date(), amount, "deposit");
		orders.add(entry);
		computeBalance();*/
	}
	public void withdraw(double amount){
		/*Order entry = new Order(new Date(), -amount, "withdraw");
		orders.add(entry);
		computeBalance();*/
	}


	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phonenumber) {
		this.phoneNumber = phonenumber;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public CreditCard getCreditCards() {
		return creditCards;
	}

	public void setCreditCards(CreditCard creditCards) {
		this.creditCards = creditCards;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}
}
