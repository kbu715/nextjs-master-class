# API Routes in Next.js

---

## 클라이언트 사이드 데이터 fetching

```
fetch(`/api/user`)
  .then((res) => res.json())
  .then((data) => {
    ...
  })
```

## Routing에서 다뤘던 여러 Slug 활용법 적용 가능

- 다중 Route
- 파일 기반 / dynamic

```javascript
/api/post/create.js
/api/post/[pid].js
/api/post/[...slug].js
```


## API Middlewares

내장 Middleware의 기능

req.cookies / req.query ...

```javascript
export default function handler(req, res) {
  const { uid } = req.query;
  res.status(200).json({ name: `Paul Kang - ${uid}` });
}
```

req / res 관련 다양한 기능들은 Middleware 들을 활용할 수 있다.

ex) CORS (교차 출처 리소스 공유)

## Response

- res.status(code) // code: 상태코드

- res.json(body): serializable object

- res.redirect(code, url) // ex) res.redirect(307, '/api/...')

- res.send(body): string / object / Buffer