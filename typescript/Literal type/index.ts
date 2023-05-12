type RouteParams = {
  userID: number;
  postSlug: string
}

type RoutePath<T extends keyof RouteParams> = T extends 'userID'
  ? `/users/${RouteParams['userID']}/posts`
  : T extends 'postSlug'
  ? `/posts/${RouteParams['postSlug']}`
  : never

const userPostsPath: RoutePath<'userID'> = '/users/123/posts';
const postPath: RoutePath<'postSlug'> = '/posts/first-post';


// Type '"/posts/first-post"' is not assignable to type '`/users/${number}/posts`'
// const wrongPostPath: RoutePath<'userId'> = '/posts/first-post';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonWithClassName<T extends ButtonSize> = `button-${T}`
