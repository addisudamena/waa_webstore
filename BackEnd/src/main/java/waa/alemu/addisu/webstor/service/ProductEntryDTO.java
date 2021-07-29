package waa.alemu.addisu.webstor.service;

import java.util.Date;

public class ProductEntryDTO {
	private Date date;
	private double amount;
	private String description;

	
	public ProductEntryDTO() {
	}

	public ProductEntryDTO(Date date, double amount, String description) {
		this.date = date;
		this.amount = amount;
		this.description = description;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
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
