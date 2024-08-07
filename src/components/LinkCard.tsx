import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import { ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#1e1e1e" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#1e1e1e" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#1e1e1e" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function LinkCard() {
  return (
    <Card className="flex shadow-md tracking-wide flex-col w-[23rem] h-[41rem] scale-100 border-input border-[1px] border-tertiary bg-secondary/50">
      <CardHeader className="flex w-full justify-center items-center">
        <Image
          src="/srajan.jpg"
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
          priority
          className="object-cover w-24 h-24 rounded-full"
          alt="srajan"
          width={500}
          height={500}
        />

        <CardTitle className="pt-5 tracking-wide pb-1 text-xl">
          Srajan Kumar
        </CardTitle>
        <CardDescription>CSE Undergrad • Full-Stack Developer</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="links" className="w-full flex flex-col">
          <TabsList>
            <TabsTrigger value="links">Links</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="links">
            <div className="flex flex-col py-1">
              <Link href="https://srajan.tech" target="_blank">
                <Button
                  className="flex w-full justify-start py-9 rounded-xl gap-5"
                  variant="ghost"
                >
                  <div
                    className={`w-10 h-10 shadow-md bg-violet-500 bg-opacity-20 flex justify-center items-center rounded-xl`}
                  >
                    <GlobeIcon className="w-6 h-6 text-violet-500 will-change-transform will-change-opacity" />
                  </div>
                  <div className="text-start tracking-wide">
                    <p>Website</p>
                    <p className="text-xs font-light text-muted-foreground">
                      srajan.tech
                    </p>
                  </div>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/kumarsrajan/"
                target="_blank"
              >
                <Button
                  className="flex w-full justify-start py-9 rounded-xl gap-5"
                  variant="ghost"
                >
                  <div
                    className={`w-10 h-10 shadow-md bg-blue-500 bg-opacity-20 flex justify-center items-center rounded-xl`}
                  >
                    <LinkedInLogoIcon className="w-6 h-6 text-blue-500 will-change-transform will-change-opacity" />
                  </div>
                  <div className="text-start tracking-wide">
                    <p>LinkedIn</p>
                    <p className="text-xs font-light text-muted-foreground">
                      linkedin.com/in/kumarsrajan
                    </p>
                  </div>
                </Button>
              </Link>
              <Link href="https://github.com/srajankumar/" target="_blank">
                <Button
                  className="flex w-full justify-start py-9 rounded-xl gap-5"
                  variant="ghost"
                >
                  <div
                    className={`w-10 h-10 shadow-md bg-gray-500 bg-opacity-20 flex justify-center items-center rounded-xl`}
                  >
                    <GitHubLogoIcon className="w-6 h-6 text-white will-change-transform will-change-opacity" />
                  </div>
                  <div className="text-start tracking-wide">
                    <p>GitHub</p>
                    <p className="text-xs font-light text-muted-foreground">
                      github.com/srajankumar
                    </p>
                  </div>
                </Button>
              </Link>
              <Link
                href="https://www.instagram.com/withpainsimon/"
                target="_blank"
              >
                <Button
                  className="flex w-full justify-start py-9 rounded-xl gap-5"
                  variant="ghost"
                >
                  <div
                    className={`w-10 h-10 shadow-md bg-pink-500 bg-opacity-20 flex justify-center items-center rounded-xl`}
                  >
                    <InstagramLogoIcon className="w-6 h-6 text-pink-500 will-change-transform will-change-opacity" />
                  </div>
                  <div className="text-start tracking-wide">
                    <p>Instagram</p>
                    <p className="text-xs font-light text-muted-foreground">
                      instagram.com/withpainsimon
                    </p>
                  </div>
                </Button>
              </Link>
              <Link href="https://x.com/kumarsrajan02" target="_blank">
                <Button
                  className="flex w-full justify-start py-9 rounded-xl gap-5"
                  variant="ghost"
                >
                  <div
                    className={`w-10 h-10 shadow-md bg-gray-500 bg-opacity-20 flex justify-center items-center rounded-xl`}
                  >
                    <div className="w-6 flex justify-center items-center h-6 text-white will-change-transform will-change-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-start tracking-wide">
                    <p>X</p>
                    <p className="text-xs font-light text-muted-foreground">
                      x.com/kumarsrajan02
                    </p>
                  </div>
                </Button>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="projects">
            <div className="flex flex-col py-1">
              <Link href="https://quick-y.vercel.app" target="_blank">
                <Button
                  className="flex w-full justify-start py-9 rounded-xl gap-5"
                  variant="ghost"
                >
                  <Image
                    src="/projects/quick-y.png"
                    alt="Quick-y"
                    placeholder={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
                    width={500}
                    height={500}
                    className="w-10 h-10 shadow-md rounded-xl object-cover"
                  />
                  <div className="text-start tracking-wide">
                    <p>Quick-y</p>
                    <p className="text-xs font-light text-muted-foreground">
                      Time-efficient healthcare.
                    </p>
                  </div>
                </Button>
              </Link>
              <Link href="https://faceshare.vercel.app" target="_blank">
                <Button
                  className="flex w-full justify-start py-9 rounded-xl gap-5"
                  variant="ghost"
                >
                  <Image
                    src="/projects/faceshare.png"
                    alt="Faceshare"
                    placeholder={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
                    width={500}
                    height={500}
                    className="w-10 h-10 shadow-md rounded-xl object-cover"
                  />
                  <div className="text-start tracking-wide">
                    <p>Faceshare</p>

                    <p className="text-xs font-light text-muted-foreground">
                      A Link in Bio. But Rich and Beautiful.
                    </p>
                  </div>
                </Button>
              </Link>
              <Link href="https://susply.vercel.app" target="_blank">
                <Button
                  className="flex w-full justify-start py-9 rounded-xl gap-5"
                  variant="ghost"
                >
                  <Image
                    src="/projects/susply.png"
                    alt="Susply"
                    placeholder={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
                    width={500}
                    height={500}
                    className="w-10 h-10 shadow-md rounded-xl object-cover"
                  />
                  <div className="text-start tracking-wide">
                    <p>Susply</p>
                    <p className="text-xs font-light text-muted-foreground">
                      Sustainable Supply Chain solution.
                    </p>
                  </div>
                </Button>
              </Link>
              <Link
                href="https://www.srajan.tech/projects"
                target="_blank"
                className="flex justify-center items-center mt-5"
              >
                <div className="no-underline group cursor-pointer relative shadow-2xl rounded-lg p-px text-xs font-semibold leading-6 text-white inline-block">
                  <div className="relative text-xs font-medium tracking-wider flex space-x-2 items-center z-10 rounded-lg py-2 px-4 ring-1 ring-white/10">
                    <span>View all Projects</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-[aquamarine] to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </div>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
