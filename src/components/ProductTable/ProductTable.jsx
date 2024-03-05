import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import ProductRow from "../ProductRow/ProductRow";

function ProductTable() {
    return (
        <>
            <table>
                <thead>
                    <th>
                        <td>Table header</td>
                    </th>
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