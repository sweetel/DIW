package garageDWP1.controllers;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

import garageDWP1.models.Garage;
import garageDWP1.models.GarageDAO;

/**
 * Servlet implementation class SvGarage
 */
@WebServlet("/SvGarage")
public class SvGarage extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private GarageDAO garageDAO;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SvGarage() {
        super();
        garageDAO = new GarageDAO();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		
		List<Garage> garages = garageDAO.list();
		
		request.setAttribute("garages", garages);
		
		RequestDispatcher rd = request.getRequestDispatcher("garage\\garageList.jsp");
		rd.forward(request, response);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String atrName = request.getParameter("name");
		String atrPostalCode = request.getParameter("postalCode");
		boolean isValidation = true;
		
		if(atrName == null || atrName.equals("")) {
			request.setAttribute("bodyNameValidation", "el nombre esnulo o esta vacio");
			isValidation = false;
		}
		if(atrPostalCode == null || atrPostalCode.equals("")) {
			request.setAttribute("bodyPostalCodeValidation", "el codigo postal esta vacio o es null");
			isValidation = false;
		}
		
		if(isValidation) {
			Garage newGarage = new Garage();
			newGarage.setName(atrName);
			newGarage.setPostalCode(atrPostalCode);
			
			boolean result = garageDAO.create(newGarage);
			if(result) {
				request.setAttribute("result", "ok");
			} else {
				request.setAttribute("result", "no se ha podido insertar");
			}
		}
		doGet(request, response);
	}

}
