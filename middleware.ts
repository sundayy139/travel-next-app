import { withAuth } from 'next-auth/middleware';

export default withAuth({
  secret: process.env.SECRET,
});

export const config = {
  matcher: ['/trips', '/reservations', '/properties', '/favorites'],
};
