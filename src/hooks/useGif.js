
//  import React from 'react';
//  import axios from 'axios';
//  import { useEffect } from 'react';
//  import { useState } from 'react';


//   REACT_APP_GIPHY_API_KEY = 'kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S'
//   const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//   const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//   const useGif = (tag) => {
   
//   //const [tag, setTag] = useState("Car"); not need here
//   const[gif, setGif] = useState(" ");
//   const [loading, setLoading] = useState("false");

//  async function fetchData( ) {
//  setLoading(true);

//     //const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//     const {data} = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
//     const imageSource = data.data.images.downsized_large.url;
//     setGif(imageSource);
//     setLoading(false)
//  }
 
//   useEffect( () => {
//   fetchData();
//   }, [] )


//   return{gif, loading, fetchData};
  
// //  function clickHandler() {
// //       fetchData();
// //  }


// //  function changeHandler(event){
// //  setTag(event.target.value)
// //  }

// //   return(
// //     <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

// //         <h1 className="mt-[15px] text-2xl underline uppercase font-bold"> Random {tag} Gif  </h1>
         
// //        {

// //         loading ? (<Spinner/>) :( <img src = {gif} width="450"/>)

// //        }
      

// //       <input
// //         className = "w-10/12 text-lg rounded-lg mb-[3px] text-center"
// //         onChange = {changeHandler}
// //         value = {tag}
       
// //       />


// //         <button onClick = {clickHandler}
// //         className = "w-10/12  bg-yellow-300 text-lg py-2 rounded-lg mb-[20px] "
        
// //         >Generate</button>
// //     </div>
// //   )
// };

// export default useGif;
