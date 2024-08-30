"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Container } from "@/components/base/container";
import { CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { popularPosts, Post } from "@/data/posts";
import { ContainerContent } from "@/components/base/container-content";
import PostsList from "@/components/posts/posts-lists";
import { ContainerAside } from "@/components/base/container-aside";
import { PostsRightSidebar } from "@/components/posts/PostsRightSidebar";
import { useGetPosts } from "@/queries/posts.query";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";

export default function PopularPageContnet() {
  const { data: posts, isLoading, isError } = useGetPosts();

  return (
    <>
      <Container className="space-y-5 mb-0">
        <Carousel>
          <CarouselPrevious className="left-0" />
          <CarouselContent className="flex w-[300px] space-x-0">
            {popularPosts.map((post: Post, i) => (
              <CarouselItem key={i}>
                <div className="p-1">
                  <div className="w-full max-w-sm mx-auto bg-gray-100 shadow-sm rounded-lg overflow-hidden">
                    <div className="relative">
                      {/* Background Image */}
                      <img
                        src={post.image ?? ""}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black "></div>

                      {/* Text on Image */}
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
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="right-0" />
        </Carousel>

        <div className="flex items-start justify-between gap-4">
          <ContainerContent>
            <BaseDataPlaceholder
              isLoading={isLoading}
              count={5}
              isError={isError}
              variant="posts-list"
            >
              <PostsList posts={posts} />
            </BaseDataPlaceholder>
          </ContainerContent>

          <ContainerAside>
            <PostsRightSidebar />
          </ContainerAside>
        </div>
      </Container>
    </>
  );
}
