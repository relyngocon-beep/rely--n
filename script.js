/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #f5f5f5;
  color: #333;
}

/* Navbar */
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background: #fff;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  z-index: 1000;
}

.logo {
  font-weight: bold;
  font-size: 18px;
  color: #a35419;
}
.logo span {
  color: #000;
  font-weight: normal;
}

nav ul {
  display: flex;
  list-style: none;
}
nav ul li {
  margin-left: 25px;
}
nav ul li a {
  text-decoration: none;
  color: #444;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 0;
}
nav ul li a.active,
nav ul li a:hover {
  border-bottom: 2px solid #a35419;
  color: #a35419;
}

/* Hero Section */
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 50px;
  margin-top: 60px;
  background: linear-gradient(to right, #fafafa, #ffffff);
}

.hero-text {
  flex: 1;
}
.hero-text h2 {
  font-size: 36px;
  font-weight: bold;
  line-height: 1.4;
  color: #a35419;
}
.hero-text p {
  margin: 20px 0;
  color: #777;
  font-size: 16px;
}
.btn {
  display: inline-block;
  padding: 10px 20px;
  background: #333;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s;
}
.btn:hover {
  background: #a35419;
}

/* Hero Image */
.hero-img {
  flex: 1;
  display: flex;
  justify-content: center;
}
.hero-img img {
  max-width: 400px;
  border-radius: 10px;
}
