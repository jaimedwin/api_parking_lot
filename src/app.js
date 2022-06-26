import express from 'express';
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes
import allRouters from "./routers/all.routers.js";
app.use("/api/v1", allRouters);

export default app;
