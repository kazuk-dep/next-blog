export type Post = {
    id: string,
    title: string,
    content: string,
    published: boolean,
    topImage: string | null,
    createdAt: Date,
    updatedAt: Date,
    author: {
        name: string
    }
}

export type PostCardProps = {post: Post}