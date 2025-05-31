import CommonApi from "./CommonApi";

export const addRecipeAPI = async (recipeData) => {
  return await CommonApi("post", "/allRecipes", recipeData);
};

export const viewrecipeApi = async () => {
  return await CommonApi("get", "/allRecipes", "");
};

export const viewSingleRecipeApi = async(id)=>{
  return await CommonApi('get',`/allRecipes/${id}`,"")
}

export const deleteRecipeApi = async(id)=>{
    return await CommonApi('delete',`/allRecipes/${id}`,{})
}

export const updateRecipeApi = async(id,updatedData)=>{
  return await CommonApi('put',`/allRecipes/${id}`,updatedData)
}

