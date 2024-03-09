import assets from "../assets";

export const Navigation = [
  {
    id: "nav1",
    link: "/",
    label: "Home",
  },
  {
    id: "nav2",
    link: "/team",
    label: "Team",
  },
  {
    id: "nav3",
    link: "/blog",
    label: "Blog",
  },
  {
    id: "nav4",
    link: "/service",
    label: "Service",
  },
  {
    id: "nav5",
    link: "/category",
    label: "Category",
    subLink: [
      {
        id: "subNav1",
        link: "/health",
        label: "Health",
      },
      {
        id: "subNav2",
        link: "/food",
        label: "Food",
      },
      {
        id: "subNav3",
        link: "/games",
        label: "Games",
      },
      {
        id: "subNav4",
        link: "/travel",
        label: "Travel",
      },
      {
        id: "subNav5",
        link: "/business",
        label: "Business",
      },
      {
        id: "subNav6",
        link: "/marketing",
        label: "Marketing",
      },
      {
        id: "subNav7",
        link: "/education",
        label: "Education",
      },
      {
        id: "subNav8",
        link: "/lifestyle",
        label: "Lifestyle",
      },
      {
        id: "subNav9",
        link: "/technology",
        label: "Technology",
      },
    ],
  },
  {
    id: "nav6",
    link: "/contact",
    label: "Contact",
  },
];
export const Social = [
  {
    link: "https://www.facebook.com/bloggic/",
    img: assets.facebook,
  },
  {
    link: "https://www.instagram.com/bloggicdotcom/",
    img: assets.instagram,
  },
  {
    link: "https://twitter.com/bloggicdotcom",
    img: assets.twitter,
  },
  {
    link: "https://in.pinterest.com/bloggic/",
    img: assets.pinterest,
  },
  {
    link: "https://www.linkedin.com/company/bloggic/",
    img: assets.linkedin,
  },
  {
    link: "https://www.youtube.com/channel/UCtWEz1Qg5AUuiHqTleTlHaQ",
    img: assets.youtube,
  },
];
