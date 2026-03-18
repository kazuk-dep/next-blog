import { formatDistanceToNow } from "date-fns"
import { ja } from "date-fns/locale"
import Link from "next/link"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { PostCardProps } from "@/types/post"

export default function PostCard({post}: PostCardProps) {
  return (
    <div>
        <Card className="hover:shadow-lg transition-shadow">
            <Link href={`/posts/${post.id}`}>
            {post.topImage && (
                <div className="relative w-full h-48">
                    {/* fill: 親要素いっぱいに表示
                        sizes: デバイス毎の画像サイズをブラウザに通知（パフォーマンス向上）
                        priority: 読み込みの優先度を上げる
                        */}
                    <Image
                    src={post.topImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className="object-cover rounded-t-md">

                    </Image>
                </div>
            )}
                <CardHeader>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-600 line-clamp-3">{post.content}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{post.author.name}</span>
                        {/* 投稿日時を「1時間前」のような相対表記に変換 */}
                        <time>{
                        formatDistanceToNow(new Date(post.createdAt),{
                            addSuffix: true,    // 「〜前」を付与
                            locale: ja  // 日本語化
                        })}</time>

                    </div>
                </CardContent>
            </Link>
        </Card>
    </div>
  )
}
