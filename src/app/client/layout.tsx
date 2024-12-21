import BottomNavigationBar from '@/components/bottom-navigation-bar';
import UsersNavbar from '@/components/users-navbar';

export default function UserLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
    <div lang="en">
      <UsersNavbar/>
      <BottomNavigationBar/>
      {children}
    </div>
    )

}