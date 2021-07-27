import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/mainRoutes";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

dotenv.config({ path: "./.env" });

routes(app);

app.get("/api", (req, res) => {
    res.send("Welcome to NodeJs App using TypeScript");
});

const uri: string = <string>process.env.DATABASE;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then((err: any) => {
        console.log("conectado no MarcosDB hereee");
    });

const PORT: number = parseInt(<string>process.env.PORT, 10) || 5000;

app.listen(PORT, () => {
    console.log(`consolando a porta ${PORT}`);
});
