"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react"
import { Skeleton } from "@nextui-org/skeleton";
import {Spinner} from "@nextui-org/spinner"

export default function page() {
    const [isLoaded, setIsLoaded] = React.useState(false);

    const toggleLoad = () => {
        setIsLoaded(!isLoaded);
      };

    return (
        <>
        <Card className="max-w-sm m-auto">
            <CardHeader>
                <h1 className={title({ color: "violet" })}>Verify&nbsp;</h1>
            </CardHeader>
            <CardBody>
                <div className="flex flex-row items-center gap-4">
                    <Input type="text" label="Verification Code"  isRequired />
                    <Button variant="flat" color="primary" size="lg" radius="full" onPress={toggleLoad}  >
                        {isLoaded?<IconArrowRight />:<Spinner/>}
                    </Button>
                </div>
            </CardBody>
        </Card>



        <Card
      isFooterBlurred
      radius="lg"
      className="max-w-sm m-auto mt-4 border-none"
    >
        <Skeleton isLoaded={isLoaded}>

      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="/images/hero-card.jpeg"
        width={200}
      />
        </Skeleton>

      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <Skeleton isLoaded={isLoaded}>
        <p className="text-tiny text-white/80">@shivamjainn</p>
        </Skeleton>
        <Button className="text-white text-tiny bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Visit
        </Button>
      </CardFooter>
        </Card>


        </>

    );
}
