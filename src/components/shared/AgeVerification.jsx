import React, { useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { useNavigate } from 'react-router-dom';

function AgeVerification() {
    const [ageVerified, setAgeVerified] = useLocalStorage('age_verified', false);
    const navigate = useNavigate();

    function handleConfirm() {
        // Set the age verification status in local storage
        setAgeVerified(true);

        // Navigate the user back to the homepage
        navigate('/');
    }

    function handleCancel() {
        // Redirect the user to the Disney Parks website
        window.location.replace('https://www.disney.co.th/parks');
    }

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        document.documentElement.scrollTop = 0;

        // Add a class to the app's root element to apply a background blur
        document.querySelector('.App').classList.add('blur-background');

        // Lock the body scroll
        document.body.style.overflow = 'hidden';

        return () => {
            // Remove the blur class and unlock the body scroll
            document.querySelector('.App').classList.remove('blur-background');
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (ageVerified) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-9999">
            <div className="bg-black bg-opacity-90 rounded-lg w-2/3 md:w-1/2 lg:w-1/3 p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-white">Age Verification</h2>
                <p className="mb-4 text-white">You must be 21 years of age or older to access this website.</p>
                <p className="mb-4 text-white">WARNING: This website contains information about cannabis and is intended for adults 21 years of age or older.</p>
                <p className="mb-4 text-white">WARNING: Cannabis products should not be used by women who are pregnant or breastfeeding. For use only by adults 21 years of age or older. Keep out of reach of children.</p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={handleConfirm}
                        className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                    >
                        Yes
                    </button>
                    <button
                        onClick={handleCancel}
                        className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AgeVerification;
