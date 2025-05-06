/* General Reset and Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
  padding: 20px;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0077cc;
  color: white;
  padding: 15px 30px;
  border-radius: 10px;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.navbar a:hover {
  text-decoration: underline;
}

/* Headings and Sections */
main section {
  margin-top: 40px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #0077cc;
  margin-bottom: 10px;
}

h3, h4 {
  color: #444;
  margin-bottom: 10px;
}

/* Lists */
ul, ol {
  margin-left: 20px;
  margin-top: 10px;
}

/* Media Section */
img, video, audio {
  display: block;
  margin: 10px 0;
  max-width: 100%;
  border-radius: 8px;
}

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

th, td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}

thead {
  background-color: #0077cc;
  color: white;
}

/* Form Styling */
form {
  margin-top: 15px;
}

label {
  display: block;
  margin: 10px 0 5px;
  font-weight: bold;
}

input, textarea, select, button {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

button {
  background-color: #0077cc;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #005fa3;
}

/* Flexbox Layout */
.flex-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 15px;
}

.box {
  flex: 1 1 200px;
  background-color: #0077cc;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.box:hover {
  transform: scale(1.05);
}

/* Footer */
footer {
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  color: #555;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .flex-container {
    flex-direction: column;
  }
}
