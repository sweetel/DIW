package com.servlet01.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.servlet01.CountryData;

public class IsoCountryDAO {

	private final static String serverUrl = "jdbc:mysql://localhost:3306/slDataDd";
	private final static String user = "root";
	private final static String password = "practicaRoot";

	public List<CountryData> List() {
		List<CountryData> response = new ArrayList<CountryData>();
		
		String query = "SELECT id, nombre_pais, siglas FROM country_data";
		
		try {
			Connection cn = DriverManager.getConnection(serverUrl, user, password);
			
			PreparedStatement ps = cn.prepareStatement(query);
			
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()) {
				int id = rs.getInt("id");
				String nombre_pais = rs.getString("nombre_pais");
				String siglas = rs.getString("siglas");
				response.add(new CountryData(nombre_pais, siglas));
			}
			
		} catch (Exception e) {
			System.out.println("error " + e);
		}
		
		return response;
		
	}
}
