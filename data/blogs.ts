export interface BlogPost {
    id: string
    title: string
    excerpt: string
    content: string
    date: string
    image: string
    author: string
    category: string
}

export const blogs: BlogPost[] = [
    {
        id: 'how-to-choose-the-best-suzuki-motorcycles-dealer-in-coimbatore',
        title: 'How to Choose the Best Suzuki Motorcycles Dealer in Coimbatore',
        excerpt: 'Imagine you’ve just entered your first Suzuki motorcycles dealer in your life in Coimbatore. The buzz of excitement, shiny bikes everywhere, the feeling of possibilities...',
        content: `
      <p class="mb-4">Imagine you’ve just entered your first Suzuki motorcycles dealer in your life in Coimbatore. The buzz of excitement, shiny bikes everywhere, the feeling of possibilities that come with the freedom of two wheels all come over you. You can start remember the feeling of the first time you went from casually browsing to that first ride. Upon entering the dealership I would hope that you’re greeted as not only a customer but as part of the Suzuki family at Adharvaa Suzuki, your Suzuki dealer partner.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Why the Right Suzuki Dealer Matters</h2>
      <p class="mb-4">Choosing a dealer isn’t just about the transaction; it’s about the relationship. A good dealer supports you through the entire lifecycle of your vehicle, from purchase to maintenance and eventual upgrade.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Peace of Mind Beyond Purchase</h3>
      <p class="mb-4">A reputable dealer ensures that your paperwork is handled correctly, your warranty is secure, and you have a reliable point of contact for any issues.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">7 Power Tips to Choose the Best Suzuki Motorcycle Dealer</h2>
      <ul class="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Choose from a Wide Range:</strong> Look for a dealer with a comprehensive inventory so you can compare models side-by-side.</li>
        <li><strong>Transparent Pricing:</strong> The best dealers are upfront about costs, including on-road pricing, insurance, and accessories.</li>
        <li><strong>Test Ride Availability:</strong> Never buy without trying. Ensure the dealer offers test rides for the models you're interested in.</li>
        <li><strong>Certified Technicians:</strong> Post-sales service is crucial. Check if their service center is staffed by trained professionals.</li>
        <li><strong>Genuine Parts:</strong> Ensure they use and sell authentic Suzuki spare parts.</li>
        <li><strong>Customer Reviews:</strong> Check online ratings and testimonials to gauge other customers' experiences.</li>
        <li><strong>Location:</strong> A convenient location makes service visits much easier.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4">Service Experience: The Silent Hero</h2>
      <p class="mb-4">The relationship doesn't end when you ride out of the showroom. Regular maintenance is key to the longevity of your bike. Adharvaa Suzuki prides itself on a state-of-the-art service center with quick turnaround times.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Bringing It All Together</h2>
      <p class="mb-4">Your journey with a Suzuki two-wheeler should be exciting and stress-free. By choosing the right dealer, you ensure that you have a partner for every mile of the road ahead.</p>
    `,
        date: 'October 15, 2023',
        image: '/images/blogs/choose-dealer.jpg',
        author: 'Adharvaa Suzuki',
        category: 'Guide'
    },
    {
        id: 'adharvaa-suzuki-customer-support-call-for-excellence',
        title: 'Adharvaa Suzuki Customer Support: Call +91-89400 57000 for Excellence',
        excerpt: 'Experience top-tier customer support with Adharvaa Suzuki. We are just a call away for all your sales and service needs. Our dedicated team forces on customer satisfaction.',
        content: `
            <p class="mb-4">At Adharvaa Suzuki, we believe that the sale is just the beginning of our relationship with you. Our dedicated customer support team is always ready to assist you with any queries, service bookings, or roadside assistance needs.</p>
            <h2 class="text-2xl font-bold mt-6 mb-3">Why Choose Adharvaa Support?</h2>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li><strong>24/7 Assistance:</strong> We are always reachable for emergency support.</li>
                <li><strong>Expert Guidance:</strong> Our staff is trained to handle technical and non-technical queries.</li>
                <li><strong>Seamless Booking:</strong> Schedule services or test rides with a single call.</li>
            </ul>
            <p>Call us today at <a href="tel:+918940057000" class="text-suzuki-blue font-bold">+91-89400 57000</a> to experience the difference.</p>
        `,
        date: 'October 12, 2023',
        image: '/images/blogs/customer-support.jpg',
        author: 'Adharvaa Suzuki',
        category: 'Support'
    },
    {
        id: 'suzuki-two-wheelers-engineering-excellence',
        title: 'Suzuki Two-Wheelers: Engineering Excellence on Two Wheels',
        excerpt: 'Discover the innovation and engineering prowess behind every Suzuki two-wheeler. Performance, reliability, and style combined in every machine.',
        content: `
            <p class="mb-4">Suzuki has always been synonymous with engineering excellence. From the race tracks of MotoGP to the city streets of Coimbatore, Suzuki engines are built to perform.</p>
            <h2 class="text-2xl font-bold mt-6 mb-3">SEP Technology</h2>
            <p class="mb-4">Suzuki Eco Performance (SEP) is a new developmental concept proposed by Suzuki. It inherits the technology nurtured in the MotoGP racing and delivers both low fuel consumption and superior acceleration.</p>
            <h2 class="text-2xl font-bold mt-6 mb-3">SOCS - Suzuki Oil Cooling System</h2>
            <p class="mb-4">First introduced in the Gixxer 250 series, SOCS is a breakthrough technology that offers rapid cooling, higher durability, and a compact engine design.</p>
        `,
        date: 'October 10, 2023',
        image: '/images/blogs/engineering-excellence.jpg',
        author: 'Adharvaa Suzuki',
        category: 'Technology'
    },
    {
        id: 'experience-the-best-sales-journey-coimbatore',
        title: 'Experience the Best Sales Journey at Adharvaa Suzuki – Coimbatore\'s Leading Dealer',
        excerpt: 'From inquiry to delivery, find out why Adharvaa Suzuki is the preferred choice for two-wheeler buyers in Coimbatore. We make buying a bike a celebration.',
        content: `
            <p class="mb-4">Buying a two-wheeler is a milestone event for many. At Adharvaa Suzuki, we ensure that this moment is celebrated with the grandeur it deserves.</p>
            <h2 class="text-2xl font-bold mt-6 mb-3">Our Sales Process</h2>
            <ol class="list-decimal pl-5 space-y-2 mb-4">
                <li><strong>Warm Welcome:</strong> You are greeted by our friendly staff who understand your needs.</li>
                <li><strong>Product Demo:</strong> Get a detailed walkthrough of the features and benefits.</li>
                <li><strong>Test Ride:</strong> Experience the ride quality firsthand.</li>
                <li><strong>Finance & Exchange:</strong> Hassle-free documentation and best exchange values.</li>
                <li><strong>Grand Delivery:</strong> A memorable delivery ceremony for you and your family.</li>
            </ol>
        `,
        date: 'October 08, 2023',
        image: '/images/blogs/sales-journey.jpg',
        author: 'Adharvaa Suzuki',
        category: 'Experience'
    },
    {
        id: 'how-to-choose-the-best-scooters-for-comfortable-ride',
        title: 'How to Choose the Best Scooters for a Comfortable Ride',
        excerpt: 'Looking for comfort? We break down the key features to look for in a scooter to ensure a smooth and fatigue-free ride for your daily commute.',
        content: `
            <p class="mb-4">Comfort is king when it comes to daily commuting. Whether you are navigating traffic or cruising on the highway, your scooter should not tire you out.</p>
            <h2 class="text-2xl font-bold mt-6 mb-3">Key Factors for Comfort</h2>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Seat Cushioning:</strong> Look for a long and wide seat with optimal foam density.</li>
                <li><strong>Suspension:</strong> Telescopic front suspension is a must for rough roads.</li>
                <li><strong>Leg Space:</strong> Ensure there is enough room for your legs and some luggage.</li>
                <li><strong>Ergonomics:</strong> The handlebar position should not strain your shoulders.</li>
            </ul>
            <p>The <strong>Suzuki Access 125</strong> and <strong>Burgman Street</strong> are class leaders in comfort.</p>
        `,
        date: 'October 05, 2023',
        image: '/images/blogs/choose-scooter.jpg',
        author: 'Adharvaa Suzuki',
        category: 'Guide'
    },
    {
        id: 'how-to-find-the-right-two-wheeler-dealer',
        title: 'How to Find The Right Two-Wheeler Dealer For Your Needs?',
        excerpt: 'A checklist of what to look for when selecting a motorcycle or scooter dealership to ensure you get the best deal and service.',
        content: `
            <p class="mb-4">Finding the right dealer is as important as finding the right bike. A good dealer will support you throughout your ownership experience.</p>
            <h2 class="text-2xl font-bold mt-6 mb-3">Dealer Checklist</h2>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Inventory:</strong> Do they have the model and color you want in stock?</li>
                <li><strong>Service Infrastructure:</strong> Is the workshop well-equipped?</li>
                <li><strong>Staff Knowledge:</strong> Can the sales team answer your technical questions?</li>
                <li><strong>Transparency:</strong> Are there hidden charges in the on-road price?</li>
            </ul>
            <p>Adharvaa Suzuki checks all these boxes and more!</p>
        `,
        date: 'October 01, 2023',
        image: '/images/blogs/find-dealer.jpg',
        author: 'Adharvaa Suzuki',
        category: 'Tips'
    },
    {
        id: 'ultimate-two-wheeler-shopping-guide',
        title: 'Your Ultimate Two-Wheeler Shopping Guide and Choosing The Right One',
        excerpt: 'Confused by options? Our shopping guide helps you navigate the specs and features to find the bike that fits your lifestyle perfectly.',
        content: `
            <p class="mb-4">With so many options in the market, choosing the right two-wheeler can be overwhelming. Here is a simple guide to help you decide.</p>
            <h2 class="text-2xl font-bold mt-6 mb-3">Identify Your Need</h2>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Commuter:</strong> Focus on mileage and comfort (e.g., Access 125).</li>
                <li><strong>Enthusiast:</strong> Focus on performance and handling (e.g., Gixxer SF 250).</li>
                <li><strong>Touring:</strong> Focus on stability and power (e.g., V-Strom SX).</li>
            </ul>
            <h2 class="text-2xl font-bold mt-6 mb-3">Set a Budget</h2>
            <p>Don't forget to include insurance, accessories, and registration costs in your budget.</p>
        `,
        date: 'September 28, 2023',
        image: '/images/blogs/shopping-guide.jpg',
        author: 'Adharvaa Suzuki',
        category: 'Buying Guide'
    },
    {
        id: 'how-to-become-a-pro-at-scooter-riding',
        title: 'How to Become a Pro at Scooter Riding?',
        excerpt: 'Master the art of scooter riding with these essential tips for safety, balance, and traffic navigation. Become a confident rider today.',
        content: `
            <p class="mb-4">Riding a scooter is easy, but riding it safely and efficiently requires skill. Here are some tips to help you ride like a pro.</p>
            <h2 class="text-2xl font-bold mt-6 mb-3">Pro Tips</h2>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Look Ahead:</strong> Don't just look at the road immediately in front of you; scan the road ahead to anticipate hazards.</li>
                <li><strong>Braking:</strong> Use both brakes simultaneously for stable stopping power. Combi-Brake System (CBS) in Suzuki scooters helps with this.</li>
                <li><strong>Cornering:</strong> Slow down before the turn, look through the turn, and accelerate gently out of it.</li>
                <li><strong>Balance:</strong> Practice slow-speed maneuvering to improve your balance in traffic.</li>
            </ul>
        `,
        date: 'September 25, 2023',
        image: '/images/blogs/pro-riding.jpg',
        author: 'Adharvaa Suzuki',
        category: 'Riding Tips'
    },
    {
        id: 'guide-to-two-wheeler-license-documentation',
        title: 'A Complete Guide To Two-Wheeler License Documentation',
        excerpt: 'Everything you need to know about getting your two-wheeler license, from required documents to the application process.',
        content: `
            <p class="mb-4">Getting your driving license is the first step towards independent mobility. Here is a quick guide on the documentation required.</p>
            <h2 class="text-2xl font-bold mt-6 mb-3">Required Documents</h2>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Age Proof:</strong> Birth Certificate, 10th Marksheet, or Passport.</li>
                <li><strong>Address Proof:</strong> Aadhar Card, Voter ID, or Utility Bill.</li>
                <li><strong>Photos:</strong> Passport-sized photographs.</li>
                <li><strong>Form 1 & 1A:</strong> Medical fitness declaration (if applicable).</li>
            </ul>
            <p>Our team at Adharvaa Suzuki can guide you through the LLR and Driving License application process when you buy a vehicle from us.</p>
        `,
        date: 'September 20, 2023',
        image: '/images/blogs/license-guide.jpg',
        author: 'Adharvaa Suzuki',
        category: 'RTO Services'
    },
    {
        id: 'effortless-suzuki-care-service-plans',
        title: 'Effortless Suzuki Care: Adharvaa’s Stress-Free Service Plans',
        excerpt: 'Keep your bike in top condition with our comprehensive service plans designed for your peace of mind. Save money and extend your vehicle life.',
        content: `
            <p class="mb-4">Regular service is the secret to a long-lasting vehicle. Adharvaa Suzuki offers various service plans to make maintenance affordable and easy.</p>
            <h2 class="text-2xl font-bold mt-6 mb-3">Benefits of AMC (Annual Maintenance Contract)</h2>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Cost Savings:</strong> Significant discounts on labor and parts.</li>
                <li><strong>Priority Service:</strong> Skip the queue with prior booking.</li>
                <li><strong>Peace of Mind:</strong> Regular check-ups prevent major breakdowns.</li>
                <li><strong>Resale Value:</strong> A well-maintained service record increases resale value.</li>
            </ul>
            <p>Visit our service center today to enroll in a plan that suits you.</p>
        `,
        date: 'September 15, 2023',
        image: '/images/blogs/service-plans.jpg',
        author: 'Adharvaa Suzuki',
        category: 'Service'
    },
]
