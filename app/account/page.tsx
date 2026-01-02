import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Header from '@/components/Header';

export default async function Account() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="pt-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-3xl font-bold mb-8">Account Settings</h1>

          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h2 className="text-white text-xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1">Email</label>
                <p className="text-white">{session.user?.email}</p>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Name</label>
                <p className="text-white">{session.user?.name}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h2 className="text-white text-xl font-semibold mb-4">Membership & Billing</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white font-medium">Premium Plan</p>
                  <p className="text-gray-400 text-sm">$15.99/month</p>
                </div>
                <button className="text-blue-400 hover:text-blue-300 text-sm">Change Plan</button>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400 text-sm mb-2">Next billing date</p>
                <p className="text-white">January 15, 2026</p>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <h3 className="text-white font-medium mb-3">Payment Method</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                    <span className="text-white">•••• •••• •••• 4242</span>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 text-sm">Update</button>
                </div>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <h3 className="text-white font-medium mb-3">Billing History</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Dec 15, 2024</span>
                    <span className="text-white">$15.99</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Nov 15, 2024</span>
                    <span className="text-white">$15.99</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Oct 15, 2024</span>
                    <span className="text-white">$15.99</span>
                  </div>
                </div>
                <button className="text-blue-400 hover:text-blue-300 text-sm mt-3">View All</button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-white text-xl font-semibold mb-4">Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white">Email Notifications</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Auto-play previews</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}