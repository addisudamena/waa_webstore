package waa.alemu.addisu.webstor.domain;

import java.util.Date;
import java.util.List;

public class Order {
	private Date date;
	private int amount;
	private String description;
	private User user;
	private List<Product> product;

	


	Order(Date date, int amount, String description,User user) {
		this.user = user;
		this.date = date;
		this.amount = amount;
		this.description = description;
	}

	public Order(String description, int amount){
		this.description=description;
		this.amount=amount;
	}
	Order() {
	}


	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
