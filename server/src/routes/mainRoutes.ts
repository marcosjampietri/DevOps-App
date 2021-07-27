import getAllProd from "../controllers/prodController";

const routes = (app: any) => {
    //CV-EDU
    app.route("/api/products").get(getAllProd);
    // app.route("/api/products/:prodId").get(getEdu);
};

export default routes;
