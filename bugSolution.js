```javascript
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function MyComponent() {
  const router = useRouter();
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <button onClick={() => router.push('/about')}>
        About
      </button>    </div>
  );
}

export default MyComponent;
```