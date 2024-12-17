package garageDWP1.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBUtils {

	private final static String serverUrl = "jdbc:mysql://localhost:3306/garageDB";
	private final static String user = "root";
	private final static String password = "practicaRoot";

	public static Connection getConnection() throws SQLException {
		Connection cn = DriverManager.getConnection(serverUrl, user, password);
		
		return cn;
	}
}
