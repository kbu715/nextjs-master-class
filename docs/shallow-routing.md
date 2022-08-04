# Shallow Routing in Next.js

---

## 상태는 유지하면서 url만 바꾸고 싶은 경우

사용자가 어떤 동작을 했고, 그 기록을 query로 남기고 싶을 때

* query로 남기면 사용자가 새로고침을 해도 유지된다.

## url을 바꾸는 3가지 방식

1. location.replace(url) : 로컬 state 유지 안됨 (리렌더)

2. router.push(url): 로컬 state 유지 / data fetching은 일어남

3. router.push(url, as, { shallow: true } ): 로컬 state 유지 / data fetching x