
import "./product.scss"
import { Single } from '../../Component/Single/Single'
import { singleProduct } from '../../data'
export const Product = () => {
  return (
    <div>
        <Single {...singleProduct}/>
    </div>
  )
}
