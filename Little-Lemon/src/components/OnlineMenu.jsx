import React from 'react'
import Menu from './Menu.js'

const OnlineMenu = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 min-h-screen bg-gray-100 w-full'>
      <h1 className='text-green-800'>Online Menu</h1>
      <p>Welcome to the online menu page!</p>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6">
  {Menu.map((recipe) => (
    <div
      key={recipe.id}
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-56 w-full object-cover rounded-t-xl shadow-lg mx-auto"
      />

      {/* Content */}
      <div className="p-5 w-[100%]  flex flex-col justify-between flex-grow space-y-3 gap-10 ">
        <h3 className="text-xl font-bold text-gray-800 shadow-2xl">{recipe.title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{recipe.description}</p>
        <div className="flex justify-between items-center w-full "> 
          <span className="text-lg font-semibold text-amber-700">${recipe.price}</span>
        </div>
      </div>
    </div>
  ))}
</section>
    </div>
  )
}

export default OnlineMenu;
