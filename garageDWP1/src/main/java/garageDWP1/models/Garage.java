package garageDWP1.models;

public class Garage {
	private Integer id;
	private String name;
	private String postalCode;
	
	public Garage() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Garage(Integer id, String name, String postalCode) {
		super();
		this.id = id;
		this.name = name;
		this.postalCode = postalCode;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	@Override
	public String toString() {
		return "Garage [id=" + this.id + ", name=" + this.name + ", postal_code=" + this.postalCode + "]";
	}

	

	
}
