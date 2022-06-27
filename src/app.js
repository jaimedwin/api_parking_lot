import express from 'express';
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes
import registerVehicleRouters from "./routers/register-vehicle.routers.js";
import vehicleRouters from "./routers/vehicle.routers.js";
import typeRouters from "./routers/type.routers.js";
app.use("/api/v1", registerVehicleRouters);
app.use("/api/v1/vehicle", vehicleRouters);
app.use("/api/v1/type", typeRouters);

export default app;
