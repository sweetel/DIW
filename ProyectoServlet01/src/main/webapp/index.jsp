<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<main class="container">
	<% String text = "hello world from jsp variable";%>
	<h1><%= text %></h1>
	<%-- form de login --%>
	<form action="SvLogin" method="POST">
		<h3>user login</h3>
		<p>
			<label>name</label> 
			<input type="text" name="username">
		</p>
		<p>
			<label>password</label> 
			<input type="password" name="userPassword">
		</p>
		<button type="submit">login</button>
		<% Boolean isLoginError = request.getRequestDispatcher("isLoginError") != null 
			&& Boolean.parseBoolean((String)request.getAttribute("isLoginError")); %>
		<% if(isLoginError != null && isLoginError) { %>
			
		
		 <div class="alert alert-danger mt-3">
                Usuario o contraseña incorrecto
            </div>
		
		<% } %>
	</form>
	</main>
</body>
</html>