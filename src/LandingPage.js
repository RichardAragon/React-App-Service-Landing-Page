landing-page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #3498db, #8e44ad);
  color: white;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

header {
  text-align: center;
  padding: 4rem 1rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

header p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

button {
  background-color: #f1c40f;
  color: black;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #f39c12;
}

main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;
  flex-grow: 1;
}

.card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  margin: 1rem;
  border-radius: 10px;
  text-align: center;
  flex-basis: 30%;
  min-width: 250px;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

footer {
  text-align: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.1);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  color: black;
}

form h2 {
  margin-bottom: 1rem;
  color: #3498db;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

textarea {
  min-height: 100px;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
}

.form-buttons button {
  flex-basis: 48%;
}
