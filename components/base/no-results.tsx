import React from "react";

// Define the props for the NoResults component
interface NoResultsProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

// Update the NoResults component to accept props
const NoResults: React.FC<NoResultsProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-center justify-center h-48">
      <div className="text-center space-y-1">
        <div className="w-10 h-10 mx-auto my-5 text-muted/95">{icon}</div>
        <h2 className="font-bold">{title}</h2>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
};

export default NoResults;
