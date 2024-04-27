import type { Database } from '@/types/supabase'

export type User = Database['public']['Tables']['users']['Row']
export type Post = Database['public']['Tables']['posts']['Row']
export type Comment = Database['public']['Tables']['comments']['Row']
export type Like = Database['public']['Tables']['likes']['Row']
export type Retweet = Database['public']['Tables']['retweets']['Row']
export type Follow = Database['public']['Tables']['follows']['Row']

export type PostInfo = Post & { comments: Comment[]; likes: Like[]; retweets: Retweet[] }
export type FollowWithUser = Follow & { user: User & { follows: Follow[] } }