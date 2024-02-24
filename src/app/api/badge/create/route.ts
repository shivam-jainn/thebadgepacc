import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';


export async function POST(req: NextRequest, res: NextResponse) {
  const prisma = new PrismaClient();

  try {
    const bodyText = await req.formData();
    
    

    const badgeName = bodyText.get('badgeName') as string;
    const badgeDesc = bodyText.get('badgeDesc') as string;
    const email = bodyText.get('email') as string;

    const user = await prisma.user.findUnique({
      where: {
        email: email
      },
    });

    console.log(user);
    

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

    const key_part_name = `badges/${user?.username}/${badgeName}.png`;

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key_part_name, 
      Body: badgeImageBufferForUpload, // Use the actual image data from the request
      ContentType: 'image/png',
    };

    const uploadFileCommand = new PutObjectCommand(params);
    const uploadResult = await s3Client.send(uploadFileCommand);

    const URL = `https://badgepacc.s3.ap-south-1.amazonaws.com/`; 
   
    
    
    // Check if user exists before accessing its properties
    if (user) {
      const badgePicLink = `${URL}${key_part_name}`; 
      const badge = await prisma.badge.create({
        data: {
          name: badgeName,
          pic: badgePicLink,
          description: badgeDesc,
          no_of_issued: 0,
          time_of_creation: new Date().toISOString(),
          creatorId: user.id, // Assuming user.id is a string
        },
      });
    
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
