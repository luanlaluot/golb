export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  category: string;
}

export const popularArticles: BlogPost[] = [
  {
    id: "1",
    title: "Best Strategy to Achieve Profitable Harvest",
    description:
      "Optimal strategies for achieving profitable harvests include a comprehensive approach to farm management, selection of appropriate crop varieties.",
    date: "October 23, 2023",
    imageUrl: "/images/orange-tree.jpg",
    category: "Farming",
  },
  {
    id: "2",
    title: "Abundant Harvest from Agricultural Farm Land Shows Success",
    description:
      "Recent agricultural innovations lead to record-breaking harvests across multiple regions.",
    date: "October 15, 2023",
    imageUrl: "/images/carrots.jpg",
    category: "Success Stories",
  },
  {
    id: "3",
    title: "Latest Innovations Increasing Milk Production and Quality",
    description:
      "New technological advancements in dairy farming show promising results.",
    date: "October 10, 2023",
    imageUrl: "/images/cows.jpg",
    category: "Innovation",
  },
  {
    id: "4",
    title: "Latest Innovations Increasing Milk Production and Quality",
    description:
      "New technological advancements in dairy farming show promising results.",
    date: "October 10, 2023",
    imageUrl: "/images/cows.jpg",
    category: "Innovation",
  },
];

export const latestArticles: BlogPost[] = [
  {
    id: "4",
    title: "Exploring Potential and Challenges in Global Agriculture",
    description:
      "Uncovering the Vast Potential and Complex Challenges in the World of Global Agriculture.",
    date: "October 23, 2023",
    imageUrl: "/images/vineyard.jpg",
    category: "Global",
  },
  {
    id: "5",
    title: "Bringing Change in the Livestock Industry",
    description:
      "Revealing Innovations, Challenges and Transformation Potential in the Dairy Sector.",
    date: "October 20, 2023",
    imageUrl: "/images/barn.jpg",
    category: "Livestock",
  },
  {
    id: "6",
    title: "Potential and Constraints Faced in Production Quality",
    description:
      "Discussed Challenges and Opportunities in Achieving High Production Standards.",
    date: "October 19, 2023",
    imageUrl: "/images/apples.jpg",
    category: "Production",
  },
];
