'use client';
import { useRouter } from 'next/navigation';
import React, { Dispatch, SetStateAction, useState, useRef } from 'react';
import { AccountCategory } from '../../../utils/constants';
import { useAccounts } from '../api/useAccounts';
import { useSearchParams } from 'next/navigation';
import useAccountsData from '../hooks/useAccountsData';
import { Brokers } from '../../../utils/account/changeToBrokerName';
import { AccountStatus } from '../../../utils/account/getAccountStatus';
import {
  AccountsQuery,
  PageAccountsQuery
} from '../../../lib/interfaces/querys';
import { deleteQueryStringKey } from '../../../utils/account/deleteQueryStringKey';

const AccountTable = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const { newAccounts: accounts, isLast, query, setQuery } = useAccountsData();

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const onSearch = () => {
    if (searchValue || searchValue === '') {
      setQuery({ ...query, q: searchValue, _page: 1 });
      setSearchValue('');
    }
  };

  const onChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'ALL') {
      const newQuery = deleteQueryStringKey(e.target.name, query);
      setQuery(newQuery);
      return;
    }
    setQuery({ ...query, [e.target.name]: e.target.value, _page: 1 });
  };

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className=" flex items-center justify-between pb-6">
        <div className="flex items-center justify-between">
          <div className="flex bg-gray-50 items-center p-2 rounded-md">
            <input
              className="bg-gray-50 outline-none ml-1 block "
              type="text"
              placeholder="search..."
              onChange={onChange}
              value={searchValue || ''}
              onKeyPress={onKeyPress}
            />
            <button onClick={onSearch}>
              {/* FIXME: 컴포넌트로 SVG 바꾸기 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-2">
            <div>
              <select name="broker_id" onChange={onChangeFilter}>
                <option value="ALL">브로커명</option>
                {/* FIXME: 객체로 되어있는거 고치기 */}
                {Object.entries(Brokers).map((it) => (
                  <option key={it[0]} value={it[0]}>
                    {it[1]}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select name="is_active" onChange={onChangeFilter}>
                <option value="ALL">계좌 활성화 여부</option>
                <option value="true">O</option>
                <option value="false">X</option>
              </select>
            </div>
            <div>
              <select name="status" onChange={onChangeFilter}>
                <option value="ALL">계좌 상태</option>
                {Object.entries(AccountStatus).map((it) => (
                  <option key={it[0]} value={it[0]}>
                    {it[1]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {AccountCategory.map((it) => (
                    <th
                      key={it}
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      {it}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {accounts.map((it) => (
                  <tr key={it.uuid}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {it.user_id}
                        {/* TODO: user배열을 돌면서 userId가 같은 사람 이름 */}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {it.broker_id}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {it.number}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {it.status}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {it.name}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {it.assets}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {it.payments}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        {it.is_active}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {it.created_at}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* prev, next button */}
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
              <span className="text-xs xs:text-sm text-gray-900">
                {query._page}
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                {query._page > 1 && (
                  <button
                    className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l"
                    onClick={() => {
                      setQuery({ ...query, _page: query._page - 1 });
                    }}
                  >
                    Prev
                  </button>
                )}

                {!isLast && (
                  <button
                    className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
                    onClick={() => {
                      setQuery({ ...query, _page: query._page + 1 });
                    }}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTable;
