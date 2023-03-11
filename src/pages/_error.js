import ErrorComponent from 'next/error';

const CustomErrorPage = ({ statusCode }) => {
  return (
    <ErrorComponent statusCode={statusCode} title="Oops, something went wrong!">
      <p>Please try again later or contact support if the problem persists.</p>
      <a href="/support">Contact support</a>
    </ErrorComponent>
  );
};

CustomErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomErrorPage;
