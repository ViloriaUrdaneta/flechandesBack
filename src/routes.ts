import fletesRouter from "./controller/fletes/FleteRoutes";

export const Routes = [ fletesRouter ]

export default function registerRouter (app: any) {
    Routes.map((router) => {app.use(router)})
}