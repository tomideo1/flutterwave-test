
import ValidationRoutes from "./validation.routes";

export default function myRoutes(app : any) {

    app.use(function (req : any, res:any, next:any) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
  
      next();
    });

    app.use("/",ValidationRoutes);

}
