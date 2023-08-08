import React from 'react'

const Logo = () => {
  return (
    <div className="hidden md:flex items-center space-x-2">
        <img
          src="https://cdn.imgbin.com/7/21/16/imgbin-rain-cloud-clouds-and-raindrops-white-cloud-tvxfKErQxeyZ7taANK4iUfbfT.jpg"
          alt="Logo"
          className="w-12 h-10"
        />
        <span className="text-white font-semibold text-lg">My Weather App</span>
      </div>

  )
}

export default Logo