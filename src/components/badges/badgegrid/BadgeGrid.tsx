import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { S3Client, ListObjectsCommand,ListObjectsCommandOutput } from '@aws-sdk/client-s3';

export default function BadgeGrid() {
  const [tokens, setTokens] = useState<
  Required<ListObjectsCommandOutput>["Contents"]
>([]);

  useEffect(() => {
    const client = new S3Client({
      region: 'us-east-1',
    });

    const command = new ListObjectsCommand({ Bucket: process.env.AWS_BUCKET_NAME });
    client.send(command).then(({ Contents }) => setTokens(Contents || []));
  }, []);


  return (
    <ScrollArea className="h-[90vh] py-4 w-full rounded-md border p-4">
      <div className="grid max-sm:grid-cols-1 gap-3 max-md:grid-cols-2 grid-cols-3">
        {tokens.map((token, index) => (
          <Card
            className="max-w-[200px] flex flex-col p-4 m-auto border-none radius-lg"
            key={index}
          >
            {badgeImages[index] ? (
              <img
                alt="Badge"
                className="object-cover m-auto mb-4 rounded-lg max-h-[200px]"
                height={200}
                src="https://images.pexels.com/photos/19526761/pexels-photo-19526761/free-photo-of-photo-of-an-industrial-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={200}
              />
            ) : (
              <p>Loading...</p>
            )}
            <Button>View More</Button>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}
