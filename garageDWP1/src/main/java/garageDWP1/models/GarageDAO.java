package garageDWP1.models;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import garageDWP1.utils.DBUtils;

public class GarageDAO {

    public List<Garage> list() {
        List<Garage> response = new ArrayList<>();
        String query = "SELECT id, name, postal_code FROM garage";

        try (Connection cn = DBUtils.getConnection();
             PreparedStatement ps = cn.prepareStatement(query);
             ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                String postalCode = rs.getString("postal_code");

                response.add(new Garage(id, name, postalCode));
            }

        } catch (Exception ex) {
            ex.printStackTrace(); // Use a logger in real-world applications
        }
        
        return response;
    }
    
    public boolean create(Garage newGarage) {
    	try {
    		Connection cn = DBUtils.getConnection();
    		
    		String query = "INSERT INTO garageDb.garage (name, postal_code) VALUES (?, ?)";
    		
    		PreparedStatement ps = cn.prepareStatement(query);
    		
    		ps.setString(0, newGarage.getName());
    		ps.setString(1, newGarage.getPostalCode());
    		
    		boolean result = ps.execute();
    		
    		return result;
    		
    	} catch (Exception ex){
    		System.out.println(ex);
    		return false;
    	}
    }
}
