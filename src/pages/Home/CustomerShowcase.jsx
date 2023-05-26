const CustomerShowcase = () => {
  const customerData = [
    {
      id: 1,
      name: 'John Doe',
      image: 'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg',
      review: 'I am amazed by the quality and attention to detail of the action figures I purchased. They perfectly capture the essence of my favorite superheroes!'
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
      review: 'The action toys I bought from this website have exceeded my expectations. The level of articulation and the accessories included make them perfect for creating epic battle scenes!'
    },
    {
      id: 3,
      name: 'David Johnson',
      image: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      review: 'As a lifelong fan of action figures, I can confidently say that these are some of the best I have ever owned. The attention to detail in the sculpting and painting is truly remarkable.'
    }
  ];


  return (
    <div className="container md:mx-2 my-10">
      <h2 className="text-3xl font-bold mb-4 text-center">What our customer say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {customerData.map((customer) => (
          <div key={customer.id} className="bg-base-200 p-2 rounded-lg shadow-md">
            <img
              src={customer.image}
              alt={customer.name}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{customer.name}</h3>
            <p className="text-gray-600">{customer.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerShowcase;