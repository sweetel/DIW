<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!doctype html>
<html lang="en" data-bs-theme="auto">
  <head>
  <script src="https://getbootstrap.com/docs/5.3/assets/js/color-modes.js"></script>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.122.0">
    <title>Design Guide</title>

	
	<jsp:include page="../scaffolding/HeadLinks.jsp" />

  </head>
  <body>
 	<jsp:include page="../scaffolding/ButtonTheme.jsp" />
 	
 	 <jsp:include page="../scaffolding/header.jsp" />
 	 
 	 <section class="color-section">
        <h2>Logo Colors</h2>
        <p class="text-muted">Here are the main colors used in our logo.</p>
        <div class="row justify-content-center">
          <div class="col-sm-4">
            <div class="color-box" style="background-color: #ff5733;">
              #FF5733
            </div>
            <p>Primary Red</p>
          </div>
          <div class="col-sm-4">
            <div class="color-box" style="background-color: #33c4ff;">
              #33C4FF
            </div>
            <p>Accent Blue</p>
          </div>
          <div class="col-sm-4">
            <div class="color-box" style="background-color: #28a745;">
              #28A745
            </div>
            <p>Support Green</p>
          </div>
        </div>
      </section>
 	
 		<jsp:include page="/scaffolding/Footer.jsp" />
  	

	<script src="https://getbootstrap.com/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    </body>
</html>