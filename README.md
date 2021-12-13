# React Router Dom v6(New) Review

**Written by lemidia**

Several code changes have been made with the major upgrade from version 5 to version 6, which are briefly described.

버전 5에서 버전 6으로의 주요 업그레이드와 함께 몇 가지 코드가 변경되었으며 이에 대해서 간략하게 다룹니다.

This tutorial use {JSON} Placeholder which is free fake API for testing and prototyping.

예제 코드에서는 유명한 json placeholder API를 사용합니다.  
https://jsonplaceholder.typicode.com/

## BrowserRouter as Router

It goes same as before. Nothing change.  
React Router Dom의 최상위 컴포넌트인 Router는 기존과 같게 유지.

Routes and other components can go within Router.
Routes를 포함하여 다른 컴포넌트들을 포함할 수 있다. (Nav or Footer Etc...)

**Example**

```javascript
<Router>
  <nav>
    Main Navigate Menu : <Link to="/">Home</Link> <Link to="/posts">Posts</Link>{" "}
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/posts/:id" element={<Post />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</Router>
```

## Routes

**여러 페이지로 분기하는 Route를 포함하는 컴포넌트**

Switch has been replaced with Routes.  
더 이상 Switch는 존재하지 않고, Routes라는 컴포넌트로 대체

Components except Route and React.Fragment cannot go within Routes.  
Route와 Fragment를 제외한 다른 컴포넌트는 올 수 없다.  
Error Code : All component children of <Routes> must be a <Route> or <React.Fragment>

## Route

A component that is basically used to allocate individual pages.  
Write the desired address to path and JSX component to element.

기본적으로 개별 페이지를 할당할 때 쓰는 컴포넌트.  
path에 원하는 주소를, element에는 JSX 컴포넌트를 기입하여 준다.

**Example**

'component' property has been replaced with 'element' property
기존의 component를 명시하는 property는 element로 대체되었다.

```javascript
<Route path='pathname' element=<JSX Component>/>
```

No longer using 'exact'  
더 이상 'exact' 를 쓰지 않는다.

**Usage**

Routing to the page of a post with a specific id.  
특정 id를 가지는 포스트의 페이지로의 라우팅

```javascript
<Route path="/posts/:id" element={<Post />} />
```

Anywhere other than predefined routing points in the application (page 404).  
어플리케이션에서 사전에 정의된 라우팅 포인트외의 다른 모든 곳 (404 페이지)

```javascript
<Route path="*" element={<NotFound />} />
```

## Link

<a> 태그를 대체하고 브라우저 리프레싱이 없이 다른 주소의 페이지를 탐색할 수 있게 하는 컴포넌트. 기존과 차이가 없다.  
It goes same as before. Nothing change.

**Example**

```javascript
<Link to="/about">About</Link>
```

- **Next.js의 Link와 다르므로 주의!**

## useNavigate

useHistory has been replaced with useNavigate.  
Programmatic 하게 다른 페이지로의 이동을 가능하게 하는 함수라고 볼 수 있다.

**Usage**

- Define useNavigate Hook

```javascript
const navigate = useNavigate();
```

- To go specific page or url

```javascript
<div
    key={index}
    onClick={() => {
    navigate(`/posts/${post.id}`);
    }}
>
```

- Go Back 1 Level

```javascript
<div
    key={index}
    onClick={() => {
    navigate(-1);
    }}
>
```

## useParams

You can get the parameter value (:parameter) specified in the route.  
라우트에서 명시한 매개변수 값(:parameter)을 가져올 수 있다.

Below is a route to a page with a specific id value.  
아래는 특정 id 값을 가지는 포스트로의 페이지로 가는 Route 이다.

**Example**

:id를 사용함으로써 id를 키값으로 하는 url로의 페이지를 라우팅할 수 있다.
By using :id you can route a page to a url with specific parameters.

```javascript
<Route path="/posts/:id" element={<Post />} />
```

Use useParams to extract the value of a specific parameter. (in this case : id)  
useParams를 사용하여 특정 패러매터의 값을 추출한다. (여기서는 id)

```javascript
const { id } = useParams();
```

You can fetch information of a specific product or post related to id.  
id와 관련되는 특정 제품이나 포스트의 정보를 fetch할 수 있다. (예제 참고)

This is very useful when dealing with individual pages dealing with products or posts with a specific id.  
특정 id를 갖는 제품이나 포스트를 다루는 개별 페이지를 다룰 때 매우 유용하다.

## useLocation

You can get the current page url or pathname.  
현재 페이지 url 또는 path를 가져올 수 있다.

**Usage**

- Define useLocation Hook and Destructure pathname

```javascript
const { pathname } = useLocation();
```

- print pathname of the current page

```javascript
console.log(pathname);
```

If current url is "http://localhost:3000/posts/1" then pathname will be "/posts/1".
