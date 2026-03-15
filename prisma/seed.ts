import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    //クリーンアップ
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();

    const hashedPassword = await bcrypt.hash("password", 10);

    const dummyImages = ["https://picsum.photos/600/400",
        "https://picsum.photos/600/400"]

        const user = await prisma.user.create({
            data: {
                email: 'test@example.com',
                name: 'Test User',
                password: hashedPassword, 
                posts: {
                    create: [
                        {   title: "First Post",
                            content: "初めての投稿です！",
                            published: true,
                            topImage: dummyImages[0]
                        },
                        {   title: "Second Post",
                            content: "2つ目の投稿です!",
                            published: true,
                            topImage: dummyImages[1]
                            ,}
                    ]
                }
            }
        })

console.log({ user })
    }

main().catch((e)=> {
    console.error(e)
    // 0 → 正常終了
    // 1 → エラー終了
    process.exit(1)
}).finally(async()=> {
    await prisma.$disconnect()
})