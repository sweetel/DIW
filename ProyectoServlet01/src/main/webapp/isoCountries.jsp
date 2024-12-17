<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page import="com.servlet01.CountryData" %>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>isoCountries</title>
  <!-- Enlace a Bootstrap para estilos (opcional, asegúrate de incluir Bootstrap en tu proyecto) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
</head>
<body>
  <main class="container">
    <h1>isoCountries</h1>
    <%
      // Obtener la lista de países desde el atributo de la solicitud
      List<CountryData> countryList = (List<CountryData>) request.getAttribute("countryList");

      // Manejo de caso donde la lista es nula
      if (countryList == null) {
        countryList = new ArrayList<CountryData>();
      }
    %>

    <% if (countryList.size() == 0) { %>
      <p>No hay países disponibles.</p>
    <% } else { %>
      <p>Hay <%= countryList.size() %> países disponibles:</p>
      <!-- Lista estilizada -->
      <ol class="list-group list-group-numbered">
        <% for (CountryData country : countryList) { %>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold"><%= country.getName() %></div>
              Código ISO: <%= country.getIsoCode() %>
            </div>
            <span class="badge text-bg-primary rounded-pill"></span>
          </li>
        <% } %>
      </ol>
    <% } %>
  </main>

  <!-- Script opcional para funcionalidad de Bootstrap -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
