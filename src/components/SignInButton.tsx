import { useState, useEffect } from 'react';
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  OAuthProvider,
  User 
} from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function SignInButton() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const signInWithLinkedIn = async () => {
    try {
      const provider = new OAuthProvider('linkedin.com');
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with LinkedIn:', error);
    }
  };

  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      console.error('Error signing out:', error);
    });
  };

  if (user) {
    return (
      <div className="flex gap-4 ml-auto items-center">
        <p className="text-sky-600">{user.displayName}</p>
        <button onClick={handleSignOut} className="bg-red-600 text-white px-6 py-2 rounded-md">
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <button 
        onClick={signInWithGoogle} 
        className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-md border hover:bg-gray-50 transition-colors"
      >
        <img src="/google.svg" alt="Google Logo" className="w-5 h-5" />
        <span className="hidden sm:inline">Sign in with Google</span>
      </button>
      <button 
        onClick={signInWithLinkedIn} 
        className="flex items-center gap-2 bg-[#0077b5] text-white px-4 py-2 rounded-md border border-[#0077b5] hover:bg-[#006397] transition-colors"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
        <span className="hidden sm:inline">Sign in with LinkedIn</span>
      </button>
    </div>
  );
}
