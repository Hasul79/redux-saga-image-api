export const getImagesApi = async()=> {
   const data =  await fetch("https://dog.ceo/api/breeds/image/random")
   return await data.json()
}