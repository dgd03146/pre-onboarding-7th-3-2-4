import { PageAccountsQuery } from '../../lib/interfaces/querys';

export const deleteQueryStringKey = (key: string, query: PageAccountsQuery) => {
  switch (key) {
    case 'broker_id':
      delete query.broker_id;
      break;
    case 'is_active':
      delete query.is_active;
      break;
    case 'status':
      delete query.status;
      break;
    case 'q':
      delete query.q;
      break;
  }

  return query;
};
