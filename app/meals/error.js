'use client';
export default function ErrorPage({ error }) {
    return (
        <main className='error'>
            <h1>Error Occured!</h1>
            <p>Something went wrong. Please try again later.</p>
        </main>
    );
}
