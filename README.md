# React Router Dom v6(New) Review

**Written by lemidia**

Several code changes have been made with the major upgrade from version 5 to version 6, which are briefly described.

버전 5에서 버전 6으로의 주요 업그레이드와 함께 몇 가지 코드가 변경되었으며 이에 대해서 간략하게 다룹니다 ^^~

And I used {JSON} Placeholder which is free fake API for testing and prototyping.

예제 코드에서는 유명한 json placeholder API를 사용합니다.
https://jsonplaceholder.typicode.com/

## BrowserRouter as Router

It goes same as before. Nothing change.
React Router Dom의 최상위 컴포넌트인 Router는 기존과 같게 유지.

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

## Route

기본적으로 개별 페이지를 할당할 때 쓰는 컴포넌트.
path에 원하는 주소를, element에는 JSX 컴포넌트를 기입하여 준다.

**Example**

```javascript
<Route path='pathname' element=<JSX Component>/>
```

'component' property has been replaced with 'element' property
기존의 component를 명시하는 property는 element로 대체되었다.

No longer using 'exact'
더 이상 'exact' 를 쓰지 않는다.

## Link

<a> 태그를 대체하고 브라우저 리프레싱이 없이 다른 주소의 페이지를 탐색할 수 있게 하는 컴포넌트. 기존과 차이가 없다.

It goes same as before. Nothing change.

**Example**

```javascript
<Link to="/about">About</Link>
```

- **Next.js의 Link와 다르므로 주의!**

## useNavigate

Redirect has been replaced with useNavigate.

Programmatic 하게 다른 페이지로의 이동을 가능하게 하는 함수라고 볼 수 있다.

**Usage**

- To specific pages or url

```javascript
<div
    key={index}
    onClick={() => {
    navigate(`/posts/${post.id}`);
    }}
>

- Go Back 1 Level

<div
    key={index}
    onClick={() => {
    navigate(-1);
    }}
>
```

## useParams

페이지 주소 또는 url에서의 키와 값으로 되어있는 특정 매개변수의 값을 가져올 수 있다.

아래는 특정 id 값을 가지는 포스트로의 페이지로 가는 Route 이다.

```javascript
<Route path="/posts/:id" element={<Post />} />
```

그렇다면 위의 :id의 id를 키로하여 Post 페이지에서는 다음과 같이 값을 가져올 수 있게된다.

```javascript
const { id } = useParams();
```

그리하여 id와 관련되는 특정 제품이나 포스트의 정보를 fetch하면 되겠다. (예제 참고)

이와 같이 특정 id를 갖는 제품이나 포스트를 다루는 개별 페이지를 다룰 때 매우 유용하다.
