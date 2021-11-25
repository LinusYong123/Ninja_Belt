import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/shared/home.component";

export const APP_ROUTES = [
  { path: "directory", component: DirectoryComponent },
  { path: "", component: HomeComponent }
];
