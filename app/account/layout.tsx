import AccountList from './AccountList';

export default function AccountLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div>
        <AccountList />
        <div>{children}</div>
      </div>
    </main>
  );
}
