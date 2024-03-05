import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import ProductRow from "../ProductRow/ProductRow";
import './ProductTable.css'

function ProductTable() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductCategoryRow />
                    <ProductRow />
                </tbody>
            </table>
        </>
    )
}

export default ProductTable;