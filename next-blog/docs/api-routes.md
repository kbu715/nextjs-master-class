# 필기

- server-side에서는 API Routes를 사용하지 않아야 한다.
- getStaticProps / getStaticPaths 등은 client-side 코드에 포함되지 않는다.

그렇기에 서버 사이드에서는 DB에 직접 접근하는 등 훨씬 자유도 높은 작업을 할 수 있다.

## API Routes

```javascript
export default function handler(req, res) {
    res.status(200).json({ message: 'Hello World' })
}
```