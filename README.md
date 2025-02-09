# Next.js 15 App Router: legacyBehavior Link Issue

This repository demonstrates a bug encountered when using the `legacyBehavior` prop with `next/link` in Next.js 15's App Router. The `About` link fails to navigate correctly.  This is likely due to a conflict between the new router's behavior and the legacy approach.  The solution demonstrates a workaround to achieve the desired navigation functionality.

## Bug

The provided `bug.js` file shows a simple component with two links. The link to `/` works as expected, while the link to `/about` using `legacyBehavior` does not function correctly within the App Router environment.

## Solution

The `bugSolution.js` file demonstrates a fix by using the new `next/navigation`'s `useRouter` hook.  This solution dynamically generates the `href` for the About link which resolves the navigation issue.

## Setup

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the broken link in the `bug` directory and the fixed link in the `bugSolution` directory.