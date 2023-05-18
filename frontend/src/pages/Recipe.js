import React, { useEffect, useContext ,useState} from "react";

import Navbar from "../components/Navbar";
import UserContext from "../UserContext";
import Typewriter from "typewriter-effect";
import axios from "axios";


function Recipe() {

  const { recipeText, setRecipeText } = useContext(UserContext);
  const [recipes, setRecipes] = useState([]);
  const {user} = useContext(UserContext);
  const {type} = useContext(UserContext);
  const { inventoryItems,} = useContext(UserContext);


  useEffect(() => {
    const newUser = {
      name : user,
      type: type,
      items : inventoryItems
  }
    axios.post('http://127.0.0.1:5000/api/getRecipe',newUser).then(response => {
      // const data = JSON.parse(response);
     
      const data = response.data
      setRecipes(data)
      console.log(recipes);
    })
    .catch(error => console.error(error));
  }, []);

  return (
    <div className="recipe">
      <Navbar />
      <div className="recipe-items">
        {/* {recipeText && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(recipeText).start();
            }}
            cursor="_"
            typingDelay={100}
            speed={50}
          />
        )} */}
    <table>
      <thead>
        <tr>
       
      <th style={{paddingLeft: "10px",border: "solid"}}>Recipe Name</th>
      <th style={{paddingLeft: "10px",border: "solid"}}>Ingredients</th>
      <th style={{paddingLeft: "10px",border: "solid"}}>Directions</th>
    
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe, index) => (
          <tr key={index}>
          
        <td style={{padding: "10px",border: "solid"}}>{recipe.recipe_name}</td>
        <td style={{padding: "10px",border: "solid"}}>{recipe.Ingredients}</td>
        <td style={{padding: "10px",border: "solid"}}>{recipe.Directions}</td>
       
          </tr>
        ))}
      </tbody>
    </table>



      </div>
      </div>
   
  );
}

export default Recipe;
