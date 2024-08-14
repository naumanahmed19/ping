/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ectqYw9kJqw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Editor from "@/components/ui/editor"
import { Container } from "@/components/base/container"
import TeamSwitcher from "@/components/team-switcher"
import { Sidebar } from "./sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Text , ImagePlay, Link, Image, DockIcon, Type, Paperclip, Mic} from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"

export default function Component() {


  return (
    <Container>
      <Card className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10 border-none shadow-none">
        <CardHeader>
          {/* <CardTitle className="text-3xl font-bold">Add a New Recipe</CardTitle>
        <CardDescription>Fill out the form below to add a new recipe.</CardDescription> */}
        </CardHeader>
        <CardContent>
       
              <form className="grid grid-cols-1 gap-6 ">
                <div className="grid gap-4">
                  <TeamSwitcher />

                 <div>
                 <TooltipProvider>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Type className="size-4" />
                      <span className="sr-only">Use Microphone</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Use Microphone</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <ImagePlay className="size-4" />
                      <span className="sr-only">Use Microphone</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Use Microphone</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Link className="size-4" />
                      <span className="sr-only">Use Microphone</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Use Microphone</TooltipContent>
                </Tooltip>

             
                 <ToggleGroup type="single" data-orientation="vertical"  className="justify-left">
                  <ToggleGroupItem value="a" >
                  <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Type className="size-4" />
                      <span className="sr-only">Attach file</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Attach File</TooltipContent>
                </Tooltip>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="b"> <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <ImagePlay className="size-4" />
                      <span className="sr-only">Attach file</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Attach File</TooltipContent>
                </Tooltip></ToggleGroupItem>
                  <ToggleGroupItem value="c"> <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Link className="size-4" />
                      <span className="sr-only">Attach file</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Attach File</TooltipContent>
                </Tooltip></ToggleGroupItem>
                </ToggleGroup>
                </TooltipProvider>
                 </div>
              
                  {/* <div className="grid gap-2">
              <Label htmlFor="title" className="text-sm font-medium">
                Recipe Title
              </Label>
              <Input id="title" placeholder="Grandma's Homemade Lasagna" />
            </div> */}
                  <div className="grid gap-2 mt-4">

                    <div id="editorjs-container">

                      <Editor />

                    </div>
                  </div>
      
                  <div className="flex items-center gap-4">
                    {/* <Button>
              Save Post
            </Button> */}


<div>
     
      <div className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
    
        <div>Save as draft</div>
        <Separator orientation="vertical" />
        <Button>
                      Publish Post
                    </Button>
      </div>
    </div>

    
          
                  </div>
                </div>

              </form>
         


        </CardContent>


      </Card>


    </Container>
  )
}