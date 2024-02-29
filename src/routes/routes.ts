import express, { Request, Response } from "express";
import { Home_Page } from "../controller/Index";

const Router = express.Router();

Router.get("/", Home_Page);

export default Router;
