import React from "react";
import Profile from "./profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile fullName="John Doe" bio="Full-stack JS student at Go My Code" profession="student">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQxj9ZTZxcHRhi80Y0K_1zFiAEZmsdHxaj2w&usqp=CAU"
          alt="avatar"
          width="200px"
          height="200px"
          style={{ paddingLeft: "580px" }}
        />
      </Profile>
    </div>
  );
}
export default App;
