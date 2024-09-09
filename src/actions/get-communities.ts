"use server";
import communities from "@/../public/data/communities.json";

// Sample data
export async function getCommunities() {
  // console.log(yourCommunities);

  const yourCommunities = communities.map((c) => ({
    id: c.id,
    label: c.title,
    value: c.name,
    image: c.icon_img,
  }));

  const groups = [
    {
      label: "Your profile",
      teams: [
        {
          label: "@doe-joe",
          value: "profile",
        },
      ],
    },
    {
      label: "Your communities",
      teams: yourCommunities,
    },
  ];

  return groups;
}
