'use client'
import { useRouter } from 'next/navigation';

const SuccessPage = () => {
    const router = useRouter();

    const handleCreateProfile = () => {
        // Navigate to profile page
        router.push('/pages/createprofile');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center p-2">
                <h1 className="text-4xl font-bold mb-4">Registration Successful!</h1>
                <h1 className="text-[#EA2793] text-4xl font-bold mb-4">Welcome to MUA!</h1>
                <p className="text-lg mb-8">You can now create your profile.</p>
                <button onClick={handleCreateProfile} className="bg-[#EA2793]  hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full">
                    Create Profile
                </button>
            </div>
        </div>
    );
};

export default SuccessPage;
