/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mf9HSg9boUM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Circle, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CommunityHoverCard from "@/components//community/community-hover-card";
export default function Component({ community }) {
  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden dtransition-all duration-300 hover:shadow-2xl">
      <CardContent className="p-6 bg-background">
        <CommunityHoverCard community={community}>
          <>
            <h3 className="text-xl font-bold mb-2">{community.text}</h3>
            <h4 className="text-sm font-bold mb-2">{community.title}</h4>
          </>
        </CommunityHoverCard>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground">
            {community.description}
          </span>
        </div>
        <Button variant="outline" className="w-full">
          Join Now
        </Button>
      </CardContent>

      <CardFooter className="  border-t px-6 py-3">
        <div className="flex h-10 items-center space-x-4 text-sm">
          <div className="center gap-2">
            <div className="text-lg">{community.members}</div>
            <span className="text-sm text-muted-foreground">Members</span>
          </div>
          <Separator orientation="vertical" />
          <div className="center gap-2">
            <div className="text-lg">{community.online}</div>
            <span className="text-sm text-muted-foreground">
              <div className="flex items-center">
                <Circle
                  size="8"
                  fill="#01a816"
                  strokeWidth={0}
                  className="mr-2"
                />
                Online
              </div>
            </span>
          </div>
          <Separator orientation="vertical" />
          <div className="center gap-2">
            <div className="flex items-center ">
              <div className="text-lg">{community.rank} </div>
              <Award size="14" className="mr-2" />
            </div>
            <span className="text-sm text-muted-foreground">Rank</span>
          </div>
        </div>
      </CardFooter>

      <CardContent className="p-6 bg-background">
        <h4 className="text-sm font-bold mb-2">Rules</h4>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground">
            {community.rules}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
