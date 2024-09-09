import { getPopularPosts } from "@/actions/get-popular-posts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Post } from "@/types/Post";
import Image from "next/image";

export async function CarouselPosts() {
  const posts: Post[] = await getPopularPosts();
  return (
    <Carousel>
      <CarouselPrevious className="left-0" />
      <CarouselContent className="flex w-[300px] space-x-0">
        {posts.map((post: Post, i: number) => (
          <CarouselItem key={i}>
            <div className="p-1">
              <div className="w-full max-w-sm mx-auto bg-gray-100 shadow-sm rounded-lg overflow-hidden">
                <div className="relative">
                  {/* Background Image */}
                  <Image
                    src={post.image ?? ""}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black "></div>

                  {/* Text on Image */}
                  {post.community && (
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <CardTitle className="text-lg font-bold">
                        {post.community.title}
                      </CardTitle>
                      <p className="text-sm truncate whitespace-nowrap  w-[250px]">
                        {post.title}
                      </p>

                      <div className="flex items-center space-x-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={post.community.icon_img}
                            alt="Avatar"
                          />
                          <AvatarFallback>
                            {post.community.title.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm ">{post.community.name}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="right-0" />
    </Carousel>
  );
}
