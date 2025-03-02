"use client";

import { categoriesData } from "@/data";
import TagsSelect from "../tags-select/tags-select";

const TopicSelect = ({ ...props }) => {
  return (
    <TagsSelect
      maxTags={3}
      options={categoriesData}
      onChange={props.onChange}
    />
  );
};

export default TopicSelect;
