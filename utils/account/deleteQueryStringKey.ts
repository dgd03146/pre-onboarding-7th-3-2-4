import { PageAccountsQuery } from '../../lib/interfaces/querys';

export const deleteQueryStringKey = (key: string, query: PageAccountsQuery) => {
  if (key === 'broker_id') {
    delete query.broker_id;
  }
  if (key === 'is_active') {
    delete query.is_active;
  }
  if (key === 'status') {
    delete query.status;
  }
  if (key === 'q') {
    delete query.q;
  }

  return query;
};
