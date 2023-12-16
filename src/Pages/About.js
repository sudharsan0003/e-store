import React from 'react';

const About = () => {
  return (
    <div className='container padding'>
      <div className='col-md-12'>
        <div className='row ml-10 '>
          <h2 className='text-orange-400'>About Us:</h2>

          <p className='my-5'>
            At our Firm believe in more than just selling products; we believe
            in creating experiences, fostering connections, and bringing joy to
            our customers. Our journey began 1964 with a vision.
          </p>

          <div className='w-2/4 my-3'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdzhmDdQY1gLGCf9pGXllMjVONn5EQT8d7A&usqp=CAU'
              alt=''
            />
          </div>
          <p>
            Meet our Team Behind passionate individuals who bring a diverse
            range of skills and experiences to the table. From executive members
            of our teams dedicated level of their hard works and achivements,
            each member plays a crucial role in making our Firm in a leading
            position.
          </p>

          <p className='my-5'>
            Join Us on Our Journey Thank you for being a part of the community.
            Whether you're a longtime customer or just discovering us, we invite
            you to join us on our journey. Explore our products and experience
            the difference. Feel free to [contact us/reach out] if you have any
            questions, feedback, or just want to say hello. We look forward to
            serving you and building lasting connections. Happy shopping!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
