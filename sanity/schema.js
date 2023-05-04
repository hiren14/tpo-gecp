import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import post from './schemas/post'
import placed from './schemas/placed'
import sdata from './schemas/sdata'
import Comment from 'postcss/lib/comment'


export const schema = {
  types: [post,Comment, author, category, blockContent,placed,sdata],
}
