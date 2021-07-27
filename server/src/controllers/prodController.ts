import product from "../models/prodModel";

const getAllProd = (req: any, res: any) => {
    product.find({}, (err, product) => {
        res.header("Access-Control-Allow-Origin", "*"); //CORS
        res.json(product);
    });
};

export default getAllProd;
