package com.servlet01;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

import com.servlet01.model.IsoCountryDAO;

/**
 * Servlet implementation class svLogin
 */
@WebServlet("/SvLogin")
public class SvLogin extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static IsoCountryDAO isoCountryDAO;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SvLogin() {
        super();
        isoCountryDAO = new IsoCountryDAO();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		List<CountryData> countrylist = isoCountryDAO.List();
		request.setAttribute("countryList", countrylist);
		
		RequestDispatcher requestDispatcher = request.getRequestDispatcher("isoCountries.jsp");
		requestDispatcher.forward(request, response);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("userPassword");

        // Lógica de autenticación (esto es un ejemplo básico)
        if ("admin".equals(username) && "1234".equals(password)) {
            // Redirigir al JSP en español
            response.sendRedirect("isoCountries.jsp");
        } else {
            // Devolver al formulario con un mensaje de error
            request.setAttribute("isLoginError", "true");
            request.getRequestDispatcher("login.jsp").forward(request, response);
        }
    }

}
