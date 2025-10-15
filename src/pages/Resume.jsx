import React from 'react'

function Resume() {
    return (
        <div className="flex flex-col  items-center justify-center min-h-screen bg-gray-100 p-6"
        >
            <h1 className="text-3xl font-bold my-10 mb-6">My Resume</h1>
            <iframe
                src="../src/assets/Manoj(Resume01).pdf"
                title="Manoj KR Resume"
                className="w-full h-[800px] border rounded-lg"
            />
            <a
                href="/ManojResume.pdf"
                download
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
                Download Resume
            </a>
        </div>
    );
}

export default Resume
