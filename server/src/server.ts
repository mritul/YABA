import dotenv from "dotenv";
import express, { Express, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import plaidRoutes from "./routes/plaid.routes";
import session from "express-session";

dotenv.config();

const app: Express = express();
if (process.env.NODE_ENV === 'development') app.use(morgan("dev"));
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(session({
  secret: process.env.SESSION_SECRET as string,
  resave: true,
  saveUninitialized: true,
  // cookie: { secure: true }
}))
app.use("/api/", userRoutes);
app.use("/api/", authRoutes);
app.use("/api", plaidRoutes)

app.get("/", async (_, res: Response) => {
  res.json({ message: "YABA backend server" }); // Send a JSON response to the client
});

app.listen(process.env.PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(
    "⚡️[Server]: App is running at http://localhost:%d\n   Press CTRL-C to stop",
    process.env.PORT
  );
});
