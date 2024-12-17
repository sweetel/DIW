<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="garageDWP1.models.Garage"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Garage List</title>
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
</head>
<body>
	<main class="container mt-4">
		<h1>Garages</h1>

		<%
		List<Garage> garages = request.getAttribute("garages") != null ? (List<Garage>) request.getAttribute("garages")
				: new ArrayList<Garage>();
		%>

		<%
		if (garages.size() == 0) {
		%>
		<p>No hay garages</p>
		<%
		} else {
		%>
		<p>
			Hay
			<%=garages.size()%>
			garajes disponibles:
		</p>
		<!-- Lista estilizada -->
		<ol class="list-group list-group-numbered">
			<%
			for (Garage garage : garages) {
			%>
			<li
				class="list-group-item d-flex justify-content-between align-items-start">
				<div class="ms-2 me-auto">
					<div class="fw-bold"><%=garage.getName()%></div>
					Código ISO:
					<%=garage.getPostalCode()%>
				</div> <span class="badge text-bg-primary rounded-pill"></span>
			</li>
			<%
			}
			%>
		</ol>
		<%
		}
		%>

		<!-- Button trigger modal -->
		<button type="button" class="btn btn-primary" data-bs-toggle="modal"
			data-bs-target="#staticBackdrop">Launch static backdrop
			modal</button>

		<!-- Modal -->
		<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
			data-bs-keyboard="false" tabindex="-1"
			aria-labelledby="staticBackdropLabel" aria-hidden="true">
			<div class="modal-dialog">
				<form class="modal-content" method="POST" action="SvGarage">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="staticBackdropLabel">Modal
							title</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal"
							aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div class="form-floating mb-3">
							<input type="text" class="form-control" id="fiName" placeholder="name" name="name"> 
							<label name="fiName">name</label>
						</div>
						<div class="form-floating mb-3">
							<input type="text" class="form-control" id="fiPostalCode" placeholder="postal" name="postalCode"> 
							<label name="fiPostalCode">postal</label>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary"
							data-bs-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary">CREATE</button>
					</div>
				</div>
			</div>
		</form>
	</main>

	<!-- Script opcional para funcionalidad de Bootstrap -->
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
