import "reflect-metadata";
import express from "express";
import cds from "@sap/cds";
import { createCombinedHandler } from "cds-routing-handlers";

import {initializeABAP} from "../../setup/output/init.mjs";
import { cl_abap_math } from "../../setup/output/cl_abap_math.clas.mjs";

export class Server {
    public static async run() {
        const app = express();

        const hdl = createCombinedHandler({
            handler: [__dirname + "/entities/**/*.js", __dirname + "/functions/**/*.js"],
        });

        await initializeABAP();
        const math = new cl_abap_math();

        const result = math.add(5, 3);
        console.log(`The result of the addition is: ${result}`);

        await cds.connect("db");
        await cds
            .serve("all")
            .at("odata")
            .in(app)
            .with(srv => hdl(srv));

        // Redirect requests to the OData Service
        app.get('/', function(req, res) {
            res.redirect('/odata/')
        })

        // Run the server.
        const port = process.env.PORT || 3001;
        app.listen(port, async () => {
            console.info(`Server is listing at http://localhost:${port}`);
        });
    }
}

Server.run();