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

function getButtonClassName<T extends ButtonSize>(size: T): ButtonWithClassName<T> {
  return `button-${size}`
}

const smallButtonClassName = getButtonClassName('small'); // "button-small"
const mediumButtonClassName = getButtonClassName('medium'); // "button-medium"
const largeButtonClassName = getButtonClassName('large'); // "button-large"
type Prefix = 'prop';
type Index = '1' | '2' | '3';

type DynamicKey = `${Prefix}${Index}`

type DynamicProps = {
  [key in DynamicKey]: string
}

type KeyPattern<T extends string, U extends Record<string, string | number>> = {
  [P in `${T}${Capitalize<Extract<keyof U, string>>}`]: U[P extends `${T}${Capitalize<infer K>}`
  ? K
  : never];
};
type KeyPatternZ<T extends string, U extends Record<string, string | number | boolean>> = {
  [P in `${T}${Capitalize<Extract<keyof U, string>>}`]: U[P]
}

type Users = {
  id: number;
  name: string;
  email: string;
};

type PrefixedUser = KeyPattern<"user", Users>;
type PrefixedUsers = KeyPatternZ<"user", Users>;

const user: PrefixedUsers = {
  userId: 123,
  userName: "John",
  userEmail: "john@example.com",
};


type BaseType = 'User';
type Action = 'Create' | 'Update' | 'Delete';
type TypeName = `${BaseType}${Action}`
const create: TypeName = 'UserCreate'
const modify: TypeName = 'UserUpdate'


type Section = 'home' | 'about'
type I18nKey = `translation.${Section}`
const home: I18nKey = 'translation.home'

type Attribute = 'id' | 'class' | 'data-test';
type AttributeSelector = `[${Attribute}]`;


function queryElementByAttribute<T extends HTMLElement>(selector: AttributeSelector): T[] {
  const emements = document.querySelectorAll<T>(selector)
  return Array.from(emements)
}
const idSelector: AttributeSelector = '[id]';
const elenmentId = queryElementByAttribute<HTMLDivElement>(idSelector)
const dataTestSelector: AttributeSelector = '[data-test]';
const elementsByDataTest = queryElementByAttribute<HTMLButtonElement>(idSelector)



