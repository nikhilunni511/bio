import Cookies from 'cookie';

const authMiddleware = (handler) => async (ctx) => {
  const cookies = new Cookies(context.req, context.res);
  const token = cookies.get('token');

  if (!token) {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
    return {};
  }

  const componentProps =
    typeof handler.getInitialProps === 'function'
      ? await handler.getInitialProps(ctx)
      : {};

  return {
    ...componentProps,
  };
};

export default authMiddleware;