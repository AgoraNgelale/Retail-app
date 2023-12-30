import ProductCard from "../components/ProductCard"
import { products } from "../constants"
const PopularProducts = () => {
  return (
    <section id="products"
    className="max-containter max-sm:mt-12"
    >
      {/* Heading and description */}
      <div>
        <h2 className="font-palanquin font-bold text-4xl"> 
        Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className='font-montserrat text-slate-gray mt-2 lg:max-w-lg'>
          Experience top notch quality and style with
          our sought after selections. Discover a world of comfort, design,
          and value
        </p>
      </div>
      {/*Popular Product Cards */}
      <div className="mt-16 grid lg:grid-cols-4 
      md:grid-cols-3 sm:grid-cols-2 grid-cols-1
      sm:gap-4 gap-14">
        {products.map((product,index)=>(
          <ProductCard key={index}
            imgURL={product.imgURL}
            name = {product.name}
            price = {product.price}
          />
        ))}
      </div>

    </section>
  )
}

export default PopularProducts
