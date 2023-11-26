export interface Product {
  productID: number,
  productName: string,
  unitPrice: number,
  category: Category
}

export interface Category {
  categoryID: number,
  categoryName: string
}
