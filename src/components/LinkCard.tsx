"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

export default function LinkCard() {
  return (
    <Card className="flex tracking-wide flex-col w-[23rem] h-[41rem] scale-100 border-input border-[1px] border-tertiary bg-secondary/50">
      <CardHeader className="flex w-full justify-center items-center">
        <Image
          src="/srajan.jpg"
          className="object-cover w-24 h-24 rounded-full"
          alt="srajan"
          width={500}
          height={500}
        />
        <CardTitle className="pt-5 tracking-wide pb-1 text-xl">
          Srajan Kumar
        </CardTitle>
        <CardDescription>
          CSE Undergrad • Full-Stack Web Developer
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="links" className="w-full flex flex-col">
          <TabsList>
            <TabsTrigger value="links">Links</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="links">
            <div className="flex flex-col py-1">
              <Button
                className="flex w-full justify-start py-9 rounded-xl gap-5"
                variant="ghost"
              >
                <div className="w-10 h-10 bg-violet-500 bg-opacity-20 flex justify-center items-center rounded-xl">
                  <GlobeIcon className="w-6 h-6 text-violet-500 will-change-transform will-change-opacity" />
                </div>
                <div className="text-start tracking-wide">
                  <p>Website</p>
                  <p className="text-xs font-light text-muted-foreground">
                    srajan.tech
                  </p>
                </div>
              </Button>
              <Button
                className="flex w-full justify-start py-9 rounded-xl gap-5"
                variant="ghost"
              >
                <div className="w-10 h-10 bg-blue-500 bg-opacity-20 flex justify-center items-center rounded-xl">
                  <LinkedInLogoIcon className="w-6 h-6 text-blue-500 will-change-transform will-change-opacity" />
                </div>
                <div className="text-start tracking-wide">
                  <p>Linkedin</p>
                  <p className="text-xs font-light text-muted-foreground">
                    linkedin.com/in/kumarsrajan
                  </p>
                </div>
              </Button>
              <Button
                className="flex w-full justify-start py-9 rounded-xl gap-5"
                variant="ghost"
              >
                <div className="w-10 h-10 bg-pink-500 bg-opacity-20 flex justify-center items-center rounded-xl">
                  <InstagramLogoIcon className="w-6 h-6 text-pink-500 will-change-transform will-change-opacity" />
                </div>
                <div className="text-start tracking-wide">
                  <p>Instagram</p>
                  <p className="text-xs font-light text-muted-foreground">
                    instagram.com/withpainsimon
                  </p>
                </div>
              </Button>
              <Button
                className="flex w-full justify-start py-9 rounded-xl gap-5"
                variant="ghost"
              >
                <div className="w-10 h-10 bg-gray-500 bg-opacity-20 flex justify-center items-center rounded-xl">
                  <GitHubLogoIcon className="w-6 h-6 text-white-500 will-change-transform will-change-opacity" />
                </div>
                <div className="text-start tracking-wide">
                  <p>GitHub</p>
                  <p className="text-xs font-light text-muted-foreground">
                    github.com/srajankumar
                  </p>
                </div>
              </Button>
              <Button
                className="flex w-full justify-start py-9 rounded-xl gap-5"
                variant="ghost"
              >
                <div className="w-10 h-10 bg-blue-500 bg-opacity-20 flex justify-center items-center rounded-xl">
                  <TwitterLogoIcon className="w-6 h-6 text-blue-500 will-change-transform will-change-opacity" />
                </div>
                <div className="text-start tracking-wide">
                  <p>Twitter</p>
                  <p className="text-xs font-light text-muted-foreground">
                    twitter.com/kumarsrajan02
                  </p>
                </div>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="projects">Change your password here.</TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
