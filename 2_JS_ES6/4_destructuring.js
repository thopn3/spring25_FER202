// Phân rã đối tượng
const student = {
    id: 1,
    name: "Hoàng Nhật Nam",
    gender: true
}

// Tiến hành phân rã
// const {id, name, gender} = student;
// console.log(`Id: ${id}, Name: ${name}, Gender: ${gender==true?'Male':"Female"}`); // Chuỗi nội suy
const {id:sId, name:fName, gender:sex} = student;
console.log(`${sId} - ${fName} - ${sex}`);

// Phân rã mảng
const price = [10.5, 5.0, 15, 20, 13];
const [p1, p2, ...p3] = price;
console.log(p1);
console.log(p2);
console.log(p3);

// Yêu cầu: In ra danh sách các sản phẩm và danh sách các thể loại
const data = {
    products: [
        {pId: 1, pName: 'Product 1', pPrice: 10, pInStock: 100},
        {pId: 2, pName: 'Product 2', pPrice: 20, pInStock: 50},
        {pId: 3, pName: 'Product 3', pPrice: 15, pInStock: 200}
    ],
    categories: [
        {cId:1, cName: 'Category 1'},
        {cId:2, cName: 'Category 2'}
    ]
}

// Gợi ý: Tách data -> products và categories -> Duyệt lần lượt 2 mảng in ra theo định dạng
// Product: id - name - price - inStock
// Category: id - name

const {products, categories} = data;
// Hàm xử lý in thông tin của 1 product
const printProduct = ({pId, pName, pPrice, pInStock}) => {
    console.log(`${pId} - ${pName} - ${pPrice} - ${pInStock}`)
}

// Hàm xử lý đọc từng đối tượng trong mảng productData
const listProducts = (productData=[]) => {
    productData?.forEach(p => printProduct(p));
}

// Gọi hàm để thực thi
console.log("Danh sách các sản phẩm gồm:");
listProducts(products);