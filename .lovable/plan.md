

# Fix Portfolio CTA link to scroll to contact section on home page

## Problem
The Portfolio "Réserver un appel découverte" button uses `<Link to="/#contact">` but react-router doesn't handle hash scrolling when navigating between pages.

## Solution
Replace the `Link` with an `onClick` handler that navigates to `/` then scrolls to `#contact` after a short delay (same pattern used in `Navbar.tsx`).

**In `src/pages/Portfolio.tsx`** (lines 549-551):
- Import `useNavigate` from react-router-dom
- Replace the `<Link to="/#contact">` with a `<button>` or use `onClick` with `navigate("/")` followed by `setTimeout` to scroll to `#contact`

