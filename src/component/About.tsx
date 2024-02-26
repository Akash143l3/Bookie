import { Footer } from ".";

export default function About() {
    return (
        <div>
        <div className="p-5 ">
            <div className="rounded-lg relative bg-gray-100 overflow-hidden">
                <img
                    className="object-cover object-center w-full h-64 md:h-96"
                    src="/bg2.jpg" 
                    alt="Bookstore"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="container mx-auto relative z-10 p-8 text-white">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-lg mb-6">
                        Welcome to our charming book emporium! Immerse yourself in a world of literary wonders as we curate the finest
                        selection of books for every reader. Our passion for reading and commitment to quality ensures an enriching
                        experience for all book enthusiasts.
                    </p>
                    <p className="text-lg mb-6">
                        At our bookstore, we believe that every book has a story to tell, and we take pride in helping you discover
                        those stories. Our knowledgeable staff is always ready to assist you in finding the perfect book that matches
                        your interests and preferences.
                    </p>
                    <p className="text-lg mb-6">
                        Join us on a literary journey where the pages come alive with tales of adventure, romance, mystery, and
                        knowledge. Thank you for choosing us as your literary haven. We look forward to being a part of your reading
                        adventures!
                    </p>
                </div>
            </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}