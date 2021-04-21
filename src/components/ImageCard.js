import React from 'react';
import { useStateValue } from '../store/StateProvider';

const ImageCard = () => {
  const [{ images }] = useStateValue();
 

  // 
   return images.map((image, index) => (
     <div className=" max-w-sm overflow-hidden shadow-lg rounded" key={index}>
       <img src={image.webformatURL} className="w-full" alt="" />
       <div className="px-6 py-4">
         <div className="font-bold text-xl text-purple-500 mb-2">
           <h2>Photo by {image.user}</h2>
         </div>
         <ul className="text-indigo-400 text-sm">
           <li>
             <strong>Views: </strong>
             {image.views}k
           </li>
           <li>
             <strong>Downloads: </strong>
             {image.downloads}
           </li>
           <li>
             <strong>Likes: </strong>
             {image.likes}k
           </li>
         </ul>
       </div>

       {/*  */}
       <div className="px-6 py-4">
         {image.tags.split(",").map((tag,index) => (
           <span key={index} className="inlline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
             #{tag}
           </span>
         ))}
       </div>
     </div>
   ));
};

export default ImageCard;