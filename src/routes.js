import { useParams } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";

export const routes = [
  {
    path: "/blog-client",
    component: Home,
  },
  {
    path: "/blog-client/posts/:postid",
    component: Post,
  },
];
