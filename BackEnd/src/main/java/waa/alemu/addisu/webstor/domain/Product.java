package waa.alemu.addisu.webstor.domain;

import org.jetbrains.annotations.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Min;


@Document
public class Product {
	@Id
	private long productnumber;
	@NotNull
	private String productname;

	private String description;
	@Min(value = 0, message = "price must be positive number")
	private double price;

	@Min(value = 0, message = "price must be positive number")
	private int quantity;

	public Product(long productnumber, String productname,String description, double price,int quantity) {
		this.productnumber = productnumber;
		this.productname = productname;
		this.description = description;
		this.price = price;
		this.quantity = quantity;
	}


	public Product() {
	}

	public void addEntry(Order entry){

		//orders.add(entry);
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
	/*	Order entry = new Order(new Date(), -amount, "withdraw");
		orders.add(entry);
		computeBalance();*/
	}

	public long getProductnumber() {
		return productnumber;
	}

	public void setProductnumber(long productnumber) {
		this.productnumber = productnumber;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}
}
