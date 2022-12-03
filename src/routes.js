import { useParams } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/posts/:postid",
    component: Post,
  },
];
