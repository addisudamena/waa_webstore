package waa.alemu.addisu.webstor.service;


import java.util.ArrayList;
import java.util.Collection;

public class ProductDTO {
	private long productnumber;
	private String productname;
	//private Collection<ProductEntryDTO> entryList = new ArrayList<ProductEntryDTO>();
	private String description;
	private double price;
	private int quantity;

	public ProductDTO(long productnumber, String productname, String description, double price,int quantity) {
		this.productnumber = productnumber;
		this.productname = productname;
		this.description = description;
		this.price = price;
		this.quantity = quantity;

	}


	public ProductDTO() {
	}

	public void addEntry(ProductEntryDTO entryDto){
		//entryList.add(entryDto);
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
