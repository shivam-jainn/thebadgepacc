"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { IconArrowRight } from "@tabler/icons-react";
import { Skeleton } from "@nextui-org/skeleton";
import { Spinner } from "@nextui-org/spinner";
import { useRouter } from 'next/navigation'


interface VerificationResponse {
  id: string;
  issuance_time: string; 
  issuance_id: string;
  user: {
    id: string; 
  };
  user_id: string;
  badge: {
    id: string; 
  };
  badge_id: string;
  badge_image : string;
  user_name:string;

}

export default function VerificationPage() {
  const router = useRouter()

  const [isLoaded, setIsLoaded] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [responseData, setResponseData] = useState<VerificationResponse | null>(null);

  const toggleLoad = async () => {
    setIsLoaded(!isLoaded);

    try {
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ issuance_id: verificationCode }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      
      const data = await response.json();
      
      setResponseData(data);

      
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoaded(false);
    }
  };

  const handleVerificationCodeChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
  };

  return (
    <>
      <Card className="max-w-sm m-auto">
        <CardHeader>
          <h1 className={title({ color: "violet" })}>Verify&nbsp;</h1>
        </CardHeader>
        <CardBody>
          <div className="flex flex-row items-center gap-4">
            <Input
              type="text"
              label="Verification Code"
              value={verificationCode}
              onChange={handleVerificationCodeChange}
              isRequired
            />
            <Button
              variant="flat"
              color="primary"
              size="lg"
              radius="full"
              onClick={toggleLoad}
            >
              {isLoaded ? <Spinner /> : <IconArrowRight />}
            </Button>
          </div>
        </CardBody>
      </Card>

      {responseData && (
        <Card
          isFooterBlurred
          radius="lg"
          className="max-w-sm m-auto mt-4 border-none"
        >
          <img src={responseData.badge_image} alt="Badge image" />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{responseData.user_name}</p>
        <Button className="text-white text-tiny bg-black/20" variant="flat" color="default" radius="lg" size="sm" onClick={() => router.push(`/${responseData.user_name}`)}>
      
          View Profile
        </Button>
      </CardFooter>          
        </Card>
      )}
    </>
  );
}
