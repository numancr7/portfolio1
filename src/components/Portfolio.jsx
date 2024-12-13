import React from "react";
import pic from '/birds-375a.jpg'

const Portfolio = () => {
  return (
    <div className=" body flex gap-20 my-5 container  shadow-md   md:gap-10 px-5 md:px-10">
      
      <div class="max-w-sm rounded-lg  overflow-hidden shadow-lg">
  <img src={pic} class="w-full h-48 object-cover" alt="..." />
  <div class="px-6 py-4">
    <h5 class="text-xl font-bold mb-2">Card title</h5>
    <p class="text-gray-700 text-base">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
  </div>
  <div class="px-6 py-4">
    <a href="#" class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
      Go somewhere
    </a>
  </div>
</div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img src={pic} class="w-full h-48 object-cover" alt="..." />
  <div class="px-6 py-4">
    <h5 class="text-xl font-bold mb-2">Card title</h5>
    <p class="text-gray-700 text-base">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
  </div>
  <div class="px-6 py-4">
    <a href="#" class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
      Go somewhere
    </a>
  </div>
</div>

    </div>
  );
};

export default Portfolio;
