import { Suspense, lazy, useMemo } from 'react';
import queryString from 'query-string';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from './routes';

const loadPage = (id: string) => {
  const Page = lazy(() => import(`@/pages/${id}`));
  return (
    <Suspense fallback={<></>}>
      <Page />
    </Suspense>
  );
};

const RouterList: Array<iRouter> = [
  {
    path: ROUTES.SignIn,
    element: loadPage('SignIn'),
    needLogin: false,
  },
  {
    path: '/',
    element: (
      <Navigate
        to={ROUTES.SignIn}
        replace
      />
    ),
    needLogin: true,
  },
  {
    path: '*',
    element: (
      <Navigate
        to={ROUTES.SignIn}
        replace
      />
    ),
    needLogin: true,
  },
];

export default RouterList;
export function useRouter() {
  const params = useParams();
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigate = useNavigate() as any;

  return useMemo(() => {
    return {
      push: navigate.push,
      replace: navigate.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
      location,
      navigate,
    };
  }, [params, location, navigate]);
}
