import { createPinia } from "pinia";
import persist from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(persist);

export default pinia;
export * from "./modules/member";
export * from "./modules/study";
export * from "./modules/publish";
export * from "./modules/home";
