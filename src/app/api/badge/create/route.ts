import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';


export async function POST(req: NextRequest, res: NextResponse) {
  const prisma = new PrismaClient();

  try {
    // Read the stream as text and parse it as JSON
    const bodyText = await req.formData();
    console.log(bodyText);
    
    

    const badgeName = bodyText.get('badgeName') as string;
    const badgeDesc = bodyText.get('badgeDesc') as string;
    const username_id = bodyText.get('username_id') as string;


    // Your S3 image upload code
    const s3Client = new S3Client({
      region: process.env.AWS_S3_REGION,
      credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_S3_SECRET as string,
      },
    });

    const badgeImage = bodyText.get('badge_pic') as File;
    const badgeImageBuffer = await badgeImage.arrayBuffer();
    const badgeImageBufferArray = new Uint8Array(badgeImageBuffer);
    const badgeImageBufferForUpload = Buffer.from(badgeImageBufferArray);

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `bp-${badgeName}-${username_id}-${Date.now()}.png`, // Adjust the key as needed
      Body: badgeImageBufferForUpload, // Use the actual image data from the request
      ContentType: 'image/png',
    };

    const uploadFileCommand = new PutObjectCommand(params);
    const uploadResult = await s3Client.send(uploadFileCommand);

    console.log(uploadResult);
    

    const badgePicLink = `URL/${params.Key}`; // Replace with the actual S3 URL
    const badge = await prisma.badge.create({
      data: {
        name: badgeName,
        pic: badgePicLink,
        description: badgeDesc,
        no_of_issued: 0,
        time_of_creation: new Date().toISOString(),
        creator: username_id,
      },
    });

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: {
        id: username_id, // Assuming `username_id` is the user ID
      },
    });

    if (user) {
      // Return response with badge information
      return NextResponse.json({ badge: badge });
    } else {
      return NextResponse.json({ result: 'User not found' });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}
