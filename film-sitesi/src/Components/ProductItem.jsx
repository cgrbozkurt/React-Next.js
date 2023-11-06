
const ProductItem = ({product}) => {
// 
  return (

    <>
        <div className="container">
            <div className="img"><img src="{product.id} " alt="" /></div>
            <div className="aciklama">
                <ul>
                    <li>{product.title}</li>
                    <li>{product.release_date}</li>
                </ul>
            </div>
        </div>

    </>
  )
}

export default ProductItem