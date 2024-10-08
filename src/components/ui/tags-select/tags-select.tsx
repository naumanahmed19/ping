import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleX } from "lucide-react";
import React, { useEffect, useState } from "react";

interface TagsSelectProps {
  className?: string;
  type?: string;
  categories: any[];
  maxTags: number;
  [key: string]: any;
}

const TagsSelect: React.FC<TagsSelectProps> = ({
  maxTags,
  className,
  type,
  categories,
  value,
  ...props
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const MAX_TAGS = maxTags || 25;
  // Toggles selected tags in/out of array
  const toggleTag = (e: React.MouseEvent<HTMLButtonElement>, tag: string) => {
    e.preventDefault();
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      if (selectedTags.length < MAX_TAGS) {
        // Add tag if limit not reached
        setSelectedTags([...selectedTags, tag]);
      }
    }
  };
  // Set selectedTags from props.value on mount
  useEffect(() => {
    if (value) {
      setSelectedTags(value);
    }
  }, [value]);

  // Use useEffect to log state changes
  useEffect(() => {
    if (props.onChange) {
      props.onChange(selectedTags);
    }
  }, [selectedTags]);

  // Loop through each category and render filtered tags
  const renderTags = (categories: Category[]) => {
    return (
      <div className="mb-4 space-y-5  pt-5">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <>
              <Button
                className="rounded-full h-8"
                key={category.id}
                variant={
                  selectedTags.includes(String(category.id))
                    ? "default"
                    : "outline"
                }
                onClick={(e) => toggleTag(e, String(category.id))}
              >
                {category.title}
                {selectedTags.includes(String(category.id)) && (
                  <CircleX className="w-4 h-4 ml-2" />
                )}
              </Button>
            </>
          ))}
        </div>
      </div>
    );
  };

  const filteredTags = categories.filter((tag) =>
    tag.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      {/* Search Input */}
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Loop through each category and render filtered tags */}
      {filteredTags.length > 0 ? (
        renderTags(filteredTags)
      ) : (
        <p className="text-muted-foreground mt-3 text-sm">No results found</p>
      )}
    </div>
  );
};

export default TagsSelect;

const SearchInput = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <div className="mb-2">
    <Input
      placeholder="Search for topics"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>
);
