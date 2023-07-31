import { ReactComponent as Search } from "assets/search.svg";
import { ReactComponent as Tent } from "assets/tent.svg";
import { ReactComponent as Comment } from "assets/comment.svg";

const features = [
  {
    id: "discover",
    title: "Discover",
    description:
      "Explore a wide range of campgrounds across the US national parks",
    icon: Search,
  },
  {
    id: "contribute",
    title: "Contribute",
    description:
      "Add reviews for the campgrounds you visit and share your experiences with the community",
    icon: Tent,
  },
  {
    id: "plan",
    title: "Plan",
    description:
      "Read reviews and ratings from other campers to choose the perfect spot for your next adventure",
    icon: Comment,
  },
];

export default features;
