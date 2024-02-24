import { NextResponse, NextRequest } from 'next/server';
import {PutObjectCommand, S3Client} from '@aws-sdk/client-s3'
export async function POST(req: NextRequest, res: NextResponse) {
    const s3Client = new S3Client({
        region: process.env.AWS_S3_REGION,
        credentials:{
            accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID as string,
            secretAccessKey: process.env.AWS_S3_SECRET as string,
        }
    })

    const orgName = 'bp-test'
    const filename = 'nice'

    try {
        
        

        const params = {
            Bucket:process.env.AWS_BUCKET_NAME,
            Key:`bp-${orgName}-${filename}-${Date.now()}`,
            Body: badgeImage,
            ContentType:"image/png"
        }

        const uploadFileCommand = new PutObjectCommand(params)             
        await s3Client.send(uploadFileCommand)


    }catch(error){
        return NextResponse.error();
    }
}
