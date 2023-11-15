/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import CardItem from "../Card/Card"

const Movies = () => {
const gg=" bg-blue-950 text-white"
const movies=useSelector((state)=>state.movies)
  return (
    <div className="w-full  flex  z-10">
         <div className="populer mx-auto  mt-16">
        <div className=" mb-12 font-bold text-3xl">Populer Movies</div>
        <div className="div grid grid-cols-4 gap-28">
          {movies.map((product) => (
            <CardItem gg={gg} key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Movies