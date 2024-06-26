import type { Database } from '@/types/supabase'

export type User = Database['public']['Tables']['users']['Row']
export type Post = Database['public']['Tables']['posts']['Row']
export type Comment = Database['public']['Tables']['comments']['Row']
export type Like = Database['public']['Tables']['likes']['Row']
export type Retweet = Database['public']['Tables']['retweets']['Row']
export type Follow = Database['public']['Tables']['follows']['Row']

export type PostInfo = Post & { comments: Comment[]; likes: Like[]; retweets: Retweet[] }
export type PostInfoWithAuthor = Post & {
  user: User
  comments: Comment[]
  likes: Like[]
  retweets: Retweet[]
}
export type RetweetInfo = Retweet & { retweeter: User; retweetedPost: PostInfo & { user: User } }

export type Tweet =
  | {
      id: string
      author: User
      post: PostInfo
      isRetweet: false
    }
  | {
      id: string
      author: User
      post: PostInfo
      isRetweet: true
      retweeter: User
      retweetedAt: string
    }

export type FollowNotify = {
  actioner_id: string
  receiver_id: string
  action: 'follow'
  follow_id: string
}

export type PostNotify = {
  actioner_id: string
  receiver_id: string
  action: 'comment' | 'like' | 'retweet'
  post_id: string
}

export type UserMeta = User & { follows: { followee: string }[] }

export type FollowWithUser = Follow & { user: User & { follows: Follow[] } }
